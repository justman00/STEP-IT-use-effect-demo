import React from 'react';
import './App.css';
// "https://dog.ceo/api/breeds/image/random" - cerere de date, effect

// state care o sa tina true / false
// o sa avem un button care zice refresh si sa schimbe imaginea
function App() {
  // const [data, setData] = React.useState({ hits: [] });
  const [data, setData] = React.useState(undefined);
  const [query, setQuery] = React.useState('react');

  React.useEffect(() => {
    fetch('https://hn.algolia.com/api/v1/search?query=' + query)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData({ hits: result.hits });
      });
  }, [query]);

  if(!data) {
    return <div>loading...</div>
  }

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {data.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
