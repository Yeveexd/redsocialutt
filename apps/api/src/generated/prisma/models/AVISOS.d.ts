import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AVISOSModel = runtime.Types.Result.DefaultSelection<Prisma.$AVISOSPayload>;
export type AggregateAVISOS = {
    _count: AVISOSCountAggregateOutputType | null;
    _avg: AVISOSAvgAggregateOutputType | null;
    _sum: AVISOSSumAggregateOutputType | null;
    _min: AVISOSMinAggregateOutputType | null;
    _max: AVISOSMaxAggregateOutputType | null;
};
export type AVISOSAvgAggregateOutputType = {
    carrera_id: number | null;
    cuatrimestre: number | null;
};
export type AVISOSSumAggregateOutputType = {
    carrera_id: number | null;
    cuatrimestre: number | null;
};
export type AVISOSMinAggregateOutputType = {
    id: string | null;
    autor_id: string | null;
    titulo: string | null;
    contenido: string | null;
    categoria: string | null;
    urgente: boolean | null;
    alcance: string | null;
    carrera_id: number | null;
    cuatrimestre: number | null;
    publicado_en: Date | null;
};
export type AVISOSMaxAggregateOutputType = {
    id: string | null;
    autor_id: string | null;
    titulo: string | null;
    contenido: string | null;
    categoria: string | null;
    urgente: boolean | null;
    alcance: string | null;
    carrera_id: number | null;
    cuatrimestre: number | null;
    publicado_en: Date | null;
};
export type AVISOSCountAggregateOutputType = {
    id: number;
    autor_id: number;
    titulo: number;
    contenido: number;
    categoria: number;
    urgente: number;
    alcance: number;
    carrera_id: number;
    cuatrimestre: number;
    publicado_en: number;
    _all: number;
};
export type AVISOSAvgAggregateInputType = {
    carrera_id?: true;
    cuatrimestre?: true;
};
export type AVISOSSumAggregateInputType = {
    carrera_id?: true;
    cuatrimestre?: true;
};
export type AVISOSMinAggregateInputType = {
    id?: true;
    autor_id?: true;
    titulo?: true;
    contenido?: true;
    categoria?: true;
    urgente?: true;
    alcance?: true;
    carrera_id?: true;
    cuatrimestre?: true;
    publicado_en?: true;
};
export type AVISOSMaxAggregateInputType = {
    id?: true;
    autor_id?: true;
    titulo?: true;
    contenido?: true;
    categoria?: true;
    urgente?: true;
    alcance?: true;
    carrera_id?: true;
    cuatrimestre?: true;
    publicado_en?: true;
};
export type AVISOSCountAggregateInputType = {
    id?: true;
    autor_id?: true;
    titulo?: true;
    contenido?: true;
    categoria?: true;
    urgente?: true;
    alcance?: true;
    carrera_id?: true;
    cuatrimestre?: true;
    publicado_en?: true;
    _all?: true;
};
export type AVISOSAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AVISOSWhereInput;
    orderBy?: Prisma.AVISOSOrderByWithRelationInput | Prisma.AVISOSOrderByWithRelationInput[];
    cursor?: Prisma.AVISOSWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AVISOSCountAggregateInputType;
    _avg?: AVISOSAvgAggregateInputType;
    _sum?: AVISOSSumAggregateInputType;
    _min?: AVISOSMinAggregateInputType;
    _max?: AVISOSMaxAggregateInputType;
};
export type GetAVISOSAggregateType<T extends AVISOSAggregateArgs> = {
    [P in keyof T & keyof AggregateAVISOS]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAVISOS[P]> : Prisma.GetScalarType<T[P], AggregateAVISOS[P]>;
};
export type AVISOSGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AVISOSWhereInput;
    orderBy?: Prisma.AVISOSOrderByWithAggregationInput | Prisma.AVISOSOrderByWithAggregationInput[];
    by: Prisma.AVISOSScalarFieldEnum[] | Prisma.AVISOSScalarFieldEnum;
    having?: Prisma.AVISOSScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AVISOSCountAggregateInputType | true;
    _avg?: AVISOSAvgAggregateInputType;
    _sum?: AVISOSSumAggregateInputType;
    _min?: AVISOSMinAggregateInputType;
    _max?: AVISOSMaxAggregateInputType;
};
export type AVISOSGroupByOutputType = {
    id: string;
    autor_id: string;
    titulo: string;
    contenido: string;
    categoria: string;
    urgente: boolean;
    alcance: string;
    carrera_id: number | null;
    cuatrimestre: number | null;
    publicado_en: Date;
    _count: AVISOSCountAggregateOutputType | null;
    _avg: AVISOSAvgAggregateOutputType | null;
    _sum: AVISOSSumAggregateOutputType | null;
    _min: AVISOSMinAggregateOutputType | null;
    _max: AVISOSMaxAggregateOutputType | null;
};
export type GetAVISOSGroupByPayload<T extends AVISOSGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AVISOSGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AVISOSGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AVISOSGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AVISOSGroupByOutputType[P]>;
}>>;
export type AVISOSWhereInput = {
    AND?: Prisma.AVISOSWhereInput | Prisma.AVISOSWhereInput[];
    OR?: Prisma.AVISOSWhereInput[];
    NOT?: Prisma.AVISOSWhereInput | Prisma.AVISOSWhereInput[];
    id?: Prisma.UuidFilter<"AVISOS"> | string;
    autor_id?: Prisma.UuidFilter<"AVISOS"> | string;
    titulo?: Prisma.StringFilter<"AVISOS"> | string;
    contenido?: Prisma.StringFilter<"AVISOS"> | string;
    categoria?: Prisma.StringFilter<"AVISOS"> | string;
    urgente?: Prisma.BoolFilter<"AVISOS"> | boolean;
    alcance?: Prisma.StringFilter<"AVISOS"> | string;
    carrera_id?: Prisma.IntNullableFilter<"AVISOS"> | number | null;
    cuatrimestre?: Prisma.IntNullableFilter<"AVISOS"> | number | null;
    publicado_en?: Prisma.DateTimeFilter<"AVISOS"> | Date | string;
    USUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
    CARRERAS?: Prisma.XOR<Prisma.CARRERASNullableScalarRelationFilter, Prisma.CARRERASWhereInput> | null;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESListRelationFilter;
};
export type AVISOSOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    autor_id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    urgente?: Prisma.SortOrder;
    alcance?: Prisma.SortOrder;
    carrera_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    cuatrimestre?: Prisma.SortOrderInput | Prisma.SortOrder;
    publicado_en?: Prisma.SortOrder;
    USUARIOS?: Prisma.USUARIOSOrderByWithRelationInput;
    CARRERAS?: Prisma.CARRERASOrderByWithRelationInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESOrderByRelationAggregateInput;
};
export type AVISOSWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AVISOSWhereInput | Prisma.AVISOSWhereInput[];
    OR?: Prisma.AVISOSWhereInput[];
    NOT?: Prisma.AVISOSWhereInput | Prisma.AVISOSWhereInput[];
    autor_id?: Prisma.UuidFilter<"AVISOS"> | string;
    titulo?: Prisma.StringFilter<"AVISOS"> | string;
    contenido?: Prisma.StringFilter<"AVISOS"> | string;
    categoria?: Prisma.StringFilter<"AVISOS"> | string;
    urgente?: Prisma.BoolFilter<"AVISOS"> | boolean;
    alcance?: Prisma.StringFilter<"AVISOS"> | string;
    carrera_id?: Prisma.IntNullableFilter<"AVISOS"> | number | null;
    cuatrimestre?: Prisma.IntNullableFilter<"AVISOS"> | number | null;
    publicado_en?: Prisma.DateTimeFilter<"AVISOS"> | Date | string;
    USUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
    CARRERAS?: Prisma.XOR<Prisma.CARRERASNullableScalarRelationFilter, Prisma.CARRERASWhereInput> | null;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESListRelationFilter;
}, "id">;
export type AVISOSOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    autor_id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    urgente?: Prisma.SortOrder;
    alcance?: Prisma.SortOrder;
    carrera_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    cuatrimestre?: Prisma.SortOrderInput | Prisma.SortOrder;
    publicado_en?: Prisma.SortOrder;
    _count?: Prisma.AVISOSCountOrderByAggregateInput;
    _avg?: Prisma.AVISOSAvgOrderByAggregateInput;
    _max?: Prisma.AVISOSMaxOrderByAggregateInput;
    _min?: Prisma.AVISOSMinOrderByAggregateInput;
    _sum?: Prisma.AVISOSSumOrderByAggregateInput;
};
export type AVISOSScalarWhereWithAggregatesInput = {
    AND?: Prisma.AVISOSScalarWhereWithAggregatesInput | Prisma.AVISOSScalarWhereWithAggregatesInput[];
    OR?: Prisma.AVISOSScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AVISOSScalarWhereWithAggregatesInput | Prisma.AVISOSScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AVISOS"> | string;
    autor_id?: Prisma.UuidWithAggregatesFilter<"AVISOS"> | string;
    titulo?: Prisma.StringWithAggregatesFilter<"AVISOS"> | string;
    contenido?: Prisma.StringWithAggregatesFilter<"AVISOS"> | string;
    categoria?: Prisma.StringWithAggregatesFilter<"AVISOS"> | string;
    urgente?: Prisma.BoolWithAggregatesFilter<"AVISOS"> | boolean;
    alcance?: Prisma.StringWithAggregatesFilter<"AVISOS"> | string;
    carrera_id?: Prisma.IntNullableWithAggregatesFilter<"AVISOS"> | number | null;
    cuatrimestre?: Prisma.IntNullableWithAggregatesFilter<"AVISOS"> | number | null;
    publicado_en?: Prisma.DateTimeWithAggregatesFilter<"AVISOS"> | Date | string;
};
export type AVISOSCreateInput = {
    id?: string;
    titulo: string;
    contenido: string;
    categoria: string;
    urgente: boolean;
    alcance: string;
    cuatrimestre?: number | null;
    publicado_en?: Date | string;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutAVISOSInput;
    CARRERAS?: Prisma.CARRERASCreateNestedOneWithoutAVISOSInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESCreateNestedManyWithoutAVISOSInput;
};
export type AVISOSUncheckedCreateInput = {
    id?: string;
    autor_id: string;
    titulo: string;
    contenido: string;
    categoria: string;
    urgente: boolean;
    alcance: string;
    carrera_id?: number | null;
    cuatrimestre?: number | null;
    publicado_en?: Date | string;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedCreateNestedManyWithoutAVISOSInput;
};
export type AVISOSUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    urgente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    alcance?: Prisma.StringFieldUpdateOperationsInput | string;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    publicado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutAVISOSNestedInput;
    CARRERAS?: Prisma.CARRERASUpdateOneWithoutAVISOSNestedInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUpdateManyWithoutAVISOSNestedInput;
};
export type AVISOSUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    autor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    urgente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    alcance?: Prisma.StringFieldUpdateOperationsInput | string;
    carrera_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    publicado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedUpdateManyWithoutAVISOSNestedInput;
};
export type AVISOSCreateManyInput = {
    id?: string;
    autor_id: string;
    titulo: string;
    contenido: string;
    categoria: string;
    urgente: boolean;
    alcance: string;
    carrera_id?: number | null;
    cuatrimestre?: number | null;
    publicado_en?: Date | string;
};
export type AVISOSUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    urgente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    alcance?: Prisma.StringFieldUpdateOperationsInput | string;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    publicado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AVISOSUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    autor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    urgente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    alcance?: Prisma.StringFieldUpdateOperationsInput | string;
    carrera_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    publicado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AVISOSCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    autor_id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    urgente?: Prisma.SortOrder;
    alcance?: Prisma.SortOrder;
    carrera_id?: Prisma.SortOrder;
    cuatrimestre?: Prisma.SortOrder;
    publicado_en?: Prisma.SortOrder;
};
export type AVISOSAvgOrderByAggregateInput = {
    carrera_id?: Prisma.SortOrder;
    cuatrimestre?: Prisma.SortOrder;
};
export type AVISOSMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    autor_id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    urgente?: Prisma.SortOrder;
    alcance?: Prisma.SortOrder;
    carrera_id?: Prisma.SortOrder;
    cuatrimestre?: Prisma.SortOrder;
    publicado_en?: Prisma.SortOrder;
};
export type AVISOSMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    autor_id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    urgente?: Prisma.SortOrder;
    alcance?: Prisma.SortOrder;
    carrera_id?: Prisma.SortOrder;
    cuatrimestre?: Prisma.SortOrder;
    publicado_en?: Prisma.SortOrder;
};
export type AVISOSSumOrderByAggregateInput = {
    carrera_id?: Prisma.SortOrder;
    cuatrimestre?: Prisma.SortOrder;
};
export type AVISOSListRelationFilter = {
    every?: Prisma.AVISOSWhereInput;
    some?: Prisma.AVISOSWhereInput;
    none?: Prisma.AVISOSWhereInput;
};
export type AVISOSOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AVISOSNullableScalarRelationFilter = {
    is?: Prisma.AVISOSWhereInput | null;
    isNot?: Prisma.AVISOSWhereInput | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type AVISOSCreateNestedManyWithoutCARRERASInput = {
    create?: Prisma.XOR<Prisma.AVISOSCreateWithoutCARRERASInput, Prisma.AVISOSUncheckedCreateWithoutCARRERASInput> | Prisma.AVISOSCreateWithoutCARRERASInput[] | Prisma.AVISOSUncheckedCreateWithoutCARRERASInput[];
    connectOrCreate?: Prisma.AVISOSCreateOrConnectWithoutCARRERASInput | Prisma.AVISOSCreateOrConnectWithoutCARRERASInput[];
    createMany?: Prisma.AVISOSCreateManyCARRERASInputEnvelope;
    connect?: Prisma.AVISOSWhereUniqueInput | Prisma.AVISOSWhereUniqueInput[];
};
export type AVISOSUncheckedCreateNestedManyWithoutCARRERASInput = {
    create?: Prisma.XOR<Prisma.AVISOSCreateWithoutCARRERASInput, Prisma.AVISOSUncheckedCreateWithoutCARRERASInput> | Prisma.AVISOSCreateWithoutCARRERASInput[] | Prisma.AVISOSUncheckedCreateWithoutCARRERASInput[];
    connectOrCreate?: Prisma.AVISOSCreateOrConnectWithoutCARRERASInput | Prisma.AVISOSCreateOrConnectWithoutCARRERASInput[];
    createMany?: Prisma.AVISOSCreateManyCARRERASInputEnvelope;
    connect?: Prisma.AVISOSWhereUniqueInput | Prisma.AVISOSWhereUniqueInput[];
};
export type AVISOSUpdateManyWithoutCARRERASNestedInput = {
    create?: Prisma.XOR<Prisma.AVISOSCreateWithoutCARRERASInput, Prisma.AVISOSUncheckedCreateWithoutCARRERASInput> | Prisma.AVISOSCreateWithoutCARRERASInput[] | Prisma.AVISOSUncheckedCreateWithoutCARRERASInput[];
    connectOrCreate?: Prisma.AVISOSCreateOrConnectWithoutCARRERASInput | Prisma.AVISOSCreateOrConnectWithoutCARRERASInput[];
    upsert?: Prisma.AVISOSUpsertWithWhereUniqueWithoutCARRERASInput | Prisma.AVISOSUpsertWithWhereUniqueWithoutCARRERASInput[];
    createMany?: Prisma.AVISOSCreateManyCARRERASInputEnvelope;
    set?: Prisma.AVISOSWhereUniqueInput | Prisma.AVISOSWhereUniqueInput[];
    disconnect?: Prisma.AVISOSWhereUniqueInput | Prisma.AVISOSWhereUniqueInput[];
    delete?: Prisma.AVISOSWhereUniqueInput | Prisma.AVISOSWhereUniqueInput[];
    connect?: Prisma.AVISOSWhereUniqueInput | Prisma.AVISOSWhereUniqueInput[];
    update?: Prisma.AVISOSUpdateWithWhereUniqueWithoutCARRERASInput | Prisma.AVISOSUpdateWithWhereUniqueWithoutCARRERASInput[];
    updateMany?: Prisma.AVISOSUpdateManyWithWhereWithoutCARRERASInput | Prisma.AVISOSUpdateManyWithWhereWithoutCARRERASInput[];
    deleteMany?: Prisma.AVISOSScalarWhereInput | Prisma.AVISOSScalarWhereInput[];
};
export type AVISOSUncheckedUpdateManyWithoutCARRERASNestedInput = {
    create?: Prisma.XOR<Prisma.AVISOSCreateWithoutCARRERASInput, Prisma.AVISOSUncheckedCreateWithoutCARRERASInput> | Prisma.AVISOSCreateWithoutCARRERASInput[] | Prisma.AVISOSUncheckedCreateWithoutCARRERASInput[];
    connectOrCreate?: Prisma.AVISOSCreateOrConnectWithoutCARRERASInput | Prisma.AVISOSCreateOrConnectWithoutCARRERASInput[];
    upsert?: Prisma.AVISOSUpsertWithWhereUniqueWithoutCARRERASInput | Prisma.AVISOSUpsertWithWhereUniqueWithoutCARRERASInput[];
    createMany?: Prisma.AVISOSCreateManyCARRERASInputEnvelope;
    set?: Prisma.AVISOSWhereUniqueInput | Prisma.AVISOSWhereUniqueInput[];
    disconnect?: Prisma.AVISOSWhereUniqueInput | Prisma.AVISOSWhereUniqueInput[];
    delete?: Prisma.AVISOSWhereUniqueInput | Prisma.AVISOSWhereUniqueInput[];
    connect?: Prisma.AVISOSWhereUniqueInput | Prisma.AVISOSWhereUniqueInput[];
    update?: Prisma.AVISOSUpdateWithWhereUniqueWithoutCARRERASInput | Prisma.AVISOSUpdateWithWhereUniqueWithoutCARRERASInput[];
    updateMany?: Prisma.AVISOSUpdateManyWithWhereWithoutCARRERASInput | Prisma.AVISOSUpdateManyWithWhereWithoutCARRERASInput[];
    deleteMany?: Prisma.AVISOSScalarWhereInput | Prisma.AVISOSScalarWhereInput[];
};
export type AVISOSCreateNestedOneWithoutNOTIFICACIONESInput = {
    create?: Prisma.XOR<Prisma.AVISOSCreateWithoutNOTIFICACIONESInput, Prisma.AVISOSUncheckedCreateWithoutNOTIFICACIONESInput>;
    connectOrCreate?: Prisma.AVISOSCreateOrConnectWithoutNOTIFICACIONESInput;
    connect?: Prisma.AVISOSWhereUniqueInput;
};
export type AVISOSUpdateOneWithoutNOTIFICACIONESNestedInput = {
    create?: Prisma.XOR<Prisma.AVISOSCreateWithoutNOTIFICACIONESInput, Prisma.AVISOSUncheckedCreateWithoutNOTIFICACIONESInput>;
    connectOrCreate?: Prisma.AVISOSCreateOrConnectWithoutNOTIFICACIONESInput;
    upsert?: Prisma.AVISOSUpsertWithoutNOTIFICACIONESInput;
    disconnect?: Prisma.AVISOSWhereInput | boolean;
    delete?: Prisma.AVISOSWhereInput | boolean;
    connect?: Prisma.AVISOSWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AVISOSUpdateToOneWithWhereWithoutNOTIFICACIONESInput, Prisma.AVISOSUpdateWithoutNOTIFICACIONESInput>, Prisma.AVISOSUncheckedUpdateWithoutNOTIFICACIONESInput>;
};
export type AVISOSCreateNestedManyWithoutUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.AVISOSCreateWithoutUSUARIOSInput, Prisma.AVISOSUncheckedCreateWithoutUSUARIOSInput> | Prisma.AVISOSCreateWithoutUSUARIOSInput[] | Prisma.AVISOSUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.AVISOSCreateOrConnectWithoutUSUARIOSInput | Prisma.AVISOSCreateOrConnectWithoutUSUARIOSInput[];
    createMany?: Prisma.AVISOSCreateManyUSUARIOSInputEnvelope;
    connect?: Prisma.AVISOSWhereUniqueInput | Prisma.AVISOSWhereUniqueInput[];
};
export type AVISOSUncheckedCreateNestedManyWithoutUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.AVISOSCreateWithoutUSUARIOSInput, Prisma.AVISOSUncheckedCreateWithoutUSUARIOSInput> | Prisma.AVISOSCreateWithoutUSUARIOSInput[] | Prisma.AVISOSUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.AVISOSCreateOrConnectWithoutUSUARIOSInput | Prisma.AVISOSCreateOrConnectWithoutUSUARIOSInput[];
    createMany?: Prisma.AVISOSCreateManyUSUARIOSInputEnvelope;
    connect?: Prisma.AVISOSWhereUniqueInput | Prisma.AVISOSWhereUniqueInput[];
};
export type AVISOSUpdateManyWithoutUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.AVISOSCreateWithoutUSUARIOSInput, Prisma.AVISOSUncheckedCreateWithoutUSUARIOSInput> | Prisma.AVISOSCreateWithoutUSUARIOSInput[] | Prisma.AVISOSUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.AVISOSCreateOrConnectWithoutUSUARIOSInput | Prisma.AVISOSCreateOrConnectWithoutUSUARIOSInput[];
    upsert?: Prisma.AVISOSUpsertWithWhereUniqueWithoutUSUARIOSInput | Prisma.AVISOSUpsertWithWhereUniqueWithoutUSUARIOSInput[];
    createMany?: Prisma.AVISOSCreateManyUSUARIOSInputEnvelope;
    set?: Prisma.AVISOSWhereUniqueInput | Prisma.AVISOSWhereUniqueInput[];
    disconnect?: Prisma.AVISOSWhereUniqueInput | Prisma.AVISOSWhereUniqueInput[];
    delete?: Prisma.AVISOSWhereUniqueInput | Prisma.AVISOSWhereUniqueInput[];
    connect?: Prisma.AVISOSWhereUniqueInput | Prisma.AVISOSWhereUniqueInput[];
    update?: Prisma.AVISOSUpdateWithWhereUniqueWithoutUSUARIOSInput | Prisma.AVISOSUpdateWithWhereUniqueWithoutUSUARIOSInput[];
    updateMany?: Prisma.AVISOSUpdateManyWithWhereWithoutUSUARIOSInput | Prisma.AVISOSUpdateManyWithWhereWithoutUSUARIOSInput[];
    deleteMany?: Prisma.AVISOSScalarWhereInput | Prisma.AVISOSScalarWhereInput[];
};
export type AVISOSUncheckedUpdateManyWithoutUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.AVISOSCreateWithoutUSUARIOSInput, Prisma.AVISOSUncheckedCreateWithoutUSUARIOSInput> | Prisma.AVISOSCreateWithoutUSUARIOSInput[] | Prisma.AVISOSUncheckedCreateWithoutUSUARIOSInput[];
    connectOrCreate?: Prisma.AVISOSCreateOrConnectWithoutUSUARIOSInput | Prisma.AVISOSCreateOrConnectWithoutUSUARIOSInput[];
    upsert?: Prisma.AVISOSUpsertWithWhereUniqueWithoutUSUARIOSInput | Prisma.AVISOSUpsertWithWhereUniqueWithoutUSUARIOSInput[];
    createMany?: Prisma.AVISOSCreateManyUSUARIOSInputEnvelope;
    set?: Prisma.AVISOSWhereUniqueInput | Prisma.AVISOSWhereUniqueInput[];
    disconnect?: Prisma.AVISOSWhereUniqueInput | Prisma.AVISOSWhereUniqueInput[];
    delete?: Prisma.AVISOSWhereUniqueInput | Prisma.AVISOSWhereUniqueInput[];
    connect?: Prisma.AVISOSWhereUniqueInput | Prisma.AVISOSWhereUniqueInput[];
    update?: Prisma.AVISOSUpdateWithWhereUniqueWithoutUSUARIOSInput | Prisma.AVISOSUpdateWithWhereUniqueWithoutUSUARIOSInput[];
    updateMany?: Prisma.AVISOSUpdateManyWithWhereWithoutUSUARIOSInput | Prisma.AVISOSUpdateManyWithWhereWithoutUSUARIOSInput[];
    deleteMany?: Prisma.AVISOSScalarWhereInput | Prisma.AVISOSScalarWhereInput[];
};
export type AVISOSCreateWithoutCARRERASInput = {
    id?: string;
    titulo: string;
    contenido: string;
    categoria: string;
    urgente: boolean;
    alcance: string;
    cuatrimestre?: number | null;
    publicado_en?: Date | string;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutAVISOSInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESCreateNestedManyWithoutAVISOSInput;
};
export type AVISOSUncheckedCreateWithoutCARRERASInput = {
    id?: string;
    autor_id: string;
    titulo: string;
    contenido: string;
    categoria: string;
    urgente: boolean;
    alcance: string;
    cuatrimestre?: number | null;
    publicado_en?: Date | string;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedCreateNestedManyWithoutAVISOSInput;
};
export type AVISOSCreateOrConnectWithoutCARRERASInput = {
    where: Prisma.AVISOSWhereUniqueInput;
    create: Prisma.XOR<Prisma.AVISOSCreateWithoutCARRERASInput, Prisma.AVISOSUncheckedCreateWithoutCARRERASInput>;
};
export type AVISOSCreateManyCARRERASInputEnvelope = {
    data: Prisma.AVISOSCreateManyCARRERASInput | Prisma.AVISOSCreateManyCARRERASInput[];
    skipDuplicates?: boolean;
};
export type AVISOSUpsertWithWhereUniqueWithoutCARRERASInput = {
    where: Prisma.AVISOSWhereUniqueInput;
    update: Prisma.XOR<Prisma.AVISOSUpdateWithoutCARRERASInput, Prisma.AVISOSUncheckedUpdateWithoutCARRERASInput>;
    create: Prisma.XOR<Prisma.AVISOSCreateWithoutCARRERASInput, Prisma.AVISOSUncheckedCreateWithoutCARRERASInput>;
};
export type AVISOSUpdateWithWhereUniqueWithoutCARRERASInput = {
    where: Prisma.AVISOSWhereUniqueInput;
    data: Prisma.XOR<Prisma.AVISOSUpdateWithoutCARRERASInput, Prisma.AVISOSUncheckedUpdateWithoutCARRERASInput>;
};
export type AVISOSUpdateManyWithWhereWithoutCARRERASInput = {
    where: Prisma.AVISOSScalarWhereInput;
    data: Prisma.XOR<Prisma.AVISOSUpdateManyMutationInput, Prisma.AVISOSUncheckedUpdateManyWithoutCARRERASInput>;
};
export type AVISOSScalarWhereInput = {
    AND?: Prisma.AVISOSScalarWhereInput | Prisma.AVISOSScalarWhereInput[];
    OR?: Prisma.AVISOSScalarWhereInput[];
    NOT?: Prisma.AVISOSScalarWhereInput | Prisma.AVISOSScalarWhereInput[];
    id?: Prisma.UuidFilter<"AVISOS"> | string;
    autor_id?: Prisma.UuidFilter<"AVISOS"> | string;
    titulo?: Prisma.StringFilter<"AVISOS"> | string;
    contenido?: Prisma.StringFilter<"AVISOS"> | string;
    categoria?: Prisma.StringFilter<"AVISOS"> | string;
    urgente?: Prisma.BoolFilter<"AVISOS"> | boolean;
    alcance?: Prisma.StringFilter<"AVISOS"> | string;
    carrera_id?: Prisma.IntNullableFilter<"AVISOS"> | number | null;
    cuatrimestre?: Prisma.IntNullableFilter<"AVISOS"> | number | null;
    publicado_en?: Prisma.DateTimeFilter<"AVISOS"> | Date | string;
};
export type AVISOSCreateWithoutNOTIFICACIONESInput = {
    id?: string;
    titulo: string;
    contenido: string;
    categoria: string;
    urgente: boolean;
    alcance: string;
    cuatrimestre?: number | null;
    publicado_en?: Date | string;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutAVISOSInput;
    CARRERAS?: Prisma.CARRERASCreateNestedOneWithoutAVISOSInput;
};
export type AVISOSUncheckedCreateWithoutNOTIFICACIONESInput = {
    id?: string;
    autor_id: string;
    titulo: string;
    contenido: string;
    categoria: string;
    urgente: boolean;
    alcance: string;
    carrera_id?: number | null;
    cuatrimestre?: number | null;
    publicado_en?: Date | string;
};
export type AVISOSCreateOrConnectWithoutNOTIFICACIONESInput = {
    where: Prisma.AVISOSWhereUniqueInput;
    create: Prisma.XOR<Prisma.AVISOSCreateWithoutNOTIFICACIONESInput, Prisma.AVISOSUncheckedCreateWithoutNOTIFICACIONESInput>;
};
export type AVISOSUpsertWithoutNOTIFICACIONESInput = {
    update: Prisma.XOR<Prisma.AVISOSUpdateWithoutNOTIFICACIONESInput, Prisma.AVISOSUncheckedUpdateWithoutNOTIFICACIONESInput>;
    create: Prisma.XOR<Prisma.AVISOSCreateWithoutNOTIFICACIONESInput, Prisma.AVISOSUncheckedCreateWithoutNOTIFICACIONESInput>;
    where?: Prisma.AVISOSWhereInput;
};
export type AVISOSUpdateToOneWithWhereWithoutNOTIFICACIONESInput = {
    where?: Prisma.AVISOSWhereInput;
    data: Prisma.XOR<Prisma.AVISOSUpdateWithoutNOTIFICACIONESInput, Prisma.AVISOSUncheckedUpdateWithoutNOTIFICACIONESInput>;
};
export type AVISOSUpdateWithoutNOTIFICACIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    urgente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    alcance?: Prisma.StringFieldUpdateOperationsInput | string;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    publicado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutAVISOSNestedInput;
    CARRERAS?: Prisma.CARRERASUpdateOneWithoutAVISOSNestedInput;
};
export type AVISOSUncheckedUpdateWithoutNOTIFICACIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    autor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    urgente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    alcance?: Prisma.StringFieldUpdateOperationsInput | string;
    carrera_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    publicado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AVISOSCreateWithoutUSUARIOSInput = {
    id?: string;
    titulo: string;
    contenido: string;
    categoria: string;
    urgente: boolean;
    alcance: string;
    cuatrimestre?: number | null;
    publicado_en?: Date | string;
    CARRERAS?: Prisma.CARRERASCreateNestedOneWithoutAVISOSInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESCreateNestedManyWithoutAVISOSInput;
};
export type AVISOSUncheckedCreateWithoutUSUARIOSInput = {
    id?: string;
    titulo: string;
    contenido: string;
    categoria: string;
    urgente: boolean;
    alcance: string;
    carrera_id?: number | null;
    cuatrimestre?: number | null;
    publicado_en?: Date | string;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedCreateNestedManyWithoutAVISOSInput;
};
export type AVISOSCreateOrConnectWithoutUSUARIOSInput = {
    where: Prisma.AVISOSWhereUniqueInput;
    create: Prisma.XOR<Prisma.AVISOSCreateWithoutUSUARIOSInput, Prisma.AVISOSUncheckedCreateWithoutUSUARIOSInput>;
};
export type AVISOSCreateManyUSUARIOSInputEnvelope = {
    data: Prisma.AVISOSCreateManyUSUARIOSInput | Prisma.AVISOSCreateManyUSUARIOSInput[];
    skipDuplicates?: boolean;
};
export type AVISOSUpsertWithWhereUniqueWithoutUSUARIOSInput = {
    where: Prisma.AVISOSWhereUniqueInput;
    update: Prisma.XOR<Prisma.AVISOSUpdateWithoutUSUARIOSInput, Prisma.AVISOSUncheckedUpdateWithoutUSUARIOSInput>;
    create: Prisma.XOR<Prisma.AVISOSCreateWithoutUSUARIOSInput, Prisma.AVISOSUncheckedCreateWithoutUSUARIOSInput>;
};
export type AVISOSUpdateWithWhereUniqueWithoutUSUARIOSInput = {
    where: Prisma.AVISOSWhereUniqueInput;
    data: Prisma.XOR<Prisma.AVISOSUpdateWithoutUSUARIOSInput, Prisma.AVISOSUncheckedUpdateWithoutUSUARIOSInput>;
};
export type AVISOSUpdateManyWithWhereWithoutUSUARIOSInput = {
    where: Prisma.AVISOSScalarWhereInput;
    data: Prisma.XOR<Prisma.AVISOSUpdateManyMutationInput, Prisma.AVISOSUncheckedUpdateManyWithoutUSUARIOSInput>;
};
export type AVISOSCreateManyCARRERASInput = {
    id?: string;
    autor_id: string;
    titulo: string;
    contenido: string;
    categoria: string;
    urgente: boolean;
    alcance: string;
    cuatrimestre?: number | null;
    publicado_en?: Date | string;
};
export type AVISOSUpdateWithoutCARRERASInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    urgente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    alcance?: Prisma.StringFieldUpdateOperationsInput | string;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    publicado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutAVISOSNestedInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUpdateManyWithoutAVISOSNestedInput;
};
export type AVISOSUncheckedUpdateWithoutCARRERASInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    autor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    urgente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    alcance?: Prisma.StringFieldUpdateOperationsInput | string;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    publicado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedUpdateManyWithoutAVISOSNestedInput;
};
export type AVISOSUncheckedUpdateManyWithoutCARRERASInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    autor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    urgente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    alcance?: Prisma.StringFieldUpdateOperationsInput | string;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    publicado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AVISOSCreateManyUSUARIOSInput = {
    id?: string;
    titulo: string;
    contenido: string;
    categoria: string;
    urgente: boolean;
    alcance: string;
    carrera_id?: number | null;
    cuatrimestre?: number | null;
    publicado_en?: Date | string;
};
export type AVISOSUpdateWithoutUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    urgente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    alcance?: Prisma.StringFieldUpdateOperationsInput | string;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    publicado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    CARRERAS?: Prisma.CARRERASUpdateOneWithoutAVISOSNestedInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUpdateManyWithoutAVISOSNestedInput;
};
export type AVISOSUncheckedUpdateWithoutUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    urgente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    alcance?: Prisma.StringFieldUpdateOperationsInput | string;
    carrera_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    publicado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedUpdateManyWithoutAVISOSNestedInput;
};
export type AVISOSUncheckedUpdateManyWithoutUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    urgente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    alcance?: Prisma.StringFieldUpdateOperationsInput | string;
    carrera_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    publicado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AVISOSCountOutputType = {
    NOTIFICACIONES: number;
};
export type AVISOSCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    NOTIFICACIONES?: boolean | AVISOSCountOutputTypeCountNOTIFICACIONESArgs;
};
export type AVISOSCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AVISOSCountOutputTypeSelect<ExtArgs> | null;
};
export type AVISOSCountOutputTypeCountNOTIFICACIONESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NOTIFICACIONESWhereInput;
};
export type AVISOSSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    autor_id?: boolean;
    titulo?: boolean;
    contenido?: boolean;
    categoria?: boolean;
    urgente?: boolean;
    alcance?: boolean;
    carrera_id?: boolean;
    cuatrimestre?: boolean;
    publicado_en?: boolean;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    CARRERAS?: boolean | Prisma.AVISOS$CARRERASArgs<ExtArgs>;
    NOTIFICACIONES?: boolean | Prisma.AVISOS$NOTIFICACIONESArgs<ExtArgs>;
    _count?: boolean | Prisma.AVISOSCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aVISOS"]>;
export type AVISOSSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    autor_id?: boolean;
    titulo?: boolean;
    contenido?: boolean;
    categoria?: boolean;
    urgente?: boolean;
    alcance?: boolean;
    carrera_id?: boolean;
    cuatrimestre?: boolean;
    publicado_en?: boolean;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    CARRERAS?: boolean | Prisma.AVISOS$CARRERASArgs<ExtArgs>;
}, ExtArgs["result"]["aVISOS"]>;
export type AVISOSSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    autor_id?: boolean;
    titulo?: boolean;
    contenido?: boolean;
    categoria?: boolean;
    urgente?: boolean;
    alcance?: boolean;
    carrera_id?: boolean;
    cuatrimestre?: boolean;
    publicado_en?: boolean;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    CARRERAS?: boolean | Prisma.AVISOS$CARRERASArgs<ExtArgs>;
}, ExtArgs["result"]["aVISOS"]>;
export type AVISOSSelectScalar = {
    id?: boolean;
    autor_id?: boolean;
    titulo?: boolean;
    contenido?: boolean;
    categoria?: boolean;
    urgente?: boolean;
    alcance?: boolean;
    carrera_id?: boolean;
    cuatrimestre?: boolean;
    publicado_en?: boolean;
};
export type AVISOSOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "autor_id" | "titulo" | "contenido" | "categoria" | "urgente" | "alcance" | "carrera_id" | "cuatrimestre" | "publicado_en", ExtArgs["result"]["aVISOS"]>;
export type AVISOSInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    CARRERAS?: boolean | Prisma.AVISOS$CARRERASArgs<ExtArgs>;
    NOTIFICACIONES?: boolean | Prisma.AVISOS$NOTIFICACIONESArgs<ExtArgs>;
    _count?: boolean | Prisma.AVISOSCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AVISOSIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    CARRERAS?: boolean | Prisma.AVISOS$CARRERASArgs<ExtArgs>;
};
export type AVISOSIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    CARRERAS?: boolean | Prisma.AVISOS$CARRERASArgs<ExtArgs>;
};
export type $AVISOSPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AVISOS";
    objects: {
        USUARIOS: Prisma.$USUARIOSPayload<ExtArgs>;
        CARRERAS: Prisma.$CARRERASPayload<ExtArgs> | null;
        NOTIFICACIONES: Prisma.$NOTIFICACIONESPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        autor_id: string;
        titulo: string;
        contenido: string;
        categoria: string;
        urgente: boolean;
        alcance: string;
        carrera_id: number | null;
        cuatrimestre: number | null;
        publicado_en: Date;
    }, ExtArgs["result"]["aVISOS"]>;
    composites: {};
};
export type AVISOSGetPayload<S extends boolean | null | undefined | AVISOSDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AVISOSPayload, S>;
export type AVISOSCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AVISOSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AVISOSCountAggregateInputType | true;
};
export interface AVISOSDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AVISOS'];
        meta: {
            name: 'AVISOS';
        };
    };
    findUnique<T extends AVISOSFindUniqueArgs>(args: Prisma.SelectSubset<T, AVISOSFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AVISOSClient<runtime.Types.Result.GetResult<Prisma.$AVISOSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AVISOSFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AVISOSFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AVISOSClient<runtime.Types.Result.GetResult<Prisma.$AVISOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AVISOSFindFirstArgs>(args?: Prisma.SelectSubset<T, AVISOSFindFirstArgs<ExtArgs>>): Prisma.Prisma__AVISOSClient<runtime.Types.Result.GetResult<Prisma.$AVISOSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AVISOSFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AVISOSFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AVISOSClient<runtime.Types.Result.GetResult<Prisma.$AVISOSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AVISOSFindManyArgs>(args?: Prisma.SelectSubset<T, AVISOSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AVISOSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AVISOSCreateArgs>(args: Prisma.SelectSubset<T, AVISOSCreateArgs<ExtArgs>>): Prisma.Prisma__AVISOSClient<runtime.Types.Result.GetResult<Prisma.$AVISOSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AVISOSCreateManyArgs>(args?: Prisma.SelectSubset<T, AVISOSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AVISOSCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AVISOSCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AVISOSPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AVISOSDeleteArgs>(args: Prisma.SelectSubset<T, AVISOSDeleteArgs<ExtArgs>>): Prisma.Prisma__AVISOSClient<runtime.Types.Result.GetResult<Prisma.$AVISOSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AVISOSUpdateArgs>(args: Prisma.SelectSubset<T, AVISOSUpdateArgs<ExtArgs>>): Prisma.Prisma__AVISOSClient<runtime.Types.Result.GetResult<Prisma.$AVISOSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AVISOSDeleteManyArgs>(args?: Prisma.SelectSubset<T, AVISOSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AVISOSUpdateManyArgs>(args: Prisma.SelectSubset<T, AVISOSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AVISOSUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AVISOSUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AVISOSPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AVISOSUpsertArgs>(args: Prisma.SelectSubset<T, AVISOSUpsertArgs<ExtArgs>>): Prisma.Prisma__AVISOSClient<runtime.Types.Result.GetResult<Prisma.$AVISOSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AVISOSCountArgs>(args?: Prisma.Subset<T, AVISOSCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AVISOSCountAggregateOutputType> : number>;
    aggregate<T extends AVISOSAggregateArgs>(args: Prisma.Subset<T, AVISOSAggregateArgs>): Prisma.PrismaPromise<GetAVISOSAggregateType<T>>;
    groupBy<T extends AVISOSGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AVISOSGroupByArgs['orderBy'];
    } : {
        orderBy?: AVISOSGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AVISOSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAVISOSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AVISOSFieldRefs;
}
export interface Prisma__AVISOSClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    USUARIOS<T extends Prisma.USUARIOSDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.USUARIOSDefaultArgs<ExtArgs>>): Prisma.Prisma__USUARIOSClient<runtime.Types.Result.GetResult<Prisma.$USUARIOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    CARRERAS<T extends Prisma.AVISOS$CARRERASArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AVISOS$CARRERASArgs<ExtArgs>>): Prisma.Prisma__CARRERASClient<runtime.Types.Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    NOTIFICACIONES<T extends Prisma.AVISOS$NOTIFICACIONESArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AVISOS$NOTIFICACIONESArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NOTIFICACIONESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AVISOSFieldRefs {
    readonly id: Prisma.FieldRef<"AVISOS", 'String'>;
    readonly autor_id: Prisma.FieldRef<"AVISOS", 'String'>;
    readonly titulo: Prisma.FieldRef<"AVISOS", 'String'>;
    readonly contenido: Prisma.FieldRef<"AVISOS", 'String'>;
    readonly categoria: Prisma.FieldRef<"AVISOS", 'String'>;
    readonly urgente: Prisma.FieldRef<"AVISOS", 'Boolean'>;
    readonly alcance: Prisma.FieldRef<"AVISOS", 'String'>;
    readonly carrera_id: Prisma.FieldRef<"AVISOS", 'Int'>;
    readonly cuatrimestre: Prisma.FieldRef<"AVISOS", 'Int'>;
    readonly publicado_en: Prisma.FieldRef<"AVISOS", 'DateTime'>;
}
export type AVISOSFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AVISOSSelect<ExtArgs> | null;
    omit?: Prisma.AVISOSOmit<ExtArgs> | null;
    include?: Prisma.AVISOSInclude<ExtArgs> | null;
    where: Prisma.AVISOSWhereUniqueInput;
};
export type AVISOSFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AVISOSSelect<ExtArgs> | null;
    omit?: Prisma.AVISOSOmit<ExtArgs> | null;
    include?: Prisma.AVISOSInclude<ExtArgs> | null;
    where: Prisma.AVISOSWhereUniqueInput;
};
export type AVISOSFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AVISOSSelect<ExtArgs> | null;
    omit?: Prisma.AVISOSOmit<ExtArgs> | null;
    include?: Prisma.AVISOSInclude<ExtArgs> | null;
    where?: Prisma.AVISOSWhereInput;
    orderBy?: Prisma.AVISOSOrderByWithRelationInput | Prisma.AVISOSOrderByWithRelationInput[];
    cursor?: Prisma.AVISOSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AVISOSScalarFieldEnum | Prisma.AVISOSScalarFieldEnum[];
};
export type AVISOSFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AVISOSSelect<ExtArgs> | null;
    omit?: Prisma.AVISOSOmit<ExtArgs> | null;
    include?: Prisma.AVISOSInclude<ExtArgs> | null;
    where?: Prisma.AVISOSWhereInput;
    orderBy?: Prisma.AVISOSOrderByWithRelationInput | Prisma.AVISOSOrderByWithRelationInput[];
    cursor?: Prisma.AVISOSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AVISOSScalarFieldEnum | Prisma.AVISOSScalarFieldEnum[];
};
export type AVISOSFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AVISOSSelect<ExtArgs> | null;
    omit?: Prisma.AVISOSOmit<ExtArgs> | null;
    include?: Prisma.AVISOSInclude<ExtArgs> | null;
    where?: Prisma.AVISOSWhereInput;
    orderBy?: Prisma.AVISOSOrderByWithRelationInput | Prisma.AVISOSOrderByWithRelationInput[];
    cursor?: Prisma.AVISOSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AVISOSScalarFieldEnum | Prisma.AVISOSScalarFieldEnum[];
};
export type AVISOSCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AVISOSSelect<ExtArgs> | null;
    omit?: Prisma.AVISOSOmit<ExtArgs> | null;
    include?: Prisma.AVISOSInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AVISOSCreateInput, Prisma.AVISOSUncheckedCreateInput>;
};
export type AVISOSCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AVISOSCreateManyInput | Prisma.AVISOSCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AVISOSCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AVISOSSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AVISOSOmit<ExtArgs> | null;
    data: Prisma.AVISOSCreateManyInput | Prisma.AVISOSCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AVISOSIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AVISOSUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AVISOSSelect<ExtArgs> | null;
    omit?: Prisma.AVISOSOmit<ExtArgs> | null;
    include?: Prisma.AVISOSInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AVISOSUpdateInput, Prisma.AVISOSUncheckedUpdateInput>;
    where: Prisma.AVISOSWhereUniqueInput;
};
export type AVISOSUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AVISOSUpdateManyMutationInput, Prisma.AVISOSUncheckedUpdateManyInput>;
    where?: Prisma.AVISOSWhereInput;
    limit?: number;
};
export type AVISOSUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AVISOSSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AVISOSOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AVISOSUpdateManyMutationInput, Prisma.AVISOSUncheckedUpdateManyInput>;
    where?: Prisma.AVISOSWhereInput;
    limit?: number;
    include?: Prisma.AVISOSIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AVISOSUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AVISOSSelect<ExtArgs> | null;
    omit?: Prisma.AVISOSOmit<ExtArgs> | null;
    include?: Prisma.AVISOSInclude<ExtArgs> | null;
    where: Prisma.AVISOSWhereUniqueInput;
    create: Prisma.XOR<Prisma.AVISOSCreateInput, Prisma.AVISOSUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AVISOSUpdateInput, Prisma.AVISOSUncheckedUpdateInput>;
};
export type AVISOSDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AVISOSSelect<ExtArgs> | null;
    omit?: Prisma.AVISOSOmit<ExtArgs> | null;
    include?: Prisma.AVISOSInclude<ExtArgs> | null;
    where: Prisma.AVISOSWhereUniqueInput;
};
export type AVISOSDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AVISOSWhereInput;
    limit?: number;
};
export type AVISOS$CARRERASArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CARRERASSelect<ExtArgs> | null;
    omit?: Prisma.CARRERASOmit<ExtArgs> | null;
    include?: Prisma.CARRERASInclude<ExtArgs> | null;
    where?: Prisma.CARRERASWhereInput;
};
export type AVISOS$NOTIFICACIONESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AVISOSDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AVISOSSelect<ExtArgs> | null;
    omit?: Prisma.AVISOSOmit<ExtArgs> | null;
    include?: Prisma.AVISOSInclude<ExtArgs> | null;
};
