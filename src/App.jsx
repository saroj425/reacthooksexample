import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Table} from 'antd' 
import A from './components/A'
import Counter from './components/Counter'
import UseMemo from './components/UseMemo'

function App() {
  const [content, setContent] = useState("posts")
  const [count,setCount] = useState(0);
  const [items,setItems] = useState([]);


  // useEffect(()=>{
  //   //console.log("componentdidMount")
  // },[])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/'+content)
      .then(response => response.json())
      .then(json => setItems(json))
    //console.log("ComponentDidUpdate")
  },[content])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
    },
    
    
  ]; 

  // console.log(items)

  return (
    <>
      {/* <button onClick={()=>setCount(count + 1)}>count {count}</button>
      <button onClick={()=>setContent("posts")}>Posts</button>
      <button onClick={()=>setContent("users")}>Users</button>
      <button onClick={()=>setContent("comments")}>Comments</button>
      <h5>{content}</h5>      
      <Table columns={columns} dataSource={items} /> */}
      <A/>
      <Counter/>
      <UseMemo/>

    </>
  )
}

export default App
