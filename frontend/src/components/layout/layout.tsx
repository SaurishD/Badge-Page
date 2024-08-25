import React, { ReactNode } from "react";

import AppHeader from "./header/AppHeader";
import AppFooter from "./AppFooter/AppFooter";
import { Container } from "@mui/material";

interface LayoutProps {
    children: ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <>
        <AppHeader />
        <Container>{children}</Container>
        <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
          <AppFooter />
        </div>
      </>
    );
  }
  
    export default Layout;