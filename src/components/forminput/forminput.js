import { React, useState } from 'react';

const IssueData = () => {
    const [inputForm, setInputForm] = useState([])
    function onChangeFunction(e) {
        console.log('Hello World');
        setInputForm(e.target.value)
    }
    return (
        <div>
            <p>
                Which area are you on?
            </p>
            <input
                type="text"
                value={inputForm}
                onChange={onChangeFunction}
            >
            </input>
            <p>
                The value is {inputForm} !
            </p>
        </div>
    )
};

export default IssueData