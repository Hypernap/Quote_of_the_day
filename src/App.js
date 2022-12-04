import './App.css';
import axios from "axios";
import { useEffect, useRef, useState } from 'react';
// import Spinner from "react-spinkit";




// axios.request(options).then((response)=> {console.log(response.data)
// }).then((data)=>{a=data}).catch(function (error) {
//     console.error(error);
// })


// setTimeout(() => {
//   console.log(a.data['0']);
// },5000);

// so(axios.request(options).then(function (response) {return response.data['0']}));
// so(axios.request(options).then(function (response) {return response.data['0']['quote']}));




function App() {
  const flag= useRef(false);

//global data a nwhich required seta to mutable data
const [a,seta] =  useState({data:"kk"});

//API linking
const options = {
  method: 'GET',
  url:' https://api.api-ninjas.com/v1/quotes?category=happiness',
  headers: {
    'X-Api-Key': 'o+VeR1CuxdY8behyl2iKrg==U2l4BgTfAgbSvIDX'}
}
//getting the request response from options
const getdata = async()=>{
  const a1=await axios(options)
  seta(a1);

}
useEffect(()=>{
  if (flag.current)
    return 
  getdata()
  flag.current=true
},[])
return ( 
  <div className='particles-js'>
    <div className="App">
      <header className="App-header">
        <div className='card'>
        <p>{ a.data['0']['quote'] }</p>
          <h3>{a.data['0']['author']}</h3>
        </div>
        <div className='btn1' onClick={getdata}>Next</div>
      </header>
    </div>
    </div>
  );
}

export default App;

// <div
//          style={{
//             display: "flex",
//             marginTop: "200px",
//             justifyContent: "space-between",}}>
//          <Spinner name="double-bounce" style={{ width: 100, height: 100 }} /></div>
