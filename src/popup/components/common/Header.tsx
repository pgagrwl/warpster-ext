import React from 'react'

export default function Header({ title }: { title: string }) {
    return (
        <div className=' text-2xl font-semibold font-mono'>{title}</div>
    )
}
