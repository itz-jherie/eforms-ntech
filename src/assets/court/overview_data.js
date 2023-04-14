import {FiFolder} from "react-icons/fi";
import {SlReload} from "react-icons/sl";
import {BsCheck} from "react-icons/bs";
import {MdClose} from "react-icons/md";


const Data = [
    {
        id: 0,
        icon: <FiFolder />,
        result: 3,
        text: "Total Applied",
        color: '#9747FF',
        status: "All"
        
    },

    {
        id: 1,
    icon: <SlReload />,    
    result: 2,
    text: "Pending",
    color: '#B5B500',
    status: "Pending"
    },

    {
        id: 2,
        icon: <BsCheck />,
        result: 6,
        text: "Approved",
        color: '#20A352',
        status: "Approved"
    },

    {
        id: 3,
        icon: <MdClose />,
        result: 0,
        text: "Rejected",
        color: '#EE4D1D',
        status: "Rejected"
    }
]
 
export default Data;
