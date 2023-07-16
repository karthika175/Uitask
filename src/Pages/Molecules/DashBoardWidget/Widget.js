import React, { useContext, useEffect } from 'react';
import styles from './Widget.module.scss';
import empty from '../../../assests/empty.png';
import { DashBoardContext } from '../../../Connector/Connector';
import Masonry from 'react-masonry-css'
import cx  from 'classnames';
export const Widget = () => {
  const { selectedOption, setWidgetComponents, options,setOptions,widgetComponents } = useContext(DashBoardContext);

  useEffect(() => {
    setWidgetComponents((prevComponents) =>
      prevComponents.map((component) => ({
        ...component,
        selectedOption: selectedOption,
      }))
    );
  }, [selectedOption, setWidgetComponents]);

  const handleCancelWidget = (index) => {
    const canceledWidget = widgetComponents[index].props.title;
    console.log(canceledWidget.title);
    setWidgetComponents((prevComponents) => {
      const updatedComponents = [...prevComponents];
      
      updatedComponents.splice(index, 1);
      
      return updatedComponents;
    });
  
    setOptions((prevOptions) => [...prevOptions, canceledWidget]);
  };
  
 const breakpoint ={
    default: 2,
    1100: 1
 }
  return (
    <>
      {widgetComponents.length > 0 ? (
        
        <div className={styles.wrapper} data-testid='dashboard'>
           <Masonry 
           breakpointCols={breakpoint}
           className="my-masonry-grid"
           columnClassName="my-masonry-grid_column">
            {widgetComponents.map((component, index) => (
                
                <div className={styles.widgetContainer}>
                    <div className={styles.title}>
                    <p className={styles.cancelButton} onClick={() => handleCancelWidget(index)}>
                        x
                    </p>
                    </div>
                    {component}
                </div>
                
                
            ))}
          </Masonry>
        
         </div>
        
      ) : (
        <div className={styles.emptyWrapper}>
            <div className={styles.emptyImg}>
                <img src={empty} alt="empty" className={styles.empty} />
                <p className={styles.noWidget}>NO WIDGET FOUND</p>
            </div>
        </div>
      )}
    </>
  );
};


