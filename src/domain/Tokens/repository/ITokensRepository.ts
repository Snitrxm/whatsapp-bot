import Token from "../entity/Token";

export interface ITokensRepository {
  create(token: Token): Promise<Token>;
}