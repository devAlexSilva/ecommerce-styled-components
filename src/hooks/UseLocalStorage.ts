'use client'

import { useEffect, useState } from "react";

export function UseLocalStorage<T>(item: string, initialValue: T) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    if(typeof window === 'undefined') return;

    const value = localStorage.getItem(item)
    value && setValue(JSON.parse(value))
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
