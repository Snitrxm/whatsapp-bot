import Token from "../../domain/Tokens/entity/Token"
import { Pool } from "pg"
import { ITokensRepository } from "../../domain/Tokens/repository/ITokensRepository"

class TokensRepository implements ITokensRepository {
  private db_connection: Pool
  constructor(db_connection: Pool) {
    this.db_connection = db_connection
  }

  public async create(token: Token): Promise<Token> {
    const { rows } = await this.db_connection.query<Token>(`INSERT INTO tokens (token, "userInfo") VALUES ($1, $2);`, [token.token, token.userInfo])

    return rows[0]
  }
}

export default TokensRepository;