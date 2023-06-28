import * as React from "react"
import Layout from "../components/Layout"

const IndexPage = () => {
  // Redirect to collobrate page
  if (window.location.pathname === '/') {
    window.location.href = '/collaborate';
  }
  return (
    <>
      <Layout page='home'>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1>Home</h1>
        </main>
      </Layout>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
