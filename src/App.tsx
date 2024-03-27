import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/navbar/navBar';
import useSchoolData from './hooks/useSchoolData';
import useSatData from './hooks/useSatData';
import { mergeDataByKey } from './utilities/utilities';
import { GlobalContext } from './context/context';
import ErrorComponent from './components/error/error';

function App() {
  const { data, isLoading, isError } = useSchoolData()
  const { data: satData, isError: satError } = useSatData()

  if (isLoading) {
    return (
      <div className="vh-center">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>)
  }

  if (isError || satError) {
    return <ErrorComponent/>
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
