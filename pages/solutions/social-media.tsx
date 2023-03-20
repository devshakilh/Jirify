import KeyFeatures from "@/components/SocialMedia/KeyFeatures/KeyFeatures";
import ManagementPlatform from "@/components/SocialMedia/ManagementPlatform/ManagementPlatform";
import SocialMarketers from "@/components/SocialMedia/SocialMarketers/SocialMarketers";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import RecognizedBrands from "@/components/WhyBitly/RecognizedBrands/RecognizedBrands";
import YourAudience from "@/components/WhyBitly/YourAudience/YourAudience";
import Image from "next/image";
import React from "react";

const socialMedia = () => {
    return (
        <div>
            <SocialMedia />
            <KeyFeatures />
            <RecognizedBrands />
            <ManagementPlatform />
            <SocialMarketers />
            <YourAudience />
        </div>
    );
};

export default socialMedia;