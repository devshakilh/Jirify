import YourAudience from '@/components/Pricing/YourAudience/YourAudience';
import OurReviewer from '@/components/Reviews/OurReviewer/OurReviewer';
import Reviews from '@/components/Reviews/Reviews';
import React from 'react';

const reviews = () => {
    return (
        <div>
            <Reviews />
            <OurReviewer />
            <YourAudience />
        </div>
    );
};

export default reviews;