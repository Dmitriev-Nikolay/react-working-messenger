import React from "react";

const Loader = () => {
    return (
        <div className="loading">
            <div className="circle">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <span className="text-loading">Загрузка <br />сообщений</span>
        </div>
    );
};

export default Loader;