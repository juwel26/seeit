import { Route, Routes } from "react-router-dom";


 export default function Navbar(){
    return(
        <nav className=" right-0 w-screen border-b-4  border-green-600  text-center  fixed  top-0  bg-green-600
         font-bold text-2xl text-white ">
             <ul>             
                <li className="  inline-block pt-4 pb-4">
                    <a href="/" className="pr-6 pl-8 sm: text-lg" >Home</a>
                </li>
                <li  className="  inline-block pt-4 pb-4">
                    <a href="/About"  className="pr-6 pl-8 sm: text-lg">About</a>
                </li >
                <li  className="  inline-block pt-4 pb-4">
                    <a href="/Blog"  className="pr-6 pl-8 sm: text-lg">Blog</a>
                </li>
               
             </ul>

        </nav>
       
        
    );
};

