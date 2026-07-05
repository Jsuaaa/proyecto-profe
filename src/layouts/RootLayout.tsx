import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/navigation/Navbar'
import { Footer } from '@/components/navigation/Footer'
import { FloatingAction } from '@/components/core/FloatingAction'
import { PhoneIcon } from '@/components/icons'

/* ============================================================
   RootLayout — chrome compartido en todas las rutas:
   Navbar sticky + <Outlet/> + Footer + FloatingAction (FAB).
   ------------------------------------------------------------ */
export function RootLayout() {
  return (
    <div className="flex min-h-svh flex-col bg-surface text-finca-ink">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingAction
        tone="yellow"
        label="Ayuda y contacto"
        to="/contactanos"
        className="fixed bottom-6 right-6 z-[60]"
      >
        <PhoneIcon className="h-6 w-6" />
      </FloatingAction>
    </div>
  )
}
