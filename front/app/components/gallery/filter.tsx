'use client';

import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import DualRangeSlider from "../ui/DualRangeSlider";

export type FilterD =  {
    id: number;
    name: string;
    type: "list" | "range" | "boolean";
    values?: string[] | number[]; //options available for list filters
    min?: number;
    max?: number;
    options?: string[];
    multiple?: boolean; //for multiple list
    style?: "select" | "list" | "capsules";
} 




export type FilterSelected = {
    name: string;
    value: string;
    id: number;
}

export type SelectedFilters = Record<number, string[]>; // filter ID -> selected values

function useFilterParam(filterName: string) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const param = filterName;

  const values = searchParams.getAll(param);

  function setValues(nextValues: string[]) {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(param);
    nextValues.forEach((value) => params.append(param, value));
    params.set("page", "1");

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return { values, setValues };
}

export function FilterList({filter}: {filter: FilterD}) {
    // const [selected, setSelected] = useState<string[]>([]);
    const { values, setValues } = useFilterParam(filter.name.toString());
    const options = Array.isArray(filter.options) ? filter.options : [];
    const handleSelect = (value: string) => {
        if (filter.multiple) {
            if (values.includes(value)) {
                setValues(values.filter((v) => v !== value));
            } else {
                setValues([...values, value]);
            }
        } else 
            setValues([value]);
    }
    return (<div className="flex flex-col gap-2">
        {
            options.map((value) => {
                return (<div key={value.toString()} className="flex items-center gap-2 text-sm">
                    {
                    <button 
                        className={clsx("w-full rounded-lg bg-gray-100 py-1 px-4 text-left", values?.includes(value) && "bg-primary text-white")}
                        onClick={() => handleSelect(value)}>
                        {value}
                    </button>
                    }
                </div>)
            })
        }
            </div>)
}

export function FilterCapsules({filter}: {filter: FilterD}) {
    let options: string[] = Array.isArray(filter.options) ? filter.options : [];

    const { values, setValues } = useFilterParam(filter.name.toString());
    const handleSelect = (value: string) => {
        if (filter.multiple) {
            if (values.includes(value)) {
                setValues(values.filter((v) => v !== value));
            } else {
                setValues([...values, value]);
            }
        } else 
            setValues([value]);
    }
    return (<div className="flex flex-wrap gap-2">
            {
                options.map((value) => {
                    return (<div key={value.toString()} className="flex items-center gap-2 text-sm">
                        <button className={clsx("rounded-full bg-gray-100 py-1 px-4 text-left", values?.includes(value) && "bg-primary text-white")} onClick={() => handleSelect(value)}>
                            {value}
                        </button>
                    </div>)
                })
            }
            </div>)
}

export function FilterRange({ filter }: { filter: FilterD }) {

  const min = filter.min ?? 0;
  const max = filter.max ?? 1000;
  
  const { values, setValues } = useFilterParam(filter.name.toString());
  const { values:valuesRange, setValues:setValuesRange } = useFilterParam(filter.name.toString()+'range');
    const urlValue = values[0];
    let ranges = urlValue?.split("-") ?? [min,max];
    let start = Number(ranges[0]);
    let end = Number(ranges[1]);
    const [minValue, setMinValue] = useState(min);
    const [maxValue, setMaxValue] = useState(max);


  function commit(min:number, max:number) {
    setValues([`${min.toString()}-${max.toString()}`]);
    // setValues([min]);
  }

  function handleRange(newStart: number, newEnd:number){
    const clamp = (value: number, lower: number, upper: number) =>
      Math.min(Math.max(value, lower), upper);
    const nextMin = clamp(newStart, min, max - 1);
    const nextMax = clamp(newEnd, nextMin + 1, max);
    const nextStart = clamp(start, nextMin, nextMax - 1);
    const nextEnd = clamp(end, nextStart + 1, nextMax);

    setMinValue(nextMin);
    setMaxValue(nextMax);
    setValues([`${nextStart}-${nextEnd}`]);

  }

  return (
    <div className="flex flex-col">
        <div className="flex gap-2 justify-center align-center">
            <input type="number" className="w-full px-3 py-2 border border-gray-300 
            rounded-lg focus:outline-none focus:ring-2 
            focus:ring-[#D4516A]" onChange={e =>handleRange(Number(e.target.value),maxValue)} value={minValue} ></input>
            <p className="mx-auto">-</p>
            <input type="number" className="w-full px-3 py-2 border 
            border-gray-300 rounded-lg focus:outline-none focus:ring-2 
            focus:ring-[#D4516A]" onChange={e =>handleRange(minValue,Number(e.target.value))} value={maxValue}></input>
        </div>
        <DualRangeSlider min={minValue} max={maxValue} step={1} onChange={commit} start={start} end={end}></DualRangeSlider>
    </div>
    
  );
}

export function FilterInput({filter}: {filter: FilterD;}) {
    let inputElement;
    switch(filter.type) {
        case "list":
            inputElement = filter.style !== "list" ? <FilterCapsules filter={filter}/> : <FilterList filter={filter}/>;
            break;
        case 'range':
            inputElement = <FilterRange filter={filter}/>;
            break;
        default:
            inputElement = <div>Unsupported filter type</div>;
            break;
    }
    return (<div className="flex flex-col gap-2">
                <label htmlFor={`filter-${filter.id}`} className="text-xs font-bold text-gray-700">{filter.name}</label>    
                {inputElement}
            </div>)
}

export default function Filter({ className }: { className?: string; }) {
    const searchParams = useSearchParams();
    let filters: FilterD[] = [
        {id: 1, name: "Categoría", type:"list", options: ["Muebles", "Decoración", "Accesorios"], style: "list", values: []},
        {id: 2, name: "Precio base", type:"range", min: 0, max: 1000, values: [500]},
        {id: 3, name: "Ocasión", type:"list", options: ["Navidad", "Año Nuevo", "Cumpleaños"], values: [], multiple: true},
    ];
    filters.forEach((filter) => {
        const paramValue = searchParams.getAll(filter.name.toLowerCase()) ?? [];
        filter.values = paramValue;
    })
    

    return (<div className={` ${className || ''}`}> 
                <div className="rounded-3xl p-6 shadow-lg sticky top-20 space-y-6  gap-4 p-6 bg-white  shadow-md">
                    <div className="flex justify-between">
                        <h3 className="text-xl font-bold text-gray-800">Filters</h3>
                        <button className="text-primary text-xs my-auto cursor-pointer" type="button"> Borrar filtros</button>
                    </div>
                    {filters.map((filter) => {
                        return (<FilterInput filter={filter} key={filter.id}></FilterInput>)
                    })}
                </div>
            </div>)
}