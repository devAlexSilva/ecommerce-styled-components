'use client'

import { useEffect, useState } from "react";

export function UseLocalStorage<T>(item: string, initialValue: T) {
  const [value, setValue] = useState(initialValue)
  
  useEffect(() => {
    if(typeof window === 'undefined') return

    const currentValue = localStorage.getItem(item)
    currentValue && setValue(JSON.parse(currentValue))
  }, [window])

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue)
    localStorage.setItem(item, JSON.stringify(newValue))
  }

  return {
    value,
    updateLocalStorage
  }
}
