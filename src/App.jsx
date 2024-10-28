import HomePage from "./pages/HomePage"
import { Route, Routes } from "react-router-dom"
import Impressum from "./pages/Impressum"
import Datenschutz from "./pages/Datenschutz"

function App() {
    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden bg-main-background bg-auto bg-center">
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage />
                    }
                />
                <Route
                    path="/impressum"
                    element={
                        <Impressum />
                    }
                />
                <Route
                    path="/dsgvo"
                    element={
                        <Datenschutz />
                    }
                />
                <Route
                    path="*"
                    element={
                        <HomePage />
                    }
                />
            </Routes>
        </div >
    )
}

export default App
