import { ReactComponent as DogImage } from 'assets/images/dog-image.svg';
import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import Navbar from 'components/Navbar';
import './assets/styles/custom.scss';
import './App.css';

const App = () => {
  return (
    <>
    <Navbar/>
    <DogImage/>
    <MainImage/>
    
    </>
  );
}


export default App;
