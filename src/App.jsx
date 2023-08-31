import './App.css';
import Loader from './components/loader';
import Navbar from './components/navbar';
import { useGetCurrency } from './services/currencyFreaks';
import { useEffect} from 'react';

function App() {
  const { getCurrency, isLoading, isError, currency } = useGetCurrency();
	useEffect(() => {
		getCurrency();
	}, [getCurrency]);

	return (
		<div>
			<Navbar/>
			<div className="grid grid-cols gap-4">
			{isLoading ? <Loader/>
				: isError 
				? <h1>{isError.toString()}</h1>
				: (currency && currency['rates'] ? 
				<div className="flex items-center justify-center p-10">
					<table className="text-sm text-left text-gray-500 dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="px-6 py-3">Currency</th>
								<th scope="col" className="px-6 py-3">We Buy </th>
								<th scope="col" className="px-6 py-3">Exchange Rate</th>
								<th scope="col" className="px-6 py-3">We Sell</th>
							</tr>
						</thead>
						<tbody>
							{
								Object.entries(currency['rates']).map((value,index) =>
									value[0] === 'CAD' || value[0] === 'IDR' || value[0] === 'JPY' || value[0] === 'CHF' || value[0] === 'EUR' || value[0] === 'GBP' ? <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
										<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{value[0].toString()}</th>
										<td className="px-6 py-4">{ (parseFloat(value[1].toString()) + (parseFloat(value[1].toString()) * 0.05)) }</td>
										<td className="px-6 py-4">{ parseFloat(value[1].toString()) }</td>
										<td className="px-6 py-4">{ (parseFloat(value[1].toString()) - (parseFloat(value[1].toString()) * 0.05)) }</td>
									</tr> : <tr></tr>
								)								
							}
						</tbody>
					</table>
				</div>
				: <div className="relative overflow-x-auto rounded shadow-lg flex items-center justify-center h-screen"><h1>Oops, Data Tidak Ditemukan</h1></div>
			)}
			</div>
		</div>
	);
}

export default App;
