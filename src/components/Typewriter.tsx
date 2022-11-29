import React, { FunctionComponent } from "react";
import TypewriterEffect from "typewriter-effect";

const Typewriter: FunctionComponent = () => (
  <div className="text-center typewriter">
    <TypewriterEffect
      options={{
        strings: "Welcome to odhran.dev",
        autoStart: true,
        loop: true,
        wrapperClassName: "font-lg",
      }}
    />
  </div>
);

export default Typewriter;
