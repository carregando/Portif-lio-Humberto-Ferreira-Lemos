import styled from 'styled-components'

import Icon from '../src/components/iconContainer/Icon'

const TestContainer = styled.div`
  display: flex;
`

function HomePage () {
  return (
    <>
    <TestContainer>
      <Icon />
      <Icon image="github-mark.svg" />
    </TestContainer>
    </>
  )
}

export default HomePage