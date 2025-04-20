export default function useHome() {
  const topMenus = ref<API.TopMenuItem[]>([
    {
      id: 1101,
      title: '客户管理',
      icon: 'department',
      options: [],
    },
  ])

  const topUserInfo = ref<API.TopMenuItem>({
    id: 3,
    title: '杜若 经理',
    icon: 'account',
    options: [
      {
        id: 1001,
        title: '切换语言',
      },
      {
        id: 1002,
        title: '修改密码',
      },
      {
        id: 1003,
        title: '关于系统',
      },
      {
        id: 1004,
        title: '退出登录',
      },
    ],
  })

  const leftMenus = ref<API.LeftMenuItem[]>([
    {
      icon: '仪',
      img: 'dashboard',
      title: '仪表盘',
      danger: false,
      path: '/home/dashboard',
    },
    {
      icon: '待',
      img: 'todoList',
      title: '待办事项',
      danger: false,
      path: '/home/todo-list',
    },
    {
      icon: '线',
      img: 'clue',
      title: '线索',
      danger: true,
      path: '/home/clue',
    },
    {
      icon: '商',
      img: 'businessOpportunities',
      title: '商机',
      danger: true,
      path: '/home/business-opportunities',
    },
    {
      icon: '合',
      img: 'contract',
      title: '合同管理',
      danger: false,
      path: '/home/contract',
    },
    {
      icon: '采',
      img: 'purchase',
      title: '采购',
      danger: false,
      path: '/home/purchase',
    },
    {
      icon: '客',
      img: 'customer',
      title: '客户',
      danger: true,
      showChildren: true,
      children: [
        {
          img: 'customerInfo',
          title: '客户信息',
          danger: false,
          path: '/home/customer',
        },
        {
          img: 'contact',
          title: '联系人',
          danger: false,
          path: '/home/contact',
        },
      ],
    },
  ])
  return {
    topMenus,
    topUserInfo,
    leftMenus,
  }
}
