import { DependencyList, useEffect, useRef, useCallback } from 'react'

export const useDebounce = (
  doAfterDebounce: () => void,
  milliseconds = 0,
  dependencyList: DependencyList = []
) => {
  const isReady = useRef<boolean | null>(false)
  const timeoutFn = useRef<ReturnType<typeof setTimeout>>()
  const callbackFn = useRef(doAfterDebounce)

  const performDebounce = useCallback(() => {
    isReady.current = false
    timeoutFn.current && clearTimeout(timeoutFn.current)

    timeoutFn.current = setTimeout(() => {
      isReady.current = true
      callbackFn.current()
    }, milliseconds)
  }, [milliseconds])

  // Update callback function ref when function changes
  useEffect(() => {
    callbackFn.current = doAfterDebounce
  }, [doAfterDebounce])

  // Perform on mount, clear on unmount
  useEffect(() => {
    performDebounce()

    return () => {
      isReady.current = null
      timeoutFn.current && clearTimeout(timeoutFn.current)
    }
  }, [milliseconds, performDebounce])

  useEffect(performDebounce, [performDebounce, ...dependencyList])
}
