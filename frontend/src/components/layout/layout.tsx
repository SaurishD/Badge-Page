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
        <Container className="bg-primary-background text-text-primary">{children}</Container>
          <AppFooter />

      </>
    );
  }
  
    export default Layout;