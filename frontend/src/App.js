import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function Layout({ children }) {
    return (
        <div className="bg-[#1E1E1E] min-h-screen font-sans">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Layout><HomePage /></Layout>} />
                    <Route path="/about" element={<Layout><AboutPage /></Layout>} />
                    <Route path="/projects" element={<Layout><ServicesPage /></Layout>} />
                    <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
