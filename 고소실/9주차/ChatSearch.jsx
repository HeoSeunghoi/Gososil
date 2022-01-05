// 채팅 키워드 검색창 & 검색 버튼에 대한 컴포넌트 작성
import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

// Sending Message 부분
function ChatSearch({onSearchKeySubmit}) {
    const [keyword, setKeyword ] = useState("")

    const onKeyChange = (e) => {
		setKeyword(e.target.value)
    }

	const onSearchSubmit = (e) => {
        e.preventDefault()
        onSearchKeySubmit(keyword)
        setKeyword("")
	}
    return(
        <Form onSubmit={onSearchSubmit}>
            <div>
            <TextField
              name="Search Key"
              value={keyword}
              onChange={(e) => onKeyChange(e)}
              id="outlined-multiline-static"
              variant="outlined"
              label="Search Key"
            />
            <Button>Search</Button>
            </div>
        </Form>
    )
}

const Button = styled.button`
  margin-top: 10px;
  position: relative;
  padding: 10px;
  background-color: white;
  border-color: #c8a951;
  border-radius: 5px;
`;

const Form = styled.form`
    margin-top: 60px;
    background-color: #f3eaaf;
`;

export default ChatSearch;