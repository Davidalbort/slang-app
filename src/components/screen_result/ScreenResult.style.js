import styled from 'styled-components'

export const StyledScreenResult = styled.div`

display: flex;
flex-direction: column;
align-items: center;

    h2 {
        font-size: 22px;
        font-weight: bold;
        text-decoration: underline;
        margin: 0;

    }

    .correct, .incorrect {
        color: white;
        font-size: 24px;
        margin: 0;
        margin-bottom: 20px;
        padding: 10px 9px;
        border-radius: 8px;


        @media (min-width: 768px) {
            font-size: 38px;
            margin-top: 10px;
            margin-bottom: 34px;
            padding: 20px 9px;
        }
    }

    .correct {
        background: #16b516;
    }

    .incorrect {
        background: #9f0c0ce3;
    }

`;
