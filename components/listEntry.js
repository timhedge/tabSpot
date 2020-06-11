const ListEntry = (props) => {
    return (
      <>
        {props.entries.map(entry =>
            <li>{entry.songName ? entry.songName : entry.artistName}</li>
        )}
      </>
    )
}

export default ListEntry;