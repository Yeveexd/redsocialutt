import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MULTIMEDIAModel = runtime.Types.Result.DefaultSelection<Prisma.$MULTIMEDIAPayload>;
export type AggregateMULTIMEDIA = {
    _count: MULTIMEDIACountAggregateOutputType | null;
    _avg: MULTIMEDIAAvgAggregateOutputType | null;
    _sum: MULTIMEDIASumAggregateOutputType | null;
    _min: MULTIMEDIAMinAggregateOutputType | null;
    _max: MULTIMEDIAMaxAggregateOutputType | null;
};
export type MULTIMEDIAAvgAggregateOutputType = {
    tamano_bytes: number | null;
};
export type MULTIMEDIASumAggregateOutputType = {
    tamano_bytes: bigint | null;
};
export type MULTIMEDIAMinAggregateOutputType = {
    id: string | null;
    publicacion_id: string | null;
    mensaje_id: string | null;
    tipo: string | null;
    url: string | null;
    mime_type: string | null;
    tamano_bytes: bigint | null;
    creado_en: Date | null;
};
export type MULTIMEDIAMaxAggregateOutputType = {
    id: string | null;
    publicacion_id: string | null;
    mensaje_id: string | null;
    tipo: string | null;
    url: string | null;
    mime_type: string | null;
    tamano_bytes: bigint | null;
    creado_en: Date | null;
};
export type MULTIMEDIACountAggregateOutputType = {
    id: number;
    publicacion_id: number;
    mensaje_id: number;
    tipo: number;
    url: number;
    mime_type: number;
    tamano_bytes: number;
    creado_en: number;
    _all: number;
};
export type MULTIMEDIAAvgAggregateInputType = {
    tamano_bytes?: true;
};
export type MULTIMEDIASumAggregateInputType = {
    tamano_bytes?: true;
};
export type MULTIMEDIAMinAggregateInputType = {
    id?: true;
    publicacion_id?: true;
    mensaje_id?: true;
    tipo?: true;
    url?: true;
    mime_type?: true;
    tamano_bytes?: true;
    creado_en?: true;
};
export type MULTIMEDIAMaxAggregateInputType = {
    id?: true;
    publicacion_id?: true;
    mensaje_id?: true;
    tipo?: true;
    url?: true;
    mime_type?: true;
    tamano_bytes?: true;
    creado_en?: true;
};
export type MULTIMEDIACountAggregateInputType = {
    id?: true;
    publicacion_id?: true;
    mensaje_id?: true;
    tipo?: true;
    url?: true;
    mime_type?: true;
    tamano_bytes?: true;
    creado_en?: true;
    _all?: true;
};
export type MULTIMEDIAAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MULTIMEDIAWhereInput;
    orderBy?: Prisma.MULTIMEDIAOrderByWithRelationInput | Prisma.MULTIMEDIAOrderByWithRelationInput[];
    cursor?: Prisma.MULTIMEDIAWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MULTIMEDIACountAggregateInputType;
    _avg?: MULTIMEDIAAvgAggregateInputType;
    _sum?: MULTIMEDIASumAggregateInputType;
    _min?: MULTIMEDIAMinAggregateInputType;
    _max?: MULTIMEDIAMaxAggregateInputType;
};
export type GetMULTIMEDIAAggregateType<T extends MULTIMEDIAAggregateArgs> = {
    [P in keyof T & keyof AggregateMULTIMEDIA]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMULTIMEDIA[P]> : Prisma.GetScalarType<T[P], AggregateMULTIMEDIA[P]>;
};
export type MULTIMEDIAGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MULTIMEDIAWhereInput;
    orderBy?: Prisma.MULTIMEDIAOrderByWithAggregationInput | Prisma.MULTIMEDIAOrderByWithAggregationInput[];
    by: Prisma.MULTIMEDIAScalarFieldEnum[] | Prisma.MULTIMEDIAScalarFieldEnum;
    having?: Prisma.MULTIMEDIAScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MULTIMEDIACountAggregateInputType | true;
    _avg?: MULTIMEDIAAvgAggregateInputType;
    _sum?: MULTIMEDIASumAggregateInputType;
    _min?: MULTIMEDIAMinAggregateInputType;
    _max?: MULTIMEDIAMaxAggregateInputType;
};
export type MULTIMEDIAGroupByOutputType = {
    id: string;
    publicacion_id: string | null;
    mensaje_id: string | null;
    tipo: string;
    url: string;
    mime_type: string;
    tamano_bytes: bigint;
    creado_en: Date;
    _count: MULTIMEDIACountAggregateOutputType | null;
    _avg: MULTIMEDIAAvgAggregateOutputType | null;
    _sum: MULTIMEDIASumAggregateOutputType | null;
    _min: MULTIMEDIAMinAggregateOutputType | null;
    _max: MULTIMEDIAMaxAggregateOutputType | null;
};
export type GetMULTIMEDIAGroupByPayload<T extends MULTIMEDIAGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MULTIMEDIAGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MULTIMEDIAGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MULTIMEDIAGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MULTIMEDIAGroupByOutputType[P]>;
}>>;
export type MULTIMEDIAWhereInput = {
    AND?: Prisma.MULTIMEDIAWhereInput | Prisma.MULTIMEDIAWhereInput[];
    OR?: Prisma.MULTIMEDIAWhereInput[];
    NOT?: Prisma.MULTIMEDIAWhereInput | Prisma.MULTIMEDIAWhereInput[];
    id?: Prisma.UuidFilter<"MULTIMEDIA"> | string;
    publicacion_id?: Prisma.UuidNullableFilter<"MULTIMEDIA"> | string | null;
    mensaje_id?: Prisma.UuidNullableFilter<"MULTIMEDIA"> | string | null;
    tipo?: Prisma.StringFilter<"MULTIMEDIA"> | string;
    url?: Prisma.StringFilter<"MULTIMEDIA"> | string;
    mime_type?: Prisma.StringFilter<"MULTIMEDIA"> | string;
    tamano_bytes?: Prisma.BigIntFilter<"MULTIMEDIA"> | bigint | number;
    creado_en?: Prisma.DateTimeFilter<"MULTIMEDIA"> | Date | string;
    MENSAJES?: Prisma.XOR<Prisma.MENSAJESNullableScalarRelationFilter, Prisma.MENSAJESWhereInput> | null;
    PUBLICACIONES?: Prisma.XOR<Prisma.PUBLICACIONESNullableScalarRelationFilter, Prisma.PUBLICACIONESWhereInput> | null;
};
export type MULTIMEDIAOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    mensaje_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    mime_type?: Prisma.SortOrder;
    tamano_bytes?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    MENSAJES?: Prisma.MENSAJESOrderByWithRelationInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESOrderByWithRelationInput;
};
export type MULTIMEDIAWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MULTIMEDIAWhereInput | Prisma.MULTIMEDIAWhereInput[];
    OR?: Prisma.MULTIMEDIAWhereInput[];
    NOT?: Prisma.MULTIMEDIAWhereInput | Prisma.MULTIMEDIAWhereInput[];
    publicacion_id?: Prisma.UuidNullableFilter<"MULTIMEDIA"> | string | null;
    mensaje_id?: Prisma.UuidNullableFilter<"MULTIMEDIA"> | string | null;
    tipo?: Prisma.StringFilter<"MULTIMEDIA"> | string;
    url?: Prisma.StringFilter<"MULTIMEDIA"> | string;
    mime_type?: Prisma.StringFilter<"MULTIMEDIA"> | string;
    tamano_bytes?: Prisma.BigIntFilter<"MULTIMEDIA"> | bigint | number;
    creado_en?: Prisma.DateTimeFilter<"MULTIMEDIA"> | Date | string;
    MENSAJES?: Prisma.XOR<Prisma.MENSAJESNullableScalarRelationFilter, Prisma.MENSAJESWhereInput> | null;
    PUBLICACIONES?: Prisma.XOR<Prisma.PUBLICACIONESNullableScalarRelationFilter, Prisma.PUBLICACIONESWhereInput> | null;
}, "id">;
export type MULTIMEDIAOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    mensaje_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    mime_type?: Prisma.SortOrder;
    tamano_bytes?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    _count?: Prisma.MULTIMEDIACountOrderByAggregateInput;
    _avg?: Prisma.MULTIMEDIAAvgOrderByAggregateInput;
    _max?: Prisma.MULTIMEDIAMaxOrderByAggregateInput;
    _min?: Prisma.MULTIMEDIAMinOrderByAggregateInput;
    _sum?: Prisma.MULTIMEDIASumOrderByAggregateInput;
};
export type MULTIMEDIAScalarWhereWithAggregatesInput = {
    AND?: Prisma.MULTIMEDIAScalarWhereWithAggregatesInput | Prisma.MULTIMEDIAScalarWhereWithAggregatesInput[];
    OR?: Prisma.MULTIMEDIAScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MULTIMEDIAScalarWhereWithAggregatesInput | Prisma.MULTIMEDIAScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"MULTIMEDIA"> | string;
    publicacion_id?: Prisma.UuidNullableWithAggregatesFilter<"MULTIMEDIA"> | string | null;
    mensaje_id?: Prisma.UuidNullableWithAggregatesFilter<"MULTIMEDIA"> | string | null;
    tipo?: Prisma.StringWithAggregatesFilter<"MULTIMEDIA"> | string;
    url?: Prisma.StringWithAggregatesFilter<"MULTIMEDIA"> | string;
    mime_type?: Prisma.StringWithAggregatesFilter<"MULTIMEDIA"> | string;
    tamano_bytes?: Prisma.BigIntWithAggregatesFilter<"MULTIMEDIA"> | bigint | number;
    creado_en?: Prisma.DateTimeWithAggregatesFilter<"MULTIMEDIA"> | Date | string;
};
export type MULTIMEDIACreateInput = {
    id?: string;
    tipo: string;
    url: string;
    mime_type: string;
    tamano_bytes: bigint | number;
    creado_en?: Date | string;
    MENSAJES?: Prisma.MENSAJESCreateNestedOneWithoutMULTIMEDIAInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedOneWithoutMULTIMEDIAInput;
};
export type MULTIMEDIAUncheckedCreateInput = {
    id?: string;
    publicacion_id?: string | null;
    mensaje_id?: string | null;
    tipo: string;
    url: string;
    mime_type: string;
    tamano_bytes: bigint | number;
    creado_en?: Date | string;
};
export type MULTIMEDIAUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    tamano_bytes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    MENSAJES?: Prisma.MENSAJESUpdateOneWithoutMULTIMEDIANestedInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneWithoutMULTIMEDIANestedInput;
};
export type MULTIMEDIAUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mensaje_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    tamano_bytes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MULTIMEDIACreateManyInput = {
    id?: string;
    publicacion_id?: string | null;
    mensaje_id?: string | null;
    tipo: string;
    url: string;
    mime_type: string;
    tamano_bytes: bigint | number;
    creado_en?: Date | string;
};
export type MULTIMEDIAUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    tamano_bytes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MULTIMEDIAUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mensaje_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    tamano_bytes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MULTIMEDIAListRelationFilter = {
    every?: Prisma.MULTIMEDIAWhereInput;
    some?: Prisma.MULTIMEDIAWhereInput;
    none?: Prisma.MULTIMEDIAWhereInput;
};
export type MULTIMEDIAOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MULTIMEDIACountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrder;
    mensaje_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    mime_type?: Prisma.SortOrder;
    tamano_bytes?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
};
export type MULTIMEDIAAvgOrderByAggregateInput = {
    tamano_bytes?: Prisma.SortOrder;
};
export type MULTIMEDIAMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrder;
    mensaje_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    mime_type?: Prisma.SortOrder;
    tamano_bytes?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
};
export type MULTIMEDIAMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrder;
    mensaje_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    mime_type?: Prisma.SortOrder;
    tamano_bytes?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
};
export type MULTIMEDIASumOrderByAggregateInput = {
    tamano_bytes?: Prisma.SortOrder;
};
export type MULTIMEDIACreateNestedManyWithoutMENSAJESInput = {
    create?: Prisma.XOR<Prisma.MULTIMEDIACreateWithoutMENSAJESInput, Prisma.MULTIMEDIAUncheckedCreateWithoutMENSAJESInput> | Prisma.MULTIMEDIACreateWithoutMENSAJESInput[] | Prisma.MULTIMEDIAUncheckedCreateWithoutMENSAJESInput[];
    connectOrCreate?: Prisma.MULTIMEDIACreateOrConnectWithoutMENSAJESInput | Prisma.MULTIMEDIACreateOrConnectWithoutMENSAJESInput[];
    createMany?: Prisma.MULTIMEDIACreateManyMENSAJESInputEnvelope;
    connect?: Prisma.MULTIMEDIAWhereUniqueInput | Prisma.MULTIMEDIAWhereUniqueInput[];
};
export type MULTIMEDIAUncheckedCreateNestedManyWithoutMENSAJESInput = {
    create?: Prisma.XOR<Prisma.MULTIMEDIACreateWithoutMENSAJESInput, Prisma.MULTIMEDIAUncheckedCreateWithoutMENSAJESInput> | Prisma.MULTIMEDIACreateWithoutMENSAJESInput[] | Prisma.MULTIMEDIAUncheckedCreateWithoutMENSAJESInput[];
    connectOrCreate?: Prisma.MULTIMEDIACreateOrConnectWithoutMENSAJESInput | Prisma.MULTIMEDIACreateOrConnectWithoutMENSAJESInput[];
    createMany?: Prisma.MULTIMEDIACreateManyMENSAJESInputEnvelope;
    connect?: Prisma.MULTIMEDIAWhereUniqueInput | Prisma.MULTIMEDIAWhereUniqueInput[];
};
export type MULTIMEDIAUpdateManyWithoutMENSAJESNestedInput = {
    create?: Prisma.XOR<Prisma.MULTIMEDIACreateWithoutMENSAJESInput, Prisma.MULTIMEDIAUncheckedCreateWithoutMENSAJESInput> | Prisma.MULTIMEDIACreateWithoutMENSAJESInput[] | Prisma.MULTIMEDIAUncheckedCreateWithoutMENSAJESInput[];
    connectOrCreate?: Prisma.MULTIMEDIACreateOrConnectWithoutMENSAJESInput | Prisma.MULTIMEDIACreateOrConnectWithoutMENSAJESInput[];
    upsert?: Prisma.MULTIMEDIAUpsertWithWhereUniqueWithoutMENSAJESInput | Prisma.MULTIMEDIAUpsertWithWhereUniqueWithoutMENSAJESInput[];
    createMany?: Prisma.MULTIMEDIACreateManyMENSAJESInputEnvelope;
    set?: Prisma.MULTIMEDIAWhereUniqueInput | Prisma.MULTIMEDIAWhereUniqueInput[];
    disconnect?: Prisma.MULTIMEDIAWhereUniqueInput | Prisma.MULTIMEDIAWhereUniqueInput[];
    delete?: Prisma.MULTIMEDIAWhereUniqueInput | Prisma.MULTIMEDIAWhereUniqueInput[];
    connect?: Prisma.MULTIMEDIAWhereUniqueInput | Prisma.MULTIMEDIAWhereUniqueInput[];
    update?: Prisma.MULTIMEDIAUpdateWithWhereUniqueWithoutMENSAJESInput | Prisma.MULTIMEDIAUpdateWithWhereUniqueWithoutMENSAJESInput[];
    updateMany?: Prisma.MULTIMEDIAUpdateManyWithWhereWithoutMENSAJESInput | Prisma.MULTIMEDIAUpdateManyWithWhereWithoutMENSAJESInput[];
    deleteMany?: Prisma.MULTIMEDIAScalarWhereInput | Prisma.MULTIMEDIAScalarWhereInput[];
};
export type MULTIMEDIAUncheckedUpdateManyWithoutMENSAJESNestedInput = {
    create?: Prisma.XOR<Prisma.MULTIMEDIACreateWithoutMENSAJESInput, Prisma.MULTIMEDIAUncheckedCreateWithoutMENSAJESInput> | Prisma.MULTIMEDIACreateWithoutMENSAJESInput[] | Prisma.MULTIMEDIAUncheckedCreateWithoutMENSAJESInput[];
    connectOrCreate?: Prisma.MULTIMEDIACreateOrConnectWithoutMENSAJESInput | Prisma.MULTIMEDIACreateOrConnectWithoutMENSAJESInput[];
    upsert?: Prisma.MULTIMEDIAUpsertWithWhereUniqueWithoutMENSAJESInput | Prisma.MULTIMEDIAUpsertWithWhereUniqueWithoutMENSAJESInput[];
    createMany?: Prisma.MULTIMEDIACreateManyMENSAJESInputEnvelope;
    set?: Prisma.MULTIMEDIAWhereUniqueInput | Prisma.MULTIMEDIAWhereUniqueInput[];
    disconnect?: Prisma.MULTIMEDIAWhereUniqueInput | Prisma.MULTIMEDIAWhereUniqueInput[];
    delete?: Prisma.MULTIMEDIAWhereUniqueInput | Prisma.MULTIMEDIAWhereUniqueInput[];
    connect?: Prisma.MULTIMEDIAWhereUniqueInput | Prisma.MULTIMEDIAWhereUniqueInput[];
    update?: Prisma.MULTIMEDIAUpdateWithWhereUniqueWithoutMENSAJESInput | Prisma.MULTIMEDIAUpdateWithWhereUniqueWithoutMENSAJESInput[];
    updateMany?: Prisma.MULTIMEDIAUpdateManyWithWhereWithoutMENSAJESInput | Prisma.MULTIMEDIAUpdateManyWithWhereWithoutMENSAJESInput[];
    deleteMany?: Prisma.MULTIMEDIAScalarWhereInput | Prisma.MULTIMEDIAScalarWhereInput[];
};
export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type MULTIMEDIACreateNestedManyWithoutPUBLICACIONESInput = {
    create?: Prisma.XOR<Prisma.MULTIMEDIACreateWithoutPUBLICACIONESInput, Prisma.MULTIMEDIAUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.MULTIMEDIACreateWithoutPUBLICACIONESInput[] | Prisma.MULTIMEDIAUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.MULTIMEDIACreateOrConnectWithoutPUBLICACIONESInput | Prisma.MULTIMEDIACreateOrConnectWithoutPUBLICACIONESInput[];
    createMany?: Prisma.MULTIMEDIACreateManyPUBLICACIONESInputEnvelope;
    connect?: Prisma.MULTIMEDIAWhereUniqueInput | Prisma.MULTIMEDIAWhereUniqueInput[];
};
export type MULTIMEDIAUncheckedCreateNestedManyWithoutPUBLICACIONESInput = {
    create?: Prisma.XOR<Prisma.MULTIMEDIACreateWithoutPUBLICACIONESInput, Prisma.MULTIMEDIAUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.MULTIMEDIACreateWithoutPUBLICACIONESInput[] | Prisma.MULTIMEDIAUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.MULTIMEDIACreateOrConnectWithoutPUBLICACIONESInput | Prisma.MULTIMEDIACreateOrConnectWithoutPUBLICACIONESInput[];
    createMany?: Prisma.MULTIMEDIACreateManyPUBLICACIONESInputEnvelope;
    connect?: Prisma.MULTIMEDIAWhereUniqueInput | Prisma.MULTIMEDIAWhereUniqueInput[];
};
export type MULTIMEDIAUpdateManyWithoutPUBLICACIONESNestedInput = {
    create?: Prisma.XOR<Prisma.MULTIMEDIACreateWithoutPUBLICACIONESInput, Prisma.MULTIMEDIAUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.MULTIMEDIACreateWithoutPUBLICACIONESInput[] | Prisma.MULTIMEDIAUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.MULTIMEDIACreateOrConnectWithoutPUBLICACIONESInput | Prisma.MULTIMEDIACreateOrConnectWithoutPUBLICACIONESInput[];
    upsert?: Prisma.MULTIMEDIAUpsertWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.MULTIMEDIAUpsertWithWhereUniqueWithoutPUBLICACIONESInput[];
    createMany?: Prisma.MULTIMEDIACreateManyPUBLICACIONESInputEnvelope;
    set?: Prisma.MULTIMEDIAWhereUniqueInput | Prisma.MULTIMEDIAWhereUniqueInput[];
    disconnect?: Prisma.MULTIMEDIAWhereUniqueInput | Prisma.MULTIMEDIAWhereUniqueInput[];
    delete?: Prisma.MULTIMEDIAWhereUniqueInput | Prisma.MULTIMEDIAWhereUniqueInput[];
    connect?: Prisma.MULTIMEDIAWhereUniqueInput | Prisma.MULTIMEDIAWhereUniqueInput[];
    update?: Prisma.MULTIMEDIAUpdateWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.MULTIMEDIAUpdateWithWhereUniqueWithoutPUBLICACIONESInput[];
    updateMany?: Prisma.MULTIMEDIAUpdateManyWithWhereWithoutPUBLICACIONESInput | Prisma.MULTIMEDIAUpdateManyWithWhereWithoutPUBLICACIONESInput[];
    deleteMany?: Prisma.MULTIMEDIAScalarWhereInput | Prisma.MULTIMEDIAScalarWhereInput[];
};
export type MULTIMEDIAUncheckedUpdateManyWithoutPUBLICACIONESNestedInput = {
    create?: Prisma.XOR<Prisma.MULTIMEDIACreateWithoutPUBLICACIONESInput, Prisma.MULTIMEDIAUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.MULTIMEDIACreateWithoutPUBLICACIONESInput[] | Prisma.MULTIMEDIAUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.MULTIMEDIACreateOrConnectWithoutPUBLICACIONESInput | Prisma.MULTIMEDIACreateOrConnectWithoutPUBLICACIONESInput[];
    upsert?: Prisma.MULTIMEDIAUpsertWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.MULTIMEDIAUpsertWithWhereUniqueWithoutPUBLICACIONESInput[];
    createMany?: Prisma.MULTIMEDIACreateManyPUBLICACIONESInputEnvelope;
    set?: Prisma.MULTIMEDIAWhereUniqueInput | Prisma.MULTIMEDIAWhereUniqueInput[];
    disconnect?: Prisma.MULTIMEDIAWhereUniqueInput | Prisma.MULTIMEDIAWhereUniqueInput[];
    delete?: Prisma.MULTIMEDIAWhereUniqueInput | Prisma.MULTIMEDIAWhereUniqueInput[];
    connect?: Prisma.MULTIMEDIAWhereUniqueInput | Prisma.MULTIMEDIAWhereUniqueInput[];
    update?: Prisma.MULTIMEDIAUpdateWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.MULTIMEDIAUpdateWithWhereUniqueWithoutPUBLICACIONESInput[];
    updateMany?: Prisma.MULTIMEDIAUpdateManyWithWhereWithoutPUBLICACIONESInput | Prisma.MULTIMEDIAUpdateManyWithWhereWithoutPUBLICACIONESInput[];
    deleteMany?: Prisma.MULTIMEDIAScalarWhereInput | Prisma.MULTIMEDIAScalarWhereInput[];
};
export type MULTIMEDIACreateWithoutMENSAJESInput = {
    id?: string;
    tipo: string;
    url: string;
    mime_type: string;
    tamano_bytes: bigint | number;
    creado_en?: Date | string;
    PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedOneWithoutMULTIMEDIAInput;
};
export type MULTIMEDIAUncheckedCreateWithoutMENSAJESInput = {
    id?: string;
    publicacion_id?: string | null;
    tipo: string;
    url: string;
    mime_type: string;
    tamano_bytes: bigint | number;
    creado_en?: Date | string;
};
export type MULTIMEDIACreateOrConnectWithoutMENSAJESInput = {
    where: Prisma.MULTIMEDIAWhereUniqueInput;
    create: Prisma.XOR<Prisma.MULTIMEDIACreateWithoutMENSAJESInput, Prisma.MULTIMEDIAUncheckedCreateWithoutMENSAJESInput>;
};
export type MULTIMEDIACreateManyMENSAJESInputEnvelope = {
    data: Prisma.MULTIMEDIACreateManyMENSAJESInput | Prisma.MULTIMEDIACreateManyMENSAJESInput[];
    skipDuplicates?: boolean;
};
export type MULTIMEDIAUpsertWithWhereUniqueWithoutMENSAJESInput = {
    where: Prisma.MULTIMEDIAWhereUniqueInput;
    update: Prisma.XOR<Prisma.MULTIMEDIAUpdateWithoutMENSAJESInput, Prisma.MULTIMEDIAUncheckedUpdateWithoutMENSAJESInput>;
    create: Prisma.XOR<Prisma.MULTIMEDIACreateWithoutMENSAJESInput, Prisma.MULTIMEDIAUncheckedCreateWithoutMENSAJESInput>;
};
export type MULTIMEDIAUpdateWithWhereUniqueWithoutMENSAJESInput = {
    where: Prisma.MULTIMEDIAWhereUniqueInput;
    data: Prisma.XOR<Prisma.MULTIMEDIAUpdateWithoutMENSAJESInput, Prisma.MULTIMEDIAUncheckedUpdateWithoutMENSAJESInput>;
};
export type MULTIMEDIAUpdateManyWithWhereWithoutMENSAJESInput = {
    where: Prisma.MULTIMEDIAScalarWhereInput;
    data: Prisma.XOR<Prisma.MULTIMEDIAUpdateManyMutationInput, Prisma.MULTIMEDIAUncheckedUpdateManyWithoutMENSAJESInput>;
};
export type MULTIMEDIAScalarWhereInput = {
    AND?: Prisma.MULTIMEDIAScalarWhereInput | Prisma.MULTIMEDIAScalarWhereInput[];
    OR?: Prisma.MULTIMEDIAScalarWhereInput[];
    NOT?: Prisma.MULTIMEDIAScalarWhereInput | Prisma.MULTIMEDIAScalarWhereInput[];
    id?: Prisma.UuidFilter<"MULTIMEDIA"> | string;
    publicacion_id?: Prisma.UuidNullableFilter<"MULTIMEDIA"> | string | null;
    mensaje_id?: Prisma.UuidNullableFilter<"MULTIMEDIA"> | string | null;
    tipo?: Prisma.StringFilter<"MULTIMEDIA"> | string;
    url?: Prisma.StringFilter<"MULTIMEDIA"> | string;
    mime_type?: Prisma.StringFilter<"MULTIMEDIA"> | string;
    tamano_bytes?: Prisma.BigIntFilter<"MULTIMEDIA"> | bigint | number;
    creado_en?: Prisma.DateTimeFilter<"MULTIMEDIA"> | Date | string;
};
export type MULTIMEDIACreateWithoutPUBLICACIONESInput = {
    id?: string;
    tipo: string;
    url: string;
    mime_type: string;
    tamano_bytes: bigint | number;
    creado_en?: Date | string;
    MENSAJES?: Prisma.MENSAJESCreateNestedOneWithoutMULTIMEDIAInput;
};
export type MULTIMEDIAUncheckedCreateWithoutPUBLICACIONESInput = {
    id?: string;
    mensaje_id?: string | null;
    tipo: string;
    url: string;
    mime_type: string;
    tamano_bytes: bigint | number;
    creado_en?: Date | string;
};
export type MULTIMEDIACreateOrConnectWithoutPUBLICACIONESInput = {
    where: Prisma.MULTIMEDIAWhereUniqueInput;
    create: Prisma.XOR<Prisma.MULTIMEDIACreateWithoutPUBLICACIONESInput, Prisma.MULTIMEDIAUncheckedCreateWithoutPUBLICACIONESInput>;
};
export type MULTIMEDIACreateManyPUBLICACIONESInputEnvelope = {
    data: Prisma.MULTIMEDIACreateManyPUBLICACIONESInput | Prisma.MULTIMEDIACreateManyPUBLICACIONESInput[];
    skipDuplicates?: boolean;
};
export type MULTIMEDIAUpsertWithWhereUniqueWithoutPUBLICACIONESInput = {
    where: Prisma.MULTIMEDIAWhereUniqueInput;
    update: Prisma.XOR<Prisma.MULTIMEDIAUpdateWithoutPUBLICACIONESInput, Prisma.MULTIMEDIAUncheckedUpdateWithoutPUBLICACIONESInput>;
    create: Prisma.XOR<Prisma.MULTIMEDIACreateWithoutPUBLICACIONESInput, Prisma.MULTIMEDIAUncheckedCreateWithoutPUBLICACIONESInput>;
};
export type MULTIMEDIAUpdateWithWhereUniqueWithoutPUBLICACIONESInput = {
    where: Prisma.MULTIMEDIAWhereUniqueInput;
    data: Prisma.XOR<Prisma.MULTIMEDIAUpdateWithoutPUBLICACIONESInput, Prisma.MULTIMEDIAUncheckedUpdateWithoutPUBLICACIONESInput>;
};
export type MULTIMEDIAUpdateManyWithWhereWithoutPUBLICACIONESInput = {
    where: Prisma.MULTIMEDIAScalarWhereInput;
    data: Prisma.XOR<Prisma.MULTIMEDIAUpdateManyMutationInput, Prisma.MULTIMEDIAUncheckedUpdateManyWithoutPUBLICACIONESInput>;
};
export type MULTIMEDIACreateManyMENSAJESInput = {
    id?: string;
    publicacion_id?: string | null;
    tipo: string;
    url: string;
    mime_type: string;
    tamano_bytes: bigint | number;
    creado_en?: Date | string;
};
export type MULTIMEDIAUpdateWithoutMENSAJESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    tamano_bytes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneWithoutMULTIMEDIANestedInput;
};
export type MULTIMEDIAUncheckedUpdateWithoutMENSAJESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    tamano_bytes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MULTIMEDIAUncheckedUpdateManyWithoutMENSAJESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    tamano_bytes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MULTIMEDIACreateManyPUBLICACIONESInput = {
    id?: string;
    mensaje_id?: string | null;
    tipo: string;
    url: string;
    mime_type: string;
    tamano_bytes: bigint | number;
    creado_en?: Date | string;
};
export type MULTIMEDIAUpdateWithoutPUBLICACIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    tamano_bytes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    MENSAJES?: Prisma.MENSAJESUpdateOneWithoutMULTIMEDIANestedInput;
};
export type MULTIMEDIAUncheckedUpdateWithoutPUBLICACIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mensaje_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    tamano_bytes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MULTIMEDIAUncheckedUpdateManyWithoutPUBLICACIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mensaje_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    tamano_bytes?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MULTIMEDIASelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    publicacion_id?: boolean;
    mensaje_id?: boolean;
    tipo?: boolean;
    url?: boolean;
    mime_type?: boolean;
    tamano_bytes?: boolean;
    creado_en?: boolean;
    MENSAJES?: boolean | Prisma.MULTIMEDIA$MENSAJESArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.MULTIMEDIA$PUBLICACIONESArgs<ExtArgs>;
}, ExtArgs["result"]["mULTIMEDIA"]>;
export type MULTIMEDIASelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    publicacion_id?: boolean;
    mensaje_id?: boolean;
    tipo?: boolean;
    url?: boolean;
    mime_type?: boolean;
    tamano_bytes?: boolean;
    creado_en?: boolean;
    MENSAJES?: boolean | Prisma.MULTIMEDIA$MENSAJESArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.MULTIMEDIA$PUBLICACIONESArgs<ExtArgs>;
}, ExtArgs["result"]["mULTIMEDIA"]>;
export type MULTIMEDIASelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    publicacion_id?: boolean;
    mensaje_id?: boolean;
    tipo?: boolean;
    url?: boolean;
    mime_type?: boolean;
    tamano_bytes?: boolean;
    creado_en?: boolean;
    MENSAJES?: boolean | Prisma.MULTIMEDIA$MENSAJESArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.MULTIMEDIA$PUBLICACIONESArgs<ExtArgs>;
}, ExtArgs["result"]["mULTIMEDIA"]>;
export type MULTIMEDIASelectScalar = {
    id?: boolean;
    publicacion_id?: boolean;
    mensaje_id?: boolean;
    tipo?: boolean;
    url?: boolean;
    mime_type?: boolean;
    tamano_bytes?: boolean;
    creado_en?: boolean;
};
export type MULTIMEDIAOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "publicacion_id" | "mensaje_id" | "tipo" | "url" | "mime_type" | "tamano_bytes" | "creado_en", ExtArgs["result"]["mULTIMEDIA"]>;
export type MULTIMEDIAInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MENSAJES?: boolean | Prisma.MULTIMEDIA$MENSAJESArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.MULTIMEDIA$PUBLICACIONESArgs<ExtArgs>;
};
export type MULTIMEDIAIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MENSAJES?: boolean | Prisma.MULTIMEDIA$MENSAJESArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.MULTIMEDIA$PUBLICACIONESArgs<ExtArgs>;
};
export type MULTIMEDIAIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MENSAJES?: boolean | Prisma.MULTIMEDIA$MENSAJESArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.MULTIMEDIA$PUBLICACIONESArgs<ExtArgs>;
};
export type $MULTIMEDIAPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MULTIMEDIA";
    objects: {
        MENSAJES: Prisma.$MENSAJESPayload<ExtArgs> | null;
        PUBLICACIONES: Prisma.$PUBLICACIONESPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        publicacion_id: string | null;
        mensaje_id: string | null;
        tipo: string;
        url: string;
        mime_type: string;
        tamano_bytes: bigint;
        creado_en: Date;
    }, ExtArgs["result"]["mULTIMEDIA"]>;
    composites: {};
};
export type MULTIMEDIAGetPayload<S extends boolean | null | undefined | MULTIMEDIADefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MULTIMEDIAPayload, S>;
export type MULTIMEDIACountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MULTIMEDIAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MULTIMEDIACountAggregateInputType | true;
};
export interface MULTIMEDIADelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MULTIMEDIA'];
        meta: {
            name: 'MULTIMEDIA';
        };
    };
    findUnique<T extends MULTIMEDIAFindUniqueArgs>(args: Prisma.SelectSubset<T, MULTIMEDIAFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MULTIMEDIAClient<runtime.Types.Result.GetResult<Prisma.$MULTIMEDIAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MULTIMEDIAFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MULTIMEDIAFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MULTIMEDIAClient<runtime.Types.Result.GetResult<Prisma.$MULTIMEDIAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MULTIMEDIAFindFirstArgs>(args?: Prisma.SelectSubset<T, MULTIMEDIAFindFirstArgs<ExtArgs>>): Prisma.Prisma__MULTIMEDIAClient<runtime.Types.Result.GetResult<Prisma.$MULTIMEDIAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MULTIMEDIAFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MULTIMEDIAFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MULTIMEDIAClient<runtime.Types.Result.GetResult<Prisma.$MULTIMEDIAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MULTIMEDIAFindManyArgs>(args?: Prisma.SelectSubset<T, MULTIMEDIAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MULTIMEDIAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MULTIMEDIACreateArgs>(args: Prisma.SelectSubset<T, MULTIMEDIACreateArgs<ExtArgs>>): Prisma.Prisma__MULTIMEDIAClient<runtime.Types.Result.GetResult<Prisma.$MULTIMEDIAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MULTIMEDIACreateManyArgs>(args?: Prisma.SelectSubset<T, MULTIMEDIACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MULTIMEDIACreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MULTIMEDIACreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MULTIMEDIAPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MULTIMEDIADeleteArgs>(args: Prisma.SelectSubset<T, MULTIMEDIADeleteArgs<ExtArgs>>): Prisma.Prisma__MULTIMEDIAClient<runtime.Types.Result.GetResult<Prisma.$MULTIMEDIAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MULTIMEDIAUpdateArgs>(args: Prisma.SelectSubset<T, MULTIMEDIAUpdateArgs<ExtArgs>>): Prisma.Prisma__MULTIMEDIAClient<runtime.Types.Result.GetResult<Prisma.$MULTIMEDIAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MULTIMEDIADeleteManyArgs>(args?: Prisma.SelectSubset<T, MULTIMEDIADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MULTIMEDIAUpdateManyArgs>(args: Prisma.SelectSubset<T, MULTIMEDIAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MULTIMEDIAUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MULTIMEDIAUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MULTIMEDIAPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MULTIMEDIAUpsertArgs>(args: Prisma.SelectSubset<T, MULTIMEDIAUpsertArgs<ExtArgs>>): Prisma.Prisma__MULTIMEDIAClient<runtime.Types.Result.GetResult<Prisma.$MULTIMEDIAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MULTIMEDIACountArgs>(args?: Prisma.Subset<T, MULTIMEDIACountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MULTIMEDIACountAggregateOutputType> : number>;
    aggregate<T extends MULTIMEDIAAggregateArgs>(args: Prisma.Subset<T, MULTIMEDIAAggregateArgs>): Prisma.PrismaPromise<GetMULTIMEDIAAggregateType<T>>;
    groupBy<T extends MULTIMEDIAGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MULTIMEDIAGroupByArgs['orderBy'];
    } : {
        orderBy?: MULTIMEDIAGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MULTIMEDIAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMULTIMEDIAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MULTIMEDIAFieldRefs;
}
export interface Prisma__MULTIMEDIAClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    MENSAJES<T extends Prisma.MULTIMEDIA$MENSAJESArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MULTIMEDIA$MENSAJESArgs<ExtArgs>>): Prisma.Prisma__MENSAJESClient<runtime.Types.Result.GetResult<Prisma.$MENSAJESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    PUBLICACIONES<T extends Prisma.MULTIMEDIA$PUBLICACIONESArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MULTIMEDIA$PUBLICACIONESArgs<ExtArgs>>): Prisma.Prisma__PUBLICACIONESClient<runtime.Types.Result.GetResult<Prisma.$PUBLICACIONESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MULTIMEDIAFieldRefs {
    readonly id: Prisma.FieldRef<"MULTIMEDIA", 'String'>;
    readonly publicacion_id: Prisma.FieldRef<"MULTIMEDIA", 'String'>;
    readonly mensaje_id: Prisma.FieldRef<"MULTIMEDIA", 'String'>;
    readonly tipo: Prisma.FieldRef<"MULTIMEDIA", 'String'>;
    readonly url: Prisma.FieldRef<"MULTIMEDIA", 'String'>;
    readonly mime_type: Prisma.FieldRef<"MULTIMEDIA", 'String'>;
    readonly tamano_bytes: Prisma.FieldRef<"MULTIMEDIA", 'BigInt'>;
    readonly creado_en: Prisma.FieldRef<"MULTIMEDIA", 'DateTime'>;
}
export type MULTIMEDIAFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MULTIMEDIASelect<ExtArgs> | null;
    omit?: Prisma.MULTIMEDIAOmit<ExtArgs> | null;
    include?: Prisma.MULTIMEDIAInclude<ExtArgs> | null;
    where: Prisma.MULTIMEDIAWhereUniqueInput;
};
export type MULTIMEDIAFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MULTIMEDIASelect<ExtArgs> | null;
    omit?: Prisma.MULTIMEDIAOmit<ExtArgs> | null;
    include?: Prisma.MULTIMEDIAInclude<ExtArgs> | null;
    where: Prisma.MULTIMEDIAWhereUniqueInput;
};
export type MULTIMEDIAFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MULTIMEDIASelect<ExtArgs> | null;
    omit?: Prisma.MULTIMEDIAOmit<ExtArgs> | null;
    include?: Prisma.MULTIMEDIAInclude<ExtArgs> | null;
    where?: Prisma.MULTIMEDIAWhereInput;
    orderBy?: Prisma.MULTIMEDIAOrderByWithRelationInput | Prisma.MULTIMEDIAOrderByWithRelationInput[];
    cursor?: Prisma.MULTIMEDIAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MULTIMEDIAScalarFieldEnum | Prisma.MULTIMEDIAScalarFieldEnum[];
};
export type MULTIMEDIAFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MULTIMEDIASelect<ExtArgs> | null;
    omit?: Prisma.MULTIMEDIAOmit<ExtArgs> | null;
    include?: Prisma.MULTIMEDIAInclude<ExtArgs> | null;
    where?: Prisma.MULTIMEDIAWhereInput;
    orderBy?: Prisma.MULTIMEDIAOrderByWithRelationInput | Prisma.MULTIMEDIAOrderByWithRelationInput[];
    cursor?: Prisma.MULTIMEDIAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MULTIMEDIAScalarFieldEnum | Prisma.MULTIMEDIAScalarFieldEnum[];
};
export type MULTIMEDIAFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MULTIMEDIASelect<ExtArgs> | null;
    omit?: Prisma.MULTIMEDIAOmit<ExtArgs> | null;
    include?: Prisma.MULTIMEDIAInclude<ExtArgs> | null;
    where?: Prisma.MULTIMEDIAWhereInput;
    orderBy?: Prisma.MULTIMEDIAOrderByWithRelationInput | Prisma.MULTIMEDIAOrderByWithRelationInput[];
    cursor?: Prisma.MULTIMEDIAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MULTIMEDIAScalarFieldEnum | Prisma.MULTIMEDIAScalarFieldEnum[];
};
export type MULTIMEDIACreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MULTIMEDIASelect<ExtArgs> | null;
    omit?: Prisma.MULTIMEDIAOmit<ExtArgs> | null;
    include?: Prisma.MULTIMEDIAInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MULTIMEDIACreateInput, Prisma.MULTIMEDIAUncheckedCreateInput>;
};
export type MULTIMEDIACreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MULTIMEDIACreateManyInput | Prisma.MULTIMEDIACreateManyInput[];
    skipDuplicates?: boolean;
};
export type MULTIMEDIACreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MULTIMEDIASelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MULTIMEDIAOmit<ExtArgs> | null;
    data: Prisma.MULTIMEDIACreateManyInput | Prisma.MULTIMEDIACreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MULTIMEDIAIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MULTIMEDIAUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MULTIMEDIASelect<ExtArgs> | null;
    omit?: Prisma.MULTIMEDIAOmit<ExtArgs> | null;
    include?: Prisma.MULTIMEDIAInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MULTIMEDIAUpdateInput, Prisma.MULTIMEDIAUncheckedUpdateInput>;
    where: Prisma.MULTIMEDIAWhereUniqueInput;
};
export type MULTIMEDIAUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MULTIMEDIAUpdateManyMutationInput, Prisma.MULTIMEDIAUncheckedUpdateManyInput>;
    where?: Prisma.MULTIMEDIAWhereInput;
    limit?: number;
};
export type MULTIMEDIAUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MULTIMEDIASelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MULTIMEDIAOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MULTIMEDIAUpdateManyMutationInput, Prisma.MULTIMEDIAUncheckedUpdateManyInput>;
    where?: Prisma.MULTIMEDIAWhereInput;
    limit?: number;
    include?: Prisma.MULTIMEDIAIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MULTIMEDIAUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MULTIMEDIASelect<ExtArgs> | null;
    omit?: Prisma.MULTIMEDIAOmit<ExtArgs> | null;
    include?: Prisma.MULTIMEDIAInclude<ExtArgs> | null;
    where: Prisma.MULTIMEDIAWhereUniqueInput;
    create: Prisma.XOR<Prisma.MULTIMEDIACreateInput, Prisma.MULTIMEDIAUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MULTIMEDIAUpdateInput, Prisma.MULTIMEDIAUncheckedUpdateInput>;
};
export type MULTIMEDIADeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MULTIMEDIASelect<ExtArgs> | null;
    omit?: Prisma.MULTIMEDIAOmit<ExtArgs> | null;
    include?: Prisma.MULTIMEDIAInclude<ExtArgs> | null;
    where: Prisma.MULTIMEDIAWhereUniqueInput;
};
export type MULTIMEDIADeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MULTIMEDIAWhereInput;
    limit?: number;
};
export type MULTIMEDIA$MENSAJESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MENSAJESSelect<ExtArgs> | null;
    omit?: Prisma.MENSAJESOmit<ExtArgs> | null;
    include?: Prisma.MENSAJESInclude<ExtArgs> | null;
    where?: Prisma.MENSAJESWhereInput;
};
export type MULTIMEDIA$PUBLICACIONESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PUBLICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.PUBLICACIONESOmit<ExtArgs> | null;
    include?: Prisma.PUBLICACIONESInclude<ExtArgs> | null;
    where?: Prisma.PUBLICACIONESWhereInput;
};
export type MULTIMEDIADefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MULTIMEDIASelect<ExtArgs> | null;
    omit?: Prisma.MULTIMEDIAOmit<ExtArgs> | null;
    include?: Prisma.MULTIMEDIAInclude<ExtArgs> | null;
};
