import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SANCIONESModel = runtime.Types.Result.DefaultSelection<Prisma.$SANCIONESPayload>;
export type AggregateSANCIONES = {
    _count: SANCIONESCountAggregateOutputType | null;
    _min: SANCIONESMinAggregateOutputType | null;
    _max: SANCIONESMaxAggregateOutputType | null;
};
export type SANCIONESMinAggregateOutputType = {
    id: string | null;
    usuario_id: string | null;
    admin_id: string | null;
    reporte_id: string | null;
    tipo: string | null;
    motivo: string | null;
    inicia_en: Date | null;
    termina_en: Date | null;
    activa: boolean | null;
};
export type SANCIONESMaxAggregateOutputType = {
    id: string | null;
    usuario_id: string | null;
    admin_id: string | null;
    reporte_id: string | null;
    tipo: string | null;
    motivo: string | null;
    inicia_en: Date | null;
    termina_en: Date | null;
    activa: boolean | null;
};
export type SANCIONESCountAggregateOutputType = {
    id: number;
    usuario_id: number;
    admin_id: number;
    reporte_id: number;
    tipo: number;
    motivo: number;
    inicia_en: number;
    termina_en: number;
    activa: number;
    _all: number;
};
export type SANCIONESMinAggregateInputType = {
    id?: true;
    usuario_id?: true;
    admin_id?: true;
    reporte_id?: true;
    tipo?: true;
    motivo?: true;
    inicia_en?: true;
    termina_en?: true;
    activa?: true;
};
export type SANCIONESMaxAggregateInputType = {
    id?: true;
    usuario_id?: true;
    admin_id?: true;
    reporte_id?: true;
    tipo?: true;
    motivo?: true;
    inicia_en?: true;
    termina_en?: true;
    activa?: true;
};
export type SANCIONESCountAggregateInputType = {
    id?: true;
    usuario_id?: true;
    admin_id?: true;
    reporte_id?: true;
    tipo?: true;
    motivo?: true;
    inicia_en?: true;
    termina_en?: true;
    activa?: true;
    _all?: true;
};
export type SANCIONESAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SANCIONESWhereInput;
    orderBy?: Prisma.SANCIONESOrderByWithRelationInput | Prisma.SANCIONESOrderByWithRelationInput[];
    cursor?: Prisma.SANCIONESWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SANCIONESCountAggregateInputType;
    _min?: SANCIONESMinAggregateInputType;
    _max?: SANCIONESMaxAggregateInputType;
};
export type GetSANCIONESAggregateType<T extends SANCIONESAggregateArgs> = {
    [P in keyof T & keyof AggregateSANCIONES]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSANCIONES[P]> : Prisma.GetScalarType<T[P], AggregateSANCIONES[P]>;
};
export type SANCIONESGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SANCIONESWhereInput;
    orderBy?: Prisma.SANCIONESOrderByWithAggregationInput | Prisma.SANCIONESOrderByWithAggregationInput[];
    by: Prisma.SANCIONESScalarFieldEnum[] | Prisma.SANCIONESScalarFieldEnum;
    having?: Prisma.SANCIONESScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SANCIONESCountAggregateInputType | true;
    _min?: SANCIONESMinAggregateInputType;
    _max?: SANCIONESMaxAggregateInputType;
};
export type SANCIONESGroupByOutputType = {
    id: string;
    usuario_id: string;
    admin_id: string;
    reporte_id: string | null;
    tipo: string;
    motivo: string;
    inicia_en: Date;
    termina_en: Date | null;
    activa: boolean;
    _count: SANCIONESCountAggregateOutputType | null;
    _min: SANCIONESMinAggregateOutputType | null;
    _max: SANCIONESMaxAggregateOutputType | null;
};
export type GetSANCIONESGroupByPayload<T extends SANCIONESGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SANCIONESGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SANCIONESGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SANCIONESGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SANCIONESGroupByOutputType[P]>;
}>>;
export type SANCIONESWhereInput = {
    AND?: Prisma.SANCIONESWhereInput | Prisma.SANCIONESWhereInput[];
    OR?: Prisma.SANCIONESWhereInput[];
    NOT?: Prisma.SANCIONESWhereInput | Prisma.SANCIONESWhereInput[];
    id?: Prisma.UuidFilter<"SANCIONES"> | string;
    usuario_id?: Prisma.UuidFilter<"SANCIONES"> | string;
    admin_id?: Prisma.UuidFilter<"SANCIONES"> | string;
    reporte_id?: Prisma.UuidNullableFilter<"SANCIONES"> | string | null;
    tipo?: Prisma.StringFilter<"SANCIONES"> | string;
    motivo?: Prisma.StringFilter<"SANCIONES"> | string;
    inicia_en?: Prisma.DateTimeFilter<"SANCIONES"> | Date | string;
    termina_en?: Prisma.DateTimeNullableFilter<"SANCIONES"> | Date | string | null;
    activa?: Prisma.BoolFilter<"SANCIONES"> | boolean;
    USUARIOS_SANCIONES_admin_idToUSUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
    REPORTES?: Prisma.XOR<Prisma.REPORTESNullableScalarRelationFilter, Prisma.REPORTESWhereInput> | null;
    USUARIOS_SANCIONES_usuario_idToUSUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
};
export type SANCIONESOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    reporte_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    inicia_en?: Prisma.SortOrder;
    termina_en?: Prisma.SortOrderInput | Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    USUARIOS_SANCIONES_admin_idToUSUARIOS?: Prisma.USUARIOSOrderByWithRelationInput;
    REPORTES?: Prisma.REPORTESOrderByWithRelationInput;
    USUARIOS_SANCIONES_usuario_idToUSUARIOS?: Prisma.USUARIOSOrderByWithRelationInput;
};
export type SANCIONESWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SANCIONESWhereInput | Prisma.SANCIONESWhereInput[];
    OR?: Prisma.SANCIONESWhereInput[];
    NOT?: Prisma.SANCIONESWhereInput | Prisma.SANCIONESWhereInput[];
    usuario_id?: Prisma.UuidFilter<"SANCIONES"> | string;
    admin_id?: Prisma.UuidFilter<"SANCIONES"> | string;
    reporte_id?: Prisma.UuidNullableFilter<"SANCIONES"> | string | null;
    tipo?: Prisma.StringFilter<"SANCIONES"> | string;
    motivo?: Prisma.StringFilter<"SANCIONES"> | string;
    inicia_en?: Prisma.DateTimeFilter<"SANCIONES"> | Date | string;
    termina_en?: Prisma.DateTimeNullableFilter<"SANCIONES"> | Date | string | null;
    activa?: Prisma.BoolFilter<"SANCIONES"> | boolean;
    USUARIOS_SANCIONES_admin_idToUSUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
    REPORTES?: Prisma.XOR<Prisma.REPORTESNullableScalarRelationFilter, Prisma.REPORTESWhereInput> | null;
    USUARIOS_SANCIONES_usuario_idToUSUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
}, "id">;
export type SANCIONESOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    reporte_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    inicia_en?: Prisma.SortOrder;
    termina_en?: Prisma.SortOrderInput | Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    _count?: Prisma.SANCIONESCountOrderByAggregateInput;
    _max?: Prisma.SANCIONESMaxOrderByAggregateInput;
    _min?: Prisma.SANCIONESMinOrderByAggregateInput;
};
export type SANCIONESScalarWhereWithAggregatesInput = {
    AND?: Prisma.SANCIONESScalarWhereWithAggregatesInput | Prisma.SANCIONESScalarWhereWithAggregatesInput[];
    OR?: Prisma.SANCIONESScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SANCIONESScalarWhereWithAggregatesInput | Prisma.SANCIONESScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"SANCIONES"> | string;
    usuario_id?: Prisma.UuidWithAggregatesFilter<"SANCIONES"> | string;
    admin_id?: Prisma.UuidWithAggregatesFilter<"SANCIONES"> | string;
    reporte_id?: Prisma.UuidNullableWithAggregatesFilter<"SANCIONES"> | string | null;
    tipo?: Prisma.StringWithAggregatesFilter<"SANCIONES"> | string;
    motivo?: Prisma.StringWithAggregatesFilter<"SANCIONES"> | string;
    inicia_en?: Prisma.DateTimeWithAggregatesFilter<"SANCIONES"> | Date | string;
    termina_en?: Prisma.DateTimeNullableWithAggregatesFilter<"SANCIONES"> | Date | string | null;
    activa?: Prisma.BoolWithAggregatesFilter<"SANCIONES"> | boolean;
};
export type SANCIONESCreateInput = {
    id?: string;
    tipo: string;
    motivo: string;
    inicia_en?: Date | string;
    termina_en?: Date | string | null;
    activa: boolean;
    USUARIOS_SANCIONES_admin_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutSANCIONES_SANCIONES_admin_idToUSUARIOSInput;
    REPORTES?: Prisma.REPORTESCreateNestedOneWithoutSANCIONESInput;
    USUARIOS_SANCIONES_usuario_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutSANCIONES_SANCIONES_usuario_idToUSUARIOSInput;
};
export type SANCIONESUncheckedCreateInput = {
    id?: string;
    usuario_id: string;
    admin_id: string;
    reporte_id?: string | null;
    tipo: string;
    motivo: string;
    inicia_en?: Date | string;
    termina_en?: Date | string | null;
    activa: boolean;
};
export type SANCIONESUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    inicia_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    termina_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    USUARIOS_SANCIONES_admin_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutSANCIONES_SANCIONES_admin_idToUSUARIOSNestedInput;
    REPORTES?: Prisma.REPORTESUpdateOneWithoutSANCIONESNestedInput;
    USUARIOS_SANCIONES_usuario_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutSANCIONES_SANCIONES_usuario_idToUSUARIOSNestedInput;
};
export type SANCIONESUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    admin_id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporte_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    inicia_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    termina_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type SANCIONESCreateManyInput = {
    id?: string;
    usuario_id: string;
    admin_id: string;
    reporte_id?: string | null;
    tipo: string;
    motivo: string;
    inicia_en?: Date | string;
    termina_en?: Date | string | null;
    activa: boolean;
};
export type SANCIONESUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    inicia_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    termina_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type SANCIONESUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    admin_id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporte_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    inicia_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    termina_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type SANCIONESListRelationFilter = {
    every?: Prisma.SANCIONESWhereInput;
    some?: Prisma.SANCIONESWhereInput;
    none?: Prisma.SANCIONESWhereInput;
};
export type SANCIONESOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SANCIONESCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    reporte_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    inicia_en?: Prisma.SortOrder;
    termina_en?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
};
export type SANCIONESMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    reporte_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    inicia_en?: Prisma.SortOrder;
    termina_en?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
};
export type SANCIONESMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
    reporte_id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    inicia_en?: Prisma.SortOrder;
    termina_en?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
};
export type SANCIONESCreateNestedManyWithoutREPORTESInput = {
    create?: Prisma.XOR<Prisma.SANCIONESCreateWithoutREPORTESInput, Prisma.SANCIONESUncheckedCreateWithoutREPORTESInput> | Prisma.SANCIONESCreateWithoutREPORTESInput[] | Prisma.SANCIONESUncheckedCreateWithoutREPORTESInput[];
    connectOrCreate?: Prisma.SANCIONESCreateOrConnectWithoutREPORTESInput | Prisma.SANCIONESCreateOrConnectWithoutREPORTESInput[];
    createMany?: Prisma.SANCIONESCreateManyREPORTESInputEnvelope;
    connect?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
};
export type SANCIONESUncheckedCreateNestedManyWithoutREPORTESInput = {
    create?: Prisma.XOR<Prisma.SANCIONESCreateWithoutREPORTESInput, Prisma.SANCIONESUncheckedCreateWithoutREPORTESInput> | Prisma.SANCIONESCreateWithoutREPORTESInput[] | Prisma.SANCIONESUncheckedCreateWithoutREPORTESInput[];
    connectOrCreate?: Prisma.SANCIONESCreateOrConnectWithoutREPORTESInput | Prisma.SANCIONESCreateOrConnectWithoutREPORTESInput[];
    createMany?: Prisma.SANCIONESCreateManyREPORTESInputEnvelope;
    connect?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
};
export type SANCIONESUpdateManyWithoutREPORTESNestedInput = {
    create?: Prisma.XOR<Prisma.SANCIONESCreateWithoutREPORTESInput, Prisma.SANCIONESUncheckedCreateWithoutREPORTESInput> | Prisma.SANCIONESCreateWithoutREPORTESInput[] | Prisma.SANCIONESUncheckedCreateWithoutREPORTESInput[];
    connectOrCreate?: Prisma.SANCIONESCreateOrConnectWithoutREPORTESInput | Prisma.SANCIONESCreateOrConnectWithoutREPORTESInput[];
    upsert?: Prisma.SANCIONESUpsertWithWhereUniqueWithoutREPORTESInput | Prisma.SANCIONESUpsertWithWhereUniqueWithoutREPORTESInput[];
    createMany?: Prisma.SANCIONESCreateManyREPORTESInputEnvelope;
    set?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    disconnect?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    delete?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    connect?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    update?: Prisma.SANCIONESUpdateWithWhereUniqueWithoutREPORTESInput | Prisma.SANCIONESUpdateWithWhereUniqueWithoutREPORTESInput[];
    updateMany?: Prisma.SANCIONESUpdateManyWithWhereWithoutREPORTESInput | Prisma.SANCIONESUpdateManyWithWhereWithoutREPORTESInput[];
    deleteMany?: Prisma.SANCIONESScalarWhereInput | Prisma.SANCIONESScalarWhereInput[];
};
export type SANCIONESUncheckedUpdateManyWithoutREPORTESNestedInput = {
    create?: Prisma.XOR<Prisma.SANCIONESCreateWithoutREPORTESInput, Prisma.SANCIONESUncheckedCreateWithoutREPORTESInput> | Prisma.SANCIONESCreateWithoutREPORTESInput[] | Prisma.SANCIONESUncheckedCreateWithoutREPORTESInput[];
    connectOrCreate?: Prisma.SANCIONESCreateOrConnectWithoutREPORTESInput | Prisma.SANCIONESCreateOrConnectWithoutREPORTESInput[];
    upsert?: Prisma.SANCIONESUpsertWithWhereUniqueWithoutREPORTESInput | Prisma.SANCIONESUpsertWithWhereUniqueWithoutREPORTESInput[];
    createMany?: Prisma.SANCIONESCreateManyREPORTESInputEnvelope;
    set?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    disconnect?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    delete?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    connect?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    update?: Prisma.SANCIONESUpdateWithWhereUniqueWithoutREPORTESInput | Prisma.SANCIONESUpdateWithWhereUniqueWithoutREPORTESInput[];
    updateMany?: Prisma.SANCIONESUpdateManyWithWhereWithoutREPORTESInput | Prisma.SANCIONESUpdateManyWithWhereWithoutREPORTESInput[];
    deleteMany?: Prisma.SANCIONESScalarWhereInput | Prisma.SANCIONESScalarWhereInput[];
};
export type SANCIONESCreateNestedManyWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.SANCIONESCreateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput, Prisma.SANCIONESUncheckedCreateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput> | Prisma.SANCIONESCreateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput[] | Prisma.SANCIONESUncheckedCreateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.SANCIONESCreateOrConnectWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput | Prisma.SANCIONESCreateOrConnectWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput[];
    createMany?: Prisma.SANCIONESCreateManyUSUARIOS_SANCIONES_admin_idToUSUARIOSInputEnvelope;
    connect?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
};
export type SANCIONESCreateNestedManyWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.SANCIONESCreateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput, Prisma.SANCIONESUncheckedCreateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput> | Prisma.SANCIONESCreateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput[] | Prisma.SANCIONESUncheckedCreateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.SANCIONESCreateOrConnectWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput | Prisma.SANCIONESCreateOrConnectWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput[];
    createMany?: Prisma.SANCIONESCreateManyUSUARIOS_SANCIONES_usuario_idToUSUARIOSInputEnvelope;
    connect?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
};
export type SANCIONESUncheckedCreateNestedManyWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.SANCIONESCreateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput, Prisma.SANCIONESUncheckedCreateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput> | Prisma.SANCIONESCreateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput[] | Prisma.SANCIONESUncheckedCreateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.SANCIONESCreateOrConnectWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput | Prisma.SANCIONESCreateOrConnectWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput[];
    createMany?: Prisma.SANCIONESCreateManyUSUARIOS_SANCIONES_admin_idToUSUARIOSInputEnvelope;
    connect?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
};
export type SANCIONESUncheckedCreateNestedManyWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.SANCIONESCreateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput, Prisma.SANCIONESUncheckedCreateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput> | Prisma.SANCIONESCreateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput[] | Prisma.SANCIONESUncheckedCreateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.SANCIONESCreateOrConnectWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput | Prisma.SANCIONESCreateOrConnectWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput[];
    createMany?: Prisma.SANCIONESCreateManyUSUARIOS_SANCIONES_usuario_idToUSUARIOSInputEnvelope;
    connect?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
};
export type SANCIONESUpdateManyWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.SANCIONESCreateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput, Prisma.SANCIONESUncheckedCreateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput> | Prisma.SANCIONESCreateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput[] | Prisma.SANCIONESUncheckedCreateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.SANCIONESCreateOrConnectWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput | Prisma.SANCIONESCreateOrConnectWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput[];
    upsert?: Prisma.SANCIONESUpsertWithWhereUniqueWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput | Prisma.SANCIONESUpsertWithWhereUniqueWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput[];
    createMany?: Prisma.SANCIONESCreateManyUSUARIOS_SANCIONES_admin_idToUSUARIOSInputEnvelope;
    set?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    disconnect?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    delete?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    connect?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    update?: Prisma.SANCIONESUpdateWithWhereUniqueWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput | Prisma.SANCIONESUpdateWithWhereUniqueWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput[];
    updateMany?: Prisma.SANCIONESUpdateManyWithWhereWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput | Prisma.SANCIONESUpdateManyWithWhereWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput[];
    deleteMany?: Prisma.SANCIONESScalarWhereInput | Prisma.SANCIONESScalarWhereInput[];
};
export type SANCIONESUpdateManyWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.SANCIONESCreateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput, Prisma.SANCIONESUncheckedCreateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput> | Prisma.SANCIONESCreateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput[] | Prisma.SANCIONESUncheckedCreateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.SANCIONESCreateOrConnectWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput | Prisma.SANCIONESCreateOrConnectWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput[];
    upsert?: Prisma.SANCIONESUpsertWithWhereUniqueWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput | Prisma.SANCIONESUpsertWithWhereUniqueWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput[];
    createMany?: Prisma.SANCIONESCreateManyUSUARIOS_SANCIONES_usuario_idToUSUARIOSInputEnvelope;
    set?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    disconnect?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    delete?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    connect?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    update?: Prisma.SANCIONESUpdateWithWhereUniqueWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput | Prisma.SANCIONESUpdateWithWhereUniqueWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput[];
    updateMany?: Prisma.SANCIONESUpdateManyWithWhereWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput | Prisma.SANCIONESUpdateManyWithWhereWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput[];
    deleteMany?: Prisma.SANCIONESScalarWhereInput | Prisma.SANCIONESScalarWhereInput[];
};
export type SANCIONESUncheckedUpdateManyWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.SANCIONESCreateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput, Prisma.SANCIONESUncheckedCreateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput> | Prisma.SANCIONESCreateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput[] | Prisma.SANCIONESUncheckedCreateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.SANCIONESCreateOrConnectWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput | Prisma.SANCIONESCreateOrConnectWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput[];
    upsert?: Prisma.SANCIONESUpsertWithWhereUniqueWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput | Prisma.SANCIONESUpsertWithWhereUniqueWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput[];
    createMany?: Prisma.SANCIONESCreateManyUSUARIOS_SANCIONES_admin_idToUSUARIOSInputEnvelope;
    set?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    disconnect?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    delete?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    connect?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    update?: Prisma.SANCIONESUpdateWithWhereUniqueWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput | Prisma.SANCIONESUpdateWithWhereUniqueWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput[];
    updateMany?: Prisma.SANCIONESUpdateManyWithWhereWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput | Prisma.SANCIONESUpdateManyWithWhereWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput[];
    deleteMany?: Prisma.SANCIONESScalarWhereInput | Prisma.SANCIONESScalarWhereInput[];
};
export type SANCIONESUncheckedUpdateManyWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.SANCIONESCreateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput, Prisma.SANCIONESUncheckedCreateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput> | Prisma.SANCIONESCreateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput[] | Prisma.SANCIONESUncheckedCreateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.SANCIONESCreateOrConnectWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput | Prisma.SANCIONESCreateOrConnectWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput[];
    upsert?: Prisma.SANCIONESUpsertWithWhereUniqueWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput | Prisma.SANCIONESUpsertWithWhereUniqueWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput[];
    createMany?: Prisma.SANCIONESCreateManyUSUARIOS_SANCIONES_usuario_idToUSUARIOSInputEnvelope;
    set?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    disconnect?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    delete?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    connect?: Prisma.SANCIONESWhereUniqueInput | Prisma.SANCIONESWhereUniqueInput[];
    update?: Prisma.SANCIONESUpdateWithWhereUniqueWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput | Prisma.SANCIONESUpdateWithWhereUniqueWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput[];
    updateMany?: Prisma.SANCIONESUpdateManyWithWhereWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput | Prisma.SANCIONESUpdateManyWithWhereWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput[];
    deleteMany?: Prisma.SANCIONESScalarWhereInput | Prisma.SANCIONESScalarWhereInput[];
};
export type SANCIONESCreateWithoutREPORTESInput = {
    id?: string;
    tipo: string;
    motivo: string;
    inicia_en?: Date | string;
    termina_en?: Date | string | null;
    activa: boolean;
    USUARIOS_SANCIONES_admin_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutSANCIONES_SANCIONES_admin_idToUSUARIOSInput;
    USUARIOS_SANCIONES_usuario_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutSANCIONES_SANCIONES_usuario_idToUSUARIOSInput;
};
export type SANCIONESUncheckedCreateWithoutREPORTESInput = {
    id?: string;
    usuario_id: string;
    admin_id: string;
    tipo: string;
    motivo: string;
    inicia_en?: Date | string;
    termina_en?: Date | string | null;
    activa: boolean;
};
export type SANCIONESCreateOrConnectWithoutREPORTESInput = {
    where: Prisma.SANCIONESWhereUniqueInput;
    create: Prisma.XOR<Prisma.SANCIONESCreateWithoutREPORTESInput, Prisma.SANCIONESUncheckedCreateWithoutREPORTESInput>;
};
export type SANCIONESCreateManyREPORTESInputEnvelope = {
    data: Prisma.SANCIONESCreateManyREPORTESInput | Prisma.SANCIONESCreateManyREPORTESInput[];
    skipDuplicates?: boolean;
};
export type SANCIONESUpsertWithWhereUniqueWithoutREPORTESInput = {
    where: Prisma.SANCIONESWhereUniqueInput;
    update: Prisma.XOR<Prisma.SANCIONESUpdateWithoutREPORTESInput, Prisma.SANCIONESUncheckedUpdateWithoutREPORTESInput>;
    create: Prisma.XOR<Prisma.SANCIONESCreateWithoutREPORTESInput, Prisma.SANCIONESUncheckedCreateWithoutREPORTESInput>;
};
export type SANCIONESUpdateWithWhereUniqueWithoutREPORTESInput = {
    where: Prisma.SANCIONESWhereUniqueInput;
    data: Prisma.XOR<Prisma.SANCIONESUpdateWithoutREPORTESInput, Prisma.SANCIONESUncheckedUpdateWithoutREPORTESInput>;
};
export type SANCIONESUpdateManyWithWhereWithoutREPORTESInput = {
    where: Prisma.SANCIONESScalarWhereInput;
    data: Prisma.XOR<Prisma.SANCIONESUpdateManyMutationInput, Prisma.SANCIONESUncheckedUpdateManyWithoutREPORTESInput>;
};
export type SANCIONESScalarWhereInput = {
    AND?: Prisma.SANCIONESScalarWhereInput | Prisma.SANCIONESScalarWhereInput[];
    OR?: Prisma.SANCIONESScalarWhereInput[];
    NOT?: Prisma.SANCIONESScalarWhereInput | Prisma.SANCIONESScalarWhereInput[];
    id?: Prisma.UuidFilter<"SANCIONES"> | string;
    usuario_id?: Prisma.UuidFilter<"SANCIONES"> | string;
    admin_id?: Prisma.UuidFilter<"SANCIONES"> | string;
    reporte_id?: Prisma.UuidNullableFilter<"SANCIONES"> | string | null;
    tipo?: Prisma.StringFilter<"SANCIONES"> | string;
    motivo?: Prisma.StringFilter<"SANCIONES"> | string;
    inicia_en?: Prisma.DateTimeFilter<"SANCIONES"> | Date | string;
    termina_en?: Prisma.DateTimeNullableFilter<"SANCIONES"> | Date | string | null;
    activa?: Prisma.BoolFilter<"SANCIONES"> | boolean;
};
export type SANCIONESCreateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput = {
    id?: string;
    tipo: string;
    motivo: string;
    inicia_en?: Date | string;
    termina_en?: Date | string | null;
    activa: boolean;
    REPORTES?: Prisma.REPORTESCreateNestedOneWithoutSANCIONESInput;
    USUARIOS_SANCIONES_usuario_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutSANCIONES_SANCIONES_usuario_idToUSUARIOSInput;
};
export type SANCIONESUncheckedCreateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput = {
    id?: string;
    usuario_id: string;
    reporte_id?: string | null;
    tipo: string;
    motivo: string;
    inicia_en?: Date | string;
    termina_en?: Date | string | null;
    activa: boolean;
};
export type SANCIONESCreateOrConnectWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput = {
    where: Prisma.SANCIONESWhereUniqueInput;
    create: Prisma.XOR<Prisma.SANCIONESCreateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput, Prisma.SANCIONESUncheckedCreateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput>;
};
export type SANCIONESCreateManyUSUARIOS_SANCIONES_admin_idToUSUARIOSInputEnvelope = {
    data: Prisma.SANCIONESCreateManyUSUARIOS_SANCIONES_admin_idToUSUARIOSInput | Prisma.SANCIONESCreateManyUSUARIOS_SANCIONES_admin_idToUSUARIOSInput[];
    skipDuplicates?: boolean;
};
export type SANCIONESCreateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput = {
    id?: string;
    tipo: string;
    motivo: string;
    inicia_en?: Date | string;
    termina_en?: Date | string | null;
    activa: boolean;
    USUARIOS_SANCIONES_admin_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutSANCIONES_SANCIONES_admin_idToUSUARIOSInput;
    REPORTES?: Prisma.REPORTESCreateNestedOneWithoutSANCIONESInput;
};
export type SANCIONESUncheckedCreateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput = {
    id?: string;
    admin_id: string;
    reporte_id?: string | null;
    tipo: string;
    motivo: string;
    inicia_en?: Date | string;
    termina_en?: Date | string | null;
    activa: boolean;
};
export type SANCIONESCreateOrConnectWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput = {
    where: Prisma.SANCIONESWhereUniqueInput;
    create: Prisma.XOR<Prisma.SANCIONESCreateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput, Prisma.SANCIONESUncheckedCreateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput>;
};
export type SANCIONESCreateManyUSUARIOS_SANCIONES_usuario_idToUSUARIOSInputEnvelope = {
    data: Prisma.SANCIONESCreateManyUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput | Prisma.SANCIONESCreateManyUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput[];
    skipDuplicates?: boolean;
};
export type SANCIONESUpsertWithWhereUniqueWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput = {
    where: Prisma.SANCIONESWhereUniqueInput;
    update: Prisma.XOR<Prisma.SANCIONESUpdateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput, Prisma.SANCIONESUncheckedUpdateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput>;
    create: Prisma.XOR<Prisma.SANCIONESCreateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput, Prisma.SANCIONESUncheckedCreateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput>;
};
export type SANCIONESUpdateWithWhereUniqueWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput = {
    where: Prisma.SANCIONESWhereUniqueInput;
    data: Prisma.XOR<Prisma.SANCIONESUpdateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput, Prisma.SANCIONESUncheckedUpdateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput>;
};
export type SANCIONESUpdateManyWithWhereWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput = {
    where: Prisma.SANCIONESScalarWhereInput;
    data: Prisma.XOR<Prisma.SANCIONESUpdateManyMutationInput, Prisma.SANCIONESUncheckedUpdateManyWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput>;
};
export type SANCIONESUpsertWithWhereUniqueWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput = {
    where: Prisma.SANCIONESWhereUniqueInput;
    update: Prisma.XOR<Prisma.SANCIONESUpdateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput, Prisma.SANCIONESUncheckedUpdateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput>;
    create: Prisma.XOR<Prisma.SANCIONESCreateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput, Prisma.SANCIONESUncheckedCreateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput>;
};
export type SANCIONESUpdateWithWhereUniqueWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput = {
    where: Prisma.SANCIONESWhereUniqueInput;
    data: Prisma.XOR<Prisma.SANCIONESUpdateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput, Prisma.SANCIONESUncheckedUpdateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput>;
};
export type SANCIONESUpdateManyWithWhereWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput = {
    where: Prisma.SANCIONESScalarWhereInput;
    data: Prisma.XOR<Prisma.SANCIONESUpdateManyMutationInput, Prisma.SANCIONESUncheckedUpdateManyWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput>;
};
export type SANCIONESCreateManyREPORTESInput = {
    id?: string;
    usuario_id: string;
    admin_id: string;
    tipo: string;
    motivo: string;
    inicia_en?: Date | string;
    termina_en?: Date | string | null;
    activa: boolean;
};
export type SANCIONESUpdateWithoutREPORTESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    inicia_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    termina_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    USUARIOS_SANCIONES_admin_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutSANCIONES_SANCIONES_admin_idToUSUARIOSNestedInput;
    USUARIOS_SANCIONES_usuario_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutSANCIONES_SANCIONES_usuario_idToUSUARIOSNestedInput;
};
export type SANCIONESUncheckedUpdateWithoutREPORTESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    admin_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    inicia_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    termina_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type SANCIONESUncheckedUpdateManyWithoutREPORTESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    admin_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    inicia_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    termina_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type SANCIONESCreateManyUSUARIOS_SANCIONES_admin_idToUSUARIOSInput = {
    id?: string;
    usuario_id: string;
    reporte_id?: string | null;
    tipo: string;
    motivo: string;
    inicia_en?: Date | string;
    termina_en?: Date | string | null;
    activa: boolean;
};
export type SANCIONESCreateManyUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput = {
    id?: string;
    admin_id: string;
    reporte_id?: string | null;
    tipo: string;
    motivo: string;
    inicia_en?: Date | string;
    termina_en?: Date | string | null;
    activa: boolean;
};
export type SANCIONESUpdateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    inicia_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    termina_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    REPORTES?: Prisma.REPORTESUpdateOneWithoutSANCIONESNestedInput;
    USUARIOS_SANCIONES_usuario_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutSANCIONES_SANCIONES_usuario_idToUSUARIOSNestedInput;
};
export type SANCIONESUncheckedUpdateWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporte_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    inicia_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    termina_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type SANCIONESUncheckedUpdateManyWithoutUSUARIOS_SANCIONES_admin_idToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporte_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    inicia_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    termina_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type SANCIONESUpdateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    inicia_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    termina_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    USUARIOS_SANCIONES_admin_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutSANCIONES_SANCIONES_admin_idToUSUARIOSNestedInput;
    REPORTES?: Prisma.REPORTESUpdateOneWithoutSANCIONESNestedInput;
};
export type SANCIONESUncheckedUpdateWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    admin_id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporte_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    inicia_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    termina_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type SANCIONESUncheckedUpdateManyWithoutUSUARIOS_SANCIONES_usuario_idToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    admin_id?: Prisma.StringFieldUpdateOperationsInput | string;
    reporte_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    inicia_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    termina_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type SANCIONESSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario_id?: boolean;
    admin_id?: boolean;
    reporte_id?: boolean;
    tipo?: boolean;
    motivo?: boolean;
    inicia_en?: boolean;
    termina_en?: boolean;
    activa?: boolean;
    USUARIOS_SANCIONES_admin_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    REPORTES?: boolean | Prisma.SANCIONES$REPORTESArgs<ExtArgs>;
    USUARIOS_SANCIONES_usuario_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sANCIONES"]>;
export type SANCIONESSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario_id?: boolean;
    admin_id?: boolean;
    reporte_id?: boolean;
    tipo?: boolean;
    motivo?: boolean;
    inicia_en?: boolean;
    termina_en?: boolean;
    activa?: boolean;
    USUARIOS_SANCIONES_admin_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    REPORTES?: boolean | Prisma.SANCIONES$REPORTESArgs<ExtArgs>;
    USUARIOS_SANCIONES_usuario_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sANCIONES"]>;
export type SANCIONESSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario_id?: boolean;
    admin_id?: boolean;
    reporte_id?: boolean;
    tipo?: boolean;
    motivo?: boolean;
    inicia_en?: boolean;
    termina_en?: boolean;
    activa?: boolean;
    USUARIOS_SANCIONES_admin_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    REPORTES?: boolean | Prisma.SANCIONES$REPORTESArgs<ExtArgs>;
    USUARIOS_SANCIONES_usuario_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sANCIONES"]>;
export type SANCIONESSelectScalar = {
    id?: boolean;
    usuario_id?: boolean;
    admin_id?: boolean;
    reporte_id?: boolean;
    tipo?: boolean;
    motivo?: boolean;
    inicia_en?: boolean;
    termina_en?: boolean;
    activa?: boolean;
};
export type SANCIONESOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "usuario_id" | "admin_id" | "reporte_id" | "tipo" | "motivo" | "inicia_en" | "termina_en" | "activa", ExtArgs["result"]["sANCIONES"]>;
export type SANCIONESInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USUARIOS_SANCIONES_admin_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    REPORTES?: boolean | Prisma.SANCIONES$REPORTESArgs<ExtArgs>;
    USUARIOS_SANCIONES_usuario_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type SANCIONESIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USUARIOS_SANCIONES_admin_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    REPORTES?: boolean | Prisma.SANCIONES$REPORTESArgs<ExtArgs>;
    USUARIOS_SANCIONES_usuario_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type SANCIONESIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USUARIOS_SANCIONES_admin_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    REPORTES?: boolean | Prisma.SANCIONES$REPORTESArgs<ExtArgs>;
    USUARIOS_SANCIONES_usuario_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type $SANCIONESPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SANCIONES";
    objects: {
        USUARIOS_SANCIONES_admin_idToUSUARIOS: Prisma.$USUARIOSPayload<ExtArgs>;
        REPORTES: Prisma.$REPORTESPayload<ExtArgs> | null;
        USUARIOS_SANCIONES_usuario_idToUSUARIOS: Prisma.$USUARIOSPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        usuario_id: string;
        admin_id: string;
        reporte_id: string | null;
        tipo: string;
        motivo: string;
        inicia_en: Date;
        termina_en: Date | null;
        activa: boolean;
    }, ExtArgs["result"]["sANCIONES"]>;
    composites: {};
};
export type SANCIONESGetPayload<S extends boolean | null | undefined | SANCIONESDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SANCIONESPayload, S>;
export type SANCIONESCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SANCIONESFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SANCIONESCountAggregateInputType | true;
};
export interface SANCIONESDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SANCIONES'];
        meta: {
            name: 'SANCIONES';
        };
    };
    findUnique<T extends SANCIONESFindUniqueArgs>(args: Prisma.SelectSubset<T, SANCIONESFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SANCIONESClient<runtime.Types.Result.GetResult<Prisma.$SANCIONESPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SANCIONESFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SANCIONESFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SANCIONESClient<runtime.Types.Result.GetResult<Prisma.$SANCIONESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SANCIONESFindFirstArgs>(args?: Prisma.SelectSubset<T, SANCIONESFindFirstArgs<ExtArgs>>): Prisma.Prisma__SANCIONESClient<runtime.Types.Result.GetResult<Prisma.$SANCIONESPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SANCIONESFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SANCIONESFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SANCIONESClient<runtime.Types.Result.GetResult<Prisma.$SANCIONESPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SANCIONESFindManyArgs>(args?: Prisma.SelectSubset<T, SANCIONESFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SANCIONESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SANCIONESCreateArgs>(args: Prisma.SelectSubset<T, SANCIONESCreateArgs<ExtArgs>>): Prisma.Prisma__SANCIONESClient<runtime.Types.Result.GetResult<Prisma.$SANCIONESPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SANCIONESCreateManyArgs>(args?: Prisma.SelectSubset<T, SANCIONESCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SANCIONESCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SANCIONESCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SANCIONESPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SANCIONESDeleteArgs>(args: Prisma.SelectSubset<T, SANCIONESDeleteArgs<ExtArgs>>): Prisma.Prisma__SANCIONESClient<runtime.Types.Result.GetResult<Prisma.$SANCIONESPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SANCIONESUpdateArgs>(args: Prisma.SelectSubset<T, SANCIONESUpdateArgs<ExtArgs>>): Prisma.Prisma__SANCIONESClient<runtime.Types.Result.GetResult<Prisma.$SANCIONESPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SANCIONESDeleteManyArgs>(args?: Prisma.SelectSubset<T, SANCIONESDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SANCIONESUpdateManyArgs>(args: Prisma.SelectSubset<T, SANCIONESUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SANCIONESUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SANCIONESUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SANCIONESPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SANCIONESUpsertArgs>(args: Prisma.SelectSubset<T, SANCIONESUpsertArgs<ExtArgs>>): Prisma.Prisma__SANCIONESClient<runtime.Types.Result.GetResult<Prisma.$SANCIONESPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SANCIONESCountArgs>(args?: Prisma.Subset<T, SANCIONESCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SANCIONESCountAggregateOutputType> : number>;
    aggregate<T extends SANCIONESAggregateArgs>(args: Prisma.Subset<T, SANCIONESAggregateArgs>): Prisma.PrismaPromise<GetSANCIONESAggregateType<T>>;
    groupBy<T extends SANCIONESGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SANCIONESGroupByArgs['orderBy'];
    } : {
        orderBy?: SANCIONESGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SANCIONESGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSANCIONESGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SANCIONESFieldRefs;
}
export interface Prisma__SANCIONESClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    USUARIOS_SANCIONES_admin_idToUSUARIOS<T extends Prisma.USUARIOSDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.USUARIOSDefaultArgs<ExtArgs>>): Prisma.Prisma__USUARIOSClient<runtime.Types.Result.GetResult<Prisma.$USUARIOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    REPORTES<T extends Prisma.SANCIONES$REPORTESArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SANCIONES$REPORTESArgs<ExtArgs>>): Prisma.Prisma__REPORTESClient<runtime.Types.Result.GetResult<Prisma.$REPORTESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    USUARIOS_SANCIONES_usuario_idToUSUARIOS<T extends Prisma.USUARIOSDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.USUARIOSDefaultArgs<ExtArgs>>): Prisma.Prisma__USUARIOSClient<runtime.Types.Result.GetResult<Prisma.$USUARIOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SANCIONESFieldRefs {
    readonly id: Prisma.FieldRef<"SANCIONES", 'String'>;
    readonly usuario_id: Prisma.FieldRef<"SANCIONES", 'String'>;
    readonly admin_id: Prisma.FieldRef<"SANCIONES", 'String'>;
    readonly reporte_id: Prisma.FieldRef<"SANCIONES", 'String'>;
    readonly tipo: Prisma.FieldRef<"SANCIONES", 'String'>;
    readonly motivo: Prisma.FieldRef<"SANCIONES", 'String'>;
    readonly inicia_en: Prisma.FieldRef<"SANCIONES", 'DateTime'>;
    readonly termina_en: Prisma.FieldRef<"SANCIONES", 'DateTime'>;
    readonly activa: Prisma.FieldRef<"SANCIONES", 'Boolean'>;
}
export type SANCIONESFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SANCIONESSelect<ExtArgs> | null;
    omit?: Prisma.SANCIONESOmit<ExtArgs> | null;
    include?: Prisma.SANCIONESInclude<ExtArgs> | null;
    where: Prisma.SANCIONESWhereUniqueInput;
};
export type SANCIONESFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SANCIONESSelect<ExtArgs> | null;
    omit?: Prisma.SANCIONESOmit<ExtArgs> | null;
    include?: Prisma.SANCIONESInclude<ExtArgs> | null;
    where: Prisma.SANCIONESWhereUniqueInput;
};
export type SANCIONESFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SANCIONESSelect<ExtArgs> | null;
    omit?: Prisma.SANCIONESOmit<ExtArgs> | null;
    include?: Prisma.SANCIONESInclude<ExtArgs> | null;
    where?: Prisma.SANCIONESWhereInput;
    orderBy?: Prisma.SANCIONESOrderByWithRelationInput | Prisma.SANCIONESOrderByWithRelationInput[];
    cursor?: Prisma.SANCIONESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SANCIONESScalarFieldEnum | Prisma.SANCIONESScalarFieldEnum[];
};
export type SANCIONESFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SANCIONESSelect<ExtArgs> | null;
    omit?: Prisma.SANCIONESOmit<ExtArgs> | null;
    include?: Prisma.SANCIONESInclude<ExtArgs> | null;
    where?: Prisma.SANCIONESWhereInput;
    orderBy?: Prisma.SANCIONESOrderByWithRelationInput | Prisma.SANCIONESOrderByWithRelationInput[];
    cursor?: Prisma.SANCIONESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SANCIONESScalarFieldEnum | Prisma.SANCIONESScalarFieldEnum[];
};
export type SANCIONESFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SANCIONESSelect<ExtArgs> | null;
    omit?: Prisma.SANCIONESOmit<ExtArgs> | null;
    include?: Prisma.SANCIONESInclude<ExtArgs> | null;
    where?: Prisma.SANCIONESWhereInput;
    orderBy?: Prisma.SANCIONESOrderByWithRelationInput | Prisma.SANCIONESOrderByWithRelationInput[];
    cursor?: Prisma.SANCIONESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SANCIONESScalarFieldEnum | Prisma.SANCIONESScalarFieldEnum[];
};
export type SANCIONESCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SANCIONESSelect<ExtArgs> | null;
    omit?: Prisma.SANCIONESOmit<ExtArgs> | null;
    include?: Prisma.SANCIONESInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SANCIONESCreateInput, Prisma.SANCIONESUncheckedCreateInput>;
};
export type SANCIONESCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SANCIONESCreateManyInput | Prisma.SANCIONESCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SANCIONESCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SANCIONESSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SANCIONESOmit<ExtArgs> | null;
    data: Prisma.SANCIONESCreateManyInput | Prisma.SANCIONESCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SANCIONESIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SANCIONESUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SANCIONESSelect<ExtArgs> | null;
    omit?: Prisma.SANCIONESOmit<ExtArgs> | null;
    include?: Prisma.SANCIONESInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SANCIONESUpdateInput, Prisma.SANCIONESUncheckedUpdateInput>;
    where: Prisma.SANCIONESWhereUniqueInput;
};
export type SANCIONESUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SANCIONESUpdateManyMutationInput, Prisma.SANCIONESUncheckedUpdateManyInput>;
    where?: Prisma.SANCIONESWhereInput;
    limit?: number;
};
export type SANCIONESUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SANCIONESSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SANCIONESOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SANCIONESUpdateManyMutationInput, Prisma.SANCIONESUncheckedUpdateManyInput>;
    where?: Prisma.SANCIONESWhereInput;
    limit?: number;
    include?: Prisma.SANCIONESIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SANCIONESUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SANCIONESSelect<ExtArgs> | null;
    omit?: Prisma.SANCIONESOmit<ExtArgs> | null;
    include?: Prisma.SANCIONESInclude<ExtArgs> | null;
    where: Prisma.SANCIONESWhereUniqueInput;
    create: Prisma.XOR<Prisma.SANCIONESCreateInput, Prisma.SANCIONESUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SANCIONESUpdateInput, Prisma.SANCIONESUncheckedUpdateInput>;
};
export type SANCIONESDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SANCIONESSelect<ExtArgs> | null;
    omit?: Prisma.SANCIONESOmit<ExtArgs> | null;
    include?: Prisma.SANCIONESInclude<ExtArgs> | null;
    where: Prisma.SANCIONESWhereUniqueInput;
};
export type SANCIONESDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SANCIONESWhereInput;
    limit?: number;
};
export type SANCIONES$REPORTESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REPORTESSelect<ExtArgs> | null;
    omit?: Prisma.REPORTESOmit<ExtArgs> | null;
    include?: Prisma.REPORTESInclude<ExtArgs> | null;
    where?: Prisma.REPORTESWhereInput;
};
export type SANCIONESDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SANCIONESSelect<ExtArgs> | null;
    omit?: Prisma.SANCIONESOmit<ExtArgs> | null;
    include?: Prisma.SANCIONESInclude<ExtArgs> | null;
};
