const ListEntry = (props) => {
  if (props.entryType === 'artist') {
    return (
      <>
        {props.entries.map(entry =>
            <li className="horizontalList" onClick={props.handleArtistClick} key={entry.index}><a href="#top">{entry.Name}</a></li>
        )}
      </>
    )
  } else {
    return (
      <>
        {props.entries.map(entry =>
            <li className="tabsList" key={entry.index}><a href={`http://www.songsterr.com/a/wa/song?id=${entry.id}`} target="_blank"><i className="fas fa-guitar blueGuitar"></i>&nbsp;&nbsp;{entry.title}&emsp;<span className="reveal">Click to view tabs on <span className="songsterr">Songsterr&trade;</span></span></a></li>
        )}
      </>
    )
  }
}

export default ListEntry;