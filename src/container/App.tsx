import { useEffect, useState } from "react";
import Home from "../components/Home/Home";
import Loader from "../components/Loader";
import Navbar from "../components/Nav/Navbar";
import { LanguagueProvider } from "../LanguageProvide";
import { ThemeProvider } from "../ThemeProvider";

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
          </LanguagueProvider>)
      }
    </ThemeProvider>
  );
}
