import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import NavLinks from "./NavLinks";
import { links, searchLinks } from "./NavLinksData";
import logo from "../../assets/images/logo.png";
import { FaBars, FaRegUser } from "react-icons/fa";
import { GrMenu, GrSearch } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
import { useDebounce } from "use-debounce";
import { IoCloseOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import MobileNav from "./MovileNav";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openInput, setOpenInput] = useState<boolean>(false);
  const [mobileOpenInput, setMobileOpenInput] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  // const [searchValue, setSearchValue] = useState<string>("");

  const [data] = useDebounce(searchValue, 1000);

  const router = useRouter();
  // console.log(router.pathname.slice(1,router.pathname.length));

  const handleSearch = (searchVal: string) => {
    setSearchValue(searchVal);
  };

  const clickRef = useRef<any>();
  const searchRef = useRef<any>();

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("click", handleSearchOutside);
  }, []);

  const handleSearchOutside = (e: any) => {
    if (!searchRef?.current?.contains(e.target)) {
      setSearchValue("");
    }
  };
  const handleClickOutside = (e: any) => {
    if (!clickRef?.current?.contains(e.target)) {
      // console.log("clicked outside");
      setOpenModal(false);
      // setSearchValue("")
    } else {
      // console.log("clicked inside");
      setOpenModal(true);
    }
  };

  return (
    <nav
      className={`bg-white ${
        openInput && "border-t-2 border-t-[#ffb70a]"
      } z-[999] relative font-[Segoe UI] h-[70px] shadow-md`}
    >
      <div
        className={
          "w-11/12 mx-auto h-full flex items-center justify-between font-medium"
        }
      >
        {!mobileOpenInput && (
          <>
            <div className="md:mb-2 md:w-auto w-full flex justify-between">
              <Link href="/">
                {" "}
                <Image
                  src={logo}
                  alt="photo"
                  className="md:cursor-pointer w-[160px] md:w-[180px] h-9 object-contain"
                />
              </Link>
            </div>
            <ul
              className={`${
                openInput && "md:hidden lg:hidden"
              } md:flex items-center hidden uppercase text-black md:justify-between px-2`}
            >
              <NavLinks />
            </ul>
          </>
        )}

        {/* mobile device  */}
        <MobileNav open={open} setOpen={setOpen} />

        {!mobileOpenInput && (
          <div className="hidden md:flex items-center gap-3 h-full">
            <div className="relative h-full">
              <div
                onClick={() => setOpenInput(true)}
                className={`${
                  !openInput &&
                  "md:flex justify-center h-full items-center cursor-pointer"
                } hidden`}
              >
                <button className="w-[68px] cursor-pointer pl-2 pr-0 rounded-md border-none focus:border-none focus:outline-none">
                  Search
                </button>
                <span>
                  <GrSearch />
                </span>
              </div>
              {openInput && (
                <div className="flex items-center w-[5rem] md:w-[40rem] lg:w-[65vw] absolute left-[-20px] md:left-[-40rem] lg:left-[-65vw] border-b-2 border-[#3B7DED] transition-all ease-in duration-700 bg-[#F4F4F4] h-full">
                  <input
                    type="text"
                    className="input text-lg bg-transparent focus:border-none focus:outline-none input-md w-full h-8 border-none"
                    placeholder="Search all of Ameliasoft"
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <div className="" onClick={() => handleSearch(searchValue)}>
                    <GrSearch className="w-12 text-center  hover:text-[#3B7DED] cursor-pointer text-black" />
                  </div>
                  <div
                    onClick={() => setOpenInput(false)}
                    className="w-12 text-center rounded-r-md  hover:text-red-500 font-bold cursor-pointer text-black"
                  >
                    <IoCloseOutline fontSize={20} />
                  </div>
                </div>
              )}
              {data &&
                searchLinks
                  ?.filter((Fitem) => {
                    const searchTerm = searchValue.toLowerCase();
                    const SerachName = Fitem.name.toLowerCase();
                    return (
                      searchTerm &&
                      SerachName.startsWith(searchTerm) &&
                      SerachName !== searchTerm
                    );
                  })
                  .map((item: any, index: any) => (
                    <div
                      ref={searchRef}
                      className="absolute flex justify-between top-12 px-10 py-3 h-20 bg-white w-[65vw] left-[-65vw]"
                      key={index}
                    >
                      <Link className="hover:text-[#3B7DED]" href={item.link}>
                        {item.name}
                      </Link>
                      {/* <span onClick={() => setSearchValue("")} className="text-md hover:text-red-500 font-bold cursor-pointer">x</span> */}
                    </div>
                  ))}
            </div>

            <div ref={clickRef} className="">
              <div
                className={`flex justify-center items-center text-sm lg:text-lg relative cursor-pointer ${
                  openModal && "text-red-400"
                } w-20 md:mt-[0.5px]`}
              >
                <span className="text-sm" onClick={() => setOpenModal(false)}>
                  Sign In
                </span>{" "}
                <FaRegUser className="ml-1 w-4 text-sm" />
                {/* <Image
                src={userIcon}
                style={{ height: "16px", width: "16px", marginLeft: "5px" }}
                alt="user icon"
              /> */}
              </div>

              {openModal && (
                <div className="absolute z-50 bg-white md:w-88 top-[4.5rem] right-4 md:right-10 p-8 transition-all ease-in-out shadow-lg rounded-md">
                  <div className="flex justify-between">
                    <Image
                      src={logo}
                      alt="logo"
                      style={{ objectFit: "contain" }}
                      width="180"
                    />
                    <button
                      className="text-md"
                      onClick={() => setOpenModal(false)}
                    >
                      <IoCloseOutline fontSize={25} />
                    </button>
                  </div>
                  <div className="mt-12 flex gap-5">
                    <div>
                      <Link
                        href="/authentication/signup"
                        className="cursor-pointer flex items-center justify-center md:px-11 w-full py-2 rounded-sm border border-slate-300 text-[10px] md:text-sm hover:bg-[#3B7DED] hover:text-white mb-3"
                      >
                        <span>Sign Up</span>
                      </Link>
                      <p className="text-[9px] md:text-[14px]">
                        You have account?{" "}
                        <Link
                          className="text-[#3B7DED]"
                          href="/authentication/signin"
                        >
                          Sign In
                        </Link>
                      </p>
                    </div>
                    <div>
                      <Link
                        href="/authentication/signin"
                        className="cursor-pointer flex items-center justify-center md:px-11 w-full py-2 rounded-sm border border-slate-300 hover:bg-[#3B7DED] hover:text-white mb-3 text-[10px] md:text-sm"
                      >
                        <span>Sign In</span>
                      </Link>

                      <p className=" text-[9px] md:text-[14px]">
                        You have no account?{" "}
                        <Link
                          className="text-[#3B7DED]"
                          href="/authentication/signup"
                        >
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* mobile */}
        {mobileOpenInput && (
          <div className="md:hidden w-[80%]">
            <input
              type="text"
              className="border-2 pl-3 focus:outline-none rounded-md w-full border-gray-400 h-[40px]"
              placeholder="Search..."
            />
          </div>
        )}
        {!mobileOpenInput && (
          <a
            href="tel:+8801819474454"
            className="text-[22px] mx-auto md:hidden z-50 mr-5"
          >
            <BsTelephone />
          </a>
        )}
        <div
          onClick={() => {
            if (!mobileOpenInput) {
              setMobileOpenInput(true);
            } else {
              setMobileOpenInput(false);
            }
          }}
          className={`text-[22px] md:hidden z-50 ${
            mobileOpenInput ? "mx-auto" : "mr-5"
          }`}
        >
          {mobileOpenInput ? <IoCloseOutline fontSize={35} /> : <GrSearch />}
        </div>
        <div className="text-3xl md:hidden z-50" onClick={() => setOpen(!open)}>
          <GrMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
