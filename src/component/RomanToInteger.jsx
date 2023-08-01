import { useState } from "react";

function RomanToInteger() {
    const [romanNumeral, setRomanNumeral] = useState('');
    const [integer, setInteger] = useState('');
  
    const handleRomanNumeralChange = (event) => {
      const value = event.target.value.toUpperCase();
      setRomanNumeral(value);
      setInteger(convertRomanToInteger(value));
    };
  
    const convertRomanToInteger = (romanNumeral) => {
      const romanToIntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
      };
      let integer = 0;
  
      for (let i = 0; i < romanNumeral.length; i++) {
        const currentSymbol = romanToIntMap[romanNumeral[i]];
        const nextSymbol = romanToIntMap[romanNumeral[i + 1]];
  
        if (nextSymbol && currentSymbol < nextSymbol) {
          integer -= currentSymbol;
        } else {
          integer += currentSymbol;
        }
      }
  
      return integer;
    };
  
    return (
      <div>
        <label htmlFor="roman-numeral">Roman numeral:</label>
        <input
          type="text"
          id="roman-numeral"
          name="roman-numeral"
          value={romanNumeral}
          onChange={handleRomanNumeralChange}
          placeholder="Enter Roman numeral"
          required
        />
        <p>Integer: {integer}</p>
      </div>
    );
  }
  
  export default RomanToInteger;