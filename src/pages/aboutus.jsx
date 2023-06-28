import React from 'react'
import { graphql } from 'gatsby'

const AboutUs = ({ data }) => {
  const { title, content } = data?.wordpress?.pages?.nodes[0];
  console.log('title, content', title, content);
  return (
    <>
      <section dangerouslySetInnerHTML={{ __html: content }}></section>
    </>
  )
}

export const query = graphql`
  query AboutPageContent {
  wordpress {
    pages(where: { id: 5175 }) {
      nodes {
        title
        content
      }
    }
  }
}
`;


export default AboutUs