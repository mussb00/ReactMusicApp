import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import Maniac from '../images/Maniac.png'
import Grow from '../images/Grow.png'
import Lyrics from './Lyrics'

const Song = () => {
    const{Song} = useParams();
    console.log(Song)
    const src = `../images/${Song}.png`
    return (
        <div>
            <h1>{Song}</h1>
            <img src={'../images/Maniac.png'} alt={Song}/>
            <Lyrics/>
        </div>
    )
}

Song.propTypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number,
    increaseCount: PropTypes.func,
    decreaseCount: PropTypes.func,
}

export default Song
