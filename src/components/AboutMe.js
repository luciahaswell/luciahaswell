import React from "react";

const AboutMe = ({ theme }) => {
    return (
        <div className="section" id='aboutMeSection'>
            <h2 className="sectionHeader">ABOUT ME</h2>
            <p className='bio'>Hi, I'm Lucia! I'm a passionate creative  currently residing in Denver, CO. My educational background includes a degree in Statistics and Mathematics from the University of Central Florida, which has equipped me with a strong foundation in analytical thinking and problem-solving.
                <br></br>
                <br></br>
                Throughout my career, I have gained extensive experience in the data realm, tackling complex projects, extracting valuable insights, and making data-driven recommendations. However, I have always had a keen interest in design and a desire to blend my technical expertise with my artistic eye.
                <br></br>
                <br></br>
                That's why I'm embarking on an exciting journey to transition into the field of UX/UI design and development. I believe that my unique combination of analytical thinking and artistic sensibility allows me to approach design challenges from a holistic perspective. I am passionate about creating intuitive and visually appealing user experiences that seamlessly merge form and function.
                <br></br>
                <br></br>
                Beyond my professional pursuits, I find joy in exploring my hobbies. Music has always been a source of inspiration for me, and I love attending live performances and discovering new genres. In addition, I have a deep appreciation for art and enjoy expressing my creativity through various mediums. And of course, I'm a dedicated dog lover and spend my free time giving my dog the life he deserves.
                <br></br>
                <br></br>
                I am committed to lifelong learning and continually expanding my skill set. I am excited to delve into the realms of UX/UI design and development, leveraging my analytical expertise, creative vision, and dedication to continuous growth to make a remarkable impact in the intersection of data and design.
                <br></br>
                <br></br>
                If you're looking for someone who can bring a unique blend of analytical thinking, artistic sensibility, and a genuine love for problem-solving, I would love to connect and explore how we can create something extraordinary together.
                <br></br>
                <br></br>
                </p>
                <div className='tldrContainer'>
                    <h2 className='tldr'>TLDR:</h2>
                    <p><span className={`tldrText ${theme}Text`}>I am a passionate and analytical creative currently transitioning into UX/UI design and development, leveraging my unique blend of statistical expertise, artistic sensibility, and problem-solving skills to create remarkable user experiences.</span></p>
                </div>
                </div>

    )
}

export default AboutMe;