import { BsGlobe } from "react-icons/bs";
import {BsHouse} from "react-icons/bs"
import {HiOutlineScale} from "react-icons/hi"
import {BiAnchor} from "react-icons/bi"
import { TbHammer } from "react-icons/tb";
import {GiScales} from "react-icons/gi"

const data = [

    {
        icon: <BsGlobe className="iconions"/>,
        num: 0,
        name: "Supreme Court"
    },

    {
        icon: <BsHouse className="iconions"/>,
        num: 1,
        name: "Court of Appeal"
    },

    {
        icon: <HiOutlineScale className="iconions"/>,
        num: 2,
        name: "Federal High Court"
    },

    {
        icon: <BiAnchor className="iconions"/>,
        num: 3,
        name: "State High Court"
    },

    {
        icon: <TbHammer className="iconions"/>,
        num: 4,
        name: "Marriage Registry"
    },

    {
        icon: <GiScales className="iconions"/>,
        num: 5,
        name: "Customary Court of Appeal"
    }
]

export default data;