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
            <li><a href={`http://www.songsterr.com/a/wa/song?id=${entry.id}`} target="_blank">{entry.title} <span className="reveal">Click to view tabs on Songsterr</span></a></li>
        )}
      </>
    )
  }
}

export default ListEntry;