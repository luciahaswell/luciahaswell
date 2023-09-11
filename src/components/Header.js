import React from 'react';

const Header = ({ theme }) => {
    return (
        <div className='header'>
            <a href="#aboutMeSection">
                <span><h3 className={`headerText ${theme}Hover`}>ABOUT ME</h3></span>
            </a>
            <a href="#skillsSection">
                <span><h3 className={`headerText ${theme}Hover`}>SKILLS</h3></span>
            </a>
            <a href="#projectsSection">
                <span><h3 className={`headerText ${theme}Hover`}>PROJECTS</h3></span>
            </a>
            <a href="#contactSection">
                <span><h3 className={`headerText ${theme}Hover`}>CONTACT</h3></span>
            </a>
        </div>
    )
}

export default Header;