import styled from 'styled-components'
import { useRouter } from 'next/router'

const StyledImage = styled.div`
  background-image: url('/${props => props.image}');
  background-repeat: no-repeat;

  width: 100vh;
`

const StyledIcon = styled.div`
  cursor: pointer;
`

function Icon ({ image, URL }) {
  const router = useRouter()

  const handleCliker = () => {
    return URL? router.push(URL): router.push('/')
  }
  return (
    <StyledIcon onClick={() => handleCliker()}>
      <StyledImage image={image}/>
    </StyledIcon>
  )
}

Icon.defaultProps = {
  image: 'icon.svg',
}

export default Icon