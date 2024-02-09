import './App.css';
import {useState} from "react";

function App() {

  const [name,setName] = useState('');
  const [datetime, setDateTime] = useState('');
  const [description, setDescription] = useState('');

  function addNewTransaction(){
    
  }

  return (
    <main>
       <h1>$400<span>,00</span></h1>
       <form onSubmit={addNewTransaction}>
        <div className='basic'>
          <input  type="text" 
                  value={name}
                  placeholder = {'+200 new computer'}
                  onChange = {ev => setName(ev.target.value)}
                 />
          <input  value={datetime}
                  onChange={ev => setDateTime(ev.target.value)}
                  type="datetime-local"></input>
        </div>
        <div  className='description' 
              placeholder={'description'} 
              value={description} 
              onChange={ev => setDescription(ev.target.value)}>

         <input type="text"></input>
        </div>
        <button type='submit'>Add new transaction</button>
       </form>
       
       <div className='transactions'>
          <div className='transaction'>
            <div className='left'>
              <div className='name'>New Samsung TV</div>
              <div className='description'>it was time for new tv.</div>
            </div>
            <div className='right'>
              <div className='price red'>-$500</div>
              <div className='datetime'>2022-12-18 15:45</div>
            </div>
          </div>
          <div className='transaction'>
            <div className='left'>
              <div className='name'>New Samsung TV</div>
              <div className='description'>it was time for new tv.</div>
            </div>
            <div className='right'>
              <div className='price green'>$500</div>
              <div className='datetime'>2022-12-18 15:45</div>
            </div>
          </div>
          <div className='transaction'>
            <div className='left'>
              <div className='name'>New Samsung TV</div>
              <div className='description'>it was time for new tv.</div>
            </div>
            <div className='right'>
              <div className='price red'>-$500</div>
              <div className='datetime'>2022-12-18 15:45</div>
            </div>
          </div>
          <div className='transaction'>
            <div className='left'>
              <div className='name'>New Samsung TV</div>
              <div className='description'>it was time for new tv.</div>
            </div>
            <div className='right'>
              <div className='price green'>$500</div>
              <div className='datetime'>2022-12-18 15:45</div>
            </div>
          </div>
       </div>
    </main>

  );
}

export default App;
