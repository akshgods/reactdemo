import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
class Welcome extends React.Component{
    render(){
        return (
            <div>
            <div className="friends">
                <h1>Welcome My friends</h1>
                </div>
            <div className="happy">
                <h1>Happy React</h1>
            </div>
            <div className='note'>
            <p>
                React Cant use class for css class names.
                as class is reserved keyword for making class.
                example: we made 'Welcome'
                so insted of class we will define css class as 
                className
                </p>
                </div>
            </div>
        )
    }
}

ReactDom.render(<Welcome/>,document.getElementById('root'));