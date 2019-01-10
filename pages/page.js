import React from "react";
import Head from "../head";
import "./page.scss";

import Layout from "../layouts/layout";

const Page = () => (
   
  <Layout>
       <Head 
            title="First Page" 
            ogImage="/static/image.png" 
            />
            <h1>This is the first page </h1>
  </Layout>
);
export default Page;
