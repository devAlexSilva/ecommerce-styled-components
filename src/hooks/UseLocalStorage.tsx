'use client'

import { useEffect, useState } from "react";


export function UseLocalStorage<T>(item: string, initialValue: T) {
  const [value, setValue] = useState(initialValue)
  
    const updateLocalStorage = (newValue: T) => {
      setValue(newValue)
      localStorage.setItem(item, JSON.stringify(newValue))
    }
  
  if(typeof window === 'undefined') return {
    value,
    updateLocalStorage
  }
  
  useEffect(() => {
    const currentValue = localStorage.getItem(item)
    currentValue && setValue(JSON.parse(currentValue))
  }, [window])

  return {
    value,
    updateLocalStorage
  }
}
