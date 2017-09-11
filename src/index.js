import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = "AIzaSyDCrlDczVSios59ysyIklqOqsm8RT_IVKo"

//Component to create some HTML
const App = () => {
  return <div>Hi</div>
}

//Take the component's generated HTML and put it in the home page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
