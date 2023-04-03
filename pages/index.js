import React from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/header/index";
import Footer from "../components/footer";
import Section1 from "../components/section1";
import Section2 from "../components/section2";
import Section3 from "../components/section3";

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Notus Pro</title>
          <meta property="og:title" content="Notus Pro" />
        </Head>
        <div className="home-hero">
          <div className="home-bg"></div>
          <Header></Header>
          <div className="home-container01">
            <div className="home-container02">
              <h1 className="home-text">Your story starts with us.</h1>
              <span className="home-text01">
                <span></span>
                {/* <span
                This is a simple example of a Landing Page you can build using
                Notus PRO React. It features multiple CSS components based on
                the Tailwind CSS design system.
              </span> */}
              </span>
            </div>
            <img
              alt="image"
              src="/playground_assets/gray-vector.svg"
              className="home-image"
            />
            <img
              alt="image"
              src="/playground_assets/white-vector.svg"
              className="home-image1"
            />
          </div>
        </div>
        <div className="home-section1">
          <Section1 />
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className="home-image3"
          />
        </div>
        <div className="home-section2">
          <Section2 />
        </div>
        <div className="home-section3">
          <Section3 />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
