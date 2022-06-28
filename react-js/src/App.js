import './App.css';
import {useState} from 'react';

const InputAddress = ({onChange, onClick}) => {
    return (
        <div className='addressInput'>
            <input type='text' onChange={onChange} />
            <button onClick={onClick}>enter</button>
        </div>
    )
}

function App() {
    //12 chars, not including -,:
    const [address, setAddress] = useState('');
    const [list, setList] = useState([]);

    function submitAddress() {
        let isDuplicated = true
        if(validation(address)) {
            if(list.length > 0) {
                for(let item of list) {
                    if(item === address) {
                        return isDuplicated = true
                    } else {
                        isDuplicated = false;
                    }
                }
                if(!isDuplicated) setList([...list, address])
            }else {
                setList([address])
            }
        }
    }

    function validation(addr) {
        const regrex = new RegExp('^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})|([0-9a-fA-F]{4}\\.[0-9a-fA-F]{4}\\.[0-9a-fA-F]{4})$')

        return regrex.test(addr)
    }

    return (
        <div className='App'>
            <div className='header'>
                <h2>Type Your Mac Addresses</h2>
            </div>

            <InputAddress 
                onChange={(e) => setAddress(e.target.value)} 
                onClick={() => submitAddress()} 
            />

            <div className='addressList'>
                {list.map((el,i) => {
                    return (<li key={i}> {el} </li>)
                })}
            </div>
        </div>
    )
}

export default App;





