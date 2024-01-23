import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navigation from '../components/navigation'
import ListContainer from '../components/list-container'
import Packages from '../components/packages'
import AboutUs from '../components/about-us'
import Process from '../components/process'
import Blog from '../components/blog'
import Banner from '../components/banner'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>
            AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
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
        <Navigation rootClassName="navigation-root-class-name7"></Navigation>
        <main className="home-main">
          <div className="home-hero section-container">
            <div className="home-max-width max-content-container">
              <div className="home-heading-container">
                <ListContainer rootClassName="list-container-root-class-name1"></ListContainer>
                <Link href="/monthly-specials">
                  <a className="home-link button-primary button-lg button">
                    MONTHLY SPECIALS
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="home-stickers">
            <div className="home-sticker-wrap">
              <div className="home-container1">
                <img
                  alt="image"
                  src="/elite-solid-border-1100w.webp"
                  width="162"
                  height="160"
                  loading="lazy"
                  data-aos="fade-right"
                  className="home-image"
                />
                <img
                  alt="image"
                  src="/soap-solid-border-1100w.webp"
                  width="160"
                  height="146"
                  loading="lazy"
                  data-aos="fade-up"
                  className="home-image1"
                />
                <img
                  alt="image"
                  src="/toprated-solid-border-1100w.webp"
                  width="162"
                  height="160"
                  loading="lazy"
                  data-aos="fade-left"
                  className="home-image2"
                />
              </div>
            </div>
          </div>
          <div className="home-content">
            <div data-aos="fade-up" className="home-image3">
              <img
                alt="image"
                src="/undraw_absorbed_in_re_ymd6-1500w-1500w.webp"
                loading="lazy"
                className="home-image4"
              />
            </div>
            <div data-aos="fade-up" className="home-content-wrap">
              <span className="home-text Heading1">
                <span>AIR DUCT CLEANING</span>
                <br></br>
              </span>
              <span className="home-text03">
                <span>
                  Is essential process to take full advantage of the cooling
                  &amp; heating system.
                </span>
                <br></br>
              </span>
              <span className="home-text06">
                <span>
                  The air ducts and filters must be kept clean. Air ducts and
                  filters accumulate dust, odors and even dust mites which can
                  trigger allergies.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  How can you enjoy a cool interior if it’s causing you to
                  sneeze? When the air ducts or filters are dirty the system
                  works inefficiently and uses extra electricity. After our
                  service, you can breathe easy and enjoy the cool air.
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div data-aos="fade-left" className="home-animation pure"></div>
          <div className="home-content1">
            <div data-aos="fade-right" className="home-content-wrap1">
              <span className="home-text12">
                <span>At AM Pure Services</span>
                <br></br>
              </span>
              <span className="home-text15 Heading1">
                <span>WE AIM TO BE THE BEST FOR YOU</span>
                <br></br>
              </span>
              <span className="home-text18">
                <span>Here are few good reasons why:</span>
                <br></br>
              </span>
              <span className="home-text21">
                <span>AVAILABILITY</span>
                <br className="Heading1"></br>
              </span>
              <span className="home-text24">
                <span>
                  Weekends and same-day appointments, We are ready to deliver
                  our services.
                </span>
                <br></br>
              </span>
              <span className="home-text27">
                <span>PROFESSIONALITY</span>
                <br></br>
              </span>
              <span className="home-text30">
                We train the best and brightest duct cleaning technicians that
                Michigan has to offer. All technicians are certified at AM Pure,
                allowing them to understand the needs of your air ducts.
              </span>
              <span className="home-text31">
                <span>COMPETITIVE</span>
                <br></br>
              </span>
              <span className="home-text34">
                We will beat any competitor prices and service for a limited
                time only!
              </span>
            </div>
            <div className="home-image5">
              <img
                alt="image"
                src="/undraw_all_the_data_h4ki.svg"
                loading="lazy"
                data-aos="fade-left"
                className="home-image6"
              />
            </div>
          </div>
          <Packages></Packages>
          <AboutUs
            imageAlt="am pure services - air duct cleaning"
            imageSrc="https://images.unsplash.com/photo-1592967050810-fb4aa3f8bf9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxNaWNoaWdhbnxlbnwwfHx8fDE2NzgyMDU5NDE&amp;ixlib=rb-4.0.3&amp;w=1000"
            rootClassName="about-us-root-class-name"
          ></AboutUs>
          <Process></Process>
          <Blog rootClassName="blog-root-class-name2"></Blog>
          <Banner rootClassName="banner-root-class-name"></Banner>
        </main>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-hero {
            height: 900px;
            position: relative;
            padding-top: 128px;
            background-size: cover;
            background-image: url('/bg2.svg');
          }
          .home-max-width {
            height: 100%;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-threeunits);
          }
          .home-heading-container {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 100%;
            min-width: 100%;
            max-height: 100%;
            min-height: 100%;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-link {
            margin-bottom: 128px;
            text-decoration: none;
          }
          .home-stickers {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-sticker-wrap {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image {
            width: auto;
            margin-top: var(--dl-space-space-twounits);
            object-fit: cover;
            margin-left: var(--dl-space-space-fiveunits);
            margin-right: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-image1 {
            width: auto;
            margin-top: var(--dl-space-space-twounits);
            object-fit: cover;
            margin-left: var(--dl-space-space-fiveunits);
            margin-right: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-image2 {
            width: auto;
            margin-top: var(--dl-space-space-twounits);
            object-fit: cover;
            margin-left: var(--dl-space-space-fiveunits);
            margin-right: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-content {
            width: 100%;
            height: 820px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .home-image3 {
            flex: 0 0 auto;
            width: 50%;
            height: 566px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image4 {
            width: 616px;
            height: 100%;
            align-self: center;
            object-fit: contain;
          }
          .home-content-wrap {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text {
            width: 100%;
            font-style: normal;
          }
          .home-text03 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text06 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            font-weight: 400;
          }
          .home-animation {
            height: auto;
            margin-bottom: var(--dl-space-space-sixunits);
          }
          .home-content1 {
            width: 100%;
            height: 820px;
            display: flex;
            position: relative;
            align-items: center;
          }
          .home-content-wrap1 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text12 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 70px;
            letter-spacing: 0.01em;
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-text15 {
            width: 100%;
            font-style: normal;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text18 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .home-text21 {
            width: 100%;
            font-size: 36px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 70px;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .home-text24 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text27 {
            width: 100%;
            font-size: 36px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 70px;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .home-text30 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text31 {
            width: 100%;
            font-size: 36px;
            font-style: normal;
            font-family: Rubik;
            font-weight: 700;
            line-height: 70px;
            letter-spacing: 0.01em;
            text-decoration: none;
          }
          .home-text34 {
            width: 100%;
            font-size: 26px;
            font-style: normal;
            font-weight: 400;
          }
          .home-image5 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .home-image6 {
            width: 100%;
            height: 825px;
            object-fit: fill;
          }
          @media (max-width: 1600px) {
            .home-image4 {
              width: 616px;
              height: 544px;
            }
            .home-content1 {
              height: 790px;
              align-items: center;
              justify-content: center;
            }
            .home-content-wrap1 {
              height: 654px;
            }
            .home-image5 {
              height: 788px;
            }
            .home-image6 {
              height: 820px;
              padding-bottom: 0px;
            }
          }
          @media (max-width: 1200px) {
            .home-content {
              height: 820px;
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-image3 {
              height: 568px;
            }
            .home-image4 {
              width: 504px;
              height: 452px;
              margin-right: 0px;
            }
            .home-text03 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-content1 {
              height: auto;
            }
            .home-content-wrap1 {
              height: 802px;
              padding: var(--dl-space-space-oneandhalfunits);
              margin-right: 0px;
            }
            .home-text12 {
              font-size: 26px;
              font-style: normal;
              font-family: Rubik;
              font-weight: 700;
              line-height: 70px;
              letter-spacing: 0.01em;
              text-decoration: none;
            }
            .home-text18 {
              font-size: 30px;
              font-style: normal;
              font-weight: 700;
            }
            .home-image5 {
              height: 816px;
              position: relative;
            }
            .home-image6 {
              height: 796px;
              align-self: center;
            }
          }
          @media (max-width: 991px) {
            .home-heading-container {
              width: auto;
              height: auto;
              max-width: auto;
              min-width: auto;
              max-height: auto;
              min-height: auto;
              margin-bottom: 42px;
            }
            .home-image4 {
              height: 656px;
            }
            .home-animation {
              height: auto;
            }
            .home-image5 {
              height: 960px;
            }
            .home-image6 {
              height: 920px;
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .home-heading-container {
              width: auto;
              height: 738px;
              padding-bottom: 0px;
            }
            .home-container1 {
              width: 100%;
            }
            .home-image {
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-image1 {
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-image2 {
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content {
              flex-direction: column;
            }
            .home-image3 {
              width: 100%;
              height: auto;
            }
            .home-image4 {
              width: 100%;
              height: var(--dl-size-size-xxlarge);
            }
            .home-content-wrap {
              width: 100%;
            }
            .home-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text03 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-content1 {
              flex-direction: column;
            }
            .home-content-wrap1 {
              width: 100%;
              height: auto;
            }
            .home-text18 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text24 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text30 {
              margin-top: 0px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text34 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-image5 {
              width: 100%;
              height: auto;
            }
            .home-image6 {
              height: var(--dl-size-size-xxlarge);
            }
          }
          @media (max-width: 479px) {
            .home-max-width {
              height: auto;
            }
            .home-heading-container {
              width: auto;
              height: auto;
              align-items: center;
              justify-content: center;
            }
            .home-link {
              margin-bottom: 128px;
            }
            .home-sticker-wrap {
              width: 100%;
            }
            .home-container1 {
              width: 100%;
            }
            .home-image {
              width: 70%;
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-image1 {
              width: 70%;
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-image2 {
              width: 70%;
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-content {
              height: auto;
            }
            .home-content-wrap {
              width: 100%;
            }
            .home-content-wrap1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
