import { useState } from "react";
import { createContext } from "react";
 
const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
   
   const[feeedback, setFeedback] = useState([
        {
            id:7,
            rating:10,
            text:"This is a sample context feedback",
        },
    ])

    return(
        <FeedbackContext.Provider
        value={{feeedback,}}>
            {children}
        </FeedbackContext.Provider>
    )
    
}
export default FeedbackContext
