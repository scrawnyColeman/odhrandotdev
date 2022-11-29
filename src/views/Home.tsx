import React, { FunctionComponent } from "react";

import { Layout, LinkedIn, SEO, Typewriter } from "../components";
import { LINKEDIN_URL } from "../constants";

const HomeView: FunctionComponent = () => (
  <Layout>
    <SEO />
    <Typewriter />

    <LinkedIn
      handleAction={() => {
        window.open(LINKEDIN_URL, "Odhran's LinkedIn");
      }}
    />
  </Layout>
);

export default HomeView;
