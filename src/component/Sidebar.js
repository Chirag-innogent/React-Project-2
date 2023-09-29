import { useState } from "react";
import Display from "./Display";
import { useDispatch, useSelector } from "react-redux";

const Sidebar=()=>{
    // const[option,setOption] =useState("home");

    // const handleOptionChange =(newOption)=>{
    //     setOption(newOption);
    // }
    const dispatch =useDispatch();
    return(
        
        <>
        
        <nav class="navbar  navbar-expand-lg navbar-dark bg-primary d-flex p-2 ">
            <a class="navbar-brand" href="#">Company Employee Management system</a>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            </div>
        </nav>
        
        <div class="sidebar p-2">
            <a href="#" class="item" onClick={()=>dispatch({type:'HOME'})}><i class="fa fa-home" aria-hidden="true"></i>
            Home</a>
            <a  class="item" onClick={()=>dispatch({type:'HOME'})} >Show Employee</a>
            <a  class="item" onClick={()=>dispatch({type:'ADD'})} >Add Employee</a>
            <a  class="item" onClick={()=>dispatch({type:'HOME'})} >Delete Employee</a>
            <a  class="item" onClick={()=>dispatch({type:'HOME'})} >Update Employee</a>
            <div class="divider"></div>
        </div>
        <div>
        <div class="content" > <Display  /></div>
        </div>	
        </>
    );
}
export default Sidebar;