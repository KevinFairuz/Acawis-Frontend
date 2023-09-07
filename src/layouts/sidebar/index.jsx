import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation, useRoutes } from "react-router-dom";

import LogoSD from '../../assets/GraduationCap.png'
import {FaHome} from "react-icons/fa"
import {FaHandsHelping} from "react-icons/fa"
import {FaGraduationCap} from "react-icons/fa"
import {RiPresentationFill} from "react-icons/ri"
import {RiLogoutBoxRFill} from "react-icons/ri"
import {AiFillSchedule} from "react-icons/ai"

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList = [
    {
      name: "Konsultasi",
      icon: FaGraduationCap,
      menus: ["Academy", "Goverment", "Profesional"],
    },
    // {
    //   name: "analytics",
    //   icon: TbReportAnalytics,
    //   menus: ["dashboard", "realtime", "events"],
    // },
  ];

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-[#215273] text-white shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen rounded-r-3xl"
      >
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
        <img className='w-[47px] mr-4 ml-2' src={LogoSD} alt="Logo" />
          <span className="text-3xl whitespace-pre text-white">Halodos</span>
        </div>

        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-6  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li>
              <div className="pt-5">
              <NavLink to={"/"} className="link no-underline">
                <FaHome size={23} className='min-w-max'/>
                Dashboard
              </NavLink>
              </div>
            </li>
            <li>
              <div className="pt-2">
              <NavLink to={"/buatjanji"} className="link no-underline">
                <FaHandsHelping size={23} className="min-w-max" />
                Buat Janji
              </NavLink>
              </div>
            </li>
            <li>
            <div className="pt-2">
                {subMenusList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-2" onClick={() => setOpen(true)} >
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            </li>
            
            {/* {(open || isTabletMid) && (
              <div className="pt-5">
                <small className="pl-3 text-slate-500 inline-block mb-2">
                  Product categories
                </small>
                {subMenusList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )} */}

            <li>
              <div className="pt-2">
              <NavLink to={"/TesAkademik"} className="link no-underline">
                <RiPresentationFill size={23} className="min-w-max" />
                Tes Akademik
              </NavLink>
              </div>
            </li>
            <li>
              <div className="pt-2">
              <NavLink to={"/Pesanan"} className="link no-underline">
                <AiFillSchedule size={23} className="min-w-max" />
                Pesanan
              </NavLink>
              </div>
            </li>
          </ul>
            <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
              <div className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
              <NavLink to={"/LogOut"} className="link no-underline">
                <RiLogoutBoxRFill size={23} className="min-w-max" />
                LogOut
              </NavLink>
              </div>
            </div>
        </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
