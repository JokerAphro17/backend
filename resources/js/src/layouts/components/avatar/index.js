import { Tooltip } from "@mui/material";
import { useEffect, useRef, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import { API_STORAGE_URL } from "../../../utilities/constant";
import HANDLER_STORAGE from './../../../data/index';


const ProfileDropDown = (props) => {

    const [state, setState] = useState(false)
  
    const profileRef = useRef();
    // let navigate = useNavigate();

    // const Logout = () => {
    //     logout();
    //     navigate("/auth/login");
    // }
        
    
    useEffect(() => {
        const handleDropDown = (e) => {
            if (!profileRef.current.contains(e.target)) setState(false)
        }
        document.addEventListener('click', handleDropDown)
        
    }, [])

    return (
        <div className={`relative ${props.class}`}>
            <div className="flex items-center space-x-4">
           
               
                <Tooltip title="Apro"  arrow placement="top">
                <button
                    ref={profileRef}
                    className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
                    onClick={() => setState(!state)}
                >
                    <img
                        src={`${API_STORAGE_URL}/${HANDLER_STORAGE.GET('USER_SESSION','object')?.data?.avatar}`}
                        className="w-full h-full rounded-full"
                    />
                </button>
                </Tooltip>
                <div className="lg:hidden">
                    <span className="block">ALI</span>
                    <span className="block text-sm text-gray-500">
                        BABA
                    </span>
                </div>
            </div>
            <ul
                className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
                    state ? "" : "lg:hidden"
                }`}
            >
                <li>
                    <NavLink
                        to={"/profile"}
                        className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
                    >
                        Profil
                    </NavLink>
                </li>
                <li>
                    <button className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5">
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
}
export default ProfileDropDown;