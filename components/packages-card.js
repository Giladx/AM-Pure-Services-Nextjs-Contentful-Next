import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const PackagesCard = (props) => {
  return (
    <>
      <div
        data-aos="fade-down"
        className={`packages-card-services-card services-card ${props.rootClassName} `}
      >
        <span className="packages-card-title">{props.title}</span>
        <span className="packages-card-price">{props.price}</span>
        <span className="packages-card-text">{props.start}</span>
        <div className="packages-card-features">
          <span className="packages-card-details">{props.details111}</span>
          <span className="packages-card-details1">{props.details}</span>
          <span className="packages-card-details2">{props.details1}</span>
          <span className="packages-card-details3">{props.details11}</span>
          <span className="packages-card-details4">{props.details1111}</span>
        </div>
        <div className="packages-card-button-res">
          <Link href="/order-rquest">
            <a className="packages-card-link button">{props.button}</a>
          </Link>
          <span className="packages-card-restrictions">{props.form}</span>
          <span className="packages-card-restrictions1">{props.form1}</span>
        </div>
      </div>
      <style jsx>
        {`
          .packages-card-services-card {
            height: auto;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-twounits);
          }
          .packages-card-title {
            width: 100%;
            font-size: 24px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .packages-card-price {
            width: 100%;
            font-size: 34px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 0px;
            background-image: linear-gradient(
              319deg,
              #efd002 0%,
              #31b74a 37%,
              #442ce0 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: rgba(255, 255, 255, 0);
          }
          .packages-card-text {
            width: 100%;
            font-style: normal;
            text-align: center;
            font-weight: 300;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .packages-card-features {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xxlarge);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .packages-card-details {
            width: 100%;
            height: auto;
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .packages-card-details1 {
            width: 100%;
            height: auto;
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .packages-card-details2 {
            width: 100%;
            height: auto;
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .packages-card-details3 {
            width: 100%;
            height: auto;
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .packages-card-details4 {
            width: 100%;
            height: auto;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .packages-card-button-res {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .packages-card-link {
            color: var(--dl-color-scheme-green);
            width: 100%;
            transition: 0.3s;
            border-color: var(--dl-color-scheme-green);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .packages-card-link:hover {
            color: var(--dl-color-scheme-white);
            cursor: pointer;
            background-color: var(--dl-color-scheme-green);
          }
          .packages-card-root-class-name {
            display: none;
          }
          .packages-card-root-class-name1 {
            display: none;
          }
          @media (max-width: 1200px) {
            .packages-card-title {
              width: 100%;
              text-align: center;
            }
            .packages-card-price {
              width: 100%;
              font-size: 34px;
              text-align: center;
              margin-bottom: 0px;
            }
            .packages-card-text {
              width: 100%;
              font-style: normal;
              text-align: center;
              font-weight: 300;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .packages-card-details {
              width: 100%;
              text-align: center;
            }
            .packages-card-details1 {
              width: 100%;
              text-align: center;
            }
            .packages-card-details2 {
              width: 100%;
              text-align: center;
            }
            .packages-card-details3 {
              width: 100%;
              text-align: center;
            }
            .packages-card-details4 {
              width: 100%;
              text-align: center;
            }
            .packages-card-link {
              color: var(--dl-color-scheme-green);
              width: 100%;
              border-color: var(--dl-color-scheme-green);
              border-width: 1px;
              border-radius: var(--dl-radius-radius-radius8);
            }
            .packages-card-restrictions {
              margin-top: var(--dl-space-space-unit);
            }
            .packages-card-restrictions1 {
              margin-top: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

PackagesCard.defaultProps = {
  form1: '** “Restrictions May Apply”',
  title: 'Dryer vent',
  button: 'Order Now',
  rootClassName: '',
  price: '149$',
  details11: '',
  details1111: '',
  form: '* Fill an Order Form',
  details111: '',
  start: 'Starting at',
  details1: '',
  details:
    'Create your ubest unique App development, crafted for your business needs.Create your ubest unique App development, crafted for your business needs.',
}

PackagesCard.propTypes = {
  form1: PropTypes.string,
  title: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string,
  price: PropTypes.string,
  details11: PropTypes.string,
  details1111: PropTypes.string,
  form: PropTypes.string,
  details111: PropTypes.string,
  start: PropTypes.string,
  details1: PropTypes.string,
  details: PropTypes.string,
}

export default PackagesCard
