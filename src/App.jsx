import { useState } from "react";
import "./App.css";
import { FaBeer } from "react-icons/fa";
import wash from "./assets/man_washing_machine.png";
import waves from "./assets/waves.png";
import { motion } from "framer-motion";
import Blogs from "./Blogs";
import ladyWithCloths1 from "./assets/lady_with_cloths_1.png";
import ladyWithCloths2 from "./assets/lady_with_cloths_2.png";
import ladyWithCloths3 from "./assets/lady_with_cloths_3.png";
import ladyWithCloths4 from "./assets/lady_with_cloths_4.png";
import logo from "./assets/LOGO.png";
import woolmark from "./assets/woolmark.png";
import hygenicStamp from "./assets/hygenic_stamp.png";
import expert from "./assets/expert.png";
import detergent from "./assets/detergent.png";
import ten_step from "./assets/ten_step.png";
import thinking_man from "./assets/thinking_man.png";
import billboard from "./assets/billboard.png";
import handshake from "./assets/handshake.png";
import map from "./assets/map.png";
import MobileWeb from "./mobileWeb";
import wave2 from "./assets/wave_2.png";

function App() {
  const navMenu = [
    "Home",
    "Services",
    "Pricing",
    "Get Franchises",
    "Blogs",
    "Locate us",
  ];
  const [blogVisible, setBlogVisible] = useState(false);

  return (
    <>
      <main className="desktop_web">
        <nav className="navbar">
          <img src={logo} style={{ height: "50px" }} />
          <ul className="nav_link_list">
            {navMenu.map((it) => (
              <li
                className="nav_item"
                key={it}
                onClick={() => {
                  setBlogVisible(it === "Blogs" ? true : false);
                  window.location.replace("/#" + it);
                }}
              >
                {it}
              </li>
            ))}
          </ul>
        </nav>
        {blogVisible ? (
          <Blogs />
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <section className="home" id="Home">
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mainHeading"
                >
                  <p styke={{ fontSize: "3em" }}>
                    <strong>EXPERIENCE </strong>
                    EFFORTLESS AND <br />
                    PRISTINE CLEAN CLOTHES WITH
                  </p>
                  <div
                    style={{
                      width: "max-content",
                      borderBottom: "2px solid yellow",
                    }}
                  >
                    <h1 id="h1">URBAN LAUNDRY</h1>
                  </div>
                </motion.div>
                <div className="sub_heading">
                  The one-stop solution for Dry cleaning, Laundry, and Steam
                  iron services
                </div>
              </div>
              <div className="image-container">
                <img className="image_man_washingMachine" src={wash} />
              </div>
            </section>
            <img
              src={wave2}
              style={{
                marginTop: "-300px",
                opacity: 1,
              }}
            />
            <section className="section1" id="Services">
              <div
                style={{
                  width: "100%",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <img style={{ paddingLeft: "50px" }} src={ladyWithCloths1} />
              </div>
              <div>
                <h2>About Our Effortless Laundry Services</h2>
                <h3> Welcome to Urban Laundry!</h3>
                <br />
                <p>
                  Urban Laundry was founded with the goal of providing a
                  hassle-free laundry experience to the people of the city. We
                  understand that evervone is busy in their own lives and
                  sometimes they don't have the time to do their laundry. This
                  is where we come in. Our mission is to provide a convenient
                  and efficient laundry service that makes the lives of our
                  customers easier. We understand that every customer is unique
                  and has their own preferences, which is why we offer a wide
                  range of services to suit everyone's needs. Whether you need a
                  one-time laundry service, or a weekly laundry pick-up and
                  delivery service, we have got you covered. So why wait? Book
                  your laundry or dry cleaning service today and experience the
                  best in quality and convenience. We look forward to serving
                  you soon!
                  <br />
                  <br />
                  Sincerely,
                  <br />
                  <br />
                  The Urban Laundry Team.
                </p>
              </div>
            </section>
            <div
              style={{
                width: "100vw",
                padding: "30px 50px",
                backgroundColor: "black",
                fontSize: "2em",
                letterSpacing: "0.6em",
              }}
            >
              EXPERIENCE THE ULTIMATE CLEAN
            </div>
            <section className="standard_section">
              <div style={{ width: "85vw", paddingTop: "50px" }}>
                <p
                  style={{
                    color: "#A6C657",
                    fontSize: "4em",
                    textAlign: "end",
                    // lineHeight: "0em",
                  }}
                >
                  A STANDARD
                </p>

                <p
                  style={{
                    color: "white",
                    fontSize: "2em",
                    textAlign: "end",
                    lineHeight: "0.5em",
                  }}
                >
                  {" "}
                  OF PERFECTION IN EVERY LOAD
                </p>
              </div>
              <div className="card_container">
                <div className="card">
                  <img
                    src={woolmark}
                    style={{
                      justifyContent: "center",
                    }}
                  />
                  <div>WOOL-SAFE MACHINERY GUARANTEED</div>
                </div>
                <div className="card">
                  <img
                    src={detergent}
                    style={{
                      justifyContent: "center",
                    }}
                  />
                  <div> GERMAN EXPERTISE FOR AN ECO-FRIENDLY CLEAN</div>
                </div>

                <div className="card">
                  <img
                    src={hygenicStamp}
                    style={{
                      justifyContent: "center",
                    }}
                  />
                  <div>HOHENSTEIN APPROVED EQUIPMENT</div>
                </div>
                <div className="card">
                  <img
                    src={expert}
                    style={{
                      justifyContent: "center",
                    }}
                  />
                  <div>A TEAM OF EXPERIENCED PROFESSIONALS</div>
                </div>
              </div>
            </section>
            <div
              style={{
                height: "5px",
                backgroundColor: "pink",
              }}
            ></div>
            <section style={{ padding: "50px" }}>
              <h2
                style={{
                  textAlign: "left",
                  fontSize: "3.5em",
                  fontWeight: "300",
                }}
              >
                A METHODICAL{" "}
              </h2>
              <p
                style={{
                  textAlign: "left",
                  paddingBottom: "60px",
                  fontWeight: "700",
                  fontSize: "2em",
                  lineHeight: "0.1em",
                }}
              >
                APPROACH TO IMPECCABLE QUALITY
              </p>
              <img src={ten_step} />
            </section>
            <div
              style={{
                height: "5px",
                backgroundColor: "pink",
              }}
            ></div>
            <section className="washingMachineHub">
              <div className="washingMachineHub_left">
                <h2
                  style={{
                    fontWeight: "200",
                    fontSize: "4.5em",
                  }}
                >
                  Get Spotless
                </h2>
                <p
                  style={{
                    lineHeight: "-1em",
                    color: "#A6C657",
                    fontSize: "1.5em",
                    textAlign: "start",
                    fontWeight: "700",
                  }}
                >
                  and pressed clothes with just one call
                </p>
              </div>

              <div
                style={{
                  padding: "50px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <div className="gradient_text">
                  <p
                    style={{
                      color: "yellow",
                      fontSize: "1.5em",
                      textAlign: "start",
                      fontWeight: "700",
                    }}
                  >
                    SPECIALIZED
                  </p>
                  <p
                    style={{
                      lineHeight: "0.7em",
                      color: "yellow",
                      fontSize: "3em",
                      textAlign: "start",
                      fontWeight: "300",
                    }}
                  >
                    SERVICES
                  </p>
                </div>

                <p
                  style={{
                    marginTop: "1em",
                    fontSize: "1em",
                    textAlign: "start",
                  }}
                >
                  • Dry Cleaning
                  <br />
                  • Laundry
                  <br />
                  • Steam Iron
                  <br />
                  <br />
                  We are a one-stop solution for all your laundry needs. Our
                  services range from basic laundry to steam ironing, shoe
                  cleaning and even dry cleaning. Our commitment to providing
                  high-quality services has made us a trusted name in the
                  industry.
                </p>
              </div>
            </section>
            <div
              style={{
                height: "5px",
                backgroundColor: "pink",
              }}
            ></div>
            <section
              style={{
                margin: "70px 70px",
                display: "flex",
                flexDirection: "column",
              }}
              id="Services"
            >
              <h2
                style={{
                  textAlign: "start",
                  fontSize: "3em",
                  fontWeight: "600",
                }}
              >
                At Urban Laundry,
              </h2>
              <p
                style={{
                  fontSize: "0.7em",
                  textAlign: "start",
                }}
              >
                <h3 style={{ fontSize: "2em", marginBottom: "20px" }}>
                  we offer top-notch cleaning services to keep your belongings
                  looking their best.{" "}
                </h3>
                <br />
                We are dedicated to providing you with the highest quality
                laundry and cleaning services. With our commitment to
                excellence, you can trust us to handle all of your laundry needs
                with care and precision. Our team of experienced professionals
                is equipped with the latest technology and techniques to ensure
                that your items are handled with the utmost care and attention.
                Whether you need a quick refresh or a deep clean, we've got you
                covered. We believe that our customers deserve only the best,
                and we strive to deliver just that with every service we
                provide. So why wait? Let us take care of your laundry needs
                todav!
                <br />
                <br />
                <br />
                <strong style={{ color: "#A6C657" }}>
                  Laundry Service :
                </strong>{" "}
                Our laundry service is desianed to provide vou with a
                hassle-free and convenient solution for all vour evervdav
                clothes. We use the latest technology and high-quality
                detergents to ensure that your clothes are cleaned thoroughly
                and are returned to you fresh and crisp.
                <br />
                <br />
                <strong style={{ color: "#A6C657" }}>Dry Cleaning:</strong> Our
                dry cleaning service is perfect for delicate fabrics that
                require special care. Our team of experts uses a combination of
                the latest technology and high-quality cleaning products to
                clean your clothes, ensuring that they are returned to you in
                pristine condition.
                <br />
                <br />
                <strong style={{ color: "#A6C657" }}>Steam Ironing:</strong> Our
                steam ironing service is perfect for those who want their
                clothes to look as good as new. Our team of experts use the
                latest steam ironing technology to remove all creases and
                wrinkles from your clothes, leaving them looking freshly
                pressed.
                <br />
                <br />
                <br />
                We believe in providing our customers with the best possible
                experience. Our team of experts is trained to handle all types
                of clothes and fabrics, ensuring that you receive the highest
                quality of services every time. So, whether you need laundry
                services for your everyday clothes, steam ironing for a special
                occasion, shoe cleaning for your favorite pair of shoes, or dry
                cleaning for your delicate fabrics, we've got you covered. Visit
                us today to experience the quality of our services for yourself!
              </p>
            </section>
            <div
              style={{
                height: "5px",
                backgroundColor: "pink",
              }}
            ></div>
            <section id="Pricing" className="equalSection">
              <div className="specializedPricing">
                <p
                  style={{
                    color: "yellow",
                    fontSize: "1.7em",
                    textAlign: "start",
                  }}
                >
                  SPECIALIZED
                </p>
                <p
                  style={{
                    lineHeight: "0.7em",
                    color: "yellow",
                    fontSize: "4em",
                    textAlign: "start",
                  }}
                >
                  PRICING
                </p>
                <br />
                <p
                  style={{ color: "white", fontSize: "5em", lineHeight: "1em" }}
                >
                  AFFORDABLE
                </p>
                <div>luxury at its finest - enjoy top-notch</div>
                <div>laundry services for</div>
                <div>only</div>
                <h2>80 Rupees</h2>
                per KG
                <div> with our wash and fold option </div>
                <button
                  style={{
                    backgroundColor: "green",
                    marginTop: "20px",
                    borderRadius: "30px",
                  }}
                >
                  SCHEDULE PICK UP
                </button>
              </div>
              <img src={ladyWithCloths4} />
            </section>
            <div
              style={{
                height: "5px",
                backgroundColor: "pink",
              }}
            ></div>
            <section className="billboard_section" id="Get Franchises">
              <div className="billboard_section_left">
                <img
                  src={billboard}
                  alt=""
                  style={{
                    aspectRatio: "1368/958",
                  }}
                />
              </div>
              <div
                style={{
                  borderLeft: "5px solid purple",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "60px 50px",
                }}
              >
                <div className="gradient_text">
                  <p
                    style={{
                      color: "yellow",
                      fontSize: "2em",
                      textAlign: "start",
                      fontWeight: "700",
                    }}
                  >
                    GET
                  </p>
                  <p
                    style={{
                      lineHeight: "0.7em",
                      color: "yellow",
                      fontSize: "3em",
                      textAlign: "start",
                      fontWeight: "300",
                    }}
                  >
                    FRANCHISE
                  </p>
                </div>
                <h3
                  style={{
                    fontSize: "1.6em",
                    marginBottom: "30px",
                    marginTop: "30px",
                  }}
                >
                  {" "}
                  Attention all entrepreneurs!
                </h3>
                <p style={{ fontSize: "0.7em", paddingRight: "50px" }}>
                  Are you looking for a low-cost, high-return business
                  opportunity that can offer you flexible hours and a great
                  work-life balance? Look no further! Our company is now
                  offering franchises to those who are ready to join the booming
                  laundry industry. <br />
                  <br /> With our proven business model and top-of-the-line
                  equipment, you'll be able to provide top-notch laundry
                  services to your community while building a successful
                  business. Our team will provide you with the training,
                  support, and resources you need to make your franchise a
                  success, including ongoing marketing and advertising support.
                </p>
              </div>
            </section>
            <section className="billboard_section">
              <div
                style={{
                  borderLeft: "5px solid purple",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "60px 70px",
                }}
              >
                <div className="gradient_text">
                  <p
                    style={{
                      color: "yellow",
                      fontSize: "2em",
                      textAlign: "start",
                      fontWeight: "700",
                    }}
                  >
                    ABOUT
                  </p>
                  <p
                    style={{
                      lineHeight: "0.7em",
                      color: "yellow",
                      fontSize: "3em",
                      textAlign: "start",
                      fontWeight: "300",
                    }}
                  >
                    FRANCHISE
                  </p>
                </div>
                <h3
                  style={{
                    fontSize: "1.7em",
                    marginTop: "30px",
                    paddingRight: "50px",
                  }}
                >
                  {" "}
                  We believe in building trust with our franchisees from the
                  very beginning.
                </h3>
                <p style={{ fontSize: "0.8em", paddingRight: "50px" }}>
                  As a franchisee, you'll become part of a trusted and
                  established brand that has been providing quality laundry
                  services for years. Our commitment to your success is evident
                  in everything we do, from the top-of-the-line equipment and
                  supplies we provide to the ongoing support and training we
                  offer.
                  <br />
                  <br />
                  Our franchisees are more than just business partners - they're
                  an integral part of our company and our community. We believe
                  in fostering a culture of collaboration and support, and we're
                  always here to help you with any challenges you may face.
                  Whether you need advice on running your business, help with
                  marketing, or support with managing your finances, we're here
                  to help.
                </p>

                <button
                  style={{
                    backgroundColor: "green",
                    marginTop: "20px",
                    borderRadius: "30px",
                  }}
                >
                  DOWNLOAD BRAND BOOK
                </button>
              </div>
              <div
                style={{
                  alignSelf: "flex-end",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  marginRight: "100px",
                }}
              >
                <img
                  src={thinking_man}
                  style={{
                    height: "70vh",
                    justifyContent: "end",
                  }}
                />
              </div>
            </section>
            <section className="join_us_section">
              <div
                style={{
                  width: "100vw",
                  position: "absolute",
                  height: "100vh",
                  paddingTop: "50px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div>
                  <button
                    style={{
                      backgroundColor: "green",
                      marginTop: "20px",
                      borderRadius: "30px",
                    }}
                  >
                    JOIN US
                  </button>
                </div>{" "}
                <div
                  className="gradient_text sinhala_font"
                  style={{
                    paddingTop: "40px",
                    fontSize: "1.6em",
                    lineHeight: "1em",
                  }}
                >
                  Join the trusted team <br /> at Urban Laundry and build a{" "}
                  <br /> successful Laundry franchise
                </div>
              </div>
              <img src={handshake} className="join_us_div" />
            </section>
            <section
              id="Locate us"
              style={{
                paddingTop: "5em",
                display: "grid",
                placeItems: "flex-start",
                gridTemplateColumns: "50% 50%",
                height: "110vh",
              }}
            >
              <div
                style={{
                  height: "70vh",
                  padding: "50px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "start",
                }}
              >
                <h2> LOCATE US</h2>
                <div>
                  <p> +91 6362 591 993 </p>
                  <p> info.theurbanlaundryblr@gmail.com</p>
                  <p>
                    # 17/388/17, 19th H Road,Ist N Block, Rajajinagar,
                    Bengaluru, Karnataka 560010
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100vh",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <img src={map} alt="" srcset="" />
                <button
                  style={{
                    backgroundColor: "green",
                    marginTop: "20px",
                    borderRadius: "30px",
                  }}
                >
                  map
                </button>
              </div>
            </section>
          </div>
        )}
      </main>
      <main className="mobileWeb">
        <MobileWeb />
      </main>
    </>
  );
}

export default App;