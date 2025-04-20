// 创建一个缓存对象
const iconCache = new Map<string, Component>()

export function useSvgIcons() {
  //使用vite的glob导入功能预加载所有svg组件
  const svgModules = import.meta.glob('../components/svgs/*.vue')
  //加载svg组件的函数
  const loadIcon = (name: string): Component => {
    const iconName = `Icon${name.charAt(0).toUpperCase() + name.slice(1)}`

    //检查缓存
    if (iconCache.has(iconName)) {
      return iconCache.get(iconName)
    }

    const path = `../components/svgs/${iconName}.vue`
    if (path in svgModules) {
      //创建异步组件并缓存
      //   const asyncComponent = defineAsyncComponent({
      //     loader: () => import(path),
      //     onError: (error: Error, retry: () => void, fail: () => void) => {
      //       console.error(`Error loading icon component ${iconName}:`, error)
      //       fail()
      //     },
      //   })
      const asyncComponent = defineAsyncComponent(svgModules[path])
      iconCache.set(iconName, asyncComponent)
      return asyncComponent
    }
    return null
  }

  return {
    loadIcon,
  }
}
