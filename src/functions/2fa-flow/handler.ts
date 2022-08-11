import { APIGatewayEvent } from "aws-lambda"
import axios from "axios";
import { formatJSONResponse } from "../../libs/api-gateway";
import { HttpRequestAdapter } from "../../libs/utils/adapters/httpRequestAdapter";
import stringToTitle from "../../libs/utils/stringToTitle";
export const start_2fa_flow = async (event: APIGatewayEvent) => {
  const httpRequestAdapter = new HttpRequestAdapter();

  const { phone }: any = event.body;
  try {
    await axios.post(`https://api.z-api.io/instances/3A9CB9A99735802F7A4262D448F3906A/token/E30A54EB98C1D37EA9648FE7/send-text`, {
      phone,
      message: "Test bot",
    })
  } catch (error) {
    console.log(error);
  }
  
  return formatJSONResponse({
    statusCode: 200,
    body: {
      message: "message sent successfully"
    }
  })
};
