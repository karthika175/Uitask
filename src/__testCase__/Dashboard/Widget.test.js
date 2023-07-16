import React from 'react';
import { render, screen } from '@testing-library/react';
import { DashBoardContext } from '../../Connector/Connector'; 
import Widget from '../../Pages/Molecules/DashBoardWidget';
describe('Widget Testcases' ,() =>{
    test('renders widgets when widgetComponents is not empty', () => {
        const widgetComponents = [<div key="1">Widget 1</div>, <div key="2">Widget 2</div>];
        const selectedOption = 'Task'; 
        const setWidgetComponents = jest.fn();
        const options = ['Task', 'Notes', 'WorkTimer']; 
        const setOptions = jest.fn();
      
        render(
          <DashBoardContext.Provider value={{ selectedOption, setWidgetComponents, options, setOptions, widgetComponents }}>
            <Widget />
          </DashBoardContext.Provider>
        );
      
        // Check if the widgets are rendered
        expect(screen.getByText('Widget 1')).toBeInTheDocument();
        expect(screen.getByText('Widget 2')).toBeInTheDocument();
      
        // Check if the cancel button is present
        expect(screen.getByText('x')).toBeInTheDocument();
      });
      test('renders "NO WIDGET FOUND" message when widgetComponents is empty', () => {
        const widgetComponents = [];
        const selectedOption = 'Task'; 
        const setWidgetComponents = jest.fn();
        const options = ['Task', 'Notes', 'WorkTimer']; 
        const setOptions = jest.fn();
      
        render(
          <DashBoardContext.Provider value={{ selectedOption, setWidgetComponents, options, setOptions, widgetComponents }}>
            <Widget />
          </DashBoardContext.Provider>
        );
      
        expect(screen.getByText('NO WIDGET FOUND')).toBeInTheDocument();
      });
      test('clicking on cancel button removes the widget', () => {
        const widgetComponents = [<div key="1">Widget 1</div>, <div key="2">Widget 2</div>];
        const selectedOption = 'Task';
        const setWidgetComponents = jest.fn();
        const options = ['Task', 'Notes', 'WorkTimer']; 
        const setOptions = jest.fn();
      
        render(
          <DashBoardContext.Provider value={{ selectedOption, setWidgetComponents, options, setOptions, widgetComponents }}>
            <Widget />
          </DashBoardContext.Provider>
        );

        const cancelButton = screen.getAllByText('x')[0];
        cancelButton.click();
      
         expect(setWidgetComponents).toHaveBeenCalledWith(expect.any(Function));
        expect(setWidgetComponents.mock.calls[0][0](widgetComponents)).toEqual([<div key="2">Widget 2</div>]);
      });
        
      
})
