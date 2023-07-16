import React, { createContext, useCallback, useEffect, useState } from 'react';
import Task from '../Pages/Organism/Task/Task';
import WorkTimer from '../Pages/Organism/WorkTimer';
import Notes from '../Pages/Organism/Notes/Notes';

export const DashBoardContext = createContext(null);

export const DashBoardProvider = (props) => {
    const [selectedOption, setSelectedOption] = useState('null');
    const [widgetComponents, setWidgetComponents] = useState([]);
    const  widget=widgetComponents;
    const [options, setOptions] = useState(['Notes', 'Work Timer', 'Task']);
 
    useEffect(() => {
      console.log(widgetComponents);
      switch (selectedOption) {
        case 'Notes':
            setWidgetComponents([...widgetComponents, <Notes title={'Notes'} />]);
            break;
        case 'Task':
            setWidgetComponents([...widgetComponents, <Task title={'Task'} />]);
            break;
        case 'Work Timer':
            setWidgetComponents([...widgetComponents, <WorkTimer title={'Work Timer'} />]);
            break;
        default:
            break;
    }
    }, [selectedOption]);

    const contextValue = {
        selectedOption,setSelectedOption,
        widgetComponents, setWidgetComponents,
        widget, options, setOptions
    };
    return (
    
        <DashBoardContext.Provider value={contextValue}>
          {props.children}
        </DashBoardContext.Provider>
      );
}