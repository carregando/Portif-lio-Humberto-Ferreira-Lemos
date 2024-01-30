import styled from 'styled-components'
import { useRouter } from 'next/router'

const StyledImage = styled.div`
  background: url('/${props => props.image}') no-repeat center;
  width: 70px;
  height: 70px;
  background-size: cover;
  cursor: pointer;
`

function Icon ({ image, URL }) {
  const router = useRouter()

  const handleCliker = () => {  
    return (URL? router.push(URL): router.push('/'))
  }

  return (
    <StyledImage image={image} onClick={() => handleCliker()}/>
  )
}

Icon.defaultProps = {
  image: 'icon.svg',
}

export default Icon