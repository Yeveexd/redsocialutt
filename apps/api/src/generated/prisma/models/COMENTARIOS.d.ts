import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type COMENTARIOSModel = runtime.Types.Result.DefaultSelection<Prisma.$COMENTARIOSPayload>;
export type AggregateCOMENTARIOS = {
    _count: COMENTARIOSCountAggregateOutputType | null;
    _min: COMENTARIOSMinAggregateOutputType | null;
    _max: COMENTARIOSMaxAggregateOutputType | null;
};
export type COMENTARIOSMinAggregateOutputType = {
    id: string | null;
    publicacion_id: string | null;
    autor_id: string | null;
    contenido: string | null;
    creado_en: Date | null;
    eliminado_en: Date | null;
};
export type COMENTARIOSMaxAggregateOutputType = {
    id: string | null;
    publicacion_id: string | null;
    autor_id: string | null;
    contenido: string | null;
    creado_en: Date | null;
    eliminado_en: Date | null;
};
export type COMENTARIOSCountAggregateOutputType = {
    id: number;
    publicacion_id: number;
    autor_id: number;
    contenido: number;
    creado_en: number;
    eliminado_en: number;
    _all: number;
};
export type COMENTARIOSMinAggregateInputType = {
    id?: true;
    publicacion_id?: true;
    autor_id?: true;
    contenido?: true;
    creado_en?: true;
    eliminado_en?: true;
};
export type COMENTARIOSMaxAggregateInputType = {
    id?: true;
    publicacion_id?: true;
    autor_id?: true;
    contenido?: true;
    creado_en?: true;
    eliminado_en?: true;
};
export type COMENTARIOSCountAggregateInputType = {
    id?: true;
    publicacion_id?: true;
    autor_id?: true;
    contenido?: true;
    creado_en?: true;
    eliminado_en?: true;
    _all?: true;
};
export type COMENTARIOSAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.COMENTARIOSWhereInput;
    orderBy?: Prisma.COMENTARIOSOrderByWithRelationInput | Prisma.COMENTARIOSOrderByWithRelationInput[];
    cursor?: Prisma.COMENTARIOSWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | COMENTARIOSCountAggregateInputType;
    _min?: COMENTARIOSMinAggregateInputType;
    _max?: COMENTARIOSMaxAggregateInputType;
};
export type GetCOMENTARIOSAggregateType<T extends COMENTARIOSAggregateArgs> = {
    [P in keyof T & keyof AggregateCOMENTARIOS]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCOMENTARIOS[P]> : Prisma.GetScalarType<T[P], AggregateCOMENTARIOS[P]>;
};
export type COMENTARIOSGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.COMENTARIOSWhereInput;
    orderBy?: Prisma.COMENTARIOSOrderByWithAggregationInput | Prisma.COMENTARIOSOrderByWithAggregationInput[];
    by: Prisma.COMENTARIOSScalarFieldEnum[] | Prisma.COMENTARIOSScalarFieldEnum;
    having?: Prisma.COMENTARIOSScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: COMENTARIOSCountAggregateInputType | true;
    _min?: COMENTARIOSMinAggregateInputType;
    _max?: COMENTARIOSMaxAggregateInputType;
};
export type COMENTARIOSGroupByOutputType = {
    id: string;
    publicacion_id: string;
    autor_id: string;
    contenido: string;
    creado_en: Date;
    eliminado_en: Date | null;
    _count: COMENTARIOSCountAggregateOutputType | null;
    _min: COMENTARIOSMinAggregateOutputType | null;
    _max: COMENTARIOSMaxAggregateOutputType | null;
};
export type GetCOMENTARIOSGroupByPayload<T extends COMENTARIOSGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<COMENTARIOSGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof COMENTARIOSGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], COMENTARIOSGroupByOutputType[P]> : Prisma.GetScalarType<T[P], COMENTARIOSGroupByOutputType[P]>;
}>>;
export type COMENTARIOSWhereInput = {
    AND?: Prisma.COMENTARIOSWhereInput | Prisma.COMENTARIOSWhereInput[];
    OR?: Prisma.COMENTARIOSWhereInput[];
    NOT?: Prisma.COMENTARIOSWhereInput | Prisma.COMENTARIOSWhereInput[];
    id?: Prisma.UuidFilter<"COMENTARIOS"> | string;
    publicacion_id?: Prisma.UuidFilter<"COMENTARIOS"> | string;
    autor_id?: Prisma.UuidFilter<"COMENTARIOS"> | string;
    contenido?: Prisma.StringFilter<"COMENTARIOS"> | string;
    creado_en?: Prisma.DateTimeFilter<"COMENTARIOS"> | Date | string;
    eliminado_en?: Prisma.DateTimeNullableFilter<"COMENTARIOS"> | Date | string | null;
    USUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
    PUBLICACIONES?: Prisma.XOR<Prisma.PUBLICACIONESScalarRelationFilter, Prisma.PUBLICACIONESWhereInput>;
    REPORTES?: Prisma.REPORTESListRelationFilter;
};
export type COMENTARIOSOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrder;
    autor_id?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    eliminado_en?: Prisma.SortOrderInput | Prisma.SortOrder;
    USUARIOS?: Prisma.USUARIOSOrderByWithRelationInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESOrderByWithRelationInput;
    REPORTES?: Prisma.REPORTESOrderByRelationAggregateInput;
};
export type COMENTARIOSWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.COMENTARIOSWhereInput | Prisma.COMENTARIOSWhereInput[];
    OR?: Prisma.COMENTARIOSWhereInput[];
    NOT?: Prisma.COMENTARIOSWhereInput | Prisma.COMENTARIOSWhereInput[];
    publicacion_id?: Prisma.UuidFilter<"COMENTARIOS"> | string;
    autor_id?: Prisma.UuidFilter<"COMENTARIOS"> | string;
    contenido?: Prisma.StringFilter<"COMENTARIOS"> | string;
    creado_en?: Prisma.DateTimeFilter<"COMENTARIOS"> | Date | string;
    eliminado_en?: Prisma.DateTimeNullableFilter<"COMENTARIOS"> | Date | string | null;
    USUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
    PUBLICACIONES?: Prisma.XOR<Prisma.PUBLICACIONESScalarRelationFilter, Prisma.PUBLICACIONESWhereInput>;
    REPORTES?: Prisma.REPORTESListRelationFilter;
}, "id">;
export type COMENTARIOSOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrder;
    autor_id?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    eliminado_en?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.COMENTARIOSCountOrderByAggregateInput;
    _max?: Prisma.COMENTARIOSMaxOrderByAggregateInput;
    _min?: Prisma.COMENTARIOSMinOrderByAggregateInput;
};
export type COMENTARIOSScalarWhereWithAggregatesInput = {
    AND?: Prisma.COMENTARIOSScalarWhereWithAggregatesInput | Prisma.COMENTARIOSScalarWhereWithAggregatesInput[];
    OR?: Prisma.COMENTARIOSScalarWhereWithAggregatesInput[];
    NOT?: Prisma.COMENTARIOSScalarWhereWithAggregatesInput | Prisma.COMENTARIOSScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"COMENTARIOS"> | string;
    publicacion_id?: Prisma.UuidWithAggregatesFilter<"COMENTARIOS"> | string;
    autor_id?: Prisma.UuidWithAggregatesFilter<"COMENTARIOS"> | string;
    contenido?: Prisma.StringWithAggregatesFilter<"COMENTARIOS"> | string;
    creado_en?: Prisma.DateTimeWithAggregatesFilter<"COMENTARIOS"> | Date | string;
    eliminado_en?: Prisma.DateTimeNullableWithAggregatesFilter<"COMENTARIOS"> | Date | string | null;
};
export type COMENTARIOSCreateInput = {
    id?: string;
    contenido: string;
    creado_en?: Date | string;
    eliminado_en?: Date | string | null;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutCOMENTARIOSInput;
    PUBLICACIONES: Prisma.PUBLICACIONESCreateNestedOneWithoutCOMENTARIOSInput;
    REPORTES?: Prisma.REPORTESCreateNestedManyWithoutCOMENTARIOSInput;
};
export type COMENTARIOSUncheckedCreateInput = {
    id?: string;
    publicacion_id: string;
    autor_id: string;
    contenido: string;
    creado_en?: Date | string;
    eliminado_en?: Date | string | null;
    REPORTES?: Prisma.REPORTESUncheckedCreateNestedManyWithoutCOMENTARIOSInput;
};
export type COMENTARIOSUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminado_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutCOMENTARIOSNestedInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneRequiredWithoutCOMENTARIOSNestedInput;
    REPORTES?: Prisma.REPORTESUpdateManyWithoutCOMENTARIOSNestedInput;
};
export type COMENTARIOSUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_id?: Prisma.StringFieldUpdateOperationsInput | string;
    autor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminado_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    REPORTES?: Prisma.REPORTESUncheckedUpdateManyWithoutCOMENTARIOSNestedInput;
};
export type COMENTARIOSCreateManyInput = {
    id?: string;
    publicacion_id: string;
    autor_id: string;
    contenido: string;
    creado_en?: Date | string;
    eliminado_en?: Date | string | null;
};
export type COMENTARIOSUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminado_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type COMENTARIOSUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_id?: Prisma.StringFieldUpdateOperationsInput | string;
    autor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminado_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type COMENTARIOSCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrder;
    autor_id?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    eliminado_en?: Prisma.SortOrder;
};
export type COMENTARIOSMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrder;
    autor_id?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    eliminado_en?: Prisma.SortOrder;
};
export type COMENTARIOSMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrder;
    autor_id?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    eliminado_en?: Prisma.SortOrder;
};
export type COMENTARIOSListRelationFilter = {
    every?: Prisma.COMENTARIOSWhereInput;
    some?: Prisma.COMENTARIOSWhereInput;
    none?: Prisma.COMENTARIOSWhereInput;
};
export type COMENTARIOSOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type COMENTARIOSNullableScalarRelationFilter = {
    is?: Prisma.COMENTARIOSWhereInput | null;
    isNot?: Prisma.COMENTARIOSWhereInput | null;
};
export type COMENTARIOSCreateNestedManyWithoutPUBLICACIONESInput = {
    create?: Prisma.XOR<Prisma.COMENTARIOSCreateWithoutPUBLICACIONESInput, Prisma.COMENTARIOSUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.COMENTARIOSCreateWithoutPUBLICACIONESInput[] | Prisma.COMENTARIOSUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.COMENTARIOSCreateOrConnectWithoutPUBLICACIONESInput | Prisma.COMENTARIOSCreateOrConnectWithoutPUBLICACIONESInput[];
    createMany?: Prisma.COMENTARIOSCreateManyPUBLICACIONESInputEnvelope;
    connect?: Prisma.COMENTARIOSWhereUniqueInput | Prisma.COMENTARIOSWhereUniqueInput[];
};
export type COMENTARIOSUncheckedCreateNestedManyWithoutPUBLICACIONESInput = {
    create?: Prisma.XOR<Prisma.COMENTARIOSCreateWithoutPUBLICACIONESInput, Prisma.COMENTARIOSUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.COMENTARIOSCreateWithoutPUBLICACIONESInput[] | Prisma.COMENTARIOSUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.COMENTARIOSCreateOrConnectWithoutPUBLICACIONESInput | Prisma.COMENTARIOSCreateOrConnectWithoutPUBLICACIONESInput[];
    createMany?: Prisma.COMENTARIOSCreateManyPUBLICACIONESInputEnvelope;
    connect?: Prisma.COMENTARIOSWhereUniqueInput | Prisma.COMENTARIOSWhereUniqueInput[];
};
export type COMENTARIOSUpdateManyWithoutPUBLICACIONESNestedInput = {
    create?: Prisma.XOR<Prisma.COMENTARIOSCreateWithoutPUBLICACIONESInput, Prisma.COMENTARIOSUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.COMENTARIOSCreateWithoutPUBLICACIONESInput[] | Prisma.COMENTARIOSUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.COMENTARIOSCreateOrConnectWithoutPUBLICACIONESInput | Prisma.COMENTARIOSCreateOrConnectWithoutPUBLICACIONESInput[];
    upsert?: Prisma.COMENTARIOSUpsertWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.COMENTARIOSUpsertWithWhereUniqueWithoutPUBLICACIONESInput[];
    createMany?: Prisma.COMENTARIOSCreateManyPUBLICACIONESInputEnvelope;
    set?: Prisma.COMENTARIOSWhereUniqueInput | Prisma.COMENTARIOSWhereUniqueInput[];
    disconnect?: Prisma.COMENTARIOSWhereUniqueInput | Prisma.COMENTARIOSWhereUniqueInput[];
    delete?: Prisma.COMENTARIOSWhereUniqueInput | Prisma.COMENTARIOSWhereUniqueInput[];
    connect?: Prisma.COMENTARIOSWhereUniqueInput | Prisma.COMENTARIOSWhereUniqueInput[];
    update?: Prisma.COMENTARIOSUpdateWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.COMENTARIOSUpdateWithWhereUniqueWithoutPUBLICACIONESInput[];
    updateMany?: Prisma.COMENTARIOSUpdateManyWithWhereWithoutPUBLICACIONESInput | Prisma.COMENTARIOSUpdateManyWithWhereWithoutPUBLICACIONESInput[];
    deleteMany?: Prisma.COMENTARIOSScalarWhereInput | Prisma.COMENTARIOSScalarWhereInput[];
};
export type COMENTARIOSUncheckedUpdateManyWithoutPUBLICACIONESNestedInput = {
    create?: Prisma.XOR<Prisma.COMENTARIOSCreateWithoutPUBLICACIONESInput, Prisma.COMENTARIOSUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.COMENTARIOSCreateWithoutPUBLICACIONESInput[] | Prisma.COMENTARIOSUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.COMENTARIOSCreateOrConnectWithoutPUBLICACIONESInput | Prisma.COMENTARIOSCreateOrConnectWithoutPUBLICACIONESInput[];
    upsert?: Prisma.COMENTARIOSUpsertWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.COMENTARIOSUpsertWithWhereUniqueWithoutPUBLICACIONESInput[];
    createMany?: Prisma.COMENTARIOSCreateManyPUBLICACIONESInputEnvelope;
    set?: Prisma.COMENTARIOSWhereUniqueInput | Prisma.COMENTARIOSWhereUniqueInput[];
    disconnect?: Prisma.COMENTARIOSWhereUniqueInput | Prisma.COMENTARIOSWhereUniqueInput[];
    delete?: Prisma.COMENTARIOSWhereUniqueInput | Prisma.COMENTARIOSWhereUniqueInput[];
    connect?: Prisma.COMENTARIOSWhereUniqueInput | Prisma.COMENTARIOSWhereUniqueInput[];
    update?: Prisma.COMENTARIOSUpdateWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.COMENTARIOSUpdateWithWhereUniqueWithoutPUBLICACIONESInput[];
    updateMany?: Prisma.COMENTARIOSUpdateManyWithWhereWithoutPUBLICACIONESInput | Prisma.COMENTARIOSUpdateManyWithWhereWithoutPUBLICACIONESInput[];
    deleteMany?: Prisma.COMENTARIOSScalarWhereInput | Prisma.COMENTARIOSScalarWhereInput[];
};
export type COMENTARIOSCreateNestedOneWithoutREPORTESInput = {
    create?: Prisma.XOR<Prisma.COMENTARIOSCreateWithoutREPORTESInput, Prisma.COMENTARIOSUncheckedCreateWithoutREPORTESInput>;
    connectOrCreate?: Prisma.COMENTARIOSCreateOrConnectWithoutREPORTESInput;
    connect?: Prisma.COMENTARIOSWhereUniqueInput;
};
export type COMENTARIOSUpdateOneWithoutREPORTESNestedInput = {
    create?: Prisma.XOR<Prisma.COMENTARIOSCreateWithoutREPORTESInput, Prisma.COMENTARIOSUncheckedCreateWithoutREPORTESInput>;
    connectOrCreate?: Prisma.COMENTARIOSCreateOrConnectWithoutREPORTESInput;
    upsert?: Prisma.COMENTARIOSUpsertWithoutREPORTESInput;
    disconnect?: Prisma.COMENTARIOSWhereInput | boolean;
    delete?: Prisma.COMENTARIOSWhereInput | boolean;
    connect?: Prisma.COMENTARIOSWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.COMENTARIOSUpdateToOneWithWhereWithoutREPORTESInput, Prisma.COMENTARIOSUpdateWithoutREPORTESInput>, Prisma.COMENTARIOSUncheckedUpdateWithoutREPORTESInput>;
};
export type COMENTARIOSCreateNestedManyWithoutUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.COMENTARIOSCreateWithoutUSUARIOSInput, Prisma.COMENTARIOSUncheckedCreateWithoutUSUARIOSInput> | Prisma.COMENTARIOSCreateWithoutUSUARIOSInput[] | Prisma.COMENTARIOSUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.COMENTARIOSCreateOrConnectWithoutUSUARIOSInput | Prisma.COMENTARIOSCreateOrConnectWithoutUSUARIOSInput[];
    createMany?: Prisma.COMENTARIOSCreateManyUSUARIOSInputEnvelope;
    connect?: Prisma.COMENTARIOSWhereUniqueInput | Prisma.COMENTARIOSWhereUniqueInput[];
};
export type COMENTARIOSUncheckedCreateNestedManyWithoutUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.COMENTARIOSCreateWithoutUSUARIOSInput, Prisma.COMENTARIOSUncheckedCreateWithoutUSUARIOSInput> | Prisma.COMENTARIOSCreateWithoutUSUARIOSInput[] | Prisma.COMENTARIOSUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.COMENTARIOSCreateOrConnectWithoutUSUARIOSInput | Prisma.COMENTARIOSCreateOrConnectWithoutUSUARIOSInput[];
    createMany?: Prisma.COMENTARIOSCreateManyUSUARIOSInputEnvelope;
    connect?: Prisma.COMENTARIOSWhereUniqueInput | Prisma.COMENTARIOSWhereUniqueInput[];
};
export type COMENTARIOSUpdateManyWithoutUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.COMENTARIOSCreateWithoutUSUARIOSInput, Prisma.COMENTARIOSUncheckedCreateWithoutUSUARIOSInput> | Prisma.COMENTARIOSCreateWithoutUSUARIOSInput[] | Prisma.COMENTARIOSUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.COMENTARIOSCreateOrConnectWithoutUSUARIOSInput | Prisma.COMENTARIOSCreateOrConnectWithoutUSUARIOSInput[];
    upsert?: Prisma.COMENTARIOSUpsertWithWhereUniqueWithoutUSUARIOSInput | Prisma.COMENTARIOSUpsertWithWhereUniqueWithoutUSUARIOSInput[];
    createMany?: Prisma.COMENTARIOSCreateManyUSUARIOSInputEnvelope;
    set?: Prisma.COMENTARIOSWhereUniqueInput | Prisma.COMENTARIOSWhereUniqueInput[];
    disconnect?: Prisma.COMENTARIOSWhereUniqueInput | Prisma.COMENTARIOSWhereUniqueInput[];
    delete?: Prisma.COMENTARIOSWhereUniqueInput | Prisma.COMENTARIOSWhereUniqueInput[];
    connect?: Prisma.COMENTARIOSWhereUniqueInput | Prisma.COMENTARIOSWhereUniqueInput[];
    update?: Prisma.COMENTARIOSUpdateWithWhereUniqueWithoutUSUARIOSInput | Prisma.COMENTARIOSUpdateWithWhereUniqueWithoutUSUARIOSInput[];
    updateMany?: Prisma.COMENTARIOSUpdateManyWithWhereWithoutUSUARIOSInput | Prisma.COMENTARIOSUpdateManyWithWhereWithoutUSUARIOSInput[];
    deleteMany?: Prisma.COMENTARIOSScalarWhereInput | Prisma.COMENTARIOSScalarWhereInput[];
};
export type COMENTARIOSUncheckedUpdateManyWithoutUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.COMENTARIOSCreateWithoutUSUARIOSInput, Prisma.COMENTARIOSUncheckedCreateWithoutUSUARIOSInput> | Prisma.COMENTARIOSCreateWithoutUSUARIOSInput[] | Prisma.COMENTARIOSUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.COMENTARIOSCreateOrConnectWithoutUSUARIOSInput | Prisma.COMENTARIOSCreateOrConnectWithoutUSUARIOSInput[];
    upsert?: Prisma.COMENTARIOSUpsertWithWhereUniqueWithoutUSUARIOSInput | Prisma.COMENTARIOSUpsertWithWhereUniqueWithoutUSUARIOSInput[];
    createMany?: Prisma.COMENTARIOSCreateManyUSUARIOSInputEnvelope;
    set?: Prisma.COMENTARIOSWhereUniqueInput | Prisma.COMENTARIOSWhereUniqueInput[];
    disconnect?: Prisma.COMENTARIOSWhereUniqueInput | Prisma.COMENTARIOSWhereUniqueInput[];
    delete?: Prisma.COMENTARIOSWhereUniqueInput | Prisma.COMENTARIOSWhereUniqueInput[];
    connect?: Prisma.COMENTARIOSWhereUniqueInput | Prisma.COMENTARIOSWhereUniqueInput[];
    update?: Prisma.COMENTARIOSUpdateWithWhereUniqueWithoutUSUARIOSInput | Prisma.COMENTARIOSUpdateWithWhereUniqueWithoutUSUARIOSInput[];
    updateMany?: Prisma.COMENTARIOSUpdateManyWithWhereWithoutUSUARIOSInput | Prisma.COMENTARIOSUpdateManyWithWhereWithoutUSUARIOSInput[];
    deleteMany?: Prisma.COMENTARIOSScalarWhereInput | Prisma.COMENTARIOSScalarWhereInput[];
};
export type COMENTARIOSCreateWithoutPUBLICACIONESInput = {
    id?: string;
    contenido: string;
    creado_en?: Date | string;
    eliminado_en?: Date | string | null;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutCOMENTARIOSInput;
    REPORTES?: Prisma.REPORTESCreateNestedManyWithoutCOMENTARIOSInput;
};
export type COMENTARIOSUncheckedCreateWithoutPUBLICACIONESInput = {
    id?: string;
    autor_id: string;
    contenido: string;
    creado_en?: Date | string;
    eliminado_en?: Date | string | null;
    REPORTES?: Prisma.REPORTESUncheckedCreateNestedManyWithoutCOMENTARIOSInput;
};
export type COMENTARIOSCreateOrConnectWithoutPUBLICACIONESInput = {
    where: Prisma.COMENTARIOSWhereUniqueInput;
    create: Prisma.XOR<Prisma.COMENTARIOSCreateWithoutPUBLICACIONESInput, Prisma.COMENTARIOSUncheckedCreateWithoutPUBLICACIONESInput>;
};
export type COMENTARIOSCreateManyPUBLICACIONESInputEnvelope = {
    data: Prisma.COMENTARIOSCreateManyPUBLICACIONESInput | Prisma.COMENTARIOSCreateManyPUBLICACIONESInput[];
    skipDuplicates?: boolean;
};
export type COMENTARIOSUpsertWithWhereUniqueWithoutPUBLICACIONESInput = {
    where: Prisma.COMENTARIOSWhereUniqueInput;
    update: Prisma.XOR<Prisma.COMENTARIOSUpdateWithoutPUBLICACIONESInput, Prisma.COMENTARIOSUncheckedUpdateWithoutPUBLICACIONESInput>;
    create: Prisma.XOR<Prisma.COMENTARIOSCreateWithoutPUBLICACIONESInput, Prisma.COMENTARIOSUncheckedCreateWithoutPUBLICACIONESInput>;
};
export type COMENTARIOSUpdateWithWhereUniqueWithoutPUBLICACIONESInput = {
    where: Prisma.COMENTARIOSWhereUniqueInput;
    data: Prisma.XOR<Prisma.COMENTARIOSUpdateWithoutPUBLICACIONESInput, Prisma.COMENTARIOSUncheckedUpdateWithoutPUBLICACIONESInput>;
};
export type COMENTARIOSUpdateManyWithWhereWithoutPUBLICACIONESInput = {
    where: Prisma.COMENTARIOSScalarWhereInput;
    data: Prisma.XOR<Prisma.COMENTARIOSUpdateManyMutationInput, Prisma.COMENTARIOSUncheckedUpdateManyWithoutPUBLICACIONESInput>;
};
export type COMENTARIOSScalarWhereInput = {
    AND?: Prisma.COMENTARIOSScalarWhereInput | Prisma.COMENTARIOSScalarWhereInput[];
    OR?: Prisma.COMENTARIOSScalarWhereInput[];
    NOT?: Prisma.COMENTARIOSScalarWhereInput | Prisma.COMENTARIOSScalarWhereInput[];
    id?: Prisma.UuidFilter<"COMENTARIOS"> | string;
    publicacion_id?: Prisma.UuidFilter<"COMENTARIOS"> | string;
    autor_id?: Prisma.UuidFilter<"COMENTARIOS"> | string;
    contenido?: Prisma.StringFilter<"COMENTARIOS"> | string;
    creado_en?: Prisma.DateTimeFilter<"COMENTARIOS"> | Date | string;
    eliminado_en?: Prisma.DateTimeNullableFilter<"COMENTARIOS"> | Date | string | null;
};
export type COMENTARIOSCreateWithoutREPORTESInput = {
    id?: string;
    contenido: string;
    creado_en?: Date | string;
    eliminado_en?: Date | string | null;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutCOMENTARIOSInput;
    PUBLICACIONES: Prisma.PUBLICACIONESCreateNestedOneWithoutCOMENTARIOSInput;
};
export type COMENTARIOSUncheckedCreateWithoutREPORTESInput = {
    id?: string;
    publicacion_id: string;
    autor_id: string;
    contenido: string;
    creado_en?: Date | string;
    eliminado_en?: Date | string | null;
};
export type COMENTARIOSCreateOrConnectWithoutREPORTESInput = {
    where: Prisma.COMENTARIOSWhereUniqueInput;
    create: Prisma.XOR<Prisma.COMENTARIOSCreateWithoutREPORTESInput, Prisma.COMENTARIOSUncheckedCreateWithoutREPORTESInput>;
};
export type COMENTARIOSUpsertWithoutREPORTESInput = {
    update: Prisma.XOR<Prisma.COMENTARIOSUpdateWithoutREPORTESInput, Prisma.COMENTARIOSUncheckedUpdateWithoutREPORTESInput>;
    create: Prisma.XOR<Prisma.COMENTARIOSCreateWithoutREPORTESInput, Prisma.COMENTARIOSUncheckedCreateWithoutREPORTESInput>;
    where?: Prisma.COMENTARIOSWhereInput;
};
export type COMENTARIOSUpdateToOneWithWhereWithoutREPORTESInput = {
    where?: Prisma.COMENTARIOSWhereInput;
    data: Prisma.XOR<Prisma.COMENTARIOSUpdateWithoutREPORTESInput, Prisma.COMENTARIOSUncheckedUpdateWithoutREPORTESInput>;
};
export type COMENTARIOSUpdateWithoutREPORTESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminado_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutCOMENTARIOSNestedInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneRequiredWithoutCOMENTARIOSNestedInput;
};
export type COMENTARIOSUncheckedUpdateWithoutREPORTESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_id?: Prisma.StringFieldUpdateOperationsInput | string;
    autor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminado_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type COMENTARIOSCreateWithoutUSUARIOSInput = {
    id?: string;
    contenido: string;
    creado_en?: Date | string;
    eliminado_en?: Date | string | null;
    PUBLICACIONES: Prisma.PUBLICACIONESCreateNestedOneWithoutCOMENTARIOSInput;
    REPORTES?: Prisma.REPORTESCreateNestedManyWithoutCOMENTARIOSInput;
};
export type COMENTARIOSUncheckedCreateWithoutUSUARIOSInput = {
    id?: string;
    publicacion_id: string;
    contenido: string;
    creado_en?: Date | string;
    eliminado_en?: Date | string | null;
    REPORTES?: Prisma.REPORTESUncheckedCreateNestedManyWithoutCOMENTARIOSInput;
};
export type COMENTARIOSCreateOrConnectWithoutUSUARIOSInput = {
    where: Prisma.COMENTARIOSWhereUniqueInput;
    create: Prisma.XOR<Prisma.COMENTARIOSCreateWithoutUSUARIOSInput, Prisma.COMENTARIOSUncheckedCreateWithoutUSUARIOSInput>;
};
export type COMENTARIOSCreateManyUSUARIOSInputEnvelope = {
    data: Prisma.COMENTARIOSCreateManyUSUARIOSInput | Prisma.COMENTARIOSCreateManyUSUARIOSInput[];
    skipDuplicates?: boolean;
};
export type COMENTARIOSUpsertWithWhereUniqueWithoutUSUARIOSInput = {
    where: Prisma.COMENTARIOSWhereUniqueInput;
    update: Prisma.XOR<Prisma.COMENTARIOSUpdateWithoutUSUARIOSInput, Prisma.COMENTARIOSUncheckedUpdateWithoutUSUARIOSInput>;
    create: Prisma.XOR<Prisma.COMENTARIOSCreateWithoutUSUARIOSInput, Prisma.COMENTARIOSUncheckedCreateWithoutUSUARIOSInput>;
};
export type COMENTARIOSUpdateWithWhereUniqueWithoutUSUARIOSInput = {
    where: Prisma.COMENTARIOSWhereUniqueInput;
    data: Prisma.XOR<Prisma.COMENTARIOSUpdateWithoutUSUARIOSInput, Prisma.COMENTARIOSUncheckedUpdateWithoutUSUARIOSInput>;
};
export type COMENTARIOSUpdateManyWithWhereWithoutUSUARIOSInput = {
    where: Prisma.COMENTARIOSScalarWhereInput;
    data: Prisma.XOR<Prisma.COMENTARIOSUpdateManyMutationInput, Prisma.COMENTARIOSUncheckedUpdateManyWithoutUSUARIOSInput>;
};
export type COMENTARIOSCreateManyPUBLICACIONESInput = {
    id?: string;
    autor_id: string;
    contenido: string;
    creado_en?: Date | string;
    eliminado_en?: Date | string | null;
};
export type COMENTARIOSUpdateWithoutPUBLICACIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminado_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutCOMENTARIOSNestedInput;
    REPORTES?: Prisma.REPORTESUpdateManyWithoutCOMENTARIOSNestedInput;
};
export type COMENTARIOSUncheckedUpdateWithoutPUBLICACIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    autor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminado_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    REPORTES?: Prisma.REPORTESUncheckedUpdateManyWithoutCOMENTARIOSNestedInput;
};
export type COMENTARIOSUncheckedUpdateManyWithoutPUBLICACIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    autor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminado_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type COMENTARIOSCreateManyUSUARIOSInput = {
    id?: string;
    publicacion_id: string;
    contenido: string;
    creado_en?: Date | string;
    eliminado_en?: Date | string | null;
};
export type COMENTARIOSUpdateWithoutUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminado_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneRequiredWithoutCOMENTARIOSNestedInput;
    REPORTES?: Prisma.REPORTESUpdateManyWithoutCOMENTARIOSNestedInput;
};
export type COMENTARIOSUncheckedUpdateWithoutUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminado_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    REPORTES?: Prisma.REPORTESUncheckedUpdateManyWithoutCOMENTARIOSNestedInput;
};
export type COMENTARIOSUncheckedUpdateManyWithoutUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminado_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type COMENTARIOSCountOutputType = {
    REPORTES: number;
};
export type COMENTARIOSCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    REPORTES?: boolean | COMENTARIOSCountOutputTypeCountREPORTESArgs;
};
export type COMENTARIOSCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.COMENTARIOSCountOutputTypeSelect<ExtArgs> | null;
};
export type COMENTARIOSCountOutputTypeCountREPORTESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.REPORTESWhereInput;
};
export type COMENTARIOSSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    publicacion_id?: boolean;
    autor_id?: boolean;
    contenido?: boolean;
    creado_en?: boolean;
    eliminado_en?: boolean;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.PUBLICACIONESDefaultArgs<ExtArgs>;
    REPORTES?: boolean | Prisma.COMENTARIOS$REPORTESArgs<ExtArgs>;
    _count?: boolean | Prisma.COMENTARIOSCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cOMENTARIOS"]>;
export type COMENTARIOSSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    publicacion_id?: boolean;
    autor_id?: boolean;
    contenido?: boolean;
    creado_en?: boolean;
    eliminado_en?: boolean;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.PUBLICACIONESDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cOMENTARIOS"]>;
export type COMENTARIOSSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    publicacion_id?: boolean;
    autor_id?: boolean;
    contenido?: boolean;
    creado_en?: boolean;
    eliminado_en?: boolean;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.PUBLICACIONESDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cOMENTARIOS"]>;
export type COMENTARIOSSelectScalar = {
    id?: boolean;
    publicacion_id?: boolean;
    autor_id?: boolean;
    contenido?: boolean;
    creado_en?: boolean;
    eliminado_en?: boolean;
};
export type COMENTARIOSOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "publicacion_id" | "autor_id" | "contenido" | "creado_en" | "eliminado_en", ExtArgs["result"]["cOMENTARIOS"]>;
export type COMENTARIOSInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.PUBLICACIONESDefaultArgs<ExtArgs>;
    REPORTES?: boolean | Prisma.COMENTARIOS$REPORTESArgs<ExtArgs>;
    _count?: boolean | Prisma.COMENTARIOSCountOutputTypeDefaultArgs<ExtArgs>;
};
export type COMENTARIOSIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.PUBLICACIONESDefaultArgs<ExtArgs>;
};
export type COMENTARIOSIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.PUBLICACIONESDefaultArgs<ExtArgs>;
};
export type $COMENTARIOSPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "COMENTARIOS";
    objects: {
        USUARIOS: Prisma.$USUARIOSPayload<ExtArgs>;
        PUBLICACIONES: Prisma.$PUBLICACIONESPayload<ExtArgs>;
        REPORTES: Prisma.$REPORTESPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        publicacion_id: string;
        autor_id: string;
        contenido: string;
        creado_en: Date;
        eliminado_en: Date | null;
    }, ExtArgs["result"]["cOMENTARIOS"]>;
    composites: {};
};
export type COMENTARIOSGetPayload<S extends boolean | null | undefined | COMENTARIOSDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$COMENTARIOSPayload, S>;
export type COMENTARIOSCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<COMENTARIOSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: COMENTARIOSCountAggregateInputType | true;
};
export interface COMENTARIOSDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['COMENTARIOS'];
        meta: {
            name: 'COMENTARIOS';
        };
    };
    findUnique<T extends COMENTARIOSFindUniqueArgs>(args: Prisma.SelectSubset<T, COMENTARIOSFindUniqueArgs<ExtArgs>>): Prisma.Prisma__COMENTARIOSClient<runtime.Types.Result.GetResult<Prisma.$COMENTARIOSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends COMENTARIOSFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, COMENTARIOSFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__COMENTARIOSClient<runtime.Types.Result.GetResult<Prisma.$COMENTARIOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends COMENTARIOSFindFirstArgs>(args?: Prisma.SelectSubset<T, COMENTARIOSFindFirstArgs<ExtArgs>>): Prisma.Prisma__COMENTARIOSClient<runtime.Types.Result.GetResult<Prisma.$COMENTARIOSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends COMENTARIOSFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, COMENTARIOSFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__COMENTARIOSClient<runtime.Types.Result.GetResult<Prisma.$COMENTARIOSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends COMENTARIOSFindManyArgs>(args?: Prisma.SelectSubset<T, COMENTARIOSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$COMENTARIOSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends COMENTARIOSCreateArgs>(args: Prisma.SelectSubset<T, COMENTARIOSCreateArgs<ExtArgs>>): Prisma.Prisma__COMENTARIOSClient<runtime.Types.Result.GetResult<Prisma.$COMENTARIOSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends COMENTARIOSCreateManyArgs>(args?: Prisma.SelectSubset<T, COMENTARIOSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends COMENTARIOSCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, COMENTARIOSCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$COMENTARIOSPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends COMENTARIOSDeleteArgs>(args: Prisma.SelectSubset<T, COMENTARIOSDeleteArgs<ExtArgs>>): Prisma.Prisma__COMENTARIOSClient<runtime.Types.Result.GetResult<Prisma.$COMENTARIOSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends COMENTARIOSUpdateArgs>(args: Prisma.SelectSubset<T, COMENTARIOSUpdateArgs<ExtArgs>>): Prisma.Prisma__COMENTARIOSClient<runtime.Types.Result.GetResult<Prisma.$COMENTARIOSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends COMENTARIOSDeleteManyArgs>(args?: Prisma.SelectSubset<T, COMENTARIOSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends COMENTARIOSUpdateManyArgs>(args: Prisma.SelectSubset<T, COMENTARIOSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends COMENTARIOSUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, COMENTARIOSUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$COMENTARIOSPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends COMENTARIOSUpsertArgs>(args: Prisma.SelectSubset<T, COMENTARIOSUpsertArgs<ExtArgs>>): Prisma.Prisma__COMENTARIOSClient<runtime.Types.Result.GetResult<Prisma.$COMENTARIOSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends COMENTARIOSCountArgs>(args?: Prisma.Subset<T, COMENTARIOSCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], COMENTARIOSCountAggregateOutputType> : number>;
    aggregate<T extends COMENTARIOSAggregateArgs>(args: Prisma.Subset<T, COMENTARIOSAggregateArgs>): Prisma.PrismaPromise<GetCOMENTARIOSAggregateType<T>>;
    groupBy<T extends COMENTARIOSGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: COMENTARIOSGroupByArgs['orderBy'];
    } : {
        orderBy?: COMENTARIOSGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, COMENTARIOSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCOMENTARIOSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: COMENTARIOSFieldRefs;
}
export interface Prisma__COMENTARIOSClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    USUARIOS<T extends Prisma.USUARIOSDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.USUARIOSDefaultArgs<ExtArgs>>): Prisma.Prisma__USUARIOSClient<runtime.Types.Result.GetResult<Prisma.$USUARIOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    PUBLICACIONES<T extends Prisma.PUBLICACIONESDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PUBLICACIONESDefaultArgs<ExtArgs>>): Prisma.Prisma__PUBLICACIONESClient<runtime.Types.Result.GetResult<Prisma.$PUBLICACIONESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    REPORTES<T extends Prisma.COMENTARIOS$REPORTESArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.COMENTARIOS$REPORTESArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$REPORTESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface COMENTARIOSFieldRefs {
    readonly id: Prisma.FieldRef<"COMENTARIOS", 'String'>;
    readonly publicacion_id: Prisma.FieldRef<"COMENTARIOS", 'String'>;
    readonly autor_id: Prisma.FieldRef<"COMENTARIOS", 'String'>;
    readonly contenido: Prisma.FieldRef<"COMENTARIOS", 'String'>;
    readonly creado_en: Prisma.FieldRef<"COMENTARIOS", 'DateTime'>;
    readonly eliminado_en: Prisma.FieldRef<"COMENTARIOS", 'DateTime'>;
}
export type COMENTARIOSFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.COMENTARIOSSelect<ExtArgs> | null;
    omit?: Prisma.COMENTARIOSOmit<ExtArgs> | null;
    include?: Prisma.COMENTARIOSInclude<ExtArgs> | null;
    where: Prisma.COMENTARIOSWhereUniqueInput;
};
export type COMENTARIOSFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.COMENTARIOSSelect<ExtArgs> | null;
    omit?: Prisma.COMENTARIOSOmit<ExtArgs> | null;
    include?: Prisma.COMENTARIOSInclude<ExtArgs> | null;
    where: Prisma.COMENTARIOSWhereUniqueInput;
};
export type COMENTARIOSFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.COMENTARIOSSelect<ExtArgs> | null;
    omit?: Prisma.COMENTARIOSOmit<ExtArgs> | null;
    include?: Prisma.COMENTARIOSInclude<ExtArgs> | null;
    where?: Prisma.COMENTARIOSWhereInput;
    orderBy?: Prisma.COMENTARIOSOrderByWithRelationInput | Prisma.COMENTARIOSOrderByWithRelationInput[];
    cursor?: Prisma.COMENTARIOSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.COMENTARIOSScalarFieldEnum | Prisma.COMENTARIOSScalarFieldEnum[];
};
export type COMENTARIOSFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.COMENTARIOSSelect<ExtArgs> | null;
    omit?: Prisma.COMENTARIOSOmit<ExtArgs> | null;
    include?: Prisma.COMENTARIOSInclude<ExtArgs> | null;
    where?: Prisma.COMENTARIOSWhereInput;
    orderBy?: Prisma.COMENTARIOSOrderByWithRelationInput | Prisma.COMENTARIOSOrderByWithRelationInput[];
    cursor?: Prisma.COMENTARIOSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.COMENTARIOSScalarFieldEnum | Prisma.COMENTARIOSScalarFieldEnum[];
};
export type COMENTARIOSFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.COMENTARIOSSelect<ExtArgs> | null;
    omit?: Prisma.COMENTARIOSOmit<ExtArgs> | null;
    include?: Prisma.COMENTARIOSInclude<ExtArgs> | null;
    where?: Prisma.COMENTARIOSWhereInput;
    orderBy?: Prisma.COMENTARIOSOrderByWithRelationInput | Prisma.COMENTARIOSOrderByWithRelationInput[];
    cursor?: Prisma.COMENTARIOSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.COMENTARIOSScalarFieldEnum | Prisma.COMENTARIOSScalarFieldEnum[];
};
export type COMENTARIOSCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.COMENTARIOSSelect<ExtArgs> | null;
    omit?: Prisma.COMENTARIOSOmit<ExtArgs> | null;
    include?: Prisma.COMENTARIOSInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.COMENTARIOSCreateInput, Prisma.COMENTARIOSUncheckedCreateInput>;
};
export type COMENTARIOSCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.COMENTARIOSCreateManyInput | Prisma.COMENTARIOSCreateManyInput[];
    skipDuplicates?: boolean;
};
export type COMENTARIOSCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.COMENTARIOSSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.COMENTARIOSOmit<ExtArgs> | null;
    data: Prisma.COMENTARIOSCreateManyInput | Prisma.COMENTARIOSCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.COMENTARIOSIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type COMENTARIOSUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.COMENTARIOSSelect<ExtArgs> | null;
    omit?: Prisma.COMENTARIOSOmit<ExtArgs> | null;
    include?: Prisma.COMENTARIOSInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.COMENTARIOSUpdateInput, Prisma.COMENTARIOSUncheckedUpdateInput>;
    where: Prisma.COMENTARIOSWhereUniqueInput;
};
export type COMENTARIOSUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.COMENTARIOSUpdateManyMutationInput, Prisma.COMENTARIOSUncheckedUpdateManyInput>;
    where?: Prisma.COMENTARIOSWhereInput;
    limit?: number;
};
export type COMENTARIOSUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.COMENTARIOSSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.COMENTARIOSOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.COMENTARIOSUpdateManyMutationInput, Prisma.COMENTARIOSUncheckedUpdateManyInput>;
    where?: Prisma.COMENTARIOSWhereInput;
    limit?: number;
    include?: Prisma.COMENTARIOSIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type COMENTARIOSUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.COMENTARIOSSelect<ExtArgs> | null;
    omit?: Prisma.COMENTARIOSOmit<ExtArgs> | null;
    include?: Prisma.COMENTARIOSInclude<ExtArgs> | null;
    where: Prisma.COMENTARIOSWhereUniqueInput;
    create: Prisma.XOR<Prisma.COMENTARIOSCreateInput, Prisma.COMENTARIOSUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.COMENTARIOSUpdateInput, Prisma.COMENTARIOSUncheckedUpdateInput>;
};
export type COMENTARIOSDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.COMENTARIOSSelect<ExtArgs> | null;
    omit?: Prisma.COMENTARIOSOmit<ExtArgs> | null;
    include?: Prisma.COMENTARIOSInclude<ExtArgs> | null;
    where: Prisma.COMENTARIOSWhereUniqueInput;
};
export type COMENTARIOSDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.COMENTARIOSWhereInput;
    limit?: number;
};
export type COMENTARIOS$REPORTESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REPORTESSelect<ExtArgs> | null;
    omit?: Prisma.REPORTESOmit<ExtArgs> | null;
    include?: Prisma.REPORTESInclude<ExtArgs> | null;
    where?: Prisma.REPORTESWhereInput;
    orderBy?: Prisma.REPORTESOrderByWithRelationInput | Prisma.REPORTESOrderByWithRelationInput[];
    cursor?: Prisma.REPORTESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.REPORTESScalarFieldEnum | Prisma.REPORTESScalarFieldEnum[];
};
export type COMENTARIOSDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.COMENTARIOSSelect<ExtArgs> | null;
    omit?: Prisma.COMENTARIOSOmit<ExtArgs> | null;
    include?: Prisma.COMENTARIOSInclude<ExtArgs> | null;
};
