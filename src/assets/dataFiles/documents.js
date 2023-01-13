import { BsFillPersonPlusFill } from 'react-icons/bs'
import {RiFileUserFill} from "react-icons/ri"
import {TbFileText} from "react-icons/tb"
import { RiFileTextFill } from 'react-icons/ri'
import {FaKey} from "react-icons/fa"
import {IoMdThumbsUp} from "react-icons/io"
import box from "../../components/features/box.css"

const data = [

    {
        icon: <BsFillPersonPlusFill className='circle--icon'/>,
        name: "Change of Name"
    },

    {
        icon: <RiFileUserFill className='circle--icon'/>,
        name: "Age Declaration"
    },

    {
        icon: <TbFileText className='circle--icon'/>,
        name: "Attestation"
    },

    {
        icon: <RiFileTextFill className='circle--icon'/>,
        name: "Legal Document"
    },

    {
        icon: <FaKey className='circle--icon'/>,
        name: "Change of Ownership"
    },

    {
        icon: <IoMdThumbsUp className='circle--icon'/>,
        name: "Good Behaviour"
    }
]

export default data;