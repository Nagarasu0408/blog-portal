import React from 'react';
import { withRouter } from 'react-router-dom';

function AnotherPage(props) {
    const goToHomePage = () => {
        props.history.push('/');
    };

    return (
        <div>
            <h2>Another Page</h2>
            <button onClick={goToHomePage}>Go to Home</button>
        </div>
    );
}

export default withRouter(AnotherPage);
