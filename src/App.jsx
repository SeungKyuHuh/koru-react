import { useState } from 'react'
import './App.css'
import Box from './component/Box.jsx'

//1. 박스 2개(타이틀, 사진 , 결과)
//2. 가위, 바위, 보 버튼이 있다.
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴픁터는 랜덤하게 아이템 선택이 된다
//5. 두 값을 비교해서 승패를 결정한다.
//6. 승패결과에 따라 테두리 색이 바뀐다. (이기면 초록, 지면 빨강, 비기면 검은색)

const choice = {
   rock:{
    name: "Rock",
    img: "https://www.shutterstock.com/shutterstock/photos/2735169969/display_1500/stock-vector-simple-black-and-white-illustration-of-a-clenched-fist-symbolizing-strength-and-solidarity-2735169969.jpg"
   },
   scissor:{
    name: "Scissor",
    img: "https://media.istockphoto.com/id/2215462052/ko/%EB%B2%A1%ED%84%B0/%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EA%B0%80%EC%9C%84%EC%9D%98-%EA%B0%84%EB%8B%A8%ED%95%9C-%EA%B2%80%EC%9D%80-%EC%83%89-%EC%95%84%EC%9D%B4%EC%BD%98%EC%9E%85%EB%8B%88%EB%8B%A4.jpg?s=2048x2048&w=is&k=20&c=stcj_3bokVt_AMbylr-WMM5KAxIe8JpNwzUffUUwlq8="
   },
   paper:{
    name: "Paper",
    img: "https://cdn.crowdpic.net/detail-thumb/thumb_d_9508247FD47D18C8A8F0C68569383B65.png"
   }
}

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);  //Object.keys : 객체의 키값만 가져옴
    //console.log("item array:", itemArray)
    let randomItem = Math.floor(Math.random() * itemArray.length);
    //console.log("random Val:", randomItem)
    let final = itemArray[randomItem];
    //console.log("final:", final)
    return choice[final];
  };

  const judgement = (user, computer) => {
    console.log("user : ", user);
    console.log("computer : ", computer);

    if(user.name === computer.name){
      return "tie";
    } else if(user.name === "Rock") return computer.name === "Scissor" ? "win" : "lose";
     else if(user.name === "Scissor") return computer.name === "Paper" ? "win" : "lose";
     else if(user.name === "Paper") return computer.name === "Rock" ? "win" : "lose";
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className="main">
        <button onClick={() => play("scissor")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>

  );
}

export default App
