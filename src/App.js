import './App.css';

// Import components
import IssueData from './components/forminput/forminput.js';
import ResPerson from './components/resPerson/resPerson.js';
import RowAndColumnSpacing from './components/row&Columns/Row&Columns.js';




function App() {
  return (
    <div className="App">
      Hello World
      <RowAndColumnSpacing/>
      <IssueData/>
      {/* <ResPerson/> */}
    </div>
  );
}

export default App;
