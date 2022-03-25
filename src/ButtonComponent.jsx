import React from 'react';

function ButtonComponent(props) {
  console.log('Redering ButtonComponet', props.label);
  return (
    <div>
      <button onClick={props.increment}>{props.label}</button>
    </div>
  );
}

export default React.memo(ButtonComponent);
