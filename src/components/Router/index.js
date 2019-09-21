import React, { useContext} from 'react';
import {AppContext} from '../../AppContext';



const Router = props => {
   const context = useContext(AppContext);

   const { visible, setVisible, url  } = context

    const onClickHandler = () => {
        if(visible) setVisible(false);
    }

   const { children } = props;
   return <div onClick={onClickHandler}>{children.map(({props}, index) => {
        return props.path === url? <props.component  {...context} key={index}/>:  null;
   })}</div>;
}


export const Route = props => {
    const { children } = props;
    return <div>{children}</div>
}


export default Router