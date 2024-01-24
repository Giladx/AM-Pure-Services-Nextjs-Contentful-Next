import { revalidate } from '@teleporthq/cms-mappers/contentful/revalidate'

export default async function handler(req, res) {
  try {
    await revalidate(req, async (data, contentType) => {
      switch (contentType) {
        case 'post': {
          try {
            await res.revalidate(`/services/${data.slug}`)
            await res.revalidate(`/services`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
        case 'author': {
          try {
            await res.revalidate(`/author`)
            await res.revalidate(`/author/${data.name}`)
          } catch (error) {
            console.log('Failed in clearing cache')
            console.log(error)
          }
          break
        }
        default:
          throw new Error('Invalid content typ, received', contentType)
      }
    })
    return res.status(200).json({
      revalidated: true,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      revalidated: false,
    })
  }
}
