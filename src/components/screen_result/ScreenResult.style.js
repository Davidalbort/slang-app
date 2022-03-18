import styled from 'styled-components'

export const StyledScreenResult = styled.div`

display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 30px;

    h2 {
        font-size: 22px;
        font-weight: bold;
        text-decoration: underline;

    }

    .checked {

        &::before {
            content: "\\2713"
        }

    }

`;
