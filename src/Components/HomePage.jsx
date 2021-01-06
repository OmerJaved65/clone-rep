import React from 'react';
import Style from 'styled-components';
const Homepagees=Style.div`
display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;
const DirectoryMenu=Style.div`
width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const MenuItems=Style.div`
min-width: 30%;
height: 240px;
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
margin: 0 7.5px 15px;

&:first-child {
  margin-right: 7.5px;
  &:last-child {
    margin-left: 7.5px;
`;
const Content=Style.div`
height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;

`;
const Title=Style.h1` 
font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
      color: #4a4a4a;
`;
const Subtitile=Style.span`
font-weight: lighter;
      font-size: 16px;
`;



const HomePage=()=>(

    <Homepagees >
       <DirectoryMenu>
           <MenuItems>
               <Content>
                   
                  <Title>HATS</Title>
                  <Subtitile> SHOP NOW</Subtitile>
                </Content>
           </MenuItems>
           <MenuItems>
               <Content>
                   
                  <Title>JACKETS</Title>
                  <Subtitile> SHOP NOW</Subtitile>
                </Content>
           </MenuItems>
           <MenuItems>
               <Content>
                   
                  <Title>WOMENS</Title>
                  <Subtitile> SHOP NOW</Subtitile>
                </Content>
           </MenuItems>
           <MenuItems>
               <Content>
                   
                  <Title>MENS</Title>
                  <Subtitile> SHOP NOW</Subtitile>
                </Content>
           </MenuItems>
           <MenuItems>
               <Content>
                   
                  <Title>PURSES</Title>
                  <Subtitile> SHOP NOW</Subtitile>
                </Content>
           </MenuItems>
       </DirectoryMenu>
    </Homepagees>
    
);
export default HomePage;