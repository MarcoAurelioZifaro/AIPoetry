import React from "react"
import { Link } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PoemSingle from "../components/PoemSingle"

const IndexPage = () => (
  <PageTransition
      defaultStyle={{
        transition: 'left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
        left: '100%',
        position: 'absolute',
        width: '100%',
      }}
      transitionStyles={{
        entering: { left: '0%' },
        entered: { left: '0%' },
        exiting: { left: '100%' },
      }}
      transitionTime={500}
  
  >
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="PoemList">
        
    </div>
    <Link to="/page-2/">Go to page 2</Link>


  </Layout>
  </PageTransition>
)

export default IndexPage

