import React, {useState} from 'react'
import { Container } from 'react-bootstrap'

const Introduction = () => {
    const [colour, setColour] = useState('black')

    const redFont = () => {
        console.log("LOG");
        setColour(colour => colour = 'red')
    }

    const normalFont = () => {
        console.log("LOG");
        setColour(colour => colour = 'black')
    }


    return (
        <div id="intro">
            <Container>
            <h1>Conan Gray</h1>
           <p style={{color: colour}} onMouseOver ={redFont} onMouseLeave ={normalFont}>Conan Lee Gray (born December 5, 1998) is an American singer and songwriter. Raised in California and Georgetown, Texas, he began uploading vlogs, covers and original songs to YouTube as a teenager. Gray signed a record deal with Republic Records in 2018, where he released his debut EP Sunset Season (2018). His debut studio album Kid Krow (2020) debuted at number 5 on the US Billboard 200, making it the biggest US new artist debut of 2020. Kid Krow included the commercially successful singles "Maniac" and "Heather".</p> 
            </Container>
        </div>
    )
}

export default Introduction
