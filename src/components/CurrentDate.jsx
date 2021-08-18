import React from 'react';

const CurrentDate = () => {
    const [currentDate, setCurrentDate] = React.useState(new Date().toLocaleTimeString()); // получаем текущую дату

    React.useEffect(() => {
        let timer = setInterval(() => {
            setCurrentDate(new Date().toLocaleTimeString()); // обновляем дату каждую секунду 
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <time className="messages-field__date">{ currentDate }</time>
        </>
    );
};

export default CurrentDate;