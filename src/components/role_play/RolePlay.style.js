import styled from 'styled-components'

export const StyledRolePlay = styled.div`

position: absolute;
display: flex;
flex-wrap: wrap;
min-width: 270px;
justify-content: center;
top: 46px;
color: black;
background: rgb(194, 227, 255);
border: solid 4px #0577d6;
border-radius: 15px;
padding: 0 12px;
box-shadow: 4px 2px 6px rgb(0 0 0 / 25%);
font-size: 18px;

@media (min-width: 768px) {
    top: 82px;
}

    p {
        display: inline-block;
        margin-right: 10px;
    }

`;
