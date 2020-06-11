import Search from './search.js';
import List from './list.js';
import tastediveApiKey from '../apiKeys/tastediveApiKey.js';
import axios from 'axios';

class App extends React.Component {
  state = {
    currentText: '',
    currentSearchQuery: '',
    tabsSearchResults: [{ songName: 'song1' }, { songName: 'song2' }],
    suggestionsResults: [{ artistName: 'artist1' }, { artistName: 'artist2' }],
    tabsList: true,
    suggestionsList: true
  }

  handleChange = this.handleChange.bind(this);
  handleSearchClick = this.handleSearchClick.bind(this);

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
      this.getTastediveData();
    });
  }

  getTastediveData() {
    axios.get(`http://localhost:8080/tastedive`, {
      params: {
        searchTerms: this.state.currentSearchQuery
      }
    })
    .then((result) => {
      this.setState({
        suggestionsResults: [...result.data.Similar.Results]
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} handleSearchClick={this.handleSearchClick}/>
        <List tabsList={this.state.tabsList} tabsSearchResults={this.state.tabsSearchResults}/>
        <List suggestionsList={this.state.suggestionsList} suggestionsResults={this.state.suggestionsResults}/>
      </div>
    )
  }
}

export default App;