import "./Mono.css";
import Aos from "aos";
import "aos/dist/aos.css";
import techImage1 from "./images/mainC.png";
import techImage2 from "./images/tech-image-2C.png";
import techImage3 from "./images/tech-image-3C.webp";
import techImage4 from "./images/tech-image-4C.png";
import analysis from "./images/analysis3C.png";
import prediction from "./images/analysis4C.png";
import security from "./images/securityC.png";
import partners from "./images/partners.png"
import { useEffect, useRef } from "react";

const Mono = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    // const interval = setInterval(() => {
    //   const companies = document.getElementById("companies");
    //   const firstChild = companies.firstElementChild;
    //   firstChild.classList.add("fade-out");
    //   setTimeout(() => {
        
    //     companies.removeChild(firstChild);
    //     companies.appendChild(firstChild);
    //     firstChild.classList.remove("fade-out")
    //   }, 500);
    // }, 3000);
    // return () => clearInterval(interval);
  }, []);
  return (
    <div className="wrapper">
    <header>
      <div data-aos="fade-left" data-aos-duration="1000" className='body'>
        <div className="text">
          <h1 data-aos="fade-up" >Mono Technologies</h1>
          <p data-aos="fade-up" >Our primary objective is to expedite the growth of businesses in Tajikistan through the integration of cutting-edge technologies. We offer a comprehensive range of services tailored to meet the specific needs of our clients</p>
        </div>
        <img data-aos="fade-down-left" data-aos-delay="500" className="techImage1" src={techImage1}/>
      </div>
    </header>
    <section>
      <div data-aos="fade-right" data-aos-duration="1000" className='block-right white'>
        <img data-aos="fade-up-right" className="techImage2" src={techImage2}/>
        <div className="text">
          <h1 data-aos="fade-up"  >Personal Website Development</h1>
          <p data-aos="fade-up" >We create engaging and professional websites that effectively represent your business. A well-designed website serves as a powerful online presence and enhances your brand image.</p>
        </div>
      </div>
    </section>
    <section>
      <div data-aos="fade-left" data-aos-duration="1000" className='block-left dark-blue'>
        <div className="text">
          <h1 data-aos="fade-up"  >Business Designing and Social Media Advertising</h1>
          <p data-aos="fade-up" >Our team assists you in devising effective strategies for social media advertising, leveraging the potential of various platforms to reach your target audience and boost your business's online visibility.</p>
        </div>
        <img data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" className="techImage3" src={techImage3}/>
      </div>
    </section>
    <section>
      <div data-aos="fade-right" data-aos-duration="1000" className='block-right white under'>
        <img data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000" className="techImage4" src={techImage4}/>
        <div className="text">
          <h1 data-aos="fade-up" >Staff and Work Management System</h1>
          <p data-aos="fade-up"  >We provide customized software solutions to streamline your internal operations. Our management system eliminates the need for multiple notebooks by offering a centralized platform for staff and work management, enhancing productivity and organization within your business.</p>
        </div>
      </div>
    </section>
    <section>
      <div data-aos="fade-left" data-aos-duration="1000" className='block-left white under2'>
        <div className="text">
          <h1 data-aos="fade-up" >High-Level Analysis</h1>
          <p data-aos="fade-up">Our analytical tools enable you to gain insights into your business's performance. We help you compare your monthly, daily, and yearly earnings with industry benchmarks, enabling you to assess your growth rate and identify areas for improvement.</p>
        </div>
        <img data-aos="fade-left"  data-aos-delay="500" className="analysisImg" src={analysis}/>
      </div>
    </section>
    <section>
      <div data-aos="fade-right" data-aos-duration="1000" className='block-right blue'>
        <img data-aos="fade-right"  data-aos-delay="500" className="analysisImg" src={prediction}/>
        <div className="text">
          <h1 data-aos="fade-up"  >Recommendation and Predictive Analysis</h1>
          <p data-aos="fade-up" >Leveraging the power of artificial intelligence (AI), we analyze your business's historical data to generate valuable recommendations and predict future outcomes. Our AI algorithms help you optimize your business models and make data-driven decisions to take your business to the next level.</p>
        </div>
      </div>
    </section>
    <section>
      <div data-aos="fade-left" data-aos-duration="1000" className='block-left white'>
        <div className="text">
          <h1 data-aos="fade-up" >Data Security</h1>
          <p data-aos="fade-up" >We prioritize the security of your valuable data. Our products are built with robust security measures, ensuring the utmost protection against unauthorized access and data breaches. We employ industry-standard security protocols and continuously monitor and update our systems to keep your data safe.</p>
        </div>
        <img data-aos="fade-left"  data-aos-delay="500" className="security" src={security}/>
      </div>
    </section>
    <section>
      <div data-aos="fade-right" data-aos-duration="1000" className="block-right blue partners-block">
        <div className="block-wrapper">
          <img data-aos="fade-right" data-aos-delay="500"  className="partnersImg" src={partners}/>
          <div className="text">
            <h1 data-aos="fade-up" >Our Partners</h1>
            <p data-aos="fade-up" >At Mono Technologies, we work closely with industry-leading organizations to deliver cutting-edge solutions. Through strategic partnerships, we harness collective expertise to drive business growth and innovation. These valued collaborations enable us to provide our clients with exceptional support and access to the latest advancements in technology. Together with our partners, we empower businesses in Tajikistan and beyond.</p>
        <div id="companies" className="companies">
          <div data-aos="fade-up" className="card">
            <h2>COLIN'S</h2>
          </div>
          <div data-aos="fade-up" className="card">
            <h2>Somon Glass</h2>
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div className='block dark-blue'>
          <p >At Mono Technologies, we are dedicated to accelerating your business through innovative technology solutions. Our team is committed to delivering exceptional results and providing reliable support to ensure your success. Contact us today to transform your business and unlock its full potential.</p>
          <div className="about-us">
            <div className="contact-us">
              <h4>Contact us:</h4>
              <p>Phone: +992 938 79 17 79</p>
              <p>Mail: shuhratabduqodirov5@gmail.com</p>
            </div>
          </div>
          <p >© 2023 Mono Technologies. All rights reserved. | Privacy Policy | Terms of Service</p>
  
      </div>
    </footer>
  </div>
  );
}

export default Mono;
