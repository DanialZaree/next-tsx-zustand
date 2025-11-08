'use client';

import { useAboutStore } from "@/store/about";
import { useEffect } from "react";

export default function About() {
    const { year, num } = useAboutStore();
    function changeHandler(e:number){
        useAboutStore.setState({year:e})
    }

    const Num = useEffect(() => {
        const random = Math.random();
        useAboutStore.setState({num: random})
    }, [year])
    return(
        <>
        year: {year}
        <input
            className="border-2 border-amber-50"
            type="number"
            onChange={e => changeHandler(Number(e.target.value))}
        />
        <p className="text-amber-100">${num}</p>
        </>
    )
}