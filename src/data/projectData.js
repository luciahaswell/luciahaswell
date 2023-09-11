const projectList = [
    {
        projectName: "Jammming",
        foldername: 'jammming',
        techsUsed: "React, HTML, CSS",
        projectDescription: "Created with the guidance of Codecademy's Front-End Engineer Career Path. This React project lets user browse songs through the Spotify API and add those to a playlist. Once all the songs are added to the playlist, the user can save the playlist to their own Spotify profile.",
        projectScreenshots: [require("../media/projectimgs/jammming/step1.JPG"),
            require("../media/projectimgs/jammming/step2.JPG"),
            require("../media/projectimgs/jammming/step3.JPG"),
            require("../media/projectimgs/jammming/step4.jpg")],
        gitHubLink: "https://github.com/luciahaswell/jammming"
    },
    {
        projectName: "Tic-Tac-Toe",
        techsUsed: "React, HTML, CSS",
        foldername: 'tictactoe',
        projectDescription: "Basic React app that lets users play the classic game of tic-tac-toe. Includes a dark mode feature to switch display.",
        projectScreenshots: [require("../media/projectimgs/tictactoe/step1.JPG"),
            require("../media/projectimgs/tictactoe/step2.JPG"),
            require("../media/projectimgs/tictactoe/step3.JPG"),
            require("../media/projectimgs/tictactoe/step4.JPG")],
        gitHubLink: "https://luciahaswell.github.io/tictactoe/"
    },
    {
        projectName: "Portfolio Website",
        techsUsed: "React, HTML, CSS,Figma",
        foldername: 'luciahaswell',
        projectDescription: "Personal portfolio website for myself. Used Figma to build and outline the design before building in React",
        projectScreenshots: [require("../media/projectimgs/luciahaswell/figma.JPG")],
        gitHubLink: "https://github.com/luciahaswell/luciahaswell"
    },
    {
        projectName: "Othello",
        techsUsed: "React, HTML, CSS, Figma",
        foldername: 'othello',
        projectDescription: "I recently took an international flight that had screens on the back of the seats. On this 12 hour long voyage, I perused the little screen to find something to entertain my little brain. After finding Othello, I played for a few hours. Finding strategies on how to win and proper chip placement. I started to think more about the logic on how the chips were flipped and figured this would be my next project in React! I got home from the trip and dove right in. So here, I present to you - Othello (Lucia's Version).",
        projectScreenshots: [require("../media/projectimgs/othello/step1.JPG"),
            require("../media/projectimgs/othello/step2.JPG"),
            require("../media/projectimgs/othello/step3.JPG"),
            require("../media/projectimgs/othello/figma.JPG")],
        gitHubLink: "https://github.com/luciahaswell/othello"
    },
    {
        projectName: "Travel Nurse Recruiter Guide",
        techsUsed: "React, HTML, CSS, Figma",
        foldername: 'statelicensure',
        projectDescription: "Freelance project for a client who is a travel nurse recruiter. In order to best help her nurses, she was looking for a way to organize RN state licensure in an interactive format that was informative and easy to understand for her and for the nurses she sends it to. We sat down and talked about her needs for this project and came up with a beautiful solution! RN state licensure is constantly changing and she wanted to be able to update the map on her own when these changes occurred. I worked through a solution to connect to the Google Sheets API so that whenever there is an update to the state licensure, she can manually update the docs and the site will update automatically update for her. Tackling the interactive map was the toughest part. I did a lot of research and found that I could import an SVG map of the United States using a Figma plugin. However, it was still missing the state abbreviations and the British Virgin Islands. I added all of these and was able to export the entire SVG as a whole and then took it apart to turn each state into a component into React to add the hover features! I designed the site layout on Figma, then built it with React, and then deployed it using Netlify!",
        projectScreenshots: [
            require("../media/projectimgs/statelicensure/step1.png"),
            require("../media/projectimgs/statelicensure/step2.png"),
            require("../media/projectimgs/statelicensure/step3.png"),
            require("../media/projectimgs/statelicensure/step4.png")
        ],
        gitHubLink: "https://statelicensure.netlify.app/"
    }
    /*
    ,
        {
        projectName: "Alex in Italy",
        techsUsed: "React, HTML, CSS, Figma",
        foldername: 'alexinitaly',
        projectDescription: "Freelance project for a client. Alex got a grant to travel across Italy in the Summer and explore the history, nature, and cuisine of the country. She wanted a web page where she could showcase her trip and share it with others. We met to talk about her expectations for this project. What information should be displayed and how she wanted it laid out. I build a site map that went through all the possible paths and organized the information in the best manner. When running that past her, I proceeded to build the design in Figma to her liking based on some color palettes and fonts she provided. Organizing all this information efficiently was the biggest tackle, since there was so much for eeach place she travelled to in Italy. Once we got a design we both agreed on, I built the webpage using React and then deployed using Netlify so she can share her travel stories with the grant providers, her students, friends, and family!",
        projectScreenshots: [ require()],
        gitHubLink: "https://alex-in-italy.netlify.app"
    }
    */

]

export default projectList; 