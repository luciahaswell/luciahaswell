import React, { useState } from "react";
import Header from "./Header";
import Splash from './Splash';
import AboutMe from "./AboutMe";
import Skills from './Skills';
import Projects from "./Projects";
import Contact from "./Contact";

const App = () => {
    const [theme, setTheme] = useState('orange');

    const colorChange = (event) => {
        setTheme(event.currentTarget.className.split(' ')[1])
    }

    return (
        <div>
            <Header theme={theme} />
            <Splash colorChange={colorChange} theme={theme} />
            <AboutMe theme={theme} />
            <Skills theme={theme} />
            <Projects />
            <Contact theme={theme} />
        </div>
    )
}

export default App;