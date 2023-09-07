import React, { useState } from 'react'
import { BiUser } from "react-icons/bi";
import { BiBell } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="navbar bg-white w-full top-0 right-0">
  <div className="navbar-start">
    <a className="btn btn-ghost normal-case text-xl">Halo, User</a>
  </div>
  <div className="navbar-end">
  <button className="btn btn-ghost btn-circle">
      <div className="indicator">
      <BiBell size={25} className="min-w-max" />
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
    <button className="btn btn-ghost btn-circle">
      <BiUser size={25} className="min-w-max" />
    </button>
 
    <button className="btn btn-active ml-5 bg-[#f2740c]"><p className="text-white normal-case px-2">Masuk</p></button>
  </div>
</div>
  )
}

export default Navbar

// const Navbar = () => {
//     let Links =[
//       {name:"HOME",link:"/"},
//       {name:"SERVICE",link:"/"},
//       {name:"ABOUT",link:"/"},
//       {name:"BLOG'S",link:"/"},
//       {name:"CONTACT",link:"/"},
//     ];
//     let [open,setOpen]=useState(false);
//   return (
//     <div className='shadow-md w-full fixed top-0'>
//       <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
//       <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
//       text-gray-800'>
//         <span className='text-3xl text-indigo-600 mr-1 pt-2'>
//         <ion-icon name="logo-ionic"></ion-icon>
//         </span>
//         Designer
//       </div>
      
//       <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
//       <ion-icon name={open ? 'close':'menu'}></ion-icon>
//       </div>

//       <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
//         {
//           Links.map((link)=>(
//             <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
//               <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
//             </li>
//           ))
//         }
//         <button className="btn btn-active ml-5 bg-[#f2740c]"><p className="text-white normal-case px-2">Masuk</p></button>
//       </ul>
//       </div>
//     </div>
//   )
// }

// export default Navbar