import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skills from "./Skills";
import { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import ProjectSection from "./ProjectSection";
import About from "./About";
import Home from "./Home";

const Main = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="h-screen w-screen flex items-center justify-center">
                <GridLoader color="#469bea" size={30} />
            </div>
        );
    }

    return (
        <>
            <Navbar></Navbar>
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <ProjectSection></ProjectSection>
            <Contact></Contact>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default Main;