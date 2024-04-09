import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = (props) => {
  const { children } = props;

  return <div className="max-w-[1536px] mx-auto">{children}</div>;
};

export default Container;
