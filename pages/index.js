import React from 'react'
import Link from 'next/link'
import Hello from '../components/hello'
import Timer from '../components/timer'

export default () => (
    <div>
        Welcome to next.js!
        <div>Click <Link href="/about"><a>here</a></Link> to read more</div>
        <Hello name="Jaydson"></Hello>
        <Timer />
    </div>
)