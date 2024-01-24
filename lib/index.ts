export function testMe(name:string, age?: number) {
    localOnly(name, age)
}

export const TEST_VARIABLE = '322'

type ARG = string | number | null | undefined | string[] | number[]
function localOnly(...args: ARG []){
    console.log(args.filter(Boolean).join(', '))
}
