import './App.css'
import StudentCard from './components/StudentCard';
function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {/* TODO: Import and render StudentCard components here */}
            <StudentCard name="Amira Abido" id="202248560" dept="computerscience "/>
            <StudentCard name="Mai Hammad" id="202245670" dept="comp senice "/>
        </div>
      </main>
    </div>
  )
}

export default App
