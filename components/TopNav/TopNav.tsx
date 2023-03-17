import Image from "next/image";
import React from "react";
import Select from "react-select";
import styles from "./TopNav.module.css";
import bangladesh from "../../assets/countries/bangladesh.png";
import usa from "../../assets/countries/usa.png";

const TopNav = ({ className }: { className?: string }) => {
  const languages = [
    {
      value: "english",
      label: "English",
      image: usa,
    },
    {
      value: "bangla",
      label: "Bangla",
      image: bangladesh,
    },
  ];
  return (
    <div className={`w-full h-[38px] bg-[#F7F7F7] ${className}`}>
      <div className="h-full main-container mx-auto flex text-black justify-center md:justify-end items-center">
        <Select
          className={`${styles.languageChange} border-none flex-1 md:flex-none justify-end`}
          classNamePrefix="select"
          options={languages}
          isSearchable={false}
          styles={{
            control: (base) => ({
              ...base,
              border: 0,
              // This line disable the blue border
              boxShadow: "none",
              backgroundColor: "#f7f7f7",
            }),
          }}
          defaultValue={languages[0]}
          formatOptionLabel={(option) => (
            <div className="flex items-center gap-2">
              {option.image ? (
                <Image
                  style={{
                    width: "30px",
                    objectFit: "contain",
                  }}
                  src={option.image}
                  alt={option.label}
                  className="w-5 md:max-w-none"
                />
              ) : (
                ""
              )}
              <span className="text-[14px] md:text-[14px]">{option.label}</span>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default TopNav;
