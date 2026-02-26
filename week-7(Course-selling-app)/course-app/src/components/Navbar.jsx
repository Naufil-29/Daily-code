import { Search } from "lucide-react"


export default function Navbar(){ 
    return<div className="fixed top-0 bg-white w-full h-18 border border-gray-300 flex items-center justify-between pl-20 pr-30"> 
            <div className="section-1 flex items-center justify-center gap-10"> 
                <div className="logo"> 
                    <p className='font-extrabold text-xl'>100<span className='text-red-600'>x</span>Devs</p>
                </div>
                <div className="home font-semibold"> 
                    <p>Home</p>
                </div>
                <div className="courses font-semibold"> 
                    <p>Courses</p>
                </div>
                <div className="store font-semibold"> 
                    <p>Store</p>
                </div>
            </div>
            <div className="section-2 flex items-center justify-center gap-5"> 
                <div className="border flex items-center justify-center rounded-xl gap-2 pl-2 text-gray-300 hover:border-blue-700 hover:text-black"> 
                    <Search size={15}/>
                    <input className="py-1 border-0 outline-none rounded-xl" type="text" placeholder= "Type to search"/>
                </div>
                <div className="btns flex items-center justify-between gap-5"> 
                    <button className="px-5 py-2 bg-white  border border-gray-500 hover:bg-gray-200 rounded-xl text-sm">SignUp</button>
                    <button className="px-5 py-2 bg-blue-900 hover:bg-blue-800 text-white border rounded-xl text-sm">Login</button>
                </div>
            </div>
    </div>
}