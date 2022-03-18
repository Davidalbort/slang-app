import styled from 'styled-components'

export const StyledApp = styled.section` 

display: grid;
place-items: center;
margin: 160px 8px;
padding: 15px;
background-color: #0577d6;
color: #ccedff;
font-size: 18px;
line-height: 24px;
border: solid 7px black;
border-radius: 52px;
box-shadow: 4px 14px 16px rgb(0 0 0 / 25%);

@media (min-width: 768px) {
    margin: 160px 50px;
    border-radius: 57px;
}

    img {
        position: absolute;
        top: 0;
        left: 0;
        height: 38px;
    }

    .separator {
        background-color: black;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 24px;
        border-radius: 46px;
    }

`;