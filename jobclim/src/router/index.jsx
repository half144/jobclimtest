import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import Eventos from "../components/Eventos"
import Atendimento from "../pages/Atendimento"
import Home from "../pages/Home"

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/atendimento" element={<Atendimento />}>
                        <Route path="eventos" element={<Eventos />} />
                        <Route path="amostras" element={<Eventos />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router