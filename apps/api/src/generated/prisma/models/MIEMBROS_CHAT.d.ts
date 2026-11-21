import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MIEMBROS_CHATModel = runtime.Types.Result.DefaultSelection<Prisma.$MIEMBROS_CHATPayload>;
export type AggregateMIEMBROS_CHAT = {
    _count: MIEMBROS_CHATCountAggregateOutputType | null;
    _min: MIEMBROS_CHATMinAggregateOutputType | null;
    _max: MIEMBROS_CHATMaxAggregateOutputType | null;
};
export type MIEMBROS_CHATMinAggregateOutputType = {
    chat_id: string | null;
    usuario_id: string | null;
    rol: string | null;
    fijado: boolean | null;
    archivado: boolean | null;
    eliminado: boolean | null;
    unido_en: Date | null;
};
export type MIEMBROS_CHATMaxAggregateOutputType = {
    chat_id: string | null;
    usuario_id: string | null;
    rol: string | null;
    fijado: boolean | null;
    archivado: boolean | null;
    eliminado: boolean | null;
    unido_en: Date | null;
};
export type MIEMBROS_CHATCountAggregateOutputType = {
    chat_id: number;
    usuario_id: number;
    rol: number;
    fijado: number;
    archivado: number;
    eliminado: number;
    unido_en: number;
    _all: number;
};
export type MIEMBROS_CHATMinAggregateInputType = {
    chat_id?: true;
    usuario_id?: true;
    rol?: true;
    fijado?: true;
    archivado?: true;
    eliminado?: true;
    unido_en?: true;
};
export type MIEMBROS_CHATMaxAggregateInputType = {
    chat_id?: true;
    usuario_id?: true;
    rol?: true;
    fijado?: true;
    archivado?: true;
    eliminado?: true;
    unido_en?: true;
};
export type MIEMBROS_CHATCountAggregateInputType = {
    chat_id?: true;
    usuario_id?: true;
    rol?: true;
    fijado?: true;
    archivado?: true;
    eliminado?: true;
    unido_en?: true;
    _all?: true;
};
export type MIEMBROS_CHATAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MIEMBROS_CHATWhereInput;
    orderBy?: Prisma.MIEMBROS_CHATOrderByWithRelationInput | Prisma.MIEMBROS_CHATOrderByWithRelationInput[];
    cursor?: Prisma.MIEMBROS_CHATWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MIEMBROS_CHATCountAggregateInputType;
    _min?: MIEMBROS_CHATMinAggregateInputType;
    _max?: MIEMBROS_CHATMaxAggregateInputType;
};
export type GetMIEMBROS_CHATAggregateType<T extends MIEMBROS_CHATAggregateArgs> = {
    [P in keyof T & keyof AggregateMIEMBROS_CHAT]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMIEMBROS_CHAT[P]> : Prisma.GetScalarType<T[P], AggregateMIEMBROS_CHAT[P]>;
};
export type MIEMBROS_CHATGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MIEMBROS_CHATWhereInput;
    orderBy?: Prisma.MIEMBROS_CHATOrderByWithAggregationInput | Prisma.MIEMBROS_CHATOrderByWithAggregationInput[];
    by: Prisma.MIEMBROS_CHATScalarFieldEnum[] | Prisma.MIEMBROS_CHATScalarFieldEnum;
    having?: Prisma.MIEMBROS_CHATScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MIEMBROS_CHATCountAggregateInputType | true;
    _min?: MIEMBROS_CHATMinAggregateInputType;
    _max?: MIEMBROS_CHATMaxAggregateInputType;
};
export type MIEMBROS_CHATGroupByOutputType = {
    chat_id: string;
    usuario_id: string;
    rol: string;
    fijado: boolean;
    archivado: boolean;
    eliminado: boolean;
    unido_en: Date;
    _count: MIEMBROS_CHATCountAggregateOutputType | null;
    _min: MIEMBROS_CHATMinAggregateOutputType | null;
    _max: MIEMBROS_CHATMaxAggregateOutputType | null;
};
export type GetMIEMBROS_CHATGroupByPayload<T extends MIEMBROS_CHATGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MIEMBROS_CHATGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MIEMBROS_CHATGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MIEMBROS_CHATGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MIEMBROS_CHATGroupByOutputType[P]>;
}>>;
export type MIEMBROS_CHATWhereInput = {
    AND?: Prisma.MIEMBROS_CHATWhereInput | Prisma.MIEMBROS_CHATWhereInput[];
    OR?: Prisma.MIEMBROS_CHATWhereInput[];
    NOT?: Prisma.MIEMBROS_CHATWhereInput | Prisma.MIEMBROS_CHATWhereInput[];
    chat_id?: Prisma.UuidFilter<"MIEMBROS_CHAT"> | string;
    usuario_id?: Prisma.UuidFilter<"MIEMBROS_CHAT"> | string;
    rol?: Prisma.StringFilter<"MIEMBROS_CHAT"> | string;
    fijado?: Prisma.BoolFilter<"MIEMBROS_CHAT"> | boolean;
    archivado?: Prisma.BoolFilter<"MIEMBROS_CHAT"> | boolean;
    eliminado?: Prisma.BoolFilter<"MIEMBROS_CHAT"> | boolean;
    unido_en?: Prisma.DateTimeFilter<"MIEMBROS_CHAT"> | Date | string;
    CHATS?: Prisma.XOR<Prisma.CHATSScalarRelationFilter, Prisma.CHATSWhereInput>;
    USUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
};
export type MIEMBROS_CHATOrderByWithRelationInput = {
    chat_id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    fijado?: Prisma.SortOrder;
    archivado?: Prisma.SortOrder;
    eliminado?: Prisma.SortOrder;
    unido_en?: Prisma.SortOrder;
    CHATS?: Prisma.CHATSOrderByWithRelationInput;
    USUARIOS?: Prisma.USUARIOSOrderByWithRelationInput;
};
export type MIEMBROS_CHATWhereUniqueInput = Prisma.AtLeast<{
    chat_id_usuario_id?: Prisma.MIEMBROS_CHATChat_idUsuario_idCompoundUniqueInput;
    AND?: Prisma.MIEMBROS_CHATWhereInput | Prisma.MIEMBROS_CHATWhereInput[];
    OR?: Prisma.MIEMBROS_CHATWhereInput[];
    NOT?: Prisma.MIEMBROS_CHATWhereInput | Prisma.MIEMBROS_CHATWhereInput[];
    chat_id?: Prisma.UuidFilter<"MIEMBROS_CHAT"> | string;
    usuario_id?: Prisma.UuidFilter<"MIEMBROS_CHAT"> | string;
    rol?: Prisma.StringFilter<"MIEMBROS_CHAT"> | string;
    fijado?: Prisma.BoolFilter<"MIEMBROS_CHAT"> | boolean;
    archivado?: Prisma.BoolFilter<"MIEMBROS_CHAT"> | boolean;
    eliminado?: Prisma.BoolFilter<"MIEMBROS_CHAT"> | boolean;
    unido_en?: Prisma.DateTimeFilter<"MIEMBROS_CHAT"> | Date | string;
    CHATS?: Prisma.XOR<Prisma.CHATSScalarRelationFilter, Prisma.CHATSWhereInput>;
    USUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
}, "chat_id_usuario_id">;
export type MIEMBROS_CHATOrderByWithAggregationInput = {
    chat_id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    fijado?: Prisma.SortOrder;
    archivado?: Prisma.SortOrder;
    eliminado?: Prisma.SortOrder;
    unido_en?: Prisma.SortOrder;
    _count?: Prisma.MIEMBROS_CHATCountOrderByAggregateInput;
    _max?: Prisma.MIEMBROS_CHATMaxOrderByAggregateInput;
    _min?: Prisma.MIEMBROS_CHATMinOrderByAggregateInput;
};
export type MIEMBROS_CHATScalarWhereWithAggregatesInput = {
    AND?: Prisma.MIEMBROS_CHATScalarWhereWithAggregatesInput | Prisma.MIEMBROS_CHATScalarWhereWithAggregatesInput[];
    OR?: Prisma.MIEMBROS_CHATScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MIEMBROS_CHATScalarWhereWithAggregatesInput | Prisma.MIEMBROS_CHATScalarWhereWithAggregatesInput[];
    chat_id?: Prisma.UuidWithAggregatesFilter<"MIEMBROS_CHAT"> | string;
    usuario_id?: Prisma.UuidWithAggregatesFilter<"MIEMBROS_CHAT"> | string;
    rol?: Prisma.StringWithAggregatesFilter<"MIEMBROS_CHAT"> | string;
    fijado?: Prisma.BoolWithAggregatesFilter<"MIEMBROS_CHAT"> | boolean;
    archivado?: Prisma.BoolWithAggregatesFilter<"MIEMBROS_CHAT"> | boolean;
    eliminado?: Prisma.BoolWithAggregatesFilter<"MIEMBROS_CHAT"> | boolean;
    unido_en?: Prisma.DateTimeWithAggregatesFilter<"MIEMBROS_CHAT"> | Date | string;
};
export type MIEMBROS_CHATCreateInput = {
    rol: string;
    fijado?: boolean;
    archivado?: boolean;
    eliminado?: boolean;
    unido_en?: Date | string;
    CHATS: Prisma.CHATSCreateNestedOneWithoutMIEMBROS_CHATInput;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutMIEMBROS_CHATInput;
};
export type MIEMBROS_CHATUncheckedCreateInput = {
    chat_id: string;
    usuario_id: string;
    rol: string;
    fijado?: boolean;
    archivado?: boolean;
    eliminado?: boolean;
    unido_en?: Date | string;
};
export type MIEMBROS_CHATUpdateInput = {
    rol?: Prisma.StringFieldUpdateOperationsInput | string;
    fijado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    archivado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eliminado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unido_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    CHATS?: Prisma.CHATSUpdateOneRequiredWithoutMIEMBROS_CHATNestedInput;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutMIEMBROS_CHATNestedInput;
};
export type MIEMBROS_CHATUncheckedUpdateInput = {
    chat_id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.StringFieldUpdateOperationsInput | string;
    fijado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    archivado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eliminado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unido_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MIEMBROS_CHATCreateManyInput = {
    chat_id: string;
    usuario_id: string;
    rol: string;
    fijado?: boolean;
    archivado?: boolean;
    eliminado?: boolean;
    unido_en?: Date | string;
};
export type MIEMBROS_CHATUpdateManyMutationInput = {
    rol?: Prisma.StringFieldUpdateOperationsInput | string;
    fijado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    archivado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eliminado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unido_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MIEMBROS_CHATUncheckedUpdateManyInput = {
    chat_id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.StringFieldUpdateOperationsInput | string;
    fijado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    archivado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eliminado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unido_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MIEMBROS_CHATListRelationFilter = {
    every?: Prisma.MIEMBROS_CHATWhereInput;
    some?: Prisma.MIEMBROS_CHATWhereInput;
    none?: Prisma.MIEMBROS_CHATWhereInput;
};
export type MIEMBROS_CHATOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MIEMBROS_CHATChat_idUsuario_idCompoundUniqueInput = {
    chat_id: string;
    usuario_id: string;
};
export type MIEMBROS_CHATCountOrderByAggregateInput = {
    chat_id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    fijado?: Prisma.SortOrder;
    archivado?: Prisma.SortOrder;
    eliminado?: Prisma.SortOrder;
    unido_en?: Prisma.SortOrder;
};
export type MIEMBROS_CHATMaxOrderByAggregateInput = {
    chat_id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    fijado?: Prisma.SortOrder;
    archivado?: Prisma.SortOrder;
    eliminado?: Prisma.SortOrder;
    unido_en?: Prisma.SortOrder;
};
export type MIEMBROS_CHATMinOrderByAggregateInput = {
    chat_id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    fijado?: Prisma.SortOrder;
    archivado?: Prisma.SortOrder;
    eliminado?: Prisma.SortOrder;
    unido_en?: Prisma.SortOrder;
};
export type MIEMBROS_CHATCreateNestedManyWithoutCHATSInput = {
    create?: Prisma.XOR<Prisma.MIEMBROS_CHATCreateWithoutCHATSInput, Prisma.MIEMBROS_CHATUncheckedCreateWithoutCHATSInput> | Prisma.MIEMBROS_CHATCreateWithoutCHATSInput[] | Prisma.MIEMBROS_CHATUncheckedCreateWithoutCHATSInput[];
    connectOrCreate?: Prisma.MIEMBROS_CHATCreateOrConnectWithoutCHATSInput | Prisma.MIEMBROS_CHATCreateOrConnectWithoutCHATSInput[];
    createMany?: Prisma.MIEMBROS_CHATCreateManyCHATSInputEnvelope;
    connect?: Prisma.MIEMBROS_CHATWhereUniqueInput | Prisma.MIEMBROS_CHATWhereUniqueInput[];
};
export type MIEMBROS_CHATUncheckedCreateNestedManyWithoutCHATSInput = {
    create?: Prisma.XOR<Prisma.MIEMBROS_CHATCreateWithoutCHATSInput, Prisma.MIEMBROS_CHATUncheckedCreateWithoutCHATSInput> | Prisma.MIEMBROS_CHATCreateWithoutCHATSInput[] | Prisma.MIEMBROS_CHATUncheckedCreateWithoutCHATSInput[];
    connectOrCreate?: Prisma.MIEMBROS_CHATCreateOrConnectWithoutCHATSInput | Prisma.MIEMBROS_CHATCreateOrConnectWithoutCHATSInput[];
    createMany?: Prisma.MIEMBROS_CHATCreateManyCHATSInputEnvelope;
    connect?: Prisma.MIEMBROS_CHATWhereUniqueInput | Prisma.MIEMBROS_CHATWhereUniqueInput[];
};
export type MIEMBROS_CHATUpdateManyWithoutCHATSNestedInput = {
    create?: Prisma.XOR<Prisma.MIEMBROS_CHATCreateWithoutCHATSInput, Prisma.MIEMBROS_CHATUncheckedCreateWithoutCHATSInput> | Prisma.MIEMBROS_CHATCreateWithoutCHATSInput[] | Prisma.MIEMBROS_CHATUncheckedCreateWithoutCHATSInput[];
    connectOrCreate?: Prisma.MIEMBROS_CHATCreateOrConnectWithoutCHATSInput | Prisma.MIEMBROS_CHATCreateOrConnectWithoutCHATSInput[];
    upsert?: Prisma.MIEMBROS_CHATUpsertWithWhereUniqueWithoutCHATSInput | Prisma.MIEMBROS_CHATUpsertWithWhereUniqueWithoutCHATSInput[];
    createMany?: Prisma.MIEMBROS_CHATCreateManyCHATSInputEnvelope;
    set?: Prisma.MIEMBROS_CHATWhereUniqueInput | Prisma.MIEMBROS_CHATWhereUniqueInput[];
    disconnect?: Prisma.MIEMBROS_CHATWhereUniqueInput | Prisma.MIEMBROS_CHATWhereUniqueInput[];
    delete?: Prisma.MIEMBROS_CHATWhereUniqueInput | Prisma.MIEMBROS_CHATWhereUniqueInput[];
    connect?: Prisma.MIEMBROS_CHATWhereUniqueInput | Prisma.MIEMBROS_CHATWhereUniqueInput[];
    update?: Prisma.MIEMBROS_CHATUpdateWithWhereUniqueWithoutCHATSInput | Prisma.MIEMBROS_CHATUpdateWithWhereUniqueWithoutCHATSInput[];
    updateMany?: Prisma.MIEMBROS_CHATUpdateManyWithWhereWithoutCHATSInput | Prisma.MIEMBROS_CHATUpdateManyWithWhereWithoutCHATSInput[];
    deleteMany?: Prisma.MIEMBROS_CHATScalarWhereInput | Prisma.MIEMBROS_CHATScalarWhereInput[];
};
export type MIEMBROS_CHATUncheckedUpdateManyWithoutCHATSNestedInput = {
    create?: Prisma.XOR<Prisma.MIEMBROS_CHATCreateWithoutCHATSInput, Prisma.MIEMBROS_CHATUncheckedCreateWithoutCHATSInput> | Prisma.MIEMBROS_CHATCreateWithoutCHATSInput[] | Prisma.MIEMBROS_CHATUncheckedCreateWithoutCHATSInput[];
    connectOrCreate?: Prisma.MIEMBROS_CHATCreateOrConnectWithoutCHATSInput | Prisma.MIEMBROS_CHATCreateOrConnectWithoutCHATSInput[];
    upsert?: Prisma.MIEMBROS_CHATUpsertWithWhereUniqueWithoutCHATSInput | Prisma.MIEMBROS_CHATUpsertWithWhereUniqueWithoutCHATSInput[];
    createMany?: Prisma.MIEMBROS_CHATCreateManyCHATSInputEnvelope;
    set?: Prisma.MIEMBROS_CHATWhereUniqueInput | Prisma.MIEMBROS_CHATWhereUniqueInput[];
    disconnect?: Prisma.MIEMBROS_CHATWhereUniqueInput | Prisma.MIEMBROS_CHATWhereUniqueInput[];
    delete?: Prisma.MIEMBROS_CHATWhereUniqueInput | Prisma.MIEMBROS_CHATWhereUniqueInput[];
    connect?: Prisma.MIEMBROS_CHATWhereUniqueInput | Prisma.MIEMBROS_CHATWhereUniqueInput[];
    update?: Prisma.MIEMBROS_CHATUpdateWithWhereUniqueWithoutCHATSInput | Prisma.MIEMBROS_CHATUpdateWithWhereUniqueWithoutCHATSInput[];
    updateMany?: Prisma.MIEMBROS_CHATUpdateManyWithWhereWithoutCHATSInput | Prisma.MIEMBROS_CHATUpdateManyWithWhereWithoutCHATSInput[];
    deleteMany?: Prisma.MIEMBROS_CHATScalarWhereInput | Prisma.MIEMBROS_CHATScalarWhereInput[];
};
export type MIEMBROS_CHATCreateNestedManyWithoutUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.MIEMBROS_CHATCreateWithoutUSUARIOSInput, Prisma.MIEMBROS_CHATUncheckedCreateWithoutUSUARIOSInput> | Prisma.MIEMBROS_CHATCreateWithoutUSUARIOSInput[] | Prisma.MIEMBROS_CHATUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.MIEMBROS_CHATCreateOrConnectWithoutUSUARIOSInput | Prisma.MIEMBROS_CHATCreateOrConnectWithoutUSUARIOSInput[];
    createMany?: Prisma.MIEMBROS_CHATCreateManyUSUARIOSInputEnvelope;
    connect?: Prisma.MIEMBROS_CHATWhereUniqueInput | Prisma.MIEMBROS_CHATWhereUniqueInput[];
};
export type MIEMBROS_CHATUncheckedCreateNestedManyWithoutUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.MIEMBROS_CHATCreateWithoutUSUARIOSInput, Prisma.MIEMBROS_CHATUncheckedCreateWithoutUSUARIOSInput> | Prisma.MIEMBROS_CHATCreateWithoutUSUARIOSInput[] | Prisma.MIEMBROS_CHATUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.MIEMBROS_CHATCreateOrConnectWithoutUSUARIOSInput | Prisma.MIEMBROS_CHATCreateOrConnectWithoutUSUARIOSInput[];
    createMany?: Prisma.MIEMBROS_CHATCreateManyUSUARIOSInputEnvelope;
    connect?: Prisma.MIEMBROS_CHATWhereUniqueInput | Prisma.MIEMBROS_CHATWhereUniqueInput[];
};
export type MIEMBROS_CHATUpdateManyWithoutUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.MIEMBROS_CHATCreateWithoutUSUARIOSInput, Prisma.MIEMBROS_CHATUncheckedCreateWithoutUSUARIOSInput> | Prisma.MIEMBROS_CHATCreateWithoutUSUARIOSInput[] | Prisma.MIEMBROS_CHATUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.MIEMBROS_CHATCreateOrConnectWithoutUSUARIOSInput | Prisma.MIEMBROS_CHATCreateOrConnectWithoutUSUARIOSInput[];
    upsert?: Prisma.MIEMBROS_CHATUpsertWithWhereUniqueWithoutUSUARIOSInput | Prisma.MIEMBROS_CHATUpsertWithWhereUniqueWithoutUSUARIOSInput[];
    createMany?: Prisma.MIEMBROS_CHATCreateManyUSUARIOSInputEnvelope;
    set?: Prisma.MIEMBROS_CHATWhereUniqueInput | Prisma.MIEMBROS_CHATWhereUniqueInput[];
    disconnect?: Prisma.MIEMBROS_CHATWhereUniqueInput | Prisma.MIEMBROS_CHATWhereUniqueInput[];
    delete?: Prisma.MIEMBROS_CHATWhereUniqueInput | Prisma.MIEMBROS_CHATWhereUniqueInput[];
    connect?: Prisma.MIEMBROS_CHATWhereUniqueInput | Prisma.MIEMBROS_CHATWhereUniqueInput[];
    update?: Prisma.MIEMBROS_CHATUpdateWithWhereUniqueWithoutUSUARIOSInput | Prisma.MIEMBROS_CHATUpdateWithWhereUniqueWithoutUSUARIOSInput[];
    updateMany?: Prisma.MIEMBROS_CHATUpdateManyWithWhereWithoutUSUARIOSInput | Prisma.MIEMBROS_CHATUpdateManyWithWhereWithoutUSUARIOSInput[];
    deleteMany?: Prisma.MIEMBROS_CHATScalarWhereInput | Prisma.MIEMBROS_CHATScalarWhereInput[];
};
export type MIEMBROS_CHATUncheckedUpdateManyWithoutUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.MIEMBROS_CHATCreateWithoutUSUARIOSInput, Prisma.MIEMBROS_CHATUncheckedCreateWithoutUSUARIOSInput> | Prisma.MIEMBROS_CHATCreateWithoutUSUARIOSInput[] | Prisma.MIEMBROS_CHATUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.MIEMBROS_CHATCreateOrConnectWithoutUSUARIOSInput | Prisma.MIEMBROS_CHATCreateOrConnectWithoutUSUARIOSInput[];
    upsert?: Prisma.MIEMBROS_CHATUpsertWithWhereUniqueWithoutUSUARIOSInput | Prisma.MIEMBROS_CHATUpsertWithWhereUniqueWithoutUSUARIOSInput[];
    createMany?: Prisma.MIEMBROS_CHATCreateManyUSUARIOSInputEnvelope;
    set?: Prisma.MIEMBROS_CHATWhereUniqueInput | Prisma.MIEMBROS_CHATWhereUniqueInput[];
    disconnect?: Prisma.MIEMBROS_CHATWhereUniqueInput | Prisma.MIEMBROS_CHATWhereUniqueInput[];
    delete?: Prisma.MIEMBROS_CHATWhereUniqueInput | Prisma.MIEMBROS_CHATWhereUniqueInput[];
    connect?: Prisma.MIEMBROS_CHATWhereUniqueInput | Prisma.MIEMBROS_CHATWhereUniqueInput[];
    update?: Prisma.MIEMBROS_CHATUpdateWithWhereUniqueWithoutUSUARIOSInput | Prisma.MIEMBROS_CHATUpdateWithWhereUniqueWithoutUSUARIOSInput[];
    updateMany?: Prisma.MIEMBROS_CHATUpdateManyWithWhereWithoutUSUARIOSInput | Prisma.MIEMBROS_CHATUpdateManyWithWhereWithoutUSUARIOSInput[];
    deleteMany?: Prisma.MIEMBROS_CHATScalarWhereInput | Prisma.MIEMBROS_CHATScalarWhereInput[];
};
export type MIEMBROS_CHATCreateWithoutCHATSInput = {
    rol: string;
    fijado?: boolean;
    archivado?: boolean;
    eliminado?: boolean;
    unido_en?: Date | string;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutMIEMBROS_CHATInput;
};
export type MIEMBROS_CHATUncheckedCreateWithoutCHATSInput = {
    usuario_id: string;
    rol: string;
    fijado?: boolean;
    archivado?: boolean;
    eliminado?: boolean;
    unido_en?: Date | string;
};
export type MIEMBROS_CHATCreateOrConnectWithoutCHATSInput = {
    where: Prisma.MIEMBROS_CHATWhereUniqueInput;
    create: Prisma.XOR<Prisma.MIEMBROS_CHATCreateWithoutCHATSInput, Prisma.MIEMBROS_CHATUncheckedCreateWithoutCHATSInput>;
};
export type MIEMBROS_CHATCreateManyCHATSInputEnvelope = {
    data: Prisma.MIEMBROS_CHATCreateManyCHATSInput | Prisma.MIEMBROS_CHATCreateManyCHATSInput[];
    skipDuplicates?: boolean;
};
export type MIEMBROS_CHATUpsertWithWhereUniqueWithoutCHATSInput = {
    where: Prisma.MIEMBROS_CHATWhereUniqueInput;
    update: Prisma.XOR<Prisma.MIEMBROS_CHATUpdateWithoutCHATSInput, Prisma.MIEMBROS_CHATUncheckedUpdateWithoutCHATSInput>;
    create: Prisma.XOR<Prisma.MIEMBROS_CHATCreateWithoutCHATSInput, Prisma.MIEMBROS_CHATUncheckedCreateWithoutCHATSInput>;
};
export type MIEMBROS_CHATUpdateWithWhereUniqueWithoutCHATSInput = {
    where: Prisma.MIEMBROS_CHATWhereUniqueInput;
    data: Prisma.XOR<Prisma.MIEMBROS_CHATUpdateWithoutCHATSInput, Prisma.MIEMBROS_CHATUncheckedUpdateWithoutCHATSInput>;
};
export type MIEMBROS_CHATUpdateManyWithWhereWithoutCHATSInput = {
    where: Prisma.MIEMBROS_CHATScalarWhereInput;
    data: Prisma.XOR<Prisma.MIEMBROS_CHATUpdateManyMutationInput, Prisma.MIEMBROS_CHATUncheckedUpdateManyWithoutCHATSInput>;
};
export type MIEMBROS_CHATScalarWhereInput = {
    AND?: Prisma.MIEMBROS_CHATScalarWhereInput | Prisma.MIEMBROS_CHATScalarWhereInput[];
    OR?: Prisma.MIEMBROS_CHATScalarWhereInput[];
    NOT?: Prisma.MIEMBROS_CHATScalarWhereInput | Prisma.MIEMBROS_CHATScalarWhereInput[];
    chat_id?: Prisma.UuidFilter<"MIEMBROS_CHAT"> | string;
    usuario_id?: Prisma.UuidFilter<"MIEMBROS_CHAT"> | string;
    rol?: Prisma.StringFilter<"MIEMBROS_CHAT"> | string;
    fijado?: Prisma.BoolFilter<"MIEMBROS_CHAT"> | boolean;
    archivado?: Prisma.BoolFilter<"MIEMBROS_CHAT"> | boolean;
    eliminado?: Prisma.BoolFilter<"MIEMBROS_CHAT"> | boolean;
    unido_en?: Prisma.DateTimeFilter<"MIEMBROS_CHAT"> | Date | string;
};
export type MIEMBROS_CHATCreateWithoutUSUARIOSInput = {
    rol: string;
    fijado?: boolean;
    archivado?: boolean;
    eliminado?: boolean;
    unido_en?: Date | string;
    CHATS: Prisma.CHATSCreateNestedOneWithoutMIEMBROS_CHATInput;
};
export type MIEMBROS_CHATUncheckedCreateWithoutUSUARIOSInput = {
    chat_id: string;
    rol: string;
    fijado?: boolean;
    archivado?: boolean;
    eliminado?: boolean;
    unido_en?: Date | string;
};
export type MIEMBROS_CHATCreateOrConnectWithoutUSUARIOSInput = {
    where: Prisma.MIEMBROS_CHATWhereUniqueInput;
    create: Prisma.XOR<Prisma.MIEMBROS_CHATCreateWithoutUSUARIOSInput, Prisma.MIEMBROS_CHATUncheckedCreateWithoutUSUARIOSInput>;
};
export type MIEMBROS_CHATCreateManyUSUARIOSInputEnvelope = {
    data: Prisma.MIEMBROS_CHATCreateManyUSUARIOSInput | Prisma.MIEMBROS_CHATCreateManyUSUARIOSInput[];
    skipDuplicates?: boolean;
};
export type MIEMBROS_CHATUpsertWithWhereUniqueWithoutUSUARIOSInput = {
    where: Prisma.MIEMBROS_CHATWhereUniqueInput;
    update: Prisma.XOR<Prisma.MIEMBROS_CHATUpdateWithoutUSUARIOSInput, Prisma.MIEMBROS_CHATUncheckedUpdateWithoutUSUARIOSInput>;
    create: Prisma.XOR<Prisma.MIEMBROS_CHATCreateWithoutUSUARIOSInput, Prisma.MIEMBROS_CHATUncheckedCreateWithoutUSUARIOSInput>;
};
export type MIEMBROS_CHATUpdateWithWhereUniqueWithoutUSUARIOSInput = {
    where: Prisma.MIEMBROS_CHATWhereUniqueInput;
    data: Prisma.XOR<Prisma.MIEMBROS_CHATUpdateWithoutUSUARIOSInput, Prisma.MIEMBROS_CHATUncheckedUpdateWithoutUSUARIOSInput>;
};
export type MIEMBROS_CHATUpdateManyWithWhereWithoutUSUARIOSInput = {
    where: Prisma.MIEMBROS_CHATScalarWhereInput;
    data: Prisma.XOR<Prisma.MIEMBROS_CHATUpdateManyMutationInput, Prisma.MIEMBROS_CHATUncheckedUpdateManyWithoutUSUARIOSInput>;
};
export type MIEMBROS_CHATCreateManyCHATSInput = {
    usuario_id: string;
    rol: string;
    fijado?: boolean;
    archivado?: boolean;
    eliminado?: boolean;
    unido_en?: Date | string;
};
export type MIEMBROS_CHATUpdateWithoutCHATSInput = {
    rol?: Prisma.StringFieldUpdateOperationsInput | string;
    fijado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    archivado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eliminado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unido_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutMIEMBROS_CHATNestedInput;
};
export type MIEMBROS_CHATUncheckedUpdateWithoutCHATSInput = {
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.StringFieldUpdateOperationsInput | string;
    fijado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    archivado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eliminado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unido_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MIEMBROS_CHATUncheckedUpdateManyWithoutCHATSInput = {
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.StringFieldUpdateOperationsInput | string;
    fijado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    archivado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eliminado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unido_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MIEMBROS_CHATCreateManyUSUARIOSInput = {
    chat_id: string;
    rol: string;
    fijado?: boolean;
    archivado?: boolean;
    eliminado?: boolean;
    unido_en?: Date | string;
};
export type MIEMBROS_CHATUpdateWithoutUSUARIOSInput = {
    rol?: Prisma.StringFieldUpdateOperationsInput | string;
    fijado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    archivado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eliminado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unido_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    CHATS?: Prisma.CHATSUpdateOneRequiredWithoutMIEMBROS_CHATNestedInput;
};
export type MIEMBROS_CHATUncheckedUpdateWithoutUSUARIOSInput = {
    chat_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.StringFieldUpdateOperationsInput | string;
    fijado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    archivado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eliminado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unido_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MIEMBROS_CHATUncheckedUpdateManyWithoutUSUARIOSInput = {
    chat_id?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.StringFieldUpdateOperationsInput | string;
    fijado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    archivado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    eliminado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unido_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MIEMBROS_CHATSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    chat_id?: boolean;
    usuario_id?: boolean;
    rol?: boolean;
    fijado?: boolean;
    archivado?: boolean;
    eliminado?: boolean;
    unido_en?: boolean;
    CHATS?: boolean | Prisma.CHATSDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mIEMBROS_CHAT"]>;
export type MIEMBROS_CHATSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    chat_id?: boolean;
    usuario_id?: boolean;
    rol?: boolean;
    fijado?: boolean;
    archivado?: boolean;
    eliminado?: boolean;
    unido_en?: boolean;
    CHATS?: boolean | Prisma.CHATSDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mIEMBROS_CHAT"]>;
export type MIEMBROS_CHATSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    chat_id?: boolean;
    usuario_id?: boolean;
    rol?: boolean;
    fijado?: boolean;
    archivado?: boolean;
    eliminado?: boolean;
    unido_en?: boolean;
    CHATS?: boolean | Prisma.CHATSDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mIEMBROS_CHAT"]>;
export type MIEMBROS_CHATSelectScalar = {
    chat_id?: boolean;
    usuario_id?: boolean;
    rol?: boolean;
    fijado?: boolean;
    archivado?: boolean;
    eliminado?: boolean;
    unido_en?: boolean;
};
export type MIEMBROS_CHATOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"chat_id" | "usuario_id" | "rol" | "fijado" | "archivado" | "eliminado" | "unido_en", ExtArgs["result"]["mIEMBROS_CHAT"]>;
export type MIEMBROS_CHATInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CHATS?: boolean | Prisma.CHATSDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type MIEMBROS_CHATIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CHATS?: boolean | Prisma.CHATSDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type MIEMBROS_CHATIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CHATS?: boolean | Prisma.CHATSDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type $MIEMBROS_CHATPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MIEMBROS_CHAT";
    objects: {
        CHATS: Prisma.$CHATSPayload<ExtArgs>;
        USUARIOS: Prisma.$USUARIOSPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        chat_id: string;
        usuario_id: string;
        rol: string;
        fijado: boolean;
        archivado: boolean;
        eliminado: boolean;
        unido_en: Date;
    }, ExtArgs["result"]["mIEMBROS_CHAT"]>;
    composites: {};
};
export type MIEMBROS_CHATGetPayload<S extends boolean | null | undefined | MIEMBROS_CHATDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MIEMBROS_CHATPayload, S>;
export type MIEMBROS_CHATCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MIEMBROS_CHATFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MIEMBROS_CHATCountAggregateInputType | true;
};
export interface MIEMBROS_CHATDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MIEMBROS_CHAT'];
        meta: {
            name: 'MIEMBROS_CHAT';
        };
    };
    findUnique<T extends MIEMBROS_CHATFindUniqueArgs>(args: Prisma.SelectSubset<T, MIEMBROS_CHATFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MIEMBROS_CHATClient<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_CHATPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MIEMBROS_CHATFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MIEMBROS_CHATFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MIEMBROS_CHATClient<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_CHATPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MIEMBROS_CHATFindFirstArgs>(args?: Prisma.SelectSubset<T, MIEMBROS_CHATFindFirstArgs<ExtArgs>>): Prisma.Prisma__MIEMBROS_CHATClient<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_CHATPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MIEMBROS_CHATFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MIEMBROS_CHATFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MIEMBROS_CHATClient<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_CHATPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MIEMBROS_CHATFindManyArgs>(args?: Prisma.SelectSubset<T, MIEMBROS_CHATFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_CHATPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MIEMBROS_CHATCreateArgs>(args: Prisma.SelectSubset<T, MIEMBROS_CHATCreateArgs<ExtArgs>>): Prisma.Prisma__MIEMBROS_CHATClient<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_CHATPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MIEMBROS_CHATCreateManyArgs>(args?: Prisma.SelectSubset<T, MIEMBROS_CHATCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MIEMBROS_CHATCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MIEMBROS_CHATCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_CHATPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MIEMBROS_CHATDeleteArgs>(args: Prisma.SelectSubset<T, MIEMBROS_CHATDeleteArgs<ExtArgs>>): Prisma.Prisma__MIEMBROS_CHATClient<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_CHATPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MIEMBROS_CHATUpdateArgs>(args: Prisma.SelectSubset<T, MIEMBROS_CHATUpdateArgs<ExtArgs>>): Prisma.Prisma__MIEMBROS_CHATClient<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_CHATPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MIEMBROS_CHATDeleteManyArgs>(args?: Prisma.SelectSubset<T, MIEMBROS_CHATDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MIEMBROS_CHATUpdateManyArgs>(args: Prisma.SelectSubset<T, MIEMBROS_CHATUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MIEMBROS_CHATUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MIEMBROS_CHATUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_CHATPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MIEMBROS_CHATUpsertArgs>(args: Prisma.SelectSubset<T, MIEMBROS_CHATUpsertArgs<ExtArgs>>): Prisma.Prisma__MIEMBROS_CHATClient<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_CHATPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MIEMBROS_CHATCountArgs>(args?: Prisma.Subset<T, MIEMBROS_CHATCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MIEMBROS_CHATCountAggregateOutputType> : number>;
    aggregate<T extends MIEMBROS_CHATAggregateArgs>(args: Prisma.Subset<T, MIEMBROS_CHATAggregateArgs>): Prisma.PrismaPromise<GetMIEMBROS_CHATAggregateType<T>>;
    groupBy<T extends MIEMBROS_CHATGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MIEMBROS_CHATGroupByArgs['orderBy'];
    } : {
        orderBy?: MIEMBROS_CHATGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MIEMBROS_CHATGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMIEMBROS_CHATGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MIEMBROS_CHATFieldRefs;
}
export interface Prisma__MIEMBROS_CHATClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    CHATS<T extends Prisma.CHATSDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CHATSDefaultArgs<ExtArgs>>): Prisma.Prisma__CHATSClient<runtime.Types.Result.GetResult<Prisma.$CHATSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    USUARIOS<T extends Prisma.USUARIOSDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.USUARIOSDefaultArgs<ExtArgs>>): Prisma.Prisma__USUARIOSClient<runtime.Types.Result.GetResult<Prisma.$USUARIOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MIEMBROS_CHATFieldRefs {
    readonly chat_id: Prisma.FieldRef<"MIEMBROS_CHAT", 'String'>;
    readonly usuario_id: Prisma.FieldRef<"MIEMBROS_CHAT", 'String'>;
    readonly rol: Prisma.FieldRef<"MIEMBROS_CHAT", 'String'>;
    readonly fijado: Prisma.FieldRef<"MIEMBROS_CHAT", 'Boolean'>;
    readonly archivado: Prisma.FieldRef<"MIEMBROS_CHAT", 'Boolean'>;
    readonly eliminado: Prisma.FieldRef<"MIEMBROS_CHAT", 'Boolean'>;
    readonly unido_en: Prisma.FieldRef<"MIEMBROS_CHAT", 'DateTime'>;
}
export type MIEMBROS_CHATFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MIEMBROS_CHATSelect<ExtArgs> | null;
    omit?: Prisma.MIEMBROS_CHATOmit<ExtArgs> | null;
    include?: Prisma.MIEMBROS_CHATInclude<ExtArgs> | null;
    where: Prisma.MIEMBROS_CHATWhereUniqueInput;
};
export type MIEMBROS_CHATFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MIEMBROS_CHATSelect<ExtArgs> | null;
    omit?: Prisma.MIEMBROS_CHATOmit<ExtArgs> | null;
    include?: Prisma.MIEMBROS_CHATInclude<ExtArgs> | null;
    where: Prisma.MIEMBROS_CHATWhereUniqueInput;
};
export type MIEMBROS_CHATFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MIEMBROS_CHATFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MIEMBROS_CHATFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MIEMBROS_CHATCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MIEMBROS_CHATSelect<ExtArgs> | null;
    omit?: Prisma.MIEMBROS_CHATOmit<ExtArgs> | null;
    include?: Prisma.MIEMBROS_CHATInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MIEMBROS_CHATCreateInput, Prisma.MIEMBROS_CHATUncheckedCreateInput>;
};
export type MIEMBROS_CHATCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MIEMBROS_CHATCreateManyInput | Prisma.MIEMBROS_CHATCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MIEMBROS_CHATCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MIEMBROS_CHATSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MIEMBROS_CHATOmit<ExtArgs> | null;
    data: Prisma.MIEMBROS_CHATCreateManyInput | Prisma.MIEMBROS_CHATCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MIEMBROS_CHATIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MIEMBROS_CHATUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MIEMBROS_CHATSelect<ExtArgs> | null;
    omit?: Prisma.MIEMBROS_CHATOmit<ExtArgs> | null;
    include?: Prisma.MIEMBROS_CHATInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MIEMBROS_CHATUpdateInput, Prisma.MIEMBROS_CHATUncheckedUpdateInput>;
    where: Prisma.MIEMBROS_CHATWhereUniqueInput;
};
export type MIEMBROS_CHATUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MIEMBROS_CHATUpdateManyMutationInput, Prisma.MIEMBROS_CHATUncheckedUpdateManyInput>;
    where?: Prisma.MIEMBROS_CHATWhereInput;
    limit?: number;
};
export type MIEMBROS_CHATUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MIEMBROS_CHATSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MIEMBROS_CHATOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MIEMBROS_CHATUpdateManyMutationInput, Prisma.MIEMBROS_CHATUncheckedUpdateManyInput>;
    where?: Prisma.MIEMBROS_CHATWhereInput;
    limit?: number;
    include?: Prisma.MIEMBROS_CHATIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MIEMBROS_CHATUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MIEMBROS_CHATSelect<ExtArgs> | null;
    omit?: Prisma.MIEMBROS_CHATOmit<ExtArgs> | null;
    include?: Prisma.MIEMBROS_CHATInclude<ExtArgs> | null;
    where: Prisma.MIEMBROS_CHATWhereUniqueInput;
    create: Prisma.XOR<Prisma.MIEMBROS_CHATCreateInput, Prisma.MIEMBROS_CHATUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MIEMBROS_CHATUpdateInput, Prisma.MIEMBROS_CHATUncheckedUpdateInput>;
};
export type MIEMBROS_CHATDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MIEMBROS_CHATSelect<ExtArgs> | null;
    omit?: Prisma.MIEMBROS_CHATOmit<ExtArgs> | null;
    include?: Prisma.MIEMBROS_CHATInclude<ExtArgs> | null;
    where: Prisma.MIEMBROS_CHATWhereUniqueInput;
};
export type MIEMBROS_CHATDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MIEMBROS_CHATWhereInput;
    limit?: number;
};
export type MIEMBROS_CHATDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MIEMBROS_CHATSelect<ExtArgs> | null;
    omit?: Prisma.MIEMBROS_CHATOmit<ExtArgs> | null;
    include?: Prisma.MIEMBROS_CHATInclude<ExtArgs> | null;
};
