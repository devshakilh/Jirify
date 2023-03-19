import img1 from '../../../assets/images/pricing-img//1.svg';
import img2 from '../../../assets/images/pricing-img//2.svg';
import img3 from '../../../assets/images/pricing-img//3.svg';
export const cartData = [
    {
        id: "s1",
        image: img1,
        type: "Serverless",
        fee: "$0.10/million reads",
        limit: "(i) Per 1 million reads",
        description: "For serverless applications with variable or infrequent traffic. Minimal configuration required.",
        service: [
            {
                id: "1",
                title: "Up to 1TB of storage"
            },
            {
                id: "2",
                title: "Resources scale seamlessly to meet your workload"
            },
            {
                id: "3",
                title: "Pay only for the operations you run"
            },
            {
                id: "4",
                title: "Always-on security and backups"
            },
        ]
    },
    {
        id: "s2",
        image: img2,
        type: "Dedicated",
        fee: "$57/month",
        limit: "(i) Estimated based on $0.08 per hour",
        description: "For production applications with sophisticated workload requirements. Advanced configuration controls.",
        service: [
            {
                id: "1",
                title: "10GB to 4TB of storage"
            },
            {
                id: "2",
                title: "2GB to 768GB RAM"
            },
            {
                id: "3",
                title: "Network isolation and fine-grained access controls"
            },
            {
                id: "4",
                title: "Multi-region and multi-cloud options available"
            },
        ]
    },
    {
        id: "s3",
        image: img3,
        type: "Shared",
        fee: "$0/month",
        limit: "(i) Free forever for free clusters",
        description: "For learning and exploring MongoDB in a cloud environment. Basic configuration options.",
        service: [
            {
                id: "1",
                title: "512MB to 5GB of storage"
            },
            {
                id: "2",
                title: "Shared RAM"
            },
            {
                id: "3",
                title: "Upgrade to dedicated clusters for full functionality"
            },
            {
                id: "4",
                title: "No credit card required to start"
            },
        ]
    },
]