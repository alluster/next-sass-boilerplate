import React from 'react'
import Link from 'next/link'
import Head from '../head'
import Nav from '../components/nav'
import Layout from "../layouts/layout"
const Home = () => (
  <Layout>
  <div className="container">
    <Head 
      title="Next Test App" 
      ogImage="/static/image.png" 
      />
    <Nav />

    <div className="hero">
      <h1 className="title">Welcome to Next by Aleksanteri!</h1>
      <p className="description">
        Welcome to test next!
      </p>
      <h3>This og-image will be served to social media when this page is being shared.</h3>
      <img src="/static/image.png"/>

     
    </div>

  </div>
  </Layout>
)

export default Home
