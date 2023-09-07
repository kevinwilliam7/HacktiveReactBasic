import './App.css';
import Content from './components/content';
import Footer from './components/footer';
import Navbar from './components/navigation';

function App() {
	return (
		<div class="flex flex-col h-screen justify-between">
			<Navbar/>
			<Content/>
			<Footer/>
		</div>
	);
}

export default App;
