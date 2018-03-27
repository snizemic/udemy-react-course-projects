import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove all</button>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        <div>
            {
                props.options.map((item) => (
                    <Option
                        key={item}
                        optionText={item}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    </div>
);

export default Options;