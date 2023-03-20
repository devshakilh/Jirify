import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlinePlus, AiOutlineSetting } from 'react-icons/ai';
import { BsQuestionCircleFill, BsStars } from 'react-icons/bs';
import { IoSearchOutline } from 'react-icons/io5';
import { MdKeyboardArrowDown, MdOutlineArrowBackIos } from 'react-icons/md';
import { VscDashboard } from 'react-icons/vsc';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import ResourceModal from './bodyCompo/ResourceModal';
import UserModal from './bodyCompo/UserModal';
import { bodyElementData, DashboardLink } from './sideNavFake';
import styles from './SideNav.module.css'

const SideNav = () => {
    const [activeBtn, setActiveBtn] = useState("side1")
    const [activeShortBtn, setActiveShortBtn] = useState(false)
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openResourceModal, setOpenResourceModal] = useState<boolean>(false);
    const [mobileSearch, setMobileSearch] = useState(false)
    const [menubarActive, setMenubarActive] = useState(false)

    const clickResourceRef = useRef<any>();
    const clickUserRef = useRef<any>();

    const handleClickOutside = (e: any) => {

        if (!clickUserRef?.current?.contains(e.target)) {
            setOpenModal(false);
        } else {
            setOpenModal(true);

        }

        if (!clickResourceRef?.current?.contains(e.target)) {
            setOpenResourceModal(false)
        } else {
            setOpenResourceModal(true)
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
    }, [])

    return (
        <div className='flex'>
            <div className={`hidden md:block ${activeShortBtn ? "lg:w-[5%] " : "lg:w-[16%]"} border-r px-3 transition-all ease-in`}>
                <div className={`fixed hidden  top-12 ${activeShortBtn ? "left-[4.5%]" : "left-[15%]"}  bg-white border rounded-full w-8 h-8 lg:flex justify-center items-center transition-all ease-in`} onClick={() => setActiveShortBtn(!activeShortBtn)}>
                    <MdOutlineArrowBackIos className={`${activeShortBtn && "rotate-180 transition-all ease-in"}`} />
                </div>
                <div className="pt-5">
                    <VscDashboard className='text-3xl' />
                </div>
                <div className="mt-6 bg-[#022d94] hover:bg-[#102c72] text-[#fff] flex justify-center py-2 rounded-md">
                    <p className={`${activeShortBtn ? "hidden" : "block"} transition-all ease-in`}>Create new</p>
                    <AiOutlinePlus className={`${activeShortBtn ? "block" : "hidden"} text-[20px] transition-all ease-in`} />
                </div>
                <div className="divider"></div>
                <div className="flex flex-col gap-2 pt-3">
                    {
                        DashboardLink.map(item =>
                            <div onClick={() => setActiveBtn(item.id)} key={item.id} className={`flex gap-5 items-center px-3 py-3 cursor-pointer text-[16px] font-semibold relative ${activeBtn === item.id ? "bg-[#EDF2FF] text-[#0c3ebb]" : "hover:bg-slate-100"}`}>
                                <div className="text-[20px]">{item.icon}</div>
                                <p className={`${activeShortBtn ? "hidden" : "block"} transition-all ease-in`}>{item.title}</p>
                                {
                                    activeBtn === item.id && <div className="absolute w-1 h-5 bg-blue-800 left-0"></div>
                                }

                            </div>
                        )
                    }
                </div>
                <div className="divider mb-0"></div>
                <div className="">
                    <div onClick={() => setActiveBtn("")} className={`flex gap-5 items-center px-3 py-3 cursor-pointer text-[16px] font-semibold relative ${activeBtn === "" ? "bg-[#EDF2FF] text-[#0c3ebb]" : "hover:bg-slate-100"}`}>
                        <div className="text-[20px]"><AiOutlineSetting /></div>
                        <p className={`${activeShortBtn ? "hidden" : "block"} transition-all ease-in`}>Settings</p>
                        {
                            activeBtn === "" && <div className="absolute w-1 h-5 bg-blue-800 left-0"></div>
                        }

                    </div>
                </div>
                <div className="p-4 bg-[#ECFDFF] my-5 text-[#11BECF] font-semibold">
                    <BsStars className='text-[20px]' />
                    <p className="mt-2">Get custom links and a complimentary domain. <br />
                        <Link href="/" className='hover:border-none border-b-2 border-[#11BECF]'>Upgrade now</Link>
                    </p>
                </div>
            </div>
            <div className="md:hidden pt-5 pl-3 flex gap-3 mr-10 h-10 items">
                {
                    menubarActive ?
                        <RxCross2 onClick={() => setMenubarActive(!menubarActive)} className='text-[20px] mt-1' />
                        : <GiHamburgerMenu onClick={() => setMenubarActive(!menubarActive)} className='text-[20px] mt-1' />
                }
                <VscDashboard className='text-3xl' />
            </div>


            <div className={`w-full absolute z-50 bg-white ${menubarActive ? " left-0 transition-all ease-in-out top-16" : "left-[-100%]"} `}>
                <div className={`border-r px-3 pt-4`}>
                    <div className=" bg-[#022d94] hover:bg-[#102c72] text-[#fff] flex justify-center py-2 rounded-md">
                        <p className={`${activeShortBtn ? "hidden" : "block"} transition-all ease-in`}>Create new</p>
                        <AiOutlinePlus className={`${activeShortBtn ? "block" : "hidden"} text-[20px] transition-all ease-in`} />
                    </div>
                    <div className="divider"></div>
                    <div className="flex flex-col gap-2 pt-3">
                        {
                            DashboardLink.map(item =>
                                <div onClick={() => { setActiveBtn(item.id); setMenubarActive(!menubarActive) }} key={item.id} className={`flex gap-5 items-center px-3 py-3 cursor-pointer text-[16px] font-semibold relative ${activeBtn === item.id ? "bg-[#EDF2FF] text-[#0c3ebb]" : "hover:bg-slate-100"}`}>
                                    <div className="text-[20px]">{item.icon}</div>
                                    <p className={`${activeShortBtn ? "hidden" : "block"} transition-all ease-in`}>{item.title}</p>
                                    {
                                        activeBtn === item.id && <div className="absolute w-1 h-5 bg-blue-800 left-0"></div>
                                    }

                                </div>
                            )
                        }
                    </div>
                    <div className="divider mb-0"></div>
                    <div className="">
                        <div onClick={() => setActiveBtn("")} className={`flex gap-5 items-center px-3 py-3 cursor-pointer text-[16px] font-semibold relative ${activeBtn === "" ? "bg-[#EDF2FF] text-[#0c3ebb]" : "hover:bg-slate-100"}`}>
                            <div className="text-[20px]"><AiOutlineSetting /></div>
                            <p className={`${activeShortBtn ? "hidden" : "block"} transition-all ease-in`}>Settings</p>
                            {
                                activeBtn === "" && <div className="absolute w-1 h-5 bg-blue-800 left-0"></div>
                            }

                        </div>
                    </div>
                    <div className="p-4 bg-[#ECFDFF] my-5 text-[#11BECF] font-semibold">
                        <BsStars className='text-[20px]' />
                        <p className="mt-2">Get custom links and a complimentary domain. <br />
                            <Link href="/" className='hover:border-none border-b-2 border-[#11BECF]'>Upgrade now</Link>
                        </p>
                    </div>
                </div>
            </div>

            <div className={`${activeShortBtn ? "md:w-[95%]" : "md:w-[84%]"}  transition-all ease-in `}>
                <div className="flex items-center h-16 border-b px-3">
                    <div className="md:w-2/5"></div>
                    <div className="md:w-3/5 flex items-center gap-10 md:gap-10">
                        <form className='md:flex gap-4 relative hidden'>
                            <input className='input input-none hover:file-input-info bg-slate-100 rounded-md pl-[40px] pr-[20px] h-[40px] w-[340px] ' type="search" placeholder='Search' autoComplete='off' />
                            <IoSearchOutline className='absolute top-[11px] text-[20px] left-3 text-[#85888d]' />
                            <input type="submit" value="Upgrade" className='bg-[#007C8C] text-white px-3 rounded-md cursor-pointer' />
                        </form>
                        <div className="">
                            <IoSearchOutline onClick={() => setMobileSearch(true)} className='text-[20px] text-[#85888d]' />
                            <div className={`${mobileSearch ? "absolute z-20 top-2 " : "hidden"}`}>
                                <form className=' flex gap-4 relative md:hidden'>
                                    <input className='input input-none hover:file-input-info bg-slate-100 rounded-md pl-[40px] h-[45px] w-[200px] ' type="search" placeholder='Search' autoComplete='off' />
                                    <IoSearchOutline className='absolute top-[11px] text-[20px] left-3 text-[#85888d]' />
                                    <div onClick={() => setMobileSearch(false)} className="font-bold flex items-center text-[18px]">x</div>
                                </form>
                            </div>
                        </div>
                        <div ref={clickResourceRef} className="relative">
                            <BsQuestionCircleFill className='text-[32px] cursor-pointer' />
                            <div className="absolute top-[-10px] left-[-10px] w-6 h-6 bg-red-700 text-white flex justify-center items-center rounded-full">2</div>

                            {openResourceModal && <ResourceModal setOpenResourceModal={setOpenResourceModal} />}
                        </div>
                        <div ref={clickUserRef} className="flex hover:bg-slate-100 px-3 rounded-md py-1 items-center justify-between gap-3 w-full cursor-pointer relative" onClick={() => setOpenModal(false)}>
                            <div className="bg-black text-white w-8 h-8 rounded-full flex justify-center items-center">U</div>
                            <p className="hidden md:block">User</p>
                            <MdKeyboardArrowDown />

                            {openModal && <UserModal setOpenModal={setOpenModal} />}
                        </div>
                    </div>
                </div>
                {/* <div className="hidden md:block mx-10 mt-10 relative w-full">
                    {
                        bodyElementData.filter(kk => kk.ref === activeBtn)
                            .map(item =>
                                <div className="mr-20" key={item.id}>
                                    {item.bodyElement}
                                </div>)
                    }
                </div> */}
                <div className=" mx-10 mt-10 relative w-full">
                    {
                        bodyElementData.filter(kk => kk.ref === activeBtn)
                            .map(item =>
                                <div className={`${styles.mobileStyle}`} key={item.id}>
                                    {item.bodyElement}
                                </div>)
                    }
                </div>
            </div>
        </div>

    );
};

export default SideNav;