import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a private info. Please, don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => {
        if (props.isAuthenticated) {
            return (
                <div>
                    <WrappedComponent {...props} />
                </div>
            );
        } else {
            return (
                <div>
                    <p>Please, log in first!</p>
                </div>
            )
        }
    };
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="It works!" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="It works!" />, document.getElementById('app'));