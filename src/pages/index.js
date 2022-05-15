import * as React from "react";
import Layout from "../components/layout.js";

const IndexPage = () => {
  return (
    <Layout>
      <section className="full-height" id="top">
        <div className="container">
          <div className="row">
            <div className="column-centered">
              <h1>SkyCave.de</h1>
              <h2 className="blue-headline">Dein SkyBlock Netzwerk</h2>
              <p className="limited-p">
                Unser Forum hat leider geschlossen. Wir bereiten eine neue
                Webseite für dich vor. Vielen Dank für deine Geduld!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="column-centered col-3 padding-col">
              <div className="box">
                <img
                  className="small-img"
                  src="../static/images/statistics.png"
                  alt="Voten"
                />
                <h1>Voten</h1>
                <p>
                  Durch das Voten unterstützt du unseren Server und erhälst
                  Ingame Premien.
                </p>
                <a
                  href="https://minecraft-server.eu/vote/index/1BE38"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Vote 1
                </a>
                <a
                  href="https://www.minecraft-serverlist.net/vote/30194"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Vote 2
                </a>
                <a
                  href="https://www.serverliste.net/vote/3859"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Vote 3
                </a>
              </div>
            </div>
            <div className="column-centered col-3 padding-col">
              <div className="box">
                <img
                  className="small-img"
                  src="../static/images/game.png"
                  alt="Regeln"
                />
                <h1>Joinen</h1>
                <p>
                  Um auf unserem Server zu spielen, brauchst du mindestens die
                  1.16.4. Trage unter Multiplayer die folgende Adresse für
                  unseren Server ein:
                </p>
                <span className="address">skycave.de:25565</span>
              </div>
            </div>
            <div className="column-centered col-3 padding-col">
              <div className="box">
                <img
                  className="small-img"
                  src="../static/images/notification-bell.png"
                  alt="Social Media"
                />
                <h1>Social Media</h1>
                <p>
                  Verpasse keine Neuigkeiten mehr, indem du uns folgst und
                  unserem Discord beitrittst.
                </p>
                <div>
                  <a
                    href="https://www.instagram.com/skycave.de/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://discord.gg/zdmkTvg"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                  >
                    <i className="fab fa-discord"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="column-left col-3 padding-col">
              <h1>Store</h1>
              <p>
                Du möchtest uns unterstützen? Wir freuen uns über Spenden in
                unserem{" "}
                <a
                  href="https://skycave.buycraft.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Store
                </a>
                !
              </p>
            </div>
            <div className="column-left col-3 padding-col">
              <h1>Discord</h1>
              <p>
                Auf unserem{" "}
                <a
                  href="https://discord.gg/zdmkTvg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Discord
                </a>{" "}
                kannst du dich mit anderen Spielern austauschen und Fragen
                stellen.
              </p>
            </div>
            <div className="column-left col-3 padding-col">
              <h1>Wiki</h1>
              <p>
                In unserem{" "}
                <a
                  href="https://skycave.gitbook.io/skyblock/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Wiki
                </a>{" "}
                sind alle möglichen Informationen rund um unseren Server
                zusammengefasst.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="column-centered">
              <p>
                © {new Date().getFullYear()} by SkyCave.de |{" "}
                <a href="/rules" className="alt-link">
                  Regeln
                </a>{" "}
                |{" "}
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
}

export default IndexPage;
