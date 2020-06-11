const ListEntry = (props) => {
    return (
      <>
        {props.entries.map(entry =>
            <li>{entry.songName ? entry.songName : entry.Name}</li>
        )}
      </>
    )
}

export default ListEntry;