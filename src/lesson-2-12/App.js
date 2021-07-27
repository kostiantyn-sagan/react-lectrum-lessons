import Accordion from './components/Accordion';
import News from './components/News/News';
import newsData from './source.json';
import accordionData from './accordionData.json';

function App() {
  return (
    <>
      <News source={newsData} />
      <Accordion source={accordionData} />
    </>
  );
}

export default App;
