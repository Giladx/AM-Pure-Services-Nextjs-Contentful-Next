import React from 'react'
import Head from 'next/head'
import JotFormEmbed from 'react-jotform-embed'
import Script from 'dangerous-html/react'

import Navigation from '../components/navigation'
import Process from '../components/process'
import Banner from '../components/banner'
import Footer from '../components/footer'

const OrderRquest = (props) => {
  return (
    <>
      <div className="order-rquest-container">
        <Head>
          <title>
            Order-Rquest - AM Pure Services | Airduct Cleaning | Drayer Vent
            Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Order-Rquest - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
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
        <Navigation rootClassName="navigation-root-class-name2"></Navigation>
        <div className="order-rquest-title">
          <div className="order-rquest-title-wrap">
            <span className="order-rquest-text">
              <span>ORDER REQUEST</span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="order-rquest-code">
          <div className="order-rquest-container1">
            <div className="order-rquest-container2">
              <JotFormEmbed src="https://form.jotform.com/93106174470453" />
              <Script
                dangerouslySetInnerHTML={{
                  __html: `
                    var JFL_93106174470453 = new JotformFeedback({
                      formId: "93106174470453",
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
                      JFL_93106174470453.show();
                    }, 1000);
                  `,
                }}
              />
            </div>
          </div>
        </div>
        <Process rootClassName="process-root-class-name1"></Process>
        <Banner rootClassName="banner-root-class-name8"></Banner>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
      <style jsx>
        {`
          .order-rquest-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .order-rquest-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: none;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .order-rquest-title-wrap {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .order-rquest-text {
            width: 100%;
            font-size: 48px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Rubik;
            font-weight: 900;
            margin-bottom: 0px;
          }
          .order-rquest-code {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: 0px;
            align-items: flex-start;
          }
          .order-rquest-container1 {
            width: 100%;
            height: 100vh;
          }
          .order-rquest-container2 {
            display: contents;
          }
          @media (max-width: 1200px) {
            .order-rquest-text {
              font-size: 48px;
              font-style: normal;
              font-family: Rubik;
              font-weight: 900;
            }
            .order-rquest-container1 {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .order-rquest-container1 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .order-rquest-text {
              font-size: 30px;
            }
            .order-rquest-container1 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .order-rquest-text {
              font-size: 25px;
            }
            .order-rquest-code {
              height: auto;
            }
            .order-rquest-container1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default OrderRquest
