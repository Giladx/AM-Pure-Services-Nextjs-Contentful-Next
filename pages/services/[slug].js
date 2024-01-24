import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import RichText from '@madebyconnor/rich-text-to-jsx'
import PropTypes from 'prop-types'

import Navigation from '../../components/navigation'
import Blog from '../../components/blog'
import Banner from '../../components/banner'
import Footer from '../../components/footer'
import postPageInitialPaths0149bResource from '../../resources/post-page-initial-paths-0149b'
import postPageInitialProps07944Resource from '../../resources/post-page-initial-props-07944'

const Post = (props) => {
  return (
    <>
      <div className="post-container">
        <Head>
          <title>AM Pure Services</title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta property="og:title" content="AM Pure Services" />
          <meta
            property="og:description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
        </Head>
        <DataProvider
          renderSuccess={(PostEntity) => (
            <>
              <div className="post-title">
                <div className="post-title-wrap">
                  <h1 className="post-text">{PostEntity?.title}</h1>
                </div>
              </div>
              <div className="post-container1">
                <img
                  alt="image"
                  src={
                    PostEntity?.coverImage?.url ||
                    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2ebd7c56-845b-432a-9ccd-239e62f0733d/dbcd9cd3-bed8-454a-b81b-2a33e9433078?org_if_sml=1&q=80&force_format=original'
                  }
                  className="post-image"
                />
                <div className="post-container2">
                  <RichText richText={PostEntity?.content || '  '}></RichText>
                </div>
                <img
                  alt="image"
                  src={
                    PostEntity?.image1?.url ||
                    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2ebd7c56-845b-432a-9ccd-239e62f0733d/dbcd9cd3-bed8-454a-b81b-2a33e9433078?org_if_sml=1&q=80&force_format=original'
                  }
                  className="post-image1"
                />
                <div className="post-container3">
                  <RichText richText={PostEntity?.content2 || ' '}></RichText>
                </div>
                <img
                  alt="image"
                  src={
                    PostEntity?.image2?.url ||
                    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/2ebd7c56-845b-432a-9ccd-239e62f0733d/dbcd9cd3-bed8-454a-b81b-2a33e9433078?org_if_sml=1&q=80&force_format=original'
                  }
                  className="post-image2"
                />
                <div className="post-container4">
                  <RichText richText={PostEntity?.content3 || ' '}></RichText>
                </div>
              </div>
            </>
          )}
          initialData={props.postEntity}
          persistDataDuringLoading={true}
          key={props?.postEntity?.slug}
        />
        <Navigation></Navigation>
        <Blog rootClassName="blog-root-class-name10"></Blog>
        <Banner rootClassName="banner-root-class-name17"></Banner>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .post-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            white-space: pre-wrap;
            flex-direction: column;
          }
          .post-title {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-scheme-lightgreen);
          }
          .post-title-wrap {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .post-text {
            font-size: 48px;
            font-style: normal;
            font-weight: 900;
          }
          .post-container1 {
            gap: 12px;
            width: 800px;
            display: flex;
            margin-top: var(--dl-space-space-fourunits);
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .post-image {
            width: 100%;
            object-fit: cover;
          }
          .post-container2 {
            font-size: 20px;
            font-family: 'Rubik';
          }
          .post-image1 {
            width: 100%;
            object-fit: cover;
          }
          .post-image2 {
            width: 100%;
            object-fit: cover;
          }
          .post-container4 {
            width: 100%;
          }
          @media (max-width: 1600px) {
            .post-text {
              font-size: 48px;
              font-style: normal;
              font-weight: 900;
            }
            .post-container1 {
              width: 800px;
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .post-image {
              width: auto;
            }
            .post-image1 {
              width: 100%;
            }
            .post-container3 {
              width: 100%;
              height: auto;
              white-space: pre-wrap;
            }
            .post-image2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Post.defaultProps = {
  postEntity: [],
}

Post.propTypes = {
  postEntity: PropTypes.array,
}

export default Post

export async function getStaticPaths() {
  try {
    const response = await postPageInitialPaths0149bResource({
      content_type: 'post',
      select: 'fields.slug',
    })
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            slug: (item?.fields?.slug).toString(),
          },
        }
      }),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

export async function getStaticProps(context) {
  try {
    const response = await postPageInitialProps07944Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        postEntity: response?.data?.[0],
        ...response?.meta,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
