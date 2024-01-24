import React from 'react'
import Head from 'next/head'
import JotFormEmbed from 'react-jotform-embed'
import Script from 'dangerous-html/react'

import Navigation from '../components/navigation'
import Process from '../components/process'
import Banner from '../components/banner'
import Footer from '../components/footer'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>
            Contact - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Contact - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
          />
          <meta
            property="og:description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2ebd7c56-845b-432a-9ccd-239e62f0733d/9b2dfd80-db34-45ba-a7c4-c1045c6ffc8a?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <Navigation rootClassName="navigation-root-class-name1"></Navigation>
        <div className="contact-title">
          <div className="contact-title-wrap">
            <span className="contact-text">
              <span>CONTACT</span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="contact-contact-form">
          <div className="contact-container1">
            <div className="contact-container2">
              <JotFormEmbed src="https://form.jotform.com/92946808135466" />
              <Script
                dangerouslySetInnerHTML={{
                  __html: `
                    var JFL_211026406545045 = new JotformFeedback({
                      formId: "211026406545045",
                      base: "https://form.jotform.com/",
                      windowTitle: "AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning",
                      background: "#FFA500",
                      fontColor: "#FFFFFF",
                      type: false,
                      height: 500,
                      width: 700,
                      openOnLoad: false
                    });
                    setTimeout(function() {
                      JFL_211026406545045.setup();
                    }, 500);
                  `,
                }}
              />
            </div>
          </div>
        </div>
        <Process rootClassName="process-root-class-name"></Process>
        <Banner rootClassName="banner-root-class-name7"></Banner>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .contact-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contact-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: none;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .contact-title-wrap {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact-text {
            width: 100%;
            font-size: 48px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Rubik;
            font-weight: 900;
            margin-bottom: 0px;
          }
          .contact-contact-form {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .contact-container1 {
            width: 100%;
            height: 100vh;
            margin-bottom: Infinitypx;
          }
          .contact-container2 {
            display: contents;
          }
          @media (max-width: 1200px) {
            .contact-text {
              font-size: 48px;
              font-style: normal;
              font-family: Rubik;
              font-weight: 900;
            }
          }
          @media (max-width: 767px) {
            .contact-text {
              font-size: 30px;
            }
          }
          @media (max-width: 479px) {
            .contact-text {
              font-size: 25px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
