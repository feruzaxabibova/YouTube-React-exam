import { Switch, Route } from 'react-router-dom';
import './App.scss';

// Components
import Header from './components/Header/Header';
import HomePage from './pages/Home/HomePage';
import ChanelPage from './pages/Chanel/ChanelPage';
import VideoPage from './pages/Video/VideoPage';


function App() {
  return (
    <>
        <div className="head-box">
         <Header />
          <Switch>
            <Route path="/" component={HomePage} exact></Route>
            <Route path="/chanel" component={ChanelPage}></Route>
            <Route path="/video/2" component={VideoPage}></Route>
          </Switch>
        </div>
    </>
  )
}

export default App;
