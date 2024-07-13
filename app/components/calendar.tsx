"use client"
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';

export function MyDatePicker() {
  const [selected, setSelected] = useState<Date | undefined>(undefined);
  return <DayPicker mode="single" selected={selected} onSelect={setSelected} />;
}
