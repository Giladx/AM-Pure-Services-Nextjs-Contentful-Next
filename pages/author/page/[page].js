import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import authorPageInitialPaths3ecb7Resource from '../../../resources/author-page-initial-paths-3ecb7'
import authorPageInitialPropsD2759Resource from '../../../resources/author-page-initial-props-d2759'

const Author1 = (props) => {
  return (
    <>
      <div className="author1-container">
        <Head>
          <title>
            Author - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning
          </title>
          <meta
            name="description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
          <meta
            property="og:title"
            content="Author - AM Pure Services | Airduct Cleaning | Drayer Vent Cleaning"
          />
          <meta
            property="og:description"
            content="Pure Services | Professional Airduct Cleaning Service | HVAC Systems | A/C Systems | Air Duct Cleaning | Drayer Vent Cleaning | Best Airduct"
          />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(AuthorEntities) => (
                  <>
                    <div className="author1-container1">
                      <h1>{AuthorEntities?.name}</h1>
                      <span>{AuthorEntities?.name}</span>
                      <span>{AuthorEntities?.id}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.authorEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .author1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .author1-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Author1.defaultProps = {
  authorEntities: [],
}

Author1.propTypes = {
  authorEntities: PropTypes.array,
}

export default Author1

export async function getStaticPaths() {
  try {
    const response = await authorPageInitialPaths3ecb7Resource({
      content_type: 'author',
    })
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 10)
    return {
      paths: Array.from(
        {
          length: pagesCount,
        },
        (_, i) => ({
          params: {
            page: (i + 1).toString(),
          },
        })
      ),
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
    const response = await authorPageInitialPropsD2759Resource({
      ...context?.params,
      skip: (context.params.page - 1) * 10,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        authorEntities: response,
        ...response?.meta,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
