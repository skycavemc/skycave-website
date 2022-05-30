import * as React from "react";
import Layout from "../components/layout.js";

const Rules = () => {
  return (
    <Layout>
      <section class="padding-section" id="regeln">
        <div class="container">
          <div class="row">
            <div class="column-centered">
              <h1>Regelwerk</h1>
              <p>
                <a href="/" class="alt-link">
                  Home
                </a>{" "}
                /{" "}
                <a href="/rules" class="alt-link">
                  Regeln
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="padding-section">
        <div class="container">
          <div class="row">
            <div class="column-left">
              <h2>§0 Definitionen</h2>
              <ol>
                <li>
                  Spam: Der wiederholte Ausdruck von einem gleichen oder
                  ähnlichen Wortlaut innerhalb einer kurzen Zeitspanne
                </li>
                <li>
                  Clock (Redstone): Ein Mechanismus, der sich ohne äußere
                  Einflüsse (zum Beispiel durch Rekursion) in regelmäßigen oder
                  unregelmäßigen Abständen aktiviert und wieder deaktiviert.
                </li>
              </ol>

              <h2>§1 Gültigkeit</h2>
              <ol>
                <li>
                  Mit dem Betreten unseres Servers bestätigst du, dass du die
                  Regeln gelesen, verstanden und akzeptiert hast.
                </li>
                <li>
                  Neben diesem Regelwerk gelten die AGB, Richtlinien &
                  EULA-Bestimmungen von Mojang.
                </li>
                <li>
                  Änderungen am Regelwerk sind sofort gültig. Jeder ist selbst
                  dafür verantwortlich, sich auf dem neuesten Stand zu halten.
                  Unwissenheit schützt nicht vor Strafe!
                </li>
                <li>
                  Den Anweisungen eines Teammitgliedes ist stets Folge zu
                  leisten.
                </li>
                <li>
                  Jeder Spieler ist selbst für sein Handeln verantwortlich.
                </li>
                <li>
                  In Sonderfällen kann ein Teammitglied nach eigenem Ermessen
                  bestrafen.
                </li>
              </ol>

              <h2>§2 Strafen</h2>
              <ol>
                <li>
                  Nichteinhalten von Anweisungen eines Teammitgliedes kann zu
                  einer Bestrafung führen.
                </li>
                <li>
                  Wenn Spieler eine Strafe für zu hart oder ungerecht erachtet,
                  kann im Discord eine Milderung oder Aufhebung beantragt
                  werden. Wir bearbeiten Anträge nur, wenn die Strafe mit einer
                  Dauer von mind. 24 Stunden ausgesprochen wurde.
                </li>
                <li>
                  Das Umgehen einer Strafe ist untersagt und wird weitere
                  Strafen mit sich ziehen.
                </li>
                <li>
                  Mögliche Strafen:
                  <ul>
                    <li>
                      Ausschluss vom Minecraft Server (temporär oder dauerhaft)
                    </li>
                    <li>
                      Ausschluss aus dem Chat auf dem Minecraft Server
                      (temporär)
                    </li>
                    <li>Ausschluss vom Discord Server (dauerhaft)</li>
                  </ul>
                </li>
                <li>
                  Entbannungsanträge können nach einer Frist von 30 Tagen direkt
                  an ein Teammitglied gesendet werden.
                </li>
              </ol>

              <h2>§3 Kommunikation mit Mitspielern</h2>
              <ol>
                <li>
                  Jeder einzelne Spieler ist mit Respekt zu behandeln,
                  unabhängig von seinem Verhalten.
                </li>
                <li>
                  Jeder Konflikt muss auf sachlicher Ebene gelöst werden.
                  Beleidigungen gehören nicht dazu und werden unter Strafe
                  gestellt.
                </li>
                <li>Drohungen und provokante Äußerungen sind verboten.</li>
                <li>
                  Diskriminierung und Radikalismus jeglicher Art sind
                  strengstens untersagt.
                </li>
                <li>Jegliche obszöne Ausdrücke sind unerwünscht.</li>
                <li>Das Betteln nach jeglichen Gegenständen ist untersagt.</li>
                <li>
                  Das Verbreiten von vertraulichen Daten (hierzu zählen
                  beispielsweise private Daten von Usern) ist untersagt.
                </li>
                <li>Spam [Def. 1], Caps o.Ä. sind untersagt.</li>
                <li>Das Umgehen vom Chatfilter ist untersagt.</li>
                <li>
                  Der Handelschat hat einen Cooldown von 15 Minuten und ist zum Hervorheben von Handelsangeboten vorgesehen.
                </li>
                <li>
                  Der Eventchat (/e) ist für Spielerevents gedacht (bsp.
                  Dropevent, Quiz,etc.)
                </li>
                <li>
                  Werbung in allen Formen ist verboten. Dazu gehören zum
                  Beispiel:
                  <ul>
                    <li>Werbung für andere Minecraft Server</li>
                    <li>
                      Werbung für einen Streaming Dienst Account (zum Beispiel
                      YouTube / Twitch)
                    </li>
                    <li>
                      Werbung für verbotene Modifikationen / Accountverkäufe
                    </li>
                  </ul>
                </li>
              </ol>

              <h2>§4 Clientmodifikationen</h2>
              <ol>
                <li>
                  Jegliche Modifikationen, egal ob am Client oder extern, welche
                  einen Vorteil gegenüber anderen Spielern bieten, sind
                  strengstens untersagt.
                </li>
                <li>
                  Das Betreten des Servers mit einer solchen Modifikation stellt
                  an sich bereits einen Regelverstoß dar.
                </li>
                <li>
                  Das Umgehen des AFK-Kicks in jeglicher Form ist verboten. Dazu
                  zählt auch das automatische Neubetreten des Servers.
                </li>
              </ol>
              <details>
                <summary>Verbotene Clientmodifikationen</summary>
                <div>
                  Diese Liste dient rein zur Orientierung!
                  <ul>
                    <li>AbortBreaking</li>
                    <li>AimBot</li>
                    <li>AirJump</li>
                    <li>AirLadder</li>
                    <li>AntiAFK</li>
                    <li>AntiBlind</li>
                    <li>AntiBot</li>
                    <li>AntiCactus</li>
                    <li>AntiPotion</li>
                    <li>AntiHunger</li>
                    <li>ArrowCam Mod</li>
                    <li>AtAllProvider</li>
                    <li>AutoArmor</li>
                    <li>AutoBow</li>
                    <li>AutoBreak</li>
                    <li>AutoClicker</li>
                    <li>AutoFish</li>
                    <li>AutoPot</li>
                    <li>AutoRespawn</li>
                    <li>AutoSoup</li>
                    <li>AutoTool</li>
                    <li>AutoWalk</li>
                    <li>AutoWeapon</li>
                    <li>BedGodMode</li>
                    <li>Blink</li>
                    <li>BlockWalk</li>
                    <li>BowAimbot</li>
                    <li>Breadcrumbs</li>
                    <li>BufferSpeed</li>
                    <li>BurningMod</li>
                    <li>BugUp</li>
                    <li>CameraClip</li>
                    <li>Chams</li>
                    <li>ChestAura</li>
                    <li>ChestStealer</li>
                    <li>CivBreak</li>
                    <li>Clip</li>
                    <li>ConsoleSpammer</li>
                    <li>Crasher</li>
                    <li>Criticals</li>
                    <li>(Skin-)Derp</li>
                    <li>Eagle</li>
                    <li>ESP</li>
                    <li>FastBow</li>
                    <li>FastBreak</li>
                    <li>FastClimb</li>
                    <li>FastPlace</li>
                    <li>FastStairs</li>
                    <li>FastUse</li>
                    <li>Fly</li>
                    <li>FreeCam</li>
                    <li>Freeze</li>
                    <li>Fucker</li>
                    <li>Fullbright</li>
                    <li>Ghost</li>
                    <li>GhostHand</li>
                    <li>Glide</li>
                    <li>GodMode</li>
                    <li>HeadRotations</li>
                    <li>HighJump</li>
                    <li>HitBox</li>
                    <li>IceSpeed</li>
                    <li>InventoryCleaner</li>
                    <li>InventoryMove</li>
                    <li>InventoryTweaks</li>
                    <li>ItemTeleport</li>
                    <li>Jesus / WaterWalk / LiquidWalk</li>
                    <li>KeepAlive</li>
                    <li>KeepContainer</li>
                    <li>Killaura / Forcefield / MultiAura</li>
                    <li>LadderJump</li>
                    <li>Lagswitch</li>
                    <li>LongJump</li>
                    <li>MLGHelper</li>
                    <li>MoreCarry</li>
                    <li>MultiActions</li>
                    <li>MouseTweaks</li>
                    <li>NameTags</li>
                    <li>NoClip</li>
                    <li>NoFall</li>
                    <li>NoJumpDelay</li>
                    <li>NoPitchLimit</li>
                    <li>NoRotateSet</li>
                    <li>NoSlow</li>
                    <li>NoWeb</li>
                    <li>Nuker</li>
                    <li>Paralyze</li>
                    <li>Parkour</li>
                    <li>PerfectHorseJump</li>
                    <li>Phase</li>
                    <li>PingSpoof</li>
                    <li>PortalMenu</li>
                    <li>Projectiles</li>
                    <li>RapidFire</li>
                    <li>Reach</li>
                    <li>Regen / FastHeal</li>
                    <li>SafeWalk</li>
                    <li>Scaffold</li>
                    <li>SlimeJump</li>
                    <li>Smart-Moving Mod</li>
                    <li>Speed</li>
                    <li>Spammer</li>
                    <li>Spider</li>
                    <li>Step</li>
                    <li>Strafe</li>
                    <li>SuperKnockback</li>
                    <li>Teleport</li>
                    <li>TeleportHit</li>
                    <li>Timer</li>
                    <li>Tower</li>
                    <li>Tracers / Wireframe</li>
                    <li>Trigger</li>
                    <li>TrueSight</li>
                    <li>UnicodeChat</li>
                    <li>VehicleOneHit</li>
                    <li>Velocity / NoKnockback / AntiKnockback</li>
                    <li>WallClimb</li>
                    <li>WaterSpeed</li>
                    <li>X-Ray</li>
                    <li>Zoot</li>
                  </ul>
                </div>
              </details>

              <h2>§5 Farming</h2>
              <ol>
                <li>
                  Interaktionen mit der Welt, die ablaufen ohne dass der Spieler
                  anschreibbar ist, sind verboten. Dazu zählen zum Beispiel der
                  Abbau von Stein, das Angeln oder das Töten von Mobs.
                  ("AFK-Farming")
                </li>
                <li>
                  Redstone Schaltungen, die zu einer Clock [Def. 2] gebaut
                  wurden, sind verboten. Selbst wenn der Mechanismus per Hand
                  abschaltbar ist, steht der Bau einer solchen Anlage unter
                  Strafe. Im Zweifelsfall kann und sollte vor der Inbetriebnahme
                  ein Teammitglied um Beurteilung gefragt werden.
                </li>
                <li>
                  Man ist verpflichtet, bei Nichtbenutzen einer Mobfarm alle
                  dadurch entstehenden Mobs sowie Items zu töten bzw.
                  aufzusammeln.
                </li>
                <li>Endlos fahrende Loren sind verboten.</li>
                <li>
                  Mob-Spawner sind auf normalen Inseln auf 10 limitiert (davon
                  max. 1 Eisengolem Spawner) und auf SB-Inseln auf 30 limitiert
                  (davon max. 3 Eisengolem Spawner).
                </li>
                <li>
                  Herkömmliche Eisenfarmen mit Dorfbewohnern werden jeweils als
                  ein Eisengolem Spawner gezählt.
                </li>
                <li>
                  Normale Mobfarmen (mit einem dunklen Raum als Spawnbereich)
                  dürfen maximal 2 Etagen besitzen und die Größe von 4 Chunks
                  nicht überschreiten (entspricht max. 32x32 Blöcken).
                </li>
                <li>
                  Es dürfen höchstens 12 Dorfbewohner pro Insel für Farming
                  eingesetzt werden.
                </li>
                <li>
                  Dörfer oder sogenannte Breeder (Zuchtmaschinen) müssen umzäunt
                  oder eingebaut sein, sodass die Dorfbewohner den Chunk nicht
                  verlassen können. Es dürfen maximal 8 Betten verbaut werden.
                </li>
                <li>
                  Lange Trichterwege müssen mit den levelbaren Trichtern
                  übergangen werden.
                </li>
                <li>
                  Der Nether darf nicht für (halb-)automatische Farmen genutzt
                  werden, alle Items müssen manuell gefarmt werden.
                </li>
              </ol>

              <h2>§6 Account und Sicherheit</h2>
              <ol>
                <li>Der Betrug (Scam) von Usern ist verboten.</li>
                <li>
                  Der Eigentümer einer Insel ist selbst für den Schaden
                  verantwortlich, den andere Spieler auf seiner Insel
                  verrichten. Nur wenn es feste Beweismittel gibt, werden Items
                  erstattet.
                </li>
                <li>
                  Ein Spieler darf den Server mit maximal 5 verschiedenen
                  Accounts betreten.
                </li>
                <li>
                  Jeder Account, mit dem ein Spieler den Server betritt, muss
                  ein original erworbener Minecraft Account sein, über den er
                  alleinigen Zugriff besitzt. Sogenannte Alt-Accounts sind
                  demnach verboten und ziehen eine Strafe für ALLE Accounts des
                  Spielers mit sich.
                </li>
                <li>
                  Jeder ist für seinen Account selbst verantwortlich. Falls also
                  eine andere Person auf dem Account gegen die Regeln verstößt,
                  wird trotzdem die jeweilige Strafe verhängt.
                </li>
                <li>
                  Das hinterlistige Töten in Skyblock ist verboten. Dazu gehören
                  beispielsweise Spawnfallen.
                </li>
                <li>
                  Das automatisierte Ausführen von Aktionen durch Skripte oder
                  Bots ist verboten.
                </li>
                <li>
                  Bugs und Fehler auf unserem Server sind unverzüglich einem
                  Teammitglied zu melden. Deren Ausnutzung ist strengstens
                  untersagt.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Rules;