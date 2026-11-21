import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BLOQUEOSModel = runtime.Types.Result.DefaultSelection<Prisma.$BLOQUEOSPayload>;
export type AggregateBLOQUEOS = {
    _count: BLOQUEOSCountAggregateOutputType | null;
    _min: BLOQUEOSMinAggregateOutputType | null;
    _max: BLOQUEOSMaxAggregateOutputType | null;
};
export type BLOQUEOSMinAggregateOutputType = {
    bloqueador_id: string | null;
    bloqueado_id: string | null;
    creado_en: Date | null;
};
export type BLOQUEOSMaxAggregateOutputType = {
    bloqueador_id: string | null;
    bloqueado_id: string | null;
    creado_en: Date | null;
};
export type BLOQUEOSCountAggregateOutputType = {
    bloqueador_id: number;
    bloqueado_id: number;
    creado_en: number;
    _all: number;
};
export type BLOQUEOSMinAggregateInputType = {
    bloqueador_id?: true;
    bloqueado_id?: true;
    creado_en?: true;
};
export type BLOQUEOSMaxAggregateInputType = {
    bloqueador_id?: true;
    bloqueado_id?: true;
    creado_en?: true;
};
export type BLOQUEOSCountAggregateInputType = {
    bloqueador_id?: true;
    bloqueado_id?: true;
    creado_en?: true;
    _all?: true;
};
export type BLOQUEOSAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BLOQUEOSWhereInput;
    orderBy?: Prisma.BLOQUEOSOrderByWithRelationInput | Prisma.BLOQUEOSOrderByWithRelationInput[];
    cursor?: Prisma.BLOQUEOSWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BLOQUEOSCountAggregateInputType;
    _min?: BLOQUEOSMinAggregateInputType;
    _max?: BLOQUEOSMaxAggregateInputType;
};
export type GetBLOQUEOSAggregateType<T extends BLOQUEOSAggregateArgs> = {
    [P in keyof T & keyof AggregateBLOQUEOS]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBLOQUEOS[P]> : Prisma.GetScalarType<T[P], AggregateBLOQUEOS[P]>;
};
export type BLOQUEOSGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BLOQUEOSWhereInput;
    orderBy?: Prisma.BLOQUEOSOrderByWithAggregationInput | Prisma.BLOQUEOSOrderByWithAggregationInput[];
    by: Prisma.BLOQUEOSScalarFieldEnum[] | Prisma.BLOQUEOSScalarFieldEnum;
    having?: Prisma.BLOQUEOSScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BLOQUEOSCountAggregateInputType | true;
    _min?: BLOQUEOSMinAggregateInputType;
    _max?: BLOQUEOSMaxAggregateInputType;
};
export type BLOQUEOSGroupByOutputType = {
    bloqueador_id: string;
    bloqueado_id: string;
    creado_en: Date;
    _count: BLOQUEOSCountAggregateOutputType | null;
    _min: BLOQUEOSMinAggregateOutputType | null;
    _max: BLOQUEOSMaxAggregateOutputType | null;
};
export type GetBLOQUEOSGroupByPayload<T extends BLOQUEOSGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BLOQUEOSGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BLOQUEOSGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BLOQUEOSGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BLOQUEOSGroupByOutputType[P]>;
}>>;
export type BLOQUEOSWhereInput = {
    AND?: Prisma.BLOQUEOSWhereInput | Prisma.BLOQUEOSWhereInput[];
    OR?: Prisma.BLOQUEOSWhereInput[];
    NOT?: Prisma.BLOQUEOSWhereInput | Prisma.BLOQUEOSWhereInput[];
    bloqueador_id?: Prisma.UuidFilter<"BLOQUEOS"> | string;
    bloqueado_id?: Prisma.UuidFilter<"BLOQUEOS"> | string;
    creado_en?: Prisma.DateTimeFilter<"BLOQUEOS"> | Date | string;
    USUARIOS_BLOQUEOS_bloqueado_idToUSUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
    USUARIOS_BLOQUEOS_bloqueador_idToUSUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
};
export type BLOQUEOSOrderByWithRelationInput = {
    bloqueador_id?: Prisma.SortOrder;
    bloqueado_id?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    USUARIOS_BLOQUEOS_bloqueado_idToUSUARIOS?: Prisma.USUARIOSOrderByWithRelationInput;
    USUARIOS_BLOQUEOS_bloqueador_idToUSUARIOS?: Prisma.USUARIOSOrderByWithRelationInput;
};
export type BLOQUEOSWhereUniqueInput = Prisma.AtLeast<{
    bloqueador_id_bloqueado_id?: Prisma.BLOQUEOSBloqueador_idBloqueado_idCompoundUniqueInput;
    AND?: Prisma.BLOQUEOSWhereInput | Prisma.BLOQUEOSWhereInput[];
    OR?: Prisma.BLOQUEOSWhereInput[];
    NOT?: Prisma.BLOQUEOSWhereInput | Prisma.BLOQUEOSWhereInput[];
    bloqueador_id?: Prisma.UuidFilter<"BLOQUEOS"> | string;
    bloqueado_id?: Prisma.UuidFilter<"BLOQUEOS"> | string;
    creado_en?: Prisma.DateTimeFilter<"BLOQUEOS"> | Date | string;
    USUARIOS_BLOQUEOS_bloqueado_idToUSUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
    USUARIOS_BLOQUEOS_bloqueador_idToUSUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
}, "bloqueador_id_bloqueado_id">;
export type BLOQUEOSOrderByWithAggregationInput = {
    bloqueador_id?: Prisma.SortOrder;
    bloqueado_id?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    _count?: Prisma.BLOQUEOSCountOrderByAggregateInput;
    _max?: Prisma.BLOQUEOSMaxOrderByAggregateInput;
    _min?: Prisma.BLOQUEOSMinOrderByAggregateInput;
};
export type BLOQUEOSScalarWhereWithAggregatesInput = {
    AND?: Prisma.BLOQUEOSScalarWhereWithAggregatesInput | Prisma.BLOQUEOSScalarWhereWithAggregatesInput[];
    OR?: Prisma.BLOQUEOSScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BLOQUEOSScalarWhereWithAggregatesInput | Prisma.BLOQUEOSScalarWhereWithAggregatesInput[];
    bloqueador_id?: Prisma.UuidWithAggregatesFilter<"BLOQUEOS"> | string;
    bloqueado_id?: Prisma.UuidWithAggregatesFilter<"BLOQUEOS"> | string;
    creado_en?: Prisma.DateTimeWithAggregatesFilter<"BLOQUEOS"> | Date | string;
};
export type BLOQUEOSCreateInput = {
    creado_en?: Date | string;
    USUARIOS_BLOQUEOS_bloqueado_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutBLOQUEOS_BLOQUEOS_bloqueado_idToUSUARIOSInput;
    USUARIOS_BLOQUEOS_bloqueador_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutBLOQUEOS_BLOQUEOS_bloqueador_idToUSUARIOSInput;
};
export type BLOQUEOSUncheckedCreateInput = {
    bloqueador_id: string;
    bloqueado_id: string;
    creado_en?: Date | string;
};
export type BLOQUEOSUpdateInput = {
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    USUARIOS_BLOQUEOS_bloqueado_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutBLOQUEOS_BLOQUEOS_bloqueado_idToUSUARIOSNestedInput;
    USUARIOS_BLOQUEOS_bloqueador_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutBLOQUEOS_BLOQUEOS_bloqueador_idToUSUARIOSNestedInput;
};
export type BLOQUEOSUncheckedUpdateInput = {
    bloqueador_id?: Prisma.StringFieldUpdateOperationsInput | string;
    bloqueado_id?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BLOQUEOSCreateManyInput = {
    bloqueador_id: string;
    bloqueado_id: string;
    creado_en?: Date | string;
};
export type BLOQUEOSUpdateManyMutationInput = {
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BLOQUEOSUncheckedUpdateManyInput = {
    bloqueador_id?: Prisma.StringFieldUpdateOperationsInput | string;
    bloqueado_id?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BLOQUEOSBloqueador_idBloqueado_idCompoundUniqueInput = {
    bloqueador_id: string;
    bloqueado_id: string;
};
export type BLOQUEOSCountOrderByAggregateInput = {
    bloqueador_id?: Prisma.SortOrder;
    bloqueado_id?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
};
export type BLOQUEOSMaxOrderByAggregateInput = {
    bloqueador_id?: Prisma.SortOrder;
    bloqueado_id?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
};
export type BLOQUEOSMinOrderByAggregateInput = {
    bloqueador_id?: Prisma.SortOrder;
    bloqueado_id?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
};
export type BLOQUEOSListRelationFilter = {
    every?: Prisma.BLOQUEOSWhereInput;
    some?: Prisma.BLOQUEOSWhereInput;
    none?: Prisma.BLOQUEOSWhereInput;
};
export type BLOQUEOSOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BLOQUEOSCreateNestedManyWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.BLOQUEOSCreateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput, Prisma.BLOQUEOSUncheckedCreateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput> | Prisma.BLOQUEOSCreateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput[] | Prisma.BLOQUEOSUncheckedCreateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.BLOQUEOSCreateOrConnectWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput | Prisma.BLOQUEOSCreateOrConnectWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput[];
    createMany?: Prisma.BLOQUEOSCreateManyUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInputEnvelope;
    connect?: Prisma.BLOQUEOSWhereUniqueInput | Prisma.BLOQUEOSWhereUniqueInput[];
};
export type BLOQUEOSCreateNestedManyWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.BLOQUEOSCreateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput, Prisma.BLOQUEOSUncheckedCreateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput> | Prisma.BLOQUEOSCreateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput[] | Prisma.BLOQUEOSUncheckedCreateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.BLOQUEOSCreateOrConnectWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput | Prisma.BLOQUEOSCreateOrConnectWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput[];
    createMany?: Prisma.BLOQUEOSCreateManyUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInputEnvelope;
    connect?: Prisma.BLOQUEOSWhereUniqueInput | Prisma.BLOQUEOSWhereUniqueInput[];
};
export type BLOQUEOSUncheckedCreateNestedManyWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.BLOQUEOSCreateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput, Prisma.BLOQUEOSUncheckedCreateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput> | Prisma.BLOQUEOSCreateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput[] | Prisma.BLOQUEOSUncheckedCreateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.BLOQUEOSCreateOrConnectWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput | Prisma.BLOQUEOSCreateOrConnectWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput[];
    createMany?: Prisma.BLOQUEOSCreateManyUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInputEnvelope;
    connect?: Prisma.BLOQUEOSWhereUniqueInput | Prisma.BLOQUEOSWhereUniqueInput[];
};
export type BLOQUEOSUncheckedCreateNestedManyWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.BLOQUEOSCreateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput, Prisma.BLOQUEOSUncheckedCreateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput> | Prisma.BLOQUEOSCreateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput[] | Prisma.BLOQUEOSUncheckedCreateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.BLOQUEOSCreateOrConnectWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput | Prisma.BLOQUEOSCreateOrConnectWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput[];
    createMany?: Prisma.BLOQUEOSCreateManyUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInputEnvelope;
    connect?: Prisma.BLOQUEOSWhereUniqueInput | Prisma.BLOQUEOSWhereUniqueInput[];
};
export type BLOQUEOSUpdateManyWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.BLOQUEOSCreateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput, Prisma.BLOQUEOSUncheckedCreateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput> | Prisma.BLOQUEOSCreateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput[] | Prisma.BLOQUEOSUncheckedCreateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.BLOQUEOSCreateOrConnectWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput | Prisma.BLOQUEOSCreateOrConnectWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput[];
    upsert?: Prisma.BLOQUEOSUpsertWithWhereUniqueWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput | Prisma.BLOQUEOSUpsertWithWhereUniqueWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput[];
    createMany?: Prisma.BLOQUEOSCreateManyUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInputEnvelope;
    set?: Prisma.BLOQUEOSWhereUniqueInput | Prisma.BLOQUEOSWhereUniqueInput[];
    disconnect?: Prisma.BLOQUEOSWhereUniqueInput | Prisma.BLOQUEOSWhereUniqueInput[];
    delete?: Prisma.BLOQUEOSWhereUniqueInput | Prisma.BLOQUEOSWhereUniqueInput[];
    connect?: Prisma.BLOQUEOSWhereUniqueInput | Prisma.BLOQUEOSWhereUniqueInput[];
    update?: Prisma.BLOQUEOSUpdateWithWhereUniqueWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput | Prisma.BLOQUEOSUpdateWithWhereUniqueWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput[];
    updateMany?: Prisma.BLOQUEOSUpdateManyWithWhereWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput | Prisma.BLOQUEOSUpdateManyWithWhereWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput[];
    deleteMany?: Prisma.BLOQUEOSScalarWhereInput | Prisma.BLOQUEOSScalarWhereInput[];
};
export type BLOQUEOSUpdateManyWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.BLOQUEOSCreateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput, Prisma.BLOQUEOSUncheckedCreateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput> | Prisma.BLOQUEOSCreateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput[] | Prisma.BLOQUEOSUncheckedCreateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.BLOQUEOSCreateOrConnectWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput | Prisma.BLOQUEOSCreateOrConnectWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput[];
    upsert?: Prisma.BLOQUEOSUpsertWithWhereUniqueWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput | Prisma.BLOQUEOSUpsertWithWhereUniqueWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput[];
    createMany?: Prisma.BLOQUEOSCreateManyUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInputEnvelope;
    set?: Prisma.BLOQUEOSWhereUniqueInput | Prisma.BLOQUEOSWhereUniqueInput[];
    disconnect?: Prisma.BLOQUEOSWhereUniqueInput | Prisma.BLOQUEOSWhereUniqueInput[];
    delete?: Prisma.BLOQUEOSWhereUniqueInput | Prisma.BLOQUEOSWhereUniqueInput[];
    connect?: Prisma.BLOQUEOSWhereUniqueInput | Prisma.BLOQUEOSWhereUniqueInput[];
    update?: Prisma.BLOQUEOSUpdateWithWhereUniqueWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput | Prisma.BLOQUEOSUpdateWithWhereUniqueWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput[];
    updateMany?: Prisma.BLOQUEOSUpdateManyWithWhereWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput | Prisma.BLOQUEOSUpdateManyWithWhereWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput[];
    deleteMany?: Prisma.BLOQUEOSScalarWhereInput | Prisma.BLOQUEOSScalarWhereInput[];
};
export type BLOQUEOSUncheckedUpdateManyWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.BLOQUEOSCreateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput, Prisma.BLOQUEOSUncheckedCreateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput> | Prisma.BLOQUEOSCreateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput[] | Prisma.BLOQUEOSUncheckedCreateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.BLOQUEOSCreateOrConnectWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput | Prisma.BLOQUEOSCreateOrConnectWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput[];
    upsert?: Prisma.BLOQUEOSUpsertWithWhereUniqueWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput | Prisma.BLOQUEOSUpsertWithWhereUniqueWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput[];
    createMany?: Prisma.BLOQUEOSCreateManyUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInputEnvelope;
    set?: Prisma.BLOQUEOSWhereUniqueInput | Prisma.BLOQUEOSWhereUniqueInput[];
    disconnect?: Prisma.BLOQUEOSWhereUniqueInput | Prisma.BLOQUEOSWhereUniqueInput[];
    delete?: Prisma.BLOQUEOSWhereUniqueInput | Prisma.BLOQUEOSWhereUniqueInput[];
    connect?: Prisma.BLOQUEOSWhereUniqueInput | Prisma.BLOQUEOSWhereUniqueInput[];
    update?: Prisma.BLOQUEOSUpdateWithWhereUniqueWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput | Prisma.BLOQUEOSUpdateWithWhereUniqueWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput[];
    updateMany?: Prisma.BLOQUEOSUpdateManyWithWhereWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput | Prisma.BLOQUEOSUpdateManyWithWhereWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput[];
    deleteMany?: Prisma.BLOQUEOSScalarWhereInput | Prisma.BLOQUEOSScalarWhereInput[];
};
export type BLOQUEOSUncheckedUpdateManyWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.BLOQUEOSCreateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput, Prisma.BLOQUEOSUncheckedCreateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput> | Prisma.BLOQUEOSCreateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput[] | Prisma.BLOQUEOSUncheckedCreateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.BLOQUEOSCreateOrConnectWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput | Prisma.BLOQUEOSCreateOrConnectWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput[];
    upsert?: Prisma.BLOQUEOSUpsertWithWhereUniqueWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput | Prisma.BLOQUEOSUpsertWithWhereUniqueWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput[];
    createMany?: Prisma.BLOQUEOSCreateManyUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInputEnvelope;
    set?: Prisma.BLOQUEOSWhereUniqueInput | Prisma.BLOQUEOSWhereUniqueInput[];
    disconnect?: Prisma.BLOQUEOSWhereUniqueInput | Prisma.BLOQUEOSWhereUniqueInput[];
    delete?: Prisma.BLOQUEOSWhereUniqueInput | Prisma.BLOQUEOSWhereUniqueInput[];
    connect?: Prisma.BLOQUEOSWhereUniqueInput | Prisma.BLOQUEOSWhereUniqueInput[];
    update?: Prisma.BLOQUEOSUpdateWithWhereUniqueWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput | Prisma.BLOQUEOSUpdateWithWhereUniqueWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput[];
    updateMany?: Prisma.BLOQUEOSUpdateManyWithWhereWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput | Prisma.BLOQUEOSUpdateManyWithWhereWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput[];
    deleteMany?: Prisma.BLOQUEOSScalarWhereInput | Prisma.BLOQUEOSScalarWhereInput[];
};
export type BLOQUEOSCreateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput = {
    creado_en?: Date | string;
    USUARIOS_BLOQUEOS_bloqueador_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutBLOQUEOS_BLOQUEOS_bloqueador_idToUSUARIOSInput;
};
export type BLOQUEOSUncheckedCreateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput = {
    bloqueador_id: string;
    creado_en?: Date | string;
};
export type BLOQUEOSCreateOrConnectWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput = {
    where: Prisma.BLOQUEOSWhereUniqueInput;
    create: Prisma.XOR<Prisma.BLOQUEOSCreateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput, Prisma.BLOQUEOSUncheckedCreateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput>;
};
export type BLOQUEOSCreateManyUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInputEnvelope = {
    data: Prisma.BLOQUEOSCreateManyUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput | Prisma.BLOQUEOSCreateManyUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput[];
    skipDuplicates?: boolean;
};
export type BLOQUEOSCreateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput = {
    creado_en?: Date | string;
    USUARIOS_BLOQUEOS_bloqueado_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutBLOQUEOS_BLOQUEOS_bloqueado_idToUSUARIOSInput;
};
export type BLOQUEOSUncheckedCreateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput = {
    bloqueado_id: string;
    creado_en?: Date | string;
};
export type BLOQUEOSCreateOrConnectWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput = {
    where: Prisma.BLOQUEOSWhereUniqueInput;
    create: Prisma.XOR<Prisma.BLOQUEOSCreateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput, Prisma.BLOQUEOSUncheckedCreateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput>;
};
export type BLOQUEOSCreateManyUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInputEnvelope = {
    data: Prisma.BLOQUEOSCreateManyUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput | Prisma.BLOQUEOSCreateManyUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput[];
    skipDuplicates?: boolean;
};
export type BLOQUEOSUpsertWithWhereUniqueWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput = {
    where: Prisma.BLOQUEOSWhereUniqueInput;
    update: Prisma.XOR<Prisma.BLOQUEOSUpdateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput, Prisma.BLOQUEOSUncheckedUpdateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput>;
    create: Prisma.XOR<Prisma.BLOQUEOSCreateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput, Prisma.BLOQUEOSUncheckedCreateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput>;
};
export type BLOQUEOSUpdateWithWhereUniqueWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput = {
    where: Prisma.BLOQUEOSWhereUniqueInput;
    data: Prisma.XOR<Prisma.BLOQUEOSUpdateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput, Prisma.BLOQUEOSUncheckedUpdateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput>;
};
export type BLOQUEOSUpdateManyWithWhereWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput = {
    where: Prisma.BLOQUEOSScalarWhereInput;
    data: Prisma.XOR<Prisma.BLOQUEOSUpdateManyMutationInput, Prisma.BLOQUEOSUncheckedUpdateManyWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput>;
};
export type BLOQUEOSScalarWhereInput = {
    AND?: Prisma.BLOQUEOSScalarWhereInput | Prisma.BLOQUEOSScalarWhereInput[];
    OR?: Prisma.BLOQUEOSScalarWhereInput[];
    NOT?: Prisma.BLOQUEOSScalarWhereInput | Prisma.BLOQUEOSScalarWhereInput[];
    bloqueador_id?: Prisma.UuidFilter<"BLOQUEOS"> | string;
    bloqueado_id?: Prisma.UuidFilter<"BLOQUEOS"> | string;
    creado_en?: Prisma.DateTimeFilter<"BLOQUEOS"> | Date | string;
};
export type BLOQUEOSUpsertWithWhereUniqueWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput = {
    where: Prisma.BLOQUEOSWhereUniqueInput;
    update: Prisma.XOR<Prisma.BLOQUEOSUpdateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput, Prisma.BLOQUEOSUncheckedUpdateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput>;
    create: Prisma.XOR<Prisma.BLOQUEOSCreateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput, Prisma.BLOQUEOSUncheckedCreateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput>;
};
export type BLOQUEOSUpdateWithWhereUniqueWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput = {
    where: Prisma.BLOQUEOSWhereUniqueInput;
    data: Prisma.XOR<Prisma.BLOQUEOSUpdateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput, Prisma.BLOQUEOSUncheckedUpdateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput>;
};
export type BLOQUEOSUpdateManyWithWhereWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput = {
    where: Prisma.BLOQUEOSScalarWhereInput;
    data: Prisma.XOR<Prisma.BLOQUEOSUpdateManyMutationInput, Prisma.BLOQUEOSUncheckedUpdateManyWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput>;
};
export type BLOQUEOSCreateManyUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput = {
    bloqueador_id: string;
    creado_en?: Date | string;
};
export type BLOQUEOSCreateManyUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput = {
    bloqueado_id: string;
    creado_en?: Date | string;
};
export type BLOQUEOSUpdateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput = {
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    USUARIOS_BLOQUEOS_bloqueador_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutBLOQUEOS_BLOQUEOS_bloqueador_idToUSUARIOSNestedInput;
};
export type BLOQUEOSUncheckedUpdateWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput = {
    bloqueador_id?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BLOQUEOSUncheckedUpdateManyWithoutUSUARIOS_BLOQUEOS_bloqueado_idToUSUARIOSInput = {
    bloqueador_id?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BLOQUEOSUpdateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput = {
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    USUARIOS_BLOQUEOS_bloqueado_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutBLOQUEOS_BLOQUEOS_bloqueado_idToUSUARIOSNestedInput;
};
export type BLOQUEOSUncheckedUpdateWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput = {
    bloqueado_id?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BLOQUEOSUncheckedUpdateManyWithoutUSUARIOS_BLOQUEOS_bloqueador_idToUSUARIOSInput = {
    bloqueado_id?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BLOQUEOSSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    bloqueador_id?: boolean;
    bloqueado_id?: boolean;
    creado_en?: boolean;
    USUARIOS_BLOQUEOS_bloqueado_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    USUARIOS_BLOQUEOS_bloqueador_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bLOQUEOS"]>;
export type BLOQUEOSSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    bloqueador_id?: boolean;
    bloqueado_id?: boolean;
    creado_en?: boolean;
    USUARIOS_BLOQUEOS_bloqueado_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    USUARIOS_BLOQUEOS_bloqueador_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bLOQUEOS"]>;
export type BLOQUEOSSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    bloqueador_id?: boolean;
    bloqueado_id?: boolean;
    creado_en?: boolean;
    USUARIOS_BLOQUEOS_bloqueado_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    USUARIOS_BLOQUEOS_bloqueador_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bLOQUEOS"]>;
export type BLOQUEOSSelectScalar = {
    bloqueador_id?: boolean;
    bloqueado_id?: boolean;
    creado_en?: boolean;
};
export type BLOQUEOSOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"bloqueador_id" | "bloqueado_id" | "creado_en", ExtArgs["result"]["bLOQUEOS"]>;
export type BLOQUEOSInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USUARIOS_BLOQUEOS_bloqueado_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    USUARIOS_BLOQUEOS_bloqueador_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type BLOQUEOSIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USUARIOS_BLOQUEOS_bloqueado_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    USUARIOS_BLOQUEOS_bloqueador_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type BLOQUEOSIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USUARIOS_BLOQUEOS_bloqueado_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    USUARIOS_BLOQUEOS_bloqueador_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type $BLOQUEOSPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BLOQUEOS";
    objects: {
        USUARIOS_BLOQUEOS_bloqueado_idToUSUARIOS: Prisma.$USUARIOSPayload<ExtArgs>;
        USUARIOS_BLOQUEOS_bloqueador_idToUSUARIOS: Prisma.$USUARIOSPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        bloqueador_id: string;
        bloqueado_id: string;
        creado_en: Date;
    }, ExtArgs["result"]["bLOQUEOS"]>;
    composites: {};
};
export type BLOQUEOSGetPayload<S extends boolean | null | undefined | BLOQUEOSDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BLOQUEOSPayload, S>;
export type BLOQUEOSCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BLOQUEOSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BLOQUEOSCountAggregateInputType | true;
};
export interface BLOQUEOSDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BLOQUEOS'];
        meta: {
            name: 'BLOQUEOS';
        };
    };
    findUnique<T extends BLOQUEOSFindUniqueArgs>(args: Prisma.SelectSubset<T, BLOQUEOSFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BLOQUEOSClient<runtime.Types.Result.GetResult<Prisma.$BLOQUEOSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BLOQUEOSFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BLOQUEOSFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BLOQUEOSClient<runtime.Types.Result.GetResult<Prisma.$BLOQUEOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BLOQUEOSFindFirstArgs>(args?: Prisma.SelectSubset<T, BLOQUEOSFindFirstArgs<ExtArgs>>): Prisma.Prisma__BLOQUEOSClient<runtime.Types.Result.GetResult<Prisma.$BLOQUEOSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BLOQUEOSFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BLOQUEOSFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BLOQUEOSClient<runtime.Types.Result.GetResult<Prisma.$BLOQUEOSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BLOQUEOSFindManyArgs>(args?: Prisma.SelectSubset<T, BLOQUEOSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BLOQUEOSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BLOQUEOSCreateArgs>(args: Prisma.SelectSubset<T, BLOQUEOSCreateArgs<ExtArgs>>): Prisma.Prisma__BLOQUEOSClient<runtime.Types.Result.GetResult<Prisma.$BLOQUEOSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BLOQUEOSCreateManyArgs>(args?: Prisma.SelectSubset<T, BLOQUEOSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BLOQUEOSCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BLOQUEOSCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BLOQUEOSPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BLOQUEOSDeleteArgs>(args: Prisma.SelectSubset<T, BLOQUEOSDeleteArgs<ExtArgs>>): Prisma.Prisma__BLOQUEOSClient<runtime.Types.Result.GetResult<Prisma.$BLOQUEOSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BLOQUEOSUpdateArgs>(args: Prisma.SelectSubset<T, BLOQUEOSUpdateArgs<ExtArgs>>): Prisma.Prisma__BLOQUEOSClient<runtime.Types.Result.GetResult<Prisma.$BLOQUEOSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BLOQUEOSDeleteManyArgs>(args?: Prisma.SelectSubset<T, BLOQUEOSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BLOQUEOSUpdateManyArgs>(args: Prisma.SelectSubset<T, BLOQUEOSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BLOQUEOSUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BLOQUEOSUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BLOQUEOSPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BLOQUEOSUpsertArgs>(args: Prisma.SelectSubset<T, BLOQUEOSUpsertArgs<ExtArgs>>): Prisma.Prisma__BLOQUEOSClient<runtime.Types.Result.GetResult<Prisma.$BLOQUEOSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BLOQUEOSCountArgs>(args?: Prisma.Subset<T, BLOQUEOSCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BLOQUEOSCountAggregateOutputType> : number>;
    aggregate<T extends BLOQUEOSAggregateArgs>(args: Prisma.Subset<T, BLOQUEOSAggregateArgs>): Prisma.PrismaPromise<GetBLOQUEOSAggregateType<T>>;
    groupBy<T extends BLOQUEOSGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BLOQUEOSGroupByArgs['orderBy'];
    } : {
        orderBy?: BLOQUEOSGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BLOQUEOSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBLOQUEOSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BLOQUEOSFieldRefs;
}
export interface Prisma__BLOQUEOSClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    USUARIOS_BLOQUEOS_bloqueado_idToUSUARIOS<T extends Prisma.USUARIOSDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.USUARIOSDefaultArgs<ExtArgs>>): Prisma.Prisma__USUARIOSClient<runtime.Types.Result.GetResult<Prisma.$USUARIOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    USUARIOS_BLOQUEOS_bloqueador_idToUSUARIOS<T extends Prisma.USUARIOSDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.USUARIOSDefaultArgs<ExtArgs>>): Prisma.Prisma__USUARIOSClient<runtime.Types.Result.GetResult<Prisma.$USUARIOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BLOQUEOSFieldRefs {
    readonly bloqueador_id: Prisma.FieldRef<"BLOQUEOS", 'String'>;
    readonly bloqueado_id: Prisma.FieldRef<"BLOQUEOS", 'String'>;
    readonly creado_en: Prisma.FieldRef<"BLOQUEOS", 'DateTime'>;
}
export type BLOQUEOSFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BLOQUEOSSelect<ExtArgs> | null;
    omit?: Prisma.BLOQUEOSOmit<ExtArgs> | null;
    include?: Prisma.BLOQUEOSInclude<ExtArgs> | null;
    where: Prisma.BLOQUEOSWhereUniqueInput;
};
export type BLOQUEOSFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BLOQUEOSSelect<ExtArgs> | null;
    omit?: Prisma.BLOQUEOSOmit<ExtArgs> | null;
    include?: Prisma.BLOQUEOSInclude<ExtArgs> | null;
    where: Prisma.BLOQUEOSWhereUniqueInput;
};
export type BLOQUEOSFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BLOQUEOSSelect<ExtArgs> | null;
    omit?: Prisma.BLOQUEOSOmit<ExtArgs> | null;
    include?: Prisma.BLOQUEOSInclude<ExtArgs> | null;
    where?: Prisma.BLOQUEOSWhereInput;
    orderBy?: Prisma.BLOQUEOSOrderByWithRelationInput | Prisma.BLOQUEOSOrderByWithRelationInput[];
    cursor?: Prisma.BLOQUEOSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BLOQUEOSScalarFieldEnum | Prisma.BLOQUEOSScalarFieldEnum[];
};
export type BLOQUEOSFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BLOQUEOSSelect<ExtArgs> | null;
    omit?: Prisma.BLOQUEOSOmit<ExtArgs> | null;
    include?: Prisma.BLOQUEOSInclude<ExtArgs> | null;
    where?: Prisma.BLOQUEOSWhereInput;
    orderBy?: Prisma.BLOQUEOSOrderByWithRelationInput | Prisma.BLOQUEOSOrderByWithRelationInput[];
    cursor?: Prisma.BLOQUEOSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BLOQUEOSScalarFieldEnum | Prisma.BLOQUEOSScalarFieldEnum[];
};
export type BLOQUEOSFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BLOQUEOSSelect<ExtArgs> | null;
    omit?: Prisma.BLOQUEOSOmit<ExtArgs> | null;
    include?: Prisma.BLOQUEOSInclude<ExtArgs> | null;
    where?: Prisma.BLOQUEOSWhereInput;
    orderBy?: Prisma.BLOQUEOSOrderByWithRelationInput | Prisma.BLOQUEOSOrderByWithRelationInput[];
    cursor?: Prisma.BLOQUEOSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BLOQUEOSScalarFieldEnum | Prisma.BLOQUEOSScalarFieldEnum[];
};
export type BLOQUEOSCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BLOQUEOSSelect<ExtArgs> | null;
    omit?: Prisma.BLOQUEOSOmit<ExtArgs> | null;
    include?: Prisma.BLOQUEOSInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BLOQUEOSCreateInput, Prisma.BLOQUEOSUncheckedCreateInput>;
};
export type BLOQUEOSCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BLOQUEOSCreateManyInput | Prisma.BLOQUEOSCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BLOQUEOSCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BLOQUEOSSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BLOQUEOSOmit<ExtArgs> | null;
    data: Prisma.BLOQUEOSCreateManyInput | Prisma.BLOQUEOSCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BLOQUEOSIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BLOQUEOSUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BLOQUEOSSelect<ExtArgs> | null;
    omit?: Prisma.BLOQUEOSOmit<ExtArgs> | null;
    include?: Prisma.BLOQUEOSInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BLOQUEOSUpdateInput, Prisma.BLOQUEOSUncheckedUpdateInput>;
    where: Prisma.BLOQUEOSWhereUniqueInput;
};
export type BLOQUEOSUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BLOQUEOSUpdateManyMutationInput, Prisma.BLOQUEOSUncheckedUpdateManyInput>;
    where?: Prisma.BLOQUEOSWhereInput;
    limit?: number;
};
export type BLOQUEOSUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BLOQUEOSSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BLOQUEOSOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BLOQUEOSUpdateManyMutationInput, Prisma.BLOQUEOSUncheckedUpdateManyInput>;
    where?: Prisma.BLOQUEOSWhereInput;
    limit?: number;
    include?: Prisma.BLOQUEOSIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BLOQUEOSUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BLOQUEOSSelect<ExtArgs> | null;
    omit?: Prisma.BLOQUEOSOmit<ExtArgs> | null;
    include?: Prisma.BLOQUEOSInclude<ExtArgs> | null;
    where: Prisma.BLOQUEOSWhereUniqueInput;
    create: Prisma.XOR<Prisma.BLOQUEOSCreateInput, Prisma.BLOQUEOSUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BLOQUEOSUpdateInput, Prisma.BLOQUEOSUncheckedUpdateInput>;
};
export type BLOQUEOSDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BLOQUEOSSelect<ExtArgs> | null;
    omit?: Prisma.BLOQUEOSOmit<ExtArgs> | null;
    include?: Prisma.BLOQUEOSInclude<ExtArgs> | null;
    where: Prisma.BLOQUEOSWhereUniqueInput;
};
export type BLOQUEOSDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BLOQUEOSWhereInput;
    limit?: number;
};
export type BLOQUEOSDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BLOQUEOSSelect<ExtArgs> | null;
    omit?: Prisma.BLOQUEOSOmit<ExtArgs> | null;
    include?: Prisma.BLOQUEOSInclude<ExtArgs> | null;
};
