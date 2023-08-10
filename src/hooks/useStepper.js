import {useState} from "react";

const useStepper = () => {
 const [step, setStep] = useState(0);

 const increment = () => {
  console.log('increment');
  if(step < 2){
  setStep(step + 1);
 }
 }

 const decrement = () => {
  console.log('decrement');
  if(step > 0){
  setStep(step - 1);
 }}

 return {
  step,
  setStep,
  increment,
  decrement
 };
};

export default useStepper;