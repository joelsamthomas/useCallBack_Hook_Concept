import React from 'react';

export default function Title() {
  console.log('Redering TitleComponet');
  return (
    <div>
      <h1>useCallBack Hook</h1>
    </div>
  );
}

export default  React.memo(Title);
