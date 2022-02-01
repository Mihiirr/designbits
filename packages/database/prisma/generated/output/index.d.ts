
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: string
  /**
   * @zod.email({ message: "Invalid email address" })
   */
  email: string
  name: string | null
  profilePicture: string | null
  profileSlug: string
  UserStatus: UserStatus
  role: UserRole
  createdAt: Date
  modifiedAt: Date
}

/**
 * Model Follower
 * 
 */
export type Follower = {
  id: string
  followedByUserId: string
  followingUserId: string
}

/**
 * Model Post
 * 
 */
export type Post = {
  id: string
  title: string
  slug: string
  createdById: string
  createdAt: Date
  modifiedAt: Date
  sourceId: string
  previewUrl: string
  description: string
}

/**
 * Model VideoSource
 * 
 */
export type VideoSource = {
  id: string
  postId: string
  type: string
  url: string
}

/**
 * Model Source
 * 
 */
export type Source = {
  id: string
  name: string
  url: string
  imageSrc: string
}

/**
 * Model PostView
 * 
 */
export type PostView = {
  id: string
  viewedBy: string
  viewedAt: Date
}

/**
 * Model PostReaction
 * 
 */
export type PostReaction = {
  id: string
  reaction: PostReactionTypes
  reactedBy: string
  viewedAt: Date
}

/**
 * Model Session
 * 
 */
export type Session = {
  id: string
  createdAt: Date
  userId: string
  expirationDate: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const UserStatus: {
  INVITED: 'INVITED',
  ACTIVE: 'ACTIVE',
  DELETED: 'DELETED',
  BLOCKED: 'BLOCKED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const PostReactionTypes: {
  LIKE: 'LIKE',
  DISLIKE: 'DISLIKE'
};

export type PostReactionTypes = (typeof PostReactionTypes)[keyof typeof PostReactionTypes]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.follower`: Exposes CRUD operations for the **Follower** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Followers
    * const followers = await prisma.follower.findMany()
    * ```
    */
  get follower(): Prisma.FollowerDelegate<GlobalReject>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<GlobalReject>;

  /**
   * `prisma.videoSource`: Exposes CRUD operations for the **VideoSource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoSources
    * const videoSources = await prisma.videoSource.findMany()
    * ```
    */
  get videoSource(): Prisma.VideoSourceDelegate<GlobalReject>;

  /**
   * `prisma.source`: Exposes CRUD operations for the **Source** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sources
    * const sources = await prisma.source.findMany()
    * ```
    */
  get source(): Prisma.SourceDelegate<GlobalReject>;

  /**
   * `prisma.postView`: Exposes CRUD operations for the **PostView** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostViews
    * const postViews = await prisma.postView.findMany()
    * ```
    */
  get postView(): Prisma.PostViewDelegate<GlobalReject>;

  /**
   * `prisma.postReaction`: Exposes CRUD operations for the **PostReaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostReactions
    * const postReactions = await prisma.postReaction.findMany()
    * ```
    */
  get postReaction(): Prisma.PostReactionDelegate<GlobalReject>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.8.1
   * Query Engine version: 34df67547cf5598f5a6cd3eb45f14ee70c3fb86f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Follower: 'Follower',
    Post: 'Post',
    VideoSource: 'VideoSource',
    Source: 'Source',
    PostView: 'PostView',
    PostReaction: 'PostReaction',
    Session: 'Session'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    Post: number
    PostViews: number
    ReactedOnPosts: number
    Session: number
    Following: number
    FollowedBy: number
  }

  export type UserCountOutputTypeSelect = {
    Post?: boolean
    PostViews?: boolean
    ReactedOnPosts?: boolean
    Session?: boolean
    Following?: boolean
    FollowedBy?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UserCountOutputType ?UserCountOutputType [P]
  : 
     never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type PostCountOutputType
   */


  export type PostCountOutputType = {
    VideoSources: number
  }

  export type PostCountOutputTypeSelect = {
    VideoSources?: boolean
  }

  export type PostCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PostCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PostCountOutputType
    : S extends undefined
    ? never
    : S extends PostCountOutputTypeArgs
    ?'include' extends U
    ? PostCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PostCountOutputType ?PostCountOutputType [P]
  : 
     never
  } 
    : PostCountOutputType
  : PostCountOutputType




  // Custom InputTypes

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     * 
    **/
    select?: PostCountOutputTypeSelect | null
  }



  /**
   * Count Type SourceCountOutputType
   */


  export type SourceCountOutputType = {
    Post: number
  }

  export type SourceCountOutputTypeSelect = {
    Post?: boolean
  }

  export type SourceCountOutputTypeGetPayload<
    S extends boolean | null | undefined | SourceCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? SourceCountOutputType
    : S extends undefined
    ? never
    : S extends SourceCountOutputTypeArgs
    ?'include' extends U
    ? SourceCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof SourceCountOutputType ?SourceCountOutputType [P]
  : 
     never
  } 
    : SourceCountOutputType
  : SourceCountOutputType




  // Custom InputTypes

  /**
   * SourceCountOutputType without action
   */
  export type SourceCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SourceCountOutputType
     * 
    **/
    select?: SourceCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    profilePicture: string | null
    profileSlug: string | null
    UserStatus: UserStatus | null
    role: UserRole | null
    createdAt: Date | null
    modifiedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    profilePicture: string | null
    profileSlug: string | null
    UserStatus: UserStatus | null
    role: UserRole | null
    createdAt: Date | null
    modifiedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    profilePicture: number
    profileSlug: number
    UserStatus: number
    role: number
    createdAt: number
    modifiedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    profilePicture?: true
    profileSlug?: true
    UserStatus?: true
    role?: true
    createdAt?: true
    modifiedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    profilePicture?: true
    profileSlug?: true
    UserStatus?: true
    role?: true
    createdAt?: true
    modifiedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    profilePicture?: true
    profileSlug?: true
    UserStatus?: true
    role?: true
    createdAt?: true
    modifiedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    profilePicture: string | null
    profileSlug: string
    UserStatus: UserStatus
    role: UserRole
    createdAt: Date
    modifiedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
    profilePicture?: boolean
    profileSlug?: boolean
    UserStatus?: boolean
    role?: boolean
    createdAt?: boolean
    modifiedAt?: boolean
    Post?: boolean | PostFindManyArgs
    PostViews?: boolean | PostViewFindManyArgs
    ReactedOnPosts?: boolean | PostReactionFindManyArgs
    Session?: boolean | SessionFindManyArgs
    Following?: boolean | FollowerFindManyArgs
    FollowedBy?: boolean | FollowerFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    Post?: boolean | PostFindManyArgs
    PostViews?: boolean | PostViewFindManyArgs
    ReactedOnPosts?: boolean | PostReactionFindManyArgs
    Session?: boolean | SessionFindManyArgs
    Following?: boolean | FollowerFindManyArgs
    FollowedBy?: boolean | FollowerFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Post'
        ? Array < PostGetPayload<S['include'][P]>>  :
        P extends 'PostViews'
        ? Array < PostViewGetPayload<S['include'][P]>>  :
        P extends 'ReactedOnPosts'
        ? Array < PostReactionGetPayload<S['include'][P]>>  :
        P extends 'Session'
        ? Array < SessionGetPayload<S['include'][P]>>  :
        P extends 'Following'
        ? Array < FollowerGetPayload<S['include'][P]>>  :
        P extends 'FollowedBy'
        ? Array < FollowerGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'Post'
        ? Array < PostGetPayload<S['select'][P]>>  :
        P extends 'PostViews'
        ? Array < PostViewGetPayload<S['select'][P]>>  :
        P extends 'ReactedOnPosts'
        ? Array < PostReactionGetPayload<S['select'][P]>>  :
        P extends 'Session'
        ? Array < SessionGetPayload<S['select'][P]>>  :
        P extends 'Following'
        ? Array < FollowerGetPayload<S['select'][P]>>  :
        P extends 'FollowedBy'
        ? Array < FollowerGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Post<T extends PostFindManyArgs = {}>(args?: Subset<T, PostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>;

    PostViews<T extends PostViewFindManyArgs = {}>(args?: Subset<T, PostViewFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PostView>>, PrismaPromise<Array<PostViewGetPayload<T>>>>;

    ReactedOnPosts<T extends PostReactionFindManyArgs = {}>(args?: Subset<T, PostReactionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PostReaction>>, PrismaPromise<Array<PostReactionGetPayload<T>>>>;

    Session<T extends SessionFindManyArgs = {}>(args?: Subset<T, SessionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Session>>, PrismaPromise<Array<SessionGetPayload<T>>>>;

    Following<T extends FollowerFindManyArgs = {}>(args?: Subset<T, FollowerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Follower>>, PrismaPromise<Array<FollowerGetPayload<T>>>>;

    FollowedBy<T extends FollowerFindManyArgs = {}>(args?: Subset<T, FollowerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Follower>>, PrismaPromise<Array<FollowerGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Follower
   */


  export type AggregateFollower = {
    _count: FollowerCountAggregateOutputType | null
    _min: FollowerMinAggregateOutputType | null
    _max: FollowerMaxAggregateOutputType | null
  }

  export type FollowerMinAggregateOutputType = {
    id: string | null
    followedByUserId: string | null
    followingUserId: string | null
  }

  export type FollowerMaxAggregateOutputType = {
    id: string | null
    followedByUserId: string | null
    followingUserId: string | null
  }

  export type FollowerCountAggregateOutputType = {
    id: number
    followedByUserId: number
    followingUserId: number
    _all: number
  }


  export type FollowerMinAggregateInputType = {
    id?: true
    followedByUserId?: true
    followingUserId?: true
  }

  export type FollowerMaxAggregateInputType = {
    id?: true
    followedByUserId?: true
    followingUserId?: true
  }

  export type FollowerCountAggregateInputType = {
    id?: true
    followedByUserId?: true
    followingUserId?: true
    _all?: true
  }

  export type FollowerAggregateArgs = {
    /**
     * Filter which Follower to aggregate.
     * 
    **/
    where?: FollowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followers to fetch.
     * 
    **/
    orderBy?: Enumerable<FollowerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FollowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Followers
    **/
    _count?: true | FollowerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowerMaxAggregateInputType
  }

  export type GetFollowerAggregateType<T extends FollowerAggregateArgs> = {
        [P in keyof T & keyof AggregateFollower]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollower[P]>
      : GetScalarType<T[P], AggregateFollower[P]>
  }




  export type FollowerGroupByArgs = {
    where?: FollowerWhereInput
    orderBy?: Enumerable<FollowerOrderByWithAggregationInput>
    by: Array<FollowerScalarFieldEnum>
    having?: FollowerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowerCountAggregateInputType | true
    _min?: FollowerMinAggregateInputType
    _max?: FollowerMaxAggregateInputType
  }


  export type FollowerGroupByOutputType = {
    id: string
    followedByUserId: string
    followingUserId: string
    _count: FollowerCountAggregateOutputType | null
    _min: FollowerMinAggregateOutputType | null
    _max: FollowerMaxAggregateOutputType | null
  }

  type GetFollowerGroupByPayload<T extends FollowerGroupByArgs> = Promise<
    Array<
      PickArray<FollowerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowerGroupByOutputType[P]>
            : GetScalarType<T[P], FollowerGroupByOutputType[P]>
        }
      >
    >


  export type FollowerSelect = {
    id?: boolean
    followedByUserId?: boolean
    FollowingUser?: boolean | UserArgs
    followingUserId?: boolean
    Follower?: boolean | UserArgs
  }

  export type FollowerInclude = {
    FollowingUser?: boolean | UserArgs
    Follower?: boolean | UserArgs
  }

  export type FollowerGetPayload<
    S extends boolean | null | undefined | FollowerArgs,
    U = keyof S
      > = S extends true
        ? Follower
    : S extends undefined
    ? never
    : S extends FollowerArgs | FollowerFindManyArgs
    ?'include' extends U
    ? Follower  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'FollowingUser'
        ? UserGetPayload<S['include'][P]> :
        P extends 'Follower'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Follower ?Follower [P]
  : 
          P extends 'FollowingUser'
        ? UserGetPayload<S['select'][P]> :
        P extends 'Follower'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : Follower
  : Follower


  type FollowerCountArgs = Merge<
    Omit<FollowerFindManyArgs, 'select' | 'include'> & {
      select?: FollowerCountAggregateInputType | true
    }
  >

  export interface FollowerDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Follower that matches the filter.
     * @param {FollowerFindUniqueArgs} args - Arguments to find a Follower
     * @example
     * // Get one Follower
     * const follower = await prisma.follower.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FollowerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FollowerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Follower'> extends True ? CheckSelect<T, Prisma__FollowerClient<Follower>, Prisma__FollowerClient<FollowerGetPayload<T>>> : CheckSelect<T, Prisma__FollowerClient<Follower | null >, Prisma__FollowerClient<FollowerGetPayload<T> | null >>

    /**
     * Find the first Follower that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerFindFirstArgs} args - Arguments to find a Follower
     * @example
     * // Get one Follower
     * const follower = await prisma.follower.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FollowerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FollowerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Follower'> extends True ? CheckSelect<T, Prisma__FollowerClient<Follower>, Prisma__FollowerClient<FollowerGetPayload<T>>> : CheckSelect<T, Prisma__FollowerClient<Follower | null >, Prisma__FollowerClient<FollowerGetPayload<T> | null >>

    /**
     * Find zero or more Followers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Followers
     * const followers = await prisma.follower.findMany()
     * 
     * // Get first 10 Followers
     * const followers = await prisma.follower.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followerWithIdOnly = await prisma.follower.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FollowerFindManyArgs>(
      args?: SelectSubset<T, FollowerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Follower>>, PrismaPromise<Array<FollowerGetPayload<T>>>>

    /**
     * Create a Follower.
     * @param {FollowerCreateArgs} args - Arguments to create a Follower.
     * @example
     * // Create one Follower
     * const Follower = await prisma.follower.create({
     *   data: {
     *     // ... data to create a Follower
     *   }
     * })
     * 
    **/
    create<T extends FollowerCreateArgs>(
      args: SelectSubset<T, FollowerCreateArgs>
    ): CheckSelect<T, Prisma__FollowerClient<Follower>, Prisma__FollowerClient<FollowerGetPayload<T>>>

    /**
     * Create many Followers.
     *     @param {FollowerCreateManyArgs} args - Arguments to create many Followers.
     *     @example
     *     // Create many Followers
     *     const follower = await prisma.follower.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FollowerCreateManyArgs>(
      args?: SelectSubset<T, FollowerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Follower.
     * @param {FollowerDeleteArgs} args - Arguments to delete one Follower.
     * @example
     * // Delete one Follower
     * const Follower = await prisma.follower.delete({
     *   where: {
     *     // ... filter to delete one Follower
     *   }
     * })
     * 
    **/
    delete<T extends FollowerDeleteArgs>(
      args: SelectSubset<T, FollowerDeleteArgs>
    ): CheckSelect<T, Prisma__FollowerClient<Follower>, Prisma__FollowerClient<FollowerGetPayload<T>>>

    /**
     * Update one Follower.
     * @param {FollowerUpdateArgs} args - Arguments to update one Follower.
     * @example
     * // Update one Follower
     * const follower = await prisma.follower.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FollowerUpdateArgs>(
      args: SelectSubset<T, FollowerUpdateArgs>
    ): CheckSelect<T, Prisma__FollowerClient<Follower>, Prisma__FollowerClient<FollowerGetPayload<T>>>

    /**
     * Delete zero or more Followers.
     * @param {FollowerDeleteManyArgs} args - Arguments to filter Followers to delete.
     * @example
     * // Delete a few Followers
     * const { count } = await prisma.follower.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FollowerDeleteManyArgs>(
      args?: SelectSubset<T, FollowerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Followers
     * const follower = await prisma.follower.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FollowerUpdateManyArgs>(
      args: SelectSubset<T, FollowerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Follower.
     * @param {FollowerUpsertArgs} args - Arguments to update or create a Follower.
     * @example
     * // Update or create a Follower
     * const follower = await prisma.follower.upsert({
     *   create: {
     *     // ... data to create a Follower
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follower we want to update
     *   }
     * })
    **/
    upsert<T extends FollowerUpsertArgs>(
      args: SelectSubset<T, FollowerUpsertArgs>
    ): CheckSelect<T, Prisma__FollowerClient<Follower>, Prisma__FollowerClient<FollowerGetPayload<T>>>

    /**
     * Count the number of Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerCountArgs} args - Arguments to filter Followers to count.
     * @example
     * // Count the number of Followers
     * const count = await prisma.follower.count({
     *   where: {
     *     // ... the filter for the Followers we want to count
     *   }
     * })
    **/
    count<T extends FollowerCountArgs>(
      args?: Subset<T, FollowerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FollowerAggregateArgs>(args: Subset<T, FollowerAggregateArgs>): PrismaPromise<GetFollowerAggregateType<T>>

    /**
     * Group by Follower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FollowerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowerGroupByArgs['orderBy'] }
        : { orderBy?: FollowerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FollowerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowerGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Follower.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FollowerClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    FollowingUser<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Follower<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Follower findUnique
   */
  export type FollowerFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Follower
     * 
    **/
    select?: FollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerInclude | null
    /**
     * Throw an Error if a Follower can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Follower to fetch.
     * 
    **/
    where: FollowerWhereUniqueInput
  }


  /**
   * Follower findFirst
   */
  export type FollowerFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Follower
     * 
    **/
    select?: FollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerInclude | null
    /**
     * Throw an Error if a Follower can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Follower to fetch.
     * 
    **/
    where?: FollowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followers to fetch.
     * 
    **/
    orderBy?: Enumerable<FollowerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Followers.
     * 
    **/
    cursor?: FollowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Followers.
     * 
    **/
    distinct?: Enumerable<FollowerScalarFieldEnum>
  }


  /**
   * Follower findMany
   */
  export type FollowerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Follower
     * 
    **/
    select?: FollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerInclude | null
    /**
     * Filter, which Followers to fetch.
     * 
    **/
    where?: FollowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followers to fetch.
     * 
    **/
    orderBy?: Enumerable<FollowerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Followers.
     * 
    **/
    cursor?: FollowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FollowerScalarFieldEnum>
  }


  /**
   * Follower create
   */
  export type FollowerCreateArgs = {
    /**
     * Select specific fields to fetch from the Follower
     * 
    **/
    select?: FollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerInclude | null
    /**
     * The data needed to create a Follower.
     * 
    **/
    data: XOR<FollowerCreateInput, FollowerUncheckedCreateInput>
  }


  /**
   * Follower createMany
   */
  export type FollowerCreateManyArgs = {
    data: Enumerable<FollowerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Follower update
   */
  export type FollowerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Follower
     * 
    **/
    select?: FollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerInclude | null
    /**
     * The data needed to update a Follower.
     * 
    **/
    data: XOR<FollowerUpdateInput, FollowerUncheckedUpdateInput>
    /**
     * Choose, which Follower to update.
     * 
    **/
    where: FollowerWhereUniqueInput
  }


  /**
   * Follower updateMany
   */
  export type FollowerUpdateManyArgs = {
    data: XOR<FollowerUpdateManyMutationInput, FollowerUncheckedUpdateManyInput>
    where?: FollowerWhereInput
  }


  /**
   * Follower upsert
   */
  export type FollowerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Follower
     * 
    **/
    select?: FollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerInclude | null
    /**
     * The filter to search for the Follower to update in case it exists.
     * 
    **/
    where: FollowerWhereUniqueInput
    /**
     * In case the Follower found by the `where` argument doesn't exist, create a new Follower with this data.
     * 
    **/
    create: XOR<FollowerCreateInput, FollowerUncheckedCreateInput>
    /**
     * In case the Follower was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FollowerUpdateInput, FollowerUncheckedUpdateInput>
  }


  /**
   * Follower delete
   */
  export type FollowerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Follower
     * 
    **/
    select?: FollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerInclude | null
    /**
     * Filter which Follower to delete.
     * 
    **/
    where: FollowerWhereUniqueInput
  }


  /**
   * Follower deleteMany
   */
  export type FollowerDeleteManyArgs = {
    where?: FollowerWhereInput
  }


  /**
   * Follower without action
   */
  export type FollowerArgs = {
    /**
     * Select specific fields to fetch from the Follower
     * 
    **/
    select?: FollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FollowerInclude | null
  }



  /**
   * Model Post
   */


  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    createdById: string | null
    createdAt: Date | null
    modifiedAt: Date | null
    sourceId: string | null
    previewUrl: string | null
    description: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    createdById: string | null
    createdAt: Date | null
    modifiedAt: Date | null
    sourceId: string | null
    previewUrl: string | null
    description: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    createdById: number
    createdAt: number
    modifiedAt: number
    sourceId: number
    previewUrl: number
    description: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    createdById?: true
    createdAt?: true
    modifiedAt?: true
    sourceId?: true
    previewUrl?: true
    description?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    createdById?: true
    createdAt?: true
    modifiedAt?: true
    sourceId?: true
    previewUrl?: true
    description?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    createdById?: true
    createdAt?: true
    modifiedAt?: true
    sourceId?: true
    previewUrl?: true
    description?: true
    _all?: true
  }

  export type PostAggregateArgs = {
    /**
     * Filter which Post to aggregate.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs = {
    where?: PostWhereInput
    orderBy?: Enumerable<PostOrderByWithAggregationInput>
    by: Array<PostScalarFieldEnum>
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }


  export type PostGroupByOutputType = {
    id: string
    title: string
    slug: string
    createdById: string
    createdAt: Date
    modifiedAt: Date
    sourceId: string
    previewUrl: string
    description: string
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Promise<
    Array<
      PickArray<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect = {
    id?: boolean
    title?: boolean
    slug?: boolean
    createdById?: boolean
    createdAt?: boolean
    modifiedAt?: boolean
    CreatedBy?: boolean | UserArgs
    Source?: boolean | SourceArgs
    sourceId?: boolean
    previewUrl?: boolean
    description?: boolean
    VideoSources?: boolean | VideoSourceFindManyArgs
    _count?: boolean | PostCountOutputTypeArgs
  }

  export type PostInclude = {
    CreatedBy?: boolean | UserArgs
    Source?: boolean | SourceArgs
    VideoSources?: boolean | VideoSourceFindManyArgs
    _count?: boolean | PostCountOutputTypeArgs
  }

  export type PostGetPayload<
    S extends boolean | null | undefined | PostArgs,
    U = keyof S
      > = S extends true
        ? Post
    : S extends undefined
    ? never
    : S extends PostArgs | PostFindManyArgs
    ?'include' extends U
    ? Post  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'CreatedBy'
        ? UserGetPayload<S['include'][P]> :
        P extends 'Source'
        ? SourceGetPayload<S['include'][P]> :
        P extends 'VideoSources'
        ? Array < VideoSourceGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? PostCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Post ?Post [P]
  : 
          P extends 'CreatedBy'
        ? UserGetPayload<S['select'][P]> :
        P extends 'Source'
        ? SourceGetPayload<S['select'][P]> :
        P extends 'VideoSources'
        ? Array < VideoSourceGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? PostCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Post
  : Post


  type PostCountArgs = Merge<
    Omit<PostFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }
  >

  export interface PostDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Post'> extends True ? CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>> : CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Post'> extends True ? CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>> : CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs>(
      args?: SelectSubset<T, PostFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs>(
      args: SelectSubset<T, PostCreateArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs>(
      args?: SelectSubset<T, PostCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs>(
      args: SelectSubset<T, PostDeleteArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs>(
      args: SelectSubset<T, PostUpdateArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs>(
      args?: SelectSubset<T, PostDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs>(
      args: SelectSubset<T, PostUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs>(
      args: SelectSubset<T, PostUpsertArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    CreatedBy<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Source<T extends SourceArgs = {}>(args?: Subset<T, SourceArgs>): CheckSelect<T, Prisma__SourceClient<Source | null >, Prisma__SourceClient<SourceGetPayload<T> | null >>;

    VideoSources<T extends VideoSourceFindManyArgs = {}>(args?: Subset<T, VideoSourceFindManyArgs>): CheckSelect<T, PrismaPromise<Array<VideoSource>>, PrismaPromise<Array<VideoSourceGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Throw an Error if a Post can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post findFirst
   */
  export type PostFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Throw an Error if a Post can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     * 
    **/
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter, which Posts to fetch.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post create
   */
  export type PostCreateArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The data needed to create a Post.
     * 
    **/
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs = {
    data: Enumerable<PostCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The data needed to update a Post.
     * 
    **/
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs = {
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The filter to search for the Post to update in case it exists.
     * 
    **/
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     * 
    **/
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter which Post to delete.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs = {
    where?: PostWhereInput
  }


  /**
   * Post without action
   */
  export type PostArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
  }



  /**
   * Model VideoSource
   */


  export type AggregateVideoSource = {
    _count: VideoSourceCountAggregateOutputType | null
    _min: VideoSourceMinAggregateOutputType | null
    _max: VideoSourceMaxAggregateOutputType | null
  }

  export type VideoSourceMinAggregateOutputType = {
    id: string | null
    postId: string | null
    type: string | null
    url: string | null
  }

  export type VideoSourceMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    type: string | null
    url: string | null
  }

  export type VideoSourceCountAggregateOutputType = {
    id: number
    postId: number
    type: number
    url: number
    _all: number
  }


  export type VideoSourceMinAggregateInputType = {
    id?: true
    postId?: true
    type?: true
    url?: true
  }

  export type VideoSourceMaxAggregateInputType = {
    id?: true
    postId?: true
    type?: true
    url?: true
  }

  export type VideoSourceCountAggregateInputType = {
    id?: true
    postId?: true
    type?: true
    url?: true
    _all?: true
  }

  export type VideoSourceAggregateArgs = {
    /**
     * Filter which VideoSource to aggregate.
     * 
    **/
    where?: VideoSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoSources to fetch.
     * 
    **/
    orderBy?: Enumerable<VideoSourceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: VideoSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoSources from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoSources.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoSources
    **/
    _count?: true | VideoSourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoSourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoSourceMaxAggregateInputType
  }

  export type GetVideoSourceAggregateType<T extends VideoSourceAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoSource[P]>
      : GetScalarType<T[P], AggregateVideoSource[P]>
  }




  export type VideoSourceGroupByArgs = {
    where?: VideoSourceWhereInput
    orderBy?: Enumerable<VideoSourceOrderByWithAggregationInput>
    by: Array<VideoSourceScalarFieldEnum>
    having?: VideoSourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoSourceCountAggregateInputType | true
    _min?: VideoSourceMinAggregateInputType
    _max?: VideoSourceMaxAggregateInputType
  }


  export type VideoSourceGroupByOutputType = {
    id: string
    postId: string
    type: string
    url: string
    _count: VideoSourceCountAggregateOutputType | null
    _min: VideoSourceMinAggregateOutputType | null
    _max: VideoSourceMaxAggregateOutputType | null
  }

  type GetVideoSourceGroupByPayload<T extends VideoSourceGroupByArgs> = Promise<
    Array<
      PickArray<VideoSourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoSourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoSourceGroupByOutputType[P]>
            : GetScalarType<T[P], VideoSourceGroupByOutputType[P]>
        }
      >
    >


  export type VideoSourceSelect = {
    id?: boolean
    postId?: boolean
    type?: boolean
    url?: boolean
    Post?: boolean | PostArgs
  }

  export type VideoSourceInclude = {
    Post?: boolean | PostArgs
  }

  export type VideoSourceGetPayload<
    S extends boolean | null | undefined | VideoSourceArgs,
    U = keyof S
      > = S extends true
        ? VideoSource
    : S extends undefined
    ? never
    : S extends VideoSourceArgs | VideoSourceFindManyArgs
    ?'include' extends U
    ? VideoSource  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Post'
        ? PostGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof VideoSource ?VideoSource [P]
  : 
          P extends 'Post'
        ? PostGetPayload<S['select'][P]> : never
  } 
    : VideoSource
  : VideoSource


  type VideoSourceCountArgs = Merge<
    Omit<VideoSourceFindManyArgs, 'select' | 'include'> & {
      select?: VideoSourceCountAggregateInputType | true
    }
  >

  export interface VideoSourceDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one VideoSource that matches the filter.
     * @param {VideoSourceFindUniqueArgs} args - Arguments to find a VideoSource
     * @example
     * // Get one VideoSource
     * const videoSource = await prisma.videoSource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VideoSourceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VideoSourceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VideoSource'> extends True ? CheckSelect<T, Prisma__VideoSourceClient<VideoSource>, Prisma__VideoSourceClient<VideoSourceGetPayload<T>>> : CheckSelect<T, Prisma__VideoSourceClient<VideoSource | null >, Prisma__VideoSourceClient<VideoSourceGetPayload<T> | null >>

    /**
     * Find the first VideoSource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoSourceFindFirstArgs} args - Arguments to find a VideoSource
     * @example
     * // Get one VideoSource
     * const videoSource = await prisma.videoSource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VideoSourceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VideoSourceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VideoSource'> extends True ? CheckSelect<T, Prisma__VideoSourceClient<VideoSource>, Prisma__VideoSourceClient<VideoSourceGetPayload<T>>> : CheckSelect<T, Prisma__VideoSourceClient<VideoSource | null >, Prisma__VideoSourceClient<VideoSourceGetPayload<T> | null >>

    /**
     * Find zero or more VideoSources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoSourceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoSources
     * const videoSources = await prisma.videoSource.findMany()
     * 
     * // Get first 10 VideoSources
     * const videoSources = await prisma.videoSource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoSourceWithIdOnly = await prisma.videoSource.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VideoSourceFindManyArgs>(
      args?: SelectSubset<T, VideoSourceFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<VideoSource>>, PrismaPromise<Array<VideoSourceGetPayload<T>>>>

    /**
     * Create a VideoSource.
     * @param {VideoSourceCreateArgs} args - Arguments to create a VideoSource.
     * @example
     * // Create one VideoSource
     * const VideoSource = await prisma.videoSource.create({
     *   data: {
     *     // ... data to create a VideoSource
     *   }
     * })
     * 
    **/
    create<T extends VideoSourceCreateArgs>(
      args: SelectSubset<T, VideoSourceCreateArgs>
    ): CheckSelect<T, Prisma__VideoSourceClient<VideoSource>, Prisma__VideoSourceClient<VideoSourceGetPayload<T>>>

    /**
     * Create many VideoSources.
     *     @param {VideoSourceCreateManyArgs} args - Arguments to create many VideoSources.
     *     @example
     *     // Create many VideoSources
     *     const videoSource = await prisma.videoSource.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VideoSourceCreateManyArgs>(
      args?: SelectSubset<T, VideoSourceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a VideoSource.
     * @param {VideoSourceDeleteArgs} args - Arguments to delete one VideoSource.
     * @example
     * // Delete one VideoSource
     * const VideoSource = await prisma.videoSource.delete({
     *   where: {
     *     // ... filter to delete one VideoSource
     *   }
     * })
     * 
    **/
    delete<T extends VideoSourceDeleteArgs>(
      args: SelectSubset<T, VideoSourceDeleteArgs>
    ): CheckSelect<T, Prisma__VideoSourceClient<VideoSource>, Prisma__VideoSourceClient<VideoSourceGetPayload<T>>>

    /**
     * Update one VideoSource.
     * @param {VideoSourceUpdateArgs} args - Arguments to update one VideoSource.
     * @example
     * // Update one VideoSource
     * const videoSource = await prisma.videoSource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VideoSourceUpdateArgs>(
      args: SelectSubset<T, VideoSourceUpdateArgs>
    ): CheckSelect<T, Prisma__VideoSourceClient<VideoSource>, Prisma__VideoSourceClient<VideoSourceGetPayload<T>>>

    /**
     * Delete zero or more VideoSources.
     * @param {VideoSourceDeleteManyArgs} args - Arguments to filter VideoSources to delete.
     * @example
     * // Delete a few VideoSources
     * const { count } = await prisma.videoSource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VideoSourceDeleteManyArgs>(
      args?: SelectSubset<T, VideoSourceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoSourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoSources
     * const videoSource = await prisma.videoSource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VideoSourceUpdateManyArgs>(
      args: SelectSubset<T, VideoSourceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one VideoSource.
     * @param {VideoSourceUpsertArgs} args - Arguments to update or create a VideoSource.
     * @example
     * // Update or create a VideoSource
     * const videoSource = await prisma.videoSource.upsert({
     *   create: {
     *     // ... data to create a VideoSource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoSource we want to update
     *   }
     * })
    **/
    upsert<T extends VideoSourceUpsertArgs>(
      args: SelectSubset<T, VideoSourceUpsertArgs>
    ): CheckSelect<T, Prisma__VideoSourceClient<VideoSource>, Prisma__VideoSourceClient<VideoSourceGetPayload<T>>>

    /**
     * Count the number of VideoSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoSourceCountArgs} args - Arguments to filter VideoSources to count.
     * @example
     * // Count the number of VideoSources
     * const count = await prisma.videoSource.count({
     *   where: {
     *     // ... the filter for the VideoSources we want to count
     *   }
     * })
    **/
    count<T extends VideoSourceCountArgs>(
      args?: Subset<T, VideoSourceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoSourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoSourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideoSourceAggregateArgs>(args: Subset<T, VideoSourceAggregateArgs>): PrismaPromise<GetVideoSourceAggregateType<T>>

    /**
     * Group by VideoSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoSourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VideoSourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoSourceGroupByArgs['orderBy'] }
        : { orderBy?: VideoSourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VideoSourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoSourceGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoSource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VideoSourceClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Post<T extends PostArgs = {}>(args?: Subset<T, PostArgs>): CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * VideoSource findUnique
   */
  export type VideoSourceFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the VideoSource
     * 
    **/
    select?: VideoSourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoSourceInclude | null
    /**
     * Throw an Error if a VideoSource can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which VideoSource to fetch.
     * 
    **/
    where: VideoSourceWhereUniqueInput
  }


  /**
   * VideoSource findFirst
   */
  export type VideoSourceFindFirstArgs = {
    /**
     * Select specific fields to fetch from the VideoSource
     * 
    **/
    select?: VideoSourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoSourceInclude | null
    /**
     * Throw an Error if a VideoSource can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which VideoSource to fetch.
     * 
    **/
    where?: VideoSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoSources to fetch.
     * 
    **/
    orderBy?: Enumerable<VideoSourceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoSources.
     * 
    **/
    cursor?: VideoSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoSources from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoSources.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoSources.
     * 
    **/
    distinct?: Enumerable<VideoSourceScalarFieldEnum>
  }


  /**
   * VideoSource findMany
   */
  export type VideoSourceFindManyArgs = {
    /**
     * Select specific fields to fetch from the VideoSource
     * 
    **/
    select?: VideoSourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoSourceInclude | null
    /**
     * Filter, which VideoSources to fetch.
     * 
    **/
    where?: VideoSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoSources to fetch.
     * 
    **/
    orderBy?: Enumerable<VideoSourceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoSources.
     * 
    **/
    cursor?: VideoSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoSources from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoSources.
     * 
    **/
    skip?: number
    distinct?: Enumerable<VideoSourceScalarFieldEnum>
  }


  /**
   * VideoSource create
   */
  export type VideoSourceCreateArgs = {
    /**
     * Select specific fields to fetch from the VideoSource
     * 
    **/
    select?: VideoSourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoSourceInclude | null
    /**
     * The data needed to create a VideoSource.
     * 
    **/
    data: XOR<VideoSourceCreateInput, VideoSourceUncheckedCreateInput>
  }


  /**
   * VideoSource createMany
   */
  export type VideoSourceCreateManyArgs = {
    data: Enumerable<VideoSourceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * VideoSource update
   */
  export type VideoSourceUpdateArgs = {
    /**
     * Select specific fields to fetch from the VideoSource
     * 
    **/
    select?: VideoSourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoSourceInclude | null
    /**
     * The data needed to update a VideoSource.
     * 
    **/
    data: XOR<VideoSourceUpdateInput, VideoSourceUncheckedUpdateInput>
    /**
     * Choose, which VideoSource to update.
     * 
    **/
    where: VideoSourceWhereUniqueInput
  }


  /**
   * VideoSource updateMany
   */
  export type VideoSourceUpdateManyArgs = {
    data: XOR<VideoSourceUpdateManyMutationInput, VideoSourceUncheckedUpdateManyInput>
    where?: VideoSourceWhereInput
  }


  /**
   * VideoSource upsert
   */
  export type VideoSourceUpsertArgs = {
    /**
     * Select specific fields to fetch from the VideoSource
     * 
    **/
    select?: VideoSourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoSourceInclude | null
    /**
     * The filter to search for the VideoSource to update in case it exists.
     * 
    **/
    where: VideoSourceWhereUniqueInput
    /**
     * In case the VideoSource found by the `where` argument doesn't exist, create a new VideoSource with this data.
     * 
    **/
    create: XOR<VideoSourceCreateInput, VideoSourceUncheckedCreateInput>
    /**
     * In case the VideoSource was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<VideoSourceUpdateInput, VideoSourceUncheckedUpdateInput>
  }


  /**
   * VideoSource delete
   */
  export type VideoSourceDeleteArgs = {
    /**
     * Select specific fields to fetch from the VideoSource
     * 
    **/
    select?: VideoSourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoSourceInclude | null
    /**
     * Filter which VideoSource to delete.
     * 
    **/
    where: VideoSourceWhereUniqueInput
  }


  /**
   * VideoSource deleteMany
   */
  export type VideoSourceDeleteManyArgs = {
    where?: VideoSourceWhereInput
  }


  /**
   * VideoSource without action
   */
  export type VideoSourceArgs = {
    /**
     * Select specific fields to fetch from the VideoSource
     * 
    **/
    select?: VideoSourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoSourceInclude | null
  }



  /**
   * Model Source
   */


  export type AggregateSource = {
    _count: SourceCountAggregateOutputType | null
    _min: SourceMinAggregateOutputType | null
    _max: SourceMaxAggregateOutputType | null
  }

  export type SourceMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    imageSrc: string | null
  }

  export type SourceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    imageSrc: string | null
  }

  export type SourceCountAggregateOutputType = {
    id: number
    name: number
    url: number
    imageSrc: number
    _all: number
  }


  export type SourceMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    imageSrc?: true
  }

  export type SourceMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    imageSrc?: true
  }

  export type SourceCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    imageSrc?: true
    _all?: true
  }

  export type SourceAggregateArgs = {
    /**
     * Filter which Source to aggregate.
     * 
    **/
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     * 
    **/
    orderBy?: Enumerable<SourceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sources
    **/
    _count?: true | SourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourceMaxAggregateInputType
  }

  export type GetSourceAggregateType<T extends SourceAggregateArgs> = {
        [P in keyof T & keyof AggregateSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSource[P]>
      : GetScalarType<T[P], AggregateSource[P]>
  }




  export type SourceGroupByArgs = {
    where?: SourceWhereInput
    orderBy?: Enumerable<SourceOrderByWithAggregationInput>
    by: Array<SourceScalarFieldEnum>
    having?: SourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourceCountAggregateInputType | true
    _min?: SourceMinAggregateInputType
    _max?: SourceMaxAggregateInputType
  }


  export type SourceGroupByOutputType = {
    id: string
    name: string
    url: string
    imageSrc: string
    _count: SourceCountAggregateOutputType | null
    _min: SourceMinAggregateOutputType | null
    _max: SourceMaxAggregateOutputType | null
  }

  type GetSourceGroupByPayload<T extends SourceGroupByArgs> = Promise<
    Array<
      PickArray<SourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourceGroupByOutputType[P]>
            : GetScalarType<T[P], SourceGroupByOutputType[P]>
        }
      >
    >


  export type SourceSelect = {
    id?: boolean
    name?: boolean
    url?: boolean
    imageSrc?: boolean
    Post?: boolean | PostFindManyArgs
    _count?: boolean | SourceCountOutputTypeArgs
  }

  export type SourceInclude = {
    Post?: boolean | PostFindManyArgs
    _count?: boolean | SourceCountOutputTypeArgs
  }

  export type SourceGetPayload<
    S extends boolean | null | undefined | SourceArgs,
    U = keyof S
      > = S extends true
        ? Source
    : S extends undefined
    ? never
    : S extends SourceArgs | SourceFindManyArgs
    ?'include' extends U
    ? Source  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Post'
        ? Array < PostGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? SourceCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Source ?Source [P]
  : 
          P extends 'Post'
        ? Array < PostGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? SourceCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Source
  : Source


  type SourceCountArgs = Merge<
    Omit<SourceFindManyArgs, 'select' | 'include'> & {
      select?: SourceCountAggregateInputType | true
    }
  >

  export interface SourceDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Source that matches the filter.
     * @param {SourceFindUniqueArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SourceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SourceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Source'> extends True ? CheckSelect<T, Prisma__SourceClient<Source>, Prisma__SourceClient<SourceGetPayload<T>>> : CheckSelect<T, Prisma__SourceClient<Source | null >, Prisma__SourceClient<SourceGetPayload<T> | null >>

    /**
     * Find the first Source that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindFirstArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SourceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SourceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Source'> extends True ? CheckSelect<T, Prisma__SourceClient<Source>, Prisma__SourceClient<SourceGetPayload<T>>> : CheckSelect<T, Prisma__SourceClient<Source | null >, Prisma__SourceClient<SourceGetPayload<T> | null >>

    /**
     * Find zero or more Sources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sources
     * const sources = await prisma.source.findMany()
     * 
     * // Get first 10 Sources
     * const sources = await prisma.source.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourceWithIdOnly = await prisma.source.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SourceFindManyArgs>(
      args?: SelectSubset<T, SourceFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Source>>, PrismaPromise<Array<SourceGetPayload<T>>>>

    /**
     * Create a Source.
     * @param {SourceCreateArgs} args - Arguments to create a Source.
     * @example
     * // Create one Source
     * const Source = await prisma.source.create({
     *   data: {
     *     // ... data to create a Source
     *   }
     * })
     * 
    **/
    create<T extends SourceCreateArgs>(
      args: SelectSubset<T, SourceCreateArgs>
    ): CheckSelect<T, Prisma__SourceClient<Source>, Prisma__SourceClient<SourceGetPayload<T>>>

    /**
     * Create many Sources.
     *     @param {SourceCreateManyArgs} args - Arguments to create many Sources.
     *     @example
     *     // Create many Sources
     *     const source = await prisma.source.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SourceCreateManyArgs>(
      args?: SelectSubset<T, SourceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Source.
     * @param {SourceDeleteArgs} args - Arguments to delete one Source.
     * @example
     * // Delete one Source
     * const Source = await prisma.source.delete({
     *   where: {
     *     // ... filter to delete one Source
     *   }
     * })
     * 
    **/
    delete<T extends SourceDeleteArgs>(
      args: SelectSubset<T, SourceDeleteArgs>
    ): CheckSelect<T, Prisma__SourceClient<Source>, Prisma__SourceClient<SourceGetPayload<T>>>

    /**
     * Update one Source.
     * @param {SourceUpdateArgs} args - Arguments to update one Source.
     * @example
     * // Update one Source
     * const source = await prisma.source.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SourceUpdateArgs>(
      args: SelectSubset<T, SourceUpdateArgs>
    ): CheckSelect<T, Prisma__SourceClient<Source>, Prisma__SourceClient<SourceGetPayload<T>>>

    /**
     * Delete zero or more Sources.
     * @param {SourceDeleteManyArgs} args - Arguments to filter Sources to delete.
     * @example
     * // Delete a few Sources
     * const { count } = await prisma.source.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SourceDeleteManyArgs>(
      args?: SelectSubset<T, SourceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sources
     * const source = await prisma.source.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SourceUpdateManyArgs>(
      args: SelectSubset<T, SourceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Source.
     * @param {SourceUpsertArgs} args - Arguments to update or create a Source.
     * @example
     * // Update or create a Source
     * const source = await prisma.source.upsert({
     *   create: {
     *     // ... data to create a Source
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Source we want to update
     *   }
     * })
    **/
    upsert<T extends SourceUpsertArgs>(
      args: SelectSubset<T, SourceUpsertArgs>
    ): CheckSelect<T, Prisma__SourceClient<Source>, Prisma__SourceClient<SourceGetPayload<T>>>

    /**
     * Count the number of Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceCountArgs} args - Arguments to filter Sources to count.
     * @example
     * // Count the number of Sources
     * const count = await prisma.source.count({
     *   where: {
     *     // ... the filter for the Sources we want to count
     *   }
     * })
    **/
    count<T extends SourceCountArgs>(
      args?: Subset<T, SourceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Source.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SourceAggregateArgs>(args: Subset<T, SourceAggregateArgs>): PrismaPromise<GetSourceAggregateType<T>>

    /**
     * Group by Source.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SourceGroupByArgs['orderBy'] }
        : { orderBy?: SourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourceGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Source.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SourceClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Post<T extends PostFindManyArgs = {}>(args?: Subset<T, PostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Source findUnique
   */
  export type SourceFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Source
     * 
    **/
    select?: SourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SourceInclude | null
    /**
     * Throw an Error if a Source can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Source to fetch.
     * 
    **/
    where: SourceWhereUniqueInput
  }


  /**
   * Source findFirst
   */
  export type SourceFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Source
     * 
    **/
    select?: SourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SourceInclude | null
    /**
     * Throw an Error if a Source can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Source to fetch.
     * 
    **/
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     * 
    **/
    orderBy?: Enumerable<SourceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sources.
     * 
    **/
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sources.
     * 
    **/
    distinct?: Enumerable<SourceScalarFieldEnum>
  }


  /**
   * Source findMany
   */
  export type SourceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Source
     * 
    **/
    select?: SourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SourceInclude | null
    /**
     * Filter, which Sources to fetch.
     * 
    **/
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     * 
    **/
    orderBy?: Enumerable<SourceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sources.
     * 
    **/
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SourceScalarFieldEnum>
  }


  /**
   * Source create
   */
  export type SourceCreateArgs = {
    /**
     * Select specific fields to fetch from the Source
     * 
    **/
    select?: SourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SourceInclude | null
    /**
     * The data needed to create a Source.
     * 
    **/
    data: XOR<SourceCreateInput, SourceUncheckedCreateInput>
  }


  /**
   * Source createMany
   */
  export type SourceCreateManyArgs = {
    data: Enumerable<SourceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Source update
   */
  export type SourceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Source
     * 
    **/
    select?: SourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SourceInclude | null
    /**
     * The data needed to update a Source.
     * 
    **/
    data: XOR<SourceUpdateInput, SourceUncheckedUpdateInput>
    /**
     * Choose, which Source to update.
     * 
    **/
    where: SourceWhereUniqueInput
  }


  /**
   * Source updateMany
   */
  export type SourceUpdateManyArgs = {
    data: XOR<SourceUpdateManyMutationInput, SourceUncheckedUpdateManyInput>
    where?: SourceWhereInput
  }


  /**
   * Source upsert
   */
  export type SourceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Source
     * 
    **/
    select?: SourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SourceInclude | null
    /**
     * The filter to search for the Source to update in case it exists.
     * 
    **/
    where: SourceWhereUniqueInput
    /**
     * In case the Source found by the `where` argument doesn't exist, create a new Source with this data.
     * 
    **/
    create: XOR<SourceCreateInput, SourceUncheckedCreateInput>
    /**
     * In case the Source was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SourceUpdateInput, SourceUncheckedUpdateInput>
  }


  /**
   * Source delete
   */
  export type SourceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Source
     * 
    **/
    select?: SourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SourceInclude | null
    /**
     * Filter which Source to delete.
     * 
    **/
    where: SourceWhereUniqueInput
  }


  /**
   * Source deleteMany
   */
  export type SourceDeleteManyArgs = {
    where?: SourceWhereInput
  }


  /**
   * Source without action
   */
  export type SourceArgs = {
    /**
     * Select specific fields to fetch from the Source
     * 
    **/
    select?: SourceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SourceInclude | null
  }



  /**
   * Model PostView
   */


  export type AggregatePostView = {
    _count: PostViewCountAggregateOutputType | null
    _min: PostViewMinAggregateOutputType | null
    _max: PostViewMaxAggregateOutputType | null
  }

  export type PostViewMinAggregateOutputType = {
    id: string | null
    viewedBy: string | null
    viewedAt: Date | null
  }

  export type PostViewMaxAggregateOutputType = {
    id: string | null
    viewedBy: string | null
    viewedAt: Date | null
  }

  export type PostViewCountAggregateOutputType = {
    id: number
    viewedBy: number
    viewedAt: number
    _all: number
  }


  export type PostViewMinAggregateInputType = {
    id?: true
    viewedBy?: true
    viewedAt?: true
  }

  export type PostViewMaxAggregateInputType = {
    id?: true
    viewedBy?: true
    viewedAt?: true
  }

  export type PostViewCountAggregateInputType = {
    id?: true
    viewedBy?: true
    viewedAt?: true
    _all?: true
  }

  export type PostViewAggregateArgs = {
    /**
     * Filter which PostView to aggregate.
     * 
    **/
    where?: PostViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostViews to fetch.
     * 
    **/
    orderBy?: Enumerable<PostViewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PostViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostViews from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostViews.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostViews
    **/
    _count?: true | PostViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostViewMaxAggregateInputType
  }

  export type GetPostViewAggregateType<T extends PostViewAggregateArgs> = {
        [P in keyof T & keyof AggregatePostView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostView[P]>
      : GetScalarType<T[P], AggregatePostView[P]>
  }




  export type PostViewGroupByArgs = {
    where?: PostViewWhereInput
    orderBy?: Enumerable<PostViewOrderByWithAggregationInput>
    by: Array<PostViewScalarFieldEnum>
    having?: PostViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostViewCountAggregateInputType | true
    _min?: PostViewMinAggregateInputType
    _max?: PostViewMaxAggregateInputType
  }


  export type PostViewGroupByOutputType = {
    id: string
    viewedBy: string
    viewedAt: Date
    _count: PostViewCountAggregateOutputType | null
    _min: PostViewMinAggregateOutputType | null
    _max: PostViewMaxAggregateOutputType | null
  }

  type GetPostViewGroupByPayload<T extends PostViewGroupByArgs> = Promise<
    Array<
      PickArray<PostViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostViewGroupByOutputType[P]>
            : GetScalarType<T[P], PostViewGroupByOutputType[P]>
        }
      >
    >


  export type PostViewSelect = {
    id?: boolean
    viewedBy?: boolean
    viewedAt?: boolean
    ViewedBy?: boolean | UserArgs
  }

  export type PostViewInclude = {
    ViewedBy?: boolean | UserArgs
  }

  export type PostViewGetPayload<
    S extends boolean | null | undefined | PostViewArgs,
    U = keyof S
      > = S extends true
        ? PostView
    : S extends undefined
    ? never
    : S extends PostViewArgs | PostViewFindManyArgs
    ?'include' extends U
    ? PostView  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'ViewedBy'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PostView ?PostView [P]
  : 
          P extends 'ViewedBy'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : PostView
  : PostView


  type PostViewCountArgs = Merge<
    Omit<PostViewFindManyArgs, 'select' | 'include'> & {
      select?: PostViewCountAggregateInputType | true
    }
  >

  export interface PostViewDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PostView that matches the filter.
     * @param {PostViewFindUniqueArgs} args - Arguments to find a PostView
     * @example
     * // Get one PostView
     * const postView = await prisma.postView.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostViewFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostViewFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PostView'> extends True ? CheckSelect<T, Prisma__PostViewClient<PostView>, Prisma__PostViewClient<PostViewGetPayload<T>>> : CheckSelect<T, Prisma__PostViewClient<PostView | null >, Prisma__PostViewClient<PostViewGetPayload<T> | null >>

    /**
     * Find the first PostView that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewFindFirstArgs} args - Arguments to find a PostView
     * @example
     * // Get one PostView
     * const postView = await prisma.postView.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostViewFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostViewFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PostView'> extends True ? CheckSelect<T, Prisma__PostViewClient<PostView>, Prisma__PostViewClient<PostViewGetPayload<T>>> : CheckSelect<T, Prisma__PostViewClient<PostView | null >, Prisma__PostViewClient<PostViewGetPayload<T> | null >>

    /**
     * Find zero or more PostViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostViews
     * const postViews = await prisma.postView.findMany()
     * 
     * // Get first 10 PostViews
     * const postViews = await prisma.postView.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postViewWithIdOnly = await prisma.postView.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostViewFindManyArgs>(
      args?: SelectSubset<T, PostViewFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PostView>>, PrismaPromise<Array<PostViewGetPayload<T>>>>

    /**
     * Create a PostView.
     * @param {PostViewCreateArgs} args - Arguments to create a PostView.
     * @example
     * // Create one PostView
     * const PostView = await prisma.postView.create({
     *   data: {
     *     // ... data to create a PostView
     *   }
     * })
     * 
    **/
    create<T extends PostViewCreateArgs>(
      args: SelectSubset<T, PostViewCreateArgs>
    ): CheckSelect<T, Prisma__PostViewClient<PostView>, Prisma__PostViewClient<PostViewGetPayload<T>>>

    /**
     * Create many PostViews.
     *     @param {PostViewCreateManyArgs} args - Arguments to create many PostViews.
     *     @example
     *     // Create many PostViews
     *     const postView = await prisma.postView.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostViewCreateManyArgs>(
      args?: SelectSubset<T, PostViewCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PostView.
     * @param {PostViewDeleteArgs} args - Arguments to delete one PostView.
     * @example
     * // Delete one PostView
     * const PostView = await prisma.postView.delete({
     *   where: {
     *     // ... filter to delete one PostView
     *   }
     * })
     * 
    **/
    delete<T extends PostViewDeleteArgs>(
      args: SelectSubset<T, PostViewDeleteArgs>
    ): CheckSelect<T, Prisma__PostViewClient<PostView>, Prisma__PostViewClient<PostViewGetPayload<T>>>

    /**
     * Update one PostView.
     * @param {PostViewUpdateArgs} args - Arguments to update one PostView.
     * @example
     * // Update one PostView
     * const postView = await prisma.postView.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostViewUpdateArgs>(
      args: SelectSubset<T, PostViewUpdateArgs>
    ): CheckSelect<T, Prisma__PostViewClient<PostView>, Prisma__PostViewClient<PostViewGetPayload<T>>>

    /**
     * Delete zero or more PostViews.
     * @param {PostViewDeleteManyArgs} args - Arguments to filter PostViews to delete.
     * @example
     * // Delete a few PostViews
     * const { count } = await prisma.postView.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostViewDeleteManyArgs>(
      args?: SelectSubset<T, PostViewDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostViews
     * const postView = await prisma.postView.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostViewUpdateManyArgs>(
      args: SelectSubset<T, PostViewUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PostView.
     * @param {PostViewUpsertArgs} args - Arguments to update or create a PostView.
     * @example
     * // Update or create a PostView
     * const postView = await prisma.postView.upsert({
     *   create: {
     *     // ... data to create a PostView
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostView we want to update
     *   }
     * })
    **/
    upsert<T extends PostViewUpsertArgs>(
      args: SelectSubset<T, PostViewUpsertArgs>
    ): CheckSelect<T, Prisma__PostViewClient<PostView>, Prisma__PostViewClient<PostViewGetPayload<T>>>

    /**
     * Count the number of PostViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewCountArgs} args - Arguments to filter PostViews to count.
     * @example
     * // Count the number of PostViews
     * const count = await prisma.postView.count({
     *   where: {
     *     // ... the filter for the PostViews we want to count
     *   }
     * })
    **/
    count<T extends PostViewCountArgs>(
      args?: Subset<T, PostViewCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostViewAggregateArgs>(args: Subset<T, PostViewAggregateArgs>): PrismaPromise<GetPostViewAggregateType<T>>

    /**
     * Group by PostView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostViewGroupByArgs['orderBy'] }
        : { orderBy?: PostViewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostViewGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostView.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostViewClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    ViewedBy<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PostView findUnique
   */
  export type PostViewFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the PostView
     * 
    **/
    select?: PostViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostViewInclude | null
    /**
     * Throw an Error if a PostView can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PostView to fetch.
     * 
    **/
    where: PostViewWhereUniqueInput
  }


  /**
   * PostView findFirst
   */
  export type PostViewFindFirstArgs = {
    /**
     * Select specific fields to fetch from the PostView
     * 
    **/
    select?: PostViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostViewInclude | null
    /**
     * Throw an Error if a PostView can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PostView to fetch.
     * 
    **/
    where?: PostViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostViews to fetch.
     * 
    **/
    orderBy?: Enumerable<PostViewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostViews.
     * 
    **/
    cursor?: PostViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostViews from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostViews.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostViews.
     * 
    **/
    distinct?: Enumerable<PostViewScalarFieldEnum>
  }


  /**
   * PostView findMany
   */
  export type PostViewFindManyArgs = {
    /**
     * Select specific fields to fetch from the PostView
     * 
    **/
    select?: PostViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostViewInclude | null
    /**
     * Filter, which PostViews to fetch.
     * 
    **/
    where?: PostViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostViews to fetch.
     * 
    **/
    orderBy?: Enumerable<PostViewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostViews.
     * 
    **/
    cursor?: PostViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostViews from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostViews.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PostViewScalarFieldEnum>
  }


  /**
   * PostView create
   */
  export type PostViewCreateArgs = {
    /**
     * Select specific fields to fetch from the PostView
     * 
    **/
    select?: PostViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostViewInclude | null
    /**
     * The data needed to create a PostView.
     * 
    **/
    data: XOR<PostViewCreateInput, PostViewUncheckedCreateInput>
  }


  /**
   * PostView createMany
   */
  export type PostViewCreateManyArgs = {
    data: Enumerable<PostViewCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PostView update
   */
  export type PostViewUpdateArgs = {
    /**
     * Select specific fields to fetch from the PostView
     * 
    **/
    select?: PostViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostViewInclude | null
    /**
     * The data needed to update a PostView.
     * 
    **/
    data: XOR<PostViewUpdateInput, PostViewUncheckedUpdateInput>
    /**
     * Choose, which PostView to update.
     * 
    **/
    where: PostViewWhereUniqueInput
  }


  /**
   * PostView updateMany
   */
  export type PostViewUpdateManyArgs = {
    data: XOR<PostViewUpdateManyMutationInput, PostViewUncheckedUpdateManyInput>
    where?: PostViewWhereInput
  }


  /**
   * PostView upsert
   */
  export type PostViewUpsertArgs = {
    /**
     * Select specific fields to fetch from the PostView
     * 
    **/
    select?: PostViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostViewInclude | null
    /**
     * The filter to search for the PostView to update in case it exists.
     * 
    **/
    where: PostViewWhereUniqueInput
    /**
     * In case the PostView found by the `where` argument doesn't exist, create a new PostView with this data.
     * 
    **/
    create: XOR<PostViewCreateInput, PostViewUncheckedCreateInput>
    /**
     * In case the PostView was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PostViewUpdateInput, PostViewUncheckedUpdateInput>
  }


  /**
   * PostView delete
   */
  export type PostViewDeleteArgs = {
    /**
     * Select specific fields to fetch from the PostView
     * 
    **/
    select?: PostViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostViewInclude | null
    /**
     * Filter which PostView to delete.
     * 
    **/
    where: PostViewWhereUniqueInput
  }


  /**
   * PostView deleteMany
   */
  export type PostViewDeleteManyArgs = {
    where?: PostViewWhereInput
  }


  /**
   * PostView without action
   */
  export type PostViewArgs = {
    /**
     * Select specific fields to fetch from the PostView
     * 
    **/
    select?: PostViewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostViewInclude | null
  }



  /**
   * Model PostReaction
   */


  export type AggregatePostReaction = {
    _count: PostReactionCountAggregateOutputType | null
    _min: PostReactionMinAggregateOutputType | null
    _max: PostReactionMaxAggregateOutputType | null
  }

  export type PostReactionMinAggregateOutputType = {
    id: string | null
    reaction: PostReactionTypes | null
    reactedBy: string | null
    viewedAt: Date | null
  }

  export type PostReactionMaxAggregateOutputType = {
    id: string | null
    reaction: PostReactionTypes | null
    reactedBy: string | null
    viewedAt: Date | null
  }

  export type PostReactionCountAggregateOutputType = {
    id: number
    reaction: number
    reactedBy: number
    viewedAt: number
    _all: number
  }


  export type PostReactionMinAggregateInputType = {
    id?: true
    reaction?: true
    reactedBy?: true
    viewedAt?: true
  }

  export type PostReactionMaxAggregateInputType = {
    id?: true
    reaction?: true
    reactedBy?: true
    viewedAt?: true
  }

  export type PostReactionCountAggregateInputType = {
    id?: true
    reaction?: true
    reactedBy?: true
    viewedAt?: true
    _all?: true
  }

  export type PostReactionAggregateArgs = {
    /**
     * Filter which PostReaction to aggregate.
     * 
    **/
    where?: PostReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostReactions to fetch.
     * 
    **/
    orderBy?: Enumerable<PostReactionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PostReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostReactions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostReactions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostReactions
    **/
    _count?: true | PostReactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostReactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostReactionMaxAggregateInputType
  }

  export type GetPostReactionAggregateType<T extends PostReactionAggregateArgs> = {
        [P in keyof T & keyof AggregatePostReaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostReaction[P]>
      : GetScalarType<T[P], AggregatePostReaction[P]>
  }




  export type PostReactionGroupByArgs = {
    where?: PostReactionWhereInput
    orderBy?: Enumerable<PostReactionOrderByWithAggregationInput>
    by: Array<PostReactionScalarFieldEnum>
    having?: PostReactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostReactionCountAggregateInputType | true
    _min?: PostReactionMinAggregateInputType
    _max?: PostReactionMaxAggregateInputType
  }


  export type PostReactionGroupByOutputType = {
    id: string
    reaction: PostReactionTypes
    reactedBy: string
    viewedAt: Date
    _count: PostReactionCountAggregateOutputType | null
    _min: PostReactionMinAggregateOutputType | null
    _max: PostReactionMaxAggregateOutputType | null
  }

  type GetPostReactionGroupByPayload<T extends PostReactionGroupByArgs> = Promise<
    Array<
      PickArray<PostReactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostReactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostReactionGroupByOutputType[P]>
            : GetScalarType<T[P], PostReactionGroupByOutputType[P]>
        }
      >
    >


  export type PostReactionSelect = {
    id?: boolean
    reaction?: boolean
    reactedBy?: boolean
    viewedAt?: boolean
    ReactedBy?: boolean | UserArgs
  }

  export type PostReactionInclude = {
    ReactedBy?: boolean | UserArgs
  }

  export type PostReactionGetPayload<
    S extends boolean | null | undefined | PostReactionArgs,
    U = keyof S
      > = S extends true
        ? PostReaction
    : S extends undefined
    ? never
    : S extends PostReactionArgs | PostReactionFindManyArgs
    ?'include' extends U
    ? PostReaction  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'ReactedBy'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PostReaction ?PostReaction [P]
  : 
          P extends 'ReactedBy'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : PostReaction
  : PostReaction


  type PostReactionCountArgs = Merge<
    Omit<PostReactionFindManyArgs, 'select' | 'include'> & {
      select?: PostReactionCountAggregateInputType | true
    }
  >

  export interface PostReactionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PostReaction that matches the filter.
     * @param {PostReactionFindUniqueArgs} args - Arguments to find a PostReaction
     * @example
     * // Get one PostReaction
     * const postReaction = await prisma.postReaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostReactionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostReactionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PostReaction'> extends True ? CheckSelect<T, Prisma__PostReactionClient<PostReaction>, Prisma__PostReactionClient<PostReactionGetPayload<T>>> : CheckSelect<T, Prisma__PostReactionClient<PostReaction | null >, Prisma__PostReactionClient<PostReactionGetPayload<T> | null >>

    /**
     * Find the first PostReaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReactionFindFirstArgs} args - Arguments to find a PostReaction
     * @example
     * // Get one PostReaction
     * const postReaction = await prisma.postReaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostReactionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostReactionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PostReaction'> extends True ? CheckSelect<T, Prisma__PostReactionClient<PostReaction>, Prisma__PostReactionClient<PostReactionGetPayload<T>>> : CheckSelect<T, Prisma__PostReactionClient<PostReaction | null >, Prisma__PostReactionClient<PostReactionGetPayload<T> | null >>

    /**
     * Find zero or more PostReactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReactionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostReactions
     * const postReactions = await prisma.postReaction.findMany()
     * 
     * // Get first 10 PostReactions
     * const postReactions = await prisma.postReaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postReactionWithIdOnly = await prisma.postReaction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostReactionFindManyArgs>(
      args?: SelectSubset<T, PostReactionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PostReaction>>, PrismaPromise<Array<PostReactionGetPayload<T>>>>

    /**
     * Create a PostReaction.
     * @param {PostReactionCreateArgs} args - Arguments to create a PostReaction.
     * @example
     * // Create one PostReaction
     * const PostReaction = await prisma.postReaction.create({
     *   data: {
     *     // ... data to create a PostReaction
     *   }
     * })
     * 
    **/
    create<T extends PostReactionCreateArgs>(
      args: SelectSubset<T, PostReactionCreateArgs>
    ): CheckSelect<T, Prisma__PostReactionClient<PostReaction>, Prisma__PostReactionClient<PostReactionGetPayload<T>>>

    /**
     * Create many PostReactions.
     *     @param {PostReactionCreateManyArgs} args - Arguments to create many PostReactions.
     *     @example
     *     // Create many PostReactions
     *     const postReaction = await prisma.postReaction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostReactionCreateManyArgs>(
      args?: SelectSubset<T, PostReactionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PostReaction.
     * @param {PostReactionDeleteArgs} args - Arguments to delete one PostReaction.
     * @example
     * // Delete one PostReaction
     * const PostReaction = await prisma.postReaction.delete({
     *   where: {
     *     // ... filter to delete one PostReaction
     *   }
     * })
     * 
    **/
    delete<T extends PostReactionDeleteArgs>(
      args: SelectSubset<T, PostReactionDeleteArgs>
    ): CheckSelect<T, Prisma__PostReactionClient<PostReaction>, Prisma__PostReactionClient<PostReactionGetPayload<T>>>

    /**
     * Update one PostReaction.
     * @param {PostReactionUpdateArgs} args - Arguments to update one PostReaction.
     * @example
     * // Update one PostReaction
     * const postReaction = await prisma.postReaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostReactionUpdateArgs>(
      args: SelectSubset<T, PostReactionUpdateArgs>
    ): CheckSelect<T, Prisma__PostReactionClient<PostReaction>, Prisma__PostReactionClient<PostReactionGetPayload<T>>>

    /**
     * Delete zero or more PostReactions.
     * @param {PostReactionDeleteManyArgs} args - Arguments to filter PostReactions to delete.
     * @example
     * // Delete a few PostReactions
     * const { count } = await prisma.postReaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostReactionDeleteManyArgs>(
      args?: SelectSubset<T, PostReactionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostReactions
     * const postReaction = await prisma.postReaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostReactionUpdateManyArgs>(
      args: SelectSubset<T, PostReactionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PostReaction.
     * @param {PostReactionUpsertArgs} args - Arguments to update or create a PostReaction.
     * @example
     * // Update or create a PostReaction
     * const postReaction = await prisma.postReaction.upsert({
     *   create: {
     *     // ... data to create a PostReaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostReaction we want to update
     *   }
     * })
    **/
    upsert<T extends PostReactionUpsertArgs>(
      args: SelectSubset<T, PostReactionUpsertArgs>
    ): CheckSelect<T, Prisma__PostReactionClient<PostReaction>, Prisma__PostReactionClient<PostReactionGetPayload<T>>>

    /**
     * Count the number of PostReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReactionCountArgs} args - Arguments to filter PostReactions to count.
     * @example
     * // Count the number of PostReactions
     * const count = await prisma.postReaction.count({
     *   where: {
     *     // ... the filter for the PostReactions we want to count
     *   }
     * })
    **/
    count<T extends PostReactionCountArgs>(
      args?: Subset<T, PostReactionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostReactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostReaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostReactionAggregateArgs>(args: Subset<T, PostReactionAggregateArgs>): PrismaPromise<GetPostReactionAggregateType<T>>

    /**
     * Group by PostReaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostReactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostReactionGroupByArgs['orderBy'] }
        : { orderBy?: PostReactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostReactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostReactionGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostReaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostReactionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    ReactedBy<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PostReaction findUnique
   */
  export type PostReactionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the PostReaction
     * 
    **/
    select?: PostReactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostReactionInclude | null
    /**
     * Throw an Error if a PostReaction can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PostReaction to fetch.
     * 
    **/
    where: PostReactionWhereUniqueInput
  }


  /**
   * PostReaction findFirst
   */
  export type PostReactionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the PostReaction
     * 
    **/
    select?: PostReactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostReactionInclude | null
    /**
     * Throw an Error if a PostReaction can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PostReaction to fetch.
     * 
    **/
    where?: PostReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostReactions to fetch.
     * 
    **/
    orderBy?: Enumerable<PostReactionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostReactions.
     * 
    **/
    cursor?: PostReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostReactions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostReactions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostReactions.
     * 
    **/
    distinct?: Enumerable<PostReactionScalarFieldEnum>
  }


  /**
   * PostReaction findMany
   */
  export type PostReactionFindManyArgs = {
    /**
     * Select specific fields to fetch from the PostReaction
     * 
    **/
    select?: PostReactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostReactionInclude | null
    /**
     * Filter, which PostReactions to fetch.
     * 
    **/
    where?: PostReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostReactions to fetch.
     * 
    **/
    orderBy?: Enumerable<PostReactionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostReactions.
     * 
    **/
    cursor?: PostReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostReactions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostReactions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PostReactionScalarFieldEnum>
  }


  /**
   * PostReaction create
   */
  export type PostReactionCreateArgs = {
    /**
     * Select specific fields to fetch from the PostReaction
     * 
    **/
    select?: PostReactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostReactionInclude | null
    /**
     * The data needed to create a PostReaction.
     * 
    **/
    data: XOR<PostReactionCreateInput, PostReactionUncheckedCreateInput>
  }


  /**
   * PostReaction createMany
   */
  export type PostReactionCreateManyArgs = {
    data: Enumerable<PostReactionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PostReaction update
   */
  export type PostReactionUpdateArgs = {
    /**
     * Select specific fields to fetch from the PostReaction
     * 
    **/
    select?: PostReactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostReactionInclude | null
    /**
     * The data needed to update a PostReaction.
     * 
    **/
    data: XOR<PostReactionUpdateInput, PostReactionUncheckedUpdateInput>
    /**
     * Choose, which PostReaction to update.
     * 
    **/
    where: PostReactionWhereUniqueInput
  }


  /**
   * PostReaction updateMany
   */
  export type PostReactionUpdateManyArgs = {
    data: XOR<PostReactionUpdateManyMutationInput, PostReactionUncheckedUpdateManyInput>
    where?: PostReactionWhereInput
  }


  /**
   * PostReaction upsert
   */
  export type PostReactionUpsertArgs = {
    /**
     * Select specific fields to fetch from the PostReaction
     * 
    **/
    select?: PostReactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostReactionInclude | null
    /**
     * The filter to search for the PostReaction to update in case it exists.
     * 
    **/
    where: PostReactionWhereUniqueInput
    /**
     * In case the PostReaction found by the `where` argument doesn't exist, create a new PostReaction with this data.
     * 
    **/
    create: XOR<PostReactionCreateInput, PostReactionUncheckedCreateInput>
    /**
     * In case the PostReaction was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PostReactionUpdateInput, PostReactionUncheckedUpdateInput>
  }


  /**
   * PostReaction delete
   */
  export type PostReactionDeleteArgs = {
    /**
     * Select specific fields to fetch from the PostReaction
     * 
    **/
    select?: PostReactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostReactionInclude | null
    /**
     * Filter which PostReaction to delete.
     * 
    **/
    where: PostReactionWhereUniqueInput
  }


  /**
   * PostReaction deleteMany
   */
  export type PostReactionDeleteManyArgs = {
    where?: PostReactionWhereInput
  }


  /**
   * PostReaction without action
   */
  export type PostReactionArgs = {
    /**
     * Select specific fields to fetch from the PostReaction
     * 
    **/
    select?: PostReactionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostReactionInclude | null
  }



  /**
   * Model Session
   */


  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    expirationDate: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    expirationDate: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    expirationDate: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    expirationDate?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    expirationDate?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    expirationDate?: true
    _all?: true
  }

  export type SessionAggregateArgs = {
    /**
     * Filter which Session to aggregate.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs = {
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithAggregationInput>
    by: Array<SessionScalarFieldEnum>
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }


  export type SessionGroupByOutputType = {
    id: string
    createdAt: Date
    userId: string
    expirationDate: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Promise<
    Array<
      PickArray<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect = {
    id?: boolean
    createdAt?: boolean
    User?: boolean | UserArgs
    userId?: boolean
    expirationDate?: boolean
  }

  export type SessionInclude = {
    User?: boolean | UserArgs
  }

  export type SessionGetPayload<
    S extends boolean | null | undefined | SessionArgs,
    U = keyof S
      > = S extends true
        ? Session
    : S extends undefined
    ? never
    : S extends SessionArgs | SessionFindManyArgs
    ?'include' extends U
    ? Session  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'User'
        ? UserGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Session ?Session [P]
  : 
          P extends 'User'
        ? UserGetPayload<S['select'][P]> : never
  } 
    : Session
  : Session


  type SessionCountArgs = Merge<
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }
  >

  export interface SessionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Session>>, PrismaPromise<Array<SessionGetPayload<T>>>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Throw an Error if a Session can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Throw an Error if a Session can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     * 
    **/
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Sessions to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session create
   */
  export type SessionCreateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The data needed to create a Session.
     * 
    **/
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs = {
    data: Enumerable<SessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The data needed to update a Session.
     * 
    **/
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs = {
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The filter to search for the Session to update in case it exists.
     * 
    **/
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     * 
    **/
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter which Session to delete.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs = {
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    profilePicture: 'profilePicture',
    profileSlug: 'profileSlug',
    UserStatus: 'UserStatus',
    role: 'role',
    createdAt: 'createdAt',
    modifiedAt: 'modifiedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FollowerScalarFieldEnum: {
    id: 'id',
    followedByUserId: 'followedByUserId',
    followingUserId: 'followingUserId'
  };

  export type FollowerScalarFieldEnum = (typeof FollowerScalarFieldEnum)[keyof typeof FollowerScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    createdById: 'createdById',
    createdAt: 'createdAt',
    modifiedAt: 'modifiedAt',
    sourceId: 'sourceId',
    previewUrl: 'previewUrl',
    description: 'description'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const VideoSourceScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    type: 'type',
    url: 'url'
  };

  export type VideoSourceScalarFieldEnum = (typeof VideoSourceScalarFieldEnum)[keyof typeof VideoSourceScalarFieldEnum]


  export const SourceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    imageSrc: 'imageSrc'
  };

  export type SourceScalarFieldEnum = (typeof SourceScalarFieldEnum)[keyof typeof SourceScalarFieldEnum]


  export const PostViewScalarFieldEnum: {
    id: 'id',
    viewedBy: 'viewedBy',
    viewedAt: 'viewedAt'
  };

  export type PostViewScalarFieldEnum = (typeof PostViewScalarFieldEnum)[keyof typeof PostViewScalarFieldEnum]


  export const PostReactionScalarFieldEnum: {
    id: 'id',
    reaction: 'reaction',
    reactedBy: 'reactedBy',
    viewedAt: 'viewedAt'
  };

  export type PostReactionScalarFieldEnum = (typeof PostReactionScalarFieldEnum)[keyof typeof PostReactionScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    expirationDate: 'expirationDate'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    name?: StringNullableFilter | string | null
    profilePicture?: StringNullableFilter | string | null
    profileSlug?: StringFilter | string
    UserStatus?: EnumUserStatusFilter | UserStatus
    role?: EnumUserRoleFilter | UserRole
    createdAt?: DateTimeFilter | Date | string
    modifiedAt?: DateTimeFilter | Date | string
    Post?: PostListRelationFilter
    PostViews?: PostViewListRelationFilter
    ReactedOnPosts?: PostReactionListRelationFilter
    Session?: SessionListRelationFilter
    Following?: FollowerListRelationFilter
    FollowedBy?: FollowerListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    profileSlug?: SortOrder
    UserStatus?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    modifiedAt?: SortOrder
    Post?: PostOrderByRelationAggregateInput
    PostViews?: PostViewOrderByRelationAggregateInput
    ReactedOnPosts?: PostReactionOrderByRelationAggregateInput
    Session?: SessionOrderByRelationAggregateInput
    Following?: FollowerOrderByRelationAggregateInput
    FollowedBy?: FollowerOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    profileSlug?: SortOrder
    UserStatus?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    modifiedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    profilePicture?: StringNullableWithAggregatesFilter | string | null
    profileSlug?: StringWithAggregatesFilter | string
    UserStatus?: EnumUserStatusWithAggregatesFilter | UserStatus
    role?: EnumUserRoleWithAggregatesFilter | UserRole
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    modifiedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type FollowerWhereInput = {
    AND?: Enumerable<FollowerWhereInput>
    OR?: Enumerable<FollowerWhereInput>
    NOT?: Enumerable<FollowerWhereInput>
    id?: StringFilter | string
    followedByUserId?: StringFilter | string
    FollowingUser?: XOR<UserRelationFilter, UserWhereInput>
    followingUserId?: StringFilter | string
    Follower?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type FollowerOrderByWithRelationInput = {
    id?: SortOrder
    followedByUserId?: SortOrder
    FollowingUser?: UserOrderByWithRelationInput
    followingUserId?: SortOrder
    Follower?: UserOrderByWithRelationInput
  }

  export type FollowerWhereUniqueInput = {
    id?: string
    followedByUserId_followingUserId?: FollowerFollowedByUserIdFollowingUserIdCompoundUniqueInput
  }

  export type FollowerOrderByWithAggregationInput = {
    id?: SortOrder
    followedByUserId?: SortOrder
    followingUserId?: SortOrder
    _count?: FollowerCountOrderByAggregateInput
    _max?: FollowerMaxOrderByAggregateInput
    _min?: FollowerMinOrderByAggregateInput
  }

  export type FollowerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FollowerScalarWhereWithAggregatesInput>
    OR?: Enumerable<FollowerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FollowerScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    followedByUserId?: StringWithAggregatesFilter | string
    followingUserId?: StringWithAggregatesFilter | string
  }

  export type PostWhereInput = {
    AND?: Enumerable<PostWhereInput>
    OR?: Enumerable<PostWhereInput>
    NOT?: Enumerable<PostWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    slug?: StringFilter | string
    createdById?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    modifiedAt?: DateTimeFilter | Date | string
    CreatedBy?: XOR<UserRelationFilter, UserWhereInput>
    Source?: XOR<SourceRelationFilter, SourceWhereInput>
    sourceId?: StringFilter | string
    previewUrl?: StringFilter | string
    description?: StringFilter | string
    VideoSources?: VideoSourceListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    modifiedAt?: SortOrder
    CreatedBy?: UserOrderByWithRelationInput
    Source?: SourceOrderByWithRelationInput
    sourceId?: SortOrder
    previewUrl?: SortOrder
    description?: SortOrder
    VideoSources?: VideoSourceOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = {
    id?: string
    slug?: string
  }

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    modifiedAt?: SortOrder
    sourceId?: SortOrder
    previewUrl?: SortOrder
    description?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    slug?: StringWithAggregatesFilter | string
    createdById?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    modifiedAt?: DateTimeWithAggregatesFilter | Date | string
    sourceId?: StringWithAggregatesFilter | string
    previewUrl?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
  }

  export type VideoSourceWhereInput = {
    AND?: Enumerable<VideoSourceWhereInput>
    OR?: Enumerable<VideoSourceWhereInput>
    NOT?: Enumerable<VideoSourceWhereInput>
    id?: StringFilter | string
    postId?: StringFilter | string
    type?: StringFilter | string
    url?: StringFilter | string
    Post?: XOR<PostRelationFilter, PostWhereInput>
  }

  export type VideoSourceOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    Post?: PostOrderByWithRelationInput
  }

  export type VideoSourceWhereUniqueInput = {
    id?: string
  }

  export type VideoSourceOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    type?: SortOrder
    url?: SortOrder
    _count?: VideoSourceCountOrderByAggregateInput
    _max?: VideoSourceMaxOrderByAggregateInput
    _min?: VideoSourceMinOrderByAggregateInput
  }

  export type VideoSourceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VideoSourceScalarWhereWithAggregatesInput>
    OR?: Enumerable<VideoSourceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VideoSourceScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    postId?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
  }

  export type SourceWhereInput = {
    AND?: Enumerable<SourceWhereInput>
    OR?: Enumerable<SourceWhereInput>
    NOT?: Enumerable<SourceWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    url?: StringFilter | string
    imageSrc?: StringFilter | string
    Post?: PostListRelationFilter
  }

  export type SourceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    imageSrc?: SortOrder
    Post?: PostOrderByRelationAggregateInput
  }

  export type SourceWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type SourceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    imageSrc?: SortOrder
    _count?: SourceCountOrderByAggregateInput
    _max?: SourceMaxOrderByAggregateInput
    _min?: SourceMinOrderByAggregateInput
  }

  export type SourceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SourceScalarWhereWithAggregatesInput>
    OR?: Enumerable<SourceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SourceScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    imageSrc?: StringWithAggregatesFilter | string
  }

  export type PostViewWhereInput = {
    AND?: Enumerable<PostViewWhereInput>
    OR?: Enumerable<PostViewWhereInput>
    NOT?: Enumerable<PostViewWhereInput>
    id?: StringFilter | string
    viewedBy?: StringFilter | string
    viewedAt?: DateTimeFilter | Date | string
    ViewedBy?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PostViewOrderByWithRelationInput = {
    id?: SortOrder
    viewedBy?: SortOrder
    viewedAt?: SortOrder
    ViewedBy?: UserOrderByWithRelationInput
  }

  export type PostViewWhereUniqueInput = {
    id?: string
  }

  export type PostViewOrderByWithAggregationInput = {
    id?: SortOrder
    viewedBy?: SortOrder
    viewedAt?: SortOrder
    _count?: PostViewCountOrderByAggregateInput
    _max?: PostViewMaxOrderByAggregateInput
    _min?: PostViewMinOrderByAggregateInput
  }

  export type PostViewScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostViewScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostViewScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostViewScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    viewedBy?: StringWithAggregatesFilter | string
    viewedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PostReactionWhereInput = {
    AND?: Enumerable<PostReactionWhereInput>
    OR?: Enumerable<PostReactionWhereInput>
    NOT?: Enumerable<PostReactionWhereInput>
    id?: StringFilter | string
    reaction?: EnumPostReactionTypesFilter | PostReactionTypes
    reactedBy?: StringFilter | string
    viewedAt?: DateTimeFilter | Date | string
    ReactedBy?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PostReactionOrderByWithRelationInput = {
    id?: SortOrder
    reaction?: SortOrder
    reactedBy?: SortOrder
    viewedAt?: SortOrder
    ReactedBy?: UserOrderByWithRelationInput
  }

  export type PostReactionWhereUniqueInput = {
    id?: string
  }

  export type PostReactionOrderByWithAggregationInput = {
    id?: SortOrder
    reaction?: SortOrder
    reactedBy?: SortOrder
    viewedAt?: SortOrder
    _count?: PostReactionCountOrderByAggregateInput
    _max?: PostReactionMaxOrderByAggregateInput
    _min?: PostReactionMinOrderByAggregateInput
  }

  export type PostReactionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostReactionScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostReactionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostReactionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    reaction?: EnumPostReactionTypesWithAggregatesFilter | PostReactionTypes
    reactedBy?: StringWithAggregatesFilter | string
    viewedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>
    OR?: Enumerable<SessionWhereInput>
    NOT?: Enumerable<SessionWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput>
    userId?: StringFilter | string
    expirationDate?: DateTimeFilter | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
    userId?: SortOrder
    expirationDate?: SortOrder
  }

  export type SessionWhereUniqueInput = {
    id?: string
  }

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    expirationDate?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: StringWithAggregatesFilter | string
    expirationDate?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    profilePicture?: string | null
    profileSlug: string
    UserStatus?: UserStatus
    role?: UserRole
    createdAt?: Date | string
    modifiedAt?: Date | string
    Post?: PostCreateNestedManyWithoutCreatedByInput
    PostViews?: PostViewCreateNestedManyWithoutViewedByInput
    ReactedOnPosts?: PostReactionCreateNestedManyWithoutReactedByInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Following?: FollowerCreateNestedManyWithoutFollowerInput
    FollowedBy?: FollowerCreateNestedManyWithoutFollowingUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    profilePicture?: string | null
    profileSlug: string
    UserStatus?: UserStatus
    role?: UserRole
    createdAt?: Date | string
    modifiedAt?: Date | string
    Post?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    PostViews?: PostViewUncheckedCreateNestedManyWithoutViewedByInput
    ReactedOnPosts?: PostReactionUncheckedCreateNestedManyWithoutReactedByInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Following?: FollowerUncheckedCreateNestedManyWithoutFollowerInput
    FollowedBy?: FollowerUncheckedCreateNestedManyWithoutFollowingUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    profileSlug?: StringFieldUpdateOperationsInput | string
    UserStatus?: EnumUserStatusFieldUpdateOperationsInput | UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Post?: PostUpdateManyWithoutCreatedByInput
    PostViews?: PostViewUpdateManyWithoutViewedByInput
    ReactedOnPosts?: PostReactionUpdateManyWithoutReactedByInput
    Session?: SessionUpdateManyWithoutUserInput
    Following?: FollowerUpdateManyWithoutFollowerInput
    FollowedBy?: FollowerUpdateManyWithoutFollowingUserInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    profileSlug?: StringFieldUpdateOperationsInput | string
    UserStatus?: EnumUserStatusFieldUpdateOperationsInput | UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Post?: PostUncheckedUpdateManyWithoutCreatedByInput
    PostViews?: PostViewUncheckedUpdateManyWithoutViewedByInput
    ReactedOnPosts?: PostReactionUncheckedUpdateManyWithoutReactedByInput
    Session?: SessionUncheckedUpdateManyWithoutUserInput
    Following?: FollowerUncheckedUpdateManyWithoutFollowerInput
    FollowedBy?: FollowerUncheckedUpdateManyWithoutFollowingUserInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    profilePicture?: string | null
    profileSlug: string
    UserStatus?: UserStatus
    role?: UserRole
    createdAt?: Date | string
    modifiedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    profileSlug?: StringFieldUpdateOperationsInput | string
    UserStatus?: EnumUserStatusFieldUpdateOperationsInput | UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    profileSlug?: StringFieldUpdateOperationsInput | string
    UserStatus?: EnumUserStatusFieldUpdateOperationsInput | UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowerCreateInput = {
    id: string
    FollowingUser: UserCreateNestedOneWithoutFollowedByInput
    Follower: UserCreateNestedOneWithoutFollowingInput
  }

  export type FollowerUncheckedCreateInput = {
    id: string
    followedByUserId: string
    followingUserId: string
  }

  export type FollowerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    FollowingUser?: UserUpdateOneRequiredWithoutFollowedByInput
    Follower?: UserUpdateOneRequiredWithoutFollowingInput
  }

  export type FollowerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    followedByUserId?: StringFieldUpdateOperationsInput | string
    followingUserId?: StringFieldUpdateOperationsInput | string
  }

  export type FollowerCreateManyInput = {
    id: string
    followedByUserId: string
    followingUserId: string
  }

  export type FollowerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FollowerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    followedByUserId?: StringFieldUpdateOperationsInput | string
    followingUserId?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateInput = {
    id?: string
    title: string
    slug: string
    createdAt?: Date | string
    modifiedAt?: Date | string
    previewUrl: string
    description: string
    CreatedBy: UserCreateNestedOneWithoutPostInput
    Source: SourceCreateNestedOneWithoutPostInput
    VideoSources?: VideoSourceCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    createdById: string
    createdAt?: Date | string
    modifiedAt?: Date | string
    sourceId: string
    previewUrl: string
    description: string
    VideoSources?: VideoSourceUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previewUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    CreatedBy?: UserUpdateOneRequiredWithoutPostInput
    Source?: SourceUpdateOneRequiredWithoutPostInput
    VideoSources?: VideoSourceUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceId?: StringFieldUpdateOperationsInput | string
    previewUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    VideoSources?: VideoSourceUncheckedUpdateManyWithoutPostInput
  }

  export type PostCreateManyInput = {
    id?: string
    title: string
    slug: string
    createdById: string
    createdAt?: Date | string
    modifiedAt?: Date | string
    sourceId: string
    previewUrl: string
    description: string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previewUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceId?: StringFieldUpdateOperationsInput | string
    previewUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type VideoSourceCreateInput = {
    id?: string
    type: string
    url: string
    Post: PostCreateNestedOneWithoutVideoSourcesInput
  }

  export type VideoSourceUncheckedCreateInput = {
    id?: string
    postId: string
    type: string
    url: string
  }

  export type VideoSourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    Post?: PostUpdateOneRequiredWithoutVideoSourcesInput
  }

  export type VideoSourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type VideoSourceCreateManyInput = {
    id?: string
    postId: string
    type: string
    url: string
  }

  export type VideoSourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type VideoSourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SourceCreateInput = {
    id?: string
    name: string
    url: string
    imageSrc: string
    Post?: PostCreateNestedManyWithoutSourceInput
  }

  export type SourceUncheckedCreateInput = {
    id?: string
    name: string
    url: string
    imageSrc: string
    Post?: PostUncheckedCreateNestedManyWithoutSourceInput
  }

  export type SourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    Post?: PostUpdateManyWithoutSourceInput
  }

  export type SourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
    Post?: PostUncheckedUpdateManyWithoutSourceInput
  }

  export type SourceCreateManyInput = {
    id?: string
    name: string
    url: string
    imageSrc: string
  }

  export type SourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
  }

  export type SourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
  }

  export type PostViewCreateInput = {
    id: string
    viewedAt?: Date | string
    ViewedBy: UserCreateNestedOneWithoutPostViewsInput
  }

  export type PostViewUncheckedCreateInput = {
    id: string
    viewedBy: string
    viewedAt?: Date | string
  }

  export type PostViewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ViewedBy?: UserUpdateOneRequiredWithoutPostViewsInput
  }

  export type PostViewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedBy?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostViewCreateManyInput = {
    id: string
    viewedBy: string
    viewedAt?: Date | string
  }

  export type PostViewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostViewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedBy?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReactionCreateInput = {
    id: string
    reaction?: PostReactionTypes
    viewedAt?: Date | string
    ReactedBy: UserCreateNestedOneWithoutReactedOnPostsInput
  }

  export type PostReactionUncheckedCreateInput = {
    id: string
    reaction?: PostReactionTypes
    reactedBy: string
    viewedAt?: Date | string
  }

  export type PostReactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reaction?: EnumPostReactionTypesFieldUpdateOperationsInput | PostReactionTypes
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ReactedBy?: UserUpdateOneRequiredWithoutReactedOnPostsInput
  }

  export type PostReactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reaction?: EnumPostReactionTypesFieldUpdateOperationsInput | PostReactionTypes
    reactedBy?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReactionCreateManyInput = {
    id: string
    reaction?: PostReactionTypes
    reactedBy: string
    viewedAt?: Date | string
  }

  export type PostReactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reaction?: EnumPostReactionTypesFieldUpdateOperationsInput | PostReactionTypes
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reaction?: EnumPostReactionTypesFieldUpdateOperationsInput | PostReactionTypes
    reactedBy?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    createdAt?: Date | string
    expirationDate: Date | string
    User: UserCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    expirationDate: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutSessionInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    expirationDate: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type EnumUserStatusFilter = {
    equals?: UserStatus
    in?: Enumerable<UserStatus>
    notIn?: Enumerable<UserStatus>
    not?: NestedEnumUserStatusFilter | UserStatus
  }

  export type EnumUserRoleFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleFilter | UserRole
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PostViewListRelationFilter = {
    every?: PostViewWhereInput
    some?: PostViewWhereInput
    none?: PostViewWhereInput
  }

  export type PostReactionListRelationFilter = {
    every?: PostReactionWhereInput
    some?: PostReactionWhereInput
    none?: PostReactionWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type FollowerListRelationFilter = {
    every?: FollowerWhereInput
    some?: FollowerWhereInput
    none?: FollowerWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostViewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostReactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FollowerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    profileSlug?: SortOrder
    UserStatus?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    modifiedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    profileSlug?: SortOrder
    UserStatus?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    modifiedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    profileSlug?: SortOrder
    UserStatus?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    modifiedAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type EnumUserStatusWithAggregatesFilter = {
    equals?: UserStatus
    in?: Enumerable<UserStatus>
    notIn?: Enumerable<UserStatus>
    not?: NestedEnumUserStatusWithAggregatesFilter | UserStatus
    _count?: NestedIntFilter
    _min?: NestedEnumUserStatusFilter
    _max?: NestedEnumUserStatusFilter
  }

  export type EnumUserRoleWithAggregatesFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleWithAggregatesFilter | UserRole
    _count?: NestedIntFilter
    _min?: NestedEnumUserRoleFilter
    _max?: NestedEnumUserRoleFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FollowerFollowedByUserIdFollowingUserIdCompoundUniqueInput = {
    followedByUserId: string
    followingUserId: string
  }

  export type FollowerCountOrderByAggregateInput = {
    id?: SortOrder
    followedByUserId?: SortOrder
    followingUserId?: SortOrder
  }

  export type FollowerMaxOrderByAggregateInput = {
    id?: SortOrder
    followedByUserId?: SortOrder
    followingUserId?: SortOrder
  }

  export type FollowerMinOrderByAggregateInput = {
    id?: SortOrder
    followedByUserId?: SortOrder
    followingUserId?: SortOrder
  }

  export type SourceRelationFilter = {
    is?: SourceWhereInput
    isNot?: SourceWhereInput
  }

  export type VideoSourceListRelationFilter = {
    every?: VideoSourceWhereInput
    some?: VideoSourceWhereInput
    none?: VideoSourceWhereInput
  }

  export type VideoSourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    modifiedAt?: SortOrder
    sourceId?: SortOrder
    previewUrl?: SortOrder
    description?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    modifiedAt?: SortOrder
    sourceId?: SortOrder
    previewUrl?: SortOrder
    description?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    modifiedAt?: SortOrder
    sourceId?: SortOrder
    previewUrl?: SortOrder
    description?: SortOrder
  }

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type VideoSourceCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    type?: SortOrder
    url?: SortOrder
  }

  export type VideoSourceMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    type?: SortOrder
    url?: SortOrder
  }

  export type VideoSourceMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    type?: SortOrder
    url?: SortOrder
  }

  export type SourceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    imageSrc?: SortOrder
  }

  export type SourceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    imageSrc?: SortOrder
  }

  export type SourceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    imageSrc?: SortOrder
  }

  export type PostViewCountOrderByAggregateInput = {
    id?: SortOrder
    viewedBy?: SortOrder
    viewedAt?: SortOrder
  }

  export type PostViewMaxOrderByAggregateInput = {
    id?: SortOrder
    viewedBy?: SortOrder
    viewedAt?: SortOrder
  }

  export type PostViewMinOrderByAggregateInput = {
    id?: SortOrder
    viewedBy?: SortOrder
    viewedAt?: SortOrder
  }

  export type EnumPostReactionTypesFilter = {
    equals?: PostReactionTypes
    in?: Enumerable<PostReactionTypes>
    notIn?: Enumerable<PostReactionTypes>
    not?: NestedEnumPostReactionTypesFilter | PostReactionTypes
  }

  export type PostReactionCountOrderByAggregateInput = {
    id?: SortOrder
    reaction?: SortOrder
    reactedBy?: SortOrder
    viewedAt?: SortOrder
  }

  export type PostReactionMaxOrderByAggregateInput = {
    id?: SortOrder
    reaction?: SortOrder
    reactedBy?: SortOrder
    viewedAt?: SortOrder
  }

  export type PostReactionMinOrderByAggregateInput = {
    id?: SortOrder
    reaction?: SortOrder
    reactedBy?: SortOrder
    viewedAt?: SortOrder
  }

  export type EnumPostReactionTypesWithAggregatesFilter = {
    equals?: PostReactionTypes
    in?: Enumerable<PostReactionTypes>
    notIn?: Enumerable<PostReactionTypes>
    not?: NestedEnumPostReactionTypesWithAggregatesFilter | PostReactionTypes
    _count?: NestedIntFilter
    _min?: NestedEnumPostReactionTypesFilter
    _max?: NestedEnumPostReactionTypesFilter
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    expirationDate?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    expirationDate?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    expirationDate?: SortOrder
  }

  export type PostCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<Enumerable<PostCreateWithoutCreatedByInput>, Enumerable<PostUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutCreatedByInput>
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type PostViewCreateNestedManyWithoutViewedByInput = {
    create?: XOR<Enumerable<PostViewCreateWithoutViewedByInput>, Enumerable<PostViewUncheckedCreateWithoutViewedByInput>>
    connectOrCreate?: Enumerable<PostViewCreateOrConnectWithoutViewedByInput>
    createMany?: PostViewCreateManyViewedByInputEnvelope
    connect?: Enumerable<PostViewWhereUniqueInput>
  }

  export type PostReactionCreateNestedManyWithoutReactedByInput = {
    create?: XOR<Enumerable<PostReactionCreateWithoutReactedByInput>, Enumerable<PostReactionUncheckedCreateWithoutReactedByInput>>
    connectOrCreate?: Enumerable<PostReactionCreateOrConnectWithoutReactedByInput>
    createMany?: PostReactionCreateManyReactedByInputEnvelope
    connect?: Enumerable<PostReactionWhereUniqueInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type FollowerCreateNestedManyWithoutFollowerInput = {
    create?: XOR<Enumerable<FollowerCreateWithoutFollowerInput>, Enumerable<FollowerUncheckedCreateWithoutFollowerInput>>
    connectOrCreate?: Enumerable<FollowerCreateOrConnectWithoutFollowerInput>
    createMany?: FollowerCreateManyFollowerInputEnvelope
    connect?: Enumerable<FollowerWhereUniqueInput>
  }

  export type FollowerCreateNestedManyWithoutFollowingUserInput = {
    create?: XOR<Enumerable<FollowerCreateWithoutFollowingUserInput>, Enumerable<FollowerUncheckedCreateWithoutFollowingUserInput>>
    connectOrCreate?: Enumerable<FollowerCreateOrConnectWithoutFollowingUserInput>
    createMany?: FollowerCreateManyFollowingUserInputEnvelope
    connect?: Enumerable<FollowerWhereUniqueInput>
  }

  export type PostUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<Enumerable<PostCreateWithoutCreatedByInput>, Enumerable<PostUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutCreatedByInput>
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type PostViewUncheckedCreateNestedManyWithoutViewedByInput = {
    create?: XOR<Enumerable<PostViewCreateWithoutViewedByInput>, Enumerable<PostViewUncheckedCreateWithoutViewedByInput>>
    connectOrCreate?: Enumerable<PostViewCreateOrConnectWithoutViewedByInput>
    createMany?: PostViewCreateManyViewedByInputEnvelope
    connect?: Enumerable<PostViewWhereUniqueInput>
  }

  export type PostReactionUncheckedCreateNestedManyWithoutReactedByInput = {
    create?: XOR<Enumerable<PostReactionCreateWithoutReactedByInput>, Enumerable<PostReactionUncheckedCreateWithoutReactedByInput>>
    connectOrCreate?: Enumerable<PostReactionCreateOrConnectWithoutReactedByInput>
    createMany?: PostReactionCreateManyReactedByInputEnvelope
    connect?: Enumerable<PostReactionWhereUniqueInput>
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type FollowerUncheckedCreateNestedManyWithoutFollowerInput = {
    create?: XOR<Enumerable<FollowerCreateWithoutFollowerInput>, Enumerable<FollowerUncheckedCreateWithoutFollowerInput>>
    connectOrCreate?: Enumerable<FollowerCreateOrConnectWithoutFollowerInput>
    createMany?: FollowerCreateManyFollowerInputEnvelope
    connect?: Enumerable<FollowerWhereUniqueInput>
  }

  export type FollowerUncheckedCreateNestedManyWithoutFollowingUserInput = {
    create?: XOR<Enumerable<FollowerCreateWithoutFollowingUserInput>, Enumerable<FollowerUncheckedCreateWithoutFollowingUserInput>>
    connectOrCreate?: Enumerable<FollowerCreateOrConnectWithoutFollowingUserInput>
    createMany?: FollowerCreateManyFollowingUserInputEnvelope
    connect?: Enumerable<FollowerWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: UserStatus
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PostUpdateManyWithoutCreatedByInput = {
    create?: XOR<Enumerable<PostCreateWithoutCreatedByInput>, Enumerable<PostUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutCreatedByInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutCreatedByInput>
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutCreatedByInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutCreatedByInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type PostViewUpdateManyWithoutViewedByInput = {
    create?: XOR<Enumerable<PostViewCreateWithoutViewedByInput>, Enumerable<PostViewUncheckedCreateWithoutViewedByInput>>
    connectOrCreate?: Enumerable<PostViewCreateOrConnectWithoutViewedByInput>
    upsert?: Enumerable<PostViewUpsertWithWhereUniqueWithoutViewedByInput>
    createMany?: PostViewCreateManyViewedByInputEnvelope
    set?: Enumerable<PostViewWhereUniqueInput>
    disconnect?: Enumerable<PostViewWhereUniqueInput>
    delete?: Enumerable<PostViewWhereUniqueInput>
    connect?: Enumerable<PostViewWhereUniqueInput>
    update?: Enumerable<PostViewUpdateWithWhereUniqueWithoutViewedByInput>
    updateMany?: Enumerable<PostViewUpdateManyWithWhereWithoutViewedByInput>
    deleteMany?: Enumerable<PostViewScalarWhereInput>
  }

  export type PostReactionUpdateManyWithoutReactedByInput = {
    create?: XOR<Enumerable<PostReactionCreateWithoutReactedByInput>, Enumerable<PostReactionUncheckedCreateWithoutReactedByInput>>
    connectOrCreate?: Enumerable<PostReactionCreateOrConnectWithoutReactedByInput>
    upsert?: Enumerable<PostReactionUpsertWithWhereUniqueWithoutReactedByInput>
    createMany?: PostReactionCreateManyReactedByInputEnvelope
    set?: Enumerable<PostReactionWhereUniqueInput>
    disconnect?: Enumerable<PostReactionWhereUniqueInput>
    delete?: Enumerable<PostReactionWhereUniqueInput>
    connect?: Enumerable<PostReactionWhereUniqueInput>
    update?: Enumerable<PostReactionUpdateWithWhereUniqueWithoutReactedByInput>
    updateMany?: Enumerable<PostReactionUpdateManyWithWhereWithoutReactedByInput>
    deleteMany?: Enumerable<PostReactionScalarWhereInput>
  }

  export type SessionUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type FollowerUpdateManyWithoutFollowerInput = {
    create?: XOR<Enumerable<FollowerCreateWithoutFollowerInput>, Enumerable<FollowerUncheckedCreateWithoutFollowerInput>>
    connectOrCreate?: Enumerable<FollowerCreateOrConnectWithoutFollowerInput>
    upsert?: Enumerable<FollowerUpsertWithWhereUniqueWithoutFollowerInput>
    createMany?: FollowerCreateManyFollowerInputEnvelope
    set?: Enumerable<FollowerWhereUniqueInput>
    disconnect?: Enumerable<FollowerWhereUniqueInput>
    delete?: Enumerable<FollowerWhereUniqueInput>
    connect?: Enumerable<FollowerWhereUniqueInput>
    update?: Enumerable<FollowerUpdateWithWhereUniqueWithoutFollowerInput>
    updateMany?: Enumerable<FollowerUpdateManyWithWhereWithoutFollowerInput>
    deleteMany?: Enumerable<FollowerScalarWhereInput>
  }

  export type FollowerUpdateManyWithoutFollowingUserInput = {
    create?: XOR<Enumerable<FollowerCreateWithoutFollowingUserInput>, Enumerable<FollowerUncheckedCreateWithoutFollowingUserInput>>
    connectOrCreate?: Enumerable<FollowerCreateOrConnectWithoutFollowingUserInput>
    upsert?: Enumerable<FollowerUpsertWithWhereUniqueWithoutFollowingUserInput>
    createMany?: FollowerCreateManyFollowingUserInputEnvelope
    set?: Enumerable<FollowerWhereUniqueInput>
    disconnect?: Enumerable<FollowerWhereUniqueInput>
    delete?: Enumerable<FollowerWhereUniqueInput>
    connect?: Enumerable<FollowerWhereUniqueInput>
    update?: Enumerable<FollowerUpdateWithWhereUniqueWithoutFollowingUserInput>
    updateMany?: Enumerable<FollowerUpdateManyWithWhereWithoutFollowingUserInput>
    deleteMany?: Enumerable<FollowerScalarWhereInput>
  }

  export type PostUncheckedUpdateManyWithoutCreatedByInput = {
    create?: XOR<Enumerable<PostCreateWithoutCreatedByInput>, Enumerable<PostUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutCreatedByInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutCreatedByInput>
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutCreatedByInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutCreatedByInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type PostViewUncheckedUpdateManyWithoutViewedByInput = {
    create?: XOR<Enumerable<PostViewCreateWithoutViewedByInput>, Enumerable<PostViewUncheckedCreateWithoutViewedByInput>>
    connectOrCreate?: Enumerable<PostViewCreateOrConnectWithoutViewedByInput>
    upsert?: Enumerable<PostViewUpsertWithWhereUniqueWithoutViewedByInput>
    createMany?: PostViewCreateManyViewedByInputEnvelope
    set?: Enumerable<PostViewWhereUniqueInput>
    disconnect?: Enumerable<PostViewWhereUniqueInput>
    delete?: Enumerable<PostViewWhereUniqueInput>
    connect?: Enumerable<PostViewWhereUniqueInput>
    update?: Enumerable<PostViewUpdateWithWhereUniqueWithoutViewedByInput>
    updateMany?: Enumerable<PostViewUpdateManyWithWhereWithoutViewedByInput>
    deleteMany?: Enumerable<PostViewScalarWhereInput>
  }

  export type PostReactionUncheckedUpdateManyWithoutReactedByInput = {
    create?: XOR<Enumerable<PostReactionCreateWithoutReactedByInput>, Enumerable<PostReactionUncheckedCreateWithoutReactedByInput>>
    connectOrCreate?: Enumerable<PostReactionCreateOrConnectWithoutReactedByInput>
    upsert?: Enumerable<PostReactionUpsertWithWhereUniqueWithoutReactedByInput>
    createMany?: PostReactionCreateManyReactedByInputEnvelope
    set?: Enumerable<PostReactionWhereUniqueInput>
    disconnect?: Enumerable<PostReactionWhereUniqueInput>
    delete?: Enumerable<PostReactionWhereUniqueInput>
    connect?: Enumerable<PostReactionWhereUniqueInput>
    update?: Enumerable<PostReactionUpdateWithWhereUniqueWithoutReactedByInput>
    updateMany?: Enumerable<PostReactionUpdateManyWithWhereWithoutReactedByInput>
    deleteMany?: Enumerable<PostReactionScalarWhereInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type FollowerUncheckedUpdateManyWithoutFollowerInput = {
    create?: XOR<Enumerable<FollowerCreateWithoutFollowerInput>, Enumerable<FollowerUncheckedCreateWithoutFollowerInput>>
    connectOrCreate?: Enumerable<FollowerCreateOrConnectWithoutFollowerInput>
    upsert?: Enumerable<FollowerUpsertWithWhereUniqueWithoutFollowerInput>
    createMany?: FollowerCreateManyFollowerInputEnvelope
    set?: Enumerable<FollowerWhereUniqueInput>
    disconnect?: Enumerable<FollowerWhereUniqueInput>
    delete?: Enumerable<FollowerWhereUniqueInput>
    connect?: Enumerable<FollowerWhereUniqueInput>
    update?: Enumerable<FollowerUpdateWithWhereUniqueWithoutFollowerInput>
    updateMany?: Enumerable<FollowerUpdateManyWithWhereWithoutFollowerInput>
    deleteMany?: Enumerable<FollowerScalarWhereInput>
  }

  export type FollowerUncheckedUpdateManyWithoutFollowingUserInput = {
    create?: XOR<Enumerable<FollowerCreateWithoutFollowingUserInput>, Enumerable<FollowerUncheckedCreateWithoutFollowingUserInput>>
    connectOrCreate?: Enumerable<FollowerCreateOrConnectWithoutFollowingUserInput>
    upsert?: Enumerable<FollowerUpsertWithWhereUniqueWithoutFollowingUserInput>
    createMany?: FollowerCreateManyFollowingUserInputEnvelope
    set?: Enumerable<FollowerWhereUniqueInput>
    disconnect?: Enumerable<FollowerWhereUniqueInput>
    delete?: Enumerable<FollowerWhereUniqueInput>
    connect?: Enumerable<FollowerWhereUniqueInput>
    update?: Enumerable<FollowerUpdateWithWhereUniqueWithoutFollowingUserInput>
    updateMany?: Enumerable<FollowerUpdateManyWithWhereWithoutFollowingUserInput>
    deleteMany?: Enumerable<FollowerScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutFollowedByInput = {
    create?: XOR<UserCreateWithoutFollowedByInput, UserUncheckedCreateWithoutFollowedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowedByInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFollowingInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFollowedByInput = {
    create?: XOR<UserCreateWithoutFollowedByInput, UserUncheckedCreateWithoutFollowedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowedByInput
    upsert?: UserUpsertWithoutFollowedByInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFollowedByInput, UserUncheckedUpdateWithoutFollowedByInput>
  }

  export type UserUpdateOneRequiredWithoutFollowingInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput
    upsert?: UserUpsertWithoutFollowingInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
  }

  export type UserCreateNestedOneWithoutPostInput = {
    create?: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostInput
    connect?: UserWhereUniqueInput
  }

  export type SourceCreateNestedOneWithoutPostInput = {
    create?: XOR<SourceCreateWithoutPostInput, SourceUncheckedCreateWithoutPostInput>
    connectOrCreate?: SourceCreateOrConnectWithoutPostInput
    connect?: SourceWhereUniqueInput
  }

  export type VideoSourceCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<VideoSourceCreateWithoutPostInput>, Enumerable<VideoSourceUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<VideoSourceCreateOrConnectWithoutPostInput>
    createMany?: VideoSourceCreateManyPostInputEnvelope
    connect?: Enumerable<VideoSourceWhereUniqueInput>
  }

  export type VideoSourceUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<Enumerable<VideoSourceCreateWithoutPostInput>, Enumerable<VideoSourceUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<VideoSourceCreateOrConnectWithoutPostInput>
    createMany?: VideoSourceCreateManyPostInputEnvelope
    connect?: Enumerable<VideoSourceWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutPostInput = {
    create?: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostInput
    upsert?: UserUpsertWithoutPostInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPostInput, UserUncheckedUpdateWithoutPostInput>
  }

  export type SourceUpdateOneRequiredWithoutPostInput = {
    create?: XOR<SourceCreateWithoutPostInput, SourceUncheckedCreateWithoutPostInput>
    connectOrCreate?: SourceCreateOrConnectWithoutPostInput
    upsert?: SourceUpsertWithoutPostInput
    connect?: SourceWhereUniqueInput
    update?: XOR<SourceUpdateWithoutPostInput, SourceUncheckedUpdateWithoutPostInput>
  }

  export type VideoSourceUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<VideoSourceCreateWithoutPostInput>, Enumerable<VideoSourceUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<VideoSourceCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<VideoSourceUpsertWithWhereUniqueWithoutPostInput>
    createMany?: VideoSourceCreateManyPostInputEnvelope
    set?: Enumerable<VideoSourceWhereUniqueInput>
    disconnect?: Enumerable<VideoSourceWhereUniqueInput>
    delete?: Enumerable<VideoSourceWhereUniqueInput>
    connect?: Enumerable<VideoSourceWhereUniqueInput>
    update?: Enumerable<VideoSourceUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<VideoSourceUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<VideoSourceScalarWhereInput>
  }

  export type VideoSourceUncheckedUpdateManyWithoutPostInput = {
    create?: XOR<Enumerable<VideoSourceCreateWithoutPostInput>, Enumerable<VideoSourceUncheckedCreateWithoutPostInput>>
    connectOrCreate?: Enumerable<VideoSourceCreateOrConnectWithoutPostInput>
    upsert?: Enumerable<VideoSourceUpsertWithWhereUniqueWithoutPostInput>
    createMany?: VideoSourceCreateManyPostInputEnvelope
    set?: Enumerable<VideoSourceWhereUniqueInput>
    disconnect?: Enumerable<VideoSourceWhereUniqueInput>
    delete?: Enumerable<VideoSourceWhereUniqueInput>
    connect?: Enumerable<VideoSourceWhereUniqueInput>
    update?: Enumerable<VideoSourceUpdateWithWhereUniqueWithoutPostInput>
    updateMany?: Enumerable<VideoSourceUpdateManyWithWhereWithoutPostInput>
    deleteMany?: Enumerable<VideoSourceScalarWhereInput>
  }

  export type PostCreateNestedOneWithoutVideoSourcesInput = {
    create?: XOR<PostCreateWithoutVideoSourcesInput, PostUncheckedCreateWithoutVideoSourcesInput>
    connectOrCreate?: PostCreateOrConnectWithoutVideoSourcesInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutVideoSourcesInput = {
    create?: XOR<PostCreateWithoutVideoSourcesInput, PostUncheckedCreateWithoutVideoSourcesInput>
    connectOrCreate?: PostCreateOrConnectWithoutVideoSourcesInput
    upsert?: PostUpsertWithoutVideoSourcesInput
    connect?: PostWhereUniqueInput
    update?: XOR<PostUpdateWithoutVideoSourcesInput, PostUncheckedUpdateWithoutVideoSourcesInput>
  }

  export type PostCreateNestedManyWithoutSourceInput = {
    create?: XOR<Enumerable<PostCreateWithoutSourceInput>, Enumerable<PostUncheckedCreateWithoutSourceInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutSourceInput>
    createMany?: PostCreateManySourceInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type PostUncheckedCreateNestedManyWithoutSourceInput = {
    create?: XOR<Enumerable<PostCreateWithoutSourceInput>, Enumerable<PostUncheckedCreateWithoutSourceInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutSourceInput>
    createMany?: PostCreateManySourceInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type PostUpdateManyWithoutSourceInput = {
    create?: XOR<Enumerable<PostCreateWithoutSourceInput>, Enumerable<PostUncheckedCreateWithoutSourceInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutSourceInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutSourceInput>
    createMany?: PostCreateManySourceInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutSourceInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutSourceInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type PostUncheckedUpdateManyWithoutSourceInput = {
    create?: XOR<Enumerable<PostCreateWithoutSourceInput>, Enumerable<PostUncheckedCreateWithoutSourceInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutSourceInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutSourceInput>
    createMany?: PostCreateManySourceInputEnvelope
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    connect?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutSourceInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutSourceInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutPostViewsInput = {
    create?: XOR<UserCreateWithoutPostViewsInput, UserUncheckedCreateWithoutPostViewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostViewsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPostViewsInput = {
    create?: XOR<UserCreateWithoutPostViewsInput, UserUncheckedCreateWithoutPostViewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostViewsInput
    upsert?: UserUpsertWithoutPostViewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPostViewsInput, UserUncheckedUpdateWithoutPostViewsInput>
  }

  export type UserCreateNestedOneWithoutReactedOnPostsInput = {
    create?: XOR<UserCreateWithoutReactedOnPostsInput, UserUncheckedCreateWithoutReactedOnPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactedOnPostsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPostReactionTypesFieldUpdateOperationsInput = {
    set?: PostReactionTypes
  }

  export type UserUpdateOneRequiredWithoutReactedOnPostsInput = {
    create?: XOR<UserCreateWithoutReactedOnPostsInput, UserUncheckedCreateWithoutReactedOnPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactedOnPostsInput
    upsert?: UserUpsertWithoutReactedOnPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutReactedOnPostsInput, UserUncheckedUpdateWithoutReactedOnPostsInput>
  }

  export type UserCreateNestedOneWithoutSessionInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    upsert?: UserUpsertWithoutSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedEnumUserStatusFilter = {
    equals?: UserStatus
    in?: Enumerable<UserStatus>
    notIn?: Enumerable<UserStatus>
    not?: NestedEnumUserStatusFilter | UserStatus
  }

  export type NestedEnumUserRoleFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleFilter | UserRole
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedEnumUserStatusWithAggregatesFilter = {
    equals?: UserStatus
    in?: Enumerable<UserStatus>
    notIn?: Enumerable<UserStatus>
    not?: NestedEnumUserStatusWithAggregatesFilter | UserStatus
    _count?: NestedIntFilter
    _min?: NestedEnumUserStatusFilter
    _max?: NestedEnumUserStatusFilter
  }

  export type NestedEnumUserRoleWithAggregatesFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleWithAggregatesFilter | UserRole
    _count?: NestedIntFilter
    _min?: NestedEnumUserRoleFilter
    _max?: NestedEnumUserRoleFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumPostReactionTypesFilter = {
    equals?: PostReactionTypes
    in?: Enumerable<PostReactionTypes>
    notIn?: Enumerable<PostReactionTypes>
    not?: NestedEnumPostReactionTypesFilter | PostReactionTypes
  }

  export type NestedEnumPostReactionTypesWithAggregatesFilter = {
    equals?: PostReactionTypes
    in?: Enumerable<PostReactionTypes>
    notIn?: Enumerable<PostReactionTypes>
    not?: NestedEnumPostReactionTypesWithAggregatesFilter | PostReactionTypes
    _count?: NestedIntFilter
    _min?: NestedEnumPostReactionTypesFilter
    _max?: NestedEnumPostReactionTypesFilter
  }

  export type PostCreateWithoutCreatedByInput = {
    id?: string
    title: string
    slug: string
    createdAt?: Date | string
    modifiedAt?: Date | string
    previewUrl: string
    description: string
    Source: SourceCreateNestedOneWithoutPostInput
    VideoSources?: VideoSourceCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    slug: string
    createdAt?: Date | string
    modifiedAt?: Date | string
    sourceId: string
    previewUrl: string
    description: string
    VideoSources?: VideoSourceUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostCreateManyCreatedByInputEnvelope = {
    data: Enumerable<PostCreateManyCreatedByInput>
    skipDuplicates?: boolean
  }

  export type PostViewCreateWithoutViewedByInput = {
    id: string
    viewedAt?: Date | string
  }

  export type PostViewUncheckedCreateWithoutViewedByInput = {
    id: string
    viewedAt?: Date | string
  }

  export type PostViewCreateOrConnectWithoutViewedByInput = {
    where: PostViewWhereUniqueInput
    create: XOR<PostViewCreateWithoutViewedByInput, PostViewUncheckedCreateWithoutViewedByInput>
  }

  export type PostViewCreateManyViewedByInputEnvelope = {
    data: Enumerable<PostViewCreateManyViewedByInput>
    skipDuplicates?: boolean
  }

  export type PostReactionCreateWithoutReactedByInput = {
    id: string
    reaction?: PostReactionTypes
    viewedAt?: Date | string
  }

  export type PostReactionUncheckedCreateWithoutReactedByInput = {
    id: string
    reaction?: PostReactionTypes
    viewedAt?: Date | string
  }

  export type PostReactionCreateOrConnectWithoutReactedByInput = {
    where: PostReactionWhereUniqueInput
    create: XOR<PostReactionCreateWithoutReactedByInput, PostReactionUncheckedCreateWithoutReactedByInput>
  }

  export type PostReactionCreateManyReactedByInputEnvelope = {
    data: Enumerable<PostReactionCreateManyReactedByInput>
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    expirationDate: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    expirationDate: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: Enumerable<SessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type FollowerCreateWithoutFollowerInput = {
    id: string
    FollowingUser: UserCreateNestedOneWithoutFollowedByInput
  }

  export type FollowerUncheckedCreateWithoutFollowerInput = {
    id: string
    followedByUserId: string
  }

  export type FollowerCreateOrConnectWithoutFollowerInput = {
    where: FollowerWhereUniqueInput
    create: XOR<FollowerCreateWithoutFollowerInput, FollowerUncheckedCreateWithoutFollowerInput>
  }

  export type FollowerCreateManyFollowerInputEnvelope = {
    data: Enumerable<FollowerCreateManyFollowerInput>
    skipDuplicates?: boolean
  }

  export type FollowerCreateWithoutFollowingUserInput = {
    id: string
    Follower: UserCreateNestedOneWithoutFollowingInput
  }

  export type FollowerUncheckedCreateWithoutFollowingUserInput = {
    id: string
    followingUserId: string
  }

  export type FollowerCreateOrConnectWithoutFollowingUserInput = {
    where: FollowerWhereUniqueInput
    create: XOR<FollowerCreateWithoutFollowingUserInput, FollowerUncheckedCreateWithoutFollowingUserInput>
  }

  export type FollowerCreateManyFollowingUserInputEnvelope = {
    data: Enumerable<FollowerCreateManyFollowingUserInput>
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
  }

  export type PostUpdateManyWithWhereWithoutCreatedByInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostInput>
  }

  export type PostScalarWhereInput = {
    AND?: Enumerable<PostScalarWhereInput>
    OR?: Enumerable<PostScalarWhereInput>
    NOT?: Enumerable<PostScalarWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    slug?: StringFilter | string
    createdById?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    modifiedAt?: DateTimeFilter | Date | string
    sourceId?: StringFilter | string
    previewUrl?: StringFilter | string
    description?: StringFilter | string
  }

  export type PostViewUpsertWithWhereUniqueWithoutViewedByInput = {
    where: PostViewWhereUniqueInput
    update: XOR<PostViewUpdateWithoutViewedByInput, PostViewUncheckedUpdateWithoutViewedByInput>
    create: XOR<PostViewCreateWithoutViewedByInput, PostViewUncheckedCreateWithoutViewedByInput>
  }

  export type PostViewUpdateWithWhereUniqueWithoutViewedByInput = {
    where: PostViewWhereUniqueInput
    data: XOR<PostViewUpdateWithoutViewedByInput, PostViewUncheckedUpdateWithoutViewedByInput>
  }

  export type PostViewUpdateManyWithWhereWithoutViewedByInput = {
    where: PostViewScalarWhereInput
    data: XOR<PostViewUpdateManyMutationInput, PostViewUncheckedUpdateManyWithoutPostViewsInput>
  }

  export type PostViewScalarWhereInput = {
    AND?: Enumerable<PostViewScalarWhereInput>
    OR?: Enumerable<PostViewScalarWhereInput>
    NOT?: Enumerable<PostViewScalarWhereInput>
    id?: StringFilter | string
    viewedBy?: StringFilter | string
    viewedAt?: DateTimeFilter | Date | string
  }

  export type PostReactionUpsertWithWhereUniqueWithoutReactedByInput = {
    where: PostReactionWhereUniqueInput
    update: XOR<PostReactionUpdateWithoutReactedByInput, PostReactionUncheckedUpdateWithoutReactedByInput>
    create: XOR<PostReactionCreateWithoutReactedByInput, PostReactionUncheckedCreateWithoutReactedByInput>
  }

  export type PostReactionUpdateWithWhereUniqueWithoutReactedByInput = {
    where: PostReactionWhereUniqueInput
    data: XOR<PostReactionUpdateWithoutReactedByInput, PostReactionUncheckedUpdateWithoutReactedByInput>
  }

  export type PostReactionUpdateManyWithWhereWithoutReactedByInput = {
    where: PostReactionScalarWhereInput
    data: XOR<PostReactionUpdateManyMutationInput, PostReactionUncheckedUpdateManyWithoutReactedOnPostsInput>
  }

  export type PostReactionScalarWhereInput = {
    AND?: Enumerable<PostReactionScalarWhereInput>
    OR?: Enumerable<PostReactionScalarWhereInput>
    NOT?: Enumerable<PostReactionScalarWhereInput>
    id?: StringFilter | string
    reaction?: EnumPostReactionTypesFilter | PostReactionTypes
    reactedBy?: StringFilter | string
    viewedAt?: DateTimeFilter | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutSessionInput>
  }

  export type SessionScalarWhereInput = {
    AND?: Enumerable<SessionScalarWhereInput>
    OR?: Enumerable<SessionScalarWhereInput>
    NOT?: Enumerable<SessionScalarWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    userId?: StringFilter | string
    expirationDate?: DateTimeFilter | Date | string
  }

  export type FollowerUpsertWithWhereUniqueWithoutFollowerInput = {
    where: FollowerWhereUniqueInput
    update: XOR<FollowerUpdateWithoutFollowerInput, FollowerUncheckedUpdateWithoutFollowerInput>
    create: XOR<FollowerCreateWithoutFollowerInput, FollowerUncheckedCreateWithoutFollowerInput>
  }

  export type FollowerUpdateWithWhereUniqueWithoutFollowerInput = {
    where: FollowerWhereUniqueInput
    data: XOR<FollowerUpdateWithoutFollowerInput, FollowerUncheckedUpdateWithoutFollowerInput>
  }

  export type FollowerUpdateManyWithWhereWithoutFollowerInput = {
    where: FollowerScalarWhereInput
    data: XOR<FollowerUpdateManyMutationInput, FollowerUncheckedUpdateManyWithoutFollowingInput>
  }

  export type FollowerScalarWhereInput = {
    AND?: Enumerable<FollowerScalarWhereInput>
    OR?: Enumerable<FollowerScalarWhereInput>
    NOT?: Enumerable<FollowerScalarWhereInput>
    id?: StringFilter | string
    followedByUserId?: StringFilter | string
    followingUserId?: StringFilter | string
  }

  export type FollowerUpsertWithWhereUniqueWithoutFollowingUserInput = {
    where: FollowerWhereUniqueInput
    update: XOR<FollowerUpdateWithoutFollowingUserInput, FollowerUncheckedUpdateWithoutFollowingUserInput>
    create: XOR<FollowerCreateWithoutFollowingUserInput, FollowerUncheckedCreateWithoutFollowingUserInput>
  }

  export type FollowerUpdateWithWhereUniqueWithoutFollowingUserInput = {
    where: FollowerWhereUniqueInput
    data: XOR<FollowerUpdateWithoutFollowingUserInput, FollowerUncheckedUpdateWithoutFollowingUserInput>
  }

  export type FollowerUpdateManyWithWhereWithoutFollowingUserInput = {
    where: FollowerScalarWhereInput
    data: XOR<FollowerUpdateManyMutationInput, FollowerUncheckedUpdateManyWithoutFollowedByInput>
  }

  export type UserCreateWithoutFollowedByInput = {
    id?: string
    email: string
    name?: string | null
    profilePicture?: string | null
    profileSlug: string
    UserStatus?: UserStatus
    role?: UserRole
    createdAt?: Date | string
    modifiedAt?: Date | string
    Post?: PostCreateNestedManyWithoutCreatedByInput
    PostViews?: PostViewCreateNestedManyWithoutViewedByInput
    ReactedOnPosts?: PostReactionCreateNestedManyWithoutReactedByInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Following?: FollowerCreateNestedManyWithoutFollowerInput
  }

  export type UserUncheckedCreateWithoutFollowedByInput = {
    id?: string
    email: string
    name?: string | null
    profilePicture?: string | null
    profileSlug: string
    UserStatus?: UserStatus
    role?: UserRole
    createdAt?: Date | string
    modifiedAt?: Date | string
    Post?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    PostViews?: PostViewUncheckedCreateNestedManyWithoutViewedByInput
    ReactedOnPosts?: PostReactionUncheckedCreateNestedManyWithoutReactedByInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Following?: FollowerUncheckedCreateNestedManyWithoutFollowerInput
  }

  export type UserCreateOrConnectWithoutFollowedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowedByInput, UserUncheckedCreateWithoutFollowedByInput>
  }

  export type UserCreateWithoutFollowingInput = {
    id?: string
    email: string
    name?: string | null
    profilePicture?: string | null
    profileSlug: string
    UserStatus?: UserStatus
    role?: UserRole
    createdAt?: Date | string
    modifiedAt?: Date | string
    Post?: PostCreateNestedManyWithoutCreatedByInput
    PostViews?: PostViewCreateNestedManyWithoutViewedByInput
    ReactedOnPosts?: PostReactionCreateNestedManyWithoutReactedByInput
    Session?: SessionCreateNestedManyWithoutUserInput
    FollowedBy?: FollowerCreateNestedManyWithoutFollowingUserInput
  }

  export type UserUncheckedCreateWithoutFollowingInput = {
    id?: string
    email: string
    name?: string | null
    profilePicture?: string | null
    profileSlug: string
    UserStatus?: UserStatus
    role?: UserRole
    createdAt?: Date | string
    modifiedAt?: Date | string
    Post?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    PostViews?: PostViewUncheckedCreateNestedManyWithoutViewedByInput
    ReactedOnPosts?: PostReactionUncheckedCreateNestedManyWithoutReactedByInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    FollowedBy?: FollowerUncheckedCreateNestedManyWithoutFollowingUserInput
  }

  export type UserCreateOrConnectWithoutFollowingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
  }

  export type UserUpsertWithoutFollowedByInput = {
    update: XOR<UserUpdateWithoutFollowedByInput, UserUncheckedUpdateWithoutFollowedByInput>
    create: XOR<UserCreateWithoutFollowedByInput, UserUncheckedCreateWithoutFollowedByInput>
  }

  export type UserUpdateWithoutFollowedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    profileSlug?: StringFieldUpdateOperationsInput | string
    UserStatus?: EnumUserStatusFieldUpdateOperationsInput | UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Post?: PostUpdateManyWithoutCreatedByInput
    PostViews?: PostViewUpdateManyWithoutViewedByInput
    ReactedOnPosts?: PostReactionUpdateManyWithoutReactedByInput
    Session?: SessionUpdateManyWithoutUserInput
    Following?: FollowerUpdateManyWithoutFollowerInput
  }

  export type UserUncheckedUpdateWithoutFollowedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    profileSlug?: StringFieldUpdateOperationsInput | string
    UserStatus?: EnumUserStatusFieldUpdateOperationsInput | UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Post?: PostUncheckedUpdateManyWithoutCreatedByInput
    PostViews?: PostViewUncheckedUpdateManyWithoutViewedByInput
    ReactedOnPosts?: PostReactionUncheckedUpdateManyWithoutReactedByInput
    Session?: SessionUncheckedUpdateManyWithoutUserInput
    Following?: FollowerUncheckedUpdateManyWithoutFollowerInput
  }

  export type UserUpsertWithoutFollowingInput = {
    update: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
  }

  export type UserUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    profileSlug?: StringFieldUpdateOperationsInput | string
    UserStatus?: EnumUserStatusFieldUpdateOperationsInput | UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Post?: PostUpdateManyWithoutCreatedByInput
    PostViews?: PostViewUpdateManyWithoutViewedByInput
    ReactedOnPosts?: PostReactionUpdateManyWithoutReactedByInput
    Session?: SessionUpdateManyWithoutUserInput
    FollowedBy?: FollowerUpdateManyWithoutFollowingUserInput
  }

  export type UserUncheckedUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    profileSlug?: StringFieldUpdateOperationsInput | string
    UserStatus?: EnumUserStatusFieldUpdateOperationsInput | UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Post?: PostUncheckedUpdateManyWithoutCreatedByInput
    PostViews?: PostViewUncheckedUpdateManyWithoutViewedByInput
    ReactedOnPosts?: PostReactionUncheckedUpdateManyWithoutReactedByInput
    Session?: SessionUncheckedUpdateManyWithoutUserInput
    FollowedBy?: FollowerUncheckedUpdateManyWithoutFollowingUserInput
  }

  export type UserCreateWithoutPostInput = {
    id?: string
    email: string
    name?: string | null
    profilePicture?: string | null
    profileSlug: string
    UserStatus?: UserStatus
    role?: UserRole
    createdAt?: Date | string
    modifiedAt?: Date | string
    PostViews?: PostViewCreateNestedManyWithoutViewedByInput
    ReactedOnPosts?: PostReactionCreateNestedManyWithoutReactedByInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Following?: FollowerCreateNestedManyWithoutFollowerInput
    FollowedBy?: FollowerCreateNestedManyWithoutFollowingUserInput
  }

  export type UserUncheckedCreateWithoutPostInput = {
    id?: string
    email: string
    name?: string | null
    profilePicture?: string | null
    profileSlug: string
    UserStatus?: UserStatus
    role?: UserRole
    createdAt?: Date | string
    modifiedAt?: Date | string
    PostViews?: PostViewUncheckedCreateNestedManyWithoutViewedByInput
    ReactedOnPosts?: PostReactionUncheckedCreateNestedManyWithoutReactedByInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Following?: FollowerUncheckedCreateNestedManyWithoutFollowerInput
    FollowedBy?: FollowerUncheckedCreateNestedManyWithoutFollowingUserInput
  }

  export type UserCreateOrConnectWithoutPostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
  }

  export type SourceCreateWithoutPostInput = {
    id?: string
    name: string
    url: string
    imageSrc: string
  }

  export type SourceUncheckedCreateWithoutPostInput = {
    id?: string
    name: string
    url: string
    imageSrc: string
  }

  export type SourceCreateOrConnectWithoutPostInput = {
    where: SourceWhereUniqueInput
    create: XOR<SourceCreateWithoutPostInput, SourceUncheckedCreateWithoutPostInput>
  }

  export type VideoSourceCreateWithoutPostInput = {
    id?: string
    type: string
    url: string
  }

  export type VideoSourceUncheckedCreateWithoutPostInput = {
    id?: string
    type: string
    url: string
  }

  export type VideoSourceCreateOrConnectWithoutPostInput = {
    where: VideoSourceWhereUniqueInput
    create: XOR<VideoSourceCreateWithoutPostInput, VideoSourceUncheckedCreateWithoutPostInput>
  }

  export type VideoSourceCreateManyPostInputEnvelope = {
    data: Enumerable<VideoSourceCreateManyPostInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostInput = {
    update: XOR<UserUpdateWithoutPostInput, UserUncheckedUpdateWithoutPostInput>
    create: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>
  }

  export type UserUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    profileSlug?: StringFieldUpdateOperationsInput | string
    UserStatus?: EnumUserStatusFieldUpdateOperationsInput | UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PostViews?: PostViewUpdateManyWithoutViewedByInput
    ReactedOnPosts?: PostReactionUpdateManyWithoutReactedByInput
    Session?: SessionUpdateManyWithoutUserInput
    Following?: FollowerUpdateManyWithoutFollowerInput
    FollowedBy?: FollowerUpdateManyWithoutFollowingUserInput
  }

  export type UserUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    profileSlug?: StringFieldUpdateOperationsInput | string
    UserStatus?: EnumUserStatusFieldUpdateOperationsInput | UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PostViews?: PostViewUncheckedUpdateManyWithoutViewedByInput
    ReactedOnPosts?: PostReactionUncheckedUpdateManyWithoutReactedByInput
    Session?: SessionUncheckedUpdateManyWithoutUserInput
    Following?: FollowerUncheckedUpdateManyWithoutFollowerInput
    FollowedBy?: FollowerUncheckedUpdateManyWithoutFollowingUserInput
  }

  export type SourceUpsertWithoutPostInput = {
    update: XOR<SourceUpdateWithoutPostInput, SourceUncheckedUpdateWithoutPostInput>
    create: XOR<SourceCreateWithoutPostInput, SourceUncheckedCreateWithoutPostInput>
  }

  export type SourceUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
  }

  export type SourceUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imageSrc?: StringFieldUpdateOperationsInput | string
  }

  export type VideoSourceUpsertWithWhereUniqueWithoutPostInput = {
    where: VideoSourceWhereUniqueInput
    update: XOR<VideoSourceUpdateWithoutPostInput, VideoSourceUncheckedUpdateWithoutPostInput>
    create: XOR<VideoSourceCreateWithoutPostInput, VideoSourceUncheckedCreateWithoutPostInput>
  }

  export type VideoSourceUpdateWithWhereUniqueWithoutPostInput = {
    where: VideoSourceWhereUniqueInput
    data: XOR<VideoSourceUpdateWithoutPostInput, VideoSourceUncheckedUpdateWithoutPostInput>
  }

  export type VideoSourceUpdateManyWithWhereWithoutPostInput = {
    where: VideoSourceScalarWhereInput
    data: XOR<VideoSourceUpdateManyMutationInput, VideoSourceUncheckedUpdateManyWithoutVideoSourcesInput>
  }

  export type VideoSourceScalarWhereInput = {
    AND?: Enumerable<VideoSourceScalarWhereInput>
    OR?: Enumerable<VideoSourceScalarWhereInput>
    NOT?: Enumerable<VideoSourceScalarWhereInput>
    id?: StringFilter | string
    postId?: StringFilter | string
    type?: StringFilter | string
    url?: StringFilter | string
  }

  export type PostCreateWithoutVideoSourcesInput = {
    id?: string
    title: string
    slug: string
    createdAt?: Date | string
    modifiedAt?: Date | string
    previewUrl: string
    description: string
    CreatedBy: UserCreateNestedOneWithoutPostInput
    Source: SourceCreateNestedOneWithoutPostInput
  }

  export type PostUncheckedCreateWithoutVideoSourcesInput = {
    id?: string
    title: string
    slug: string
    createdById: string
    createdAt?: Date | string
    modifiedAt?: Date | string
    sourceId: string
    previewUrl: string
    description: string
  }

  export type PostCreateOrConnectWithoutVideoSourcesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutVideoSourcesInput, PostUncheckedCreateWithoutVideoSourcesInput>
  }

  export type PostUpsertWithoutVideoSourcesInput = {
    update: XOR<PostUpdateWithoutVideoSourcesInput, PostUncheckedUpdateWithoutVideoSourcesInput>
    create: XOR<PostCreateWithoutVideoSourcesInput, PostUncheckedCreateWithoutVideoSourcesInput>
  }

  export type PostUpdateWithoutVideoSourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previewUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    CreatedBy?: UserUpdateOneRequiredWithoutPostInput
    Source?: SourceUpdateOneRequiredWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutVideoSourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceId?: StringFieldUpdateOperationsInput | string
    previewUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateWithoutSourceInput = {
    id?: string
    title: string
    slug: string
    createdAt?: Date | string
    modifiedAt?: Date | string
    previewUrl: string
    description: string
    CreatedBy: UserCreateNestedOneWithoutPostInput
    VideoSources?: VideoSourceCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutSourceInput = {
    id?: string
    title: string
    slug: string
    createdById: string
    createdAt?: Date | string
    modifiedAt?: Date | string
    previewUrl: string
    description: string
    VideoSources?: VideoSourceUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutSourceInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutSourceInput, PostUncheckedCreateWithoutSourceInput>
  }

  export type PostCreateManySourceInputEnvelope = {
    data: Enumerable<PostCreateManySourceInput>
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutSourceInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutSourceInput, PostUncheckedUpdateWithoutSourceInput>
    create: XOR<PostCreateWithoutSourceInput, PostUncheckedCreateWithoutSourceInput>
  }

  export type PostUpdateWithWhereUniqueWithoutSourceInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutSourceInput, PostUncheckedUpdateWithoutSourceInput>
  }

  export type PostUpdateManyWithWhereWithoutSourceInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostInput>
  }

  export type UserCreateWithoutPostViewsInput = {
    id?: string
    email: string
    name?: string | null
    profilePicture?: string | null
    profileSlug: string
    UserStatus?: UserStatus
    role?: UserRole
    createdAt?: Date | string
    modifiedAt?: Date | string
    Post?: PostCreateNestedManyWithoutCreatedByInput
    ReactedOnPosts?: PostReactionCreateNestedManyWithoutReactedByInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Following?: FollowerCreateNestedManyWithoutFollowerInput
    FollowedBy?: FollowerCreateNestedManyWithoutFollowingUserInput
  }

  export type UserUncheckedCreateWithoutPostViewsInput = {
    id?: string
    email: string
    name?: string | null
    profilePicture?: string | null
    profileSlug: string
    UserStatus?: UserStatus
    role?: UserRole
    createdAt?: Date | string
    modifiedAt?: Date | string
    Post?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    ReactedOnPosts?: PostReactionUncheckedCreateNestedManyWithoutReactedByInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Following?: FollowerUncheckedCreateNestedManyWithoutFollowerInput
    FollowedBy?: FollowerUncheckedCreateNestedManyWithoutFollowingUserInput
  }

  export type UserCreateOrConnectWithoutPostViewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostViewsInput, UserUncheckedCreateWithoutPostViewsInput>
  }

  export type UserUpsertWithoutPostViewsInput = {
    update: XOR<UserUpdateWithoutPostViewsInput, UserUncheckedUpdateWithoutPostViewsInput>
    create: XOR<UserCreateWithoutPostViewsInput, UserUncheckedCreateWithoutPostViewsInput>
  }

  export type UserUpdateWithoutPostViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    profileSlug?: StringFieldUpdateOperationsInput | string
    UserStatus?: EnumUserStatusFieldUpdateOperationsInput | UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Post?: PostUpdateManyWithoutCreatedByInput
    ReactedOnPosts?: PostReactionUpdateManyWithoutReactedByInput
    Session?: SessionUpdateManyWithoutUserInput
    Following?: FollowerUpdateManyWithoutFollowerInput
    FollowedBy?: FollowerUpdateManyWithoutFollowingUserInput
  }

  export type UserUncheckedUpdateWithoutPostViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    profileSlug?: StringFieldUpdateOperationsInput | string
    UserStatus?: EnumUserStatusFieldUpdateOperationsInput | UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Post?: PostUncheckedUpdateManyWithoutCreatedByInput
    ReactedOnPosts?: PostReactionUncheckedUpdateManyWithoutReactedByInput
    Session?: SessionUncheckedUpdateManyWithoutUserInput
    Following?: FollowerUncheckedUpdateManyWithoutFollowerInput
    FollowedBy?: FollowerUncheckedUpdateManyWithoutFollowingUserInput
  }

  export type UserCreateWithoutReactedOnPostsInput = {
    id?: string
    email: string
    name?: string | null
    profilePicture?: string | null
    profileSlug: string
    UserStatus?: UserStatus
    role?: UserRole
    createdAt?: Date | string
    modifiedAt?: Date | string
    Post?: PostCreateNestedManyWithoutCreatedByInput
    PostViews?: PostViewCreateNestedManyWithoutViewedByInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Following?: FollowerCreateNestedManyWithoutFollowerInput
    FollowedBy?: FollowerCreateNestedManyWithoutFollowingUserInput
  }

  export type UserUncheckedCreateWithoutReactedOnPostsInput = {
    id?: string
    email: string
    name?: string | null
    profilePicture?: string | null
    profileSlug: string
    UserStatus?: UserStatus
    role?: UserRole
    createdAt?: Date | string
    modifiedAt?: Date | string
    Post?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    PostViews?: PostViewUncheckedCreateNestedManyWithoutViewedByInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Following?: FollowerUncheckedCreateNestedManyWithoutFollowerInput
    FollowedBy?: FollowerUncheckedCreateNestedManyWithoutFollowingUserInput
  }

  export type UserCreateOrConnectWithoutReactedOnPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReactedOnPostsInput, UserUncheckedCreateWithoutReactedOnPostsInput>
  }

  export type UserUpsertWithoutReactedOnPostsInput = {
    update: XOR<UserUpdateWithoutReactedOnPostsInput, UserUncheckedUpdateWithoutReactedOnPostsInput>
    create: XOR<UserCreateWithoutReactedOnPostsInput, UserUncheckedCreateWithoutReactedOnPostsInput>
  }

  export type UserUpdateWithoutReactedOnPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    profileSlug?: StringFieldUpdateOperationsInput | string
    UserStatus?: EnumUserStatusFieldUpdateOperationsInput | UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Post?: PostUpdateManyWithoutCreatedByInput
    PostViews?: PostViewUpdateManyWithoutViewedByInput
    Session?: SessionUpdateManyWithoutUserInput
    Following?: FollowerUpdateManyWithoutFollowerInput
    FollowedBy?: FollowerUpdateManyWithoutFollowingUserInput
  }

  export type UserUncheckedUpdateWithoutReactedOnPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    profileSlug?: StringFieldUpdateOperationsInput | string
    UserStatus?: EnumUserStatusFieldUpdateOperationsInput | UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Post?: PostUncheckedUpdateManyWithoutCreatedByInput
    PostViews?: PostViewUncheckedUpdateManyWithoutViewedByInput
    Session?: SessionUncheckedUpdateManyWithoutUserInput
    Following?: FollowerUncheckedUpdateManyWithoutFollowerInput
    FollowedBy?: FollowerUncheckedUpdateManyWithoutFollowingUserInput
  }

  export type UserCreateWithoutSessionInput = {
    id?: string
    email: string
    name?: string | null
    profilePicture?: string | null
    profileSlug: string
    UserStatus?: UserStatus
    role?: UserRole
    createdAt?: Date | string
    modifiedAt?: Date | string
    Post?: PostCreateNestedManyWithoutCreatedByInput
    PostViews?: PostViewCreateNestedManyWithoutViewedByInput
    ReactedOnPosts?: PostReactionCreateNestedManyWithoutReactedByInput
    Following?: FollowerCreateNestedManyWithoutFollowerInput
    FollowedBy?: FollowerCreateNestedManyWithoutFollowingUserInput
  }

  export type UserUncheckedCreateWithoutSessionInput = {
    id?: string
    email: string
    name?: string | null
    profilePicture?: string | null
    profileSlug: string
    UserStatus?: UserStatus
    role?: UserRole
    createdAt?: Date | string
    modifiedAt?: Date | string
    Post?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    PostViews?: PostViewUncheckedCreateNestedManyWithoutViewedByInput
    ReactedOnPosts?: PostReactionUncheckedCreateNestedManyWithoutReactedByInput
    Following?: FollowerUncheckedCreateNestedManyWithoutFollowerInput
    FollowedBy?: FollowerUncheckedCreateNestedManyWithoutFollowingUserInput
  }

  export type UserCreateOrConnectWithoutSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutSessionInput = {
    update: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
  }

  export type UserUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    profileSlug?: StringFieldUpdateOperationsInput | string
    UserStatus?: EnumUserStatusFieldUpdateOperationsInput | UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Post?: PostUpdateManyWithoutCreatedByInput
    PostViews?: PostViewUpdateManyWithoutViewedByInput
    ReactedOnPosts?: PostReactionUpdateManyWithoutReactedByInput
    Following?: FollowerUpdateManyWithoutFollowerInput
    FollowedBy?: FollowerUpdateManyWithoutFollowingUserInput
  }

  export type UserUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    profileSlug?: StringFieldUpdateOperationsInput | string
    UserStatus?: EnumUserStatusFieldUpdateOperationsInput | UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Post?: PostUncheckedUpdateManyWithoutCreatedByInput
    PostViews?: PostViewUncheckedUpdateManyWithoutViewedByInput
    ReactedOnPosts?: PostReactionUncheckedUpdateManyWithoutReactedByInput
    Following?: FollowerUncheckedUpdateManyWithoutFollowerInput
    FollowedBy?: FollowerUncheckedUpdateManyWithoutFollowingUserInput
  }

  export type PostCreateManyCreatedByInput = {
    id?: string
    title: string
    slug: string
    createdAt?: Date | string
    modifiedAt?: Date | string
    sourceId: string
    previewUrl: string
    description: string
  }

  export type PostViewCreateManyViewedByInput = {
    id: string
    viewedAt?: Date | string
  }

  export type PostReactionCreateManyReactedByInput = {
    id: string
    reaction?: PostReactionTypes
    viewedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    expirationDate: Date | string
  }

  export type FollowerCreateManyFollowerInput = {
    id: string
    followedByUserId: string
  }

  export type FollowerCreateManyFollowingUserInput = {
    id: string
    followingUserId: string
  }

  export type PostUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previewUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Source?: SourceUpdateOneRequiredWithoutPostInput
    VideoSources?: VideoSourceUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceId?: StringFieldUpdateOperationsInput | string
    previewUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    VideoSources?: VideoSourceUncheckedUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceId?: StringFieldUpdateOperationsInput | string
    previewUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PostViewUpdateWithoutViewedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostViewUncheckedUpdateWithoutViewedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostViewUncheckedUpdateManyWithoutPostViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReactionUpdateWithoutReactedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    reaction?: EnumPostReactionTypesFieldUpdateOperationsInput | PostReactionTypes
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReactionUncheckedUpdateWithoutReactedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    reaction?: EnumPostReactionTypesFieldUpdateOperationsInput | PostReactionTypes
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReactionUncheckedUpdateManyWithoutReactedOnPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reaction?: EnumPostReactionTypesFieldUpdateOperationsInput | PostReactionTypes
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowerUpdateWithoutFollowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    FollowingUser?: UserUpdateOneRequiredWithoutFollowedByInput
  }

  export type FollowerUncheckedUpdateWithoutFollowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    followedByUserId?: StringFieldUpdateOperationsInput | string
  }

  export type FollowerUncheckedUpdateManyWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    followedByUserId?: StringFieldUpdateOperationsInput | string
  }

  export type FollowerUpdateWithoutFollowingUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    Follower?: UserUpdateOneRequiredWithoutFollowingInput
  }

  export type FollowerUncheckedUpdateWithoutFollowingUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    followingUserId?: StringFieldUpdateOperationsInput | string
  }

  export type FollowerUncheckedUpdateManyWithoutFollowedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    followingUserId?: StringFieldUpdateOperationsInput | string
  }

  export type VideoSourceCreateManyPostInput = {
    id?: string
    type: string
    url: string
  }

  export type VideoSourceUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type VideoSourceUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type VideoSourceUncheckedUpdateManyWithoutVideoSourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManySourceInput = {
    id?: string
    title: string
    slug: string
    createdById: string
    createdAt?: Date | string
    modifiedAt?: Date | string
    previewUrl: string
    description: string
  }

  export type PostUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previewUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    CreatedBy?: UserUpdateOneRequiredWithoutPostInput
    VideoSources?: VideoSourceUpdateManyWithoutPostInput
  }

  export type PostUncheckedUpdateWithoutSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    previewUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    VideoSources?: VideoSourceUncheckedUpdateManyWithoutPostInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}