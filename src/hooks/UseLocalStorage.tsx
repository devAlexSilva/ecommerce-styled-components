'use client'
import { useEffect, useState } from "react";

export function UseLocalStorage<T>(item: string, initialValue: T) {
  const [value, setValue] = useState(initialValue)

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue)
    localStorage.setItem(item, JSON.stringify(newValue))
  }

  useEffect(() => {
    const currentValue = localStorage.getItem(item)
    currentValue && setValue(JSON.parse(currentValue))
  }, [item])

  if (typeof window === 'undefined') return {
    value,
    updateLocalStorage
  }

  return {
    value,
    updateLocalStorage
  }
}
