import { useState } from 'react';
import './styles.css'

const SignForms = () => {
    const signos = ["Aries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem",
"Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquário", "Peixes"]
    return(

        <div className='sign-form form-input'>
            <select>
                <option selected>Signo</option>
                {signos.map((signo) => {
                    return(
                        <option key={signo}>{signo}</option>
                        )
                    })}
            </select>
        </div>
            )
}


export default function Exercise2(){
    const [firstName, setFirstName] = useState({
        text: '',
        isValid: false
    })
    const [surName, setSurName] = useState({
        text: '',
        isValid: false
    })
    const [email, setEmail] = useState({
        text: '',
        isValid: false
    })

    const emailRegex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.]br$|[.]com$|[.]edu$|[.]net$")

    const ValidateField = (e, setField) => {
        if(e.target.getAttribute('data-required')){
            if(e.target.value !== ''){
                setField({
                    text: e.target.value,
                    isValid: true
                })
            }
            else{
                setField({
                    text: '',
                    isValid: false
                })
            }
        }
        ValidateEmail(e, setField)
    }

    const ValidateEmail = (e, setField) =>{
        if(e.target.getAttribute('data-type') === "email"){
            if(emailRegex.test(e.target.value)){
                setField({
                    isValid: true
                })
            }
            else{
                setField({
                    isValid: false
                })
            }
        }
        else
            return
    }

    const ValidateForm = (e) => {
        e.preventDefault()
        if(!email.isValid){
            alert("Invalid email")
        }
    }
    return(
        <div className='main'>
            <h1>Validate Forms</h1>
                <form onSubmit={ValidateForm}>
                    <div className='form-grid form-row'>

                        <div className='form-input'>
                            <input type="text" className="input-search"
                            id="input-name"
                            placeholder='First Name' data-required
                            onChange={((e) =>  ValidateField(e, setFirstName))}/>
                        </div>
                        <div className='form-input'>
                            <input type="text" placeholder='Surname' className='input-search'
                            onChange={((e) => ValidateField(e, setSurName))}/>
                        </div>
                        <div className='form-input'>
                            <input type="text" className='input-search'
                            data-required data-type="date" placeholder="Birth Date"/>
                        </div>
                        <div className='form-input'>
                            <input type="text" className='input-search'
                            data-type="email" placeholder="Email"
                            onChange={((e) => ValidateField(e, setEmail))}/>
                        </div>
                        <SignForms/>
                        <input type="submit"/>

                    </div>
                </form>
        </div>
    )
}