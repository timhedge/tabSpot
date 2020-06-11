const Search = (props) => {
  return (
    <div>
      <input value={props.currentText} onChange={props.handleChange}></input>
      <button onClick={props.handleSearchClick}>Search</button>
    </div>
  )
}

export default Search;