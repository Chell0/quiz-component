import { Component } from "react";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question: 1,
		};
	}
	render() {
		return <div>Quiz</div>;
	}
}

export default Quiz;
