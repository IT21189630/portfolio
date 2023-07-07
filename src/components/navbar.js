import React from "react"
import listItems from "./list"
import {Link} from 'react-scroll'
const NavBar = () => {
    return(
        <div className="nav-container" id="home">
            {
                listItems.map((item , index)=>{

                    const {icon , displayText , link} = item

                    return(
                        <div key={index} className="nav-item">
                           
                                <span className="nav-item-icon">
                                     <Link to={link} spy={true} smooth={true} offset={50} duration={500}>
                                            {icon}
                                     </Link>
                                </span>
                            
                            <span className="nav-item-name">
                                {displayText}
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NavBar