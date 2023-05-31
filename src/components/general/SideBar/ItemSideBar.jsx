import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {iconos} from "../../../data/iconsSideBar"

const ItemSideBar = ({ info }) => {
    const navigate = useNavigate();
    const handleRedirect= (page)=>{
        if(page =='/'){
            window.location.href = page;
        } else {
            navigate(page);
        }
    }
    
    const icon = iconos[info.icon];
    return (
        <button id='button' value="products" className={`flex items-center w-10/12 2xl:w-3/5 px-2 2xl:px-4 py-2 2xl:py-3 mt-3
            rounded-lg bg-blue  text-white text-sm font-medium font-title  hover:cursor-pointer hover:bg-white hover:text-blue  transition-colors`}
            onClick={()=>handleRedirect(info.page)}>
            <div>
                <FontAwesomeIcon icon={icon} />
            </div>
            <span className="ml-2"> {info.name} </span>
        </button>
    )}

export default ItemSideBar