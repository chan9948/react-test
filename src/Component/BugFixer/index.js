import React, { useEffect, useState } from 'react'
import Switch from '@mui/material/Switch'
import { Button, FormControlLabel, FormGroup, TextField } from '@mui/material';
import { setting } from './setting';

const BugFixer = (props) => {
    const [bugAmount, setBugAmount] = useState(setting.bugAmount);
    const [bugs, setBugs] = useState([]);

    useEffect(() => {
        setBugs(new Array(bugAmount).fill(true));
    }, []);

    const randomizeBugs = (targetIndex) => {
        const newBugs = bugs.map((item, index) => {
            if (index === targetIndex) return !item;
            if (item) return true;
            return Math.random() < setting.bugRevive.reviveRate;
        });
        if (Math.random() < 0.5) {
            let addAmount = Math.floor(Math.random() * (setting.bugSpawn.maxAmount - setting.bugSpawn.minAmount + 1)) + setting.bugSpawn.minAmount;
            for (let i = 0; i < addAmount; i++) {
                newBugs.push(true);
            }
        }
        if (newBugs.every((item) => { return !item })) {
            alert("all fixed LOL");
        }
        setBugs(newBugs);
    }

    return (
        <FormGroup sx={{ m: 5 }}>
            <code>bug count: {bugs.length}</code>
            {
                bugs.length > setting.exitThreshold
                    ? <Button variant="contained" onClick={() => {
                        window.location.replace(setting.redirectUrl);
                    }}>fk this shit i'm out</Button>
                    : null
            }
            {bugs.map((item, index) => (
                <FormControlLabel
                    control={
                        <Switch
                            checked={item}
                            onChange={() => {
                                randomizeBugs(index);
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