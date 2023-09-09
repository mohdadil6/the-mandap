import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import sonu from "../../assests/sonu.jpg";
import ankit from "../../assests/ankit.jpg";
import './about.css';


const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <br /><br /><br /><br /><br /><br />
        <h1>About The Mandapp & Us</h1>
      </header>
      <div className="about-content">
        <span className="about-tagline">A Celebration of Unforgettable Moments</span>
        <div className="section">
          <h2>Our Approach</h2>
          <p>
            At the mandapp, we believe that every event is an opportunity to create unforgettable memories.
            We are a dedicated team of experienced professionals who specialize in event planning and exquisite decorations.
            Whether it's a wedding, corporate event, or any other special occasion, we go above and beyond to ensure your vision comes to life.
          </p>
        </div>
        <div className="section">
          <h2>Crafting Unique Experiences</h2>
          <p>
            With our extensive knowledge and expertise in event planning, we offer innovative and personalized solutions that cater to your unique needs.
            Our team of creative minds constantly strives to bring fresh and exciting ideas to the table, ensuring that your event stands out from the rest.
          </p>
        </div>
        <div className="section">
          <h2>The Art of Decorations</h2>
          <p>
            When it comes to decorations, we are masters in the art of transforming spaces into dreamlike settings.
            Our vast collection of decoration ideas covers a wide range of themes, from traditional to contemporary,
            ensuring that we can bring your vision to reality. Whether it’s elegant floral arrangements, stunning lighting designs,
            or exquisite table settings, our attention to detail will leave you and your guests in awe.
          </p>
        </div>
        <div className="section">
          <h2>Your Perfect Day</h2>
          <p>
            As top-rated wedding planners, we understand that your big day should be nothing short of perfect.
            From meticulously organizing every aspect of your wedding to managing guest lists and coordinating logistics,
            we take care of everything, allowing you to relax and enjoy your special day.
            Our wedding hospitality services ensure that your guests are treated with warmth and utmost care, leaving a lasting impression.
          </p>
        </div>
        <div className="section">
          <h2>Our Commitment</h2>
          <p>
            Based anywhere, we have successfully executed numerous events, establishing ourselves as a trusted name in the industry.
            We take pride in our commitment to delivering top-notch services that are affordable, without compromising on quality.
          </p>
        </div>
        <div className="section">
          <h2>Experience the Magic</h2>
          <p>
            Whether you’re planning an intimate gathering or a grand celebration, trust the mandapp to turn your event into a remarkable experience.
            Contact us today, and let us create magic together!
          </p>
        </div>
      </div>
      <div class="row"><h1>Our <span style={{ color: 'red', textAlign: 'center' }}>Team</span>
</h1><div class="col-lg-6 "><div class="row  author_image no-gutters p-0"><div class="col-6">
<img height="350" src={sonu} alt='Sonu'/></div><div class="col-6"><div class="description"><h5>Sonu Prajapati<br/><span>(Director &amp; Head of Execution )</span></h5><p></p><ul><li class="mr-2">
<a href=""><FontAwesomeIcon icon={faFacebook} /></a></li><li class="mr-2">
              <a href=""><FontAwesomeIcon icon={faInstagram} /></a></li><li class="mr-2">
              <a href=""><FontAwesomeIcon icon={faTwitter} /></a></li></ul></div></div></div></div>
              <div class="col-lg-6 "><div class="row  author_image no-gutters p-0"><div class="col-6">
<img height="350" src={ankit} alt='Ankit'/></div><div class="col-6"><div class="description"><h5>Ankit Chouksey<br/><span>(Co-founder, Director of Sales, Public Relations &amp;  Ground Operations )</span></h5><p></p><ul><li class="mr-2">
<a href=""><FontAwesomeIcon icon={faFacebook} /></a></li><li class="mr-2">
              <a href=""><FontAwesomeIcon icon={faInstagram} /></a></li><li class="mr-2">
              <a href=""><FontAwesomeIcon icon={faTwitter} /></a></li></ul></div></div></div></div></div><br/><br/></div>
  );
};

export default About;
