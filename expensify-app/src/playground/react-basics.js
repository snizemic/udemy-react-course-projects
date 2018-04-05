import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';

class App extends React.Component {
    render() {
        return (
            <div>
                <Menu items={['apple', 'pear', 'banana']} />
            </div>
        );
    }
}

const Menu = (props) => {
    return (
        <div>
            <ul>
                {props.items.map((item) => (
                    <MenuItem text={item} />
                ))}
            </ul>
        </div>
    );
};

const MenuItem = (props) => {
    console.log(props);
    return (
        <li>{props.text}</li>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));