import s from './App.module.css'

import Navbar from './Navbar/Navbar';
import UserRoutes from './UserRoutes';


const App = () => {
  return (
    <div className={s.container}>
      <Navbar/>
      <UserRoutes/>
    </div>
  );
};

export default App;