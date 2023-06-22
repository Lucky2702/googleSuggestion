// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    console.log(event.target.value)
    this.setState({
      searchInput: event.target.value.toLowerCase(),
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionList} = this.props

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-img"
        />
        <div className="card">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-img"
            />
            <input
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          <ul className="list-container">
            {suggestionList.map(each => (
              <SuggestionItem item={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
