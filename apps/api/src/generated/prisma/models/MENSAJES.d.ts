import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MENSAJESModel = runtime.Types.Result.DefaultSelection<Prisma.$MENSAJESPayload>;
export type AggregateMENSAJES = {
    _count: MENSAJESCountAggregateOutputType | null;
    _min: MENSAJESMinAggregateOutputType | null;
    _max: MENSAJESMaxAggregateOutputType | null;
};
export type MENSAJESMinAggregateOutputType = {
    id: string | null;
    chat_id: string | null;
    remitente_id: string | null;
    contenido: string | null;
    enviado_en: Date | null;
};
export type MENSAJESMaxAggregateOutputType = {
    id: string | null;
    chat_id: string | null;
    remitente_id: string | null;
    contenido: string | null;
    enviado_en: Date | null;
};
export type MENSAJESCountAggregateOutputType = {
    id: number;
    chat_id: number;
    remitente_id: number;
    contenido: number;
    enviado_en: number;
    _all: number;
};
export type MENSAJESMinAggregateInputType = {
    id?: true;
    chat_id?: true;
    remitente_id?: true;
    contenido?: true;
    enviado_en?: true;
};
export type MENSAJESMaxAggregateInputType = {
    id?: true;
    chat_id?: true;
    remitente_id?: true;
    contenido?: true;
    enviado_en?: true;
};
export type MENSAJESCountAggregateInputType = {
    id?: true;
    chat_id?: true;
    remitente_id?: true;
    contenido?: true;
    enviado_en?: true;
    _all?: true;
};
export type MENSAJESAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MENSAJESWhereInput;
    orderBy?: Prisma.MENSAJESOrderByWithRelationInput | Prisma.MENSAJESOrderByWithRelationInput[];
    cursor?: Prisma.MENSAJESWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MENSAJESCountAggregateInputType;
    _min?: MENSAJESMinAggregateInputType;
    _max?: MENSAJESMaxAggregateInputType;
};
export type GetMENSAJESAggregateType<T extends MENSAJESAggregateArgs> = {
    [P in keyof T & keyof AggregateMENSAJES]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMENSAJES[P]> : Prisma.GetScalarType<T[P], AggregateMENSAJES[P]>;
};
export type MENSAJESGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MENSAJESWhereInput;
    orderBy?: Prisma.MENSAJESOrderByWithAggregationInput | Prisma.MENSAJESOrderByWithAggregationInput[];
    by: Prisma.MENSAJESScalarFieldEnum[] | Prisma.MENSAJESScalarFieldEnum;
    having?: Prisma.MENSAJESScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MENSAJESCountAggregateInputType | true;
    _min?: MENSAJESMinAggregateInputType;
    _max?: MENSAJESMaxAggregateInputType;
};
export type MENSAJESGroupByOutputType = {
    id: string;
    chat_id: string;
    remitente_id: string;
    contenido: string | null;
    enviado_en: Date;
    _count: MENSAJESCountAggregateOutputType | null;
    _min: MENSAJESMinAggregateOutputType | null;
    _max: MENSAJESMaxAggregateOutputType | null;
};
export type GetMENSAJESGroupByPayload<T extends MENSAJESGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MENSAJESGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MENSAJESGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MENSAJESGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MENSAJESGroupByOutputType[P]>;
}>>;
export type MENSAJESWhereInput = {
    AND?: Prisma.MENSAJESWhereInput | Prisma.MENSAJESWhereInput[];
    OR?: Prisma.MENSAJESWhereInput[];
    NOT?: Prisma.MENSAJESWhereInput | Prisma.MENSAJESWhereInput[];
    id?: Prisma.UuidFilter<"MENSAJES"> | string;
    chat_id?: Prisma.UuidFilter<"MENSAJES"> | string;
    remitente_id?: Prisma.UuidFilter<"MENSAJES"> | string;
    contenido?: Prisma.StringNullableFilter<"MENSAJES"> | string | null;
    enviado_en?: Prisma.DateTimeFilter<"MENSAJES"> | Date | string;
    CHATS?: Prisma.XOR<Prisma.CHATSScalarRelationFilter, Prisma.CHATSWhereInput>;
    USUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
    MULTIMEDIA?: Prisma.MULTIMEDIAListRelationFilter;
};
export type MENSAJESOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    chat_id?: Prisma.SortOrder;
    remitente_id?: Prisma.SortOrder;
    contenido?: Prisma.SortOrderInput | Prisma.SortOrder;
    enviado_en?: Prisma.SortOrder;
    CHATS?: Prisma.CHATSOrderByWithRelationInput;
    USUARIOS?: Prisma.USUARIOSOrderByWithRelationInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAOrderByRelationAggregateInput;
};
export type MENSAJESWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MENSAJESWhereInput | Prisma.MENSAJESWhereInput[];
    OR?: Prisma.MENSAJESWhereInput[];
    NOT?: Prisma.MENSAJESWhereInput | Prisma.MENSAJESWhereInput[];
    chat_id?: Prisma.UuidFilter<"MENSAJES"> | string;
    remitente_id?: Prisma.UuidFilter<"MENSAJES"> | string;
    contenido?: Prisma.StringNullableFilter<"MENSAJES"> | string | null;
    enviado_en?: Prisma.DateTimeFilter<"MENSAJES"> | Date | string;
    CHATS?: Prisma.XOR<Prisma.CHATSScalarRelationFilter, Prisma.CHATSWhereInput>;
    USUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
    MULTIMEDIA?: Prisma.MULTIMEDIAListRelationFilter;
}, "id">;
export type MENSAJESOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    chat_id?: Prisma.SortOrder;
    remitente_id?: Prisma.SortOrder;
    contenido?: Prisma.SortOrderInput | Prisma.SortOrder;
    enviado_en?: Prisma.SortOrder;
    _count?: Prisma.MENSAJESCountOrderByAggregateInput;
    _max?: Prisma.MENSAJESMaxOrderByAggregateInput;
    _min?: Prisma.MENSAJESMinOrderByAggregateInput;
};
export type MENSAJESScalarWhereWithAggregatesInput = {
    AND?: Prisma.MENSAJESScalarWhereWithAggregatesInput | Prisma.MENSAJESScalarWhereWithAggregatesInput[];
    OR?: Prisma.MENSAJESScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MENSAJESScalarWhereWithAggregatesInput | Prisma.MENSAJESScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"MENSAJES"> | string;
    chat_id?: Prisma.UuidWithAggregatesFilter<"MENSAJES"> | string;
    remitente_id?: Prisma.UuidWithAggregatesFilter<"MENSAJES"> | string;
    contenido?: Prisma.StringNullableWithAggregatesFilter<"MENSAJES"> | string | null;
    enviado_en?: Prisma.DateTimeWithAggregatesFilter<"MENSAJES"> | Date | string;
};
export type MENSAJESCreateInput = {
    id?: string;
    contenido?: string | null;
    enviado_en?: Date | string;
    CHATS: Prisma.CHATSCreateNestedOneWithoutMENSAJESInput;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutMENSAJESInput;
    MULTIMEDIA?: Prisma.MULTIMEDIACreateNestedManyWithoutMENSAJESInput;
};
export type MENSAJESUncheckedCreateInput = {
    id?: string;
    chat_id: string;
    remitente_id: string;
    contenido?: string | null;
    enviado_en?: Date | string;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedCreateNestedManyWithoutMENSAJESInput;
};
export type MENSAJESUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enviado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    CHATS?: Prisma.CHATSUpdateOneRequiredWithoutMENSAJESNestedInput;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutMENSAJESNestedInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUpdateManyWithoutMENSAJESNestedInput;
};
export type MENSAJESUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chat_id?: Prisma.StringFieldUpdateOperationsInput | string;
    remitente_id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enviado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedUpdateManyWithoutMENSAJESNestedInput;
};
export type MENSAJESCreateManyInput = {
    id?: string;
    chat_id: string;
    remitente_id: string;
    contenido?: string | null;
    enviado_en?: Date | string;
};
export type MENSAJESUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enviado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MENSAJESUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chat_id?: Prisma.StringFieldUpdateOperationsInput | string;
    remitente_id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enviado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MENSAJESListRelationFilter = {
    every?: Prisma.MENSAJESWhereInput;
    some?: Prisma.MENSAJESWhereInput;
    none?: Prisma.MENSAJESWhereInput;
};
export type MENSAJESOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MENSAJESCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chat_id?: Prisma.SortOrder;
    remitente_id?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    enviado_en?: Prisma.SortOrder;
};
export type MENSAJESMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chat_id?: Prisma.SortOrder;
    remitente_id?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    enviado_en?: Prisma.SortOrder;
};
export type MENSAJESMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chat_id?: Prisma.SortOrder;
    remitente_id?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    enviado_en?: Prisma.SortOrder;
};
export type MENSAJESNullableScalarRelationFilter = {
    is?: Prisma.MENSAJESWhereInput | null;
    isNot?: Prisma.MENSAJESWhereInput | null;
};
export type MENSAJESCreateNestedManyWithoutCHATSInput = {
    create?: Prisma.XOR<Prisma.MENSAJESCreateWithoutCHATSInput, Prisma.MENSAJESUncheckedCreateWithoutCHATSInput> | Prisma.MENSAJESCreateWithoutCHATSInput[] | Prisma.MENSAJESUncheckedCreateWithoutCHATSInput[];
    connectOrCreate?: Prisma.MENSAJESCreateOrConnectWithoutCHATSInput | Prisma.MENSAJESCreateOrConnectWithoutCHATSInput[];
    createMany?: Prisma.MENSAJESCreateManyCHATSInputEnvelope;
    connect?: Prisma.MENSAJESWhereUniqueInput | Prisma.MENSAJESWhereUniqueInput[];
};
export type MENSAJESUncheckedCreateNestedManyWithoutCHATSInput = {
    create?: Prisma.XOR<Prisma.MENSAJESCreateWithoutCHATSInput, Prisma.MENSAJESUncheckedCreateWithoutCHATSInput> | Prisma.MENSAJESCreateWithoutCHATSInput[] | Prisma.MENSAJESUncheckedCreateWithoutCHATSInput[];
    connectOrCreate?: Prisma.MENSAJESCreateOrConnectWithoutCHATSInput | Prisma.MENSAJESCreateOrConnectWithoutCHATSInput[];
    createMany?: Prisma.MENSAJESCreateManyCHATSInputEnvelope;
    connect?: Prisma.MENSAJESWhereUniqueInput | Prisma.MENSAJESWhereUniqueInput[];
};
export type MENSAJESUpdateManyWithoutCHATSNestedInput = {
    create?: Prisma.XOR<Prisma.MENSAJESCreateWithoutCHATSInput, Prisma.MENSAJESUncheckedCreateWithoutCHATSInput> | Prisma.MENSAJESCreateWithoutCHATSInput[] | Prisma.MENSAJESUncheckedCreateWithoutCHATSInput[];
    connectOrCreate?: Prisma.MENSAJESCreateOrConnectWithoutCHATSInput | Prisma.MENSAJESCreateOrConnectWithoutCHATSInput[];
    upsert?: Prisma.MENSAJESUpsertWithWhereUniqueWithoutCHATSInput | Prisma.MENSAJESUpsertWithWhereUniqueWithoutCHATSInput[];
    createMany?: Prisma.MENSAJESCreateManyCHATSInputEnvelope;
    set?: Prisma.MENSAJESWhereUniqueInput | Prisma.MENSAJESWhereUniqueInput[];
    disconnect?: Prisma.MENSAJESWhereUniqueInput | Prisma.MENSAJESWhereUniqueInput[];
    delete?: Prisma.MENSAJESWhereUniqueInput | Prisma.MENSAJESWhereUniqueInput[];
    connect?: Prisma.MENSAJESWhereUniqueInput | Prisma.MENSAJESWhereUniqueInput[];
    update?: Prisma.MENSAJESUpdateWithWhereUniqueWithoutCHATSInput | Prisma.MENSAJESUpdateWithWhereUniqueWithoutCHATSInput[];
    updateMany?: Prisma.MENSAJESUpdateManyWithWhereWithoutCHATSInput | Prisma.MENSAJESUpdateManyWithWhereWithoutCHATSInput[];
    deleteMany?: Prisma.MENSAJESScalarWhereInput | Prisma.MENSAJESScalarWhereInput[];
};
export type MENSAJESUncheckedUpdateManyWithoutCHATSNestedInput = {
    create?: Prisma.XOR<Prisma.MENSAJESCreateWithoutCHATSInput, Prisma.MENSAJESUncheckedCreateWithoutCHATSInput> | Prisma.MENSAJESCreateWithoutCHATSInput[] | Prisma.MENSAJESUncheckedCreateWithoutCHATSInput[];
    connectOrCreate?: Prisma.MENSAJESCreateOrConnectWithoutCHATSInput | Prisma.MENSAJESCreateOrConnectWithoutCHATSInput[];
    upsert?: Prisma.MENSAJESUpsertWithWhereUniqueWithoutCHATSInput | Prisma.MENSAJESUpsertWithWhereUniqueWithoutCHATSInput[];
    createMany?: Prisma.MENSAJESCreateManyCHATSInputEnvelope;
    set?: Prisma.MENSAJESWhereUniqueInput | Prisma.MENSAJESWhereUniqueInput[];
    disconnect?: Prisma.MENSAJESWhereUniqueInput | Prisma.MENSAJESWhereUniqueInput[];
    delete?: Prisma.MENSAJESWhereUniqueInput | Prisma.MENSAJESWhereUniqueInput[];
    connect?: Prisma.MENSAJESWhereUniqueInput | Prisma.MENSAJESWhereUniqueInput[];
    update?: Prisma.MENSAJESUpdateWithWhereUniqueWithoutCHATSInput | Prisma.MENSAJESUpdateWithWhereUniqueWithoutCHATSInput[];
    updateMany?: Prisma.MENSAJESUpdateManyWithWhereWithoutCHATSInput | Prisma.MENSAJESUpdateManyWithWhereWithoutCHATSInput[];
    deleteMany?: Prisma.MENSAJESScalarWhereInput | Prisma.MENSAJESScalarWhereInput[];
};
export type MENSAJESCreateNestedOneWithoutMULTIMEDIAInput = {
    create?: Prisma.XOR<Prisma.MENSAJESCreateWithoutMULTIMEDIAInput, Prisma.MENSAJESUncheckedCreateWithoutMULTIMEDIAInput>;
    connectOrCreate?: Prisma.MENSAJESCreateOrConnectWithoutMULTIMEDIAInput;
    connect?: Prisma.MENSAJESWhereUniqueInput;
};
export type MENSAJESUpdateOneWithoutMULTIMEDIANestedInput = {
    create?: Prisma.XOR<Prisma.MENSAJESCreateWithoutMULTIMEDIAInput, Prisma.MENSAJESUncheckedCreateWithoutMULTIMEDIAInput>;
    connectOrCreate?: Prisma.MENSAJESCreateOrConnectWithoutMULTIMEDIAInput;
    upsert?: Prisma.MENSAJESUpsertWithoutMULTIMEDIAInput;
    disconnect?: Prisma.MENSAJESWhereInput | boolean;
    delete?: Prisma.MENSAJESWhereInput | boolean;
    connect?: Prisma.MENSAJESWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MENSAJESUpdateToOneWithWhereWithoutMULTIMEDIAInput, Prisma.MENSAJESUpdateWithoutMULTIMEDIAInput>, Prisma.MENSAJESUncheckedUpdateWithoutMULTIMEDIAInput>;
};
export type MENSAJESCreateNestedManyWithoutUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.MENSAJESCreateWithoutUSUARIOSInput, Prisma.MENSAJESUncheckedCreateWithoutUSUARIOSInput> | Prisma.MENSAJESCreateWithoutUSUARIOSInput[] | Prisma.MENSAJESUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.MENSAJESCreateOrConnectWithoutUSUARIOSInput | Prisma.MENSAJESCreateOrConnectWithoutUSUARIOSInput[];
    createMany?: Prisma.MENSAJESCreateManyUSUARIOSInputEnvelope;
    connect?: Prisma.MENSAJESWhereUniqueInput | Prisma.MENSAJESWhereUniqueInput[];
};
export type MENSAJESUncheckedCreateNestedManyWithoutUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.MENSAJESCreateWithoutUSUARIOSInput, Prisma.MENSAJESUncheckedCreateWithoutUSUARIOSInput> | Prisma.MENSAJESCreateWithoutUSUARIOSInput[] | Prisma.MENSAJESUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.MENSAJESCreateOrConnectWithoutUSUARIOSInput | Prisma.MENSAJESCreateOrConnectWithoutUSUARIOSInput[];
    createMany?: Prisma.MENSAJESCreateManyUSUARIOSInputEnvelope;
    connect?: Prisma.MENSAJESWhereUniqueInput | Prisma.MENSAJESWhereUniqueInput[];
};
export type MENSAJESUpdateManyWithoutUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.MENSAJESCreateWithoutUSUARIOSInput, Prisma.MENSAJESUncheckedCreateWithoutUSUARIOSInput> | Prisma.MENSAJESCreateWithoutUSUARIOSInput[] | Prisma.MENSAJESUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.MENSAJESCreateOrConnectWithoutUSUARIOSInput | Prisma.MENSAJESCreateOrConnectWithoutUSUARIOSInput[];
    upsert?: Prisma.MENSAJESUpsertWithWhereUniqueWithoutUSUARIOSInput | Prisma.MENSAJESUpsertWithWhereUniqueWithoutUSUARIOSInput[];
    createMany?: Prisma.MENSAJESCreateManyUSUARIOSInputEnvelope;
    set?: Prisma.MENSAJESWhereUniqueInput | Prisma.MENSAJESWhereUniqueInput[];
    disconnect?: Prisma.MENSAJESWhereUniqueInput | Prisma.MENSAJESWhereUniqueInput[];
    delete?: Prisma.MENSAJESWhereUniqueInput | Prisma.MENSAJESWhereUniqueInput[];
    connect?: Prisma.MENSAJESWhereUniqueInput | Prisma.MENSAJESWhereUniqueInput[];
    update?: Prisma.MENSAJESUpdateWithWhereUniqueWithoutUSUARIOSInput | Prisma.MENSAJESUpdateWithWhereUniqueWithoutUSUARIOSInput[];
    updateMany?: Prisma.MENSAJESUpdateManyWithWhereWithoutUSUARIOSInput | Prisma.MENSAJESUpdateManyWithWhereWithoutUSUARIOSInput[];
    deleteMany?: Prisma.MENSAJESScalarWhereInput | Prisma.MENSAJESScalarWhereInput[];
};
export type MENSAJESUncheckedUpdateManyWithoutUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.MENSAJESCreateWithoutUSUARIOSInput, Prisma.MENSAJESUncheckedCreateWithoutUSUARIOSInput> | Prisma.MENSAJESCreateWithoutUSUARIOSInput[] | Prisma.MENSAJESUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.MENSAJESCreateOrConnectWithoutUSUARIOSInput | Prisma.MENSAJESCreateOrConnectWithoutUSUARIOSInput[];
    upsert?: Prisma.MENSAJESUpsertWithWhereUniqueWithoutUSUARIOSInput | Prisma.MENSAJESUpsertWithWhereUniqueWithoutUSUARIOSInput[];
    createMany?: Prisma.MENSAJESCreateManyUSUARIOSInputEnvelope;
    set?: Prisma.MENSAJESWhereUniqueInput | Prisma.MENSAJESWhereUniqueInput[];
    disconnect?: Prisma.MENSAJESWhereUniqueInput | Prisma.MENSAJESWhereUniqueInput[];
    delete?: Prisma.MENSAJESWhereUniqueInput | Prisma.MENSAJESWhereUniqueInput[];
    connect?: Prisma.MENSAJESWhereUniqueInput | Prisma.MENSAJESWhereUniqueInput[];
    update?: Prisma.MENSAJESUpdateWithWhereUniqueWithoutUSUARIOSInput | Prisma.MENSAJESUpdateWithWhereUniqueWithoutUSUARIOSInput[];
    updateMany?: Prisma.MENSAJESUpdateManyWithWhereWithoutUSUARIOSInput | Prisma.MENSAJESUpdateManyWithWhereWithoutUSUARIOSInput[];
    deleteMany?: Prisma.MENSAJESScalarWhereInput | Prisma.MENSAJESScalarWhereInput[];
};
export type MENSAJESCreateWithoutCHATSInput = {
    id?: string;
    contenido?: string | null;
    enviado_en?: Date | string;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutMENSAJESInput;
    MULTIMEDIA?: Prisma.MULTIMEDIACreateNestedManyWithoutMENSAJESInput;
};
export type MENSAJESUncheckedCreateWithoutCHATSInput = {
    id?: string;
    remitente_id: string;
    contenido?: string | null;
    enviado_en?: Date | string;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedCreateNestedManyWithoutMENSAJESInput;
};
export type MENSAJESCreateOrConnectWithoutCHATSInput = {
    where: Prisma.MENSAJESWhereUniqueInput;
    create: Prisma.XOR<Prisma.MENSAJESCreateWithoutCHATSInput, Prisma.MENSAJESUncheckedCreateWithoutCHATSInput>;
};
export type MENSAJESCreateManyCHATSInputEnvelope = {
    data: Prisma.MENSAJESCreateManyCHATSInput | Prisma.MENSAJESCreateManyCHATSInput[];
    skipDuplicates?: boolean;
};
export type MENSAJESUpsertWithWhereUniqueWithoutCHATSInput = {
    where: Prisma.MENSAJESWhereUniqueInput;
    update: Prisma.XOR<Prisma.MENSAJESUpdateWithoutCHATSInput, Prisma.MENSAJESUncheckedUpdateWithoutCHATSInput>;
    create: Prisma.XOR<Prisma.MENSAJESCreateWithoutCHATSInput, Prisma.MENSAJESUncheckedCreateWithoutCHATSInput>;
};
export type MENSAJESUpdateWithWhereUniqueWithoutCHATSInput = {
    where: Prisma.MENSAJESWhereUniqueInput;
    data: Prisma.XOR<Prisma.MENSAJESUpdateWithoutCHATSInput, Prisma.MENSAJESUncheckedUpdateWithoutCHATSInput>;
};
export type MENSAJESUpdateManyWithWhereWithoutCHATSInput = {
    where: Prisma.MENSAJESScalarWhereInput;
    data: Prisma.XOR<Prisma.MENSAJESUpdateManyMutationInput, Prisma.MENSAJESUncheckedUpdateManyWithoutCHATSInput>;
};
export type MENSAJESScalarWhereInput = {
    AND?: Prisma.MENSAJESScalarWhereInput | Prisma.MENSAJESScalarWhereInput[];
    OR?: Prisma.MENSAJESScalarWhereInput[];
    NOT?: Prisma.MENSAJESScalarWhereInput | Prisma.MENSAJESScalarWhereInput[];
    id?: Prisma.UuidFilter<"MENSAJES"> | string;
    chat_id?: Prisma.UuidFilter<"MENSAJES"> | string;
    remitente_id?: Prisma.UuidFilter<"MENSAJES"> | string;
    contenido?: Prisma.StringNullableFilter<"MENSAJES"> | string | null;
    enviado_en?: Prisma.DateTimeFilter<"MENSAJES"> | Date | string;
};
export type MENSAJESCreateWithoutMULTIMEDIAInput = {
    id?: string;
    contenido?: string | null;
    enviado_en?: Date | string;
    CHATS: Prisma.CHATSCreateNestedOneWithoutMENSAJESInput;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutMENSAJESInput;
};
export type MENSAJESUncheckedCreateWithoutMULTIMEDIAInput = {
    id?: string;
    chat_id: string;
    remitente_id: string;
    contenido?: string | null;
    enviado_en?: Date | string;
};
export type MENSAJESCreateOrConnectWithoutMULTIMEDIAInput = {
    where: Prisma.MENSAJESWhereUniqueInput;
    create: Prisma.XOR<Prisma.MENSAJESCreateWithoutMULTIMEDIAInput, Prisma.MENSAJESUncheckedCreateWithoutMULTIMEDIAInput>;
};
export type MENSAJESUpsertWithoutMULTIMEDIAInput = {
    update: Prisma.XOR<Prisma.MENSAJESUpdateWithoutMULTIMEDIAInput, Prisma.MENSAJESUncheckedUpdateWithoutMULTIMEDIAInput>;
    create: Prisma.XOR<Prisma.MENSAJESCreateWithoutMULTIMEDIAInput, Prisma.MENSAJESUncheckedCreateWithoutMULTIMEDIAInput>;
    where?: Prisma.MENSAJESWhereInput;
};
export type MENSAJESUpdateToOneWithWhereWithoutMULTIMEDIAInput = {
    where?: Prisma.MENSAJESWhereInput;
    data: Prisma.XOR<Prisma.MENSAJESUpdateWithoutMULTIMEDIAInput, Prisma.MENSAJESUncheckedUpdateWithoutMULTIMEDIAInput>;
};
export type MENSAJESUpdateWithoutMULTIMEDIAInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enviado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    CHATS?: Prisma.CHATSUpdateOneRequiredWithoutMENSAJESNestedInput;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutMENSAJESNestedInput;
};
export type MENSAJESUncheckedUpdateWithoutMULTIMEDIAInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chat_id?: Prisma.StringFieldUpdateOperationsInput | string;
    remitente_id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enviado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MENSAJESCreateWithoutUSUARIOSInput = {
    id?: string;
    contenido?: string | null;
    enviado_en?: Date | string;
    CHATS: Prisma.CHATSCreateNestedOneWithoutMENSAJESInput;
    MULTIMEDIA?: Prisma.MULTIMEDIACreateNestedManyWithoutMENSAJESInput;
};
export type MENSAJESUncheckedCreateWithoutUSUARIOSInput = {
    id?: string;
    chat_id: string;
    contenido?: string | null;
    enviado_en?: Date | string;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedCreateNestedManyWithoutMENSAJESInput;
};
export type MENSAJESCreateOrConnectWithoutUSUARIOSInput = {
    where: Prisma.MENSAJESWhereUniqueInput;
    create: Prisma.XOR<Prisma.MENSAJESCreateWithoutUSUARIOSInput, Prisma.MENSAJESUncheckedCreateWithoutUSUARIOSInput>;
};
export type MENSAJESCreateManyUSUARIOSInputEnvelope = {
    data: Prisma.MENSAJESCreateManyUSUARIOSInput | Prisma.MENSAJESCreateManyUSUARIOSInput[];
    skipDuplicates?: boolean;
};
export type MENSAJESUpsertWithWhereUniqueWithoutUSUARIOSInput = {
    where: Prisma.MENSAJESWhereUniqueInput;
    update: Prisma.XOR<Prisma.MENSAJESUpdateWithoutUSUARIOSInput, Prisma.MENSAJESUncheckedUpdateWithoutUSUARIOSInput>;
    create: Prisma.XOR<Prisma.MENSAJESCreateWithoutUSUARIOSInput, Prisma.MENSAJESUncheckedCreateWithoutUSUARIOSInput>;
};
export type MENSAJESUpdateWithWhereUniqueWithoutUSUARIOSInput = {
    where: Prisma.MENSAJESWhereUniqueInput;
    data: Prisma.XOR<Prisma.MENSAJESUpdateWithoutUSUARIOSInput, Prisma.MENSAJESUncheckedUpdateWithoutUSUARIOSInput>;
};
export type MENSAJESUpdateManyWithWhereWithoutUSUARIOSInput = {
    where: Prisma.MENSAJESScalarWhereInput;
    data: Prisma.XOR<Prisma.MENSAJESUpdateManyMutationInput, Prisma.MENSAJESUncheckedUpdateManyWithoutUSUARIOSInput>;
};
export type MENSAJESCreateManyCHATSInput = {
    id?: string;
    remitente_id: string;
    contenido?: string | null;
    enviado_en?: Date | string;
};
export type MENSAJESUpdateWithoutCHATSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enviado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutMENSAJESNestedInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUpdateManyWithoutMENSAJESNestedInput;
};
export type MENSAJESUncheckedUpdateWithoutCHATSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    remitente_id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enviado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedUpdateManyWithoutMENSAJESNestedInput;
};
export type MENSAJESUncheckedUpdateManyWithoutCHATSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    remitente_id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enviado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MENSAJESCreateManyUSUARIOSInput = {
    id?: string;
    chat_id: string;
    contenido?: string | null;
    enviado_en?: Date | string;
};
export type MENSAJESUpdateWithoutUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enviado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    CHATS?: Prisma.CHATSUpdateOneRequiredWithoutMENSAJESNestedInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUpdateManyWithoutMENSAJESNestedInput;
};
export type MENSAJESUncheckedUpdateWithoutUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chat_id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enviado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedUpdateManyWithoutMENSAJESNestedInput;
};
export type MENSAJESUncheckedUpdateManyWithoutUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chat_id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enviado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MENSAJESCountOutputType = {
    MULTIMEDIA: number;
};
export type MENSAJESCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MULTIMEDIA?: boolean | MENSAJESCountOutputTypeCountMULTIMEDIAArgs;
};
export type MENSAJESCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MENSAJESCountOutputTypeSelect<ExtArgs> | null;
};
export type MENSAJESCountOutputTypeCountMULTIMEDIAArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MULTIMEDIAWhereInput;
};
export type MENSAJESSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chat_id?: boolean;
    remitente_id?: boolean;
    contenido?: boolean;
    enviado_en?: boolean;
    CHATS?: boolean | Prisma.CHATSDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    MULTIMEDIA?: boolean | Prisma.MENSAJES$MULTIMEDIAArgs<ExtArgs>;
    _count?: boolean | Prisma.MENSAJESCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mENSAJES"]>;
export type MENSAJESSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chat_id?: boolean;
    remitente_id?: boolean;
    contenido?: boolean;
    enviado_en?: boolean;
    CHATS?: boolean | Prisma.CHATSDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mENSAJES"]>;
export type MENSAJESSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chat_id?: boolean;
    remitente_id?: boolean;
    contenido?: boolean;
    enviado_en?: boolean;
    CHATS?: boolean | Prisma.CHATSDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mENSAJES"]>;
export type MENSAJESSelectScalar = {
    id?: boolean;
    chat_id?: boolean;
    remitente_id?: boolean;
    contenido?: boolean;
    enviado_en?: boolean;
};
export type MENSAJESOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "chat_id" | "remitente_id" | "contenido" | "enviado_en", ExtArgs["result"]["mENSAJES"]>;
export type MENSAJESInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CHATS?: boolean | Prisma.CHATSDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    MULTIMEDIA?: boolean | Prisma.MENSAJES$MULTIMEDIAArgs<ExtArgs>;
    _count?: boolean | Prisma.MENSAJESCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MENSAJESIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CHATS?: boolean | Prisma.CHATSDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type MENSAJESIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CHATS?: boolean | Prisma.CHATSDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type $MENSAJESPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MENSAJES";
    objects: {
        CHATS: Prisma.$CHATSPayload<ExtArgs>;
        USUARIOS: Prisma.$USUARIOSPayload<ExtArgs>;
        MULTIMEDIA: Prisma.$MULTIMEDIAPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        chat_id: string;
        remitente_id: string;
        contenido: string | null;
        enviado_en: Date;
    }, ExtArgs["result"]["mENSAJES"]>;
    composites: {};
};
export type MENSAJESGetPayload<S extends boolean | null | undefined | MENSAJESDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MENSAJESPayload, S>;
export type MENSAJESCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MENSAJESFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MENSAJESCountAggregateInputType | true;
};
export interface MENSAJESDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MENSAJES'];
        meta: {
            name: 'MENSAJES';
        };
    };
    findUnique<T extends MENSAJESFindUniqueArgs>(args: Prisma.SelectSubset<T, MENSAJESFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MENSAJESClient<runtime.Types.Result.GetResult<Prisma.$MENSAJESPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MENSAJESFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MENSAJESFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MENSAJESClient<runtime.Types.Result.GetResult<Prisma.$MENSAJESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MENSAJESFindFirstArgs>(args?: Prisma.SelectSubset<T, MENSAJESFindFirstArgs<ExtArgs>>): Prisma.Prisma__MENSAJESClient<runtime.Types.Result.GetResult<Prisma.$MENSAJESPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MENSAJESFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MENSAJESFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MENSAJESClient<runtime.Types.Result.GetResult<Prisma.$MENSAJESPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MENSAJESFindManyArgs>(args?: Prisma.SelectSubset<T, MENSAJESFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MENSAJESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MENSAJESCreateArgs>(args: Prisma.SelectSubset<T, MENSAJESCreateArgs<ExtArgs>>): Prisma.Prisma__MENSAJESClient<runtime.Types.Result.GetResult<Prisma.$MENSAJESPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MENSAJESCreateManyArgs>(args?: Prisma.SelectSubset<T, MENSAJESCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MENSAJESCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MENSAJESCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MENSAJESPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MENSAJESDeleteArgs>(args: Prisma.SelectSubset<T, MENSAJESDeleteArgs<ExtArgs>>): Prisma.Prisma__MENSAJESClient<runtime.Types.Result.GetResult<Prisma.$MENSAJESPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MENSAJESUpdateArgs>(args: Prisma.SelectSubset<T, MENSAJESUpdateArgs<ExtArgs>>): Prisma.Prisma__MENSAJESClient<runtime.Types.Result.GetResult<Prisma.$MENSAJESPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MENSAJESDeleteManyArgs>(args?: Prisma.SelectSubset<T, MENSAJESDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MENSAJESUpdateManyArgs>(args: Prisma.SelectSubset<T, MENSAJESUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MENSAJESUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MENSAJESUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MENSAJESPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MENSAJESUpsertArgs>(args: Prisma.SelectSubset<T, MENSAJESUpsertArgs<ExtArgs>>): Prisma.Prisma__MENSAJESClient<runtime.Types.Result.GetResult<Prisma.$MENSAJESPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MENSAJESCountArgs>(args?: Prisma.Subset<T, MENSAJESCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MENSAJESCountAggregateOutputType> : number>;
    aggregate<T extends MENSAJESAggregateArgs>(args: Prisma.Subset<T, MENSAJESAggregateArgs>): Prisma.PrismaPromise<GetMENSAJESAggregateType<T>>;
    groupBy<T extends MENSAJESGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MENSAJESGroupByArgs['orderBy'];
    } : {
        orderBy?: MENSAJESGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MENSAJESGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMENSAJESGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MENSAJESFieldRefs;
}
export interface Prisma__MENSAJESClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    CHATS<T extends Prisma.CHATSDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CHATSDefaultArgs<ExtArgs>>): Prisma.Prisma__CHATSClient<runtime.Types.Result.GetResult<Prisma.$CHATSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    USUARIOS<T extends Prisma.USUARIOSDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.USUARIOSDefaultArgs<ExtArgs>>): Prisma.Prisma__USUARIOSClient<runtime.Types.Result.GetResult<Prisma.$USUARIOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    MULTIMEDIA<T extends Prisma.MENSAJES$MULTIMEDIAArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MENSAJES$MULTIMEDIAArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MULTIMEDIAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MENSAJESFieldRefs {
    readonly id: Prisma.FieldRef<"MENSAJES", 'String'>;
    readonly chat_id: Prisma.FieldRef<"MENSAJES", 'String'>;
    readonly remitente_id: Prisma.FieldRef<"MENSAJES", 'String'>;
    readonly contenido: Prisma.FieldRef<"MENSAJES", 'String'>;
    readonly enviado_en: Prisma.FieldRef<"MENSAJES", 'DateTime'>;
}
export type MENSAJESFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MENSAJESSelect<ExtArgs> | null;
    omit?: Prisma.MENSAJESOmit<ExtArgs> | null;
    include?: Prisma.MENSAJESInclude<ExtArgs> | null;
    where: Prisma.MENSAJESWhereUniqueInput;
};
export type MENSAJESFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MENSAJESSelect<ExtArgs> | null;
    omit?: Prisma.MENSAJESOmit<ExtArgs> | null;
    include?: Prisma.MENSAJESInclude<ExtArgs> | null;
    where: Prisma.MENSAJESWhereUniqueInput;
};
export type MENSAJESFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MENSAJESFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MENSAJESFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MENSAJESCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MENSAJESSelect<ExtArgs> | null;
    omit?: Prisma.MENSAJESOmit<ExtArgs> | null;
    include?: Prisma.MENSAJESInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MENSAJESCreateInput, Prisma.MENSAJESUncheckedCreateInput>;
};
export type MENSAJESCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MENSAJESCreateManyInput | Prisma.MENSAJESCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MENSAJESCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MENSAJESSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MENSAJESOmit<ExtArgs> | null;
    data: Prisma.MENSAJESCreateManyInput | Prisma.MENSAJESCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MENSAJESIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MENSAJESUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MENSAJESSelect<ExtArgs> | null;
    omit?: Prisma.MENSAJESOmit<ExtArgs> | null;
    include?: Prisma.MENSAJESInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MENSAJESUpdateInput, Prisma.MENSAJESUncheckedUpdateInput>;
    where: Prisma.MENSAJESWhereUniqueInput;
};
export type MENSAJESUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MENSAJESUpdateManyMutationInput, Prisma.MENSAJESUncheckedUpdateManyInput>;
    where?: Prisma.MENSAJESWhereInput;
    limit?: number;
};
export type MENSAJESUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MENSAJESSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MENSAJESOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MENSAJESUpdateManyMutationInput, Prisma.MENSAJESUncheckedUpdateManyInput>;
    where?: Prisma.MENSAJESWhereInput;
    limit?: number;
    include?: Prisma.MENSAJESIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MENSAJESUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MENSAJESSelect<ExtArgs> | null;
    omit?: Prisma.MENSAJESOmit<ExtArgs> | null;
    include?: Prisma.MENSAJESInclude<ExtArgs> | null;
    where: Prisma.MENSAJESWhereUniqueInput;
    create: Prisma.XOR<Prisma.MENSAJESCreateInput, Prisma.MENSAJESUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MENSAJESUpdateInput, Prisma.MENSAJESUncheckedUpdateInput>;
};
export type MENSAJESDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MENSAJESSelect<ExtArgs> | null;
    omit?: Prisma.MENSAJESOmit<ExtArgs> | null;
    include?: Prisma.MENSAJESInclude<ExtArgs> | null;
    where: Prisma.MENSAJESWhereUniqueInput;
};
export type MENSAJESDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MENSAJESWhereInput;
    limit?: number;
};
export type MENSAJES$MULTIMEDIAArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MENSAJESDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MENSAJESSelect<ExtArgs> | null;
    omit?: Prisma.MENSAJESOmit<ExtArgs> | null;
    include?: Prisma.MENSAJESInclude<ExtArgs> | null;
};
