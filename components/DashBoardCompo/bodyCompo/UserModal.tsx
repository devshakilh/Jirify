import React from "react";

const UserModal = ({
    setOpenModal,
}: {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <div className="absolute z-50 bg-white top-[3.8rem] right-4 md:right-[20px]  pt-8 transition-all ease-in-out shadow-lg rounded-md">
            <div className="flex gap-3 justify-start items-center px-6">
                <div className="w-12 h-12 rounded-full bg-black text-white flex justify-center items-center text-[20px]">U</div>
                <div className="">
                    <p className="">User</p>
                    <p className="">example@gmail.com</p>
                </div>
            </div>
            <div className="divider"></div>
            <div className="flex px-6 justify-between">
                <div className="">
                    <p className="text-[16px]">Guest Account</p>
                    <p className="text-[12px]">Free account</p>
                </div>
                <div className="text-white bg-green-800 px-2 py-1 font-semibold">Upgrade</div>
            </div>
            <div className="divider"></div>
            <div className="w-full ">
                <div className="w-full hover:bg-slate-100 px-6 py-2">Support</div>
                <div className="w-full hover:bg-slate-100 px-6 py-2">API documentation</div>
                <div className="w-full hover:bg-slate-100 px-6 py-2">Jirily Terms</div>
            </div>
            <div className="divider my-0"></div>
            <div className="w-full hover:bg-slate-100 px-6 py-2 mb-2">Sign Out</div>
        </div>

    );
};

export default UserModal;
