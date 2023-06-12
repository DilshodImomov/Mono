import "./Mono.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "./slide.js"
import techImage1 from "./images/mainC.png";
import techImage2 from "./images/tech-image-2C.png";
import techImage3 from "./images/tech-image-3C.webp";
import techImage4 from "./images/tech-image-4C.png";
import analysis from "./images/analysis3C.png";
import prediction from "./images/analysis4C.png";
import security from "./images/securityC.png";
import colins from "./images/colins.png"
import { useEffect } from "react";

const Mono = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="wrapper">
    <header>
      <div data-aos="slide-left" data-aos-duration="1000" className='body'>
        <div className="text">
          <h1 data-aos="fade-up" data-aos-delay="500" >Mono Technologies</h1>
          <p data-aos="fade-up" data-aos-delay="600" >Our primary objective is to expedite the growth of businesses in Tajikistan through the integration of cutting-edge technologies. We offer a comprehensive range of services tailored to meet the specific needs of our clients</p>
        </div>
        <img data-aos="fade-down-left" data-aos-delay="700" className="techImage1" src={techImage1}></img>
      </div>
    </header>
    <section>
      <div data-aos="slide-right" data-aos-duration="1000" className='block-right white'>
        <img data-aos="fade-up-right" data-aos-delay="500" className="techImage2" src={techImage2}></img>
        <div className="text">
          <h1 data-aos="fade-up" data-aos-delay="500" >Personal Website Development</h1>
          <p data-aos="fade-up" data-aos-delay="600" >We create engaging and professional websites that effectively represent your business. A well-designed website serves as a powerful online presence and enhances your brand image.</p>
        </div>
      </div>
    </section>
    <section>
      <div data-aos="slide-left" data-aos-duration="1000" className='block-left dark-blue'>
        <div className="text">
          <h1 data-aos="fade-up"  data-aos-delay="500" >Business Designing and Social Media Advertising</h1>
          <p data-aos="fade-up" data-aos-delay="600" >Our team assists you in devising effective strategies for social media advertising, leveraging the potential of various platforms to reach your target audience and boost your business's online visibility.</p>
        </div>
        <img data-aos="slide-up" data-aos-duration="2000" data-aos-delay="1000" className="techImage3" src={techImage3}></img>
      </div>
    </section>
    <section>
      <div data-aos="slide-right" data-aos-duration="1000" className='block-right white under'>
        <img data-aos="fade-right" data-aos-delay="800" data-aos-duration="1500" className="techImage4" src={techImage4}></img>
        <div className="text">
          <h1 data-aos="fade-up" data-aos-delay="500" >Staff and Work Management System</h1>
          <p data-aos="fade-up" data-aos-delay="600" >We provide customized software solutions to streamline your internal operations. Our management system eliminates the need for multiple notebooks by offering a centralized platform for staff and work management, enhancing productivity and organization within your business.</p>
        </div>
      </div>
    </section>
    <section>
      <div data-aos="slide-left" data-aos-duration="1000" className='block-left white under2'>
        <div className="text">
          <h1 data-aos="fade-up" data-aos-delay="500" >High-Level Analysis</h1>
          <p data-aos="fade-up" data-aos-delay="600" >Our analytical tools enable you to gain insights into your business's performance. We help you compare your monthly, daily, and yearly earnings with industry benchmarks, enabling you to assess your growth rate and identify areas for improvement.</p>
        </div>
        <img data-aos="fade-left"  data-aos-delay="800" className="analysisImg" src={analysis}></img>
      </div>
    </section>
    <section>
      <div data-aos="slide-right" data-aos-duration="1000" className='block-right blue'>
        <img data-aos="fade-right"  data-aos-delay="800" className="analysisImg" src={prediction}></img>
        <div className="text">
          <h1 data-aos="fade-up" data-aos-delay="500" >Recommendation and Predictive Analysis</h1>
          <p data-aos="fade-up" data-aos-delay="600" >Leveraging the power of artificial intelligence (AI), we analyze your business's historical data to generate valuable recommendations and predict future outcomes. Our AI algorithms help you optimize your business models and make data-driven decisions to take your business to the next level.</p>
        </div>
      </div>
    </section>
    <section>
      <div data-aos="slide-left" data-aos-duration="1000" className='block-left white'>
        <div className="text">
          <h1 data-aos="fade-up" data-aos-delay="500" >Data Security</h1>
          <p data-aos="fade-up" data-aos-delay="600" >We prioritize the security of your valuable data. Our products are built with robust security measures, ensuring the utmost protection against unauthorized access and data breaches. We employ industry-standard security protocols and continuously monitor and update our systems to keep your data safe.</p>
        </div>
        <img data-aos="fade-left"  data-aos-delay="800" className="security" src={security}></img>
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
            <div className="partners">
              <h4>Our Partners</h4>
              <h2>COLIN'S</h2>
            </div>
          </div>
          <p >© 2023 Mono Technologies. All rights reserved. | Privacy Policy | Terms of Service</p>
  
      </div>
    </footer>
  </div>
  );
}

export default Mono;
