import CoursesCart from '@/components/Pricing/CoursesCart/CoursesCart';
import CustomDomain from '@/components/Pricing/CustomDomain/CustomDomain';
import DetailedFeature from '@/components/Pricing/DetailedFeature/DetailedFeature';
import Pricing from '@/components/Pricing/Pricing';
import YourAudience from '@/components/Pricing/YourAudience/YourAudience';
import React from 'react';

const pricing = () => {
    return (
        <div>
            <Pricing />
            <CoursesCart />
            <DetailedFeature />
            <CustomDomain />
            <YourAudience />
        </div>
    );
};

export default pricing;