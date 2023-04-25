import fs from "fs";
import path from "path";

// VENDOR_PATH is useful when you want to get the path to a specific file
export const VENDOR_PATH = path.join(process.cwd(), "vendors");

// postFilePaths is the list of all mdx files inside the VENDOR_PATH directory
export const postFilePaths = fs
  .readdirSync(VENDOR_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));
