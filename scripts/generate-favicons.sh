#!/usr/bin/env bash
# Genera los favicons de la SPA a partir del logo oficial de Finca.
# Reproducible: requiere ImageMagick 7 (`magick`). Ejecutar desde la raíz de `webpage/`:
#   bash scripts/generate-favicons.sh
#
# Por qué recortamos: el logo (464x334) no es cuadrado y su tagline
# "Siempre en el campo" + el wordmark "FINCA" son ilegibles a 16-32 px.
# El "escudo" (sol + disco rojo + F blanca sobre verde) es el elemento
# reconocible que se lee incluso a 16 px, así que lo centramos en un
# lienzo verde equilibrado (el wordmark FINCA arranca en y~184, pegado
# al disco rojo, por lo que no hay banda verde limpia para incluirlo).
set -euo pipefail

SRC="../design-system/assets/logo-finca.png"   # fuente oficial (color)
OUT="public"                                    # destino (servido en la raíz del sitio)
GREEN="#1f9950"                                 # verde del escudo (muestreado del PNG)

# 1) Badge ajustado: sol (y29..) + disco rojo (..183). Bottom en 182 para
#    excluir el wordmark FINCA (empieza en y~184). El verde rellena alrededor.
magick "$SRC" -crop 202x156+132+27 +repage -background none /tmp/finca_badge.png

# 2) Master cuadrado OPACO: badge centrado en cuadrado verde (margen equilibrado).
magick /tmp/finca_badge.png -background "$GREEN" -gravity center -extent 236x236 \
  -alpha remove -alpha off /tmp/finca_master_square.png

# 3) Master REDONDEADO (esquinas transparentes) para las pestañas del navegador.
magick /tmp/finca_master_square.png \
  \( +clone -alpha extract -fill black -colorize 100 \
     -fill white -draw "roundrectangle 0,0,235,235,40,40" \) \
  -alpha off -compose CopyOpacity -composite /tmp/finca_master_round.png

# 4) Exportar tamaños:
# apple-touch-icon: cuadrado OPACO a sangre (iOS aplica su propia máscara redondeada).
magick /tmp/finca_master_square.png -resize 180x180 "$OUT/apple-touch-icon.png"
# favicons de pestaña: redondeados con transparencia.
magick /tmp/finca_master_round.png -resize 32x32 "$OUT/favicon-32x32.png"
magick /tmp/finca_master_round.png -resize 16x16 "$OUT/favicon-16x16.png"
# .ico multi-tamaño (16/32/48) para compatibilidad heredada.
magick /tmp/finca_master_round.png -resize 48x48 /tmp/finca_48.png
magick /tmp/finca_master_round.png -resize 32x32 /tmp/finca_32.png
magick /tmp/finca_master_round.png -resize 16x16 /tmp/finca_16.png
magick /tmp/finca_16.png /tmp/finca_32.png /tmp/finca_48.png "$OUT/favicon.ico"

echo "Favicons generados en $OUT/:"
ls -la "$OUT"/favicon-16x16.png "$OUT"/favicon-32x32.png "$OUT"/apple-touch-icon.png "$OUT"/favicon.ico
