import React from 'react'
const Dumb = ({ fancy, action }) => (
    <p onClick={action}>
        helo
        {fancy}
    </p>
);
export default Dumb;

