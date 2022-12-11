import React from 'react'
import { useState } from 'react'
import Card from '../data/Card'
import Button from '../data/Button';
import RatingCount from './RatingCount';

function FeedbackForm({handleState, handleAdd}) {

    const [text,setText] = useState('');
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [message,setMessage] = useState('');
    const [rating,setRating] = useState();


    const handleTextChange = (e) =>{
        if(text ===''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <10){
            setBtnDisabled(true)
            setMessage("atleast 10 characters")
        }else {
            setBtnDisabled(false)
            setMessage(null)
        }
        
      setText(e.target.value);  
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
       if(text.trim().length >10){
            const  newFeedback = {
                text,
                rating,  
        }
        handleAdd(newFeedback)
        setText('')
       } 
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>

            <RatingCount select={(rating) => 
                setRating(rating)}/>
            <h2> How would you rate us with our service </h2>
            <div className="input-group">
                <input type="text" placeholder='give your valuable feedback'
                onChange={handleTextChange}
                value = {text}
                />
            <Button type="submit" version="primary" isDisabled={btnDisabled}>
                Send
            </Button>   
            </div>

            {message && <div className='message'> {message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm