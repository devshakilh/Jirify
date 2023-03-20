
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";


const ResourceModal = ({
    setOpenResourceModal,
}: {
    setOpenResourceModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <div className="absolute w-[300px] md:w-[350px] z-20 bg-white h-[400px] top-[3.8rem] left-[-140px] md:right-[20px]  pt-8 transition-all ease-in-out shadow-lg rounded-md">
            <div className="text-center relative mb-6">
                <h2 className="text-[#2A5BD7] font-bold text-[24px]">Resource Center</h2>
                <div className="absolute top-0 right-5 font-bold cursor-pointer" onClick={() => setOpenResourceModal(false)}>x</div>
            </div>
            <div className="divider my-0 mx-5"></div>
            <div className="flex items-center justify-between px-5 py-5 cursor-pointer">
                <div className="">
                    <h5 className="font-bold">Help Center</h5>
                    <p className="text-[14px]">Search for articles</p>
                </div>
                <div className="">
                    <MdOutlineArrowForwardIos />
                </div>
            </div>
            <div className="divider my-0 mx-5"></div>
            <div className="flex items-center justify-between px-5 py-5 cursor-pointer">
                <div className="">
                    <h5 className="font-bold">Announcements</h5>
                    <p className="text-[14px]">Whats new?</p>
                </div>
                <div className="">
                    <MdOutlineArrowForwardIos />
                </div>
            </div>
            <div className="divider my-0 mx-5"></div>
        </div>

    );
};

export default ResourceModal;
