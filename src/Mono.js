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
import partners from "./images/partnersImg3.png"
import engRus from "./images/engrus2.png"
import { useEffect, useRef, useState } from "react";

const Mono = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  const [lang, setLang] = useState(0);
  const headings = {
    "block1": ["Mono Technologies", "Mono Technologies"],
    "block2": ["Personal Website Development", "Разработка персональных сайтов"],
    "block3": ["Business Designing and Social Media Advertising", "Дизайн бизнеса и реклама в социальных сетях"],
    "block4": ["Staff and Work Management System", "Система управления персоналом и работой"],
    "block5": ["High-Level Analysis", "Высокоуровневый анализ"],
    "block6": ["Recommendation and Predictive Analysis", "Рекомендации и прогнозный анализ"],
    "block7": ["Data Security", "Безопасность данных"],
    "block8": ["Our Partners", "Наши партнеры"],
    "footer": ["Contact us:", "Свяжитесь с нами:"]
    
  }
  const paragraphs = {
    "block1": ["Our primary objective is to expedite the growth of businesses in Tajikistan through the integration of cutting-edge technologies. We offer a comprehensive range of services tailored to meet the specific needs of our clients", "Наша основная цель - ускорить рост бизнеса в Таджикистане за счет интеграции передовых технологий. Мы предлагаем полный спектр услуг, отвечающих конкретным потребностям наших клиентов"],
    "block2": ["We create engaging and professional websites that effectively represent your business. A well-designed website serves as a powerful online presence and enhances your brand image.", "Мы создаем привлекательные и профессиональные веб-сайты, которые эффективно представляют ваш бизнес. Хорошо разработанный веб-сайт обеспечивает мощное присутствие в Интернете и улучшает имидж вашего бренда."],
    "block3": ["Our team assists you in devising effective strategies for social media advertising, leveraging the potential of various platforms to reach your target audience and boost your business's online visibility.", "Наша команда поможет вам разработать эффективные стратегии рекламы в социальных сетях, используя потенциал различных платформ для охвата целевой аудитории и повышения узнаваемости вашего бизнеса в Интернете."],
    "block4": ["We provide customized software solutions to streamline your internal operations. Our management system eliminates the need for multiple notebooks by offering a centralized platform for staff and work management, enhancing productivity and organization within your business.", "Мы предоставляем индивидуальные программные решения для оптимизации ваших внутренних операций. Наша система управления устраняет необходимость в использовании нескольких блокнотов, предлагая централизованную платформу для управления персоналом и работой, повышая производительность и организацию вашего бизнеса."],
    "block5": ["Our analytical tools enable you to gain insights into your business's performance. We help you compare your monthly, daily, and yearly earnings with industry benchmarks, enabling you to assess your growth rate and identify areas for improvement.", "Наши аналитические инструменты позволят вам получить представление о результатах деятельности вашего бизнеса. Мы поможем вам сравнить ваши ежемесячные, ежедневные и ежегодные доходы с отраслевыми эталонами, что позволит вам оценить темпы роста и определить области для улучшения."],
    "block6": ["Leveraging the power of artificial intelligence (AI), we analyze your business's historical data to generate valuable recommendations and predict future outcomes. Our AI algorithms help you optimize your business models and make data-driven decisions to take your business to the next level.", "Используя возможности искусственного интеллекта (AI), мы анализируем исторические данные вашего бизнеса, чтобы генерировать ценные рекомендации и прогнозировать будущие результаты. Наши алгоритмы искусственного интеллекта помогут вам оптимизировать бизнес-модели и принимать решения на основе данных, чтобы поднять ваш бизнес на новый уровень."],
    "block7": ["We prioritize the security of your valuable data. Our products are built with robust security measures, ensuring the utmost protection against unauthorized access and data breaches. We employ industry-standard security protocols and continuously monitor and update our systems to keep your data safe.", "Мы уделяем первостепенное внимание безопасности ваших ценных данных. Наши продукты созданы с применением надежных мер безопасности, обеспечивающих максимальную защиту от несанкционированного доступа и утечки данных. Мы используем протоколы безопасности, соответствующие отраслевым стандартам, постоянно контролируем и обновляем наши системы, чтобы обеспечить безопасность ваших данных."],
    "block8": ["At Mono Technologies, we work closely with industry-leading organizations to deliver cutting-edge solutions. Through strategic partnerships, we harness collective expertise to drive business growth and innovation. These valued collaborations enable us to provide our clients with exceptional support and access to the latest advancements in technology. Together with our partners, we empower businesses in Tajikistan and beyond.", "В Mono Technologies мы активно сотрудничаем с ведущими организациями отрасли, чтобы предлагать передовые решения. Благодаря стратегическому партнерству мы используем коллективный опыт для обеспечения роста бизнеса и инноваций. Это ценное сотрудничество позволяет нам предоставлять нашим клиентам исключительную поддержку и доступ к последним достижениям в области технологий. Вместе с нашими партнерами мы расширяем возможности бизнеса в Таджикистане и за его пределами."],
    "footer": ["At Mono Technologies, we are dedicated to accelerating your business through innovative technology solutions. Our team is committed to delivering exceptional results and providing reliable support to ensure your success. Contact us today to transform your business and unlock its full potential.", "Компания Mono Technologies стремится ускорить развитие вашего бизнеса с помощью инновационных технологических решений. Наша команда стремится добиться исключительных результатов и обеспечить надежную поддержку для вашего успеха. Свяжитесь с нами сегодня, чтобы преобразовать ваш бизнес и полностью раскрыть его потенциал."]
  }
  const changeLanguage = () => {
    const newLang = 1 - lang;
    setLang(newLang);
  }
  return (
    <div className="wrapper">
    <header>
      <span className="language" onClick={changeLanguage}><img className="engRus" src={engRus} /></span>
      <div data-aos="fade-left" data-aos-duration="1000" className='body'>
        <div className="text">
          <h1 data-aos="fade-up" >{headings["block1"][lang]}</h1>
          <p data-aos="fade-up" >{paragraphs["block1"][lang]}</p>
        </div>
        <img data-aos="fade-down-left" data-aos-delay="500" className="techImage1" src={techImage1}/>
      </div>
    </header>
    <section>
      <div data-aos="fade-right" data-aos-duration="1000" className='block-right white'>
        <img data-aos="fade-up-right" className="techImage2" src={techImage2}/>
        <div className="text">
          <h1 data-aos="fade-up"  >{headings["block2"][lang]}</h1>
          <p data-aos="fade-up" >{paragraphs["block2"][lang]}</p>
        </div>
      </div>
    </section>
    <section>
      <div data-aos="fade-left" data-aos-duration="1000" className='block-left dark-blue'>
        <div className="text">
          <h1 data-aos="fade-up"  >{headings["block3"][lang]}</h1>
          <p data-aos="fade-up" >{paragraphs["block3"][lang]}</p>
        </div>
        <img data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" className="techImage3" src={techImage3}/>
      </div>
    </section>
    <section>
      <div data-aos="fade-right" data-aos-duration="1000" className='block-right white under'>
        <img data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000" className="techImage4" src={techImage4}/>
        <div className="text">
          <h1 data-aos="fade-up" >{headings["block4"][lang]}</h1>
          <p data-aos="fade-up"  >{paragraphs["block4"][lang]}</p>
        </div>
      </div>
    </section>
    <section>
      <div data-aos="fade-left" data-aos-duration="1000" className='block-left white under2'>
        <div className="text">
          <h1 data-aos="fade-up" >{headings["block5"][lang]}</h1>
          <p data-aos="fade-up">{paragraphs["block5"][lang]}</p>
        </div>
        <img data-aos="fade-left"  data-aos-delay="500" className="analysisImg" src={analysis}/>
      </div>
    </section>
    <section>
      <div data-aos="fade-right" data-aos-duration="1000" className='block-right blue'>
        <img data-aos="fade-right"  data-aos-delay="500" className="analysisImg" src={prediction}/>
        <div className="text">
          <h1 data-aos="fade-up"  >{headings["block6"][lang]}</h1>
          <p data-aos="fade-up" >{paragraphs["block6"][lang]}</p>
        </div>
      </div>
    </section>
    <section>
      <div data-aos="fade-left" data-aos-duration="1000" className='block-left white'>
        <div className="text">
          <h1 data-aos="fade-up" >{headings["block7"][lang]}</h1>
          <p data-aos="fade-up" >{paragraphs["block7"][lang]}</p>
        </div>
        <img data-aos="fade-left"  data-aos-delay="500" className="security" src={security}/>
      </div>
    </section>
    <section>
      <div data-aos="fade-right" data-aos-duration="1000" className="block-right blue partners-block">
        <div className="block-wrapper">
          <img data-aos="fade-right" data-aos-delay="500"  className="partnersImg" src={partners}/>
          <div className="text">
            <h1 data-aos="fade-up" >{headings["block8"][lang]}</h1>
            <p data-aos="fade-up" >{paragraphs["block8"][lang]}</p>
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
          <p >{paragraphs["footer"][lang]}</p>
          <div className="about-us">
            <div className="contact-us">
              <h4>{headings["footer"][lang]}</h4>
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
