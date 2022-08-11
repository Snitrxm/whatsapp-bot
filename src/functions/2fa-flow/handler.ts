import { APIGatewayEvent } from "aws-lambda"
import axios from "axios";
import { formatJSONResponse } from "../../libs/api-gateway";
import { HttpRequestAdapter } from "../../libs/utils/adapters/httpRequestAdapter";
import stringToTitle from "../../libs/utils/stringToTitle";
export const start_2fa_flow = async (event: APIGatewayEvent) => {
  const httpRequestAdapter = new HttpRequestAdapter();

  const { phone, name }: any = event.queryStringParameters;
  await httpRequestAdapter.post(`${process.env.ZAPI_BASE_URL}/send-button-list`, undefined, {
    phone,
    message: `Opa, tudo bom? Aqui é o *Bruno*, da plataforma MundoInvest e estou aqui para te ajudar!  Só para confirmar, você é o ${stringToTitle(
      String(name).split(" ")[0]
    )}?`,
    buttonList: {
      buttons: [
        {
          id: "cadastroSIM",
          label: "Sim, sou eu!",

        },
        {
          id: "cadastroNAO",
          label: "Não, não sou!",
        },
      ],
    },
  });
  
  return formatJSONResponse({
    statusCode: 200,
    body: {
      message: "message sent successfully"
    }
  })
};
