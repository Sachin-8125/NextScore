
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UpiTransaction
 * 
 */
export type UpiTransaction = $Result.DefaultSelection<Prisma.$UpiTransactionPayload>
/**
 * Model MobileRecharge
 * 
 */
export type MobileRecharge = $Result.DefaultSelection<Prisma.$MobileRechargePayload>
/**
 * Model CommunityVouch
 * 
 */
export type CommunityVouch = $Result.DefaultSelection<Prisma.$CommunityVouchPayload>

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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.upiTransaction`: Exposes CRUD operations for the **UpiTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UpiTransactions
    * const upiTransactions = await prisma.upiTransaction.findMany()
    * ```
    */
  get upiTransaction(): Prisma.UpiTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mobileRecharge`: Exposes CRUD operations for the **MobileRecharge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MobileRecharges
    * const mobileRecharges = await prisma.mobileRecharge.findMany()
    * ```
    */
  get mobileRecharge(): Prisma.MobileRechargeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communityVouch`: Exposes CRUD operations for the **CommunityVouch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunityVouches
    * const communityVouches = await prisma.communityVouch.findMany()
    * ```
    */
  get communityVouch(): Prisma.CommunityVouchDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    User: 'User',
    UpiTransaction: 'UpiTransaction',
    MobileRecharge: 'MobileRecharge',
    CommunityVouch: 'CommunityVouch'
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
      modelProps: "user" | "upiTransaction" | "mobileRecharge" | "communityVouch"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UpiTransaction: {
        payload: Prisma.$UpiTransactionPayload<ExtArgs>
        fields: Prisma.UpiTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UpiTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpiTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UpiTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpiTransactionPayload>
          }
          findFirst: {
            args: Prisma.UpiTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpiTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UpiTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpiTransactionPayload>
          }
          findMany: {
            args: Prisma.UpiTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpiTransactionPayload>[]
          }
          create: {
            args: Prisma.UpiTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpiTransactionPayload>
          }
          createMany: {
            args: Prisma.UpiTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UpiTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpiTransactionPayload>[]
          }
          delete: {
            args: Prisma.UpiTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpiTransactionPayload>
          }
          update: {
            args: Prisma.UpiTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpiTransactionPayload>
          }
          deleteMany: {
            args: Prisma.UpiTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UpiTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UpiTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpiTransactionPayload>[]
          }
          upsert: {
            args: Prisma.UpiTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpiTransactionPayload>
          }
          aggregate: {
            args: Prisma.UpiTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUpiTransaction>
          }
          groupBy: {
            args: Prisma.UpiTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UpiTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UpiTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<UpiTransactionCountAggregateOutputType> | number
          }
        }
      }
      MobileRecharge: {
        payload: Prisma.$MobileRechargePayload<ExtArgs>
        fields: Prisma.MobileRechargeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MobileRechargeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileRechargePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MobileRechargeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileRechargePayload>
          }
          findFirst: {
            args: Prisma.MobileRechargeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileRechargePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MobileRechargeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileRechargePayload>
          }
          findMany: {
            args: Prisma.MobileRechargeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileRechargePayload>[]
          }
          create: {
            args: Prisma.MobileRechargeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileRechargePayload>
          }
          createMany: {
            args: Prisma.MobileRechargeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MobileRechargeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileRechargePayload>[]
          }
          delete: {
            args: Prisma.MobileRechargeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileRechargePayload>
          }
          update: {
            args: Prisma.MobileRechargeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileRechargePayload>
          }
          deleteMany: {
            args: Prisma.MobileRechargeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MobileRechargeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MobileRechargeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileRechargePayload>[]
          }
          upsert: {
            args: Prisma.MobileRechargeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileRechargePayload>
          }
          aggregate: {
            args: Prisma.MobileRechargeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMobileRecharge>
          }
          groupBy: {
            args: Prisma.MobileRechargeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MobileRechargeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MobileRechargeCountArgs<ExtArgs>
            result: $Utils.Optional<MobileRechargeCountAggregateOutputType> | number
          }
        }
      }
      CommunityVouch: {
        payload: Prisma.$CommunityVouchPayload<ExtArgs>
        fields: Prisma.CommunityVouchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityVouchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityVouchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityVouchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityVouchPayload>
          }
          findFirst: {
            args: Prisma.CommunityVouchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityVouchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityVouchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityVouchPayload>
          }
          findMany: {
            args: Prisma.CommunityVouchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityVouchPayload>[]
          }
          create: {
            args: Prisma.CommunityVouchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityVouchPayload>
          }
          createMany: {
            args: Prisma.CommunityVouchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityVouchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityVouchPayload>[]
          }
          delete: {
            args: Prisma.CommunityVouchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityVouchPayload>
          }
          update: {
            args: Prisma.CommunityVouchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityVouchPayload>
          }
          deleteMany: {
            args: Prisma.CommunityVouchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityVouchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunityVouchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityVouchPayload>[]
          }
          upsert: {
            args: Prisma.CommunityVouchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityVouchPayload>
          }
          aggregate: {
            args: Prisma.CommunityVouchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunityVouch>
          }
          groupBy: {
            args: Prisma.CommunityVouchGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityVouchGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityVouchCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityVouchCountAggregateOutputType> | number
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
    user?: UserOmit
    upiTransaction?: UpiTransactionOmit
    mobileRecharge?: MobileRechargeOmit
    communityVouch?: CommunityVouchOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    transactions: number
    recharges: number
    vouchesGiven: number
    vouchesReceived: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    recharges?: boolean | UserCountOutputTypeCountRechargesArgs
    vouchesGiven?: boolean | UserCountOutputTypeCountVouchesGivenArgs
    vouchesReceived?: boolean | UserCountOutputTypeCountVouchesReceivedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpiTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRechargesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MobileRechargeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVouchesGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityVouchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVouchesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityVouchWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    creditScore: number | null
  }

  export type UserSumAggregateOutputType = {
    creditScore: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    phone: string | null
    name: string | null
    createdAt: Date | null
    creditScore: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    name: string | null
    createdAt: Date | null
    creditScore: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    phone: number
    name: number
    createdAt: number
    creditScore: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    creditScore?: true
  }

  export type UserSumAggregateInputType = {
    creditScore?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    phone?: true
    name?: true
    createdAt?: true
    creditScore?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    phone?: true
    name?: true
    createdAt?: true
    creditScore?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    phone?: true
    name?: true
    createdAt?: true
    creditScore?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    phone: string
    name: string
    createdAt: Date
    creditScore: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    name?: boolean
    createdAt?: boolean
    creditScore?: boolean
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    recharges?: boolean | User$rechargesArgs<ExtArgs>
    vouchesGiven?: boolean | User$vouchesGivenArgs<ExtArgs>
    vouchesReceived?: boolean | User$vouchesReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    name?: boolean
    createdAt?: boolean
    creditScore?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    name?: boolean
    createdAt?: boolean
    creditScore?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    phone?: boolean
    name?: boolean
    createdAt?: boolean
    creditScore?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "name" | "createdAt" | "creditScore", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    recharges?: boolean | User$rechargesArgs<ExtArgs>
    vouchesGiven?: boolean | User$vouchesGivenArgs<ExtArgs>
    vouchesReceived?: boolean | User$vouchesReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      transactions: Prisma.$UpiTransactionPayload<ExtArgs>[]
      recharges: Prisma.$MobileRechargePayload<ExtArgs>[]
      vouchesGiven: Prisma.$CommunityVouchPayload<ExtArgs>[]
      vouchesReceived: Prisma.$CommunityVouchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone: string
      name: string
      createdAt: Date
      creditScore: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpiTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recharges<T extends User$rechargesArgs<ExtArgs> = {}>(args?: Subset<T, User$rechargesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MobileRechargePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vouchesGiven<T extends User$vouchesGivenArgs<ExtArgs> = {}>(args?: Subset<T, User$vouchesGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityVouchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vouchesReceived<T extends User$vouchesReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$vouchesReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityVouchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly creditScore: FieldRef<"User", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTransaction
     */
    select?: UpiTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpiTransaction
     */
    omit?: UpiTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpiTransactionInclude<ExtArgs> | null
    where?: UpiTransactionWhereInput
    orderBy?: UpiTransactionOrderByWithRelationInput | UpiTransactionOrderByWithRelationInput[]
    cursor?: UpiTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UpiTransactionScalarFieldEnum | UpiTransactionScalarFieldEnum[]
  }

  /**
   * User.recharges
   */
  export type User$rechargesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileRecharge
     */
    select?: MobileRechargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileRecharge
     */
    omit?: MobileRechargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileRechargeInclude<ExtArgs> | null
    where?: MobileRechargeWhereInput
    orderBy?: MobileRechargeOrderByWithRelationInput | MobileRechargeOrderByWithRelationInput[]
    cursor?: MobileRechargeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MobileRechargeScalarFieldEnum | MobileRechargeScalarFieldEnum[]
  }

  /**
   * User.vouchesGiven
   */
  export type User$vouchesGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVouch
     */
    select?: CommunityVouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVouch
     */
    omit?: CommunityVouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityVouchInclude<ExtArgs> | null
    where?: CommunityVouchWhereInput
    orderBy?: CommunityVouchOrderByWithRelationInput | CommunityVouchOrderByWithRelationInput[]
    cursor?: CommunityVouchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityVouchScalarFieldEnum | CommunityVouchScalarFieldEnum[]
  }

  /**
   * User.vouchesReceived
   */
  export type User$vouchesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVouch
     */
    select?: CommunityVouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVouch
     */
    omit?: CommunityVouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityVouchInclude<ExtArgs> | null
    where?: CommunityVouchWhereInput
    orderBy?: CommunityVouchOrderByWithRelationInput | CommunityVouchOrderByWithRelationInput[]
    cursor?: CommunityVouchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityVouchScalarFieldEnum | CommunityVouchScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UpiTransaction
   */

  export type AggregateUpiTransaction = {
    _count: UpiTransactionCountAggregateOutputType | null
    _avg: UpiTransactionAvgAggregateOutputType | null
    _sum: UpiTransactionSumAggregateOutputType | null
    _min: UpiTransactionMinAggregateOutputType | null
    _max: UpiTransactionMaxAggregateOutputType | null
  }

  export type UpiTransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type UpiTransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type UpiTransactionMinAggregateOutputType = {
    id: string | null
    amount: number | null
    type: string | null
    timestamp: Date | null
    userId: string | null
  }

  export type UpiTransactionMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    type: string | null
    timestamp: Date | null
    userId: string | null
  }

  export type UpiTransactionCountAggregateOutputType = {
    id: number
    amount: number
    type: number
    timestamp: number
    userId: number
    _all: number
  }


  export type UpiTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type UpiTransactionSumAggregateInputType = {
    amount?: true
  }

  export type UpiTransactionMinAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    timestamp?: true
    userId?: true
  }

  export type UpiTransactionMaxAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    timestamp?: true
    userId?: true
  }

  export type UpiTransactionCountAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    timestamp?: true
    userId?: true
    _all?: true
  }

  export type UpiTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UpiTransaction to aggregate.
     */
    where?: UpiTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpiTransactions to fetch.
     */
    orderBy?: UpiTransactionOrderByWithRelationInput | UpiTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UpiTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpiTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpiTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UpiTransactions
    **/
    _count?: true | UpiTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UpiTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UpiTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UpiTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UpiTransactionMaxAggregateInputType
  }

  export type GetUpiTransactionAggregateType<T extends UpiTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateUpiTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUpiTransaction[P]>
      : GetScalarType<T[P], AggregateUpiTransaction[P]>
  }




  export type UpiTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpiTransactionWhereInput
    orderBy?: UpiTransactionOrderByWithAggregationInput | UpiTransactionOrderByWithAggregationInput[]
    by: UpiTransactionScalarFieldEnum[] | UpiTransactionScalarFieldEnum
    having?: UpiTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UpiTransactionCountAggregateInputType | true
    _avg?: UpiTransactionAvgAggregateInputType
    _sum?: UpiTransactionSumAggregateInputType
    _min?: UpiTransactionMinAggregateInputType
    _max?: UpiTransactionMaxAggregateInputType
  }

  export type UpiTransactionGroupByOutputType = {
    id: string
    amount: number
    type: string
    timestamp: Date
    userId: string
    _count: UpiTransactionCountAggregateOutputType | null
    _avg: UpiTransactionAvgAggregateOutputType | null
    _sum: UpiTransactionSumAggregateOutputType | null
    _min: UpiTransactionMinAggregateOutputType | null
    _max: UpiTransactionMaxAggregateOutputType | null
  }

  type GetUpiTransactionGroupByPayload<T extends UpiTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UpiTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UpiTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UpiTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], UpiTransactionGroupByOutputType[P]>
        }
      >
    >


  export type UpiTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    type?: boolean
    timestamp?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upiTransaction"]>

  export type UpiTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    type?: boolean
    timestamp?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upiTransaction"]>

  export type UpiTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    type?: boolean
    timestamp?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upiTransaction"]>

  export type UpiTransactionSelectScalar = {
    id?: boolean
    amount?: boolean
    type?: boolean
    timestamp?: boolean
    userId?: boolean
  }

  export type UpiTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "type" | "timestamp" | "userId", ExtArgs["result"]["upiTransaction"]>
  export type UpiTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UpiTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UpiTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UpiTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UpiTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      type: string
      timestamp: Date
      userId: string
    }, ExtArgs["result"]["upiTransaction"]>
    composites: {}
  }

  type UpiTransactionGetPayload<S extends boolean | null | undefined | UpiTransactionDefaultArgs> = $Result.GetResult<Prisma.$UpiTransactionPayload, S>

  type UpiTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UpiTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UpiTransactionCountAggregateInputType | true
    }

  export interface UpiTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UpiTransaction'], meta: { name: 'UpiTransaction' } }
    /**
     * Find zero or one UpiTransaction that matches the filter.
     * @param {UpiTransactionFindUniqueArgs} args - Arguments to find a UpiTransaction
     * @example
     * // Get one UpiTransaction
     * const upiTransaction = await prisma.upiTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UpiTransactionFindUniqueArgs>(args: SelectSubset<T, UpiTransactionFindUniqueArgs<ExtArgs>>): Prisma__UpiTransactionClient<$Result.GetResult<Prisma.$UpiTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UpiTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UpiTransactionFindUniqueOrThrowArgs} args - Arguments to find a UpiTransaction
     * @example
     * // Get one UpiTransaction
     * const upiTransaction = await prisma.upiTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UpiTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, UpiTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UpiTransactionClient<$Result.GetResult<Prisma.$UpiTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UpiTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpiTransactionFindFirstArgs} args - Arguments to find a UpiTransaction
     * @example
     * // Get one UpiTransaction
     * const upiTransaction = await prisma.upiTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UpiTransactionFindFirstArgs>(args?: SelectSubset<T, UpiTransactionFindFirstArgs<ExtArgs>>): Prisma__UpiTransactionClient<$Result.GetResult<Prisma.$UpiTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UpiTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpiTransactionFindFirstOrThrowArgs} args - Arguments to find a UpiTransaction
     * @example
     * // Get one UpiTransaction
     * const upiTransaction = await prisma.upiTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UpiTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, UpiTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UpiTransactionClient<$Result.GetResult<Prisma.$UpiTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UpiTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpiTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UpiTransactions
     * const upiTransactions = await prisma.upiTransaction.findMany()
     * 
     * // Get first 10 UpiTransactions
     * const upiTransactions = await prisma.upiTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const upiTransactionWithIdOnly = await prisma.upiTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UpiTransactionFindManyArgs>(args?: SelectSubset<T, UpiTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpiTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UpiTransaction.
     * @param {UpiTransactionCreateArgs} args - Arguments to create a UpiTransaction.
     * @example
     * // Create one UpiTransaction
     * const UpiTransaction = await prisma.upiTransaction.create({
     *   data: {
     *     // ... data to create a UpiTransaction
     *   }
     * })
     * 
     */
    create<T extends UpiTransactionCreateArgs>(args: SelectSubset<T, UpiTransactionCreateArgs<ExtArgs>>): Prisma__UpiTransactionClient<$Result.GetResult<Prisma.$UpiTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UpiTransactions.
     * @param {UpiTransactionCreateManyArgs} args - Arguments to create many UpiTransactions.
     * @example
     * // Create many UpiTransactions
     * const upiTransaction = await prisma.upiTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UpiTransactionCreateManyArgs>(args?: SelectSubset<T, UpiTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UpiTransactions and returns the data saved in the database.
     * @param {UpiTransactionCreateManyAndReturnArgs} args - Arguments to create many UpiTransactions.
     * @example
     * // Create many UpiTransactions
     * const upiTransaction = await prisma.upiTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UpiTransactions and only return the `id`
     * const upiTransactionWithIdOnly = await prisma.upiTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UpiTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, UpiTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpiTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UpiTransaction.
     * @param {UpiTransactionDeleteArgs} args - Arguments to delete one UpiTransaction.
     * @example
     * // Delete one UpiTransaction
     * const UpiTransaction = await prisma.upiTransaction.delete({
     *   where: {
     *     // ... filter to delete one UpiTransaction
     *   }
     * })
     * 
     */
    delete<T extends UpiTransactionDeleteArgs>(args: SelectSubset<T, UpiTransactionDeleteArgs<ExtArgs>>): Prisma__UpiTransactionClient<$Result.GetResult<Prisma.$UpiTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UpiTransaction.
     * @param {UpiTransactionUpdateArgs} args - Arguments to update one UpiTransaction.
     * @example
     * // Update one UpiTransaction
     * const upiTransaction = await prisma.upiTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UpiTransactionUpdateArgs>(args: SelectSubset<T, UpiTransactionUpdateArgs<ExtArgs>>): Prisma__UpiTransactionClient<$Result.GetResult<Prisma.$UpiTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UpiTransactions.
     * @param {UpiTransactionDeleteManyArgs} args - Arguments to filter UpiTransactions to delete.
     * @example
     * // Delete a few UpiTransactions
     * const { count } = await prisma.upiTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UpiTransactionDeleteManyArgs>(args?: SelectSubset<T, UpiTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UpiTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpiTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UpiTransactions
     * const upiTransaction = await prisma.upiTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UpiTransactionUpdateManyArgs>(args: SelectSubset<T, UpiTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UpiTransactions and returns the data updated in the database.
     * @param {UpiTransactionUpdateManyAndReturnArgs} args - Arguments to update many UpiTransactions.
     * @example
     * // Update many UpiTransactions
     * const upiTransaction = await prisma.upiTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UpiTransactions and only return the `id`
     * const upiTransactionWithIdOnly = await prisma.upiTransaction.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UpiTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, UpiTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpiTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UpiTransaction.
     * @param {UpiTransactionUpsertArgs} args - Arguments to update or create a UpiTransaction.
     * @example
     * // Update or create a UpiTransaction
     * const upiTransaction = await prisma.upiTransaction.upsert({
     *   create: {
     *     // ... data to create a UpiTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UpiTransaction we want to update
     *   }
     * })
     */
    upsert<T extends UpiTransactionUpsertArgs>(args: SelectSubset<T, UpiTransactionUpsertArgs<ExtArgs>>): Prisma__UpiTransactionClient<$Result.GetResult<Prisma.$UpiTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UpiTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpiTransactionCountArgs} args - Arguments to filter UpiTransactions to count.
     * @example
     * // Count the number of UpiTransactions
     * const count = await prisma.upiTransaction.count({
     *   where: {
     *     // ... the filter for the UpiTransactions we want to count
     *   }
     * })
    **/
    count<T extends UpiTransactionCountArgs>(
      args?: Subset<T, UpiTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UpiTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UpiTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpiTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UpiTransactionAggregateArgs>(args: Subset<T, UpiTransactionAggregateArgs>): Prisma.PrismaPromise<GetUpiTransactionAggregateType<T>>

    /**
     * Group by UpiTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpiTransactionGroupByArgs} args - Group by arguments.
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
      T extends UpiTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UpiTransactionGroupByArgs['orderBy'] }
        : { orderBy?: UpiTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UpiTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUpiTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UpiTransaction model
   */
  readonly fields: UpiTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UpiTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UpiTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UpiTransaction model
   */
  interface UpiTransactionFieldRefs {
    readonly id: FieldRef<"UpiTransaction", 'String'>
    readonly amount: FieldRef<"UpiTransaction", 'Float'>
    readonly type: FieldRef<"UpiTransaction", 'String'>
    readonly timestamp: FieldRef<"UpiTransaction", 'DateTime'>
    readonly userId: FieldRef<"UpiTransaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UpiTransaction findUnique
   */
  export type UpiTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTransaction
     */
    select?: UpiTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpiTransaction
     */
    omit?: UpiTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpiTransactionInclude<ExtArgs> | null
    /**
     * Filter, which UpiTransaction to fetch.
     */
    where: UpiTransactionWhereUniqueInput
  }

  /**
   * UpiTransaction findUniqueOrThrow
   */
  export type UpiTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTransaction
     */
    select?: UpiTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpiTransaction
     */
    omit?: UpiTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpiTransactionInclude<ExtArgs> | null
    /**
     * Filter, which UpiTransaction to fetch.
     */
    where: UpiTransactionWhereUniqueInput
  }

  /**
   * UpiTransaction findFirst
   */
  export type UpiTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTransaction
     */
    select?: UpiTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpiTransaction
     */
    omit?: UpiTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpiTransactionInclude<ExtArgs> | null
    /**
     * Filter, which UpiTransaction to fetch.
     */
    where?: UpiTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpiTransactions to fetch.
     */
    orderBy?: UpiTransactionOrderByWithRelationInput | UpiTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UpiTransactions.
     */
    cursor?: UpiTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpiTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpiTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UpiTransactions.
     */
    distinct?: UpiTransactionScalarFieldEnum | UpiTransactionScalarFieldEnum[]
  }

  /**
   * UpiTransaction findFirstOrThrow
   */
  export type UpiTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTransaction
     */
    select?: UpiTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpiTransaction
     */
    omit?: UpiTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpiTransactionInclude<ExtArgs> | null
    /**
     * Filter, which UpiTransaction to fetch.
     */
    where?: UpiTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpiTransactions to fetch.
     */
    orderBy?: UpiTransactionOrderByWithRelationInput | UpiTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UpiTransactions.
     */
    cursor?: UpiTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpiTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpiTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UpiTransactions.
     */
    distinct?: UpiTransactionScalarFieldEnum | UpiTransactionScalarFieldEnum[]
  }

  /**
   * UpiTransaction findMany
   */
  export type UpiTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTransaction
     */
    select?: UpiTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpiTransaction
     */
    omit?: UpiTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpiTransactionInclude<ExtArgs> | null
    /**
     * Filter, which UpiTransactions to fetch.
     */
    where?: UpiTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpiTransactions to fetch.
     */
    orderBy?: UpiTransactionOrderByWithRelationInput | UpiTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UpiTransactions.
     */
    cursor?: UpiTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpiTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpiTransactions.
     */
    skip?: number
    distinct?: UpiTransactionScalarFieldEnum | UpiTransactionScalarFieldEnum[]
  }

  /**
   * UpiTransaction create
   */
  export type UpiTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTransaction
     */
    select?: UpiTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpiTransaction
     */
    omit?: UpiTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpiTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a UpiTransaction.
     */
    data: XOR<UpiTransactionCreateInput, UpiTransactionUncheckedCreateInput>
  }

  /**
   * UpiTransaction createMany
   */
  export type UpiTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UpiTransactions.
     */
    data: UpiTransactionCreateManyInput | UpiTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UpiTransaction createManyAndReturn
   */
  export type UpiTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTransaction
     */
    select?: UpiTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UpiTransaction
     */
    omit?: UpiTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many UpiTransactions.
     */
    data: UpiTransactionCreateManyInput | UpiTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpiTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UpiTransaction update
   */
  export type UpiTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTransaction
     */
    select?: UpiTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpiTransaction
     */
    omit?: UpiTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpiTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a UpiTransaction.
     */
    data: XOR<UpiTransactionUpdateInput, UpiTransactionUncheckedUpdateInput>
    /**
     * Choose, which UpiTransaction to update.
     */
    where: UpiTransactionWhereUniqueInput
  }

  /**
   * UpiTransaction updateMany
   */
  export type UpiTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UpiTransactions.
     */
    data: XOR<UpiTransactionUpdateManyMutationInput, UpiTransactionUncheckedUpdateManyInput>
    /**
     * Filter which UpiTransactions to update
     */
    where?: UpiTransactionWhereInput
    /**
     * Limit how many UpiTransactions to update.
     */
    limit?: number
  }

  /**
   * UpiTransaction updateManyAndReturn
   */
  export type UpiTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTransaction
     */
    select?: UpiTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UpiTransaction
     */
    omit?: UpiTransactionOmit<ExtArgs> | null
    /**
     * The data used to update UpiTransactions.
     */
    data: XOR<UpiTransactionUpdateManyMutationInput, UpiTransactionUncheckedUpdateManyInput>
    /**
     * Filter which UpiTransactions to update
     */
    where?: UpiTransactionWhereInput
    /**
     * Limit how many UpiTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpiTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UpiTransaction upsert
   */
  export type UpiTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTransaction
     */
    select?: UpiTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpiTransaction
     */
    omit?: UpiTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpiTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the UpiTransaction to update in case it exists.
     */
    where: UpiTransactionWhereUniqueInput
    /**
     * In case the UpiTransaction found by the `where` argument doesn't exist, create a new UpiTransaction with this data.
     */
    create: XOR<UpiTransactionCreateInput, UpiTransactionUncheckedCreateInput>
    /**
     * In case the UpiTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UpiTransactionUpdateInput, UpiTransactionUncheckedUpdateInput>
  }

  /**
   * UpiTransaction delete
   */
  export type UpiTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTransaction
     */
    select?: UpiTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpiTransaction
     */
    omit?: UpiTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpiTransactionInclude<ExtArgs> | null
    /**
     * Filter which UpiTransaction to delete.
     */
    where: UpiTransactionWhereUniqueInput
  }

  /**
   * UpiTransaction deleteMany
   */
  export type UpiTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UpiTransactions to delete
     */
    where?: UpiTransactionWhereInput
    /**
     * Limit how many UpiTransactions to delete.
     */
    limit?: number
  }

  /**
   * UpiTransaction without action
   */
  export type UpiTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpiTransaction
     */
    select?: UpiTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpiTransaction
     */
    omit?: UpiTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpiTransactionInclude<ExtArgs> | null
  }


  /**
   * Model MobileRecharge
   */

  export type AggregateMobileRecharge = {
    _count: MobileRechargeCountAggregateOutputType | null
    _avg: MobileRechargeAvgAggregateOutputType | null
    _sum: MobileRechargeSumAggregateOutputType | null
    _min: MobileRechargeMinAggregateOutputType | null
    _max: MobileRechargeMaxAggregateOutputType | null
  }

  export type MobileRechargeAvgAggregateOutputType = {
    amount: number | null
  }

  export type MobileRechargeSumAggregateOutputType = {
    amount: number | null
  }

  export type MobileRechargeMinAggregateOutputType = {
    id: string | null
    amount: number | null
    timestamp: Date | null
    userId: string | null
  }

  export type MobileRechargeMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    timestamp: Date | null
    userId: string | null
  }

  export type MobileRechargeCountAggregateOutputType = {
    id: number
    amount: number
    timestamp: number
    userId: number
    _all: number
  }


  export type MobileRechargeAvgAggregateInputType = {
    amount?: true
  }

  export type MobileRechargeSumAggregateInputType = {
    amount?: true
  }

  export type MobileRechargeMinAggregateInputType = {
    id?: true
    amount?: true
    timestamp?: true
    userId?: true
  }

  export type MobileRechargeMaxAggregateInputType = {
    id?: true
    amount?: true
    timestamp?: true
    userId?: true
  }

  export type MobileRechargeCountAggregateInputType = {
    id?: true
    amount?: true
    timestamp?: true
    userId?: true
    _all?: true
  }

  export type MobileRechargeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MobileRecharge to aggregate.
     */
    where?: MobileRechargeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MobileRecharges to fetch.
     */
    orderBy?: MobileRechargeOrderByWithRelationInput | MobileRechargeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MobileRechargeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MobileRecharges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MobileRecharges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MobileRecharges
    **/
    _count?: true | MobileRechargeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MobileRechargeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MobileRechargeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MobileRechargeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MobileRechargeMaxAggregateInputType
  }

  export type GetMobileRechargeAggregateType<T extends MobileRechargeAggregateArgs> = {
        [P in keyof T & keyof AggregateMobileRecharge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMobileRecharge[P]>
      : GetScalarType<T[P], AggregateMobileRecharge[P]>
  }




  export type MobileRechargeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MobileRechargeWhereInput
    orderBy?: MobileRechargeOrderByWithAggregationInput | MobileRechargeOrderByWithAggregationInput[]
    by: MobileRechargeScalarFieldEnum[] | MobileRechargeScalarFieldEnum
    having?: MobileRechargeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MobileRechargeCountAggregateInputType | true
    _avg?: MobileRechargeAvgAggregateInputType
    _sum?: MobileRechargeSumAggregateInputType
    _min?: MobileRechargeMinAggregateInputType
    _max?: MobileRechargeMaxAggregateInputType
  }

  export type MobileRechargeGroupByOutputType = {
    id: string
    amount: number
    timestamp: Date
    userId: string
    _count: MobileRechargeCountAggregateOutputType | null
    _avg: MobileRechargeAvgAggregateOutputType | null
    _sum: MobileRechargeSumAggregateOutputType | null
    _min: MobileRechargeMinAggregateOutputType | null
    _max: MobileRechargeMaxAggregateOutputType | null
  }

  type GetMobileRechargeGroupByPayload<T extends MobileRechargeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MobileRechargeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MobileRechargeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MobileRechargeGroupByOutputType[P]>
            : GetScalarType<T[P], MobileRechargeGroupByOutputType[P]>
        }
      >
    >


  export type MobileRechargeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    timestamp?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mobileRecharge"]>

  export type MobileRechargeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    timestamp?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mobileRecharge"]>

  export type MobileRechargeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    timestamp?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mobileRecharge"]>

  export type MobileRechargeSelectScalar = {
    id?: boolean
    amount?: boolean
    timestamp?: boolean
    userId?: boolean
  }

  export type MobileRechargeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "timestamp" | "userId", ExtArgs["result"]["mobileRecharge"]>
  export type MobileRechargeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MobileRechargeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MobileRechargeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MobileRechargePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MobileRecharge"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      timestamp: Date
      userId: string
    }, ExtArgs["result"]["mobileRecharge"]>
    composites: {}
  }

  type MobileRechargeGetPayload<S extends boolean | null | undefined | MobileRechargeDefaultArgs> = $Result.GetResult<Prisma.$MobileRechargePayload, S>

  type MobileRechargeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MobileRechargeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MobileRechargeCountAggregateInputType | true
    }

  export interface MobileRechargeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MobileRecharge'], meta: { name: 'MobileRecharge' } }
    /**
     * Find zero or one MobileRecharge that matches the filter.
     * @param {MobileRechargeFindUniqueArgs} args - Arguments to find a MobileRecharge
     * @example
     * // Get one MobileRecharge
     * const mobileRecharge = await prisma.mobileRecharge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MobileRechargeFindUniqueArgs>(args: SelectSubset<T, MobileRechargeFindUniqueArgs<ExtArgs>>): Prisma__MobileRechargeClient<$Result.GetResult<Prisma.$MobileRechargePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MobileRecharge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MobileRechargeFindUniqueOrThrowArgs} args - Arguments to find a MobileRecharge
     * @example
     * // Get one MobileRecharge
     * const mobileRecharge = await prisma.mobileRecharge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MobileRechargeFindUniqueOrThrowArgs>(args: SelectSubset<T, MobileRechargeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MobileRechargeClient<$Result.GetResult<Prisma.$MobileRechargePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MobileRecharge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileRechargeFindFirstArgs} args - Arguments to find a MobileRecharge
     * @example
     * // Get one MobileRecharge
     * const mobileRecharge = await prisma.mobileRecharge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MobileRechargeFindFirstArgs>(args?: SelectSubset<T, MobileRechargeFindFirstArgs<ExtArgs>>): Prisma__MobileRechargeClient<$Result.GetResult<Prisma.$MobileRechargePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MobileRecharge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileRechargeFindFirstOrThrowArgs} args - Arguments to find a MobileRecharge
     * @example
     * // Get one MobileRecharge
     * const mobileRecharge = await prisma.mobileRecharge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MobileRechargeFindFirstOrThrowArgs>(args?: SelectSubset<T, MobileRechargeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MobileRechargeClient<$Result.GetResult<Prisma.$MobileRechargePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MobileRecharges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileRechargeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MobileRecharges
     * const mobileRecharges = await prisma.mobileRecharge.findMany()
     * 
     * // Get first 10 MobileRecharges
     * const mobileRecharges = await prisma.mobileRecharge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mobileRechargeWithIdOnly = await prisma.mobileRecharge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MobileRechargeFindManyArgs>(args?: SelectSubset<T, MobileRechargeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MobileRechargePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MobileRecharge.
     * @param {MobileRechargeCreateArgs} args - Arguments to create a MobileRecharge.
     * @example
     * // Create one MobileRecharge
     * const MobileRecharge = await prisma.mobileRecharge.create({
     *   data: {
     *     // ... data to create a MobileRecharge
     *   }
     * })
     * 
     */
    create<T extends MobileRechargeCreateArgs>(args: SelectSubset<T, MobileRechargeCreateArgs<ExtArgs>>): Prisma__MobileRechargeClient<$Result.GetResult<Prisma.$MobileRechargePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MobileRecharges.
     * @param {MobileRechargeCreateManyArgs} args - Arguments to create many MobileRecharges.
     * @example
     * // Create many MobileRecharges
     * const mobileRecharge = await prisma.mobileRecharge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MobileRechargeCreateManyArgs>(args?: SelectSubset<T, MobileRechargeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MobileRecharges and returns the data saved in the database.
     * @param {MobileRechargeCreateManyAndReturnArgs} args - Arguments to create many MobileRecharges.
     * @example
     * // Create many MobileRecharges
     * const mobileRecharge = await prisma.mobileRecharge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MobileRecharges and only return the `id`
     * const mobileRechargeWithIdOnly = await prisma.mobileRecharge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MobileRechargeCreateManyAndReturnArgs>(args?: SelectSubset<T, MobileRechargeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MobileRechargePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MobileRecharge.
     * @param {MobileRechargeDeleteArgs} args - Arguments to delete one MobileRecharge.
     * @example
     * // Delete one MobileRecharge
     * const MobileRecharge = await prisma.mobileRecharge.delete({
     *   where: {
     *     // ... filter to delete one MobileRecharge
     *   }
     * })
     * 
     */
    delete<T extends MobileRechargeDeleteArgs>(args: SelectSubset<T, MobileRechargeDeleteArgs<ExtArgs>>): Prisma__MobileRechargeClient<$Result.GetResult<Prisma.$MobileRechargePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MobileRecharge.
     * @param {MobileRechargeUpdateArgs} args - Arguments to update one MobileRecharge.
     * @example
     * // Update one MobileRecharge
     * const mobileRecharge = await prisma.mobileRecharge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MobileRechargeUpdateArgs>(args: SelectSubset<T, MobileRechargeUpdateArgs<ExtArgs>>): Prisma__MobileRechargeClient<$Result.GetResult<Prisma.$MobileRechargePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MobileRecharges.
     * @param {MobileRechargeDeleteManyArgs} args - Arguments to filter MobileRecharges to delete.
     * @example
     * // Delete a few MobileRecharges
     * const { count } = await prisma.mobileRecharge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MobileRechargeDeleteManyArgs>(args?: SelectSubset<T, MobileRechargeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MobileRecharges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileRechargeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MobileRecharges
     * const mobileRecharge = await prisma.mobileRecharge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MobileRechargeUpdateManyArgs>(args: SelectSubset<T, MobileRechargeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MobileRecharges and returns the data updated in the database.
     * @param {MobileRechargeUpdateManyAndReturnArgs} args - Arguments to update many MobileRecharges.
     * @example
     * // Update many MobileRecharges
     * const mobileRecharge = await prisma.mobileRecharge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MobileRecharges and only return the `id`
     * const mobileRechargeWithIdOnly = await prisma.mobileRecharge.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends MobileRechargeUpdateManyAndReturnArgs>(args: SelectSubset<T, MobileRechargeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MobileRechargePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MobileRecharge.
     * @param {MobileRechargeUpsertArgs} args - Arguments to update or create a MobileRecharge.
     * @example
     * // Update or create a MobileRecharge
     * const mobileRecharge = await prisma.mobileRecharge.upsert({
     *   create: {
     *     // ... data to create a MobileRecharge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MobileRecharge we want to update
     *   }
     * })
     */
    upsert<T extends MobileRechargeUpsertArgs>(args: SelectSubset<T, MobileRechargeUpsertArgs<ExtArgs>>): Prisma__MobileRechargeClient<$Result.GetResult<Prisma.$MobileRechargePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MobileRecharges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileRechargeCountArgs} args - Arguments to filter MobileRecharges to count.
     * @example
     * // Count the number of MobileRecharges
     * const count = await prisma.mobileRecharge.count({
     *   where: {
     *     // ... the filter for the MobileRecharges we want to count
     *   }
     * })
    **/
    count<T extends MobileRechargeCountArgs>(
      args?: Subset<T, MobileRechargeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MobileRechargeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MobileRecharge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileRechargeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MobileRechargeAggregateArgs>(args: Subset<T, MobileRechargeAggregateArgs>): Prisma.PrismaPromise<GetMobileRechargeAggregateType<T>>

    /**
     * Group by MobileRecharge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileRechargeGroupByArgs} args - Group by arguments.
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
      T extends MobileRechargeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MobileRechargeGroupByArgs['orderBy'] }
        : { orderBy?: MobileRechargeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MobileRechargeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMobileRechargeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MobileRecharge model
   */
  readonly fields: MobileRechargeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MobileRecharge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MobileRechargeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MobileRecharge model
   */
  interface MobileRechargeFieldRefs {
    readonly id: FieldRef<"MobileRecharge", 'String'>
    readonly amount: FieldRef<"MobileRecharge", 'Float'>
    readonly timestamp: FieldRef<"MobileRecharge", 'DateTime'>
    readonly userId: FieldRef<"MobileRecharge", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MobileRecharge findUnique
   */
  export type MobileRechargeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileRecharge
     */
    select?: MobileRechargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileRecharge
     */
    omit?: MobileRechargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileRechargeInclude<ExtArgs> | null
    /**
     * Filter, which MobileRecharge to fetch.
     */
    where: MobileRechargeWhereUniqueInput
  }

  /**
   * MobileRecharge findUniqueOrThrow
   */
  export type MobileRechargeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileRecharge
     */
    select?: MobileRechargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileRecharge
     */
    omit?: MobileRechargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileRechargeInclude<ExtArgs> | null
    /**
     * Filter, which MobileRecharge to fetch.
     */
    where: MobileRechargeWhereUniqueInput
  }

  /**
   * MobileRecharge findFirst
   */
  export type MobileRechargeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileRecharge
     */
    select?: MobileRechargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileRecharge
     */
    omit?: MobileRechargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileRechargeInclude<ExtArgs> | null
    /**
     * Filter, which MobileRecharge to fetch.
     */
    where?: MobileRechargeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MobileRecharges to fetch.
     */
    orderBy?: MobileRechargeOrderByWithRelationInput | MobileRechargeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MobileRecharges.
     */
    cursor?: MobileRechargeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MobileRecharges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MobileRecharges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MobileRecharges.
     */
    distinct?: MobileRechargeScalarFieldEnum | MobileRechargeScalarFieldEnum[]
  }

  /**
   * MobileRecharge findFirstOrThrow
   */
  export type MobileRechargeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileRecharge
     */
    select?: MobileRechargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileRecharge
     */
    omit?: MobileRechargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileRechargeInclude<ExtArgs> | null
    /**
     * Filter, which MobileRecharge to fetch.
     */
    where?: MobileRechargeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MobileRecharges to fetch.
     */
    orderBy?: MobileRechargeOrderByWithRelationInput | MobileRechargeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MobileRecharges.
     */
    cursor?: MobileRechargeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MobileRecharges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MobileRecharges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MobileRecharges.
     */
    distinct?: MobileRechargeScalarFieldEnum | MobileRechargeScalarFieldEnum[]
  }

  /**
   * MobileRecharge findMany
   */
  export type MobileRechargeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileRecharge
     */
    select?: MobileRechargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileRecharge
     */
    omit?: MobileRechargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileRechargeInclude<ExtArgs> | null
    /**
     * Filter, which MobileRecharges to fetch.
     */
    where?: MobileRechargeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MobileRecharges to fetch.
     */
    orderBy?: MobileRechargeOrderByWithRelationInput | MobileRechargeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MobileRecharges.
     */
    cursor?: MobileRechargeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MobileRecharges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MobileRecharges.
     */
    skip?: number
    distinct?: MobileRechargeScalarFieldEnum | MobileRechargeScalarFieldEnum[]
  }

  /**
   * MobileRecharge create
   */
  export type MobileRechargeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileRecharge
     */
    select?: MobileRechargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileRecharge
     */
    omit?: MobileRechargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileRechargeInclude<ExtArgs> | null
    /**
     * The data needed to create a MobileRecharge.
     */
    data: XOR<MobileRechargeCreateInput, MobileRechargeUncheckedCreateInput>
  }

  /**
   * MobileRecharge createMany
   */
  export type MobileRechargeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MobileRecharges.
     */
    data: MobileRechargeCreateManyInput | MobileRechargeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MobileRecharge createManyAndReturn
   */
  export type MobileRechargeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileRecharge
     */
    select?: MobileRechargeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MobileRecharge
     */
    omit?: MobileRechargeOmit<ExtArgs> | null
    /**
     * The data used to create many MobileRecharges.
     */
    data: MobileRechargeCreateManyInput | MobileRechargeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileRechargeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MobileRecharge update
   */
  export type MobileRechargeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileRecharge
     */
    select?: MobileRechargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileRecharge
     */
    omit?: MobileRechargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileRechargeInclude<ExtArgs> | null
    /**
     * The data needed to update a MobileRecharge.
     */
    data: XOR<MobileRechargeUpdateInput, MobileRechargeUncheckedUpdateInput>
    /**
     * Choose, which MobileRecharge to update.
     */
    where: MobileRechargeWhereUniqueInput
  }

  /**
   * MobileRecharge updateMany
   */
  export type MobileRechargeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MobileRecharges.
     */
    data: XOR<MobileRechargeUpdateManyMutationInput, MobileRechargeUncheckedUpdateManyInput>
    /**
     * Filter which MobileRecharges to update
     */
    where?: MobileRechargeWhereInput
    /**
     * Limit how many MobileRecharges to update.
     */
    limit?: number
  }

  /**
   * MobileRecharge updateManyAndReturn
   */
  export type MobileRechargeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileRecharge
     */
    select?: MobileRechargeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MobileRecharge
     */
    omit?: MobileRechargeOmit<ExtArgs> | null
    /**
     * The data used to update MobileRecharges.
     */
    data: XOR<MobileRechargeUpdateManyMutationInput, MobileRechargeUncheckedUpdateManyInput>
    /**
     * Filter which MobileRecharges to update
     */
    where?: MobileRechargeWhereInput
    /**
     * Limit how many MobileRecharges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileRechargeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MobileRecharge upsert
   */
  export type MobileRechargeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileRecharge
     */
    select?: MobileRechargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileRecharge
     */
    omit?: MobileRechargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileRechargeInclude<ExtArgs> | null
    /**
     * The filter to search for the MobileRecharge to update in case it exists.
     */
    where: MobileRechargeWhereUniqueInput
    /**
     * In case the MobileRecharge found by the `where` argument doesn't exist, create a new MobileRecharge with this data.
     */
    create: XOR<MobileRechargeCreateInput, MobileRechargeUncheckedCreateInput>
    /**
     * In case the MobileRecharge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MobileRechargeUpdateInput, MobileRechargeUncheckedUpdateInput>
  }

  /**
   * MobileRecharge delete
   */
  export type MobileRechargeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileRecharge
     */
    select?: MobileRechargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileRecharge
     */
    omit?: MobileRechargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileRechargeInclude<ExtArgs> | null
    /**
     * Filter which MobileRecharge to delete.
     */
    where: MobileRechargeWhereUniqueInput
  }

  /**
   * MobileRecharge deleteMany
   */
  export type MobileRechargeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MobileRecharges to delete
     */
    where?: MobileRechargeWhereInput
    /**
     * Limit how many MobileRecharges to delete.
     */
    limit?: number
  }

  /**
   * MobileRecharge without action
   */
  export type MobileRechargeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileRecharge
     */
    select?: MobileRechargeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileRecharge
     */
    omit?: MobileRechargeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileRechargeInclude<ExtArgs> | null
  }


  /**
   * Model CommunityVouch
   */

  export type AggregateCommunityVouch = {
    _count: CommunityVouchCountAggregateOutputType | null
    _min: CommunityVouchMinAggregateOutputType | null
    _max: CommunityVouchMaxAggregateOutputType | null
  }

  export type CommunityVouchMinAggregateOutputType = {
    id: string | null
    status: string | null
    createdAt: Date | null
    voucherId: string | null
    voucheeId: string | null
  }

  export type CommunityVouchMaxAggregateOutputType = {
    id: string | null
    status: string | null
    createdAt: Date | null
    voucherId: string | null
    voucheeId: string | null
  }

  export type CommunityVouchCountAggregateOutputType = {
    id: number
    status: number
    createdAt: number
    voucherId: number
    voucheeId: number
    _all: number
  }


  export type CommunityVouchMinAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    voucherId?: true
    voucheeId?: true
  }

  export type CommunityVouchMaxAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    voucherId?: true
    voucheeId?: true
  }

  export type CommunityVouchCountAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    voucherId?: true
    voucheeId?: true
    _all?: true
  }

  export type CommunityVouchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityVouch to aggregate.
     */
    where?: CommunityVouchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityVouches to fetch.
     */
    orderBy?: CommunityVouchOrderByWithRelationInput | CommunityVouchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityVouchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityVouches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityVouches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunityVouches
    **/
    _count?: true | CommunityVouchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityVouchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityVouchMaxAggregateInputType
  }

  export type GetCommunityVouchAggregateType<T extends CommunityVouchAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunityVouch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunityVouch[P]>
      : GetScalarType<T[P], AggregateCommunityVouch[P]>
  }




  export type CommunityVouchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityVouchWhereInput
    orderBy?: CommunityVouchOrderByWithAggregationInput | CommunityVouchOrderByWithAggregationInput[]
    by: CommunityVouchScalarFieldEnum[] | CommunityVouchScalarFieldEnum
    having?: CommunityVouchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityVouchCountAggregateInputType | true
    _min?: CommunityVouchMinAggregateInputType
    _max?: CommunityVouchMaxAggregateInputType
  }

  export type CommunityVouchGroupByOutputType = {
    id: string
    status: string
    createdAt: Date
    voucherId: string
    voucheeId: string
    _count: CommunityVouchCountAggregateOutputType | null
    _min: CommunityVouchMinAggregateOutputType | null
    _max: CommunityVouchMaxAggregateOutputType | null
  }

  type GetCommunityVouchGroupByPayload<T extends CommunityVouchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityVouchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityVouchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityVouchGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityVouchGroupByOutputType[P]>
        }
      >
    >


  export type CommunityVouchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    createdAt?: boolean
    voucherId?: boolean
    voucheeId?: boolean
    voucher?: boolean | UserDefaultArgs<ExtArgs>
    vouchee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityVouch"]>

  export type CommunityVouchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    createdAt?: boolean
    voucherId?: boolean
    voucheeId?: boolean
    voucher?: boolean | UserDefaultArgs<ExtArgs>
    vouchee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityVouch"]>

  export type CommunityVouchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    createdAt?: boolean
    voucherId?: boolean
    voucheeId?: boolean
    voucher?: boolean | UserDefaultArgs<ExtArgs>
    vouchee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityVouch"]>

  export type CommunityVouchSelectScalar = {
    id?: boolean
    status?: boolean
    createdAt?: boolean
    voucherId?: boolean
    voucheeId?: boolean
  }

  export type CommunityVouchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "createdAt" | "voucherId" | "voucheeId", ExtArgs["result"]["communityVouch"]>
  export type CommunityVouchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voucher?: boolean | UserDefaultArgs<ExtArgs>
    vouchee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommunityVouchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voucher?: boolean | UserDefaultArgs<ExtArgs>
    vouchee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommunityVouchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voucher?: boolean | UserDefaultArgs<ExtArgs>
    vouchee?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommunityVouchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunityVouch"
    objects: {
      voucher: Prisma.$UserPayload<ExtArgs>
      vouchee: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: string
      createdAt: Date
      voucherId: string
      voucheeId: string
    }, ExtArgs["result"]["communityVouch"]>
    composites: {}
  }

  type CommunityVouchGetPayload<S extends boolean | null | undefined | CommunityVouchDefaultArgs> = $Result.GetResult<Prisma.$CommunityVouchPayload, S>

  type CommunityVouchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityVouchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityVouchCountAggregateInputType | true
    }

  export interface CommunityVouchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunityVouch'], meta: { name: 'CommunityVouch' } }
    /**
     * Find zero or one CommunityVouch that matches the filter.
     * @param {CommunityVouchFindUniqueArgs} args - Arguments to find a CommunityVouch
     * @example
     * // Get one CommunityVouch
     * const communityVouch = await prisma.communityVouch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityVouchFindUniqueArgs>(args: SelectSubset<T, CommunityVouchFindUniqueArgs<ExtArgs>>): Prisma__CommunityVouchClient<$Result.GetResult<Prisma.$CommunityVouchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommunityVouch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityVouchFindUniqueOrThrowArgs} args - Arguments to find a CommunityVouch
     * @example
     * // Get one CommunityVouch
     * const communityVouch = await prisma.communityVouch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityVouchFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityVouchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityVouchClient<$Result.GetResult<Prisma.$CommunityVouchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityVouch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityVouchFindFirstArgs} args - Arguments to find a CommunityVouch
     * @example
     * // Get one CommunityVouch
     * const communityVouch = await prisma.communityVouch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityVouchFindFirstArgs>(args?: SelectSubset<T, CommunityVouchFindFirstArgs<ExtArgs>>): Prisma__CommunityVouchClient<$Result.GetResult<Prisma.$CommunityVouchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityVouch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityVouchFindFirstOrThrowArgs} args - Arguments to find a CommunityVouch
     * @example
     * // Get one CommunityVouch
     * const communityVouch = await prisma.communityVouch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityVouchFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityVouchFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityVouchClient<$Result.GetResult<Prisma.$CommunityVouchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommunityVouches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityVouchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunityVouches
     * const communityVouches = await prisma.communityVouch.findMany()
     * 
     * // Get first 10 CommunityVouches
     * const communityVouches = await prisma.communityVouch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityVouchWithIdOnly = await prisma.communityVouch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityVouchFindManyArgs>(args?: SelectSubset<T, CommunityVouchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityVouchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommunityVouch.
     * @param {CommunityVouchCreateArgs} args - Arguments to create a CommunityVouch.
     * @example
     * // Create one CommunityVouch
     * const CommunityVouch = await prisma.communityVouch.create({
     *   data: {
     *     // ... data to create a CommunityVouch
     *   }
     * })
     * 
     */
    create<T extends CommunityVouchCreateArgs>(args: SelectSubset<T, CommunityVouchCreateArgs<ExtArgs>>): Prisma__CommunityVouchClient<$Result.GetResult<Prisma.$CommunityVouchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommunityVouches.
     * @param {CommunityVouchCreateManyArgs} args - Arguments to create many CommunityVouches.
     * @example
     * // Create many CommunityVouches
     * const communityVouch = await prisma.communityVouch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityVouchCreateManyArgs>(args?: SelectSubset<T, CommunityVouchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommunityVouches and returns the data saved in the database.
     * @param {CommunityVouchCreateManyAndReturnArgs} args - Arguments to create many CommunityVouches.
     * @example
     * // Create many CommunityVouches
     * const communityVouch = await prisma.communityVouch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommunityVouches and only return the `id`
     * const communityVouchWithIdOnly = await prisma.communityVouch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityVouchCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityVouchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityVouchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommunityVouch.
     * @param {CommunityVouchDeleteArgs} args - Arguments to delete one CommunityVouch.
     * @example
     * // Delete one CommunityVouch
     * const CommunityVouch = await prisma.communityVouch.delete({
     *   where: {
     *     // ... filter to delete one CommunityVouch
     *   }
     * })
     * 
     */
    delete<T extends CommunityVouchDeleteArgs>(args: SelectSubset<T, CommunityVouchDeleteArgs<ExtArgs>>): Prisma__CommunityVouchClient<$Result.GetResult<Prisma.$CommunityVouchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommunityVouch.
     * @param {CommunityVouchUpdateArgs} args - Arguments to update one CommunityVouch.
     * @example
     * // Update one CommunityVouch
     * const communityVouch = await prisma.communityVouch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityVouchUpdateArgs>(args: SelectSubset<T, CommunityVouchUpdateArgs<ExtArgs>>): Prisma__CommunityVouchClient<$Result.GetResult<Prisma.$CommunityVouchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommunityVouches.
     * @param {CommunityVouchDeleteManyArgs} args - Arguments to filter CommunityVouches to delete.
     * @example
     * // Delete a few CommunityVouches
     * const { count } = await prisma.communityVouch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityVouchDeleteManyArgs>(args?: SelectSubset<T, CommunityVouchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityVouches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityVouchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunityVouches
     * const communityVouch = await prisma.communityVouch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityVouchUpdateManyArgs>(args: SelectSubset<T, CommunityVouchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityVouches and returns the data updated in the database.
     * @param {CommunityVouchUpdateManyAndReturnArgs} args - Arguments to update many CommunityVouches.
     * @example
     * // Update many CommunityVouches
     * const communityVouch = await prisma.communityVouch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommunityVouches and only return the `id`
     * const communityVouchWithIdOnly = await prisma.communityVouch.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CommunityVouchUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunityVouchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityVouchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommunityVouch.
     * @param {CommunityVouchUpsertArgs} args - Arguments to update or create a CommunityVouch.
     * @example
     * // Update or create a CommunityVouch
     * const communityVouch = await prisma.communityVouch.upsert({
     *   create: {
     *     // ... data to create a CommunityVouch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunityVouch we want to update
     *   }
     * })
     */
    upsert<T extends CommunityVouchUpsertArgs>(args: SelectSubset<T, CommunityVouchUpsertArgs<ExtArgs>>): Prisma__CommunityVouchClient<$Result.GetResult<Prisma.$CommunityVouchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommunityVouches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityVouchCountArgs} args - Arguments to filter CommunityVouches to count.
     * @example
     * // Count the number of CommunityVouches
     * const count = await prisma.communityVouch.count({
     *   where: {
     *     // ... the filter for the CommunityVouches we want to count
     *   }
     * })
    **/
    count<T extends CommunityVouchCountArgs>(
      args?: Subset<T, CommunityVouchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityVouchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunityVouch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityVouchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunityVouchAggregateArgs>(args: Subset<T, CommunityVouchAggregateArgs>): Prisma.PrismaPromise<GetCommunityVouchAggregateType<T>>

    /**
     * Group by CommunityVouch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityVouchGroupByArgs} args - Group by arguments.
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
      T extends CommunityVouchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityVouchGroupByArgs['orderBy'] }
        : { orderBy?: CommunityVouchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommunityVouchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityVouchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunityVouch model
   */
  readonly fields: CommunityVouchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunityVouch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityVouchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voucher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vouchee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CommunityVouch model
   */
  interface CommunityVouchFieldRefs {
    readonly id: FieldRef<"CommunityVouch", 'String'>
    readonly status: FieldRef<"CommunityVouch", 'String'>
    readonly createdAt: FieldRef<"CommunityVouch", 'DateTime'>
    readonly voucherId: FieldRef<"CommunityVouch", 'String'>
    readonly voucheeId: FieldRef<"CommunityVouch", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CommunityVouch findUnique
   */
  export type CommunityVouchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVouch
     */
    select?: CommunityVouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVouch
     */
    omit?: CommunityVouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityVouchInclude<ExtArgs> | null
    /**
     * Filter, which CommunityVouch to fetch.
     */
    where: CommunityVouchWhereUniqueInput
  }

  /**
   * CommunityVouch findUniqueOrThrow
   */
  export type CommunityVouchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVouch
     */
    select?: CommunityVouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVouch
     */
    omit?: CommunityVouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityVouchInclude<ExtArgs> | null
    /**
     * Filter, which CommunityVouch to fetch.
     */
    where: CommunityVouchWhereUniqueInput
  }

  /**
   * CommunityVouch findFirst
   */
  export type CommunityVouchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVouch
     */
    select?: CommunityVouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVouch
     */
    omit?: CommunityVouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityVouchInclude<ExtArgs> | null
    /**
     * Filter, which CommunityVouch to fetch.
     */
    where?: CommunityVouchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityVouches to fetch.
     */
    orderBy?: CommunityVouchOrderByWithRelationInput | CommunityVouchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityVouches.
     */
    cursor?: CommunityVouchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityVouches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityVouches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityVouches.
     */
    distinct?: CommunityVouchScalarFieldEnum | CommunityVouchScalarFieldEnum[]
  }

  /**
   * CommunityVouch findFirstOrThrow
   */
  export type CommunityVouchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVouch
     */
    select?: CommunityVouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVouch
     */
    omit?: CommunityVouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityVouchInclude<ExtArgs> | null
    /**
     * Filter, which CommunityVouch to fetch.
     */
    where?: CommunityVouchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityVouches to fetch.
     */
    orderBy?: CommunityVouchOrderByWithRelationInput | CommunityVouchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityVouches.
     */
    cursor?: CommunityVouchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityVouches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityVouches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityVouches.
     */
    distinct?: CommunityVouchScalarFieldEnum | CommunityVouchScalarFieldEnum[]
  }

  /**
   * CommunityVouch findMany
   */
  export type CommunityVouchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVouch
     */
    select?: CommunityVouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVouch
     */
    omit?: CommunityVouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityVouchInclude<ExtArgs> | null
    /**
     * Filter, which CommunityVouches to fetch.
     */
    where?: CommunityVouchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityVouches to fetch.
     */
    orderBy?: CommunityVouchOrderByWithRelationInput | CommunityVouchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunityVouches.
     */
    cursor?: CommunityVouchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityVouches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityVouches.
     */
    skip?: number
    distinct?: CommunityVouchScalarFieldEnum | CommunityVouchScalarFieldEnum[]
  }

  /**
   * CommunityVouch create
   */
  export type CommunityVouchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVouch
     */
    select?: CommunityVouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVouch
     */
    omit?: CommunityVouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityVouchInclude<ExtArgs> | null
    /**
     * The data needed to create a CommunityVouch.
     */
    data: XOR<CommunityVouchCreateInput, CommunityVouchUncheckedCreateInput>
  }

  /**
   * CommunityVouch createMany
   */
  export type CommunityVouchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunityVouches.
     */
    data: CommunityVouchCreateManyInput | CommunityVouchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunityVouch createManyAndReturn
   */
  export type CommunityVouchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVouch
     */
    select?: CommunityVouchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVouch
     */
    omit?: CommunityVouchOmit<ExtArgs> | null
    /**
     * The data used to create many CommunityVouches.
     */
    data: CommunityVouchCreateManyInput | CommunityVouchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityVouchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunityVouch update
   */
  export type CommunityVouchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVouch
     */
    select?: CommunityVouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVouch
     */
    omit?: CommunityVouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityVouchInclude<ExtArgs> | null
    /**
     * The data needed to update a CommunityVouch.
     */
    data: XOR<CommunityVouchUpdateInput, CommunityVouchUncheckedUpdateInput>
    /**
     * Choose, which CommunityVouch to update.
     */
    where: CommunityVouchWhereUniqueInput
  }

  /**
   * CommunityVouch updateMany
   */
  export type CommunityVouchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunityVouches.
     */
    data: XOR<CommunityVouchUpdateManyMutationInput, CommunityVouchUncheckedUpdateManyInput>
    /**
     * Filter which CommunityVouches to update
     */
    where?: CommunityVouchWhereInput
    /**
     * Limit how many CommunityVouches to update.
     */
    limit?: number
  }

  /**
   * CommunityVouch updateManyAndReturn
   */
  export type CommunityVouchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVouch
     */
    select?: CommunityVouchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVouch
     */
    omit?: CommunityVouchOmit<ExtArgs> | null
    /**
     * The data used to update CommunityVouches.
     */
    data: XOR<CommunityVouchUpdateManyMutationInput, CommunityVouchUncheckedUpdateManyInput>
    /**
     * Filter which CommunityVouches to update
     */
    where?: CommunityVouchWhereInput
    /**
     * Limit how many CommunityVouches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityVouchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunityVouch upsert
   */
  export type CommunityVouchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVouch
     */
    select?: CommunityVouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVouch
     */
    omit?: CommunityVouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityVouchInclude<ExtArgs> | null
    /**
     * The filter to search for the CommunityVouch to update in case it exists.
     */
    where: CommunityVouchWhereUniqueInput
    /**
     * In case the CommunityVouch found by the `where` argument doesn't exist, create a new CommunityVouch with this data.
     */
    create: XOR<CommunityVouchCreateInput, CommunityVouchUncheckedCreateInput>
    /**
     * In case the CommunityVouch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityVouchUpdateInput, CommunityVouchUncheckedUpdateInput>
  }

  /**
   * CommunityVouch delete
   */
  export type CommunityVouchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVouch
     */
    select?: CommunityVouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVouch
     */
    omit?: CommunityVouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityVouchInclude<ExtArgs> | null
    /**
     * Filter which CommunityVouch to delete.
     */
    where: CommunityVouchWhereUniqueInput
  }

  /**
   * CommunityVouch deleteMany
   */
  export type CommunityVouchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityVouches to delete
     */
    where?: CommunityVouchWhereInput
    /**
     * Limit how many CommunityVouches to delete.
     */
    limit?: number
  }

  /**
   * CommunityVouch without action
   */
  export type CommunityVouchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityVouch
     */
    select?: CommunityVouchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityVouch
     */
    omit?: CommunityVouchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityVouchInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    name: 'name',
    createdAt: 'createdAt',
    creditScore: 'creditScore'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UpiTransactionScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    type: 'type',
    timestamp: 'timestamp',
    userId: 'userId'
  };

  export type UpiTransactionScalarFieldEnum = (typeof UpiTransactionScalarFieldEnum)[keyof typeof UpiTransactionScalarFieldEnum]


  export const MobileRechargeScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    timestamp: 'timestamp',
    userId: 'userId'
  };

  export type MobileRechargeScalarFieldEnum = (typeof MobileRechargeScalarFieldEnum)[keyof typeof MobileRechargeScalarFieldEnum]


  export const CommunityVouchScalarFieldEnum: {
    id: 'id',
    status: 'status',
    createdAt: 'createdAt',
    voucherId: 'voucherId',
    voucheeId: 'voucheeId'
  };

  export type CommunityVouchScalarFieldEnum = (typeof CommunityVouchScalarFieldEnum)[keyof typeof CommunityVouchScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    creditScore?: FloatNullableFilter<"User"> | number | null
    transactions?: UpiTransactionListRelationFilter
    recharges?: MobileRechargeListRelationFilter
    vouchesGiven?: CommunityVouchListRelationFilter
    vouchesReceived?: CommunityVouchListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    creditScore?: SortOrderInput | SortOrder
    transactions?: UpiTransactionOrderByRelationAggregateInput
    recharges?: MobileRechargeOrderByRelationAggregateInput
    vouchesGiven?: CommunityVouchOrderByRelationAggregateInput
    vouchesReceived?: CommunityVouchOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    creditScore?: FloatNullableFilter<"User"> | number | null
    transactions?: UpiTransactionListRelationFilter
    recharges?: MobileRechargeListRelationFilter
    vouchesGiven?: CommunityVouchListRelationFilter
    vouchesReceived?: CommunityVouchListRelationFilter
  }, "id" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    creditScore?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    creditScore?: FloatNullableWithAggregatesFilter<"User"> | number | null
  }

  export type UpiTransactionWhereInput = {
    AND?: UpiTransactionWhereInput | UpiTransactionWhereInput[]
    OR?: UpiTransactionWhereInput[]
    NOT?: UpiTransactionWhereInput | UpiTransactionWhereInput[]
    id?: StringFilter<"UpiTransaction"> | string
    amount?: FloatFilter<"UpiTransaction"> | number
    type?: StringFilter<"UpiTransaction"> | string
    timestamp?: DateTimeFilter<"UpiTransaction"> | Date | string
    userId?: StringFilter<"UpiTransaction"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UpiTransactionOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UpiTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UpiTransactionWhereInput | UpiTransactionWhereInput[]
    OR?: UpiTransactionWhereInput[]
    NOT?: UpiTransactionWhereInput | UpiTransactionWhereInput[]
    amount?: FloatFilter<"UpiTransaction"> | number
    type?: StringFilter<"UpiTransaction"> | string
    timestamp?: DateTimeFilter<"UpiTransaction"> | Date | string
    userId?: StringFilter<"UpiTransaction"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UpiTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    _count?: UpiTransactionCountOrderByAggregateInput
    _avg?: UpiTransactionAvgOrderByAggregateInput
    _max?: UpiTransactionMaxOrderByAggregateInput
    _min?: UpiTransactionMinOrderByAggregateInput
    _sum?: UpiTransactionSumOrderByAggregateInput
  }

  export type UpiTransactionScalarWhereWithAggregatesInput = {
    AND?: UpiTransactionScalarWhereWithAggregatesInput | UpiTransactionScalarWhereWithAggregatesInput[]
    OR?: UpiTransactionScalarWhereWithAggregatesInput[]
    NOT?: UpiTransactionScalarWhereWithAggregatesInput | UpiTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UpiTransaction"> | string
    amount?: FloatWithAggregatesFilter<"UpiTransaction"> | number
    type?: StringWithAggregatesFilter<"UpiTransaction"> | string
    timestamp?: DateTimeWithAggregatesFilter<"UpiTransaction"> | Date | string
    userId?: StringWithAggregatesFilter<"UpiTransaction"> | string
  }

  export type MobileRechargeWhereInput = {
    AND?: MobileRechargeWhereInput | MobileRechargeWhereInput[]
    OR?: MobileRechargeWhereInput[]
    NOT?: MobileRechargeWhereInput | MobileRechargeWhereInput[]
    id?: StringFilter<"MobileRecharge"> | string
    amount?: FloatFilter<"MobileRecharge"> | number
    timestamp?: DateTimeFilter<"MobileRecharge"> | Date | string
    userId?: StringFilter<"MobileRecharge"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MobileRechargeOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MobileRechargeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MobileRechargeWhereInput | MobileRechargeWhereInput[]
    OR?: MobileRechargeWhereInput[]
    NOT?: MobileRechargeWhereInput | MobileRechargeWhereInput[]
    amount?: FloatFilter<"MobileRecharge"> | number
    timestamp?: DateTimeFilter<"MobileRecharge"> | Date | string
    userId?: StringFilter<"MobileRecharge"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MobileRechargeOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
    _count?: MobileRechargeCountOrderByAggregateInput
    _avg?: MobileRechargeAvgOrderByAggregateInput
    _max?: MobileRechargeMaxOrderByAggregateInput
    _min?: MobileRechargeMinOrderByAggregateInput
    _sum?: MobileRechargeSumOrderByAggregateInput
  }

  export type MobileRechargeScalarWhereWithAggregatesInput = {
    AND?: MobileRechargeScalarWhereWithAggregatesInput | MobileRechargeScalarWhereWithAggregatesInput[]
    OR?: MobileRechargeScalarWhereWithAggregatesInput[]
    NOT?: MobileRechargeScalarWhereWithAggregatesInput | MobileRechargeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MobileRecharge"> | string
    amount?: FloatWithAggregatesFilter<"MobileRecharge"> | number
    timestamp?: DateTimeWithAggregatesFilter<"MobileRecharge"> | Date | string
    userId?: StringWithAggregatesFilter<"MobileRecharge"> | string
  }

  export type CommunityVouchWhereInput = {
    AND?: CommunityVouchWhereInput | CommunityVouchWhereInput[]
    OR?: CommunityVouchWhereInput[]
    NOT?: CommunityVouchWhereInput | CommunityVouchWhereInput[]
    id?: StringFilter<"CommunityVouch"> | string
    status?: StringFilter<"CommunityVouch"> | string
    createdAt?: DateTimeFilter<"CommunityVouch"> | Date | string
    voucherId?: StringFilter<"CommunityVouch"> | string
    voucheeId?: StringFilter<"CommunityVouch"> | string
    voucher?: XOR<UserScalarRelationFilter, UserWhereInput>
    vouchee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommunityVouchOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    voucherId?: SortOrder
    voucheeId?: SortOrder
    voucher?: UserOrderByWithRelationInput
    vouchee?: UserOrderByWithRelationInput
  }

  export type CommunityVouchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommunityVouchWhereInput | CommunityVouchWhereInput[]
    OR?: CommunityVouchWhereInput[]
    NOT?: CommunityVouchWhereInput | CommunityVouchWhereInput[]
    status?: StringFilter<"CommunityVouch"> | string
    createdAt?: DateTimeFilter<"CommunityVouch"> | Date | string
    voucherId?: StringFilter<"CommunityVouch"> | string
    voucheeId?: StringFilter<"CommunityVouch"> | string
    voucher?: XOR<UserScalarRelationFilter, UserWhereInput>
    vouchee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommunityVouchOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    voucherId?: SortOrder
    voucheeId?: SortOrder
    _count?: CommunityVouchCountOrderByAggregateInput
    _max?: CommunityVouchMaxOrderByAggregateInput
    _min?: CommunityVouchMinOrderByAggregateInput
  }

  export type CommunityVouchScalarWhereWithAggregatesInput = {
    AND?: CommunityVouchScalarWhereWithAggregatesInput | CommunityVouchScalarWhereWithAggregatesInput[]
    OR?: CommunityVouchScalarWhereWithAggregatesInput[]
    NOT?: CommunityVouchScalarWhereWithAggregatesInput | CommunityVouchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommunityVouch"> | string
    status?: StringWithAggregatesFilter<"CommunityVouch"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CommunityVouch"> | Date | string
    voucherId?: StringWithAggregatesFilter<"CommunityVouch"> | string
    voucheeId?: StringWithAggregatesFilter<"CommunityVouch"> | string
  }

  export type UserCreateInput = {
    id?: string
    phone: string
    name: string
    createdAt?: Date | string
    creditScore?: number | null
    transactions?: UpiTransactionCreateNestedManyWithoutUserInput
    recharges?: MobileRechargeCreateNestedManyWithoutUserInput
    vouchesGiven?: CommunityVouchCreateNestedManyWithoutVoucherInput
    vouchesReceived?: CommunityVouchCreateNestedManyWithoutVoucheeInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    phone: string
    name: string
    createdAt?: Date | string
    creditScore?: number | null
    transactions?: UpiTransactionUncheckedCreateNestedManyWithoutUserInput
    recharges?: MobileRechargeUncheckedCreateNestedManyWithoutUserInput
    vouchesGiven?: CommunityVouchUncheckedCreateNestedManyWithoutVoucherInput
    vouchesReceived?: CommunityVouchUncheckedCreateNestedManyWithoutVoucheeInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditScore?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: UpiTransactionUpdateManyWithoutUserNestedInput
    recharges?: MobileRechargeUpdateManyWithoutUserNestedInput
    vouchesGiven?: CommunityVouchUpdateManyWithoutVoucherNestedInput
    vouchesReceived?: CommunityVouchUpdateManyWithoutVoucheeNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditScore?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: UpiTransactionUncheckedUpdateManyWithoutUserNestedInput
    recharges?: MobileRechargeUncheckedUpdateManyWithoutUserNestedInput
    vouchesGiven?: CommunityVouchUncheckedUpdateManyWithoutVoucherNestedInput
    vouchesReceived?: CommunityVouchUncheckedUpdateManyWithoutVoucheeNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    phone: string
    name: string
    createdAt?: Date | string
    creditScore?: number | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditScore?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditScore?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type UpiTransactionCreateInput = {
    id?: string
    amount: number
    type: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type UpiTransactionUncheckedCreateInput = {
    id?: string
    amount: number
    type: string
    timestamp?: Date | string
    userId: string
  }

  export type UpiTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type UpiTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UpiTransactionCreateManyInput = {
    id?: string
    amount: number
    type: string
    timestamp?: Date | string
    userId: string
  }

  export type UpiTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpiTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MobileRechargeCreateInput = {
    id?: string
    amount: number
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutRechargesInput
  }

  export type MobileRechargeUncheckedCreateInput = {
    id?: string
    amount: number
    timestamp?: Date | string
    userId: string
  }

  export type MobileRechargeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRechargesNestedInput
  }

  export type MobileRechargeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MobileRechargeCreateManyInput = {
    id?: string
    amount: number
    timestamp?: Date | string
    userId: string
  }

  export type MobileRechargeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MobileRechargeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CommunityVouchCreateInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    voucher: UserCreateNestedOneWithoutVouchesGivenInput
    vouchee: UserCreateNestedOneWithoutVouchesReceivedInput
  }

  export type CommunityVouchUncheckedCreateInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    voucherId: string
    voucheeId: string
  }

  export type CommunityVouchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher?: UserUpdateOneRequiredWithoutVouchesGivenNestedInput
    vouchee?: UserUpdateOneRequiredWithoutVouchesReceivedNestedInput
  }

  export type CommunityVouchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherId?: StringFieldUpdateOperationsInput | string
    voucheeId?: StringFieldUpdateOperationsInput | string
  }

  export type CommunityVouchCreateManyInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    voucherId: string
    voucheeId: string
  }

  export type CommunityVouchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityVouchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherId?: StringFieldUpdateOperationsInput | string
    voucheeId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UpiTransactionListRelationFilter = {
    every?: UpiTransactionWhereInput
    some?: UpiTransactionWhereInput
    none?: UpiTransactionWhereInput
  }

  export type MobileRechargeListRelationFilter = {
    every?: MobileRechargeWhereInput
    some?: MobileRechargeWhereInput
    none?: MobileRechargeWhereInput
  }

  export type CommunityVouchListRelationFilter = {
    every?: CommunityVouchWhereInput
    some?: CommunityVouchWhereInput
    none?: CommunityVouchWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UpiTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MobileRechargeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunityVouchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    creditScore?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    creditScore?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    creditScore?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    creditScore?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    creditScore?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UpiTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
  }

  export type UpiTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type UpiTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
  }

  export type UpiTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
  }

  export type UpiTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MobileRechargeCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
  }

  export type MobileRechargeAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type MobileRechargeMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
  }

  export type MobileRechargeMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    timestamp?: SortOrder
    userId?: SortOrder
  }

  export type MobileRechargeSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type CommunityVouchCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    voucherId?: SortOrder
    voucheeId?: SortOrder
  }

  export type CommunityVouchMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    voucherId?: SortOrder
    voucheeId?: SortOrder
  }

  export type CommunityVouchMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    voucherId?: SortOrder
    voucheeId?: SortOrder
  }

  export type UpiTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<UpiTransactionCreateWithoutUserInput, UpiTransactionUncheckedCreateWithoutUserInput> | UpiTransactionCreateWithoutUserInput[] | UpiTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UpiTransactionCreateOrConnectWithoutUserInput | UpiTransactionCreateOrConnectWithoutUserInput[]
    createMany?: UpiTransactionCreateManyUserInputEnvelope
    connect?: UpiTransactionWhereUniqueInput | UpiTransactionWhereUniqueInput[]
  }

  export type MobileRechargeCreateNestedManyWithoutUserInput = {
    create?: XOR<MobileRechargeCreateWithoutUserInput, MobileRechargeUncheckedCreateWithoutUserInput> | MobileRechargeCreateWithoutUserInput[] | MobileRechargeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MobileRechargeCreateOrConnectWithoutUserInput | MobileRechargeCreateOrConnectWithoutUserInput[]
    createMany?: MobileRechargeCreateManyUserInputEnvelope
    connect?: MobileRechargeWhereUniqueInput | MobileRechargeWhereUniqueInput[]
  }

  export type CommunityVouchCreateNestedManyWithoutVoucherInput = {
    create?: XOR<CommunityVouchCreateWithoutVoucherInput, CommunityVouchUncheckedCreateWithoutVoucherInput> | CommunityVouchCreateWithoutVoucherInput[] | CommunityVouchUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: CommunityVouchCreateOrConnectWithoutVoucherInput | CommunityVouchCreateOrConnectWithoutVoucherInput[]
    createMany?: CommunityVouchCreateManyVoucherInputEnvelope
    connect?: CommunityVouchWhereUniqueInput | CommunityVouchWhereUniqueInput[]
  }

  export type CommunityVouchCreateNestedManyWithoutVoucheeInput = {
    create?: XOR<CommunityVouchCreateWithoutVoucheeInput, CommunityVouchUncheckedCreateWithoutVoucheeInput> | CommunityVouchCreateWithoutVoucheeInput[] | CommunityVouchUncheckedCreateWithoutVoucheeInput[]
    connectOrCreate?: CommunityVouchCreateOrConnectWithoutVoucheeInput | CommunityVouchCreateOrConnectWithoutVoucheeInput[]
    createMany?: CommunityVouchCreateManyVoucheeInputEnvelope
    connect?: CommunityVouchWhereUniqueInput | CommunityVouchWhereUniqueInput[]
  }

  export type UpiTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UpiTransactionCreateWithoutUserInput, UpiTransactionUncheckedCreateWithoutUserInput> | UpiTransactionCreateWithoutUserInput[] | UpiTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UpiTransactionCreateOrConnectWithoutUserInput | UpiTransactionCreateOrConnectWithoutUserInput[]
    createMany?: UpiTransactionCreateManyUserInputEnvelope
    connect?: UpiTransactionWhereUniqueInput | UpiTransactionWhereUniqueInput[]
  }

  export type MobileRechargeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MobileRechargeCreateWithoutUserInput, MobileRechargeUncheckedCreateWithoutUserInput> | MobileRechargeCreateWithoutUserInput[] | MobileRechargeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MobileRechargeCreateOrConnectWithoutUserInput | MobileRechargeCreateOrConnectWithoutUserInput[]
    createMany?: MobileRechargeCreateManyUserInputEnvelope
    connect?: MobileRechargeWhereUniqueInput | MobileRechargeWhereUniqueInput[]
  }

  export type CommunityVouchUncheckedCreateNestedManyWithoutVoucherInput = {
    create?: XOR<CommunityVouchCreateWithoutVoucherInput, CommunityVouchUncheckedCreateWithoutVoucherInput> | CommunityVouchCreateWithoutVoucherInput[] | CommunityVouchUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: CommunityVouchCreateOrConnectWithoutVoucherInput | CommunityVouchCreateOrConnectWithoutVoucherInput[]
    createMany?: CommunityVouchCreateManyVoucherInputEnvelope
    connect?: CommunityVouchWhereUniqueInput | CommunityVouchWhereUniqueInput[]
  }

  export type CommunityVouchUncheckedCreateNestedManyWithoutVoucheeInput = {
    create?: XOR<CommunityVouchCreateWithoutVoucheeInput, CommunityVouchUncheckedCreateWithoutVoucheeInput> | CommunityVouchCreateWithoutVoucheeInput[] | CommunityVouchUncheckedCreateWithoutVoucheeInput[]
    connectOrCreate?: CommunityVouchCreateOrConnectWithoutVoucheeInput | CommunityVouchCreateOrConnectWithoutVoucheeInput[]
    createMany?: CommunityVouchCreateManyVoucheeInputEnvelope
    connect?: CommunityVouchWhereUniqueInput | CommunityVouchWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UpiTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UpiTransactionCreateWithoutUserInput, UpiTransactionUncheckedCreateWithoutUserInput> | UpiTransactionCreateWithoutUserInput[] | UpiTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UpiTransactionCreateOrConnectWithoutUserInput | UpiTransactionCreateOrConnectWithoutUserInput[]
    upsert?: UpiTransactionUpsertWithWhereUniqueWithoutUserInput | UpiTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UpiTransactionCreateManyUserInputEnvelope
    set?: UpiTransactionWhereUniqueInput | UpiTransactionWhereUniqueInput[]
    disconnect?: UpiTransactionWhereUniqueInput | UpiTransactionWhereUniqueInput[]
    delete?: UpiTransactionWhereUniqueInput | UpiTransactionWhereUniqueInput[]
    connect?: UpiTransactionWhereUniqueInput | UpiTransactionWhereUniqueInput[]
    update?: UpiTransactionUpdateWithWhereUniqueWithoutUserInput | UpiTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UpiTransactionUpdateManyWithWhereWithoutUserInput | UpiTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UpiTransactionScalarWhereInput | UpiTransactionScalarWhereInput[]
  }

  export type MobileRechargeUpdateManyWithoutUserNestedInput = {
    create?: XOR<MobileRechargeCreateWithoutUserInput, MobileRechargeUncheckedCreateWithoutUserInput> | MobileRechargeCreateWithoutUserInput[] | MobileRechargeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MobileRechargeCreateOrConnectWithoutUserInput | MobileRechargeCreateOrConnectWithoutUserInput[]
    upsert?: MobileRechargeUpsertWithWhereUniqueWithoutUserInput | MobileRechargeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MobileRechargeCreateManyUserInputEnvelope
    set?: MobileRechargeWhereUniqueInput | MobileRechargeWhereUniqueInput[]
    disconnect?: MobileRechargeWhereUniqueInput | MobileRechargeWhereUniqueInput[]
    delete?: MobileRechargeWhereUniqueInput | MobileRechargeWhereUniqueInput[]
    connect?: MobileRechargeWhereUniqueInput | MobileRechargeWhereUniqueInput[]
    update?: MobileRechargeUpdateWithWhereUniqueWithoutUserInput | MobileRechargeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MobileRechargeUpdateManyWithWhereWithoutUserInput | MobileRechargeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MobileRechargeScalarWhereInput | MobileRechargeScalarWhereInput[]
  }

  export type CommunityVouchUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<CommunityVouchCreateWithoutVoucherInput, CommunityVouchUncheckedCreateWithoutVoucherInput> | CommunityVouchCreateWithoutVoucherInput[] | CommunityVouchUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: CommunityVouchCreateOrConnectWithoutVoucherInput | CommunityVouchCreateOrConnectWithoutVoucherInput[]
    upsert?: CommunityVouchUpsertWithWhereUniqueWithoutVoucherInput | CommunityVouchUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: CommunityVouchCreateManyVoucherInputEnvelope
    set?: CommunityVouchWhereUniqueInput | CommunityVouchWhereUniqueInput[]
    disconnect?: CommunityVouchWhereUniqueInput | CommunityVouchWhereUniqueInput[]
    delete?: CommunityVouchWhereUniqueInput | CommunityVouchWhereUniqueInput[]
    connect?: CommunityVouchWhereUniqueInput | CommunityVouchWhereUniqueInput[]
    update?: CommunityVouchUpdateWithWhereUniqueWithoutVoucherInput | CommunityVouchUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: CommunityVouchUpdateManyWithWhereWithoutVoucherInput | CommunityVouchUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: CommunityVouchScalarWhereInput | CommunityVouchScalarWhereInput[]
  }

  export type CommunityVouchUpdateManyWithoutVoucheeNestedInput = {
    create?: XOR<CommunityVouchCreateWithoutVoucheeInput, CommunityVouchUncheckedCreateWithoutVoucheeInput> | CommunityVouchCreateWithoutVoucheeInput[] | CommunityVouchUncheckedCreateWithoutVoucheeInput[]
    connectOrCreate?: CommunityVouchCreateOrConnectWithoutVoucheeInput | CommunityVouchCreateOrConnectWithoutVoucheeInput[]
    upsert?: CommunityVouchUpsertWithWhereUniqueWithoutVoucheeInput | CommunityVouchUpsertWithWhereUniqueWithoutVoucheeInput[]
    createMany?: CommunityVouchCreateManyVoucheeInputEnvelope
    set?: CommunityVouchWhereUniqueInput | CommunityVouchWhereUniqueInput[]
    disconnect?: CommunityVouchWhereUniqueInput | CommunityVouchWhereUniqueInput[]
    delete?: CommunityVouchWhereUniqueInput | CommunityVouchWhereUniqueInput[]
    connect?: CommunityVouchWhereUniqueInput | CommunityVouchWhereUniqueInput[]
    update?: CommunityVouchUpdateWithWhereUniqueWithoutVoucheeInput | CommunityVouchUpdateWithWhereUniqueWithoutVoucheeInput[]
    updateMany?: CommunityVouchUpdateManyWithWhereWithoutVoucheeInput | CommunityVouchUpdateManyWithWhereWithoutVoucheeInput[]
    deleteMany?: CommunityVouchScalarWhereInput | CommunityVouchScalarWhereInput[]
  }

  export type UpiTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UpiTransactionCreateWithoutUserInput, UpiTransactionUncheckedCreateWithoutUserInput> | UpiTransactionCreateWithoutUserInput[] | UpiTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UpiTransactionCreateOrConnectWithoutUserInput | UpiTransactionCreateOrConnectWithoutUserInput[]
    upsert?: UpiTransactionUpsertWithWhereUniqueWithoutUserInput | UpiTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UpiTransactionCreateManyUserInputEnvelope
    set?: UpiTransactionWhereUniqueInput | UpiTransactionWhereUniqueInput[]
    disconnect?: UpiTransactionWhereUniqueInput | UpiTransactionWhereUniqueInput[]
    delete?: UpiTransactionWhereUniqueInput | UpiTransactionWhereUniqueInput[]
    connect?: UpiTransactionWhereUniqueInput | UpiTransactionWhereUniqueInput[]
    update?: UpiTransactionUpdateWithWhereUniqueWithoutUserInput | UpiTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UpiTransactionUpdateManyWithWhereWithoutUserInput | UpiTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UpiTransactionScalarWhereInput | UpiTransactionScalarWhereInput[]
  }

  export type MobileRechargeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MobileRechargeCreateWithoutUserInput, MobileRechargeUncheckedCreateWithoutUserInput> | MobileRechargeCreateWithoutUserInput[] | MobileRechargeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MobileRechargeCreateOrConnectWithoutUserInput | MobileRechargeCreateOrConnectWithoutUserInput[]
    upsert?: MobileRechargeUpsertWithWhereUniqueWithoutUserInput | MobileRechargeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MobileRechargeCreateManyUserInputEnvelope
    set?: MobileRechargeWhereUniqueInput | MobileRechargeWhereUniqueInput[]
    disconnect?: MobileRechargeWhereUniqueInput | MobileRechargeWhereUniqueInput[]
    delete?: MobileRechargeWhereUniqueInput | MobileRechargeWhereUniqueInput[]
    connect?: MobileRechargeWhereUniqueInput | MobileRechargeWhereUniqueInput[]
    update?: MobileRechargeUpdateWithWhereUniqueWithoutUserInput | MobileRechargeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MobileRechargeUpdateManyWithWhereWithoutUserInput | MobileRechargeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MobileRechargeScalarWhereInput | MobileRechargeScalarWhereInput[]
  }

  export type CommunityVouchUncheckedUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<CommunityVouchCreateWithoutVoucherInput, CommunityVouchUncheckedCreateWithoutVoucherInput> | CommunityVouchCreateWithoutVoucherInput[] | CommunityVouchUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: CommunityVouchCreateOrConnectWithoutVoucherInput | CommunityVouchCreateOrConnectWithoutVoucherInput[]
    upsert?: CommunityVouchUpsertWithWhereUniqueWithoutVoucherInput | CommunityVouchUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: CommunityVouchCreateManyVoucherInputEnvelope
    set?: CommunityVouchWhereUniqueInput | CommunityVouchWhereUniqueInput[]
    disconnect?: CommunityVouchWhereUniqueInput | CommunityVouchWhereUniqueInput[]
    delete?: CommunityVouchWhereUniqueInput | CommunityVouchWhereUniqueInput[]
    connect?: CommunityVouchWhereUniqueInput | CommunityVouchWhereUniqueInput[]
    update?: CommunityVouchUpdateWithWhereUniqueWithoutVoucherInput | CommunityVouchUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: CommunityVouchUpdateManyWithWhereWithoutVoucherInput | CommunityVouchUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: CommunityVouchScalarWhereInput | CommunityVouchScalarWhereInput[]
  }

  export type CommunityVouchUncheckedUpdateManyWithoutVoucheeNestedInput = {
    create?: XOR<CommunityVouchCreateWithoutVoucheeInput, CommunityVouchUncheckedCreateWithoutVoucheeInput> | CommunityVouchCreateWithoutVoucheeInput[] | CommunityVouchUncheckedCreateWithoutVoucheeInput[]
    connectOrCreate?: CommunityVouchCreateOrConnectWithoutVoucheeInput | CommunityVouchCreateOrConnectWithoutVoucheeInput[]
    upsert?: CommunityVouchUpsertWithWhereUniqueWithoutVoucheeInput | CommunityVouchUpsertWithWhereUniqueWithoutVoucheeInput[]
    createMany?: CommunityVouchCreateManyVoucheeInputEnvelope
    set?: CommunityVouchWhereUniqueInput | CommunityVouchWhereUniqueInput[]
    disconnect?: CommunityVouchWhereUniqueInput | CommunityVouchWhereUniqueInput[]
    delete?: CommunityVouchWhereUniqueInput | CommunityVouchWhereUniqueInput[]
    connect?: CommunityVouchWhereUniqueInput | CommunityVouchWhereUniqueInput[]
    update?: CommunityVouchUpdateWithWhereUniqueWithoutVoucheeInput | CommunityVouchUpdateWithWhereUniqueWithoutVoucheeInput[]
    updateMany?: CommunityVouchUpdateManyWithWhereWithoutVoucheeInput | CommunityVouchUpdateManyWithWhereWithoutVoucheeInput[]
    deleteMany?: CommunityVouchScalarWhereInput | CommunityVouchScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutRechargesInput = {
    create?: XOR<UserCreateWithoutRechargesInput, UserUncheckedCreateWithoutRechargesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRechargesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRechargesNestedInput = {
    create?: XOR<UserCreateWithoutRechargesInput, UserUncheckedCreateWithoutRechargesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRechargesInput
    upsert?: UserUpsertWithoutRechargesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRechargesInput, UserUpdateWithoutRechargesInput>, UserUncheckedUpdateWithoutRechargesInput>
  }

  export type UserCreateNestedOneWithoutVouchesGivenInput = {
    create?: XOR<UserCreateWithoutVouchesGivenInput, UserUncheckedCreateWithoutVouchesGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutVouchesGivenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVouchesReceivedInput = {
    create?: XOR<UserCreateWithoutVouchesReceivedInput, UserUncheckedCreateWithoutVouchesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutVouchesReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVouchesGivenNestedInput = {
    create?: XOR<UserCreateWithoutVouchesGivenInput, UserUncheckedCreateWithoutVouchesGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutVouchesGivenInput
    upsert?: UserUpsertWithoutVouchesGivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVouchesGivenInput, UserUpdateWithoutVouchesGivenInput>, UserUncheckedUpdateWithoutVouchesGivenInput>
  }

  export type UserUpdateOneRequiredWithoutVouchesReceivedNestedInput = {
    create?: XOR<UserCreateWithoutVouchesReceivedInput, UserUncheckedCreateWithoutVouchesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutVouchesReceivedInput
    upsert?: UserUpsertWithoutVouchesReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVouchesReceivedInput, UserUpdateWithoutVouchesReceivedInput>, UserUncheckedUpdateWithoutVouchesReceivedInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UpiTransactionCreateWithoutUserInput = {
    id?: string
    amount: number
    type: string
    timestamp?: Date | string
  }

  export type UpiTransactionUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    type: string
    timestamp?: Date | string
  }

  export type UpiTransactionCreateOrConnectWithoutUserInput = {
    where: UpiTransactionWhereUniqueInput
    create: XOR<UpiTransactionCreateWithoutUserInput, UpiTransactionUncheckedCreateWithoutUserInput>
  }

  export type UpiTransactionCreateManyUserInputEnvelope = {
    data: UpiTransactionCreateManyUserInput | UpiTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MobileRechargeCreateWithoutUserInput = {
    id?: string
    amount: number
    timestamp?: Date | string
  }

  export type MobileRechargeUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    timestamp?: Date | string
  }

  export type MobileRechargeCreateOrConnectWithoutUserInput = {
    where: MobileRechargeWhereUniqueInput
    create: XOR<MobileRechargeCreateWithoutUserInput, MobileRechargeUncheckedCreateWithoutUserInput>
  }

  export type MobileRechargeCreateManyUserInputEnvelope = {
    data: MobileRechargeCreateManyUserInput | MobileRechargeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommunityVouchCreateWithoutVoucherInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    vouchee: UserCreateNestedOneWithoutVouchesReceivedInput
  }

  export type CommunityVouchUncheckedCreateWithoutVoucherInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    voucheeId: string
  }

  export type CommunityVouchCreateOrConnectWithoutVoucherInput = {
    where: CommunityVouchWhereUniqueInput
    create: XOR<CommunityVouchCreateWithoutVoucherInput, CommunityVouchUncheckedCreateWithoutVoucherInput>
  }

  export type CommunityVouchCreateManyVoucherInputEnvelope = {
    data: CommunityVouchCreateManyVoucherInput | CommunityVouchCreateManyVoucherInput[]
    skipDuplicates?: boolean
  }

  export type CommunityVouchCreateWithoutVoucheeInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    voucher: UserCreateNestedOneWithoutVouchesGivenInput
  }

  export type CommunityVouchUncheckedCreateWithoutVoucheeInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    voucherId: string
  }

  export type CommunityVouchCreateOrConnectWithoutVoucheeInput = {
    where: CommunityVouchWhereUniqueInput
    create: XOR<CommunityVouchCreateWithoutVoucheeInput, CommunityVouchUncheckedCreateWithoutVoucheeInput>
  }

  export type CommunityVouchCreateManyVoucheeInputEnvelope = {
    data: CommunityVouchCreateManyVoucheeInput | CommunityVouchCreateManyVoucheeInput[]
    skipDuplicates?: boolean
  }

  export type UpiTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: UpiTransactionWhereUniqueInput
    update: XOR<UpiTransactionUpdateWithoutUserInput, UpiTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<UpiTransactionCreateWithoutUserInput, UpiTransactionUncheckedCreateWithoutUserInput>
  }

  export type UpiTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: UpiTransactionWhereUniqueInput
    data: XOR<UpiTransactionUpdateWithoutUserInput, UpiTransactionUncheckedUpdateWithoutUserInput>
  }

  export type UpiTransactionUpdateManyWithWhereWithoutUserInput = {
    where: UpiTransactionScalarWhereInput
    data: XOR<UpiTransactionUpdateManyMutationInput, UpiTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type UpiTransactionScalarWhereInput = {
    AND?: UpiTransactionScalarWhereInput | UpiTransactionScalarWhereInput[]
    OR?: UpiTransactionScalarWhereInput[]
    NOT?: UpiTransactionScalarWhereInput | UpiTransactionScalarWhereInput[]
    id?: StringFilter<"UpiTransaction"> | string
    amount?: FloatFilter<"UpiTransaction"> | number
    type?: StringFilter<"UpiTransaction"> | string
    timestamp?: DateTimeFilter<"UpiTransaction"> | Date | string
    userId?: StringFilter<"UpiTransaction"> | string
  }

  export type MobileRechargeUpsertWithWhereUniqueWithoutUserInput = {
    where: MobileRechargeWhereUniqueInput
    update: XOR<MobileRechargeUpdateWithoutUserInput, MobileRechargeUncheckedUpdateWithoutUserInput>
    create: XOR<MobileRechargeCreateWithoutUserInput, MobileRechargeUncheckedCreateWithoutUserInput>
  }

  export type MobileRechargeUpdateWithWhereUniqueWithoutUserInput = {
    where: MobileRechargeWhereUniqueInput
    data: XOR<MobileRechargeUpdateWithoutUserInput, MobileRechargeUncheckedUpdateWithoutUserInput>
  }

  export type MobileRechargeUpdateManyWithWhereWithoutUserInput = {
    where: MobileRechargeScalarWhereInput
    data: XOR<MobileRechargeUpdateManyMutationInput, MobileRechargeUncheckedUpdateManyWithoutUserInput>
  }

  export type MobileRechargeScalarWhereInput = {
    AND?: MobileRechargeScalarWhereInput | MobileRechargeScalarWhereInput[]
    OR?: MobileRechargeScalarWhereInput[]
    NOT?: MobileRechargeScalarWhereInput | MobileRechargeScalarWhereInput[]
    id?: StringFilter<"MobileRecharge"> | string
    amount?: FloatFilter<"MobileRecharge"> | number
    timestamp?: DateTimeFilter<"MobileRecharge"> | Date | string
    userId?: StringFilter<"MobileRecharge"> | string
  }

  export type CommunityVouchUpsertWithWhereUniqueWithoutVoucherInput = {
    where: CommunityVouchWhereUniqueInput
    update: XOR<CommunityVouchUpdateWithoutVoucherInput, CommunityVouchUncheckedUpdateWithoutVoucherInput>
    create: XOR<CommunityVouchCreateWithoutVoucherInput, CommunityVouchUncheckedCreateWithoutVoucherInput>
  }

  export type CommunityVouchUpdateWithWhereUniqueWithoutVoucherInput = {
    where: CommunityVouchWhereUniqueInput
    data: XOR<CommunityVouchUpdateWithoutVoucherInput, CommunityVouchUncheckedUpdateWithoutVoucherInput>
  }

  export type CommunityVouchUpdateManyWithWhereWithoutVoucherInput = {
    where: CommunityVouchScalarWhereInput
    data: XOR<CommunityVouchUpdateManyMutationInput, CommunityVouchUncheckedUpdateManyWithoutVoucherInput>
  }

  export type CommunityVouchScalarWhereInput = {
    AND?: CommunityVouchScalarWhereInput | CommunityVouchScalarWhereInput[]
    OR?: CommunityVouchScalarWhereInput[]
    NOT?: CommunityVouchScalarWhereInput | CommunityVouchScalarWhereInput[]
    id?: StringFilter<"CommunityVouch"> | string
    status?: StringFilter<"CommunityVouch"> | string
    createdAt?: DateTimeFilter<"CommunityVouch"> | Date | string
    voucherId?: StringFilter<"CommunityVouch"> | string
    voucheeId?: StringFilter<"CommunityVouch"> | string
  }

  export type CommunityVouchUpsertWithWhereUniqueWithoutVoucheeInput = {
    where: CommunityVouchWhereUniqueInput
    update: XOR<CommunityVouchUpdateWithoutVoucheeInput, CommunityVouchUncheckedUpdateWithoutVoucheeInput>
    create: XOR<CommunityVouchCreateWithoutVoucheeInput, CommunityVouchUncheckedCreateWithoutVoucheeInput>
  }

  export type CommunityVouchUpdateWithWhereUniqueWithoutVoucheeInput = {
    where: CommunityVouchWhereUniqueInput
    data: XOR<CommunityVouchUpdateWithoutVoucheeInput, CommunityVouchUncheckedUpdateWithoutVoucheeInput>
  }

  export type CommunityVouchUpdateManyWithWhereWithoutVoucheeInput = {
    where: CommunityVouchScalarWhereInput
    data: XOR<CommunityVouchUpdateManyMutationInput, CommunityVouchUncheckedUpdateManyWithoutVoucheeInput>
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    phone: string
    name: string
    createdAt?: Date | string
    creditScore?: number | null
    recharges?: MobileRechargeCreateNestedManyWithoutUserInput
    vouchesGiven?: CommunityVouchCreateNestedManyWithoutVoucherInput
    vouchesReceived?: CommunityVouchCreateNestedManyWithoutVoucheeInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    phone: string
    name: string
    createdAt?: Date | string
    creditScore?: number | null
    recharges?: MobileRechargeUncheckedCreateNestedManyWithoutUserInput
    vouchesGiven?: CommunityVouchUncheckedCreateNestedManyWithoutVoucherInput
    vouchesReceived?: CommunityVouchUncheckedCreateNestedManyWithoutVoucheeInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recharges?: MobileRechargeUpdateManyWithoutUserNestedInput
    vouchesGiven?: CommunityVouchUpdateManyWithoutVoucherNestedInput
    vouchesReceived?: CommunityVouchUpdateManyWithoutVoucheeNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditScore?: NullableFloatFieldUpdateOperationsInput | number | null
    recharges?: MobileRechargeUncheckedUpdateManyWithoutUserNestedInput
    vouchesGiven?: CommunityVouchUncheckedUpdateManyWithoutVoucherNestedInput
    vouchesReceived?: CommunityVouchUncheckedUpdateManyWithoutVoucheeNestedInput
  }

  export type UserCreateWithoutRechargesInput = {
    id?: string
    phone: string
    name: string
    createdAt?: Date | string
    creditScore?: number | null
    transactions?: UpiTransactionCreateNestedManyWithoutUserInput
    vouchesGiven?: CommunityVouchCreateNestedManyWithoutVoucherInput
    vouchesReceived?: CommunityVouchCreateNestedManyWithoutVoucheeInput
  }

  export type UserUncheckedCreateWithoutRechargesInput = {
    id?: string
    phone: string
    name: string
    createdAt?: Date | string
    creditScore?: number | null
    transactions?: UpiTransactionUncheckedCreateNestedManyWithoutUserInput
    vouchesGiven?: CommunityVouchUncheckedCreateNestedManyWithoutVoucherInput
    vouchesReceived?: CommunityVouchUncheckedCreateNestedManyWithoutVoucheeInput
  }

  export type UserCreateOrConnectWithoutRechargesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRechargesInput, UserUncheckedCreateWithoutRechargesInput>
  }

  export type UserUpsertWithoutRechargesInput = {
    update: XOR<UserUpdateWithoutRechargesInput, UserUncheckedUpdateWithoutRechargesInput>
    create: XOR<UserCreateWithoutRechargesInput, UserUncheckedCreateWithoutRechargesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRechargesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRechargesInput, UserUncheckedUpdateWithoutRechargesInput>
  }

  export type UserUpdateWithoutRechargesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditScore?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: UpiTransactionUpdateManyWithoutUserNestedInput
    vouchesGiven?: CommunityVouchUpdateManyWithoutVoucherNestedInput
    vouchesReceived?: CommunityVouchUpdateManyWithoutVoucheeNestedInput
  }

  export type UserUncheckedUpdateWithoutRechargesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditScore?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: UpiTransactionUncheckedUpdateManyWithoutUserNestedInput
    vouchesGiven?: CommunityVouchUncheckedUpdateManyWithoutVoucherNestedInput
    vouchesReceived?: CommunityVouchUncheckedUpdateManyWithoutVoucheeNestedInput
  }

  export type UserCreateWithoutVouchesGivenInput = {
    id?: string
    phone: string
    name: string
    createdAt?: Date | string
    creditScore?: number | null
    transactions?: UpiTransactionCreateNestedManyWithoutUserInput
    recharges?: MobileRechargeCreateNestedManyWithoutUserInput
    vouchesReceived?: CommunityVouchCreateNestedManyWithoutVoucheeInput
  }

  export type UserUncheckedCreateWithoutVouchesGivenInput = {
    id?: string
    phone: string
    name: string
    createdAt?: Date | string
    creditScore?: number | null
    transactions?: UpiTransactionUncheckedCreateNestedManyWithoutUserInput
    recharges?: MobileRechargeUncheckedCreateNestedManyWithoutUserInput
    vouchesReceived?: CommunityVouchUncheckedCreateNestedManyWithoutVoucheeInput
  }

  export type UserCreateOrConnectWithoutVouchesGivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVouchesGivenInput, UserUncheckedCreateWithoutVouchesGivenInput>
  }

  export type UserCreateWithoutVouchesReceivedInput = {
    id?: string
    phone: string
    name: string
    createdAt?: Date | string
    creditScore?: number | null
    transactions?: UpiTransactionCreateNestedManyWithoutUserInput
    recharges?: MobileRechargeCreateNestedManyWithoutUserInput
    vouchesGiven?: CommunityVouchCreateNestedManyWithoutVoucherInput
  }

  export type UserUncheckedCreateWithoutVouchesReceivedInput = {
    id?: string
    phone: string
    name: string
    createdAt?: Date | string
    creditScore?: number | null
    transactions?: UpiTransactionUncheckedCreateNestedManyWithoutUserInput
    recharges?: MobileRechargeUncheckedCreateNestedManyWithoutUserInput
    vouchesGiven?: CommunityVouchUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type UserCreateOrConnectWithoutVouchesReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVouchesReceivedInput, UserUncheckedCreateWithoutVouchesReceivedInput>
  }

  export type UserUpsertWithoutVouchesGivenInput = {
    update: XOR<UserUpdateWithoutVouchesGivenInput, UserUncheckedUpdateWithoutVouchesGivenInput>
    create: XOR<UserCreateWithoutVouchesGivenInput, UserUncheckedCreateWithoutVouchesGivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVouchesGivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVouchesGivenInput, UserUncheckedUpdateWithoutVouchesGivenInput>
  }

  export type UserUpdateWithoutVouchesGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditScore?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: UpiTransactionUpdateManyWithoutUserNestedInput
    recharges?: MobileRechargeUpdateManyWithoutUserNestedInput
    vouchesReceived?: CommunityVouchUpdateManyWithoutVoucheeNestedInput
  }

  export type UserUncheckedUpdateWithoutVouchesGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditScore?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: UpiTransactionUncheckedUpdateManyWithoutUserNestedInput
    recharges?: MobileRechargeUncheckedUpdateManyWithoutUserNestedInput
    vouchesReceived?: CommunityVouchUncheckedUpdateManyWithoutVoucheeNestedInput
  }

  export type UserUpsertWithoutVouchesReceivedInput = {
    update: XOR<UserUpdateWithoutVouchesReceivedInput, UserUncheckedUpdateWithoutVouchesReceivedInput>
    create: XOR<UserCreateWithoutVouchesReceivedInput, UserUncheckedCreateWithoutVouchesReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVouchesReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVouchesReceivedInput, UserUncheckedUpdateWithoutVouchesReceivedInput>
  }

  export type UserUpdateWithoutVouchesReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditScore?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: UpiTransactionUpdateManyWithoutUserNestedInput
    recharges?: MobileRechargeUpdateManyWithoutUserNestedInput
    vouchesGiven?: CommunityVouchUpdateManyWithoutVoucherNestedInput
  }

  export type UserUncheckedUpdateWithoutVouchesReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditScore?: NullableFloatFieldUpdateOperationsInput | number | null
    transactions?: UpiTransactionUncheckedUpdateManyWithoutUserNestedInput
    recharges?: MobileRechargeUncheckedUpdateManyWithoutUserNestedInput
    vouchesGiven?: CommunityVouchUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type UpiTransactionCreateManyUserInput = {
    id?: string
    amount: number
    type: string
    timestamp?: Date | string
  }

  export type MobileRechargeCreateManyUserInput = {
    id?: string
    amount: number
    timestamp?: Date | string
  }

  export type CommunityVouchCreateManyVoucherInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    voucheeId: string
  }

  export type CommunityVouchCreateManyVoucheeInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    voucherId: string
  }

  export type UpiTransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpiTransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpiTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MobileRechargeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MobileRechargeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MobileRechargeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityVouchUpdateWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vouchee?: UserUpdateOneRequiredWithoutVouchesReceivedNestedInput
  }

  export type CommunityVouchUncheckedUpdateWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucheeId?: StringFieldUpdateOperationsInput | string
  }

  export type CommunityVouchUncheckedUpdateManyWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucheeId?: StringFieldUpdateOperationsInput | string
  }

  export type CommunityVouchUpdateWithoutVoucheeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucher?: UserUpdateOneRequiredWithoutVouchesGivenNestedInput
  }

  export type CommunityVouchUncheckedUpdateWithoutVoucheeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherId?: StringFieldUpdateOperationsInput | string
  }

  export type CommunityVouchUncheckedUpdateManyWithoutVoucheeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voucherId?: StringFieldUpdateOperationsInput | string
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