import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ input }) {
	const resultsData = calculateInvestmentResults(input);
	const initialInvestment =
		resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

	return (
		<table id="result">
			<thead>
				<tr>
					<th>Year</th> {/*Rok inwestycji*/}
					<th>Investment Value</th> {/*Wartość inwestycji*/}
					<th>Interest (Year)</th> {/*Odsetki w danym roku*/}
					<th>Total Interest</th> {/*Suma odsetek za wszystkie lata inwestycji*/}
					<th>Invested Capital</th> {/*Zainwestowany kapitał łącznie*/}
				</tr>
			</thead>
			<tbody>
				{resultsData.map(yearData => {
					const totalInterest =
						yearData.valueEndOfYear -
						yearData.annualInvestment * yearData.year -
						initialInvestment;
					const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

					return (
						<tr key={yearData.year}>
							<td>{yearData.year}</td>
							<td>{formatter.format(yearData.valueEndOfYear)}</td>
							<td>{formatter.format(yearData.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(totalAmountInvested)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
