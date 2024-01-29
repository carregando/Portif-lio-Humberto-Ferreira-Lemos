import styled from 'styled-components'

import Icon from '../src/components/iconContainer/Icon'

const TestContainer = styled.div`
`

function HomePage () {
  return (
    <>
      <TestContainer>
        <Icon URL=""/>
        <Icon image="github-mark.svg" URL="https://github.com/carregando/climaDev-devchallenge1/tree/main/src/components"/>
      </TestContainer>
    </>
  )
}

export default HomePage