import React from 'react';
import BannerSlider from '../BannerSlider/BannerSlider';
import Form from '../Form';
import './Home.css'; // Import your CSS file
import { Link } from 'react-router-dom'; // Import the Link component



const fooDivStyle = {
  backgroundColor: '#333', // Change the background color as needed
  color: '#fff', // Change the text color as needed
  textAlign: 'center',
  padding: '20px 0',
};

const Home = () => {
  return (
    <>
      <BannerSlider />
      <section className="about_Sec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading">
                <span className="hed">Welcome To</span>
                <h2>The Mandapp Event and Wedding Planners</h2>
              </div>
              <p className="description">Welcome to The Mandapp Event and Wedding Planners! Our dedicated event management company is deeply committed to providing exceptional service and unwavering support throughout every step of your planning journey. As leading experts in the field of event and wedding planning, our team of seasoned professionals is wholeheartedly devoted to ensuring your celebration is nothing short of perfection. From meticulously selecting venues and curating stunning decor to crafting delightful catering and entertainment experiences, we tailor every facet of your event or wedding to your precise desires.

We invite you to reach out to us today to discover the unmatched expertise of the premier event management and wedding planning firm. Allow us to turn your dream wedding into a living reality! We extend our heartfelt gratitude for considering us as your partners in event management and wedding planning. At The Mandapp, we offer an extensive array of services, spanning from comprehensive wedding planning and seamless coordination to the creation of exquisite wedding decor. Our proficiency as wedding decorators enables us to transform your chosen venue into a captivating thematic masterpiece, truly reflecting your unique love story. Whether you envision a grand and opulent reception or an intimate and heartfelt ceremony, our personalized decoration services will bring your dreams to life.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="best_section">
        <div className="container">
          <div className="heading-all-page">
            <span className="title">OUR SERVICES</span>
            <h2>We Organise All Your <span>Special Events</span></h2>
            <p className="des">
            At The Mandapp Event & Wedding Planners, we stand as your ultimate destination for all your extraordinary occasions. As a renowned leader in event management and wedding planning, we provide an extensive array of services to ensure that your event is nothing short of perfection and remains etched in your memory. From corporate galas and product unveilings to intimate soirées and social rendezvous, our team of seasoned professionals meticulously tends to every aspect, breathing life into your unique vision. We guarantee a seamless and unforgettable experience for both you and your cherished guests. Our dedicated team of top-tier event designers and wedding planners is committed to delivering unparalleled Wedding Planning and Event Management services tailored to your exact desires.
            </p>
          </div></div>
  
      </section>

      <Form />

<div foo  style={fooDivStyle} >
        <div className="wp-block-group alignfull has-background-color has-primary-background-color has-text-color has-background has-link-color wp-elements-88510c07852bc19df75679b7e63f3e83 has-global-padding is-layout-constrained wp-container-26 wp-block-group-is-layout-constrained" style={{ marginTop: '0px', marginBottom: '0px', paddingTop: 'var(--wp--preset--spacing--80)', paddingRight: 'var(--wp--preset--spacing--50)', paddingBottom: 'var(--wp--preset--spacing--60)', paddingLeft: 'var(--wp--preset--spacing--50)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: '40%' }}>
            <h1 style={{ fontSize: 'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.682), 20px)', lineHeight: '1.6' }} className="wp-block-site-title">
              <a href="#" target="_self" rel="home" aria-current="page">the mandapp</a>
            </h1>
            <p className="margin-top-half" style={{ fontSize: 'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.227), 16px)', lineHeight: '1.75' }}>
              Welcome to The Mandap, your one-stop solution for all your event planning needs. We are a team of passionate and creative individuals dedicated to making your special moments unforgettable.
            </p>
          </div>

          <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: '20%' }}>
            <h4 className="wp-block-heading margin-bottom-half has-background-color has-text-color" style={{ marginTop: '0px', marginRight: '0px', marginBottom: '0px', marginLeft: '0px', fontSize: 'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.682), 20px)', lineHeight: '1.6' }}>
              Get in touch
            </h4>
            <p className="margin-top-half has-text-color" style={{ color: '#ffffff', fontSize: 'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.227), 16px)', lineHeight: '1.75' }}>
              <Link to="/contact">Contact Us</Link><br />
              <a href="tel:+918821088288">+91 8821 088 288</a><br />
              <a href="mailto:themandap2023@gmail.com">themandap2023@gmail.com</a>
            </p>
          </div>

          <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: '20%' }}>
            <h4 className="wp-block-heading margin-bottom-half has-background-color has-text-color" style={{ marginTop: '0px', marginRight: '0px', marginBottom: '0px', marginLeft: '0px', fontSize: 'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.682), 20px)', lineHeight: '1.6' }}>
              Who we are
            </h4>
            <p className="margin-top-half has-text-color" style={{ color: '#ffffff', fontSize: 'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.227), 16px)', lineHeight: '1.75' }}>
            <Link to="/about">About Us</Link><br />
              <a href="#">Terms of Service</a><br />
              <a href="#">Privacy Policy</a>
            </p>
          </div>

          <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: '20%' }}>
            <h4 className="wp-block-heading margin-bottom-half has-background-color has-text-color" style={{ marginTop: '0px', marginRight: '0px', marginBottom: '0px', marginLeft: '0px', fontSize: 'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.682), 20px)', lineHeight: '1.6' }}>
              Follow us
            </h4>
            <p className="margin-top-half has-text-color" style={{ color: '#ffffff', fontSize: 'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.227), 16px)', lineHeight: '1.75' }}>
              <a href="#">Facebook</a><br />
              <a href="#">Twitter</a><br />
              <a href="https://instagram.com/themandap2023">Instagram</a>
            </p>
          </div>
        </div></div><br/><br/></>
  );
}

export default Home;
