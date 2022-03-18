import styled from 'styled-components'

export const StyledInputSubmit = styled.div`

display: flex;
flex-direction: column;
margin: 30px 0px;

button {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #0577d6;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    margin-top: 30px;
    padding: 10px 16px;
    transition: none;
    vertical-align: middle;
    border: solid 2px #fff;
    border-radius: 100px;
    cursor: pointer;

    &:hover {
        background: #055ea8;
        box-shadow: 0 0 0 2px #addaff;
        color: #fff;
    }
}

input {
    padding: 15px;
    border-radius: 9px;
}

`;
