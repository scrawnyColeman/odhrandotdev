import React, { FunctionComponent } from "react";

import { Layout, LinkedIn, SEO, Typewriter } from "../components";

const HomeView: FunctionComponent = () => (
  <Layout>
    <SEO />
    <Typewriter />
    <LinkedIn />
  </Layout>
);

export default HomeView;
