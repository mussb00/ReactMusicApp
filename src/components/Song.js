import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import Maniac from '../images/Maniac.png'
import Grow from '../images/Grow.png'
import Lyrics from './Lyrics'

export const SongContext = React.createContext()

const Song = () => {
    const { Song } = useParams();
    let src;
    if (Song === "Maniac") {
        src = Maniac
    } else {
        src = Grow
    }
    return (
        <>
            <SongContext.Provider value={Song}>
                <h1>{Song}</h1>
                <img src={src} alt={Song} />
                <Lyrics />
            </SongContext.Provider>
        </>
    )
}

Song.propTypes = {
    count: PropTypes.number,
    increaseCount: PropTypes.func,
    decreaseCount: PropTypes.func,
}

export default Song
