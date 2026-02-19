import {useState} from 'react';

type Props = {
    placeHolder: string;
    buttonText: string;
    onSearch: (value: string) => void;
}

export default function SearchBar({placeHolder, buttonText, onSearch}: Props) {

  const [inputValue, setInputValue] = useState('');

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const cleanValue = inputValue.trim();
    if (cleanValue.length <=1) return;

    onSearch(cleanValue);
    
    setInputValue('');
  };

  return (

    <form onSubmit={onSubmit} className="searchBar" aria-label="form">
        <input 
          type="text" 
          placeholder={placeHolder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="cssbuttons-io" type="submit">
          <span>
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          </svg>
            {buttonText}</span>
        </button>
    </form>
  )
}