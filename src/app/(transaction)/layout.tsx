import Container from "@/components/container";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const TransactionLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default TransactionLayout;
