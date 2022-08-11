export default interface IHttpRequestAdapter {
  get<T>(url: string, headers?: any, body?: any): Promise<T>;
  post<T>(url: string, headers?: any, body?: any): Promise<T>;
  patch<T>(url: string, headers?: any, body?: any): Promise<T>;
  delete<T>(url: string, headers?: any, body?: any): Promise<T>;
}
