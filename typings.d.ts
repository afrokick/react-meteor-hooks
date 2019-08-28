export interface TrackerFun<Result> {
    (): Result;
}

/**
 * Runs a function inside Tracker.autorun and can return reactive data.
 */
export declare function useTracker<Result extends any>(trackerFun: TrackerFun<Result>, deps?: any[]): Result;

/**
 * Subscribes to a publication and returns a reactive "loading" var.
 */
export declare function useSubscription(pubName: string, ...subOpts: any[]): boolean;

export interface UseMethodOptions<Input extends any = any, Output extends Input = any> {
    transform?: (result: Input) => Output;
}

export interface MethodResult<Output = any, Args extends ReadonlyArray<any> = any> {
    isLoading: boolean;
    data?: Output;
    error?: any;
    call: (...args: Args) => Promise<Output>;
}

/**
 * Returns { isLoading, data, error, call } object to work with meteor methods.
 */
export declare function useMethod(methodName: string, options?: UseMethodOptions): MethodResult;

/**
 * Fetches a MongoCursor and returns the result.
 */
export declare function useMongoFetch(cursor: any, deps?: any[]): any;

/**
 * Returns the current logged in User or null.
 */
export declare function useCurrentUser<User extends any>(): User | null;

/**
 * Returns value of a Session var.
 */
export declare function useSession(sessionName: string): any;