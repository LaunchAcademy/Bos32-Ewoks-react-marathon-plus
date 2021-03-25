import React from 'react'

const Playlist = props => {  
    return ( 
    <div onClick = {props.select} className = {props.isSelected  ? "selected" : ""}>
        {props.playlist.name}
    </div>

    )
}
export default Playlist