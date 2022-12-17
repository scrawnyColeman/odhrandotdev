import React, { FunctionComponent, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout: FunctionComponent<Props> = ({ children }) => (
  <div className="fullscreen flex-center col-gap-2 px-2">{children}</div>
);

export default Layout;
