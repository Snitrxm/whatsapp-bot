class Token {
  id: string;

  userInfo: string;

  token: string;

  revoke: boolean;

  created_at: Date;

  updated_at: Date;

  constructor(userInfo: string, token: string) {
    this.userInfo = userInfo
    this.token = token
  }
}

export default Token