import React from 'react'

const Song = props => {
    //debugger
    let classTag= null
    if(props.selected){
        classTag = 'selected'
    }
    return (
        <div>
            <p onClick={props.clickSong} className={classTag}> 
            {props.artist}-{props.songName}
            </p>
        </div>

    )

}

export default Song