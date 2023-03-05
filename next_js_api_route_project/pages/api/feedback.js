// Creating my first api route

import fs from "fs";
import path from "path";

export function buildFeedback_() {
  return path.join(process.cwd(), "data", "feedback.json");
}

export function extractFeedback_(filepath) {
  const fileData = fs.readFileSync(filepath);
  const data = JSON.parse(fileData);
  return data;
}

function handler(req, res) {
  // Sending the response as a JSON format !

  if (req.method === "POST") {
    const email = req.body.email;
    const feedback = req.body.text;

    const newFeedback = {
      id: Date.now().toString(),
      email,
      text: feedback,
    };

    //   Store that in a database or file

    const filePath = buildFeedback_();
    const data = extractFeedback_(filePath);

    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success !", feedback: newFeedback });
  } else {
    const filePath = buildFeedback_();
    const data = extractFeedback_(filePath);
    res.status(200).json({
      message: "My Full Data",
      feedback: data,
    });
  }
}

export default handler;
