import React, { CSSProperties } from 'react'
import { ClassEntry } from './classNames'

export type StateTuple<S> = [S, React.Dispatch<React.SetStateAction<S>>]

export interface CommonProps {
    style?: CSSProperties,
    classNames?: ClassEntry[]
}

// export type FCWithChildren<P, C> = Omit<React.FC<P>, 'children'> & {children: C}
export type FCWithChildren<P, C> = React.FC<P & {children: C}>