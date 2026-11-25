import './App.css';
import StatBar from './components/StatBar.jsx';

export default function App() {
  return (
      <div className="proposal">
        <h1 className="proposal-label">R3.01-REACT-TP2 / Écosystème et Paradigme</h1>
        <div className="stack">
          <StatBar name="Points de vie" current={156} max={300} type="hp" />
          <StatBar name="Points de mana" current={35} max={40} type="mana" />
          <StatBar name="Endurance" current={32} max={100} type="stamina" />
          <StatBar name="Expérience" current={1300} max={5000} type="xp" />
        </div>
      </div>
  );
}