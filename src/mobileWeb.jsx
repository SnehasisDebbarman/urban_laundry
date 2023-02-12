import React, { useState } from "react";
import "./mobileWeb.css";
import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./assets/logo-mark.png";
import { motion } from "framer-motion";
import wash from "./assets/mav_wave_2.png";
import wave2 from "./assets/wave_2.png";
import Blogs from "./Blogs";
import ladyWithCloths1 from "./assets/lady_with_cloths_1.png";
import ladyWithCloths2 from "./assets/lady_with_cloths_2.png";
import ladyWithCloths3 from "./assets/lady_with_cloths_3.png";
import ladyWithCloths4 from "./assets/lady_with_cloths_4.png";
import woolmark from "./assets/woolmark.png";
import hygenicStamp from "./assets/hygenic_stamp.png";
import expert from "./assets/expert.png";
import detergent from "./assets/detergent.png";
import ten_step from "./assets/ten_step.png";
import thinking_man from "./assets/thinking_man.png";
import billboard from "./assets/billboard.png";
import handshake from "./assets/handshake.png";
import map from "./assets/map.png";
import washingMachine from "./assets/washing_machine_hub.png";

export default function MobileWeb() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [blogVisible, setBlogVisible] = useState(false);
  const navMenu = [
    "Home",
    "Services",
    "Pricing",
    "Get Franchises",
    "Blogs",
    "Locate us",
  ];
  const Menu = () => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          top: "85px",
          position: "fixed",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <div
          className="menu-container"
          style={{
            width: "100vw",
            height: "max-content",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ul>
            {navMenu.map((it) => (
              <li
                key={it}
                onClick={() => {
                  setMenuVisible(false);
                  setBlogVisible(it === "Blogs" ? true : false);
                  window.location.replace("/#" + it);
                }}
              >
                {it}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  };
  return (
    <main
      style={{
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <nav
        className="mobile_nav"
        style={{
          width: "100vw",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.7)",
          position: "fixed",
          top: 0,
        }}
      >
        <img src={logo} style={{ height: "50px" }} />
        <GiHamburgerMenu
          onClick={() => {
            setMenuVisible(!menuVisible);
          }}
        />
      </nav>
      {menuVisible ? <Menu /> : null}
      {blogVisible ? (
        <Blogs />
      ) : (
        <>
          <section
            style={{
              marginTop: "100px",
              // maxWidth: "100vw",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="experience_mobile">
              <p>EXPERIENCE EFFORTLESS AND PRISTINE CLEAN CLOTHES WITH</p>
              <h1 style={{ fontSize: "2.5em" }}>Urban Laundry</h1>
              <p className="sinhala_font">
                {" "}
                The one-stop solution for Dry cleaning, Laundry, and Steam iron
                services
              </p>
            </div>
            <img
              style={{
                paddingTop: "50px",
                // height: "100vh",
                alignSelf: "center",
              }}
              src={wash}
              alt="man with Urban Laundry washing Machine"
            />
            <div style={{ height: "5px", backgroundColor: "pink" }}></div>
          </section>
          <div style={{ height: "5px", backgroundColor: "pink" }}></div>
          {/* <div style={{ height: "5px", background: "pink" }}></div> */}
          <section
            className="about_us_mobile"
            style={{
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2 style={{ fontSize: "2.5em" }}>ABOUT US</h2>
            <p className="sinhala_font" style={{ fontSize: "1.5em" }}>
              Welcome to Urban Laundry!
            </p>
            <p style={{ fontSize: "0.7em", textAlign: "start" }}>
              Urban Laundry was founded with the goal of providing a hassle-free
              laundry experience to the people of the city. We understand that
              everyone is busy in their own lives and sometimes they don't have
              the time to do their laundry. This is where we come in. Our
              mission is to provide a convenient and efficient laundry service
              that makes the lives of our customers easier.
              <br />
              We understand that every customer is unique and has their own
              preferences, which is why we offer a wide range of services to
              suit everyone's needs. Whether you need a one-time laundry
              service, or a weekly laundry pick-up and delivery service, we have
              got you covered. <br /> So why wait? Book your laundry or dry
              cleaning service today and experience the best in quality and
              convenience. We look forward to serving you soon!
              <br /> Sincerely,
              <br />
              The Urban Laundry Team.'
            </p>
            <div>
              <img
                style={{
                  alignSelf: "center",
                  height: "50vh",
                }}
                src={ladyWithCloths1}
                alt="lady with laundry"
              />
            </div>
            <div
              style={{
                width: "100vw",
                padding: "20px 15px",
                backgroundColor: "black",
                fontSize: "0.7em",
                letterSpacing: "0.3em",
              }}
            >
              EXPERIENCE THE ULTIMATE CLEAN
            </div>
            <div style={{ height: "5px", backgroundColor: "pink" }}></div>{" "}
          </section>
          <section>
            <div style={{ paddingRight: "20px" }}>
              {" "}
              <p
                style={{
                  color: "#A6C657",
                  fontSize: "2em",
                  textAlign: "end",
                  // lineHeight: "0em",
                }}
              >
                A STANDARD
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: "1em",
                  textAlign: "end",
                  lineHeight: "0.5em",
                }}
              >
                {" "}
                OF PERFECTION IN EVERY LOAD
              </p>
              <div className="card_container_mobile">
                <div className="card_mobile">
                  <img
                    src={woolmark}
                    style={{
                      justifyContent: "center",
                    }}
                  />
                  <div>WOOL-SAFE MACHINERY GUARANTEED</div>
                </div>
                <div className="card_mobile">
                  <img
                    src={detergent}
                    style={{
                      justifyContent: "center",
                    }}
                  />
                  <div> GERMAN EXPERTISE FOR AN ECO-FRIENDLY CLEAN</div>
                </div>

                <div className="card_mobile">
                  <img
                    src={hygenicStamp}
                    style={{
                      justifyContent: "center",
                    }}
                  />
                  <div>HOHENSTEIN APPROVED EQUIPMENT</div>
                </div>
                <div className="card_mobile">
                  <img
                    src={expert}
                    style={{
                      justifyContent: "center",
                    }}
                  />
                  <div>A TEAM OF EXPERIENCED PROFESSIONALS</div>
                </div>
              </div>
            </div>
            <div style={{ height: "5px", backgroundColor: "pink" }}></div>{" "}
          </section>
          <div style={{ height: "5px", backgroundColor: "pink" }}></div>
          <section style={{ padding: "50px 0px" }}>
            <div style={{ paddingLeft: "20px" }}>
              <h2
                style={{
                  textAlign: "left",
                  fontSize: "1.5em",
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
                  fontSize: "1em",
                  lineHeight: "0.2em",
                }}
              >
                APPROACH TO IMPECCABLE QUALITY
              </p>
            </div>
            <div>
              <img
                src={ten_step}
                style={{
                  justifyContent: "center",
                  padding: "5px 30px",
                }}
              />
            </div>
          </section>
          <section>
            <div style={{ height: "5px", backgroundColor: "pink" }}></div>{" "}
            <div className="washing_machine_backgound_mobile">
              <h2
                style={{
                  fontWeight: "200",
                  fontSize: "1.5em",
                }}
              >
                Get Spotless
              </h2>
              <p
                style={{
                  lineHeight: "-1em",
                  color: "#A6C657",
                  fontSize: "0.7em",
                  textAlign: "start",
                  fontWeight: "700",
                }}
              >
                and pressed clothes with just one call
              </p>
            </div>
          </section>
          <div style={{ height: "5px", backgroundColor: "pink" }}></div>
          <section>
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
                    lineHeight: "1em",
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
            <div style={{ height: "5px", backgroundColor: "pink" }}></div>
          </section>
          <section style={{ padding: "50px" }}>
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
              We are dedicated to providing you with the highest quality laundry
              and cleaning services. With our commitment to excellence, you can
              trust us to handle all of your laundry needs with care and
              precision. Our team of experienced professionals is equipped with
              the latest technology and techniques to ensure that your items are
              handled with the utmost care and attention. Whether you need a
              quick refresh or a deep clean, we've got you covered. We believe
              that our customers deserve only the best, and we strive to deliver
              just that with every service we provide. So why wait? Let us take
              care of your laundry needs todav!
              <br />
              <br />
              <br />
              <strong style={{ color: "#A6C657" }}>
                Laundry Service :
              </strong>{" "}
              Our laundry service is desianed to provide vou with a hassle-free
              and convenient solution for all vour evervdav clothes. We use the
              latest technology and high-quality detergents to ensure that your
              clothes are cleaned thoroughly and are returned to you fresh and
              crisp.
              <br />
              <br />
              <strong style={{ color: "#A6C657" }}>Dry Cleaning:</strong> Our
              dry cleaning service is perfect for delicate fabrics that require
              special care. Our team of experts uses a combination of the latest
              technology and high-quality cleaning products to clean your
              clothes, ensuring that they are returned to you in pristine
              condition.
              <br />
              <br />
              <strong style={{ color: "#A6C657" }}>Steam Ironing:</strong> Our
              steam ironing service is perfect for those who want their clothes
              to look as good as new. Our team of experts use the latest steam
              ironing technology to remove all creases and wrinkles from your
              clothes, leaving them looking freshly pressed.
              <br />
              <br />
              <br />
              We believe in providing our customers with the best possible
              experience. Our team of experts is trained to handle all types of
              clothes and fabrics, ensuring that you receive the highest quality
              of services every time. So, whether you need laundry services for
              your everyday clothes, steam ironing for a special occasion, shoe
              cleaning for your favorite pair of shoes, or dry cleaning for your
              delicate fabrics, we've got you covered. Visit us today to
              experience the quality of our services for yourself!
            </p>
          </section>
          <div style={{ height: "5px", backgroundColor: "pink" }}></div>
          <section>
            <div
              style={{
                textAlign: "start",
                padding: "50px",
              }}
            >
              <p
                style={{
                  color: "yellow",
                  fontSize: "0.8em",
                  textAlign: "start",
                }}
              >
                SPECIALIZED
              </p>
              <p
                style={{
                  lineHeight: "0.7em",
                  color: "yellow",
                  fontSize: "2em",
                  textAlign: "start",
                }}
              >
                PRICING
              </p>
              <br />
              <p style={{ color: "white", fontSize: "2em", lineHeight: "1em" }}>
                AFFORDABLE
              </p>
              <div style={{ fontSize: "0.7em" }}>
                luxury at its finest - enjoy top-notch
              </div>
              <div style={{ fontSize: "0.7em" }}>laundry services for</div>
              <div>only</div>
              <h2>80 Rupees</h2>
              per KG
              <div style={{ fontSize: "0.7em" }}>
                {" "}
                with our wash and fold option{" "}
              </div>
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
            <div>
              <img
                src={ladyWithCloths4}
                style={{
                  justifyContent: "center",
                  padding: "5px 30px",
                }}
              />
            </div>
          </section>
          <div style={{ height: "5px", backgroundColor: "pink" }}></div>
          <section>
            <img
              src={billboard}
              style={{
                justifyContent: "center",
                // padding: "px 30px",
              }}
            />
            <div
              style={{
                textAlign: "start",
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
                    lineHeight: "1.2em",
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
                Are you looking for a low-cost, high-return business opportunity
                that can offer you flexible hours and a great work-life balance?
                Look no further! Our company is now offering franchises to those
                who are ready to join the booming laundry industry. <br />
                <br /> With our proven business model and top-of-the-line
                equipment, you'll be able to provide top-notch laundry services
                to your community while building a successful business. Our team
                will provide you with the training, support, and resources you
                need to make your franchise a success, including ongoing
                marketing and advertising support.
              </p>
            </div>
          </section>
          <div style={{ height: "5px", backgroundColor: "pink" }}></div>
          <section>
            <div
              style={{
                textAlign: "start",
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
                    lineHeight: "1.2em",
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
                  fontSize: "1.2em",
                  marginTop: "30px",
                  paddingRight: "50px",
                }}
              >
                {" "}
                We believe in building trust with our franchisees from the very
                beginning.
              </h3>
              <p style={{ fontSize: "0.6em", paddingRight: "10px" }}>
                As a franchisee, you'll become part of a trusted and established
                brand that has been providing quality laundry services for
                years. Our commitment to your success is evident in everything
                we do, from the top-of-the-line equipment and supplies we
                provide to the ongoing support and training we offer.
                <br />
                <br />
                Our franchisees are more than just business partners - they're
                an integral part of our company and our community. We believe in
                fostering a culture of collaboration and support, and we're
                always here to help you with any challenges you may face.
                Whether you need advice on running your business, help with
                marketing, or support with managing your finances, we're here to
                help.
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
            <img
              src={thinking_man}
              style={{
                justifyContent: "center",
                padding: "10px 80px",
              }}
            />
          </section>
          <div style={{ height: "5px", backgroundColor: "pink" }}></div>
          <section>
            <div
              style={{
                width: "100vw",
                position: "absolute",
                paddingTop: "w0px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div>
                <button
                  style={{
                    backgroundColor: "green",
                    marginTop: "5px",
                    borderRadius: "15px",
                    fontSize: "0.8em",
                  }}
                >
                  JOIN US
                </button>
              </div>{" "}
              <div
                className="gradient_text sinhala_font"
                style={{
                  paddingTop: "20px",
                  fontSize: "0.7em",
                  lineHeight: "1em",
                }}
              >
                Join the trusted team <br /> at Urban Laundry and build a <br />{" "}
                successful Laundry franchise
              </div>
            </div>
            <img src={handshake} className="join_us_div" />
          </section>
          <div style={{ height: "5px", backgroundColor: "pink" }}></div>
          <section>
            <div
              style={{
                textAlign: "start",
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
                    lineHeight: "1.2em",
                    color: "yellow",
                    fontSize: "3em",
                    textAlign: "start",
                    fontWeight: "300",
                  }}
                >
                  Locate Us
                </p>
              </div>
              <p style={{ fontSize: "0.7em", paddingRight: "50px" }}>
                <div>
                  <p> +91 6362 591 993 </p>
                  <p> info.theurbanlaundryblr@gmail.com</p>
                  <p>
                    # 17/388/17, 19th H Road,Ist N Block, Rajajinagar,
                    Bengaluru, Karnataka 560010
                  </p>
                </div>
              </p>
            </div>
            <img
              src={map}
              style={{
                justifyContent: "center",
                // padding: "px 30px",
              }}
            />
            <button
              style={{
                backgroundColor: "green",
                marginTop: "20px",
                borderRadius: "30px",
              }}
            >
              map
            </button>
          </section>
        </>
      )}
    </main>
  );
}
