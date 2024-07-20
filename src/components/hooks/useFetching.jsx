import { useState } from "react"

export const useFetching = (callback) => {
    const [isLoaded,setLoading] = useState(false)
    
    const fetching = async () => {

        try {
            setLoading(true)
            await callback()
        } catch(e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    return [fetching,isLoaded]
}
