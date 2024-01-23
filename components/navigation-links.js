import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <Link href="/monthly-specials">
          <a className="navigation-links-link Navigation-LinkLaptopMobile">
            {props.link1}
          </a>
        </Link>
        <Link href="/services">
          <a className="navigation-links-link1 Navigation-LinkLaptopMobile">
            {props.link2}
          </a>
        </Link>
        <Link href="/about">
          <a className="navigation-links-link2 Navigation-LinkLaptopMobile">
            {props.link3}
          </a>
        </Link>
        <Link href="/contact">
          <a className="navigation-links-link3 Navigation-LinkLaptopMobile">
            {props.link4}
          </a>
        </Link>
        <Link href="/business-relations">
          <a className="navigation-links-link4 Navigation-LinkLaptopMobile">
            {props.link5}
          </a>
        </Link>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            min-width: var(--dl-size-size-xxlarge);
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-link {
            cursor: pointer;
            transition: 0.3s;
            text-decoration: none;
          }
          .navigation-links-link1 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .navigation-links-link2 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .navigation-links-link3 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .navigation-links-link4 {
            cursor: pointer;
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-right: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }

          .navigation-links-root-class-name17 {
            width: auto;
            min-width: auto;
            margin-right: 0px;
          }
          @media (max-width: 1600px) {
            .navigation-links-link1 {
              margin-left: 15px;
            }
            .navigation-links-link2 {
              margin-left: 15px;
            }
            .navigation-links-link3 {
              margin-left: 15px;
            }
            .navigation-links-link4 {
              margin-left: 15px;
              margin-right: 15px;
            }
          }
          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-link {
              padding-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link1 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link2 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link3 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-link4 {
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  link3: 'ABOUT',
  rootClassName: '',
  link2: 'SERVICES',
  link5: 'BUSINESS RELATIONS',
  link4: 'CONTACT',
  link1: 'OUR MONTHLY SPECIALS',
}

NavigationLinks.propTypes = {
  link3: PropTypes.string,
  rootClassName: PropTypes.string,
  link2: PropTypes.string,
  link5: PropTypes.string,
  link4: PropTypes.string,
  link1: PropTypes.string,
}

export default NavigationLinks
