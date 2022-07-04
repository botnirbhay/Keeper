import './App.css';
import Footer from './Footer';
import Header from './Header';
import Notes from './Note';
import Card from "./Card"
function createEntry(item)
{
  return <Card
    key={item.id}
    title={item.title}
    content={item.content}
  />
}
function App() {
  return (
    <div className="App">
      <Header/>
      {Notes.map(createEntry)}
      <Footer/>
    </div>
  );
}

export default App;
