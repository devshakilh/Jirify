import Contact from '@/components/Contact/Contact';
import Denver from '@/components/Contact/Denver/Denver';
import GetSupport from '@/components/Contact/GetSupport/GetSupport';
import Sales from '@/components/Contact/Sales/Sales';
import YourAudience from '@/components/Pricing/YourAudience/YourAudience';
import React from 'react';

const contact = () => {
    return (
        <div>
            <Contact />
            <GetSupport />
            <Sales />
            <Denver />
            <YourAudience />
        </div>
    );
};

export default contact;