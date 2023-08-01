import { useState } from "react";

function Palindromes() {
    const [text, setText] = useState('');
    const [palindromes, setPalindromes] = useState([]);
  
    const handleTextChange = (event) => {
      const value = event.target.value;
      setText(value);
      setPalindromes(findPalindromes(value));
    };
  
    const findPalindromes = (text) => {
      const words = text.split(' ');
      const palindromes = [];
  
      words.forEach((word) => {
        const reversed = word.split('').reverse().join('');
        if (word === reversed) {
          palindromes.push(word);
        }
      });
  
      return palindromes;
    };
  
    return (
      <div>
        <label htmlFor="text">Text:</label>
        <input
          type="text"
          id="text"
          name="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter text"
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
  
  export default Palindromes;