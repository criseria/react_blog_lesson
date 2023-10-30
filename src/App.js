import { Component, useState } from 'react';
import './App.css';
import TodoList from './todolist';


function App() {
  //자바스크립트
  // let post = ["모던 자바스크립트" , "HTML 웹 프로그래밍" , "C++ 프로그래밍" , "리액트" ]
  let [글제목, 글제목변경] = useState(["모던 자바스크립트", "HTML 웹 프로그래밍", "C++ 프로그래밍", "리액트"]);
  // let [good, goodState] = useState(0);

  let [good, goodState] = useState([0, 0, 0, 0]);
  let [title, setTitle] = useState(0);

  // let arr = [3, 1, 2].sort();
  // console.log(arr);

  //true, false , 1/0, "참", "거짓"
  let [modal, setModal] = useState(false);

  let [count, plusCount] = useState(0);
  let [입력값, 입력값변경] = useState('');

  const Input = (e) => {
    입력값변경(e.target.value);
  }

  const add = () => {
    const newText = [...글제목];
    newText.unshift(입력값);
    글제목변경(newText);
    입력값변경();
  }

  const btn_delete = (i) => {
    let title_delete = [...글제목];
    title_delete.splice(i, 1);
    글제목변경(title_delete);
  }



  // [1,2,3,4,5].map(function(a){
  //   return 'test'
  // })
  //현재 날짜를 가져옵니다.
  const today = new Date();

  // 원하는 형식으로 날짜를 설정합니다.
  const formattedDate = `${today.getFullYear()}년
  ${today.getMonth() + 1}월 ${today.getDate()}일`;






  return (
    //JSX(HTML기반)
    <div className="App">
      {글제목}
      <div className='black-nav'>
        <h2 style={{ color: 'red', fontSize: '30px' }}>개발자 블로그</h2>
      </div>
      {/* <button onClick={
        () => {
          // 글제목변경(["모던 자바스크립트", "HTML 웹 프로그래밍", "C++ 프로그래밍", "리액트"]);

          // 글제목[0] = '옛날 자바스크립트';
          // 글제목변경(글제목);

          //원본데이터가 있으면 원본 데이터 백업
          // 글제목변경(["옛날 자바스크립트", ...글제목.slice(1)]);
          let copy = [...글제목];
          copy[0] = '옛날 자바스크립트';
          글제목변경(copy);
          copy.sort();
        }
      }>대충버튼</button> */}

      {
        글제목.map(function (title, i) {
          return (
            <div className='list' key={i}>
              <h4 onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}>
                {글제목[i]}
                <span onClick={(e) => {
                  e.stopPropagation();
                  const goods = [...good];
                  goods[i]++;
                  goodState(goods);
                }}>
                  ❤
                </span>
                {good[i]}
              </h4>
              <p>{formattedDate}</p>
              <button onClick={() => {
                btn_delete(i)
              }}>삭제</button>
            </div>
          );
        })
      }

      <input type='text'
        value={입력값}
        placeholder='텍스트를 입력하세요'
        onChange={Input}
      ></input>
      <button onClick={add}>등록</button>



      {
        modal === true ? <Modal title={title} 글제목변경={글제목변경} color="skyblue" 글제목={글제목} /> : null
      }

      {/* <InputField></InputField> */}
      {/* <UserProfile></UserProfile> */}
      {/* <TodoList></TodoList> */}
      <Modal2></Modal2>
    </div>
  );
}

// 특정기능 = 함수 = 컴포넌트
let Modal = (props) => {
  return (
    <div className='modal' style={{ background: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세정보</p>
      {/* <button onClick={() => {
        props.글제목변경(["옛날 자바스크립트", "HTML 웹 프로그래밍", "C++ 프로그래밍", "리액트"]);
      }}>글수정</button> */}
    </div>
  )
}

class Modal2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'kim',
      age: 20
    }
  }
  render() {
    return (
      <div>
        안녕{this.props.name}
        <button onClick={() => {
          this.setState({age : 50})
        }}>버튼</button>
      </div>

    )
  }
}






function Counter() {
  let [count, setCount] = useState(0);
}


function InputField() {
  const [inputText, setInputText] = useState('');

  return (
    <div>
      <h1>입력 필드</h1>
      <input type='text'
        value={inputText}
        placeholder='텍스트를 입력하세요'
        onChange={function (e) {
          setInputText(e.target.value);
        }}
      ></input>
      <p>입력한 텍스트 : {inputText}</p>
    </div>
  )
}

function UserProfile() {
  const [user, setUser] = useState({
    username: '',
    useremail: ''
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <div>
      <h1>프로필 입력</h1>
      <input type="text"
        name="username"
        value={user.username}
        placeholder='사용자 이름'
        onChange={handleInputChange}
      ></input>
      <input type="text"
        name="useremail"
        value={user.useremail}
        placeholder='이메일 주소'
        onChange={handleInputChange}
      ></input>

      <h2>프로필 정보</h2>
      <p>사용자 이름 : {user.username}</p>
      <p>이메일 주소 : {user.useremail}</p>


    </div>
  )
}




export default App;