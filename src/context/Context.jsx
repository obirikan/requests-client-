// import React,{Children, createContext,useEffect,useState} from 'react'
// import axios from 'axios'

// export const Item=createContext()
// const Context = () => {
//   const [data,setdata]=useState([])
// const [user1,setuser1]=useState()
// // const [status,setstatus]=useState(true)
// const [tok,settok]=useState()

// useEffect(()=>{
//     const it=async()=>{
//     const user = JSON.parse(localStorage.getItem("info"));
//     const {person,token}=user
//     setuser1(person)
//     settok(token)
//     const config = {
//       headers:{
//         Authorization: `Bearer ${user.token}`,
//            },
//     };
//        await axios.get('http://localhost:7000/api/handlers/allusers',config).then((res)=>{
//       setdata(res.data)
//     }).catch((err)=>{
//         alert('network error')
//     })
//   }
//   it()

// },[])
//   return (
//     <Item.Provider value={{data,setdata,user1,setuser1,tok,settok}}>
//         {Children}
//     </Item.Provider>
//   )
// }

// export default Context