import React from 'react'
import {StyledActivityParam, StyledActivityWrapper, StyledLoader, StyledWrapper} from "./BoredApp.styled";
import {fetchActivities} from "./api/fetchActivities";


const activityTypes = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]

export class BoredApp extends React.PureComponent {
    state = {
        activity: null,
        isLoading: false,
        myActivities: [],
        selectedType: activityTypes[0],
        participants: 1,
        priceRange: 0
    }

    componentDidMount() {
        this.handleRandomRequest()
    }

    handleRandomRequest = async params => {
        this.setState({
            isLoading: true
        })

        const activity = await fetchActivities(params)
        this.setState({
            activity,
            isLoading: false
        })
    }

    handleListAddition = () => {
        this.setState(state =>({
            myActivities: state.myActivities.concat(state.activity)
        }))

        this.handleRandomRequest()
    }

    handleInput = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    onSubmit = evt => {
        evt.preventDefault()
        const { selectedType, participants, priceRange} = this.state
        this.handleRandomRequest({
            type: selectedType,
            participants,
            price: priceRange / 100
        })
    }

    render() {
        const { activity, isLoading, myActivities, selectedType, participants, priceRange } = this.state
        return (
            <StyledWrapper>
                <h1>Please choose your activity</h1>
                <form onSubmit={this.onSubmit}>
                    <select value={selectedType} name={'selectedType'} onChange={this.handleInput}>
                        {activityTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                    <input type="number" name={'participants'} value={participants} onChange={this.handleInput}/>
                    <input type="range" value={priceRange} name={'priceRange'} onChange={this.handleInput}/>
                    <button type={'submit'}>Submit</button>
                </form>


                {isLoading && <StyledLoader />}
                {!isLoading && activity && (
                    <StyledActivityWrapper>
                        <h3>{activity.activity}</h3>
                        <StyledActivityParam><span>Type:</span> {activity.type}</StyledActivityParam>
                        <StyledActivityParam><span>Participants:</span> {activity.participants}</StyledActivityParam>
                        <StyledActivityParam><span>Price:</span> {activity.price}</StyledActivityParam>
                        <button onClick={this.handleListAddition}>Add to list</button>
                    </StyledActivityWrapper>
                )}


                {myActivities?.length > 0 && (
                    <div>
                        {myActivities.map(item => (
                            <div>{item.activity}</div>
                        ))}
                    </div>
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

// Finalne zadanie dla chętnych
// 1. Tworzymy formularz z polami:
// 1.1 Type - select
// 1.2 Participants - input - number // select
// 1.3 Price - range button
// 2. Podpinamy formularze do stanu
// 3. Tworzymy dynamicznie requesty do axiosa bazujące na danych z formularzy