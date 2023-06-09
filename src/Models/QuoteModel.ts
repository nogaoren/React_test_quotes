export interface Root {
    quotes: Quote[]
    total: number
    skip: number
    limit: number
}
  
export interface Quote {
    id: number
    quote: string
    author: string
}