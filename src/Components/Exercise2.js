import {  useState } from 'react';
import './styles.css'

const SignForms = ({field, setField}) => {
    const signos = ["Aries", "Tourus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagitarius", "Capricornus", "Aquarius", "Pisces"]

    const ValidateSign = (e) => {
        if(document.getElementById('sign').getAttribute('data-required')){
            if(e.target.value !== 'Sign' || e.target.value === '')
                setField({text: e.target.value, isValid: true})
            else
                setField({text: e.target.value, isValid: false})
        }
    }
    return(

            <select onChange={(e) => ValidateSign(e)} defaultValue='Sign'>
                <option id='sign' disabled hidden data-required>Sign</option>
                {signos.map((signo) => {
                    return(
                        <option key={signo} value={signo}>{signo}</option>
                        )
                    })}
            </select>
            )
}

const DateInput = ({field, setField}) => {

    const dateRegex = new RegExp(/^([1-9]|0[1-9]|[12][0-9]|3[01])[/]([1-9]|0[1-9]|1[012])[/](19|20)\d\d$/)
    const ValidateDate = (e) => {
        if(document.getElementById('date').getAttribute('data-type') === 'date'){
            if(dateRegex.test(e.target.value))
                setField({
                    text: e.target.value,
                    isValid: true
                })
            else
                setField({
                    text: e.target.value,
                    isValid: false
                })
        }
    }
    return(
        <input type="text" className='input-search' id='date'
        data-required data-type="date" placeholder="Birth Date"
        onChange={ValidateDate}/>
    )
}

const EmailInput = ({field, setField}) => {
    const emailRegex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.]br$|[.]com$|[.]edu$")
    const ValidateEmail = (e) => {
        setField({
            text: e.target.value,
            isValid: false
        })
        if(document.getElementById('email').getAttribute('data-type') === "email"){
            if(emailRegex.test(e.target.value)){
                setField({
                    text: e.target.value,
                    isValid: true})
            }
        }
        if(document.getElementById('email').getAttribute('data-required')){
            if(e.target.value === '')
                setField({
                    text: e.target.value,
                    isValid: false
                })
            else
                setField({
                    text: e.target.value,
                    isValid: true
                })
        }
    }

    return(
        <div>
        <input type="text" className='input-search' id="email"
        data-type="email" placeholder="Email" onChange={ValidateEmail}/>
        </div>
    )
}

const NameInput = ({field, setField}) => {
    const ValidateName = (e) => {
        setField({
            text: e.target.value,
            isValid: true
        })
        if(document.getElementById('name').getAttribute('data-required') && (e.target.value !== ''))
            setField({
                text: e.target.value,
                isValid: true
            })
        else   
            setField({
                text: e.target.value,
                isValid: false
            })
    }
    return(
        <input type="text" className="input-search"
            id="name"
            placeholder='First Name' data-required
            onChange={ValidateName}/>
    )
}

export default function Exercise2(){
    const [firstName, setFirstName] = useState({
        text: '',
        isValid: false
    })
    const [surName, setSurName] = useState({
        text: '',
        isValid: true
    })
    const [email, setEmail] = useState({
        text: '',
        isValid: false
    })
    const [date, setDate] = useState({
        text: '',
        isValid: false
    })
    const [sign, setSign] = useState({
        text: '',
        isValid: false
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const ValidateForm = (e) => {
        e.preventDefault()
        setIsSubmitted(true)
        if(email.isValid && firstName.isValid && surName.isValid && date.isValid && sign.isValid){
            alert("Form Submited!")
            window.location.reload(false)
        }
        else{
            alert(sign.text)
        }
    }

    return(
        <div className='main'>
            <h1>Validate Forms</h1>
                <form onSubmit={ValidateForm}>
                    <div className='form-grid form-row'>

                        <div className='form-input'>
                            <NameInput field={firstName} setField={setFirstName}/>
                            <p style={{color: 'red'}}>{(isSubmitted && !firstName.isValid) ? "Please set a Valid Firstname" : <></>}</p>
                        </div>

                        <div className='form-input'>
                            <input type="text" placeholder='Surname' className='input-search'
                            onChange={e => setSurName({text: e.target.event, isValid: true})}/>
                        </div>

                        <div className='form-input'>
                            <DateInput field={date} setField={setDate}/>
                            <p style={{color: 'red'}}>{(isSubmitted && !date.isValid) ? "Please set a Valid Date" : <></>}</p>

                        </div>
                        <div className='form-input'>
                            <EmailInput field={email} setField={setEmail}/>
                            <p style={{color: 'red'}}>{(isSubmitted && !email.isValid) ? "Please set a Valid Email" : <></>}</p>
                        </div>
                        <div className='form-input'>
                            <SignForms field={sign} setField={setSign}/>
                            <p style={{color: 'red'}}>{(isSubmitted && !sign.isValid) ? "Please set a Valid Sign" : <></>}</p>

                        </div>

                        <div className='form-input'>
                            <input type="submit"/>
                        </div>

                    </div>
                </form>
        </div>
    )
}