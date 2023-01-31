import styled from 'styled-components'

export const StyledContainer = styled.div`
    width: 100%;
    height: 50px;
    background-color: ${props => props.variant === 'dark' ? 'black' : 'red'}
`

export const StyledAlertText = styled.div`
    color: white;
    font-size: 30px;
`
