import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Pages/header";
import Home from "./Pages/inicio";
import Contact from "./Pages/default";
import Search from "./Pages/search";
function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route element={<Home/>}index/>
                    <Route path="/Feedback/" element={<Contact/>}/>
                    <Route path="/Search/" element={<Search/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;