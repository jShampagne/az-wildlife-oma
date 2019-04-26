import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import logo from '../images/game&fish-logo.png'


const Header = ({ siteTitle }) => (

  <MainDiv>
    <div class="ui secondary pointing menu">
      <LogoBox>
        <StyledImg src={logo} />
      </LogoBox>
        <a href='/' className="active item header-item">
          Conserve & Protect
        </a>
        <a href='/stories' className="item header-item">
          Stories
        </a>
        <a href='#services' class="item">
          Our Experts
        </a>
        <a href='#contact' class="item">
          Programs
        </a>
        <div class="right menu">
          <button class="ui brown button">Donate</button>
        </div>
    </div>
  </MainDiv>
)

const MainDiv = styled.div`
  justify-content: center;
  padding-right: 1rem;
  padding: 1rem 1rem;
  position: relative;
`
const LogoBox = styled.div`
  position: absolute;
  top: 1rem;
  left: 2rem;
  margin-right: 4rem;
`

const StyledImg = styled.img`
  height: 6rem;
  padding-right: 10rem;
  padding-left: 10rem;
  z-index: 10;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header