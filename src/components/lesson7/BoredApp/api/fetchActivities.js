import {createParamsString} from "./createParamsString";

const fetchUrl = 'https://www.boredapi.com/api/activity'

export const fetchActivities = async params => {
    const urlParams = createParamsString(params)

    const res = await fetch(`${fetchUrl}${urlParams}`)
    const resBody = await res.json()

    return resBody
}