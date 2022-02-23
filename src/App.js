
import './App.css';
import { Tabs, Tab, Collapse, Slider } from '@mui/material';
import { useState } from 'react';
import BugFixer from './Component/BugFixer';
import LoadingBar from './Component/LoadingBar';

function App() {
  const [tab, setTab] = useState(0);
  
  const [loadingBarValue, setLoadingBarValue] = useState(0)

  const handleTabChange = (e, value) => {
    setTab(value);
  }
  const showTab=(index) =>{
    if(index===tab) {
      return true;
    } return false;
  }
  return (
    <>
      <Tabs value={tab} onChange={handleTabChange}>
        <Tab label={"Debuger"} />
        <Tab label={"Loading Bar"} />
      </Tabs>
      <Collapse in={showTab(0)}>
        <BugFixer/>
      </Collapse>
      <Collapse in={showTab(1)}>
        <Slider
         value={loadingBarValue}
          onChange={(e,value)=>{setLoadingBarValue(value)}}
          min={0}
          max={100}
          />
        <LoadingBar value={loadingBarValue}/>
      </Collapse>
    </>
  );
}

export default App;
