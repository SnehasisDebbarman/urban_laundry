import React, { useState } from "react";
import { animate } from "framer-motion";

import { useRef } from "react";
import "./mobileWeb.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./assets/LOGO.png";
import { motion } from "framer-motion";
import Blogs from "./Blogs";
import ladyWithCloths1 from "./assets/icons/women.png";
import ladyWithCloths4 from "./assets/lady_with_cloths_4.png";
import woolmark from "./assets/woolmark.png";
import hygenicStamp from "./assets/hygenic_stamp.png";
import expert from "./assets/expert.png";
import ten_step from "./assets/icons/123.png";
import thinking_man from "./assets/thinking_man.png";
import billboard from "./assets/billboard.png";
import handshake from "./assets/handshake.png";
import manWave from "./assets/icons/man.png";

import Lottie from "lottie-react";
import areaMap from "./assets/area_map.json";
import shampooImg from "./assets/detergent.svg";

import phoneIcon from "./assets/icons/phone.svg";
import emailIcon from "./assets/icons/email.svg";
import mapIcon from "./assets/icons/map.svg";

import landingText from "./assets/icons/landing_page_text.png";

import { GrClose } from "react-icons/gr";
import { MdOutlineClose } from "react-icons/md";

export default function MobileWeb() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [blogVisible, setBlogVisible] = useState(false);

  function Counter({ from, to }) {
    const ref = useRef();

    return (
      <div style={{ display: "flex" }}>
        <div> ₹</div>
        <motion.div
          style={{ width: "1.5em" }}
          initial="hidden"
          whileInView="visible"
          ref={ref}
          onViewportEnter={() => {
            const controls = animate(from, to, {
              duration: 1.5,
              onUpdate(value) {
                ref.current.textContent = value.toFixed(0);
              },
            });
            return () => controls.stop();
          }}
        />
        <div style={{ fontSize: "0.4em", alignSelf: "center" }}>per KG</div>
      </div>
    );
  }
  const Menu = () => {
    return (
      <div
        style={{
          top: 85,
          position: "fixed",
          // minHeight: "100vh",
          // width: "100vw",
          display: "flex",
          justifyContent: "center",
          zIndex: 101,
          // alignItems: "center",
        }}
      >
        <div
          className={menuVisible ? "menu-container" : "menu-container-hidden"}
        >
          <ul>
            <a
              onClick={() => {
                setMenuVisible(false);
                setBlogVisible(false);
              }}
              href="#Home_mobile"
            >
              <li
                className={
                  menuVisible
                    ? "menu-container-text"
                    : "menu-container-text-hidden"
                }
              >
                Home
              </li>
            </a>
            <a
              onClick={() => {
                setMenuVisible(false);
                setBlogVisible(false);
              }}
              href="#Services_mobile"
            >
              <li
                className={
                  menuVisible
                    ? "menu-container-text"
                    : "menu-container-text-hidden"
                }
              >
                Services
              </li>
            </a>

            <a
              onClick={() => {
                setMenuVisible(false);
                setBlogVisible(false);
              }}
              href="#Pricing_mobile"
            >
              {" "}
              <li
                className={
                  menuVisible
                    ? "menu-container-text"
                    : "menu-container-text-hidden"
                }
              >
                Pricing
              </li>
            </a>
            <a
              onClick={() => {
                setMenuVisible(false);
                setBlogVisible(false);
              }}
              href="#Get_franchises_mobile"
            >
              <li
                className={
                  menuVisible
                    ? "menu-container-text"
                    : "menu-container-text-hidden"
                }
              >
                Get Franchises
              </li>
            </a>
            <a
              onClick={() => {
                setMenuVisible(false);
                setBlogVisible(true);
              }}
              href="#Blogs_mobile"
            >
              <li
                className={
                  menuVisible
                    ? "menu-container-text"
                    : "menu-container-text-hidden"
                }
              >
                Blogs
              </li>
            </a>
            <a
              onClick={() => {
                setMenuVisible(false);
                setBlogVisible(false);
              }}
              href="#Locate_us_mobile"
            >
              {" "}
              <li
                className={
                  menuVisible
                    ? "menu-container-text"
                    : "menu-container-text-hidden"
                }
              >
                Locate us
              </li>
            </a>
          </ul>
        </div>
      </div>
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
          padding: "20px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.7)",
          position: "fixed",
          top: 0,
          zIndex: 100,
        }}
      >
        <img src={logo} style={{ height: "50px" }} />
        {menuVisible ? (
          <MdOutlineClose
            color="white"
            size={30}
            onClick={() => {
              setMenuVisible(!menuVisible);
            }}
          />
        ) : (
          <GiHamburgerMenu
            size={30}
            onClick={() => {
              setMenuVisible(!menuVisible);
            }}
          />
        )}
      </nav>
      <Menu />
      {blogVisible ? (
        <Blogs />
      ) : (
        <>
          <section
            id="Home_mobile"
            style={{
              marginTop: "150px",
              padding: "20px 0px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="experience_mobile"
            >
              <img
                src={landingText}
                style={{
                  alignSelf: "center",
                  width: "60%",
                  margin: " 0 30px",
                }}
                alt=""
                srcset=""
              />
            </div>
            <img
              style={{
                alignSelf: "center",
                padding: "20px 0",
              }}
              src={manWave}
              alt="man with Urban Laundry washing Machine"
            />
            <div
              style={{ height: "5px", backgroundColor: "rgb(158, 31, 255)" }}
            ></div>
          </section>
          <div
            style={{ height: "5px", backgroundColor: "rgb(158, 31, 255)" }}
          ></div>
          {/* <div style={{ height: "5px", background: "rgb(158, 31, 255)" }}></div> */}
          <section
            id="Services_mobile"
            className="about_us_mobile"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <h2
              style={{
                fontSize: "2.5em",
                textAlign: "start",
                padding: "30px 30px 10px 30px",
              }}
            >
              ABOUT US
            </h2>
            <p
              className="sinhala_font"
              style={{ fontSize: "1.5em", padding: " 0 30px" }}
            >
              Our Story!
            </p>
            <p
              style={{
                fontSize: "0.7em",
                textAlign: "start",
                padding: "0 30px",
              }}
            >
              Our founder's wife had a frustrating experience with a local dry
              cleaning store, where her saree was held for almost 10 days and
              the timeline was extended by another week. This sparked a fire
              within our founder, a man of perfection and former CEO of Nazran
              cements, Saudi, to research and dive deep into the laundry and dry
              cleaning industry. His meticulous research revealed that less than
              1% of dry cleaning machinery was being utilized, with harsh
              chemicals not approved for laundry and dry cleaning use. Further
              investigation showed that many dry cleaning shops lacked proper
              processes and quality chemicals.
              <br />
              <br />
              Determined to bring change to the industry, our founder shared his
              vision with his family and launched The Urban Laundry in
              Rajajinagar/Bengaluru. He implemented a process that included
              quality checks at every step and optimal machinery utilization by
              quickly training a workforce without prior laundry experience. Our
              customers quickly fell in love with our speed and quality, and we
              became the industry's first to offer laundry and dry cleaning in
              just two days for no extra charge, setting us apart from other
              players in the market.
              <br />
              <br />
              Our passion for quality and speed quickly gained attention across
              Bangalore, with customers coming from all areas of the city. Many
              were so impressed that they requested we expand to nearby areas to
              help their friends and family experience our top-notch services.
              Today, we continue to be driven by our mission to revolutionize
              the laundry industry by offering superior processes and great
              quality with lightning speed.
              {/* Urban Laundry was founded with the goal of providing a hassle-free
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
              convenience. We look forward to serving you soon! */}
              <br /> Sincerely,
              <br />
              The Urban Laundry Team.'
            </p>
            <div
              style={{
                alignSelf: "center",
              }}
            >
              <img
                style={{
                  height: "50vh",
                  alignSelf: "flex-end",
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
            <div
              style={{ height: "5px", backgroundColor: "rgb(158, 31, 255)" }}
            ></div>{" "}
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
                      aspectRatio: "1/1",
                      justifyContent: "center",
                    }}
                  />
                  <div style={{ fontSize: "0.55em" }}>
                    WOOL-SAFE MACHINERY GUARANTEED
                  </div>
                </div>
                <div className="card_mobile">
                  <img
                    src={shampooImg}
                    style={{
                      aspectRatio: "1/1",
                    }}
                  />
                  <div style={{ fontSize: "0.55em" }}>
                    GERMAN EXPERTISE FOR AN ECO-FRIENDLY CLEAN
                  </div>
                </div>

                <div className="card_mobile">
                  <img
                    src={hygenicStamp}
                    style={{
                      aspectRatio: "1/1",
                      justifyContent: "center",
                    }}
                  />
                  <div style={{ fontSize: "0.55em" }}>
                    HOHENSTEIN APPROVED EQUIPMENT
                  </div>
                </div>
                <div className="card_mobile">
                  <img
                    src={expert}
                    style={{
                      aspectRatio: "1/1",
                      justifyContent: "center",
                    }}
                  />
                  <div style={{ fontSize: "0.55em" }}>
                    A TEAM OF EXPERIENCED PROFESSIONALS
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ height: "5px", backgroundColor: "rgb(158, 31, 255)" }}
            ></div>{" "}
          </section>
          <div
            style={{ height: "5px", backgroundColor: "rgb(158, 31, 255)" }}
          ></div>
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
                  padding: "5px 50px",
                }}
              />
            </div>
          </section>
          <section>
            <div
              style={{ height: "5px", backgroundColor: "rgb(158, 31, 255)" }}
            ></div>{" "}
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
          <div
            style={{ height: "5px", backgroundColor: "rgb(158, 31, 255)" }}
          ></div>
          <section id="Services_mobile">
            <div
              style={{
                padding: "50px 30px",
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
            <div
              style={{ height: "5px", backgroundColor: "rgb(158, 31, 255)" }}
            ></div>
          </section>
          <section style={{ padding: "50px 30px" }}>
            <h2
              style={{
                textAlign: "start",
                fontSize: "1.7em",
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
              <h3 style={{ fontSize: "1.3em", marginBottom: "20px" }}>
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
          <div
            style={{ height: "5px", backgroundColor: "rgb(158, 31, 255)" }}
          ></div>
          <section id="Pricing_mobile">
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
              <h2>
                <Counter from={0} to={80} />
              </h2>
              <div style={{ fontSize: "0.7em" }}>
                {" "}
                with our wash and fold option{" "}
              </div>
              <button
                style={{
                  // backgroundColor: "green",
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
          <div
            style={{ height: "5px", backgroundColor: "rgb(158, 31, 255)" }}
          ></div>
          <section id="Get_franchises_mobile">
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
                padding: "60px 30px",
              }}
            >
              <div className="gradient_text">
                <p
                  style={{
                    color: "yellow",
                    fontSize: "1.5em",
                    textAlign: "start",
                    fontWeight: "700",
                    lineHeight: "1em",
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
                  fontSize: "1.2em",
                  marginBottom: "30px",
                  marginTop: "20px",
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
          <div
            style={{ height: "5px", backgroundColor: "rgb(158, 31, 255)" }}
          ></div>
          <section>
            <div
              style={{
                textAlign: "start",
                borderLeft: "5px solid purple",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "60px 30px",
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
                  fontSize: "0.8em",

                  // backgroundColor: "green",
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
          <div
            style={{ height: "5px", backgroundColor: "rgb(158, 31, 255)" }}
          ></div>
          <section>
            <div
              style={{
                width: "100vw",
                position: "absolute",
                paddingTop: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                zIndex: 3,
              }}
            >
              <div>
                <button
                  style={{
                    borderRadius: "20px",
                    fontSize: "0.6em",
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
          <div
            style={{ height: "5px", backgroundColor: "rgb(158, 31, 255)" }}
          ></div>
          <section id="Locate_us_mobile">
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
              <div>
                <h2 style={{ fontSize: "2em" }}> LOCATE US</h2>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "start",
                    alignItems: "start",
                    padding: "10px 0",
                  }}
                >
                  <img
                    style={{
                      width: "30px",
                    }}
                    src={phoneIcon}
                    alt=""
                    srcset=""
                  />
                  <a style={{ fontSize: "0.9em" }} href="tel:+916362591993">
                    +91 6362 591 993{" "}
                  </a>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "start",
                    alignItems: "start",
                    padding: "10px 0",
                  }}
                >
                  <img
                    style={{
                      width: "30px",
                    }}
                    src={emailIcon}
                    alt=""
                    srcset=""
                  />
                  <a
                    style={{ fontSize: "0.9em" }}
                    href="mailto:info.theurbanlaundryblr@gmail.com"
                  >
                    info.theurbanlaundryblr@gmail.com
                  </a>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "start",
                    alignItems: "start",
                    padding: "10px 0",
                  }}
                >
                  <img
                    style={{
                      width: "30px",
                    }}
                    src={mapIcon}
                    alt=""
                    srcset=""
                  />
                  <a
                    style={{ fontSize: "0.9em" }}
                    href="https://www.google.com/maps/place/The+Urban+Laundry/@13.003984,77.5499778,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae3d954a7b90c3:0x4551aba1ac6084c3!8m2!3d13.0039788!4d77.5521665"
                  >
                    {" "}
                    # 17/388/17, 19th H Road,Ist N Block, Rajajinagar,
                    Bengaluru, Karnataka 560010
                  </a>
                </div>
              </div>
            </div>
            <Lottie
              style={{
                width: "100%",
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
                  marginBottom: "50px",
                }}
              >
                map
              </button>
            </a>
          </section>
        </>
      )}
    </main>
  );
}
