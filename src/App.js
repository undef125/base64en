import './App.css';
import Converter from './converter.js'
import {Helmet} from "react-helmet";
import favicon from './favicon.ico';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Base 64</title>
        <link rel="canonical" type="image/png" href={favicon} sizes="16x16" />
      </Helmet>
      <Converter/>
    </div>
  );
}

export default App;
