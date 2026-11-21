import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AMISTADESModel = runtime.Types.Result.DefaultSelection<Prisma.$AMISTADESPayload>;
export type AggregateAMISTADES = {
    _count: AMISTADESCountAggregateOutputType | null;
    _min: AMISTADESMinAggregateOutputType | null;
    _max: AMISTADESMaxAggregateOutputType | null;
};
export type AMISTADESMinAggregateOutputType = {
    id: string | null;
    solicitante_id: string | null;
    receptor_id: string | null;
    estado: string | null;
    creado_en: Date | null;
    respondido_en: Date | null;
};
export type AMISTADESMaxAggregateOutputType = {
    id: string | null;
    solicitante_id: string | null;
    receptor_id: string | null;
    estado: string | null;
    creado_en: Date | null;
    respondido_en: Date | null;
};
export type AMISTADESCountAggregateOutputType = {
    id: number;
    solicitante_id: number;
    receptor_id: number;
    estado: number;
    creado_en: number;
    respondido_en: number;
    _all: number;
};
export type AMISTADESMinAggregateInputType = {
    id?: true;
    solicitante_id?: true;
    receptor_id?: true;
    estado?: true;
    creado_en?: true;
    respondido_en?: true;
};
export type AMISTADESMaxAggregateInputType = {
    id?: true;
    solicitante_id?: true;
    receptor_id?: true;
    estado?: true;
    creado_en?: true;
    respondido_en?: true;
};
export type AMISTADESCountAggregateInputType = {
    id?: true;
    solicitante_id?: true;
    receptor_id?: true;
    estado?: true;
    creado_en?: true;
    respondido_en?: true;
    _all?: true;
};
export type AMISTADESAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AMISTADESWhereInput;
    orderBy?: Prisma.AMISTADESOrderByWithRelationInput | Prisma.AMISTADESOrderByWithRelationInput[];
    cursor?: Prisma.AMISTADESWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AMISTADESCountAggregateInputType;
    _min?: AMISTADESMinAggregateInputType;
    _max?: AMISTADESMaxAggregateInputType;
};
export type GetAMISTADESAggregateType<T extends AMISTADESAggregateArgs> = {
    [P in keyof T & keyof AggregateAMISTADES]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAMISTADES[P]> : Prisma.GetScalarType<T[P], AggregateAMISTADES[P]>;
};
export type AMISTADESGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AMISTADESWhereInput;
    orderBy?: Prisma.AMISTADESOrderByWithAggregationInput | Prisma.AMISTADESOrderByWithAggregationInput[];
    by: Prisma.AMISTADESScalarFieldEnum[] | Prisma.AMISTADESScalarFieldEnum;
    having?: Prisma.AMISTADESScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AMISTADESCountAggregateInputType | true;
    _min?: AMISTADESMinAggregateInputType;
    _max?: AMISTADESMaxAggregateInputType;
};
export type AMISTADESGroupByOutputType = {
    id: string;
    solicitante_id: string;
    receptor_id: string;
    estado: string;
    creado_en: Date;
    respondido_en: Date | null;
    _count: AMISTADESCountAggregateOutputType | null;
    _min: AMISTADESMinAggregateOutputType | null;
    _max: AMISTADESMaxAggregateOutputType | null;
};
export type GetAMISTADESGroupByPayload<T extends AMISTADESGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AMISTADESGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AMISTADESGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AMISTADESGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AMISTADESGroupByOutputType[P]>;
}>>;
export type AMISTADESWhereInput = {
    AND?: Prisma.AMISTADESWhereInput | Prisma.AMISTADESWhereInput[];
    OR?: Prisma.AMISTADESWhereInput[];
    NOT?: Prisma.AMISTADESWhereInput | Prisma.AMISTADESWhereInput[];
    id?: Prisma.UuidFilter<"AMISTADES"> | string;
    solicitante_id?: Prisma.UuidFilter<"AMISTADES"> | string;
    receptor_id?: Prisma.UuidFilter<"AMISTADES"> | string;
    estado?: Prisma.StringFilter<"AMISTADES"> | string;
    creado_en?: Prisma.DateTimeFilter<"AMISTADES"> | Date | string;
    respondido_en?: Prisma.DateTimeNullableFilter<"AMISTADES"> | Date | string | null;
    PERFILES_AMISTADES_receptor_idToPERFILES?: Prisma.XOR<Prisma.PERFILESScalarRelationFilter, Prisma.PERFILESWhereInput>;
    PERFILES_AMISTADES_solicitante_idToPERFILES?: Prisma.XOR<Prisma.PERFILESScalarRelationFilter, Prisma.PERFILESWhereInput>;
};
export type AMISTADESOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    solicitante_id?: Prisma.SortOrder;
    receptor_id?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    respondido_en?: Prisma.SortOrderInput | Prisma.SortOrder;
    PERFILES_AMISTADES_receptor_idToPERFILES?: Prisma.PERFILESOrderByWithRelationInput;
    PERFILES_AMISTADES_solicitante_idToPERFILES?: Prisma.PERFILESOrderByWithRelationInput;
};
export type AMISTADESWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AMISTADESWhereInput | Prisma.AMISTADESWhereInput[];
    OR?: Prisma.AMISTADESWhereInput[];
    NOT?: Prisma.AMISTADESWhereInput | Prisma.AMISTADESWhereInput[];
    solicitante_id?: Prisma.UuidFilter<"AMISTADES"> | string;
    receptor_id?: Prisma.UuidFilter<"AMISTADES"> | string;
    estado?: Prisma.StringFilter<"AMISTADES"> | string;
    creado_en?: Prisma.DateTimeFilter<"AMISTADES"> | Date | string;
    respondido_en?: Prisma.DateTimeNullableFilter<"AMISTADES"> | Date | string | null;
    PERFILES_AMISTADES_receptor_idToPERFILES?: Prisma.XOR<Prisma.PERFILESScalarRelationFilter, Prisma.PERFILESWhereInput>;
    PERFILES_AMISTADES_solicitante_idToPERFILES?: Prisma.XOR<Prisma.PERFILESScalarRelationFilter, Prisma.PERFILESWhereInput>;
}, "id">;
export type AMISTADESOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    solicitante_id?: Prisma.SortOrder;
    receptor_id?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    respondido_en?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AMISTADESCountOrderByAggregateInput;
    _max?: Prisma.AMISTADESMaxOrderByAggregateInput;
    _min?: Prisma.AMISTADESMinOrderByAggregateInput;
};
export type AMISTADESScalarWhereWithAggregatesInput = {
    AND?: Prisma.AMISTADESScalarWhereWithAggregatesInput | Prisma.AMISTADESScalarWhereWithAggregatesInput[];
    OR?: Prisma.AMISTADESScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AMISTADESScalarWhereWithAggregatesInput | Prisma.AMISTADESScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AMISTADES"> | string;
    solicitante_id?: Prisma.UuidWithAggregatesFilter<"AMISTADES"> | string;
    receptor_id?: Prisma.UuidWithAggregatesFilter<"AMISTADES"> | string;
    estado?: Prisma.StringWithAggregatesFilter<"AMISTADES"> | string;
    creado_en?: Prisma.DateTimeWithAggregatesFilter<"AMISTADES"> | Date | string;
    respondido_en?: Prisma.DateTimeNullableWithAggregatesFilter<"AMISTADES"> | Date | string | null;
};
export type AMISTADESCreateInput = {
    id?: string;
    estado: string;
    creado_en?: Date | string;
    respondido_en?: Date | string | null;
    PERFILES_AMISTADES_receptor_idToPERFILES: Prisma.PERFILESCreateNestedOneWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput;
    PERFILES_AMISTADES_solicitante_idToPERFILES: Prisma.PERFILESCreateNestedOneWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput;
};
export type AMISTADESUncheckedCreateInput = {
    id?: string;
    solicitante_id: string;
    receptor_id: string;
    estado: string;
    creado_en?: Date | string;
    respondido_en?: Date | string | null;
};
export type AMISTADESUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondido_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    PERFILES_AMISTADES_receptor_idToPERFILES?: Prisma.PERFILESUpdateOneRequiredWithoutAMISTADES_AMISTADES_receptor_idToPERFILESNestedInput;
    PERFILES_AMISTADES_solicitante_idToPERFILES?: Prisma.PERFILESUpdateOneRequiredWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESNestedInput;
};
export type AMISTADESUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    solicitante_id?: Prisma.StringFieldUpdateOperationsInput | string;
    receptor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondido_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AMISTADESCreateManyInput = {
    id?: string;
    solicitante_id: string;
    receptor_id: string;
    estado: string;
    creado_en?: Date | string;
    respondido_en?: Date | string | null;
};
export type AMISTADESUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondido_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AMISTADESUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    solicitante_id?: Prisma.StringFieldUpdateOperationsInput | string;
    receptor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondido_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AMISTADESCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    solicitante_id?: Prisma.SortOrder;
    receptor_id?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    respondido_en?: Prisma.SortOrder;
};
export type AMISTADESMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    solicitante_id?: Prisma.SortOrder;
    receptor_id?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    respondido_en?: Prisma.SortOrder;
};
export type AMISTADESMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    solicitante_id?: Prisma.SortOrder;
    receptor_id?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    respondido_en?: Prisma.SortOrder;
};
export type AMISTADESListRelationFilter = {
    every?: Prisma.AMISTADESWhereInput;
    some?: Prisma.AMISTADESWhereInput;
    none?: Prisma.AMISTADESWhereInput;
};
export type AMISTADESOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type AMISTADESCreateNestedManyWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput = {
    create?: Prisma.XOR<Prisma.AMISTADESCreateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput, Prisma.AMISTADESUncheckedCreateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput> | Prisma.AMISTADESCreateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput[] | Prisma.AMISTADESUncheckedCreateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput[];
    connectOrCreate?: Prisma.AMISTADESCreateOrConnectWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput | Prisma.AMISTADESCreateOrConnectWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput[];
    createMany?: Prisma.AMISTADESCreateManyPERFILES_AMISTADES_receptor_idToPERFILESInputEnvelope;
    connect?: Prisma.AMISTADESWhereUniqueInput | Prisma.AMISTADESWhereUniqueInput[];
};
export type AMISTADESCreateNestedManyWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput = {
    create?: Prisma.XOR<Prisma.AMISTADESCreateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput, Prisma.AMISTADESUncheckedCreateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput> | Prisma.AMISTADESCreateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput[] | Prisma.AMISTADESUncheckedCreateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput[];
    connectOrCreate?: Prisma.AMISTADESCreateOrConnectWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput | Prisma.AMISTADESCreateOrConnectWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput[];
    createMany?: Prisma.AMISTADESCreateManyPERFILES_AMISTADES_solicitante_idToPERFILESInputEnvelope;
    connect?: Prisma.AMISTADESWhereUniqueInput | Prisma.AMISTADESWhereUniqueInput[];
};
export type AMISTADESUncheckedCreateNestedManyWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput = {
    create?: Prisma.XOR<Prisma.AMISTADESCreateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput, Prisma.AMISTADESUncheckedCreateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput> | Prisma.AMISTADESCreateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput[] | Prisma.AMISTADESUncheckedCreateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput[];
    connectOrCreate?: Prisma.AMISTADESCreateOrConnectWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput | Prisma.AMISTADESCreateOrConnectWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput[];
    createMany?: Prisma.AMISTADESCreateManyPERFILES_AMISTADES_receptor_idToPERFILESInputEnvelope;
    connect?: Prisma.AMISTADESWhereUniqueInput | Prisma.AMISTADESWhereUniqueInput[];
};
export type AMISTADESUncheckedCreateNestedManyWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput = {
    create?: Prisma.XOR<Prisma.AMISTADESCreateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput, Prisma.AMISTADESUncheckedCreateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput> | Prisma.AMISTADESCreateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput[] | Prisma.AMISTADESUncheckedCreateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput[];
    connectOrCreate?: Prisma.AMISTADESCreateOrConnectWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput | Prisma.AMISTADESCreateOrConnectWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput[];
    createMany?: Prisma.AMISTADESCreateManyPERFILES_AMISTADES_solicitante_idToPERFILESInputEnvelope;
    connect?: Prisma.AMISTADESWhereUniqueInput | Prisma.AMISTADESWhereUniqueInput[];
};
export type AMISTADESUpdateManyWithoutPERFILES_AMISTADES_receptor_idToPERFILESNestedInput = {
    create?: Prisma.XOR<Prisma.AMISTADESCreateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput, Prisma.AMISTADESUncheckedCreateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput> | Prisma.AMISTADESCreateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput[] | Prisma.AMISTADESUncheckedCreateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput[];
    connectOrCreate?: Prisma.AMISTADESCreateOrConnectWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput | Prisma.AMISTADESCreateOrConnectWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput[];
    upsert?: Prisma.AMISTADESUpsertWithWhereUniqueWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput | Prisma.AMISTADESUpsertWithWhereUniqueWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput[];
    createMany?: Prisma.AMISTADESCreateManyPERFILES_AMISTADES_receptor_idToPERFILESInputEnvelope;
    set?: Prisma.AMISTADESWhereUniqueInput | Prisma.AMISTADESWhereUniqueInput[];
    disconnect?: Prisma.AMISTADESWhereUniqueInput | Prisma.AMISTADESWhereUniqueInput[];
    delete?: Prisma.AMISTADESWhereUniqueInput | Prisma.AMISTADESWhereUniqueInput[];
    connect?: Prisma.AMISTADESWhereUniqueInput | Prisma.AMISTADESWhereUniqueInput[];
    update?: Prisma.AMISTADESUpdateWithWhereUniqueWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput | Prisma.AMISTADESUpdateWithWhereUniqueWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput[];
    updateMany?: Prisma.AMISTADESUpdateManyWithWhereWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput | Prisma.AMISTADESUpdateManyWithWhereWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput[];
    deleteMany?: Prisma.AMISTADESScalarWhereInput | Prisma.AMISTADESScalarWhereInput[];
};
export type AMISTADESUpdateManyWithoutPERFILES_AMISTADES_solicitante_idToPERFILESNestedInput = {
    create?: Prisma.XOR<Prisma.AMISTADESCreateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput, Prisma.AMISTADESUncheckedCreateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput> | Prisma.AMISTADESCreateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput[] | Prisma.AMISTADESUncheckedCreateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput[];
    connectOrCreate?: Prisma.AMISTADESCreateOrConnectWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput | Prisma.AMISTADESCreateOrConnectWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput[];
    upsert?: Prisma.AMISTADESUpsertWithWhereUniqueWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput | Prisma.AMISTADESUpsertWithWhereUniqueWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput[];
    createMany?: Prisma.AMISTADESCreateManyPERFILES_AMISTADES_solicitante_idToPERFILESInputEnvelope;
    set?: Prisma.AMISTADESWhereUniqueInput | Prisma.AMISTADESWhereUniqueInput[];
    disconnect?: Prisma.AMISTADESWhereUniqueInput | Prisma.AMISTADESWhereUniqueInput[];
    delete?: Prisma.AMISTADESWhereUniqueInput | Prisma.AMISTADESWhereUniqueInput[];
    connect?: Prisma.AMISTADESWhereUniqueInput | Prisma.AMISTADESWhereUniqueInput[];
    update?: Prisma.AMISTADESUpdateWithWhereUniqueWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput | Prisma.AMISTADESUpdateWithWhereUniqueWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput[];
    updateMany?: Prisma.AMISTADESUpdateManyWithWhereWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput | Prisma.AMISTADESUpdateManyWithWhereWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput[];
    deleteMany?: Prisma.AMISTADESScalarWhereInput | Prisma.AMISTADESScalarWhereInput[];
};
export type AMISTADESUncheckedUpdateManyWithoutPERFILES_AMISTADES_receptor_idToPERFILESNestedInput = {
    create?: Prisma.XOR<Prisma.AMISTADESCreateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput, Prisma.AMISTADESUncheckedCreateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput> | Prisma.AMISTADESCreateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput[] | Prisma.AMISTADESUncheckedCreateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput[];
    connectOrCreate?: Prisma.AMISTADESCreateOrConnectWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput | Prisma.AMISTADESCreateOrConnectWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput[];
    upsert?: Prisma.AMISTADESUpsertWithWhereUniqueWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput | Prisma.AMISTADESUpsertWithWhereUniqueWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput[];
    createMany?: Prisma.AMISTADESCreateManyPERFILES_AMISTADES_receptor_idToPERFILESInputEnvelope;
    set?: Prisma.AMISTADESWhereUniqueInput | Prisma.AMISTADESWhereUniqueInput[];
    disconnect?: Prisma.AMISTADESWhereUniqueInput | Prisma.AMISTADESWhereUniqueInput[];
    delete?: Prisma.AMISTADESWhereUniqueInput | Prisma.AMISTADESWhereUniqueInput[];
    connect?: Prisma.AMISTADESWhereUniqueInput | Prisma.AMISTADESWhereUniqueInput[];
    update?: Prisma.AMISTADESUpdateWithWhereUniqueWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput | Prisma.AMISTADESUpdateWithWhereUniqueWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput[];
    updateMany?: Prisma.AMISTADESUpdateManyWithWhereWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput | Prisma.AMISTADESUpdateManyWithWhereWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput[];
    deleteMany?: Prisma.AMISTADESScalarWhereInput | Prisma.AMISTADESScalarWhereInput[];
};
export type AMISTADESUncheckedUpdateManyWithoutPERFILES_AMISTADES_solicitante_idToPERFILESNestedInput = {
    create?: Prisma.XOR<Prisma.AMISTADESCreateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput, Prisma.AMISTADESUncheckedCreateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput> | Prisma.AMISTADESCreateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput[] | Prisma.AMISTADESUncheckedCreateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput[];
    connectOrCreate?: Prisma.AMISTADESCreateOrConnectWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput | Prisma.AMISTADESCreateOrConnectWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput[];
    upsert?: Prisma.AMISTADESUpsertWithWhereUniqueWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput | Prisma.AMISTADESUpsertWithWhereUniqueWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput[];
    createMany?: Prisma.AMISTADESCreateManyPERFILES_AMISTADES_solicitante_idToPERFILESInputEnvelope;
    set?: Prisma.AMISTADESWhereUniqueInput | Prisma.AMISTADESWhereUniqueInput[];
    disconnect?: Prisma.AMISTADESWhereUniqueInput | Prisma.AMISTADESWhereUniqueInput[];
    delete?: Prisma.AMISTADESWhereUniqueInput | Prisma.AMISTADESWhereUniqueInput[];
    connect?: Prisma.AMISTADESWhereUniqueInput | Prisma.AMISTADESWhereUniqueInput[];
    update?: Prisma.AMISTADESUpdateWithWhereUniqueWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput | Prisma.AMISTADESUpdateWithWhereUniqueWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput[];
    updateMany?: Prisma.AMISTADESUpdateManyWithWhereWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput | Prisma.AMISTADESUpdateManyWithWhereWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput[];
    deleteMany?: Prisma.AMISTADESScalarWhereInput | Prisma.AMISTADESScalarWhereInput[];
};
export type AMISTADESCreateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput = {
    id?: string;
    estado: string;
    creado_en?: Date | string;
    respondido_en?: Date | string | null;
    PERFILES_AMISTADES_solicitante_idToPERFILES: Prisma.PERFILESCreateNestedOneWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput;
};
export type AMISTADESUncheckedCreateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput = {
    id?: string;
    solicitante_id: string;
    estado: string;
    creado_en?: Date | string;
    respondido_en?: Date | string | null;
};
export type AMISTADESCreateOrConnectWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput = {
    where: Prisma.AMISTADESWhereUniqueInput;
    create: Prisma.XOR<Prisma.AMISTADESCreateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput, Prisma.AMISTADESUncheckedCreateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput>;
};
export type AMISTADESCreateManyPERFILES_AMISTADES_receptor_idToPERFILESInputEnvelope = {
    data: Prisma.AMISTADESCreateManyPERFILES_AMISTADES_receptor_idToPERFILESInput | Prisma.AMISTADESCreateManyPERFILES_AMISTADES_receptor_idToPERFILESInput[];
    skipDuplicates?: boolean;
};
export type AMISTADESCreateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput = {
    id?: string;
    estado: string;
    creado_en?: Date | string;
    respondido_en?: Date | string | null;
    PERFILES_AMISTADES_receptor_idToPERFILES: Prisma.PERFILESCreateNestedOneWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput;
};
export type AMISTADESUncheckedCreateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput = {
    id?: string;
    receptor_id: string;
    estado: string;
    creado_en?: Date | string;
    respondido_en?: Date | string | null;
};
export type AMISTADESCreateOrConnectWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput = {
    where: Prisma.AMISTADESWhereUniqueInput;
    create: Prisma.XOR<Prisma.AMISTADESCreateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput, Prisma.AMISTADESUncheckedCreateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput>;
};
export type AMISTADESCreateManyPERFILES_AMISTADES_solicitante_idToPERFILESInputEnvelope = {
    data: Prisma.AMISTADESCreateManyPERFILES_AMISTADES_solicitante_idToPERFILESInput | Prisma.AMISTADESCreateManyPERFILES_AMISTADES_solicitante_idToPERFILESInput[];
    skipDuplicates?: boolean;
};
export type AMISTADESUpsertWithWhereUniqueWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput = {
    where: Prisma.AMISTADESWhereUniqueInput;
    update: Prisma.XOR<Prisma.AMISTADESUpdateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput, Prisma.AMISTADESUncheckedUpdateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput>;
    create: Prisma.XOR<Prisma.AMISTADESCreateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput, Prisma.AMISTADESUncheckedCreateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput>;
};
export type AMISTADESUpdateWithWhereUniqueWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput = {
    where: Prisma.AMISTADESWhereUniqueInput;
    data: Prisma.XOR<Prisma.AMISTADESUpdateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput, Prisma.AMISTADESUncheckedUpdateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput>;
};
export type AMISTADESUpdateManyWithWhereWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput = {
    where: Prisma.AMISTADESScalarWhereInput;
    data: Prisma.XOR<Prisma.AMISTADESUpdateManyMutationInput, Prisma.AMISTADESUncheckedUpdateManyWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput>;
};
export type AMISTADESScalarWhereInput = {
    AND?: Prisma.AMISTADESScalarWhereInput | Prisma.AMISTADESScalarWhereInput[];
    OR?: Prisma.AMISTADESScalarWhereInput[];
    NOT?: Prisma.AMISTADESScalarWhereInput | Prisma.AMISTADESScalarWhereInput[];
    id?: Prisma.UuidFilter<"AMISTADES"> | string;
    solicitante_id?: Prisma.UuidFilter<"AMISTADES"> | string;
    receptor_id?: Prisma.UuidFilter<"AMISTADES"> | string;
    estado?: Prisma.StringFilter<"AMISTADES"> | string;
    creado_en?: Prisma.DateTimeFilter<"AMISTADES"> | Date | string;
    respondido_en?: Prisma.DateTimeNullableFilter<"AMISTADES"> | Date | string | null;
};
export type AMISTADESUpsertWithWhereUniqueWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput = {
    where: Prisma.AMISTADESWhereUniqueInput;
    update: Prisma.XOR<Prisma.AMISTADESUpdateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput, Prisma.AMISTADESUncheckedUpdateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput>;
    create: Prisma.XOR<Prisma.AMISTADESCreateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput, Prisma.AMISTADESUncheckedCreateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput>;
};
export type AMISTADESUpdateWithWhereUniqueWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput = {
    where: Prisma.AMISTADESWhereUniqueInput;
    data: Prisma.XOR<Prisma.AMISTADESUpdateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput, Prisma.AMISTADESUncheckedUpdateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput>;
};
export type AMISTADESUpdateManyWithWhereWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput = {
    where: Prisma.AMISTADESScalarWhereInput;
    data: Prisma.XOR<Prisma.AMISTADESUpdateManyMutationInput, Prisma.AMISTADESUncheckedUpdateManyWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput>;
};
export type AMISTADESCreateManyPERFILES_AMISTADES_receptor_idToPERFILESInput = {
    id?: string;
    solicitante_id: string;
    estado: string;
    creado_en?: Date | string;
    respondido_en?: Date | string | null;
};
export type AMISTADESCreateManyPERFILES_AMISTADES_solicitante_idToPERFILESInput = {
    id?: string;
    receptor_id: string;
    estado: string;
    creado_en?: Date | string;
    respondido_en?: Date | string | null;
};
export type AMISTADESUpdateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondido_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    PERFILES_AMISTADES_solicitante_idToPERFILES?: Prisma.PERFILESUpdateOneRequiredWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESNestedInput;
};
export type AMISTADESUncheckedUpdateWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    solicitante_id?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondido_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AMISTADESUncheckedUpdateManyWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    solicitante_id?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondido_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AMISTADESUpdateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondido_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    PERFILES_AMISTADES_receptor_idToPERFILES?: Prisma.PERFILESUpdateOneRequiredWithoutAMISTADES_AMISTADES_receptor_idToPERFILESNestedInput;
};
export type AMISTADESUncheckedUpdateWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receptor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondido_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AMISTADESUncheckedUpdateManyWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receptor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respondido_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AMISTADESSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    solicitante_id?: boolean;
    receptor_id?: boolean;
    estado?: boolean;
    creado_en?: boolean;
    respondido_en?: boolean;
    PERFILES_AMISTADES_receptor_idToPERFILES?: boolean | Prisma.PERFILESDefaultArgs<ExtArgs>;
    PERFILES_AMISTADES_solicitante_idToPERFILES?: boolean | Prisma.PERFILESDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aMISTADES"]>;
export type AMISTADESSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    solicitante_id?: boolean;
    receptor_id?: boolean;
    estado?: boolean;
    creado_en?: boolean;
    respondido_en?: boolean;
    PERFILES_AMISTADES_receptor_idToPERFILES?: boolean | Prisma.PERFILESDefaultArgs<ExtArgs>;
    PERFILES_AMISTADES_solicitante_idToPERFILES?: boolean | Prisma.PERFILESDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aMISTADES"]>;
export type AMISTADESSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    solicitante_id?: boolean;
    receptor_id?: boolean;
    estado?: boolean;
    creado_en?: boolean;
    respondido_en?: boolean;
    PERFILES_AMISTADES_receptor_idToPERFILES?: boolean | Prisma.PERFILESDefaultArgs<ExtArgs>;
    PERFILES_AMISTADES_solicitante_idToPERFILES?: boolean | Prisma.PERFILESDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aMISTADES"]>;
export type AMISTADESSelectScalar = {
    id?: boolean;
    solicitante_id?: boolean;
    receptor_id?: boolean;
    estado?: boolean;
    creado_en?: boolean;
    respondido_en?: boolean;
};
export type AMISTADESOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "solicitante_id" | "receptor_id" | "estado" | "creado_en" | "respondido_en", ExtArgs["result"]["aMISTADES"]>;
export type AMISTADESInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    PERFILES_AMISTADES_receptor_idToPERFILES?: boolean | Prisma.PERFILESDefaultArgs<ExtArgs>;
    PERFILES_AMISTADES_solicitante_idToPERFILES?: boolean | Prisma.PERFILESDefaultArgs<ExtArgs>;
};
export type AMISTADESIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    PERFILES_AMISTADES_receptor_idToPERFILES?: boolean | Prisma.PERFILESDefaultArgs<ExtArgs>;
    PERFILES_AMISTADES_solicitante_idToPERFILES?: boolean | Prisma.PERFILESDefaultArgs<ExtArgs>;
};
export type AMISTADESIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    PERFILES_AMISTADES_receptor_idToPERFILES?: boolean | Prisma.PERFILESDefaultArgs<ExtArgs>;
    PERFILES_AMISTADES_solicitante_idToPERFILES?: boolean | Prisma.PERFILESDefaultArgs<ExtArgs>;
};
export type $AMISTADESPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AMISTADES";
    objects: {
        PERFILES_AMISTADES_receptor_idToPERFILES: Prisma.$PERFILESPayload<ExtArgs>;
        PERFILES_AMISTADES_solicitante_idToPERFILES: Prisma.$PERFILESPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        solicitante_id: string;
        receptor_id: string;
        estado: string;
        creado_en: Date;
        respondido_en: Date | null;
    }, ExtArgs["result"]["aMISTADES"]>;
    composites: {};
};
export type AMISTADESGetPayload<S extends boolean | null | undefined | AMISTADESDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AMISTADESPayload, S>;
export type AMISTADESCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AMISTADESFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AMISTADESCountAggregateInputType | true;
};
export interface AMISTADESDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AMISTADES'];
        meta: {
            name: 'AMISTADES';
        };
    };
    findUnique<T extends AMISTADESFindUniqueArgs>(args: Prisma.SelectSubset<T, AMISTADESFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AMISTADESClient<runtime.Types.Result.GetResult<Prisma.$AMISTADESPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AMISTADESFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AMISTADESFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AMISTADESClient<runtime.Types.Result.GetResult<Prisma.$AMISTADESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AMISTADESFindFirstArgs>(args?: Prisma.SelectSubset<T, AMISTADESFindFirstArgs<ExtArgs>>): Prisma.Prisma__AMISTADESClient<runtime.Types.Result.GetResult<Prisma.$AMISTADESPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AMISTADESFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AMISTADESFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AMISTADESClient<runtime.Types.Result.GetResult<Prisma.$AMISTADESPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AMISTADESFindManyArgs>(args?: Prisma.SelectSubset<T, AMISTADESFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AMISTADESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AMISTADESCreateArgs>(args: Prisma.SelectSubset<T, AMISTADESCreateArgs<ExtArgs>>): Prisma.Prisma__AMISTADESClient<runtime.Types.Result.GetResult<Prisma.$AMISTADESPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AMISTADESCreateManyArgs>(args?: Prisma.SelectSubset<T, AMISTADESCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AMISTADESCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AMISTADESCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AMISTADESPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AMISTADESDeleteArgs>(args: Prisma.SelectSubset<T, AMISTADESDeleteArgs<ExtArgs>>): Prisma.Prisma__AMISTADESClient<runtime.Types.Result.GetResult<Prisma.$AMISTADESPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AMISTADESUpdateArgs>(args: Prisma.SelectSubset<T, AMISTADESUpdateArgs<ExtArgs>>): Prisma.Prisma__AMISTADESClient<runtime.Types.Result.GetResult<Prisma.$AMISTADESPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AMISTADESDeleteManyArgs>(args?: Prisma.SelectSubset<T, AMISTADESDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AMISTADESUpdateManyArgs>(args: Prisma.SelectSubset<T, AMISTADESUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AMISTADESUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AMISTADESUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AMISTADESPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AMISTADESUpsertArgs>(args: Prisma.SelectSubset<T, AMISTADESUpsertArgs<ExtArgs>>): Prisma.Prisma__AMISTADESClient<runtime.Types.Result.GetResult<Prisma.$AMISTADESPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AMISTADESCountArgs>(args?: Prisma.Subset<T, AMISTADESCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AMISTADESCountAggregateOutputType> : number>;
    aggregate<T extends AMISTADESAggregateArgs>(args: Prisma.Subset<T, AMISTADESAggregateArgs>): Prisma.PrismaPromise<GetAMISTADESAggregateType<T>>;
    groupBy<T extends AMISTADESGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AMISTADESGroupByArgs['orderBy'];
    } : {
        orderBy?: AMISTADESGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AMISTADESGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAMISTADESGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AMISTADESFieldRefs;
}
export interface Prisma__AMISTADESClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    PERFILES_AMISTADES_receptor_idToPERFILES<T extends Prisma.PERFILESDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PERFILESDefaultArgs<ExtArgs>>): Prisma.Prisma__PERFILESClient<runtime.Types.Result.GetResult<Prisma.$PERFILESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    PERFILES_AMISTADES_solicitante_idToPERFILES<T extends Prisma.PERFILESDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PERFILESDefaultArgs<ExtArgs>>): Prisma.Prisma__PERFILESClient<runtime.Types.Result.GetResult<Prisma.$PERFILESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AMISTADESFieldRefs {
    readonly id: Prisma.FieldRef<"AMISTADES", 'String'>;
    readonly solicitante_id: Prisma.FieldRef<"AMISTADES", 'String'>;
    readonly receptor_id: Prisma.FieldRef<"AMISTADES", 'String'>;
    readonly estado: Prisma.FieldRef<"AMISTADES", 'String'>;
    readonly creado_en: Prisma.FieldRef<"AMISTADES", 'DateTime'>;
    readonly respondido_en: Prisma.FieldRef<"AMISTADES", 'DateTime'>;
}
export type AMISTADESFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AMISTADESSelect<ExtArgs> | null;
    omit?: Prisma.AMISTADESOmit<ExtArgs> | null;
    include?: Prisma.AMISTADESInclude<ExtArgs> | null;
    where: Prisma.AMISTADESWhereUniqueInput;
};
export type AMISTADESFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AMISTADESSelect<ExtArgs> | null;
    omit?: Prisma.AMISTADESOmit<ExtArgs> | null;
    include?: Prisma.AMISTADESInclude<ExtArgs> | null;
    where: Prisma.AMISTADESWhereUniqueInput;
};
export type AMISTADESFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AMISTADESSelect<ExtArgs> | null;
    omit?: Prisma.AMISTADESOmit<ExtArgs> | null;
    include?: Prisma.AMISTADESInclude<ExtArgs> | null;
    where?: Prisma.AMISTADESWhereInput;
    orderBy?: Prisma.AMISTADESOrderByWithRelationInput | Prisma.AMISTADESOrderByWithRelationInput[];
    cursor?: Prisma.AMISTADESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AMISTADESScalarFieldEnum | Prisma.AMISTADESScalarFieldEnum[];
};
export type AMISTADESFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AMISTADESSelect<ExtArgs> | null;
    omit?: Prisma.AMISTADESOmit<ExtArgs> | null;
    include?: Prisma.AMISTADESInclude<ExtArgs> | null;
    where?: Prisma.AMISTADESWhereInput;
    orderBy?: Prisma.AMISTADESOrderByWithRelationInput | Prisma.AMISTADESOrderByWithRelationInput[];
    cursor?: Prisma.AMISTADESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AMISTADESScalarFieldEnum | Prisma.AMISTADESScalarFieldEnum[];
};
export type AMISTADESFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AMISTADESSelect<ExtArgs> | null;
    omit?: Prisma.AMISTADESOmit<ExtArgs> | null;
    include?: Prisma.AMISTADESInclude<ExtArgs> | null;
    where?: Prisma.AMISTADESWhereInput;
    orderBy?: Prisma.AMISTADESOrderByWithRelationInput | Prisma.AMISTADESOrderByWithRelationInput[];
    cursor?: Prisma.AMISTADESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AMISTADESScalarFieldEnum | Prisma.AMISTADESScalarFieldEnum[];
};
export type AMISTADESCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AMISTADESSelect<ExtArgs> | null;
    omit?: Prisma.AMISTADESOmit<ExtArgs> | null;
    include?: Prisma.AMISTADESInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AMISTADESCreateInput, Prisma.AMISTADESUncheckedCreateInput>;
};
export type AMISTADESCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AMISTADESCreateManyInput | Prisma.AMISTADESCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AMISTADESCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AMISTADESSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AMISTADESOmit<ExtArgs> | null;
    data: Prisma.AMISTADESCreateManyInput | Prisma.AMISTADESCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AMISTADESIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AMISTADESUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AMISTADESSelect<ExtArgs> | null;
    omit?: Prisma.AMISTADESOmit<ExtArgs> | null;
    include?: Prisma.AMISTADESInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AMISTADESUpdateInput, Prisma.AMISTADESUncheckedUpdateInput>;
    where: Prisma.AMISTADESWhereUniqueInput;
};
export type AMISTADESUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AMISTADESUpdateManyMutationInput, Prisma.AMISTADESUncheckedUpdateManyInput>;
    where?: Prisma.AMISTADESWhereInput;
    limit?: number;
};
export type AMISTADESUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AMISTADESSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AMISTADESOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AMISTADESUpdateManyMutationInput, Prisma.AMISTADESUncheckedUpdateManyInput>;
    where?: Prisma.AMISTADESWhereInput;
    limit?: number;
    include?: Prisma.AMISTADESIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AMISTADESUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AMISTADESSelect<ExtArgs> | null;
    omit?: Prisma.AMISTADESOmit<ExtArgs> | null;
    include?: Prisma.AMISTADESInclude<ExtArgs> | null;
    where: Prisma.AMISTADESWhereUniqueInput;
    create: Prisma.XOR<Prisma.AMISTADESCreateInput, Prisma.AMISTADESUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AMISTADESUpdateInput, Prisma.AMISTADESUncheckedUpdateInput>;
};
export type AMISTADESDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AMISTADESSelect<ExtArgs> | null;
    omit?: Prisma.AMISTADESOmit<ExtArgs> | null;
    include?: Prisma.AMISTADESInclude<ExtArgs> | null;
    where: Prisma.AMISTADESWhereUniqueInput;
};
export type AMISTADESDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AMISTADESWhereInput;
    limit?: number;
};
export type AMISTADESDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AMISTADESSelect<ExtArgs> | null;
    omit?: Prisma.AMISTADESOmit<ExtArgs> | null;
    include?: Prisma.AMISTADESInclude<ExtArgs> | null;
};
