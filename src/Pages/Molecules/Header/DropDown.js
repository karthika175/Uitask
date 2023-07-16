import React, { useContext, useState } from 'react';
import styles from './Header.module.scss';
import { DashBoardContext } from '../../../Connector/Connector';


const Dropdown = () => {
  
  const { setSelectedOption,options,setOptions,widgetComponents,setWidgetComponents } = useContext(DashBoardContext);
 
  const selectOption = (option) => {
    setSelectedOption(option);
    setOptions((prevOptions) => prevOptions.filter((prevOption) => prevOption !== option));
    
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles['dropdown-dropDownSelect']}>
      <button><span> + Add Widget</span></button>
        
      </div>
      <div className={styles['dropdown-content']}>
        {options.map((option, index) => (
          <a key={index} onClick={() => selectOption(option)}>
            {option}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
