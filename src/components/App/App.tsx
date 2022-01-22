import CallToAction from "../organizms/CallToAction/CallToAction";
import Features from "../organizms/Features/Features";
import Footer from "../organizms/Footer/Footer";
import Form from "../organizms/Form/Form";
import Header from "../organizms/Header/Header";
import Hero from "../organizms/Hero/Hero";
import s from "./App.module.scss";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Form />
			<Features />
			<CallToAction />
			<Footer />
		</>
	);
}

export default App;
