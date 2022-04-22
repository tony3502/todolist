import { useState,useEffect,useRef } from "react";
import { API_GET_DATA } from "../../global/constants";
import Edit from "./components/Edit";
import List from "./components/List";
import "./Home.css"

async function fetchData(setData){
  const res = await fetch(API_GET_DATA)
  const { data } = await res.json()
  setData(data)
}

async function fetchPUTData(data){
  await fetch(API_GET_DATA,{
    method:"PUT",
    headers:{
      'Content-type':'application/json'
    },
    body: JSON.stringify({data})
  })
}

const Home = () => {
  const [a, setData] = useState([]);
  const submittingData = useRef(false);

  useEffect(()=>{
    
    fetchData(setData)
  },[])

  useEffect(()=>{
    if(!submittingData.current){ 
      return 
    }
    fetchPUTData(a).then(data=>
      submittingData.current=false
    )
  },[a])

  return (
    <div className="app">
      <Edit add={setData} submittingData={submittingData}/>
      <List listData={a} deleteData={setData} submittingData={submittingData}/>
    </div>
  );
};

export default Home;
