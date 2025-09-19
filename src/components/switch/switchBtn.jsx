'use client';
import React , {useContext} from 'react';
import { Label } from '@radix-ui/react-label';
import { Switch } from '../ui/switch';
import { AppContext } from '@/app/page';

const SwitchBtn = () => {
    const {toggleFull , setToggleFull} = useContext(AppContext);
    
  return (
    <div className="flex items-center space-x-2">
      <Switch checked={toggleFull} onCheckedChange={setToggleFull} />
      <Label htmlFor="airplane-mode">Toggle botton full screen</Label>
    </div>
  );
};

export default SwitchBtn;
