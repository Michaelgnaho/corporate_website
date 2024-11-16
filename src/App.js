import React, { useState, useEffect } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./components/header";
import AppHero from "./components/hero";
import AppAbout from "./components/about";
import AppServices from "./components/services";
import AppWorks from "./components/works";
import AppTeam from "./components/teams";
import AppTestimonials from "./components/testimonials";
import AppPricing from "./components/pricing";
import AppBlog from "./components/blog";
import AppContact from "./components/contact";
import AppFooter from "./components/footer";
import preloader1 from "./assets/images/preloader1.gif";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set timeout for preloader to disappear after content is loaded
    window.onload = () => {
      setIsLoading(false);
    };

    // Optionally, you can add a timeout for safety, in case resources take too long to load
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds max

    return () => clearTimeout(timeout); // Clean up timeout on unmount
  }, []);

  return (
    <div className="App">
      {/* Preloader */}
      {isLoading && (
        <div className="preloader w-full h-full">
          <div className="spinner">
            <img src={preloader1} alt='preloader' className='w-full w-full' />
          </div>
        </div>
      )}

      <header id="header">
        <AppHeader />
      </header>

      <main>
        <AppHero />
        <AppAbout />
        <AppServices />
        <AppWorks />
        <AppTeam />
        <AppTestimonials />
        <AppPricing />
        <AppBlog />
        <AppContact />
      </main>

      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
