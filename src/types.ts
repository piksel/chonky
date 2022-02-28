import React from 'react'

export type StateTuple<S> = [S, React.Dispatch<React.SetStateAction<S>>]