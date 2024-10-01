// src/pages/index.js
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({ data }) => {

    return (
        <Layout pageTitle="Home Page">
        <ul class="postlist">
            {
                data.allStrapiPost.nodes.map(node => (
                    <li key={node.id}>
                        <Link class="postlink" to={`/${node.slug}`}><h3>{node.title}</h3></Link>
                        <div class="image-wrap">
                        <img class="cover" src={`${node.cover.localFile.childImageSharp.original.src}`} alt={`Cover for ${node.title}`} />
                        </div>
                        <p class="date">{node.date}</p>
                        <p class="name">Written by {node.author.name}</p>
                        <p class="postcategory"><Link to={`/${node.category.slug}`}>Category: {node.category.name}</Link></p>
                        <p class="description">{node.description}</p>
                    </li>

                )
                )
            }
            </ul>
        </Layout>
        )
}

export const query = graphql`
query {
allStrapiPost(sort: {date: DESC}) {
    nodes {
      author {
        name
      }
      cover {
        localFile {
          childImageSharp {
            gatsbyImageData
            original {
              src
              width
              height
            }
          }
        }
      }
      date(formatString: "MMMM D, YYYY")
      description
      id
      slug
      title
      category {
        name
        slug
      }
    }
  }
}
`

export const Head = () => <title>Home Page - Strapi Gatsby Blog</title>

export default IndexPage