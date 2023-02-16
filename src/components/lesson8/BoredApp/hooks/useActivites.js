import {useEffect, useRef, useState} from "react";
import {fetchActivities} from "../api/fetchActivities";
import {useBoredContext} from "../BoredContext";

export const useActivity = () => {
    const { user } = useBoredContext()
    const [isLoading, setIsLoading] = useState(false)
    const [activity, setActivity] = useState(null)
    const isFetched = useRef(false)
    const handleRandomRequest = async params => {
        setIsLoading(true)

        const activity = await fetchActivities(params)
        setIsLoading(false)
        setActivity(activity)
    }

    useEffect(() => {
        if(user && !isFetched.current) {
            handleRandomRequest()
            isFetched.current = true
        }
    }, [user])

    return {
        handleRandomRequest,
        activity,
        isLoading,
        isFetched
    }
}