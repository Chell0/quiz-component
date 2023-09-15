import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
	constructor(props) {
		super(props);
		this.state = {
			incorrectAnswer: false,
		};
	}

	handleClick(buttonText) {
		// Handle button click event
		if (buttonText === this.props.quiz_question.answer) {
			this.props.showNextQuestionHandler();
			this.setState({ incorrectAnswer: false });
		} else {
			this.setState({ incorrectAnswer: true });
		}
	}

	render() {
		return (
			<main>
				<section>
					<p>
						{/* instruction text goes here */}
						{this.props.quiz_question.instruction_text}
					</p>
				</section>
				<section className="buttons">
					<ul>
						{/* Iterate through each answer and display buttons */}
						{this.props.quiz_question.answer_options.map(
							(answer_option, index) => (
								<QuizQuestionButton
									clickHandler={this.handleClick.bind(this)}
									key={index}
									button_text={answer_option}
								/>
							)
						)}
					</ul>
				</section>
				{this.state.incorrectAnswer ? (
					<p className="error">Sorry, that's not right.</p>
				) : null}
			</main>
		);
	}
}

export default QuizQuestion;
