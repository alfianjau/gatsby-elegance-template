import React from 'react'
// import { Link } from 'gatsby'
import Hero from '../Hero/Hero'
import Feature from '../Features/Features'
import Testimonial from '../Testimonial/Testimonial'
import Integration from '../Integration/Integration'
import Support from '../Support/Support'

class PostListing extends React.Component {
  /* getPostList() {
    const postList = []
    this.props.postEdges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      })
    })
    return postList
  } */

  render() {
    // const postList = this.getPostList()
    return (
      <div>
        <Hero />
        <Feature />
        <Testimonial />
        <Integration />
        <Support />
      </div>
    )
  }
}

/* {
          
          postList.map((post) => (
            <Link to={post.path} key={post.title}>
              <h1>{post.title}</h1>
            </Link>
          ))
        }
         */
export default PostListing
