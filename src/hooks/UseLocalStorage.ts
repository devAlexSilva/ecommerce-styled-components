'use client'

import { SetStateAction, useState } from "react";

export function UseLocalStorage<T extends SetStateAction<string>>(item: string) {
  if(!localStorage.getItem(item)) localStorage.setItem(item, '0');
  
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(item) ?? ''))

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue)
    localStorage.setItem(item, JSON.stringify(value))
  }

  return {
    value,
    updateLocalStorage
  }
}
