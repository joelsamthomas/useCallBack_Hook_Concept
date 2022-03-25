import React, { useState, useCallback } from 'react';

import Title from './Title';
import ValueComponent from './ValueComponent';
import ButtonComponent from './ButtonComponent';

export default function ParentComponent() {
  const [age, setAge] = useState(30);
  const [salary, setSalary] = useState(50000);

  /*const IncrementAge = () => {
    setAge(age + 1);
  };*/

  const incrementSal = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);
  
  const incrementAge = useCallback(() => {
    setAge(age + 1)}, [age])
  
  /*const IncrementSalary = () => {
    setSalary(salary + 10000);
  };*/
 console.log('Redering ParentComponet');
  return (
    <>
      <Title />
      <ValueComponent text={'Age'} value={age} />
      <ButtonComponent label={'Increment Age'} increment={incrementAge} />
      <ValueComponent text={'Salary'} value={salary} />
      <ButtonComponent label={'Increment Salary'} increment={incrementSal} />
    </>
  );
}




