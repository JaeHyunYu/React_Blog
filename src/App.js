import logo from './logo.svg';
import './App.css';

function App() {

  let post = '강남 우동 맛집'; // 서버에서 가져온 데이터로 가정
  return (
    <div className="App">
     <div className='black-nav'>
       <h4 style={{color:'red',fontSize:'16px'}}>{post}</h4>
     </div>
    </div>
  );
}

export default App;
