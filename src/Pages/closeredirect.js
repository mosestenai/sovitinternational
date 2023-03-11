import React, { useEffect } from "react";


const Closeredirect = () => {

    useEffect(() => {
        window.open("about:blank", "_self");
        window.close();
    }, []);

    return (
        <div>

        </div>
    )
}

export default Closeredirect;