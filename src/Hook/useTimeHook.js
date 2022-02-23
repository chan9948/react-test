import { useState, useEffect } from "react";

const useTimeHook = (targetValue) => {
    const [mounted, setMounted] = useState(false);
    const [currentValue, setCurrentValue] = useState(0);
    useEffect(() => {
        if (mounted) {
            let diff = 0;
            if (currentValue > targetValue) {
                diff = -1;
            }
            if (currentValue < targetValue) {
                diff = 1;
            }
            setTimeout(() => { setCurrentValue(currentValue + diff) }, 5)
        } else {
            setCurrentValue(targetValue);
            setMounted(true);
        }

    }, [currentValue, targetValue]);
    return currentValue;
}

export default useTimeHook;