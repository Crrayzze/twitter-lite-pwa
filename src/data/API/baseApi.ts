import axios, { AxiosInstance, AxiosResponse } from 'axios'

export default abstract class BaseAPI {
  private readonly axios: AxiosInstance

  constructor (baseURL: string, headers?: Record<string, string>) {
    this.axios = axios.create({
      baseURL,
      headers
    })
  }

  async get<T>(path: string): Promise<T> {
    try {
      const response: AxiosResponse<T, any> = await this.axios.get<T>(path)
      return response.data
    } catch (error) {
      console.log('error', error)
      throw error
    }
  }

  async post<T>(path: string, data: any): Promise<T> {
    const response: AxiosResponse<T, any> = await this.axios.post<T>(path, data)
    return response.data
  }

  async put<T>(path: string, data: any): Promise<T> {
    const response: AxiosResponse<T, any> = await this.axios.put<T>(path, data)
    return response.data
  }

  async delete<T>(path: string): Promise<T> {
    const response: AxiosResponse<T, any> = await this.axios.delete<T>(path)
    return response.data
  }

}