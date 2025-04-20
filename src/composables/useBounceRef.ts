/**
 * This function creates a custom ref with a bounce effect.
 * @param value - The initial value of the ref.
 * @param delay - The delay in milliseconds before the ref updates.
 * @returns A custom ref with a bounce effect.
 */
export function useBounceRef<T extends string>(value: T, delay = 200) {
  let timeout: NodeJS.Timeout
  return {
    get value() {
      return value
    },
    set value(newValue: T) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        value = newValue
      }, delay)
    },
  }
}
