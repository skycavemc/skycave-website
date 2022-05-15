import React from "react";
import Helmet from "react-helmet";
import "../style/global.scss";

const Layout = ({ children }) => {
  return (
    <main>
      <Helmet>
        <title>SkyCave | Dein SkyBlock Server</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          src="https://kit.fontawesome.com/a01c807fba.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      {children}
    </main>
  );
}

export default Layout;