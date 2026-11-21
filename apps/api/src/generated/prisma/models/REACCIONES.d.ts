import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type REACCIONESModel = runtime.Types.Result.DefaultSelection<Prisma.$REACCIONESPayload>;
export type AggregateREACCIONES = {
    _count: REACCIONESCountAggregateOutputType | null;
    _min: REACCIONESMinAggregateOutputType | null;
    _max: REACCIONESMaxAggregateOutputType | null;
};
export type REACCIONESMinAggregateOutputType = {
    usuario_id: string | null;
    publicacion_id: string | null;
    tipo: string | null;
    creado_en: Date | null;
};
export type REACCIONESMaxAggregateOutputType = {
    usuario_id: string | null;
    publicacion_id: string | null;
    tipo: string | null;
    creado_en: Date | null;
};
export type REACCIONESCountAggregateOutputType = {
    usuario_id: number;
    publicacion_id: number;
    tipo: number;
    creado_en: number;
    _all: number;
};
export type REACCIONESMinAggregateInputType = {
    usuario_id?: true;
    publicacion_id?: true;
    tipo?: true;
    creado_en?: true;
};
export type REACCIONESMaxAggregateInputType = {
    usuario_id?: true;
    publicacion_id?: true;
    tipo?: true;
    creado_en?: true;
};
export type REACCIONESCountAggregateInputType = {
    usuario_id?: true;
    publicacion_id?: true;
    tipo?: true;
    creado_en?: true;
    _all?: true;
};
export type REACCIONESAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.REACCIONESWhereInput;
    orderBy?: Prisma.REACCIONESOrderByWithRelationInput | Prisma.REACCIONESOrderByWithRelationInput[];
    cursor?: Prisma.REACCIONESWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | REACCIONESCountAggregateInputType;
    _min?: REACCIONESMinAggregateInputType;
    _max?: REACCIONESMaxAggregateInputType;
};
export type GetREACCIONESAggregateType<T extends REACCIONESAggregateArgs> = {
    [P in keyof T & keyof AggregateREACCIONES]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateREACCIONES[P]> : Prisma.GetScalarType<T[P], AggregateREACCIONES[P]>;
};
export type REACCIONESGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.REACCIONESWhereInput;
    orderBy?: Prisma.REACCIONESOrderByWithAggregationInput | Prisma.REACCIONESOrderByWithAggregationInput[];
    by: Prisma.REACCIONESScalarFieldEnum[] | Prisma.REACCIONESScalarFieldEnum;
    having?: Prisma.REACCIONESScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: REACCIONESCountAggregateInputType | true;
    _min?: REACCIONESMinAggregateInputType;
    _max?: REACCIONESMaxAggregateInputType;
};
export type REACCIONESGroupByOutputType = {
    usuario_id: string;
    publicacion_id: string;
    tipo: string;
    creado_en: Date;
    _count: REACCIONESCountAggregateOutputType | null;
    _min: REACCIONESMinAggregateOutputType | null;
    _max: REACCIONESMaxAggregateOutputType | null;
};
export type GetREACCIONESGroupByPayload<T extends REACCIONESGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<REACCIONESGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof REACCIONESGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], REACCIONESGroupByOutputType[P]> : Prisma.GetScalarType<T[P], REACCIONESGroupByOutputType[P]>;
}>>;
export type REACCIONESWhereInput = {
    AND?: Prisma.REACCIONESWhereInput | Prisma.REACCIONESWhereInput[];
    OR?: Prisma.REACCIONESWhereInput[];
    NOT?: Prisma.REACCIONESWhereInput | Prisma.REACCIONESWhereInput[];
    usuario_id?: Prisma.UuidFilter<"REACCIONES"> | string;
    publicacion_id?: Prisma.UuidFilter<"REACCIONES"> | string;
    tipo?: Prisma.StringFilter<"REACCIONES"> | string;
    creado_en?: Prisma.DateTimeFilter<"REACCIONES"> | Date | string;
    PUBLICACIONES?: Prisma.XOR<Prisma.PUBLICACIONESScalarRelationFilter, Prisma.PUBLICACIONESWhereInput>;
    USUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
};
export type REACCIONESOrderByWithRelationInput = {
    usuario_id?: Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    PUBLICACIONES?: Prisma.PUBLICACIONESOrderByWithRelationInput;
    USUARIOS?: Prisma.USUARIOSOrderByWithRelationInput;
};
export type REACCIONESWhereUniqueInput = Prisma.AtLeast<{
    usuario_id_publicacion_id?: Prisma.REACCIONESUsuario_idPublicacion_idCompoundUniqueInput;
    AND?: Prisma.REACCIONESWhereInput | Prisma.REACCIONESWhereInput[];
    OR?: Prisma.REACCIONESWhereInput[];
    NOT?: Prisma.REACCIONESWhereInput | Prisma.REACCIONESWhereInput[];
    usuario_id?: Prisma.UuidFilter<"REACCIONES"> | string;
    publicacion_id?: Prisma.UuidFilter<"REACCIONES"> | string;
    tipo?: Prisma.StringFilter<"REACCIONES"> | string;
    creado_en?: Prisma.DateTimeFilter<"REACCIONES"> | Date | string;
    PUBLICACIONES?: Prisma.XOR<Prisma.PUBLICACIONESScalarRelationFilter, Prisma.PUBLICACIONESWhereInput>;
    USUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
}, "usuario_id_publicacion_id">;
export type REACCIONESOrderByWithAggregationInput = {
    usuario_id?: Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    _count?: Prisma.REACCIONESCountOrderByAggregateInput;
    _max?: Prisma.REACCIONESMaxOrderByAggregateInput;
    _min?: Prisma.REACCIONESMinOrderByAggregateInput;
};
export type REACCIONESScalarWhereWithAggregatesInput = {
    AND?: Prisma.REACCIONESScalarWhereWithAggregatesInput | Prisma.REACCIONESScalarWhereWithAggregatesInput[];
    OR?: Prisma.REACCIONESScalarWhereWithAggregatesInput[];
    NOT?: Prisma.REACCIONESScalarWhereWithAggregatesInput | Prisma.REACCIONESScalarWhereWithAggregatesInput[];
    usuario_id?: Prisma.UuidWithAggregatesFilter<"REACCIONES"> | string;
    publicacion_id?: Prisma.UuidWithAggregatesFilter<"REACCIONES"> | string;
    tipo?: Prisma.StringWithAggregatesFilter<"REACCIONES"> | string;
    creado_en?: Prisma.DateTimeWithAggregatesFilter<"REACCIONES"> | Date | string;
};
export type REACCIONESCreateInput = {
    tipo: string;
    creado_en?: Date | string;
    PUBLICACIONES: Prisma.PUBLICACIONESCreateNestedOneWithoutREACCIONESInput;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutREACCIONESInput;
};
export type REACCIONESUncheckedCreateInput = {
    usuario_id: string;
    publicacion_id: string;
    tipo: string;
    creado_en?: Date | string;
};
export type REACCIONESUpdateInput = {
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneRequiredWithoutREACCIONESNestedInput;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutREACCIONESNestedInput;
};
export type REACCIONESUncheckedUpdateInput = {
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type REACCIONESCreateManyInput = {
    usuario_id: string;
    publicacion_id: string;
    tipo: string;
    creado_en?: Date | string;
};
export type REACCIONESUpdateManyMutationInput = {
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type REACCIONESUncheckedUpdateManyInput = {
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type REACCIONESListRelationFilter = {
    every?: Prisma.REACCIONESWhereInput;
    some?: Prisma.REACCIONESWhereInput;
    none?: Prisma.REACCIONESWhereInput;
};
export type REACCIONESOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type REACCIONESUsuario_idPublicacion_idCompoundUniqueInput = {
    usuario_id: string;
    publicacion_id: string;
};
export type REACCIONESCountOrderByAggregateInput = {
    usuario_id?: Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
};
export type REACCIONESMaxOrderByAggregateInput = {
    usuario_id?: Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
};
export type REACCIONESMinOrderByAggregateInput = {
    usuario_id?: Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
};
export type REACCIONESCreateNestedManyWithoutPUBLICACIONESInput = {
    create?: Prisma.XOR<Prisma.REACCIONESCreateWithoutPUBLICACIONESInput, Prisma.REACCIONESUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.REACCIONESCreateWithoutPUBLICACIONESInput[] | Prisma.REACCIONESUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.REACCIONESCreateOrConnectWithoutPUBLICACIONESInput | Prisma.REACCIONESCreateOrConnectWithoutPUBLICACIONESInput[];
    createMany?: Prisma.REACCIONESCreateManyPUBLICACIONESInputEnvelope;
    connect?: Prisma.REACCIONESWhereUniqueInput | Prisma.REACCIONESWhereUniqueInput[];
};
export type REACCIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput = {
    create?: Prisma.XOR<Prisma.REACCIONESCreateWithoutPUBLICACIONESInput, Prisma.REACCIONESUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.REACCIONESCreateWithoutPUBLICACIONESInput[] | Prisma.REACCIONESUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.REACCIONESCreateOrConnectWithoutPUBLICACIONESInput | Prisma.REACCIONESCreateOrConnectWithoutPUBLICACIONESInput[];
    createMany?: Prisma.REACCIONESCreateManyPUBLICACIONESInputEnvelope;
    connect?: Prisma.REACCIONESWhereUniqueInput | Prisma.REACCIONESWhereUniqueInput[];
};
export type REACCIONESUpdateManyWithoutPUBLICACIONESNestedInput = {
    create?: Prisma.XOR<Prisma.REACCIONESCreateWithoutPUBLICACIONESInput, Prisma.REACCIONESUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.REACCIONESCreateWithoutPUBLICACIONESInput[] | Prisma.REACCIONESUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.REACCIONESCreateOrConnectWithoutPUBLICACIONESInput | Prisma.REACCIONESCreateOrConnectWithoutPUBLICACIONESInput[];
    upsert?: Prisma.REACCIONESUpsertWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.REACCIONESUpsertWithWhereUniqueWithoutPUBLICACIONESInput[];
    createMany?: Prisma.REACCIONESCreateManyPUBLICACIONESInputEnvelope;
    set?: Prisma.REACCIONESWhereUniqueInput | Prisma.REACCIONESWhereUniqueInput[];
    disconnect?: Prisma.REACCIONESWhereUniqueInput | Prisma.REACCIONESWhereUniqueInput[];
    delete?: Prisma.REACCIONESWhereUniqueInput | Prisma.REACCIONESWhereUniqueInput[];
    connect?: Prisma.REACCIONESWhereUniqueInput | Prisma.REACCIONESWhereUniqueInput[];
    update?: Prisma.REACCIONESUpdateWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.REACCIONESUpdateWithWhereUniqueWithoutPUBLICACIONESInput[];
    updateMany?: Prisma.REACCIONESUpdateManyWithWhereWithoutPUBLICACIONESInput | Prisma.REACCIONESUpdateManyWithWhereWithoutPUBLICACIONESInput[];
    deleteMany?: Prisma.REACCIONESScalarWhereInput | Prisma.REACCIONESScalarWhereInput[];
};
export type REACCIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput = {
    create?: Prisma.XOR<Prisma.REACCIONESCreateWithoutPUBLICACIONESInput, Prisma.REACCIONESUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.REACCIONESCreateWithoutPUBLICACIONESInput[] | Prisma.REACCIONESUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.REACCIONESCreateOrConnectWithoutPUBLICACIONESInput | Prisma.REACCIONESCreateOrConnectWithoutPUBLICACIONESInput[];
    upsert?: Prisma.REACCIONESUpsertWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.REACCIONESUpsertWithWhereUniqueWithoutPUBLICACIONESInput[];
    createMany?: Prisma.REACCIONESCreateManyPUBLICACIONESInputEnvelope;
    set?: Prisma.REACCIONESWhereUniqueInput | Prisma.REACCIONESWhereUniqueInput[];
    disconnect?: Prisma.REACCIONESWhereUniqueInput | Prisma.REACCIONESWhereUniqueInput[];
    delete?: Prisma.REACCIONESWhereUniqueInput | Prisma.REACCIONESWhereUniqueInput[];
    connect?: Prisma.REACCIONESWhereUniqueInput | Prisma.REACCIONESWhereUniqueInput[];
    update?: Prisma.REACCIONESUpdateWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.REACCIONESUpdateWithWhereUniqueWithoutPUBLICACIONESInput[];
    updateMany?: Prisma.REACCIONESUpdateManyWithWhereWithoutPUBLICACIONESInput | Prisma.REACCIONESUpdateManyWithWhereWithoutPUBLICACIONESInput[];
    deleteMany?: Prisma.REACCIONESScalarWhereInput | Prisma.REACCIONESScalarWhereInput[];
};
export type REACCIONESCreateNestedManyWithoutUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.REACCIONESCreateWithoutUSUARIOSInput, Prisma.REACCIONESUncheckedCreateWithoutUSUARIOSInput> | Prisma.REACCIONESCreateWithoutUSUARIOSInput[] | Prisma.REACCIONESUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.REACCIONESCreateOrConnectWithoutUSUARIOSInput | Prisma.REACCIONESCreateOrConnectWithoutUSUARIOSInput[];
    createMany?: Prisma.REACCIONESCreateManyUSUARIOSInputEnvelope;
    connect?: Prisma.REACCIONESWhereUniqueInput | Prisma.REACCIONESWhereUniqueInput[];
};
export type REACCIONESUncheckedCreateNestedManyWithoutUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.REACCIONESCreateWithoutUSUARIOSInput, Prisma.REACCIONESUncheckedCreateWithoutUSUARIOSInput> | Prisma.REACCIONESCreateWithoutUSUARIOSInput[] | Prisma.REACCIONESUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.REACCIONESCreateOrConnectWithoutUSUARIOSInput | Prisma.REACCIONESCreateOrConnectWithoutUSUARIOSInput[];
    createMany?: Prisma.REACCIONESCreateManyUSUARIOSInputEnvelope;
    connect?: Prisma.REACCIONESWhereUniqueInput | Prisma.REACCIONESWhereUniqueInput[];
};
export type REACCIONESUpdateManyWithoutUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.REACCIONESCreateWithoutUSUARIOSInput, Prisma.REACCIONESUncheckedCreateWithoutUSUARIOSInput> | Prisma.REACCIONESCreateWithoutUSUARIOSInput[] | Prisma.REACCIONESUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.REACCIONESCreateOrConnectWithoutUSUARIOSInput | Prisma.REACCIONESCreateOrConnectWithoutUSUARIOSInput[];
    upsert?: Prisma.REACCIONESUpsertWithWhereUniqueWithoutUSUARIOSInput | Prisma.REACCIONESUpsertWithWhereUniqueWithoutUSUARIOSInput[];
    createMany?: Prisma.REACCIONESCreateManyUSUARIOSInputEnvelope;
    set?: Prisma.REACCIONESWhereUniqueInput | Prisma.REACCIONESWhereUniqueInput[];
    disconnect?: Prisma.REACCIONESWhereUniqueInput | Prisma.REACCIONESWhereUniqueInput[];
    delete?: Prisma.REACCIONESWhereUniqueInput | Prisma.REACCIONESWhereUniqueInput[];
    connect?: Prisma.REACCIONESWhereUniqueInput | Prisma.REACCIONESWhereUniqueInput[];
    update?: Prisma.REACCIONESUpdateWithWhereUniqueWithoutUSUARIOSInput | Prisma.REACCIONESUpdateWithWhereUniqueWithoutUSUARIOSInput[];
    updateMany?: Prisma.REACCIONESUpdateManyWithWhereWithoutUSUARIOSInput | Prisma.REACCIONESUpdateManyWithWhereWithoutUSUARIOSInput[];
    deleteMany?: Prisma.REACCIONESScalarWhereInput | Prisma.REACCIONESScalarWhereInput[];
};
export type REACCIONESUncheckedUpdateManyWithoutUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.REACCIONESCreateWithoutUSUARIOSInput, Prisma.REACCIONESUncheckedCreateWithoutUSUARIOSInput> | Prisma.REACCIONESCreateWithoutUSUARIOSInput[] | Prisma.REACCIONESUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.REACCIONESCreateOrConnectWithoutUSUARIOSInput | Prisma.REACCIONESCreateOrConnectWithoutUSUARIOSInput[];
    upsert?: Prisma.REACCIONESUpsertWithWhereUniqueWithoutUSUARIOSInput | Prisma.REACCIONESUpsertWithWhereUniqueWithoutUSUARIOSInput[];
    createMany?: Prisma.REACCIONESCreateManyUSUARIOSInputEnvelope;
    set?: Prisma.REACCIONESWhereUniqueInput | Prisma.REACCIONESWhereUniqueInput[];
    disconnect?: Prisma.REACCIONESWhereUniqueInput | Prisma.REACCIONESWhereUniqueInput[];
    delete?: Prisma.REACCIONESWhereUniqueInput | Prisma.REACCIONESWhereUniqueInput[];
    connect?: Prisma.REACCIONESWhereUniqueInput | Prisma.REACCIONESWhereUniqueInput[];
    update?: Prisma.REACCIONESUpdateWithWhereUniqueWithoutUSUARIOSInput | Prisma.REACCIONESUpdateWithWhereUniqueWithoutUSUARIOSInput[];
    updateMany?: Prisma.REACCIONESUpdateManyWithWhereWithoutUSUARIOSInput | Prisma.REACCIONESUpdateManyWithWhereWithoutUSUARIOSInput[];
    deleteMany?: Prisma.REACCIONESScalarWhereInput | Prisma.REACCIONESScalarWhereInput[];
};
export type REACCIONESCreateWithoutPUBLICACIONESInput = {
    tipo: string;
    creado_en?: Date | string;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutREACCIONESInput;
};
export type REACCIONESUncheckedCreateWithoutPUBLICACIONESInput = {
    usuario_id: string;
    tipo: string;
    creado_en?: Date | string;
};
export type REACCIONESCreateOrConnectWithoutPUBLICACIONESInput = {
    where: Prisma.REACCIONESWhereUniqueInput;
    create: Prisma.XOR<Prisma.REACCIONESCreateWithoutPUBLICACIONESInput, Prisma.REACCIONESUncheckedCreateWithoutPUBLICACIONESInput>;
};
export type REACCIONESCreateManyPUBLICACIONESInputEnvelope = {
    data: Prisma.REACCIONESCreateManyPUBLICACIONESInput | Prisma.REACCIONESCreateManyPUBLICACIONESInput[];
    skipDuplicates?: boolean;
};
export type REACCIONESUpsertWithWhereUniqueWithoutPUBLICACIONESInput = {
    where: Prisma.REACCIONESWhereUniqueInput;
    update: Prisma.XOR<Prisma.REACCIONESUpdateWithoutPUBLICACIONESInput, Prisma.REACCIONESUncheckedUpdateWithoutPUBLICACIONESInput>;
    create: Prisma.XOR<Prisma.REACCIONESCreateWithoutPUBLICACIONESInput, Prisma.REACCIONESUncheckedCreateWithoutPUBLICACIONESInput>;
};
export type REACCIONESUpdateWithWhereUniqueWithoutPUBLICACIONESInput = {
    where: Prisma.REACCIONESWhereUniqueInput;
    data: Prisma.XOR<Prisma.REACCIONESUpdateWithoutPUBLICACIONESInput, Prisma.REACCIONESUncheckedUpdateWithoutPUBLICACIONESInput>;
};
export type REACCIONESUpdateManyWithWhereWithoutPUBLICACIONESInput = {
    where: Prisma.REACCIONESScalarWhereInput;
    data: Prisma.XOR<Prisma.REACCIONESUpdateManyMutationInput, Prisma.REACCIONESUncheckedUpdateManyWithoutPUBLICACIONESInput>;
};
export type REACCIONESScalarWhereInput = {
    AND?: Prisma.REACCIONESScalarWhereInput | Prisma.REACCIONESScalarWhereInput[];
    OR?: Prisma.REACCIONESScalarWhereInput[];
    NOT?: Prisma.REACCIONESScalarWhereInput | Prisma.REACCIONESScalarWhereInput[];
    usuario_id?: Prisma.UuidFilter<"REACCIONES"> | string;
    publicacion_id?: Prisma.UuidFilter<"REACCIONES"> | string;
    tipo?: Prisma.StringFilter<"REACCIONES"> | string;
    creado_en?: Prisma.DateTimeFilter<"REACCIONES"> | Date | string;
};
export type REACCIONESCreateWithoutUSUARIOSInput = {
    tipo: string;
    creado_en?: Date | string;
    PUBLICACIONES: Prisma.PUBLICACIONESCreateNestedOneWithoutREACCIONESInput;
};
export type REACCIONESUncheckedCreateWithoutUSUARIOSInput = {
    publicacion_id: string;
    tipo: string;
    creado_en?: Date | string;
};
export type REACCIONESCreateOrConnectWithoutUSUARIOSInput = {
    where: Prisma.REACCIONESWhereUniqueInput;
    create: Prisma.XOR<Prisma.REACCIONESCreateWithoutUSUARIOSInput, Prisma.REACCIONESUncheckedCreateWithoutUSUARIOSInput>;
};
export type REACCIONESCreateManyUSUARIOSInputEnvelope = {
    data: Prisma.REACCIONESCreateManyUSUARIOSInput | Prisma.REACCIONESCreateManyUSUARIOSInput[];
    skipDuplicates?: boolean;
};
export type REACCIONESUpsertWithWhereUniqueWithoutUSUARIOSInput = {
    where: Prisma.REACCIONESWhereUniqueInput;
    update: Prisma.XOR<Prisma.REACCIONESUpdateWithoutUSUARIOSInput, Prisma.REACCIONESUncheckedUpdateWithoutUSUARIOSInput>;
    create: Prisma.XOR<Prisma.REACCIONESCreateWithoutUSUARIOSInput, Prisma.REACCIONESUncheckedCreateWithoutUSUARIOSInput>;
};
export type REACCIONESUpdateWithWhereUniqueWithoutUSUARIOSInput = {
    where: Prisma.REACCIONESWhereUniqueInput;
    data: Prisma.XOR<Prisma.REACCIONESUpdateWithoutUSUARIOSInput, Prisma.REACCIONESUncheckedUpdateWithoutUSUARIOSInput>;
};
export type REACCIONESUpdateManyWithWhereWithoutUSUARIOSInput = {
    where: Prisma.REACCIONESScalarWhereInput;
    data: Prisma.XOR<Prisma.REACCIONESUpdateManyMutationInput, Prisma.REACCIONESUncheckedUpdateManyWithoutUSUARIOSInput>;
};
export type REACCIONESCreateManyPUBLICACIONESInput = {
    usuario_id: string;
    tipo: string;
    creado_en?: Date | string;
};
export type REACCIONESUpdateWithoutPUBLICACIONESInput = {
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutREACCIONESNestedInput;
};
export type REACCIONESUncheckedUpdateWithoutPUBLICACIONESInput = {
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type REACCIONESUncheckedUpdateManyWithoutPUBLICACIONESInput = {
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type REACCIONESCreateManyUSUARIOSInput = {
    publicacion_id: string;
    tipo: string;
    creado_en?: Date | string;
};
export type REACCIONESUpdateWithoutUSUARIOSInput = {
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneRequiredWithoutREACCIONESNestedInput;
};
export type REACCIONESUncheckedUpdateWithoutUSUARIOSInput = {
    publicacion_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type REACCIONESUncheckedUpdateManyWithoutUSUARIOSInput = {
    publicacion_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type REACCIONESSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    usuario_id?: boolean;
    publicacion_id?: boolean;
    tipo?: boolean;
    creado_en?: boolean;
    PUBLICACIONES?: boolean | Prisma.PUBLICACIONESDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rEACCIONES"]>;
export type REACCIONESSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    usuario_id?: boolean;
    publicacion_id?: boolean;
    tipo?: boolean;
    creado_en?: boolean;
    PUBLICACIONES?: boolean | Prisma.PUBLICACIONESDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rEACCIONES"]>;
export type REACCIONESSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    usuario_id?: boolean;
    publicacion_id?: boolean;
    tipo?: boolean;
    creado_en?: boolean;
    PUBLICACIONES?: boolean | Prisma.PUBLICACIONESDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rEACCIONES"]>;
export type REACCIONESSelectScalar = {
    usuario_id?: boolean;
    publicacion_id?: boolean;
    tipo?: boolean;
    creado_en?: boolean;
};
export type REACCIONESOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"usuario_id" | "publicacion_id" | "tipo" | "creado_en", ExtArgs["result"]["rEACCIONES"]>;
export type REACCIONESInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    PUBLICACIONES?: boolean | Prisma.PUBLICACIONESDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type REACCIONESIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    PUBLICACIONES?: boolean | Prisma.PUBLICACIONESDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type REACCIONESIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    PUBLICACIONES?: boolean | Prisma.PUBLICACIONESDefaultArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type $REACCIONESPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "REACCIONES";
    objects: {
        PUBLICACIONES: Prisma.$PUBLICACIONESPayload<ExtArgs>;
        USUARIOS: Prisma.$USUARIOSPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        usuario_id: string;
        publicacion_id: string;
        tipo: string;
        creado_en: Date;
    }, ExtArgs["result"]["rEACCIONES"]>;
    composites: {};
};
export type REACCIONESGetPayload<S extends boolean | null | undefined | REACCIONESDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$REACCIONESPayload, S>;
export type REACCIONESCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<REACCIONESFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: REACCIONESCountAggregateInputType | true;
};
export interface REACCIONESDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['REACCIONES'];
        meta: {
            name: 'REACCIONES';
        };
    };
    findUnique<T extends REACCIONESFindUniqueArgs>(args: Prisma.SelectSubset<T, REACCIONESFindUniqueArgs<ExtArgs>>): Prisma.Prisma__REACCIONESClient<runtime.Types.Result.GetResult<Prisma.$REACCIONESPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends REACCIONESFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, REACCIONESFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__REACCIONESClient<runtime.Types.Result.GetResult<Prisma.$REACCIONESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends REACCIONESFindFirstArgs>(args?: Prisma.SelectSubset<T, REACCIONESFindFirstArgs<ExtArgs>>): Prisma.Prisma__REACCIONESClient<runtime.Types.Result.GetResult<Prisma.$REACCIONESPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends REACCIONESFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, REACCIONESFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__REACCIONESClient<runtime.Types.Result.GetResult<Prisma.$REACCIONESPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends REACCIONESFindManyArgs>(args?: Prisma.SelectSubset<T, REACCIONESFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$REACCIONESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends REACCIONESCreateArgs>(args: Prisma.SelectSubset<T, REACCIONESCreateArgs<ExtArgs>>): Prisma.Prisma__REACCIONESClient<runtime.Types.Result.GetResult<Prisma.$REACCIONESPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends REACCIONESCreateManyArgs>(args?: Prisma.SelectSubset<T, REACCIONESCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends REACCIONESCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, REACCIONESCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$REACCIONESPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends REACCIONESDeleteArgs>(args: Prisma.SelectSubset<T, REACCIONESDeleteArgs<ExtArgs>>): Prisma.Prisma__REACCIONESClient<runtime.Types.Result.GetResult<Prisma.$REACCIONESPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends REACCIONESUpdateArgs>(args: Prisma.SelectSubset<T, REACCIONESUpdateArgs<ExtArgs>>): Prisma.Prisma__REACCIONESClient<runtime.Types.Result.GetResult<Prisma.$REACCIONESPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends REACCIONESDeleteManyArgs>(args?: Prisma.SelectSubset<T, REACCIONESDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends REACCIONESUpdateManyArgs>(args: Prisma.SelectSubset<T, REACCIONESUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends REACCIONESUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, REACCIONESUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$REACCIONESPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends REACCIONESUpsertArgs>(args: Prisma.SelectSubset<T, REACCIONESUpsertArgs<ExtArgs>>): Prisma.Prisma__REACCIONESClient<runtime.Types.Result.GetResult<Prisma.$REACCIONESPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends REACCIONESCountArgs>(args?: Prisma.Subset<T, REACCIONESCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], REACCIONESCountAggregateOutputType> : number>;
    aggregate<T extends REACCIONESAggregateArgs>(args: Prisma.Subset<T, REACCIONESAggregateArgs>): Prisma.PrismaPromise<GetREACCIONESAggregateType<T>>;
    groupBy<T extends REACCIONESGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: REACCIONESGroupByArgs['orderBy'];
    } : {
        orderBy?: REACCIONESGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, REACCIONESGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetREACCIONESGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: REACCIONESFieldRefs;
}
export interface Prisma__REACCIONESClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    PUBLICACIONES<T extends Prisma.PUBLICACIONESDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PUBLICACIONESDefaultArgs<ExtArgs>>): Prisma.Prisma__PUBLICACIONESClient<runtime.Types.Result.GetResult<Prisma.$PUBLICACIONESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    USUARIOS<T extends Prisma.USUARIOSDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.USUARIOSDefaultArgs<ExtArgs>>): Prisma.Prisma__USUARIOSClient<runtime.Types.Result.GetResult<Prisma.$USUARIOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface REACCIONESFieldRefs {
    readonly usuario_id: Prisma.FieldRef<"REACCIONES", 'String'>;
    readonly publicacion_id: Prisma.FieldRef<"REACCIONES", 'String'>;
    readonly tipo: Prisma.FieldRef<"REACCIONES", 'String'>;
    readonly creado_en: Prisma.FieldRef<"REACCIONES", 'DateTime'>;
}
export type REACCIONESFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REACCIONESSelect<ExtArgs> | null;
    omit?: Prisma.REACCIONESOmit<ExtArgs> | null;
    include?: Prisma.REACCIONESInclude<ExtArgs> | null;
    where: Prisma.REACCIONESWhereUniqueInput;
};
export type REACCIONESFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REACCIONESSelect<ExtArgs> | null;
    omit?: Prisma.REACCIONESOmit<ExtArgs> | null;
    include?: Prisma.REACCIONESInclude<ExtArgs> | null;
    where: Prisma.REACCIONESWhereUniqueInput;
};
export type REACCIONESFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REACCIONESSelect<ExtArgs> | null;
    omit?: Prisma.REACCIONESOmit<ExtArgs> | null;
    include?: Prisma.REACCIONESInclude<ExtArgs> | null;
    where?: Prisma.REACCIONESWhereInput;
    orderBy?: Prisma.REACCIONESOrderByWithRelationInput | Prisma.REACCIONESOrderByWithRelationInput[];
    cursor?: Prisma.REACCIONESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.REACCIONESScalarFieldEnum | Prisma.REACCIONESScalarFieldEnum[];
};
export type REACCIONESFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REACCIONESSelect<ExtArgs> | null;
    omit?: Prisma.REACCIONESOmit<ExtArgs> | null;
    include?: Prisma.REACCIONESInclude<ExtArgs> | null;
    where?: Prisma.REACCIONESWhereInput;
    orderBy?: Prisma.REACCIONESOrderByWithRelationInput | Prisma.REACCIONESOrderByWithRelationInput[];
    cursor?: Prisma.REACCIONESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.REACCIONESScalarFieldEnum | Prisma.REACCIONESScalarFieldEnum[];
};
export type REACCIONESFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REACCIONESSelect<ExtArgs> | null;
    omit?: Prisma.REACCIONESOmit<ExtArgs> | null;
    include?: Prisma.REACCIONESInclude<ExtArgs> | null;
    where?: Prisma.REACCIONESWhereInput;
    orderBy?: Prisma.REACCIONESOrderByWithRelationInput | Prisma.REACCIONESOrderByWithRelationInput[];
    cursor?: Prisma.REACCIONESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.REACCIONESScalarFieldEnum | Prisma.REACCIONESScalarFieldEnum[];
};
export type REACCIONESCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REACCIONESSelect<ExtArgs> | null;
    omit?: Prisma.REACCIONESOmit<ExtArgs> | null;
    include?: Prisma.REACCIONESInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.REACCIONESCreateInput, Prisma.REACCIONESUncheckedCreateInput>;
};
export type REACCIONESCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.REACCIONESCreateManyInput | Prisma.REACCIONESCreateManyInput[];
    skipDuplicates?: boolean;
};
export type REACCIONESCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REACCIONESSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.REACCIONESOmit<ExtArgs> | null;
    data: Prisma.REACCIONESCreateManyInput | Prisma.REACCIONESCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.REACCIONESIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type REACCIONESUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REACCIONESSelect<ExtArgs> | null;
    omit?: Prisma.REACCIONESOmit<ExtArgs> | null;
    include?: Prisma.REACCIONESInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.REACCIONESUpdateInput, Prisma.REACCIONESUncheckedUpdateInput>;
    where: Prisma.REACCIONESWhereUniqueInput;
};
export type REACCIONESUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.REACCIONESUpdateManyMutationInput, Prisma.REACCIONESUncheckedUpdateManyInput>;
    where?: Prisma.REACCIONESWhereInput;
    limit?: number;
};
export type REACCIONESUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REACCIONESSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.REACCIONESOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.REACCIONESUpdateManyMutationInput, Prisma.REACCIONESUncheckedUpdateManyInput>;
    where?: Prisma.REACCIONESWhereInput;
    limit?: number;
    include?: Prisma.REACCIONESIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type REACCIONESUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REACCIONESSelect<ExtArgs> | null;
    omit?: Prisma.REACCIONESOmit<ExtArgs> | null;
    include?: Prisma.REACCIONESInclude<ExtArgs> | null;
    where: Prisma.REACCIONESWhereUniqueInput;
    create: Prisma.XOR<Prisma.REACCIONESCreateInput, Prisma.REACCIONESUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.REACCIONESUpdateInput, Prisma.REACCIONESUncheckedUpdateInput>;
};
export type REACCIONESDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REACCIONESSelect<ExtArgs> | null;
    omit?: Prisma.REACCIONESOmit<ExtArgs> | null;
    include?: Prisma.REACCIONESInclude<ExtArgs> | null;
    where: Prisma.REACCIONESWhereUniqueInput;
};
export type REACCIONESDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.REACCIONESWhereInput;
    limit?: number;
};
export type REACCIONESDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REACCIONESSelect<ExtArgs> | null;
    omit?: Prisma.REACCIONESOmit<ExtArgs> | null;
    include?: Prisma.REACCIONESInclude<ExtArgs> | null;
};
