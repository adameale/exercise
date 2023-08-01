import { useState } from "react";

function PhoneNumberLetters() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [letters, setLetters] = useState([]);
  
    const handlePhoneNumberChange = (event) => {
      const value = event.target.value;
      setPhoneNumber(value);
      setLetters(generateLetterCombinations(value));
    };
  
    const generateLetterCombinations = (phoneNumber) => {
      const letterMap = {
        '2': ['A', 'B', 'C'],
        '3': ['D', 'E', 'F'],
        '4': ['G', 'H', 'I'],
        '5': ['J', 'K', 'L'],
        '6': ['M', 'N', 'O'],
        '7': ['P', 'Q', 'R', 'S'],
        '8': ['T', 'U', 'V'],
        '9': ['W', 'X', 'Y', 'Z']
      };
      const digits = phoneNumber.split('');
      let combinations = [''];
  
      digits.forEach((digit) => {
        const letters = letterMap[digit];
        let newCombinations = [];
  
        combinations?.forEach((combination) => {
          letters?.forEach((letter) => {
            newCombinations.push(combination + letter);
          });
        });
  
        combinations = newCombinations;
      });
  
      return combinations;
    };
  
    return (
      <div>
        <label htmlFor="phone-number">Phone number:</label>
        <input
          type="tel"
          id="phone-number"
          name="phone-number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="Enter phone number"
          pattern="[0-9]{10}"
          required
        />
        <ul>
          {letters.map((letter, index) => (
            <li key={index}>{letter}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default PhoneNumberLetters;