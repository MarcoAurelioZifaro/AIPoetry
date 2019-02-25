import React from "react"
import { Link } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions';

import Layout from "../components/layout"
import SEO from "../components/seo"
import PoemSingle from "../components/PoemSingle";

const SecondPage = () => (
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
    <SEO title="Page two" />
    <div className="PoemList">
      <div className="PoemSingleContainer" >
        <PoemSingle
          date="27.10.2017 13:12:03 GTM+ 01"
          deviceName="Marco &amp; iPhone 6"
          poem="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        />
        <PoemSingle
          date="27.10.2017 13:12:03 GTM+ 01"
          deviceName="Marco &amp; iPhone 6"
          poem="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        />
        <PoemSingle
          date="27.10.2017 13:12:03 GTM+ 01"
          deviceName="Marco &amp; iPhone 6"
          poem="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        />
        <PoemSingle
          date="27.10.2017 13:12:03 GTM+ 01"
          deviceName="Marco &amp; iPhone 6"
          poem="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        />
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  </PageTransition>
)

export default SecondPage
