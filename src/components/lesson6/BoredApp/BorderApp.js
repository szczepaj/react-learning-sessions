import React from 'react'
import {StyledActivityParam, StyledActivityWrapper, StyledWrapper} from "./BoredApp.styled";

const fetchUrl = 'https://www.boredapi.com/api/activity'

export class BoredApp extends React.PureComponent {
    state = {
        activity: null,
        isLoading: false
    }

    render() {
        const { activity } = this.state
        return (
            <StyledWrapper>
                <h1>Please choose your activity</h1>
                {activity && (
                    <StyledActivityWrapper>
                        <h3>{activity.activity}</h3>
                        <StyledActivityParam><span>Type:</span> {activity.type}</StyledActivityParam>
                        <StyledActivityParam><span>Participants:</span> {activity.participants}</StyledActivityParam>
                        <StyledActivityParam><span>Price:</span> {activity.price}</StyledActivityParam>
                    </StyledActivityWrapper>
                )}
            </StyledWrapper>
        )
    }
}

// Do zrobienia
// 1. Pobieramy losową aktywność za pomocą axiosa
// 2. Ustawiamy aktywność w stanie
// 3. Dodajemy loading state


// Następne kroki
// 1. Możemy zapisać naszą aktywność w liście aktywności
// 2. Lista aktywności zapisywana w stanie
// 3. Możemy listą aktyności zarządzać

// Finalne zadanie dla chętnych (potencjalnie praca na hookach, do omówienie z grupą)
// 1. Tworzymy formularz z polami:
// 1.1 Type - select
// 1.2 Participants - input - number // select
// 1.3 Price - range button
// 2. Podpinamy formularze do stanu
// 3. Tworzymy dynamicznie requesty do axiosa bazujące na danych z formularzy