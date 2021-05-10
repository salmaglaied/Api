
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListTask from './components/ListTask'
import AddTask from './components/AddTask';

function App() {
  
  return (
    <div className="App">
      <h1>MyToDoApp</h1>
     
      
      <br></br><br></br>
      <AddTask></AddTask>
      <br></br><br></br>
      <ListTask></ListTask>
      
      
    
      </div>
  );
}

export default App;
