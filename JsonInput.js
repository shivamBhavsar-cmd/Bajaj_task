import React from 'eact';  
  
const JsonInput = ({ value, onChange }) => {  
  return (  
   <textarea cols="{50}" rows="{5}" placeholder="Enter JSON data" value="{value}">  );  
};  
  
export default JsonInput;
