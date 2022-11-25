import {SpinnerDotted} from "spinners-react";
import React from "react";

let Preloader = (props) => {
    return <div>
        <SpinnerDotted size={90} thickness={180} speed={100} color="#36ad47"/>
    </div>;
}

export default Preloader;