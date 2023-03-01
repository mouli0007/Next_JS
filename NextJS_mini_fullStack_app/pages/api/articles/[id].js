import { articles } from "../../../data";

export default function handler(req, res) {
  const id_ = req.query.id;

  const filtered_article = articles.filter((article) => article.id === id_);

  if (filtered_article.length > 0) {
    console.log(filtered_article);
    console.log(filtered_article[0]);
    res.status(200).json(filtered_article);
  } else {
    res.status(404).json({ message: "Article not found" });
  }
}
