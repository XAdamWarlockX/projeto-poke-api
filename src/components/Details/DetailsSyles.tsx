import styled from "styled-components"

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin: 80px 200px;
    padding: 50px 0;
    
    @media (max-width: 1025px){
        margin: 50px;
    }
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
    padding-bottom: 30px;
    background-color: cornflowerblue;
    width: 80%;
    border: solid 2px black;
    border-radius: 20px;
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 15px;
    border-radius: 20px;
`

const Title = styled.h2`
    text-align: center;
    font-size: 26px;
`

const Img = styled.img`
    width: 250px;
`

const Li = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin: 12px;
    border-radius: 10px;
    font-size: 20px;
`

export { Main, Section, Div, Title, Img, Li }