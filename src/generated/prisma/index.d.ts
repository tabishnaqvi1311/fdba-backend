
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
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model RegisteredPlayer
 * 
 */
export type RegisteredPlayer = $Result.DefaultSelection<Prisma.$RegisteredPlayerPayload>
/**
 * Model TournamentPlayer
 * 
 */
export type TournamentPlayer = $Result.DefaultSelection<Prisma.$TournamentPlayerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AgeCategory: {
  U11: 'U11',
  U13: 'U13',
  U15: 'U15',
  U17: 'U17',
  U19: 'U19',
  SENIOR: 'SENIOR'
};

export type AgeCategory = (typeof AgeCategory)[keyof typeof AgeCategory]


export const Category: {
  SINGLES: 'SINGLES',
  DOUBLES: 'DOUBLES',
  MIXED_DOUBLES: 'MIXED_DOUBLES'
};

export type Category = (typeof Category)[keyof typeof Category]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const OrganisationType: {
  SCHOOL: 'SCHOOL',
  COLLEGE: 'COLLEGE',
  ORGANISATION: 'ORGANISATION'
};

export type OrganisationType = (typeof OrganisationType)[keyof typeof OrganisationType]


export const PaymentStatus: {
  PENDING: 'PENDING',
  CREATED: 'CREATED',
  AUTHORIZED: 'AUTHORIZED',
  CAPTURED: 'CAPTURED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type AgeCategory = $Enums.AgeCategory

export const AgeCategory: typeof $Enums.AgeCategory

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type OrganisationType = $Enums.OrganisationType

export const OrganisationType: typeof $Enums.OrganisationType

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Payments
 * const payments = await prisma.payment.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Payments
   * const payments = await prisma.payment.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registeredPlayer`: Exposes CRUD operations for the **RegisteredPlayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegisteredPlayers
    * const registeredPlayers = await prisma.registeredPlayer.findMany()
    * ```
    */
  get registeredPlayer(): Prisma.RegisteredPlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tournamentPlayer`: Exposes CRUD operations for the **TournamentPlayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TournamentPlayers
    * const tournamentPlayers = await prisma.tournamentPlayer.findMany()
    * ```
    */
  get tournamentPlayer(): Prisma.TournamentPlayerDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Payment: 'Payment',
    RegisteredPlayer: 'RegisteredPlayer',
    TournamentPlayer: 'TournamentPlayer'
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
      modelProps: "payment" | "registeredPlayer" | "tournamentPlayer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      RegisteredPlayer: {
        payload: Prisma.$RegisteredPlayerPayload<ExtArgs>
        fields: Prisma.RegisteredPlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegisteredPlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredPlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegisteredPlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredPlayerPayload>
          }
          findFirst: {
            args: Prisma.RegisteredPlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredPlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegisteredPlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredPlayerPayload>
          }
          findMany: {
            args: Prisma.RegisteredPlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredPlayerPayload>[]
          }
          create: {
            args: Prisma.RegisteredPlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredPlayerPayload>
          }
          createMany: {
            args: Prisma.RegisteredPlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegisteredPlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredPlayerPayload>[]
          }
          delete: {
            args: Prisma.RegisteredPlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredPlayerPayload>
          }
          update: {
            args: Prisma.RegisteredPlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredPlayerPayload>
          }
          deleteMany: {
            args: Prisma.RegisteredPlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegisteredPlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegisteredPlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredPlayerPayload>[]
          }
          upsert: {
            args: Prisma.RegisteredPlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredPlayerPayload>
          }
          aggregate: {
            args: Prisma.RegisteredPlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegisteredPlayer>
          }
          groupBy: {
            args: Prisma.RegisteredPlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegisteredPlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegisteredPlayerCountArgs<ExtArgs>
            result: $Utils.Optional<RegisteredPlayerCountAggregateOutputType> | number
          }
        }
      }
      TournamentPlayer: {
        payload: Prisma.$TournamentPlayerPayload<ExtArgs>
        fields: Prisma.TournamentPlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentPlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentPlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPlayerPayload>
          }
          findFirst: {
            args: Prisma.TournamentPlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentPlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPlayerPayload>
          }
          findMany: {
            args: Prisma.TournamentPlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPlayerPayload>[]
          }
          create: {
            args: Prisma.TournamentPlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPlayerPayload>
          }
          createMany: {
            args: Prisma.TournamentPlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TournamentPlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPlayerPayload>[]
          }
          delete: {
            args: Prisma.TournamentPlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPlayerPayload>
          }
          update: {
            args: Prisma.TournamentPlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPlayerPayload>
          }
          deleteMany: {
            args: Prisma.TournamentPlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentPlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TournamentPlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPlayerPayload>[]
          }
          upsert: {
            args: Prisma.TournamentPlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPlayerPayload>
          }
          aggregate: {
            args: Prisma.TournamentPlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTournamentPlayer>
          }
          groupBy: {
            args: Prisma.TournamentPlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TournamentPlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentPlayerCountArgs<ExtArgs>
            result: $Utils.Optional<TournamentPlayerCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    payment?: PaymentOmit
    registeredPlayer?: RegisteredPlayerOmit
    tournamentPlayer?: TournamentPlayerOmit
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

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    razorpayPaymentId: string | null
    razorpayOrderId: string | null
    razorpaySignature: string | null
    amount: number | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    paymentMethod: string | null
    description: string | null
    playerId: string | null
    tournamentPlayerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    razorpayPaymentId: string | null
    razorpayOrderId: string | null
    razorpaySignature: string | null
    amount: number | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    paymentMethod: string | null
    description: string | null
    playerId: string | null
    tournamentPlayerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    razorpayPaymentId: number
    razorpayOrderId: number
    razorpaySignature: number
    amount: number
    currency: number
    status: number
    paymentMethod: number
    description: number
    playerId: number
    tournamentPlayerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    razorpayPaymentId?: true
    razorpayOrderId?: true
    razorpaySignature?: true
    amount?: true
    currency?: true
    status?: true
    paymentMethod?: true
    description?: true
    playerId?: true
    tournamentPlayerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    razorpayPaymentId?: true
    razorpayOrderId?: true
    razorpaySignature?: true
    amount?: true
    currency?: true
    status?: true
    paymentMethod?: true
    description?: true
    playerId?: true
    tournamentPlayerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    razorpayPaymentId?: true
    razorpayOrderId?: true
    razorpaySignature?: true
    amount?: true
    currency?: true
    status?: true
    paymentMethod?: true
    description?: true
    playerId?: true
    tournamentPlayerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    razorpayPaymentId: string | null
    razorpayOrderId: string | null
    razorpaySignature: string | null
    amount: number
    currency: string
    status: $Enums.PaymentStatus
    paymentMethod: string | null
    description: string | null
    playerId: string | null
    tournamentPlayerId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    razorpayPaymentId?: boolean
    razorpayOrderId?: boolean
    razorpaySignature?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    paymentMethod?: boolean
    description?: boolean
    playerId?: boolean
    tournamentPlayerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    RegisteredPlayer?: boolean | Payment$RegisteredPlayerArgs<ExtArgs>
    TournamentPlayer?: boolean | Payment$TournamentPlayerArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    razorpayPaymentId?: boolean
    razorpayOrderId?: boolean
    razorpaySignature?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    paymentMethod?: boolean
    description?: boolean
    playerId?: boolean
    tournamentPlayerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    RegisteredPlayer?: boolean | Payment$RegisteredPlayerArgs<ExtArgs>
    TournamentPlayer?: boolean | Payment$TournamentPlayerArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    razorpayPaymentId?: boolean
    razorpayOrderId?: boolean
    razorpaySignature?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    paymentMethod?: boolean
    description?: boolean
    playerId?: boolean
    tournamentPlayerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    RegisteredPlayer?: boolean | Payment$RegisteredPlayerArgs<ExtArgs>
    TournamentPlayer?: boolean | Payment$TournamentPlayerArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    razorpayPaymentId?: boolean
    razorpayOrderId?: boolean
    razorpaySignature?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    paymentMethod?: boolean
    description?: boolean
    playerId?: boolean
    tournamentPlayerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "razorpayPaymentId" | "razorpayOrderId" | "razorpaySignature" | "amount" | "currency" | "status" | "paymentMethod" | "description" | "playerId" | "tournamentPlayerId" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RegisteredPlayer?: boolean | Payment$RegisteredPlayerArgs<ExtArgs>
    TournamentPlayer?: boolean | Payment$TournamentPlayerArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RegisteredPlayer?: boolean | Payment$RegisteredPlayerArgs<ExtArgs>
    TournamentPlayer?: boolean | Payment$TournamentPlayerArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RegisteredPlayer?: boolean | Payment$RegisteredPlayerArgs<ExtArgs>
    TournamentPlayer?: boolean | Payment$TournamentPlayerArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      RegisteredPlayer: Prisma.$RegisteredPlayerPayload<ExtArgs> | null
      TournamentPlayer: Prisma.$TournamentPlayerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      razorpayPaymentId: string | null
      razorpayOrderId: string | null
      razorpaySignature: string | null
      amount: number
      currency: string
      status: $Enums.PaymentStatus
      paymentMethod: string | null
      description: string | null
      playerId: string | null
      tournamentPlayerId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    RegisteredPlayer<T extends Payment$RegisteredPlayerArgs<ExtArgs> = {}>(args?: Subset<T, Payment$RegisteredPlayerArgs<ExtArgs>>): Prisma__RegisteredPlayerClient<$Result.GetResult<Prisma.$RegisteredPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    TournamentPlayer<T extends Payment$TournamentPlayerArgs<ExtArgs> = {}>(args?: Subset<T, Payment$TournamentPlayerArgs<ExtArgs>>): Prisma__TournamentPlayerClient<$Result.GetResult<Prisma.$TournamentPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly razorpayPaymentId: FieldRef<"Payment", 'String'>
    readonly razorpayOrderId: FieldRef<"Payment", 'String'>
    readonly razorpaySignature: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Int'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly paymentMethod: FieldRef<"Payment", 'String'>
    readonly description: FieldRef<"Payment", 'String'>
    readonly playerId: FieldRef<"Payment", 'String'>
    readonly tournamentPlayerId: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.RegisteredPlayer
   */
  export type Payment$RegisteredPlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredPlayer
     */
    select?: RegisteredPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredPlayer
     */
    omit?: RegisteredPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredPlayerInclude<ExtArgs> | null
    where?: RegisteredPlayerWhereInput
  }

  /**
   * Payment.TournamentPlayer
   */
  export type Payment$TournamentPlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayer
     */
    select?: TournamentPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPlayer
     */
    omit?: TournamentPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPlayerInclude<ExtArgs> | null
    where?: TournamentPlayerWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model RegisteredPlayer
   */

  export type AggregateRegisteredPlayer = {
    _count: RegisteredPlayerCountAggregateOutputType | null
    _min: RegisteredPlayerMinAggregateOutputType | null
    _max: RegisteredPlayerMaxAggregateOutputType | null
  }

  export type RegisteredPlayerMinAggregateOutputType = {
    id: string | null
    playerId: string | null
    name: string | null
    gender: $Enums.Gender | null
    dateOfBirth: string | null
    placeOfBirth: string | null
    identificationMarks: string | null
    imageLink: string | null
    dobProofLink: string | null
    communicationAddress: string | null
    pinCode: string | null
    email: string | null
    contactNumber: string | null
    organisationType: $Enums.OrganisationType | null
    organisationName: string | null
    organisationEmail: string | null
    organisationContact: string | null
    organisationAddress: string | null
    nameOfContact: string | null
    fatherName: string | null
    fatherContact: string | null
    motherName: string | null
    motherContact: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegisteredPlayerMaxAggregateOutputType = {
    id: string | null
    playerId: string | null
    name: string | null
    gender: $Enums.Gender | null
    dateOfBirth: string | null
    placeOfBirth: string | null
    identificationMarks: string | null
    imageLink: string | null
    dobProofLink: string | null
    communicationAddress: string | null
    pinCode: string | null
    email: string | null
    contactNumber: string | null
    organisationType: $Enums.OrganisationType | null
    organisationName: string | null
    organisationEmail: string | null
    organisationContact: string | null
    organisationAddress: string | null
    nameOfContact: string | null
    fatherName: string | null
    fatherContact: string | null
    motherName: string | null
    motherContact: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegisteredPlayerCountAggregateOutputType = {
    id: number
    playerId: number
    name: number
    gender: number
    dateOfBirth: number
    placeOfBirth: number
    identificationMarks: number
    imageLink: number
    dobProofLink: number
    communicationAddress: number
    pinCode: number
    email: number
    contactNumber: number
    organisationType: number
    organisationName: number
    organisationEmail: number
    organisationContact: number
    organisationAddress: number
    nameOfContact: number
    fatherName: number
    fatherContact: number
    motherName: number
    motherContact: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RegisteredPlayerMinAggregateInputType = {
    id?: true
    playerId?: true
    name?: true
    gender?: true
    dateOfBirth?: true
    placeOfBirth?: true
    identificationMarks?: true
    imageLink?: true
    dobProofLink?: true
    communicationAddress?: true
    pinCode?: true
    email?: true
    contactNumber?: true
    organisationType?: true
    organisationName?: true
    organisationEmail?: true
    organisationContact?: true
    organisationAddress?: true
    nameOfContact?: true
    fatherName?: true
    fatherContact?: true
    motherName?: true
    motherContact?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegisteredPlayerMaxAggregateInputType = {
    id?: true
    playerId?: true
    name?: true
    gender?: true
    dateOfBirth?: true
    placeOfBirth?: true
    identificationMarks?: true
    imageLink?: true
    dobProofLink?: true
    communicationAddress?: true
    pinCode?: true
    email?: true
    contactNumber?: true
    organisationType?: true
    organisationName?: true
    organisationEmail?: true
    organisationContact?: true
    organisationAddress?: true
    nameOfContact?: true
    fatherName?: true
    fatherContact?: true
    motherName?: true
    motherContact?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegisteredPlayerCountAggregateInputType = {
    id?: true
    playerId?: true
    name?: true
    gender?: true
    dateOfBirth?: true
    placeOfBirth?: true
    identificationMarks?: true
    imageLink?: true
    dobProofLink?: true
    communicationAddress?: true
    pinCode?: true
    email?: true
    contactNumber?: true
    organisationType?: true
    organisationName?: true
    organisationEmail?: true
    organisationContact?: true
    organisationAddress?: true
    nameOfContact?: true
    fatherName?: true
    fatherContact?: true
    motherName?: true
    motherContact?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RegisteredPlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegisteredPlayer to aggregate.
     */
    where?: RegisteredPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegisteredPlayers to fetch.
     */
    orderBy?: RegisteredPlayerOrderByWithRelationInput | RegisteredPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegisteredPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegisteredPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegisteredPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegisteredPlayers
    **/
    _count?: true | RegisteredPlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegisteredPlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegisteredPlayerMaxAggregateInputType
  }

  export type GetRegisteredPlayerAggregateType<T extends RegisteredPlayerAggregateArgs> = {
        [P in keyof T & keyof AggregateRegisteredPlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegisteredPlayer[P]>
      : GetScalarType<T[P], AggregateRegisteredPlayer[P]>
  }




  export type RegisteredPlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegisteredPlayerWhereInput
    orderBy?: RegisteredPlayerOrderByWithAggregationInput | RegisteredPlayerOrderByWithAggregationInput[]
    by: RegisteredPlayerScalarFieldEnum[] | RegisteredPlayerScalarFieldEnum
    having?: RegisteredPlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegisteredPlayerCountAggregateInputType | true
    _min?: RegisteredPlayerMinAggregateInputType
    _max?: RegisteredPlayerMaxAggregateInputType
  }

  export type RegisteredPlayerGroupByOutputType = {
    id: string
    playerId: string
    name: string
    gender: $Enums.Gender
    dateOfBirth: string
    placeOfBirth: string
    identificationMarks: string
    imageLink: string
    dobProofLink: string
    communicationAddress: string
    pinCode: string
    email: string
    contactNumber: string
    organisationType: $Enums.OrganisationType
    organisationName: string
    organisationEmail: string
    organisationContact: string
    organisationAddress: string
    nameOfContact: string
    fatherName: string
    fatherContact: string
    motherName: string
    motherContact: string
    createdAt: Date
    updatedAt: Date
    _count: RegisteredPlayerCountAggregateOutputType | null
    _min: RegisteredPlayerMinAggregateOutputType | null
    _max: RegisteredPlayerMaxAggregateOutputType | null
  }

  type GetRegisteredPlayerGroupByPayload<T extends RegisteredPlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegisteredPlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegisteredPlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegisteredPlayerGroupByOutputType[P]>
            : GetScalarType<T[P], RegisteredPlayerGroupByOutputType[P]>
        }
      >
    >


  export type RegisteredPlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    name?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    placeOfBirth?: boolean
    identificationMarks?: boolean
    imageLink?: boolean
    dobProofLink?: boolean
    communicationAddress?: boolean
    pinCode?: boolean
    email?: boolean
    contactNumber?: boolean
    organisationType?: boolean
    organisationName?: boolean
    organisationEmail?: boolean
    organisationContact?: boolean
    organisationAddress?: boolean
    nameOfContact?: boolean
    fatherName?: boolean
    fatherContact?: boolean
    motherName?: boolean
    motherContact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Payment?: boolean | RegisteredPlayer$PaymentArgs<ExtArgs>
  }, ExtArgs["result"]["registeredPlayer"]>

  export type RegisteredPlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    name?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    placeOfBirth?: boolean
    identificationMarks?: boolean
    imageLink?: boolean
    dobProofLink?: boolean
    communicationAddress?: boolean
    pinCode?: boolean
    email?: boolean
    contactNumber?: boolean
    organisationType?: boolean
    organisationName?: boolean
    organisationEmail?: boolean
    organisationContact?: boolean
    organisationAddress?: boolean
    nameOfContact?: boolean
    fatherName?: boolean
    fatherContact?: boolean
    motherName?: boolean
    motherContact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["registeredPlayer"]>

  export type RegisteredPlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    name?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    placeOfBirth?: boolean
    identificationMarks?: boolean
    imageLink?: boolean
    dobProofLink?: boolean
    communicationAddress?: boolean
    pinCode?: boolean
    email?: boolean
    contactNumber?: boolean
    organisationType?: boolean
    organisationName?: boolean
    organisationEmail?: boolean
    organisationContact?: boolean
    organisationAddress?: boolean
    nameOfContact?: boolean
    fatherName?: boolean
    fatherContact?: boolean
    motherName?: boolean
    motherContact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["registeredPlayer"]>

  export type RegisteredPlayerSelectScalar = {
    id?: boolean
    playerId?: boolean
    name?: boolean
    gender?: boolean
    dateOfBirth?: boolean
    placeOfBirth?: boolean
    identificationMarks?: boolean
    imageLink?: boolean
    dobProofLink?: boolean
    communicationAddress?: boolean
    pinCode?: boolean
    email?: boolean
    contactNumber?: boolean
    organisationType?: boolean
    organisationName?: boolean
    organisationEmail?: boolean
    organisationContact?: boolean
    organisationAddress?: boolean
    nameOfContact?: boolean
    fatherName?: boolean
    fatherContact?: boolean
    motherName?: boolean
    motherContact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RegisteredPlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "name" | "gender" | "dateOfBirth" | "placeOfBirth" | "identificationMarks" | "imageLink" | "dobProofLink" | "communicationAddress" | "pinCode" | "email" | "contactNumber" | "organisationType" | "organisationName" | "organisationEmail" | "organisationContact" | "organisationAddress" | "nameOfContact" | "fatherName" | "fatherContact" | "motherName" | "motherContact" | "createdAt" | "updatedAt", ExtArgs["result"]["registeredPlayer"]>
  export type RegisteredPlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Payment?: boolean | RegisteredPlayer$PaymentArgs<ExtArgs>
  }
  export type RegisteredPlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RegisteredPlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RegisteredPlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegisteredPlayer"
    objects: {
      Payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playerId: string
      name: string
      gender: $Enums.Gender
      dateOfBirth: string
      placeOfBirth: string
      identificationMarks: string
      imageLink: string
      dobProofLink: string
      communicationAddress: string
      pinCode: string
      email: string
      contactNumber: string
      organisationType: $Enums.OrganisationType
      organisationName: string
      organisationEmail: string
      organisationContact: string
      organisationAddress: string
      nameOfContact: string
      fatherName: string
      fatherContact: string
      motherName: string
      motherContact: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["registeredPlayer"]>
    composites: {}
  }

  type RegisteredPlayerGetPayload<S extends boolean | null | undefined | RegisteredPlayerDefaultArgs> = $Result.GetResult<Prisma.$RegisteredPlayerPayload, S>

  type RegisteredPlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegisteredPlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegisteredPlayerCountAggregateInputType | true
    }

  export interface RegisteredPlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegisteredPlayer'], meta: { name: 'RegisteredPlayer' } }
    /**
     * Find zero or one RegisteredPlayer that matches the filter.
     * @param {RegisteredPlayerFindUniqueArgs} args - Arguments to find a RegisteredPlayer
     * @example
     * // Get one RegisteredPlayer
     * const registeredPlayer = await prisma.registeredPlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegisteredPlayerFindUniqueArgs>(args: SelectSubset<T, RegisteredPlayerFindUniqueArgs<ExtArgs>>): Prisma__RegisteredPlayerClient<$Result.GetResult<Prisma.$RegisteredPlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegisteredPlayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegisteredPlayerFindUniqueOrThrowArgs} args - Arguments to find a RegisteredPlayer
     * @example
     * // Get one RegisteredPlayer
     * const registeredPlayer = await prisma.registeredPlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegisteredPlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, RegisteredPlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegisteredPlayerClient<$Result.GetResult<Prisma.$RegisteredPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegisteredPlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredPlayerFindFirstArgs} args - Arguments to find a RegisteredPlayer
     * @example
     * // Get one RegisteredPlayer
     * const registeredPlayer = await prisma.registeredPlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegisteredPlayerFindFirstArgs>(args?: SelectSubset<T, RegisteredPlayerFindFirstArgs<ExtArgs>>): Prisma__RegisteredPlayerClient<$Result.GetResult<Prisma.$RegisteredPlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegisteredPlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredPlayerFindFirstOrThrowArgs} args - Arguments to find a RegisteredPlayer
     * @example
     * // Get one RegisteredPlayer
     * const registeredPlayer = await prisma.registeredPlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegisteredPlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, RegisteredPlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegisteredPlayerClient<$Result.GetResult<Prisma.$RegisteredPlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegisteredPlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredPlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegisteredPlayers
     * const registeredPlayers = await prisma.registeredPlayer.findMany()
     * 
     * // Get first 10 RegisteredPlayers
     * const registeredPlayers = await prisma.registeredPlayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registeredPlayerWithIdOnly = await prisma.registeredPlayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegisteredPlayerFindManyArgs>(args?: SelectSubset<T, RegisteredPlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisteredPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegisteredPlayer.
     * @param {RegisteredPlayerCreateArgs} args - Arguments to create a RegisteredPlayer.
     * @example
     * // Create one RegisteredPlayer
     * const RegisteredPlayer = await prisma.registeredPlayer.create({
     *   data: {
     *     // ... data to create a RegisteredPlayer
     *   }
     * })
     * 
     */
    create<T extends RegisteredPlayerCreateArgs>(args: SelectSubset<T, RegisteredPlayerCreateArgs<ExtArgs>>): Prisma__RegisteredPlayerClient<$Result.GetResult<Prisma.$RegisteredPlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegisteredPlayers.
     * @param {RegisteredPlayerCreateManyArgs} args - Arguments to create many RegisteredPlayers.
     * @example
     * // Create many RegisteredPlayers
     * const registeredPlayer = await prisma.registeredPlayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegisteredPlayerCreateManyArgs>(args?: SelectSubset<T, RegisteredPlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegisteredPlayers and returns the data saved in the database.
     * @param {RegisteredPlayerCreateManyAndReturnArgs} args - Arguments to create many RegisteredPlayers.
     * @example
     * // Create many RegisteredPlayers
     * const registeredPlayer = await prisma.registeredPlayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegisteredPlayers and only return the `id`
     * const registeredPlayerWithIdOnly = await prisma.registeredPlayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegisteredPlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, RegisteredPlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisteredPlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RegisteredPlayer.
     * @param {RegisteredPlayerDeleteArgs} args - Arguments to delete one RegisteredPlayer.
     * @example
     * // Delete one RegisteredPlayer
     * const RegisteredPlayer = await prisma.registeredPlayer.delete({
     *   where: {
     *     // ... filter to delete one RegisteredPlayer
     *   }
     * })
     * 
     */
    delete<T extends RegisteredPlayerDeleteArgs>(args: SelectSubset<T, RegisteredPlayerDeleteArgs<ExtArgs>>): Prisma__RegisteredPlayerClient<$Result.GetResult<Prisma.$RegisteredPlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegisteredPlayer.
     * @param {RegisteredPlayerUpdateArgs} args - Arguments to update one RegisteredPlayer.
     * @example
     * // Update one RegisteredPlayer
     * const registeredPlayer = await prisma.registeredPlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegisteredPlayerUpdateArgs>(args: SelectSubset<T, RegisteredPlayerUpdateArgs<ExtArgs>>): Prisma__RegisteredPlayerClient<$Result.GetResult<Prisma.$RegisteredPlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegisteredPlayers.
     * @param {RegisteredPlayerDeleteManyArgs} args - Arguments to filter RegisteredPlayers to delete.
     * @example
     * // Delete a few RegisteredPlayers
     * const { count } = await prisma.registeredPlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegisteredPlayerDeleteManyArgs>(args?: SelectSubset<T, RegisteredPlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegisteredPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredPlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegisteredPlayers
     * const registeredPlayer = await prisma.registeredPlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegisteredPlayerUpdateManyArgs>(args: SelectSubset<T, RegisteredPlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegisteredPlayers and returns the data updated in the database.
     * @param {RegisteredPlayerUpdateManyAndReturnArgs} args - Arguments to update many RegisteredPlayers.
     * @example
     * // Update many RegisteredPlayers
     * const registeredPlayer = await prisma.registeredPlayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RegisteredPlayers and only return the `id`
     * const registeredPlayerWithIdOnly = await prisma.registeredPlayer.updateManyAndReturn({
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
    updateManyAndReturn<T extends RegisteredPlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, RegisteredPlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisteredPlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RegisteredPlayer.
     * @param {RegisteredPlayerUpsertArgs} args - Arguments to update or create a RegisteredPlayer.
     * @example
     * // Update or create a RegisteredPlayer
     * const registeredPlayer = await prisma.registeredPlayer.upsert({
     *   create: {
     *     // ... data to create a RegisteredPlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegisteredPlayer we want to update
     *   }
     * })
     */
    upsert<T extends RegisteredPlayerUpsertArgs>(args: SelectSubset<T, RegisteredPlayerUpsertArgs<ExtArgs>>): Prisma__RegisteredPlayerClient<$Result.GetResult<Prisma.$RegisteredPlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegisteredPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredPlayerCountArgs} args - Arguments to filter RegisteredPlayers to count.
     * @example
     * // Count the number of RegisteredPlayers
     * const count = await prisma.registeredPlayer.count({
     *   where: {
     *     // ... the filter for the RegisteredPlayers we want to count
     *   }
     * })
    **/
    count<T extends RegisteredPlayerCountArgs>(
      args?: Subset<T, RegisteredPlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegisteredPlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegisteredPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredPlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegisteredPlayerAggregateArgs>(args: Subset<T, RegisteredPlayerAggregateArgs>): Prisma.PrismaPromise<GetRegisteredPlayerAggregateType<T>>

    /**
     * Group by RegisteredPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredPlayerGroupByArgs} args - Group by arguments.
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
      T extends RegisteredPlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegisteredPlayerGroupByArgs['orderBy'] }
        : { orderBy?: RegisteredPlayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegisteredPlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegisteredPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegisteredPlayer model
   */
  readonly fields: RegisteredPlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegisteredPlayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegisteredPlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Payment<T extends RegisteredPlayer$PaymentArgs<ExtArgs> = {}>(args?: Subset<T, RegisteredPlayer$PaymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RegisteredPlayer model
   */
  interface RegisteredPlayerFieldRefs {
    readonly id: FieldRef<"RegisteredPlayer", 'String'>
    readonly playerId: FieldRef<"RegisteredPlayer", 'String'>
    readonly name: FieldRef<"RegisteredPlayer", 'String'>
    readonly gender: FieldRef<"RegisteredPlayer", 'Gender'>
    readonly dateOfBirth: FieldRef<"RegisteredPlayer", 'String'>
    readonly placeOfBirth: FieldRef<"RegisteredPlayer", 'String'>
    readonly identificationMarks: FieldRef<"RegisteredPlayer", 'String'>
    readonly imageLink: FieldRef<"RegisteredPlayer", 'String'>
    readonly dobProofLink: FieldRef<"RegisteredPlayer", 'String'>
    readonly communicationAddress: FieldRef<"RegisteredPlayer", 'String'>
    readonly pinCode: FieldRef<"RegisteredPlayer", 'String'>
    readonly email: FieldRef<"RegisteredPlayer", 'String'>
    readonly contactNumber: FieldRef<"RegisteredPlayer", 'String'>
    readonly organisationType: FieldRef<"RegisteredPlayer", 'OrganisationType'>
    readonly organisationName: FieldRef<"RegisteredPlayer", 'String'>
    readonly organisationEmail: FieldRef<"RegisteredPlayer", 'String'>
    readonly organisationContact: FieldRef<"RegisteredPlayer", 'String'>
    readonly organisationAddress: FieldRef<"RegisteredPlayer", 'String'>
    readonly nameOfContact: FieldRef<"RegisteredPlayer", 'String'>
    readonly fatherName: FieldRef<"RegisteredPlayer", 'String'>
    readonly fatherContact: FieldRef<"RegisteredPlayer", 'String'>
    readonly motherName: FieldRef<"RegisteredPlayer", 'String'>
    readonly motherContact: FieldRef<"RegisteredPlayer", 'String'>
    readonly createdAt: FieldRef<"RegisteredPlayer", 'DateTime'>
    readonly updatedAt: FieldRef<"RegisteredPlayer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegisteredPlayer findUnique
   */
  export type RegisteredPlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredPlayer
     */
    select?: RegisteredPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredPlayer
     */
    omit?: RegisteredPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredPlayerInclude<ExtArgs> | null
    /**
     * Filter, which RegisteredPlayer to fetch.
     */
    where: RegisteredPlayerWhereUniqueInput
  }

  /**
   * RegisteredPlayer findUniqueOrThrow
   */
  export type RegisteredPlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredPlayer
     */
    select?: RegisteredPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredPlayer
     */
    omit?: RegisteredPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredPlayerInclude<ExtArgs> | null
    /**
     * Filter, which RegisteredPlayer to fetch.
     */
    where: RegisteredPlayerWhereUniqueInput
  }

  /**
   * RegisteredPlayer findFirst
   */
  export type RegisteredPlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredPlayer
     */
    select?: RegisteredPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredPlayer
     */
    omit?: RegisteredPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredPlayerInclude<ExtArgs> | null
    /**
     * Filter, which RegisteredPlayer to fetch.
     */
    where?: RegisteredPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegisteredPlayers to fetch.
     */
    orderBy?: RegisteredPlayerOrderByWithRelationInput | RegisteredPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegisteredPlayers.
     */
    cursor?: RegisteredPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegisteredPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegisteredPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegisteredPlayers.
     */
    distinct?: RegisteredPlayerScalarFieldEnum | RegisteredPlayerScalarFieldEnum[]
  }

  /**
   * RegisteredPlayer findFirstOrThrow
   */
  export type RegisteredPlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredPlayer
     */
    select?: RegisteredPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredPlayer
     */
    omit?: RegisteredPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredPlayerInclude<ExtArgs> | null
    /**
     * Filter, which RegisteredPlayer to fetch.
     */
    where?: RegisteredPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegisteredPlayers to fetch.
     */
    orderBy?: RegisteredPlayerOrderByWithRelationInput | RegisteredPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegisteredPlayers.
     */
    cursor?: RegisteredPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegisteredPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegisteredPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegisteredPlayers.
     */
    distinct?: RegisteredPlayerScalarFieldEnum | RegisteredPlayerScalarFieldEnum[]
  }

  /**
   * RegisteredPlayer findMany
   */
  export type RegisteredPlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredPlayer
     */
    select?: RegisteredPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredPlayer
     */
    omit?: RegisteredPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredPlayerInclude<ExtArgs> | null
    /**
     * Filter, which RegisteredPlayers to fetch.
     */
    where?: RegisteredPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegisteredPlayers to fetch.
     */
    orderBy?: RegisteredPlayerOrderByWithRelationInput | RegisteredPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegisteredPlayers.
     */
    cursor?: RegisteredPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegisteredPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegisteredPlayers.
     */
    skip?: number
    distinct?: RegisteredPlayerScalarFieldEnum | RegisteredPlayerScalarFieldEnum[]
  }

  /**
   * RegisteredPlayer create
   */
  export type RegisteredPlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredPlayer
     */
    select?: RegisteredPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredPlayer
     */
    omit?: RegisteredPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredPlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a RegisteredPlayer.
     */
    data: XOR<RegisteredPlayerCreateInput, RegisteredPlayerUncheckedCreateInput>
  }

  /**
   * RegisteredPlayer createMany
   */
  export type RegisteredPlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegisteredPlayers.
     */
    data: RegisteredPlayerCreateManyInput | RegisteredPlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegisteredPlayer createManyAndReturn
   */
  export type RegisteredPlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredPlayer
     */
    select?: RegisteredPlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredPlayer
     */
    omit?: RegisteredPlayerOmit<ExtArgs> | null
    /**
     * The data used to create many RegisteredPlayers.
     */
    data: RegisteredPlayerCreateManyInput | RegisteredPlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegisteredPlayer update
   */
  export type RegisteredPlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredPlayer
     */
    select?: RegisteredPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredPlayer
     */
    omit?: RegisteredPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredPlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a RegisteredPlayer.
     */
    data: XOR<RegisteredPlayerUpdateInput, RegisteredPlayerUncheckedUpdateInput>
    /**
     * Choose, which RegisteredPlayer to update.
     */
    where: RegisteredPlayerWhereUniqueInput
  }

  /**
   * RegisteredPlayer updateMany
   */
  export type RegisteredPlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegisteredPlayers.
     */
    data: XOR<RegisteredPlayerUpdateManyMutationInput, RegisteredPlayerUncheckedUpdateManyInput>
    /**
     * Filter which RegisteredPlayers to update
     */
    where?: RegisteredPlayerWhereInput
    /**
     * Limit how many RegisteredPlayers to update.
     */
    limit?: number
  }

  /**
   * RegisteredPlayer updateManyAndReturn
   */
  export type RegisteredPlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredPlayer
     */
    select?: RegisteredPlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredPlayer
     */
    omit?: RegisteredPlayerOmit<ExtArgs> | null
    /**
     * The data used to update RegisteredPlayers.
     */
    data: XOR<RegisteredPlayerUpdateManyMutationInput, RegisteredPlayerUncheckedUpdateManyInput>
    /**
     * Filter which RegisteredPlayers to update
     */
    where?: RegisteredPlayerWhereInput
    /**
     * Limit how many RegisteredPlayers to update.
     */
    limit?: number
  }

  /**
   * RegisteredPlayer upsert
   */
  export type RegisteredPlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredPlayer
     */
    select?: RegisteredPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredPlayer
     */
    omit?: RegisteredPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredPlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the RegisteredPlayer to update in case it exists.
     */
    where: RegisteredPlayerWhereUniqueInput
    /**
     * In case the RegisteredPlayer found by the `where` argument doesn't exist, create a new RegisteredPlayer with this data.
     */
    create: XOR<RegisteredPlayerCreateInput, RegisteredPlayerUncheckedCreateInput>
    /**
     * In case the RegisteredPlayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegisteredPlayerUpdateInput, RegisteredPlayerUncheckedUpdateInput>
  }

  /**
   * RegisteredPlayer delete
   */
  export type RegisteredPlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredPlayer
     */
    select?: RegisteredPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredPlayer
     */
    omit?: RegisteredPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredPlayerInclude<ExtArgs> | null
    /**
     * Filter which RegisteredPlayer to delete.
     */
    where: RegisteredPlayerWhereUniqueInput
  }

  /**
   * RegisteredPlayer deleteMany
   */
  export type RegisteredPlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegisteredPlayers to delete
     */
    where?: RegisteredPlayerWhereInput
    /**
     * Limit how many RegisteredPlayers to delete.
     */
    limit?: number
  }

  /**
   * RegisteredPlayer.Payment
   */
  export type RegisteredPlayer$PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * RegisteredPlayer without action
   */
  export type RegisteredPlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredPlayer
     */
    select?: RegisteredPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredPlayer
     */
    omit?: RegisteredPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredPlayerInclude<ExtArgs> | null
  }


  /**
   * Model TournamentPlayer
   */

  export type AggregateTournamentPlayer = {
    _count: TournamentPlayerCountAggregateOutputType | null
    _min: TournamentPlayerMinAggregateOutputType | null
    _max: TournamentPlayerMaxAggregateOutputType | null
  }

  export type TournamentPlayerMinAggregateOutputType = {
    id: string | null
    player1Name: string | null
    player1Gender: $Enums.Gender | null
    player1Email: string | null
    player1Phone: string | null
    player1DateOfBirth: string | null
    player1DobProofLink: string | null
    player2Name: string | null
    player2Gender: $Enums.Gender | null
    player2Email: string | null
    player2Phone: string | null
    player2DateOfBirth: string | null
    player2DobProofLink: string | null
    category: $Enums.Category | null
    ageCategory: $Enums.AgeCategory | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentPlayerMaxAggregateOutputType = {
    id: string | null
    player1Name: string | null
    player1Gender: $Enums.Gender | null
    player1Email: string | null
    player1Phone: string | null
    player1DateOfBirth: string | null
    player1DobProofLink: string | null
    player2Name: string | null
    player2Gender: $Enums.Gender | null
    player2Email: string | null
    player2Phone: string | null
    player2DateOfBirth: string | null
    player2DobProofLink: string | null
    category: $Enums.Category | null
    ageCategory: $Enums.AgeCategory | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentPlayerCountAggregateOutputType = {
    id: number
    player1Name: number
    player1Gender: number
    player1Email: number
    player1Phone: number
    player1DateOfBirth: number
    player1DobProofLink: number
    player2Name: number
    player2Gender: number
    player2Email: number
    player2Phone: number
    player2DateOfBirth: number
    player2DobProofLink: number
    category: number
    ageCategory: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TournamentPlayerMinAggregateInputType = {
    id?: true
    player1Name?: true
    player1Gender?: true
    player1Email?: true
    player1Phone?: true
    player1DateOfBirth?: true
    player1DobProofLink?: true
    player2Name?: true
    player2Gender?: true
    player2Email?: true
    player2Phone?: true
    player2DateOfBirth?: true
    player2DobProofLink?: true
    category?: true
    ageCategory?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentPlayerMaxAggregateInputType = {
    id?: true
    player1Name?: true
    player1Gender?: true
    player1Email?: true
    player1Phone?: true
    player1DateOfBirth?: true
    player1DobProofLink?: true
    player2Name?: true
    player2Gender?: true
    player2Email?: true
    player2Phone?: true
    player2DateOfBirth?: true
    player2DobProofLink?: true
    category?: true
    ageCategory?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentPlayerCountAggregateInputType = {
    id?: true
    player1Name?: true
    player1Gender?: true
    player1Email?: true
    player1Phone?: true
    player1DateOfBirth?: true
    player1DobProofLink?: true
    player2Name?: true
    player2Gender?: true
    player2Email?: true
    player2Phone?: true
    player2DateOfBirth?: true
    player2DobProofLink?: true
    category?: true
    ageCategory?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TournamentPlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentPlayer to aggregate.
     */
    where?: TournamentPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentPlayers to fetch.
     */
    orderBy?: TournamentPlayerOrderByWithRelationInput | TournamentPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TournamentPlayers
    **/
    _count?: true | TournamentPlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentPlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentPlayerMaxAggregateInputType
  }

  export type GetTournamentPlayerAggregateType<T extends TournamentPlayerAggregateArgs> = {
        [P in keyof T & keyof AggregateTournamentPlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournamentPlayer[P]>
      : GetScalarType<T[P], AggregateTournamentPlayer[P]>
  }




  export type TournamentPlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentPlayerWhereInput
    orderBy?: TournamentPlayerOrderByWithAggregationInput | TournamentPlayerOrderByWithAggregationInput[]
    by: TournamentPlayerScalarFieldEnum[] | TournamentPlayerScalarFieldEnum
    having?: TournamentPlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentPlayerCountAggregateInputType | true
    _min?: TournamentPlayerMinAggregateInputType
    _max?: TournamentPlayerMaxAggregateInputType
  }

  export type TournamentPlayerGroupByOutputType = {
    id: string
    player1Name: string
    player1Gender: $Enums.Gender
    player1Email: string
    player1Phone: string
    player1DateOfBirth: string
    player1DobProofLink: string
    player2Name: string | null
    player2Gender: $Enums.Gender | null
    player2Email: string | null
    player2Phone: string | null
    player2DateOfBirth: string | null
    player2DobProofLink: string | null
    category: $Enums.Category
    ageCategory: $Enums.AgeCategory
    createdAt: Date
    updatedAt: Date
    _count: TournamentPlayerCountAggregateOutputType | null
    _min: TournamentPlayerMinAggregateOutputType | null
    _max: TournamentPlayerMaxAggregateOutputType | null
  }

  type GetTournamentPlayerGroupByPayload<T extends TournamentPlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentPlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentPlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentPlayerGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentPlayerGroupByOutputType[P]>
        }
      >
    >


  export type TournamentPlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1Name?: boolean
    player1Gender?: boolean
    player1Email?: boolean
    player1Phone?: boolean
    player1DateOfBirth?: boolean
    player1DobProofLink?: boolean
    player2Name?: boolean
    player2Gender?: boolean
    player2Email?: boolean
    player2Phone?: boolean
    player2DateOfBirth?: boolean
    player2DobProofLink?: boolean
    category?: boolean
    ageCategory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Payment?: boolean | TournamentPlayer$PaymentArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentPlayer"]>

  export type TournamentPlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1Name?: boolean
    player1Gender?: boolean
    player1Email?: boolean
    player1Phone?: boolean
    player1DateOfBirth?: boolean
    player1DobProofLink?: boolean
    player2Name?: boolean
    player2Gender?: boolean
    player2Email?: boolean
    player2Phone?: boolean
    player2DateOfBirth?: boolean
    player2DobProofLink?: boolean
    category?: boolean
    ageCategory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tournamentPlayer"]>

  export type TournamentPlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1Name?: boolean
    player1Gender?: boolean
    player1Email?: boolean
    player1Phone?: boolean
    player1DateOfBirth?: boolean
    player1DobProofLink?: boolean
    player2Name?: boolean
    player2Gender?: boolean
    player2Email?: boolean
    player2Phone?: boolean
    player2DateOfBirth?: boolean
    player2DobProofLink?: boolean
    category?: boolean
    ageCategory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tournamentPlayer"]>

  export type TournamentPlayerSelectScalar = {
    id?: boolean
    player1Name?: boolean
    player1Gender?: boolean
    player1Email?: boolean
    player1Phone?: boolean
    player1DateOfBirth?: boolean
    player1DobProofLink?: boolean
    player2Name?: boolean
    player2Gender?: boolean
    player2Email?: boolean
    player2Phone?: boolean
    player2DateOfBirth?: boolean
    player2DobProofLink?: boolean
    category?: boolean
    ageCategory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TournamentPlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "player1Name" | "player1Gender" | "player1Email" | "player1Phone" | "player1DateOfBirth" | "player1DobProofLink" | "player2Name" | "player2Gender" | "player2Email" | "player2Phone" | "player2DateOfBirth" | "player2DobProofLink" | "category" | "ageCategory" | "createdAt" | "updatedAt", ExtArgs["result"]["tournamentPlayer"]>
  export type TournamentPlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Payment?: boolean | TournamentPlayer$PaymentArgs<ExtArgs>
  }
  export type TournamentPlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TournamentPlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TournamentPlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TournamentPlayer"
    objects: {
      Payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      player1Name: string
      player1Gender: $Enums.Gender
      player1Email: string
      player1Phone: string
      player1DateOfBirth: string
      player1DobProofLink: string
      player2Name: string | null
      player2Gender: $Enums.Gender | null
      player2Email: string | null
      player2Phone: string | null
      player2DateOfBirth: string | null
      player2DobProofLink: string | null
      category: $Enums.Category
      ageCategory: $Enums.AgeCategory
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tournamentPlayer"]>
    composites: {}
  }

  type TournamentPlayerGetPayload<S extends boolean | null | undefined | TournamentPlayerDefaultArgs> = $Result.GetResult<Prisma.$TournamentPlayerPayload, S>

  type TournamentPlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TournamentPlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TournamentPlayerCountAggregateInputType | true
    }

  export interface TournamentPlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TournamentPlayer'], meta: { name: 'TournamentPlayer' } }
    /**
     * Find zero or one TournamentPlayer that matches the filter.
     * @param {TournamentPlayerFindUniqueArgs} args - Arguments to find a TournamentPlayer
     * @example
     * // Get one TournamentPlayer
     * const tournamentPlayer = await prisma.tournamentPlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentPlayerFindUniqueArgs>(args: SelectSubset<T, TournamentPlayerFindUniqueArgs<ExtArgs>>): Prisma__TournamentPlayerClient<$Result.GetResult<Prisma.$TournamentPlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TournamentPlayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentPlayerFindUniqueOrThrowArgs} args - Arguments to find a TournamentPlayer
     * @example
     * // Get one TournamentPlayer
     * const tournamentPlayer = await prisma.tournamentPlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentPlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, TournamentPlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TournamentPlayerClient<$Result.GetResult<Prisma.$TournamentPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TournamentPlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentPlayerFindFirstArgs} args - Arguments to find a TournamentPlayer
     * @example
     * // Get one TournamentPlayer
     * const tournamentPlayer = await prisma.tournamentPlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentPlayerFindFirstArgs>(args?: SelectSubset<T, TournamentPlayerFindFirstArgs<ExtArgs>>): Prisma__TournamentPlayerClient<$Result.GetResult<Prisma.$TournamentPlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TournamentPlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentPlayerFindFirstOrThrowArgs} args - Arguments to find a TournamentPlayer
     * @example
     * // Get one TournamentPlayer
     * const tournamentPlayer = await prisma.tournamentPlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentPlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, TournamentPlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TournamentPlayerClient<$Result.GetResult<Prisma.$TournamentPlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TournamentPlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentPlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TournamentPlayers
     * const tournamentPlayers = await prisma.tournamentPlayer.findMany()
     * 
     * // Get first 10 TournamentPlayers
     * const tournamentPlayers = await prisma.tournamentPlayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentPlayerWithIdOnly = await prisma.tournamentPlayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TournamentPlayerFindManyArgs>(args?: SelectSubset<T, TournamentPlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TournamentPlayer.
     * @param {TournamentPlayerCreateArgs} args - Arguments to create a TournamentPlayer.
     * @example
     * // Create one TournamentPlayer
     * const TournamentPlayer = await prisma.tournamentPlayer.create({
     *   data: {
     *     // ... data to create a TournamentPlayer
     *   }
     * })
     * 
     */
    create<T extends TournamentPlayerCreateArgs>(args: SelectSubset<T, TournamentPlayerCreateArgs<ExtArgs>>): Prisma__TournamentPlayerClient<$Result.GetResult<Prisma.$TournamentPlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TournamentPlayers.
     * @param {TournamentPlayerCreateManyArgs} args - Arguments to create many TournamentPlayers.
     * @example
     * // Create many TournamentPlayers
     * const tournamentPlayer = await prisma.tournamentPlayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TournamentPlayerCreateManyArgs>(args?: SelectSubset<T, TournamentPlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TournamentPlayers and returns the data saved in the database.
     * @param {TournamentPlayerCreateManyAndReturnArgs} args - Arguments to create many TournamentPlayers.
     * @example
     * // Create many TournamentPlayers
     * const tournamentPlayer = await prisma.tournamentPlayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TournamentPlayers and only return the `id`
     * const tournamentPlayerWithIdOnly = await prisma.tournamentPlayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TournamentPlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, TournamentPlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TournamentPlayer.
     * @param {TournamentPlayerDeleteArgs} args - Arguments to delete one TournamentPlayer.
     * @example
     * // Delete one TournamentPlayer
     * const TournamentPlayer = await prisma.tournamentPlayer.delete({
     *   where: {
     *     // ... filter to delete one TournamentPlayer
     *   }
     * })
     * 
     */
    delete<T extends TournamentPlayerDeleteArgs>(args: SelectSubset<T, TournamentPlayerDeleteArgs<ExtArgs>>): Prisma__TournamentPlayerClient<$Result.GetResult<Prisma.$TournamentPlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TournamentPlayer.
     * @param {TournamentPlayerUpdateArgs} args - Arguments to update one TournamentPlayer.
     * @example
     * // Update one TournamentPlayer
     * const tournamentPlayer = await prisma.tournamentPlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TournamentPlayerUpdateArgs>(args: SelectSubset<T, TournamentPlayerUpdateArgs<ExtArgs>>): Prisma__TournamentPlayerClient<$Result.GetResult<Prisma.$TournamentPlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TournamentPlayers.
     * @param {TournamentPlayerDeleteManyArgs} args - Arguments to filter TournamentPlayers to delete.
     * @example
     * // Delete a few TournamentPlayers
     * const { count } = await prisma.tournamentPlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TournamentPlayerDeleteManyArgs>(args?: SelectSubset<T, TournamentPlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TournamentPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentPlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TournamentPlayers
     * const tournamentPlayer = await prisma.tournamentPlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TournamentPlayerUpdateManyArgs>(args: SelectSubset<T, TournamentPlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TournamentPlayers and returns the data updated in the database.
     * @param {TournamentPlayerUpdateManyAndReturnArgs} args - Arguments to update many TournamentPlayers.
     * @example
     * // Update many TournamentPlayers
     * const tournamentPlayer = await prisma.tournamentPlayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TournamentPlayers and only return the `id`
     * const tournamentPlayerWithIdOnly = await prisma.tournamentPlayer.updateManyAndReturn({
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
    updateManyAndReturn<T extends TournamentPlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, TournamentPlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TournamentPlayer.
     * @param {TournamentPlayerUpsertArgs} args - Arguments to update or create a TournamentPlayer.
     * @example
     * // Update or create a TournamentPlayer
     * const tournamentPlayer = await prisma.tournamentPlayer.upsert({
     *   create: {
     *     // ... data to create a TournamentPlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TournamentPlayer we want to update
     *   }
     * })
     */
    upsert<T extends TournamentPlayerUpsertArgs>(args: SelectSubset<T, TournamentPlayerUpsertArgs<ExtArgs>>): Prisma__TournamentPlayerClient<$Result.GetResult<Prisma.$TournamentPlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TournamentPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentPlayerCountArgs} args - Arguments to filter TournamentPlayers to count.
     * @example
     * // Count the number of TournamentPlayers
     * const count = await prisma.tournamentPlayer.count({
     *   where: {
     *     // ... the filter for the TournamentPlayers we want to count
     *   }
     * })
    **/
    count<T extends TournamentPlayerCountArgs>(
      args?: Subset<T, TournamentPlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentPlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TournamentPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentPlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TournamentPlayerAggregateArgs>(args: Subset<T, TournamentPlayerAggregateArgs>): Prisma.PrismaPromise<GetTournamentPlayerAggregateType<T>>

    /**
     * Group by TournamentPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentPlayerGroupByArgs} args - Group by arguments.
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
      T extends TournamentPlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentPlayerGroupByArgs['orderBy'] }
        : { orderBy?: TournamentPlayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TournamentPlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TournamentPlayer model
   */
  readonly fields: TournamentPlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TournamentPlayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentPlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Payment<T extends TournamentPlayer$PaymentArgs<ExtArgs> = {}>(args?: Subset<T, TournamentPlayer$PaymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TournamentPlayer model
   */
  interface TournamentPlayerFieldRefs {
    readonly id: FieldRef<"TournamentPlayer", 'String'>
    readonly player1Name: FieldRef<"TournamentPlayer", 'String'>
    readonly player1Gender: FieldRef<"TournamentPlayer", 'Gender'>
    readonly player1Email: FieldRef<"TournamentPlayer", 'String'>
    readonly player1Phone: FieldRef<"TournamentPlayer", 'String'>
    readonly player1DateOfBirth: FieldRef<"TournamentPlayer", 'String'>
    readonly player1DobProofLink: FieldRef<"TournamentPlayer", 'String'>
    readonly player2Name: FieldRef<"TournamentPlayer", 'String'>
    readonly player2Gender: FieldRef<"TournamentPlayer", 'Gender'>
    readonly player2Email: FieldRef<"TournamentPlayer", 'String'>
    readonly player2Phone: FieldRef<"TournamentPlayer", 'String'>
    readonly player2DateOfBirth: FieldRef<"TournamentPlayer", 'String'>
    readonly player2DobProofLink: FieldRef<"TournamentPlayer", 'String'>
    readonly category: FieldRef<"TournamentPlayer", 'Category'>
    readonly ageCategory: FieldRef<"TournamentPlayer", 'AgeCategory'>
    readonly createdAt: FieldRef<"TournamentPlayer", 'DateTime'>
    readonly updatedAt: FieldRef<"TournamentPlayer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TournamentPlayer findUnique
   */
  export type TournamentPlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayer
     */
    select?: TournamentPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPlayer
     */
    omit?: TournamentPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPlayerInclude<ExtArgs> | null
    /**
     * Filter, which TournamentPlayer to fetch.
     */
    where: TournamentPlayerWhereUniqueInput
  }

  /**
   * TournamentPlayer findUniqueOrThrow
   */
  export type TournamentPlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayer
     */
    select?: TournamentPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPlayer
     */
    omit?: TournamentPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPlayerInclude<ExtArgs> | null
    /**
     * Filter, which TournamentPlayer to fetch.
     */
    where: TournamentPlayerWhereUniqueInput
  }

  /**
   * TournamentPlayer findFirst
   */
  export type TournamentPlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayer
     */
    select?: TournamentPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPlayer
     */
    omit?: TournamentPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPlayerInclude<ExtArgs> | null
    /**
     * Filter, which TournamentPlayer to fetch.
     */
    where?: TournamentPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentPlayers to fetch.
     */
    orderBy?: TournamentPlayerOrderByWithRelationInput | TournamentPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TournamentPlayers.
     */
    cursor?: TournamentPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TournamentPlayers.
     */
    distinct?: TournamentPlayerScalarFieldEnum | TournamentPlayerScalarFieldEnum[]
  }

  /**
   * TournamentPlayer findFirstOrThrow
   */
  export type TournamentPlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayer
     */
    select?: TournamentPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPlayer
     */
    omit?: TournamentPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPlayerInclude<ExtArgs> | null
    /**
     * Filter, which TournamentPlayer to fetch.
     */
    where?: TournamentPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentPlayers to fetch.
     */
    orderBy?: TournamentPlayerOrderByWithRelationInput | TournamentPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TournamentPlayers.
     */
    cursor?: TournamentPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TournamentPlayers.
     */
    distinct?: TournamentPlayerScalarFieldEnum | TournamentPlayerScalarFieldEnum[]
  }

  /**
   * TournamentPlayer findMany
   */
  export type TournamentPlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayer
     */
    select?: TournamentPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPlayer
     */
    omit?: TournamentPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPlayerInclude<ExtArgs> | null
    /**
     * Filter, which TournamentPlayers to fetch.
     */
    where?: TournamentPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentPlayers to fetch.
     */
    orderBy?: TournamentPlayerOrderByWithRelationInput | TournamentPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TournamentPlayers.
     */
    cursor?: TournamentPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentPlayers.
     */
    skip?: number
    distinct?: TournamentPlayerScalarFieldEnum | TournamentPlayerScalarFieldEnum[]
  }

  /**
   * TournamentPlayer create
   */
  export type TournamentPlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayer
     */
    select?: TournamentPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPlayer
     */
    omit?: TournamentPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a TournamentPlayer.
     */
    data: XOR<TournamentPlayerCreateInput, TournamentPlayerUncheckedCreateInput>
  }

  /**
   * TournamentPlayer createMany
   */
  export type TournamentPlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TournamentPlayers.
     */
    data: TournamentPlayerCreateManyInput | TournamentPlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TournamentPlayer createManyAndReturn
   */
  export type TournamentPlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayer
     */
    select?: TournamentPlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPlayer
     */
    omit?: TournamentPlayerOmit<ExtArgs> | null
    /**
     * The data used to create many TournamentPlayers.
     */
    data: TournamentPlayerCreateManyInput | TournamentPlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TournamentPlayer update
   */
  export type TournamentPlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayer
     */
    select?: TournamentPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPlayer
     */
    omit?: TournamentPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a TournamentPlayer.
     */
    data: XOR<TournamentPlayerUpdateInput, TournamentPlayerUncheckedUpdateInput>
    /**
     * Choose, which TournamentPlayer to update.
     */
    where: TournamentPlayerWhereUniqueInput
  }

  /**
   * TournamentPlayer updateMany
   */
  export type TournamentPlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TournamentPlayers.
     */
    data: XOR<TournamentPlayerUpdateManyMutationInput, TournamentPlayerUncheckedUpdateManyInput>
    /**
     * Filter which TournamentPlayers to update
     */
    where?: TournamentPlayerWhereInput
    /**
     * Limit how many TournamentPlayers to update.
     */
    limit?: number
  }

  /**
   * TournamentPlayer updateManyAndReturn
   */
  export type TournamentPlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayer
     */
    select?: TournamentPlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPlayer
     */
    omit?: TournamentPlayerOmit<ExtArgs> | null
    /**
     * The data used to update TournamentPlayers.
     */
    data: XOR<TournamentPlayerUpdateManyMutationInput, TournamentPlayerUncheckedUpdateManyInput>
    /**
     * Filter which TournamentPlayers to update
     */
    where?: TournamentPlayerWhereInput
    /**
     * Limit how many TournamentPlayers to update.
     */
    limit?: number
  }

  /**
   * TournamentPlayer upsert
   */
  export type TournamentPlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayer
     */
    select?: TournamentPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPlayer
     */
    omit?: TournamentPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the TournamentPlayer to update in case it exists.
     */
    where: TournamentPlayerWhereUniqueInput
    /**
     * In case the TournamentPlayer found by the `where` argument doesn't exist, create a new TournamentPlayer with this data.
     */
    create: XOR<TournamentPlayerCreateInput, TournamentPlayerUncheckedCreateInput>
    /**
     * In case the TournamentPlayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentPlayerUpdateInput, TournamentPlayerUncheckedUpdateInput>
  }

  /**
   * TournamentPlayer delete
   */
  export type TournamentPlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayer
     */
    select?: TournamentPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPlayer
     */
    omit?: TournamentPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPlayerInclude<ExtArgs> | null
    /**
     * Filter which TournamentPlayer to delete.
     */
    where: TournamentPlayerWhereUniqueInput
  }

  /**
   * TournamentPlayer deleteMany
   */
  export type TournamentPlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentPlayers to delete
     */
    where?: TournamentPlayerWhereInput
    /**
     * Limit how many TournamentPlayers to delete.
     */
    limit?: number
  }

  /**
   * TournamentPlayer.Payment
   */
  export type TournamentPlayer$PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * TournamentPlayer without action
   */
  export type TournamentPlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentPlayer
     */
    select?: TournamentPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentPlayer
     */
    omit?: TournamentPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentPlayerInclude<ExtArgs> | null
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


  export const PaymentScalarFieldEnum: {
    id: 'id',
    razorpayPaymentId: 'razorpayPaymentId',
    razorpayOrderId: 'razorpayOrderId',
    razorpaySignature: 'razorpaySignature',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    paymentMethod: 'paymentMethod',
    description: 'description',
    playerId: 'playerId',
    tournamentPlayerId: 'tournamentPlayerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const RegisteredPlayerScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    name: 'name',
    gender: 'gender',
    dateOfBirth: 'dateOfBirth',
    placeOfBirth: 'placeOfBirth',
    identificationMarks: 'identificationMarks',
    imageLink: 'imageLink',
    dobProofLink: 'dobProofLink',
    communicationAddress: 'communicationAddress',
    pinCode: 'pinCode',
    email: 'email',
    contactNumber: 'contactNumber',
    organisationType: 'organisationType',
    organisationName: 'organisationName',
    organisationEmail: 'organisationEmail',
    organisationContact: 'organisationContact',
    organisationAddress: 'organisationAddress',
    nameOfContact: 'nameOfContact',
    fatherName: 'fatherName',
    fatherContact: 'fatherContact',
    motherName: 'motherName',
    motherContact: 'motherContact',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RegisteredPlayerScalarFieldEnum = (typeof RegisteredPlayerScalarFieldEnum)[keyof typeof RegisteredPlayerScalarFieldEnum]


  export const TournamentPlayerScalarFieldEnum: {
    id: 'id',
    player1Name: 'player1Name',
    player1Gender: 'player1Gender',
    player1Email: 'player1Email',
    player1Phone: 'player1Phone',
    player1DateOfBirth: 'player1DateOfBirth',
    player1DobProofLink: 'player1DobProofLink',
    player2Name: 'player2Name',
    player2Gender: 'player2Gender',
    player2Email: 'player2Email',
    player2Phone: 'player2Phone',
    player2DateOfBirth: 'player2DateOfBirth',
    player2DobProofLink: 'player2DobProofLink',
    category: 'category',
    ageCategory: 'ageCategory',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TournamentPlayerScalarFieldEnum = (typeof TournamentPlayerScalarFieldEnum)[keyof typeof TournamentPlayerScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'OrganisationType'
   */
  export type EnumOrganisationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrganisationType'>
    


  /**
   * Reference to a field of type 'OrganisationType[]'
   */
  export type ListEnumOrganisationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrganisationType[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'AgeCategory'
   */
  export type EnumAgeCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgeCategory'>
    


  /**
   * Reference to a field of type 'AgeCategory[]'
   */
  export type ListEnumAgeCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgeCategory[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    razorpayPaymentId?: StringNullableFilter<"Payment"> | string | null
    razorpayOrderId?: StringNullableFilter<"Payment"> | string | null
    razorpaySignature?: StringNullableFilter<"Payment"> | string | null
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paymentMethod?: StringNullableFilter<"Payment"> | string | null
    description?: StringNullableFilter<"Payment"> | string | null
    playerId?: StringNullableFilter<"Payment"> | string | null
    tournamentPlayerId?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    RegisteredPlayer?: XOR<RegisteredPlayerNullableScalarRelationFilter, RegisteredPlayerWhereInput> | null
    TournamentPlayer?: XOR<TournamentPlayerNullableScalarRelationFilter, TournamentPlayerWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    playerId?: SortOrderInput | SortOrder
    tournamentPlayerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    RegisteredPlayer?: RegisteredPlayerOrderByWithRelationInput
    TournamentPlayer?: TournamentPlayerOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    razorpayPaymentId?: string
    razorpayOrderId?: string
    playerId?: string
    tournamentPlayerId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    razorpaySignature?: StringNullableFilter<"Payment"> | string | null
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paymentMethod?: StringNullableFilter<"Payment"> | string | null
    description?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    RegisteredPlayer?: XOR<RegisteredPlayerNullableScalarRelationFilter, RegisteredPlayerWhereInput> | null
    TournamentPlayer?: XOR<TournamentPlayerNullableScalarRelationFilter, TournamentPlayerWhereInput> | null
  }, "id" | "razorpayPaymentId" | "razorpayOrderId" | "playerId" | "tournamentPlayerId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    playerId?: SortOrderInput | SortOrder
    tournamentPlayerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    razorpayPaymentId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    razorpayOrderId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    razorpaySignature?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    amount?: IntWithAggregatesFilter<"Payment"> | number
    currency?: StringWithAggregatesFilter<"Payment"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    paymentMethod?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    description?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    playerId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    tournamentPlayerId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type RegisteredPlayerWhereInput = {
    AND?: RegisteredPlayerWhereInput | RegisteredPlayerWhereInput[]
    OR?: RegisteredPlayerWhereInput[]
    NOT?: RegisteredPlayerWhereInput | RegisteredPlayerWhereInput[]
    id?: StringFilter<"RegisteredPlayer"> | string
    playerId?: StringFilter<"RegisteredPlayer"> | string
    name?: StringFilter<"RegisteredPlayer"> | string
    gender?: EnumGenderFilter<"RegisteredPlayer"> | $Enums.Gender
    dateOfBirth?: StringFilter<"RegisteredPlayer"> | string
    placeOfBirth?: StringFilter<"RegisteredPlayer"> | string
    identificationMarks?: StringFilter<"RegisteredPlayer"> | string
    imageLink?: StringFilter<"RegisteredPlayer"> | string
    dobProofLink?: StringFilter<"RegisteredPlayer"> | string
    communicationAddress?: StringFilter<"RegisteredPlayer"> | string
    pinCode?: StringFilter<"RegisteredPlayer"> | string
    email?: StringFilter<"RegisteredPlayer"> | string
    contactNumber?: StringFilter<"RegisteredPlayer"> | string
    organisationType?: EnumOrganisationTypeFilter<"RegisteredPlayer"> | $Enums.OrganisationType
    organisationName?: StringFilter<"RegisteredPlayer"> | string
    organisationEmail?: StringFilter<"RegisteredPlayer"> | string
    organisationContact?: StringFilter<"RegisteredPlayer"> | string
    organisationAddress?: StringFilter<"RegisteredPlayer"> | string
    nameOfContact?: StringFilter<"RegisteredPlayer"> | string
    fatherName?: StringFilter<"RegisteredPlayer"> | string
    fatherContact?: StringFilter<"RegisteredPlayer"> | string
    motherName?: StringFilter<"RegisteredPlayer"> | string
    motherContact?: StringFilter<"RegisteredPlayer"> | string
    createdAt?: DateTimeFilter<"RegisteredPlayer"> | Date | string
    updatedAt?: DateTimeFilter<"RegisteredPlayer"> | Date | string
    Payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type RegisteredPlayerOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    placeOfBirth?: SortOrder
    identificationMarks?: SortOrder
    imageLink?: SortOrder
    dobProofLink?: SortOrder
    communicationAddress?: SortOrder
    pinCode?: SortOrder
    email?: SortOrder
    contactNumber?: SortOrder
    organisationType?: SortOrder
    organisationName?: SortOrder
    organisationEmail?: SortOrder
    organisationContact?: SortOrder
    organisationAddress?: SortOrder
    nameOfContact?: SortOrder
    fatherName?: SortOrder
    fatherContact?: SortOrder
    motherName?: SortOrder
    motherContact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Payment?: PaymentOrderByWithRelationInput
  }

  export type RegisteredPlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    playerId?: string
    email?: string
    AND?: RegisteredPlayerWhereInput | RegisteredPlayerWhereInput[]
    OR?: RegisteredPlayerWhereInput[]
    NOT?: RegisteredPlayerWhereInput | RegisteredPlayerWhereInput[]
    name?: StringFilter<"RegisteredPlayer"> | string
    gender?: EnumGenderFilter<"RegisteredPlayer"> | $Enums.Gender
    dateOfBirth?: StringFilter<"RegisteredPlayer"> | string
    placeOfBirth?: StringFilter<"RegisteredPlayer"> | string
    identificationMarks?: StringFilter<"RegisteredPlayer"> | string
    imageLink?: StringFilter<"RegisteredPlayer"> | string
    dobProofLink?: StringFilter<"RegisteredPlayer"> | string
    communicationAddress?: StringFilter<"RegisteredPlayer"> | string
    pinCode?: StringFilter<"RegisteredPlayer"> | string
    contactNumber?: StringFilter<"RegisteredPlayer"> | string
    organisationType?: EnumOrganisationTypeFilter<"RegisteredPlayer"> | $Enums.OrganisationType
    organisationName?: StringFilter<"RegisteredPlayer"> | string
    organisationEmail?: StringFilter<"RegisteredPlayer"> | string
    organisationContact?: StringFilter<"RegisteredPlayer"> | string
    organisationAddress?: StringFilter<"RegisteredPlayer"> | string
    nameOfContact?: StringFilter<"RegisteredPlayer"> | string
    fatherName?: StringFilter<"RegisteredPlayer"> | string
    fatherContact?: StringFilter<"RegisteredPlayer"> | string
    motherName?: StringFilter<"RegisteredPlayer"> | string
    motherContact?: StringFilter<"RegisteredPlayer"> | string
    createdAt?: DateTimeFilter<"RegisteredPlayer"> | Date | string
    updatedAt?: DateTimeFilter<"RegisteredPlayer"> | Date | string
    Payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "id" | "playerId" | "email">

  export type RegisteredPlayerOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    placeOfBirth?: SortOrder
    identificationMarks?: SortOrder
    imageLink?: SortOrder
    dobProofLink?: SortOrder
    communicationAddress?: SortOrder
    pinCode?: SortOrder
    email?: SortOrder
    contactNumber?: SortOrder
    organisationType?: SortOrder
    organisationName?: SortOrder
    organisationEmail?: SortOrder
    organisationContact?: SortOrder
    organisationAddress?: SortOrder
    nameOfContact?: SortOrder
    fatherName?: SortOrder
    fatherContact?: SortOrder
    motherName?: SortOrder
    motherContact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RegisteredPlayerCountOrderByAggregateInput
    _max?: RegisteredPlayerMaxOrderByAggregateInput
    _min?: RegisteredPlayerMinOrderByAggregateInput
  }

  export type RegisteredPlayerScalarWhereWithAggregatesInput = {
    AND?: RegisteredPlayerScalarWhereWithAggregatesInput | RegisteredPlayerScalarWhereWithAggregatesInput[]
    OR?: RegisteredPlayerScalarWhereWithAggregatesInput[]
    NOT?: RegisteredPlayerScalarWhereWithAggregatesInput | RegisteredPlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegisteredPlayer"> | string
    playerId?: StringWithAggregatesFilter<"RegisteredPlayer"> | string
    name?: StringWithAggregatesFilter<"RegisteredPlayer"> | string
    gender?: EnumGenderWithAggregatesFilter<"RegisteredPlayer"> | $Enums.Gender
    dateOfBirth?: StringWithAggregatesFilter<"RegisteredPlayer"> | string
    placeOfBirth?: StringWithAggregatesFilter<"RegisteredPlayer"> | string
    identificationMarks?: StringWithAggregatesFilter<"RegisteredPlayer"> | string
    imageLink?: StringWithAggregatesFilter<"RegisteredPlayer"> | string
    dobProofLink?: StringWithAggregatesFilter<"RegisteredPlayer"> | string
    communicationAddress?: StringWithAggregatesFilter<"RegisteredPlayer"> | string
    pinCode?: StringWithAggregatesFilter<"RegisteredPlayer"> | string
    email?: StringWithAggregatesFilter<"RegisteredPlayer"> | string
    contactNumber?: StringWithAggregatesFilter<"RegisteredPlayer"> | string
    organisationType?: EnumOrganisationTypeWithAggregatesFilter<"RegisteredPlayer"> | $Enums.OrganisationType
    organisationName?: StringWithAggregatesFilter<"RegisteredPlayer"> | string
    organisationEmail?: StringWithAggregatesFilter<"RegisteredPlayer"> | string
    organisationContact?: StringWithAggregatesFilter<"RegisteredPlayer"> | string
    organisationAddress?: StringWithAggregatesFilter<"RegisteredPlayer"> | string
    nameOfContact?: StringWithAggregatesFilter<"RegisteredPlayer"> | string
    fatherName?: StringWithAggregatesFilter<"RegisteredPlayer"> | string
    fatherContact?: StringWithAggregatesFilter<"RegisteredPlayer"> | string
    motherName?: StringWithAggregatesFilter<"RegisteredPlayer"> | string
    motherContact?: StringWithAggregatesFilter<"RegisteredPlayer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RegisteredPlayer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RegisteredPlayer"> | Date | string
  }

  export type TournamentPlayerWhereInput = {
    AND?: TournamentPlayerWhereInput | TournamentPlayerWhereInput[]
    OR?: TournamentPlayerWhereInput[]
    NOT?: TournamentPlayerWhereInput | TournamentPlayerWhereInput[]
    id?: StringFilter<"TournamentPlayer"> | string
    player1Name?: StringFilter<"TournamentPlayer"> | string
    player1Gender?: EnumGenderFilter<"TournamentPlayer"> | $Enums.Gender
    player1Email?: StringFilter<"TournamentPlayer"> | string
    player1Phone?: StringFilter<"TournamentPlayer"> | string
    player1DateOfBirth?: StringFilter<"TournamentPlayer"> | string
    player1DobProofLink?: StringFilter<"TournamentPlayer"> | string
    player2Name?: StringNullableFilter<"TournamentPlayer"> | string | null
    player2Gender?: EnumGenderNullableFilter<"TournamentPlayer"> | $Enums.Gender | null
    player2Email?: StringNullableFilter<"TournamentPlayer"> | string | null
    player2Phone?: StringNullableFilter<"TournamentPlayer"> | string | null
    player2DateOfBirth?: StringNullableFilter<"TournamentPlayer"> | string | null
    player2DobProofLink?: StringNullableFilter<"TournamentPlayer"> | string | null
    category?: EnumCategoryFilter<"TournamentPlayer"> | $Enums.Category
    ageCategory?: EnumAgeCategoryFilter<"TournamentPlayer"> | $Enums.AgeCategory
    createdAt?: DateTimeFilter<"TournamentPlayer"> | Date | string
    updatedAt?: DateTimeFilter<"TournamentPlayer"> | Date | string
    Payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type TournamentPlayerOrderByWithRelationInput = {
    id?: SortOrder
    player1Name?: SortOrder
    player1Gender?: SortOrder
    player1Email?: SortOrder
    player1Phone?: SortOrder
    player1DateOfBirth?: SortOrder
    player1DobProofLink?: SortOrder
    player2Name?: SortOrderInput | SortOrder
    player2Gender?: SortOrderInput | SortOrder
    player2Email?: SortOrderInput | SortOrder
    player2Phone?: SortOrderInput | SortOrder
    player2DateOfBirth?: SortOrderInput | SortOrder
    player2DobProofLink?: SortOrderInput | SortOrder
    category?: SortOrder
    ageCategory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Payment?: PaymentOrderByWithRelationInput
  }

  export type TournamentPlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TournamentPlayerWhereInput | TournamentPlayerWhereInput[]
    OR?: TournamentPlayerWhereInput[]
    NOT?: TournamentPlayerWhereInput | TournamentPlayerWhereInput[]
    player1Name?: StringFilter<"TournamentPlayer"> | string
    player1Gender?: EnumGenderFilter<"TournamentPlayer"> | $Enums.Gender
    player1Email?: StringFilter<"TournamentPlayer"> | string
    player1Phone?: StringFilter<"TournamentPlayer"> | string
    player1DateOfBirth?: StringFilter<"TournamentPlayer"> | string
    player1DobProofLink?: StringFilter<"TournamentPlayer"> | string
    player2Name?: StringNullableFilter<"TournamentPlayer"> | string | null
    player2Gender?: EnumGenderNullableFilter<"TournamentPlayer"> | $Enums.Gender | null
    player2Email?: StringNullableFilter<"TournamentPlayer"> | string | null
    player2Phone?: StringNullableFilter<"TournamentPlayer"> | string | null
    player2DateOfBirth?: StringNullableFilter<"TournamentPlayer"> | string | null
    player2DobProofLink?: StringNullableFilter<"TournamentPlayer"> | string | null
    category?: EnumCategoryFilter<"TournamentPlayer"> | $Enums.Category
    ageCategory?: EnumAgeCategoryFilter<"TournamentPlayer"> | $Enums.AgeCategory
    createdAt?: DateTimeFilter<"TournamentPlayer"> | Date | string
    updatedAt?: DateTimeFilter<"TournamentPlayer"> | Date | string
    Payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "id">

  export type TournamentPlayerOrderByWithAggregationInput = {
    id?: SortOrder
    player1Name?: SortOrder
    player1Gender?: SortOrder
    player1Email?: SortOrder
    player1Phone?: SortOrder
    player1DateOfBirth?: SortOrder
    player1DobProofLink?: SortOrder
    player2Name?: SortOrderInput | SortOrder
    player2Gender?: SortOrderInput | SortOrder
    player2Email?: SortOrderInput | SortOrder
    player2Phone?: SortOrderInput | SortOrder
    player2DateOfBirth?: SortOrderInput | SortOrder
    player2DobProofLink?: SortOrderInput | SortOrder
    category?: SortOrder
    ageCategory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TournamentPlayerCountOrderByAggregateInput
    _max?: TournamentPlayerMaxOrderByAggregateInput
    _min?: TournamentPlayerMinOrderByAggregateInput
  }

  export type TournamentPlayerScalarWhereWithAggregatesInput = {
    AND?: TournamentPlayerScalarWhereWithAggregatesInput | TournamentPlayerScalarWhereWithAggregatesInput[]
    OR?: TournamentPlayerScalarWhereWithAggregatesInput[]
    NOT?: TournamentPlayerScalarWhereWithAggregatesInput | TournamentPlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TournamentPlayer"> | string
    player1Name?: StringWithAggregatesFilter<"TournamentPlayer"> | string
    player1Gender?: EnumGenderWithAggregatesFilter<"TournamentPlayer"> | $Enums.Gender
    player1Email?: StringWithAggregatesFilter<"TournamentPlayer"> | string
    player1Phone?: StringWithAggregatesFilter<"TournamentPlayer"> | string
    player1DateOfBirth?: StringWithAggregatesFilter<"TournamentPlayer"> | string
    player1DobProofLink?: StringWithAggregatesFilter<"TournamentPlayer"> | string
    player2Name?: StringNullableWithAggregatesFilter<"TournamentPlayer"> | string | null
    player2Gender?: EnumGenderNullableWithAggregatesFilter<"TournamentPlayer"> | $Enums.Gender | null
    player2Email?: StringNullableWithAggregatesFilter<"TournamentPlayer"> | string | null
    player2Phone?: StringNullableWithAggregatesFilter<"TournamentPlayer"> | string | null
    player2DateOfBirth?: StringNullableWithAggregatesFilter<"TournamentPlayer"> | string | null
    player2DobProofLink?: StringNullableWithAggregatesFilter<"TournamentPlayer"> | string | null
    category?: EnumCategoryWithAggregatesFilter<"TournamentPlayer"> | $Enums.Category
    ageCategory?: EnumAgeCategoryWithAggregatesFilter<"TournamentPlayer"> | $Enums.AgeCategory
    createdAt?: DateTimeWithAggregatesFilter<"TournamentPlayer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TournamentPlayer"> | Date | string
  }

  export type PaymentCreateInput = {
    id: string
    razorpayPaymentId?: string | null
    razorpayOrderId?: string | null
    razorpaySignature?: string | null
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    paymentMethod?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    RegisteredPlayer?: RegisteredPlayerCreateNestedOneWithoutPaymentInput
    TournamentPlayer?: TournamentPlayerCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id: string
    razorpayPaymentId?: string | null
    razorpayOrderId?: string | null
    razorpaySignature?: string | null
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    paymentMethod?: string | null
    description?: string | null
    playerId?: string | null
    tournamentPlayerId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RegisteredPlayer?: RegisteredPlayerUpdateOneWithoutPaymentNestedInput
    TournamentPlayer?: TournamentPlayerUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    tournamentPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id: string
    razorpayPaymentId?: string | null
    razorpayOrderId?: string | null
    razorpaySignature?: string | null
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    paymentMethod?: string | null
    description?: string | null
    playerId?: string | null
    tournamentPlayerId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    tournamentPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegisteredPlayerCreateInput = {
    id: string
    playerId: string
    name: string
    gender: $Enums.Gender
    dateOfBirth: string
    placeOfBirth: string
    identificationMarks: string
    imageLink: string
    dobProofLink: string
    communicationAddress: string
    pinCode: string
    email: string
    contactNumber: string
    organisationType: $Enums.OrganisationType
    organisationName: string
    organisationEmail: string
    organisationContact: string
    organisationAddress: string
    nameOfContact: string
    fatherName: string
    fatherContact: string
    motherName: string
    motherContact: string
    createdAt?: Date | string
    updatedAt: Date | string
    Payment?: PaymentCreateNestedOneWithoutRegisteredPlayerInput
  }

  export type RegisteredPlayerUncheckedCreateInput = {
    id: string
    playerId: string
    name: string
    gender: $Enums.Gender
    dateOfBirth: string
    placeOfBirth: string
    identificationMarks: string
    imageLink: string
    dobProofLink: string
    communicationAddress: string
    pinCode: string
    email: string
    contactNumber: string
    organisationType: $Enums.OrganisationType
    organisationName: string
    organisationEmail: string
    organisationContact: string
    organisationAddress: string
    nameOfContact: string
    fatherName: string
    fatherContact: string
    motherName: string
    motherContact: string
    createdAt?: Date | string
    updatedAt: Date | string
    Payment?: PaymentUncheckedCreateNestedOneWithoutRegisteredPlayerInput
  }

  export type RegisteredPlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    identificationMarks?: StringFieldUpdateOperationsInput | string
    imageLink?: StringFieldUpdateOperationsInput | string
    dobProofLink?: StringFieldUpdateOperationsInput | string
    communicationAddress?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    organisationType?: EnumOrganisationTypeFieldUpdateOperationsInput | $Enums.OrganisationType
    organisationName?: StringFieldUpdateOperationsInput | string
    organisationEmail?: StringFieldUpdateOperationsInput | string
    organisationContact?: StringFieldUpdateOperationsInput | string
    organisationAddress?: StringFieldUpdateOperationsInput | string
    nameOfContact?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherContact?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    motherContact?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Payment?: PaymentUpdateOneWithoutRegisteredPlayerNestedInput
  }

  export type RegisteredPlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    identificationMarks?: StringFieldUpdateOperationsInput | string
    imageLink?: StringFieldUpdateOperationsInput | string
    dobProofLink?: StringFieldUpdateOperationsInput | string
    communicationAddress?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    organisationType?: EnumOrganisationTypeFieldUpdateOperationsInput | $Enums.OrganisationType
    organisationName?: StringFieldUpdateOperationsInput | string
    organisationEmail?: StringFieldUpdateOperationsInput | string
    organisationContact?: StringFieldUpdateOperationsInput | string
    organisationAddress?: StringFieldUpdateOperationsInput | string
    nameOfContact?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherContact?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    motherContact?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Payment?: PaymentUncheckedUpdateOneWithoutRegisteredPlayerNestedInput
  }

  export type RegisteredPlayerCreateManyInput = {
    id: string
    playerId: string
    name: string
    gender: $Enums.Gender
    dateOfBirth: string
    placeOfBirth: string
    identificationMarks: string
    imageLink: string
    dobProofLink: string
    communicationAddress: string
    pinCode: string
    email: string
    contactNumber: string
    organisationType: $Enums.OrganisationType
    organisationName: string
    organisationEmail: string
    organisationContact: string
    organisationAddress: string
    nameOfContact: string
    fatherName: string
    fatherContact: string
    motherName: string
    motherContact: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type RegisteredPlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    identificationMarks?: StringFieldUpdateOperationsInput | string
    imageLink?: StringFieldUpdateOperationsInput | string
    dobProofLink?: StringFieldUpdateOperationsInput | string
    communicationAddress?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    organisationType?: EnumOrganisationTypeFieldUpdateOperationsInput | $Enums.OrganisationType
    organisationName?: StringFieldUpdateOperationsInput | string
    organisationEmail?: StringFieldUpdateOperationsInput | string
    organisationContact?: StringFieldUpdateOperationsInput | string
    organisationAddress?: StringFieldUpdateOperationsInput | string
    nameOfContact?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherContact?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    motherContact?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegisteredPlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    identificationMarks?: StringFieldUpdateOperationsInput | string
    imageLink?: StringFieldUpdateOperationsInput | string
    dobProofLink?: StringFieldUpdateOperationsInput | string
    communicationAddress?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    organisationType?: EnumOrganisationTypeFieldUpdateOperationsInput | $Enums.OrganisationType
    organisationName?: StringFieldUpdateOperationsInput | string
    organisationEmail?: StringFieldUpdateOperationsInput | string
    organisationContact?: StringFieldUpdateOperationsInput | string
    organisationAddress?: StringFieldUpdateOperationsInput | string
    nameOfContact?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherContact?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    motherContact?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentPlayerCreateInput = {
    id: string
    player1Name: string
    player1Gender: $Enums.Gender
    player1Email: string
    player1Phone: string
    player1DateOfBirth: string
    player1DobProofLink: string
    player2Name?: string | null
    player2Gender?: $Enums.Gender | null
    player2Email?: string | null
    player2Phone?: string | null
    player2DateOfBirth?: string | null
    player2DobProofLink?: string | null
    category: $Enums.Category
    ageCategory: $Enums.AgeCategory
    createdAt?: Date | string
    updatedAt: Date | string
    Payment?: PaymentCreateNestedOneWithoutTournamentPlayerInput
  }

  export type TournamentPlayerUncheckedCreateInput = {
    id: string
    player1Name: string
    player1Gender: $Enums.Gender
    player1Email: string
    player1Phone: string
    player1DateOfBirth: string
    player1DobProofLink: string
    player2Name?: string | null
    player2Gender?: $Enums.Gender | null
    player2Email?: string | null
    player2Phone?: string | null
    player2DateOfBirth?: string | null
    player2DobProofLink?: string | null
    category: $Enums.Category
    ageCategory: $Enums.AgeCategory
    createdAt?: Date | string
    updatedAt: Date | string
    Payment?: PaymentUncheckedCreateNestedOneWithoutTournamentPlayerInput
  }

  export type TournamentPlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Name?: StringFieldUpdateOperationsInput | string
    player1Gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    player1Email?: StringFieldUpdateOperationsInput | string
    player1Phone?: StringFieldUpdateOperationsInput | string
    player1DateOfBirth?: StringFieldUpdateOperationsInput | string
    player1DobProofLink?: StringFieldUpdateOperationsInput | string
    player2Name?: NullableStringFieldUpdateOperationsInput | string | null
    player2Gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    player2Email?: NullableStringFieldUpdateOperationsInput | string | null
    player2Phone?: NullableStringFieldUpdateOperationsInput | string | null
    player2DateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    player2DobProofLink?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    ageCategory?: EnumAgeCategoryFieldUpdateOperationsInput | $Enums.AgeCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Payment?: PaymentUpdateOneWithoutTournamentPlayerNestedInput
  }

  export type TournamentPlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Name?: StringFieldUpdateOperationsInput | string
    player1Gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    player1Email?: StringFieldUpdateOperationsInput | string
    player1Phone?: StringFieldUpdateOperationsInput | string
    player1DateOfBirth?: StringFieldUpdateOperationsInput | string
    player1DobProofLink?: StringFieldUpdateOperationsInput | string
    player2Name?: NullableStringFieldUpdateOperationsInput | string | null
    player2Gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    player2Email?: NullableStringFieldUpdateOperationsInput | string | null
    player2Phone?: NullableStringFieldUpdateOperationsInput | string | null
    player2DateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    player2DobProofLink?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    ageCategory?: EnumAgeCategoryFieldUpdateOperationsInput | $Enums.AgeCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Payment?: PaymentUncheckedUpdateOneWithoutTournamentPlayerNestedInput
  }

  export type TournamentPlayerCreateManyInput = {
    id: string
    player1Name: string
    player1Gender: $Enums.Gender
    player1Email: string
    player1Phone: string
    player1DateOfBirth: string
    player1DobProofLink: string
    player2Name?: string | null
    player2Gender?: $Enums.Gender | null
    player2Email?: string | null
    player2Phone?: string | null
    player2DateOfBirth?: string | null
    player2DobProofLink?: string | null
    category: $Enums.Category
    ageCategory: $Enums.AgeCategory
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type TournamentPlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Name?: StringFieldUpdateOperationsInput | string
    player1Gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    player1Email?: StringFieldUpdateOperationsInput | string
    player1Phone?: StringFieldUpdateOperationsInput | string
    player1DateOfBirth?: StringFieldUpdateOperationsInput | string
    player1DobProofLink?: StringFieldUpdateOperationsInput | string
    player2Name?: NullableStringFieldUpdateOperationsInput | string | null
    player2Gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    player2Email?: NullableStringFieldUpdateOperationsInput | string | null
    player2Phone?: NullableStringFieldUpdateOperationsInput | string | null
    player2DateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    player2DobProofLink?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    ageCategory?: EnumAgeCategoryFieldUpdateOperationsInput | $Enums.AgeCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentPlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Name?: StringFieldUpdateOperationsInput | string
    player1Gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    player1Email?: StringFieldUpdateOperationsInput | string
    player1Phone?: StringFieldUpdateOperationsInput | string
    player1DateOfBirth?: StringFieldUpdateOperationsInput | string
    player1DobProofLink?: StringFieldUpdateOperationsInput | string
    player2Name?: NullableStringFieldUpdateOperationsInput | string | null
    player2Gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    player2Email?: NullableStringFieldUpdateOperationsInput | string | null
    player2Phone?: NullableStringFieldUpdateOperationsInput | string | null
    player2DateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    player2DobProofLink?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    ageCategory?: EnumAgeCategoryFieldUpdateOperationsInput | $Enums.AgeCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
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

  export type RegisteredPlayerNullableScalarRelationFilter = {
    is?: RegisteredPlayerWhereInput | null
    isNot?: RegisteredPlayerWhereInput | null
  }

  export type TournamentPlayerNullableScalarRelationFilter = {
    is?: TournamentPlayerWhereInput | null
    isNot?: TournamentPlayerWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpaySignature?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    description?: SortOrder
    playerId?: SortOrder
    tournamentPlayerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpaySignature?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    description?: SortOrder
    playerId?: SortOrder
    tournamentPlayerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpaySignature?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    description?: SortOrder
    playerId?: SortOrder
    tournamentPlayerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
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

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type EnumOrganisationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganisationType | EnumOrganisationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrganisationType[] | ListEnumOrganisationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrganisationType[] | ListEnumOrganisationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrganisationTypeFilter<$PrismaModel> | $Enums.OrganisationType
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type RegisteredPlayerCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    placeOfBirth?: SortOrder
    identificationMarks?: SortOrder
    imageLink?: SortOrder
    dobProofLink?: SortOrder
    communicationAddress?: SortOrder
    pinCode?: SortOrder
    email?: SortOrder
    contactNumber?: SortOrder
    organisationType?: SortOrder
    organisationName?: SortOrder
    organisationEmail?: SortOrder
    organisationContact?: SortOrder
    organisationAddress?: SortOrder
    nameOfContact?: SortOrder
    fatherName?: SortOrder
    fatherContact?: SortOrder
    motherName?: SortOrder
    motherContact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegisteredPlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    placeOfBirth?: SortOrder
    identificationMarks?: SortOrder
    imageLink?: SortOrder
    dobProofLink?: SortOrder
    communicationAddress?: SortOrder
    pinCode?: SortOrder
    email?: SortOrder
    contactNumber?: SortOrder
    organisationType?: SortOrder
    organisationName?: SortOrder
    organisationEmail?: SortOrder
    organisationContact?: SortOrder
    organisationAddress?: SortOrder
    nameOfContact?: SortOrder
    fatherName?: SortOrder
    fatherContact?: SortOrder
    motherName?: SortOrder
    motherContact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegisteredPlayerMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    dateOfBirth?: SortOrder
    placeOfBirth?: SortOrder
    identificationMarks?: SortOrder
    imageLink?: SortOrder
    dobProofLink?: SortOrder
    communicationAddress?: SortOrder
    pinCode?: SortOrder
    email?: SortOrder
    contactNumber?: SortOrder
    organisationType?: SortOrder
    organisationName?: SortOrder
    organisationEmail?: SortOrder
    organisationContact?: SortOrder
    organisationAddress?: SortOrder
    nameOfContact?: SortOrder
    fatherName?: SortOrder
    fatherContact?: SortOrder
    motherName?: SortOrder
    motherContact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumOrganisationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganisationType | EnumOrganisationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrganisationType[] | ListEnumOrganisationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrganisationType[] | ListEnumOrganisationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrganisationTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrganisationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrganisationTypeFilter<$PrismaModel>
    _max?: NestedEnumOrganisationTypeFilter<$PrismaModel>
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type EnumAgeCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeCategory | EnumAgeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AgeCategory[] | ListEnumAgeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeCategory[] | ListEnumAgeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeCategoryFilter<$PrismaModel> | $Enums.AgeCategory
  }

  export type TournamentPlayerCountOrderByAggregateInput = {
    id?: SortOrder
    player1Name?: SortOrder
    player1Gender?: SortOrder
    player1Email?: SortOrder
    player1Phone?: SortOrder
    player1DateOfBirth?: SortOrder
    player1DobProofLink?: SortOrder
    player2Name?: SortOrder
    player2Gender?: SortOrder
    player2Email?: SortOrder
    player2Phone?: SortOrder
    player2DateOfBirth?: SortOrder
    player2DobProofLink?: SortOrder
    category?: SortOrder
    ageCategory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentPlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    player1Name?: SortOrder
    player1Gender?: SortOrder
    player1Email?: SortOrder
    player1Phone?: SortOrder
    player1DateOfBirth?: SortOrder
    player1DobProofLink?: SortOrder
    player2Name?: SortOrder
    player2Gender?: SortOrder
    player2Email?: SortOrder
    player2Phone?: SortOrder
    player2DateOfBirth?: SortOrder
    player2DobProofLink?: SortOrder
    category?: SortOrder
    ageCategory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentPlayerMinOrderByAggregateInput = {
    id?: SortOrder
    player1Name?: SortOrder
    player1Gender?: SortOrder
    player1Email?: SortOrder
    player1Phone?: SortOrder
    player1DateOfBirth?: SortOrder
    player1DobProofLink?: SortOrder
    player2Name?: SortOrder
    player2Gender?: SortOrder
    player2Email?: SortOrder
    player2Phone?: SortOrder
    player2DateOfBirth?: SortOrder
    player2DobProofLink?: SortOrder
    category?: SortOrder
    ageCategory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type EnumAgeCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeCategory | EnumAgeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AgeCategory[] | ListEnumAgeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeCategory[] | ListEnumAgeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeCategoryWithAggregatesFilter<$PrismaModel> | $Enums.AgeCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgeCategoryFilter<$PrismaModel>
    _max?: NestedEnumAgeCategoryFilter<$PrismaModel>
  }

  export type RegisteredPlayerCreateNestedOneWithoutPaymentInput = {
    create?: XOR<RegisteredPlayerCreateWithoutPaymentInput, RegisteredPlayerUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: RegisteredPlayerCreateOrConnectWithoutPaymentInput
    connect?: RegisteredPlayerWhereUniqueInput
  }

  export type TournamentPlayerCreateNestedOneWithoutPaymentInput = {
    create?: XOR<TournamentPlayerCreateWithoutPaymentInput, TournamentPlayerUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: TournamentPlayerCreateOrConnectWithoutPaymentInput
    connect?: TournamentPlayerWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RegisteredPlayerUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<RegisteredPlayerCreateWithoutPaymentInput, RegisteredPlayerUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: RegisteredPlayerCreateOrConnectWithoutPaymentInput
    upsert?: RegisteredPlayerUpsertWithoutPaymentInput
    disconnect?: RegisteredPlayerWhereInput | boolean
    delete?: RegisteredPlayerWhereInput | boolean
    connect?: RegisteredPlayerWhereUniqueInput
    update?: XOR<XOR<RegisteredPlayerUpdateToOneWithWhereWithoutPaymentInput, RegisteredPlayerUpdateWithoutPaymentInput>, RegisteredPlayerUncheckedUpdateWithoutPaymentInput>
  }

  export type TournamentPlayerUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<TournamentPlayerCreateWithoutPaymentInput, TournamentPlayerUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: TournamentPlayerCreateOrConnectWithoutPaymentInput
    upsert?: TournamentPlayerUpsertWithoutPaymentInput
    disconnect?: TournamentPlayerWhereInput | boolean
    delete?: TournamentPlayerWhereInput | boolean
    connect?: TournamentPlayerWhereUniqueInput
    update?: XOR<XOR<TournamentPlayerUpdateToOneWithWhereWithoutPaymentInput, TournamentPlayerUpdateWithoutPaymentInput>, TournamentPlayerUncheckedUpdateWithoutPaymentInput>
  }

  export type PaymentCreateNestedOneWithoutRegisteredPlayerInput = {
    create?: XOR<PaymentCreateWithoutRegisteredPlayerInput, PaymentUncheckedCreateWithoutRegisteredPlayerInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutRegisteredPlayerInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedOneWithoutRegisteredPlayerInput = {
    create?: XOR<PaymentCreateWithoutRegisteredPlayerInput, PaymentUncheckedCreateWithoutRegisteredPlayerInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutRegisteredPlayerInput
    connect?: PaymentWhereUniqueInput
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type EnumOrganisationTypeFieldUpdateOperationsInput = {
    set?: $Enums.OrganisationType
  }

  export type PaymentUpdateOneWithoutRegisteredPlayerNestedInput = {
    create?: XOR<PaymentCreateWithoutRegisteredPlayerInput, PaymentUncheckedCreateWithoutRegisteredPlayerInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutRegisteredPlayerInput
    upsert?: PaymentUpsertWithoutRegisteredPlayerInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutRegisteredPlayerInput, PaymentUpdateWithoutRegisteredPlayerInput>, PaymentUncheckedUpdateWithoutRegisteredPlayerInput>
  }

  export type PaymentUncheckedUpdateOneWithoutRegisteredPlayerNestedInput = {
    create?: XOR<PaymentCreateWithoutRegisteredPlayerInput, PaymentUncheckedCreateWithoutRegisteredPlayerInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutRegisteredPlayerInput
    upsert?: PaymentUpsertWithoutRegisteredPlayerInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutRegisteredPlayerInput, PaymentUpdateWithoutRegisteredPlayerInput>, PaymentUncheckedUpdateWithoutRegisteredPlayerInput>
  }

  export type PaymentCreateNestedOneWithoutTournamentPlayerInput = {
    create?: XOR<PaymentCreateWithoutTournamentPlayerInput, PaymentUncheckedCreateWithoutTournamentPlayerInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutTournamentPlayerInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedOneWithoutTournamentPlayerInput = {
    create?: XOR<PaymentCreateWithoutTournamentPlayerInput, PaymentUncheckedCreateWithoutTournamentPlayerInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutTournamentPlayerInput
    connect?: PaymentWhereUniqueInput
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type EnumAgeCategoryFieldUpdateOperationsInput = {
    set?: $Enums.AgeCategory
  }

  export type PaymentUpdateOneWithoutTournamentPlayerNestedInput = {
    create?: XOR<PaymentCreateWithoutTournamentPlayerInput, PaymentUncheckedCreateWithoutTournamentPlayerInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutTournamentPlayerInput
    upsert?: PaymentUpsertWithoutTournamentPlayerInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutTournamentPlayerInput, PaymentUpdateWithoutTournamentPlayerInput>, PaymentUncheckedUpdateWithoutTournamentPlayerInput>
  }

  export type PaymentUncheckedUpdateOneWithoutTournamentPlayerNestedInput = {
    create?: XOR<PaymentCreateWithoutTournamentPlayerInput, PaymentUncheckedCreateWithoutTournamentPlayerInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutTournamentPlayerInput
    upsert?: PaymentUpsertWithoutTournamentPlayerInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutTournamentPlayerInput, PaymentUpdateWithoutTournamentPlayerInput>, PaymentUncheckedUpdateWithoutTournamentPlayerInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
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

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumOrganisationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganisationType | EnumOrganisationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrganisationType[] | ListEnumOrganisationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrganisationType[] | ListEnumOrganisationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrganisationTypeFilter<$PrismaModel> | $Enums.OrganisationType
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumOrganisationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrganisationType | EnumOrganisationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrganisationType[] | ListEnumOrganisationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrganisationType[] | ListEnumOrganisationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrganisationTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrganisationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrganisationTypeFilter<$PrismaModel>
    _max?: NestedEnumOrganisationTypeFilter<$PrismaModel>
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedEnumAgeCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeCategory | EnumAgeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AgeCategory[] | ListEnumAgeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeCategory[] | ListEnumAgeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeCategoryFilter<$PrismaModel> | $Enums.AgeCategory
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedEnumAgeCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeCategory | EnumAgeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AgeCategory[] | ListEnumAgeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeCategory[] | ListEnumAgeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeCategoryWithAggregatesFilter<$PrismaModel> | $Enums.AgeCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgeCategoryFilter<$PrismaModel>
    _max?: NestedEnumAgeCategoryFilter<$PrismaModel>
  }

  export type RegisteredPlayerCreateWithoutPaymentInput = {
    id: string
    playerId: string
    name: string
    gender: $Enums.Gender
    dateOfBirth: string
    placeOfBirth: string
    identificationMarks: string
    imageLink: string
    dobProofLink: string
    communicationAddress: string
    pinCode: string
    email: string
    contactNumber: string
    organisationType: $Enums.OrganisationType
    organisationName: string
    organisationEmail: string
    organisationContact: string
    organisationAddress: string
    nameOfContact: string
    fatherName: string
    fatherContact: string
    motherName: string
    motherContact: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type RegisteredPlayerUncheckedCreateWithoutPaymentInput = {
    id: string
    playerId: string
    name: string
    gender: $Enums.Gender
    dateOfBirth: string
    placeOfBirth: string
    identificationMarks: string
    imageLink: string
    dobProofLink: string
    communicationAddress: string
    pinCode: string
    email: string
    contactNumber: string
    organisationType: $Enums.OrganisationType
    organisationName: string
    organisationEmail: string
    organisationContact: string
    organisationAddress: string
    nameOfContact: string
    fatherName: string
    fatherContact: string
    motherName: string
    motherContact: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type RegisteredPlayerCreateOrConnectWithoutPaymentInput = {
    where: RegisteredPlayerWhereUniqueInput
    create: XOR<RegisteredPlayerCreateWithoutPaymentInput, RegisteredPlayerUncheckedCreateWithoutPaymentInput>
  }

  export type TournamentPlayerCreateWithoutPaymentInput = {
    id: string
    player1Name: string
    player1Gender: $Enums.Gender
    player1Email: string
    player1Phone: string
    player1DateOfBirth: string
    player1DobProofLink: string
    player2Name?: string | null
    player2Gender?: $Enums.Gender | null
    player2Email?: string | null
    player2Phone?: string | null
    player2DateOfBirth?: string | null
    player2DobProofLink?: string | null
    category: $Enums.Category
    ageCategory: $Enums.AgeCategory
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type TournamentPlayerUncheckedCreateWithoutPaymentInput = {
    id: string
    player1Name: string
    player1Gender: $Enums.Gender
    player1Email: string
    player1Phone: string
    player1DateOfBirth: string
    player1DobProofLink: string
    player2Name?: string | null
    player2Gender?: $Enums.Gender | null
    player2Email?: string | null
    player2Phone?: string | null
    player2DateOfBirth?: string | null
    player2DobProofLink?: string | null
    category: $Enums.Category
    ageCategory: $Enums.AgeCategory
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type TournamentPlayerCreateOrConnectWithoutPaymentInput = {
    where: TournamentPlayerWhereUniqueInput
    create: XOR<TournamentPlayerCreateWithoutPaymentInput, TournamentPlayerUncheckedCreateWithoutPaymentInput>
  }

  export type RegisteredPlayerUpsertWithoutPaymentInput = {
    update: XOR<RegisteredPlayerUpdateWithoutPaymentInput, RegisteredPlayerUncheckedUpdateWithoutPaymentInput>
    create: XOR<RegisteredPlayerCreateWithoutPaymentInput, RegisteredPlayerUncheckedCreateWithoutPaymentInput>
    where?: RegisteredPlayerWhereInput
  }

  export type RegisteredPlayerUpdateToOneWithWhereWithoutPaymentInput = {
    where?: RegisteredPlayerWhereInput
    data: XOR<RegisteredPlayerUpdateWithoutPaymentInput, RegisteredPlayerUncheckedUpdateWithoutPaymentInput>
  }

  export type RegisteredPlayerUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    identificationMarks?: StringFieldUpdateOperationsInput | string
    imageLink?: StringFieldUpdateOperationsInput | string
    dobProofLink?: StringFieldUpdateOperationsInput | string
    communicationAddress?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    organisationType?: EnumOrganisationTypeFieldUpdateOperationsInput | $Enums.OrganisationType
    organisationName?: StringFieldUpdateOperationsInput | string
    organisationEmail?: StringFieldUpdateOperationsInput | string
    organisationContact?: StringFieldUpdateOperationsInput | string
    organisationAddress?: StringFieldUpdateOperationsInput | string
    nameOfContact?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherContact?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    motherContact?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegisteredPlayerUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    placeOfBirth?: StringFieldUpdateOperationsInput | string
    identificationMarks?: StringFieldUpdateOperationsInput | string
    imageLink?: StringFieldUpdateOperationsInput | string
    dobProofLink?: StringFieldUpdateOperationsInput | string
    communicationAddress?: StringFieldUpdateOperationsInput | string
    pinCode?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    organisationType?: EnumOrganisationTypeFieldUpdateOperationsInput | $Enums.OrganisationType
    organisationName?: StringFieldUpdateOperationsInput | string
    organisationEmail?: StringFieldUpdateOperationsInput | string
    organisationContact?: StringFieldUpdateOperationsInput | string
    organisationAddress?: StringFieldUpdateOperationsInput | string
    nameOfContact?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherContact?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    motherContact?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentPlayerUpsertWithoutPaymentInput = {
    update: XOR<TournamentPlayerUpdateWithoutPaymentInput, TournamentPlayerUncheckedUpdateWithoutPaymentInput>
    create: XOR<TournamentPlayerCreateWithoutPaymentInput, TournamentPlayerUncheckedCreateWithoutPaymentInput>
    where?: TournamentPlayerWhereInput
  }

  export type TournamentPlayerUpdateToOneWithWhereWithoutPaymentInput = {
    where?: TournamentPlayerWhereInput
    data: XOR<TournamentPlayerUpdateWithoutPaymentInput, TournamentPlayerUncheckedUpdateWithoutPaymentInput>
  }

  export type TournamentPlayerUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Name?: StringFieldUpdateOperationsInput | string
    player1Gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    player1Email?: StringFieldUpdateOperationsInput | string
    player1Phone?: StringFieldUpdateOperationsInput | string
    player1DateOfBirth?: StringFieldUpdateOperationsInput | string
    player1DobProofLink?: StringFieldUpdateOperationsInput | string
    player2Name?: NullableStringFieldUpdateOperationsInput | string | null
    player2Gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    player2Email?: NullableStringFieldUpdateOperationsInput | string | null
    player2Phone?: NullableStringFieldUpdateOperationsInput | string | null
    player2DateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    player2DobProofLink?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    ageCategory?: EnumAgeCategoryFieldUpdateOperationsInput | $Enums.AgeCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentPlayerUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    player1Name?: StringFieldUpdateOperationsInput | string
    player1Gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    player1Email?: StringFieldUpdateOperationsInput | string
    player1Phone?: StringFieldUpdateOperationsInput | string
    player1DateOfBirth?: StringFieldUpdateOperationsInput | string
    player1DobProofLink?: StringFieldUpdateOperationsInput | string
    player2Name?: NullableStringFieldUpdateOperationsInput | string | null
    player2Gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    player2Email?: NullableStringFieldUpdateOperationsInput | string | null
    player2Phone?: NullableStringFieldUpdateOperationsInput | string | null
    player2DateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    player2DobProofLink?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    ageCategory?: EnumAgeCategoryFieldUpdateOperationsInput | $Enums.AgeCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateWithoutRegisteredPlayerInput = {
    id: string
    razorpayPaymentId?: string | null
    razorpayOrderId?: string | null
    razorpaySignature?: string | null
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    paymentMethod?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    TournamentPlayer?: TournamentPlayerCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutRegisteredPlayerInput = {
    id: string
    razorpayPaymentId?: string | null
    razorpayOrderId?: string | null
    razorpaySignature?: string | null
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    paymentMethod?: string | null
    description?: string | null
    tournamentPlayerId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type PaymentCreateOrConnectWithoutRegisteredPlayerInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutRegisteredPlayerInput, PaymentUncheckedCreateWithoutRegisteredPlayerInput>
  }

  export type PaymentUpsertWithoutRegisteredPlayerInput = {
    update: XOR<PaymentUpdateWithoutRegisteredPlayerInput, PaymentUncheckedUpdateWithoutRegisteredPlayerInput>
    create: XOR<PaymentCreateWithoutRegisteredPlayerInput, PaymentUncheckedCreateWithoutRegisteredPlayerInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutRegisteredPlayerInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutRegisteredPlayerInput, PaymentUncheckedUpdateWithoutRegisteredPlayerInput>
  }

  export type PaymentUpdateWithoutRegisteredPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TournamentPlayer?: TournamentPlayerUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutRegisteredPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tournamentPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateWithoutTournamentPlayerInput = {
    id: string
    razorpayPaymentId?: string | null
    razorpayOrderId?: string | null
    razorpaySignature?: string | null
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    paymentMethod?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    RegisteredPlayer?: RegisteredPlayerCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutTournamentPlayerInput = {
    id: string
    razorpayPaymentId?: string | null
    razorpayOrderId?: string | null
    razorpaySignature?: string | null
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    paymentMethod?: string | null
    description?: string | null
    playerId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type PaymentCreateOrConnectWithoutTournamentPlayerInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutTournamentPlayerInput, PaymentUncheckedCreateWithoutTournamentPlayerInput>
  }

  export type PaymentUpsertWithoutTournamentPlayerInput = {
    update: XOR<PaymentUpdateWithoutTournamentPlayerInput, PaymentUncheckedUpdateWithoutTournamentPlayerInput>
    create: XOR<PaymentCreateWithoutTournamentPlayerInput, PaymentUncheckedCreateWithoutTournamentPlayerInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutTournamentPlayerInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutTournamentPlayerInput, PaymentUncheckedUpdateWithoutTournamentPlayerInput>
  }

  export type PaymentUpdateWithoutTournamentPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RegisteredPlayer?: RegisteredPlayerUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutTournamentPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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