import { AiFillHome } from 'react-icons/ai';
import {BsPersonLinesFill} from 'react-icons/bs'
import {FaLightbulb} from 'react-icons/fa'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {IoMdMail} from 'react-icons/io'

const listItems = [
    {
        icon: <AiFillHome/>,
        displayText: "Home",
        link:"home",
    },

    {
        icon: <BsPersonLinesFill/>,
        displayText: "Profile",
        link:"profile",
    },

    {
        icon: <FaLightbulb/>,
        displayText: "Skills",
        link:"skills",
    },

    {
        icon: <BsFillBriefcaseFill/>,
        displayText: "Projects",
        link:"projects",
    },

    {
        icon: <IoMdMail/>,
        displayText: "Contact",
        link:"contact",
    }
]

export default listItems