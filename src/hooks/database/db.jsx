import { BsSunFill, BsMoonFill, BsPlus, BsCheck, BsGoogle } from 'react-icons/bs'
import { MdManageAccounts } from 'react-icons/md'
import { CgClose } from 'react-icons/cg'
import { RiKeyboardFill, RiDragMove2Fill } from 'react-icons/ri'

import check from '../../assets/icon-check.svg'
import bmc from '../../assets/bmc-icon.svg'

export const infos = {
    "name": "TODO",
    "name2": "DAILY"
}

export const authorInfos = {
    "name": "Abayomi Adelakun",
    "nick": "thisisadelakun",
    "website": "www.twitter/thisisadelakun",
    "bmc": "https://www.buymeacoffee.com/thisisadelakun",
}

export const icons = {
    "sun": <BsSunFill className='theme-icon' />,
    "moon": <BsMoonFill className='theme-icon' />,
    "close": <CgClose className='close-icon' />,
    "check": check,
    "bmc": bmc,
    "add": <BsPlus className='add-btn' />,
    "done": <BsCheck className="add-btn" />,
    "kybrd": <RiKeyboardFill className="add-btn" />,
    "profile": <MdManageAccounts className="profile" />,
    "google": <BsGoogle className='google' />,
    "drag": <RiDragMove2Fill className='drag'/>,
}