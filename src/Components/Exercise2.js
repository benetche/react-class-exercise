import { useState } from 'react';
import './styles.css'




export default function Exercise2(){
    const [firstName, setFirstName] = useState({
        text: '',
        isValid: false
    })
    const [surName, setSurName] = useState({
        text: '',
        isValid: true
    })

    const ValidateField = (e, field, setField) => {
        if(e.target.value !== ''){
            setFirstName({
                text: e.target.value,
                isValid: true
            })
        }
        else{
            setFirstName({
                text: '',
                isValid: false
            })
        }
    }
    const ValidateForm = (e) => {
        if(!firstName.isValid){
            alert("Not Valid")
        }
    }
    return(
        <div className='main'>
            <h1>Validate Forms</h1>
            <div className='form-div'>
                <form onSubmit={ValidateForm}>
                    <input type="text" className="input-search"
                    id="input-name"
                    placeholder='First Name' data-required
                    onChange={((e) =>  ValidateField(e, firstName, setFirstName))}
                    />
                    <input type="text" placeholder='Surname' className='input-search'
                    onChange={((e) => setSurName({
                        text: e.target.value
                    }))}/>

                    <input type='submit'></input>
                </form>
            </div>
        </div>
    )
}