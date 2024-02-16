import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    // no specific input required from component
    // just check if online

    // use 'online' event Listener
    // how many times do we want to add the event listner? -> only once -> use useEffect()

    const [onlineStatus, setOnlineStatus] = useState(true)

    useEffect(()=>{
        window.addEventListener('offline', () => {
            setOnlineStatus(false);
        })

        window.addEventListener('online', () => {
            setOnlineStatus(true);
        })
    }, [])

    // return boolean value
    return onlineStatus;
}

export default useOnlineStatus;