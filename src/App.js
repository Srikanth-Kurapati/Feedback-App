import { useState } from "react"
import {v4 as uuidv4} from 'uuid'

//(3 importing header)

import Header from "./components/Header"
import Card from "./data/Card"
import FeedbackList from "./components/FeedbackList"
import FeedbackItem from "./components/FeedbackItem"
import FeedbackCount from "./components/FeedbackCount"
import Feedback from "./data/FeedbackData"
import FeedbackForm from "./components/FeedbackForm"
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import AboutPage from "./components/AboutPage"
import AboutLink from "./components/AboutLink"
import Know from "./components/Know"
import {Link} from 'react-router-dom'
// import {FeedbackProvider} from './Context/CreateContext'

function APP(){
    const [feedback,setFeedback] = useState(Feedback)

    const newAddFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
       
    }

    const deleteItem = (id) =>{
        setFeedback(feedback.filter((item) => (item.id) !== id))
    }
 

return(
    <Router>
        {/** 4 adding header */}

        <h2 style={{textAlign:"center"}}> <Header/></h2>
            <div className="container">
                <Routes>
                    <Route exact path="/"
                        element={ <>
                        <FeedbackForm handleAdd = {newAddFeedback}/>
                        <FeedbackCount feedback={feedback}/>
                        <FeedbackList 
                        feedback={feedback}
                        handleDelete = {deleteItem} />
                        </>} >
                        
                    </Route>
                    <Route path="/know"
                        element={
                        <Card> 
                            Hello Everyone! This project is created by Srikanth Kurapati. 
                            Learning& copied from Brad Traversy's React Course.
                            Thanks Brad...  <br></br>
                        <Link to={{pathname:"/"}}> back to app </Link>    
                        </Card>
                                    } > 
                    </Route> 
                    <Route path="/about" element= {<AboutPage/>} >  </Route>   
                </Routes>
                <AboutLink/>  
                <Know/>   
            </div>  
           
     </Router>
)
}

export default APP