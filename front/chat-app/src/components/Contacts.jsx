import React,{ useEffect, useState}from 'react'
import styled from 'styled-components'
import logo from "../assets/logo.svg"

export default function Contacts({contacts, currentUser}) {
  const [currentUserName,setCurrentUserName]= useState(undefined)
  const [currentUserImage,setCurrentUserImage]= useState(undefined)
  const [currentSelected,setCurrentSelected]= useState(undefined)

  useEffect(()=>{
    console.log(contacts)
    if(currentUser){
      setCurrentUserImage(currentUser.avatarImage);
      setCurrentUserName(currentUser.username);
    }
  },[currentUser])
  return <> 
  {
     currentUserImage && currentUserName(
      <Container>
        <div className='brand'>
          <img src ={logo} alt="logo" />
          <h3>CHATBOT APP</h3>
        </div>
        <div className='contacts'>{
          contacts.map((contacts,index)=>{
            return(
              <div className={`contact={(index === currentSelected?"selected" : "")}`}key ={index}>
                <div className="avatar">
                <img src={`data:image/svg+xml;base64,${contacts.avatarImage}`} alt={`Avatar ${index}`} />
                </div>
                <div className="username">
                  <h3>{contacts.UserName}
                  </h3>
                </div>
              </div>
            );
          })
        }</div>
        <div className="current-user">
          <div className="avatar">
          <img src={`data:image/svg+xml;base64,${currentUserImage}`} alt={`Avatar ${index}`} />
                </div>
                <div className="username">
                  <h2>{currentUserName}
                  </h2>
                </div>
        </div>
      </Container>
     )
  }
  </>
}

const Container = styled.div`
display: grid;
grid-template-rows: 10% 75% 15%;
overflow: hidden;
background-color:#080420
.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    height: 2rem;
  }
  h3{
    color: white;
    text-transform: uppercase;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    .contact {
      background-color: #ffffff39;
      min-height: 5rem;
      width: 90%
      cursor: pointer;
      border-radius: 0.2rem;
      padding: 0.4rem;
      gap: 1rem;
      align-items: center;
      display: flex;
      transition: 0.5s ease-in-out;
      .avatar {
        img{
            height: 3rem;
        }
      }
      .username{
        h3 {
            color: white;
        }
      }
    }
    .selected {
      background-color: #9186f3;
    }
  }
  .currentUser {
    background-color: #0d0d30;
    display: flex;
    justify-content: center;
    align-item: center;
    gap: 2rem;
    .avatar{
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: white;
      }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px{
      gap: 0.5rem;
      .username{
        h2{
          font-size: 1rem;
        }
      }
    }
  }
}
`;
