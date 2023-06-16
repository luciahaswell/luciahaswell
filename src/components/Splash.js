import React from "react";

const Splash = ({colorChange,theme}) => {
    return (
        <div className="splash">
        <div className="profilePic">
            <img src={require(`../media/headshots/headshot_${theme}.JPG`)}></img>
        </div>
        <div className={`nameSplash ${theme}Text`}>
            <h1>Lucia Haswell</h1>
        </div>
        <div className='colorSelect'>
            <div 
                className='circle purple' 
                onClick={colorChange}
                title='Click me!'>
            </div>
            <div 
                className='circle green' 
                onClick={colorChange}
                title='Click me!'>
            </div>
            <div 
                className='circle orange' 
                onClick={colorChange}
                title='Click me!'>
            </div>
        </div>
        </div>
    )
}

export default Splash;