import './App.css';

// Import components
import IssueData from './components/formInput/formInput.js';
import ResPerson from './components/resPerson/resPerson.js';
import RowAndColumnSpacing from './components/row&Columns/Row&Columns.js';
import FileUpload from './components/fileUpload/fileUpload.js'


function App() {
  return (
    <div className="App">
      <RowAndColumnSpacing />
      <IssueData />
      {/* <ResPerson/> */}
    </div>
  );
}

export default App;
