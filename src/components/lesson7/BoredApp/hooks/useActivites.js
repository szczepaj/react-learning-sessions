import {useEffect, useState} from "react";
import {fetchActivities} from "../api/fetchActivities";

export const useActivity = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [activity, setActivity] = useState(null)
    const handleRandomRequest = async params => {
        setIsLoading(true)

        const activity = await fetchActivities(params)
        setIsLoading(false)
        setActivity(activity)
    }

    useEffect(() => {
        handleRandomRequest()
    }, [])

    return {
        handleRandomRequest,
        activity,
        isLoading
    }
}