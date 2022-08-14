import { APIGatewayEvent } from "aws-lambda"
import { formatJSONResponse } from "../../libs/api-gateway";
import { HttpRequestAdapter } from "../../libs/utils/adapters/httpRequestAdapter";

export const finish_step = async (event: APIGatewayEvent) => {
  const { phone }: any = event.queryStringParameters;
  const httpRequestAdapter = new HttpRequestAdapter();

  await httpRequestAdapter.post(
    `${process.env.ZAPI_BASE_URL}/send-text`,
    undefined,
    {
      phone: phone,
      message: `Ah, aqui vão algumas orientações para você ter a melhor experiência na nossa plataforma:
Vi aqui que você já chegou na sua Evolução Patrimonial!🎯
Aqui é onde você conseguirá cadastrar todos seus patrimônios, objetivos e muito mais!
Algumas outras funcionalidades da plataforma MundoInvest:
✅ Fundos Imobiliários: quanto sua carteira de FIIs paga em dividendos;
✅ Fundos de investimentos: descubra os pontos de atenção dos seus fundos;
✅ Renda Variável: Análise dos seus ativos de ações, BDRs e ETFs
✅ Renda Fixa: Análise de diversificação, taxas e segurança FGC;
    `,
      delayMessage: 5,
    }
  );

  await httpRequestAdapter.post(
    `${process.env.ZAPI_BASE_URL}/send-text`,
    undefined,
    {
      phone: phone,
      message: `E claro, se precisar falar com um especialista, você consegue fazer através de um simples botão! Olha como é fácil!👇`,
      delayMessage: 3,
    }
  );

  await httpRequestAdapter.post(
    `${process.env.ZAPI_BASE_URL}/send-image`,
    undefined,
    {
      phone: phone,
      image: "https://mundo-invest.s3.sa-east-1.amazonaws.com/images_wtp/whatsImage.png",
      delayMessage: 3,
    }
  );

  await httpRequestAdapter.post(
    `${process.env.ZAPI_BASE_URL}/send-text`,
    undefined,
    {
      phone: phone,
      message: `🎉 Seja Bem Vindo ao MundoInvest! 🎉\nUm forte abraço e bons investimentos!! 🚀🚀🚀`,
      delayMessage: 3,
    }
  );

  return formatJSONResponse({
    statusCode: 204
  })
};
