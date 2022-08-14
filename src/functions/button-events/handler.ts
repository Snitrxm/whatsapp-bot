import { APIGatewayEvent } from "aws-lambda"
import Database from "../../framework/database";
import TokensRepository from "../../application/repositories/tokens.repository";
import { HttpRequestAdapter } from "../../libs/utils/adapters/httpRequestAdapter";
import HandleButtonEventService from "../../application/services/HandleButtonEventService";
import { formatJSONResponse } from "../../libs/api-gateway";

export const button_events = async (event: APIGatewayEvent) => {
  const database = new Database()
  const db_connection = await database.connect()
  const tokensRepository = new TokensRepository(db_connection)
  const httpRequestAdapter = new HttpRequestAdapter();

  const { buttonsResponseMessage, phone }: any = event.queryStringParameters;

  if(!buttonsResponseMessage || !phone) {
    return formatJSONResponse({
      statusCode: 400,
      body: {
        message: "phone and buttonsResponseMessage are required"
      }
    })
  }

  const handleButtonEvent = new HandleButtonEventService(tokensRepository, httpRequestAdapter)

  
  await handleButtonEvent.execute({
    buttonsResponseMessage: buttonsResponseMessage as any,
    phone,
  })


  return formatJSONResponse({
    statusCode: 200,
    body: {
      message: "message sent successfully"
    }
  })
};
