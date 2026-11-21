// components/DualRangeSlider.tsx
'use client';

import { useEffect, useState } from 'react';

interface DualRangeSliderProps {
  min: number;
  max: number;
  step?: number;
  onChange: (minVal: number, maxVal: number) => void;
  start?: number;
  end?:number;
  // onPointerUp: (val) => void;
  // onKeyUp: (minVal: number, maxVal: number) => void;
}

export default function DualRangeSlider({ min, max, step = 1, onChange, start=0, end=0 }: DualRangeSliderProps) {
  console.log("entra")
  console.log(start,end)
  const [minVal, setMinVal] = useState( start);
  const [maxVal, setMaxVal] = useState( end);

  useEffect(() => {
    const nextMin = Math.min(Math.max(start, min), max - step);
    const nextMax = Math.min(Math.max(end, nextMin + step), max);
    setMinVal(nextMin);
    setMaxVal(nextMax);
  }, [start, end, min, max, step]);

  const handleMinChange = (val: string, send: boolean=false) => {
    const value = Math.min(Number(val), maxVal - step);
    setMinVal(value);
    if(send)
      onChange(value, maxVal);
  };

  const handleMaxChange = (val: string, send: boolean=false) => {
    const value = Math.max(Number(val), minVal + step);
    setMaxVal(value);
    if(send)
      onChange(minVal, value);
  };

  // Calculate percentage positions for the active colored track between thumbs
  const minPercent = ((minVal - min) / (max - min)) * 100;
  const maxPercent = ((maxVal - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">

      <div className="relative flex items-center h-6">
        {/* Background Track */}
        <div className="absolute w-full h-2 bg-gray-200 rounded-lg pointer-events-none" />

        {/* Active Range Highlight Track */}
        <div
          className="absolute h-2 bg-primary rounded-lg pointer-events-none"
          style={{
            left: `${minPercent}%`,
            right: `${100 - maxPercent}%`,
          }}
        />

        {/* Min Range Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minVal}
          onChange={(event) => handleMinChange(event.currentTarget.value, false)}
          onPointerUp={(event) => handleMinChange(event.currentTarget.value, true)}
          onKeyUp={(event) => handleMinChange(event.currentTarget.value, true)}
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none"
        />

        {/* Max Range Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxVal}
          onChange={(event)=>handleMaxChange(event.currentTarget.value, false)}
          onPointerUp={(event) => handleMaxChange(event.currentTarget.value, true)}
          onKeyUp={(event) => handleMaxChange(event.currentTarget.value, true)}
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none"
        />
      </div>
      <div className="flex justify-between text-sm font-medium text-gray-700">
        <span>${min}</span>
        <span className='text-xs'> ${minVal} - ${maxVal}</span>
        <span>${max}</span>
      </div>
    </div>
  );
}