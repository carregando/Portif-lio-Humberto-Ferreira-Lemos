import styled from 'styled-components'

import Icon from '../src/components/iconContainer/Icon'
import Navbar from '../src/components/layout/Navbar/Navbar'

const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
`

function HomePage () {
  return (
    <>
      <TestContainer>
        <Navbar/>
      </TestContainer>
    </>
  )
}

export default HomePage