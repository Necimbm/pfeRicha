import styled from "styled-components";

export const BoxContainer = styled.div`
  weight: 50%;
  height:50%;
  display: flex;
  flex-direction:column;
  align-items: center;
  
`;

export const FormContainer = styled.form`
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
 
  
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
  width: 230px;
  height: 35px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.75);
  padding: 0px 5px;

  transition: all 200ms ease-in-out;
  font-size: 12px;
  margin: 0.5rem 1rem;
  margin-bottom: 1rem;
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

