import styled from 'styled-components'

import Icon from '../../iconContainer/Icon'

const StyledNavbar = styled.div`
  background-color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;

  height: 80px;
  padding: 0 40px;
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