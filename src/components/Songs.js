import React from 'react'
import {Button} from 'react-bootstrap'
import PropTypes from 'prop-types'
const Songs = (props) => {
    return (
        <div id="songs">
            <h4>{props.name}</h4>
            <p aria-label="likeCount">{props.count}</p>
            <Button variant= "dark" onClick={props.count? props.decreaseCount: props.increaseCount}>Like</Button>
        </div>
    )
}

Songs.propTypes = {
    name: PropTypes.string.isRequired,
    count:PropTypes.number,
    increaseCount:PropTypes.func,
    decreaseCount: PropTypes.func,
}

export default Songs
