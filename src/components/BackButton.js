import React from 'react'
import { useHistory, useLocation } from 'react-router'

const BackButton = () => {
    const history = useHistory()
    // const location = useLocation()
    return (<button onClick={()=>{history.goBack()}}>BackButton</button>
    )
}

export default BackButton