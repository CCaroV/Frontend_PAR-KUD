import { infoSideBar } from '../../../data/infoSideBar'
import ItemSideBar from './ItemSideBar'
import { FaUserAlt } from "react-icons/fa";

const SideBar = ({role}) => {
    const infoFilter = infoSideBar.filter(item=>item.profile.includes(role));
    const returnRole =()=>{
        if(role=='USER_ROLE'){
            return 'CLIENTE'
        }else if (role=='ADMIN_ROLE'){
            return 'ADMINISTRADOR'
        } else {
            return 'GERENTE PAR-KUD'
        }
    }
    return (
        <>

            <article className="fixed w-1/6 top-0 left-0 h-full bg-blue">
                <div id='logo' className='flex flex-col items-center'>
                    <img src="https://res.cloudinary.com/dn1k0drir/image/upload/v1685304390/sale_1_vzaywe.png" alt="Logo de la app" id="appLogo" className="w-40 h-40 mx-auto my-0 p-0" />
                </div>
                <div className='flex flex-col items-center mb-4'>
                    <h2 className='text-white font-extrabold font-sans'>{returnRole()}</h2>
                </div>
                <div className='flex flex-col items-center'>
                    <FaUserAlt className='justify-center text-center text-white text-6xl'/>
                </div>
                
                {/* <h1 className="text-center text-white text-base 2xl:text-lg font-medium font-subtitle bg-blue">
                    Camilo Suárez{/* {sessionStorage.getItem("nombreCompleto") + " - " + sessionStorage.getItem("role")} 
                </h1> */}

                <section className="flex flex-col items-center h-3/4 mt-5">
                    {
                        infoFilter.map(item => (
                            <ItemSideBar key={item.id} info={item} />
                        ))
                    }
                </section>
            </article>
        </>
    )
}

export default SideBar