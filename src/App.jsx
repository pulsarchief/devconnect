// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <Navbar />
                <main className="p-4">
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="/about"
                            element={<About />}
                        />
                        <Route
                            path="/contact"
                            element={<Contact />}
                        />
                        <Route
                            path="/projects"
                            element={<Projects />}
                        />
                        <Route
                            path="*"
                            element={<NotFound />}
                        />
                        <Route
                            path="/blog"
                            element={<Blog />}
                        />
                        <Route
                            path="/blog/:id"
                            element={<BlogPost />}
                        />
                        <Route
                            path="/login"
                            element={<Login />}
                        />
                        <Route
                            path="/signup"
                            element={<SignUp />}
                        />
                    </Routes>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default App;
