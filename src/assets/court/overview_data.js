import {FiFolder} from "react-icons/fi";
import {SlReload} from "react-icons/sl";
import {BsCheck} from "react-icons/bs";
import {MdClose} from "react-icons/md";


const Data = [
    {
        icon: <FiFolder />,
        result: 3,
        text: "Total Applied",
        color: '#9747FF'
    },

    {
    icon: <SlReload />,    
    result: 2,
    text: "Pending",
    color: '#B5B500'

    },

    {
        icon: <BsCheck />,
        result: 6,
        text: "Approved",
        color: '#20A352'
    },

    {
        icon: <MdClose />,
        result: 0,
        text: "Rejected",
        color: '#fffff'
    }
]
 
export default Data;
