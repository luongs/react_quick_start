import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function Avatar(props) {
    return (
        <img classNmae="Avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function App() {
    return (
        <div>
            <Welcome name="Big Bird" />
            <Welcome name="Cookie monster" />
            <Welcome name="Elmo" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
