import Navbar from "@/views/navbar";
import Container from "@/components/container";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};

export default MainLayout;
