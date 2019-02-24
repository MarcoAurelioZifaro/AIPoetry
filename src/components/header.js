import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle }) => (
  <div className= "Header">
    <div className ="HeaderGroup">
      <span>Write a new poem</span><span className="Symbol">&uarr;</span>
    </div>
    <Link to="/page-2"></Link>
</div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
