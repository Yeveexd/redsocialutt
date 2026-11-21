import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PUBLICACIONESModel = runtime.Types.Result.DefaultSelection<Prisma.$PUBLICACIONESPayload>;
export type AggregatePUBLICACIONES = {
    _count: PUBLICACIONESCountAggregateOutputType | null;
    _min: PUBLICACIONESMinAggregateOutputType | null;
    _max: PUBLICACIONESMaxAggregateOutputType | null;
};
export type PUBLICACIONESMinAggregateOutputType = {
    id: string | null;
    autor_id: string | null;
    publicacion_origen_id: string | null;
    contenido: string | null;
    tipo: string | null;
    creado_en: Date | null;
    eliminada_en: Date | null;
    eliminada_por: string | null;
};
export type PUBLICACIONESMaxAggregateOutputType = {
    id: string | null;
    autor_id: string | null;
    publicacion_origen_id: string | null;
    contenido: string | null;
    tipo: string | null;
    creado_en: Date | null;
    eliminada_en: Date | null;
    eliminada_por: string | null;
};
export type PUBLICACIONESCountAggregateOutputType = {
    id: number;
    autor_id: number;
    publicacion_origen_id: number;
    contenido: number;
    tipo: number;
    creado_en: number;
    eliminada_en: number;
    eliminada_por: number;
    _all: number;
};
export type PUBLICACIONESMinAggregateInputType = {
    id?: true;
    autor_id?: true;
    publicacion_origen_id?: true;
    contenido?: true;
    tipo?: true;
    creado_en?: true;
    eliminada_en?: true;
    eliminada_por?: true;
};
export type PUBLICACIONESMaxAggregateInputType = {
    id?: true;
    autor_id?: true;
    publicacion_origen_id?: true;
    contenido?: true;
    tipo?: true;
    creado_en?: true;
    eliminada_en?: true;
    eliminada_por?: true;
};
export type PUBLICACIONESCountAggregateInputType = {
    id?: true;
    autor_id?: true;
    publicacion_origen_id?: true;
    contenido?: true;
    tipo?: true;
    creado_en?: true;
    eliminada_en?: true;
    eliminada_por?: true;
    _all?: true;
};
export type PUBLICACIONESAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PUBLICACIONESWhereInput;
    orderBy?: Prisma.PUBLICACIONESOrderByWithRelationInput | Prisma.PUBLICACIONESOrderByWithRelationInput[];
    cursor?: Prisma.PUBLICACIONESWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PUBLICACIONESCountAggregateInputType;
    _min?: PUBLICACIONESMinAggregateInputType;
    _max?: PUBLICACIONESMaxAggregateInputType;
};
export type GetPUBLICACIONESAggregateType<T extends PUBLICACIONESAggregateArgs> = {
    [P in keyof T & keyof AggregatePUBLICACIONES]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePUBLICACIONES[P]> : Prisma.GetScalarType<T[P], AggregatePUBLICACIONES[P]>;
};
export type PUBLICACIONESGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PUBLICACIONESWhereInput;
    orderBy?: Prisma.PUBLICACIONESOrderByWithAggregationInput | Prisma.PUBLICACIONESOrderByWithAggregationInput[];
    by: Prisma.PUBLICACIONESScalarFieldEnum[] | Prisma.PUBLICACIONESScalarFieldEnum;
    having?: Prisma.PUBLICACIONESScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PUBLICACIONESCountAggregateInputType | true;
    _min?: PUBLICACIONESMinAggregateInputType;
    _max?: PUBLICACIONESMaxAggregateInputType;
};
export type PUBLICACIONESGroupByOutputType = {
    id: string;
    autor_id: string;
    publicacion_origen_id: string | null;
    contenido: string | null;
    tipo: string;
    creado_en: Date;
    eliminada_en: Date | null;
    eliminada_por: string | null;
    _count: PUBLICACIONESCountAggregateOutputType | null;
    _min: PUBLICACIONESMinAggregateOutputType | null;
    _max: PUBLICACIONESMaxAggregateOutputType | null;
};
export type GetPUBLICACIONESGroupByPayload<T extends PUBLICACIONESGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PUBLICACIONESGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PUBLICACIONESGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PUBLICACIONESGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PUBLICACIONESGroupByOutputType[P]>;
}>>;
export type PUBLICACIONESWhereInput = {
    AND?: Prisma.PUBLICACIONESWhereInput | Prisma.PUBLICACIONESWhereInput[];
    OR?: Prisma.PUBLICACIONESWhereInput[];
    NOT?: Prisma.PUBLICACIONESWhereInput | Prisma.PUBLICACIONESWhereInput[];
    id?: Prisma.UuidFilter<"PUBLICACIONES"> | string;
    autor_id?: Prisma.UuidFilter<"PUBLICACIONES"> | string;
    publicacion_origen_id?: Prisma.UuidNullableFilter<"PUBLICACIONES"> | string | null;
    contenido?: Prisma.StringNullableFilter<"PUBLICACIONES"> | string | null;
    tipo?: Prisma.StringFilter<"PUBLICACIONES"> | string;
    creado_en?: Prisma.DateTimeFilter<"PUBLICACIONES"> | Date | string;
    eliminada_en?: Prisma.DateTimeNullableFilter<"PUBLICACIONES"> | Date | string | null;
    eliminada_por?: Prisma.UuidNullableFilter<"PUBLICACIONES"> | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSListRelationFilter;
    MULTIMEDIA?: Prisma.MULTIMEDIAListRelationFilter;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESListRelationFilter;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: Prisma.XOR<Prisma.USUARIOSNullableScalarRelationFilter, Prisma.USUARIOSWhereInput> | null;
    PUBLICACIONES?: Prisma.XOR<Prisma.PUBLICACIONESNullableScalarRelationFilter, Prisma.PUBLICACIONESWhereInput> | null;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESListRelationFilter;
    REACCIONES?: Prisma.REACCIONESListRelationFilter;
    REPORTES?: Prisma.REPORTESListRelationFilter;
};
export type PUBLICACIONESOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    autor_id?: Prisma.SortOrder;
    publicacion_origen_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    contenido?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    eliminada_en?: Prisma.SortOrderInput | Prisma.SortOrder;
    eliminada_por?: Prisma.SortOrderInput | Prisma.SortOrder;
    COMENTARIOS?: Prisma.COMENTARIOSOrderByRelationAggregateInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAOrderByRelationAggregateInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESOrderByRelationAggregateInput;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS?: Prisma.USUARIOSOrderByWithRelationInput;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: Prisma.USUARIOSOrderByWithRelationInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESOrderByWithRelationInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESOrderByRelationAggregateInput;
    REACCIONES?: Prisma.REACCIONESOrderByRelationAggregateInput;
    REPORTES?: Prisma.REPORTESOrderByRelationAggregateInput;
};
export type PUBLICACIONESWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PUBLICACIONESWhereInput | Prisma.PUBLICACIONESWhereInput[];
    OR?: Prisma.PUBLICACIONESWhereInput[];
    NOT?: Prisma.PUBLICACIONESWhereInput | Prisma.PUBLICACIONESWhereInput[];
    autor_id?: Prisma.UuidFilter<"PUBLICACIONES"> | string;
    publicacion_origen_id?: Prisma.UuidNullableFilter<"PUBLICACIONES"> | string | null;
    contenido?: Prisma.StringNullableFilter<"PUBLICACIONES"> | string | null;
    tipo?: Prisma.StringFilter<"PUBLICACIONES"> | string;
    creado_en?: Prisma.DateTimeFilter<"PUBLICACIONES"> | Date | string;
    eliminada_en?: Prisma.DateTimeNullableFilter<"PUBLICACIONES"> | Date | string | null;
    eliminada_por?: Prisma.UuidNullableFilter<"PUBLICACIONES"> | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSListRelationFilter;
    MULTIMEDIA?: Prisma.MULTIMEDIAListRelationFilter;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESListRelationFilter;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: Prisma.XOR<Prisma.USUARIOSNullableScalarRelationFilter, Prisma.USUARIOSWhereInput> | null;
    PUBLICACIONES?: Prisma.XOR<Prisma.PUBLICACIONESNullableScalarRelationFilter, Prisma.PUBLICACIONESWhereInput> | null;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESListRelationFilter;
    REACCIONES?: Prisma.REACCIONESListRelationFilter;
    REPORTES?: Prisma.REPORTESListRelationFilter;
}, "id">;
export type PUBLICACIONESOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    autor_id?: Prisma.SortOrder;
    publicacion_origen_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    contenido?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    eliminada_en?: Prisma.SortOrderInput | Prisma.SortOrder;
    eliminada_por?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PUBLICACIONESCountOrderByAggregateInput;
    _max?: Prisma.PUBLICACIONESMaxOrderByAggregateInput;
    _min?: Prisma.PUBLICACIONESMinOrderByAggregateInput;
};
export type PUBLICACIONESScalarWhereWithAggregatesInput = {
    AND?: Prisma.PUBLICACIONESScalarWhereWithAggregatesInput | Prisma.PUBLICACIONESScalarWhereWithAggregatesInput[];
    OR?: Prisma.PUBLICACIONESScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PUBLICACIONESScalarWhereWithAggregatesInput | Prisma.PUBLICACIONESScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PUBLICACIONES"> | string;
    autor_id?: Prisma.UuidWithAggregatesFilter<"PUBLICACIONES"> | string;
    publicacion_origen_id?: Prisma.UuidNullableWithAggregatesFilter<"PUBLICACIONES"> | string | null;
    contenido?: Prisma.StringNullableWithAggregatesFilter<"PUBLICACIONES"> | string | null;
    tipo?: Prisma.StringWithAggregatesFilter<"PUBLICACIONES"> | string;
    creado_en?: Prisma.DateTimeWithAggregatesFilter<"PUBLICACIONES"> | Date | string;
    eliminada_en?: Prisma.DateTimeNullableWithAggregatesFilter<"PUBLICACIONES"> | Date | string | null;
    eliminada_por?: Prisma.UuidNullableWithAggregatesFilter<"PUBLICACIONES"> | string | null;
};
export type PUBLICACIONESCreateInput = {
    id?: string;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSCreateNestedManyWithoutPUBLICACIONESInput;
    MULTIMEDIA?: Prisma.MULTIMEDIACreateNestedManyWithoutPUBLICACIONESInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESCreateNestedManyWithoutPUBLICACIONESInput;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutPUBLICACIONES_PUBLICACIONES_autor_idToUSUARIOSInput;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutPUBLICACIONES_PUBLICACIONES_eliminada_porToUSUARIOSInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedOneWithoutOther_PUBLICACIONESInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedManyWithoutPUBLICACIONESInput;
    REACCIONES?: Prisma.REACCIONESCreateNestedManyWithoutPUBLICACIONESInput;
    REPORTES?: Prisma.REPORTESCreateNestedManyWithoutPUBLICACIONESInput;
};
export type PUBLICACIONESUncheckedCreateInput = {
    id?: string;
    autor_id: string;
    publicacion_origen_id?: string | null;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
    eliminada_por?: string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    REACCIONES?: Prisma.REACCIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    REPORTES?: Prisma.REPORTESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
};
export type PUBLICACIONESUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUpdateManyWithoutPUBLICACIONESNestedInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUpdateManyWithoutPUBLICACIONESNestedInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutPUBLICACIONES_PUBLICACIONES_autor_idToUSUARIOSNestedInput;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutPUBLICACIONES_PUBLICACIONES_eliminada_porToUSUARIOSNestedInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneWithoutOther_PUBLICACIONESNestedInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    REACCIONES?: Prisma.REACCIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    REPORTES?: Prisma.REPORTESUpdateManyWithoutPUBLICACIONESNestedInput;
};
export type PUBLICACIONESUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    autor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_origen_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    eliminada_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    REACCIONES?: Prisma.REACCIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    REPORTES?: Prisma.REPORTESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
};
export type PUBLICACIONESCreateManyInput = {
    id?: string;
    autor_id: string;
    publicacion_origen_id?: string | null;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
    eliminada_por?: string | null;
};
export type PUBLICACIONESUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PUBLICACIONESUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    autor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_origen_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    eliminada_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PUBLICACIONESScalarRelationFilter = {
    is?: Prisma.PUBLICACIONESWhereInput;
    isNot?: Prisma.PUBLICACIONESWhereInput;
};
export type PUBLICACIONESNullableScalarRelationFilter = {
    is?: Prisma.PUBLICACIONESWhereInput | null;
    isNot?: Prisma.PUBLICACIONESWhereInput | null;
};
export type PUBLICACIONESListRelationFilter = {
    every?: Prisma.PUBLICACIONESWhereInput;
    some?: Prisma.PUBLICACIONESWhereInput;
    none?: Prisma.PUBLICACIONESWhereInput;
};
export type PUBLICACIONESOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PUBLICACIONESCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    autor_id?: Prisma.SortOrder;
    publicacion_origen_id?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    eliminada_en?: Prisma.SortOrder;
    eliminada_por?: Prisma.SortOrder;
};
export type PUBLICACIONESMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    autor_id?: Prisma.SortOrder;
    publicacion_origen_id?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    eliminada_en?: Prisma.SortOrder;
    eliminada_por?: Prisma.SortOrder;
};
export type PUBLICACIONESMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    autor_id?: Prisma.SortOrder;
    publicacion_origen_id?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    eliminada_en?: Prisma.SortOrder;
    eliminada_por?: Prisma.SortOrder;
};
export type PUBLICACIONESCreateNestedOneWithoutCOMENTARIOSInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutCOMENTARIOSInput, Prisma.PUBLICACIONESUncheckedCreateWithoutCOMENTARIOSInput>;
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutCOMENTARIOSInput;
    connect?: Prisma.PUBLICACIONESWhereUniqueInput;
};
export type PUBLICACIONESUpdateOneRequiredWithoutCOMENTARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutCOMENTARIOSInput, Prisma.PUBLICACIONESUncheckedCreateWithoutCOMENTARIOSInput>;
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutCOMENTARIOSInput;
    upsert?: Prisma.PUBLICACIONESUpsertWithoutCOMENTARIOSInput;
    connect?: Prisma.PUBLICACIONESWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PUBLICACIONESUpdateToOneWithWhereWithoutCOMENTARIOSInput, Prisma.PUBLICACIONESUpdateWithoutCOMENTARIOSInput>, Prisma.PUBLICACIONESUncheckedUpdateWithoutCOMENTARIOSInput>;
};
export type PUBLICACIONESCreateNestedOneWithoutMULTIMEDIAInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutMULTIMEDIAInput, Prisma.PUBLICACIONESUncheckedCreateWithoutMULTIMEDIAInput>;
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutMULTIMEDIAInput;
    connect?: Prisma.PUBLICACIONESWhereUniqueInput;
};
export type PUBLICACIONESUpdateOneWithoutMULTIMEDIANestedInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutMULTIMEDIAInput, Prisma.PUBLICACIONESUncheckedCreateWithoutMULTIMEDIAInput>;
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutMULTIMEDIAInput;
    upsert?: Prisma.PUBLICACIONESUpsertWithoutMULTIMEDIAInput;
    disconnect?: Prisma.PUBLICACIONESWhereInput | boolean;
    delete?: Prisma.PUBLICACIONESWhereInput | boolean;
    connect?: Prisma.PUBLICACIONESWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PUBLICACIONESUpdateToOneWithWhereWithoutMULTIMEDIAInput, Prisma.PUBLICACIONESUpdateWithoutMULTIMEDIAInput>, Prisma.PUBLICACIONESUncheckedUpdateWithoutMULTIMEDIAInput>;
};
export type PUBLICACIONESCreateNestedOneWithoutNOTIFICACIONESInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutNOTIFICACIONESInput, Prisma.PUBLICACIONESUncheckedCreateWithoutNOTIFICACIONESInput>;
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutNOTIFICACIONESInput;
    connect?: Prisma.PUBLICACIONESWhereUniqueInput;
};
export type PUBLICACIONESUpdateOneWithoutNOTIFICACIONESNestedInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutNOTIFICACIONESInput, Prisma.PUBLICACIONESUncheckedCreateWithoutNOTIFICACIONESInput>;
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutNOTIFICACIONESInput;
    upsert?: Prisma.PUBLICACIONESUpsertWithoutNOTIFICACIONESInput;
    disconnect?: Prisma.PUBLICACIONESWhereInput | boolean;
    delete?: Prisma.PUBLICACIONESWhereInput | boolean;
    connect?: Prisma.PUBLICACIONESWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PUBLICACIONESUpdateToOneWithWhereWithoutNOTIFICACIONESInput, Prisma.PUBLICACIONESUpdateWithoutNOTIFICACIONESInput>, Prisma.PUBLICACIONESUncheckedUpdateWithoutNOTIFICACIONESInput>;
};
export type PUBLICACIONESCreateNestedOneWithoutOther_PUBLICACIONESInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutOther_PUBLICACIONESInput, Prisma.PUBLICACIONESUncheckedCreateWithoutOther_PUBLICACIONESInput>;
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutOther_PUBLICACIONESInput;
    connect?: Prisma.PUBLICACIONESWhereUniqueInput;
};
export type PUBLICACIONESCreateNestedManyWithoutPUBLICACIONESInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutPUBLICACIONESInput, Prisma.PUBLICACIONESUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.PUBLICACIONESCreateWithoutPUBLICACIONESInput[] | Prisma.PUBLICACIONESUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutPUBLICACIONESInput | Prisma.PUBLICACIONESCreateOrConnectWithoutPUBLICACIONESInput[];
    createMany?: Prisma.PUBLICACIONESCreateManyPUBLICACIONESInputEnvelope;
    connect?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
};
export type PUBLICACIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutPUBLICACIONESInput, Prisma.PUBLICACIONESUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.PUBLICACIONESCreateWithoutPUBLICACIONESInput[] | Prisma.PUBLICACIONESUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutPUBLICACIONESInput | Prisma.PUBLICACIONESCreateOrConnectWithoutPUBLICACIONESInput[];
    createMany?: Prisma.PUBLICACIONESCreateManyPUBLICACIONESInputEnvelope;
    connect?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
};
export type PUBLICACIONESUpdateOneWithoutOther_PUBLICACIONESNestedInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutOther_PUBLICACIONESInput, Prisma.PUBLICACIONESUncheckedCreateWithoutOther_PUBLICACIONESInput>;
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutOther_PUBLICACIONESInput;
    upsert?: Prisma.PUBLICACIONESUpsertWithoutOther_PUBLICACIONESInput;
    disconnect?: Prisma.PUBLICACIONESWhereInput | boolean;
    delete?: Prisma.PUBLICACIONESWhereInput | boolean;
    connect?: Prisma.PUBLICACIONESWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PUBLICACIONESUpdateToOneWithWhereWithoutOther_PUBLICACIONESInput, Prisma.PUBLICACIONESUpdateWithoutOther_PUBLICACIONESInput>, Prisma.PUBLICACIONESUncheckedUpdateWithoutOther_PUBLICACIONESInput>;
};
export type PUBLICACIONESUpdateManyWithoutPUBLICACIONESNestedInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutPUBLICACIONESInput, Prisma.PUBLICACIONESUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.PUBLICACIONESCreateWithoutPUBLICACIONESInput[] | Prisma.PUBLICACIONESUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutPUBLICACIONESInput | Prisma.PUBLICACIONESCreateOrConnectWithoutPUBLICACIONESInput[];
    upsert?: Prisma.PUBLICACIONESUpsertWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.PUBLICACIONESUpsertWithWhereUniqueWithoutPUBLICACIONESInput[];
    createMany?: Prisma.PUBLICACIONESCreateManyPUBLICACIONESInputEnvelope;
    set?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    disconnect?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    delete?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    connect?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    update?: Prisma.PUBLICACIONESUpdateWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.PUBLICACIONESUpdateWithWhereUniqueWithoutPUBLICACIONESInput[];
    updateMany?: Prisma.PUBLICACIONESUpdateManyWithWhereWithoutPUBLICACIONESInput | Prisma.PUBLICACIONESUpdateManyWithWhereWithoutPUBLICACIONESInput[];
    deleteMany?: Prisma.PUBLICACIONESScalarWhereInput | Prisma.PUBLICACIONESScalarWhereInput[];
};
export type PUBLICACIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutPUBLICACIONESInput, Prisma.PUBLICACIONESUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.PUBLICACIONESCreateWithoutPUBLICACIONESInput[] | Prisma.PUBLICACIONESUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutPUBLICACIONESInput | Prisma.PUBLICACIONESCreateOrConnectWithoutPUBLICACIONESInput[];
    upsert?: Prisma.PUBLICACIONESUpsertWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.PUBLICACIONESUpsertWithWhereUniqueWithoutPUBLICACIONESInput[];
    createMany?: Prisma.PUBLICACIONESCreateManyPUBLICACIONESInputEnvelope;
    set?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    disconnect?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    delete?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    connect?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    update?: Prisma.PUBLICACIONESUpdateWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.PUBLICACIONESUpdateWithWhereUniqueWithoutPUBLICACIONESInput[];
    updateMany?: Prisma.PUBLICACIONESUpdateManyWithWhereWithoutPUBLICACIONESInput | Prisma.PUBLICACIONESUpdateManyWithWhereWithoutPUBLICACIONESInput[];
    deleteMany?: Prisma.PUBLICACIONESScalarWhereInput | Prisma.PUBLICACIONESScalarWhereInput[];
};
export type PUBLICACIONESCreateNestedOneWithoutREACCIONESInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutREACCIONESInput, Prisma.PUBLICACIONESUncheckedCreateWithoutREACCIONESInput>;
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutREACCIONESInput;
    connect?: Prisma.PUBLICACIONESWhereUniqueInput;
};
export type PUBLICACIONESUpdateOneRequiredWithoutREACCIONESNestedInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutREACCIONESInput, Prisma.PUBLICACIONESUncheckedCreateWithoutREACCIONESInput>;
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutREACCIONESInput;
    upsert?: Prisma.PUBLICACIONESUpsertWithoutREACCIONESInput;
    connect?: Prisma.PUBLICACIONESWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PUBLICACIONESUpdateToOneWithWhereWithoutREACCIONESInput, Prisma.PUBLICACIONESUpdateWithoutREACCIONESInput>, Prisma.PUBLICACIONESUncheckedUpdateWithoutREACCIONESInput>;
};
export type PUBLICACIONESCreateNestedOneWithoutREPORTESInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutREPORTESInput, Prisma.PUBLICACIONESUncheckedCreateWithoutREPORTESInput>;
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutREPORTESInput;
    connect?: Prisma.PUBLICACIONESWhereUniqueInput;
};
export type PUBLICACIONESUpdateOneWithoutREPORTESNestedInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutREPORTESInput, Prisma.PUBLICACIONESUncheckedCreateWithoutREPORTESInput>;
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutREPORTESInput;
    upsert?: Prisma.PUBLICACIONESUpsertWithoutREPORTESInput;
    disconnect?: Prisma.PUBLICACIONESWhereInput | boolean;
    delete?: Prisma.PUBLICACIONESWhereInput | boolean;
    connect?: Prisma.PUBLICACIONESWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PUBLICACIONESUpdateToOneWithWhereWithoutREPORTESInput, Prisma.PUBLICACIONESUpdateWithoutREPORTESInput>, Prisma.PUBLICACIONESUncheckedUpdateWithoutREPORTESInput>;
};
export type PUBLICACIONESCreateNestedManyWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput, Prisma.PUBLICACIONESUncheckedCreateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput> | Prisma.PUBLICACIONESCreateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput[] | Prisma.PUBLICACIONESUncheckedCreateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput | Prisma.PUBLICACIONESCreateOrConnectWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput[];
    createMany?: Prisma.PUBLICACIONESCreateManyUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInputEnvelope;
    connect?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
};
export type PUBLICACIONESCreateNestedManyWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput, Prisma.PUBLICACIONESUncheckedCreateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput> | Prisma.PUBLICACIONESCreateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput[] | Prisma.PUBLICACIONESUncheckedCreateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput[];
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput | Prisma.PUBLICACIONESCreateOrConnectWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput[];
    createMany?: Prisma.PUBLICACIONESCreateManyUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInputEnvelope;
    connect?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
};
export type PUBLICACIONESUncheckedCreateNestedManyWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput, Prisma.PUBLICACIONESUncheckedCreateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput> | Prisma.PUBLICACIONESCreateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput[] | Prisma.PUBLICACIONESUncheckedCreateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput | Prisma.PUBLICACIONESCreateOrConnectWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput[];
    createMany?: Prisma.PUBLICACIONESCreateManyUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInputEnvelope;
    connect?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
};
export type PUBLICACIONESUncheckedCreateNestedManyWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput, Prisma.PUBLICACIONESUncheckedCreateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput> | Prisma.PUBLICACIONESCreateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput[] | Prisma.PUBLICACIONESUncheckedCreateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput[];
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput | Prisma.PUBLICACIONESCreateOrConnectWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput[];
    createMany?: Prisma.PUBLICACIONESCreateManyUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInputEnvelope;
    connect?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
};
export type PUBLICACIONESUpdateManyWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput, Prisma.PUBLICACIONESUncheckedCreateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput> | Prisma.PUBLICACIONESCreateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput[] | Prisma.PUBLICACIONESUncheckedCreateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput | Prisma.PUBLICACIONESCreateOrConnectWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput[];
    upsert?: Prisma.PUBLICACIONESUpsertWithWhereUniqueWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput | Prisma.PUBLICACIONESUpsertWithWhereUniqueWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput[];
    createMany?: Prisma.PUBLICACIONESCreateManyUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInputEnvelope;
    set?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    disconnect?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    delete?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    connect?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    update?: Prisma.PUBLICACIONESUpdateWithWhereUniqueWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput | Prisma.PUBLICACIONESUpdateWithWhereUniqueWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput[];
    updateMany?: Prisma.PUBLICACIONESUpdateManyWithWhereWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput | Prisma.PUBLICACIONESUpdateManyWithWhereWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput[];
    deleteMany?: Prisma.PUBLICACIONESScalarWhereInput | Prisma.PUBLICACIONESScalarWhereInput[];
};
export type PUBLICACIONESUpdateManyWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput, Prisma.PUBLICACIONESUncheckedCreateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput> | Prisma.PUBLICACIONESCreateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput[] | Prisma.PUBLICACIONESUncheckedCreateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput[];
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput | Prisma.PUBLICACIONESCreateOrConnectWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput[];
    upsert?: Prisma.PUBLICACIONESUpsertWithWhereUniqueWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput | Prisma.PUBLICACIONESUpsertWithWhereUniqueWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput[];
    createMany?: Prisma.PUBLICACIONESCreateManyUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInputEnvelope;
    set?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    disconnect?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    delete?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    connect?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    update?: Prisma.PUBLICACIONESUpdateWithWhereUniqueWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput | Prisma.PUBLICACIONESUpdateWithWhereUniqueWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput[];
    updateMany?: Prisma.PUBLICACIONESUpdateManyWithWhereWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput | Prisma.PUBLICACIONESUpdateManyWithWhereWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput[];
    deleteMany?: Prisma.PUBLICACIONESScalarWhereInput | Prisma.PUBLICACIONESScalarWhereInput[];
};
export type PUBLICACIONESUncheckedUpdateManyWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput, Prisma.PUBLICACIONESUncheckedCreateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput> | Prisma.PUBLICACIONESCreateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput[] | Prisma.PUBLICACIONESUncheckedCreateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput | Prisma.PUBLICACIONESCreateOrConnectWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput[];
    upsert?: Prisma.PUBLICACIONESUpsertWithWhereUniqueWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput | Prisma.PUBLICACIONESUpsertWithWhereUniqueWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput[];
    createMany?: Prisma.PUBLICACIONESCreateManyUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInputEnvelope;
    set?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    disconnect?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    delete?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    connect?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    update?: Prisma.PUBLICACIONESUpdateWithWhereUniqueWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput | Prisma.PUBLICACIONESUpdateWithWhereUniqueWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput[];
    updateMany?: Prisma.PUBLICACIONESUpdateManyWithWhereWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput | Prisma.PUBLICACIONESUpdateManyWithWhereWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput[];
    deleteMany?: Prisma.PUBLICACIONESScalarWhereInput | Prisma.PUBLICACIONESScalarWhereInput[];
};
export type PUBLICACIONESUncheckedUpdateManyWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput, Prisma.PUBLICACIONESUncheckedCreateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput> | Prisma.PUBLICACIONESCreateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput[] | Prisma.PUBLICACIONESUncheckedCreateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput[];
    connectOrCreate?: Prisma.PUBLICACIONESCreateOrConnectWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput | Prisma.PUBLICACIONESCreateOrConnectWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput[];
    upsert?: Prisma.PUBLICACIONESUpsertWithWhereUniqueWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput | Prisma.PUBLICACIONESUpsertWithWhereUniqueWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput[];
    createMany?: Prisma.PUBLICACIONESCreateManyUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInputEnvelope;
    set?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    disconnect?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    delete?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    connect?: Prisma.PUBLICACIONESWhereUniqueInput | Prisma.PUBLICACIONESWhereUniqueInput[];
    update?: Prisma.PUBLICACIONESUpdateWithWhereUniqueWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput | Prisma.PUBLICACIONESUpdateWithWhereUniqueWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput[];
    updateMany?: Prisma.PUBLICACIONESUpdateManyWithWhereWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput | Prisma.PUBLICACIONESUpdateManyWithWhereWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput[];
    deleteMany?: Prisma.PUBLICACIONESScalarWhereInput | Prisma.PUBLICACIONESScalarWhereInput[];
};
export type PUBLICACIONESCreateWithoutCOMENTARIOSInput = {
    id?: string;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
    MULTIMEDIA?: Prisma.MULTIMEDIACreateNestedManyWithoutPUBLICACIONESInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESCreateNestedManyWithoutPUBLICACIONESInput;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutPUBLICACIONES_PUBLICACIONES_autor_idToUSUARIOSInput;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutPUBLICACIONES_PUBLICACIONES_eliminada_porToUSUARIOSInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedOneWithoutOther_PUBLICACIONESInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedManyWithoutPUBLICACIONESInput;
    REACCIONES?: Prisma.REACCIONESCreateNestedManyWithoutPUBLICACIONESInput;
    REPORTES?: Prisma.REPORTESCreateNestedManyWithoutPUBLICACIONESInput;
};
export type PUBLICACIONESUncheckedCreateWithoutCOMENTARIOSInput = {
    id?: string;
    autor_id: string;
    publicacion_origen_id?: string | null;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
    eliminada_por?: string | null;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    REACCIONES?: Prisma.REACCIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    REPORTES?: Prisma.REPORTESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
};
export type PUBLICACIONESCreateOrConnectWithoutCOMENTARIOSInput = {
    where: Prisma.PUBLICACIONESWhereUniqueInput;
    create: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutCOMENTARIOSInput, Prisma.PUBLICACIONESUncheckedCreateWithoutCOMENTARIOSInput>;
};
export type PUBLICACIONESUpsertWithoutCOMENTARIOSInput = {
    update: Prisma.XOR<Prisma.PUBLICACIONESUpdateWithoutCOMENTARIOSInput, Prisma.PUBLICACIONESUncheckedUpdateWithoutCOMENTARIOSInput>;
    create: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutCOMENTARIOSInput, Prisma.PUBLICACIONESUncheckedCreateWithoutCOMENTARIOSInput>;
    where?: Prisma.PUBLICACIONESWhereInput;
};
export type PUBLICACIONESUpdateToOneWithWhereWithoutCOMENTARIOSInput = {
    where?: Prisma.PUBLICACIONESWhereInput;
    data: Prisma.XOR<Prisma.PUBLICACIONESUpdateWithoutCOMENTARIOSInput, Prisma.PUBLICACIONESUncheckedUpdateWithoutCOMENTARIOSInput>;
};
export type PUBLICACIONESUpdateWithoutCOMENTARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    MULTIMEDIA?: Prisma.MULTIMEDIAUpdateManyWithoutPUBLICACIONESNestedInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutPUBLICACIONES_PUBLICACIONES_autor_idToUSUARIOSNestedInput;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutPUBLICACIONES_PUBLICACIONES_eliminada_porToUSUARIOSNestedInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneWithoutOther_PUBLICACIONESNestedInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    REACCIONES?: Prisma.REACCIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    REPORTES?: Prisma.REPORTESUpdateManyWithoutPUBLICACIONESNestedInput;
};
export type PUBLICACIONESUncheckedUpdateWithoutCOMENTARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    autor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_origen_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    eliminada_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    REACCIONES?: Prisma.REACCIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    REPORTES?: Prisma.REPORTESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
};
export type PUBLICACIONESCreateWithoutMULTIMEDIAInput = {
    id?: string;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSCreateNestedManyWithoutPUBLICACIONESInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESCreateNestedManyWithoutPUBLICACIONESInput;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutPUBLICACIONES_PUBLICACIONES_autor_idToUSUARIOSInput;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutPUBLICACIONES_PUBLICACIONES_eliminada_porToUSUARIOSInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedOneWithoutOther_PUBLICACIONESInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedManyWithoutPUBLICACIONESInput;
    REACCIONES?: Prisma.REACCIONESCreateNestedManyWithoutPUBLICACIONESInput;
    REPORTES?: Prisma.REPORTESCreateNestedManyWithoutPUBLICACIONESInput;
};
export type PUBLICACIONESUncheckedCreateWithoutMULTIMEDIAInput = {
    id?: string;
    autor_id: string;
    publicacion_origen_id?: string | null;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
    eliminada_por?: string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    REACCIONES?: Prisma.REACCIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    REPORTES?: Prisma.REPORTESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
};
export type PUBLICACIONESCreateOrConnectWithoutMULTIMEDIAInput = {
    where: Prisma.PUBLICACIONESWhereUniqueInput;
    create: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutMULTIMEDIAInput, Prisma.PUBLICACIONESUncheckedCreateWithoutMULTIMEDIAInput>;
};
export type PUBLICACIONESUpsertWithoutMULTIMEDIAInput = {
    update: Prisma.XOR<Prisma.PUBLICACIONESUpdateWithoutMULTIMEDIAInput, Prisma.PUBLICACIONESUncheckedUpdateWithoutMULTIMEDIAInput>;
    create: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutMULTIMEDIAInput, Prisma.PUBLICACIONESUncheckedCreateWithoutMULTIMEDIAInput>;
    where?: Prisma.PUBLICACIONESWhereInput;
};
export type PUBLICACIONESUpdateToOneWithWhereWithoutMULTIMEDIAInput = {
    where?: Prisma.PUBLICACIONESWhereInput;
    data: Prisma.XOR<Prisma.PUBLICACIONESUpdateWithoutMULTIMEDIAInput, Prisma.PUBLICACIONESUncheckedUpdateWithoutMULTIMEDIAInput>;
};
export type PUBLICACIONESUpdateWithoutMULTIMEDIAInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUpdateManyWithoutPUBLICACIONESNestedInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutPUBLICACIONES_PUBLICACIONES_autor_idToUSUARIOSNestedInput;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutPUBLICACIONES_PUBLICACIONES_eliminada_porToUSUARIOSNestedInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneWithoutOther_PUBLICACIONESNestedInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    REACCIONES?: Prisma.REACCIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    REPORTES?: Prisma.REPORTESUpdateManyWithoutPUBLICACIONESNestedInput;
};
export type PUBLICACIONESUncheckedUpdateWithoutMULTIMEDIAInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    autor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_origen_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    eliminada_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    REACCIONES?: Prisma.REACCIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    REPORTES?: Prisma.REPORTESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
};
export type PUBLICACIONESCreateWithoutNOTIFICACIONESInput = {
    id?: string;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSCreateNestedManyWithoutPUBLICACIONESInput;
    MULTIMEDIA?: Prisma.MULTIMEDIACreateNestedManyWithoutPUBLICACIONESInput;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutPUBLICACIONES_PUBLICACIONES_autor_idToUSUARIOSInput;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutPUBLICACIONES_PUBLICACIONES_eliminada_porToUSUARIOSInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedOneWithoutOther_PUBLICACIONESInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedManyWithoutPUBLICACIONESInput;
    REACCIONES?: Prisma.REACCIONESCreateNestedManyWithoutPUBLICACIONESInput;
    REPORTES?: Prisma.REPORTESCreateNestedManyWithoutPUBLICACIONESInput;
};
export type PUBLICACIONESUncheckedCreateWithoutNOTIFICACIONESInput = {
    id?: string;
    autor_id: string;
    publicacion_origen_id?: string | null;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
    eliminada_por?: string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    REACCIONES?: Prisma.REACCIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    REPORTES?: Prisma.REPORTESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
};
export type PUBLICACIONESCreateOrConnectWithoutNOTIFICACIONESInput = {
    where: Prisma.PUBLICACIONESWhereUniqueInput;
    create: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutNOTIFICACIONESInput, Prisma.PUBLICACIONESUncheckedCreateWithoutNOTIFICACIONESInput>;
};
export type PUBLICACIONESUpsertWithoutNOTIFICACIONESInput = {
    update: Prisma.XOR<Prisma.PUBLICACIONESUpdateWithoutNOTIFICACIONESInput, Prisma.PUBLICACIONESUncheckedUpdateWithoutNOTIFICACIONESInput>;
    create: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutNOTIFICACIONESInput, Prisma.PUBLICACIONESUncheckedCreateWithoutNOTIFICACIONESInput>;
    where?: Prisma.PUBLICACIONESWhereInput;
};
export type PUBLICACIONESUpdateToOneWithWhereWithoutNOTIFICACIONESInput = {
    where?: Prisma.PUBLICACIONESWhereInput;
    data: Prisma.XOR<Prisma.PUBLICACIONESUpdateWithoutNOTIFICACIONESInput, Prisma.PUBLICACIONESUncheckedUpdateWithoutNOTIFICACIONESInput>;
};
export type PUBLICACIONESUpdateWithoutNOTIFICACIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUpdateManyWithoutPUBLICACIONESNestedInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUpdateManyWithoutPUBLICACIONESNestedInput;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutPUBLICACIONES_PUBLICACIONES_autor_idToUSUARIOSNestedInput;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutPUBLICACIONES_PUBLICACIONES_eliminada_porToUSUARIOSNestedInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneWithoutOther_PUBLICACIONESNestedInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    REACCIONES?: Prisma.REACCIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    REPORTES?: Prisma.REPORTESUpdateManyWithoutPUBLICACIONESNestedInput;
};
export type PUBLICACIONESUncheckedUpdateWithoutNOTIFICACIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    autor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_origen_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    eliminada_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    REACCIONES?: Prisma.REACCIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    REPORTES?: Prisma.REPORTESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
};
export type PUBLICACIONESCreateWithoutOther_PUBLICACIONESInput = {
    id?: string;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSCreateNestedManyWithoutPUBLICACIONESInput;
    MULTIMEDIA?: Prisma.MULTIMEDIACreateNestedManyWithoutPUBLICACIONESInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESCreateNestedManyWithoutPUBLICACIONESInput;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutPUBLICACIONES_PUBLICACIONES_autor_idToUSUARIOSInput;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutPUBLICACIONES_PUBLICACIONES_eliminada_porToUSUARIOSInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedOneWithoutOther_PUBLICACIONESInput;
    REACCIONES?: Prisma.REACCIONESCreateNestedManyWithoutPUBLICACIONESInput;
    REPORTES?: Prisma.REPORTESCreateNestedManyWithoutPUBLICACIONESInput;
};
export type PUBLICACIONESUncheckedCreateWithoutOther_PUBLICACIONESInput = {
    id?: string;
    autor_id: string;
    publicacion_origen_id?: string | null;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
    eliminada_por?: string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    REACCIONES?: Prisma.REACCIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    REPORTES?: Prisma.REPORTESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
};
export type PUBLICACIONESCreateOrConnectWithoutOther_PUBLICACIONESInput = {
    where: Prisma.PUBLICACIONESWhereUniqueInput;
    create: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutOther_PUBLICACIONESInput, Prisma.PUBLICACIONESUncheckedCreateWithoutOther_PUBLICACIONESInput>;
};
export type PUBLICACIONESCreateWithoutPUBLICACIONESInput = {
    id?: string;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSCreateNestedManyWithoutPUBLICACIONESInput;
    MULTIMEDIA?: Prisma.MULTIMEDIACreateNestedManyWithoutPUBLICACIONESInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESCreateNestedManyWithoutPUBLICACIONESInput;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutPUBLICACIONES_PUBLICACIONES_autor_idToUSUARIOSInput;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutPUBLICACIONES_PUBLICACIONES_eliminada_porToUSUARIOSInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedManyWithoutPUBLICACIONESInput;
    REACCIONES?: Prisma.REACCIONESCreateNestedManyWithoutPUBLICACIONESInput;
    REPORTES?: Prisma.REPORTESCreateNestedManyWithoutPUBLICACIONESInput;
};
export type PUBLICACIONESUncheckedCreateWithoutPUBLICACIONESInput = {
    id?: string;
    autor_id: string;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
    eliminada_por?: string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    REACCIONES?: Prisma.REACCIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    REPORTES?: Prisma.REPORTESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
};
export type PUBLICACIONESCreateOrConnectWithoutPUBLICACIONESInput = {
    where: Prisma.PUBLICACIONESWhereUniqueInput;
    create: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutPUBLICACIONESInput, Prisma.PUBLICACIONESUncheckedCreateWithoutPUBLICACIONESInput>;
};
export type PUBLICACIONESCreateManyPUBLICACIONESInputEnvelope = {
    data: Prisma.PUBLICACIONESCreateManyPUBLICACIONESInput | Prisma.PUBLICACIONESCreateManyPUBLICACIONESInput[];
    skipDuplicates?: boolean;
};
export type PUBLICACIONESUpsertWithoutOther_PUBLICACIONESInput = {
    update: Prisma.XOR<Prisma.PUBLICACIONESUpdateWithoutOther_PUBLICACIONESInput, Prisma.PUBLICACIONESUncheckedUpdateWithoutOther_PUBLICACIONESInput>;
    create: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutOther_PUBLICACIONESInput, Prisma.PUBLICACIONESUncheckedCreateWithoutOther_PUBLICACIONESInput>;
    where?: Prisma.PUBLICACIONESWhereInput;
};
export type PUBLICACIONESUpdateToOneWithWhereWithoutOther_PUBLICACIONESInput = {
    where?: Prisma.PUBLICACIONESWhereInput;
    data: Prisma.XOR<Prisma.PUBLICACIONESUpdateWithoutOther_PUBLICACIONESInput, Prisma.PUBLICACIONESUncheckedUpdateWithoutOther_PUBLICACIONESInput>;
};
export type PUBLICACIONESUpdateWithoutOther_PUBLICACIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUpdateManyWithoutPUBLICACIONESNestedInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUpdateManyWithoutPUBLICACIONESNestedInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutPUBLICACIONES_PUBLICACIONES_autor_idToUSUARIOSNestedInput;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutPUBLICACIONES_PUBLICACIONES_eliminada_porToUSUARIOSNestedInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneWithoutOther_PUBLICACIONESNestedInput;
    REACCIONES?: Prisma.REACCIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    REPORTES?: Prisma.REPORTESUpdateManyWithoutPUBLICACIONESNestedInput;
};
export type PUBLICACIONESUncheckedUpdateWithoutOther_PUBLICACIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    autor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_origen_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    eliminada_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    REACCIONES?: Prisma.REACCIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    REPORTES?: Prisma.REPORTESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
};
export type PUBLICACIONESUpsertWithWhereUniqueWithoutPUBLICACIONESInput = {
    where: Prisma.PUBLICACIONESWhereUniqueInput;
    update: Prisma.XOR<Prisma.PUBLICACIONESUpdateWithoutPUBLICACIONESInput, Prisma.PUBLICACIONESUncheckedUpdateWithoutPUBLICACIONESInput>;
    create: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutPUBLICACIONESInput, Prisma.PUBLICACIONESUncheckedCreateWithoutPUBLICACIONESInput>;
};
export type PUBLICACIONESUpdateWithWhereUniqueWithoutPUBLICACIONESInput = {
    where: Prisma.PUBLICACIONESWhereUniqueInput;
    data: Prisma.XOR<Prisma.PUBLICACIONESUpdateWithoutPUBLICACIONESInput, Prisma.PUBLICACIONESUncheckedUpdateWithoutPUBLICACIONESInput>;
};
export type PUBLICACIONESUpdateManyWithWhereWithoutPUBLICACIONESInput = {
    where: Prisma.PUBLICACIONESScalarWhereInput;
    data: Prisma.XOR<Prisma.PUBLICACIONESUpdateManyMutationInput, Prisma.PUBLICACIONESUncheckedUpdateManyWithoutPUBLICACIONESInput>;
};
export type PUBLICACIONESScalarWhereInput = {
    AND?: Prisma.PUBLICACIONESScalarWhereInput | Prisma.PUBLICACIONESScalarWhereInput[];
    OR?: Prisma.PUBLICACIONESScalarWhereInput[];
    NOT?: Prisma.PUBLICACIONESScalarWhereInput | Prisma.PUBLICACIONESScalarWhereInput[];
    id?: Prisma.UuidFilter<"PUBLICACIONES"> | string;
    autor_id?: Prisma.UuidFilter<"PUBLICACIONES"> | string;
    publicacion_origen_id?: Prisma.UuidNullableFilter<"PUBLICACIONES"> | string | null;
    contenido?: Prisma.StringNullableFilter<"PUBLICACIONES"> | string | null;
    tipo?: Prisma.StringFilter<"PUBLICACIONES"> | string;
    creado_en?: Prisma.DateTimeFilter<"PUBLICACIONES"> | Date | string;
    eliminada_en?: Prisma.DateTimeNullableFilter<"PUBLICACIONES"> | Date | string | null;
    eliminada_por?: Prisma.UuidNullableFilter<"PUBLICACIONES"> | string | null;
};
export type PUBLICACIONESCreateWithoutREACCIONESInput = {
    id?: string;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSCreateNestedManyWithoutPUBLICACIONESInput;
    MULTIMEDIA?: Prisma.MULTIMEDIACreateNestedManyWithoutPUBLICACIONESInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESCreateNestedManyWithoutPUBLICACIONESInput;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutPUBLICACIONES_PUBLICACIONES_autor_idToUSUARIOSInput;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutPUBLICACIONES_PUBLICACIONES_eliminada_porToUSUARIOSInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedOneWithoutOther_PUBLICACIONESInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedManyWithoutPUBLICACIONESInput;
    REPORTES?: Prisma.REPORTESCreateNestedManyWithoutPUBLICACIONESInput;
};
export type PUBLICACIONESUncheckedCreateWithoutREACCIONESInput = {
    id?: string;
    autor_id: string;
    publicacion_origen_id?: string | null;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
    eliminada_por?: string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    REPORTES?: Prisma.REPORTESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
};
export type PUBLICACIONESCreateOrConnectWithoutREACCIONESInput = {
    where: Prisma.PUBLICACIONESWhereUniqueInput;
    create: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutREACCIONESInput, Prisma.PUBLICACIONESUncheckedCreateWithoutREACCIONESInput>;
};
export type PUBLICACIONESUpsertWithoutREACCIONESInput = {
    update: Prisma.XOR<Prisma.PUBLICACIONESUpdateWithoutREACCIONESInput, Prisma.PUBLICACIONESUncheckedUpdateWithoutREACCIONESInput>;
    create: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutREACCIONESInput, Prisma.PUBLICACIONESUncheckedCreateWithoutREACCIONESInput>;
    where?: Prisma.PUBLICACIONESWhereInput;
};
export type PUBLICACIONESUpdateToOneWithWhereWithoutREACCIONESInput = {
    where?: Prisma.PUBLICACIONESWhereInput;
    data: Prisma.XOR<Prisma.PUBLICACIONESUpdateWithoutREACCIONESInput, Prisma.PUBLICACIONESUncheckedUpdateWithoutREACCIONESInput>;
};
export type PUBLICACIONESUpdateWithoutREACCIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUpdateManyWithoutPUBLICACIONESNestedInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUpdateManyWithoutPUBLICACIONESNestedInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutPUBLICACIONES_PUBLICACIONES_autor_idToUSUARIOSNestedInput;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutPUBLICACIONES_PUBLICACIONES_eliminada_porToUSUARIOSNestedInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneWithoutOther_PUBLICACIONESNestedInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    REPORTES?: Prisma.REPORTESUpdateManyWithoutPUBLICACIONESNestedInput;
};
export type PUBLICACIONESUncheckedUpdateWithoutREACCIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    autor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_origen_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    eliminada_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    REPORTES?: Prisma.REPORTESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
};
export type PUBLICACIONESCreateWithoutREPORTESInput = {
    id?: string;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSCreateNestedManyWithoutPUBLICACIONESInput;
    MULTIMEDIA?: Prisma.MULTIMEDIACreateNestedManyWithoutPUBLICACIONESInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESCreateNestedManyWithoutPUBLICACIONESInput;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutPUBLICACIONES_PUBLICACIONES_autor_idToUSUARIOSInput;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutPUBLICACIONES_PUBLICACIONES_eliminada_porToUSUARIOSInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedOneWithoutOther_PUBLICACIONESInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedManyWithoutPUBLICACIONESInput;
    REACCIONES?: Prisma.REACCIONESCreateNestedManyWithoutPUBLICACIONESInput;
};
export type PUBLICACIONESUncheckedCreateWithoutREPORTESInput = {
    id?: string;
    autor_id: string;
    publicacion_origen_id?: string | null;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
    eliminada_por?: string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    REACCIONES?: Prisma.REACCIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
};
export type PUBLICACIONESCreateOrConnectWithoutREPORTESInput = {
    where: Prisma.PUBLICACIONESWhereUniqueInput;
    create: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutREPORTESInput, Prisma.PUBLICACIONESUncheckedCreateWithoutREPORTESInput>;
};
export type PUBLICACIONESUpsertWithoutREPORTESInput = {
    update: Prisma.XOR<Prisma.PUBLICACIONESUpdateWithoutREPORTESInput, Prisma.PUBLICACIONESUncheckedUpdateWithoutREPORTESInput>;
    create: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutREPORTESInput, Prisma.PUBLICACIONESUncheckedCreateWithoutREPORTESInput>;
    where?: Prisma.PUBLICACIONESWhereInput;
};
export type PUBLICACIONESUpdateToOneWithWhereWithoutREPORTESInput = {
    where?: Prisma.PUBLICACIONESWhereInput;
    data: Prisma.XOR<Prisma.PUBLICACIONESUpdateWithoutREPORTESInput, Prisma.PUBLICACIONESUncheckedUpdateWithoutREPORTESInput>;
};
export type PUBLICACIONESUpdateWithoutREPORTESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUpdateManyWithoutPUBLICACIONESNestedInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUpdateManyWithoutPUBLICACIONESNestedInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutPUBLICACIONES_PUBLICACIONES_autor_idToUSUARIOSNestedInput;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutPUBLICACIONES_PUBLICACIONES_eliminada_porToUSUARIOSNestedInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneWithoutOther_PUBLICACIONESNestedInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    REACCIONES?: Prisma.REACCIONESUpdateManyWithoutPUBLICACIONESNestedInput;
};
export type PUBLICACIONESUncheckedUpdateWithoutREPORTESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    autor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_origen_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    eliminada_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    REACCIONES?: Prisma.REACCIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
};
export type PUBLICACIONESCreateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput = {
    id?: string;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSCreateNestedManyWithoutPUBLICACIONESInput;
    MULTIMEDIA?: Prisma.MULTIMEDIACreateNestedManyWithoutPUBLICACIONESInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESCreateNestedManyWithoutPUBLICACIONESInput;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutPUBLICACIONES_PUBLICACIONES_eliminada_porToUSUARIOSInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedOneWithoutOther_PUBLICACIONESInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedManyWithoutPUBLICACIONESInput;
    REACCIONES?: Prisma.REACCIONESCreateNestedManyWithoutPUBLICACIONESInput;
    REPORTES?: Prisma.REPORTESCreateNestedManyWithoutPUBLICACIONESInput;
};
export type PUBLICACIONESUncheckedCreateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput = {
    id?: string;
    publicacion_origen_id?: string | null;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
    eliminada_por?: string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    REACCIONES?: Prisma.REACCIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    REPORTES?: Prisma.REPORTESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
};
export type PUBLICACIONESCreateOrConnectWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput = {
    where: Prisma.PUBLICACIONESWhereUniqueInput;
    create: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput, Prisma.PUBLICACIONESUncheckedCreateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput>;
};
export type PUBLICACIONESCreateManyUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInputEnvelope = {
    data: Prisma.PUBLICACIONESCreateManyUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput | Prisma.PUBLICACIONESCreateManyUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput[];
    skipDuplicates?: boolean;
};
export type PUBLICACIONESCreateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput = {
    id?: string;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSCreateNestedManyWithoutPUBLICACIONESInput;
    MULTIMEDIA?: Prisma.MULTIMEDIACreateNestedManyWithoutPUBLICACIONESInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESCreateNestedManyWithoutPUBLICACIONESInput;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutPUBLICACIONES_PUBLICACIONES_autor_idToUSUARIOSInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedOneWithoutOther_PUBLICACIONESInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedManyWithoutPUBLICACIONESInput;
    REACCIONES?: Prisma.REACCIONESCreateNestedManyWithoutPUBLICACIONESInput;
    REPORTES?: Prisma.REPORTESCreateNestedManyWithoutPUBLICACIONESInput;
};
export type PUBLICACIONESUncheckedCreateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput = {
    id?: string;
    autor_id: string;
    publicacion_origen_id?: string | null;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    REACCIONES?: Prisma.REACCIONESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
    REPORTES?: Prisma.REPORTESUncheckedCreateNestedManyWithoutPUBLICACIONESInput;
};
export type PUBLICACIONESCreateOrConnectWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput = {
    where: Prisma.PUBLICACIONESWhereUniqueInput;
    create: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput, Prisma.PUBLICACIONESUncheckedCreateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput>;
};
export type PUBLICACIONESCreateManyUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInputEnvelope = {
    data: Prisma.PUBLICACIONESCreateManyUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput | Prisma.PUBLICACIONESCreateManyUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput[];
    skipDuplicates?: boolean;
};
export type PUBLICACIONESUpsertWithWhereUniqueWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput = {
    where: Prisma.PUBLICACIONESWhereUniqueInput;
    update: Prisma.XOR<Prisma.PUBLICACIONESUpdateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput, Prisma.PUBLICACIONESUncheckedUpdateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput>;
    create: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput, Prisma.PUBLICACIONESUncheckedCreateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput>;
};
export type PUBLICACIONESUpdateWithWhereUniqueWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput = {
    where: Prisma.PUBLICACIONESWhereUniqueInput;
    data: Prisma.XOR<Prisma.PUBLICACIONESUpdateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput, Prisma.PUBLICACIONESUncheckedUpdateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput>;
};
export type PUBLICACIONESUpdateManyWithWhereWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput = {
    where: Prisma.PUBLICACIONESScalarWhereInput;
    data: Prisma.XOR<Prisma.PUBLICACIONESUpdateManyMutationInput, Prisma.PUBLICACIONESUncheckedUpdateManyWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput>;
};
export type PUBLICACIONESUpsertWithWhereUniqueWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput = {
    where: Prisma.PUBLICACIONESWhereUniqueInput;
    update: Prisma.XOR<Prisma.PUBLICACIONESUpdateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput, Prisma.PUBLICACIONESUncheckedUpdateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput>;
    create: Prisma.XOR<Prisma.PUBLICACIONESCreateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput, Prisma.PUBLICACIONESUncheckedCreateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput>;
};
export type PUBLICACIONESUpdateWithWhereUniqueWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput = {
    where: Prisma.PUBLICACIONESWhereUniqueInput;
    data: Prisma.XOR<Prisma.PUBLICACIONESUpdateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput, Prisma.PUBLICACIONESUncheckedUpdateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput>;
};
export type PUBLICACIONESUpdateManyWithWhereWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput = {
    where: Prisma.PUBLICACIONESScalarWhereInput;
    data: Prisma.XOR<Prisma.PUBLICACIONESUpdateManyMutationInput, Prisma.PUBLICACIONESUncheckedUpdateManyWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput>;
};
export type PUBLICACIONESCreateManyPUBLICACIONESInput = {
    id?: string;
    autor_id: string;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
    eliminada_por?: string | null;
};
export type PUBLICACIONESUpdateWithoutPUBLICACIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUpdateManyWithoutPUBLICACIONESNestedInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUpdateManyWithoutPUBLICACIONESNestedInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutPUBLICACIONES_PUBLICACIONES_autor_idToUSUARIOSNestedInput;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutPUBLICACIONES_PUBLICACIONES_eliminada_porToUSUARIOSNestedInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    REACCIONES?: Prisma.REACCIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    REPORTES?: Prisma.REPORTESUpdateManyWithoutPUBLICACIONESNestedInput;
};
export type PUBLICACIONESUncheckedUpdateWithoutPUBLICACIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    autor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    eliminada_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    REACCIONES?: Prisma.REACCIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    REPORTES?: Prisma.REPORTESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
};
export type PUBLICACIONESUncheckedUpdateManyWithoutPUBLICACIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    autor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    eliminada_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PUBLICACIONESCreateManyUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput = {
    id?: string;
    publicacion_origen_id?: string | null;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
    eliminada_por?: string | null;
};
export type PUBLICACIONESCreateManyUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput = {
    id?: string;
    autor_id: string;
    publicacion_origen_id?: string | null;
    contenido?: string | null;
    tipo: string;
    creado_en?: Date | string;
    eliminada_en?: Date | string | null;
};
export type PUBLICACIONESUpdateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUpdateManyWithoutPUBLICACIONESNestedInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUpdateManyWithoutPUBLICACIONESNestedInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutPUBLICACIONES_PUBLICACIONES_eliminada_porToUSUARIOSNestedInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneWithoutOther_PUBLICACIONESNestedInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    REACCIONES?: Prisma.REACCIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    REPORTES?: Prisma.REPORTESUpdateManyWithoutPUBLICACIONESNestedInput;
};
export type PUBLICACIONESUncheckedUpdateWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_origen_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    eliminada_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    REACCIONES?: Prisma.REACCIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    REPORTES?: Prisma.REPORTESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
};
export type PUBLICACIONESUncheckedUpdateManyWithoutUSUARIOS_PUBLICACIONES_autor_idToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_origen_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    eliminada_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PUBLICACIONESUpdateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUpdateManyWithoutPUBLICACIONESNestedInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUpdateManyWithoutPUBLICACIONESNestedInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutPUBLICACIONES_PUBLICACIONES_autor_idToUSUARIOSNestedInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneWithoutOther_PUBLICACIONESNestedInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    REACCIONES?: Prisma.REACCIONESUpdateManyWithoutPUBLICACIONESNestedInput;
    REPORTES?: Prisma.REPORTESUpdateManyWithoutPUBLICACIONESNestedInput;
};
export type PUBLICACIONESUncheckedUpdateWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    autor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_origen_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    MULTIMEDIA?: Prisma.MULTIMEDIAUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    NOTIFICACIONES?: Prisma.NOTIFICACIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    other_PUBLICACIONES?: Prisma.PUBLICACIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    REACCIONES?: Prisma.REACCIONESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
    REPORTES?: Prisma.REPORTESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput;
};
export type PUBLICACIONESUncheckedUpdateManyWithoutUSUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    autor_id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_origen_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    eliminada_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type PUBLICACIONESCountOutputType = {
    COMENTARIOS: number;
    MULTIMEDIA: number;
    NOTIFICACIONES: number;
    other_PUBLICACIONES: number;
    REACCIONES: number;
    REPORTES: number;
};
export type PUBLICACIONESCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    COMENTARIOS?: boolean | PUBLICACIONESCountOutputTypeCountCOMENTARIOSArgs;
    MULTIMEDIA?: boolean | PUBLICACIONESCountOutputTypeCountMULTIMEDIAArgs;
    NOTIFICACIONES?: boolean | PUBLICACIONESCountOutputTypeCountNOTIFICACIONESArgs;
    other_PUBLICACIONES?: boolean | PUBLICACIONESCountOutputTypeCountOther_PUBLICACIONESArgs;
    REACCIONES?: boolean | PUBLICACIONESCountOutputTypeCountREACCIONESArgs;
    REPORTES?: boolean | PUBLICACIONESCountOutputTypeCountREPORTESArgs;
};
export type PUBLICACIONESCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PUBLICACIONESCountOutputTypeSelect<ExtArgs> | null;
};
export type PUBLICACIONESCountOutputTypeCountCOMENTARIOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.COMENTARIOSWhereInput;
};
export type PUBLICACIONESCountOutputTypeCountMULTIMEDIAArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MULTIMEDIAWhereInput;
};
export type PUBLICACIONESCountOutputTypeCountNOTIFICACIONESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NOTIFICACIONESWhereInput;
};
export type PUBLICACIONESCountOutputTypeCountOther_PUBLICACIONESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PUBLICACIONESWhereInput;
};
export type PUBLICACIONESCountOutputTypeCountREACCIONESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.REACCIONESWhereInput;
};
export type PUBLICACIONESCountOutputTypeCountREPORTESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.REPORTESWhereInput;
};
export type PUBLICACIONESSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    autor_id?: boolean;
    publicacion_origen_id?: boolean;
    contenido?: boolean;
    tipo?: boolean;
    creado_en?: boolean;
    eliminada_en?: boolean;
    eliminada_por?: boolean;
    COMENTARIOS?: boolean | Prisma.PUBLICACIONES$COMENTARIOSArgs<ExtArgs>;
    MULTIMEDIA?: boolean | Prisma.PUBLICACIONES$MULTIMEDIAArgs<ExtArgs>;
    NOTIFICACIONES?: boolean | Prisma.PUBLICACIONES$NOTIFICACIONESArgs<ExtArgs>;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: boolean | Prisma.PUBLICACIONES$USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.PUBLICACIONES$PUBLICACIONESArgs<ExtArgs>;
    other_PUBLICACIONES?: boolean | Prisma.PUBLICACIONES$other_PUBLICACIONESArgs<ExtArgs>;
    REACCIONES?: boolean | Prisma.PUBLICACIONES$REACCIONESArgs<ExtArgs>;
    REPORTES?: boolean | Prisma.PUBLICACIONES$REPORTESArgs<ExtArgs>;
    _count?: boolean | Prisma.PUBLICACIONESCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pUBLICACIONES"]>;
export type PUBLICACIONESSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    autor_id?: boolean;
    publicacion_origen_id?: boolean;
    contenido?: boolean;
    tipo?: boolean;
    creado_en?: boolean;
    eliminada_en?: boolean;
    eliminada_por?: boolean;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: boolean | Prisma.PUBLICACIONES$USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.PUBLICACIONES$PUBLICACIONESArgs<ExtArgs>;
}, ExtArgs["result"]["pUBLICACIONES"]>;
export type PUBLICACIONESSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    autor_id?: boolean;
    publicacion_origen_id?: boolean;
    contenido?: boolean;
    tipo?: boolean;
    creado_en?: boolean;
    eliminada_en?: boolean;
    eliminada_por?: boolean;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: boolean | Prisma.PUBLICACIONES$USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.PUBLICACIONES$PUBLICACIONESArgs<ExtArgs>;
}, ExtArgs["result"]["pUBLICACIONES"]>;
export type PUBLICACIONESSelectScalar = {
    id?: boolean;
    autor_id?: boolean;
    publicacion_origen_id?: boolean;
    contenido?: boolean;
    tipo?: boolean;
    creado_en?: boolean;
    eliminada_en?: boolean;
    eliminada_por?: boolean;
};
export type PUBLICACIONESOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "autor_id" | "publicacion_origen_id" | "contenido" | "tipo" | "creado_en" | "eliminada_en" | "eliminada_por", ExtArgs["result"]["pUBLICACIONES"]>;
export type PUBLICACIONESInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    COMENTARIOS?: boolean | Prisma.PUBLICACIONES$COMENTARIOSArgs<ExtArgs>;
    MULTIMEDIA?: boolean | Prisma.PUBLICACIONES$MULTIMEDIAArgs<ExtArgs>;
    NOTIFICACIONES?: boolean | Prisma.PUBLICACIONES$NOTIFICACIONESArgs<ExtArgs>;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: boolean | Prisma.PUBLICACIONES$USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.PUBLICACIONES$PUBLICACIONESArgs<ExtArgs>;
    other_PUBLICACIONES?: boolean | Prisma.PUBLICACIONES$other_PUBLICACIONESArgs<ExtArgs>;
    REACCIONES?: boolean | Prisma.PUBLICACIONES$REACCIONESArgs<ExtArgs>;
    REPORTES?: boolean | Prisma.PUBLICACIONES$REPORTESArgs<ExtArgs>;
    _count?: boolean | Prisma.PUBLICACIONESCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PUBLICACIONESIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: boolean | Prisma.PUBLICACIONES$USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.PUBLICACIONES$PUBLICACIONESArgs<ExtArgs>;
};
export type PUBLICACIONESIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS?: boolean | Prisma.PUBLICACIONES$USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.PUBLICACIONES$PUBLICACIONESArgs<ExtArgs>;
};
export type $PUBLICACIONESPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PUBLICACIONES";
    objects: {
        COMENTARIOS: Prisma.$COMENTARIOSPayload<ExtArgs>[];
        MULTIMEDIA: Prisma.$MULTIMEDIAPayload<ExtArgs>[];
        NOTIFICACIONES: Prisma.$NOTIFICACIONESPayload<ExtArgs>[];
        USUARIOS_PUBLICACIONES_autor_idToUSUARIOS: Prisma.$USUARIOSPayload<ExtArgs>;
        USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS: Prisma.$USUARIOSPayload<ExtArgs> | null;
        PUBLICACIONES: Prisma.$PUBLICACIONESPayload<ExtArgs> | null;
        other_PUBLICACIONES: Prisma.$PUBLICACIONESPayload<ExtArgs>[];
        REACCIONES: Prisma.$REACCIONESPayload<ExtArgs>[];
        REPORTES: Prisma.$REPORTESPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        autor_id: string;
        publicacion_origen_id: string | null;
        contenido: string | null;
        tipo: string;
        creado_en: Date;
        eliminada_en: Date | null;
        eliminada_por: string | null;
    }, ExtArgs["result"]["pUBLICACIONES"]>;
    composites: {};
};
export type PUBLICACIONESGetPayload<S extends boolean | null | undefined | PUBLICACIONESDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PUBLICACIONESPayload, S>;
export type PUBLICACIONESCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PUBLICACIONESFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PUBLICACIONESCountAggregateInputType | true;
};
export interface PUBLICACIONESDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PUBLICACIONES'];
        meta: {
            name: 'PUBLICACIONES';
        };
    };
    findUnique<T extends PUBLICACIONESFindUniqueArgs>(args: Prisma.SelectSubset<T, PUBLICACIONESFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PUBLICACIONESClient<runtime.Types.Result.GetResult<Prisma.$PUBLICACIONESPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PUBLICACIONESFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PUBLICACIONESFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PUBLICACIONESClient<runtime.Types.Result.GetResult<Prisma.$PUBLICACIONESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PUBLICACIONESFindFirstArgs>(args?: Prisma.SelectSubset<T, PUBLICACIONESFindFirstArgs<ExtArgs>>): Prisma.Prisma__PUBLICACIONESClient<runtime.Types.Result.GetResult<Prisma.$PUBLICACIONESPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PUBLICACIONESFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PUBLICACIONESFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PUBLICACIONESClient<runtime.Types.Result.GetResult<Prisma.$PUBLICACIONESPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PUBLICACIONESFindManyArgs>(args?: Prisma.SelectSubset<T, PUBLICACIONESFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PUBLICACIONESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PUBLICACIONESCreateArgs>(args: Prisma.SelectSubset<T, PUBLICACIONESCreateArgs<ExtArgs>>): Prisma.Prisma__PUBLICACIONESClient<runtime.Types.Result.GetResult<Prisma.$PUBLICACIONESPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PUBLICACIONESCreateManyArgs>(args?: Prisma.SelectSubset<T, PUBLICACIONESCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PUBLICACIONESCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PUBLICACIONESCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PUBLICACIONESPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PUBLICACIONESDeleteArgs>(args: Prisma.SelectSubset<T, PUBLICACIONESDeleteArgs<ExtArgs>>): Prisma.Prisma__PUBLICACIONESClient<runtime.Types.Result.GetResult<Prisma.$PUBLICACIONESPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PUBLICACIONESUpdateArgs>(args: Prisma.SelectSubset<T, PUBLICACIONESUpdateArgs<ExtArgs>>): Prisma.Prisma__PUBLICACIONESClient<runtime.Types.Result.GetResult<Prisma.$PUBLICACIONESPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PUBLICACIONESDeleteManyArgs>(args?: Prisma.SelectSubset<T, PUBLICACIONESDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PUBLICACIONESUpdateManyArgs>(args: Prisma.SelectSubset<T, PUBLICACIONESUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PUBLICACIONESUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PUBLICACIONESUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PUBLICACIONESPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PUBLICACIONESUpsertArgs>(args: Prisma.SelectSubset<T, PUBLICACIONESUpsertArgs<ExtArgs>>): Prisma.Prisma__PUBLICACIONESClient<runtime.Types.Result.GetResult<Prisma.$PUBLICACIONESPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PUBLICACIONESCountArgs>(args?: Prisma.Subset<T, PUBLICACIONESCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PUBLICACIONESCountAggregateOutputType> : number>;
    aggregate<T extends PUBLICACIONESAggregateArgs>(args: Prisma.Subset<T, PUBLICACIONESAggregateArgs>): Prisma.PrismaPromise<GetPUBLICACIONESAggregateType<T>>;
    groupBy<T extends PUBLICACIONESGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PUBLICACIONESGroupByArgs['orderBy'];
    } : {
        orderBy?: PUBLICACIONESGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PUBLICACIONESGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPUBLICACIONESGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PUBLICACIONESFieldRefs;
}
export interface Prisma__PUBLICACIONESClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    COMENTARIOS<T extends Prisma.PUBLICACIONES$COMENTARIOSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PUBLICACIONES$COMENTARIOSArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$COMENTARIOSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    MULTIMEDIA<T extends Prisma.PUBLICACIONES$MULTIMEDIAArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PUBLICACIONES$MULTIMEDIAArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MULTIMEDIAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    NOTIFICACIONES<T extends Prisma.PUBLICACIONES$NOTIFICACIONESArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PUBLICACIONES$NOTIFICACIONESArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NOTIFICACIONESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    USUARIOS_PUBLICACIONES_autor_idToUSUARIOS<T extends Prisma.USUARIOSDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.USUARIOSDefaultArgs<ExtArgs>>): Prisma.Prisma__USUARIOSClient<runtime.Types.Result.GetResult<Prisma.$USUARIOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOS<T extends Prisma.PUBLICACIONES$USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PUBLICACIONES$USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSArgs<ExtArgs>>): Prisma.Prisma__USUARIOSClient<runtime.Types.Result.GetResult<Prisma.$USUARIOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    PUBLICACIONES<T extends Prisma.PUBLICACIONES$PUBLICACIONESArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PUBLICACIONES$PUBLICACIONESArgs<ExtArgs>>): Prisma.Prisma__PUBLICACIONESClient<runtime.Types.Result.GetResult<Prisma.$PUBLICACIONESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    other_PUBLICACIONES<T extends Prisma.PUBLICACIONES$other_PUBLICACIONESArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PUBLICACIONES$other_PUBLICACIONESArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PUBLICACIONESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    REACCIONES<T extends Prisma.PUBLICACIONES$REACCIONESArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PUBLICACIONES$REACCIONESArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$REACCIONESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    REPORTES<T extends Prisma.PUBLICACIONES$REPORTESArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PUBLICACIONES$REPORTESArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$REPORTESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PUBLICACIONESFieldRefs {
    readonly id: Prisma.FieldRef<"PUBLICACIONES", 'String'>;
    readonly autor_id: Prisma.FieldRef<"PUBLICACIONES", 'String'>;
    readonly publicacion_origen_id: Prisma.FieldRef<"PUBLICACIONES", 'String'>;
    readonly contenido: Prisma.FieldRef<"PUBLICACIONES", 'String'>;
    readonly tipo: Prisma.FieldRef<"PUBLICACIONES", 'String'>;
    readonly creado_en: Prisma.FieldRef<"PUBLICACIONES", 'DateTime'>;
    readonly eliminada_en: Prisma.FieldRef<"PUBLICACIONES", 'DateTime'>;
    readonly eliminada_por: Prisma.FieldRef<"PUBLICACIONES", 'String'>;
}
export type PUBLICACIONESFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PUBLICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.PUBLICACIONESOmit<ExtArgs> | null;
    include?: Prisma.PUBLICACIONESInclude<ExtArgs> | null;
    where: Prisma.PUBLICACIONESWhereUniqueInput;
};
export type PUBLICACIONESFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PUBLICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.PUBLICACIONESOmit<ExtArgs> | null;
    include?: Prisma.PUBLICACIONESInclude<ExtArgs> | null;
    where: Prisma.PUBLICACIONESWhereUniqueInput;
};
export type PUBLICACIONESFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PUBLICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.PUBLICACIONESOmit<ExtArgs> | null;
    include?: Prisma.PUBLICACIONESInclude<ExtArgs> | null;
    where?: Prisma.PUBLICACIONESWhereInput;
    orderBy?: Prisma.PUBLICACIONESOrderByWithRelationInput | Prisma.PUBLICACIONESOrderByWithRelationInput[];
    cursor?: Prisma.PUBLICACIONESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PUBLICACIONESScalarFieldEnum | Prisma.PUBLICACIONESScalarFieldEnum[];
};
export type PUBLICACIONESFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PUBLICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.PUBLICACIONESOmit<ExtArgs> | null;
    include?: Prisma.PUBLICACIONESInclude<ExtArgs> | null;
    where?: Prisma.PUBLICACIONESWhereInput;
    orderBy?: Prisma.PUBLICACIONESOrderByWithRelationInput | Prisma.PUBLICACIONESOrderByWithRelationInput[];
    cursor?: Prisma.PUBLICACIONESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PUBLICACIONESScalarFieldEnum | Prisma.PUBLICACIONESScalarFieldEnum[];
};
export type PUBLICACIONESFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PUBLICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.PUBLICACIONESOmit<ExtArgs> | null;
    include?: Prisma.PUBLICACIONESInclude<ExtArgs> | null;
    where?: Prisma.PUBLICACIONESWhereInput;
    orderBy?: Prisma.PUBLICACIONESOrderByWithRelationInput | Prisma.PUBLICACIONESOrderByWithRelationInput[];
    cursor?: Prisma.PUBLICACIONESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PUBLICACIONESScalarFieldEnum | Prisma.PUBLICACIONESScalarFieldEnum[];
};
export type PUBLICACIONESCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PUBLICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.PUBLICACIONESOmit<ExtArgs> | null;
    include?: Prisma.PUBLICACIONESInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PUBLICACIONESCreateInput, Prisma.PUBLICACIONESUncheckedCreateInput>;
};
export type PUBLICACIONESCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PUBLICACIONESCreateManyInput | Prisma.PUBLICACIONESCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PUBLICACIONESCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PUBLICACIONESSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PUBLICACIONESOmit<ExtArgs> | null;
    data: Prisma.PUBLICACIONESCreateManyInput | Prisma.PUBLICACIONESCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PUBLICACIONESIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PUBLICACIONESUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PUBLICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.PUBLICACIONESOmit<ExtArgs> | null;
    include?: Prisma.PUBLICACIONESInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PUBLICACIONESUpdateInput, Prisma.PUBLICACIONESUncheckedUpdateInput>;
    where: Prisma.PUBLICACIONESWhereUniqueInput;
};
export type PUBLICACIONESUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PUBLICACIONESUpdateManyMutationInput, Prisma.PUBLICACIONESUncheckedUpdateManyInput>;
    where?: Prisma.PUBLICACIONESWhereInput;
    limit?: number;
};
export type PUBLICACIONESUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PUBLICACIONESSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PUBLICACIONESOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PUBLICACIONESUpdateManyMutationInput, Prisma.PUBLICACIONESUncheckedUpdateManyInput>;
    where?: Prisma.PUBLICACIONESWhereInput;
    limit?: number;
    include?: Prisma.PUBLICACIONESIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PUBLICACIONESUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PUBLICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.PUBLICACIONESOmit<ExtArgs> | null;
    include?: Prisma.PUBLICACIONESInclude<ExtArgs> | null;
    where: Prisma.PUBLICACIONESWhereUniqueInput;
    create: Prisma.XOR<Prisma.PUBLICACIONESCreateInput, Prisma.PUBLICACIONESUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PUBLICACIONESUpdateInput, Prisma.PUBLICACIONESUncheckedUpdateInput>;
};
export type PUBLICACIONESDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PUBLICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.PUBLICACIONESOmit<ExtArgs> | null;
    include?: Prisma.PUBLICACIONESInclude<ExtArgs> | null;
    where: Prisma.PUBLICACIONESWhereUniqueInput;
};
export type PUBLICACIONESDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PUBLICACIONESWhereInput;
    limit?: number;
};
export type PUBLICACIONES$COMENTARIOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PUBLICACIONES$MULTIMEDIAArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PUBLICACIONES$NOTIFICACIONESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PUBLICACIONES$USUARIOS_PUBLICACIONES_eliminada_porToUSUARIOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.USUARIOSSelect<ExtArgs> | null;
    omit?: Prisma.USUARIOSOmit<ExtArgs> | null;
    include?: Prisma.USUARIOSInclude<ExtArgs> | null;
    where?: Prisma.USUARIOSWhereInput;
};
export type PUBLICACIONES$PUBLICACIONESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PUBLICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.PUBLICACIONESOmit<ExtArgs> | null;
    include?: Prisma.PUBLICACIONESInclude<ExtArgs> | null;
    where?: Prisma.PUBLICACIONESWhereInput;
};
export type PUBLICACIONES$other_PUBLICACIONESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PUBLICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.PUBLICACIONESOmit<ExtArgs> | null;
    include?: Prisma.PUBLICACIONESInclude<ExtArgs> | null;
    where?: Prisma.PUBLICACIONESWhereInput;
    orderBy?: Prisma.PUBLICACIONESOrderByWithRelationInput | Prisma.PUBLICACIONESOrderByWithRelationInput[];
    cursor?: Prisma.PUBLICACIONESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PUBLICACIONESScalarFieldEnum | Prisma.PUBLICACIONESScalarFieldEnum[];
};
export type PUBLICACIONES$REACCIONESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PUBLICACIONES$REPORTESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PUBLICACIONESDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PUBLICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.PUBLICACIONESOmit<ExtArgs> | null;
    include?: Prisma.PUBLICACIONESInclude<ExtArgs> | null;
};
