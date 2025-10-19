import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      
      const iconsPerRow = 4;
      const skills = this.props.sharedSkills.icons;
      const skillRows = [];
      
      for (let i = 0; i < skills.length; i += iconsPerRow) {
        const rowSkills = skills.slice(i, i + iconsPerRow);
        skillRows.push(rowSkills);
      }
      
      var skillsDisplay = skillRows.map(function (rowSkills, rowIndex) {
        return (
          <div className="row justify-content-center mb-4" key={rowIndex}>
            {rowSkills.map(function (skill, skillIndex) {
              return (
                <div className="col-3 col-md-2 col-lg-1" key={skillIndex}>
                  <div className="text-center skills-tile">
                    <i className={skill.class} style={{ fontSize: "220%" }}>
                      <p
                        className="text-center"
                        style={{ fontSize: "30%", marginTop: "4px" }}
                      >
                        {skill.name}
                      </p>
                    </i>
                  </div>
                </div>
              );
            })}
          </div>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <div className="skill-icon">{skillsDisplay}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
