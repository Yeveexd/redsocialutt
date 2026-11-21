import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GRUPOSModel = runtime.Types.Result.DefaultSelection<Prisma.$GRUPOSPayload>;
export type AggregateGRUPOS = {
    _count: GRUPOSCountAggregateOutputType | null;
    _avg: GRUPOSAvgAggregateOutputType | null;
    _sum: GRUPOSSumAggregateOutputType | null;
    _min: GRUPOSMinAggregateOutputType | null;
    _max: GRUPOSMaxAggregateOutputType | null;
};
export type GRUPOSAvgAggregateOutputType = {
    carrera_id: number | null;
};
export type GRUPOSSumAggregateOutputType = {
    carrera_id: number | null;
};
export type GRUPOSMinAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    descripcion: string | null;
    imagen_url: string | null;
    tipo: string | null;
    privacidad: string | null;
    carrera_id: number | null;
    creador_id: string | null;
    creado_en: Date | null;
};
export type GRUPOSMaxAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    descripcion: string | null;
    imagen_url: string | null;
    tipo: string | null;
    privacidad: string | null;
    carrera_id: number | null;
    creador_id: string | null;
    creado_en: Date | null;
};
export type GRUPOSCountAggregateOutputType = {
    id: number;
    nombre: number;
    descripcion: number;
    imagen_url: number;
    tipo: number;
    privacidad: number;
    carrera_id: number;
    creador_id: number;
    creado_en: number;
    _all: number;
};
export type GRUPOSAvgAggregateInputType = {
    carrera_id?: true;
};
export type GRUPOSSumAggregateInputType = {
    carrera_id?: true;
};
export type GRUPOSMinAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    imagen_url?: true;
    tipo?: true;
    privacidad?: true;
    carrera_id?: true;
    creador_id?: true;
    creado_en?: true;
};
export type GRUPOSMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    imagen_url?: true;
    tipo?: true;
    privacidad?: true;
    carrera_id?: true;
    creador_id?: true;
    creado_en?: true;
};
export type GRUPOSCountAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    imagen_url?: true;
    tipo?: true;
    privacidad?: true;
    carrera_id?: true;
    creador_id?: true;
    creado_en?: true;
    _all?: true;
};
export type GRUPOSAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GRUPOSWhereInput;
    orderBy?: Prisma.GRUPOSOrderByWithRelationInput | Prisma.GRUPOSOrderByWithRelationInput[];
    cursor?: Prisma.GRUPOSWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GRUPOSCountAggregateInputType;
    _avg?: GRUPOSAvgAggregateInputType;
    _sum?: GRUPOSSumAggregateInputType;
    _min?: GRUPOSMinAggregateInputType;
    _max?: GRUPOSMaxAggregateInputType;
};
export type GetGRUPOSAggregateType<T extends GRUPOSAggregateArgs> = {
    [P in keyof T & keyof AggregateGRUPOS]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGRUPOS[P]> : Prisma.GetScalarType<T[P], AggregateGRUPOS[P]>;
};
export type GRUPOSGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GRUPOSWhereInput;
    orderBy?: Prisma.GRUPOSOrderByWithAggregationInput | Prisma.GRUPOSOrderByWithAggregationInput[];
    by: Prisma.GRUPOSScalarFieldEnum[] | Prisma.GRUPOSScalarFieldEnum;
    having?: Prisma.GRUPOSScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GRUPOSCountAggregateInputType | true;
    _avg?: GRUPOSAvgAggregateInputType;
    _sum?: GRUPOSSumAggregateInputType;
    _min?: GRUPOSMinAggregateInputType;
    _max?: GRUPOSMaxAggregateInputType;
};
export type GRUPOSGroupByOutputType = {
    id: string;
    nombre: string;
    descripcion: string | null;
    imagen_url: string | null;
    tipo: string;
    privacidad: string;
    carrera_id: number | null;
    creador_id: string;
    creado_en: Date;
    _count: GRUPOSCountAggregateOutputType | null;
    _avg: GRUPOSAvgAggregateOutputType | null;
    _sum: GRUPOSSumAggregateOutputType | null;
    _min: GRUPOSMinAggregateOutputType | null;
    _max: GRUPOSMaxAggregateOutputType | null;
};
export type GetGRUPOSGroupByPayload<T extends GRUPOSGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GRUPOSGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GRUPOSGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GRUPOSGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GRUPOSGroupByOutputType[P]>;
}>>;
export type GRUPOSWhereInput = {
    AND?: Prisma.GRUPOSWhereInput | Prisma.GRUPOSWhereInput[];
    OR?: Prisma.GRUPOSWhereInput[];
    NOT?: Prisma.GRUPOSWhereInput | Prisma.GRUPOSWhereInput[];
    id?: Prisma.UuidFilter<"GRUPOS"> | string;
    nombre?: Prisma.StringFilter<"GRUPOS"> | string;
    descripcion?: Prisma.StringNullableFilter<"GRUPOS"> | string | null;
    imagen_url?: Prisma.StringNullableFilter<"GRUPOS"> | string | null;
    tipo?: Prisma.StringFilter<"GRUPOS"> | string;
    privacidad?: Prisma.StringFilter<"GRUPOS"> | string;
    carrera_id?: Prisma.IntNullableFilter<"GRUPOS"> | number | null;
    creador_id?: Prisma.UuidFilter<"GRUPOS"> | string;
    creado_en?: Prisma.DateTimeFilter<"GRUPOS"> | Date | string;
    CARRERAS?: Prisma.XOR<Prisma.CARRERASNullableScalarRelationFilter, Prisma.CARRERASWhereInput> | null;
    USUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
    MIEMBROS_GRUPO?: Prisma.MIEMBROS_GRUPOListRelationFilter;
    REPORTES?: Prisma.REPORTESListRelationFilter;
};
export type GRUPOSOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    imagen_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    privacidad?: Prisma.SortOrder;
    carrera_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    creador_id?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    CARRERAS?: Prisma.CARRERASOrderByWithRelationInput;
    USUARIOS?: Prisma.USUARIOSOrderByWithRelationInput;
    MIEMBROS_GRUPO?: Prisma.MIEMBROS_GRUPOOrderByRelationAggregateInput;
    REPORTES?: Prisma.REPORTESOrderByRelationAggregateInput;
};
export type GRUPOSWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.GRUPOSWhereInput | Prisma.GRUPOSWhereInput[];
    OR?: Prisma.GRUPOSWhereInput[];
    NOT?: Prisma.GRUPOSWhereInput | Prisma.GRUPOSWhereInput[];
    nombre?: Prisma.StringFilter<"GRUPOS"> | string;
    descripcion?: Prisma.StringNullableFilter<"GRUPOS"> | string | null;
    imagen_url?: Prisma.StringNullableFilter<"GRUPOS"> | string | null;
    tipo?: Prisma.StringFilter<"GRUPOS"> | string;
    privacidad?: Prisma.StringFilter<"GRUPOS"> | string;
    carrera_id?: Prisma.IntNullableFilter<"GRUPOS"> | number | null;
    creador_id?: Prisma.UuidFilter<"GRUPOS"> | string;
    creado_en?: Prisma.DateTimeFilter<"GRUPOS"> | Date | string;
    CARRERAS?: Prisma.XOR<Prisma.CARRERASNullableScalarRelationFilter, Prisma.CARRERASWhereInput> | null;
    USUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
    MIEMBROS_GRUPO?: Prisma.MIEMBROS_GRUPOListRelationFilter;
    REPORTES?: Prisma.REPORTESListRelationFilter;
}, "id">;
export type GRUPOSOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    imagen_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    privacidad?: Prisma.SortOrder;
    carrera_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    creador_id?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    _count?: Prisma.GRUPOSCountOrderByAggregateInput;
    _avg?: Prisma.GRUPOSAvgOrderByAggregateInput;
    _max?: Prisma.GRUPOSMaxOrderByAggregateInput;
    _min?: Prisma.GRUPOSMinOrderByAggregateInput;
    _sum?: Prisma.GRUPOSSumOrderByAggregateInput;
};
export type GRUPOSScalarWhereWithAggregatesInput = {
    AND?: Prisma.GRUPOSScalarWhereWithAggregatesInput | Prisma.GRUPOSScalarWhereWithAggregatesInput[];
    OR?: Prisma.GRUPOSScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GRUPOSScalarWhereWithAggregatesInput | Prisma.GRUPOSScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"GRUPOS"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"GRUPOS"> | string;
    descripcion?: Prisma.StringNullableWithAggregatesFilter<"GRUPOS"> | string | null;
    imagen_url?: Prisma.StringNullableWithAggregatesFilter<"GRUPOS"> | string | null;
    tipo?: Prisma.StringWithAggregatesFilter<"GRUPOS"> | string;
    privacidad?: Prisma.StringWithAggregatesFilter<"GRUPOS"> | string;
    carrera_id?: Prisma.IntNullableWithAggregatesFilter<"GRUPOS"> | number | null;
    creador_id?: Prisma.UuidWithAggregatesFilter<"GRUPOS"> | string;
    creado_en?: Prisma.DateTimeWithAggregatesFilter<"GRUPOS"> | Date | string;
};
export type GRUPOSCreateInput = {
    id?: string;
    nombre: string;
    descripcion?: string | null;
    imagen_url?: string | null;
    tipo: string;
    privacidad: string;
    creado_en?: Date | string;
    CARRERAS?: Prisma.CARRERASCreateNestedOneWithoutGRUPOSInput;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutGRUPOSInput;
    MIEMBROS_GRUPO?: Prisma.MIEMBROS_GRUPOCreateNestedManyWithoutGRUPOSInput;
    REPORTES?: Prisma.REPORTESCreateNestedManyWithoutGRUPOSInput;
};
export type GRUPOSUncheckedCreateInput = {
    id?: string;
    nombre: string;
    descripcion?: string | null;
    imagen_url?: string | null;
    tipo: string;
    privacidad: string;
    carrera_id?: number | null;
    creador_id: string;
    creado_en?: Date | string;
    MIEMBROS_GRUPO?: Prisma.MIEMBROS_GRUPOUncheckedCreateNestedManyWithoutGRUPOSInput;
    REPORTES?: Prisma.REPORTESUncheckedCreateNestedManyWithoutGRUPOSInput;
};
export type GRUPOSUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    privacidad?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    CARRERAS?: Prisma.CARRERASUpdateOneWithoutGRUPOSNestedInput;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutGRUPOSNestedInput;
    MIEMBROS_GRUPO?: Prisma.MIEMBROS_GRUPOUpdateManyWithoutGRUPOSNestedInput;
    REPORTES?: Prisma.REPORTESUpdateManyWithoutGRUPOSNestedInput;
};
export type GRUPOSUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    privacidad?: Prisma.StringFieldUpdateOperationsInput | string;
    carrera_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    creador_id?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    MIEMBROS_GRUPO?: Prisma.MIEMBROS_GRUPOUncheckedUpdateManyWithoutGRUPOSNestedInput;
    REPORTES?: Prisma.REPORTESUncheckedUpdateManyWithoutGRUPOSNestedInput;
};
export type GRUPOSCreateManyInput = {
    id?: string;
    nombre: string;
    descripcion?: string | null;
    imagen_url?: string | null;
    tipo: string;
    privacidad: string;
    carrera_id?: number | null;
    creador_id: string;
    creado_en?: Date | string;
};
export type GRUPOSUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    privacidad?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GRUPOSUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    privacidad?: Prisma.StringFieldUpdateOperationsInput | string;
    carrera_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    creador_id?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GRUPOSListRelationFilter = {
    every?: Prisma.GRUPOSWhereInput;
    some?: Prisma.GRUPOSWhereInput;
    none?: Prisma.GRUPOSWhereInput;
};
export type GRUPOSOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GRUPOSCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    imagen_url?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    privacidad?: Prisma.SortOrder;
    carrera_id?: Prisma.SortOrder;
    creador_id?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
};
export type GRUPOSAvgOrderByAggregateInput = {
    carrera_id?: Prisma.SortOrder;
};
export type GRUPOSMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    imagen_url?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    privacidad?: Prisma.SortOrder;
    carrera_id?: Prisma.SortOrder;
    creador_id?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
};
export type GRUPOSMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    imagen_url?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    privacidad?: Prisma.SortOrder;
    carrera_id?: Prisma.SortOrder;
    creador_id?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
};
export type GRUPOSSumOrderByAggregateInput = {
    carrera_id?: Prisma.SortOrder;
};
export type GRUPOSScalarRelationFilter = {
    is?: Prisma.GRUPOSWhereInput;
    isNot?: Prisma.GRUPOSWhereInput;
};
export type GRUPOSNullableScalarRelationFilter = {
    is?: Prisma.GRUPOSWhereInput | null;
    isNot?: Prisma.GRUPOSWhereInput | null;
};
export type GRUPOSCreateNestedManyWithoutCARRERASInput = {
    create?: Prisma.XOR<Prisma.GRUPOSCreateWithoutCARRERASInput, Prisma.GRUPOSUncheckedCreateWithoutCARRERASInput> | Prisma.GRUPOSCreateWithoutCARRERASInput[] | Prisma.GRUPOSUncheckedCreateWithoutCARRERASInput[];
    connectOrCreate?: Prisma.GRUPOSCreateOrConnectWithoutCARRERASInput | Prisma.GRUPOSCreateOrConnectWithoutCARRERASInput[];
    createMany?: Prisma.GRUPOSCreateManyCARRERASInputEnvelope;
    connect?: Prisma.GRUPOSWhereUniqueInput | Prisma.GRUPOSWhereUniqueInput[];
};
export type GRUPOSUncheckedCreateNestedManyWithoutCARRERASInput = {
    create?: Prisma.XOR<Prisma.GRUPOSCreateWithoutCARRERASInput, Prisma.GRUPOSUncheckedCreateWithoutCARRERASInput> | Prisma.GRUPOSCreateWithoutCARRERASInput[] | Prisma.GRUPOSUncheckedCreateWithoutCARRERASInput[];
    connectOrCreate?: Prisma.GRUPOSCreateOrConnectWithoutCARRERASInput | Prisma.GRUPOSCreateOrConnectWithoutCARRERASInput[];
    createMany?: Prisma.GRUPOSCreateManyCARRERASInputEnvelope;
    connect?: Prisma.GRUPOSWhereUniqueInput | Prisma.GRUPOSWhereUniqueInput[];
};
export type GRUPOSUpdateManyWithoutCARRERASNestedInput = {
    create?: Prisma.XOR<Prisma.GRUPOSCreateWithoutCARRERASInput, Prisma.GRUPOSUncheckedCreateWithoutCARRERASInput> | Prisma.GRUPOSCreateWithoutCARRERASInput[] | Prisma.GRUPOSUncheckedCreateWithoutCARRERASInput[];
    connectOrCreate?: Prisma.GRUPOSCreateOrConnectWithoutCARRERASInput | Prisma.GRUPOSCreateOrConnectWithoutCARRERASInput[];
    upsert?: Prisma.GRUPOSUpsertWithWhereUniqueWithoutCARRERASInput | Prisma.GRUPOSUpsertWithWhereUniqueWithoutCARRERASInput[];
    createMany?: Prisma.GRUPOSCreateManyCARRERASInputEnvelope;
    set?: Prisma.GRUPOSWhereUniqueInput | Prisma.GRUPOSWhereUniqueInput[];
    disconnect?: Prisma.GRUPOSWhereUniqueInput | Prisma.GRUPOSWhereUniqueInput[];
    delete?: Prisma.GRUPOSWhereUniqueInput | Prisma.GRUPOSWhereUniqueInput[];
    connect?: Prisma.GRUPOSWhereUniqueInput | Prisma.GRUPOSWhereUniqueInput[];
    update?: Prisma.GRUPOSUpdateWithWhereUniqueWithoutCARRERASInput | Prisma.GRUPOSUpdateWithWhereUniqueWithoutCARRERASInput[];
    updateMany?: Prisma.GRUPOSUpdateManyWithWhereWithoutCARRERASInput | Prisma.GRUPOSUpdateManyWithWhereWithoutCARRERASInput[];
    deleteMany?: Prisma.GRUPOSScalarWhereInput | Prisma.GRUPOSScalarWhereInput[];
};
export type GRUPOSUncheckedUpdateManyWithoutCARRERASNestedInput = {
    create?: Prisma.XOR<Prisma.GRUPOSCreateWithoutCARRERASInput, Prisma.GRUPOSUncheckedCreateWithoutCARRERASInput> | Prisma.GRUPOSCreateWithoutCARRERASInput[] | Prisma.GRUPOSUncheckedCreateWithoutCARRERASInput[];
    connectOrCreate?: Prisma.GRUPOSCreateOrConnectWithoutCARRERASInput | Prisma.GRUPOSCreateOrConnectWithoutCARRERASInput[];
    upsert?: Prisma.GRUPOSUpsertWithWhereUniqueWithoutCARRERASInput | Prisma.GRUPOSUpsertWithWhereUniqueWithoutCARRERASInput[];
    createMany?: Prisma.GRUPOSCreateManyCARRERASInputEnvelope;
    set?: Prisma.GRUPOSWhereUniqueInput | Prisma.GRUPOSWhereUniqueInput[];
    disconnect?: Prisma.GRUPOSWhereUniqueInput | Prisma.GRUPOSWhereUniqueInput[];
    delete?: Prisma.GRUPOSWhereUniqueInput | Prisma.GRUPOSWhereUniqueInput[];
    connect?: Prisma.GRUPOSWhereUniqueInput | Prisma.GRUPOSWhereUniqueInput[];
    update?: Prisma.GRUPOSUpdateWithWhereUniqueWithoutCARRERASInput | Prisma.GRUPOSUpdateWithWhereUniqueWithoutCARRERASInput[];
    updateMany?: Prisma.GRUPOSUpdateManyWithWhereWithoutCARRERASInput | Prisma.GRUPOSUpdateManyWithWhereWithoutCARRERASInput[];
    deleteMany?: Prisma.GRUPOSScalarWhereInput | Prisma.GRUPOSScalarWhereInput[];
};
export type GRUPOSCreateNestedOneWithoutMIEMBROS_GRUPOInput = {
    create?: Prisma.XOR<Prisma.GRUPOSCreateWithoutMIEMBROS_GRUPOInput, Prisma.GRUPOSUncheckedCreateWithoutMIEMBROS_GRUPOInput>;
    connectOrCreate?: Prisma.GRUPOSCreateOrConnectWithoutMIEMBROS_GRUPOInput;
    connect?: Prisma.GRUPOSWhereUniqueInput;
};
export type GRUPOSUpdateOneRequiredWithoutMIEMBROS_GRUPONestedInput = {
    create?: Prisma.XOR<Prisma.GRUPOSCreateWithoutMIEMBROS_GRUPOInput, Prisma.GRUPOSUncheckedCreateWithoutMIEMBROS_GRUPOInput>;
    connectOrCreate?: Prisma.GRUPOSCreateOrConnectWithoutMIEMBROS_GRUPOInput;
    upsert?: Prisma.GRUPOSUpsertWithoutMIEMBROS_GRUPOInput;
    connect?: Prisma.GRUPOSWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GRUPOSUpdateToOneWithWhereWithoutMIEMBROS_GRUPOInput, Prisma.GRUPOSUpdateWithoutMIEMBROS_GRUPOInput>, Prisma.GRUPOSUncheckedUpdateWithoutMIEMBROS_GRUPOInput>;
};
export type GRUPOSCreateNestedOneWithoutREPORTESInput = {
    create?: Prisma.XOR<Prisma.GRUPOSCreateWithoutREPORTESInput, Prisma.GRUPOSUncheckedCreateWithoutREPORTESInput>;
    connectOrCreate?: Prisma.GRUPOSCreateOrConnectWithoutREPORTESInput;
    connect?: Prisma.GRUPOSWhereUniqueInput;
};
export type GRUPOSUpdateOneWithoutREPORTESNestedInput = {
    create?: Prisma.XOR<Prisma.GRUPOSCreateWithoutREPORTESInput, Prisma.GRUPOSUncheckedCreateWithoutREPORTESInput>;
    connectOrCreate?: Prisma.GRUPOSCreateOrConnectWithoutREPORTESInput;
    upsert?: Prisma.GRUPOSUpsertWithoutREPORTESInput;
    disconnect?: Prisma.GRUPOSWhereInput | boolean;
    delete?: Prisma.GRUPOSWhereInput | boolean;
    connect?: Prisma.GRUPOSWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GRUPOSUpdateToOneWithWhereWithoutREPORTESInput, Prisma.GRUPOSUpdateWithoutREPORTESInput>, Prisma.GRUPOSUncheckedUpdateWithoutREPORTESInput>;
};
export type GRUPOSCreateNestedManyWithoutUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.GRUPOSCreateWithoutUSUARIOSInput, Prisma.GRUPOSUncheckedCreateWithoutUSUARIOSInput> | Prisma.GRUPOSCreateWithoutUSUARIOSInput[] | Prisma.GRUPOSUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.GRUPOSCreateOrConnectWithoutUSUARIOSInput | Prisma.GRUPOSCreateOrConnectWithoutUSUARIOSInput[];
    createMany?: Prisma.GRUPOSCreateManyUSUARIOSInputEnvelope;
    connect?: Prisma.GRUPOSWhereUniqueInput | Prisma.GRUPOSWhereUniqueInput[];
};
export type GRUPOSUncheckedCreateNestedManyWithoutUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.GRUPOSCreateWithoutUSUARIOSInput, Prisma.GRUPOSUncheckedCreateWithoutUSUARIOSInput> | Prisma.GRUPOSCreateWithoutUSUARIOSInput[] | Prisma.GRUPOSUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.GRUPOSCreateOrConnectWithoutUSUARIOSInput | Prisma.GRUPOSCreateOrConnectWithoutUSUARIOSInput[];
    createMany?: Prisma.GRUPOSCreateManyUSUARIOSInputEnvelope;
    connect?: Prisma.GRUPOSWhereUniqueInput | Prisma.GRUPOSWhereUniqueInput[];
};
export type GRUPOSUpdateManyWithoutUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.GRUPOSCreateWithoutUSUARIOSInput, Prisma.GRUPOSUncheckedCreateWithoutUSUARIOSInput> | Prisma.GRUPOSCreateWithoutUSUARIOSInput[] | Prisma.GRUPOSUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.GRUPOSCreateOrConnectWithoutUSUARIOSInput | Prisma.GRUPOSCreateOrConnectWithoutUSUARIOSInput[];
    upsert?: Prisma.GRUPOSUpsertWithWhereUniqueWithoutUSUARIOSInput | Prisma.GRUPOSUpsertWithWhereUniqueWithoutUSUARIOSInput[];
    createMany?: Prisma.GRUPOSCreateManyUSUARIOSInputEnvelope;
    set?: Prisma.GRUPOSWhereUniqueInput | Prisma.GRUPOSWhereUniqueInput[];
    disconnect?: Prisma.GRUPOSWhereUniqueInput | Prisma.GRUPOSWhereUniqueInput[];
    delete?: Prisma.GRUPOSWhereUniqueInput | Prisma.GRUPOSWhereUniqueInput[];
    connect?: Prisma.GRUPOSWhereUniqueInput | Prisma.GRUPOSWhereUniqueInput[];
    update?: Prisma.GRUPOSUpdateWithWhereUniqueWithoutUSUARIOSInput | Prisma.GRUPOSUpdateWithWhereUniqueWithoutUSUARIOSInput[];
    updateMany?: Prisma.GRUPOSUpdateManyWithWhereWithoutUSUARIOSInput | Prisma.GRUPOSUpdateManyWithWhereWithoutUSUARIOSInput[];
    deleteMany?: Prisma.GRUPOSScalarWhereInput | Prisma.GRUPOSScalarWhereInput[];
};
export type GRUPOSUncheckedUpdateManyWithoutUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.GRUPOSCreateWithoutUSUARIOSInput, Prisma.GRUPOSUncheckedCreateWithoutUSUARIOSInput> | Prisma.GRUPOSCreateWithoutUSUARIOSInput[] | Prisma.GRUPOSUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.GRUPOSCreateOrConnectWithoutUSUARIOSInput | Prisma.GRUPOSCreateOrConnectWithoutUSUARIOSInput[];
    upsert?: Prisma.GRUPOSUpsertWithWhereUniqueWithoutUSUARIOSInput | Prisma.GRUPOSUpsertWithWhereUniqueWithoutUSUARIOSInput[];
    createMany?: Prisma.GRUPOSCreateManyUSUARIOSInputEnvelope;
    set?: Prisma.GRUPOSWhereUniqueInput | Prisma.GRUPOSWhereUniqueInput[];
    disconnect?: Prisma.GRUPOSWhereUniqueInput | Prisma.GRUPOSWhereUniqueInput[];
    delete?: Prisma.GRUPOSWhereUniqueInput | Prisma.GRUPOSWhereUniqueInput[];
    connect?: Prisma.GRUPOSWhereUniqueInput | Prisma.GRUPOSWhereUniqueInput[];
    update?: Prisma.GRUPOSUpdateWithWhereUniqueWithoutUSUARIOSInput | Prisma.GRUPOSUpdateWithWhereUniqueWithoutUSUARIOSInput[];
    updateMany?: Prisma.GRUPOSUpdateManyWithWhereWithoutUSUARIOSInput | Prisma.GRUPOSUpdateManyWithWhereWithoutUSUARIOSInput[];
    deleteMany?: Prisma.GRUPOSScalarWhereInput | Prisma.GRUPOSScalarWhereInput[];
};
export type GRUPOSCreateWithoutCARRERASInput = {
    id?: string;
    nombre: string;
    descripcion?: string | null;
    imagen_url?: string | null;
    tipo: string;
    privacidad: string;
    creado_en?: Date | string;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutGRUPOSInput;
    MIEMBROS_GRUPO?: Prisma.MIEMBROS_GRUPOCreateNestedManyWithoutGRUPOSInput;
    REPORTES?: Prisma.REPORTESCreateNestedManyWithoutGRUPOSInput;
};
export type GRUPOSUncheckedCreateWithoutCARRERASInput = {
    id?: string;
    nombre: string;
    descripcion?: string | null;
    imagen_url?: string | null;
    tipo: string;
    privacidad: string;
    creador_id: string;
    creado_en?: Date | string;
    MIEMBROS_GRUPO?: Prisma.MIEMBROS_GRUPOUncheckedCreateNestedManyWithoutGRUPOSInput;
    REPORTES?: Prisma.REPORTESUncheckedCreateNestedManyWithoutGRUPOSInput;
};
export type GRUPOSCreateOrConnectWithoutCARRERASInput = {
    where: Prisma.GRUPOSWhereUniqueInput;
    create: Prisma.XOR<Prisma.GRUPOSCreateWithoutCARRERASInput, Prisma.GRUPOSUncheckedCreateWithoutCARRERASInput>;
};
export type GRUPOSCreateManyCARRERASInputEnvelope = {
    data: Prisma.GRUPOSCreateManyCARRERASInput | Prisma.GRUPOSCreateManyCARRERASInput[];
    skipDuplicates?: boolean;
};
export type GRUPOSUpsertWithWhereUniqueWithoutCARRERASInput = {
    where: Prisma.GRUPOSWhereUniqueInput;
    update: Prisma.XOR<Prisma.GRUPOSUpdateWithoutCARRERASInput, Prisma.GRUPOSUncheckedUpdateWithoutCARRERASInput>;
    create: Prisma.XOR<Prisma.GRUPOSCreateWithoutCARRERASInput, Prisma.GRUPOSUncheckedCreateWithoutCARRERASInput>;
};
export type GRUPOSUpdateWithWhereUniqueWithoutCARRERASInput = {
    where: Prisma.GRUPOSWhereUniqueInput;
    data: Prisma.XOR<Prisma.GRUPOSUpdateWithoutCARRERASInput, Prisma.GRUPOSUncheckedUpdateWithoutCARRERASInput>;
};
export type GRUPOSUpdateManyWithWhereWithoutCARRERASInput = {
    where: Prisma.GRUPOSScalarWhereInput;
    data: Prisma.XOR<Prisma.GRUPOSUpdateManyMutationInput, Prisma.GRUPOSUncheckedUpdateManyWithoutCARRERASInput>;
};
export type GRUPOSScalarWhereInput = {
    AND?: Prisma.GRUPOSScalarWhereInput | Prisma.GRUPOSScalarWhereInput[];
    OR?: Prisma.GRUPOSScalarWhereInput[];
    NOT?: Prisma.GRUPOSScalarWhereInput | Prisma.GRUPOSScalarWhereInput[];
    id?: Prisma.UuidFilter<"GRUPOS"> | string;
    nombre?: Prisma.StringFilter<"GRUPOS"> | string;
    descripcion?: Prisma.StringNullableFilter<"GRUPOS"> | string | null;
    imagen_url?: Prisma.StringNullableFilter<"GRUPOS"> | string | null;
    tipo?: Prisma.StringFilter<"GRUPOS"> | string;
    privacidad?: Prisma.StringFilter<"GRUPOS"> | string;
    carrera_id?: Prisma.IntNullableFilter<"GRUPOS"> | number | null;
    creador_id?: Prisma.UuidFilter<"GRUPOS"> | string;
    creado_en?: Prisma.DateTimeFilter<"GRUPOS"> | Date | string;
};
export type GRUPOSCreateWithoutMIEMBROS_GRUPOInput = {
    id?: string;
    nombre: string;
    descripcion?: string | null;
    imagen_url?: string | null;
    tipo: string;
    privacidad: string;
    creado_en?: Date | string;
    CARRERAS?: Prisma.CARRERASCreateNestedOneWithoutGRUPOSInput;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutGRUPOSInput;
    REPORTES?: Prisma.REPORTESCreateNestedManyWithoutGRUPOSInput;
};
export type GRUPOSUncheckedCreateWithoutMIEMBROS_GRUPOInput = {
    id?: string;
    nombre: string;
    descripcion?: string | null;
    imagen_url?: string | null;
    tipo: string;
    privacidad: string;
    carrera_id?: number | null;
    creador_id: string;
    creado_en?: Date | string;
    REPORTES?: Prisma.REPORTESUncheckedCreateNestedManyWithoutGRUPOSInput;
};
export type GRUPOSCreateOrConnectWithoutMIEMBROS_GRUPOInput = {
    where: Prisma.GRUPOSWhereUniqueInput;
    create: Prisma.XOR<Prisma.GRUPOSCreateWithoutMIEMBROS_GRUPOInput, Prisma.GRUPOSUncheckedCreateWithoutMIEMBROS_GRUPOInput>;
};
export type GRUPOSUpsertWithoutMIEMBROS_GRUPOInput = {
    update: Prisma.XOR<Prisma.GRUPOSUpdateWithoutMIEMBROS_GRUPOInput, Prisma.GRUPOSUncheckedUpdateWithoutMIEMBROS_GRUPOInput>;
    create: Prisma.XOR<Prisma.GRUPOSCreateWithoutMIEMBROS_GRUPOInput, Prisma.GRUPOSUncheckedCreateWithoutMIEMBROS_GRUPOInput>;
    where?: Prisma.GRUPOSWhereInput;
};
export type GRUPOSUpdateToOneWithWhereWithoutMIEMBROS_GRUPOInput = {
    where?: Prisma.GRUPOSWhereInput;
    data: Prisma.XOR<Prisma.GRUPOSUpdateWithoutMIEMBROS_GRUPOInput, Prisma.GRUPOSUncheckedUpdateWithoutMIEMBROS_GRUPOInput>;
};
export type GRUPOSUpdateWithoutMIEMBROS_GRUPOInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    privacidad?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    CARRERAS?: Prisma.CARRERASUpdateOneWithoutGRUPOSNestedInput;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutGRUPOSNestedInput;
    REPORTES?: Prisma.REPORTESUpdateManyWithoutGRUPOSNestedInput;
};
export type GRUPOSUncheckedUpdateWithoutMIEMBROS_GRUPOInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    privacidad?: Prisma.StringFieldUpdateOperationsInput | string;
    carrera_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    creador_id?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    REPORTES?: Prisma.REPORTESUncheckedUpdateManyWithoutGRUPOSNestedInput;
};
export type GRUPOSCreateWithoutREPORTESInput = {
    id?: string;
    nombre: string;
    descripcion?: string | null;
    imagen_url?: string | null;
    tipo: string;
    privacidad: string;
    creado_en?: Date | string;
    CARRERAS?: Prisma.CARRERASCreateNestedOneWithoutGRUPOSInput;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutGRUPOSInput;
    MIEMBROS_GRUPO?: Prisma.MIEMBROS_GRUPOCreateNestedManyWithoutGRUPOSInput;
};
export type GRUPOSUncheckedCreateWithoutREPORTESInput = {
    id?: string;
    nombre: string;
    descripcion?: string | null;
    imagen_url?: string | null;
    tipo: string;
    privacidad: string;
    carrera_id?: number | null;
    creador_id: string;
    creado_en?: Date | string;
    MIEMBROS_GRUPO?: Prisma.MIEMBROS_GRUPOUncheckedCreateNestedManyWithoutGRUPOSInput;
};
export type GRUPOSCreateOrConnectWithoutREPORTESInput = {
    where: Prisma.GRUPOSWhereUniqueInput;
    create: Prisma.XOR<Prisma.GRUPOSCreateWithoutREPORTESInput, Prisma.GRUPOSUncheckedCreateWithoutREPORTESInput>;
};
export type GRUPOSUpsertWithoutREPORTESInput = {
    update: Prisma.XOR<Prisma.GRUPOSUpdateWithoutREPORTESInput, Prisma.GRUPOSUncheckedUpdateWithoutREPORTESInput>;
    create: Prisma.XOR<Prisma.GRUPOSCreateWithoutREPORTESInput, Prisma.GRUPOSUncheckedCreateWithoutREPORTESInput>;
    where?: Prisma.GRUPOSWhereInput;
};
export type GRUPOSUpdateToOneWithWhereWithoutREPORTESInput = {
    where?: Prisma.GRUPOSWhereInput;
    data: Prisma.XOR<Prisma.GRUPOSUpdateWithoutREPORTESInput, Prisma.GRUPOSUncheckedUpdateWithoutREPORTESInput>;
};
export type GRUPOSUpdateWithoutREPORTESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    privacidad?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    CARRERAS?: Prisma.CARRERASUpdateOneWithoutGRUPOSNestedInput;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutGRUPOSNestedInput;
    MIEMBROS_GRUPO?: Prisma.MIEMBROS_GRUPOUpdateManyWithoutGRUPOSNestedInput;
};
export type GRUPOSUncheckedUpdateWithoutREPORTESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    privacidad?: Prisma.StringFieldUpdateOperationsInput | string;
    carrera_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    creador_id?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    MIEMBROS_GRUPO?: Prisma.MIEMBROS_GRUPOUncheckedUpdateManyWithoutGRUPOSNestedInput;
};
export type GRUPOSCreateWithoutUSUARIOSInput = {
    id?: string;
    nombre: string;
    descripcion?: string | null;
    imagen_url?: string | null;
    tipo: string;
    privacidad: string;
    creado_en?: Date | string;
    CARRERAS?: Prisma.CARRERASCreateNestedOneWithoutGRUPOSInput;
    MIEMBROS_GRUPO?: Prisma.MIEMBROS_GRUPOCreateNestedManyWithoutGRUPOSInput;
    REPORTES?: Prisma.REPORTESCreateNestedManyWithoutGRUPOSInput;
};
export type GRUPOSUncheckedCreateWithoutUSUARIOSInput = {
    id?: string;
    nombre: string;
    descripcion?: string | null;
    imagen_url?: string | null;
    tipo: string;
    privacidad: string;
    carrera_id?: number | null;
    creado_en?: Date | string;
    MIEMBROS_GRUPO?: Prisma.MIEMBROS_GRUPOUncheckedCreateNestedManyWithoutGRUPOSInput;
    REPORTES?: Prisma.REPORTESUncheckedCreateNestedManyWithoutGRUPOSInput;
};
export type GRUPOSCreateOrConnectWithoutUSUARIOSInput = {
    where: Prisma.GRUPOSWhereUniqueInput;
    create: Prisma.XOR<Prisma.GRUPOSCreateWithoutUSUARIOSInput, Prisma.GRUPOSUncheckedCreateWithoutUSUARIOSInput>;
};
export type GRUPOSCreateManyUSUARIOSInputEnvelope = {
    data: Prisma.GRUPOSCreateManyUSUARIOSInput | Prisma.GRUPOSCreateManyUSUARIOSInput[];
    skipDuplicates?: boolean;
};
export type GRUPOSUpsertWithWhereUniqueWithoutUSUARIOSInput = {
    where: Prisma.GRUPOSWhereUniqueInput;
    update: Prisma.XOR<Prisma.GRUPOSUpdateWithoutUSUARIOSInput, Prisma.GRUPOSUncheckedUpdateWithoutUSUARIOSInput>;
    create: Prisma.XOR<Prisma.GRUPOSCreateWithoutUSUARIOSInput, Prisma.GRUPOSUncheckedCreateWithoutUSUARIOSInput>;
};
export type GRUPOSUpdateWithWhereUniqueWithoutUSUARIOSInput = {
    where: Prisma.GRUPOSWhereUniqueInput;
    data: Prisma.XOR<Prisma.GRUPOSUpdateWithoutUSUARIOSInput, Prisma.GRUPOSUncheckedUpdateWithoutUSUARIOSInput>;
};
export type GRUPOSUpdateManyWithWhereWithoutUSUARIOSInput = {
    where: Prisma.GRUPOSScalarWhereInput;
    data: Prisma.XOR<Prisma.GRUPOSUpdateManyMutationInput, Prisma.GRUPOSUncheckedUpdateManyWithoutUSUARIOSInput>;
};
export type GRUPOSCreateManyCARRERASInput = {
    id?: string;
    nombre: string;
    descripcion?: string | null;
    imagen_url?: string | null;
    tipo: string;
    privacidad: string;
    creador_id: string;
    creado_en?: Date | string;
};
export type GRUPOSUpdateWithoutCARRERASInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    privacidad?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutGRUPOSNestedInput;
    MIEMBROS_GRUPO?: Prisma.MIEMBROS_GRUPOUpdateManyWithoutGRUPOSNestedInput;
    REPORTES?: Prisma.REPORTESUpdateManyWithoutGRUPOSNestedInput;
};
export type GRUPOSUncheckedUpdateWithoutCARRERASInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    privacidad?: Prisma.StringFieldUpdateOperationsInput | string;
    creador_id?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    MIEMBROS_GRUPO?: Prisma.MIEMBROS_GRUPOUncheckedUpdateManyWithoutGRUPOSNestedInput;
    REPORTES?: Prisma.REPORTESUncheckedUpdateManyWithoutGRUPOSNestedInput;
};
export type GRUPOSUncheckedUpdateManyWithoutCARRERASInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    privacidad?: Prisma.StringFieldUpdateOperationsInput | string;
    creador_id?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GRUPOSCreateManyUSUARIOSInput = {
    id?: string;
    nombre: string;
    descripcion?: string | null;
    imagen_url?: string | null;
    tipo: string;
    privacidad: string;
    carrera_id?: number | null;
    creado_en?: Date | string;
};
export type GRUPOSUpdateWithoutUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    privacidad?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    CARRERAS?: Prisma.CARRERASUpdateOneWithoutGRUPOSNestedInput;
    MIEMBROS_GRUPO?: Prisma.MIEMBROS_GRUPOUpdateManyWithoutGRUPOSNestedInput;
    REPORTES?: Prisma.REPORTESUpdateManyWithoutGRUPOSNestedInput;
};
export type GRUPOSUncheckedUpdateWithoutUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    privacidad?: Prisma.StringFieldUpdateOperationsInput | string;
    carrera_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    MIEMBROS_GRUPO?: Prisma.MIEMBROS_GRUPOUncheckedUpdateManyWithoutGRUPOSNestedInput;
    REPORTES?: Prisma.REPORTESUncheckedUpdateManyWithoutGRUPOSNestedInput;
};
export type GRUPOSUncheckedUpdateManyWithoutUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imagen_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    privacidad?: Prisma.StringFieldUpdateOperationsInput | string;
    carrera_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GRUPOSCountOutputType = {
    MIEMBROS_GRUPO: number;
    REPORTES: number;
};
export type GRUPOSCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MIEMBROS_GRUPO?: boolean | GRUPOSCountOutputTypeCountMIEMBROS_GRUPOArgs;
    REPORTES?: boolean | GRUPOSCountOutputTypeCountREPORTESArgs;
};
export type GRUPOSCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GRUPOSCountOutputTypeSelect<ExtArgs> | null;
};
export type GRUPOSCountOutputTypeCountMIEMBROS_GRUPOArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MIEMBROS_GRUPOWhereInput;
};
export type GRUPOSCountOutputTypeCountREPORTESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.REPORTESWhereInput;
};
export type GRUPOSSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    imagen_url?: boolean;
    tipo?: boolean;
    privacidad?: boolean;
    carrera_id?: boolean;
    creador_id?: boolean;
    creado_en?: boolean;
    CARRERAS?: boolean | Prisma.GRUPOS$CARRERASArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    MIEMBROS_GRUPO?: boolean | Prisma.GRUPOS$MIEMBROS_GRUPOArgs<ExtArgs>;
    REPORTES?: boolean | Prisma.GRUPOS$REPORTESArgs<ExtArgs>;
    _count?: boolean | Prisma.GRUPOSCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["gRUPOS"]>;
export type GRUPOSSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    imagen_url?: boolean;
    tipo?: boolean;
    privacidad?: boolean;
    carrera_id?: boolean;
    creador_id?: boolean;
    creado_en?: boolean;
    CARRERAS?: boolean | Prisma.GRUPOS$CARRERASArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["gRUPOS"]>;
export type GRUPOSSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    imagen_url?: boolean;
    tipo?: boolean;
    privacidad?: boolean;
    carrera_id?: boolean;
    creador_id?: boolean;
    creado_en?: boolean;
    CARRERAS?: boolean | Prisma.GRUPOS$CARRERASArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["gRUPOS"]>;
export type GRUPOSSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    imagen_url?: boolean;
    tipo?: boolean;
    privacidad?: boolean;
    carrera_id?: boolean;
    creador_id?: boolean;
    creado_en?: boolean;
};
export type GRUPOSOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "descripcion" | "imagen_url" | "tipo" | "privacidad" | "carrera_id" | "creador_id" | "creado_en", ExtArgs["result"]["gRUPOS"]>;
export type GRUPOSInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CARRERAS?: boolean | Prisma.GRUPOS$CARRERASArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    MIEMBROS_GRUPO?: boolean | Prisma.GRUPOS$MIEMBROS_GRUPOArgs<ExtArgs>;
    REPORTES?: boolean | Prisma.GRUPOS$REPORTESArgs<ExtArgs>;
    _count?: boolean | Prisma.GRUPOSCountOutputTypeDefaultArgs<ExtArgs>;
};
export type GRUPOSIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CARRERAS?: boolean | Prisma.GRUPOS$CARRERASArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type GRUPOSIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CARRERAS?: boolean | Prisma.GRUPOS$CARRERASArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type $GRUPOSPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GRUPOS";
    objects: {
        CARRERAS: Prisma.$CARRERASPayload<ExtArgs> | null;
        USUARIOS: Prisma.$USUARIOSPayload<ExtArgs>;
        MIEMBROS_GRUPO: Prisma.$MIEMBROS_GRUPOPayload<ExtArgs>[];
        REPORTES: Prisma.$REPORTESPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nombre: string;
        descripcion: string | null;
        imagen_url: string | null;
        tipo: string;
        privacidad: string;
        carrera_id: number | null;
        creador_id: string;
        creado_en: Date;
    }, ExtArgs["result"]["gRUPOS"]>;
    composites: {};
};
export type GRUPOSGetPayload<S extends boolean | null | undefined | GRUPOSDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GRUPOSPayload, S>;
export type GRUPOSCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GRUPOSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GRUPOSCountAggregateInputType | true;
};
export interface GRUPOSDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GRUPOS'];
        meta: {
            name: 'GRUPOS';
        };
    };
    findUnique<T extends GRUPOSFindUniqueArgs>(args: Prisma.SelectSubset<T, GRUPOSFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GRUPOSClient<runtime.Types.Result.GetResult<Prisma.$GRUPOSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GRUPOSFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GRUPOSFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GRUPOSClient<runtime.Types.Result.GetResult<Prisma.$GRUPOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GRUPOSFindFirstArgs>(args?: Prisma.SelectSubset<T, GRUPOSFindFirstArgs<ExtArgs>>): Prisma.Prisma__GRUPOSClient<runtime.Types.Result.GetResult<Prisma.$GRUPOSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GRUPOSFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GRUPOSFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GRUPOSClient<runtime.Types.Result.GetResult<Prisma.$GRUPOSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GRUPOSFindManyArgs>(args?: Prisma.SelectSubset<T, GRUPOSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GRUPOSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GRUPOSCreateArgs>(args: Prisma.SelectSubset<T, GRUPOSCreateArgs<ExtArgs>>): Prisma.Prisma__GRUPOSClient<runtime.Types.Result.GetResult<Prisma.$GRUPOSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GRUPOSCreateManyArgs>(args?: Prisma.SelectSubset<T, GRUPOSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GRUPOSCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GRUPOSCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GRUPOSPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GRUPOSDeleteArgs>(args: Prisma.SelectSubset<T, GRUPOSDeleteArgs<ExtArgs>>): Prisma.Prisma__GRUPOSClient<runtime.Types.Result.GetResult<Prisma.$GRUPOSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GRUPOSUpdateArgs>(args: Prisma.SelectSubset<T, GRUPOSUpdateArgs<ExtArgs>>): Prisma.Prisma__GRUPOSClient<runtime.Types.Result.GetResult<Prisma.$GRUPOSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GRUPOSDeleteManyArgs>(args?: Prisma.SelectSubset<T, GRUPOSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GRUPOSUpdateManyArgs>(args: Prisma.SelectSubset<T, GRUPOSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GRUPOSUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GRUPOSUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GRUPOSPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GRUPOSUpsertArgs>(args: Prisma.SelectSubset<T, GRUPOSUpsertArgs<ExtArgs>>): Prisma.Prisma__GRUPOSClient<runtime.Types.Result.GetResult<Prisma.$GRUPOSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GRUPOSCountArgs>(args?: Prisma.Subset<T, GRUPOSCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GRUPOSCountAggregateOutputType> : number>;
    aggregate<T extends GRUPOSAggregateArgs>(args: Prisma.Subset<T, GRUPOSAggregateArgs>): Prisma.PrismaPromise<GetGRUPOSAggregateType<T>>;
    groupBy<T extends GRUPOSGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GRUPOSGroupByArgs['orderBy'];
    } : {
        orderBy?: GRUPOSGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GRUPOSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGRUPOSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GRUPOSFieldRefs;
}
export interface Prisma__GRUPOSClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    CARRERAS<T extends Prisma.GRUPOS$CARRERASArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GRUPOS$CARRERASArgs<ExtArgs>>): Prisma.Prisma__CARRERASClient<runtime.Types.Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    USUARIOS<T extends Prisma.USUARIOSDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.USUARIOSDefaultArgs<ExtArgs>>): Prisma.Prisma__USUARIOSClient<runtime.Types.Result.GetResult<Prisma.$USUARIOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    MIEMBROS_GRUPO<T extends Prisma.GRUPOS$MIEMBROS_GRUPOArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GRUPOS$MIEMBROS_GRUPOArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MIEMBROS_GRUPOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    REPORTES<T extends Prisma.GRUPOS$REPORTESArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GRUPOS$REPORTESArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$REPORTESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GRUPOSFieldRefs {
    readonly id: Prisma.FieldRef<"GRUPOS", 'String'>;
    readonly nombre: Prisma.FieldRef<"GRUPOS", 'String'>;
    readonly descripcion: Prisma.FieldRef<"GRUPOS", 'String'>;
    readonly imagen_url: Prisma.FieldRef<"GRUPOS", 'String'>;
    readonly tipo: Prisma.FieldRef<"GRUPOS", 'String'>;
    readonly privacidad: Prisma.FieldRef<"GRUPOS", 'String'>;
    readonly carrera_id: Prisma.FieldRef<"GRUPOS", 'Int'>;
    readonly creador_id: Prisma.FieldRef<"GRUPOS", 'String'>;
    readonly creado_en: Prisma.FieldRef<"GRUPOS", 'DateTime'>;
}
export type GRUPOSFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GRUPOSSelect<ExtArgs> | null;
    omit?: Prisma.GRUPOSOmit<ExtArgs> | null;
    include?: Prisma.GRUPOSInclude<ExtArgs> | null;
    where: Prisma.GRUPOSWhereUniqueInput;
};
export type GRUPOSFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GRUPOSSelect<ExtArgs> | null;
    omit?: Prisma.GRUPOSOmit<ExtArgs> | null;
    include?: Prisma.GRUPOSInclude<ExtArgs> | null;
    where: Prisma.GRUPOSWhereUniqueInput;
};
export type GRUPOSFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GRUPOSSelect<ExtArgs> | null;
    omit?: Prisma.GRUPOSOmit<ExtArgs> | null;
    include?: Prisma.GRUPOSInclude<ExtArgs> | null;
    where?: Prisma.GRUPOSWhereInput;
    orderBy?: Prisma.GRUPOSOrderByWithRelationInput | Prisma.GRUPOSOrderByWithRelationInput[];
    cursor?: Prisma.GRUPOSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GRUPOSScalarFieldEnum | Prisma.GRUPOSScalarFieldEnum[];
};
export type GRUPOSFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GRUPOSSelect<ExtArgs> | null;
    omit?: Prisma.GRUPOSOmit<ExtArgs> | null;
    include?: Prisma.GRUPOSInclude<ExtArgs> | null;
    where?: Prisma.GRUPOSWhereInput;
    orderBy?: Prisma.GRUPOSOrderByWithRelationInput | Prisma.GRUPOSOrderByWithRelationInput[];
    cursor?: Prisma.GRUPOSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GRUPOSScalarFieldEnum | Prisma.GRUPOSScalarFieldEnum[];
};
export type GRUPOSFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GRUPOSSelect<ExtArgs> | null;
    omit?: Prisma.GRUPOSOmit<ExtArgs> | null;
    include?: Prisma.GRUPOSInclude<ExtArgs> | null;
    where?: Prisma.GRUPOSWhereInput;
    orderBy?: Prisma.GRUPOSOrderByWithRelationInput | Prisma.GRUPOSOrderByWithRelationInput[];
    cursor?: Prisma.GRUPOSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GRUPOSScalarFieldEnum | Prisma.GRUPOSScalarFieldEnum[];
};
export type GRUPOSCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GRUPOSSelect<ExtArgs> | null;
    omit?: Prisma.GRUPOSOmit<ExtArgs> | null;
    include?: Prisma.GRUPOSInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GRUPOSCreateInput, Prisma.GRUPOSUncheckedCreateInput>;
};
export type GRUPOSCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GRUPOSCreateManyInput | Prisma.GRUPOSCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GRUPOSCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GRUPOSSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GRUPOSOmit<ExtArgs> | null;
    data: Prisma.GRUPOSCreateManyInput | Prisma.GRUPOSCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GRUPOSIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GRUPOSUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GRUPOSSelect<ExtArgs> | null;
    omit?: Prisma.GRUPOSOmit<ExtArgs> | null;
    include?: Prisma.GRUPOSInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GRUPOSUpdateInput, Prisma.GRUPOSUncheckedUpdateInput>;
    where: Prisma.GRUPOSWhereUniqueInput;
};
export type GRUPOSUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GRUPOSUpdateManyMutationInput, Prisma.GRUPOSUncheckedUpdateManyInput>;
    where?: Prisma.GRUPOSWhereInput;
    limit?: number;
};
export type GRUPOSUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GRUPOSSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GRUPOSOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GRUPOSUpdateManyMutationInput, Prisma.GRUPOSUncheckedUpdateManyInput>;
    where?: Prisma.GRUPOSWhereInput;
    limit?: number;
    include?: Prisma.GRUPOSIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GRUPOSUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GRUPOSSelect<ExtArgs> | null;
    omit?: Prisma.GRUPOSOmit<ExtArgs> | null;
    include?: Prisma.GRUPOSInclude<ExtArgs> | null;
    where: Prisma.GRUPOSWhereUniqueInput;
    create: Prisma.XOR<Prisma.GRUPOSCreateInput, Prisma.GRUPOSUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GRUPOSUpdateInput, Prisma.GRUPOSUncheckedUpdateInput>;
};
export type GRUPOSDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GRUPOSSelect<ExtArgs> | null;
    omit?: Prisma.GRUPOSOmit<ExtArgs> | null;
    include?: Prisma.GRUPOSInclude<ExtArgs> | null;
    where: Prisma.GRUPOSWhereUniqueInput;
};
export type GRUPOSDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GRUPOSWhereInput;
    limit?: number;
};
export type GRUPOS$CARRERASArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CARRERASSelect<ExtArgs> | null;
    omit?: Prisma.CARRERASOmit<ExtArgs> | null;
    include?: Prisma.CARRERASInclude<ExtArgs> | null;
    where?: Prisma.CARRERASWhereInput;
};
export type GRUPOS$MIEMBROS_GRUPOArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GRUPOS$REPORTESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GRUPOSDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GRUPOSSelect<ExtArgs> | null;
    omit?: Prisma.GRUPOSOmit<ExtArgs> | null;
    include?: Prisma.GRUPOSInclude<ExtArgs> | null;
};
