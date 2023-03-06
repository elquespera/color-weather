import { NextApiRequest } from "next";

export default function convertLanguageCode(req: NextApiRequest) {
  return typeof req.query.lang === "string" ? req.query.lang : "en";
}
