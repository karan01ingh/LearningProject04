import React,{useEffect,useState} from 'react'

function Github() {
    const [data,setData]=useState({});
    const [img,setImg]=useState("");
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then((res)=>res.json())
        .then((res)=>(setData(res)))
    },[])
  return (
    <>
    FOLOOWERS:{data.followers}
    <img src={data.avatar_url} alt="image is not visible" />
    </>
  )
}

export default Github
