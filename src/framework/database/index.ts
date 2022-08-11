import { Pool } from "pg";

class Database {
  private client: Pool

  public async connect(): Promise<Pool> {
    this.client = new Pool({
      host: process.env.POSTGRES_HOST,
      password: process.env.POSTGRES_PASSWORD,
      port: Number(process.env.POSTGRES_PORT),
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USERNAME
    });

    return this.client
  }
}

export default Database