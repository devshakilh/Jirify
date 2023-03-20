import BestInClass from '@/components/DigitalMarketing/BestInClass/BestInClass';
import DigitalMarketers from '@/components/DigitalMarketing/DigitalMarketers/DigitalMarketers';
import DigitalMarketing from '@/components/DigitalMarketing/DigitalMarketing';
import KeyFeatures from '@/components/DigitalMarketing/KeyFeatures/KeyFeatures';
import RecognizedBrands from '@/components/WhyBitly/RecognizedBrands/RecognizedBrands';
import YourAudience from '@/components/WhyBitly/YourAudience/YourAudience';
import React from 'react';

const digitalMarketing = () => {
    return (
        <div>
            <DigitalMarketing />
            <KeyFeatures />
            <RecognizedBrands />
            <BestInClass />
            <DigitalMarketers />
            <YourAudience />
        </div>
    );
};

export default digitalMarketing;