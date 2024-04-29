import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = (props) => {
  const { children } = props;

  return <main className="mx-auto max-w-[1536px]">{children}</main>;
};

export default Container;
