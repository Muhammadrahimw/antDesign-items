import {useState} from "react";
import Comp from "./components/comp";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Comp />
		</>
	);
}

export default App;
