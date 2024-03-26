import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/navbar/navBar';
import { createContext } from 'react';
import { SchoolSatInterface } from './interfaces/interfaces';
import useSchoolData from './hooks/useSchoolData';
import useSatData from './hooks/useSatData';
import { mergeDataByKey } from './utilities/utilities';
import { GlobalContext } from './context/context';

function App() {
  const { data, isLoading } = useSchoolData()
  const { data: satData } = useSatData()

  if (!data && !satData && isLoading) {
    return <div>loading...</div>
  }
  const mergedData = data && satData && mergeDataByKey([...data, ...satData])

  return (
    <div className="App">
      <NavBar/>
      <div className='container'>
        <GlobalContext.Provider value={mergedData || []}>
          <Outlet/>
        </GlobalContext.Provider>
      </div>
    </div>
  );
}

export default App;
