import styled from 'styled-components'

export const StyledWrapper = styled.div`
    width: 100vw;
    height: 80vh
`

export const StyledActivityWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledActivityParam = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    span {
        font-weight: bold;
    }
    
    
`

export const StyledLoader = styled.span`
    width: 48px;
    height: 48px;
    border: 5px solid black;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    
  `