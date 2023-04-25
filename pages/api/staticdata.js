import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "billing_vendors");
  //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + "/vendors.json",
    "utf8"
  );

  //Return the content of the data file in json format
  res.status(200).json(fileContents);
}
