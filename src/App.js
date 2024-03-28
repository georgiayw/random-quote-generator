import { useEffect, useState } from "react"
import './App.css';

function App() {
  const [quoteInfo, setQuoteInfo] = useState({});

  useEffect(() => {
    getQuote();
  }, [])

  const getQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => {return response.json()})
      .then((data) => {
        setQuoteInfo({
          text: data.content,
          author: data.author,
        });
      });
  }
  return (
    <div className="App">
      <div id="quote-box">
        <div id="text-box">
          <p id="text">{quoteInfo.text}</p>
        </div>
        <div id="author-box">
          <p id="author">- {quoteInfo.author}</p>
        </div>
        <button id="new-quote" onClick={getQuote}>New Quote</button>
        <a href={'https://www.twitter.com/intent/tweet' + quoteInfo.text} id="tweet-quote" target="_blank" >Post to twitter</a>
      </div>
    </div>
  );
}

export default App;
