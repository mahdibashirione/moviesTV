import Header from "../components/Header";
import { useLocation } from "react-router-dom"

const Layout = ({ children }) => {

  const location = useLocation()
  const hideLocationName = ["/admin"]

  const isHideLocation = hideLocationName.filter(pathName => pathName === location.pathname ? true : false)



  return (
    <>
      {!isHideLocation && <Header />}
      <main>
        {children}
      </main>
    </>
  );
}

export default Layout;