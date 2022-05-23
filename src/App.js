import './App.css';
import Content from './components/Content/Content';
import NavBar from './components/NavBar/NavBar';
import Showcase from './components/ShowCase/ShowCase';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
      <NavBar/>
      <Content/>
      <Showcase/>
      <SideBar/>
      <Footer/>
    </div>
  );
}

export default App;
