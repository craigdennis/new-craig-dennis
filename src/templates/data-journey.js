import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "prismjs/themes/prism.css"

const DataJourneyTemplate = ({ data, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`

  console.log(data)
  const { previous, next } = data

  const ogTitle = post.frontmatter.title.replace(/\s+/g, "%20").toUpperCase()
  const ogImage = `https://res.cloudinary.com/dbwsa4cgf/image/upload/c_fit,co_rgb:ffffff,l_text:roboto_100_style_bold_text_align_right:${ogTitle},w_750,x_500,y_-100/v1606657101/craigdennis.me/article-images/article-image/Social_Media_Image_uvgpxa.png`
  //const ogImage = `https://res.cloudinary.com/dbwsa4cgf/image/upload/c_fit,l_text:orbitron_50_style_bold_text_align_center:${ogTitle},w_1521/v1606657101/craigdennis.me/article-images/article-image/Social_Media_Image_uvgpxa.png`
  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        og={ogImage}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section itemProp="articleBody">
          <MDXProvider>
              <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </section>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
    
  )
}

export default DataJourneyTemplate

export const pageQuery = graphql`
  query DataJourneyBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        category
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
