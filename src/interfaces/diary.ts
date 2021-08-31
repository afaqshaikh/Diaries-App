export interface Diary  {
    id?: string
    title : string
    type : 'private' | 'public'
    content : string
    createdAt?: string
    updatedAt?: string
    userId?: string
    entryIds : string[] | null
}