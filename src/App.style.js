import styled from 'styled-components'

export const StyledApp = styled.main` 

display: grid;
max-width: 900px;
min-width: 295px;
place-items: center;
margin: 90px 8px;
padding: 15px;
background-color: #0577d6;
color: #fff;
font-size: 18px;
line-height: 24px;
border: solid 7px black;
border-radius: 52px;
box-shadow: 4px 14px 16px rgb(0 0 0 / 25%);
text-align: center;

@media (min-width: 768px) {
    margin: 128px auto;
    border-radius: 57px;
}

    h1 {
        font-size: 30px;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 30px;
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
        padding: 0px 7px;
        border-radius: 46px;

        p {
            margin-top: 12px;
            margin-bottom: 8px;
        }
    }

`;