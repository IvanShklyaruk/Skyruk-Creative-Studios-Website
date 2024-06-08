import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundImage from "../assets/HomePageBackgroundImage.png"; // Ensure the image path is correct
import "../styles/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <Navbar />

      <img
        src={BackgroundImage}
        alt="Background"
        className="background-image"
      />
      <div className="about-content">
        <div className="centeredContent">
          <h1>About Skyruk Creative Studios</h1>
          <p>
            Hello! I am a passionate software developer dedicated to creating
            fun and exciting projects that push the boundaries of my coding
            skills. This drive led me to establish Skyruk Creative Studios, a
            website designed to showcase my work and serve as a central hub for
            all my creations. Through this platform, I hope to not only share my
            projects with a wider audience but also to invite feedback and
            suggestions that can help me grow and improve with each new
            endeavor.
          </p>
          <p>
            My ultimate goal is to create an engaging space where visitors can
            explore and enjoy the projects I have meticulously crafted. By
            receiving input from others, I am constantly inspired to refine my
            skills and develop even more innovative and captivating projects.
            This collaborative approach to sharing my work fuels my passion for
            software development and motivates me to continue pushing the
            envelope with every project I undertake.
          </p>
          <p>
            I find this method of delivery incredibly exciting, as it provides a
            continuous source of inspiration and encouragement. It drives me to
            create more awesome stuff, knowing that my work is appreciated and
            that there is always room for improvement. Thank you for visiting
            Skyruk Creative Studios, and I hope you find joy and inspiration in
            exploring my projects :)
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
