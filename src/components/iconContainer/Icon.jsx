import styled from 'styled-components'
import { useRouter } from 'next/router'

const StyledImage = styled.div`
  background-image: url('/${props => props.image}');
  background-repeat: no-repeat;
  box-sizing: border-box;

  width: 200px;
  height: 200px;  
`

const StyledIcon = styled.div`
  cursor: pointer;
`

function Icon ({ image, URL }) {
  const router = useRouter()

  const handleIconClick = (link, condition) => {
    (condition === false && router.push('/'))
    router.push(link)
  }

  return (
    <StyledIcon onClick={() => handleIconClick(URL, image)}>
      <StyledImage image={image}/>
    </StyledIcon>
  )
}

Icon.defaultProps = {
  image: 'icon.svg',
}

export default Icon