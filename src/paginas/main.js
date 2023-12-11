import { Routes, Route } from "react-router-dom";

import Home from "./home";
import Produtos from "./produtos";
import Usuarios from "./usuarios";

const Main = () => (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/produtos" element={<Produtos/>} />
        <Route exact path="/usuarios" element={<Usuarios/>} />

    </Routes>


)
export default Main;
