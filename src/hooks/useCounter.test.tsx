import { act, renderHook } from "@testing-library/react"
import { useCounter } from "./useCounter"

describe('useCounterHook',()=>{
  test('render initial count correctly',()=>{
    const {result} = renderHook(useCounter)
    expect(result.current.count).toBe(0)
  })
  test('should accept and render count correctly',()=>{
    const {result} = renderHook(useCounter,{
      initialProps:{
        initialCount:10
      }
    })
    expect(result.current.count).toBe(10)
  })

  test('increment the count',()=>{
    const {result} = renderHook(useCounter)
    act(()=>result.current.increment())
    expect(result.current.count).toBe(1)    

  })
  test('decrement the count',()=>{
    const {result} = renderHook(useCounter)
    act(()=>result.current.decrement())
    expect(result.current.count).toBe(-1)    

  })
})