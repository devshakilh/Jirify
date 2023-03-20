import React from 'react';
import { FaFilter } from 'react-icons/fa';

const LinksBody = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h2 className="text-[28px] font-bold">Links</h2>
                <div className="flex gap-2">
                    <div className="bg-[#2A5BD7] hidden md:block text-white px-4 py-1 rounded-md cursor-pointer">Upgrade for custom links</div>
                    <div className="bg-[#2A5BD7] md:hidden text-white px-4 py-1 rounded-md cursor-pointer">Upgrade</div>
                    <div className="bg-slate-100 px-4 py-1 rounded-md cursor-pointer hidden md:block">Select date</div>
                </div>
            </div>
            <div className="flex gap-10 my-4">
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                        <span className="text-[#273144] ml-2">Date created</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                        <span className="text-[#273144] ml-2">Top performing</span>
                    </label>
                </div>
            </div>
            <div className=" md:flex gap-4">
                <div className="bg-[#2A5BD7] text-white flex justify-center items-center gap-2 px-4 py-1 rounded-md">
                    <FaFilter />
                    <p className="">Filters</p>
                </div>
                <select className="select bg-white select-bordered w-full md:max-w-xs  md::w-[250px] my-5 md:my-0">
                    <option className='' disabled selected>Tag</option>
                </select>
                <div className="form-control">
                    <label className="label cursor-pointer flex justify-start">
                        <input type="checkbox" className="checkbox checked:bg-blue-500" />
                        <span className="ml-2">Hidden links only</span>
                    </label>
                </div>
            </div>
            <div className="flex flex-col md:flex-row bg-slate-100 mt-8 h-[400px]">
                <div className="md:w-[30%] border p-5">
                    <div className="bg-[#FF6116] text-white w-full text-center py-2 rounded-sm font-bold cursor-pointer">Create your first link</div>
                </div>
                <div className="md:w-[70%] border px-3 md:px-16 py-8">
                    <p className="text-[#273144]">After your links get clicks, we will display your link information, options, and performance data.</p>
                </div>
            </div>
        </div>
    );
};

export default LinksBody;