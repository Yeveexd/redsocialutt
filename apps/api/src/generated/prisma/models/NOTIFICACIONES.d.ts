import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type NOTIFICACIONESModel = runtime.Types.Result.DefaultSelection<Prisma.$NOTIFICACIONESPayload>;
export type AggregateNOTIFICACIONES = {
    _count: NOTIFICACIONESCountAggregateOutputType | null;
    _min: NOTIFICACIONESMinAggregateOutputType | null;
    _max: NOTIFICACIONESMaxAggregateOutputType | null;
};
export type NOTIFICACIONESMinAggregateOutputType = {
    id: string | null;
    usuario_id: string | null;
    actor_id: string | null;
    tipo: string | null;
    aviso_id: string | null;
    publicacion_id: string | null;
    leida: boolean | null;
    creado_en: Date | null;
};
export type NOTIFICACIONESMaxAggregateOutputType = {
    id: string | null;
    usuario_id: string | null;
    actor_id: string | null;
    tipo: string | null;
    aviso_id: string | null;
    publicacion_id: string | null;
    leida: boolean | null;
    creado_en: Date | null;
};
export type NOTIFICACIONESCountAggregateOutputType = {
    id: number;
    usuario_id: number;
    actor_id: number;
    tipo: number;
    aviso_id: number;
    publicacion_id: number;
    leida: number;
    creado_en: number;
    _all: number;
};
export type NOTIFICACIONESMinAggregateInputType = {
    id?: true;
    usuario_id?: true;
    actor_id?: true;
    tipo?: true;
    aviso_id?: true;
    publicacion_id?: true;
    leida?: true;
    creado_en?: true;
};
export type NOTIFICACIONESMaxAggregateInputType = {
    id?: true;
    usuario_id?: true;
    actor_id?: true;
    tipo?: true;
    aviso_id?: true;
    publicacion_id?: true;
    leida?: true;
    creado_en?: true;
};
export type NOTIFICACIONESCountAggregateInputType = {
    id?: true;
    usuario_id?: true;
    actor_id?: true;
    tipo?: true;
    aviso_id?: true;
    publicacion_id?: true;
    leida?: true;
    creado_en?: true;
    _all?: true;
};
export type NOTIFICACIONESAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NOTIFICACIONESWhereInput;
    orderBy?: Prisma.NOTIFICACIONESOrderByWithRelationInput | Prisma.NOTIFICACIONESOrderByWithRelationInput[];
    cursor?: Prisma.NOTIFICACIONESWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NOTIFICACIONESCountAggregateInputType;
    _min?: NOTIFICACIONESMinAggregateInputType;
    _max?: NOTIFICACIONESMaxAggregateInputType;
};
export type GetNOTIFICACIONESAggregateType<T extends NOTIFICACIONESAggregateArgs> = {
    [P in keyof T & keyof AggregateNOTIFICACIONES]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNOTIFICACIONES[P]> : Prisma.GetScalarType<T[P], AggregateNOTIFICACIONES[P]>;
};
export type NOTIFICACIONESGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NOTIFICACIONESWhereInput;
    orderBy?: Prisma.NOTIFICACIONESOrderByWithAggregationInput | Prisma.NOTIFICACIONESOrderByWithAggregationInput[];
    by: Prisma.NOTIFICACIONESScalarFieldEnum[] | Prisma.NOTIFICACIONESScalarFieldEnum;
    having?: Prisma.NOTIFICACIONESScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NOTIFICACIONESCountAggregateInputType | true;
    _min?: NOTIFICACIONESMinAggregateInputType;
    _max?: NOTIFICACIONESMaxAggregateInputType;
};
export type NOTIFICACIONESGroupByOutputType = {
    id: string;
    usuario_id: string;
    actor_id: string | null;
    tipo: string;
    aviso_id: string | null;
    publicacion_id: string | null;
    leida: boolean;
    creado_en: Date;
    _count: NOTIFICACIONESCountAggregateOutputType | null;
    _min: NOTIFICACIONESMinAggregateOutputType | null;
    _max: NOTIFICACIONESMaxAggregateOutputType | null;
};
export type GetNOTIFICACIONESGroupByPayload<T extends NOTIFICACIONESGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NOTIFICACIONESGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NOTIFICACIONESGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NOTIFICACIONESGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NOTIFICACIONESGroupByOutputType[P]>;
}>>;
export type NOTIFICACIONESWhereInput = {
    AND?: Prisma.NOTIFICACIONESWhereInput | Prisma.NOTIFICACIONESWhereInput[];
    OR?: Prisma.NOTIFICACIONESWhereInput[];
    NOT?: Prisma.NOTIFICACIONESWhereInput | Prisma.NOTIFICACIONESWhereInput[];
    id?: Prisma.UuidFilter<"NOTIFICACIONES"> | string;
    usuario_id?: Prisma.UuidFilter<"NOTIFICACIONES"> | string;
    actor_id?: Prisma.UuidNullableFilter<"NOTIFICACIONES"> | string | null;
    tipo?: Prisma.StringFilter<"NOTIFICACIONES"> | string;
    aviso_id?: Prisma.UuidNullableFilter<"NOTIFICACIONES"> | string | null;
    publicacion_id?: Prisma.UuidNullableFilter<"NOTIFICACIONES"> | string | null;
    leida?: Prisma.BoolFilter<"NOTIFICACIONES"> | boolean;
    creado_en?: Prisma.DateTimeFilter<"NOTIFICACIONES"> | Date | string;
    USUARIOS_NOTIFICACIONES_actor_idToUSUARIOS?: Prisma.XOR<Prisma.USUARIOSNullableScalarRelationFilter, Prisma.USUARIOSWhereInput> | null;
    AVISOS?: Prisma.XOR<Prisma.AVISOSNullableScalarRelationFilter, Prisma.AVISOSWhereInput> | null;
    PUBLICACIONES?: Prisma.XOR<Prisma.PUBLICACIONESNullableScalarRelationFilter, Prisma.PUBLICACIONESWhereInput> | null;
    USUARIOS_NOTIFICACIONES_usuario_idToUSUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
};
export type NOTIFICACIONESOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    actor_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    aviso_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    leida?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    USUARIOS_NOTIFICACIONES_actor_idToUSUARIOS?: Prisma.USUARIOSOrderByWithRelationInput;
    AVISOS?: Prisma.AVISOSOrderByWithRelationInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESOrderByWithRelationInput;
    USUARIOS_NOTIFICACIONES_usuario_idToUSUARIOS?: Prisma.USUARIOSOrderByWithRelationInput;
};
export type NOTIFICACIONESWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.NOTIFICACIONESWhereInput | Prisma.NOTIFICACIONESWhereInput[];
    OR?: Prisma.NOTIFICACIONESWhereInput[];
    NOT?: Prisma.NOTIFICACIONESWhereInput | Prisma.NOTIFICACIONESWhereInput[];
    usuario_id?: Prisma.UuidFilter<"NOTIFICACIONES"> | string;
    actor_id?: Prisma.UuidNullableFilter<"NOTIFICACIONES"> | string | null;
    tipo?: Prisma.StringFilter<"NOTIFICACIONES"> | string;
    aviso_id?: Prisma.UuidNullableFilter<"NOTIFICACIONES"> | string | null;
    publicacion_id?: Prisma.UuidNullableFilter<"NOTIFICACIONES"> | string | null;
    leida?: Prisma.BoolFilter<"NOTIFICACIONES"> | boolean;
    creado_en?: Prisma.DateTimeFilter<"NOTIFICACIONES"> | Date | string;
    USUARIOS_NOTIFICACIONES_actor_idToUSUARIOS?: Prisma.XOR<Prisma.USUARIOSNullableScalarRelationFilter, Prisma.USUARIOSWhereInput> | null;
    AVISOS?: Prisma.XOR<Prisma.AVISOSNullableScalarRelationFilter, Prisma.AVISOSWhereInput> | null;
    PUBLICACIONES?: Prisma.XOR<Prisma.PUBLICACIONESNullableScalarRelationFilter, Prisma.PUBLICACIONESWhereInput> | null;
    USUARIOS_NOTIFICACIONES_usuario_idToUSUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
}, "id">;
export type NOTIFICACIONESOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    actor_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    aviso_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    leida?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    _count?: Prisma.NOTIFICACIONESCountOrderByAggregateInput;
    _max?: Prisma.NOTIFICACIONESMaxOrderByAggregateInput;
    _min?: Prisma.NOTIFICACIONESMinOrderByAggregateInput;
};
export type NOTIFICACIONESScalarWhereWithAggregatesInput = {
    AND?: Prisma.NOTIFICACIONESScalarWhereWithAggregatesInput | Prisma.NOTIFICACIONESScalarWhereWithAggregatesInput[];
    OR?: Prisma.NOTIFICACIONESScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NOTIFICACIONESScalarWhereWithAggregatesInput | Prisma.NOTIFICACIONESScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"NOTIFICACIONES"> | string;
    usuario_id?: Prisma.UuidWithAggregatesFilter<"NOTIFICACIONES"> | string;
    actor_id?: Prisma.UuidNullableWithAggregatesFilter<"NOTIFICACIONES"> | string | null;
    tipo?: Prisma.StringWithAggregatesFilter<"NOTIFICACIONES"> | string;
    aviso_id?: Prisma.UuidNullableWithAggregatesFilter<"NOTIFICACIONES"> | string | null;
    publicacion_id?: Prisma.UuidNullableWithAggregatesFilter<"NOTIFICACIONES"> | string | null;
    leida?: Prisma.BoolWithAggregatesFilter<"NOTIFICACIONES"> | boolean;
    creado_en?: Prisma.DateTimeWithAggregatesFilter<"NOTIFICACIONES"> | Date | string;
};
export type NOTIFICACIONESCreateInput = {
    id?: string;
    tipo: string;
    leida?: boolean;
    creado_en?: Date | string;
    USUARIOS_NOTIFICACIONES_actor_idToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutNOTIFICACIONES_NOTIFICACIONES_actor_idToUSUARIOSInput;
    AVISOS?: Prisma.AVISOSCreateNestedOneWithoutNOTIFICACIONESInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedOneWithoutNOTIFICACIONESInput;
    USUARIOS_NOTIFICACIONES_usuario_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutNOTIFICACIONES_NOTIFICACIONES_usuario_idToUSUARIOSInput;
};
export type NOTIFICACIONESUncheckedCreateInput = {
    id?: string;
    usuario_id: string;
    actor_id?: string | null;
    tipo: string;
    aviso_id?: string | null;
    publicacion_id?: string | null;
    leida?: boolean;
    creado_en?: Date | string;
};
export type NOTIFICACIONESUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    leida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    USUARIOS_NOTIFICACIONES_actor_idToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutNOTIFICACIONES_NOTIFICACIONES_actor_idToUSUARIOSNestedInput;
    AVISOS?: Prisma.AVISOSUpdateOneWithoutNOTIFICACIONESNestedInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneWithoutNOTIFICACIONESNestedInput;
    USUARIOS_NOTIFICACIONES_usuario_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutNOTIFICACIONES_NOTIFICACIONES_usuario_idToUSUARIOSNestedInput;
};
export type NOTIFICACIONESUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    actor_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    aviso_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NOTIFICACIONESCreateManyInput = {
    id?: string;
    usuario_id: string;
    actor_id?: string | null;
    tipo: string;
    aviso_id?: string | null;
    publicacion_id?: string | null;
    leida?: boolean;
    creado_en?: Date | string;
};
export type NOTIFICACIONESUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    leida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NOTIFICACIONESUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    actor_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    aviso_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NOTIFICACIONESListRelationFilter = {
    every?: Prisma.NOTIFICACIONESWhereInput;
    some?: Prisma.NOTIFICACIONESWhereInput;
    none?: Prisma.NOTIFICACIONESWhereInput;
};
export type NOTIFICACIONESOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NOTIFICACIONESCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    actor_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    aviso_id?: Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrder;
    leida?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
};
export type NOTIFICACIONESMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    actor_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    aviso_id?: Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrder;
    leida?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
};
export type NOTIFICACIONESMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    actor_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    aviso_id?: Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrder;
    leida?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
};
export type NOTIFICACIONESCreateNestedManyWithoutAVISOSInput = {
    create?: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutAVISOSInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutAVISOSInput> | Prisma.NOTIFICACIONESCreateWithoutAVISOSInput[] | Prisma.NOTIFICACIONESUncheckedCreateWithoutAVISOSInput[];
    connectOrCreate?: Prisma.NOTIFICACIONESCreateOrConnectWithoutAVISOSInput | Prisma.NOTIFICACIONESCreateOrConnectWithoutAVISOSInput[];
    createMany?: Prisma.NOTIFICACIONESCreateManyAVISOSInputEnvelope;
    connect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
};
export type NOTIFICACIONESUncheckedCreateNestedManyWithoutAVISOSInput = {
    create?: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutAVISOSInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutAVISOSInput> | Prisma.NOTIFICACIONESCreateWithoutAVISOSInput[] | Prisma.NOTIFICACIONESUncheckedCreateWithoutAVISOSInput[];
    connectOrCreate?: Prisma.NOTIFICACIONESCreateOrConnectWithoutAVISOSInput | Prisma.NOTIFICACIONESCreateOrConnectWithoutAVISOSInput[];
    createMany?: Prisma.NOTIFICACIONESCreateManyAVISOSInputEnvelope;
    connect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
};
export type NOTIFICACIONESUpdateManyWithoutAVISOSNestedInput = {
    create?: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutAVISOSInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutAVISOSInput> | Prisma.NOTIFICACIONESCreateWithoutAVISOSInput[] | Prisma.NOTIFICACIONESUncheckedCreateWithoutAVISOSInput[];
    connectOrCreate?: Prisma.NOTIFICACIONESCreateOrConnectWithoutAVISOSInput | Prisma.NOTIFICACIONESCreateOrConnectWithoutAVISOSInput[];
    upsert?: Prisma.NOTIFICACIONESUpsertWithWhereUniqueWithoutAVISOSInput | Prisma.NOTIFICACIONESUpsertWithWhereUniqueWithoutAVISOSInput[];
    createMany?: Prisma.NOTIFICACIONESCreateManyAVISOSInputEnvelope;
    set?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    disconnect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    delete?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    connect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    update?: Prisma.NOTIFICACIONESUpdateWithWhereUniqueWithoutAVISOSInput | Prisma.NOTIFICACIONESUpdateWithWhereUniqueWithoutAVISOSInput[];
    updateMany?: Prisma.NOTIFICACIONESUpdateManyWithWhereWithoutAVISOSInput | Prisma.NOTIFICACIONESUpdateManyWithWhereWithoutAVISOSInput[];
    deleteMany?: Prisma.NOTIFICACIONESScalarWhereInput | Prisma.NOTIFICACIONESScalarWhereInput[];
};
export type NOTIFICACIONESUncheckedUpdateManyWithoutAVISOSNestedInput = {
    create?: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutAVISOSInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutAVISOSInput> | Prisma.NOTIFICACIONESCreateWithoutAVISOSInput[] | Prisma.NOTIFICACIONESUncheckedCreateWithoutAVISOSInput[];
    connectOrCreate?: Prisma.NOTIFICACIONESCreateOrConnectWithoutAVISOSInput | Prisma.NOTIFICACIONESCreateOrConnectWithoutAVISOSInput[];
    upsert?: Prisma.NOTIFICACIONESUpsertWithWhereUniqueWithoutAVISOSInput | Prisma.NOTIFICACIONESUpsertWithWhereUniqueWithoutAVISOSInput[];
    createMany?: Prisma.NOTIFICACIONESCreateManyAVISOSInputEnvelope;
    set?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    disconnect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    delete?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    connect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    update?: Prisma.NOTIFICACIONESUpdateWithWhereUniqueWithoutAVISOSInput | Prisma.NOTIFICACIONESUpdateWithWhereUniqueWithoutAVISOSInput[];
    updateMany?: Prisma.NOTIFICACIONESUpdateManyWithWhereWithoutAVISOSInput | Prisma.NOTIFICACIONESUpdateManyWithWhereWithoutAVISOSInput[];
    deleteMany?: Prisma.NOTIFICACIONESScalarWhereInput | Prisma.NOTIFICACIONESScalarWhereInput[];
};
export type NOTIFICACIONESCreateNestedManyWithoutPUBLICACIONESInput = {
    create?: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutPUBLICACIONESInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.NOTIFICACIONESCreateWithoutPUBLICACIONESInput[] | Prisma.NOTIFICACIONESUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.NOTIFICACIONESCreateOrConnectWithoutPUBLICACIONESInput | Prisma.NOTIFICACIONESCreateOrConnectWithoutPUBLICACIONESInput[];
    createMany?: Prisma.NOTIFICACIONESCreateManyPUBLICACIONESInputEnvelope;
    connect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
};
export type NOTIFICACIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput = {
    create?: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutPUBLICACIONESInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.NOTIFICACIONESCreateWithoutPUBLICACIONESInput[] | Prisma.NOTIFICACIONESUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.NOTIFICACIONESCreateOrConnectWithoutPUBLICACIONESInput | Prisma.NOTIFICACIONESCreateOrConnectWithoutPUBLICACIONESInput[];
    createMany?: Prisma.NOTIFICACIONESCreateManyPUBLICACIONESInputEnvelope;
    connect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
};
export type NOTIFICACIONESUpdateManyWithoutPUBLICACIONESNestedInput = {
    create?: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutPUBLICACIONESInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.NOTIFICACIONESCreateWithoutPUBLICACIONESInput[] | Prisma.NOTIFICACIONESUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.NOTIFICACIONESCreateOrConnectWithoutPUBLICACIONESInput | Prisma.NOTIFICACIONESCreateOrConnectWithoutPUBLICACIONESInput[];
    upsert?: Prisma.NOTIFICACIONESUpsertWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.NOTIFICACIONESUpsertWithWhereUniqueWithoutPUBLICACIONESInput[];
    createMany?: Prisma.NOTIFICACIONESCreateManyPUBLICACIONESInputEnvelope;
    set?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    disconnect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    delete?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    connect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    update?: Prisma.NOTIFICACIONESUpdateWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.NOTIFICACIONESUpdateWithWhereUniqueWithoutPUBLICACIONESInput[];
    updateMany?: Prisma.NOTIFICACIONESUpdateManyWithWhereWithoutPUBLICACIONESInput | Prisma.NOTIFICACIONESUpdateManyWithWhereWithoutPUBLICACIONESInput[];
    deleteMany?: Prisma.NOTIFICACIONESScalarWhereInput | Prisma.NOTIFICACIONESScalarWhereInput[];
};
export type NOTIFICACIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput = {
    create?: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutPUBLICACIONESInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.NOTIFICACIONESCreateWithoutPUBLICACIONESInput[] | Prisma.NOTIFICACIONESUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.NOTIFICACIONESCreateOrConnectWithoutPUBLICACIONESInput | Prisma.NOTIFICACIONESCreateOrConnectWithoutPUBLICACIONESInput[];
    upsert?: Prisma.NOTIFICACIONESUpsertWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.NOTIFICACIONESUpsertWithWhereUniqueWithoutPUBLICACIONESInput[];
    createMany?: Prisma.NOTIFICACIONESCreateManyPUBLICACIONESInputEnvelope;
    set?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    disconnect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    delete?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    connect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    update?: Prisma.NOTIFICACIONESUpdateWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.NOTIFICACIONESUpdateWithWhereUniqueWithoutPUBLICACIONESInput[];
    updateMany?: Prisma.NOTIFICACIONESUpdateManyWithWhereWithoutPUBLICACIONESInput | Prisma.NOTIFICACIONESUpdateManyWithWhereWithoutPUBLICACIONESInput[];
    deleteMany?: Prisma.NOTIFICACIONESScalarWhereInput | Prisma.NOTIFICACIONESScalarWhereInput[];
};
export type NOTIFICACIONESCreateNestedManyWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput> | Prisma.NOTIFICACIONESCreateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput[] | Prisma.NOTIFICACIONESUncheckedCreateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.NOTIFICACIONESCreateOrConnectWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput | Prisma.NOTIFICACIONESCreateOrConnectWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput[];
    createMany?: Prisma.NOTIFICACIONESCreateManyUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInputEnvelope;
    connect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
};
export type NOTIFICACIONESCreateNestedManyWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput> | Prisma.NOTIFICACIONESCreateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput[] | Prisma.NOTIFICACIONESUncheckedCreateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.NOTIFICACIONESCreateOrConnectWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput | Prisma.NOTIFICACIONESCreateOrConnectWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput[];
    createMany?: Prisma.NOTIFICACIONESCreateManyUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInputEnvelope;
    connect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
};
export type NOTIFICACIONESUncheckedCreateNestedManyWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput> | Prisma.NOTIFICACIONESCreateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput[] | Prisma.NOTIFICACIONESUncheckedCreateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.NOTIFICACIONESCreateOrConnectWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput | Prisma.NOTIFICACIONESCreateOrConnectWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput[];
    createMany?: Prisma.NOTIFICACIONESCreateManyUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInputEnvelope;
    connect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
};
export type NOTIFICACIONESUncheckedCreateNestedManyWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput> | Prisma.NOTIFICACIONESCreateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput[] | Prisma.NOTIFICACIONESUncheckedCreateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.NOTIFICACIONESCreateOrConnectWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput | Prisma.NOTIFICACIONESCreateOrConnectWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput[];
    createMany?: Prisma.NOTIFICACIONESCreateManyUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInputEnvelope;
    connect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
};
export type NOTIFICACIONESUpdateManyWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput> | Prisma.NOTIFICACIONESCreateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput[] | Prisma.NOTIFICACIONESUncheckedCreateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.NOTIFICACIONESCreateOrConnectWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput | Prisma.NOTIFICACIONESCreateOrConnectWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput[];
    upsert?: Prisma.NOTIFICACIONESUpsertWithWhereUniqueWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput | Prisma.NOTIFICACIONESUpsertWithWhereUniqueWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput[];
    createMany?: Prisma.NOTIFICACIONESCreateManyUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInputEnvelope;
    set?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    disconnect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    delete?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    connect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    update?: Prisma.NOTIFICACIONESUpdateWithWhereUniqueWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput | Prisma.NOTIFICACIONESUpdateWithWhereUniqueWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput[];
    updateMany?: Prisma.NOTIFICACIONESUpdateManyWithWhereWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput | Prisma.NOTIFICACIONESUpdateManyWithWhereWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput[];
    deleteMany?: Prisma.NOTIFICACIONESScalarWhereInput | Prisma.NOTIFICACIONESScalarWhereInput[];
};
export type NOTIFICACIONESUpdateManyWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput> | Prisma.NOTIFICACIONESCreateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput[] | Prisma.NOTIFICACIONESUncheckedCreateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.NOTIFICACIONESCreateOrConnectWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput | Prisma.NOTIFICACIONESCreateOrConnectWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput[];
    upsert?: Prisma.NOTIFICACIONESUpsertWithWhereUniqueWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput | Prisma.NOTIFICACIONESUpsertWithWhereUniqueWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput[];
    createMany?: Prisma.NOTIFICACIONESCreateManyUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInputEnvelope;
    set?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    disconnect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    delete?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    connect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    update?: Prisma.NOTIFICACIONESUpdateWithWhereUniqueWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput | Prisma.NOTIFICACIONESUpdateWithWhereUniqueWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput[];
    updateMany?: Prisma.NOTIFICACIONESUpdateManyWithWhereWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput | Prisma.NOTIFICACIONESUpdateManyWithWhereWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput[];
    deleteMany?: Prisma.NOTIFICACIONESScalarWhereInput | Prisma.NOTIFICACIONESScalarWhereInput[];
};
export type NOTIFICACIONESUncheckedUpdateManyWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput> | Prisma.NOTIFICACIONESCreateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput[] | Prisma.NOTIFICACIONESUncheckedCreateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.NOTIFICACIONESCreateOrConnectWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput | Prisma.NOTIFICACIONESCreateOrConnectWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput[];
    upsert?: Prisma.NOTIFICACIONESUpsertWithWhereUniqueWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput | Prisma.NOTIFICACIONESUpsertWithWhereUniqueWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput[];
    createMany?: Prisma.NOTIFICACIONESCreateManyUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInputEnvelope;
    set?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    disconnect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    delete?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    connect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    update?: Prisma.NOTIFICACIONESUpdateWithWhereUniqueWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput | Prisma.NOTIFICACIONESUpdateWithWhereUniqueWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput[];
    updateMany?: Prisma.NOTIFICACIONESUpdateManyWithWhereWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput | Prisma.NOTIFICACIONESUpdateManyWithWhereWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput[];
    deleteMany?: Prisma.NOTIFICACIONESScalarWhereInput | Prisma.NOTIFICACIONESScalarWhereInput[];
};
export type NOTIFICACIONESUncheckedUpdateManyWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput> | Prisma.NOTIFICACIONESCreateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput[] | Prisma.NOTIFICACIONESUncheckedCreateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.NOTIFICACIONESCreateOrConnectWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput | Prisma.NOTIFICACIONESCreateOrConnectWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput[];
    upsert?: Prisma.NOTIFICACIONESUpsertWithWhereUniqueWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput | Prisma.NOTIFICACIONESUpsertWithWhereUniqueWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput[];
    createMany?: Prisma.NOTIFICACIONESCreateManyUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInputEnvelope;
    set?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    disconnect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    delete?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    connect?: Prisma.NOTIFICACIONESWhereUniqueInput | Prisma.NOTIFICACIONESWhereUniqueInput[];
    update?: Prisma.NOTIFICACIONESUpdateWithWhereUniqueWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput | Prisma.NOTIFICACIONESUpdateWithWhereUniqueWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput[];
    updateMany?: Prisma.NOTIFICACIONESUpdateManyWithWhereWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput | Prisma.NOTIFICACIONESUpdateManyWithWhereWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput[];
    deleteMany?: Prisma.NOTIFICACIONESScalarWhereInput | Prisma.NOTIFICACIONESScalarWhereInput[];
};
export type NOTIFICACIONESCreateWithoutAVISOSInput = {
    id?: string;
    tipo: string;
    leida?: boolean;
    creado_en?: Date | string;
    USUARIOS_NOTIFICACIONES_actor_idToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutNOTIFICACIONES_NOTIFICACIONES_actor_idToUSUARIOSInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedOneWithoutNOTIFICACIONESInput;
    USUARIOS_NOTIFICACIONES_usuario_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutNOTIFICACIONES_NOTIFICACIONES_usuario_idToUSUARIOSInput;
};
export type NOTIFICACIONESUncheckedCreateWithoutAVISOSInput = {
    id?: string;
    usuario_id: string;
    actor_id?: string | null;
    tipo: string;
    publicacion_id?: string | null;
    leida?: boolean;
    creado_en?: Date | string;
};
export type NOTIFICACIONESCreateOrConnectWithoutAVISOSInput = {
    where: Prisma.NOTIFICACIONESWhereUniqueInput;
    create: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutAVISOSInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutAVISOSInput>;
};
export type NOTIFICACIONESCreateManyAVISOSInputEnvelope = {
    data: Prisma.NOTIFICACIONESCreateManyAVISOSInput | Prisma.NOTIFICACIONESCreateManyAVISOSInput[];
    skipDuplicates?: boolean;
};
export type NOTIFICACIONESUpsertWithWhereUniqueWithoutAVISOSInput = {
    where: Prisma.NOTIFICACIONESWhereUniqueInput;
    update: Prisma.XOR<Prisma.NOTIFICACIONESUpdateWithoutAVISOSInput, Prisma.NOTIFICACIONESUncheckedUpdateWithoutAVISOSInput>;
    create: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutAVISOSInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutAVISOSInput>;
};
export type NOTIFICACIONESUpdateWithWhereUniqueWithoutAVISOSInput = {
    where: Prisma.NOTIFICACIONESWhereUniqueInput;
    data: Prisma.XOR<Prisma.NOTIFICACIONESUpdateWithoutAVISOSInput, Prisma.NOTIFICACIONESUncheckedUpdateWithoutAVISOSInput>;
};
export type NOTIFICACIONESUpdateManyWithWhereWithoutAVISOSInput = {
    where: Prisma.NOTIFICACIONESScalarWhereInput;
    data: Prisma.XOR<Prisma.NOTIFICACIONESUpdateManyMutationInput, Prisma.NOTIFICACIONESUncheckedUpdateManyWithoutAVISOSInput>;
};
export type NOTIFICACIONESScalarWhereInput = {
    AND?: Prisma.NOTIFICACIONESScalarWhereInput | Prisma.NOTIFICACIONESScalarWhereInput[];
    OR?: Prisma.NOTIFICACIONESScalarWhereInput[];
    NOT?: Prisma.NOTIFICACIONESScalarWhereInput | Prisma.NOTIFICACIONESScalarWhereInput[];
    id?: Prisma.UuidFilter<"NOTIFICACIONES"> | string;
    usuario_id?: Prisma.UuidFilter<"NOTIFICACIONES"> | string;
    actor_id?: Prisma.UuidNullableFilter<"NOTIFICACIONES"> | string | null;
    tipo?: Prisma.StringFilter<"NOTIFICACIONES"> | string;
    aviso_id?: Prisma.UuidNullableFilter<"NOTIFICACIONES"> | string | null;
    publicacion_id?: Prisma.UuidNullableFilter<"NOTIFICACIONES"> | string | null;
    leida?: Prisma.BoolFilter<"NOTIFICACIONES"> | boolean;
    creado_en?: Prisma.DateTimeFilter<"NOTIFICACIONES"> | Date | string;
};
export type NOTIFICACIONESCreateWithoutPUBLICACIONESInput = {
    id?: string;
    tipo: string;
    leida?: boolean;
    creado_en?: Date | string;
    USUARIOS_NOTIFICACIONES_actor_idToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutNOTIFICACIONES_NOTIFICACIONES_actor_idToUSUARIOSInput;
    AVISOS?: Prisma.AVISOSCreateNestedOneWithoutNOTIFICACIONESInput;
    USUARIOS_NOTIFICACIONES_usuario_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutNOTIFICACIONES_NOTIFICACIONES_usuario_idToUSUARIOSInput;
};
export type NOTIFICACIONESUncheckedCreateWithoutPUBLICACIONESInput = {
    id?: string;
    usuario_id: string;
    actor_id?: string | null;
    tipo: string;
    aviso_id?: string | null;
    leida?: boolean;
    creado_en?: Date | string;
};
export type NOTIFICACIONESCreateOrConnectWithoutPUBLICACIONESInput = {
    where: Prisma.NOTIFICACIONESWhereUniqueInput;
    create: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutPUBLICACIONESInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutPUBLICACIONESInput>;
};
export type NOTIFICACIONESCreateManyPUBLICACIONESInputEnvelope = {
    data: Prisma.NOTIFICACIONESCreateManyPUBLICACIONESInput | Prisma.NOTIFICACIONESCreateManyPUBLICACIONESInput[];
    skipDuplicates?: boolean;
};
export type NOTIFICACIONESUpsertWithWhereUniqueWithoutPUBLICACIONESInput = {
    where: Prisma.NOTIFICACIONESWhereUniqueInput;
    update: Prisma.XOR<Prisma.NOTIFICACIONESUpdateWithoutPUBLICACIONESInput, Prisma.NOTIFICACIONESUncheckedUpdateWithoutPUBLICACIONESInput>;
    create: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutPUBLICACIONESInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutPUBLICACIONESInput>;
};
export type NOTIFICACIONESUpdateWithWhereUniqueWithoutPUBLICACIONESInput = {
    where: Prisma.NOTIFICACIONESWhereUniqueInput;
    data: Prisma.XOR<Prisma.NOTIFICACIONESUpdateWithoutPUBLICACIONESInput, Prisma.NOTIFICACIONESUncheckedUpdateWithoutPUBLICACIONESInput>;
};
export type NOTIFICACIONESUpdateManyWithWhereWithoutPUBLICACIONESInput = {
    where: Prisma.NOTIFICACIONESScalarWhereInput;
    data: Prisma.XOR<Prisma.NOTIFICACIONESUpdateManyMutationInput, Prisma.NOTIFICACIONESUncheckedUpdateManyWithoutPUBLICACIONESInput>;
};
export type NOTIFICACIONESCreateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput = {
    id?: string;
    tipo: string;
    leida?: boolean;
    creado_en?: Date | string;
    AVISOS?: Prisma.AVISOSCreateNestedOneWithoutNOTIFICACIONESInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedOneWithoutNOTIFICACIONESInput;
    USUARIOS_NOTIFICACIONES_usuario_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutNOTIFICACIONES_NOTIFICACIONES_usuario_idToUSUARIOSInput;
};
export type NOTIFICACIONESUncheckedCreateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput = {
    id?: string;
    usuario_id: string;
    tipo: string;
    aviso_id?: string | null;
    publicacion_id?: string | null;
    leida?: boolean;
    creado_en?: Date | string;
};
export type NOTIFICACIONESCreateOrConnectWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput = {
    where: Prisma.NOTIFICACIONESWhereUniqueInput;
    create: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput>;
};
export type NOTIFICACIONESCreateManyUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInputEnvelope = {
    data: Prisma.NOTIFICACIONESCreateManyUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput | Prisma.NOTIFICACIONESCreateManyUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput[];
    skipDuplicates?: boolean;
};
export type NOTIFICACIONESCreateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput = {
    id?: string;
    tipo: string;
    leida?: boolean;
    creado_en?: Date | string;
    USUARIOS_NOTIFICACIONES_actor_idToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutNOTIFICACIONES_NOTIFICACIONES_actor_idToUSUARIOSInput;
    AVISOS?: Prisma.AVISOSCreateNestedOneWithoutNOTIFICACIONESInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedOneWithoutNOTIFICACIONESInput;
};
export type NOTIFICACIONESUncheckedCreateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput = {
    id?: string;
    actor_id?: string | null;
    tipo: string;
    aviso_id?: string | null;
    publicacion_id?: string | null;
    leida?: boolean;
    creado_en?: Date | string;
};
export type NOTIFICACIONESCreateOrConnectWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput = {
    where: Prisma.NOTIFICACIONESWhereUniqueInput;
    create: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput>;
};
export type NOTIFICACIONESCreateManyUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInputEnvelope = {
    data: Prisma.NOTIFICACIONESCreateManyUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput | Prisma.NOTIFICACIONESCreateManyUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput[];
    skipDuplicates?: boolean;
};
export type NOTIFICACIONESUpsertWithWhereUniqueWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput = {
    where: Prisma.NOTIFICACIONESWhereUniqueInput;
    update: Prisma.XOR<Prisma.NOTIFICACIONESUpdateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput, Prisma.NOTIFICACIONESUncheckedUpdateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput>;
    create: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput>;
};
export type NOTIFICACIONESUpdateWithWhereUniqueWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput = {
    where: Prisma.NOTIFICACIONESWhereUniqueInput;
    data: Prisma.XOR<Prisma.NOTIFICACIONESUpdateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput, Prisma.NOTIFICACIONESUncheckedUpdateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput>;
};
export type NOTIFICACIONESUpdateManyWithWhereWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput = {
    where: Prisma.NOTIFICACIONESScalarWhereInput;
    data: Prisma.XOR<Prisma.NOTIFICACIONESUpdateManyMutationInput, Prisma.NOTIFICACIONESUncheckedUpdateManyWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput>;
};
export type NOTIFICACIONESUpsertWithWhereUniqueWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput = {
    where: Prisma.NOTIFICACIONESWhereUniqueInput;
    update: Prisma.XOR<Prisma.NOTIFICACIONESUpdateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput, Prisma.NOTIFICACIONESUncheckedUpdateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput>;
    create: Prisma.XOR<Prisma.NOTIFICACIONESCreateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput, Prisma.NOTIFICACIONESUncheckedCreateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput>;
};
export type NOTIFICACIONESUpdateWithWhereUniqueWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput = {
    where: Prisma.NOTIFICACIONESWhereUniqueInput;
    data: Prisma.XOR<Prisma.NOTIFICACIONESUpdateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput, Prisma.NOTIFICACIONESUncheckedUpdateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput>;
};
export type NOTIFICACIONESUpdateManyWithWhereWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput = {
    where: Prisma.NOTIFICACIONESScalarWhereInput;
    data: Prisma.XOR<Prisma.NOTIFICACIONESUpdateManyMutationInput, Prisma.NOTIFICACIONESUncheckedUpdateManyWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput>;
};
export type NOTIFICACIONESCreateManyAVISOSInput = {
    id?: string;
    usuario_id: string;
    actor_id?: string | null;
    tipo: string;
    publicacion_id?: string | null;
    leida?: boolean;
    creado_en?: Date | string;
};
export type NOTIFICACIONESUpdateWithoutAVISOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    leida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    USUARIOS_NOTIFICACIONES_actor_idToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutNOTIFICACIONES_NOTIFICACIONES_actor_idToUSUARIOSNestedInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneWithoutNOTIFICACIONESNestedInput;
    USUARIOS_NOTIFICACIONES_usuario_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutNOTIFICACIONES_NOTIFICACIONES_usuario_idToUSUARIOSNestedInput;
};
export type NOTIFICACIONESUncheckedUpdateWithoutAVISOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    actor_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NOTIFICACIONESUncheckedUpdateManyWithoutAVISOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    actor_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NOTIFICACIONESCreateManyPUBLICACIONESInput = {
    id?: string;
    usuario_id: string;
    actor_id?: string | null;
    tipo: string;
    aviso_id?: string | null;
    leida?: boolean;
    creado_en?: Date | string;
};
export type NOTIFICACIONESUpdateWithoutPUBLICACIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    leida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    USUARIOS_NOTIFICACIONES_actor_idToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutNOTIFICACIONES_NOTIFICACIONES_actor_idToUSUARIOSNestedInput;
    AVISOS?: Prisma.AVISOSUpdateOneWithoutNOTIFICACIONESNestedInput;
    USUARIOS_NOTIFICACIONES_usuario_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutNOTIFICACIONES_NOTIFICACIONES_usuario_idToUSUARIOSNestedInput;
};
export type NOTIFICACIONESUncheckedUpdateWithoutPUBLICACIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    actor_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    aviso_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NOTIFICACIONESUncheckedUpdateManyWithoutPUBLICACIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    actor_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    aviso_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NOTIFICACIONESCreateManyUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput = {
    id?: string;
    usuario_id: string;
    tipo: string;
    aviso_id?: string | null;
    publicacion_id?: string | null;
    leida?: boolean;
    creado_en?: Date | string;
};
export type NOTIFICACIONESCreateManyUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput = {
    id?: string;
    actor_id?: string | null;
    tipo: string;
    aviso_id?: string | null;
    publicacion_id?: string | null;
    leida?: boolean;
    creado_en?: Date | string;
};
export type NOTIFICACIONESUpdateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    leida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    AVISOS?: Prisma.AVISOSUpdateOneWithoutNOTIFICACIONESNestedInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneWithoutNOTIFICACIONESNestedInput;
    USUARIOS_NOTIFICACIONES_usuario_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutNOTIFICACIONES_NOTIFICACIONES_usuario_idToUSUARIOSNestedInput;
};
export type NOTIFICACIONESUncheckedUpdateWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    aviso_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NOTIFICACIONESUncheckedUpdateManyWithoutUSUARIOS_NOTIFICACIONES_actor_idToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    aviso_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NOTIFICACIONESUpdateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    leida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    USUARIOS_NOTIFICACIONES_actor_idToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutNOTIFICACIONES_NOTIFICACIONES_actor_idToUSUARIOSNestedInput;
    AVISOS?: Prisma.AVISOSUpdateOneWithoutNOTIFICACIONESNestedInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneWithoutNOTIFICACIONESNestedInput;
};
export type NOTIFICACIONESUncheckedUpdateWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actor_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    aviso_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NOTIFICACIONESUncheckedUpdateManyWithoutUSUARIOS_NOTIFICACIONES_usuario_idToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actor_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    aviso_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    leida?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NOTIFICACIONESSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario_id?: boolean;
    actor_id?: boolean;
    tipo?: boolean;
    aviso_id?: boolean;
    publicacion_id?: boolean;
    leida?: boolean;
    creado_en?: boolean;
    USUARIOS_NOTIFICACIONES_actor_idToUSUARIOS?: boolean | Prisma.NOTIFICACIONES$USUARIOS_NOTIFICACIONES_actor_idToUSUARIOSArgs<ExtArgs>;
    AVISOS?: boolean | Prisma.NOTIFICACIONES$AVISOSArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.NOTIFICACIONES$PUBLICACIONESArgs<ExtArgs>;
    USUARIOS_NOTIFICACIONES_usuario_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["nOTIFICACIONES"]>;
export type NOTIFICACIONESSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario_id?: boolean;
    actor_id?: boolean;
    tipo?: boolean;
    aviso_id?: boolean;
    publicacion_id?: boolean;
    leida?: boolean;
    creado_en?: boolean;
    USUARIOS_NOTIFICACIONES_actor_idToUSUARIOS?: boolean | Prisma.NOTIFICACIONES$USUARIOS_NOTIFICACIONES_actor_idToUSUARIOSArgs<ExtArgs>;
    AVISOS?: boolean | Prisma.NOTIFICACIONES$AVISOSArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.NOTIFICACIONES$PUBLICACIONESArgs<ExtArgs>;
    USUARIOS_NOTIFICACIONES_usuario_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["nOTIFICACIONES"]>;
export type NOTIFICACIONESSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario_id?: boolean;
    actor_id?: boolean;
    tipo?: boolean;
    aviso_id?: boolean;
    publicacion_id?: boolean;
    leida?: boolean;
    creado_en?: boolean;
    USUARIOS_NOTIFICACIONES_actor_idToUSUARIOS?: boolean | Prisma.NOTIFICACIONES$USUARIOS_NOTIFICACIONES_actor_idToUSUARIOSArgs<ExtArgs>;
    AVISOS?: boolean | Prisma.NOTIFICACIONES$AVISOSArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.NOTIFICACIONES$PUBLICACIONESArgs<ExtArgs>;
    USUARIOS_NOTIFICACIONES_usuario_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["nOTIFICACIONES"]>;
export type NOTIFICACIONESSelectScalar = {
    id?: boolean;
    usuario_id?: boolean;
    actor_id?: boolean;
    tipo?: boolean;
    aviso_id?: boolean;
    publicacion_id?: boolean;
    leida?: boolean;
    creado_en?: boolean;
};
export type NOTIFICACIONESOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "usuario_id" | "actor_id" | "tipo" | "aviso_id" | "publicacion_id" | "leida" | "creado_en", ExtArgs["result"]["nOTIFICACIONES"]>;
export type NOTIFICACIONESInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USUARIOS_NOTIFICACIONES_actor_idToUSUARIOS?: boolean | Prisma.NOTIFICACIONES$USUARIOS_NOTIFICACIONES_actor_idToUSUARIOSArgs<ExtArgs>;
    AVISOS?: boolean | Prisma.NOTIFICACIONES$AVISOSArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.NOTIFICACIONES$PUBLICACIONESArgs<ExtArgs>;
    USUARIOS_NOTIFICACIONES_usuario_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type NOTIFICACIONESIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USUARIOS_NOTIFICACIONES_actor_idToUSUARIOS?: boolean | Prisma.NOTIFICACIONES$USUARIOS_NOTIFICACIONES_actor_idToUSUARIOSArgs<ExtArgs>;
    AVISOS?: boolean | Prisma.NOTIFICACIONES$AVISOSArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.NOTIFICACIONES$PUBLICACIONESArgs<ExtArgs>;
    USUARIOS_NOTIFICACIONES_usuario_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type NOTIFICACIONESIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USUARIOS_NOTIFICACIONES_actor_idToUSUARIOS?: boolean | Prisma.NOTIFICACIONES$USUARIOS_NOTIFICACIONES_actor_idToUSUARIOSArgs<ExtArgs>;
    AVISOS?: boolean | Prisma.NOTIFICACIONES$AVISOSArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.NOTIFICACIONES$PUBLICACIONESArgs<ExtArgs>;
    USUARIOS_NOTIFICACIONES_usuario_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type $NOTIFICACIONESPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "NOTIFICACIONES";
    objects: {
        USUARIOS_NOTIFICACIONES_actor_idToUSUARIOS: Prisma.$USUARIOSPayload<ExtArgs> | null;
        AVISOS: Prisma.$AVISOSPayload<ExtArgs> | null;
        PUBLICACIONES: Prisma.$PUBLICACIONESPayload<ExtArgs> | null;
        USUARIOS_NOTIFICACIONES_usuario_idToUSUARIOS: Prisma.$USUARIOSPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        usuario_id: string;
        actor_id: string | null;
        tipo: string;
        aviso_id: string | null;
        publicacion_id: string | null;
        leida: boolean;
        creado_en: Date;
    }, ExtArgs["result"]["nOTIFICACIONES"]>;
    composites: {};
};
export type NOTIFICACIONESGetPayload<S extends boolean | null | undefined | NOTIFICACIONESDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NOTIFICACIONESPayload, S>;
export type NOTIFICACIONESCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NOTIFICACIONESFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NOTIFICACIONESCountAggregateInputType | true;
};
export interface NOTIFICACIONESDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['NOTIFICACIONES'];
        meta: {
            name: 'NOTIFICACIONES';
        };
    };
    findUnique<T extends NOTIFICACIONESFindUniqueArgs>(args: Prisma.SelectSubset<T, NOTIFICACIONESFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NOTIFICACIONESClient<runtime.Types.Result.GetResult<Prisma.$NOTIFICACIONESPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends NOTIFICACIONESFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NOTIFICACIONESFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NOTIFICACIONESClient<runtime.Types.Result.GetResult<Prisma.$NOTIFICACIONESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends NOTIFICACIONESFindFirstArgs>(args?: Prisma.SelectSubset<T, NOTIFICACIONESFindFirstArgs<ExtArgs>>): Prisma.Prisma__NOTIFICACIONESClient<runtime.Types.Result.GetResult<Prisma.$NOTIFICACIONESPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends NOTIFICACIONESFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NOTIFICACIONESFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NOTIFICACIONESClient<runtime.Types.Result.GetResult<Prisma.$NOTIFICACIONESPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends NOTIFICACIONESFindManyArgs>(args?: Prisma.SelectSubset<T, NOTIFICACIONESFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NOTIFICACIONESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends NOTIFICACIONESCreateArgs>(args: Prisma.SelectSubset<T, NOTIFICACIONESCreateArgs<ExtArgs>>): Prisma.Prisma__NOTIFICACIONESClient<runtime.Types.Result.GetResult<Prisma.$NOTIFICACIONESPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends NOTIFICACIONESCreateManyArgs>(args?: Prisma.SelectSubset<T, NOTIFICACIONESCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends NOTIFICACIONESCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NOTIFICACIONESCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NOTIFICACIONESPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends NOTIFICACIONESDeleteArgs>(args: Prisma.SelectSubset<T, NOTIFICACIONESDeleteArgs<ExtArgs>>): Prisma.Prisma__NOTIFICACIONESClient<runtime.Types.Result.GetResult<Prisma.$NOTIFICACIONESPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends NOTIFICACIONESUpdateArgs>(args: Prisma.SelectSubset<T, NOTIFICACIONESUpdateArgs<ExtArgs>>): Prisma.Prisma__NOTIFICACIONESClient<runtime.Types.Result.GetResult<Prisma.$NOTIFICACIONESPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends NOTIFICACIONESDeleteManyArgs>(args?: Prisma.SelectSubset<T, NOTIFICACIONESDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends NOTIFICACIONESUpdateManyArgs>(args: Prisma.SelectSubset<T, NOTIFICACIONESUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends NOTIFICACIONESUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NOTIFICACIONESUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NOTIFICACIONESPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends NOTIFICACIONESUpsertArgs>(args: Prisma.SelectSubset<T, NOTIFICACIONESUpsertArgs<ExtArgs>>): Prisma.Prisma__NOTIFICACIONESClient<runtime.Types.Result.GetResult<Prisma.$NOTIFICACIONESPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends NOTIFICACIONESCountArgs>(args?: Prisma.Subset<T, NOTIFICACIONESCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NOTIFICACIONESCountAggregateOutputType> : number>;
    aggregate<T extends NOTIFICACIONESAggregateArgs>(args: Prisma.Subset<T, NOTIFICACIONESAggregateArgs>): Prisma.PrismaPromise<GetNOTIFICACIONESAggregateType<T>>;
    groupBy<T extends NOTIFICACIONESGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NOTIFICACIONESGroupByArgs['orderBy'];
    } : {
        orderBy?: NOTIFICACIONESGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NOTIFICACIONESGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNOTIFICACIONESGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: NOTIFICACIONESFieldRefs;
}
export interface Prisma__NOTIFICACIONESClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    USUARIOS_NOTIFICACIONES_actor_idToUSUARIOS<T extends Prisma.NOTIFICACIONES$USUARIOS_NOTIFICACIONES_actor_idToUSUARIOSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.NOTIFICACIONES$USUARIOS_NOTIFICACIONES_actor_idToUSUARIOSArgs<ExtArgs>>): Prisma.Prisma__USUARIOSClient<runtime.Types.Result.GetResult<Prisma.$USUARIOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    AVISOS<T extends Prisma.NOTIFICACIONES$AVISOSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.NOTIFICACIONES$AVISOSArgs<ExtArgs>>): Prisma.Prisma__AVISOSClient<runtime.Types.Result.GetResult<Prisma.$AVISOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    PUBLICACIONES<T extends Prisma.NOTIFICACIONES$PUBLICACIONESArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.NOTIFICACIONES$PUBLICACIONESArgs<ExtArgs>>): Prisma.Prisma__PUBLICACIONESClient<runtime.Types.Result.GetResult<Prisma.$PUBLICACIONESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    USUARIOS_NOTIFICACIONES_usuario_idToUSUARIOS<T extends Prisma.USUARIOSDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.USUARIOSDefaultArgs<ExtArgs>>): Prisma.Prisma__USUARIOSClient<runtime.Types.Result.GetResult<Prisma.$USUARIOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface NOTIFICACIONESFieldRefs {
    readonly id: Prisma.FieldRef<"NOTIFICACIONES", 'String'>;
    readonly usuario_id: Prisma.FieldRef<"NOTIFICACIONES", 'String'>;
    readonly actor_id: Prisma.FieldRef<"NOTIFICACIONES", 'String'>;
    readonly tipo: Prisma.FieldRef<"NOTIFICACIONES", 'String'>;
    readonly aviso_id: Prisma.FieldRef<"NOTIFICACIONES", 'String'>;
    readonly publicacion_id: Prisma.FieldRef<"NOTIFICACIONES", 'String'>;
    readonly leida: Prisma.FieldRef<"NOTIFICACIONES", 'Boolean'>;
    readonly creado_en: Prisma.FieldRef<"NOTIFICACIONES", 'DateTime'>;
}
export type NOTIFICACIONESFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NOTIFICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.NOTIFICACIONESOmit<ExtArgs> | null;
    include?: Prisma.NOTIFICACIONESInclude<ExtArgs> | null;
    where: Prisma.NOTIFICACIONESWhereUniqueInput;
};
export type NOTIFICACIONESFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NOTIFICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.NOTIFICACIONESOmit<ExtArgs> | null;
    include?: Prisma.NOTIFICACIONESInclude<ExtArgs> | null;
    where: Prisma.NOTIFICACIONESWhereUniqueInput;
};
export type NOTIFICACIONESFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NOTIFICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.NOTIFICACIONESOmit<ExtArgs> | null;
    include?: Prisma.NOTIFICACIONESInclude<ExtArgs> | null;
    where?: Prisma.NOTIFICACIONESWhereInput;
    orderBy?: Prisma.NOTIFICACIONESOrderByWithRelationInput | Prisma.NOTIFICACIONESOrderByWithRelationInput[];
    cursor?: Prisma.NOTIFICACIONESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NOTIFICACIONESScalarFieldEnum | Prisma.NOTIFICACIONESScalarFieldEnum[];
};
export type NOTIFICACIONESFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NOTIFICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.NOTIFICACIONESOmit<ExtArgs> | null;
    include?: Prisma.NOTIFICACIONESInclude<ExtArgs> | null;
    where?: Prisma.NOTIFICACIONESWhereInput;
    orderBy?: Prisma.NOTIFICACIONESOrderByWithRelationInput | Prisma.NOTIFICACIONESOrderByWithRelationInput[];
    cursor?: Prisma.NOTIFICACIONESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NOTIFICACIONESScalarFieldEnum | Prisma.NOTIFICACIONESScalarFieldEnum[];
};
export type NOTIFICACIONESFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NOTIFICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.NOTIFICACIONESOmit<ExtArgs> | null;
    include?: Prisma.NOTIFICACIONESInclude<ExtArgs> | null;
    where?: Prisma.NOTIFICACIONESWhereInput;
    orderBy?: Prisma.NOTIFICACIONESOrderByWithRelationInput | Prisma.NOTIFICACIONESOrderByWithRelationInput[];
    cursor?: Prisma.NOTIFICACIONESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NOTIFICACIONESScalarFieldEnum | Prisma.NOTIFICACIONESScalarFieldEnum[];
};
export type NOTIFICACIONESCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NOTIFICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.NOTIFICACIONESOmit<ExtArgs> | null;
    include?: Prisma.NOTIFICACIONESInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NOTIFICACIONESCreateInput, Prisma.NOTIFICACIONESUncheckedCreateInput>;
};
export type NOTIFICACIONESCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.NOTIFICACIONESCreateManyInput | Prisma.NOTIFICACIONESCreateManyInput[];
    skipDuplicates?: boolean;
};
export type NOTIFICACIONESCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NOTIFICACIONESSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NOTIFICACIONESOmit<ExtArgs> | null;
    data: Prisma.NOTIFICACIONESCreateManyInput | Prisma.NOTIFICACIONESCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.NOTIFICACIONESIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type NOTIFICACIONESUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NOTIFICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.NOTIFICACIONESOmit<ExtArgs> | null;
    include?: Prisma.NOTIFICACIONESInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NOTIFICACIONESUpdateInput, Prisma.NOTIFICACIONESUncheckedUpdateInput>;
    where: Prisma.NOTIFICACIONESWhereUniqueInput;
};
export type NOTIFICACIONESUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.NOTIFICACIONESUpdateManyMutationInput, Prisma.NOTIFICACIONESUncheckedUpdateManyInput>;
    where?: Prisma.NOTIFICACIONESWhereInput;
    limit?: number;
};
export type NOTIFICACIONESUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NOTIFICACIONESSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NOTIFICACIONESOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NOTIFICACIONESUpdateManyMutationInput, Prisma.NOTIFICACIONESUncheckedUpdateManyInput>;
    where?: Prisma.NOTIFICACIONESWhereInput;
    limit?: number;
    include?: Prisma.NOTIFICACIONESIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type NOTIFICACIONESUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NOTIFICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.NOTIFICACIONESOmit<ExtArgs> | null;
    include?: Prisma.NOTIFICACIONESInclude<ExtArgs> | null;
    where: Prisma.NOTIFICACIONESWhereUniqueInput;
    create: Prisma.XOR<Prisma.NOTIFICACIONESCreateInput, Prisma.NOTIFICACIONESUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.NOTIFICACIONESUpdateInput, Prisma.NOTIFICACIONESUncheckedUpdateInput>;
};
export type NOTIFICACIONESDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NOTIFICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.NOTIFICACIONESOmit<ExtArgs> | null;
    include?: Prisma.NOTIFICACIONESInclude<ExtArgs> | null;
    where: Prisma.NOTIFICACIONESWhereUniqueInput;
};
export type NOTIFICACIONESDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NOTIFICACIONESWhereInput;
    limit?: number;
};
export type NOTIFICACIONES$USUARIOS_NOTIFICACIONES_actor_idToUSUARIOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.USUARIOSSelect<ExtArgs> | null;
    omit?: Prisma.USUARIOSOmit<ExtArgs> | null;
    include?: Prisma.USUARIOSInclude<ExtArgs> | null;
    where?: Prisma.USUARIOSWhereInput;
};
export type NOTIFICACIONES$AVISOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AVISOSSelect<ExtArgs> | null;
    omit?: Prisma.AVISOSOmit<ExtArgs> | null;
    include?: Prisma.AVISOSInclude<ExtArgs> | null;
    where?: Prisma.AVISOSWhereInput;
};
export type NOTIFICACIONES$PUBLICACIONESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PUBLICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.PUBLICACIONESOmit<ExtArgs> | null;
    include?: Prisma.PUBLICACIONESInclude<ExtArgs> | null;
    where?: Prisma.PUBLICACIONESWhereInput;
};
export type NOTIFICACIONESDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NOTIFICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.NOTIFICACIONESOmit<ExtArgs> | null;
    include?: Prisma.NOTIFICACIONESInclude<ExtArgs> | null;
};
