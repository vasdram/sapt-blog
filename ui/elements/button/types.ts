import React from "react"

export type TButton = {
    className?: string,
    isGreen?: boolean, 
    children: React.ReactNode,
    onClick?: () => void
}