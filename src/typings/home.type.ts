//顶部菜单栏item
export interface TopMenuItem {
  id: number
  title: string
  icon: string
  options: TopMenuOption[]
}

export interface TopMenuOption {
  id: number
  title: string
  path: string
}

//左侧菜单栏 item
export interface LeftMenuItem {
  icon: string
  title: string
  bedNumbers: number[]
  danger?: boolean
  path: string
  showChildren?: boolean
  children?: LeftMenuItem[]
}
