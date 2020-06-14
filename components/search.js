const Search = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSearchClick}>
        <input value={props.currentText} onChange={props.handleChange}></input>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search;