import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>
            Page - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Page - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
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
        <img alt="image" src="/404-800w.gif" className="page-image" />
        <span className="page-text">Page Not Found</span>
        <Link href="/">
          <a className="page-link">
            <span>Go Back </span>
            <br></br>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-image {
            width: 727px;
            height: 442px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .page-text {
            color: var(--dl-color-scheme-green);
            font-size: 3rem;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .page-link {
            color: var(--dl-color-scheme-white);
            font-size: 2em;
            align-self: center;
            font-style: normal;
            font-weight: 900;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-scheme-green);
          }
          @media (max-width: 1600px) {
            .page-text {
              width: 100%;
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .page-text {
              width: 100%;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .page-text {
              width: 100%;
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .page-text {
              width: 100%;
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .page-text {
              color: var(--dl-color-scheme-darkgray);
              width: 100%;
              align-self: center;
              text-align: center;
            }
            .page-link {
              color: var(--dl-color-scheme-darkgray);
            }
          }
        `}
      </style>
    </>
  )
}

export default Page
