import Link from "next/link";
import { useState } from "react";
import { links } from "./NavLinksData";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useRouter } from "next/router";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [clickedSub, setClickedSub] = useState("Web Development");
  const router = useRouter();
  // console.log(heading);
  const value = true;

  return (
    <>
      {links?.map((linksub) => {
        if (linksub.sublinks?.length) {
          return (
            <div key={linksub.id}>
              <div className="px-1 text-left md:cursor-pointer group">
                <h1
                  className={`py-7 flex justify-between items-center md:pr-2 xl:pr-5 gap-0 text-sm md:text-xs hover:text-red-500`}
                  onMouseEnter={() => {
                    // heading !== link.name ? setHeading(link.name) : setHeading("Products");
                    heading !== linksub.name && setHeading(linksub.name);
                    // setSubHeading("");
                  }}
                  onMouseLeave={() => {
                    setHeading("");
                  }}
                >
                  {linksub.name}
                  {linksub.sublinks?.length && (
                    <span className="text-xl inline ml-2">
                      <IoIosArrowDown
                        className={`duration-300 ${
                          heading === linksub.name ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </span>
                  )}
                </h1>
                {linksub.sublinks?.length && (
                  <div className="absolute top-[4.5rem] hidden group-hover:md:block hover:md:block bg-[#535b66] transition-all ease-in shadow-xl">
                    <div
                      className={`bg-white ${
                        heading === "Products" ? "flex" : ""
                      }`}
                    >
                      <div
                        className={` ${
                          subHeading === "Products" ? "border-r w-60" : ""
                        }`}
                      >
                        {linksub?.sublinks?.map((subcategory) => (
                          <div
                            key={subcategory.id}
                            className="grid grid-cols-1"
                          >
                            <Link
                              href={subcategory.link}
                              onMouseOver={() =>
                                setClickedSub(subcategory.name)
                              }
                              className="text-sm lg:text-md font-normal hover:bg-[#E5F1FF] hover:text-[#3B7DED] px-8 py-3 w-full block mb-0"
                            >
                              {subcategory.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile menus */}
              <div
                className={`${
                  heading === linksub.name ? "md:hidden" : "hidden"
                }`}
              >
                {/* sublinks */}
                {linksub?.sublinks?.map((slinks, index) => (
                  <div key={slinks?.id}>
                    <div>
                      <h1
                        onClick={() =>
                          subHeading !== slinks.name
                            ? setSubHeading(slinks.name)
                            : setSubHeading("")
                        }
                        className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                      >
                        {slinks.name}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        } else {
          return (
            <li key={linksub.id} className="md:pr-2 xl:pr-5">
              <Link
                className={`hover:text-red-500 text-sm md:text-xs ${
                  router.pathname.slice(1, router.pathname.length) ===
                    linksub.link && "text-red-500"
                } `}
                href={linksub.link}
              >
                {linksub.name}
              </Link>
            </li>
          );
        }
      })}
    </>
  );
};

export default NavLinks;
