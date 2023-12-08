export interface FunctionTool<
    T extends Record<string, unknown> = Record<string, unknown>,
    U = unknown,
> {
    execute(args: T): Promise<U>;
}
