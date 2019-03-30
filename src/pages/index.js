import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/layout'
import { Intro, FeaturedDress, VideoContent, TopCarousel } from '../components/index'

const IndexPage = ({ data }) => (
  <Layout insta={data.allInstaNode}>
    <TopCarousel />
    <Intro />
    <FeaturedDress />
    <VideoContent />
  </Layout>
)

export const query = graphql`
  query InstagramPosts {
    allInstaNode(limit:5) {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          localFile {
            childImageSharp {
              fluid(maxHeight: 500, maxWidth: 500 quality: 50) {
                  ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
  }
`

export default IndexPage
