import styled from 'styled-components'

const EmailContainer = styled.div`
  background-color: ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.black};
  width: 520px;
  height: 130px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`

const DarkBlueFooter = styled.div`
  background-color: ${props => props.theme.colors.derkestBlue};
  color: ${props => props.theme.colors.white};
  width: 100%;
  height: 400px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const BlackFooter = styled.div`
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Footer () {
  return (
    <>
      <DarkBlueFooter>
        <div>
          <h1>Entre em contato</h1>
          <EmailContainer>
            EMAIL
          </EmailContainer>
        </div>
      </DarkBlueFooter>
      <BlackFooter>
          Criado por Humberto Ferreira Lemos
      </BlackFooter>
    </>
  )
}