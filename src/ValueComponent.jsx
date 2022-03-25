import React from 'react';

function ValueComponent(props) {
  console.log('Redering ValueComponet', props.text);
  return (
    <div>
      <h1>
        {props.text}:{props.value}
      </h1>
    </div>
  );
}

export default React.memo(ValueComponent); //React.Memo  is a higher order component is a  which prevents a function component from being rendered if its props or states does not change.
