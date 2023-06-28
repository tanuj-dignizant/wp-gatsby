import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import '../styles/home.css';

const CollaboratePage = ({ data }) => {
  const { title, content } = data?.wordpress?.pages?.nodes[0];
  console.log('title, content', title, content);
  return (
    <>
      <Layout page='collaborate'>
        <section dangerouslySetInnerHTML={{ __html: content }}></section>
      </Layout>
    </>
  )
}

export const query = graphql`
  query CollaboratePageContent {
  wordpress {
    pages(where: { id: 17000 }) {
      nodes {
        title
        content
      }
    }
  }
}
`;

export default CollaboratePage;
export const Head = () => <title>Collaborate</title>