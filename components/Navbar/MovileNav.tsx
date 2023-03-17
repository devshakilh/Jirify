import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { links } from "./NavLinksData";
import styles from "./Navbar.module.css";
import { openSansFontFamily } from "../../fonts/googleFonts";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/router";
import TopNav from "./NavLinks";

const MobileNav = ({ open, setOpen }: { open: boolean; setOpen: any }) => {
  const [dropDownIndex, setDropDownIndex] = useState<number | undefined>(
    undefined
  );
  const router = useRouter();
  const extraPhoneLinks = [
    {
      name: "Signin",
      link: "/authentication/signin",
    },
    {
      name: "SignUp",
      link: "/authentication/signup",
    },
  ];
  useEffect(() => {
    setOpen(false);
  }, [router.pathname, setOpen]);
  return (
    <>
      <div
        className={`md:hidden bg-transparent w-full fixed top-0 bottom-0 duration-500 z-[9999] ${
          open ? "left-0" : "left-[-100%]"
        } `}
      >
        <div className="w-[80%] relative h-full bg-white">
          <div className="overflow-y-auto h-screen">
            <TopNav />
            <ul>
              {links.map((l, i) => {
                return (
                  <React.Fragment key={i}>
                    <li
                      onClick={() => {
                        if (l.sublinks?.length) {
                          if (dropDownIndex === i) {
                            setDropDownIndex(undefined);
                          } else {
                            setDropDownIndex(i);
                          }
                        } else {
                          router.push(l.link);
                        }
                      }}
                      className={`flex ${styles.navLink} items-center uppercase cursor-pointer justify-between px-[24px] py-[12px]`}
                    >
                      <h4
                        style={{
                          fontWeight: "bold",
                          transition: "all .3s ease-in-out",
                          color: `${dropDownIndex === i ? "#3B7DED" : "#000"}`,
                        }}
                        className={`${openSansFontFamily.className} text-[14px]`}
                      >
                        {l.name}
                      </h4>
                      {l.sublinks?.length && (
                        <IoIosArrowDown
                          className={`duration-300 ${
                            dropDownIndex === i
                              ? "rotate-180 text-[#3B7DED]"
                              : "rotate-0"
                          }`}
                          fontSize={25}
                        />
                      )}
                    </li>
                    {l.sublinks?.length && (
                      <ul
                        style={{
                          display: dropDownIndex === i ? "block" : "none",
                          paddingLeft: "24px",
                        }}
                      >
                        {l.sublinks.map((sublink, i) => (
                          <li
                            style={{ padding: "8px 20px", color: "#82bd07" }}
                            key={i}
                          >
                            <Link href={sublink.link}>{sublink.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </React.Fragment>
                );
              })}
              {extraPhoneLinks.map((l, i) => (
                <li
                  onClick={() => {
                    router.push(l.link);
                  }}
                  key={i}
                  className={`flex ${styles.navLink} items-center uppercase cursor-pointer justify-between px-[24px] py-[12px]`}
                >
                  <h4
                    style={{
                      fontWeight: "bold",
                      transition: "all .3s ease-in-out",
                      color: `#000`,
                    }}
                    className={`${openSansFontFamily.className} text-[14px]`}
                  >
                    {l.name}
                  </h4>
                </li>
              ))}
            </ul>
          </div>

          <IoCloseOutline
            onClick={() => setOpen(false)}
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "40px",
              position: "absolute",
              top: "15px",
              right: "-55px",
            }}
          />
        </div>

        {/* cross */}
      </div>

      <div
        className={`${styles.menuShadow} ${open && styles.menuActive}`}
      ></div>
    </>
  );
};

export default MobileNav;
