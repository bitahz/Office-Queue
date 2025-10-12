
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model COUNTER
 * 
 */
export type COUNTER = $Result.DefaultSelection<Prisma.$COUNTERPayload>
/**
 * Model SERVICE
 * 
 */
export type SERVICE = $Result.DefaultSelection<Prisma.$SERVICEPayload>
/**
 * Model COUNTER_SERVICE
 * 
 */
export type COUNTER_SERVICE = $Result.DefaultSelection<Prisma.$COUNTER_SERVICEPayload>
/**
 * Model TICKET
 * 
 */
export type TICKET = $Result.DefaultSelection<Prisma.$TICKETPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more COUNTERS
 * const cOUNTERS = await prisma.cOUNTER.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more COUNTERS
   * const cOUNTERS = await prisma.cOUNTER.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cOUNTER`: Exposes CRUD operations for the **COUNTER** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more COUNTERS
    * const cOUNTERS = await prisma.cOUNTER.findMany()
    * ```
    */
  get cOUNTER(): Prisma.COUNTERDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sERVICE`: Exposes CRUD operations for the **SERVICE** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SERVICES
    * const sERVICES = await prisma.sERVICE.findMany()
    * ```
    */
  get sERVICE(): Prisma.SERVICEDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cOUNTER_SERVICE`: Exposes CRUD operations for the **COUNTER_SERVICE** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more COUNTER_SERVICES
    * const cOUNTER_SERVICES = await prisma.cOUNTER_SERVICE.findMany()
    * ```
    */
  get cOUNTER_SERVICE(): Prisma.COUNTER_SERVICEDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tICKET`: Exposes CRUD operations for the **TICKET** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TICKETS
    * const tICKETS = await prisma.tICKET.findMany()
    * ```
    */
  get tICKET(): Prisma.TICKETDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    COUNTER: 'COUNTER',
    SERVICE: 'SERVICE',
    COUNTER_SERVICE: 'COUNTER_SERVICE',
    TICKET: 'TICKET'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cOUNTER" | "sERVICE" | "cOUNTER_SERVICE" | "tICKET"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      COUNTER: {
        payload: Prisma.$COUNTERPayload<ExtArgs>
        fields: Prisma.COUNTERFieldRefs
        operations: {
          findUnique: {
            args: Prisma.COUNTERFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COUNTERPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.COUNTERFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COUNTERPayload>
          }
          findFirst: {
            args: Prisma.COUNTERFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COUNTERPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.COUNTERFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COUNTERPayload>
          }
          findMany: {
            args: Prisma.COUNTERFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COUNTERPayload>[]
          }
          create: {
            args: Prisma.COUNTERCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COUNTERPayload>
          }
          createMany: {
            args: Prisma.COUNTERCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.COUNTERCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COUNTERPayload>[]
          }
          delete: {
            args: Prisma.COUNTERDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COUNTERPayload>
          }
          update: {
            args: Prisma.COUNTERUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COUNTERPayload>
          }
          deleteMany: {
            args: Prisma.COUNTERDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.COUNTERUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.COUNTERUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COUNTERPayload>[]
          }
          upsert: {
            args: Prisma.COUNTERUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COUNTERPayload>
          }
          aggregate: {
            args: Prisma.COUNTERAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCOUNTER>
          }
          groupBy: {
            args: Prisma.COUNTERGroupByArgs<ExtArgs>
            result: $Utils.Optional<COUNTERGroupByOutputType>[]
          }
          count: {
            args: Prisma.COUNTERCountArgs<ExtArgs>
            result: $Utils.Optional<COUNTERCountAggregateOutputType> | number
          }
        }
      }
      SERVICE: {
        payload: Prisma.$SERVICEPayload<ExtArgs>
        fields: Prisma.SERVICEFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SERVICEFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SERVICEFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>
          }
          findFirst: {
            args: Prisma.SERVICEFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SERVICEFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>
          }
          findMany: {
            args: Prisma.SERVICEFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>[]
          }
          create: {
            args: Prisma.SERVICECreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>
          }
          createMany: {
            args: Prisma.SERVICECreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SERVICECreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>[]
          }
          delete: {
            args: Prisma.SERVICEDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>
          }
          update: {
            args: Prisma.SERVICEUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>
          }
          deleteMany: {
            args: Prisma.SERVICEDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SERVICEUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SERVICEUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>[]
          }
          upsert: {
            args: Prisma.SERVICEUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SERVICEPayload>
          }
          aggregate: {
            args: Prisma.SERVICEAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSERVICE>
          }
          groupBy: {
            args: Prisma.SERVICEGroupByArgs<ExtArgs>
            result: $Utils.Optional<SERVICEGroupByOutputType>[]
          }
          count: {
            args: Prisma.SERVICECountArgs<ExtArgs>
            result: $Utils.Optional<SERVICECountAggregateOutputType> | number
          }
        }
      }
      COUNTER_SERVICE: {
        payload: Prisma.$COUNTER_SERVICEPayload<ExtArgs>
        fields: Prisma.COUNTER_SERVICEFieldRefs
        operations: {
          findUnique: {
            args: Prisma.COUNTER_SERVICEFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COUNTER_SERVICEPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.COUNTER_SERVICEFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COUNTER_SERVICEPayload>
          }
          findFirst: {
            args: Prisma.COUNTER_SERVICEFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COUNTER_SERVICEPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.COUNTER_SERVICEFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COUNTER_SERVICEPayload>
          }
          findMany: {
            args: Prisma.COUNTER_SERVICEFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COUNTER_SERVICEPayload>[]
          }
          create: {
            args: Prisma.COUNTER_SERVICECreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COUNTER_SERVICEPayload>
          }
          createMany: {
            args: Prisma.COUNTER_SERVICECreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.COUNTER_SERVICECreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COUNTER_SERVICEPayload>[]
          }
          delete: {
            args: Prisma.COUNTER_SERVICEDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COUNTER_SERVICEPayload>
          }
          update: {
            args: Prisma.COUNTER_SERVICEUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COUNTER_SERVICEPayload>
          }
          deleteMany: {
            args: Prisma.COUNTER_SERVICEDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.COUNTER_SERVICEUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.COUNTER_SERVICEUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COUNTER_SERVICEPayload>[]
          }
          upsert: {
            args: Prisma.COUNTER_SERVICEUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COUNTER_SERVICEPayload>
          }
          aggregate: {
            args: Prisma.COUNTER_SERVICEAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCOUNTER_SERVICE>
          }
          groupBy: {
            args: Prisma.COUNTER_SERVICEGroupByArgs<ExtArgs>
            result: $Utils.Optional<COUNTER_SERVICEGroupByOutputType>[]
          }
          count: {
            args: Prisma.COUNTER_SERVICECountArgs<ExtArgs>
            result: $Utils.Optional<COUNTER_SERVICECountAggregateOutputType> | number
          }
        }
      }
      TICKET: {
        payload: Prisma.$TICKETPayload<ExtArgs>
        fields: Prisma.TICKETFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TICKETFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TICKETPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TICKETFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TICKETPayload>
          }
          findFirst: {
            args: Prisma.TICKETFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TICKETPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TICKETFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TICKETPayload>
          }
          findMany: {
            args: Prisma.TICKETFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TICKETPayload>[]
          }
          create: {
            args: Prisma.TICKETCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TICKETPayload>
          }
          createMany: {
            args: Prisma.TICKETCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TICKETCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TICKETPayload>[]
          }
          delete: {
            args: Prisma.TICKETDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TICKETPayload>
          }
          update: {
            args: Prisma.TICKETUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TICKETPayload>
          }
          deleteMany: {
            args: Prisma.TICKETDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TICKETUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TICKETUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TICKETPayload>[]
          }
          upsert: {
            args: Prisma.TICKETUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TICKETPayload>
          }
          aggregate: {
            args: Prisma.TICKETAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTICKET>
          }
          groupBy: {
            args: Prisma.TICKETGroupByArgs<ExtArgs>
            result: $Utils.Optional<TICKETGroupByOutputType>[]
          }
          count: {
            args: Prisma.TICKETCountArgs<ExtArgs>
            result: $Utils.Optional<TICKETCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cOUNTER?: COUNTEROmit
    sERVICE?: SERVICEOmit
    cOUNTER_SERVICE?: COUNTER_SERVICEOmit
    tICKET?: TICKETOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type COUNTERCountOutputType
   */

  export type COUNTERCountOutputType = {
    counterServices: number
    tickets: number
  }

  export type COUNTERCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    counterServices?: boolean | COUNTERCountOutputTypeCountCounterServicesArgs
    tickets?: boolean | COUNTERCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * COUNTERCountOutputType without action
   */
  export type COUNTERCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTERCountOutputType
     */
    select?: COUNTERCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * COUNTERCountOutputType without action
   */
  export type COUNTERCountOutputTypeCountCounterServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: COUNTER_SERVICEWhereInput
  }

  /**
   * COUNTERCountOutputType without action
   */
  export type COUNTERCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TICKETWhereInput
  }


  /**
   * Count Type SERVICECountOutputType
   */

  export type SERVICECountOutputType = {
    counterServices: number
    tickets: number
  }

  export type SERVICECountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    counterServices?: boolean | SERVICECountOutputTypeCountCounterServicesArgs
    tickets?: boolean | SERVICECountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * SERVICECountOutputType without action
   */
  export type SERVICECountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICECountOutputType
     */
    select?: SERVICECountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SERVICECountOutputType without action
   */
  export type SERVICECountOutputTypeCountCounterServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: COUNTER_SERVICEWhereInput
  }

  /**
   * SERVICECountOutputType without action
   */
  export type SERVICECountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TICKETWhereInput
  }


  /**
   * Models
   */

  /**
   * Model COUNTER
   */

  export type AggregateCOUNTER = {
    _count: COUNTERCountAggregateOutputType | null
    _avg: COUNTERAvgAggregateOutputType | null
    _sum: COUNTERSumAggregateOutputType | null
    _min: COUNTERMinAggregateOutputType | null
    _max: COUNTERMaxAggregateOutputType | null
  }

  export type COUNTERAvgAggregateOutputType = {
    CounterID: number | null
    CounterNumber: number | null
  }

  export type COUNTERSumAggregateOutputType = {
    CounterID: number | null
    CounterNumber: number | null
  }

  export type COUNTERMinAggregateOutputType = {
    CounterID: number | null
    CounterNumber: number | null
  }

  export type COUNTERMaxAggregateOutputType = {
    CounterID: number | null
    CounterNumber: number | null
  }

  export type COUNTERCountAggregateOutputType = {
    CounterID: number
    CounterNumber: number
    _all: number
  }


  export type COUNTERAvgAggregateInputType = {
    CounterID?: true
    CounterNumber?: true
  }

  export type COUNTERSumAggregateInputType = {
    CounterID?: true
    CounterNumber?: true
  }

  export type COUNTERMinAggregateInputType = {
    CounterID?: true
    CounterNumber?: true
  }

  export type COUNTERMaxAggregateInputType = {
    CounterID?: true
    CounterNumber?: true
  }

  export type COUNTERCountAggregateInputType = {
    CounterID?: true
    CounterNumber?: true
    _all?: true
  }

  export type COUNTERAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which COUNTER to aggregate.
     */
    where?: COUNTERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COUNTERS to fetch.
     */
    orderBy?: COUNTEROrderByWithRelationInput | COUNTEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: COUNTERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COUNTERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COUNTERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned COUNTERS
    **/
    _count?: true | COUNTERCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: COUNTERAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: COUNTERSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: COUNTERMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: COUNTERMaxAggregateInputType
  }

  export type GetCOUNTERAggregateType<T extends COUNTERAggregateArgs> = {
        [P in keyof T & keyof AggregateCOUNTER]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCOUNTER[P]>
      : GetScalarType<T[P], AggregateCOUNTER[P]>
  }




  export type COUNTERGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: COUNTERWhereInput
    orderBy?: COUNTEROrderByWithAggregationInput | COUNTEROrderByWithAggregationInput[]
    by: COUNTERScalarFieldEnum[] | COUNTERScalarFieldEnum
    having?: COUNTERScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: COUNTERCountAggregateInputType | true
    _avg?: COUNTERAvgAggregateInputType
    _sum?: COUNTERSumAggregateInputType
    _min?: COUNTERMinAggregateInputType
    _max?: COUNTERMaxAggregateInputType
  }

  export type COUNTERGroupByOutputType = {
    CounterID: number
    CounterNumber: number
    _count: COUNTERCountAggregateOutputType | null
    _avg: COUNTERAvgAggregateOutputType | null
    _sum: COUNTERSumAggregateOutputType | null
    _min: COUNTERMinAggregateOutputType | null
    _max: COUNTERMaxAggregateOutputType | null
  }

  type GetCOUNTERGroupByPayload<T extends COUNTERGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<COUNTERGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof COUNTERGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], COUNTERGroupByOutputType[P]>
            : GetScalarType<T[P], COUNTERGroupByOutputType[P]>
        }
      >
    >


  export type COUNTERSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CounterID?: boolean
    CounterNumber?: boolean
    counterServices?: boolean | COUNTER$counterServicesArgs<ExtArgs>
    tickets?: boolean | COUNTER$ticketsArgs<ExtArgs>
    _count?: boolean | COUNTERCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cOUNTER"]>

  export type COUNTERSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CounterID?: boolean
    CounterNumber?: boolean
  }, ExtArgs["result"]["cOUNTER"]>

  export type COUNTERSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CounterID?: boolean
    CounterNumber?: boolean
  }, ExtArgs["result"]["cOUNTER"]>

  export type COUNTERSelectScalar = {
    CounterID?: boolean
    CounterNumber?: boolean
  }

  export type COUNTEROmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CounterID" | "CounterNumber", ExtArgs["result"]["cOUNTER"]>
  export type COUNTERInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    counterServices?: boolean | COUNTER$counterServicesArgs<ExtArgs>
    tickets?: boolean | COUNTER$ticketsArgs<ExtArgs>
    _count?: boolean | COUNTERCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type COUNTERIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type COUNTERIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $COUNTERPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "COUNTER"
    objects: {
      counterServices: Prisma.$COUNTER_SERVICEPayload<ExtArgs>[]
      tickets: Prisma.$TICKETPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      CounterID: number
      CounterNumber: number
    }, ExtArgs["result"]["cOUNTER"]>
    composites: {}
  }

  type COUNTERGetPayload<S extends boolean | null | undefined | COUNTERDefaultArgs> = $Result.GetResult<Prisma.$COUNTERPayload, S>

  type COUNTERCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<COUNTERFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: COUNTERCountAggregateInputType | true
    }

  export interface COUNTERDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['COUNTER'], meta: { name: 'COUNTER' } }
    /**
     * Find zero or one COUNTER that matches the filter.
     * @param {COUNTERFindUniqueArgs} args - Arguments to find a COUNTER
     * @example
     * // Get one COUNTER
     * const cOUNTER = await prisma.cOUNTER.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends COUNTERFindUniqueArgs>(args: SelectSubset<T, COUNTERFindUniqueArgs<ExtArgs>>): Prisma__COUNTERClient<$Result.GetResult<Prisma.$COUNTERPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one COUNTER that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {COUNTERFindUniqueOrThrowArgs} args - Arguments to find a COUNTER
     * @example
     * // Get one COUNTER
     * const cOUNTER = await prisma.cOUNTER.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends COUNTERFindUniqueOrThrowArgs>(args: SelectSubset<T, COUNTERFindUniqueOrThrowArgs<ExtArgs>>): Prisma__COUNTERClient<$Result.GetResult<Prisma.$COUNTERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first COUNTER that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COUNTERFindFirstArgs} args - Arguments to find a COUNTER
     * @example
     * // Get one COUNTER
     * const cOUNTER = await prisma.cOUNTER.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends COUNTERFindFirstArgs>(args?: SelectSubset<T, COUNTERFindFirstArgs<ExtArgs>>): Prisma__COUNTERClient<$Result.GetResult<Prisma.$COUNTERPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first COUNTER that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COUNTERFindFirstOrThrowArgs} args - Arguments to find a COUNTER
     * @example
     * // Get one COUNTER
     * const cOUNTER = await prisma.cOUNTER.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends COUNTERFindFirstOrThrowArgs>(args?: SelectSubset<T, COUNTERFindFirstOrThrowArgs<ExtArgs>>): Prisma__COUNTERClient<$Result.GetResult<Prisma.$COUNTERPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more COUNTERS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COUNTERFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all COUNTERS
     * const cOUNTERS = await prisma.cOUNTER.findMany()
     * 
     * // Get first 10 COUNTERS
     * const cOUNTERS = await prisma.cOUNTER.findMany({ take: 10 })
     * 
     * // Only select the `CounterID`
     * const cOUNTERWithCounterIDOnly = await prisma.cOUNTER.findMany({ select: { CounterID: true } })
     * 
     */
    findMany<T extends COUNTERFindManyArgs>(args?: SelectSubset<T, COUNTERFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$COUNTERPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a COUNTER.
     * @param {COUNTERCreateArgs} args - Arguments to create a COUNTER.
     * @example
     * // Create one COUNTER
     * const COUNTER = await prisma.cOUNTER.create({
     *   data: {
     *     // ... data to create a COUNTER
     *   }
     * })
     * 
     */
    create<T extends COUNTERCreateArgs>(args: SelectSubset<T, COUNTERCreateArgs<ExtArgs>>): Prisma__COUNTERClient<$Result.GetResult<Prisma.$COUNTERPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many COUNTERS.
     * @param {COUNTERCreateManyArgs} args - Arguments to create many COUNTERS.
     * @example
     * // Create many COUNTERS
     * const cOUNTER = await prisma.cOUNTER.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends COUNTERCreateManyArgs>(args?: SelectSubset<T, COUNTERCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many COUNTERS and returns the data saved in the database.
     * @param {COUNTERCreateManyAndReturnArgs} args - Arguments to create many COUNTERS.
     * @example
     * // Create many COUNTERS
     * const cOUNTER = await prisma.cOUNTER.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many COUNTERS and only return the `CounterID`
     * const cOUNTERWithCounterIDOnly = await prisma.cOUNTER.createManyAndReturn({
     *   select: { CounterID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends COUNTERCreateManyAndReturnArgs>(args?: SelectSubset<T, COUNTERCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$COUNTERPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a COUNTER.
     * @param {COUNTERDeleteArgs} args - Arguments to delete one COUNTER.
     * @example
     * // Delete one COUNTER
     * const COUNTER = await prisma.cOUNTER.delete({
     *   where: {
     *     // ... filter to delete one COUNTER
     *   }
     * })
     * 
     */
    delete<T extends COUNTERDeleteArgs>(args: SelectSubset<T, COUNTERDeleteArgs<ExtArgs>>): Prisma__COUNTERClient<$Result.GetResult<Prisma.$COUNTERPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one COUNTER.
     * @param {COUNTERUpdateArgs} args - Arguments to update one COUNTER.
     * @example
     * // Update one COUNTER
     * const cOUNTER = await prisma.cOUNTER.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends COUNTERUpdateArgs>(args: SelectSubset<T, COUNTERUpdateArgs<ExtArgs>>): Prisma__COUNTERClient<$Result.GetResult<Prisma.$COUNTERPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more COUNTERS.
     * @param {COUNTERDeleteManyArgs} args - Arguments to filter COUNTERS to delete.
     * @example
     * // Delete a few COUNTERS
     * const { count } = await prisma.cOUNTER.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends COUNTERDeleteManyArgs>(args?: SelectSubset<T, COUNTERDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more COUNTERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COUNTERUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many COUNTERS
     * const cOUNTER = await prisma.cOUNTER.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends COUNTERUpdateManyArgs>(args: SelectSubset<T, COUNTERUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more COUNTERS and returns the data updated in the database.
     * @param {COUNTERUpdateManyAndReturnArgs} args - Arguments to update many COUNTERS.
     * @example
     * // Update many COUNTERS
     * const cOUNTER = await prisma.cOUNTER.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more COUNTERS and only return the `CounterID`
     * const cOUNTERWithCounterIDOnly = await prisma.cOUNTER.updateManyAndReturn({
     *   select: { CounterID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends COUNTERUpdateManyAndReturnArgs>(args: SelectSubset<T, COUNTERUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$COUNTERPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one COUNTER.
     * @param {COUNTERUpsertArgs} args - Arguments to update or create a COUNTER.
     * @example
     * // Update or create a COUNTER
     * const cOUNTER = await prisma.cOUNTER.upsert({
     *   create: {
     *     // ... data to create a COUNTER
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the COUNTER we want to update
     *   }
     * })
     */
    upsert<T extends COUNTERUpsertArgs>(args: SelectSubset<T, COUNTERUpsertArgs<ExtArgs>>): Prisma__COUNTERClient<$Result.GetResult<Prisma.$COUNTERPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of COUNTERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COUNTERCountArgs} args - Arguments to filter COUNTERS to count.
     * @example
     * // Count the number of COUNTERS
     * const count = await prisma.cOUNTER.count({
     *   where: {
     *     // ... the filter for the COUNTERS we want to count
     *   }
     * })
    **/
    count<T extends COUNTERCountArgs>(
      args?: Subset<T, COUNTERCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], COUNTERCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a COUNTER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COUNTERAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends COUNTERAggregateArgs>(args: Subset<T, COUNTERAggregateArgs>): Prisma.PrismaPromise<GetCOUNTERAggregateType<T>>

    /**
     * Group by COUNTER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COUNTERGroupByArgs} args - Group by arguments.
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
      T extends COUNTERGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: COUNTERGroupByArgs['orderBy'] }
        : { orderBy?: COUNTERGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, COUNTERGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCOUNTERGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the COUNTER model
   */
  readonly fields: COUNTERFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for COUNTER.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__COUNTERClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    counterServices<T extends COUNTER$counterServicesArgs<ExtArgs> = {}>(args?: Subset<T, COUNTER$counterServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$COUNTER_SERVICEPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends COUNTER$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, COUNTER$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TICKETPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the COUNTER model
   */
  interface COUNTERFieldRefs {
    readonly CounterID: FieldRef<"COUNTER", 'Int'>
    readonly CounterNumber: FieldRef<"COUNTER", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * COUNTER findUnique
   */
  export type COUNTERFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER
     */
    select?: COUNTERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER
     */
    omit?: COUNTEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTERInclude<ExtArgs> | null
    /**
     * Filter, which COUNTER to fetch.
     */
    where: COUNTERWhereUniqueInput
  }

  /**
   * COUNTER findUniqueOrThrow
   */
  export type COUNTERFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER
     */
    select?: COUNTERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER
     */
    omit?: COUNTEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTERInclude<ExtArgs> | null
    /**
     * Filter, which COUNTER to fetch.
     */
    where: COUNTERWhereUniqueInput
  }

  /**
   * COUNTER findFirst
   */
  export type COUNTERFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER
     */
    select?: COUNTERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER
     */
    omit?: COUNTEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTERInclude<ExtArgs> | null
    /**
     * Filter, which COUNTER to fetch.
     */
    where?: COUNTERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COUNTERS to fetch.
     */
    orderBy?: COUNTEROrderByWithRelationInput | COUNTEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for COUNTERS.
     */
    cursor?: COUNTERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COUNTERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COUNTERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of COUNTERS.
     */
    distinct?: COUNTERScalarFieldEnum | COUNTERScalarFieldEnum[]
  }

  /**
   * COUNTER findFirstOrThrow
   */
  export type COUNTERFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER
     */
    select?: COUNTERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER
     */
    omit?: COUNTEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTERInclude<ExtArgs> | null
    /**
     * Filter, which COUNTER to fetch.
     */
    where?: COUNTERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COUNTERS to fetch.
     */
    orderBy?: COUNTEROrderByWithRelationInput | COUNTEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for COUNTERS.
     */
    cursor?: COUNTERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COUNTERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COUNTERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of COUNTERS.
     */
    distinct?: COUNTERScalarFieldEnum | COUNTERScalarFieldEnum[]
  }

  /**
   * COUNTER findMany
   */
  export type COUNTERFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER
     */
    select?: COUNTERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER
     */
    omit?: COUNTEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTERInclude<ExtArgs> | null
    /**
     * Filter, which COUNTERS to fetch.
     */
    where?: COUNTERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COUNTERS to fetch.
     */
    orderBy?: COUNTEROrderByWithRelationInput | COUNTEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing COUNTERS.
     */
    cursor?: COUNTERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COUNTERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COUNTERS.
     */
    skip?: number
    distinct?: COUNTERScalarFieldEnum | COUNTERScalarFieldEnum[]
  }

  /**
   * COUNTER create
   */
  export type COUNTERCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER
     */
    select?: COUNTERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER
     */
    omit?: COUNTEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTERInclude<ExtArgs> | null
    /**
     * The data needed to create a COUNTER.
     */
    data: XOR<COUNTERCreateInput, COUNTERUncheckedCreateInput>
  }

  /**
   * COUNTER createMany
   */
  export type COUNTERCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many COUNTERS.
     */
    data: COUNTERCreateManyInput | COUNTERCreateManyInput[]
  }

  /**
   * COUNTER createManyAndReturn
   */
  export type COUNTERCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER
     */
    select?: COUNTERSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER
     */
    omit?: COUNTEROmit<ExtArgs> | null
    /**
     * The data used to create many COUNTERS.
     */
    data: COUNTERCreateManyInput | COUNTERCreateManyInput[]
  }

  /**
   * COUNTER update
   */
  export type COUNTERUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER
     */
    select?: COUNTERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER
     */
    omit?: COUNTEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTERInclude<ExtArgs> | null
    /**
     * The data needed to update a COUNTER.
     */
    data: XOR<COUNTERUpdateInput, COUNTERUncheckedUpdateInput>
    /**
     * Choose, which COUNTER to update.
     */
    where: COUNTERWhereUniqueInput
  }

  /**
   * COUNTER updateMany
   */
  export type COUNTERUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update COUNTERS.
     */
    data: XOR<COUNTERUpdateManyMutationInput, COUNTERUncheckedUpdateManyInput>
    /**
     * Filter which COUNTERS to update
     */
    where?: COUNTERWhereInput
    /**
     * Limit how many COUNTERS to update.
     */
    limit?: number
  }

  /**
   * COUNTER updateManyAndReturn
   */
  export type COUNTERUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER
     */
    select?: COUNTERSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER
     */
    omit?: COUNTEROmit<ExtArgs> | null
    /**
     * The data used to update COUNTERS.
     */
    data: XOR<COUNTERUpdateManyMutationInput, COUNTERUncheckedUpdateManyInput>
    /**
     * Filter which COUNTERS to update
     */
    where?: COUNTERWhereInput
    /**
     * Limit how many COUNTERS to update.
     */
    limit?: number
  }

  /**
   * COUNTER upsert
   */
  export type COUNTERUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER
     */
    select?: COUNTERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER
     */
    omit?: COUNTEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTERInclude<ExtArgs> | null
    /**
     * The filter to search for the COUNTER to update in case it exists.
     */
    where: COUNTERWhereUniqueInput
    /**
     * In case the COUNTER found by the `where` argument doesn't exist, create a new COUNTER with this data.
     */
    create: XOR<COUNTERCreateInput, COUNTERUncheckedCreateInput>
    /**
     * In case the COUNTER was found with the provided `where` argument, update it with this data.
     */
    update: XOR<COUNTERUpdateInput, COUNTERUncheckedUpdateInput>
  }

  /**
   * COUNTER delete
   */
  export type COUNTERDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER
     */
    select?: COUNTERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER
     */
    omit?: COUNTEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTERInclude<ExtArgs> | null
    /**
     * Filter which COUNTER to delete.
     */
    where: COUNTERWhereUniqueInput
  }

  /**
   * COUNTER deleteMany
   */
  export type COUNTERDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which COUNTERS to delete
     */
    where?: COUNTERWhereInput
    /**
     * Limit how many COUNTERS to delete.
     */
    limit?: number
  }

  /**
   * COUNTER.counterServices
   */
  export type COUNTER$counterServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER_SERVICE
     */
    select?: COUNTER_SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER_SERVICE
     */
    omit?: COUNTER_SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTER_SERVICEInclude<ExtArgs> | null
    where?: COUNTER_SERVICEWhereInput
    orderBy?: COUNTER_SERVICEOrderByWithRelationInput | COUNTER_SERVICEOrderByWithRelationInput[]
    cursor?: COUNTER_SERVICEWhereUniqueInput
    take?: number
    skip?: number
    distinct?: COUNTER_SERVICEScalarFieldEnum | COUNTER_SERVICEScalarFieldEnum[]
  }

  /**
   * COUNTER.tickets
   */
  export type COUNTER$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TICKET
     */
    select?: TICKETSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TICKET
     */
    omit?: TICKETOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TICKETInclude<ExtArgs> | null
    where?: TICKETWhereInput
    orderBy?: TICKETOrderByWithRelationInput | TICKETOrderByWithRelationInput[]
    cursor?: TICKETWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TICKETScalarFieldEnum | TICKETScalarFieldEnum[]
  }

  /**
   * COUNTER without action
   */
  export type COUNTERDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER
     */
    select?: COUNTERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER
     */
    omit?: COUNTEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTERInclude<ExtArgs> | null
  }


  /**
   * Model SERVICE
   */

  export type AggregateSERVICE = {
    _count: SERVICECountAggregateOutputType | null
    _avg: SERVICEAvgAggregateOutputType | null
    _sum: SERVICESumAggregateOutputType | null
    _min: SERVICEMinAggregateOutputType | null
    _max: SERVICEMaxAggregateOutputType | null
  }

  export type SERVICEAvgAggregateOutputType = {
    ServiceID: number | null
    AvgServiceTime: number | null
  }

  export type SERVICESumAggregateOutputType = {
    ServiceID: number | null
    AvgServiceTime: number | null
  }

  export type SERVICEMinAggregateOutputType = {
    ServiceID: number | null
    Name: string | null
    AvgServiceTime: number | null
  }

  export type SERVICEMaxAggregateOutputType = {
    ServiceID: number | null
    Name: string | null
    AvgServiceTime: number | null
  }

  export type SERVICECountAggregateOutputType = {
    ServiceID: number
    Name: number
    AvgServiceTime: number
    _all: number
  }


  export type SERVICEAvgAggregateInputType = {
    ServiceID?: true
    AvgServiceTime?: true
  }

  export type SERVICESumAggregateInputType = {
    ServiceID?: true
    AvgServiceTime?: true
  }

  export type SERVICEMinAggregateInputType = {
    ServiceID?: true
    Name?: true
    AvgServiceTime?: true
  }

  export type SERVICEMaxAggregateInputType = {
    ServiceID?: true
    Name?: true
    AvgServiceTime?: true
  }

  export type SERVICECountAggregateInputType = {
    ServiceID?: true
    Name?: true
    AvgServiceTime?: true
    _all?: true
  }

  export type SERVICEAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SERVICE to aggregate.
     */
    where?: SERVICEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SERVICES to fetch.
     */
    orderBy?: SERVICEOrderByWithRelationInput | SERVICEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SERVICEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SERVICES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SERVICES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SERVICES
    **/
    _count?: true | SERVICECountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SERVICEAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SERVICESumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SERVICEMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SERVICEMaxAggregateInputType
  }

  export type GetSERVICEAggregateType<T extends SERVICEAggregateArgs> = {
        [P in keyof T & keyof AggregateSERVICE]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSERVICE[P]>
      : GetScalarType<T[P], AggregateSERVICE[P]>
  }




  export type SERVICEGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SERVICEWhereInput
    orderBy?: SERVICEOrderByWithAggregationInput | SERVICEOrderByWithAggregationInput[]
    by: SERVICEScalarFieldEnum[] | SERVICEScalarFieldEnum
    having?: SERVICEScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SERVICECountAggregateInputType | true
    _avg?: SERVICEAvgAggregateInputType
    _sum?: SERVICESumAggregateInputType
    _min?: SERVICEMinAggregateInputType
    _max?: SERVICEMaxAggregateInputType
  }

  export type SERVICEGroupByOutputType = {
    ServiceID: number
    Name: string
    AvgServiceTime: number
    _count: SERVICECountAggregateOutputType | null
    _avg: SERVICEAvgAggregateOutputType | null
    _sum: SERVICESumAggregateOutputType | null
    _min: SERVICEMinAggregateOutputType | null
    _max: SERVICEMaxAggregateOutputType | null
  }

  type GetSERVICEGroupByPayload<T extends SERVICEGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SERVICEGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SERVICEGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SERVICEGroupByOutputType[P]>
            : GetScalarType<T[P], SERVICEGroupByOutputType[P]>
        }
      >
    >


  export type SERVICESelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ServiceID?: boolean
    Name?: boolean
    AvgServiceTime?: boolean
    counterServices?: boolean | SERVICE$counterServicesArgs<ExtArgs>
    tickets?: boolean | SERVICE$ticketsArgs<ExtArgs>
    _count?: boolean | SERVICECountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sERVICE"]>

  export type SERVICESelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ServiceID?: boolean
    Name?: boolean
    AvgServiceTime?: boolean
  }, ExtArgs["result"]["sERVICE"]>

  export type SERVICESelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ServiceID?: boolean
    Name?: boolean
    AvgServiceTime?: boolean
  }, ExtArgs["result"]["sERVICE"]>

  export type SERVICESelectScalar = {
    ServiceID?: boolean
    Name?: boolean
    AvgServiceTime?: boolean
  }

  export type SERVICEOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ServiceID" | "Name" | "AvgServiceTime", ExtArgs["result"]["sERVICE"]>
  export type SERVICEInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    counterServices?: boolean | SERVICE$counterServicesArgs<ExtArgs>
    tickets?: boolean | SERVICE$ticketsArgs<ExtArgs>
    _count?: boolean | SERVICECountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SERVICEIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SERVICEIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SERVICEPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SERVICE"
    objects: {
      counterServices: Prisma.$COUNTER_SERVICEPayload<ExtArgs>[]
      tickets: Prisma.$TICKETPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ServiceID: number
      Name: string
      AvgServiceTime: number
    }, ExtArgs["result"]["sERVICE"]>
    composites: {}
  }

  type SERVICEGetPayload<S extends boolean | null | undefined | SERVICEDefaultArgs> = $Result.GetResult<Prisma.$SERVICEPayload, S>

  type SERVICECountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SERVICEFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SERVICECountAggregateInputType | true
    }

  export interface SERVICEDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SERVICE'], meta: { name: 'SERVICE' } }
    /**
     * Find zero or one SERVICE that matches the filter.
     * @param {SERVICEFindUniqueArgs} args - Arguments to find a SERVICE
     * @example
     * // Get one SERVICE
     * const sERVICE = await prisma.sERVICE.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SERVICEFindUniqueArgs>(args: SelectSubset<T, SERVICEFindUniqueArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SERVICE that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SERVICEFindUniqueOrThrowArgs} args - Arguments to find a SERVICE
     * @example
     * // Get one SERVICE
     * const sERVICE = await prisma.sERVICE.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SERVICEFindUniqueOrThrowArgs>(args: SelectSubset<T, SERVICEFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SERVICE that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SERVICEFindFirstArgs} args - Arguments to find a SERVICE
     * @example
     * // Get one SERVICE
     * const sERVICE = await prisma.sERVICE.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SERVICEFindFirstArgs>(args?: SelectSubset<T, SERVICEFindFirstArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SERVICE that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SERVICEFindFirstOrThrowArgs} args - Arguments to find a SERVICE
     * @example
     * // Get one SERVICE
     * const sERVICE = await prisma.sERVICE.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SERVICEFindFirstOrThrowArgs>(args?: SelectSubset<T, SERVICEFindFirstOrThrowArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SERVICES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SERVICEFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SERVICES
     * const sERVICES = await prisma.sERVICE.findMany()
     * 
     * // Get first 10 SERVICES
     * const sERVICES = await prisma.sERVICE.findMany({ take: 10 })
     * 
     * // Only select the `ServiceID`
     * const sERVICEWithServiceIDOnly = await prisma.sERVICE.findMany({ select: { ServiceID: true } })
     * 
     */
    findMany<T extends SERVICEFindManyArgs>(args?: SelectSubset<T, SERVICEFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SERVICE.
     * @param {SERVICECreateArgs} args - Arguments to create a SERVICE.
     * @example
     * // Create one SERVICE
     * const SERVICE = await prisma.sERVICE.create({
     *   data: {
     *     // ... data to create a SERVICE
     *   }
     * })
     * 
     */
    create<T extends SERVICECreateArgs>(args: SelectSubset<T, SERVICECreateArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SERVICES.
     * @param {SERVICECreateManyArgs} args - Arguments to create many SERVICES.
     * @example
     * // Create many SERVICES
     * const sERVICE = await prisma.sERVICE.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SERVICECreateManyArgs>(args?: SelectSubset<T, SERVICECreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SERVICES and returns the data saved in the database.
     * @param {SERVICECreateManyAndReturnArgs} args - Arguments to create many SERVICES.
     * @example
     * // Create many SERVICES
     * const sERVICE = await prisma.sERVICE.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SERVICES and only return the `ServiceID`
     * const sERVICEWithServiceIDOnly = await prisma.sERVICE.createManyAndReturn({
     *   select: { ServiceID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SERVICECreateManyAndReturnArgs>(args?: SelectSubset<T, SERVICECreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SERVICE.
     * @param {SERVICEDeleteArgs} args - Arguments to delete one SERVICE.
     * @example
     * // Delete one SERVICE
     * const SERVICE = await prisma.sERVICE.delete({
     *   where: {
     *     // ... filter to delete one SERVICE
     *   }
     * })
     * 
     */
    delete<T extends SERVICEDeleteArgs>(args: SelectSubset<T, SERVICEDeleteArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SERVICE.
     * @param {SERVICEUpdateArgs} args - Arguments to update one SERVICE.
     * @example
     * // Update one SERVICE
     * const sERVICE = await prisma.sERVICE.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SERVICEUpdateArgs>(args: SelectSubset<T, SERVICEUpdateArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SERVICES.
     * @param {SERVICEDeleteManyArgs} args - Arguments to filter SERVICES to delete.
     * @example
     * // Delete a few SERVICES
     * const { count } = await prisma.sERVICE.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SERVICEDeleteManyArgs>(args?: SelectSubset<T, SERVICEDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SERVICES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SERVICEUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SERVICES
     * const sERVICE = await prisma.sERVICE.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SERVICEUpdateManyArgs>(args: SelectSubset<T, SERVICEUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SERVICES and returns the data updated in the database.
     * @param {SERVICEUpdateManyAndReturnArgs} args - Arguments to update many SERVICES.
     * @example
     * // Update many SERVICES
     * const sERVICE = await prisma.sERVICE.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SERVICES and only return the `ServiceID`
     * const sERVICEWithServiceIDOnly = await prisma.sERVICE.updateManyAndReturn({
     *   select: { ServiceID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SERVICEUpdateManyAndReturnArgs>(args: SelectSubset<T, SERVICEUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SERVICE.
     * @param {SERVICEUpsertArgs} args - Arguments to update or create a SERVICE.
     * @example
     * // Update or create a SERVICE
     * const sERVICE = await prisma.sERVICE.upsert({
     *   create: {
     *     // ... data to create a SERVICE
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SERVICE we want to update
     *   }
     * })
     */
    upsert<T extends SERVICEUpsertArgs>(args: SelectSubset<T, SERVICEUpsertArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SERVICES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SERVICECountArgs} args - Arguments to filter SERVICES to count.
     * @example
     * // Count the number of SERVICES
     * const count = await prisma.sERVICE.count({
     *   where: {
     *     // ... the filter for the SERVICES we want to count
     *   }
     * })
    **/
    count<T extends SERVICECountArgs>(
      args?: Subset<T, SERVICECountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SERVICECountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SERVICE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SERVICEAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SERVICEAggregateArgs>(args: Subset<T, SERVICEAggregateArgs>): Prisma.PrismaPromise<GetSERVICEAggregateType<T>>

    /**
     * Group by SERVICE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SERVICEGroupByArgs} args - Group by arguments.
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
      T extends SERVICEGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SERVICEGroupByArgs['orderBy'] }
        : { orderBy?: SERVICEGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SERVICEGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSERVICEGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SERVICE model
   */
  readonly fields: SERVICEFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SERVICE.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SERVICEClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    counterServices<T extends SERVICE$counterServicesArgs<ExtArgs> = {}>(args?: Subset<T, SERVICE$counterServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$COUNTER_SERVICEPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends SERVICE$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, SERVICE$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TICKETPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SERVICE model
   */
  interface SERVICEFieldRefs {
    readonly ServiceID: FieldRef<"SERVICE", 'Int'>
    readonly Name: FieldRef<"SERVICE", 'String'>
    readonly AvgServiceTime: FieldRef<"SERVICE", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SERVICE findUnique
   */
  export type SERVICEFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SERVICEInclude<ExtArgs> | null
    /**
     * Filter, which SERVICE to fetch.
     */
    where: SERVICEWhereUniqueInput
  }

  /**
   * SERVICE findUniqueOrThrow
   */
  export type SERVICEFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SERVICEInclude<ExtArgs> | null
    /**
     * Filter, which SERVICE to fetch.
     */
    where: SERVICEWhereUniqueInput
  }

  /**
   * SERVICE findFirst
   */
  export type SERVICEFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SERVICEInclude<ExtArgs> | null
    /**
     * Filter, which SERVICE to fetch.
     */
    where?: SERVICEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SERVICES to fetch.
     */
    orderBy?: SERVICEOrderByWithRelationInput | SERVICEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SERVICES.
     */
    cursor?: SERVICEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SERVICES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SERVICES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SERVICES.
     */
    distinct?: SERVICEScalarFieldEnum | SERVICEScalarFieldEnum[]
  }

  /**
   * SERVICE findFirstOrThrow
   */
  export type SERVICEFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SERVICEInclude<ExtArgs> | null
    /**
     * Filter, which SERVICE to fetch.
     */
    where?: SERVICEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SERVICES to fetch.
     */
    orderBy?: SERVICEOrderByWithRelationInput | SERVICEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SERVICES.
     */
    cursor?: SERVICEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SERVICES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SERVICES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SERVICES.
     */
    distinct?: SERVICEScalarFieldEnum | SERVICEScalarFieldEnum[]
  }

  /**
   * SERVICE findMany
   */
  export type SERVICEFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SERVICEInclude<ExtArgs> | null
    /**
     * Filter, which SERVICES to fetch.
     */
    where?: SERVICEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SERVICES to fetch.
     */
    orderBy?: SERVICEOrderByWithRelationInput | SERVICEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SERVICES.
     */
    cursor?: SERVICEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SERVICES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SERVICES.
     */
    skip?: number
    distinct?: SERVICEScalarFieldEnum | SERVICEScalarFieldEnum[]
  }

  /**
   * SERVICE create
   */
  export type SERVICECreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SERVICEInclude<ExtArgs> | null
    /**
     * The data needed to create a SERVICE.
     */
    data: XOR<SERVICECreateInput, SERVICEUncheckedCreateInput>
  }

  /**
   * SERVICE createMany
   */
  export type SERVICECreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SERVICES.
     */
    data: SERVICECreateManyInput | SERVICECreateManyInput[]
  }

  /**
   * SERVICE createManyAndReturn
   */
  export type SERVICECreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * The data used to create many SERVICES.
     */
    data: SERVICECreateManyInput | SERVICECreateManyInput[]
  }

  /**
   * SERVICE update
   */
  export type SERVICEUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SERVICEInclude<ExtArgs> | null
    /**
     * The data needed to update a SERVICE.
     */
    data: XOR<SERVICEUpdateInput, SERVICEUncheckedUpdateInput>
    /**
     * Choose, which SERVICE to update.
     */
    where: SERVICEWhereUniqueInput
  }

  /**
   * SERVICE updateMany
   */
  export type SERVICEUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SERVICES.
     */
    data: XOR<SERVICEUpdateManyMutationInput, SERVICEUncheckedUpdateManyInput>
    /**
     * Filter which SERVICES to update
     */
    where?: SERVICEWhereInput
    /**
     * Limit how many SERVICES to update.
     */
    limit?: number
  }

  /**
   * SERVICE updateManyAndReturn
   */
  export type SERVICEUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * The data used to update SERVICES.
     */
    data: XOR<SERVICEUpdateManyMutationInput, SERVICEUncheckedUpdateManyInput>
    /**
     * Filter which SERVICES to update
     */
    where?: SERVICEWhereInput
    /**
     * Limit how many SERVICES to update.
     */
    limit?: number
  }

  /**
   * SERVICE upsert
   */
  export type SERVICEUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SERVICEInclude<ExtArgs> | null
    /**
     * The filter to search for the SERVICE to update in case it exists.
     */
    where: SERVICEWhereUniqueInput
    /**
     * In case the SERVICE found by the `where` argument doesn't exist, create a new SERVICE with this data.
     */
    create: XOR<SERVICECreateInput, SERVICEUncheckedCreateInput>
    /**
     * In case the SERVICE was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SERVICEUpdateInput, SERVICEUncheckedUpdateInput>
  }

  /**
   * SERVICE delete
   */
  export type SERVICEDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SERVICEInclude<ExtArgs> | null
    /**
     * Filter which SERVICE to delete.
     */
    where: SERVICEWhereUniqueInput
  }

  /**
   * SERVICE deleteMany
   */
  export type SERVICEDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SERVICES to delete
     */
    where?: SERVICEWhereInput
    /**
     * Limit how many SERVICES to delete.
     */
    limit?: number
  }

  /**
   * SERVICE.counterServices
   */
  export type SERVICE$counterServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER_SERVICE
     */
    select?: COUNTER_SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER_SERVICE
     */
    omit?: COUNTER_SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTER_SERVICEInclude<ExtArgs> | null
    where?: COUNTER_SERVICEWhereInput
    orderBy?: COUNTER_SERVICEOrderByWithRelationInput | COUNTER_SERVICEOrderByWithRelationInput[]
    cursor?: COUNTER_SERVICEWhereUniqueInput
    take?: number
    skip?: number
    distinct?: COUNTER_SERVICEScalarFieldEnum | COUNTER_SERVICEScalarFieldEnum[]
  }

  /**
   * SERVICE.tickets
   */
  export type SERVICE$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TICKET
     */
    select?: TICKETSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TICKET
     */
    omit?: TICKETOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TICKETInclude<ExtArgs> | null
    where?: TICKETWhereInput
    orderBy?: TICKETOrderByWithRelationInput | TICKETOrderByWithRelationInput[]
    cursor?: TICKETWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TICKETScalarFieldEnum | TICKETScalarFieldEnum[]
  }

  /**
   * SERVICE without action
   */
  export type SERVICEDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SERVICE
     */
    select?: SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SERVICE
     */
    omit?: SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SERVICEInclude<ExtArgs> | null
  }


  /**
   * Model COUNTER_SERVICE
   */

  export type AggregateCOUNTER_SERVICE = {
    _count: COUNTER_SERVICECountAggregateOutputType | null
    _avg: COUNTER_SERVICEAvgAggregateOutputType | null
    _sum: COUNTER_SERVICESumAggregateOutputType | null
    _min: COUNTER_SERVICEMinAggregateOutputType | null
    _max: COUNTER_SERVICEMaxAggregateOutputType | null
  }

  export type COUNTER_SERVICEAvgAggregateOutputType = {
    CounterID: number | null
    ServiceID: number | null
  }

  export type COUNTER_SERVICESumAggregateOutputType = {
    CounterID: number | null
    ServiceID: number | null
  }

  export type COUNTER_SERVICEMinAggregateOutputType = {
    CounterID: number | null
    ServiceID: number | null
  }

  export type COUNTER_SERVICEMaxAggregateOutputType = {
    CounterID: number | null
    ServiceID: number | null
  }

  export type COUNTER_SERVICECountAggregateOutputType = {
    CounterID: number
    ServiceID: number
    _all: number
  }


  export type COUNTER_SERVICEAvgAggregateInputType = {
    CounterID?: true
    ServiceID?: true
  }

  export type COUNTER_SERVICESumAggregateInputType = {
    CounterID?: true
    ServiceID?: true
  }

  export type COUNTER_SERVICEMinAggregateInputType = {
    CounterID?: true
    ServiceID?: true
  }

  export type COUNTER_SERVICEMaxAggregateInputType = {
    CounterID?: true
    ServiceID?: true
  }

  export type COUNTER_SERVICECountAggregateInputType = {
    CounterID?: true
    ServiceID?: true
    _all?: true
  }

  export type COUNTER_SERVICEAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which COUNTER_SERVICE to aggregate.
     */
    where?: COUNTER_SERVICEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COUNTER_SERVICES to fetch.
     */
    orderBy?: COUNTER_SERVICEOrderByWithRelationInput | COUNTER_SERVICEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: COUNTER_SERVICEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COUNTER_SERVICES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COUNTER_SERVICES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned COUNTER_SERVICES
    **/
    _count?: true | COUNTER_SERVICECountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: COUNTER_SERVICEAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: COUNTER_SERVICESumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: COUNTER_SERVICEMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: COUNTER_SERVICEMaxAggregateInputType
  }

  export type GetCOUNTER_SERVICEAggregateType<T extends COUNTER_SERVICEAggregateArgs> = {
        [P in keyof T & keyof AggregateCOUNTER_SERVICE]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCOUNTER_SERVICE[P]>
      : GetScalarType<T[P], AggregateCOUNTER_SERVICE[P]>
  }




  export type COUNTER_SERVICEGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: COUNTER_SERVICEWhereInput
    orderBy?: COUNTER_SERVICEOrderByWithAggregationInput | COUNTER_SERVICEOrderByWithAggregationInput[]
    by: COUNTER_SERVICEScalarFieldEnum[] | COUNTER_SERVICEScalarFieldEnum
    having?: COUNTER_SERVICEScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: COUNTER_SERVICECountAggregateInputType | true
    _avg?: COUNTER_SERVICEAvgAggregateInputType
    _sum?: COUNTER_SERVICESumAggregateInputType
    _min?: COUNTER_SERVICEMinAggregateInputType
    _max?: COUNTER_SERVICEMaxAggregateInputType
  }

  export type COUNTER_SERVICEGroupByOutputType = {
    CounterID: number
    ServiceID: number
    _count: COUNTER_SERVICECountAggregateOutputType | null
    _avg: COUNTER_SERVICEAvgAggregateOutputType | null
    _sum: COUNTER_SERVICESumAggregateOutputType | null
    _min: COUNTER_SERVICEMinAggregateOutputType | null
    _max: COUNTER_SERVICEMaxAggregateOutputType | null
  }

  type GetCOUNTER_SERVICEGroupByPayload<T extends COUNTER_SERVICEGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<COUNTER_SERVICEGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof COUNTER_SERVICEGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], COUNTER_SERVICEGroupByOutputType[P]>
            : GetScalarType<T[P], COUNTER_SERVICEGroupByOutputType[P]>
        }
      >
    >


  export type COUNTER_SERVICESelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CounterID?: boolean
    ServiceID?: boolean
    counter?: boolean | COUNTERDefaultArgs<ExtArgs>
    service?: boolean | SERVICEDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cOUNTER_SERVICE"]>

  export type COUNTER_SERVICESelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CounterID?: boolean
    ServiceID?: boolean
    counter?: boolean | COUNTERDefaultArgs<ExtArgs>
    service?: boolean | SERVICEDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cOUNTER_SERVICE"]>

  export type COUNTER_SERVICESelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CounterID?: boolean
    ServiceID?: boolean
    counter?: boolean | COUNTERDefaultArgs<ExtArgs>
    service?: boolean | SERVICEDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cOUNTER_SERVICE"]>

  export type COUNTER_SERVICESelectScalar = {
    CounterID?: boolean
    ServiceID?: boolean
  }

  export type COUNTER_SERVICEOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CounterID" | "ServiceID", ExtArgs["result"]["cOUNTER_SERVICE"]>
  export type COUNTER_SERVICEInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    counter?: boolean | COUNTERDefaultArgs<ExtArgs>
    service?: boolean | SERVICEDefaultArgs<ExtArgs>
  }
  export type COUNTER_SERVICEIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    counter?: boolean | COUNTERDefaultArgs<ExtArgs>
    service?: boolean | SERVICEDefaultArgs<ExtArgs>
  }
  export type COUNTER_SERVICEIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    counter?: boolean | COUNTERDefaultArgs<ExtArgs>
    service?: boolean | SERVICEDefaultArgs<ExtArgs>
  }

  export type $COUNTER_SERVICEPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "COUNTER_SERVICE"
    objects: {
      counter: Prisma.$COUNTERPayload<ExtArgs>
      service: Prisma.$SERVICEPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      CounterID: number
      ServiceID: number
    }, ExtArgs["result"]["cOUNTER_SERVICE"]>
    composites: {}
  }

  type COUNTER_SERVICEGetPayload<S extends boolean | null | undefined | COUNTER_SERVICEDefaultArgs> = $Result.GetResult<Prisma.$COUNTER_SERVICEPayload, S>

  type COUNTER_SERVICECountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<COUNTER_SERVICEFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: COUNTER_SERVICECountAggregateInputType | true
    }

  export interface COUNTER_SERVICEDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['COUNTER_SERVICE'], meta: { name: 'COUNTER_SERVICE' } }
    /**
     * Find zero or one COUNTER_SERVICE that matches the filter.
     * @param {COUNTER_SERVICEFindUniqueArgs} args - Arguments to find a COUNTER_SERVICE
     * @example
     * // Get one COUNTER_SERVICE
     * const cOUNTER_SERVICE = await prisma.cOUNTER_SERVICE.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends COUNTER_SERVICEFindUniqueArgs>(args: SelectSubset<T, COUNTER_SERVICEFindUniqueArgs<ExtArgs>>): Prisma__COUNTER_SERVICEClient<$Result.GetResult<Prisma.$COUNTER_SERVICEPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one COUNTER_SERVICE that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {COUNTER_SERVICEFindUniqueOrThrowArgs} args - Arguments to find a COUNTER_SERVICE
     * @example
     * // Get one COUNTER_SERVICE
     * const cOUNTER_SERVICE = await prisma.cOUNTER_SERVICE.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends COUNTER_SERVICEFindUniqueOrThrowArgs>(args: SelectSubset<T, COUNTER_SERVICEFindUniqueOrThrowArgs<ExtArgs>>): Prisma__COUNTER_SERVICEClient<$Result.GetResult<Prisma.$COUNTER_SERVICEPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first COUNTER_SERVICE that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COUNTER_SERVICEFindFirstArgs} args - Arguments to find a COUNTER_SERVICE
     * @example
     * // Get one COUNTER_SERVICE
     * const cOUNTER_SERVICE = await prisma.cOUNTER_SERVICE.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends COUNTER_SERVICEFindFirstArgs>(args?: SelectSubset<T, COUNTER_SERVICEFindFirstArgs<ExtArgs>>): Prisma__COUNTER_SERVICEClient<$Result.GetResult<Prisma.$COUNTER_SERVICEPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first COUNTER_SERVICE that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COUNTER_SERVICEFindFirstOrThrowArgs} args - Arguments to find a COUNTER_SERVICE
     * @example
     * // Get one COUNTER_SERVICE
     * const cOUNTER_SERVICE = await prisma.cOUNTER_SERVICE.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends COUNTER_SERVICEFindFirstOrThrowArgs>(args?: SelectSubset<T, COUNTER_SERVICEFindFirstOrThrowArgs<ExtArgs>>): Prisma__COUNTER_SERVICEClient<$Result.GetResult<Prisma.$COUNTER_SERVICEPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more COUNTER_SERVICES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COUNTER_SERVICEFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all COUNTER_SERVICES
     * const cOUNTER_SERVICES = await prisma.cOUNTER_SERVICE.findMany()
     * 
     * // Get first 10 COUNTER_SERVICES
     * const cOUNTER_SERVICES = await prisma.cOUNTER_SERVICE.findMany({ take: 10 })
     * 
     * // Only select the `CounterID`
     * const cOUNTER_SERVICEWithCounterIDOnly = await prisma.cOUNTER_SERVICE.findMany({ select: { CounterID: true } })
     * 
     */
    findMany<T extends COUNTER_SERVICEFindManyArgs>(args?: SelectSubset<T, COUNTER_SERVICEFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$COUNTER_SERVICEPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a COUNTER_SERVICE.
     * @param {COUNTER_SERVICECreateArgs} args - Arguments to create a COUNTER_SERVICE.
     * @example
     * // Create one COUNTER_SERVICE
     * const COUNTER_SERVICE = await prisma.cOUNTER_SERVICE.create({
     *   data: {
     *     // ... data to create a COUNTER_SERVICE
     *   }
     * })
     * 
     */
    create<T extends COUNTER_SERVICECreateArgs>(args: SelectSubset<T, COUNTER_SERVICECreateArgs<ExtArgs>>): Prisma__COUNTER_SERVICEClient<$Result.GetResult<Prisma.$COUNTER_SERVICEPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many COUNTER_SERVICES.
     * @param {COUNTER_SERVICECreateManyArgs} args - Arguments to create many COUNTER_SERVICES.
     * @example
     * // Create many COUNTER_SERVICES
     * const cOUNTER_SERVICE = await prisma.cOUNTER_SERVICE.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends COUNTER_SERVICECreateManyArgs>(args?: SelectSubset<T, COUNTER_SERVICECreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many COUNTER_SERVICES and returns the data saved in the database.
     * @param {COUNTER_SERVICECreateManyAndReturnArgs} args - Arguments to create many COUNTER_SERVICES.
     * @example
     * // Create many COUNTER_SERVICES
     * const cOUNTER_SERVICE = await prisma.cOUNTER_SERVICE.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many COUNTER_SERVICES and only return the `CounterID`
     * const cOUNTER_SERVICEWithCounterIDOnly = await prisma.cOUNTER_SERVICE.createManyAndReturn({
     *   select: { CounterID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends COUNTER_SERVICECreateManyAndReturnArgs>(args?: SelectSubset<T, COUNTER_SERVICECreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$COUNTER_SERVICEPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a COUNTER_SERVICE.
     * @param {COUNTER_SERVICEDeleteArgs} args - Arguments to delete one COUNTER_SERVICE.
     * @example
     * // Delete one COUNTER_SERVICE
     * const COUNTER_SERVICE = await prisma.cOUNTER_SERVICE.delete({
     *   where: {
     *     // ... filter to delete one COUNTER_SERVICE
     *   }
     * })
     * 
     */
    delete<T extends COUNTER_SERVICEDeleteArgs>(args: SelectSubset<T, COUNTER_SERVICEDeleteArgs<ExtArgs>>): Prisma__COUNTER_SERVICEClient<$Result.GetResult<Prisma.$COUNTER_SERVICEPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one COUNTER_SERVICE.
     * @param {COUNTER_SERVICEUpdateArgs} args - Arguments to update one COUNTER_SERVICE.
     * @example
     * // Update one COUNTER_SERVICE
     * const cOUNTER_SERVICE = await prisma.cOUNTER_SERVICE.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends COUNTER_SERVICEUpdateArgs>(args: SelectSubset<T, COUNTER_SERVICEUpdateArgs<ExtArgs>>): Prisma__COUNTER_SERVICEClient<$Result.GetResult<Prisma.$COUNTER_SERVICEPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more COUNTER_SERVICES.
     * @param {COUNTER_SERVICEDeleteManyArgs} args - Arguments to filter COUNTER_SERVICES to delete.
     * @example
     * // Delete a few COUNTER_SERVICES
     * const { count } = await prisma.cOUNTER_SERVICE.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends COUNTER_SERVICEDeleteManyArgs>(args?: SelectSubset<T, COUNTER_SERVICEDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more COUNTER_SERVICES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COUNTER_SERVICEUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many COUNTER_SERVICES
     * const cOUNTER_SERVICE = await prisma.cOUNTER_SERVICE.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends COUNTER_SERVICEUpdateManyArgs>(args: SelectSubset<T, COUNTER_SERVICEUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more COUNTER_SERVICES and returns the data updated in the database.
     * @param {COUNTER_SERVICEUpdateManyAndReturnArgs} args - Arguments to update many COUNTER_SERVICES.
     * @example
     * // Update many COUNTER_SERVICES
     * const cOUNTER_SERVICE = await prisma.cOUNTER_SERVICE.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more COUNTER_SERVICES and only return the `CounterID`
     * const cOUNTER_SERVICEWithCounterIDOnly = await prisma.cOUNTER_SERVICE.updateManyAndReturn({
     *   select: { CounterID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends COUNTER_SERVICEUpdateManyAndReturnArgs>(args: SelectSubset<T, COUNTER_SERVICEUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$COUNTER_SERVICEPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one COUNTER_SERVICE.
     * @param {COUNTER_SERVICEUpsertArgs} args - Arguments to update or create a COUNTER_SERVICE.
     * @example
     * // Update or create a COUNTER_SERVICE
     * const cOUNTER_SERVICE = await prisma.cOUNTER_SERVICE.upsert({
     *   create: {
     *     // ... data to create a COUNTER_SERVICE
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the COUNTER_SERVICE we want to update
     *   }
     * })
     */
    upsert<T extends COUNTER_SERVICEUpsertArgs>(args: SelectSubset<T, COUNTER_SERVICEUpsertArgs<ExtArgs>>): Prisma__COUNTER_SERVICEClient<$Result.GetResult<Prisma.$COUNTER_SERVICEPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of COUNTER_SERVICES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COUNTER_SERVICECountArgs} args - Arguments to filter COUNTER_SERVICES to count.
     * @example
     * // Count the number of COUNTER_SERVICES
     * const count = await prisma.cOUNTER_SERVICE.count({
     *   where: {
     *     // ... the filter for the COUNTER_SERVICES we want to count
     *   }
     * })
    **/
    count<T extends COUNTER_SERVICECountArgs>(
      args?: Subset<T, COUNTER_SERVICECountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], COUNTER_SERVICECountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a COUNTER_SERVICE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COUNTER_SERVICEAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends COUNTER_SERVICEAggregateArgs>(args: Subset<T, COUNTER_SERVICEAggregateArgs>): Prisma.PrismaPromise<GetCOUNTER_SERVICEAggregateType<T>>

    /**
     * Group by COUNTER_SERVICE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COUNTER_SERVICEGroupByArgs} args - Group by arguments.
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
      T extends COUNTER_SERVICEGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: COUNTER_SERVICEGroupByArgs['orderBy'] }
        : { orderBy?: COUNTER_SERVICEGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, COUNTER_SERVICEGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCOUNTER_SERVICEGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the COUNTER_SERVICE model
   */
  readonly fields: COUNTER_SERVICEFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for COUNTER_SERVICE.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__COUNTER_SERVICEClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    counter<T extends COUNTERDefaultArgs<ExtArgs> = {}>(args?: Subset<T, COUNTERDefaultArgs<ExtArgs>>): Prisma__COUNTERClient<$Result.GetResult<Prisma.$COUNTERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends SERVICEDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SERVICEDefaultArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the COUNTER_SERVICE model
   */
  interface COUNTER_SERVICEFieldRefs {
    readonly CounterID: FieldRef<"COUNTER_SERVICE", 'Int'>
    readonly ServiceID: FieldRef<"COUNTER_SERVICE", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * COUNTER_SERVICE findUnique
   */
  export type COUNTER_SERVICEFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER_SERVICE
     */
    select?: COUNTER_SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER_SERVICE
     */
    omit?: COUNTER_SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTER_SERVICEInclude<ExtArgs> | null
    /**
     * Filter, which COUNTER_SERVICE to fetch.
     */
    where: COUNTER_SERVICEWhereUniqueInput
  }

  /**
   * COUNTER_SERVICE findUniqueOrThrow
   */
  export type COUNTER_SERVICEFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER_SERVICE
     */
    select?: COUNTER_SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER_SERVICE
     */
    omit?: COUNTER_SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTER_SERVICEInclude<ExtArgs> | null
    /**
     * Filter, which COUNTER_SERVICE to fetch.
     */
    where: COUNTER_SERVICEWhereUniqueInput
  }

  /**
   * COUNTER_SERVICE findFirst
   */
  export type COUNTER_SERVICEFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER_SERVICE
     */
    select?: COUNTER_SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER_SERVICE
     */
    omit?: COUNTER_SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTER_SERVICEInclude<ExtArgs> | null
    /**
     * Filter, which COUNTER_SERVICE to fetch.
     */
    where?: COUNTER_SERVICEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COUNTER_SERVICES to fetch.
     */
    orderBy?: COUNTER_SERVICEOrderByWithRelationInput | COUNTER_SERVICEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for COUNTER_SERVICES.
     */
    cursor?: COUNTER_SERVICEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COUNTER_SERVICES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COUNTER_SERVICES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of COUNTER_SERVICES.
     */
    distinct?: COUNTER_SERVICEScalarFieldEnum | COUNTER_SERVICEScalarFieldEnum[]
  }

  /**
   * COUNTER_SERVICE findFirstOrThrow
   */
  export type COUNTER_SERVICEFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER_SERVICE
     */
    select?: COUNTER_SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER_SERVICE
     */
    omit?: COUNTER_SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTER_SERVICEInclude<ExtArgs> | null
    /**
     * Filter, which COUNTER_SERVICE to fetch.
     */
    where?: COUNTER_SERVICEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COUNTER_SERVICES to fetch.
     */
    orderBy?: COUNTER_SERVICEOrderByWithRelationInput | COUNTER_SERVICEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for COUNTER_SERVICES.
     */
    cursor?: COUNTER_SERVICEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COUNTER_SERVICES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COUNTER_SERVICES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of COUNTER_SERVICES.
     */
    distinct?: COUNTER_SERVICEScalarFieldEnum | COUNTER_SERVICEScalarFieldEnum[]
  }

  /**
   * COUNTER_SERVICE findMany
   */
  export type COUNTER_SERVICEFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER_SERVICE
     */
    select?: COUNTER_SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER_SERVICE
     */
    omit?: COUNTER_SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTER_SERVICEInclude<ExtArgs> | null
    /**
     * Filter, which COUNTER_SERVICES to fetch.
     */
    where?: COUNTER_SERVICEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COUNTER_SERVICES to fetch.
     */
    orderBy?: COUNTER_SERVICEOrderByWithRelationInput | COUNTER_SERVICEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing COUNTER_SERVICES.
     */
    cursor?: COUNTER_SERVICEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COUNTER_SERVICES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COUNTER_SERVICES.
     */
    skip?: number
    distinct?: COUNTER_SERVICEScalarFieldEnum | COUNTER_SERVICEScalarFieldEnum[]
  }

  /**
   * COUNTER_SERVICE create
   */
  export type COUNTER_SERVICECreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER_SERVICE
     */
    select?: COUNTER_SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER_SERVICE
     */
    omit?: COUNTER_SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTER_SERVICEInclude<ExtArgs> | null
    /**
     * The data needed to create a COUNTER_SERVICE.
     */
    data: XOR<COUNTER_SERVICECreateInput, COUNTER_SERVICEUncheckedCreateInput>
  }

  /**
   * COUNTER_SERVICE createMany
   */
  export type COUNTER_SERVICECreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many COUNTER_SERVICES.
     */
    data: COUNTER_SERVICECreateManyInput | COUNTER_SERVICECreateManyInput[]
  }

  /**
   * COUNTER_SERVICE createManyAndReturn
   */
  export type COUNTER_SERVICECreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER_SERVICE
     */
    select?: COUNTER_SERVICESelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER_SERVICE
     */
    omit?: COUNTER_SERVICEOmit<ExtArgs> | null
    /**
     * The data used to create many COUNTER_SERVICES.
     */
    data: COUNTER_SERVICECreateManyInput | COUNTER_SERVICECreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTER_SERVICEIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * COUNTER_SERVICE update
   */
  export type COUNTER_SERVICEUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER_SERVICE
     */
    select?: COUNTER_SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER_SERVICE
     */
    omit?: COUNTER_SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTER_SERVICEInclude<ExtArgs> | null
    /**
     * The data needed to update a COUNTER_SERVICE.
     */
    data: XOR<COUNTER_SERVICEUpdateInput, COUNTER_SERVICEUncheckedUpdateInput>
    /**
     * Choose, which COUNTER_SERVICE to update.
     */
    where: COUNTER_SERVICEWhereUniqueInput
  }

  /**
   * COUNTER_SERVICE updateMany
   */
  export type COUNTER_SERVICEUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update COUNTER_SERVICES.
     */
    data: XOR<COUNTER_SERVICEUpdateManyMutationInput, COUNTER_SERVICEUncheckedUpdateManyInput>
    /**
     * Filter which COUNTER_SERVICES to update
     */
    where?: COUNTER_SERVICEWhereInput
    /**
     * Limit how many COUNTER_SERVICES to update.
     */
    limit?: number
  }

  /**
   * COUNTER_SERVICE updateManyAndReturn
   */
  export type COUNTER_SERVICEUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER_SERVICE
     */
    select?: COUNTER_SERVICESelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER_SERVICE
     */
    omit?: COUNTER_SERVICEOmit<ExtArgs> | null
    /**
     * The data used to update COUNTER_SERVICES.
     */
    data: XOR<COUNTER_SERVICEUpdateManyMutationInput, COUNTER_SERVICEUncheckedUpdateManyInput>
    /**
     * Filter which COUNTER_SERVICES to update
     */
    where?: COUNTER_SERVICEWhereInput
    /**
     * Limit how many COUNTER_SERVICES to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTER_SERVICEIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * COUNTER_SERVICE upsert
   */
  export type COUNTER_SERVICEUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER_SERVICE
     */
    select?: COUNTER_SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER_SERVICE
     */
    omit?: COUNTER_SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTER_SERVICEInclude<ExtArgs> | null
    /**
     * The filter to search for the COUNTER_SERVICE to update in case it exists.
     */
    where: COUNTER_SERVICEWhereUniqueInput
    /**
     * In case the COUNTER_SERVICE found by the `where` argument doesn't exist, create a new COUNTER_SERVICE with this data.
     */
    create: XOR<COUNTER_SERVICECreateInput, COUNTER_SERVICEUncheckedCreateInput>
    /**
     * In case the COUNTER_SERVICE was found with the provided `where` argument, update it with this data.
     */
    update: XOR<COUNTER_SERVICEUpdateInput, COUNTER_SERVICEUncheckedUpdateInput>
  }

  /**
   * COUNTER_SERVICE delete
   */
  export type COUNTER_SERVICEDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER_SERVICE
     */
    select?: COUNTER_SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER_SERVICE
     */
    omit?: COUNTER_SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTER_SERVICEInclude<ExtArgs> | null
    /**
     * Filter which COUNTER_SERVICE to delete.
     */
    where: COUNTER_SERVICEWhereUniqueInput
  }

  /**
   * COUNTER_SERVICE deleteMany
   */
  export type COUNTER_SERVICEDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which COUNTER_SERVICES to delete
     */
    where?: COUNTER_SERVICEWhereInput
    /**
     * Limit how many COUNTER_SERVICES to delete.
     */
    limit?: number
  }

  /**
   * COUNTER_SERVICE without action
   */
  export type COUNTER_SERVICEDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER_SERVICE
     */
    select?: COUNTER_SERVICESelect<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER_SERVICE
     */
    omit?: COUNTER_SERVICEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTER_SERVICEInclude<ExtArgs> | null
  }


  /**
   * Model TICKET
   */

  export type AggregateTICKET = {
    _count: TICKETCountAggregateOutputType | null
    _avg: TICKETAvgAggregateOutputType | null
    _sum: TICKETSumAggregateOutputType | null
    _min: TICKETMinAggregateOutputType | null
    _max: TICKETMaxAggregateOutputType | null
  }

  export type TICKETAvgAggregateOutputType = {
    TicketID: number | null
    ServiceID: number | null
    CounterID: number | null
  }

  export type TICKETSumAggregateOutputType = {
    TicketID: number | null
    ServiceID: number | null
    CounterID: number | null
  }

  export type TICKETMinAggregateOutputType = {
    TicketID: number | null
    TicketNumber: string | null
    StartTime: Date | null
    EndTime: Date | null
    Date: Date | null
    ServiceID: number | null
    CounterID: number | null
  }

  export type TICKETMaxAggregateOutputType = {
    TicketID: number | null
    TicketNumber: string | null
    StartTime: Date | null
    EndTime: Date | null
    Date: Date | null
    ServiceID: number | null
    CounterID: number | null
  }

  export type TICKETCountAggregateOutputType = {
    TicketID: number
    TicketNumber: number
    StartTime: number
    EndTime: number
    Date: number
    ServiceID: number
    CounterID: number
    _all: number
  }


  export type TICKETAvgAggregateInputType = {
    TicketID?: true
    ServiceID?: true
    CounterID?: true
  }

  export type TICKETSumAggregateInputType = {
    TicketID?: true
    ServiceID?: true
    CounterID?: true
  }

  export type TICKETMinAggregateInputType = {
    TicketID?: true
    TicketNumber?: true
    StartTime?: true
    EndTime?: true
    Date?: true
    ServiceID?: true
    CounterID?: true
  }

  export type TICKETMaxAggregateInputType = {
    TicketID?: true
    TicketNumber?: true
    StartTime?: true
    EndTime?: true
    Date?: true
    ServiceID?: true
    CounterID?: true
  }

  export type TICKETCountAggregateInputType = {
    TicketID?: true
    TicketNumber?: true
    StartTime?: true
    EndTime?: true
    Date?: true
    ServiceID?: true
    CounterID?: true
    _all?: true
  }

  export type TICKETAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TICKET to aggregate.
     */
    where?: TICKETWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TICKETS to fetch.
     */
    orderBy?: TICKETOrderByWithRelationInput | TICKETOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TICKETWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TICKETS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TICKETS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TICKETS
    **/
    _count?: true | TICKETCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TICKETAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TICKETSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TICKETMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TICKETMaxAggregateInputType
  }

  export type GetTICKETAggregateType<T extends TICKETAggregateArgs> = {
        [P in keyof T & keyof AggregateTICKET]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTICKET[P]>
      : GetScalarType<T[P], AggregateTICKET[P]>
  }




  export type TICKETGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TICKETWhereInput
    orderBy?: TICKETOrderByWithAggregationInput | TICKETOrderByWithAggregationInput[]
    by: TICKETScalarFieldEnum[] | TICKETScalarFieldEnum
    having?: TICKETScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TICKETCountAggregateInputType | true
    _avg?: TICKETAvgAggregateInputType
    _sum?: TICKETSumAggregateInputType
    _min?: TICKETMinAggregateInputType
    _max?: TICKETMaxAggregateInputType
  }

  export type TICKETGroupByOutputType = {
    TicketID: number
    TicketNumber: string
    StartTime: Date
    EndTime: Date | null
    Date: Date
    ServiceID: number
    CounterID: number | null
    _count: TICKETCountAggregateOutputType | null
    _avg: TICKETAvgAggregateOutputType | null
    _sum: TICKETSumAggregateOutputType | null
    _min: TICKETMinAggregateOutputType | null
    _max: TICKETMaxAggregateOutputType | null
  }

  type GetTICKETGroupByPayload<T extends TICKETGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TICKETGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TICKETGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TICKETGroupByOutputType[P]>
            : GetScalarType<T[P], TICKETGroupByOutputType[P]>
        }
      >
    >


  export type TICKETSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TicketID?: boolean
    TicketNumber?: boolean
    StartTime?: boolean
    EndTime?: boolean
    Date?: boolean
    ServiceID?: boolean
    CounterID?: boolean
    service?: boolean | SERVICEDefaultArgs<ExtArgs>
    counter?: boolean | TICKET$counterArgs<ExtArgs>
  }, ExtArgs["result"]["tICKET"]>

  export type TICKETSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TicketID?: boolean
    TicketNumber?: boolean
    StartTime?: boolean
    EndTime?: boolean
    Date?: boolean
    ServiceID?: boolean
    CounterID?: boolean
    service?: boolean | SERVICEDefaultArgs<ExtArgs>
    counter?: boolean | TICKET$counterArgs<ExtArgs>
  }, ExtArgs["result"]["tICKET"]>

  export type TICKETSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TicketID?: boolean
    TicketNumber?: boolean
    StartTime?: boolean
    EndTime?: boolean
    Date?: boolean
    ServiceID?: boolean
    CounterID?: boolean
    service?: boolean | SERVICEDefaultArgs<ExtArgs>
    counter?: boolean | TICKET$counterArgs<ExtArgs>
  }, ExtArgs["result"]["tICKET"]>

  export type TICKETSelectScalar = {
    TicketID?: boolean
    TicketNumber?: boolean
    StartTime?: boolean
    EndTime?: boolean
    Date?: boolean
    ServiceID?: boolean
    CounterID?: boolean
  }

  export type TICKETOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"TicketID" | "TicketNumber" | "StartTime" | "EndTime" | "Date" | "ServiceID" | "CounterID", ExtArgs["result"]["tICKET"]>
  export type TICKETInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | SERVICEDefaultArgs<ExtArgs>
    counter?: boolean | TICKET$counterArgs<ExtArgs>
  }
  export type TICKETIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | SERVICEDefaultArgs<ExtArgs>
    counter?: boolean | TICKET$counterArgs<ExtArgs>
  }
  export type TICKETIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | SERVICEDefaultArgs<ExtArgs>
    counter?: boolean | TICKET$counterArgs<ExtArgs>
  }

  export type $TICKETPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TICKET"
    objects: {
      service: Prisma.$SERVICEPayload<ExtArgs>
      counter: Prisma.$COUNTERPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      TicketID: number
      TicketNumber: string
      StartTime: Date
      EndTime: Date | null
      Date: Date
      ServiceID: number
      CounterID: number | null
    }, ExtArgs["result"]["tICKET"]>
    composites: {}
  }

  type TICKETGetPayload<S extends boolean | null | undefined | TICKETDefaultArgs> = $Result.GetResult<Prisma.$TICKETPayload, S>

  type TICKETCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TICKETFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TICKETCountAggregateInputType | true
    }

  export interface TICKETDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TICKET'], meta: { name: 'TICKET' } }
    /**
     * Find zero or one TICKET that matches the filter.
     * @param {TICKETFindUniqueArgs} args - Arguments to find a TICKET
     * @example
     * // Get one TICKET
     * const tICKET = await prisma.tICKET.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TICKETFindUniqueArgs>(args: SelectSubset<T, TICKETFindUniqueArgs<ExtArgs>>): Prisma__TICKETClient<$Result.GetResult<Prisma.$TICKETPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TICKET that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TICKETFindUniqueOrThrowArgs} args - Arguments to find a TICKET
     * @example
     * // Get one TICKET
     * const tICKET = await prisma.tICKET.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TICKETFindUniqueOrThrowArgs>(args: SelectSubset<T, TICKETFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TICKETClient<$Result.GetResult<Prisma.$TICKETPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TICKET that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TICKETFindFirstArgs} args - Arguments to find a TICKET
     * @example
     * // Get one TICKET
     * const tICKET = await prisma.tICKET.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TICKETFindFirstArgs>(args?: SelectSubset<T, TICKETFindFirstArgs<ExtArgs>>): Prisma__TICKETClient<$Result.GetResult<Prisma.$TICKETPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TICKET that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TICKETFindFirstOrThrowArgs} args - Arguments to find a TICKET
     * @example
     * // Get one TICKET
     * const tICKET = await prisma.tICKET.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TICKETFindFirstOrThrowArgs>(args?: SelectSubset<T, TICKETFindFirstOrThrowArgs<ExtArgs>>): Prisma__TICKETClient<$Result.GetResult<Prisma.$TICKETPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TICKETS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TICKETFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TICKETS
     * const tICKETS = await prisma.tICKET.findMany()
     * 
     * // Get first 10 TICKETS
     * const tICKETS = await prisma.tICKET.findMany({ take: 10 })
     * 
     * // Only select the `TicketID`
     * const tICKETWithTicketIDOnly = await prisma.tICKET.findMany({ select: { TicketID: true } })
     * 
     */
    findMany<T extends TICKETFindManyArgs>(args?: SelectSubset<T, TICKETFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TICKETPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TICKET.
     * @param {TICKETCreateArgs} args - Arguments to create a TICKET.
     * @example
     * // Create one TICKET
     * const TICKET = await prisma.tICKET.create({
     *   data: {
     *     // ... data to create a TICKET
     *   }
     * })
     * 
     */
    create<T extends TICKETCreateArgs>(args: SelectSubset<T, TICKETCreateArgs<ExtArgs>>): Prisma__TICKETClient<$Result.GetResult<Prisma.$TICKETPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TICKETS.
     * @param {TICKETCreateManyArgs} args - Arguments to create many TICKETS.
     * @example
     * // Create many TICKETS
     * const tICKET = await prisma.tICKET.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TICKETCreateManyArgs>(args?: SelectSubset<T, TICKETCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TICKETS and returns the data saved in the database.
     * @param {TICKETCreateManyAndReturnArgs} args - Arguments to create many TICKETS.
     * @example
     * // Create many TICKETS
     * const tICKET = await prisma.tICKET.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TICKETS and only return the `TicketID`
     * const tICKETWithTicketIDOnly = await prisma.tICKET.createManyAndReturn({
     *   select: { TicketID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TICKETCreateManyAndReturnArgs>(args?: SelectSubset<T, TICKETCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TICKETPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TICKET.
     * @param {TICKETDeleteArgs} args - Arguments to delete one TICKET.
     * @example
     * // Delete one TICKET
     * const TICKET = await prisma.tICKET.delete({
     *   where: {
     *     // ... filter to delete one TICKET
     *   }
     * })
     * 
     */
    delete<T extends TICKETDeleteArgs>(args: SelectSubset<T, TICKETDeleteArgs<ExtArgs>>): Prisma__TICKETClient<$Result.GetResult<Prisma.$TICKETPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TICKET.
     * @param {TICKETUpdateArgs} args - Arguments to update one TICKET.
     * @example
     * // Update one TICKET
     * const tICKET = await prisma.tICKET.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TICKETUpdateArgs>(args: SelectSubset<T, TICKETUpdateArgs<ExtArgs>>): Prisma__TICKETClient<$Result.GetResult<Prisma.$TICKETPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TICKETS.
     * @param {TICKETDeleteManyArgs} args - Arguments to filter TICKETS to delete.
     * @example
     * // Delete a few TICKETS
     * const { count } = await prisma.tICKET.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TICKETDeleteManyArgs>(args?: SelectSubset<T, TICKETDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TICKETS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TICKETUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TICKETS
     * const tICKET = await prisma.tICKET.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TICKETUpdateManyArgs>(args: SelectSubset<T, TICKETUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TICKETS and returns the data updated in the database.
     * @param {TICKETUpdateManyAndReturnArgs} args - Arguments to update many TICKETS.
     * @example
     * // Update many TICKETS
     * const tICKET = await prisma.tICKET.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TICKETS and only return the `TicketID`
     * const tICKETWithTicketIDOnly = await prisma.tICKET.updateManyAndReturn({
     *   select: { TicketID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TICKETUpdateManyAndReturnArgs>(args: SelectSubset<T, TICKETUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TICKETPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TICKET.
     * @param {TICKETUpsertArgs} args - Arguments to update or create a TICKET.
     * @example
     * // Update or create a TICKET
     * const tICKET = await prisma.tICKET.upsert({
     *   create: {
     *     // ... data to create a TICKET
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TICKET we want to update
     *   }
     * })
     */
    upsert<T extends TICKETUpsertArgs>(args: SelectSubset<T, TICKETUpsertArgs<ExtArgs>>): Prisma__TICKETClient<$Result.GetResult<Prisma.$TICKETPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TICKETS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TICKETCountArgs} args - Arguments to filter TICKETS to count.
     * @example
     * // Count the number of TICKETS
     * const count = await prisma.tICKET.count({
     *   where: {
     *     // ... the filter for the TICKETS we want to count
     *   }
     * })
    **/
    count<T extends TICKETCountArgs>(
      args?: Subset<T, TICKETCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TICKETCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TICKET.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TICKETAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TICKETAggregateArgs>(args: Subset<T, TICKETAggregateArgs>): Prisma.PrismaPromise<GetTICKETAggregateType<T>>

    /**
     * Group by TICKET.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TICKETGroupByArgs} args - Group by arguments.
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
      T extends TICKETGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TICKETGroupByArgs['orderBy'] }
        : { orderBy?: TICKETGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TICKETGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTICKETGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TICKET model
   */
  readonly fields: TICKETFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TICKET.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TICKETClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends SERVICEDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SERVICEDefaultArgs<ExtArgs>>): Prisma__SERVICEClient<$Result.GetResult<Prisma.$SERVICEPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    counter<T extends TICKET$counterArgs<ExtArgs> = {}>(args?: Subset<T, TICKET$counterArgs<ExtArgs>>): Prisma__COUNTERClient<$Result.GetResult<Prisma.$COUNTERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TICKET model
   */
  interface TICKETFieldRefs {
    readonly TicketID: FieldRef<"TICKET", 'Int'>
    readonly TicketNumber: FieldRef<"TICKET", 'String'>
    readonly StartTime: FieldRef<"TICKET", 'DateTime'>
    readonly EndTime: FieldRef<"TICKET", 'DateTime'>
    readonly Date: FieldRef<"TICKET", 'DateTime'>
    readonly ServiceID: FieldRef<"TICKET", 'Int'>
    readonly CounterID: FieldRef<"TICKET", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TICKET findUnique
   */
  export type TICKETFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TICKET
     */
    select?: TICKETSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TICKET
     */
    omit?: TICKETOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TICKETInclude<ExtArgs> | null
    /**
     * Filter, which TICKET to fetch.
     */
    where: TICKETWhereUniqueInput
  }

  /**
   * TICKET findUniqueOrThrow
   */
  export type TICKETFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TICKET
     */
    select?: TICKETSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TICKET
     */
    omit?: TICKETOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TICKETInclude<ExtArgs> | null
    /**
     * Filter, which TICKET to fetch.
     */
    where: TICKETWhereUniqueInput
  }

  /**
   * TICKET findFirst
   */
  export type TICKETFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TICKET
     */
    select?: TICKETSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TICKET
     */
    omit?: TICKETOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TICKETInclude<ExtArgs> | null
    /**
     * Filter, which TICKET to fetch.
     */
    where?: TICKETWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TICKETS to fetch.
     */
    orderBy?: TICKETOrderByWithRelationInput | TICKETOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TICKETS.
     */
    cursor?: TICKETWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TICKETS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TICKETS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TICKETS.
     */
    distinct?: TICKETScalarFieldEnum | TICKETScalarFieldEnum[]
  }

  /**
   * TICKET findFirstOrThrow
   */
  export type TICKETFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TICKET
     */
    select?: TICKETSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TICKET
     */
    omit?: TICKETOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TICKETInclude<ExtArgs> | null
    /**
     * Filter, which TICKET to fetch.
     */
    where?: TICKETWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TICKETS to fetch.
     */
    orderBy?: TICKETOrderByWithRelationInput | TICKETOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TICKETS.
     */
    cursor?: TICKETWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TICKETS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TICKETS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TICKETS.
     */
    distinct?: TICKETScalarFieldEnum | TICKETScalarFieldEnum[]
  }

  /**
   * TICKET findMany
   */
  export type TICKETFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TICKET
     */
    select?: TICKETSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TICKET
     */
    omit?: TICKETOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TICKETInclude<ExtArgs> | null
    /**
     * Filter, which TICKETS to fetch.
     */
    where?: TICKETWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TICKETS to fetch.
     */
    orderBy?: TICKETOrderByWithRelationInput | TICKETOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TICKETS.
     */
    cursor?: TICKETWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TICKETS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TICKETS.
     */
    skip?: number
    distinct?: TICKETScalarFieldEnum | TICKETScalarFieldEnum[]
  }

  /**
   * TICKET create
   */
  export type TICKETCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TICKET
     */
    select?: TICKETSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TICKET
     */
    omit?: TICKETOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TICKETInclude<ExtArgs> | null
    /**
     * The data needed to create a TICKET.
     */
    data: XOR<TICKETCreateInput, TICKETUncheckedCreateInput>
  }

  /**
   * TICKET createMany
   */
  export type TICKETCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TICKETS.
     */
    data: TICKETCreateManyInput | TICKETCreateManyInput[]
  }

  /**
   * TICKET createManyAndReturn
   */
  export type TICKETCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TICKET
     */
    select?: TICKETSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TICKET
     */
    omit?: TICKETOmit<ExtArgs> | null
    /**
     * The data used to create many TICKETS.
     */
    data: TICKETCreateManyInput | TICKETCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TICKETIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TICKET update
   */
  export type TICKETUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TICKET
     */
    select?: TICKETSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TICKET
     */
    omit?: TICKETOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TICKETInclude<ExtArgs> | null
    /**
     * The data needed to update a TICKET.
     */
    data: XOR<TICKETUpdateInput, TICKETUncheckedUpdateInput>
    /**
     * Choose, which TICKET to update.
     */
    where: TICKETWhereUniqueInput
  }

  /**
   * TICKET updateMany
   */
  export type TICKETUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TICKETS.
     */
    data: XOR<TICKETUpdateManyMutationInput, TICKETUncheckedUpdateManyInput>
    /**
     * Filter which TICKETS to update
     */
    where?: TICKETWhereInput
    /**
     * Limit how many TICKETS to update.
     */
    limit?: number
  }

  /**
   * TICKET updateManyAndReturn
   */
  export type TICKETUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TICKET
     */
    select?: TICKETSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TICKET
     */
    omit?: TICKETOmit<ExtArgs> | null
    /**
     * The data used to update TICKETS.
     */
    data: XOR<TICKETUpdateManyMutationInput, TICKETUncheckedUpdateManyInput>
    /**
     * Filter which TICKETS to update
     */
    where?: TICKETWhereInput
    /**
     * Limit how many TICKETS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TICKETIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TICKET upsert
   */
  export type TICKETUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TICKET
     */
    select?: TICKETSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TICKET
     */
    omit?: TICKETOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TICKETInclude<ExtArgs> | null
    /**
     * The filter to search for the TICKET to update in case it exists.
     */
    where: TICKETWhereUniqueInput
    /**
     * In case the TICKET found by the `where` argument doesn't exist, create a new TICKET with this data.
     */
    create: XOR<TICKETCreateInput, TICKETUncheckedCreateInput>
    /**
     * In case the TICKET was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TICKETUpdateInput, TICKETUncheckedUpdateInput>
  }

  /**
   * TICKET delete
   */
  export type TICKETDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TICKET
     */
    select?: TICKETSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TICKET
     */
    omit?: TICKETOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TICKETInclude<ExtArgs> | null
    /**
     * Filter which TICKET to delete.
     */
    where: TICKETWhereUniqueInput
  }

  /**
   * TICKET deleteMany
   */
  export type TICKETDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TICKETS to delete
     */
    where?: TICKETWhereInput
    /**
     * Limit how many TICKETS to delete.
     */
    limit?: number
  }

  /**
   * TICKET.counter
   */
  export type TICKET$counterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COUNTER
     */
    select?: COUNTERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COUNTER
     */
    omit?: COUNTEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COUNTERInclude<ExtArgs> | null
    where?: COUNTERWhereInput
  }

  /**
   * TICKET without action
   */
  export type TICKETDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TICKET
     */
    select?: TICKETSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TICKET
     */
    omit?: TICKETOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TICKETInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const COUNTERScalarFieldEnum: {
    CounterID: 'CounterID',
    CounterNumber: 'CounterNumber'
  };

  export type COUNTERScalarFieldEnum = (typeof COUNTERScalarFieldEnum)[keyof typeof COUNTERScalarFieldEnum]


  export const SERVICEScalarFieldEnum: {
    ServiceID: 'ServiceID',
    Name: 'Name',
    AvgServiceTime: 'AvgServiceTime'
  };

  export type SERVICEScalarFieldEnum = (typeof SERVICEScalarFieldEnum)[keyof typeof SERVICEScalarFieldEnum]


  export const COUNTER_SERVICEScalarFieldEnum: {
    CounterID: 'CounterID',
    ServiceID: 'ServiceID'
  };

  export type COUNTER_SERVICEScalarFieldEnum = (typeof COUNTER_SERVICEScalarFieldEnum)[keyof typeof COUNTER_SERVICEScalarFieldEnum]


  export const TICKETScalarFieldEnum: {
    TicketID: 'TicketID',
    TicketNumber: 'TicketNumber',
    StartTime: 'StartTime',
    EndTime: 'EndTime',
    Date: 'Date',
    ServiceID: 'ServiceID',
    CounterID: 'CounterID'
  };

  export type TICKETScalarFieldEnum = (typeof TICKETScalarFieldEnum)[keyof typeof TICKETScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type COUNTERWhereInput = {
    AND?: COUNTERWhereInput | COUNTERWhereInput[]
    OR?: COUNTERWhereInput[]
    NOT?: COUNTERWhereInput | COUNTERWhereInput[]
    CounterID?: IntFilter<"COUNTER"> | number
    CounterNumber?: IntFilter<"COUNTER"> | number
    counterServices?: COUNTER_SERVICEListRelationFilter
    tickets?: TICKETListRelationFilter
  }

  export type COUNTEROrderByWithRelationInput = {
    CounterID?: SortOrder
    CounterNumber?: SortOrder
    counterServices?: COUNTER_SERVICEOrderByRelationAggregateInput
    tickets?: TICKETOrderByRelationAggregateInput
  }

  export type COUNTERWhereUniqueInput = Prisma.AtLeast<{
    CounterID?: number
    CounterNumber?: number
    AND?: COUNTERWhereInput | COUNTERWhereInput[]
    OR?: COUNTERWhereInput[]
    NOT?: COUNTERWhereInput | COUNTERWhereInput[]
    counterServices?: COUNTER_SERVICEListRelationFilter
    tickets?: TICKETListRelationFilter
  }, "CounterID" | "CounterNumber">

  export type COUNTEROrderByWithAggregationInput = {
    CounterID?: SortOrder
    CounterNumber?: SortOrder
    _count?: COUNTERCountOrderByAggregateInput
    _avg?: COUNTERAvgOrderByAggregateInput
    _max?: COUNTERMaxOrderByAggregateInput
    _min?: COUNTERMinOrderByAggregateInput
    _sum?: COUNTERSumOrderByAggregateInput
  }

  export type COUNTERScalarWhereWithAggregatesInput = {
    AND?: COUNTERScalarWhereWithAggregatesInput | COUNTERScalarWhereWithAggregatesInput[]
    OR?: COUNTERScalarWhereWithAggregatesInput[]
    NOT?: COUNTERScalarWhereWithAggregatesInput | COUNTERScalarWhereWithAggregatesInput[]
    CounterID?: IntWithAggregatesFilter<"COUNTER"> | number
    CounterNumber?: IntWithAggregatesFilter<"COUNTER"> | number
  }

  export type SERVICEWhereInput = {
    AND?: SERVICEWhereInput | SERVICEWhereInput[]
    OR?: SERVICEWhereInput[]
    NOT?: SERVICEWhereInput | SERVICEWhereInput[]
    ServiceID?: IntFilter<"SERVICE"> | number
    Name?: StringFilter<"SERVICE"> | string
    AvgServiceTime?: IntFilter<"SERVICE"> | number
    counterServices?: COUNTER_SERVICEListRelationFilter
    tickets?: TICKETListRelationFilter
  }

  export type SERVICEOrderByWithRelationInput = {
    ServiceID?: SortOrder
    Name?: SortOrder
    AvgServiceTime?: SortOrder
    counterServices?: COUNTER_SERVICEOrderByRelationAggregateInput
    tickets?: TICKETOrderByRelationAggregateInput
  }

  export type SERVICEWhereUniqueInput = Prisma.AtLeast<{
    ServiceID?: number
    AND?: SERVICEWhereInput | SERVICEWhereInput[]
    OR?: SERVICEWhereInput[]
    NOT?: SERVICEWhereInput | SERVICEWhereInput[]
    Name?: StringFilter<"SERVICE"> | string
    AvgServiceTime?: IntFilter<"SERVICE"> | number
    counterServices?: COUNTER_SERVICEListRelationFilter
    tickets?: TICKETListRelationFilter
  }, "ServiceID">

  export type SERVICEOrderByWithAggregationInput = {
    ServiceID?: SortOrder
    Name?: SortOrder
    AvgServiceTime?: SortOrder
    _count?: SERVICECountOrderByAggregateInput
    _avg?: SERVICEAvgOrderByAggregateInput
    _max?: SERVICEMaxOrderByAggregateInput
    _min?: SERVICEMinOrderByAggregateInput
    _sum?: SERVICESumOrderByAggregateInput
  }

  export type SERVICEScalarWhereWithAggregatesInput = {
    AND?: SERVICEScalarWhereWithAggregatesInput | SERVICEScalarWhereWithAggregatesInput[]
    OR?: SERVICEScalarWhereWithAggregatesInput[]
    NOT?: SERVICEScalarWhereWithAggregatesInput | SERVICEScalarWhereWithAggregatesInput[]
    ServiceID?: IntWithAggregatesFilter<"SERVICE"> | number
    Name?: StringWithAggregatesFilter<"SERVICE"> | string
    AvgServiceTime?: IntWithAggregatesFilter<"SERVICE"> | number
  }

  export type COUNTER_SERVICEWhereInput = {
    AND?: COUNTER_SERVICEWhereInput | COUNTER_SERVICEWhereInput[]
    OR?: COUNTER_SERVICEWhereInput[]
    NOT?: COUNTER_SERVICEWhereInput | COUNTER_SERVICEWhereInput[]
    CounterID?: IntFilter<"COUNTER_SERVICE"> | number
    ServiceID?: IntFilter<"COUNTER_SERVICE"> | number
    counter?: XOR<COUNTERScalarRelationFilter, COUNTERWhereInput>
    service?: XOR<SERVICEScalarRelationFilter, SERVICEWhereInput>
  }

  export type COUNTER_SERVICEOrderByWithRelationInput = {
    CounterID?: SortOrder
    ServiceID?: SortOrder
    counter?: COUNTEROrderByWithRelationInput
    service?: SERVICEOrderByWithRelationInput
  }

  export type COUNTER_SERVICEWhereUniqueInput = Prisma.AtLeast<{
    CounterID_ServiceID?: COUNTER_SERVICECounterIDServiceIDCompoundUniqueInput
    AND?: COUNTER_SERVICEWhereInput | COUNTER_SERVICEWhereInput[]
    OR?: COUNTER_SERVICEWhereInput[]
    NOT?: COUNTER_SERVICEWhereInput | COUNTER_SERVICEWhereInput[]
    CounterID?: IntFilter<"COUNTER_SERVICE"> | number
    ServiceID?: IntFilter<"COUNTER_SERVICE"> | number
    counter?: XOR<COUNTERScalarRelationFilter, COUNTERWhereInput>
    service?: XOR<SERVICEScalarRelationFilter, SERVICEWhereInput>
  }, "CounterID_ServiceID">

  export type COUNTER_SERVICEOrderByWithAggregationInput = {
    CounterID?: SortOrder
    ServiceID?: SortOrder
    _count?: COUNTER_SERVICECountOrderByAggregateInput
    _avg?: COUNTER_SERVICEAvgOrderByAggregateInput
    _max?: COUNTER_SERVICEMaxOrderByAggregateInput
    _min?: COUNTER_SERVICEMinOrderByAggregateInput
    _sum?: COUNTER_SERVICESumOrderByAggregateInput
  }

  export type COUNTER_SERVICEScalarWhereWithAggregatesInput = {
    AND?: COUNTER_SERVICEScalarWhereWithAggregatesInput | COUNTER_SERVICEScalarWhereWithAggregatesInput[]
    OR?: COUNTER_SERVICEScalarWhereWithAggregatesInput[]
    NOT?: COUNTER_SERVICEScalarWhereWithAggregatesInput | COUNTER_SERVICEScalarWhereWithAggregatesInput[]
    CounterID?: IntWithAggregatesFilter<"COUNTER_SERVICE"> | number
    ServiceID?: IntWithAggregatesFilter<"COUNTER_SERVICE"> | number
  }

  export type TICKETWhereInput = {
    AND?: TICKETWhereInput | TICKETWhereInput[]
    OR?: TICKETWhereInput[]
    NOT?: TICKETWhereInput | TICKETWhereInput[]
    TicketID?: IntFilter<"TICKET"> | number
    TicketNumber?: StringFilter<"TICKET"> | string
    StartTime?: DateTimeFilter<"TICKET"> | Date | string
    EndTime?: DateTimeNullableFilter<"TICKET"> | Date | string | null
    Date?: DateTimeFilter<"TICKET"> | Date | string
    ServiceID?: IntFilter<"TICKET"> | number
    CounterID?: IntNullableFilter<"TICKET"> | number | null
    service?: XOR<SERVICEScalarRelationFilter, SERVICEWhereInput>
    counter?: XOR<COUNTERNullableScalarRelationFilter, COUNTERWhereInput> | null
  }

  export type TICKETOrderByWithRelationInput = {
    TicketID?: SortOrder
    TicketNumber?: SortOrder
    StartTime?: SortOrder
    EndTime?: SortOrderInput | SortOrder
    Date?: SortOrder
    ServiceID?: SortOrder
    CounterID?: SortOrderInput | SortOrder
    service?: SERVICEOrderByWithRelationInput
    counter?: COUNTEROrderByWithRelationInput
  }

  export type TICKETWhereUniqueInput = Prisma.AtLeast<{
    TicketID?: number
    TicketNumber?: string
    AND?: TICKETWhereInput | TICKETWhereInput[]
    OR?: TICKETWhereInput[]
    NOT?: TICKETWhereInput | TICKETWhereInput[]
    StartTime?: DateTimeFilter<"TICKET"> | Date | string
    EndTime?: DateTimeNullableFilter<"TICKET"> | Date | string | null
    Date?: DateTimeFilter<"TICKET"> | Date | string
    ServiceID?: IntFilter<"TICKET"> | number
    CounterID?: IntNullableFilter<"TICKET"> | number | null
    service?: XOR<SERVICEScalarRelationFilter, SERVICEWhereInput>
    counter?: XOR<COUNTERNullableScalarRelationFilter, COUNTERWhereInput> | null
  }, "TicketID" | "TicketNumber">

  export type TICKETOrderByWithAggregationInput = {
    TicketID?: SortOrder
    TicketNumber?: SortOrder
    StartTime?: SortOrder
    EndTime?: SortOrderInput | SortOrder
    Date?: SortOrder
    ServiceID?: SortOrder
    CounterID?: SortOrderInput | SortOrder
    _count?: TICKETCountOrderByAggregateInput
    _avg?: TICKETAvgOrderByAggregateInput
    _max?: TICKETMaxOrderByAggregateInput
    _min?: TICKETMinOrderByAggregateInput
    _sum?: TICKETSumOrderByAggregateInput
  }

  export type TICKETScalarWhereWithAggregatesInput = {
    AND?: TICKETScalarWhereWithAggregatesInput | TICKETScalarWhereWithAggregatesInput[]
    OR?: TICKETScalarWhereWithAggregatesInput[]
    NOT?: TICKETScalarWhereWithAggregatesInput | TICKETScalarWhereWithAggregatesInput[]
    TicketID?: IntWithAggregatesFilter<"TICKET"> | number
    TicketNumber?: StringWithAggregatesFilter<"TICKET"> | string
    StartTime?: DateTimeWithAggregatesFilter<"TICKET"> | Date | string
    EndTime?: DateTimeNullableWithAggregatesFilter<"TICKET"> | Date | string | null
    Date?: DateTimeWithAggregatesFilter<"TICKET"> | Date | string
    ServiceID?: IntWithAggregatesFilter<"TICKET"> | number
    CounterID?: IntNullableWithAggregatesFilter<"TICKET"> | number | null
  }

  export type COUNTERCreateInput = {
    CounterNumber: number
    counterServices?: COUNTER_SERVICECreateNestedManyWithoutCounterInput
    tickets?: TICKETCreateNestedManyWithoutCounterInput
  }

  export type COUNTERUncheckedCreateInput = {
    CounterID?: number
    CounterNumber: number
    counterServices?: COUNTER_SERVICEUncheckedCreateNestedManyWithoutCounterInput
    tickets?: TICKETUncheckedCreateNestedManyWithoutCounterInput
  }

  export type COUNTERUpdateInput = {
    CounterNumber?: IntFieldUpdateOperationsInput | number
    counterServices?: COUNTER_SERVICEUpdateManyWithoutCounterNestedInput
    tickets?: TICKETUpdateManyWithoutCounterNestedInput
  }

  export type COUNTERUncheckedUpdateInput = {
    CounterID?: IntFieldUpdateOperationsInput | number
    CounterNumber?: IntFieldUpdateOperationsInput | number
    counterServices?: COUNTER_SERVICEUncheckedUpdateManyWithoutCounterNestedInput
    tickets?: TICKETUncheckedUpdateManyWithoutCounterNestedInput
  }

  export type COUNTERCreateManyInput = {
    CounterID?: number
    CounterNumber: number
  }

  export type COUNTERUpdateManyMutationInput = {
    CounterNumber?: IntFieldUpdateOperationsInput | number
  }

  export type COUNTERUncheckedUpdateManyInput = {
    CounterID?: IntFieldUpdateOperationsInput | number
    CounterNumber?: IntFieldUpdateOperationsInput | number
  }

  export type SERVICECreateInput = {
    Name: string
    AvgServiceTime: number
    counterServices?: COUNTER_SERVICECreateNestedManyWithoutServiceInput
    tickets?: TICKETCreateNestedManyWithoutServiceInput
  }

  export type SERVICEUncheckedCreateInput = {
    ServiceID?: number
    Name: string
    AvgServiceTime: number
    counterServices?: COUNTER_SERVICEUncheckedCreateNestedManyWithoutServiceInput
    tickets?: TICKETUncheckedCreateNestedManyWithoutServiceInput
  }

  export type SERVICEUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    AvgServiceTime?: IntFieldUpdateOperationsInput | number
    counterServices?: COUNTER_SERVICEUpdateManyWithoutServiceNestedInput
    tickets?: TICKETUpdateManyWithoutServiceNestedInput
  }

  export type SERVICEUncheckedUpdateInput = {
    ServiceID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AvgServiceTime?: IntFieldUpdateOperationsInput | number
    counterServices?: COUNTER_SERVICEUncheckedUpdateManyWithoutServiceNestedInput
    tickets?: TICKETUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type SERVICECreateManyInput = {
    ServiceID?: number
    Name: string
    AvgServiceTime: number
  }

  export type SERVICEUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    AvgServiceTime?: IntFieldUpdateOperationsInput | number
  }

  export type SERVICEUncheckedUpdateManyInput = {
    ServiceID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AvgServiceTime?: IntFieldUpdateOperationsInput | number
  }

  export type COUNTER_SERVICECreateInput = {
    counter: COUNTERCreateNestedOneWithoutCounterServicesInput
    service: SERVICECreateNestedOneWithoutCounterServicesInput
  }

  export type COUNTER_SERVICEUncheckedCreateInput = {
    CounterID: number
    ServiceID: number
  }

  export type COUNTER_SERVICEUpdateInput = {
    counter?: COUNTERUpdateOneRequiredWithoutCounterServicesNestedInput
    service?: SERVICEUpdateOneRequiredWithoutCounterServicesNestedInput
  }

  export type COUNTER_SERVICEUncheckedUpdateInput = {
    CounterID?: IntFieldUpdateOperationsInput | number
    ServiceID?: IntFieldUpdateOperationsInput | number
  }

  export type COUNTER_SERVICECreateManyInput = {
    CounterID: number
    ServiceID: number
  }

  export type COUNTER_SERVICEUpdateManyMutationInput = {

  }

  export type COUNTER_SERVICEUncheckedUpdateManyInput = {
    CounterID?: IntFieldUpdateOperationsInput | number
    ServiceID?: IntFieldUpdateOperationsInput | number
  }

  export type TICKETCreateInput = {
    TicketNumber: string
    StartTime: Date | string
    EndTime?: Date | string | null
    Date: Date | string
    service: SERVICECreateNestedOneWithoutTicketsInput
    counter?: COUNTERCreateNestedOneWithoutTicketsInput
  }

  export type TICKETUncheckedCreateInput = {
    TicketID?: number
    TicketNumber: string
    StartTime: Date | string
    EndTime?: Date | string | null
    Date: Date | string
    ServiceID: number
    CounterID?: number | null
  }

  export type TICKETUpdateInput = {
    TicketNumber?: StringFieldUpdateOperationsInput | string
    StartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    EndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: SERVICEUpdateOneRequiredWithoutTicketsNestedInput
    counter?: COUNTERUpdateOneWithoutTicketsNestedInput
  }

  export type TICKETUncheckedUpdateInput = {
    TicketID?: IntFieldUpdateOperationsInput | number
    TicketNumber?: StringFieldUpdateOperationsInput | string
    StartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    EndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    ServiceID?: IntFieldUpdateOperationsInput | number
    CounterID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TICKETCreateManyInput = {
    TicketID?: number
    TicketNumber: string
    StartTime: Date | string
    EndTime?: Date | string | null
    Date: Date | string
    ServiceID: number
    CounterID?: number | null
  }

  export type TICKETUpdateManyMutationInput = {
    TicketNumber?: StringFieldUpdateOperationsInput | string
    StartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    EndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TICKETUncheckedUpdateManyInput = {
    TicketID?: IntFieldUpdateOperationsInput | number
    TicketNumber?: StringFieldUpdateOperationsInput | string
    StartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    EndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    ServiceID?: IntFieldUpdateOperationsInput | number
    CounterID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type COUNTER_SERVICEListRelationFilter = {
    every?: COUNTER_SERVICEWhereInput
    some?: COUNTER_SERVICEWhereInput
    none?: COUNTER_SERVICEWhereInput
  }

  export type TICKETListRelationFilter = {
    every?: TICKETWhereInput
    some?: TICKETWhereInput
    none?: TICKETWhereInput
  }

  export type COUNTER_SERVICEOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TICKETOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type COUNTERCountOrderByAggregateInput = {
    CounterID?: SortOrder
    CounterNumber?: SortOrder
  }

  export type COUNTERAvgOrderByAggregateInput = {
    CounterID?: SortOrder
    CounterNumber?: SortOrder
  }

  export type COUNTERMaxOrderByAggregateInput = {
    CounterID?: SortOrder
    CounterNumber?: SortOrder
  }

  export type COUNTERMinOrderByAggregateInput = {
    CounterID?: SortOrder
    CounterNumber?: SortOrder
  }

  export type COUNTERSumOrderByAggregateInput = {
    CounterID?: SortOrder
    CounterNumber?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SERVICECountOrderByAggregateInput = {
    ServiceID?: SortOrder
    Name?: SortOrder
    AvgServiceTime?: SortOrder
  }

  export type SERVICEAvgOrderByAggregateInput = {
    ServiceID?: SortOrder
    AvgServiceTime?: SortOrder
  }

  export type SERVICEMaxOrderByAggregateInput = {
    ServiceID?: SortOrder
    Name?: SortOrder
    AvgServiceTime?: SortOrder
  }

  export type SERVICEMinOrderByAggregateInput = {
    ServiceID?: SortOrder
    Name?: SortOrder
    AvgServiceTime?: SortOrder
  }

  export type SERVICESumOrderByAggregateInput = {
    ServiceID?: SortOrder
    AvgServiceTime?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type COUNTERScalarRelationFilter = {
    is?: COUNTERWhereInput
    isNot?: COUNTERWhereInput
  }

  export type SERVICEScalarRelationFilter = {
    is?: SERVICEWhereInput
    isNot?: SERVICEWhereInput
  }

  export type COUNTER_SERVICECounterIDServiceIDCompoundUniqueInput = {
    CounterID: number
    ServiceID: number
  }

  export type COUNTER_SERVICECountOrderByAggregateInput = {
    CounterID?: SortOrder
    ServiceID?: SortOrder
  }

  export type COUNTER_SERVICEAvgOrderByAggregateInput = {
    CounterID?: SortOrder
    ServiceID?: SortOrder
  }

  export type COUNTER_SERVICEMaxOrderByAggregateInput = {
    CounterID?: SortOrder
    ServiceID?: SortOrder
  }

  export type COUNTER_SERVICEMinOrderByAggregateInput = {
    CounterID?: SortOrder
    ServiceID?: SortOrder
  }

  export type COUNTER_SERVICESumOrderByAggregateInput = {
    CounterID?: SortOrder
    ServiceID?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type COUNTERNullableScalarRelationFilter = {
    is?: COUNTERWhereInput | null
    isNot?: COUNTERWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TICKETCountOrderByAggregateInput = {
    TicketID?: SortOrder
    TicketNumber?: SortOrder
    StartTime?: SortOrder
    EndTime?: SortOrder
    Date?: SortOrder
    ServiceID?: SortOrder
    CounterID?: SortOrder
  }

  export type TICKETAvgOrderByAggregateInput = {
    TicketID?: SortOrder
    ServiceID?: SortOrder
    CounterID?: SortOrder
  }

  export type TICKETMaxOrderByAggregateInput = {
    TicketID?: SortOrder
    TicketNumber?: SortOrder
    StartTime?: SortOrder
    EndTime?: SortOrder
    Date?: SortOrder
    ServiceID?: SortOrder
    CounterID?: SortOrder
  }

  export type TICKETMinOrderByAggregateInput = {
    TicketID?: SortOrder
    TicketNumber?: SortOrder
    StartTime?: SortOrder
    EndTime?: SortOrder
    Date?: SortOrder
    ServiceID?: SortOrder
    CounterID?: SortOrder
  }

  export type TICKETSumOrderByAggregateInput = {
    TicketID?: SortOrder
    ServiceID?: SortOrder
    CounterID?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type COUNTER_SERVICECreateNestedManyWithoutCounterInput = {
    create?: XOR<COUNTER_SERVICECreateWithoutCounterInput, COUNTER_SERVICEUncheckedCreateWithoutCounterInput> | COUNTER_SERVICECreateWithoutCounterInput[] | COUNTER_SERVICEUncheckedCreateWithoutCounterInput[]
    connectOrCreate?: COUNTER_SERVICECreateOrConnectWithoutCounterInput | COUNTER_SERVICECreateOrConnectWithoutCounterInput[]
    createMany?: COUNTER_SERVICECreateManyCounterInputEnvelope
    connect?: COUNTER_SERVICEWhereUniqueInput | COUNTER_SERVICEWhereUniqueInput[]
  }

  export type TICKETCreateNestedManyWithoutCounterInput = {
    create?: XOR<TICKETCreateWithoutCounterInput, TICKETUncheckedCreateWithoutCounterInput> | TICKETCreateWithoutCounterInput[] | TICKETUncheckedCreateWithoutCounterInput[]
    connectOrCreate?: TICKETCreateOrConnectWithoutCounterInput | TICKETCreateOrConnectWithoutCounterInput[]
    createMany?: TICKETCreateManyCounterInputEnvelope
    connect?: TICKETWhereUniqueInput | TICKETWhereUniqueInput[]
  }

  export type COUNTER_SERVICEUncheckedCreateNestedManyWithoutCounterInput = {
    create?: XOR<COUNTER_SERVICECreateWithoutCounterInput, COUNTER_SERVICEUncheckedCreateWithoutCounterInput> | COUNTER_SERVICECreateWithoutCounterInput[] | COUNTER_SERVICEUncheckedCreateWithoutCounterInput[]
    connectOrCreate?: COUNTER_SERVICECreateOrConnectWithoutCounterInput | COUNTER_SERVICECreateOrConnectWithoutCounterInput[]
    createMany?: COUNTER_SERVICECreateManyCounterInputEnvelope
    connect?: COUNTER_SERVICEWhereUniqueInput | COUNTER_SERVICEWhereUniqueInput[]
  }

  export type TICKETUncheckedCreateNestedManyWithoutCounterInput = {
    create?: XOR<TICKETCreateWithoutCounterInput, TICKETUncheckedCreateWithoutCounterInput> | TICKETCreateWithoutCounterInput[] | TICKETUncheckedCreateWithoutCounterInput[]
    connectOrCreate?: TICKETCreateOrConnectWithoutCounterInput | TICKETCreateOrConnectWithoutCounterInput[]
    createMany?: TICKETCreateManyCounterInputEnvelope
    connect?: TICKETWhereUniqueInput | TICKETWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type COUNTER_SERVICEUpdateManyWithoutCounterNestedInput = {
    create?: XOR<COUNTER_SERVICECreateWithoutCounterInput, COUNTER_SERVICEUncheckedCreateWithoutCounterInput> | COUNTER_SERVICECreateWithoutCounterInput[] | COUNTER_SERVICEUncheckedCreateWithoutCounterInput[]
    connectOrCreate?: COUNTER_SERVICECreateOrConnectWithoutCounterInput | COUNTER_SERVICECreateOrConnectWithoutCounterInput[]
    upsert?: COUNTER_SERVICEUpsertWithWhereUniqueWithoutCounterInput | COUNTER_SERVICEUpsertWithWhereUniqueWithoutCounterInput[]
    createMany?: COUNTER_SERVICECreateManyCounterInputEnvelope
    set?: COUNTER_SERVICEWhereUniqueInput | COUNTER_SERVICEWhereUniqueInput[]
    disconnect?: COUNTER_SERVICEWhereUniqueInput | COUNTER_SERVICEWhereUniqueInput[]
    delete?: COUNTER_SERVICEWhereUniqueInput | COUNTER_SERVICEWhereUniqueInput[]
    connect?: COUNTER_SERVICEWhereUniqueInput | COUNTER_SERVICEWhereUniqueInput[]
    update?: COUNTER_SERVICEUpdateWithWhereUniqueWithoutCounterInput | COUNTER_SERVICEUpdateWithWhereUniqueWithoutCounterInput[]
    updateMany?: COUNTER_SERVICEUpdateManyWithWhereWithoutCounterInput | COUNTER_SERVICEUpdateManyWithWhereWithoutCounterInput[]
    deleteMany?: COUNTER_SERVICEScalarWhereInput | COUNTER_SERVICEScalarWhereInput[]
  }

  export type TICKETUpdateManyWithoutCounterNestedInput = {
    create?: XOR<TICKETCreateWithoutCounterInput, TICKETUncheckedCreateWithoutCounterInput> | TICKETCreateWithoutCounterInput[] | TICKETUncheckedCreateWithoutCounterInput[]
    connectOrCreate?: TICKETCreateOrConnectWithoutCounterInput | TICKETCreateOrConnectWithoutCounterInput[]
    upsert?: TICKETUpsertWithWhereUniqueWithoutCounterInput | TICKETUpsertWithWhereUniqueWithoutCounterInput[]
    createMany?: TICKETCreateManyCounterInputEnvelope
    set?: TICKETWhereUniqueInput | TICKETWhereUniqueInput[]
    disconnect?: TICKETWhereUniqueInput | TICKETWhereUniqueInput[]
    delete?: TICKETWhereUniqueInput | TICKETWhereUniqueInput[]
    connect?: TICKETWhereUniqueInput | TICKETWhereUniqueInput[]
    update?: TICKETUpdateWithWhereUniqueWithoutCounterInput | TICKETUpdateWithWhereUniqueWithoutCounterInput[]
    updateMany?: TICKETUpdateManyWithWhereWithoutCounterInput | TICKETUpdateManyWithWhereWithoutCounterInput[]
    deleteMany?: TICKETScalarWhereInput | TICKETScalarWhereInput[]
  }

  export type COUNTER_SERVICEUncheckedUpdateManyWithoutCounterNestedInput = {
    create?: XOR<COUNTER_SERVICECreateWithoutCounterInput, COUNTER_SERVICEUncheckedCreateWithoutCounterInput> | COUNTER_SERVICECreateWithoutCounterInput[] | COUNTER_SERVICEUncheckedCreateWithoutCounterInput[]
    connectOrCreate?: COUNTER_SERVICECreateOrConnectWithoutCounterInput | COUNTER_SERVICECreateOrConnectWithoutCounterInput[]
    upsert?: COUNTER_SERVICEUpsertWithWhereUniqueWithoutCounterInput | COUNTER_SERVICEUpsertWithWhereUniqueWithoutCounterInput[]
    createMany?: COUNTER_SERVICECreateManyCounterInputEnvelope
    set?: COUNTER_SERVICEWhereUniqueInput | COUNTER_SERVICEWhereUniqueInput[]
    disconnect?: COUNTER_SERVICEWhereUniqueInput | COUNTER_SERVICEWhereUniqueInput[]
    delete?: COUNTER_SERVICEWhereUniqueInput | COUNTER_SERVICEWhereUniqueInput[]
    connect?: COUNTER_SERVICEWhereUniqueInput | COUNTER_SERVICEWhereUniqueInput[]
    update?: COUNTER_SERVICEUpdateWithWhereUniqueWithoutCounterInput | COUNTER_SERVICEUpdateWithWhereUniqueWithoutCounterInput[]
    updateMany?: COUNTER_SERVICEUpdateManyWithWhereWithoutCounterInput | COUNTER_SERVICEUpdateManyWithWhereWithoutCounterInput[]
    deleteMany?: COUNTER_SERVICEScalarWhereInput | COUNTER_SERVICEScalarWhereInput[]
  }

  export type TICKETUncheckedUpdateManyWithoutCounterNestedInput = {
    create?: XOR<TICKETCreateWithoutCounterInput, TICKETUncheckedCreateWithoutCounterInput> | TICKETCreateWithoutCounterInput[] | TICKETUncheckedCreateWithoutCounterInput[]
    connectOrCreate?: TICKETCreateOrConnectWithoutCounterInput | TICKETCreateOrConnectWithoutCounterInput[]
    upsert?: TICKETUpsertWithWhereUniqueWithoutCounterInput | TICKETUpsertWithWhereUniqueWithoutCounterInput[]
    createMany?: TICKETCreateManyCounterInputEnvelope
    set?: TICKETWhereUniqueInput | TICKETWhereUniqueInput[]
    disconnect?: TICKETWhereUniqueInput | TICKETWhereUniqueInput[]
    delete?: TICKETWhereUniqueInput | TICKETWhereUniqueInput[]
    connect?: TICKETWhereUniqueInput | TICKETWhereUniqueInput[]
    update?: TICKETUpdateWithWhereUniqueWithoutCounterInput | TICKETUpdateWithWhereUniqueWithoutCounterInput[]
    updateMany?: TICKETUpdateManyWithWhereWithoutCounterInput | TICKETUpdateManyWithWhereWithoutCounterInput[]
    deleteMany?: TICKETScalarWhereInput | TICKETScalarWhereInput[]
  }

  export type COUNTER_SERVICECreateNestedManyWithoutServiceInput = {
    create?: XOR<COUNTER_SERVICECreateWithoutServiceInput, COUNTER_SERVICEUncheckedCreateWithoutServiceInput> | COUNTER_SERVICECreateWithoutServiceInput[] | COUNTER_SERVICEUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: COUNTER_SERVICECreateOrConnectWithoutServiceInput | COUNTER_SERVICECreateOrConnectWithoutServiceInput[]
    createMany?: COUNTER_SERVICECreateManyServiceInputEnvelope
    connect?: COUNTER_SERVICEWhereUniqueInput | COUNTER_SERVICEWhereUniqueInput[]
  }

  export type TICKETCreateNestedManyWithoutServiceInput = {
    create?: XOR<TICKETCreateWithoutServiceInput, TICKETUncheckedCreateWithoutServiceInput> | TICKETCreateWithoutServiceInput[] | TICKETUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: TICKETCreateOrConnectWithoutServiceInput | TICKETCreateOrConnectWithoutServiceInput[]
    createMany?: TICKETCreateManyServiceInputEnvelope
    connect?: TICKETWhereUniqueInput | TICKETWhereUniqueInput[]
  }

  export type COUNTER_SERVICEUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<COUNTER_SERVICECreateWithoutServiceInput, COUNTER_SERVICEUncheckedCreateWithoutServiceInput> | COUNTER_SERVICECreateWithoutServiceInput[] | COUNTER_SERVICEUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: COUNTER_SERVICECreateOrConnectWithoutServiceInput | COUNTER_SERVICECreateOrConnectWithoutServiceInput[]
    createMany?: COUNTER_SERVICECreateManyServiceInputEnvelope
    connect?: COUNTER_SERVICEWhereUniqueInput | COUNTER_SERVICEWhereUniqueInput[]
  }

  export type TICKETUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<TICKETCreateWithoutServiceInput, TICKETUncheckedCreateWithoutServiceInput> | TICKETCreateWithoutServiceInput[] | TICKETUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: TICKETCreateOrConnectWithoutServiceInput | TICKETCreateOrConnectWithoutServiceInput[]
    createMany?: TICKETCreateManyServiceInputEnvelope
    connect?: TICKETWhereUniqueInput | TICKETWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type COUNTER_SERVICEUpdateManyWithoutServiceNestedInput = {
    create?: XOR<COUNTER_SERVICECreateWithoutServiceInput, COUNTER_SERVICEUncheckedCreateWithoutServiceInput> | COUNTER_SERVICECreateWithoutServiceInput[] | COUNTER_SERVICEUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: COUNTER_SERVICECreateOrConnectWithoutServiceInput | COUNTER_SERVICECreateOrConnectWithoutServiceInput[]
    upsert?: COUNTER_SERVICEUpsertWithWhereUniqueWithoutServiceInput | COUNTER_SERVICEUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: COUNTER_SERVICECreateManyServiceInputEnvelope
    set?: COUNTER_SERVICEWhereUniqueInput | COUNTER_SERVICEWhereUniqueInput[]
    disconnect?: COUNTER_SERVICEWhereUniqueInput | COUNTER_SERVICEWhereUniqueInput[]
    delete?: COUNTER_SERVICEWhereUniqueInput | COUNTER_SERVICEWhereUniqueInput[]
    connect?: COUNTER_SERVICEWhereUniqueInput | COUNTER_SERVICEWhereUniqueInput[]
    update?: COUNTER_SERVICEUpdateWithWhereUniqueWithoutServiceInput | COUNTER_SERVICEUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: COUNTER_SERVICEUpdateManyWithWhereWithoutServiceInput | COUNTER_SERVICEUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: COUNTER_SERVICEScalarWhereInput | COUNTER_SERVICEScalarWhereInput[]
  }

  export type TICKETUpdateManyWithoutServiceNestedInput = {
    create?: XOR<TICKETCreateWithoutServiceInput, TICKETUncheckedCreateWithoutServiceInput> | TICKETCreateWithoutServiceInput[] | TICKETUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: TICKETCreateOrConnectWithoutServiceInput | TICKETCreateOrConnectWithoutServiceInput[]
    upsert?: TICKETUpsertWithWhereUniqueWithoutServiceInput | TICKETUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: TICKETCreateManyServiceInputEnvelope
    set?: TICKETWhereUniqueInput | TICKETWhereUniqueInput[]
    disconnect?: TICKETWhereUniqueInput | TICKETWhereUniqueInput[]
    delete?: TICKETWhereUniqueInput | TICKETWhereUniqueInput[]
    connect?: TICKETWhereUniqueInput | TICKETWhereUniqueInput[]
    update?: TICKETUpdateWithWhereUniqueWithoutServiceInput | TICKETUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: TICKETUpdateManyWithWhereWithoutServiceInput | TICKETUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: TICKETScalarWhereInput | TICKETScalarWhereInput[]
  }

  export type COUNTER_SERVICEUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<COUNTER_SERVICECreateWithoutServiceInput, COUNTER_SERVICEUncheckedCreateWithoutServiceInput> | COUNTER_SERVICECreateWithoutServiceInput[] | COUNTER_SERVICEUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: COUNTER_SERVICECreateOrConnectWithoutServiceInput | COUNTER_SERVICECreateOrConnectWithoutServiceInput[]
    upsert?: COUNTER_SERVICEUpsertWithWhereUniqueWithoutServiceInput | COUNTER_SERVICEUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: COUNTER_SERVICECreateManyServiceInputEnvelope
    set?: COUNTER_SERVICEWhereUniqueInput | COUNTER_SERVICEWhereUniqueInput[]
    disconnect?: COUNTER_SERVICEWhereUniqueInput | COUNTER_SERVICEWhereUniqueInput[]
    delete?: COUNTER_SERVICEWhereUniqueInput | COUNTER_SERVICEWhereUniqueInput[]
    connect?: COUNTER_SERVICEWhereUniqueInput | COUNTER_SERVICEWhereUniqueInput[]
    update?: COUNTER_SERVICEUpdateWithWhereUniqueWithoutServiceInput | COUNTER_SERVICEUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: COUNTER_SERVICEUpdateManyWithWhereWithoutServiceInput | COUNTER_SERVICEUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: COUNTER_SERVICEScalarWhereInput | COUNTER_SERVICEScalarWhereInput[]
  }

  export type TICKETUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<TICKETCreateWithoutServiceInput, TICKETUncheckedCreateWithoutServiceInput> | TICKETCreateWithoutServiceInput[] | TICKETUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: TICKETCreateOrConnectWithoutServiceInput | TICKETCreateOrConnectWithoutServiceInput[]
    upsert?: TICKETUpsertWithWhereUniqueWithoutServiceInput | TICKETUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: TICKETCreateManyServiceInputEnvelope
    set?: TICKETWhereUniqueInput | TICKETWhereUniqueInput[]
    disconnect?: TICKETWhereUniqueInput | TICKETWhereUniqueInput[]
    delete?: TICKETWhereUniqueInput | TICKETWhereUniqueInput[]
    connect?: TICKETWhereUniqueInput | TICKETWhereUniqueInput[]
    update?: TICKETUpdateWithWhereUniqueWithoutServiceInput | TICKETUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: TICKETUpdateManyWithWhereWithoutServiceInput | TICKETUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: TICKETScalarWhereInput | TICKETScalarWhereInput[]
  }

  export type COUNTERCreateNestedOneWithoutCounterServicesInput = {
    create?: XOR<COUNTERCreateWithoutCounterServicesInput, COUNTERUncheckedCreateWithoutCounterServicesInput>
    connectOrCreate?: COUNTERCreateOrConnectWithoutCounterServicesInput
    connect?: COUNTERWhereUniqueInput
  }

  export type SERVICECreateNestedOneWithoutCounterServicesInput = {
    create?: XOR<SERVICECreateWithoutCounterServicesInput, SERVICEUncheckedCreateWithoutCounterServicesInput>
    connectOrCreate?: SERVICECreateOrConnectWithoutCounterServicesInput
    connect?: SERVICEWhereUniqueInput
  }

  export type COUNTERUpdateOneRequiredWithoutCounterServicesNestedInput = {
    create?: XOR<COUNTERCreateWithoutCounterServicesInput, COUNTERUncheckedCreateWithoutCounterServicesInput>
    connectOrCreate?: COUNTERCreateOrConnectWithoutCounterServicesInput
    upsert?: COUNTERUpsertWithoutCounterServicesInput
    connect?: COUNTERWhereUniqueInput
    update?: XOR<XOR<COUNTERUpdateToOneWithWhereWithoutCounterServicesInput, COUNTERUpdateWithoutCounterServicesInput>, COUNTERUncheckedUpdateWithoutCounterServicesInput>
  }

  export type SERVICEUpdateOneRequiredWithoutCounterServicesNestedInput = {
    create?: XOR<SERVICECreateWithoutCounterServicesInput, SERVICEUncheckedCreateWithoutCounterServicesInput>
    connectOrCreate?: SERVICECreateOrConnectWithoutCounterServicesInput
    upsert?: SERVICEUpsertWithoutCounterServicesInput
    connect?: SERVICEWhereUniqueInput
    update?: XOR<XOR<SERVICEUpdateToOneWithWhereWithoutCounterServicesInput, SERVICEUpdateWithoutCounterServicesInput>, SERVICEUncheckedUpdateWithoutCounterServicesInput>
  }

  export type SERVICECreateNestedOneWithoutTicketsInput = {
    create?: XOR<SERVICECreateWithoutTicketsInput, SERVICEUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: SERVICECreateOrConnectWithoutTicketsInput
    connect?: SERVICEWhereUniqueInput
  }

  export type COUNTERCreateNestedOneWithoutTicketsInput = {
    create?: XOR<COUNTERCreateWithoutTicketsInput, COUNTERUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: COUNTERCreateOrConnectWithoutTicketsInput
    connect?: COUNTERWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SERVICEUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<SERVICECreateWithoutTicketsInput, SERVICEUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: SERVICECreateOrConnectWithoutTicketsInput
    upsert?: SERVICEUpsertWithoutTicketsInput
    connect?: SERVICEWhereUniqueInput
    update?: XOR<XOR<SERVICEUpdateToOneWithWhereWithoutTicketsInput, SERVICEUpdateWithoutTicketsInput>, SERVICEUncheckedUpdateWithoutTicketsInput>
  }

  export type COUNTERUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<COUNTERCreateWithoutTicketsInput, COUNTERUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: COUNTERCreateOrConnectWithoutTicketsInput
    upsert?: COUNTERUpsertWithoutTicketsInput
    disconnect?: COUNTERWhereInput | boolean
    delete?: COUNTERWhereInput | boolean
    connect?: COUNTERWhereUniqueInput
    update?: XOR<XOR<COUNTERUpdateToOneWithWhereWithoutTicketsInput, COUNTERUpdateWithoutTicketsInput>, COUNTERUncheckedUpdateWithoutTicketsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type COUNTER_SERVICECreateWithoutCounterInput = {
    service: SERVICECreateNestedOneWithoutCounterServicesInput
  }

  export type COUNTER_SERVICEUncheckedCreateWithoutCounterInput = {
    ServiceID: number
  }

  export type COUNTER_SERVICECreateOrConnectWithoutCounterInput = {
    where: COUNTER_SERVICEWhereUniqueInput
    create: XOR<COUNTER_SERVICECreateWithoutCounterInput, COUNTER_SERVICEUncheckedCreateWithoutCounterInput>
  }

  export type COUNTER_SERVICECreateManyCounterInputEnvelope = {
    data: COUNTER_SERVICECreateManyCounterInput | COUNTER_SERVICECreateManyCounterInput[]
  }

  export type TICKETCreateWithoutCounterInput = {
    TicketNumber: string
    StartTime: Date | string
    EndTime?: Date | string | null
    Date: Date | string
    service: SERVICECreateNestedOneWithoutTicketsInput
  }

  export type TICKETUncheckedCreateWithoutCounterInput = {
    TicketID?: number
    TicketNumber: string
    StartTime: Date | string
    EndTime?: Date | string | null
    Date: Date | string
    ServiceID: number
  }

  export type TICKETCreateOrConnectWithoutCounterInput = {
    where: TICKETWhereUniqueInput
    create: XOR<TICKETCreateWithoutCounterInput, TICKETUncheckedCreateWithoutCounterInput>
  }

  export type TICKETCreateManyCounterInputEnvelope = {
    data: TICKETCreateManyCounterInput | TICKETCreateManyCounterInput[]
  }

  export type COUNTER_SERVICEUpsertWithWhereUniqueWithoutCounterInput = {
    where: COUNTER_SERVICEWhereUniqueInput
    update: XOR<COUNTER_SERVICEUpdateWithoutCounterInput, COUNTER_SERVICEUncheckedUpdateWithoutCounterInput>
    create: XOR<COUNTER_SERVICECreateWithoutCounterInput, COUNTER_SERVICEUncheckedCreateWithoutCounterInput>
  }

  export type COUNTER_SERVICEUpdateWithWhereUniqueWithoutCounterInput = {
    where: COUNTER_SERVICEWhereUniqueInput
    data: XOR<COUNTER_SERVICEUpdateWithoutCounterInput, COUNTER_SERVICEUncheckedUpdateWithoutCounterInput>
  }

  export type COUNTER_SERVICEUpdateManyWithWhereWithoutCounterInput = {
    where: COUNTER_SERVICEScalarWhereInput
    data: XOR<COUNTER_SERVICEUpdateManyMutationInput, COUNTER_SERVICEUncheckedUpdateManyWithoutCounterInput>
  }

  export type COUNTER_SERVICEScalarWhereInput = {
    AND?: COUNTER_SERVICEScalarWhereInput | COUNTER_SERVICEScalarWhereInput[]
    OR?: COUNTER_SERVICEScalarWhereInput[]
    NOT?: COUNTER_SERVICEScalarWhereInput | COUNTER_SERVICEScalarWhereInput[]
    CounterID?: IntFilter<"COUNTER_SERVICE"> | number
    ServiceID?: IntFilter<"COUNTER_SERVICE"> | number
  }

  export type TICKETUpsertWithWhereUniqueWithoutCounterInput = {
    where: TICKETWhereUniqueInput
    update: XOR<TICKETUpdateWithoutCounterInput, TICKETUncheckedUpdateWithoutCounterInput>
    create: XOR<TICKETCreateWithoutCounterInput, TICKETUncheckedCreateWithoutCounterInput>
  }

  export type TICKETUpdateWithWhereUniqueWithoutCounterInput = {
    where: TICKETWhereUniqueInput
    data: XOR<TICKETUpdateWithoutCounterInput, TICKETUncheckedUpdateWithoutCounterInput>
  }

  export type TICKETUpdateManyWithWhereWithoutCounterInput = {
    where: TICKETScalarWhereInput
    data: XOR<TICKETUpdateManyMutationInput, TICKETUncheckedUpdateManyWithoutCounterInput>
  }

  export type TICKETScalarWhereInput = {
    AND?: TICKETScalarWhereInput | TICKETScalarWhereInput[]
    OR?: TICKETScalarWhereInput[]
    NOT?: TICKETScalarWhereInput | TICKETScalarWhereInput[]
    TicketID?: IntFilter<"TICKET"> | number
    TicketNumber?: StringFilter<"TICKET"> | string
    StartTime?: DateTimeFilter<"TICKET"> | Date | string
    EndTime?: DateTimeNullableFilter<"TICKET"> | Date | string | null
    Date?: DateTimeFilter<"TICKET"> | Date | string
    ServiceID?: IntFilter<"TICKET"> | number
    CounterID?: IntNullableFilter<"TICKET"> | number | null
  }

  export type COUNTER_SERVICECreateWithoutServiceInput = {
    counter: COUNTERCreateNestedOneWithoutCounterServicesInput
  }

  export type COUNTER_SERVICEUncheckedCreateWithoutServiceInput = {
    CounterID: number
  }

  export type COUNTER_SERVICECreateOrConnectWithoutServiceInput = {
    where: COUNTER_SERVICEWhereUniqueInput
    create: XOR<COUNTER_SERVICECreateWithoutServiceInput, COUNTER_SERVICEUncheckedCreateWithoutServiceInput>
  }

  export type COUNTER_SERVICECreateManyServiceInputEnvelope = {
    data: COUNTER_SERVICECreateManyServiceInput | COUNTER_SERVICECreateManyServiceInput[]
  }

  export type TICKETCreateWithoutServiceInput = {
    TicketNumber: string
    StartTime: Date | string
    EndTime?: Date | string | null
    Date: Date | string
    counter?: COUNTERCreateNestedOneWithoutTicketsInput
  }

  export type TICKETUncheckedCreateWithoutServiceInput = {
    TicketID?: number
    TicketNumber: string
    StartTime: Date | string
    EndTime?: Date | string | null
    Date: Date | string
    CounterID?: number | null
  }

  export type TICKETCreateOrConnectWithoutServiceInput = {
    where: TICKETWhereUniqueInput
    create: XOR<TICKETCreateWithoutServiceInput, TICKETUncheckedCreateWithoutServiceInput>
  }

  export type TICKETCreateManyServiceInputEnvelope = {
    data: TICKETCreateManyServiceInput | TICKETCreateManyServiceInput[]
  }

  export type COUNTER_SERVICEUpsertWithWhereUniqueWithoutServiceInput = {
    where: COUNTER_SERVICEWhereUniqueInput
    update: XOR<COUNTER_SERVICEUpdateWithoutServiceInput, COUNTER_SERVICEUncheckedUpdateWithoutServiceInput>
    create: XOR<COUNTER_SERVICECreateWithoutServiceInput, COUNTER_SERVICEUncheckedCreateWithoutServiceInput>
  }

  export type COUNTER_SERVICEUpdateWithWhereUniqueWithoutServiceInput = {
    where: COUNTER_SERVICEWhereUniqueInput
    data: XOR<COUNTER_SERVICEUpdateWithoutServiceInput, COUNTER_SERVICEUncheckedUpdateWithoutServiceInput>
  }

  export type COUNTER_SERVICEUpdateManyWithWhereWithoutServiceInput = {
    where: COUNTER_SERVICEScalarWhereInput
    data: XOR<COUNTER_SERVICEUpdateManyMutationInput, COUNTER_SERVICEUncheckedUpdateManyWithoutServiceInput>
  }

  export type TICKETUpsertWithWhereUniqueWithoutServiceInput = {
    where: TICKETWhereUniqueInput
    update: XOR<TICKETUpdateWithoutServiceInput, TICKETUncheckedUpdateWithoutServiceInput>
    create: XOR<TICKETCreateWithoutServiceInput, TICKETUncheckedCreateWithoutServiceInput>
  }

  export type TICKETUpdateWithWhereUniqueWithoutServiceInput = {
    where: TICKETWhereUniqueInput
    data: XOR<TICKETUpdateWithoutServiceInput, TICKETUncheckedUpdateWithoutServiceInput>
  }

  export type TICKETUpdateManyWithWhereWithoutServiceInput = {
    where: TICKETScalarWhereInput
    data: XOR<TICKETUpdateManyMutationInput, TICKETUncheckedUpdateManyWithoutServiceInput>
  }

  export type COUNTERCreateWithoutCounterServicesInput = {
    CounterNumber: number
    tickets?: TICKETCreateNestedManyWithoutCounterInput
  }

  export type COUNTERUncheckedCreateWithoutCounterServicesInput = {
    CounterID?: number
    CounterNumber: number
    tickets?: TICKETUncheckedCreateNestedManyWithoutCounterInput
  }

  export type COUNTERCreateOrConnectWithoutCounterServicesInput = {
    where: COUNTERWhereUniqueInput
    create: XOR<COUNTERCreateWithoutCounterServicesInput, COUNTERUncheckedCreateWithoutCounterServicesInput>
  }

  export type SERVICECreateWithoutCounterServicesInput = {
    Name: string
    AvgServiceTime: number
    tickets?: TICKETCreateNestedManyWithoutServiceInput
  }

  export type SERVICEUncheckedCreateWithoutCounterServicesInput = {
    ServiceID?: number
    Name: string
    AvgServiceTime: number
    tickets?: TICKETUncheckedCreateNestedManyWithoutServiceInput
  }

  export type SERVICECreateOrConnectWithoutCounterServicesInput = {
    where: SERVICEWhereUniqueInput
    create: XOR<SERVICECreateWithoutCounterServicesInput, SERVICEUncheckedCreateWithoutCounterServicesInput>
  }

  export type COUNTERUpsertWithoutCounterServicesInput = {
    update: XOR<COUNTERUpdateWithoutCounterServicesInput, COUNTERUncheckedUpdateWithoutCounterServicesInput>
    create: XOR<COUNTERCreateWithoutCounterServicesInput, COUNTERUncheckedCreateWithoutCounterServicesInput>
    where?: COUNTERWhereInput
  }

  export type COUNTERUpdateToOneWithWhereWithoutCounterServicesInput = {
    where?: COUNTERWhereInput
    data: XOR<COUNTERUpdateWithoutCounterServicesInput, COUNTERUncheckedUpdateWithoutCounterServicesInput>
  }

  export type COUNTERUpdateWithoutCounterServicesInput = {
    CounterNumber?: IntFieldUpdateOperationsInput | number
    tickets?: TICKETUpdateManyWithoutCounterNestedInput
  }

  export type COUNTERUncheckedUpdateWithoutCounterServicesInput = {
    CounterID?: IntFieldUpdateOperationsInput | number
    CounterNumber?: IntFieldUpdateOperationsInput | number
    tickets?: TICKETUncheckedUpdateManyWithoutCounterNestedInput
  }

  export type SERVICEUpsertWithoutCounterServicesInput = {
    update: XOR<SERVICEUpdateWithoutCounterServicesInput, SERVICEUncheckedUpdateWithoutCounterServicesInput>
    create: XOR<SERVICECreateWithoutCounterServicesInput, SERVICEUncheckedCreateWithoutCounterServicesInput>
    where?: SERVICEWhereInput
  }

  export type SERVICEUpdateToOneWithWhereWithoutCounterServicesInput = {
    where?: SERVICEWhereInput
    data: XOR<SERVICEUpdateWithoutCounterServicesInput, SERVICEUncheckedUpdateWithoutCounterServicesInput>
  }

  export type SERVICEUpdateWithoutCounterServicesInput = {
    Name?: StringFieldUpdateOperationsInput | string
    AvgServiceTime?: IntFieldUpdateOperationsInput | number
    tickets?: TICKETUpdateManyWithoutServiceNestedInput
  }

  export type SERVICEUncheckedUpdateWithoutCounterServicesInput = {
    ServiceID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AvgServiceTime?: IntFieldUpdateOperationsInput | number
    tickets?: TICKETUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type SERVICECreateWithoutTicketsInput = {
    Name: string
    AvgServiceTime: number
    counterServices?: COUNTER_SERVICECreateNestedManyWithoutServiceInput
  }

  export type SERVICEUncheckedCreateWithoutTicketsInput = {
    ServiceID?: number
    Name: string
    AvgServiceTime: number
    counterServices?: COUNTER_SERVICEUncheckedCreateNestedManyWithoutServiceInput
  }

  export type SERVICECreateOrConnectWithoutTicketsInput = {
    where: SERVICEWhereUniqueInput
    create: XOR<SERVICECreateWithoutTicketsInput, SERVICEUncheckedCreateWithoutTicketsInput>
  }

  export type COUNTERCreateWithoutTicketsInput = {
    CounterNumber: number
    counterServices?: COUNTER_SERVICECreateNestedManyWithoutCounterInput
  }

  export type COUNTERUncheckedCreateWithoutTicketsInput = {
    CounterID?: number
    CounterNumber: number
    counterServices?: COUNTER_SERVICEUncheckedCreateNestedManyWithoutCounterInput
  }

  export type COUNTERCreateOrConnectWithoutTicketsInput = {
    where: COUNTERWhereUniqueInput
    create: XOR<COUNTERCreateWithoutTicketsInput, COUNTERUncheckedCreateWithoutTicketsInput>
  }

  export type SERVICEUpsertWithoutTicketsInput = {
    update: XOR<SERVICEUpdateWithoutTicketsInput, SERVICEUncheckedUpdateWithoutTicketsInput>
    create: XOR<SERVICECreateWithoutTicketsInput, SERVICEUncheckedCreateWithoutTicketsInput>
    where?: SERVICEWhereInput
  }

  export type SERVICEUpdateToOneWithWhereWithoutTicketsInput = {
    where?: SERVICEWhereInput
    data: XOR<SERVICEUpdateWithoutTicketsInput, SERVICEUncheckedUpdateWithoutTicketsInput>
  }

  export type SERVICEUpdateWithoutTicketsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    AvgServiceTime?: IntFieldUpdateOperationsInput | number
    counterServices?: COUNTER_SERVICEUpdateManyWithoutServiceNestedInput
  }

  export type SERVICEUncheckedUpdateWithoutTicketsInput = {
    ServiceID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    AvgServiceTime?: IntFieldUpdateOperationsInput | number
    counterServices?: COUNTER_SERVICEUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type COUNTERUpsertWithoutTicketsInput = {
    update: XOR<COUNTERUpdateWithoutTicketsInput, COUNTERUncheckedUpdateWithoutTicketsInput>
    create: XOR<COUNTERCreateWithoutTicketsInput, COUNTERUncheckedCreateWithoutTicketsInput>
    where?: COUNTERWhereInput
  }

  export type COUNTERUpdateToOneWithWhereWithoutTicketsInput = {
    where?: COUNTERWhereInput
    data: XOR<COUNTERUpdateWithoutTicketsInput, COUNTERUncheckedUpdateWithoutTicketsInput>
  }

  export type COUNTERUpdateWithoutTicketsInput = {
    CounterNumber?: IntFieldUpdateOperationsInput | number
    counterServices?: COUNTER_SERVICEUpdateManyWithoutCounterNestedInput
  }

  export type COUNTERUncheckedUpdateWithoutTicketsInput = {
    CounterID?: IntFieldUpdateOperationsInput | number
    CounterNumber?: IntFieldUpdateOperationsInput | number
    counterServices?: COUNTER_SERVICEUncheckedUpdateManyWithoutCounterNestedInput
  }

  export type COUNTER_SERVICECreateManyCounterInput = {
    ServiceID: number
  }

  export type TICKETCreateManyCounterInput = {
    TicketID?: number
    TicketNumber: string
    StartTime: Date | string
    EndTime?: Date | string | null
    Date: Date | string
    ServiceID: number
  }

  export type COUNTER_SERVICEUpdateWithoutCounterInput = {
    service?: SERVICEUpdateOneRequiredWithoutCounterServicesNestedInput
  }

  export type COUNTER_SERVICEUncheckedUpdateWithoutCounterInput = {
    ServiceID?: IntFieldUpdateOperationsInput | number
  }

  export type COUNTER_SERVICEUncheckedUpdateManyWithoutCounterInput = {
    ServiceID?: IntFieldUpdateOperationsInput | number
  }

  export type TICKETUpdateWithoutCounterInput = {
    TicketNumber?: StringFieldUpdateOperationsInput | string
    StartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    EndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: SERVICEUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TICKETUncheckedUpdateWithoutCounterInput = {
    TicketID?: IntFieldUpdateOperationsInput | number
    TicketNumber?: StringFieldUpdateOperationsInput | string
    StartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    EndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    ServiceID?: IntFieldUpdateOperationsInput | number
  }

  export type TICKETUncheckedUpdateManyWithoutCounterInput = {
    TicketID?: IntFieldUpdateOperationsInput | number
    TicketNumber?: StringFieldUpdateOperationsInput | string
    StartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    EndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    ServiceID?: IntFieldUpdateOperationsInput | number
  }

  export type COUNTER_SERVICECreateManyServiceInput = {
    CounterID: number
  }

  export type TICKETCreateManyServiceInput = {
    TicketID?: number
    TicketNumber: string
    StartTime: Date | string
    EndTime?: Date | string | null
    Date: Date | string
    CounterID?: number | null
  }

  export type COUNTER_SERVICEUpdateWithoutServiceInput = {
    counter?: COUNTERUpdateOneRequiredWithoutCounterServicesNestedInput
  }

  export type COUNTER_SERVICEUncheckedUpdateWithoutServiceInput = {
    CounterID?: IntFieldUpdateOperationsInput | number
  }

  export type COUNTER_SERVICEUncheckedUpdateManyWithoutServiceInput = {
    CounterID?: IntFieldUpdateOperationsInput | number
  }

  export type TICKETUpdateWithoutServiceInput = {
    TicketNumber?: StringFieldUpdateOperationsInput | string
    StartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    EndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    counter?: COUNTERUpdateOneWithoutTicketsNestedInput
  }

  export type TICKETUncheckedUpdateWithoutServiceInput = {
    TicketID?: IntFieldUpdateOperationsInput | number
    TicketNumber?: StringFieldUpdateOperationsInput | string
    StartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    EndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    CounterID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TICKETUncheckedUpdateManyWithoutServiceInput = {
    TicketID?: IntFieldUpdateOperationsInput | number
    TicketNumber?: StringFieldUpdateOperationsInput | string
    StartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    EndTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    CounterID?: NullableIntFieldUpdateOperationsInput | number | null
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
  export const dmmf: runtime.BaseDMMF
}