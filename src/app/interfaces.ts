export interface Status{
    id: number,
    isDone: string
  }

export interface Todo{
    id: number,
    todo: string,
    done: boolean,
    deadline: string
  }

  export interface Response{
    status: string,
    data:  LoginResponseData,
    token: string
  }

  export interface LoginResponseData{
      id: string,
      username: string,
      type: string
  }

  export interface GetTodoResponse{
    status:string,
    data: Todo[]
  }

  export interface AddTodoResponse{
    status:string,
    data: Todo
  }

  export interface TranslateResponse{
    status: string,
    data: Translations
  }

  export interface Translations{
    translations:
      {
      translatedText: string,
      tetectedSourceLanguage: string
      }[]
  }

  export interface UserInfo{
    id: number,
    username: string,
    password: string,
    translations: string
  }

  export interface AdminResponse{
    status: string,
    data: UserInfo[]
  }

  export interface LogResponse{
    status: string
    data: Logs[]
  }

  export interface Logs{
    userid: string,
    timestamp: string
  }