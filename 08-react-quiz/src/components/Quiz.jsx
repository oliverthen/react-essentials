import { useState } from "react";

export default function Quiz() {
	const [userAnswers, setUserAnswers] = useState([]);

	const activeQuestionIndex = userAnswers.length;

	return (
		<p>Currently active Question</p>
	);
}