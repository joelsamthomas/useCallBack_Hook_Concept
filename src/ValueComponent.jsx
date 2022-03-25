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

export default React.memo(ValueComponent);
