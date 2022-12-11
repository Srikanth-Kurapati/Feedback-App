function APP(){


    // below are the components//


    const heading = 'this is heading'
    const text = 'this is our text'
    const comments = [
        {id:1, text:"This is first comment"},
        {id:2, text:"This is second comment"},
        {id:3, text:"This is third comment"}
    ] 
    const commentsBlock = (<div className="comments">
        <p> Comments({comments.length})</p>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index} > {comment.text}</li>
                ))}
            </ul>  
        </div>)
    const showComments = true   
    
    // returning components in jsx  // 
    
    return (

        <div>

            <h1> Welcome to the new course Srikanth </h1>
            <h2> {heading} </h2>  {/* need to put components in curly braces to display  */}
            <h3> {text} </h3> 
            
            {showComments && commentsBlock} 
            
            {/* if no else value no need to put null or : */}

            {/* 
            {comments.forEach(comment => {
                <li> {comment.text}</li>
            })} */}
        </div>

    )
}

export default APP