import { AiOutlineLink, AiOutlineProfile } from "react-icons/ai";
import { MdOutlineAddLink, MdOutlineCampaign, MdOutlineDashboard, MdQrCode } from "react-icons/md";
import LinksBody from "./bodyCompo/LinksBody";
import QRBody from "./bodyCompo/QRBody";

export const DashboardLink = [
    {
        id: "side1",
        icon: <MdOutlineDashboard />,
        title: "Dashboard"
    },
    {
        id: "side2",
        icon: <AiOutlineLink />,
        title: "Links"
    },
    {
        id: "side3",
        icon: <MdQrCode />,
        title: "QR Codes"
    },
    {
        id: "side4",
        icon: <AiOutlineProfile />,
        title: "Link-in-bio"
    },
    {
        id: "side5",
        icon: <MdOutlineCampaign />,
        title: "Campaigns"
    },
    {
        id: "side6",
        icon: <MdOutlineAddLink />,
        title: "Custom links"
    }
]

export const bodyElementData = [
    {
        id: "e1",
        bodyElement: <LinksBody />,
        ref: "side2"
    },
    {
        id: "e2",
        bodyElement: <QRBody />,
        ref: "side3"
    },
] 