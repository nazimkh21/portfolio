
import { skillsData } from "../data.js";
import './skills.css';


export const Skills = () => {
  return (
    <>
      <section id="skills" className="flex skills-section">
        <div className="container">
          <div className="section-header text-center">
            <h3 className="section-title">My Skills</h3>
            <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>
          </div>

          <div className="skills-widget grid6">
            {skillsData.map((skill) => (
              <div className="skill-item" key={skill.id}>
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <div className="number">{skill.percentage}%</div>
                </div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills
