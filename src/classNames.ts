
export type ClassEntry = string | false | undefined | null;

/** Really simple classNames wrapper that takes a list of classes and combines them
 * 
 * @example
 * <div classNames={classNames('cool-component', state.isEnabled && 'enabled')} />
 */
export const classNames = (...classEntries: ClassEntry[]): string =>
    classEntries.filter(ce => !!ce).join(' ')

export const addClassNames = (baseEntries: ClassEntry[] | undefined, ...additionalEntries: ClassEntry[]): string =>
    classNames(...baseEntries ? [...baseEntries, ...additionalEntries] : additionalEntries);