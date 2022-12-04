import axios from 'axios'
import './App.css';



const options = {
  method: 'GET',
  url:' https://api.api-ninjas.com/v1/quotes?category=happiness',
  headers: {
    'X-Api-Key': 'o+VeR1CuxdY8behyl2iKrg==U2l4BgTfAgbSvIDX'
  }
};
axios.request(options).then(function (response) {
	console.log(response.data['0']['quote']);
}).catch(function (error) {
	console.error(error);
});
console.log(options.response);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='card'>
        <p>hhhhhhh</p>
          <h3>HELLO</h3>
          
        </div>
        <div className='btn1'>Next</div>
      </header>
    </div>
  );
}

export default App;
