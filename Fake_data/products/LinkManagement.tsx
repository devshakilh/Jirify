import brandingimg from '../../assets/products/link_management/bitly_branding_link-management.png'
import smsimg from '../../assets/products/link_management/bitly-sms-link-management.png'
import capignimg from '../../assets/products/link_management/bitly_campaign-management_link-mangement.png'
import link_managementimg from '../../assets/products/link_management/bitly-lm-link-management.png'
import reportingimg from '../../assets/products/link_management/bitly-reporting-link-management.png'


export const LinkManagementData = [
    {
        id: "1",
        img: brandingimg,
        smallTitle: "Branding",
        title: "Turn your links into brand assets",
        detail: "Build links that are more readable, trustworthy and likely to be clicked.",
        points: [
            {
                id: "s1",
                point: "Create custom domains, and replace “bit.ly” with your own brand name"
            },
            {
                id: "s2",
                point: "Customize link back-halves (often called “URL slugs”) so people know where you’re sending them"
            },
            {
                id: "s3",
                point: "Automatically brand links with your custom domain whenever someone shortens a long URL using Bitly"
            },
        ]
    },
    {
        id: "2",
        img: smsimg,
        smallTitle: "SMS & Customer Engagement",
        title: "Get more engagement with your customer text notifications",
        detail: "Use branded short links to personalize 1:1 messages to customers and prospects.",
        points: [
            {
                id: "s1",
                point: "Create custom domains and link back-halves to show customers they’re from a trusted source"
            },
            {
                id: "s2",
                point: "Securely shorten links so they don’t take up valuable character count"
            },
            {
                id: "s3",
                point: "Use Bitly’s API to programmatically generate millions of short branded links per day"
            },
        ]
    },
    {
        id: "3",
        img: capignimg,
        smallTitle: "Campaign Management",
        title: "All your links in one place",
        detail: "Aggregate, manage, and track all of your links from a single, centralized location.",
        points: [
            {
                id: "s1",
                point: "Create, manage, and track marketing campaigns from email and social media, to digital ads and offline media, all in one place"
            },
            {
                id: "s2",
                point: "Build UTM parameters and create links in bulk for marketing channels and campaigns, all at once"
            },
            {
                id: "s3",
                point: "View performance across paid, earned and owned channels, down to city-level and organic shares"
            },
        ]
    },
    {
        id: "4",
        img: link_managementimg,
        smallTitle: "Link Management",
        title: "Stay flexible and agile",
        detail: "Organize, configure, and edit links to grow with your audience.",
        points: [
            {
                id: "s1",
                point: "Use tags to organize links and make searching easy. Track channels you share them on, as well as configure them for marketing campaigns"
            },
            {
                id: "s2",
                point: "Search and browse existing links by name and date or further filter them by tags, custom branding, or hidden links"
            },
            {
                id: "s3",
                point: "Assign and redirect a new URL to any of your links, including QR Codes, to correct a destination error, update a destination, or expire old links"
            },
        ]
    },
    {
        id: "5",
        img: reportingimg,
        smallTitle: "Marketing Reporting & Analytics",
        title: "Understand what’s resonating with your audience",
        detail: "Capture data with every click; make smarter decisions about which content and platforms to focus your efforts and dollars on.",
        points: [
            {
                id: "s1",
                point: "Track organic shares across earned media, including links other Bitly users create that point to your content"
            },
            {
                id: "s2",
                point: "Get insights down to the local city-level to see what content your audience is excited about"
            },
            {
                id: "s3",
                point: "Export click data into other analytics for ad-hoc reporting and deeper analysis on your audiences and content"
            },
        ]
    },
]