
//
export function buildFeedback_() {
  return path.join(process.cwd(), "data", "feedback.json");
}

//
export function extractFeedback_(filePath) {
  const file_data = fs.readFileSync(filePath);
  const data = JSON.parse(file_data);
  return data;
}

function handler(req, res) {
  if (req.method === "POST") {
    const { email, feedback } = req.body;

    if (!email || !feedback) {
      res.status(422).json({ message: "These Feilds cant be empty" });
      return;
    }
    const newFeedBack = {
      id: new Date().toISOString(),
      email,
      feedback,
    };

    const filePath = buildFeedback_();
    const data = extractFeedback_(filePath);
    data.push(newFeedBack);
    fs.writeFileSync(filePath, JSON.stringify(data));
    // res.status(201).json({ message: "Feedback Added", feedback: newFeedBack });
  } else {
    const filePath = buildFeedback_();
    const data = extractFeedback_(filePath);
    res.status(200).json({ message: "Checking the route", feedback: data });
  }
}

export default handler;
