import React,{useContext, useReducer } from "react"

export const myContext = React.createContext();

// usereducer
const initialValue={
    makeHover:false,
    showSlide:false,
    data:'',
    onView1:true,
    onView2:false,
    onView3:false,
    studentsData:'',
    defaultBtn:true,
    activeData:'',
    memberInfo:'',
    click:false,
    clickData:''
}

export const InitialFun=(state,action)=>{
   // navbar hover function starts
	  if(action.type==='true&about'){
       return {makeHover:true, data:action.payload, onView1:true}
     }
     if(action.type==='true&academic'){
        return {makeHover:true, data:action.payload, onView1:true}
     }
     if(action.type==='true&people'){
        return {makeHover:true, data:action.payload, onView1:true}
     }
     if(action.type==='true&research'){
        return {makeHover:true, data:action.payload, onView1:true}
     }
     if(action.type==='true&students'){
        return {makeHover:true, data:action.payload, onView1:true}
     }
     if(action.type==='true&alumni'){
        return {makeHover:true, data:action.payload, onView1:true}
     }
     if (action==='true') {
      return{showSlide:true}
     }
     if(action==='false'){
        return {makeHover:false,showSlide:false,onView1:true}
     }
   // navbar hover function ends

   // float div function starts
     if (action==='first') {
      return {onView1:true, onView2:false,onView3:false}
     }
     if (action==='second') {
      return {onView1:false, onView2:true,onView3:false}
     }
     if (action==='third') {
      return {onView1:false, onView2:false,onView3:true}
     }
   // float box function ends

   // studentsData making start
     if (action.type==='students-activities') {
      return{studentsData:action.payload}
     }
      // studentsData making end

      // MemberDetails fun starts
      if (action.type==='activeDefault') {
         return{activeData:action.payload}
      }
      if (action.type==='active') {
         return{activeData:action.payload, defaultBtn:false}
      }
      // MemberDetails fun ends
      if (action.type==='r-member-info') {
         return{memberInfo:action.payload}
      }
      // query function starts
      if (action.type==='click&about') {
         return{click:!state.click, clickData:action.payload}
      }
      if (action.type==='click&people') {
         return{click:!state.click, clickData:action.payload}
      }
      if (action.type==='click&alumni') {
         return{click:!state.click, clickData:action.payload}
      }
      if (action.type==='click&research') {
         return{click:!state.click, clickData:action.payload}
      }
      if (action.type==='click&students') {
         return{click:!state.click, clickData:action.payload}
      }
      if (action.type==='click&academic') {
         return{click:!state.click, clickData:action.payload}
      }
      // query function starts

    return state;
}
export const ContextProvider =({children})=>{
    const [context, dispatch ]=useReducer(InitialFun,initialValue)
    return(<myContext.Provider value={{...context, dispatch}}>
        {children}
    </myContext.Provider>)
}

export const useGlobalContext=()=>useContext(myContext);


// import { useGlobalContext } from '../myContext/context';
// const value = useGlobalContext();
// const { dispatch, toggle } = value;