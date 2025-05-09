import React, { useState } from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        background-color: #fef3f7;
    `;

const Box = styled.div`
        background-color: #ffffff;
        width: 300px;
        padding: 20px;
        border-radius: 16px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        font-family: 'Helvetica', sans-serif;
        font-size: 16px;
        color: #333;
    `;

const Label = styled.div`
        margin-bottom: 8px;
        line-height: 1.6;
    `;

const Input = styled.input`
        width: 80%;
        padding: 8px;
        margin-top: 4px;
        margin-bottom: 12px;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 14px;
        outline: none;
        transition: border 0.2s;

        &:focus {
            border-color: #ee7ea0;
        }
    `;

const Button = styled.button`
        padding: 8px 16px;
        background-color: #ee7ea0;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 14px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: #e4608c;
        }
    `;

function Card({ name, age, hobby }) {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onClick = () => {
        setValue('');
    }

    return (
        <Wrapper>
            <Box>
                <Label>이름: {name}</Label>
                <Label>나이: {age}</Label>
                <Label>취미: {hobby}</Label>
                <Label>좋아하는 음식: {value}</Label>
                <Input onChange={onChange} value={value} placeholder="좋아하는 음식이 먼가요" />
                <Button onClick={onClick}>변경</Button>
            </Box>
        </Wrapper>
    )
}

export default Card;
