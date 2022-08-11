interface IResponse {
  statusCode: number
  body?: object
}

export const formatJSONResponse = (response: IResponse) => {

  return {
    statusCode: response.statusCode,
    body: JSON.stringify(response?.body)
  }
}
