import { useState } from "react";
import "./App.css";
import wash from "./assets/man_washing_machine.png";
import { motion } from "framer-motion";
import Blogs from "./Blogs";
import ladyWithCloths1 from "./assets/lady_with_cloths_1.png";
import ladyWithCloths4 from "./assets/lady_with_cloths_4.png";
import logo from "./assets/LOGO.png";
import woolmark from "./assets/woolmark.png";
import hygenicStamp from "./assets/hygenic_stamp.png";
import expert from "./assets/washing_shop.svg";
import ten_step from "./assets/ten_step.png";
import thinking_man from "./assets/thinking_man.png";
import billboard from "./assets/billboard.png";
import handshake from "./assets/handshake.png";
import MobileWeb from "./mobileWeb";
import wave2 from "./assets/wave_2.png";

import Lottie from "lottie-react";
import areaMap from "./assets/area_map.json";
import shampooImg from "./assets/detergent.svg";

import phoneIcon from "./assets/icons/phone.svg";
import emailIcon from "./assets/icons/email.svg";
import mapIcon from "./assets/icons/map.svg";

import landingText from "./assets/icons/landing_page_text.png";

function App() {
  const [blogVisible, setBlogVisible] = useState(false);

  return (
    <>
      <main className="desktop_web">
        <nav style={{ zIndex: 50 }} className="navbar">
          <img src={logo} style={{ height: "50px" }} />

          <ul className="nav_link_list">
            <a
              onClick={() => {
                setBlogVisible(false);
              }}
              href="#Home"
            >
              <li style={{ color: "white" }}>Home</li>
            </a>
            <a
              onClick={() => {
                setBlogVisible(false);
              }}
              href="#Services"
            >
              <li style={{ color: "white" }}>Services</li>
            </a>

            <a
              onClick={() => {
                setBlogVisible(false);
              }}
              href="#Pricing"
            >
              {" "}
              <li style={{ color: "white" }}>Pricing</li>
            </a>
            <a
              onClick={() => {
                setBlogVisible(false);
              }}
              href="#Get Franchises"
            >
              <li style={{ color: "white" }}>Get Franchises</li>
            </a>
            <a
              onClick={() => {
                setBlogVisible(true);
              }}
              href="#Blogs"
            >
              <li style={{ color: "white" }}>Blogs</li>
            </a>
            <a
              onClick={() => {
                setBlogVisible(false);
              }}
              href="#Locate_Us"
            >
              <li style={{ color: "white" }}>Locate Us</li>
            </a>
          </ul>
          {/* {navMenu.map((it) => (
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
            ))} */}
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
                  <img
                    src={landingText}
                    style={{
                      alignSelf: "center",
                      width: "100%",
                    }}
                    alt="EXPERIENCE EFFORTLESS AND PRISTINE CLEAN CLOTHES WITH URBAN LAUNDRY"
                    srcset=""
                  />
                </motion.div>
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
                  position: "relative",
                }}
              >
                <img
                  style={{
                    left: 0,
                    bottom: -100,
                    position: "absolute",
                    padding: "0 50px",
                    zIndex: 19,
                  }}
                  src={ladyWithCloths1}
                />
              </div>
              <div style={{ marginTop: "50px" }}>
                <h2 style={{ fontSize: "2.7em", lineHeight: "1.2em" }}>
                  About Our Effortless
                  <br /> Laundry Services
                </h2>
                <br />
                <h3> Our Story!</h3>
                <br />

                <p style={{ paddingRight: "40px", fontSize: "0.7rem" }}>
                  {/* Urban Laundry was founded with the goal of providing a
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
                  you soon! */}
                  Our founder's wife had a frustrating experience with a local
                  dry cleaning store, where her saree was held for almost 10
                  days and the timeline was extended by another week. This
                  sparked a fire within our founder, a man of perfection and
                  former CEO of Nazran cements, Saudi, to research and dive deep
                  into the laundry and dry cleaning industry. His meticulous
                  research revealed that less than 1% of dry cleaning machinery
                  was being utilized, with harsh chemicals not approved for
                  laundry and dry cleaning use. Further investigation showed
                  that many dry cleaning shops lacked proper processes and
                  quality chemicals.
                  <br />
                  <br />
                  Determined to bring change to the industry, our founder shared
                  his vision with his family and launched The Urban Laundry in
                  Rajajinagar/Bengaluru. He implemented a process that included
                  quality checks at every step and optimal machinery utilization
                  by quickly training a workforce without prior laundry
                  experience. Our customers quickly fell in love with our speed
                  and quality, and we became the industry's first to offer
                  laundry and dry cleaning in just two days for no extra charge,
                  setting us apart from other players in the market.
                  <br />
                  <br />
                  Our passion for quality and speed quickly gained attention
                  across Bangalore, with customers coming from all areas of the
                  city. Many were so impressed that they requested we expand to
                  nearby areas to help their friends and family experience our
                  top-notch services. Today, we continue to be driven by our
                  mission to revolutionize the laundry industry by offering
                  superior processes and great quality with lightning speed.
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
                zIndex: 20,
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
                  <img src={shampooImg} style={{ justifyContent: "center" }} />
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
                      backgroundColor: "rgba(255, 255, 255,1)",
                      borderRadius: "10px",
                      padding: "10pxAsset 1.svg",
                    }}
                  />
                  {/* <Lottie
                    style={{
                      justifyContent: "center",
                      backgroundColor: "rgba(255, 255, 255,1)",
                      borderRadius: "10px",
                      padding: "10pxAsset 1.svg",
                    }}
                    animationData={shampoo}
                    loop={true}
                  /> */}
                  <div>A TEAM OF EXPERIENCED PROFESSIONALS</div>
                </div>
              </div>
            </section>
            <div
              style={{
                height: "5px",
                backgroundColor: "rgb(158, 31, 255)",
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
                backgroundColor: "rgb(158, 31, 255)",
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
                  justifyContent: "flex-start",
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
                backgroundColor: "rgb(158, 31, 255)",
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
                backgroundColor: "rgb(158, 31, 255)",
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
                <div>laundry services for only</div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h2>₹ 80</h2>
                  <p style={{ paddingTop: "1.2em", paddingLeft: "0.7em" }}>
                    {" "}
                    per KG
                  </p>
                </div>
                <p> with our wash and fold option </p>
                <button
                  style={{
                    // backgroundColor: "green",
                    marginTop: "40px",
                    borderRadius: "35px",
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
                backgroundColor: "rgb(158, 31, 255)",
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
                    // backgroundColor: "green",
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
                      // backgroundColor: "green",
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
              id="Locate_Us"
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
                  justifyContent: "space-around",
                  textAlign: "start",
                }}
              >
                <h2> LOCATE US</h2>
                <div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      justifyContent: "start",
                      alignItems: "center",
                      padding: "10px 0",
                    }}
                  >
                    <img
                      style={{
                        width: "40px",
                      }}
                      src={phoneIcon}
                      alt=""
                      srcset=""
                    />
                    <a href="tel:+916362591993">+91 6362 591 993 </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      justifyContent: "start",
                      alignItems: "center",
                      padding: "10px 0",
                    }}
                  >
                    <img
                      style={{
                        width: "40px",
                      }}
                      src={emailIcon}
                      alt=""
                      srcset=""
                    />
                    <a href="mailto:info.theurbanlaundryblr@gmail.com">
                      info.theurbanlaundryblr@gmail.com
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      justifyContent: "start",
                      alignItems: "center",
                      padding: "10px 0",
                    }}
                  >
                    <img
                      style={{
                        width: "40px",
                      }}
                      src={mapIcon}
                      alt=""
                      srcset=""
                    />
                    <a href="https://www.google.com/maps/place/The+Urban+Laundry/@13.003984,77.5499778,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae3d954a7b90c3:0x4551aba1ac6084c3!8m2!3d13.0039788!4d77.5521665">
                      {" "}
                      # 17/388/17, 19th H Road,Ist N Block, Rajajinagar,
                      Bengaluru, Karnataka 560010
                    </a>
                  </div>
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
                {/* <img src={map} alt="" srcset="" /> */}
                <Lottie
                  style={{
                    width: "80%",
                  }}
                  animationData={areaMap}
                  loop={true}
                />
                <a href="https://www.google.com/maps/place/The+Urban+Laundry/@13.003984,77.5499778,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae3d954a7b90c3:0x4551aba1ac6084c3!8m2!3d13.0039788!4d77.5521665">
                  <button
                    style={{
                      // backgroundColor: "green",
                      marginTop: "20px",
                      borderRadius: "30px",
                    }}
                  >
                    map
                  </button>
                </a>
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
