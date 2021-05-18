import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

function App() {
  return (
    //BEM 
    <div className="app">

     {/* SideBar */}
     <Sidebar />

     {/* Middle */}
     <Feed />
     

     {/* Right */}
     <Widgets />

    </div>
  );
}

export default App;
