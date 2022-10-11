
// export type ColorValue = 

export type ColorValue = 
    'primary' | 'green' | 'red'    | 
    'yellow'  | 'blue'  | 'orange' | 'mint' |
    'pink'    | 'bone'  | 'gray'   | ColorValueAlias;

export type ColorValueAlias = 'danger' | 'warning' | 'success' | 'info' |
    'grey' | 'secondary' | 'ui';

export const SpecialColors: ColorValue[] = [
    'primary',
    'bone',
]

export const ColorValues: ColorValue[] = [
    'primary',
    'green',
    'red',
    'yellow',
    'blue',
    'orange',
    'mint',
    'pink',
    'gray',
    'bone'
];

export const ColorAliases: Partial<Record<ColorValue, ColorValueAlias[]>> = {
    green: ['success'],
    red: ['danger'],
    yellow: ['warning'],
    blue: ['info'],
    gray: ['grey'],
    bone: ['secondary', 'ui'],
};