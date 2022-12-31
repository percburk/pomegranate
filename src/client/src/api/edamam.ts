import { useQuery } from '@tanstack/react-query'
import queryString from 'query-string'
import { QueryKeys } from 'src/constants/query_keys'
import { api } from './api'

interface EdamamAutocompleteRequest {
  searchValue: string
  limit?: number
}

export const useEdamamAutocomplete = ({
  searchValue,
  limit,
}: EdamamAutocompleteRequest) => {
  const qs = queryString.stringify({ searchValue, limit })

  return useQuery({
    queryKey: [QueryKeys.EdamamAutocomplete, { searchValue, limit }],
    queryFn: async () => {
      const response = await api.get<string[]>(`/edamam/auto-complete?${qs}`)
      return response
    },
    enabled: !!searchValue,
  })
}
