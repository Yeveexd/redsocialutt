import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
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
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly AMISTADES: "AMISTADES";
    readonly AVISOS: "AVISOS";
    readonly BLOQUEOS: "BLOQUEOS";
    readonly CARRERAS: "CARRERAS";
    readonly CHATS: "CHATS";
    readonly COMENTARIOS: "COMENTARIOS";
    readonly GRUPOS: "GRUPOS";
    readonly MENSAJES: "MENSAJES";
    readonly MIEMBROS_CHAT: "MIEMBROS_CHAT";
    readonly MIEMBROS_GRUPO: "MIEMBROS_GRUPO";
    readonly MULTIMEDIA: "MULTIMEDIA";
    readonly NOTIFICACIONES: "NOTIFICACIONES";
    readonly PERFILES: "PERFILES";
    readonly PUBLICACIONES: "PUBLICACIONES";
    readonly REACCIONES: "REACCIONES";
    readonly REPORTES: "REPORTES";
    readonly ROLES: "ROLES";
    readonly SANCIONES: "SANCIONES";
    readonly USUARIOS: "USUARIOS";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "aMISTADES" | "aVISOS" | "bLOQUEOS" | "cARRERAS" | "cHATS" | "cOMENTARIOS" | "gRUPOS" | "mENSAJES" | "mIEMBROS_CHAT" | "mIEMBROS_GRUPO" | "mULTIMEDIA" | "nOTIFICACIONES" | "pERFILES" | "pUBLICACIONES" | "rEACCIONES" | "rEPORTES" | "rOLES" | "sANCIONES" | "uSUARIOS";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        AMISTADES: {
            payload: Prisma.$AMISTADESPayload<ExtArgs>;
            fields: Prisma.AMISTADESFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AMISTADESFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AMISTADESPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AMISTADESFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AMISTADESPayload>;
                };
                findFirst: {
                    args: Prisma.AMISTADESFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AMISTADESPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AMISTADESFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AMISTADESPayload>;
                };
                findMany: {
                    args: Prisma.AMISTADESFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AMISTADESPayload>[];
                };
                create: {
                    args: Prisma.AMISTADESCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AMISTADESPayload>;
                };
                createMany: {
                    args: Prisma.AMISTADESCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AMISTADESCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AMISTADESPayload>[];
                };
                delete: {
                    args: Prisma.AMISTADESDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AMISTADESPayload>;
                };
                update: {
                    args: Prisma.AMISTADESUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AMISTADESPayload>;
                };
                deleteMany: {
                    args: Prisma.AMISTADESDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AMISTADESUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AMISTADESUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AMISTADESPayload>[];
                };
                upsert: {
                    args: Prisma.AMISTADESUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AMISTADESPayload>;
                };
                aggregate: {
                    args: Prisma.AMISTADESAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAMISTADES>;
                };
                groupBy: {
                    args: Prisma.AMISTADESGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AMISTADESGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AMISTADESCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AMISTADESCountAggregateOutputType> | number;
                };
            };
        };
        AVISOS: {
            payload: Prisma.$AVISOSPayload<ExtArgs>;
            fields: Prisma.AVISOSFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AVISOSFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AVISOSPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AVISOSFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AVISOSPayload>;
                };
                findFirst: {
                    args: Prisma.AVISOSFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AVISOSPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AVISOSFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AVISOSPayload>;
                };
                findMany: {
                    args: Prisma.AVISOSFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AVISOSPayload>[];
                };
                create: {
                    args: Prisma.AVISOSCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AVISOSPayload>;
                };
                createMany: {
                    args: Prisma.AVISOSCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AVISOSCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AVISOSPayload>[];
                };
                delete: {
                    args: Prisma.AVISOSDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AVISOSPayload>;
                };
                update: {
                    args: Prisma.AVISOSUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AVISOSPayload>;
                };
                deleteMany: {
                    args: Prisma.AVISOSDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AVISOSUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AVISOSUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AVISOSPayload>[];
                };
                upsert: {
                    args: Prisma.AVISOSUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AVISOSPayload>;
                };
                aggregate: {
                    args: Prisma.AVISOSAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAVISOS>;
                };
                groupBy: {
                    args: Prisma.AVISOSGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AVISOSGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AVISOSCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AVISOSCountAggregateOutputType> | number;
                };
            };
        };
        BLOQUEOS: {
            payload: Prisma.$BLOQUEOSPayload<ExtArgs>;
            fields: Prisma.BLOQUEOSFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BLOQUEOSFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BLOQUEOSPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BLOQUEOSFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BLOQUEOSPayload>;
                };
                findFirst: {
                    args: Prisma.BLOQUEOSFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BLOQUEOSPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BLOQUEOSFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BLOQUEOSPayload>;
                };
                findMany: {
                    args: Prisma.BLOQUEOSFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BLOQUEOSPayload>[];
                };
                create: {
                    args: Prisma.BLOQUEOSCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BLOQUEOSPayload>;
                };
                createMany: {
                    args: Prisma.BLOQUEOSCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BLOQUEOSCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BLOQUEOSPayload>[];
                };
                delete: {
                    args: Prisma.BLOQUEOSDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BLOQUEOSPayload>;
                };
                update: {
                    args: Prisma.BLOQUEOSUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BLOQUEOSPayload>;
                };
                deleteMany: {
                    args: Prisma.BLOQUEOSDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BLOQUEOSUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BLOQUEOSUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BLOQUEOSPayload>[];
                };
                upsert: {
                    args: Prisma.BLOQUEOSUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BLOQUEOSPayload>;
                };
                aggregate: {
                    args: Prisma.BLOQUEOSAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBLOQUEOS>;
                };
                groupBy: {
                    args: Prisma.BLOQUEOSGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BLOQUEOSGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BLOQUEOSCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BLOQUEOSCountAggregateOutputType> | number;
                };
            };
        };
        CARRERAS: {
            payload: Prisma.$CARRERASPayload<ExtArgs>;
            fields: Prisma.CARRERASFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CARRERASFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CARRERASPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CARRERASFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CARRERASPayload>;
                };
                findFirst: {
                    args: Prisma.CARRERASFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CARRERASPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CARRERASFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CARRERASPayload>;
                };
                findMany: {
                    args: Prisma.CARRERASFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CARRERASPayload>[];
                };
                create: {
                    args: Prisma.CARRERASCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CARRERASPayload>;
                };
                createMany: {
                    args: Prisma.CARRERASCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CARRERASCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CARRERASPayload>[];
                };
                delete: {
                    args: Prisma.CARRERASDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CARRERASPayload>;
                };
                update: {
                    args: Prisma.CARRERASUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CARRERASPayload>;
                };
                deleteMany: {
                    args: Prisma.CARRERASDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CARRERASUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CARRERASUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CARRERASPayload>[];
                };
                upsert: {
                    args: Prisma.CARRERASUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CARRERASPayload>;
                };
                aggregate: {
                    args: Prisma.CARRERASAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCARRERAS>;
                };
                groupBy: {
                    args: Prisma.CARRERASGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CARRERASGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CARRERASCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CARRERASCountAggregateOutputType> | number;
                };
            };
        };
        CHATS: {
            payload: Prisma.$CHATSPayload<ExtArgs>;
            fields: Prisma.CHATSFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CHATSFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CHATSPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CHATSFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CHATSPayload>;
                };
                findFirst: {
                    args: Prisma.CHATSFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CHATSPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CHATSFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CHATSPayload>;
                };
                findMany: {
                    args: Prisma.CHATSFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CHATSPayload>[];
                };
                create: {
                    args: Prisma.CHATSCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CHATSPayload>;
                };
                createMany: {
                    args: Prisma.CHATSCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CHATSCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CHATSPayload>[];
                };
                delete: {
                    args: Prisma.CHATSDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CHATSPayload>;
                };
                update: {
                    args: Prisma.CHATSUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CHATSPayload>;
                };
                deleteMany: {
                    args: Prisma.CHATSDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CHATSUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CHATSUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CHATSPayload>[];
                };
                upsert: {
                    args: Prisma.CHATSUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CHATSPayload>;
                };
                aggregate: {
                    args: Prisma.CHATSAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCHATS>;
                };
                groupBy: {
                    args: Prisma.CHATSGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CHATSGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CHATSCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CHATSCountAggregateOutputType> | number;
                };
            };
        };
        COMENTARIOS: {
            payload: Prisma.$COMENTARIOSPayload<ExtArgs>;
            fields: Prisma.COMENTARIOSFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.COMENTARIOSFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$COMENTARIOSPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.COMENTARIOSFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$COMENTARIOSPayload>;
                };
                findFirst: {
                    args: Prisma.COMENTARIOSFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$COMENTARIOSPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.COMENTARIOSFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$COMENTARIOSPayload>;
                };
                findMany: {
                    args: Prisma.COMENTARIOSFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$COMENTARIOSPayload>[];
                };
                create: {
                    args: Prisma.COMENTARIOSCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$COMENTARIOSPayload>;
                };
                createMany: {
                    args: Prisma.COMENTARIOSCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.COMENTARIOSCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$COMENTARIOSPayload>[];
                };
                delete: {
                    args: Prisma.COMENTARIOSDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$COMENTARIOSPayload>;
                };
                update: {
                    args: Prisma.COMENTARIOSUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$COMENTARIOSPayload>;
                };
                deleteMany: {
                    args: Prisma.COMENTARIOSDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.COMENTARIOSUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.COMENTARIOSUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$COMENTARIOSPayload>[];
                };
                upsert: {
                    args: Prisma.COMENTARIOSUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$COMENTARIOSPayload>;
                };
                aggregate: {
                    args: Prisma.COMENTARIOSAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCOMENTARIOS>;
                };
                groupBy: {
                    args: Prisma.COMENTARIOSGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.COMENTARIOSGroupByOutputType>[];
                };
                count: {
                    args: Prisma.COMENTARIOSCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.COMENTARIOSCountAggregateOutputType> | number;
                };
            };
        };
        GRUPOS: {
            payload: Prisma.$GRUPOSPayload<ExtArgs>;
            fields: Prisma.GRUPOSFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GRUPOSFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GRUPOSPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GRUPOSFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GRUPOSPayload>;
                };
                findFirst: {
                    args: Prisma.GRUPOSFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GRUPOSPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GRUPOSFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GRUPOSPayload>;
                };
                findMany: {
                    args: Prisma.GRUPOSFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GRUPOSPayload>[];
                };
                create: {
                    args: Prisma.GRUPOSCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GRUPOSPayload>;
                };
                createMany: {
                    args: Prisma.GRUPOSCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GRUPOSCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GRUPOSPayload>[];
                };
                delete: {
                    args: Prisma.GRUPOSDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GRUPOSPayload>;
                };
                update: {
                    args: Prisma.GRUPOSUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GRUPOSPayload>;
                };
                deleteMany: {
                    args: Prisma.GRUPOSDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GRUPOSUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GRUPOSUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GRUPOSPayload>[];
                };
                upsert: {
                    args: Prisma.GRUPOSUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GRUPOSPayload>;
                };
                aggregate: {
                    args: Prisma.GRUPOSAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGRUPOS>;
                };
                groupBy: {
                    args: Prisma.GRUPOSGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GRUPOSGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GRUPOSCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GRUPOSCountAggregateOutputType> | number;
                };
            };
        };
        MENSAJES: {
            payload: Prisma.$MENSAJESPayload<ExtArgs>;
            fields: Prisma.MENSAJESFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MENSAJESFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MENSAJESPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MENSAJESFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MENSAJESPayload>;
                };
                findFirst: {
                    args: Prisma.MENSAJESFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MENSAJESPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MENSAJESFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MENSAJESPayload>;
                };
                findMany: {
                    args: Prisma.MENSAJESFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MENSAJESPayload>[];
                };
                create: {
                    args: Prisma.MENSAJESCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MENSAJESPayload>;
                };
                createMany: {
                    args: Prisma.MENSAJESCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MENSAJESCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MENSAJESPayload>[];
                };
                delete: {
                    args: Prisma.MENSAJESDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MENSAJESPayload>;
                };
                update: {
                    args: Prisma.MENSAJESUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MENSAJESPayload>;
                };
                deleteMany: {
                    args: Prisma.MENSAJESDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MENSAJESUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MENSAJESUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MENSAJESPayload>[];
                };
                upsert: {
                    args: Prisma.MENSAJESUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MENSAJESPayload>;
                };
                aggregate: {
                    args: Prisma.MENSAJESAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMENSAJES>;
                };
                groupBy: {
                    args: Prisma.MENSAJESGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MENSAJESGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MENSAJESCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MENSAJESCountAggregateOutputType> | number;
                };
            };
        };
        MIEMBROS_CHAT: {
            payload: Prisma.$MIEMBROS_CHATPayload<ExtArgs>;
            fields: Prisma.MIEMBROS_CHATFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MIEMBROS_CHATFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MIEMBROS_CHATPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MIEMBROS_CHATFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MIEMBROS_CHATPayload>;
                };
                findFirst: {
                    args: Prisma.MIEMBROS_CHATFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MIEMBROS_CHATPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MIEMBROS_CHATFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MIEMBROS_CHATPayload>;
                };
                findMany: {
                    args: Prisma.MIEMBROS_CHATFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MIEMBROS_CHATPayload>[];
                };
                create: {
                    args: Prisma.MIEMBROS_CHATCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MIEMBROS_CHATPayload>;
                };
                createMany: {
                    args: Prisma.MIEMBROS_CHATCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MIEMBROS_CHATCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MIEMBROS_CHATPayload>[];
                };
                delete: {
                    args: Prisma.MIEMBROS_CHATDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MIEMBROS_CHATPayload>;
                };
                update: {
                    args: Prisma.MIEMBROS_CHATUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MIEMBROS_CHATPayload>;
                };
                deleteMany: {
                    args: Prisma.MIEMBROS_CHATDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MIEMBROS_CHATUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MIEMBROS_CHATUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MIEMBROS_CHATPayload>[];
                };
                upsert: {
                    args: Prisma.MIEMBROS_CHATUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MIEMBROS_CHATPayload>;
                };
                aggregate: {
                    args: Prisma.MIEMBROS_CHATAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMIEMBROS_CHAT>;
                };
                groupBy: {
                    args: Prisma.MIEMBROS_CHATGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MIEMBROS_CHATGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MIEMBROS_CHATCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MIEMBROS_CHATCountAggregateOutputType> | number;
                };
            };
        };
        MIEMBROS_GRUPO: {
            payload: Prisma.$MIEMBROS_GRUPOPayload<ExtArgs>;
            fields: Prisma.MIEMBROS_GRUPOFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MIEMBROS_GRUPOFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MIEMBROS_GRUPOPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MIEMBROS_GRUPOFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MIEMBROS_GRUPOPayload>;
                };
                findFirst: {
                    args: Prisma.MIEMBROS_GRUPOFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MIEMBROS_GRUPOPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MIEMBROS_GRUPOFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MIEMBROS_GRUPOPayload>;
                };
                findMany: {
                    args: Prisma.MIEMBROS_GRUPOFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MIEMBROS_GRUPOPayload>[];
                };
                create: {
                    args: Prisma.MIEMBROS_GRUPOCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MIEMBROS_GRUPOPayload>;
                };
                createMany: {
                    args: Prisma.MIEMBROS_GRUPOCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MIEMBROS_GRUPOCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MIEMBROS_GRUPOPayload>[];
                };
                delete: {
                    args: Prisma.MIEMBROS_GRUPODeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MIEMBROS_GRUPOPayload>;
                };
                update: {
                    args: Prisma.MIEMBROS_GRUPOUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MIEMBROS_GRUPOPayload>;
                };
                deleteMany: {
                    args: Prisma.MIEMBROS_GRUPODeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MIEMBROS_GRUPOUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MIEMBROS_GRUPOUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MIEMBROS_GRUPOPayload>[];
                };
                upsert: {
                    args: Prisma.MIEMBROS_GRUPOUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MIEMBROS_GRUPOPayload>;
                };
                aggregate: {
                    args: Prisma.MIEMBROS_GRUPOAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMIEMBROS_GRUPO>;
                };
                groupBy: {
                    args: Prisma.MIEMBROS_GRUPOGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MIEMBROS_GRUPOGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MIEMBROS_GRUPOCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MIEMBROS_GRUPOCountAggregateOutputType> | number;
                };
            };
        };
        MULTIMEDIA: {
            payload: Prisma.$MULTIMEDIAPayload<ExtArgs>;
            fields: Prisma.MULTIMEDIAFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MULTIMEDIAFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MULTIMEDIAPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MULTIMEDIAFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MULTIMEDIAPayload>;
                };
                findFirst: {
                    args: Prisma.MULTIMEDIAFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MULTIMEDIAPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MULTIMEDIAFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MULTIMEDIAPayload>;
                };
                findMany: {
                    args: Prisma.MULTIMEDIAFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MULTIMEDIAPayload>[];
                };
                create: {
                    args: Prisma.MULTIMEDIACreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MULTIMEDIAPayload>;
                };
                createMany: {
                    args: Prisma.MULTIMEDIACreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MULTIMEDIACreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MULTIMEDIAPayload>[];
                };
                delete: {
                    args: Prisma.MULTIMEDIADeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MULTIMEDIAPayload>;
                };
                update: {
                    args: Prisma.MULTIMEDIAUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MULTIMEDIAPayload>;
                };
                deleteMany: {
                    args: Prisma.MULTIMEDIADeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MULTIMEDIAUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MULTIMEDIAUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MULTIMEDIAPayload>[];
                };
                upsert: {
                    args: Prisma.MULTIMEDIAUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MULTIMEDIAPayload>;
                };
                aggregate: {
                    args: Prisma.MULTIMEDIAAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMULTIMEDIA>;
                };
                groupBy: {
                    args: Prisma.MULTIMEDIAGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MULTIMEDIAGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MULTIMEDIACountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MULTIMEDIACountAggregateOutputType> | number;
                };
            };
        };
        NOTIFICACIONES: {
            payload: Prisma.$NOTIFICACIONESPayload<ExtArgs>;
            fields: Prisma.NOTIFICACIONESFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NOTIFICACIONESFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NOTIFICACIONESPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NOTIFICACIONESFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NOTIFICACIONESPayload>;
                };
                findFirst: {
                    args: Prisma.NOTIFICACIONESFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NOTIFICACIONESPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NOTIFICACIONESFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NOTIFICACIONESPayload>;
                };
                findMany: {
                    args: Prisma.NOTIFICACIONESFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NOTIFICACIONESPayload>[];
                };
                create: {
                    args: Prisma.NOTIFICACIONESCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NOTIFICACIONESPayload>;
                };
                createMany: {
                    args: Prisma.NOTIFICACIONESCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NOTIFICACIONESCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NOTIFICACIONESPayload>[];
                };
                delete: {
                    args: Prisma.NOTIFICACIONESDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NOTIFICACIONESPayload>;
                };
                update: {
                    args: Prisma.NOTIFICACIONESUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NOTIFICACIONESPayload>;
                };
                deleteMany: {
                    args: Prisma.NOTIFICACIONESDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NOTIFICACIONESUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NOTIFICACIONESUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NOTIFICACIONESPayload>[];
                };
                upsert: {
                    args: Prisma.NOTIFICACIONESUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NOTIFICACIONESPayload>;
                };
                aggregate: {
                    args: Prisma.NOTIFICACIONESAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNOTIFICACIONES>;
                };
                groupBy: {
                    args: Prisma.NOTIFICACIONESGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NOTIFICACIONESGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NOTIFICACIONESCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NOTIFICACIONESCountAggregateOutputType> | number;
                };
            };
        };
        PERFILES: {
            payload: Prisma.$PERFILESPayload<ExtArgs>;
            fields: Prisma.PERFILESFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PERFILESFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PERFILESPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PERFILESFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PERFILESPayload>;
                };
                findFirst: {
                    args: Prisma.PERFILESFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PERFILESPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PERFILESFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PERFILESPayload>;
                };
                findMany: {
                    args: Prisma.PERFILESFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PERFILESPayload>[];
                };
                create: {
                    args: Prisma.PERFILESCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PERFILESPayload>;
                };
                createMany: {
                    args: Prisma.PERFILESCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PERFILESCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PERFILESPayload>[];
                };
                delete: {
                    args: Prisma.PERFILESDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PERFILESPayload>;
                };
                update: {
                    args: Prisma.PERFILESUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PERFILESPayload>;
                };
                deleteMany: {
                    args: Prisma.PERFILESDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PERFILESUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PERFILESUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PERFILESPayload>[];
                };
                upsert: {
                    args: Prisma.PERFILESUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PERFILESPayload>;
                };
                aggregate: {
                    args: Prisma.PERFILESAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePERFILES>;
                };
                groupBy: {
                    args: Prisma.PERFILESGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PERFILESGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PERFILESCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PERFILESCountAggregateOutputType> | number;
                };
            };
        };
        PUBLICACIONES: {
            payload: Prisma.$PUBLICACIONESPayload<ExtArgs>;
            fields: Prisma.PUBLICACIONESFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PUBLICACIONESFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PUBLICACIONESPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PUBLICACIONESFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PUBLICACIONESPayload>;
                };
                findFirst: {
                    args: Prisma.PUBLICACIONESFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PUBLICACIONESPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PUBLICACIONESFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PUBLICACIONESPayload>;
                };
                findMany: {
                    args: Prisma.PUBLICACIONESFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PUBLICACIONESPayload>[];
                };
                create: {
                    args: Prisma.PUBLICACIONESCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PUBLICACIONESPayload>;
                };
                createMany: {
                    args: Prisma.PUBLICACIONESCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PUBLICACIONESCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PUBLICACIONESPayload>[];
                };
                delete: {
                    args: Prisma.PUBLICACIONESDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PUBLICACIONESPayload>;
                };
                update: {
                    args: Prisma.PUBLICACIONESUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PUBLICACIONESPayload>;
                };
                deleteMany: {
                    args: Prisma.PUBLICACIONESDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PUBLICACIONESUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PUBLICACIONESUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PUBLICACIONESPayload>[];
                };
                upsert: {
                    args: Prisma.PUBLICACIONESUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PUBLICACIONESPayload>;
                };
                aggregate: {
                    args: Prisma.PUBLICACIONESAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePUBLICACIONES>;
                };
                groupBy: {
                    args: Prisma.PUBLICACIONESGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PUBLICACIONESGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PUBLICACIONESCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PUBLICACIONESCountAggregateOutputType> | number;
                };
            };
        };
        REACCIONES: {
            payload: Prisma.$REACCIONESPayload<ExtArgs>;
            fields: Prisma.REACCIONESFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.REACCIONESFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$REACCIONESPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.REACCIONESFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$REACCIONESPayload>;
                };
                findFirst: {
                    args: Prisma.REACCIONESFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$REACCIONESPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.REACCIONESFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$REACCIONESPayload>;
                };
                findMany: {
                    args: Prisma.REACCIONESFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$REACCIONESPayload>[];
                };
                create: {
                    args: Prisma.REACCIONESCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$REACCIONESPayload>;
                };
                createMany: {
                    args: Prisma.REACCIONESCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.REACCIONESCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$REACCIONESPayload>[];
                };
                delete: {
                    args: Prisma.REACCIONESDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$REACCIONESPayload>;
                };
                update: {
                    args: Prisma.REACCIONESUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$REACCIONESPayload>;
                };
                deleteMany: {
                    args: Prisma.REACCIONESDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.REACCIONESUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.REACCIONESUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$REACCIONESPayload>[];
                };
                upsert: {
                    args: Prisma.REACCIONESUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$REACCIONESPayload>;
                };
                aggregate: {
                    args: Prisma.REACCIONESAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateREACCIONES>;
                };
                groupBy: {
                    args: Prisma.REACCIONESGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.REACCIONESGroupByOutputType>[];
                };
                count: {
                    args: Prisma.REACCIONESCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.REACCIONESCountAggregateOutputType> | number;
                };
            };
        };
        REPORTES: {
            payload: Prisma.$REPORTESPayload<ExtArgs>;
            fields: Prisma.REPORTESFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.REPORTESFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$REPORTESPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.REPORTESFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$REPORTESPayload>;
                };
                findFirst: {
                    args: Prisma.REPORTESFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$REPORTESPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.REPORTESFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$REPORTESPayload>;
                };
                findMany: {
                    args: Prisma.REPORTESFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$REPORTESPayload>[];
                };
                create: {
                    args: Prisma.REPORTESCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$REPORTESPayload>;
                };
                createMany: {
                    args: Prisma.REPORTESCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.REPORTESCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$REPORTESPayload>[];
                };
                delete: {
                    args: Prisma.REPORTESDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$REPORTESPayload>;
                };
                update: {
                    args: Prisma.REPORTESUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$REPORTESPayload>;
                };
                deleteMany: {
                    args: Prisma.REPORTESDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.REPORTESUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.REPORTESUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$REPORTESPayload>[];
                };
                upsert: {
                    args: Prisma.REPORTESUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$REPORTESPayload>;
                };
                aggregate: {
                    args: Prisma.REPORTESAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateREPORTES>;
                };
                groupBy: {
                    args: Prisma.REPORTESGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.REPORTESGroupByOutputType>[];
                };
                count: {
                    args: Prisma.REPORTESCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.REPORTESCountAggregateOutputType> | number;
                };
            };
        };
        ROLES: {
            payload: Prisma.$ROLESPayload<ExtArgs>;
            fields: Prisma.ROLESFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ROLESFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ROLESPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ROLESFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ROLESPayload>;
                };
                findFirst: {
                    args: Prisma.ROLESFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ROLESPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ROLESFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ROLESPayload>;
                };
                findMany: {
                    args: Prisma.ROLESFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ROLESPayload>[];
                };
                create: {
                    args: Prisma.ROLESCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ROLESPayload>;
                };
                createMany: {
                    args: Prisma.ROLESCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ROLESCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ROLESPayload>[];
                };
                delete: {
                    args: Prisma.ROLESDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ROLESPayload>;
                };
                update: {
                    args: Prisma.ROLESUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ROLESPayload>;
                };
                deleteMany: {
                    args: Prisma.ROLESDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ROLESUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ROLESUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ROLESPayload>[];
                };
                upsert: {
                    args: Prisma.ROLESUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ROLESPayload>;
                };
                aggregate: {
                    args: Prisma.ROLESAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateROLES>;
                };
                groupBy: {
                    args: Prisma.ROLESGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ROLESGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ROLESCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ROLESCountAggregateOutputType> | number;
                };
            };
        };
        SANCIONES: {
            payload: Prisma.$SANCIONESPayload<ExtArgs>;
            fields: Prisma.SANCIONESFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SANCIONESFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SANCIONESPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SANCIONESFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SANCIONESPayload>;
                };
                findFirst: {
                    args: Prisma.SANCIONESFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SANCIONESPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SANCIONESFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SANCIONESPayload>;
                };
                findMany: {
                    args: Prisma.SANCIONESFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SANCIONESPayload>[];
                };
                create: {
                    args: Prisma.SANCIONESCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SANCIONESPayload>;
                };
                createMany: {
                    args: Prisma.SANCIONESCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SANCIONESCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SANCIONESPayload>[];
                };
                delete: {
                    args: Prisma.SANCIONESDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SANCIONESPayload>;
                };
                update: {
                    args: Prisma.SANCIONESUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SANCIONESPayload>;
                };
                deleteMany: {
                    args: Prisma.SANCIONESDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SANCIONESUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SANCIONESUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SANCIONESPayload>[];
                };
                upsert: {
                    args: Prisma.SANCIONESUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SANCIONESPayload>;
                };
                aggregate: {
                    args: Prisma.SANCIONESAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSANCIONES>;
                };
                groupBy: {
                    args: Prisma.SANCIONESGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SANCIONESGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SANCIONESCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SANCIONESCountAggregateOutputType> | number;
                };
            };
        };
        USUARIOS: {
            payload: Prisma.$USUARIOSPayload<ExtArgs>;
            fields: Prisma.USUARIOSFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.USUARIOSFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$USUARIOSPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.USUARIOSFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$USUARIOSPayload>;
                };
                findFirst: {
                    args: Prisma.USUARIOSFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$USUARIOSPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.USUARIOSFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$USUARIOSPayload>;
                };
                findMany: {
                    args: Prisma.USUARIOSFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$USUARIOSPayload>[];
                };
                create: {
                    args: Prisma.USUARIOSCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$USUARIOSPayload>;
                };
                createMany: {
                    args: Prisma.USUARIOSCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.USUARIOSCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$USUARIOSPayload>[];
                };
                delete: {
                    args: Prisma.USUARIOSDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$USUARIOSPayload>;
                };
                update: {
                    args: Prisma.USUARIOSUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$USUARIOSPayload>;
                };
                deleteMany: {
                    args: Prisma.USUARIOSDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.USUARIOSUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.USUARIOSUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$USUARIOSPayload>[];
                };
                upsert: {
                    args: Prisma.USUARIOSUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$USUARIOSPayload>;
                };
                aggregate: {
                    args: Prisma.USUARIOSAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUSUARIOS>;
                };
                groupBy: {
                    args: Prisma.USUARIOSGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.USUARIOSGroupByOutputType>[];
                };
                count: {
                    args: Prisma.USUARIOSCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.USUARIOSCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AMISTADESScalarFieldEnum: {
    readonly id: "id";
    readonly solicitante_id: "solicitante_id";
    readonly receptor_id: "receptor_id";
    readonly estado: "estado";
    readonly creado_en: "creado_en";
    readonly respondido_en: "respondido_en";
};
export type AMISTADESScalarFieldEnum = (typeof AMISTADESScalarFieldEnum)[keyof typeof AMISTADESScalarFieldEnum];
export declare const AVISOSScalarFieldEnum: {
    readonly id: "id";
    readonly autor_id: "autor_id";
    readonly titulo: "titulo";
    readonly contenido: "contenido";
    readonly categoria: "categoria";
    readonly urgente: "urgente";
    readonly alcance: "alcance";
    readonly carrera_id: "carrera_id";
    readonly cuatrimestre: "cuatrimestre";
    readonly publicado_en: "publicado_en";
};
export type AVISOSScalarFieldEnum = (typeof AVISOSScalarFieldEnum)[keyof typeof AVISOSScalarFieldEnum];
export declare const BLOQUEOSScalarFieldEnum: {
    readonly bloqueador_id: "bloqueador_id";
    readonly bloqueado_id: "bloqueado_id";
    readonly creado_en: "creado_en";
};
export type BLOQUEOSScalarFieldEnum = (typeof BLOQUEOSScalarFieldEnum)[keyof typeof BLOQUEOSScalarFieldEnum];
export declare const CARRERASScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly edificio: "edificio";
};
export type CARRERASScalarFieldEnum = (typeof CARRERASScalarFieldEnum)[keyof typeof CARRERASScalarFieldEnum];
export declare const CHATSScalarFieldEnum: {
    readonly id: "id";
    readonly tipo: "tipo";
    readonly nombre: "nombre";
    readonly creador_id: "creador_id";
    readonly creado_en: "creado_en";
};
export type CHATSScalarFieldEnum = (typeof CHATSScalarFieldEnum)[keyof typeof CHATSScalarFieldEnum];
export declare const COMENTARIOSScalarFieldEnum: {
    readonly id: "id";
    readonly publicacion_id: "publicacion_id";
    readonly autor_id: "autor_id";
    readonly contenido: "contenido";
    readonly creado_en: "creado_en";
    readonly eliminado_en: "eliminado_en";
};
export type COMENTARIOSScalarFieldEnum = (typeof COMENTARIOSScalarFieldEnum)[keyof typeof COMENTARIOSScalarFieldEnum];
export declare const GRUPOSScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
    readonly imagen_url: "imagen_url";
    readonly tipo: "tipo";
    readonly privacidad: "privacidad";
    readonly carrera_id: "carrera_id";
    readonly creador_id: "creador_id";
    readonly creado_en: "creado_en";
};
export type GRUPOSScalarFieldEnum = (typeof GRUPOSScalarFieldEnum)[keyof typeof GRUPOSScalarFieldEnum];
export declare const MENSAJESScalarFieldEnum: {
    readonly id: "id";
    readonly chat_id: "chat_id";
    readonly remitente_id: "remitente_id";
    readonly contenido: "contenido";
    readonly enviado_en: "enviado_en";
};
export type MENSAJESScalarFieldEnum = (typeof MENSAJESScalarFieldEnum)[keyof typeof MENSAJESScalarFieldEnum];
export declare const MIEMBROS_CHATScalarFieldEnum: {
    readonly chat_id: "chat_id";
    readonly usuario_id: "usuario_id";
    readonly rol: "rol";
    readonly fijado: "fijado";
    readonly archivado: "archivado";
    readonly eliminado: "eliminado";
    readonly unido_en: "unido_en";
};
export type MIEMBROS_CHATScalarFieldEnum = (typeof MIEMBROS_CHATScalarFieldEnum)[keyof typeof MIEMBROS_CHATScalarFieldEnum];
export declare const MIEMBROS_GRUPOScalarFieldEnum: {
    readonly grupo_id: "grupo_id";
    readonly usuario_id: "usuario_id";
    readonly rol: "rol";
    readonly unido_en: "unido_en";
};
export type MIEMBROS_GRUPOScalarFieldEnum = (typeof MIEMBROS_GRUPOScalarFieldEnum)[keyof typeof MIEMBROS_GRUPOScalarFieldEnum];
export declare const MULTIMEDIAScalarFieldEnum: {
    readonly id: "id";
    readonly publicacion_id: "publicacion_id";
    readonly mensaje_id: "mensaje_id";
    readonly tipo: "tipo";
    readonly url: "url";
    readonly mime_type: "mime_type";
    readonly tamano_bytes: "tamano_bytes";
    readonly creado_en: "creado_en";
};
export type MULTIMEDIAScalarFieldEnum = (typeof MULTIMEDIAScalarFieldEnum)[keyof typeof MULTIMEDIAScalarFieldEnum];
export declare const NOTIFICACIONESScalarFieldEnum: {
    readonly id: "id";
    readonly usuario_id: "usuario_id";
    readonly actor_id: "actor_id";
    readonly tipo: "tipo";
    readonly aviso_id: "aviso_id";
    readonly publicacion_id: "publicacion_id";
    readonly leida: "leida";
    readonly creado_en: "creado_en";
};
export type NOTIFICACIONESScalarFieldEnum = (typeof NOTIFICACIONESScalarFieldEnum)[keyof typeof NOTIFICACIONESScalarFieldEnum];
export declare const PERFILESScalarFieldEnum: {
    readonly id: "id";
    readonly usuario_id: "usuario_id";
    readonly nombre: "nombre";
    readonly apellidos: "apellidos";
    readonly matricula: "matricula";
    readonly carrera_id: "carrera_id";
    readonly cuatrimestre: "cuatrimestre";
    readonly biografia: "biografia";
    readonly avatar_url: "avatar_url";
    readonly color_fondo_perfil: "color_fondo_perfil";
    readonly perfil_privado: "perfil_privado";
};
export type PERFILESScalarFieldEnum = (typeof PERFILESScalarFieldEnum)[keyof typeof PERFILESScalarFieldEnum];
export declare const PUBLICACIONESScalarFieldEnum: {
    readonly id: "id";
    readonly autor_id: "autor_id";
    readonly publicacion_origen_id: "publicacion_origen_id";
    readonly contenido: "contenido";
    readonly tipo: "tipo";
    readonly creado_en: "creado_en";
    readonly eliminada_en: "eliminada_en";
    readonly eliminada_por: "eliminada_por";
};
export type PUBLICACIONESScalarFieldEnum = (typeof PUBLICACIONESScalarFieldEnum)[keyof typeof PUBLICACIONESScalarFieldEnum];
export declare const REACCIONESScalarFieldEnum: {
    readonly usuario_id: "usuario_id";
    readonly publicacion_id: "publicacion_id";
    readonly tipo: "tipo";
    readonly creado_en: "creado_en";
};
export type REACCIONESScalarFieldEnum = (typeof REACCIONESScalarFieldEnum)[keyof typeof REACCIONESScalarFieldEnum];
export declare const REPORTESScalarFieldEnum: {
    readonly id: "id";
    readonly reportante_id: "reportante_id";
    readonly usuario_reportado_id: "usuario_reportado_id";
    readonly publicacion_id: "publicacion_id";
    readonly comentario_id: "comentario_id";
    readonly grupo_id: "grupo_id";
    readonly motivo: "motivo";
    readonly descripcion: "descripcion";
    readonly estado: "estado";
    readonly revisado_por: "revisado_por";
    readonly creado_en: "creado_en";
    readonly resuelto_en: "resuelto_en";
};
export type REPORTESScalarFieldEnum = (typeof REPORTESScalarFieldEnum)[keyof typeof REPORTESScalarFieldEnum];
export declare const ROLESScalarFieldEnum: {
    readonly nombre: "nombre";
    readonly id: "id";
};
export type ROLESScalarFieldEnum = (typeof ROLESScalarFieldEnum)[keyof typeof ROLESScalarFieldEnum];
export declare const SANCIONESScalarFieldEnum: {
    readonly id: "id";
    readonly usuario_id: "usuario_id";
    readonly admin_id: "admin_id";
    readonly reporte_id: "reporte_id";
    readonly tipo: "tipo";
    readonly motivo: "motivo";
    readonly inicia_en: "inicia_en";
    readonly termina_en: "termina_en";
    readonly activa: "activa";
};
export type SANCIONESScalarFieldEnum = (typeof SANCIONESScalarFieldEnum)[keyof typeof SANCIONESScalarFieldEnum];
export declare const USUARIOSScalarFieldEnum: {
    readonly id: "id";
    readonly password_hash: "password_hash";
    readonly estado: "estado";
    readonly creado_en: "creado_en";
    readonly ultimo_acceso: "ultimo_acceso";
    readonly correo_institucional: "correo_institucional";
    readonly rol_id: "rol_id";
};
export type USUARIOSScalarFieldEnum = (typeof USUARIOSScalarFieldEnum)[keyof typeof USUARIOSScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>;
export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    aMISTADES?: Prisma.AMISTADESOmit;
    aVISOS?: Prisma.AVISOSOmit;
    bLOQUEOS?: Prisma.BLOQUEOSOmit;
    cARRERAS?: Prisma.CARRERASOmit;
    cHATS?: Prisma.CHATSOmit;
    cOMENTARIOS?: Prisma.COMENTARIOSOmit;
    gRUPOS?: Prisma.GRUPOSOmit;
    mENSAJES?: Prisma.MENSAJESOmit;
    mIEMBROS_CHAT?: Prisma.MIEMBROS_CHATOmit;
    mIEMBROS_GRUPO?: Prisma.MIEMBROS_GRUPOOmit;
    mULTIMEDIA?: Prisma.MULTIMEDIAOmit;
    nOTIFICACIONES?: Prisma.NOTIFICACIONESOmit;
    pERFILES?: Prisma.PERFILESOmit;
    pUBLICACIONES?: Prisma.PUBLICACIONESOmit;
    rEACCIONES?: Prisma.REACCIONESOmit;
    rEPORTES?: Prisma.REPORTESOmit;
    rOLES?: Prisma.ROLESOmit;
    sANCIONES?: Prisma.SANCIONESOmit;
    uSUARIOS?: Prisma.USUARIOSOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
