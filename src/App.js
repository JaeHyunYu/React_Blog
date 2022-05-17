import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let post = '강남 우동 맛집'; // 서버에서 가져온 데이터로 가정
  let [a,b]=useState(['남자 코트 추천','강남 우동맛집','파이썬독학']);
  let [logo,setLogo]=useState('ReactBlog');
  return (
    <div className="App">
     <div className='black-nav'>
       <h4 style={{color:'red',fontSize:'16px'}}>{post}</h4>
     </div>
     <div className='list'>
       <h4>{a[0]}</h4>
       <p>2월 17일</p>
     </div>
     <div className='black-nav'>
       <h4 style={{color:'red',fontSize:'16px'}}>{post}</h4>
     </div>
     <div className='list'>
       <h4>{a[1]}</h4>
       <p>2월 17일</p>
     </div>
     <div className='black-nav'>
       <h4 style={{color:'red',fontSize:'16px'}}>{post}</h4>
     </div>
     <div className='list'>
       <h4>{a[2]}</h4>
       <p>2월 17일</p>
     </div>
    </div>
  );
}

export default App;
