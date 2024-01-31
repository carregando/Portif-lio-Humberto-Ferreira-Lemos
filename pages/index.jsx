import styled from 'styled-components'

import Footer from '../src/components/layout/footer/Footer'
import Navbar from '../src/components/layout/Navbar/Navbar'

const Body = styled.div`
  min-height: 100vh;
`

function HomePage () {
  return (
    <>
      <Body>
       <Navbar/>
      </Body>
      <Footer/>
    </>
  )
}

export default HomePage