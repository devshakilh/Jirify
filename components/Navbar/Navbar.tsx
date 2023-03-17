import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import NavLinks from "./NavLinks";
import { searchLinks } from "./NavLinksData";
import logo from "../../assets/images/logo.png";
import { FaRegUser } from "react-icons/fa";
import { GrMenu, GrSearch } from "react-icons/gr";
import { useRouter } from "next/router";
import { useDebounce } from "use-debounce";
import { IoCloseOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import MobileNav from "./MovileNav";
import LoginRegisterModal from "./LoginRegisterModal";

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
      } z-[999] sticky top-0 font-[Segoe UI] h-[70px] shadow-md`}
    >
      <div
        className={
          "mx-auto h-full main-container  flex items-center justify-between font-medium"
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
                <div className="flex items-center w-[5rem] md:w-[40rem] lg:w-[60vw] absolute right-0 border-b-2 border-[#3B7DED] transition-all ease-in duration-700 bg-[#F4F4F4] h-full">
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
              </div>

              {openModal && <LoginRegisterModal setOpenModal={setOpenModal} />}
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
