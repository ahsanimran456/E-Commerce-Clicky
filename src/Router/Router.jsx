import { Route, Routes } from "react-router-dom"
import Site from "../Containers/Site/Site";
function Router() {
    return (
        <Routes>
            <Route path="/" element={<Site />} />
        </Routes>
    )
}

export default Router;