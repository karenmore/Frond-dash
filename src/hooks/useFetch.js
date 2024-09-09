import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {

    const [response, setResponse]= useState()
    const [hasError, setHastError ] = useState(false)

    const api = () =>  { 
        axios.post(url)
            .then( res => 
                setResponse(res.data))
                setHastError(false)
            .catch(err => 
                console.log(err))
                setHastError(true)
    }

    return [response, api, hasError]
}

export default useFetch