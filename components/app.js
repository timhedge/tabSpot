import Search from './search.js';
import List from './list.js';
import axios from 'axios';

class App extends React.Component {
  state = {
    currentText: '',
    currentSearchQuery: '',
    tabsSearchResults: [],
    suggestionsResults: [],
    tabsList: true,
    suggestionsList: true
  }

  handleChange = this.handleChange.bind(this);
  handleSearchClick = this.handleSearchClick.bind(this);
  handleArtistClick = this.handleArtistClick.bind(this);

  handleChange(event) {
    let text = event.target.value;
    this.setState({
      currentText: text
    });
  }

  handleSearchClick() {
    this.setState({
      currentSearchQuery: this.state.currentText
    }, () => {
      this.getSearchData(this.state.currentSearchQuery);
    });
  }

  handleArtistClick(event) {
    let artistName = event.target.innerHTML;
    this.setState({
      currentSearchQuery: artistName
    }, () => {
      this.getSearchData(this.state.currentSearchQuery);
    });
  }

  getSearchData(searchQuery) {
    this.getTastediveData(searchQuery);
    this.getSongsterrData(searchQuery);
  }

  getTastediveData(q) {
    axios.get(`http://localhost:8080/tastedive`, {
      params: {
        searchTerms: q
      }
    })
    .then((result) => {
      this.setState({
        suggestionsResults: [...result.data.Similar.Results]
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  getSongsterrData(q) {
    axios.get(`http://localhost:8080/songsterr`, {
      params: {
        searchTerms: q
      }
    })
    .then((result) => {
      this.setState({
        tabsSearchResults: [...result.data]
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} handleSearchClick={this.handleSearchClick}/>
        <h4>{this.state.currentSearchQuery === '' ? "Welcome! Search for an artist to view guitar tabs and similar artists" : `Tabs for ${this.state.currentSearchQuery}`}</h4>
        <List tabsList={this.state.tabsList} tabsSearchResults={this.state.tabsSearchResults}/>
        <h4 className={this.state.currentSearchQuery === '' ? "hide" : ""}>Artists you may like</h4>
        <List suggestionsList={this.state.suggestionsList} suggestionsResults={this.state.suggestionsResults} handleArtistClick={this.handleArtistClick}/>
      </div>
    )
  }
}

export default App;