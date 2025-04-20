import Mock from 'mockjs'
import { generateBedCards } from './bedCardMockData'
const SUCCESS_CODE = 'COMMON.SYSTEM.200'

// 获取用户信息
Mock.mock(/\/api\/examples/, 'get', () => {
  const template = {
    'data|10': [
      {
        'id|+1': 1,
        name: Mock.Random.ctitle(),
        description: Mock.Random.cparagraph(1, 2),
      },
    ],
  }

  return {
    code: SUCCESS_CODE,
    ...Mock.mock(template),
  }
})

Mock.mock(/\/api\/portal\/v1\/user\/info\/account/, 'get', () => {
  return {
    success: true,
    type: 'success',
    code: 'COMMON.SYSTEM.200',
    message: '操作成功',
    data: {
      userInfo: {
        userId: 'admin',
        userName: 'admin',
        emplCode: 'admin',
        emplType: 'D',
        employeeId: 'admin',
        isManager: '1',
        avatar: '/api/v1/user/images/avatar/1892140771781353473',
        employeeName: '管理员',
        dutyLevelName: '',
        fontSize: 'm',
        insuranceCode: null,
      },
      defaultDeptInfo: {
        deptCode: 'csks',
        deptName: '初始科室',
        branchCode: 'ZN01',
        branchName: '本部',
        deptPro: '0',
        deptType: 'O',
        hospitalId: '990052',
        hospitalName: '武汉大学中南医院',
      },
      systemInfo: {
        productName:
          '武汉大学中南医院信息管理系统（中南医院国家码：H42010601570)',
        version: '7.0.0.0',
        screenLocked: 0,
        screenLockTime: 1900000,
        loginUrl: 'https://10.100.137.103:30556/cas/login',
        env: 'dev',
      },
    },
  }
})

// 菜单接口返回数据
export type MenuData = {
  bizcomsId: string
  functionItemValue: string
  functionItemValueType: string
  needShiftDept: boolean
  openNewWindowMenu: boolean
  remark: string
  resAddress: string
  resCode: string
  resIcon: string
  resId: string
  resName: string
  resParentId: string
  resType: string
  roleId: string
  subResource?: MenuData[]
  validState: string
  vocationName: string
  vocationType: string
}
/**
 * 返回菜单数据
 * /api/portal/v1/user/prm/resource/workbench/menus/info
 */
Mock.mock(
  /\/api\/portal\/v1\/user\/resource\/authmenu\/first?resCode=ccis-nurse-frontend/,
  'get',
  () => {
    const data: MenuData = {
      bizcomsId: 'bizcomsId',
      functionItemValue: 'functionItemValue',
      functionItemValueType: 'functionItemValueType',
      needShiftDept: true,
      openNewWindowMenu: true,
      remark: 'remark',
      resAddress: 'resAddress',
      resCode: 'ccis-nurse-frontend',
      resIcon: 'resIcon',
      resId: 'resId',
      resName: 'resName',
      resParentId: 'resParentId',
      resType: 'resType',
      roleId: 'roleId',
      subResource: [
        {
          bizcomsId: 'bizcomsId',
          functionItemValue: 'functionItemValue',
          functionItemValueType: 'functionItemValueType',
          needShiftDept: true,
          openNewWindowMenu: true,
          remark: 'remark',
          resAddress: 'resAddress',
          resCode: 'ccis-nurse-frontend',
          resIcon: 'resIcon',
          resId: 'resId',
          resName: 'resName',
          resParentId: 'resParentId',
          resType: 'resType',
          roleId: 'roleId',
          subResource: [],
          validState: 'validState',
          vocationName: 'vocationName',
          vocationType: 'vocationType',
        },
      ],
      validState: 'validState',
      vocationName: 'vocationName',
      vocationType: 'vocationType',
    }
    return { code: 'SYSTEM.COMMON.200', data: [data], message: '成功' }
  },
)

Mock.mock(/\/api\/bedCardList/, 'get', () => {
  const data = generateBedCards(10)
  return { code: SUCCESS_CODE, data }
})
