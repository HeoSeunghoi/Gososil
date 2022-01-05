import React from "react";
import styled from "styled-components";

import ChatLogItem from "./ChatLogItem";


function ChatLogTemplate({chats}) {

  // chats 배열을 받아 저장해 둔 채팅 로그를 보여줌
  // ChatLogItem 컴포넌트 사용
  return (
    <ChatContainer>
      <h1>Chat log</h1>
      {chats.map((chat) => {
          return <ChatLogItem chat={chat}/>
        })}
    </ChatContainer>
  );

}

const ChatContainer = styled.div`  
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
  Background-color : pink;
`;

export default ChatLogTemplate;