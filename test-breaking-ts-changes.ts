type A = Pick<typeof import("./lib/index"), keyof typeof import("./node_modules/alt-test-bump")>
type B = typeof import("./node_modules/alt-test-bump")

const G:B = ({} as A)

