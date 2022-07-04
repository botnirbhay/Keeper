import './App.css';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import card from "./card"
function createEntry(item)
{
  return <Card
    key={item.id}
    name={item.name}
    content={item.content}
  />
}
function App() {
  return (
    <div className="App">
      <Header/>
      <Note/>
      <Footer/>
    </div>
  );
}

export default App;
