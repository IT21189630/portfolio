import React from "react";
import { useState , useEffect} from "react";
import { codingSkills , softSkills } from "./codingSkills";

const SkillSection = () => {

    const [state , setState] = useState(true)
    const [skillSet , setSkillSet] = useState([])

    useEffect(()=>{
        if(state){
            setSkillSet(codingSkills)
        }
    })

    const loadCodingSkills = () => {
        setState(true)
        setSkillSet(codingSkills)
    }

    const loadSoftSkills = () => {
        setState(false)
        setSkillSet(softSkills)
    }

    return(
        <div className="skill-container section" id="skills">

            <div className="btn-container-skillset">
                <div className= {`${state ? `active` : `not-active`} `}  onClick={()=>{loadCodingSkills()}}>Coding Skills</div>
                <div className= {`${!state ? `active` : `not-active`} `} onClick={()=>{loadSoftSkills()}}>Soft Skills</div>
            </div>

            <div className="skill-displayer">
                    {
                        skillSet.map((item , index)=>{

                            const {icon, skill, info} = item

                            return (
                            <div key={index} className="skill-cont">
                                <span className="skill-icon">{icon}</span>
                                <span className="skill-name">{skill}</span>
                                <span className="skill-info">{info}</span>
                            </div>
                            )
                        })
                    }
            </div>

        </div>
    )
}

export default SkillSection