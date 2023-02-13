import React, {useEffect, useState} from "react";
import {fetchActivities} from "./api/fetchActivities";
import {StyledActivityParam, StyledActivityWrapper, StyledLoader, StyledWrapper} from "./BoredApp.styled";
import {useForm} from "react-hook-form";
import {useActivity} from "./hooks/useActivites";

const activityTypes = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]

export const BoredApp = () => {
    const [myActivities, setMyActivities] = useState([])
    const { register, handleSubmit } = useForm({
        defaultValues: {
            selectedType: activityTypes[0],
            participants: 1,
            priceRange: 0
        }
    })
    const { isLoading, activity, handleRandomRequest } = useActivity()

    const handleListAddition = () => {
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



    return (
        <StyledWrapper>
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