import './App.css';
import LikeImage from './components/LikeImageHOC';
import LikePost from './components/LikePostHOC';
import Wrapper from './components/Wrapper';
function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div>
    </div>
  );
}

export default App;
