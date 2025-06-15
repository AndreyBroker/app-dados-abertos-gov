import { XMLParser } from "fast-xml-parser";

export async function fetchXMLData(url: string) {
  const response = await fetch(url, { cache: "no-store" });
  const text = await response.text();
 
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "",
  });

  const jsonData = parser.parse(text);
  return jsonData;
}

