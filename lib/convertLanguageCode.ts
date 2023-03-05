import { NextApiRequest } from "next";

export default function convertLanguageCode(req: NextApiRequest) {
  return req.query.lang === "cs"
    ? "cz"
    : typeof req.query.lang === "string"
    ? req.query.lang
    : "en";
}
