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
		const firstQuestion = quizData.quiz_questions[0];
		return <div className="QuizQuestion">{firstQuestion.instruction_text}</div>;
	}
}

export default Quiz;
