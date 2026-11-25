import './App.css';
import StatBar from './components/StatBar.jsx';

export default function App() {
  return (
      <div>
        <h1 className="proposal-label">R3.01-REACT-TP2 / Écosystème et Paradigme</h1>
        <StatBar name="Points de vie" current={156} max={300} type="hp" />
      </div>
  );
}