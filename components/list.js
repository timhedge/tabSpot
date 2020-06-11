import ListEntry from './listEntry.js';

const List = (props) => {
  return (
    <div>
      <ul>
        <ListEntry entries={props.tabsList ? props.tabsSearchResults : props.suggestionsResults}/>
      </ul>
    </div>
  )
}

export default List;