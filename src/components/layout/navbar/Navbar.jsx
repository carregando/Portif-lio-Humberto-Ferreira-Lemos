import styled from 'styled-components'

import Icon from '../../iconContainer/Icon'

const StyledNavbar = styled.div`
  background-color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
`

export default function Navbar () {
  return (
    <>
      <StyledNavbar>
        <Icon />
      </StyledNavbar>
    </>
  )
}