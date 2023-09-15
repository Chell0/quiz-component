import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion";

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
		return <QuizQuestion />;
	}
}

export default Quiz;
