import React from "react";
import { graphql } from "gatsby";
import "../styles/privacy-policy.css";
import Layout from "../components/Layout";

const GetScope = ({ data }) => {
  const { content } = data.wordpress.pages.nodes[0];
  return (
    <>
      <Layout page='privacy-policy'>
        <section dangerouslySetInnerHTML={{ __html: content }}></section>
      </Layout>
    </>
  );
}

export const query = graphql`
  query CollaboratePageContent {
  wordpress {
    pages(where: { id: 38588 }) {
      nodes {
        title
        content
      }
    }
  }
}
`;

export default GetScope;
export const Head = () => <title>Privacy Policy</title>