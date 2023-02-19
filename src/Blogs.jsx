import React from "react";
import lady_with_cloths from "./assets/lady_with_cloths_2.png";
import lady_with_cloths_2 from "./assets/lady_with_cloths_3.png";
import "./Blogs.css";

export default function Blogs() {
  return (
    <div
      className="blog_container"
      style={{
        marginTop: "100px",
        // display: "grid",
        // gridTemplateColumns:""
      }}
    >
      <div className="blog_first">
        <div className="blog_first_content">
          <h2 className="blogs_heading">BLOGS</h2>
          <h4 className="blogs_subheading">
            {" "}
            6 things to keep in mind before giving to laundry
          </h4>
          <div className="blog_content">
            <p style={{ textAlign: "start" }}>
              "Are you tired of picking up your clothes from the laundry only to
              find that they've shrunk, discolored, or been damaged in some
              other way? If so, you're not alone. Many people have had similar
              experiences, and it's often due to a lack of knowledge about what
              to do before giving their clothes to the laundry. In this blog,
              we'll share six things you should keep in mind before giving your
              clothes to the laundry to help ensure that they come back in the
              best possible condition.
            </p>
            <br /> <br />
            <strong> 1.) Read the Care Labels</strong>
            <p>
              {" "}
              The care labels on your clothes are there for a reason. They
              provide important information about how to properly care for your
              clothes and help ensure that they don't get damaged in the
              laundry. Before giving your clothes to the laundry, take a few
              minutes to read the care labels and follow the instructions
              carefully.
            </p>
            <br />
            <strong> 2.) Sort Your Clothes</strong>
            <p>
              {" "}
              Sorting your clothes by color and type of fabric is one of the
              most important things you can do before giving them to the
              laundry. This will help prevent dye transfer and protect delicate
              fabrics from getting damaged.
            </p>
          </div>
        </div>
        <div className="image_container">
          <img src={lady_with_cloths} alt="" srcset="" />
        </div>
      </div>
      <div className="blog_second">
        <div className="image_container">
          {" "}
          <img src={lady_with_cloths_2} alt="" srcset="" />
        </div>
        <div className="blog_first_content blog_content">
          <strong> 3.) Check for Stains</strong>
          <p>
            {" "}
            Stains should be treated before giving your clothes to the laundry.
            This will help ensure that the stains don't set and become
            permanent. There are many different types of stains, so it's
            important to do a little research to determine the best way to treat
            each one.
          </p>
          <br />
          <strong>4.) Button and Zip Up</strong>
          <p>
            {" "}
            Before giving your clothes to the laundry, make sure that all
            buttons and zippers are securely fastened. This will help prevent
            damage during the washing and drying process.
          </p>
          <br />
          <strong> 5.) Turn Clothes Inside Out</strong>
          <p>
            {" "}
            Turning your clothes inside out before giving them to the laundry
            can help reduce the amount of wear and tear that they experience.
            This is especially important for clothes that are prone to fading or
            have delicate embellishments.
          </p>
          <br />
          <strong> 6.) Use a Laundry Bag</strong>
          <p>
            If you have delicate or expensive clothes, consider using a laundry
            bag. This will help protect the clothes from getting damaged in the
            washing machine and provide an extra layer of protection during the
            drying process.
          </p>
          <br />
          <br />
          <p>
            {" "}
            By following these six simple tips, you can help ensure that your
            clothes come back from the laundry looking their best. So, the next
            time you're getting ready to give your clothes to the laundry, take
            a moment to keep these things in mind, and you'll be well on your
            way to getting the best possible results."
          </p>
        </div>
      </div>
    </div>
  );
}
