import { BedCard } from './BedCard'
import { AuthType } from './auth'
import { TopMenuItem, LeftMenuItem } from './home.type'

declare namespace API {
  export type PrimaryId = Readonly<string | number>

  export interface QueryParams {
    page?: number
    pageSize?: number
    q?: string
    refresh?: boolean
  }

  export interface Total {
    page: number
    pageSize: number
    total: number
  }

  export interface Panigation<T> extends Total {
    list: T[]
  }

  export interface Response {
    code: string
    data: any
    message: string
    type: string
  }

  export interface AuthInfo {
    isLogin: boolean
    loginDevice: string
    loginId: string
    loginType: string
    sessionInfo: SessionInfo
    sessionTimeout: number
    tag: string
    tokenActiveTimeout: number
    tokenName: string
    tokenSessionTimeout: number
    tokenTimeout: number
    tokenValue: string
  }

  export interface SessionInfo {
    authDeptInfo: any
    branchCode: string
    branchName: string
    deptId: string
    deptName: string
    emplId: string
    employeeName: string
    hospitalId: string
    hospitalName: string
    isManager: string
    roleId: string
    userDetailStr: string
    userId: string
    userName: string
  }

  export type WithNull<T> = {
    [P in keyof T]: T[P] | null
  }

  export { BedCard }
  export { AuthType }
  export { TopMenuItem, TopMenuOption, LeftMenuItem }
}

export = API
export as namespace API
