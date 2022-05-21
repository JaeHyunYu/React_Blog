import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

 
  let [title,setTitle]=useState(['남자 코트 추천','강남 우동맛집','파이썬독학']);
  let [like,setLike]=useState(0);

  return (
    <div className="App">
     <div className='black-nav'>
       <h4 style={{fontSize:'16px'}}>ReactBlog</h4>
     </div>

     <button onClick={()=>{
       let copy = [...title];
       copy[0]='여자 코트 추천';
       setTitle(copy);
       //setTitle(['여자 코트 추천','강남 우동맛집','파이썬독학']); 이런식으로 바꿔도 되는데 확장성이 없음
       }}>글수정</button>

       <button onClick={()=>{
         let i;
         let copy = [...title];
         copy.sort();
         setTitle(copy);
       }}>가나라순정렬</button>

     <div className='list'>
       <h4>{title[0]} <span onClick={()=>{setLike(like+1)}}>👍</span> {like} </h4>
       <p>2월 17일</p>
     </div>

     <div className='list'>
       <h4>{title[1]}</h4>
       <p>2월 17일</p>
     </div>

     <div className='list'>
       <h4>{title[2]}</h4>
       <p>2월 17일</p>
     </div>

  <Modal></Modal>

    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
   </div>
  )
}

export default App;
