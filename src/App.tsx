import { Outlet } from 'react-router-dom';
import './Scrolls.css'
import { NavBar } from './components/NavBar/NavBar';

function App() {




  return (
    <main className={`font-roboto bg-st flex flex-col items-center`}>
      <div className='flex w-full max-w-dvw min-h-dvh'>
        <NavBar/>
        <Outlet/>
      </div>
      {/* Agregar footer */}
    </main>
  )
}

export default App
