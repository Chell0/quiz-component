import React, { Component } from "react";
import QuizEnd from "./QuizEnd";
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
		const isQuizEnd =
			this.state.quiz_position - 1 === quizData.quiz_questions.length;

		return (
			<>
				{isQuizEnd ? (
					<QuizEnd />
				) : (
					<QuizQuestion
						quiz_question={quizData.questions[this.state.question - 1]}
					/>
				)}
			</>
		);
	}
}

export default Quiz;
