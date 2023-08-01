import { useState } from "react";

function PalindromeNumbers() {
    const [startNumber, setStartNumber] = useState('');
    const [endNumber, setEndNumber] = useState('');
    const [palindromes, setPalindromes] = useState([]);
  
    const handleStartNumberChange = (event) => {
      const value = event.target.value;
      setStartNumber(value);
      setPalindromes(generatePalindromes(value, endNumber));
    };
  
    const handleEndNumberChange = (event) => {
      const value = event.target.value;
      setEndNumber(value);
      setPalindromes(generatePalindromes(startNumber, value));
    };
  
    const generatePalindromes = (start, end) => {
      const palindromes = [];
  
      for (let i = parseInt(start); i <= parseInt(end); i++) {
        const reversed = i.toString().split('').reverse().join('');
        if (i.toString() === reversed) {
          palindromes.push(i);
        }
      }
  
      return palindromes;
    };
  
    return (
      <div>
        <label htmlFor="start-number">Start number:</label>
        <input
          type="number"
          id="start-number"
          name="start-number"
          value={startNumber}
          onChange={handleStartNumberChange}
          placeholder="Enter start number"
          required
        />
        <label htmlFor="end-number">End number:</label>
        <input
          type="number"
          id="end-number"
          name="end-number"
          value={endNumber}
          onChange={handleEndNumberChange}
          placeholder="Enter end number"
          required
        />
        <ul>
          {palindromes.map((palindrome, index) => (
            <li key={index}>{palindrome}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default PalindromeNumbers;