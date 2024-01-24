import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import authorPageInitialPaths5a604Resource from '../../resources/author-page-initial-paths-5a604'
import authorPageInitialProps42404Resource from '../../resources/author-page-initial-props-42404'

const Author11 = (props) => {
  return (
    <>
      <div className="author11-container">
        <Head>
          <title>
            Author1 - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Author1 - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
          />
          <meta
            property="og:description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
        </Head>
        <DataProvider
          renderSuccess={(AuthorEntity) => (
            <>
              <div className="author11-container1">
                <h1>{AuthorEntity?.name}</h1>
                <span>{AuthorEntity?.id}</span>
              </div>
            </>
          )}
          initialData={props.authorEntity}
          persistDataDuringLoading={true}
          key={props?.authorEntity?.name}
        />
      </div>
      <style jsx>
        {`
          .author11-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .author11-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Author11.defaultProps = {
  authorEntity: [],
}

Author11.propTypes = {
  authorEntity: PropTypes.array,
}

export default Author11

export async function getStaticPaths() {
  try {
    const response = await authorPageInitialPaths5a604Resource({
      content_type: 'author',
      select: 'fields.name',
    })
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            name: (item?.fields?.name).toString(),
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
    const response = await authorPageInitialProps42404Resource({
      ...context?.params,
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        authorEntity: response?.data?.[0],
        ...response?.meta,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
