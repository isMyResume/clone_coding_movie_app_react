import React from 'react';

function About(props) {
    console.log(props);
    return (
        <div className="about_container">
            <span>Don’t believe everything you read on the Internet just because there is a picture with a quote next to it. </span>
            <span> Abraham Lincoln</span>
        </div>
    );
}

export default About;