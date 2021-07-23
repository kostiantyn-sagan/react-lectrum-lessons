import News from './components/News/News';
import newsData from './source.json';

function App() {
  return <News source={newsData} />;
}

export default App;
