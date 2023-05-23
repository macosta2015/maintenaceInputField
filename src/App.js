import './App.css';

// Import components
import IssueData from './components/formInput/forminput.js';
import ResPerson from './components/resPerson/resPerson.js';
import RowAndColumnSpacing from './components/row&Columns/Row&Columns.js';



function App() {
  return (
    <div className="App">
      <RowAndColumnSpacing/>
      <IssueData/>
      {/* <ResPerson/> */}
    </div>
  );
}

export default App;
