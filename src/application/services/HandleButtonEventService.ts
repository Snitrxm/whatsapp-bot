import Token from "../../domain/Tokens/entity/Token";
import * as speakeasy from "speakeasy"
import { ITokensRepository } from "../../domain/Tokens/repository/ITokensRepository";
import IHttpRequestAdapter from "../../libs/utils/adapters/httpRequestAdapter/IHttpRequestAdapter";

interface IRequest {
  buttonsResponseMessage: {
    buttonId: string;
  },
  phone: string;
}

class HandleButtonEventService {
  constructor(
    private tokensRepository: ITokensRepository,
    private httpRequestAdapter: IHttpRequestAdapter
  ) {
    // 
  }
  public async execute({ buttonsResponseMessage, phone }: IRequest): Promise<void> {
    const messageContent = {
      phone: `${phone}`,
      delayMessage: 0,
      message:
        "",
    };

    let token: Token
    if (buttonsResponseMessage.buttonId === "cadastroSIM") {
      const tokenCode = speakeasy.totp({
        secret: phone,
      });

      messageContent.message = `Opa, obrigado pela confirmação! Seu token é: ${tokenCode}.`;

      const userInfo =
        phone.length === 12
          ? phone
            .split("")
            .map((item, index) => (index === 3 ? `${item}9` : item))
            .join("")
          : phone;

      token = new Token(userInfo, tokenCode);

      await this.tokensRepository.create(token);
    } else if (buttonsResponseMessage.buttonId === "cadastroNAO") {
      messageContent.message = "Opa, provavelmente alguém tentou se cadastrar em nossa plataforma com seu número. Peço desculpas pelo inconveniente. Já estamos tomando as medidas necessárias.";
    }

    await this.httpRequestAdapter.post(
      `${process.env.ZAPI_BASE_URL}/send-text`,
      undefined,
      messageContent
    );


  }
}

export default HandleButtonEventService