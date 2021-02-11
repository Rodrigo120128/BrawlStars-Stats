import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  width: calc(87vw-40px);
  background-color: #1E0037;
  margin-top : 60px; 
  flex-direction: column;
  align-items: center;
  padding: 25px 13px 30px;
`

export const ContainerCards = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 363px){
    justify-content: center;
  }
`

export const AmountBrawlers = styled.span`
  color: white;
  font-size: 20px;
  margin-top: 20px;
`

export const Number = styled.span`
  color: #FABC3B;
`