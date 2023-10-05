import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../App'

export const CompA = () => {
    let num = useContext(Context)
    let [val, setVal] = useState(num);

    useEffect(() => {
        setVal(() => num)
    }, [num])

    return <>
        <input
            value={val}
            onChange={newVal => setVal(() => newVal.target.value)}
        />
    </>
}