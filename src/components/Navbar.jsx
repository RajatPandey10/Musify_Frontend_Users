import {ChevronLeft,ChevronRight,User,LogOut} from 'lucide-react'
import {useAuth} from '../context/AuthContext.jsx';
import {useNavigate} from 'react-router-dom';
import UserProfile from "./UserProfile.jsx";


const Navbar = ()=>{
    const {user,logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout =()=>{
        logout();
    }

    return(
        <>
            <div className='w-full flex justify-between items-center font-semibold'>
                <div className='flex items-center gap-2'>

                    <div 
                        onClick={()=>navigate(-1)}
                        className='w-8 h-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-gray-800 transition-colors flex items-center justify-center'>
                        <ChevronLeft className='w-4 h-4 text-white'/>
                    </div>

                    <div 
                        onClick={()=>navigate(1)}
                        className='w-8 h-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-gray-800 transition-colors flex items-center justify-center'>
                        <ChevronRight className='w-4 h-4 text-white'/>
                    </div>

                </div>
                <div className='flex items-center gap-4'>

                    <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>
                        Explore Premium

                    </p>
                    <button
                        onClick={()=>navigate('userProfile')} 
                        className='flex items-center gap-2 
                        px-3 py-1 rounded-2xl cursor-pointer 
                        text-white transition-all duration-300
                        hover:text-green-400 
                        hover:bg-green-500/10 
                        hover:shadow-[0_0_10px_#22c55e]'>
                        
                        <User className='w-4 h-4'/>
                        
                        <span className='text-sm hidden sm:inline'>
                            {user?.email?.split("@")[0]}
                        </span>
                    </button>

                    <button 
                        onClick={handleLogout}
                        title="logout"
                        className='bg-red-600 hover:bg-red-700 
                        py-1 px-3 rounded-2xl text-[15px] cursor-pointer 
                        transition-all duration-300 flex items-center gap-1
                        hover:shadow-[0_0_8px_rgba(239,68,68,0.5)]'
                    >
                        <LogOut className='w-4 h-4'/>
                        <span className='hidden sm:inline'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar;