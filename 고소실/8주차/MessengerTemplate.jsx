import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

// Sending Message 부분
function MessenagerTemplate({getChatLog}) {
  const [ MsgState, setMsgState ] = useState({ message: "", username: ""})

  const onMsgChange = (e) => {
		setMsgState({ ...MsgState, [e.target.name]: e.target.value })
	}

  // 메시지 입력 창에서 빈 경우에는 ‘메시지를 입력하세요‘라는 내용의 경고 창 출력 후 리턴(alert 함수 사용)
  // 사용자의 이름 입력 창이 빈 경우에는 사용자 이름을 ‘이름없음’으로 저장
  // MsgState의 속성(키)들의 값을 빈 문자열로 초기화
	const onMsgSubmit = (e) => {
    e.preventDefault();
    // 8주차 실습 구현
    if(MsgState.username == "") MsgState.username = "이름없음";
    if(MsgState.message == "") {
      alert("메시지를 입력하세요");
      return;
    }
    getChatLog(MsgState.username, MsgState.message);
    MsgState.username = "";
    MsgState.message = "";
	}

  return (
    <div>
      <Form onSubmit={onMsgSubmit}>
          <div>
            <Title>
                <h2>Sending Message</h2>
            </Title>

            <UserName>
                <div>
                  <p>Username</p>
                  <TextField label="Username" name="username" onChange={onMsgChange} value={MsgState.username}/>
                </div>
            </UserName>

            <MessageContents>
                <div>
                  <p>Message</p>
                  <TextField label="message" name="message" onChange={onMsgChange} value={MsgState.message}/>
                </div>
            </MessageContents>

            <Button>
              <p>Send</p>
            </Button>
          </div>
			</Form>
      
      
    </div>
  );
}

// Sending Message 글씨 박스
const Title = styled.h1`
  margin: 10px;
  padding: 10px;
  // 해당 영역 모서리를 둥글게
  // 해당 영역의 배경색 변경
  // 해당 영역 안 텍스트 폰트색 변경
  // 8주차 실습 구현
  
  Border-radius : 20px;
  Background-color : yellow;
  color : black;
`;

// 채팅 메시지 입력 form
const Form = styled.form`
  width: 500px;
  height: 600px;
  position : relative;
  right : 500;
  margin: 10px;
  padding: 20px;
  // 해당 영역 모서리를 둥글게
  // 해당 영역 모서리에 그림자
  // 해당 영역의 배경색 변경
  // 8주차 실습 구현
  Border-radius : 20px;
  Box-shadow : 10px 5px 5px grey;
  Background-color : orange;
`;

// username 표시
const UserName = styled.div`
  margin: 40px;
  position : absoluted;
  right : -20px;
`;

// 채팅 메시지 부분
const MessageContents = styled.div`
  margin: 30px;
  right : -20px;
`;

// send 버튼
const Button = styled.button`
  margin-top: 60px;
  padding: 10px;
  position : relative;
  top : 50px;
  right : 25px;
  height : 40px;
  width : 50px;
  // 해당 영역 모서리를 둥글게
  // 해당 영역 모서리색 변경
  // 해당 영역의 배경색 변경
  // 8주차 실습 구현
  Border-radius : 5px;
  Border-color : red;
  Background-color : pink;
`;

export default MessenagerTemplate;