import React, { useEffect, useState } from 'react'
import Switch from '@mui/material/Switch'
import { FormControlLabel, FormGroup, TextField } from '@mui/material';

const BugFixer = (props) => {
    const [bugAmount, setBugAmount] = useState(3);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(new Array(bugAmount).fill(true));
    }, []);

    const randomizeItems = (targetIndex) => {
        const newItems = items.map((item, index) => {
            if (index === targetIndex) return !item;
            if (item) return true;
            return Math.random() < 0.1;
        });
        if (Math.random() < 0.5) {
            newItems.push(true);
        }
        if (Math.random() < 0.2) {
            newItems.push(true);
        }
        if (newItems.every((item) => { return !item })) {
            alert("all fixed LOL");
        }
        setItems(newItems);
    }

    return (
        <FormGroup sx={{m:5}}>
            {items.map((item, index) => (
                <FormControlLabel
                    control={
                        <Switch
                            checked={item}
                            onChange={() => {
                                randomizeItems(index);
                            }}
                        />
                    }
                    label={"bug #" + index}
                />
            ))}
        </FormGroup>
    )
}

export default BugFixer