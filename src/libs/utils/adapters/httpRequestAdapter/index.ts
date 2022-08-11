import Axios, { AxiosInstance } from "axios";

import IHttpRequestAdapter from "./IHttpRequestAdapter";

export class HttpRequestAdapter implements IHttpRequestAdapter {
  private clientRequest: AxiosInstance;
  constructor() {
    this.clientRequest = Axios.create();
  }

  public async get<T>(url: string, headers?: any, body?: any): Promise<T> {
    const { data } = await this.clientRequest.get<T>(url, {
      headers,
    });

    return data;
  }

  public async post<T>(url: string, headers?: any, body?: any): Promise<T> {
    const { data } = await this.clientRequest.post<T>(url, body, {
      headers,
    });

    return data;
  }

  public async patch<T>(url: string, headers?: any, body?: any): Promise<T> {
    const { data } = await this.clientRequest.patch<T>(url, body, {
      headers,
    });
    return data;
  }

  public async delete<T>(url: string, headers?: any, body?: any): Promise<T> {
    const { data } = await this.clientRequest.delete<T>(url, {
      headers,
    });
    return data;
  }
}
