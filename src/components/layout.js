import React from "react";
import Helmet from "react-helmet";
import "../style/global.scss";
import Nav from "./nav";

const Layout = ({ children }) => {
  const navEntries = [
    {
      link: "/",
      caption: "Home",
    },
    {
      link: "#vote",
      caption: "Voten",
    },
    {
      link: "#join",
      caption: "Joinen",
    },
    {
      link: "/",
      caption: "Regeln",
    },
    {
      link: "https://skycave.buycraft.net/",
      caption: "Store",
      newTab: true,
    },
    {
      link: "https://skycave.gitbook.io/skyblock/",
      caption: "Hilfe & Wiki",
      newTab: true,
    },
  ];

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

      <Nav entries={navEntries} />

      {children}
    </main>
  );
}

export default Layout;