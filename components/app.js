import Search from './search.js';

class App extends React.Component {
  state = {
    currentText: '',
    currentSearchQuery: ''
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
    });
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} handleSearchClick={this.handleSearchClick}/>
      </div>
    )
  }
}

export default App;