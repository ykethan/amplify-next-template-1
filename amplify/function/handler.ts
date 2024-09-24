import { SESClient } from "@aws-sdk/client-ses";
// import { CreateForm1 } from "./pdf";

const sesClient = new SESClient({ region: "ap-south-1" });

export const handler = async (event: any, context: any) => {
  // rest of the logic...

  return "success";
};
