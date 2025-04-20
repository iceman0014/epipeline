export type AuthType = {
  tokenName: string
  tokenValue: string
  isLogin: boolean
  loginId: object
  loginType: string
  tokenTimeout: number
  sessionTimeout: number
  tokenSessionTimeout: number
  tokenActiveTimeout: number
  loginDevice: string
  tag: string
  sessionInfo: SessionInfo
}

type SessionInfo = {
  userId: string
  userName: string
  emplId: string
  employeeName: string
  roleId: string
  deptId: string
  deptName: string
  hospitalId: string
  hospitalName: string
  branchCode: string
  branchName: string
  userDetailStr: string
  authDeptInfo: AuthDeptInfo
  isManager: string
}

type AuthDeptInfo = {
  deptCode: string
  deptName: string
  branchCode: string
  branchName: string
}
