import { ReactNode } from "react"
import { TabView } from "./TabView";

type LayoutProps = {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full flex items-center overflow-hidden">
      <div className="w-[60vw] bg-blue-800 h-screen flex flex-col items-center justify-center">
        <div className="max-w-sm">
          <h1 className="font-bold items-start mb-4 text-white text-7xl">Chat.li</h1>
          <span className="font-normal text-white text-3xl">O sistema de chat que conecta pessoas da área de TI.</span>
        </div>
      </div>

      <div className="w-[40vw] h-screen">
        <div className="max-w-9xl mx-auto p-4 h-screen flex flex-col justify-between">
          <div>
            <TabView paths={[{ name: 'login', path: '/signin' }, { name: 'cadastro', path: '/signup' }]} />
            <div className="flex flex-col items-center w-full mt-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}