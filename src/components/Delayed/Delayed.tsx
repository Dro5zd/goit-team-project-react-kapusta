import {useState, useEffect, ReactElement} from 'react';

type DelayedProps = {
    children: ReactElement;
    waitBeforeShow?: number;
};

const Delayed = ({ children, waitBeforeShow = 1000 }: DelayedProps) => {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShown(true);
        }, waitBeforeShow);
        return () => clearTimeout(timer);
    }, [waitBeforeShow]);

    return isShown ? children : null;
};

export default Delayed;