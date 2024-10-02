import './App.css';
import CircularChart from './CircularChart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import LineChart from './LineChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CircularChart />
        <LineChart />
      </header>
    </div>
  );
}

export default App;
