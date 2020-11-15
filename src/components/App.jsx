import React from "react";
import Header from "./Header";
import ImageSlides from "./ImageSlides";
import About from "./About";
import LunchMenu from "./LunchMenu";
import DinnerMenu from "./DinnerMenu";
import Footer from "./Footer";




function App() {
    return (
        <div>
            <Header />
            <ImageSlides />
            <About />
            <LunchMenu />            
            <DinnerMenu />
            <Footer />
        </div>
    );
}

export default App;