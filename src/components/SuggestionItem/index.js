// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {item} = props
  const {suggestion} = item

  return (
    <li className="list">
      <p className="title">{suggestion}</p>
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
