import me2 from './me2.jpg';
import './App.css';
import Profile_component from './profile/Profile_component'
function App() {
const fullName="Salma Glaied";
const bio="I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with Python and Java. I build websites that delight and inform. I do it well.I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand";
const profession="Fullstack JS Developer"
const handleName=()=> {
  alert('salma glaied')
}

  return (
    <div className="App">
      <Profile_component fullName={fullName} bio={bio} profession={profession} handleName={handleName}><img src={me2} alt="salma"></img></Profile_component>
    </div>
  );
}

export default App;
