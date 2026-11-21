import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MIEMBROS_GRUPOModel = runtime.Types.Result.DefaultSelection<Prisma.$MIEMBROS_GRUPOPayload>;
export type AggregateMIEMBROS_GRUPO = {
    _count: MIEMBROS_GRUPOCountAggregateOutputType | null;
    _min: MIEMBROS_GRUPOMinAggregateOutputType | null;
    _max: MIEMBROS_GRUPOMaxAggregateOutputType | null;
};
export type MIEMBROS_GRUPOMinAggregateOutputType = {
    grupo_id: string | null;
    usuario_id: string | null;
    rol: string | null;
    unido_en: Date | null;
};
export type MIEMBROS_GRUPOMaxAggregateOutputType = {
    grupo_id: string | null;
    usuario_id: string | null;
    rol: string | null;
    unido_en: Date | null;
};
export type MIEMBROS_GRUPOCountAggregateOutputType = {
    grupo_id: number;
    usuario_id: number;
    rol: number;
    unido_en: number;
    _all: number;
};
export type MIEMBROS_GRUPOMinAggregateInputType = {
    grupo_id?: true;
    usuario_id?: true;
    rol?: true;
    unido_en?: true;
};
export type MIEMBROS_GRUPOMaxAggregateInputType = {
    grupo_id?: true;
    usuario_id?: true;
    rol?: true;
    unido_en?: true;
};
export type MIEMBROS_GRUPOCountAggregateInputType = {
    grupo_id?: true;
    usuario_id?: true;
    rol?: true;
    unido_en?: true;
    _all?: true;
};
export type MIEMBROS_GRUPOAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MIEMBROS_GRUPOWhereInput;
    orderBy?: Prisma.MIEMBROS_GRUPOOrderByWithRelationInput | Prisma.MIEMBROS_GRUPOOrderByWithRelationInput[];
    cursor?: Prisma.MIEMBROS_GRUPOWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MIEMBROS_GRUPOCountAggregateInputType;
    _min?: MIEMBROS_GRUPOMinAggregateInputType;
    _max?: MIEMBROS_GRUPOMaxAggregateInputType;
};
export type GetMIEMBROS_GRUPOAggregateType<T extends MIEMBROS_GRUPOAggregateArgs> = {
    [P in keyof T & keyof AggregateMIEMBROS_GRUPO]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMIEMBROS_GRUPO[P]> : Prisma.GetScalarType<T[P], AggregateMIEMBROS_GRUPO[P]>;
};
export type MIEMBROS_GRUPOGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MIEMBROS_GRUPOWhereInput;
    orderBy?: Prisma.MIEMBROS_GRUPOOrderByWithAggregationInput | Prisma.MIEMBROS_GRUPOOrderByWithAggregationInput[];
    by: Prisma.MIEMBROS_GRUPOScalarFieldEnum[] | Prisma.MIEMBROS_GRUPOScalarFieldEnum;
    having?: Prisma.MIEMBROS_GRUPOScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MIEMBROS_GRUPOCountAggregateInputType | true;
    _min?: MIEMBROS_GRUPOMinAggregateInputType;
    _max?: MIEMBROS_GRUPOMaxAggregateInputType;
};
export type MIEMBROS_GRUPOGroupByOutputType = {
    grupo_id: string;
    usuario_id: string;
    rol: string;
    unido_en: Date;
    _count: MIEMBROS_GRUPOCountAggregateOutputType | null;
    _min: MIEMBROS_GRUPOMinAggregateOutputType | null;
    _max: MIEMBROS_GRUPOMaxAggregateOutputType | null;
};
export type GetMIEMBROS_GRUPOGroupByPayload<T extends MIEMBROS_GRUPOGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MIEMBROS_GRUPOGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MIEMBROS_GRUPOGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MIEMBROS_GRUPOGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MIEMBROS_GRUPOGroupByOutputType[P]>;
}>>;
export type MIEMBROS_GRUPOWhereInput = {
    AND?: Prisma.MIEMBROS_GRUPOWhereInput | Prisma.MIEMBROS_GRUPOWhereInput[];
    OR?: Prisma.MIEMBROS_GRUPOWhereInput[];
    NOT?: Prisma.MIEMBROS_GRUPOWhereInput | Prisma.MIEMBROS_GRUPOWhereInput[];
    grupo_id?: Prisma.UuidFilter<"MIEMBROS_GRUPO"> | string;
    usuario_id?: Prisma.UuidFilter<"MIEMBROS_GRUPO"> | string;
    rol?: Prisma.StringFilter<"MIEMBROS_GRUPO"> | string;
    unido_en?: Prisma.DateTimeFilter<"MIEMBROS_GRUPO"> | Date | string;
    GRUPOS?: Prisma.XOR<Prisma.GRUPOSScalarRelationFilter, Prisma.GRUPOSWhereInput>;
    USUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
};
export type MIEMBROS_GRUPOOrderByWithRelationInput = {
    grupo_id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    unido_en?: Prisma.SortOrder;
    GRUPOS?: Prisma.GRUPOSOrderByWithRelationInput;
    USUARIOS?: Prisma.USUARIOSOrderByWithRelationInput;
};
export type MIEMBROS_GRUPOWhereUniqueInput = Prisma.AtLeast<{
    grupo_id_usuario_id?: Prisma.MIEMBROS_GRUPOGrupo_idUsuario_idCompoundUniqueInput;
    AND?: Prisma.MIEMBROS_GRUPOWhereInput | Prisma.MIEMBROS_GRUPOWhereInput[];
    OR?: Prisma.MIEMBROS_GRUPOWhereInput[];
    NOT?: Prisma.MIEMBROS_GRUPOWhereInput | Prisma.MIEMBROS_GRUPOWhereInput[];
    grupo_id?: Prisma.UuidFilter<"MIEMBROS_GRUPO"> | string;
    usuario_id?: Prisma.UuidFilter<"MIEMBROS_GRUPO"> | string;
    rol?: Prisma.StringFilter<"MIEMBROS_GRUPO"> | string;
    unido_en?: Prisma.DateTimeFilter<"MIEMBROS_GRUPO"> | Date | string;
    GRUPOS?: Prisma.XOR<Prisma.GRUPOSScalarRelationFilter, Prisma.GRUPOSWhereInput>;
    USUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
}, "grupo_id_usuario_id">;
export type MIEMBROS_GRUPOOrderByWithAggregationInput = {
    grupo_id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    unido_en?: Prisma.SortOrder;
    _count?: Prisma.MIEMBROS_GRUPOCountOrderByAggregateInput;
    _max?: Prisma.MIEMBROS_GRUPOMaxOrderByAggregateInput;
    _min?: Prisma.MIEMBROS_GRUPOMinOrderByAggregateInput;
};
export type MIEMBROS_GRUPOScalarWhereWithAggregatesInput = {
    AND?: Prisma.MIEMBROS_GRUPOScalarWhereWithAggregatesInput | Prisma.MIEMBROS_GRUPOScalarWhereWithAggregatesInput[];
    OR?: Prisma.MIEMBROS_GRUPOScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MIEMBROS_GRUPOScalarWhereWithAggregatesInput | Prisma.MIEMBROS_GRUPOScalarWhereWithAggregatesInput[];
    grupo_id?: Prisma.UuidWithAggregatesFilter<"MIEMBROS_GRUPO"> | string;
    usuario_id?: Prisma.UuidWithAggregatesFilter<"MIEMBROS_GRUPO"> | string;
    rol?: Prisma.StringWithAggregatesFilter<"MIEMBROS_GRUPO"> | string;
    unido_en?: Prisma.DateTimeWithAggregatesFilter<"MIEMBROS_GRUPO"> | Date | string;
};
export type MIEMBROS_GRUPOCreateInput = {
    rol: string;
    unido_en?: Date | string;
    GRUPOS: Prisma.GRUPOSCreateNestedOneWithoutMIEMBROS_GRUPOInput;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutMIEMBROS_GRUPOInput;
};
export type MIEMBROS_GRUPOUncheckedCreateInput = {
    grupo_id: string;
    usuario_id: string;
    rol: string;
    unido_en?: Date | string;
};
export type MIEMBROS_GRUPOUpdateInput = {
    rol?: Prisma.StringFieldUpdateOperationsInput | string;
    unido_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    GRUPOS?: Prisma.GRUPOSUpdateOneRequiredWithoutMIEMBROS_GRUPONestedInput;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutMIEMBROS_GRUPONestedInput;
};
export type MIEMBROS_GRUPOUncheckedUpdateInput = {
    grupo_id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.StringFieldUpdateOperationsInput | string;
    unido_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MIEMBROS_GRUPOCreateManyInput = {
    grupo_id: string;
    usuario_id: string;
    rol: string;
    unido_en?: Date | string;
};
export type MIEMBROS_GRUPOUpdateManyMutationInput = {
    rol?: Prisma.StringFieldUpdateOperationsInput | string;
    unido_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MIEMBROS_GRUPOUncheckedUpdateManyInput = {
    grupo_id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.StringFieldUpdateOperationsInput | string;
    unido_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MIEMBROS_GRUPOListRelationFilter = {
    every?: Prisma.MIEMBROS_GRUPOWhereInput;
    some?: Prisma.MIEMBROS_GRUPOWhereInput;
    none?: Prisma.MIEMBROS_GRUPOWhereInput;
};
export type MIEMBROS_GRUPOOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MIEMBROS_GRUPOGrupo_idUsuario_idCompoundUniqueInput = {
    grupo_id: string;
    usuario_id: string;
};
export type MIEMBROS_GRUPOCountOrderByAggregateInput = {
    grupo_id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    unido_en?: Prisma.SortOrder;
};
export type MIEMBROS_GRUPOMaxOrderByAggregateInput = {
    grupo_id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    unido_en?: Prisma.SortOrder;
};
export type MIEMBROS_GRUPOMinOrderByAggregateInput = {
    grupo_id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    unido_en?: Prisma.SortOrder;
};
export type MIEMBROS_GRUPOCreateNestedManyWithoutGRUPOSInput = {
    create?: Prisma.XOR<Prisma.MIEMBROS_GRUPOCreateWithoutGRUPOSInput, Prisma.MIEMBROS_GRUPOUncheckedCreateWithoutGRUPOSInput> | Prisma.MIEMBROS_GRUPOCreateWithoutGRUPOSInput[] | Prisma.MIEMBROS_GRUPOUncheckedCreateWithoutGRUPOSInput[];
    connectOrCreate?: Prisma.MIEMBROS_GRUPOCreateOrConnectWithoutGRUPOSInput | Prisma.MIEMBROS_GRUPOCreateOrConnectWithoutGRUPOSInput[];
    createMany?: Prisma.MIEMBROS_GRUPOCreateManyGRUPOSInputEnvelope;
    connect?: Prisma.MIEMBROS_GRUPOWhereUniqueInput | Prisma.MIEMBROS_GRUPOWhereUniqueInput[];
};
export type MIEMBROS_GRUPOUncheckedCreateNestedManyWithoutGRUPOSInput = {
    create?: Prisma.XOR<Prisma.MIEMBROS_GRUPOCreateWithoutGRUPOSInput, Prisma.MIEMBROS_GRUPOUncheckedCreateWithoutGRUPOSInput> | Prisma.MIEMBROS_GRUPOCreateWithoutGRUPOSInput[] | Prisma.MIEMBROS_GRUPOUncheckedCreateWithoutGRUPOSInput[];
    connectOrCreate?: Prisma.MIEMBROS_GRUPOCreateOrConnectWithoutGRUPOSInput | Prisma.MIEMBROS_GRUPOCreateOrConnectWithoutGRUPOSInput[];
    createMany?: Prisma.MIEMBROS_GRUPOCreateManyGRUPOSInputEnvelope;
    connect?: Prisma.MIEMBROS_GRUPOWhereUniqueInput | Prisma.MIEMBROS_GRUPOWhereUniqueInput[];
};
export type MIEMBROS_GRUPOUpdateManyWithoutGRUPOSNestedInput = {
    create?: Prisma.XOR<Prisma.MIEMBROS_GRUPOCreateWithoutGRUPOSInput, Prisma.MIEMBROS_GRUPOUncheckedCreateWithoutGRUPOSInput> | Prisma.MIEMBROS_GRUPOCreateWithoutGRUPOSInput[] | Prisma.MIEMBROS_GRUPOUncheckedCreateWithoutGRUPOSInput[];
    connectOrCreate?: Prisma.MIEMBROS_GRUPOCreateOrConnectWithoutGRUPOSInput | Prisma.MIEMBROS_GRUPOCreateOrConnectWithoutGRUPOSInput[];
    upsert?: Prisma.MIEMBROS_GRUPOUpsertWithWhereUniqueWithoutGRUPOSInput | Prisma.MIEMBROS_GRUPOUpsertWithWhereUniqueWithoutGRUPOSInput[];
    createMany?: Prisma.MIEMBROS_GRUPOCreateManyGRUPOSInputEnvelope;
    set?: Prisma.MIEMBROS_GRUPOWhereUniqueInput | Prisma.MIEMBROS_GRUPOWhereUniqueInput[];
    disconnect?: Prisma.MIEMBROS_GRUPOWhereUniqueInput | Prisma.MIEMBROS_GRUPOWhereUniqueInput[];
    delete?: Prisma.MIEMBROS_GRUPOWhereUniqueInput | Prisma.MIEMBROS_GRUPOWhereUniqueInput[];
    connect?: Prisma.MIEMBROS_GRUPOWhereUniqueInput | Prisma.MIEMBROS_GRUPOWhereUniqueInput[];
    update?: Prisma.MIEMBROS_GRUPOUpdateWithWhereUniqueWithoutGRUPOSInput | Prisma.MIEMBROS_GRUPOUpdateWithWhereUniqueWithoutGRUPOSInput[];
    updateMany?: Prisma.MIEMBROS_GRUPOUpdateManyWithWhereWithoutGRUPOSInput | Prisma.MIEMBROS_GRUPOUpdateManyWithWhereWithoutGRUPOSInput[];
    deleteMany?: Prisma.MIEMBROS_GRUPOScalarWhereInput | Prisma.MIEMBROS_GRUPOScalarWhereInput[];
};
export type MIEMBROS_GRUPOUncheckedUpdateManyWithoutGRUPOSNestedInput = {
    create?: Prisma.XOR<Prisma.MIEMBROS_GRUPOCreateWithoutGRUPOSInput, Prisma.MIEMBROS_GRUPOUncheckedCreateWithoutGRUPOSInput> | Prisma.MIEMBROS_GRUPOCreateWithoutGRUPOSInput[] | Prisma.MIEMBROS_GRUPOUncheckedCreateWithoutGRUPOSInput[];
    connectOrCreate?: Prisma.MIEMBROS_GRUPOCreateOrConnectWithoutGRUPOSInput | Prisma.MIEMBROS_GRUPOCreateOrConnectWithoutGRUPOSInput[];
    upsert?: Prisma.MIEMBROS_GRUPOUpsertWithWhereUniqueWithoutGRUPOSInput | Prisma.MIEMBROS_GRUPOUpsertWithWhereUniqueWithoutGRUPOSInput[];
    createMany?: Prisma.MIEMBROS_GRUPOCreateManyGRUPOSInputEnvelope;
    set?: Prisma.MIEMBROS_GRUPOWhereUniqueInput | Prisma.MIEMBROS_GRUPOWhereUniqueInput[];
    disconnect?: Prisma.MIEMBROS_GRUPOWhereUniqueInput | Prisma.MIEMBROS_GRUPOWhereUniqueInput[];
    delete?: Prisma.MIEMBROS_GRUPOWhereUniqueInput | Prisma.MIEMBROS_GRUPOWhereUniqueInput[];
    connect?: Prisma.MIEMBROS_GRUPOWhereUniqueInput | Prisma.MIEMBROS_GRUPOWhereUniqueInput[];
    update?: Prisma.MIEMBROS_GRUPOUpdateWithWhereUniqueWithoutGRUPOSInput | Prisma.MIEMBROS_GRUPOUpdateWithWhereUniqueWithoutGRUPOSInput[];
    updateMany?: Prisma.MIEMBROS_GRUPOUpdateManyWithWhereWithoutGRUPOSInput | Prisma.MIEMBROS_GRUPOUpdateManyWithWhereWithoutGRUPOSInput[];
    deleteMany?: Prisma.MIEMBROS_GRUPOScalarWhereInput | Prisma.MIEMBROS_GRUPOScalarWhereInput[];
};
export type MIEMBROS_GRUPOCreateNestedManyWithoutUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.MIEMBROS_GRUPOCreateWithoutUSUARIOSInput, Prisma.MIEMBROS_GRUPOUncheckedCreateWithoutUSUARIOSInput> | Prisma.MIEMBROS_GRUPOCreateWithoutUSUARIOSInput[] | Prisma.MIEMBROS_GRUPOUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.MIEMBROS_GRUPOCreateOrConnectWithoutUSUARIOSInput | Prisma.MIEMBROS_GRUPOCreateOrConnectWithoutUSUARIOSInput[];
    createMany?: Prisma.MIEMBROS_GRUPOCreateManyUSUARIOSInputEnvelope;
    connect?: Prisma.MIEMBROS_GRUPOWhereUniqueInput | Prisma.MIEMBROS_GRUPOWhereUniqueInput[];
};
export type MIEMBROS_GRUPOUncheckedCreateNestedManyWithoutUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.MIEMBROS_GRUPOCreateWithoutUSUARIOSInput, Prisma.MIEMBROS_GRUPOUncheckedCreateWithoutUSUARIOSInput> | Prisma.MIEMBROS_GRUPOCreateWithoutUSUARIOSInput[] | Prisma.MIEMBROS_GRUPOUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.MIEMBROS_GRUPOCreateOrConnectWithoutUSUARIOSInput | Prisma.MIEMBROS_GRUPOCreateOrConnectWithoutUSUARIOSInput[];
    createMany?: Prisma.MIEMBROS_GRUPOCreateManyUSUARIOSInputEnvelope;
    connect?: Prisma.MIEMBROS_GRUPOWhereUniqueInput | Prisma.MIEMBROS_GRUPOWhereUniqueInput[];
};
export type MIEMBROS_GRUPOUpdateManyWithoutUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.MIEMBROS_GRUPOCreateWithoutUSUARIOSInput, Prisma.MIEMBROS_GRUPOUncheckedCreateWithoutUSUARIOSInput> | Prisma.MIEMBROS_GRUPOCreateWithoutUSUARIOSInput[] | Prisma.MIEMBROS_GRUPOUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.MIEMBROS_GRUPOCreateOrConnectWithoutUSUARIOSInput | Prisma.MIEMBROS_GRUPOCreateOrConnectWithoutUSUARIOSInput[];
    upsert?: Prisma.MIEMBROS_GRUPOUpsertWithWhereUniqueWithoutUSUARIOSInput | Prisma.MIEMBROS_GRUPOUpsertWithWhereUniqueWithoutUSUARIOSInput[];
    createMany?: Prisma.MIEMBROS_GRUPOCreateManyUSUARIOSInputEnvelope;
    set?: Prisma.MIEMBROS_GRUPOWhereUniqueInput | Prisma.MIEMBROS_GRUPOWhereUniqueInput[];
    disconnect?: Prisma.MIEMBROS_GRUPOWhereUniqueInput | Prisma.MIEMBROS_GRUPOWhereUniqueInput[];
    delete?: Prisma.MIEMBROS_GRUPOWhereUniqueInput | Prisma.MIEMBROS_GRUPOWhereUniqueInput[];
    connect?: Prisma.MIEMBROS_GRUPOWhereUniqueInput | Prisma.MIEMBROS_GRUPOWhereUniqueInput[];
    update?: Prisma.MIEMBROS_GRUPOUpdateWithWhereUniqueWithoutUSUARIOSInput | Prisma.MIEMBROS_GRUPOUpdateWithWhereUniqueWithoutUSUARIOSInput[];
    updateMany?: Prisma.MIEMBROS_GRUPOUpdateManyWithWhereWithoutUSUARIOSInput | Prisma.MIEMBROS_GRUPOUpdateManyWithWhereWithoutUSUARIOSInput[];
    deleteMany?: Prisma.MIEMBROS_GRUPOScalarWhereInput | Prisma.MIEMBROS_GRUPOScalarWhereInput[];
};
export type MIEMBROS_GRUPOUncheckedUpdateManyWithoutUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.MIEMBROS_GRUPOCreateWithoutUSUARIOSInput, Prisma.MIEMBROS_GRUPOUncheckedCreateWithoutUSUARIOSInput> | Prisma.MIEMBROS_GRUPOCreateWithoutUSUARIOSInput[] | Prisma.MIEMBROS_GRUPOUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.MIEMBROS_GRUPOCreateOrConnectWithoutUSUARIOSInput | Prisma.MIEMBROS_GRUPOCreateOrConnectWithoutUSUARIOSInput[];
    upsert?: Prisma.MIEMBROS_GRUPOUpsertWithWhereUniqueWithoutUSUARIOSInput | Prisma.MIEMBROS_GRUPOUpsertWithWhereUniqueWithoutUSUARIOSInput[];
    createMany?: Prisma.MIEMBROS_GRUPOCreateManyUSUARIOSInputEnvelope;
    set?: Prisma.MIEMBROS_GRUPOWhereUniqueInput | Prisma.MIEMBROS_GRUPOWhereUniqueInput[];
    disconnect?: Prisma.MIEMBROS_GRUPOWhereUniqueInput | Prisma.MIEMBROS_GRUPOWhereUniqueInput[];
    delete?: Prisma.MIEMBROS_GRUPOWhereUniqueInput | Prisma.MIEMBROS_GRUPOWhereUniqueInput[];
    connect?: Prisma.MIEMBROS_GRUPOWhereUniqueInput | Prisma.MIEMBROS_GRUPOWhereUniqueInput[];
    update?: Prisma.MIEMBROS_GRUPOUpdateWithWhereUniqueWithoutUSUARIOSInput | Prisma.MIEMBROS_GRUPOUpdateWithWhereUniqueWithoutUSUARIOSInput[];
    updateMany?: Prisma.MIEMBROS_GRUPOUpdateManyWithWhereWithoutUSUARIOSInput | Prisma.MIEMBROS_GRUPOUpdateManyWithWhereWithoutUSUARIOSInput[];
    deleteMany?: Prisma.MIEMBROS_GRUPOScalarWhereInput | Prisma.MIEMBROS_GRUPOScalarWhereInput[];
};
export type MIEMBROS_GRUPOCreateWithoutGRUPOSInput = {
    rol: string;
    unido_en?: Date | string;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutMIEMBROS_GRUPOInput;
};
export type MIEMBROS_GRUPOUncheckedCreateWithoutGRUPOSInput = {
    usuario_id: string;
    rol: string;
    unido_en?: Date | string;
};
export type MIEMBROS_GRUPOCreateOrConnectWithoutGRUPOSInput = {
    where: Prisma.MIEMBROS_GRUPOWhereUniqueInput;
    create: Prisma.XOR<Prisma.MIEMBROS_GRUPOCreateWithoutGRUPOSInput, Prisma.MIEMBROS_GRUPOUncheckedCreateWithoutGRUPOSInput>;
};
export type MIEMBROS_GRUPOCreateManyGRUPOSInputEnvelope = {
    data: Prisma.MIEMBROS_GRUPOCreateManyGRUPOSInput | Prisma.MIEMBROS_GRUPOCreateManyGRUPOSInput[];
    skipDuplicates?: boolean;
};
export type MIEMBROS_GRUPOUpsertWithWhereUniqueWithoutGRUPOSInput = {
    where: Prisma.MIEMBROS_GRUPOWhereUniqueInput;
    update: Prisma.XOR<Prisma.MIEMBROS_GRUPOUpdateWithoutGRUPOSInput, Prisma.MIEMBROS_GRUPOUncheckedUpdateWithoutGRUPOSInput>;
    create: Prisma.XOR<Prisma.MIEMBROS_GRUPOCreateWithoutGRUPOSInput, Prisma.MIEMBROS_GRUPOUncheckedCreateWithoutGRUPOSInput>;
};
export type MIEMBROS_GRUPOUpdateWithWhereUniqueWithoutGRUPOSInput = {
    where: Prisma.MIEMBROS_GRUPOWhereUniqueInput;
    data: Prisma.XOR<Prisma.MIEMBROS_GRUPOUpdateWithoutGRUPOSInput, Prisma.MIEMBROS_GRUPOUncheckedUpdateWithoutGRUPOSInput>;
};
export type MIEMBROS_GRUPOUpdateManyWithWhereWithoutGRUPOSInput = {
    where: Prisma.MIEMBROS_GRUPOScalarWhereInput;
    data: Prisma.XOR<Prisma.MIEMBROS_GRUPOUpdateManyMutationInput, Prisma.MIEMBROS_GRUPOUncheckedUpdateManyWithoutGRUPOSInput>;
};
export type MIEMBROS_GRUPOScalarWhereInput = {
    AND?: Prisma.MIEMBROS_GRUPOScalarWhereInput | Prisma.MIEMBROS_GRUPOScalarWhereInput[];
    OR?: Prisma.MIEMBROS_GRUPOScalarWhereInput[];
    NOT?: Prisma.MIEMBROS_GRUPOScalarWhereInput | Prisma.MIEMBROS_GRUPOScalarWhereInput[];
    grupo_id?: Prisma.UuidFilter<"MIEMBROS_GRUPO"> | string;
    usuario_id?: Prisma.UuidFilter<"MIEMBROS_GRUPO"> | string;
    rol?: Prisma.StringFilter<"MIEMBROS_GRUPO"> | string;
    unido_en?: Prisma.DateTimeFilter<"MIEMBROS_GRUPO"> | Date | string;
};
export type MIEMBROS_GRUPOCreateWithoutUSUARIOSInput = {
    rol: string;
    unido_en?: Date | string;
    GRUPOS: Prisma.GRUPOSCreateNestedOneWithoutMIEMBROS_GRUPOInput;
};
export type MIEMBROS_GRUPOUncheckedCreateWithoutUSUARIOSInput = {
    grupo_id: string;
    rol: string;
    unido_en?: Date | string;
};
export type MIEMBROS_GRUPOCreateOrConnectWithoutUSUARIOSInput = {
    where: Prisma.MIEMBROS_GRUPOWhereUniqueInput;
    create: Prisma.XOR<Prisma.MIEMBROS_GRUPOCreateWithoutUSUARIOSInput, Prisma.MIEMBROS_GRUPOUncheckedCreateWithoutUSUARIOSInput>;
};
export type MIEMBROS_GRUPOCreateManyUSUARIOSInputEnvelope = {
    data: Prisma.MIEMBROS_GRUPOCreateManyUSUARIOSInput | Prisma.MIEMBROS_GRUPOCreateManyUSUARIOSInput[];
    skipDuplicates?: boolean;
};
export type MIEMBROS_GRUPOUpsertWithWhereUniqueWithoutUSUARIOSInput = {
    where: Prisma.MIEMBROS_GRUPOWhereUniqueInput;
    update: Prisma.XOR<Prisma.MIEMBROS_GRUPOUpdateWithoutUSUARIOSInput, Prisma.MIEMBROS_GRUPOUncheckedUpdateWithoutUSUARIOSInput>;
    create: Prisma.XOR<Prisma.MIEMBROS_GRUPOCreateWithoutUSUARIOSInput, Prisma.MIEMBROS_GRUPOUncheckedCreateWithoutUSUARIOSInput>;
};
export type MIEMBROS_GRUPOUpdateWithWhereUniqueWithoutUSUARIOSInput = {
    where: Prisma.MIEMBROS_GRUPOWhereUniqueInput;
    data: Prisma.XOR<Prisma.MIEMBROS_GRUPOUpdateWithoutUSUARIOSInput, Prisma.MIEMBROS_GRUPOUncheckedUpdateWithoutUSUARIOSInput>;
};
export type MIEMBROS_GRUPOUpdateManyWithWhereWithoutUSUARIOSInput = {
    where: Prisma.MIEMBROS_GRUPOScalarWhereInput;
    data: Prisma.XOR<Prisma.MIEMBROS_GRUPOUpdateManyMutationInput, Prisma.MIEMBROS_GRUPOUncheckedUpdateManyWithoutUSUARIOSInput>;
};
export type MIEMBROS_GRUPOCreateManyGRUPOSInput = {
    usuario_id: string;
    rol: string;
    unido_en?: Date | string;
};
export type MIEMBROS_GRUPOUpdateWithoutGRUPOSInput = {
    rol?: Prisma.StringFieldUpdateOperationsInput | string;
    unido_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutMIEMBROS_GRUPONestedInput;
};
export type MIEMBROS_GRUPOUncheckedUpdateWithoutGRUPOSInput = {
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.StringFieldUpdateOperationsInput | string;
    unido_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MIEMBROS_GRUPOUncheckedUpdateManyWithoutGRUPOSInput = {
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.StringFieldUpdateOperationsInput | string;
    unido_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MIEMBROS_GRUPOCreateManyUSUARIOSInput = {
    grupo_id: string;
    rol: string;
    unido_en?: Date | string;
};
export type MIEMBROS_GRUPOUpdateWithoutUSUARIOSInput = {
    rol?: Prisma.StringFieldUpdateOperationsInput | string;
    unido_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    GRUPOS?: Prisma.GRUPOSUpdateOneRequiredWithoutMIEMBROS_GRUPONestedInput;
};
export type MIEMBROS_GRUPOUncheckedUpdateWithoutUSUARIOSInput = {
    grupo_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.StringFieldUpdateOperationsInput | string;
    unido_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MIEMBROS_GRUPOUncheckedUpdateManyWithoutUSUARIOSInput = {
    grupo_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.StringFieldUpdateOperationsInput | string;
    unido_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MIEMBROS_GRUPOSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    grupo_id?: boolean;
    usuario_id?: boolean;
    rol?: boolean;
    unido_en?: boolean;
    GRUPOS?: boolean | Prisma.GRUPOSDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mIEMBROS_GRUPO"]>;
export type MIEMBROS_GRUPOSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    grupo_id?: boolean;
    usuario_id?: boolean;
    rol?: boolean;
    unido_en?: boolean;
    GRUPOS?: boolean | Prisma.GRUPOSDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mIEMBROS_GRUPO"]>;
export type MIEMBROS_GRUPOSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    grupo_id?: boolean;
    usuario_id?: boolean;
    rol?: boolean;
    unido_en?: boolean;
    GRUPOS?: boolean | Prisma.GRUPOSDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mIEMBROS_GRUPO"]>;
export type MIEMBROS_GRUPOSelectScalar = {
    grupo_id?: boolean;
    usuario_id?: boolean;
    rol?: boolean;
    unido_en?: boolean;
};
export type MIEMBROS_GRUPOOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"grupo_id" | "usuario_id" | "rol" | "unido_en", ExtArgs["result"]["mIEMBROS_GRUPO"]>;
export type MIEMBROS_GRUPOInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    GRUPOS?: boolean | Prisma.GRUPOSDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type MIEMBROS_GRUPOIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    GRUPOS?: boolean | Prisma.GRUPOSDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type MIEMBROS_GRUPOIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    GRUPOS?: boolean | Prisma.GRUPOSDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type $MIEMBROS_GRUPOPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MIEMBROS_GRUPO";
    objects: {
        GRUPOS: Prisma.$GRUPOSPayload<ExtArgs>;
        USUARIOS: Prisma.$USUARIOSPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        grupo_id: string;
        usuario_id: string;
        rol: string;
        unido_en: Date;
    }, ExtArgs["result"]["mIEMBROS_GRUPO"]>;
    composites: {};
};
export type MIEMBROS_GRUPOGetPayload<S extends boolean | null | undefined | MIEMBROS_GRUPODefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MIEMBROS_GRUPOPayload, S>;
export type MIEMBROS_GRUPOCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MIEMBROS_GRUPOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MIEMBROS_GRUPOCountAggregateInputType | true;
};
export interface MIEMBROS_GRUPODelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MIEMBROS_GRUPO'];
        meta: {
            name: 'MIEMBROS_GRUPO';
        };
    };
    findUnique<T extends MIEMBROS_GRUPOFindUniqueArgs>(args: Prisma.SelectSubset<T, MIEMBROS_GRUPOFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MIEMBROS_GRUPOClient<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_GRUPOPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MIEMBROS_GRUPOFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MIEMBROS_GRUPOFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MIEMBROS_GRUPOClient<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_GRUPOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MIEMBROS_GRUPOFindFirstArgs>(args?: Prisma.SelectSubset<T, MIEMBROS_GRUPOFindFirstArgs<ExtArgs>>): Prisma.Prisma__MIEMBROS_GRUPOClient<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_GRUPOPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MIEMBROS_GRUPOFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MIEMBROS_GRUPOFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MIEMBROS_GRUPOClient<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_GRUPOPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MIEMBROS_GRUPOFindManyArgs>(args?: Prisma.SelectSubset<T, MIEMBROS_GRUPOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_GRUPOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MIEMBROS_GRUPOCreateArgs>(args: Prisma.SelectSubset<T, MIEMBROS_GRUPOCreateArgs<ExtArgs>>): Prisma.Prisma__MIEMBROS_GRUPOClient<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_GRUPOPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MIEMBROS_GRUPOCreateManyArgs>(args?: Prisma.SelectSubset<T, MIEMBROS_GRUPOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MIEMBROS_GRUPOCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MIEMBROS_GRUPOCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_GRUPOPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MIEMBROS_GRUPODeleteArgs>(args: Prisma.SelectSubset<T, MIEMBROS_GRUPODeleteArgs<ExtArgs>>): Prisma.Prisma__MIEMBROS_GRUPOClient<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_GRUPOPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MIEMBROS_GRUPOUpdateArgs>(args: Prisma.SelectSubset<T, MIEMBROS_GRUPOUpdateArgs<ExtArgs>>): Prisma.Prisma__MIEMBROS_GRUPOClient<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_GRUPOPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MIEMBROS_GRUPODeleteManyArgs>(args?: Prisma.SelectSubset<T, MIEMBROS_GRUPODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MIEMBROS_GRUPOUpdateManyArgs>(args: Prisma.SelectSubset<T, MIEMBROS_GRUPOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MIEMBROS_GRUPOUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MIEMBROS_GRUPOUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_GRUPOPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MIEMBROS_GRUPOUpsertArgs>(args: Prisma.SelectSubset<T, MIEMBROS_GRUPOUpsertArgs<ExtArgs>>): Prisma.Prisma__MIEMBROS_GRUPOClient<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_GRUPOPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MIEMBROS_GRUPOCountArgs>(args?: Prisma.Subset<T, MIEMBROS_GRUPOCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MIEMBROS_GRUPOCountAggregateOutputType> : number>;
    aggregate<T extends MIEMBROS_GRUPOAggregateArgs>(args: Prisma.Subset<T, MIEMBROS_GRUPOAggregateArgs>): Prisma.PrismaPromise<GetMIEMBROS_GRUPOAggregateType<T>>;
    groupBy<T extends MIEMBROS_GRUPOGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MIEMBROS_GRUPOGroupByArgs['orderBy'];
    } : {
        orderBy?: MIEMBROS_GRUPOGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MIEMBROS_GRUPOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMIEMBROS_GRUPOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MIEMBROS_GRUPOFieldRefs;
}
export interface Prisma__MIEMBROS_GRUPOClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    GRUPOS<T extends Prisma.GRUPOSDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GRUPOSDefaultArgs<ExtArgs>>): Prisma.Prisma__GRUPOSClient<runtime.Types.Result.GetResult<Prisma.$GRUPOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    USUARIOS<T extends Prisma.USUARIOSDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.USUARIOSDefaultArgs<ExtArgs>>): Prisma.Prisma__USUARIOSClient<runtime.Types.Result.GetResult<Prisma.$USUARIOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MIEMBROS_GRUPOFieldRefs {
    readonly grupo_id: Prisma.FieldRef<"MIEMBROS_GRUPO", 'String'>;
    readonly usuario_id: Prisma.FieldRef<"MIEMBROS_GRUPO", 'String'>;
    readonly rol: Prisma.FieldRef<"MIEMBROS_GRUPO", 'String'>;
    readonly unido_en: Prisma.FieldRef<"MIEMBROS_GRUPO", 'DateTime'>;
}
export type MIEMBROS_GRUPOFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MIEMBROS_GRUPOSelect<ExtArgs> | null;
    omit?: Prisma.MIEMBROS_GRUPOOmit<ExtArgs> | null;
    include?: Prisma.MIEMBROS_GRUPOInclude<ExtArgs> | null;
    where: Prisma.MIEMBROS_GRUPOWhereUniqueInput;
};
export type MIEMBROS_GRUPOFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MIEMBROS_GRUPOSelect<ExtArgs> | null;
    omit?: Prisma.MIEMBROS_GRUPOOmit<ExtArgs> | null;
    include?: Prisma.MIEMBROS_GRUPOInclude<ExtArgs> | null;
    where: Prisma.MIEMBROS_GRUPOWhereUniqueInput;
};
export type MIEMBROS_GRUPOFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MIEMBROS_GRUPOSelect<ExtArgs> | null;
    omit?: Prisma.MIEMBROS_GRUPOOmit<ExtArgs> | null;
    include?: Prisma.MIEMBROS_GRUPOInclude<ExtArgs> | null;
    where?: Prisma.MIEMBROS_GRUPOWhereInput;
    orderBy?: Prisma.MIEMBROS_GRUPOOrderByWithRelationInput | Prisma.MIEMBROS_GRUPOOrderByWithRelationInput[];
    cursor?: Prisma.MIEMBROS_GRUPOWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MIEMBROS_GRUPOScalarFieldEnum | Prisma.MIEMBROS_GRUPOScalarFieldEnum[];
};
export type MIEMBROS_GRUPOFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MIEMBROS_GRUPOSelect<ExtArgs> | null;
    omit?: Prisma.MIEMBROS_GRUPOOmit<ExtArgs> | null;
    include?: Prisma.MIEMBROS_GRUPOInclude<ExtArgs> | null;
    where?: Prisma.MIEMBROS_GRUPOWhereInput;
    orderBy?: Prisma.MIEMBROS_GRUPOOrderByWithRelationInput | Prisma.MIEMBROS_GRUPOOrderByWithRelationInput[];
    cursor?: Prisma.MIEMBROS_GRUPOWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MIEMBROS_GRUPOScalarFieldEnum | Prisma.MIEMBROS_GRUPOScalarFieldEnum[];
};
export type MIEMBROS_GRUPOFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MIEMBROS_GRUPOSelect<ExtArgs> | null;
    omit?: Prisma.MIEMBROS_GRUPOOmit<ExtArgs> | null;
    include?: Prisma.MIEMBROS_GRUPOInclude<ExtArgs> | null;
    where?: Prisma.MIEMBROS_GRUPOWhereInput;
    orderBy?: Prisma.MIEMBROS_GRUPOOrderByWithRelationInput | Prisma.MIEMBROS_GRUPOOrderByWithRelationInput[];
    cursor?: Prisma.MIEMBROS_GRUPOWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MIEMBROS_GRUPOScalarFieldEnum | Prisma.MIEMBROS_GRUPOScalarFieldEnum[];
};
export type MIEMBROS_GRUPOCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MIEMBROS_GRUPOSelect<ExtArgs> | null;
    omit?: Prisma.MIEMBROS_GRUPOOmit<ExtArgs> | null;
    include?: Prisma.MIEMBROS_GRUPOInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MIEMBROS_GRUPOCreateInput, Prisma.MIEMBROS_GRUPOUncheckedCreateInput>;
};
export type MIEMBROS_GRUPOCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MIEMBROS_GRUPOCreateManyInput | Prisma.MIEMBROS_GRUPOCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MIEMBROS_GRUPOCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MIEMBROS_GRUPOSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MIEMBROS_GRUPOOmit<ExtArgs> | null;
    data: Prisma.MIEMBROS_GRUPOCreateManyInput | Prisma.MIEMBROS_GRUPOCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MIEMBROS_GRUPOIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MIEMBROS_GRUPOUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MIEMBROS_GRUPOSelect<ExtArgs> | null;
    omit?: Prisma.MIEMBROS_GRUPOOmit<ExtArgs> | null;
    include?: Prisma.MIEMBROS_GRUPOInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MIEMBROS_GRUPOUpdateInput, Prisma.MIEMBROS_GRUPOUncheckedUpdateInput>;
    where: Prisma.MIEMBROS_GRUPOWhereUniqueInput;
};
export type MIEMBROS_GRUPOUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MIEMBROS_GRUPOUpdateManyMutationInput, Prisma.MIEMBROS_GRUPOUncheckedUpdateManyInput>;
    where?: Prisma.MIEMBROS_GRUPOWhereInput;
    limit?: number;
};
export type MIEMBROS_GRUPOUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MIEMBROS_GRUPOSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MIEMBROS_GRUPOOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MIEMBROS_GRUPOUpdateManyMutationInput, Prisma.MIEMBROS_GRUPOUncheckedUpdateManyInput>;
    where?: Prisma.MIEMBROS_GRUPOWhereInput;
    limit?: number;
    include?: Prisma.MIEMBROS_GRUPOIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MIEMBROS_GRUPOUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MIEMBROS_GRUPOSelect<ExtArgs> | null;
    omit?: Prisma.MIEMBROS_GRUPOOmit<ExtArgs> | null;
    include?: Prisma.MIEMBROS_GRUPOInclude<ExtArgs> | null;
    where: Prisma.MIEMBROS_GRUPOWhereUniqueInput;
    create: Prisma.XOR<Prisma.MIEMBROS_GRUPOCreateInput, Prisma.MIEMBROS_GRUPOUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MIEMBROS_GRUPOUpdateInput, Prisma.MIEMBROS_GRUPOUncheckedUpdateInput>;
};
export type MIEMBROS_GRUPODeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MIEMBROS_GRUPOSelect<ExtArgs> | null;
    omit?: Prisma.MIEMBROS_GRUPOOmit<ExtArgs> | null;
    include?: Prisma.MIEMBROS_GRUPOInclude<ExtArgs> | null;
    where: Prisma.MIEMBROS_GRUPOWhereUniqueInput;
};
export type MIEMBROS_GRUPODeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MIEMBROS_GRUPOWhereInput;
    limit?: number;
};
export type MIEMBROS_GRUPODefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MIEMBROS_GRUPOSelect<ExtArgs> | null;
    omit?: Prisma.MIEMBROS_GRUPOOmit<ExtArgs> | null;
    include?: Prisma.MIEMBROS_GRUPOInclude<ExtArgs> | null;
};
