import React from 'react';
import Navbar from "@/components/front-UI/nav-layout/navbar";
import FooterSection from "@/components/front-UI/home/footer-section";

const AppNavbar = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <FooterSection />
        </div>
    );
};

export default AppNavbar;