import { Request } from 'express'

export type EdamamAutocompleteRequest = Request<
  never,
  unknown,
  never,
  { searchValue: string; limit: string }
>
