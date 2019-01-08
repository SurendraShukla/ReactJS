import React, { Component } from 'react';
import multipleChoiceQuestionList from '../api/multiple-choice-question-list';

class AssessmentPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            total: multipleChoiceQuestionList.length,
            questionInfo: multipleChoiceQuestionList[0],
        }
    }

    render() {

        let questionInfo = this.state.questionInfo;

        let question = questionInfo.title;
        let description = questionInfo.description;
        // let answers = questionInfo.choices;

        console.log(questionInfo);
        return (
            <div>
                <div>Step {this.state.index+1} of {this.state.total}</div>
                <div>
                    {question}<br /><br />
                    {description}<br /><br />
                    {/*{question.choices}*/}
                </div>
            </div>
        );
    }
}

export default AssessmentPage;
