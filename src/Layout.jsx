import {Header, Footer} from "./components/Index";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
