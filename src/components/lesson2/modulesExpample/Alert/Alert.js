import React from 'react'
import css from './Alert.module.css'
import {StyledAlertText, StyledContainer} from "./Alert.styled";

export class Alert extends React.Component {
    render() {
        const {variant, text } = this.props

        return (
            <StyledContainer variant={variant}>
                <StyledAlertText className={css.text}>{text}</StyledAlertText>
            </StyledContainer>
        )
    }
}