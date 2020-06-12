const ListEntry = (props) => {
  if (props.entryType === 'artist') {
    return (
      <>
        {props.entries.map(entry =>
            <li onClick={props.handleArtistClick}>{entry.Name}</li>
        )}
      </>
    )
  } else {
    return (
      <>
        {props.entries.map(entry =>
            <li><a href={`http://www.songsterr.com/a/wa/song?id=${entry.id}`} target="_blank">{entry.title} Click to view tabs on Songsterr</a></li>
        )}
      </>
    )
  }
}

export default ListEntry;