interface User {
  id: string
  name: string
  email: string
  role: string
}
export function useUserList() {
  const userList = ref<User[]>([])

  return {
    userList,
  }
}
