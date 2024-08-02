import React, { useState } from 'eact';  
import JsonInput from './JsonInput';  
import MultiSelectDropdown from './MultiSelectDropdown';  
import SubmitButton from './SubmitButton';  
  
function App() {  
  const [jsonData, setJsonData] = useState('');  
  const [selectedOptions, setSelectedOptions] = useState([]);  
  const [response, setResponse] = useState({});  
  
  const handleSubmit = async (event) => {  
   event.preventDefault();  
   const requestBody = {  
    json: jsonData,  
    options: selectedOptions,  
   };  
   try {  
    const response = await fetch('/bfhl', {  
      method: 'POST',  
      headers: { 'Content-Type': 'application/json' },  
      body: JSON.stringify(requestBody),  
    });  
    const responseData = await response.json();  
    setResponse(responseData);  
   } catch (error) {  
    console.error(error);  
   }  
  };  
  
  return (  
   <div>  
    <h1>Frontend Application</h1>  
    <form>  
      setJsonData(event.target.value)} />  
      setSelectedOptions(options)}  
      />  
       
      
    {response && (  
      <div>  
       <h2>Response</h2>  
       <p>is_success: {response.is_success}</p>  
       <p>user_id: {response.user_id}</p>  
       <p>email: {response.email}</p>  
       <p>roll_number: {response.roll_number}</p>  
       <p>numbers: {response.numbers.join(', ')}</p>  
       <p>alphabets: {response.alphabets.join(', ')}</p>  
       <p>highest_alphabet: {response.highest_alphabet}</p>  
      </div>  
    )}  
   </form></div>  
  );  
}  
  
export default App;
