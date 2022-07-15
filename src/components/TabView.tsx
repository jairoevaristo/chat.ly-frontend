import { Link, useLocation } from "react-router-dom"

type TabViewProps = {
  paths?: {
    path: string;
    name: string;
  }[];
}

export const TabView: React.FC<TabViewProps> = ({ paths }) => {
  const { pathname } = useLocation();

  return (
    <header className="flex items-center justify-around mb-4">
      {paths?.map((item, key) => {
        return (
          <Link to={item.path} key={key}>
            <div className={`py-2 2xl:w-60 md:w-40 border-b-2 ${pathname === item.path ? 'border-b-blue-800' : 'border-blue-200'} text-center`}>
              <span className={`uppercase ${pathname === item.path ? 'text-b-blue-800' : 'text-blue-200'} font-bold`}>{item.name}</span>
            </div>
          </Link>
        )
      })}
    </header>
  )
}