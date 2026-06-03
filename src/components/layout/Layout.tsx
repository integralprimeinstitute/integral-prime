import BackToTop from "../common/BackToTop"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        <Header/>
        <main>{children}</main>
        <Footer/>
        <BackToTop/>
    </>
  )
}

export default Layout