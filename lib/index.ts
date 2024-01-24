export function test1Me(name:string, age?: number) {
    localOnly(name, age)
}

export function test2Me(name:string, age?: number, asd?: string) {
    localOnly(name, age)
}

export const TEST_VARIABLE = 322

export const TEST_VARIABLqqwE = 322

type ARG = string | number | null | undefined | string[] | number[]
function localOnly(...args: ARG []){
    console.log(args.filter(Boolean).join(', '))
}
