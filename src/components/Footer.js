import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section
      className="section footer bg-dark text-white col-sm-12"
      style={{ alignItems: "center", paddingTop: "15px" }}
    >
      <div className="container my-3 ">
        <div className="row my-3 mb-3">
          <div className="col-md-4">
            <h6>Personal Information</h6>
            <hr />
            <p>
              Hey Everyone,
              <br />I am Tushar Bhatia,
              <br /> A Second year undergraduate student at{" "}
              <a  style={{textDecoration:"none"}} href="https://hbtu.ac.in">
                {" "}
                HARCOURT BUTLER TECHNICAL UNIVERSITY-KANPUR
              </a>
              .<br />I have build this website using{" "}
              <a style={{textDecoration:"none"}} href="https://www.google.com/search?q=html&rlz=1C1ONGR_enIN979IN979&oq=html&aqs=chrome..69i57l2j69i59l2j69i60l4.643j0j7&sourceid=chrome&ie=UTF-8">
                {" "}
                HTML
              </a>
              ,{" "}
              <a style={{textDecoration:"none"}}  href="https://www.google.com/search?q=css&rlz=1C1ONGR_enIN979IN979&sxsrf=APq-WBvcFTzwfVsKSBPxTrBVAfJzNhNCuw%3A1644733825321&ei=gaUIYoqLE_rF4-EP_c6VqAg&ved=0ahUKEwjKz6H7hvz1AhX64jgGHX1nBYUQ4dUDCA4&uact=5&oq=css&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBwgAELEDEEMyBAgAEEMyDQgAEIAEEIcCELEDEBQyBAgAEEMyBAgAEEMyBwgAELEDEEMyBAgAEEMyBAgAEEM6CgguEMcBENEDEEM6CAgAEIAEELEDOggILhCxAxCDAToFCC4QgAQ6CAgAELEDEIMBSgQIQRgASgQIRhgAUABY3wJgpwZoAHABeACAAcQBiAGoBJIBAzAuM5gBAKABAcABAQ&sclient=gws-wiz">
                {" "}
                CSS
              </a>
              ,{" "}
              <a style={{textDecoration:"none"}}  href="https://www.google.com/search?q=javascript&rlz=1C1ONGR_enIN979IN979&sxsrf=APq-WBuKZ0WlpUHaTsUZJ4bZb8v_bWoRSA%3A1644733882598&ei=uqUIYsmHJJiF4-EPqvi08Aw&oq=javascr&gs_lcp=Cgdnd3Mtd2l6EAEYADIHCAAQsQMQQzIECC4QQzIECAAQQzIICAAQgAQQsQMyBAgAEEMyCAgAEIAEELEDMgQIABBDMgQIABBDMgQIABBDMgcIABCxAxBDOgkIIxAnEEYQ-QE6BAgjECc6CwgAEIAEELEDEIMBOgsILhCABBCxAxCDAUoECEEYAEoECEYYAFAAWNQUYJYaaABwAXgAgAGKBIgBlw6SAQswLjMuMi4xLjAuMZgBAKABAcABAQ&sclient=gws-wiz">
                {" "}
                JAVASCRIPT <br />
              </a>
               <a  style={{textDecoration:"none"}} href="https://reactjs.org/"> REACTJs and &nbsp;</a>
               <a  style={{textDecoration:"none"}} href="https://getbootstrap.com/">BOOTSTRAP</a>
              . It was a really amazing experience building the website and  i really learned a lot during the process. <br /> <br />
            </p>
          </div>
          <div className="col-md-4">
            <h6>Quick Links</h6>
            <hr />
            <div>
              {" "}
              <Link  style={{textDecoration:"none"}} to="/">Home</Link>{" "}
            </div>
            <div>
              {" "}
              <Link style={{textDecoration:"none"}}  to="/about">About</Link>{" "}
            </div>
            <br /> <br />
            {/* <div> <Link to="/">Blog</Link> </div> */}
          </div>
          <div className="col-md-4">
            <h6>Contact Information</h6>
            <hr />
            <div className="text-white mb-1">
              <p>43/2 Shastri Nagar Kanpur</p>
              <p>+91 9569912066</p>
              <p>tusharbhatia1003@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
