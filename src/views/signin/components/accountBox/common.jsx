import styled from "styled-components";

export const BoxContainer = styled.div`
  weight: 50%;
  height:50%;
  display: flex;
  flex-direction:column;
  align-items: center;
  
`;

export const FormContainer = styled.form`
  width: 80%;
  margin:10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
  
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(241, 196, 15);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;
export const BoldLink2 = styled.a`
  font-size: 11px;
  color:red;
  font-weight: 600;
  text-decoration: none;
  margin: 20px 4px 0 4px;
`;


export const Input = styled.input`
  width: 100%;
  height: 35px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;
export const Input2 = styled.input`

`

export const SubmitButton = styled.button`
  width: 10rem;
  padding: 5px 5px;
  color: #fff;
  font-size: 15px;
  font-weight: 300;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor:pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(247,211,8,1);
  margin:15px;

  &:hover {
    filter: brightness(0.9);
  }`;

