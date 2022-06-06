import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Nav/Navbar";
import Home from "../components/Home/Home";
import About from '../components/About/About';
import { LanguagueProvider } from "../LanguageProvide";
import { ThemeProvider } from "../ThemeProvider";
import Proyects from "../components/Proyects/Proyects";

export default function App() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => setloading(false), 1500)
  })

  return (
    <ThemeProvider>
      {
        loading ? (
          <div className="container-app">
            <Loader />
          </div> ) : (
          <LanguagueProvider>
            <Navbar/>
            <Home />
            <About />
            <Proyects />
          </LanguagueProvider>)
      }
    </ThemeProvider>
  );
}
