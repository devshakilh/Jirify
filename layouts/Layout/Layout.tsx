import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import TopNav from "../../components/TopNav/TopNav";
import Footer from "@/components/Footer/Footer";


interface LayoutProps {
  children?: React.ReactNode;
  addContainer?: boolean;
  topNav?: boolean;
  navbar?: boolean;
}

const Layout = ({
  children,
  addContainer = false,
  topNav = true,
  navbar = true,
}: LayoutProps) => {
  return (
    <>
      {topNav ? <TopNav /> : null}
      {navbar ? <Navbar /> : null}
      {addContainer ? (
        <div className="main-container">{children ? children : null}</div>
      ) : children ? (
        children
      ) : null}

      <Footer />
    </>
  );
};

export default Layout;
