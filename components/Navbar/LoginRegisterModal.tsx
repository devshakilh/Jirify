import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import logo from "../../assets/images/logo.png";

const LoginRegisterModal = ({
  setOpenModal,
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="absolute z-50 bg-white top-[4.5rem] right-4 md:right-[128px] px-12 py-8 transition-all ease-in-out shadow-lg rounded-md">
      <div className="flex justify-between">
        <Image
          src={logo}
          alt="logo"
          style={{ objectFit: "contain" }}
          width="180"
        />
        <button className="text-md" onClick={() => setOpenModal(false)}>
          <IoCloseOutline fontSize={25} />
        </button>
      </div>
      <div className="mt-12 flex gap-12">
        <div>
          <Link
            href="/authentication/signup"
            className="cursor-pointer flex items-center justify-center md:px-11 w-full py-2 rounded-sm border border-slate-300 text-[10px] md:text-sm hover:bg-[#3B7DED] hover:text-white mb-3"
          >
            <span>Register</span>
          </Link>
          <p className="text-[9px] md:text-[14px]">
            Already have an account?{" "}
            <Link className="text-[#3B7DED]" href="/authentication/signin">
              Login
            </Link>
          </p>
        </div>
        <div>
          <Link
            href="/login"
            className="cursor-pointer flex items-center justify-center md:px-11 w-full py-2 rounded-sm border border-slate-300 hover:bg-[#3B7DED] hover:text-white mb-3 text-[10px] md:text-sm"
          >
            <span>Login</span>
          </Link>

          <p className=" text-[9px] md:text-[14px]">
            {"Don't have an account?"} ?{" "}
            <Link className="text-[#3B7DED]" href="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterModal;
