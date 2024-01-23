import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'

const Navigation = (props) => {
  return (
    <>
      <header
        data-role="Header"
        className={`navigation-header ${props.rootClassName} `}
      >
        <div className="navigation-max-width">
          <Link href="/">
            <a className="navigation-link">
              <img
                id="logo"
                alt="logo"
                src="/logoam-200h.webp"
                width="150"
                height="68"
                loading="lazy"
                className="navigation-image"
              />
            </a>
          </Link>
          <a
            href="tel:+18885031722"
            className="navigation-register button-secondary button button-md"
          >
            {props.button1}
          </a>
          <div className="navigation-nav">
            <NavigationLinks rootClassName="navigation-links-root-class-name17"></NavigationLinks>
            <a
              href="tel:+18885031722"
              className="navigation-register1 button-secondary button button-md"
            >
              {props.button}
            </a>
          </div>
          <div data-role="BurgerMenu" className="navigation-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navigation-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-role="MobileMenu"
            className="mobile-menu navigation-mobile-menu"
          >
            <div className="navigation-nav1">
              <div className="navigation-container">
                <Link href="/">
                  <a className="navigation-link1">
                    <img
                      alt={props.imageAlt1}
                      src={props.imageSrc1}
                      className="navigation-image1"
                    />
                  </a>
                </Link>
                <div
                  data-role="CloseMobileMenu"
                  className="navigation-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="navigation-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="navigation-links-root-class-name18"></NavigationLinks>
              <a
                href="tel:+18885031722"
                className="navigation-call-now button-secondary button button-md"
              >
                {props.button2}
              </a>
            </div>
          </div>
        </div>
      </header>
      <style jsx>
        {`
          .navigation-header {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-scheme-white);
          }
          .navigation-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            min-width: 1170px;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .navigation-link {
            display: contents;
          }
          .navigation-image {
            width: 150px;
            height: auto;
            text-decoration: none;
          }
          .navigation-register {
            width: auto;
            display: none;
            text-decoration: none;
          }
          .navigation-nav {
            flex: auto 0 0;
            width: auto;
            height: 40px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navigation-register1 {
            color: var(--dl-color-scheme-green);
            width: auto;
            font-size: 14px;
            border-color: var(--dl-color-scheme-green);
            border-width: 1px;
            text-decoration: none;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .navigation-burger-menu {
            display: none;
          }
          .navigation-icon {
            fill: var(--dl-color-scheme-darkblue);
            width: 24px;
            height: 24px;
            display: flex;
          }
          .navigation-nav1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .navigation-container {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navigation-link1 {
            display: contents;
          }
          .navigation-image1 {
            width: 140px;
            text-decoration: none;
          }
          .navigation-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navigation-icon2 {
            width: 24px;
            height: 24px;
          }
          .navigation-call-now {
            text-decoration: none;
          }

          .navigation-root-class-name1 {
            display: none;
          }
          .navigation-root-class-name2 {
            display: none;
          }
          .navigation-root-class-name3 {
            top: 0px;
            left: 0px;
          }

          .navigation-root-class-name6 {
            top: 0px;
            left: 0px;
          }
          .navigation-root-class-name7 {
            top: 0px;
            left: 0px;
          }
          @media (max-width: 1600px) {
            .navigation-max-width {
              width: 100%;
              min-width: 70%;
            }
            .navigation-image {
              width: 140px;
            }
            .navigation-register1 {
              font-size: 14px;
            }
            .navigation-image1 {
              width: 140px;
            }
          }
          @media (max-width: 1200px) {
            .navigation-max-width {
              min-width: 100%;
            }
            .navigation-register1 {
              font-size: 14px;
            }
          }
          @media (max-width: 991px) {
            .navigation-max-width {
              position: relative;
            }
            .navigation-register {
              color: var(--dl-color-scheme-green);
              display: flex;
              font-size: 12px;
              border-color: var(--dl-color-scheme-green);
              border-width: 1px;
              background-color: var(--dl-color-scheme-lightgreen);
            }
            .navigation-nav {
              display: none;
            }
            .navigation-burger-menu {
              display: flex;
            }
            .navigation-icon {
              fill: var(--dl-color-scheme-green);
              width: 30px;
              height: 30px;
            }
            .navigation-icon2 {
              fill: var(--dl-color-scheme-green);
              width: 30px;
              height: 30px;
            }
          }
          @media (max-width: 767px) {
            .navigation-max-width {
              padding: var(--dl-space-space-unit);
              position: relative;
              padding-right: 16px;
            }
            .navigation-register {
              font-size: 12px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .navigation-icon {
              fill: var(--dl-color-scheme-green);
              width: 30px;
              height: 30px;
            }
            .navigation-image1 {
              width: 180px;
            }
            .navigation-icon2 {
              fill: var(--dl-color-scheme-green);
              width: 30px;
              height: 30px;
            }
          }
          @media (max-width: 479px) {
            .navigation-image {
              width: 140px;
              height: auto;
            }
            .navigation-register {
              color: var(--dl-color-scheme-green);
              font-size: 12px;
              border-color: var(--dl-color-scheme-green);
              border-width: 1px;
              margin-right: 0px;
              margin-bottom: 0px;
              background-color: var(--dl-color-scheme-lightgreen);
            }
            .navigation-nav {
              display: none;
            }
            .navigation-icon {
              fill: var(--dl-color-scheme-green);
              width: 30px;
              height: 30px;
            }
            .navigation-image1 {
              width: 140px;
            }
            .navigation-icon2 {
              fill: var(--dl-color-scheme-green);
              width: 30px;
              height: 30px;
            }
            .navigation-call-now {
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Navigation.defaultProps = {
  rootClassName: '',
  imageSrc: '20769734-2b37-4566-8316-77ad864b1180',
  button: '(888)-503-1722',
  imageAlt1: 'image',
  imageSrc1: '/logo-651.svg',
  button2: '(888)-503-1722',
  button1: '(888)-503-1722',
  imageAlt: 'logo',
}

Navigation.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  button: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  button2: PropTypes.string,
  button1: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Navigation
