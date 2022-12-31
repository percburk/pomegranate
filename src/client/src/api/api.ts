export type HttpMethods =
  | 'GET'
  | 'POST'
  | 'DELETE'
  | 'PUT'
  | 'PATCH'
  | 'HEAD'
  | 'OPTIONS'

export type ApiRequestConfig = Omit<RequestInit, 'method'>

interface PerformFetchArg<U> {
  endpoint: string
  method: HttpMethods
  body?: U
  config?: ApiRequestConfig
}

const performFetch = async <T, U = unknown>({
  endpoint,
  method,
  body,
  config,
}: PerformFetchArg<U>): Promise<T> => {
  const apiRoot = `${import.meta.env.VITE_API_URL}/api/v1`
  const requestUrl = `${apiRoot}${endpoint}`

  const headers = new Headers({
    'Content-Type': 'application/json',
    ...config?.headers,
  })

  const fetchConfig: RequestInit = {
    ...config,
    method,
    headers,
    credentials: 'include',
  }

  if (body) {
    fetchConfig.body = JSON.stringify(body)
  }

  try {
    const response = await fetch(requestUrl, fetchConfig)
    const responseText = await response.text()

    if (response.ok) {
      return Promise.resolve(responseText ? JSON.parse(responseText) : undefined)
    }

    return Promise.reject(
      new Error(
        `Request failed.\nStatus Code: ${response.status}\nMethod: ${method}\nURL: ${requestUrl}\nResponse: ${responseText}`
      )
    )
  } catch (error) {
    return Promise.reject(
      new Error(`Error in request.\nMethod: ${method}\nURL: ${requestUrl}\n${error}`)
    )
  }
}

export const api = {
  get<T>(endpoint: string, config?: ApiRequestConfig) {
    return performFetch<T>({ method: 'GET', endpoint, config })
  },
  post<T, U = unknown>(endpoint: string, body?: U, config?: ApiRequestConfig) {
    return performFetch<T, U>({ method: 'POST', endpoint, body, config })
  },
  put<T, U = unknown>(endpoint: string, body?: U, config?: ApiRequestConfig) {
    return performFetch<T, U>({ method: 'PUT', endpoint, body, config })
  },
  delete<T>(endpoint: string, config?: ApiRequestConfig) {
    return performFetch<T>({ method: 'DELETE', endpoint, config })
  },
  patch<T, U = unknown>(endpoint: string, body?: U, config?: ApiRequestConfig) {
    return performFetch<T, U>({ method: 'PATCH', endpoint, body, config })
  },
  head<T>(endpoint: string, config?: ApiRequestConfig) {
    return performFetch<T>({ method: 'HEAD', endpoint, config })
  },
  options<T>(endpoint: string, config?: ApiRequestConfig) {
    return performFetch<T>({ method: 'OPTIONS', endpoint, config })
  },
}
