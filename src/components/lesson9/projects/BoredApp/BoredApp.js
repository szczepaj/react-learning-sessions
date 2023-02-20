import React, {useContext, useEffect, useRef, useState} from "react";
import {fetchActivities} from "./api/fetchActivities";
import {StyledActivityParam, StyledActivityWrapper, StyledLoader, StyledWrapper} from "./BoredApp.styled";
import {useForm} from "react-hook-form";
import {useActivity} from "./hooks/useActivites";
import {BoredContext, useBoredContext} from "./BoredContext";
import {Button} from "./Button";

const activityTypes = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]

// Komponent funkcyjny, hooki stanowe i cyklu życiowego.
// Korzystanie z contextu (z customowym hookiem - useBoredContext)
// Korzystanie z referencji dla elementów DOM

export const BoredApp = () => {
    const { setMyActivities, myActivities, isAuthorized, setAuthorizationStatus, user, setUser } = useBoredContext()
    const ref = useRef(null)
    const buttonRef = useRef(null)

    const { register, handleSubmit } = useForm({
        defaultValues: {
            selectedType: activityTypes[0],
            participants: 1,
            priceRange: 0
        }
    })
    const { isLoading, activity, handleRandomRequest, isFetched } = useActivity()

    const handleListAddition = () => {
        console.log(myActivities)
        setMyActivities(myActivities.concat(activity))

        handleRandomRequest()
    }

    const onSubmit = ({ selectedType, participants, priceRange}) => {
        handleRandomRequest({
            type: selectedType,
            participants,
            price: priceRange / 100
        })
    }

    const authorize = () => setAuthorizationStatus(true)
    const handleInput = evt => setUser(evt.target.value)


    useEffect(() => {
        ref.current.focus()
        console.log(buttonRef.current)
    }, [])


    return (
        <StyledWrapper>
            {isAuthorized && (
                <>
                    <h1>Please choose your activity</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <select {...register('selectedType')}>
                        {activityTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                    <input type="number" {...register('participants')}/>
                    <input type="range" {...register('priceRange')}/>
                    <button type={'submit'}>Submit</button>
                    </form>


                {isLoading && <StyledLoader />}
                {!isLoading && activity && (
                    <StyledActivityWrapper>
                        <h3>{activity.activity}</h3>
                        <StyledActivityParam><span>Type:</span> {activity.type}</StyledActivityParam>
                        <StyledActivityParam><span>Participants:</span> {activity.participants}</StyledActivityParam>
                        <StyledActivityParam><span>Price:</span> {activity.price}</StyledActivityParam>
                        <button onClick={handleListAddition}>Add to list</button>
                    </StyledActivityWrapper>
                )}
            </>
            )}
            {!isAuthorized && (
                <>
                    <Button ref={buttonRef} onClick={authorize} text={'Log me in'}/>
                    <input ref={ref} type="text" value={user} onChange={handleInput} />
                </>
            )}
        </StyledWrapper>
    )
}