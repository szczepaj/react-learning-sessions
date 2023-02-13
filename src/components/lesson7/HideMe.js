import {useEffect} from "react";


export const HideMe = () => {

    const onScroll = () => { /* cos sie dzieje */}

    useEffect(() => {
        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div>Its me</div>
    )
}