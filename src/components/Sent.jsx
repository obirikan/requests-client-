// import React,{useEffect, useState} from 'react'
// import Nav from './Nav'
// import axios from 'axios'

// const Sent = () => {
//     const [data,setdata]=useState([])
//     const [user,setuser]=useState()

//     useEffect(()=>{
//         const it=async()=>{
//         const user = JSON.parse(localStorage.getItem("info"));
//         const {person,token}=user
//         setuser(person)
//         const config = {
//           headers:{
//             Authorization: `Bearer ${user.token}`,
//                },
//         };
//            await axios.get('http://localhost:7000/api/handlers/sentrequests',config).then((res)=>{
//           setdata(res.data)
//         }).catch((err)=>{
//             alert('network error')
//         })
//       }
//       it()
//     },[])
//   return (
//     <div>
//         <h1>sent request</h1>
//         <><Nav/></>
//         <>
//         {data.map((a)=>(
//          <h3 key={a._id}>
//           {a.user}{user.sendRequest.includes(a._id)&&<button>withdraw</button>}
//         </h3>
//        ))}</>
//     </div>
//   )
// }

// export default Sent