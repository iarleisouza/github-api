import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 80px;



  input {
    width: 50%;
    height: 50%;
    padding-left: 16px;
    border-radius: 40px 40px;
    font-size: 1.3em;
    border: 1px solid white;
    color: white;
}

input::placeholder {
  color: white;
  font-style: oblique;
}


  button {
    background-color: #225ed8;
    width:90px;
    height: 40%;
        margin-left: -100px;
        padding-left:  15px;
        border-radius:  40px 40px;
        cursor: pointer;

    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      color: #ffff;
    }

    
  }

`;
