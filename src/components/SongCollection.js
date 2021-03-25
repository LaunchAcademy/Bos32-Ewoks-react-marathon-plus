import React, {useState} from 'react'
import Song from './Song'

const SongCollection = props => {
    const [selectedSong, chooseSong] = useState(null)

    const songCollection = props.data.map((song) => {
        const clickSong = () => {
            chooseSong(song.id)
        }

        let selected = false
        if(song.id === selectedSong){
            selected = true
        }

        return <Song key={song.id} artist={song.artist} clickSong={clickSong} songName={song.name} selected={selected}/>
    })
    return (
        <div>
            <h1>Songs</h1>
            {songCollection}
        </div>
    )

}

export default SongCollection