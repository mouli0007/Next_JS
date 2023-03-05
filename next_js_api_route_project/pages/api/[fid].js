import { buildFeedback_, extractFeedback_ } from "./feedback";

function handler(req, res) {
  const feedbackId = req.query.fid;
  const filePath = buildFeedback_();
  const feedbackData = extractFeedback_(filePath);

  const feedback_ = feedbackData.find((feed) => feed.id === feedbackId);

  res.status(200).json({ feedback: feedback_ });
}

export default handler;
