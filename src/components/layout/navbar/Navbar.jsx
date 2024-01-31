import styled from 'styled-components'

import Icon from '../../iconContainer/Icon'

const StyledNavbar = styled.div`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  display: flex;
  align-items: center;
  height: 80px;
`

const IconContainer = styled.div`
  padding: 0px 40px;
`

export default function Navbar () {
  return (
    <>
      <StyledNavbar>
        <IconContainer>
          <Icon/>
        </IconContainer>
        <h1>Humberto Ferreira Lemos</h1>
      </StyledNavbar>
    </>
  )
}