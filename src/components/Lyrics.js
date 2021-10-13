import React, { useState, useEffect} from 'react'

const Lyrics = () => {
    const [Lyrics, setLyrics] = useState('No lyrics currently')

    async function changeLyrics (song) {
        const response = await fetch(`https://api.lyrics.ovh/v1/Conan Gray/${song}`)
        const data = await response.json() 
        console.log(data)
        setLyrics(data.lyrics)
    }

    useEffect(() => {
        console.log('Lyrics have been changed!')
    }, [Lyrics])
    
    return (
        <div>
            {/* {lyrics} keeps up to date with lyrics changes */}
            <p>{Lyrics}</p> 
            <button onClick={() => changeLyrics('Maniac')}>Maniac</button> 
            <button onClick={()=> changeLyrics('Grow')}>Grow</button>
        </div>
    )
}

export default Lyrics
