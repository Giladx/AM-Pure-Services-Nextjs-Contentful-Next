import React from 'react'
import Head from 'next/head'
import JotFormEmbed from 'react-jotform-embed'
import Script from 'dangerous-html/react'

import Navigation from '../components/navigation'
import Banner from '../components/banner'
import Footer from '../components/footer'

const BusinessRelations = (props) => {
  return (
    <>
      <div className="business-relations-container">
        <Head>
          <title>
            Business-Relations - AM Pure Services | Airduct Cleaning | Drayer
            Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Business-Relations - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
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
        <Navigation rootClassName="navigation-root-class-name3"></Navigation>
        <main className="business-relations-main">
          <div className="business-relations-title">
            <div className="business-relations-title-wrap">
              <span className="business-relations-text">
                BUSINESS RELATIONS
              </span>
            </div>
          </div>
          <span className="business-relations-text01">
            <span className="business-relations-text02">
              Want to work with us?
            </span>
            <br className="business-relations-text03"></br>
            <br className="business-relations-text04"></br>
            <span>
              Please leave a message, as short and detailed as you can.
            </span>
            <br className="business-relations-text06"></br>
            <span>
              We will contact you by your preferred contact method if we are
              interested.
            </span>
            <br className="business-relations-text08"></br>
            <span>Thank you!</span>
          </span>
          <div className="business-relations-container1">
            <div className="business-relations-container2">
              <JotFormEmbed src="https://form.jotform.com/213542509507454" />
              <Script
                dangerouslySetInnerHTML={{
                  __html: `
                    var JFL_213542509507454 = new JotformFeedback({
                      formId: "213542509507454",
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
                      JFL_213542509507454.setup();
                    }, 500);
                  `,
                }}
              />
            </div>
          </div>
          <Banner rootClassName="banner-root-class-name4"></Banner>
        </main>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .business-relations-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .business-relations-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .business-relations-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .business-relations-title-wrap {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .business-relations-text {
            font-size: 48px;
            align-self: center;
            font-style: normal;
            font-family: Rubik;
            font-weight: 900;
            margin-bottom: 0px;
          }
          .business-relations-text01 {
            width: 768px;
            font-size: 26px;
            align-self: center;
            text-align: left;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-twounits);
          }
          .business-relations-text02 {
            font-weight: 700;
          }
          .business-relations-container1 {
            width: 100%;
          }
          .business-relations-container2 {
            display: contents;
          }
          @media (max-width: 1200px) {
            .business-relations-text {
              font-size: 48px;
              font-style: normal;
              font-family: Rubik;
              font-weight: 900;
            }
            .business-relations-text01 {
              font-size: 26px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .business-relations-text02 {
              font-weight: 700;
            }
            .business-relations-text03 {
              font-weight: 700;
            }
            .business-relations-text04 {
              font-weight: 700;
            }
            .business-relations-text06 {
              font-weight: 700;
            }
            .business-relations-text08 {
              font-weight: 700;
            }
          }
          @media (max-width: 767px) {
            .business-relations-text {
              font-size: 30px;
            }
            .business-relations-text01 {
              width: 100%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .business-relations-text {
              font-size: 25px;
            }
            .business-relations-text01 {
              font-size: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

export default BusinessRelations
