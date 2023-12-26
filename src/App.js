import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/Homepage";

function App() {
    return (
        <main className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;
