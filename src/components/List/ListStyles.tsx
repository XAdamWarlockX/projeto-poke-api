import styled from "styled-components"

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin: 80px 200px;
    padding: 50px;

    @media (max-width: 1025px){
        margin: 50px;
    }
`

const Ul = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 30px 0 50px;
    border-radius: 20px;
    width: 80%;
`

const Li = styled.li`
    text-align: center;
    font-size: 20px;
    border: solid 2px black;
    border-radius: 20px;
    margin: 10px;
    padding: 15px;
    background-color: cornflowerblue;
`

const Img = styled.img`
    width: 150px;
`

export { Main, Ul, Li, Img }