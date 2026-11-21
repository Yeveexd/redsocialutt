import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CHATSModel = runtime.Types.Result.DefaultSelection<Prisma.$CHATSPayload>;
export type AggregateCHATS = {
    _count: CHATSCountAggregateOutputType | null;
    _min: CHATSMinAggregateOutputType | null;
    _max: CHATSMaxAggregateOutputType | null;
};
export type CHATSMinAggregateOutputType = {
    id: string | null;
    tipo: string | null;
    nombre: string | null;
    creador_id: string | null;
    creado_en: Date | null;
};
export type CHATSMaxAggregateOutputType = {
    id: string | null;
    tipo: string | null;
    nombre: string | null;
    creador_id: string | null;
    creado_en: Date | null;
};
export type CHATSCountAggregateOutputType = {
    id: number;
    tipo: number;
    nombre: number;
    creador_id: number;
    creado_en: number;
    _all: number;
};
export type CHATSMinAggregateInputType = {
    id?: true;
    tipo?: true;
    nombre?: true;
    creador_id?: true;
    creado_en?: true;
};
export type CHATSMaxAggregateInputType = {
    id?: true;
    tipo?: true;
    nombre?: true;
    creador_id?: true;
    creado_en?: true;
};
export type CHATSCountAggregateInputType = {
    id?: true;
    tipo?: true;
    nombre?: true;
    creador_id?: true;
    creado_en?: true;
    _all?: true;
};
export type CHATSAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CHATSWhereInput;
    orderBy?: Prisma.CHATSOrderByWithRelationInput | Prisma.CHATSOrderByWithRelationInput[];
    cursor?: Prisma.CHATSWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CHATSCountAggregateInputType;
    _min?: CHATSMinAggregateInputType;
    _max?: CHATSMaxAggregateInputType;
};
export type GetCHATSAggregateType<T extends CHATSAggregateArgs> = {
    [P in keyof T & keyof AggregateCHATS]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCHATS[P]> : Prisma.GetScalarType<T[P], AggregateCHATS[P]>;
};
export type CHATSGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CHATSWhereInput;
    orderBy?: Prisma.CHATSOrderByWithAggregationInput | Prisma.CHATSOrderByWithAggregationInput[];
    by: Prisma.CHATSScalarFieldEnum[] | Prisma.CHATSScalarFieldEnum;
    having?: Prisma.CHATSScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CHATSCountAggregateInputType | true;
    _min?: CHATSMinAggregateInputType;
    _max?: CHATSMaxAggregateInputType;
};
export type CHATSGroupByOutputType = {
    id: string;
    tipo: string;
    nombre: string | null;
    creador_id: string;
    creado_en: Date;
    _count: CHATSCountAggregateOutputType | null;
    _min: CHATSMinAggregateOutputType | null;
    _max: CHATSMaxAggregateOutputType | null;
};
export type GetCHATSGroupByPayload<T extends CHATSGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CHATSGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CHATSGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CHATSGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CHATSGroupByOutputType[P]>;
}>>;
export type CHATSWhereInput = {
    AND?: Prisma.CHATSWhereInput | Prisma.CHATSWhereInput[];
    OR?: Prisma.CHATSWhereInput[];
    NOT?: Prisma.CHATSWhereInput | Prisma.CHATSWhereInput[];
    id?: Prisma.UuidFilter<"CHATS"> | string;
    tipo?: Prisma.StringFilter<"CHATS"> | string;
    nombre?: Prisma.StringNullableFilter<"CHATS"> | string | null;
    creador_id?: Prisma.UuidFilter<"CHATS"> | string;
    creado_en?: Prisma.DateTimeFilter<"CHATS"> | Date | string;
    USUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
    MENSAJES?: Prisma.MENSAJESListRelationFilter;
    MIEMBROS_CHAT?: Prisma.MIEMBROS_CHATListRelationFilter;
};
export type CHATSOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrderInput | Prisma.SortOrder;
    creador_id?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    USUARIOS?: Prisma.USUARIOSOrderByWithRelationInput;
    MENSAJES?: Prisma.MENSAJESOrderByRelationAggregateInput;
    MIEMBROS_CHAT?: Prisma.MIEMBROS_CHATOrderByRelationAggregateInput;
};
export type CHATSWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CHATSWhereInput | Prisma.CHATSWhereInput[];
    OR?: Prisma.CHATSWhereInput[];
    NOT?: Prisma.CHATSWhereInput | Prisma.CHATSWhereInput[];
    tipo?: Prisma.StringFilter<"CHATS"> | string;
    nombre?: Prisma.StringNullableFilter<"CHATS"> | string | null;
    creador_id?: Prisma.UuidFilter<"CHATS"> | string;
    creado_en?: Prisma.DateTimeFilter<"CHATS"> | Date | string;
    USUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
    MENSAJES?: Prisma.MENSAJESListRelationFilter;
    MIEMBROS_CHAT?: Prisma.MIEMBROS_CHATListRelationFilter;
}, "id">;
export type CHATSOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrderInput | Prisma.SortOrder;
    creador_id?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    _count?: Prisma.CHATSCountOrderByAggregateInput;
    _max?: Prisma.CHATSMaxOrderByAggregateInput;
    _min?: Prisma.CHATSMinOrderByAggregateInput;
};
export type CHATSScalarWhereWithAggregatesInput = {
    AND?: Prisma.CHATSScalarWhereWithAggregatesInput | Prisma.CHATSScalarWhereWithAggregatesInput[];
    OR?: Prisma.CHATSScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CHATSScalarWhereWithAggregatesInput | Prisma.CHATSScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"CHATS"> | string;
    tipo?: Prisma.StringWithAggregatesFilter<"CHATS"> | string;
    nombre?: Prisma.StringNullableWithAggregatesFilter<"CHATS"> | string | null;
    creador_id?: Prisma.UuidWithAggregatesFilter<"CHATS"> | string;
    creado_en?: Prisma.DateTimeWithAggregatesFilter<"CHATS"> | Date | string;
};
export type CHATSCreateInput = {
    id?: string;
    tipo: string;
    nombre?: string | null;
    creado_en?: Date | string;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutCHATSInput;
    MENSAJES?: Prisma.MENSAJESCreateNestedManyWithoutCHATSInput;
    MIEMBROS_CHAT?: Prisma.MIEMBROS_CHATCreateNestedManyWithoutCHATSInput;
};
export type CHATSUncheckedCreateInput = {
    id?: string;
    tipo: string;
    nombre?: string | null;
    creador_id: string;
    creado_en?: Date | string;
    MENSAJES?: Prisma.MENSAJESUncheckedCreateNestedManyWithoutCHATSInput;
    MIEMBROS_CHAT?: Prisma.MIEMBROS_CHATUncheckedCreateNestedManyWithoutCHATSInput;
};
export type CHATSUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutCHATSNestedInput;
    MENSAJES?: Prisma.MENSAJESUpdateManyWithoutCHATSNestedInput;
    MIEMBROS_CHAT?: Prisma.MIEMBROS_CHATUpdateManyWithoutCHATSNestedInput;
};
export type CHATSUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creador_id?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    MENSAJES?: Prisma.MENSAJESUncheckedUpdateManyWithoutCHATSNestedInput;
    MIEMBROS_CHAT?: Prisma.MIEMBROS_CHATUncheckedUpdateManyWithoutCHATSNestedInput;
};
export type CHATSCreateManyInput = {
    id?: string;
    tipo: string;
    nombre?: string | null;
    creador_id: string;
    creado_en?: Date | string;
};
export type CHATSUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CHATSUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creador_id?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CHATSCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    creador_id?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
};
export type CHATSMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    creador_id?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
};
export type CHATSMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    creador_id?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
};
export type CHATSScalarRelationFilter = {
    is?: Prisma.CHATSWhereInput;
    isNot?: Prisma.CHATSWhereInput;
};
export type CHATSListRelationFilter = {
    every?: Prisma.CHATSWhereInput;
    some?: Prisma.CHATSWhereInput;
    none?: Prisma.CHATSWhereInput;
};
export type CHATSOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type CHATSCreateNestedOneWithoutMENSAJESInput = {
    create?: Prisma.XOR<Prisma.CHATSCreateWithoutMENSAJESInput, Prisma.CHATSUncheckedCreateWithoutMENSAJESInput>;
    connectOrCreate?: Prisma.CHATSCreateOrConnectWithoutMENSAJESInput;
    connect?: Prisma.CHATSWhereUniqueInput;
};
export type CHATSUpdateOneRequiredWithoutMENSAJESNestedInput = {
    create?: Prisma.XOR<Prisma.CHATSCreateWithoutMENSAJESInput, Prisma.CHATSUncheckedCreateWithoutMENSAJESInput>;
    connectOrCreate?: Prisma.CHATSCreateOrConnectWithoutMENSAJESInput;
    upsert?: Prisma.CHATSUpsertWithoutMENSAJESInput;
    connect?: Prisma.CHATSWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CHATSUpdateToOneWithWhereWithoutMENSAJESInput, Prisma.CHATSUpdateWithoutMENSAJESInput>, Prisma.CHATSUncheckedUpdateWithoutMENSAJESInput>;
};
export type CHATSCreateNestedOneWithoutMIEMBROS_CHATInput = {
    create?: Prisma.XOR<Prisma.CHATSCreateWithoutMIEMBROS_CHATInput, Prisma.CHATSUncheckedCreateWithoutMIEMBROS_CHATInput>;
    connectOrCreate?: Prisma.CHATSCreateOrConnectWithoutMIEMBROS_CHATInput;
    connect?: Prisma.CHATSWhereUniqueInput;
};
export type CHATSUpdateOneRequiredWithoutMIEMBROS_CHATNestedInput = {
    create?: Prisma.XOR<Prisma.CHATSCreateWithoutMIEMBROS_CHATInput, Prisma.CHATSUncheckedCreateWithoutMIEMBROS_CHATInput>;
    connectOrCreate?: Prisma.CHATSCreateOrConnectWithoutMIEMBROS_CHATInput;
    upsert?: Prisma.CHATSUpsertWithoutMIEMBROS_CHATInput;
    connect?: Prisma.CHATSWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CHATSUpdateToOneWithWhereWithoutMIEMBROS_CHATInput, Prisma.CHATSUpdateWithoutMIEMBROS_CHATInput>, Prisma.CHATSUncheckedUpdateWithoutMIEMBROS_CHATInput>;
};
export type CHATSCreateNestedManyWithoutUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.CHATSCreateWithoutUSUARIOSInput, Prisma.CHATSUncheckedCreateWithoutUSUARIOSInput> | Prisma.CHATSCreateWithoutUSUARIOSInput[] | Prisma.CHATSUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.CHATSCreateOrConnectWithoutUSUARIOSInput | Prisma.CHATSCreateOrConnectWithoutUSUARIOSInput[];
    createMany?: Prisma.CHATSCreateManyUSUARIOSInputEnvelope;
    connect?: Prisma.CHATSWhereUniqueInput | Prisma.CHATSWhereUniqueInput[];
};
export type CHATSUncheckedCreateNestedManyWithoutUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.CHATSCreateWithoutUSUARIOSInput, Prisma.CHATSUncheckedCreateWithoutUSUARIOSInput> | Prisma.CHATSCreateWithoutUSUARIOSInput[] | Prisma.CHATSUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.CHATSCreateOrConnectWithoutUSUARIOSInput | Prisma.CHATSCreateOrConnectWithoutUSUARIOSInput[];
    createMany?: Prisma.CHATSCreateManyUSUARIOSInputEnvelope;
    connect?: Prisma.CHATSWhereUniqueInput | Prisma.CHATSWhereUniqueInput[];
};
export type CHATSUpdateManyWithoutUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.CHATSCreateWithoutUSUARIOSInput, Prisma.CHATSUncheckedCreateWithoutUSUARIOSInput> | Prisma.CHATSCreateWithoutUSUARIOSInput[] | Prisma.CHATSUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.CHATSCreateOrConnectWithoutUSUARIOSInput | Prisma.CHATSCreateOrConnectWithoutUSUARIOSInput[];
    upsert?: Prisma.CHATSUpsertWithWhereUniqueWithoutUSUARIOSInput | Prisma.CHATSUpsertWithWhereUniqueWithoutUSUARIOSInput[];
    createMany?: Prisma.CHATSCreateManyUSUARIOSInputEnvelope;
    set?: Prisma.CHATSWhereUniqueInput | Prisma.CHATSWhereUniqueInput[];
    disconnect?: Prisma.CHATSWhereUniqueInput | Prisma.CHATSWhereUniqueInput[];
    delete?: Prisma.CHATSWhereUniqueInput | Prisma.CHATSWhereUniqueInput[];
    connect?: Prisma.CHATSWhereUniqueInput | Prisma.CHATSWhereUniqueInput[];
    update?: Prisma.CHATSUpdateWithWhereUniqueWithoutUSUARIOSInput | Prisma.CHATSUpdateWithWhereUniqueWithoutUSUARIOSInput[];
    updateMany?: Prisma.CHATSUpdateManyWithWhereWithoutUSUARIOSInput | Prisma.CHATSUpdateManyWithWhereWithoutUSUARIOSInput[];
    deleteMany?: Prisma.CHATSScalarWhereInput | Prisma.CHATSScalarWhereInput[];
};
export type CHATSUncheckedUpdateManyWithoutUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.CHATSCreateWithoutUSUARIOSInput, Prisma.CHATSUncheckedCreateWithoutUSUARIOSInput> | Prisma.CHATSCreateWithoutUSUARIOSInput[] | Prisma.CHATSUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.CHATSCreateOrConnectWithoutUSUARIOSInput | Prisma.CHATSCreateOrConnectWithoutUSUARIOSInput[];
    upsert?: Prisma.CHATSUpsertWithWhereUniqueWithoutUSUARIOSInput | Prisma.CHATSUpsertWithWhereUniqueWithoutUSUARIOSInput[];
    createMany?: Prisma.CHATSCreateManyUSUARIOSInputEnvelope;
    set?: Prisma.CHATSWhereUniqueInput | Prisma.CHATSWhereUniqueInput[];
    disconnect?: Prisma.CHATSWhereUniqueInput | Prisma.CHATSWhereUniqueInput[];
    delete?: Prisma.CHATSWhereUniqueInput | Prisma.CHATSWhereUniqueInput[];
    connect?: Prisma.CHATSWhereUniqueInput | Prisma.CHATSWhereUniqueInput[];
    update?: Prisma.CHATSUpdateWithWhereUniqueWithoutUSUARIOSInput | Prisma.CHATSUpdateWithWhereUniqueWithoutUSUARIOSInput[];
    updateMany?: Prisma.CHATSUpdateManyWithWhereWithoutUSUARIOSInput | Prisma.CHATSUpdateManyWithWhereWithoutUSUARIOSInput[];
    deleteMany?: Prisma.CHATSScalarWhereInput | Prisma.CHATSScalarWhereInput[];
};
export type CHATSCreateWithoutMENSAJESInput = {
    id?: string;
    tipo: string;
    nombre?: string | null;
    creado_en?: Date | string;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutCHATSInput;
    MIEMBROS_CHAT?: Prisma.MIEMBROS_CHATCreateNestedManyWithoutCHATSInput;
};
export type CHATSUncheckedCreateWithoutMENSAJESInput = {
    id?: string;
    tipo: string;
    nombre?: string | null;
    creador_id: string;
    creado_en?: Date | string;
    MIEMBROS_CHAT?: Prisma.MIEMBROS_CHATUncheckedCreateNestedManyWithoutCHATSInput;
};
export type CHATSCreateOrConnectWithoutMENSAJESInput = {
    where: Prisma.CHATSWhereUniqueInput;
    create: Prisma.XOR<Prisma.CHATSCreateWithoutMENSAJESInput, Prisma.CHATSUncheckedCreateWithoutMENSAJESInput>;
};
export type CHATSUpsertWithoutMENSAJESInput = {
    update: Prisma.XOR<Prisma.CHATSUpdateWithoutMENSAJESInput, Prisma.CHATSUncheckedUpdateWithoutMENSAJESInput>;
    create: Prisma.XOR<Prisma.CHATSCreateWithoutMENSAJESInput, Prisma.CHATSUncheckedCreateWithoutMENSAJESInput>;
    where?: Prisma.CHATSWhereInput;
};
export type CHATSUpdateToOneWithWhereWithoutMENSAJESInput = {
    where?: Prisma.CHATSWhereInput;
    data: Prisma.XOR<Prisma.CHATSUpdateWithoutMENSAJESInput, Prisma.CHATSUncheckedUpdateWithoutMENSAJESInput>;
};
export type CHATSUpdateWithoutMENSAJESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutCHATSNestedInput;
    MIEMBROS_CHAT?: Prisma.MIEMBROS_CHATUpdateManyWithoutCHATSNestedInput;
};
export type CHATSUncheckedUpdateWithoutMENSAJESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creador_id?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    MIEMBROS_CHAT?: Prisma.MIEMBROS_CHATUncheckedUpdateManyWithoutCHATSNestedInput;
};
export type CHATSCreateWithoutMIEMBROS_CHATInput = {
    id?: string;
    tipo: string;
    nombre?: string | null;
    creado_en?: Date | string;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutCHATSInput;
    MENSAJES?: Prisma.MENSAJESCreateNestedManyWithoutCHATSInput;
};
export type CHATSUncheckedCreateWithoutMIEMBROS_CHATInput = {
    id?: string;
    tipo: string;
    nombre?: string | null;
    creador_id: string;
    creado_en?: Date | string;
    MENSAJES?: Prisma.MENSAJESUncheckedCreateNestedManyWithoutCHATSInput;
};
export type CHATSCreateOrConnectWithoutMIEMBROS_CHATInput = {
    where: Prisma.CHATSWhereUniqueInput;
    create: Prisma.XOR<Prisma.CHATSCreateWithoutMIEMBROS_CHATInput, Prisma.CHATSUncheckedCreateWithoutMIEMBROS_CHATInput>;
};
export type CHATSUpsertWithoutMIEMBROS_CHATInput = {
    update: Prisma.XOR<Prisma.CHATSUpdateWithoutMIEMBROS_CHATInput, Prisma.CHATSUncheckedUpdateWithoutMIEMBROS_CHATInput>;
    create: Prisma.XOR<Prisma.CHATSCreateWithoutMIEMBROS_CHATInput, Prisma.CHATSUncheckedCreateWithoutMIEMBROS_CHATInput>;
    where?: Prisma.CHATSWhereInput;
};
export type CHATSUpdateToOneWithWhereWithoutMIEMBROS_CHATInput = {
    where?: Prisma.CHATSWhereInput;
    data: Prisma.XOR<Prisma.CHATSUpdateWithoutMIEMBROS_CHATInput, Prisma.CHATSUncheckedUpdateWithoutMIEMBROS_CHATInput>;
};
export type CHATSUpdateWithoutMIEMBROS_CHATInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutCHATSNestedInput;
    MENSAJES?: Prisma.MENSAJESUpdateManyWithoutCHATSNestedInput;
};
export type CHATSUncheckedUpdateWithoutMIEMBROS_CHATInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creador_id?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    MENSAJES?: Prisma.MENSAJESUncheckedUpdateManyWithoutCHATSNestedInput;
};
export type CHATSCreateWithoutUSUARIOSInput = {
    id?: string;
    tipo: string;
    nombre?: string | null;
    creado_en?: Date | string;
    MENSAJES?: Prisma.MENSAJESCreateNestedManyWithoutCHATSInput;
    MIEMBROS_CHAT?: Prisma.MIEMBROS_CHATCreateNestedManyWithoutCHATSInput;
};
export type CHATSUncheckedCreateWithoutUSUARIOSInput = {
    id?: string;
    tipo: string;
    nombre?: string | null;
    creado_en?: Date | string;
    MENSAJES?: Prisma.MENSAJESUncheckedCreateNestedManyWithoutCHATSInput;
    MIEMBROS_CHAT?: Prisma.MIEMBROS_CHATUncheckedCreateNestedManyWithoutCHATSInput;
};
export type CHATSCreateOrConnectWithoutUSUARIOSInput = {
    where: Prisma.CHATSWhereUniqueInput;
    create: Prisma.XOR<Prisma.CHATSCreateWithoutUSUARIOSInput, Prisma.CHATSUncheckedCreateWithoutUSUARIOSInput>;
};
export type CHATSCreateManyUSUARIOSInputEnvelope = {
    data: Prisma.CHATSCreateManyUSUARIOSInput | Prisma.CHATSCreateManyUSUARIOSInput[];
    skipDuplicates?: boolean;
};
export type CHATSUpsertWithWhereUniqueWithoutUSUARIOSInput = {
    where: Prisma.CHATSWhereUniqueInput;
    update: Prisma.XOR<Prisma.CHATSUpdateWithoutUSUARIOSInput, Prisma.CHATSUncheckedUpdateWithoutUSUARIOSInput>;
    create: Prisma.XOR<Prisma.CHATSCreateWithoutUSUARIOSInput, Prisma.CHATSUncheckedCreateWithoutUSUARIOSInput>;
};
export type CHATSUpdateWithWhereUniqueWithoutUSUARIOSInput = {
    where: Prisma.CHATSWhereUniqueInput;
    data: Prisma.XOR<Prisma.CHATSUpdateWithoutUSUARIOSInput, Prisma.CHATSUncheckedUpdateWithoutUSUARIOSInput>;
};
export type CHATSUpdateManyWithWhereWithoutUSUARIOSInput = {
    where: Prisma.CHATSScalarWhereInput;
    data: Prisma.XOR<Prisma.CHATSUpdateManyMutationInput, Prisma.CHATSUncheckedUpdateManyWithoutUSUARIOSInput>;
};
export type CHATSScalarWhereInput = {
    AND?: Prisma.CHATSScalarWhereInput | Prisma.CHATSScalarWhereInput[];
    OR?: Prisma.CHATSScalarWhereInput[];
    NOT?: Prisma.CHATSScalarWhereInput | Prisma.CHATSScalarWhereInput[];
    id?: Prisma.UuidFilter<"CHATS"> | string;
    tipo?: Prisma.StringFilter<"CHATS"> | string;
    nombre?: Prisma.StringNullableFilter<"CHATS"> | string | null;
    creador_id?: Prisma.UuidFilter<"CHATS"> | string;
    creado_en?: Prisma.DateTimeFilter<"CHATS"> | Date | string;
};
export type CHATSCreateManyUSUARIOSInput = {
    id?: string;
    tipo: string;
    nombre?: string | null;
    creado_en?: Date | string;
};
export type CHATSUpdateWithoutUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    MENSAJES?: Prisma.MENSAJESUpdateManyWithoutCHATSNestedInput;
    MIEMBROS_CHAT?: Prisma.MIEMBROS_CHATUpdateManyWithoutCHATSNestedInput;
};
export type CHATSUncheckedUpdateWithoutUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    MENSAJES?: Prisma.MENSAJESUncheckedUpdateManyWithoutCHATSNestedInput;
    MIEMBROS_CHAT?: Prisma.MIEMBROS_CHATUncheckedUpdateManyWithoutCHATSNestedInput;
};
export type CHATSUncheckedUpdateManyWithoutUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CHATSCountOutputType = {
    MENSAJES: number;
    MIEMBROS_CHAT: number;
};
export type CHATSCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MENSAJES?: boolean | CHATSCountOutputTypeCountMENSAJESArgs;
    MIEMBROS_CHAT?: boolean | CHATSCountOutputTypeCountMIEMBROS_CHATArgs;
};
export type CHATSCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CHATSCountOutputTypeSelect<ExtArgs> | null;
};
export type CHATSCountOutputTypeCountMENSAJESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MENSAJESWhereInput;
};
export type CHATSCountOutputTypeCountMIEMBROS_CHATArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MIEMBROS_CHATWhereInput;
};
export type CHATSSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tipo?: boolean;
    nombre?: boolean;
    creador_id?: boolean;
    creado_en?: boolean;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    MENSAJES?: boolean | Prisma.CHATS$MENSAJESArgs<ExtArgs>;
    MIEMBROS_CHAT?: boolean | Prisma.CHATS$MIEMBROS_CHATArgs<ExtArgs>;
    _count?: boolean | Prisma.CHATSCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cHATS"]>;
export type CHATSSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tipo?: boolean;
    nombre?: boolean;
    creador_id?: boolean;
    creado_en?: boolean;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cHATS"]>;
export type CHATSSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tipo?: boolean;
    nombre?: boolean;
    creador_id?: boolean;
    creado_en?: boolean;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cHATS"]>;
export type CHATSSelectScalar = {
    id?: boolean;
    tipo?: boolean;
    nombre?: boolean;
    creador_id?: boolean;
    creado_en?: boolean;
};
export type CHATSOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tipo" | "nombre" | "creador_id" | "creado_en", ExtArgs["result"]["cHATS"]>;
export type CHATSInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    MENSAJES?: boolean | Prisma.CHATS$MENSAJESArgs<ExtArgs>;
    MIEMBROS_CHAT?: boolean | Prisma.CHATS$MIEMBROS_CHATArgs<ExtArgs>;
    _count?: boolean | Prisma.CHATSCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CHATSIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type CHATSIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type $CHATSPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CHATS";
    objects: {
        USUARIOS: Prisma.$USUARIOSPayload<ExtArgs>;
        MENSAJES: Prisma.$MENSAJESPayload<ExtArgs>[];
        MIEMBROS_CHAT: Prisma.$MIEMBROS_CHATPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tipo: string;
        nombre: string | null;
        creador_id: string;
        creado_en: Date;
    }, ExtArgs["result"]["cHATS"]>;
    composites: {};
};
export type CHATSGetPayload<S extends boolean | null | undefined | CHATSDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CHATSPayload, S>;
export type CHATSCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CHATSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CHATSCountAggregateInputType | true;
};
export interface CHATSDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CHATS'];
        meta: {
            name: 'CHATS';
        };
    };
    findUnique<T extends CHATSFindUniqueArgs>(args: Prisma.SelectSubset<T, CHATSFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CHATSClient<runtime.Types.Result.GetResult<Prisma.$CHATSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CHATSFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CHATSFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CHATSClient<runtime.Types.Result.GetResult<Prisma.$CHATSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CHATSFindFirstArgs>(args?: Prisma.SelectSubset<T, CHATSFindFirstArgs<ExtArgs>>): Prisma.Prisma__CHATSClient<runtime.Types.Result.GetResult<Prisma.$CHATSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CHATSFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CHATSFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CHATSClient<runtime.Types.Result.GetResult<Prisma.$CHATSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CHATSFindManyArgs>(args?: Prisma.SelectSubset<T, CHATSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CHATSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CHATSCreateArgs>(args: Prisma.SelectSubset<T, CHATSCreateArgs<ExtArgs>>): Prisma.Prisma__CHATSClient<runtime.Types.Result.GetResult<Prisma.$CHATSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CHATSCreateManyArgs>(args?: Prisma.SelectSubset<T, CHATSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CHATSCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CHATSCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CHATSPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CHATSDeleteArgs>(args: Prisma.SelectSubset<T, CHATSDeleteArgs<ExtArgs>>): Prisma.Prisma__CHATSClient<runtime.Types.Result.GetResult<Prisma.$CHATSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CHATSUpdateArgs>(args: Prisma.SelectSubset<T, CHATSUpdateArgs<ExtArgs>>): Prisma.Prisma__CHATSClient<runtime.Types.Result.GetResult<Prisma.$CHATSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CHATSDeleteManyArgs>(args?: Prisma.SelectSubset<T, CHATSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CHATSUpdateManyArgs>(args: Prisma.SelectSubset<T, CHATSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CHATSUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CHATSUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CHATSPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CHATSUpsertArgs>(args: Prisma.SelectSubset<T, CHATSUpsertArgs<ExtArgs>>): Prisma.Prisma__CHATSClient<runtime.Types.Result.GetResult<Prisma.$CHATSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CHATSCountArgs>(args?: Prisma.Subset<T, CHATSCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CHATSCountAggregateOutputType> : number>;
    aggregate<T extends CHATSAggregateArgs>(args: Prisma.Subset<T, CHATSAggregateArgs>): Prisma.PrismaPromise<GetCHATSAggregateType<T>>;
    groupBy<T extends CHATSGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CHATSGroupByArgs['orderBy'];
    } : {
        orderBy?: CHATSGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CHATSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCHATSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CHATSFieldRefs;
}
export interface Prisma__CHATSClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    USUARIOS<T extends Prisma.USUARIOSDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.USUARIOSDefaultArgs<ExtArgs>>): Prisma.Prisma__USUARIOSClient<runtime.Types.Result.GetResult<Prisma.$USUARIOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    MENSAJES<T extends Prisma.CHATS$MENSAJESArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CHATS$MENSAJESArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MENSAJESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    MIEMBROS_CHAT<T extends Prisma.CHATS$MIEMBROS_CHATArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CHATS$MIEMBROS_CHATArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_CHATPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CHATSFieldRefs {
    readonly id: Prisma.FieldRef<"CHATS", 'String'>;
    readonly tipo: Prisma.FieldRef<"CHATS", 'String'>;
    readonly nombre: Prisma.FieldRef<"CHATS", 'String'>;
    readonly creador_id: Prisma.FieldRef<"CHATS", 'String'>;
    readonly creado_en: Prisma.FieldRef<"CHATS", 'DateTime'>;
}
export type CHATSFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CHATSSelect<ExtArgs> | null;
    omit?: Prisma.CHATSOmit<ExtArgs> | null;
    include?: Prisma.CHATSInclude<ExtArgs> | null;
    where: Prisma.CHATSWhereUniqueInput;
};
export type CHATSFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CHATSSelect<ExtArgs> | null;
    omit?: Prisma.CHATSOmit<ExtArgs> | null;
    include?: Prisma.CHATSInclude<ExtArgs> | null;
    where: Prisma.CHATSWhereUniqueInput;
};
export type CHATSFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CHATSSelect<ExtArgs> | null;
    omit?: Prisma.CHATSOmit<ExtArgs> | null;
    include?: Prisma.CHATSInclude<ExtArgs> | null;
    where?: Prisma.CHATSWhereInput;
    orderBy?: Prisma.CHATSOrderByWithRelationInput | Prisma.CHATSOrderByWithRelationInput[];
    cursor?: Prisma.CHATSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CHATSScalarFieldEnum | Prisma.CHATSScalarFieldEnum[];
};
export type CHATSFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CHATSSelect<ExtArgs> | null;
    omit?: Prisma.CHATSOmit<ExtArgs> | null;
    include?: Prisma.CHATSInclude<ExtArgs> | null;
    where?: Prisma.CHATSWhereInput;
    orderBy?: Prisma.CHATSOrderByWithRelationInput | Prisma.CHATSOrderByWithRelationInput[];
    cursor?: Prisma.CHATSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CHATSScalarFieldEnum | Prisma.CHATSScalarFieldEnum[];
};
export type CHATSFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CHATSSelect<ExtArgs> | null;
    omit?: Prisma.CHATSOmit<ExtArgs> | null;
    include?: Prisma.CHATSInclude<ExtArgs> | null;
    where?: Prisma.CHATSWhereInput;
    orderBy?: Prisma.CHATSOrderByWithRelationInput | Prisma.CHATSOrderByWithRelationInput[];
    cursor?: Prisma.CHATSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CHATSScalarFieldEnum | Prisma.CHATSScalarFieldEnum[];
};
export type CHATSCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CHATSSelect<ExtArgs> | null;
    omit?: Prisma.CHATSOmit<ExtArgs> | null;
    include?: Prisma.CHATSInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CHATSCreateInput, Prisma.CHATSUncheckedCreateInput>;
};
export type CHATSCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CHATSCreateManyInput | Prisma.CHATSCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CHATSCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CHATSSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CHATSOmit<ExtArgs> | null;
    data: Prisma.CHATSCreateManyInput | Prisma.CHATSCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CHATSIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CHATSUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CHATSSelect<ExtArgs> | null;
    omit?: Prisma.CHATSOmit<ExtArgs> | null;
    include?: Prisma.CHATSInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CHATSUpdateInput, Prisma.CHATSUncheckedUpdateInput>;
    where: Prisma.CHATSWhereUniqueInput;
};
export type CHATSUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CHATSUpdateManyMutationInput, Prisma.CHATSUncheckedUpdateManyInput>;
    where?: Prisma.CHATSWhereInput;
    limit?: number;
};
export type CHATSUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CHATSSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CHATSOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CHATSUpdateManyMutationInput, Prisma.CHATSUncheckedUpdateManyInput>;
    where?: Prisma.CHATSWhereInput;
    limit?: number;
    include?: Prisma.CHATSIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CHATSUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CHATSSelect<ExtArgs> | null;
    omit?: Prisma.CHATSOmit<ExtArgs> | null;
    include?: Prisma.CHATSInclude<ExtArgs> | null;
    where: Prisma.CHATSWhereUniqueInput;
    create: Prisma.XOR<Prisma.CHATSCreateInput, Prisma.CHATSUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CHATSUpdateInput, Prisma.CHATSUncheckedUpdateInput>;
};
export type CHATSDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CHATSSelect<ExtArgs> | null;
    omit?: Prisma.CHATSOmit<ExtArgs> | null;
    include?: Prisma.CHATSInclude<ExtArgs> | null;
    where: Prisma.CHATSWhereUniqueInput;
};
export type CHATSDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CHATSWhereInput;
    limit?: number;
};
export type CHATS$MENSAJESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MENSAJESSelect<ExtArgs> | null;
    omit?: Prisma.MENSAJESOmit<ExtArgs> | null;
    include?: Prisma.MENSAJESInclude<ExtArgs> | null;
    where?: Prisma.MENSAJESWhereInput;
    orderBy?: Prisma.MENSAJESOrderByWithRelationInput | Prisma.MENSAJESOrderByWithRelationInput[];
    cursor?: Prisma.MENSAJESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MENSAJESScalarFieldEnum | Prisma.MENSAJESScalarFieldEnum[];
};
export type CHATS$MIEMBROS_CHATArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MIEMBROS_CHATSelect<ExtArgs> | null;
    omit?: Prisma.MIEMBROS_CHATOmit<ExtArgs> | null;
    include?: Prisma.MIEMBROS_CHATInclude<ExtArgs> | null;
    where?: Prisma.MIEMBROS_CHATWhereInput;
    orderBy?: Prisma.MIEMBROS_CHATOrderByWithRelationInput | Prisma.MIEMBROS_CHATOrderByWithRelationInput[];
    cursor?: Prisma.MIEMBROS_CHATWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MIEMBROS_CHATScalarFieldEnum | Prisma.MIEMBROS_CHATScalarFieldEnum[];
};
export type CHATSDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CHATSSelect<ExtArgs> | null;
    omit?: Prisma.CHATSOmit<ExtArgs> | null;
    include?: Prisma.CHATSInclude<ExtArgs> | null;
};
