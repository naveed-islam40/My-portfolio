'use client'
import { useEffect } from "react"
import { animationPageIn } from "./utils/animation"

export default function Template({ children }) {
    useEffect(()=>{
        animationPageIn()
    },[])
    return (
        <>
            <div
                id="banner1"
                className="min-h-screen bg-teal-900 z-50 fixed top-0 left-0 w-1/4"
            />
            <div
                id="banner2"
                className="min-h-screen bg-teal-900 z-50 fixed top-0 left-1/4 w-1/4"
            />
            <div
                id="banner3"
                className="min-h-screen bg-teal-900 z-50 fixed top-0 left-2/4 w-1/4"
            />
            <div
                id="banner4"
                className="min-h-screen bg-teal-900 z-50 fixed top-0 left-3/4 w-1/4"
            />
            {children}
        </>
    )
}