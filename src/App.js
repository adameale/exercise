import './App.css';
import PalindromeNumbers from './component/Palindrome';
import Palindromes from './component/Palindromes';
import PhoneNumberLetters from './component/PhoneLetter';
import RomanToInteger from './component/RomanToInteger';

function App() {
  return (
    <div className="App">
      <PhoneNumberLetters/>
      <RomanToInteger/>
      <PalindromeNumbers/>
      <Palindromes/>
    </div>
  );
}

export default App;
