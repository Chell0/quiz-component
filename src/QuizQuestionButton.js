import { Component } from "react";

class QuizQuestionButton extends Component {
	// Pass
	render() {
		return (
			<li>
				<button>{this.props.button_text}</button>
			</li>
		);
	}
}

export default QuizQuestionButton;
