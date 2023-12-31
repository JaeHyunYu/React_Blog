import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

 
  let [title,setTitle]=useState(['남자 코트 추천','강남 우동맛집','파이썬독학']);
    //해당 글제목 변수 형식은 문자, 숫자 배열 object 다 가능함

  //state는 변수 대신 쓰는 데이터 저장공간
  //state의 장점 : 웹이 app처럼 동작하게 하고 싶음
  // state에 있는 data가 수정되거나 그럴때 html이 자동으로 재렌더링이됨
  // 그냥변수는 바꾸면 새로고침해야 바뀌어짐
  // html이 새로고침없어도 스무스하게 바뀌어짐
  // 따라서 자주 변경이 되는 데이터들은 usestate사용하는 것이 좋음
  // 블로그 글들 같이 서버에서 받아오고 그런 것들

  //useState함수 실행시 배열한개 리턴해줌[변수, 변수를 수정할 수 있는 함수]
  
  let [like,setLike]=useState(0);
    //변수넣는법 이렇게 변수에다가 넣던가
  //state넣는법


  function changetitle(){
    let newtitle=[...title];
    //deep copy
    // 그냥 = 이렇게하면 shallow copy 즉 값 공유만 하게 되는 것..!
    // STATE값을 직접변경하는 것이 아닌 복사본을 가져와서 복사본 변경하고 
    // 변경함수이용해서 바꾸는 거가 국룰
    newtitle[0]='여자 코트 추천'
    setTitle(newtitle);
  }

  return (
    <div className="App">
     <div className='black-nav'>
       <h4 style={{fontSize:'16px'}}>ReactBlog</h4>
        {/* jsx에선 style을 object형식({})으로 넣어야함 
        이렇게 쓰기 귀찮으니 보통 className으로 해놓고 씀
        이거아니어도 변수처럼 해도 됨 let acss={color:blue} 이런식으로*/}
        
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
