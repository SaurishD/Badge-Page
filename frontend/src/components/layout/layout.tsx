import React, { ReactNode } from "react";

import AppHeader from "./header/AppHeader";
import AppFooter from "./AppFooter/AppFooter";

interface LayoutProps {
    children: ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <>
        <AppHeader />
        <main>{children}</main>
        <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
          <AppFooter />
        </div>
      </>
    );
  }
  
    export default Layout;