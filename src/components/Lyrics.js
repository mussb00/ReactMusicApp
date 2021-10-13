import React, { useState, useEffect, useContext} from 'react'
import { Button } from 'react-bootstrap'
import { SongContext } from './Song'


const Lyrics = () => {

    const Song = useContext(SongContext)
    const [Lyrics, setLyrics] = useState('Click the button below to display the lyrics!')
    const [Lyrics2, setLyrics2] = useState('')

    async function changeLyrics (Song) {
        const response = await fetch(`https://api.lyrics.ovh/v1/Conan Gray/${Song}`)
        const data = await response.json() 
        setLyrics(data.lyrics)
    }

    changeLyrics(Song)

    function displayLyrics (){
        if (Lyrics2 === ''){
            setLyrics2(Lyrics)
        } else {
            setLyrics2('')
        }
    }

    // function reset(str){
    //     setLyrics(str)
    // }

    useEffect(() => {
        console.log('Lyrics have been changed!')
    }, [Lyrics2])
    
    return (
        <div>
            {/* {lyrics} keeps up to date with lyrics changes */}
            <p>{Lyrics2}</p> 
            <Button variant="dark" onClick={() => displayLyrics()}>Toggle Lyrics On/Off</Button>
            {/* <Button variant="dark" onclick={() =>  reset('C')}>Remove Lyrics</Button> */}
        </div>
    )
}

export default Lyrics
