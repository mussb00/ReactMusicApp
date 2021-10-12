import React from 'react'
import {Carousel } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Songs = (props) => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://tse1.mm.bing.net/th?id=OIP.R4imLfrqPV-tqh-M4i9W9gHaHa&pid=Api&P=0&w=300&h=300'
                        alt="maniac"
                    />
                    <Carousel.Caption>
                        <h4>{props.name}</h4>
                        <p aria-label="likeCount">{props.count}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src = "https://tse1.mm.bing.net/th?id=OIP.lz_8XzTgK0AhEYGJOXd-gAHaEK&pid=Api&P=0&w=345&h=195"
                        alt="idleTown"
                    />
                    <Carousel.Caption>
                        <h4>{props.name}</h4>
                        <p aria-label="likeCount">{props.count}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src = "https://tse4.mm.bing.net/th?id=OIP.9pL9wcXb116FlPGFHHBThwHaEK&pid=Api&P=0&w=302&h=171"
                        alt="grow"
                    />
                    <Carousel.Caption>
                        <h4>{props.name}</h4>
                        <p aria-label="likeCount">{props.count}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

Songs.propTypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number,
    increaseCount: PropTypes.func,
    decreaseCount: PropTypes.func,
}

export default Songs
