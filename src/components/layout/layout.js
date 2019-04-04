import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import BookAside from './bookAside'
import Footer from './footer'
import { GlobalStyles } from '../../styles'

const Main = styled.main`
  display: inline-block;
  box-sizing: border-box;
  width: calc(100% - 2.005rem);
`

export const Layout = ({ children, insta }) => (
  <>
    <GlobalStyles />
    <Header  />
    <div>
      <BookAside />
      <Main>
      
        {children}
        
      </Main>
    </div>
    
    <Footer posts={insta}/>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
