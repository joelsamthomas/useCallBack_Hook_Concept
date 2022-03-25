import React from 'react';

function ButtonComponent(props) {
  console.log('Redering ButtonComponet', props.label);
  return (
    <div>
      <button onClick={props.increment}>{props.label}</button>
    </div>
  );
}

export default React.memo(ButtonComponent); ///React.Memo  is a higher order component is a  which prevents a function component from being rendered if its props or states does not change.
