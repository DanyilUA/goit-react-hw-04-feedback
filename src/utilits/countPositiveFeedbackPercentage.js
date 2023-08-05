import countTotalFeedback from "./countTotalFeedback";

function countPositiveFeedbackPercentage(options) {
    const { good } = options;
    let positive = Math.round((good / countTotalFeedback(options) * 100));
    return positive;
}

export default countPositiveFeedbackPercentage;