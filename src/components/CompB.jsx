import React, { useContext } from 'react'
import { Context } from '../App'

export const CompB = () => {
    let num = useContext(Context)
    return <>
        {num}
    </>
}