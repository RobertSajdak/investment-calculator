import { useState } from 'react';

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
	// Stan początkowy, czyli dane wejściowe użytkownika.
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	const inputIsValid = userInput.duration >= 1;

	// Funkcja do obsługi danych wejściowych (pól <input>), których wartość zmienił użytkownik.
	// Funkcja aktualizuje stan pól po każdej zmianie wartości.
	function handleChange(inputIdentifier, newValue) {
		setUserInput(prevUserInput => {
			return {
				...prevUserInput,
				[inputIdentifier]: +newValue, // + wymusza tutaj konwersję String'a na typ number
			};
		});
	}

	return (
		<>
			<Header />
			<UserInput userInput={userInput} onChange={handleChange} />
			{!inputIsValid && (
				<p className="center">
					<b>Warnning!</b>
					<br />
					The value of the duration field must be greater than zero.
				</p>
			)}
			{inputIsValid && <Results input={userInput} />}
		</>
	);
}

export default App;
