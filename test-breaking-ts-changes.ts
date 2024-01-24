type NestedAssignable<T, F extends T> = never;

type NoBreakingChanges = NestedAssignable<
  Pick<typeof import("./lib/index"), keyof typeof import("./node_modules/alt-test-bump")>,
  typeof import("./node_modules/alt-test-bump")
>;
