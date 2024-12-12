import React, { useEffect, useState } from 'react'

const Todolist = () => {
  const [input, setInput] = useState('')
  const [itemlist, setItemlist] = useState([])
  function adddata() {
    // setItemlist([...itemlist,input]);
    if(input.trim()){
      setItemlist(() => {
        const update = [...itemlist, input];
        return update;
      })
      console.log(itemlist);
      setInput('')
    }
    else{
      alert('Please enter a valid item.');
    }
  }
  function remove(i) {
    const newupdate = itemlist.filter((data, id) => {
      return i != id;
    })
    setItemlist(newupdate);
  }
  function removeall(){
    setItemlist([]);
  }
  return (
    <div className='container'>
      <div className="todocontainer">
        <h1 className="heading">Todo list</h1>
        <div className="inputcontainer">
          <input type="text" placeholder='Add Item' className='input' value={input} onChange={(e) => {
            setInput(e.target.value);
          }} />
          <button className='addbtn' onClick={adddata}>Add</button>
        </div>
        <p className='motivation'>“Make each day your masterpiece.”</p>
        {itemlist != [] && itemlist.map((data, i) => {
          return (
            <>
              <div className="items">
                <div className="data" key={i}>{data}</div>
                <button className='removebtn' onClick={() => remove(i)}>Remove(-)</button>
              </div>
            </>

          ) })   }
          {itemlist.length>3&& 
                <button className='removeall'onClick={removeall}>Remove All(-)</button>
          }
      </div>
    </div>
  )
}

export default Todolist
