class AnswerApiModel {
    questionId = "";
    writer = "";
    content = "";

    constructor(obj) {
        this.questionId = obj.questionId;
        this.writer = obj.writer;
        this.content = obj.content;
    }
}

export default AnswerApiModel;