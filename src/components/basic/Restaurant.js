import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi";
import MenuCard from './MenuCard';
import NavBar from './NavBar';

const uniqueList = ["All",...new Set(Menu.map((currentElement)=>{
    return currentElement.category;
}))];


const Restaurant = () => {
  const [menuData,setMenuData]=useState(Menu);
  const [menuList,setMenuList]=useState(uniqueList);
  const filterItem =(category) =>{
      if(category==="All"){
          setMenuData(Menu);
          return;
      }
      const updatedList= Menu.filter((currentElement)=>{
          return currentElement.category===category;
      });
      setMenuData(updatedList);
  };
  return (
      <>
        <NavBar filterItem={filterItem} menuList={menuList}></NavBar>
        <MenuCard menuData={menuData}></MenuCard>
      </> 

  )
}

export default Restaurant