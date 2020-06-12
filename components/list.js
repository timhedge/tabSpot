import ListEntry from './listEntry.js';

const List = (props) => {
  return (
    <div>
      <ul>
        <ListEntry entryType={props.tabsList ? 'tabs' : 'artist'} entries={props.tabsList ? props.tabsSearchResults : props.suggestionsResults}/>
      </ul>
    </div>
  )
}

export default List;