
function countTotalFeedback(options) {
  const { good, bad, neutral } = options;

  const total = good + bad + neutral;

  return total;
}

export default countTotalFeedback;

