import React from 'react';

const Panel = (props) => (
    <div className="app"> 
        <main className="panel">{ props.children }</main>
    </div>  
)

export default Panel;