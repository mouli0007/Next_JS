import { buildFeedback_, extractFeedback_ } from "../api/feedback";

function handler(req, res) {
  const feedbackId = req.query.fid;
  const filePath = buildFeedback_();
  const feedbackData = extractFeedback_(filePath);

  const single_item = feedbackData.find((feed) => feed.id === feedbackId);

  res.status(200).json({ message: "Specific_Item", feedback: single_item });
}
