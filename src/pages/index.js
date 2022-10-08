import * as React from "react";
import Layout from "../components/layout.js";
import join from "../../static/images/join.png";

const IndexPage = () => {
  return (
    <Layout>
      <section className="full-height" id="top">
        <div className="container">
          <div className="row">
            <div className="column-centered">
              <h1 className="fancy-headline">SkyCave.de</h1>
              <h2 className="fancy-subheadline">Dein SkyBlock Netzwerk</h2>
              <h3 className="fancy-after">
                Wir bieten seit 2015 das beste Rundum-Erlebnis für SkyBlock im
                deutschsprachigen Raum. Einsteigerfreundlich, auf allen
                Plattformen und immer aktuell! Schließe dich uns noch heute an.
              </h3>
              <div className="cta-area">
                <a href="#why-us" className="blue-cta">
                  Warum wir?
                </a>
                <a href="#why-us" className="white-cta">
                  Joine jetzt!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="column-left col-2 col-center-v">
              <h1>Joinen</h1>
              <p>
                Unser Server ist rund um die Uhr für jeden zugänglich. Und das auf allen Geräten: PC, Handy, XBox, Switch, und alle weiteren!
              </p>
              <p>
                Nutze dafür die neuste Minecraft Version (1.19.2 für die Java Edition) und füge den Server mit der adresse skycave.de hinzu.
              </p>
            </div>
            <div className="column-right col-2 col-center-v">
              <img src={join} alt="skycave.de" />
            </div>
          </div>
          <div className="row">
            <div className="column-right">
              <h1>Voten</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="column-centered">
              <p>
                © 2015 - {new Date().getFullYear()} by SkyCave.de |{" "}
                <a href="/legal" className="alt-link">
                  Impressum
                </a>{" "}
                |{" "}
                <a href="/privacy" className="alt-link">
                  Datenschutzerklärung
                </a>{" "}
                | Alle Rechte vorbehalten
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
