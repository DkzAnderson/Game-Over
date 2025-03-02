import { Outlet } from 'react-router-dom';
import './Scrolls.css'
import { NavBar } from './components/NavBar/NavBar';

function App() {




  return (
    <main className={`min-h-screen font-roboto bg-st flex flex-col items-center`}>
      <div className='flex w-full max-w-screen overflow-hidden min-h-[50vh] pt-22 mb-10'>
      <NavBar/>
        <Outlet/>
      </div>
      {/* Agregar footer */}
    </main>
  )
}

export default App
