import React, {useState} from "react";
import SkillIcon from "./SkillIcon";

const Skills = ({theme}) => {
    const skillIcons = [
        {logoName: 'Alteryx',
        src: require(`../media/colors/${theme}/alteryx.JPG`)},
        {logoName: 'CSS',
        src: require(`../media/colors/${theme}/css.JPG`)},
        {logoName: 'Git',
        src: require(`../media/colors/${theme}/git.JPG`)},
        {logoName: 'HTML',
        src: require(`../media/colors/${theme}/html.JPG`)},
        {logoName: 'HubSpot',
        src: require(`../media/colors/${theme}/hubspot.JPG`)},
        {logoName: 'JavaScript',
        src: require(`../media/colors/${theme}/javascript.JPG`)},
        {logoName: 'Python',
        src: require(`../media/colors/${theme}/python.JPG`)},
        {logoName: 'React',
        src: require(`../media/colors/${theme}/react.JPG`)},
        {logoName: 'Salesforce',
        src: require(`../media/colors/${theme}/salesforce.JPG`)},
        {logoName: 'SQL',
        src: require(`../media/colors/${theme}/sql.JPG`)},
        {logoName: 'Tableau',
        src: require(`../media/colors/${theme}/tableau.JPG`)},
        {logoName: 'ThoughtSpot',
        src: require(`../media/colors/${theme}/thoughtspot.JPG`)},
        {logoName: 'Figma',
        src: require(`../media/colors/${theme}/figma.JPG`)}
    ]
    
    const [hoveredLogo,setHoveredLogo] = useState(null);

    const handleMouseEnter = (logoName) => {
        setHoveredLogo(logoName);
    }

    const handleMouseLeave = () => {
        setHoveredLogo(null);
    }

    return (
        <div className="Skills section" id='skillsSection'>
            <h2 className="sectionHeader">SKILLS</h2>
            <div className="icons">
                {skillIcons.map((skill,index) =>(
                    <SkillIcon 
                        src={skill.src} 
                        logoName={skill.logoName}
                        key={index}
                        onMouseEnter = {()=> handleMouseEnter(skill.logoName)}
                        onMouseLeave = {handleMouseLeave}
                        hoveredLogo={hoveredLogo}
                    />
                ))} 
            </div>
        </div>
    );
};

export default Skills;

