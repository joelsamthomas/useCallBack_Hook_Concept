import React, { useState, useCallback } from 'react';

import Title from './Title';
import ValueComponent from './ValueComponent';
import ButtonComponent from './ButtonComponent';

export default function ParentComponent() {
  const [age, setAge] = useState(30);
  const [salary, setSalary] = useState(50000);


  //commented the actual callback and used useCallBack Hook to avoid unnecessary renders
  //of all the compoents when age or salary is chnaged


  /*const IncrementAge = () => {
    setAge(age + 1);
  };*/

  const incrementAge = useCallback(() => {
    setAge(age + 1)}, [age])




  const incrementSal = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);
  

  
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




