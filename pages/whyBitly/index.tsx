import GetMore from '@/components/WhyBitly/GetMore/GetMore';
import IntegrateSeamlessly from '@/components/WhyBitly/IntegrateSeamlessly/IntegrateSeamlessly';
import MaximizePerformance from '@/components/WhyBitly/MaximizePerformance/MaximizePerformance';
import RecognizedBrands from '@/components/WhyBitly/RecognizedBrands/RecognizedBrands';
import RestAssured from '@/components/WhyBitly/RestAssured/RestAssured';
import WhyBitly from '@/components/WhyBitly/WhyBitly';
import WorkSmarter from '@/components/WhyBitly/WorkSmarter/WorkSmarter';
import YourAudience from '@/components/WhyBitly/YourAudience/YourAudience';
import React from 'react';

const whyBitly = () => {
    return (
        <div>
            <WhyBitly />
            <WorkSmarter />
            <GetMore />
            <MaximizePerformance />
            <IntegrateSeamlessly />
            <RestAssured />
            <RecognizedBrands />
            <YourAudience />
        </div>
    );
};

export default whyBitly;