import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
const App = () => {

  return (
    <>
    <div className='app' >
      <Sidebar />
      <div className='app__pages' >
        <Navbar />
      </div>
    </div> 
    </>
  );
};

export default App;