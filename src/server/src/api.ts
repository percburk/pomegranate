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
  url: string
  method: HttpMethods
  body?: U
  config?: ApiRequestConfig
}

const performFetch = async <T, U = unknown>({
  url,
  method,
  body,
  config,
}: PerformFetchArg<U>): Promise<T> => {
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
    const response = await fetch(url, fetchConfig)
    const responseText = await response.text()

    if (response.ok) {
      return Promise.resolve(responseText ? JSON.parse(responseText) : undefined)
    }

    return Promise.reject(
      new Error(
        `Request failed.\nStatus Code: ${response.status}\nMethod: ${method}\nURL: ${url}\nResponse: ${responseText}`
      )
    )
  } catch (error) {
    return Promise.reject(
      new Error(`Error in request.\nMethod: ${method}\nURL: ${url}\n${error}`)
    )
  }
}

export const api = {
  get<T>(url: string, config?: ApiRequestConfig) {
    return performFetch<T>({ method: 'GET', url, config })
  },
  post<T, U = unknown>(url: string, body?: U, config?: ApiRequestConfig) {
    return performFetch<T, U>({ method: 'POST', url, body, config })
  },
  put<T, U = unknown>(url: string, body?: U, config?: ApiRequestConfig) {
    return performFetch<T, U>({ method: 'PUT', url, body, config })
  },
  delete<T>(url: string, config?: ApiRequestConfig) {
    return performFetch<T>({ method: 'DELETE', url, config })
  },
  patch<T, U = unknown>(url: string, body?: U, config?: ApiRequestConfig) {
    return performFetch<T, U>({ method: 'PATCH', url, body, config })
  },
  head<T>(url: string, config?: ApiRequestConfig) {
    return performFetch<T>({ method: 'HEAD', url, config })
  },
  options<T>(url: string, config?: ApiRequestConfig) {
    return performFetch<T>({ method: 'OPTIONS', url, config })
  },
}
