import React from "react";

const SkillIcon = ({ src, hoveredLogo, onMouseEnter, onMouseLeave, logoName }) => {
  return (
    <div
      className="skillIconContainer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <img
        className="icon skill"
        src={src}
        alt={logoName}
      />
      {hoveredLogo === logoName && <p className="skillName">{hoveredLogo}</p>}
    </div>
  );
};

export default SkillIcon;