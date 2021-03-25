import React, {Fragment, useState} from 'react';
import Playlist from './playlist'


const PlaylistCollection = (props) => {

    const [selectedID, setSelectedID] = useState(null)

    const playListData = props.data.playlists.map((playlist) => {

        const select = () =>{
            setSelectedID(playlist.id)
        }

        return <li><Playlist playlist= {playlist} select = {select} key = {playlist.id} isSelected = {selectedID == playlist.id ? true : false}/></li>
    })
return(
    <Fragment>
        <h1>Playlists</h1>
        <ul>
        {playListData}
        </ul>
    </Fragment>
)
}



export default PlaylistCollection;