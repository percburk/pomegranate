import { useQuery } from '@tanstack/react-query'
import { QueryKeys } from 'src/constants/QueryKeys'
import { api } from './api'

export const useFetchServerString = () => {
  return useQuery([QueryKeys.Example], async () => {
    const response = await api.get<{ response: string }>('/')

    return response
  })
}
