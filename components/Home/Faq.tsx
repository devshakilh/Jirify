import faqs from "@/Fake_data/home/faqs";
import React, { useState } from "react";
// import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const Faq = () => {
    const [expandedFaqId, setExpandedFaqId] = useState("");
    return (
        <section className="section px-[10px] md:px-0">
            <div className="">
                <div className="custom-shadow p-5 md:p-10">
                    <h4 className="text-[32px] font-extrabold leading-8 text-center">Frequently asked questions</h4>
                    <div className="mx-auto mt-10">
                        {faqs.map((f) => (
                            <div
                                key={f.id}
                                tabIndex={0}
                                onClick={() => {
                                    if (f.id !== expandedFaqId) {
                                        setExpandedFaqId(f.id);
                                    } else {
                                        setExpandedFaqId("");
                                    }
                                }}
                                className="cursor-pointer rounded-box"
                            >
                                <div className="flex justify-between py-3 items-start font-medium">
                                    <h1
                                        style={{
                                            color: f.id !== expandedFaqId ? "#3B7DED" : "#81bd07",
                                            width: "90%",
                                        }}
                                        className="section-description duration-300"
                                    >
                                        {f.title}
                                    </h1>
                                    <p className="flex items-start gap-x-1">
                                        <span
                                            className={`hidden md:inline duration-300 ${f.id !== expandedFaqId
                                                    ? "text-[#3B7DED]"
                                                    : "text-[#81bd07]"
                                                }`}
                                        >
                                            Details
                                        </span>
                                        <HiChevronDown
                                            fontSize={25}
                                            className="duration-300"
                                            style={{
                                                color: f.id !== expandedFaqId ? "#3B7DED" : "#81bd07",
                                                transform: `${f.id !== expandedFaqId
                                                        ? "rotate(0deg)"
                                                        : "rotate(180deg)"
                                                    }`,
                                            }}
                                        />
                                    </p>
                                </div>
                                <div
                                    className={f.id === expandedFaqId ? "block p-5" : "hidden"}
                                >
                                    <p>{f.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
