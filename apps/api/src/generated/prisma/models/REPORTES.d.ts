import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type REPORTESModel = runtime.Types.Result.DefaultSelection<Prisma.$REPORTESPayload>;
export type AggregateREPORTES = {
    _count: REPORTESCountAggregateOutputType | null;
    _min: REPORTESMinAggregateOutputType | null;
    _max: REPORTESMaxAggregateOutputType | null;
};
export type REPORTESMinAggregateOutputType = {
    id: string | null;
    reportante_id: string | null;
    usuario_reportado_id: string | null;
    publicacion_id: string | null;
    comentario_id: string | null;
    grupo_id: string | null;
    motivo: string | null;
    descripcion: string | null;
    estado: string | null;
    revisado_por: string | null;
    creado_en: Date | null;
    resuelto_en: Date | null;
};
export type REPORTESMaxAggregateOutputType = {
    id: string | null;
    reportante_id: string | null;
    usuario_reportado_id: string | null;
    publicacion_id: string | null;
    comentario_id: string | null;
    grupo_id: string | null;
    motivo: string | null;
    descripcion: string | null;
    estado: string | null;
    revisado_por: string | null;
    creado_en: Date | null;
    resuelto_en: Date | null;
};
export type REPORTESCountAggregateOutputType = {
    id: number;
    reportante_id: number;
    usuario_reportado_id: number;
    publicacion_id: number;
    comentario_id: number;
    grupo_id: number;
    motivo: number;
    descripcion: number;
    estado: number;
    revisado_por: number;
    creado_en: number;
    resuelto_en: number;
    _all: number;
};
export type REPORTESMinAggregateInputType = {
    id?: true;
    reportante_id?: true;
    usuario_reportado_id?: true;
    publicacion_id?: true;
    comentario_id?: true;
    grupo_id?: true;
    motivo?: true;
    descripcion?: true;
    estado?: true;
    revisado_por?: true;
    creado_en?: true;
    resuelto_en?: true;
};
export type REPORTESMaxAggregateInputType = {
    id?: true;
    reportante_id?: true;
    usuario_reportado_id?: true;
    publicacion_id?: true;
    comentario_id?: true;
    grupo_id?: true;
    motivo?: true;
    descripcion?: true;
    estado?: true;
    revisado_por?: true;
    creado_en?: true;
    resuelto_en?: true;
};
export type REPORTESCountAggregateInputType = {
    id?: true;
    reportante_id?: true;
    usuario_reportado_id?: true;
    publicacion_id?: true;
    comentario_id?: true;
    grupo_id?: true;
    motivo?: true;
    descripcion?: true;
    estado?: true;
    revisado_por?: true;
    creado_en?: true;
    resuelto_en?: true;
    _all?: true;
};
export type REPORTESAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.REPORTESWhereInput;
    orderBy?: Prisma.REPORTESOrderByWithRelationInput | Prisma.REPORTESOrderByWithRelationInput[];
    cursor?: Prisma.REPORTESWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | REPORTESCountAggregateInputType;
    _min?: REPORTESMinAggregateInputType;
    _max?: REPORTESMaxAggregateInputType;
};
export type GetREPORTESAggregateType<T extends REPORTESAggregateArgs> = {
    [P in keyof T & keyof AggregateREPORTES]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateREPORTES[P]> : Prisma.GetScalarType<T[P], AggregateREPORTES[P]>;
};
export type REPORTESGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.REPORTESWhereInput;
    orderBy?: Prisma.REPORTESOrderByWithAggregationInput | Prisma.REPORTESOrderByWithAggregationInput[];
    by: Prisma.REPORTESScalarFieldEnum[] | Prisma.REPORTESScalarFieldEnum;
    having?: Prisma.REPORTESScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: REPORTESCountAggregateInputType | true;
    _min?: REPORTESMinAggregateInputType;
    _max?: REPORTESMaxAggregateInputType;
};
export type REPORTESGroupByOutputType = {
    id: string;
    reportante_id: string;
    usuario_reportado_id: string | null;
    publicacion_id: string | null;
    comentario_id: string | null;
    grupo_id: string | null;
    motivo: string;
    descripcion: string | null;
    estado: string;
    revisado_por: string | null;
    creado_en: Date;
    resuelto_en: Date | null;
    _count: REPORTESCountAggregateOutputType | null;
    _min: REPORTESMinAggregateOutputType | null;
    _max: REPORTESMaxAggregateOutputType | null;
};
export type GetREPORTESGroupByPayload<T extends REPORTESGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<REPORTESGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof REPORTESGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], REPORTESGroupByOutputType[P]> : Prisma.GetScalarType<T[P], REPORTESGroupByOutputType[P]>;
}>>;
export type REPORTESWhereInput = {
    AND?: Prisma.REPORTESWhereInput | Prisma.REPORTESWhereInput[];
    OR?: Prisma.REPORTESWhereInput[];
    NOT?: Prisma.REPORTESWhereInput | Prisma.REPORTESWhereInput[];
    id?: Prisma.UuidFilter<"REPORTES"> | string;
    reportante_id?: Prisma.UuidFilter<"REPORTES"> | string;
    usuario_reportado_id?: Prisma.UuidNullableFilter<"REPORTES"> | string | null;
    publicacion_id?: Prisma.UuidNullableFilter<"REPORTES"> | string | null;
    comentario_id?: Prisma.UuidNullableFilter<"REPORTES"> | string | null;
    grupo_id?: Prisma.UuidNullableFilter<"REPORTES"> | string | null;
    motivo?: Prisma.StringFilter<"REPORTES"> | string;
    descripcion?: Prisma.StringNullableFilter<"REPORTES"> | string | null;
    estado?: Prisma.StringFilter<"REPORTES"> | string;
    revisado_por?: Prisma.UuidNullableFilter<"REPORTES"> | string | null;
    creado_en?: Prisma.DateTimeFilter<"REPORTES"> | Date | string;
    resuelto_en?: Prisma.DateTimeNullableFilter<"REPORTES"> | Date | string | null;
    COMENTARIOS?: Prisma.XOR<Prisma.COMENTARIOSNullableScalarRelationFilter, Prisma.COMENTARIOSWhereInput> | null;
    GRUPOS?: Prisma.XOR<Prisma.GRUPOSNullableScalarRelationFilter, Prisma.GRUPOSWhereInput> | null;
    PUBLICACIONES?: Prisma.XOR<Prisma.PUBLICACIONESNullableScalarRelationFilter, Prisma.PUBLICACIONESWhereInput> | null;
    USUARIOS_REPORTES_reportante_idToUSUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
    USUARIOS_REPORTES_revisado_porToUSUARIOS?: Prisma.XOR<Prisma.USUARIOSNullableScalarRelationFilter, Prisma.USUARIOSWhereInput> | null;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS?: Prisma.XOR<Prisma.USUARIOSNullableScalarRelationFilter, Prisma.USUARIOSWhereInput> | null;
    SANCIONES?: Prisma.SANCIONESListRelationFilter;
};
export type REPORTESOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    reportante_id?: Prisma.SortOrder;
    usuario_reportado_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    comentario_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    grupo_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    revisado_por?: Prisma.SortOrderInput | Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    resuelto_en?: Prisma.SortOrderInput | Prisma.SortOrder;
    COMENTARIOS?: Prisma.COMENTARIOSOrderByWithRelationInput;
    GRUPOS?: Prisma.GRUPOSOrderByWithRelationInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESOrderByWithRelationInput;
    USUARIOS_REPORTES_reportante_idToUSUARIOS?: Prisma.USUARIOSOrderByWithRelationInput;
    USUARIOS_REPORTES_revisado_porToUSUARIOS?: Prisma.USUARIOSOrderByWithRelationInput;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS?: Prisma.USUARIOSOrderByWithRelationInput;
    SANCIONES?: Prisma.SANCIONESOrderByRelationAggregateInput;
};
export type REPORTESWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.REPORTESWhereInput | Prisma.REPORTESWhereInput[];
    OR?: Prisma.REPORTESWhereInput[];
    NOT?: Prisma.REPORTESWhereInput | Prisma.REPORTESWhereInput[];
    reportante_id?: Prisma.UuidFilter<"REPORTES"> | string;
    usuario_reportado_id?: Prisma.UuidNullableFilter<"REPORTES"> | string | null;
    publicacion_id?: Prisma.UuidNullableFilter<"REPORTES"> | string | null;
    comentario_id?: Prisma.UuidNullableFilter<"REPORTES"> | string | null;
    grupo_id?: Prisma.UuidNullableFilter<"REPORTES"> | string | null;
    motivo?: Prisma.StringFilter<"REPORTES"> | string;
    descripcion?: Prisma.StringNullableFilter<"REPORTES"> | string | null;
    estado?: Prisma.StringFilter<"REPORTES"> | string;
    revisado_por?: Prisma.UuidNullableFilter<"REPORTES"> | string | null;
    creado_en?: Prisma.DateTimeFilter<"REPORTES"> | Date | string;
    resuelto_en?: Prisma.DateTimeNullableFilter<"REPORTES"> | Date | string | null;
    COMENTARIOS?: Prisma.XOR<Prisma.COMENTARIOSNullableScalarRelationFilter, Prisma.COMENTARIOSWhereInput> | null;
    GRUPOS?: Prisma.XOR<Prisma.GRUPOSNullableScalarRelationFilter, Prisma.GRUPOSWhereInput> | null;
    PUBLICACIONES?: Prisma.XOR<Prisma.PUBLICACIONESNullableScalarRelationFilter, Prisma.PUBLICACIONESWhereInput> | null;
    USUARIOS_REPORTES_reportante_idToUSUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
    USUARIOS_REPORTES_revisado_porToUSUARIOS?: Prisma.XOR<Prisma.USUARIOSNullableScalarRelationFilter, Prisma.USUARIOSWhereInput> | null;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS?: Prisma.XOR<Prisma.USUARIOSNullableScalarRelationFilter, Prisma.USUARIOSWhereInput> | null;
    SANCIONES?: Prisma.SANCIONESListRelationFilter;
}, "id">;
export type REPORTESOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    reportante_id?: Prisma.SortOrder;
    usuario_reportado_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    comentario_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    grupo_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    revisado_por?: Prisma.SortOrderInput | Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    resuelto_en?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.REPORTESCountOrderByAggregateInput;
    _max?: Prisma.REPORTESMaxOrderByAggregateInput;
    _min?: Prisma.REPORTESMinOrderByAggregateInput;
};
export type REPORTESScalarWhereWithAggregatesInput = {
    AND?: Prisma.REPORTESScalarWhereWithAggregatesInput | Prisma.REPORTESScalarWhereWithAggregatesInput[];
    OR?: Prisma.REPORTESScalarWhereWithAggregatesInput[];
    NOT?: Prisma.REPORTESScalarWhereWithAggregatesInput | Prisma.REPORTESScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"REPORTES"> | string;
    reportante_id?: Prisma.UuidWithAggregatesFilter<"REPORTES"> | string;
    usuario_reportado_id?: Prisma.UuidNullableWithAggregatesFilter<"REPORTES"> | string | null;
    publicacion_id?: Prisma.UuidNullableWithAggregatesFilter<"REPORTES"> | string | null;
    comentario_id?: Prisma.UuidNullableWithAggregatesFilter<"REPORTES"> | string | null;
    grupo_id?: Prisma.UuidNullableWithAggregatesFilter<"REPORTES"> | string | null;
    motivo?: Prisma.StringWithAggregatesFilter<"REPORTES"> | string;
    descripcion?: Prisma.StringNullableWithAggregatesFilter<"REPORTES"> | string | null;
    estado?: Prisma.StringWithAggregatesFilter<"REPORTES"> | string;
    revisado_por?: Prisma.UuidNullableWithAggregatesFilter<"REPORTES"> | string | null;
    creado_en?: Prisma.DateTimeWithAggregatesFilter<"REPORTES"> | Date | string;
    resuelto_en?: Prisma.DateTimeNullableWithAggregatesFilter<"REPORTES"> | Date | string | null;
};
export type REPORTESCreateInput = {
    id?: string;
    motivo: string;
    descripcion?: string | null;
    estado: string;
    creado_en?: Date | string;
    resuelto_en?: Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSCreateNestedOneWithoutREPORTESInput;
    GRUPOS?: Prisma.GRUPOSCreateNestedOneWithoutREPORTESInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedOneWithoutREPORTESInput;
    USUARIOS_REPORTES_reportante_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutREPORTES_REPORTES_reportante_idToUSUARIOSInput;
    USUARIOS_REPORTES_revisado_porToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutREPORTES_REPORTES_revisado_porToUSUARIOSInput;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutREPORTES_REPORTES_usuario_reportado_idToUSUARIOSInput;
    SANCIONES?: Prisma.SANCIONESCreateNestedManyWithoutREPORTESInput;
};
export type REPORTESUncheckedCreateInput = {
    id?: string;
    reportante_id: string;
    usuario_reportado_id?: string | null;
    publicacion_id?: string | null;
    comentario_id?: string | null;
    grupo_id?: string | null;
    motivo: string;
    descripcion?: string | null;
    estado: string;
    revisado_por?: string | null;
    creado_en?: Date | string;
    resuelto_en?: Date | string | null;
    SANCIONES?: Prisma.SANCIONESUncheckedCreateNestedManyWithoutREPORTESInput;
};
export type REPORTESUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUpdateOneWithoutREPORTESNestedInput;
    GRUPOS?: Prisma.GRUPOSUpdateOneWithoutREPORTESNestedInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneWithoutREPORTESNestedInput;
    USUARIOS_REPORTES_reportante_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutREPORTES_REPORTES_reportante_idToUSUARIOSNestedInput;
    USUARIOS_REPORTES_revisado_porToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutREPORTES_REPORTES_revisado_porToUSUARIOSNestedInput;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutREPORTES_REPORTES_usuario_reportado_idToUSUARIOSNestedInput;
    SANCIONES?: Prisma.SANCIONESUpdateManyWithoutREPORTESNestedInput;
};
export type REPORTESUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportante_id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_reportado_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comentario_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupo_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    revisado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    SANCIONES?: Prisma.SANCIONESUncheckedUpdateManyWithoutREPORTESNestedInput;
};
export type REPORTESCreateManyInput = {
    id?: string;
    reportante_id: string;
    usuario_reportado_id?: string | null;
    publicacion_id?: string | null;
    comentario_id?: string | null;
    grupo_id?: string | null;
    motivo: string;
    descripcion?: string | null;
    estado: string;
    revisado_por?: string | null;
    creado_en?: Date | string;
    resuelto_en?: Date | string | null;
};
export type REPORTESUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type REPORTESUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportante_id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_reportado_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comentario_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupo_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    revisado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type REPORTESListRelationFilter = {
    every?: Prisma.REPORTESWhereInput;
    some?: Prisma.REPORTESWhereInput;
    none?: Prisma.REPORTESWhereInput;
};
export type REPORTESOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type REPORTESCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reportante_id?: Prisma.SortOrder;
    usuario_reportado_id?: Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrder;
    comentario_id?: Prisma.SortOrder;
    grupo_id?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    revisado_por?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    resuelto_en?: Prisma.SortOrder;
};
export type REPORTESMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reportante_id?: Prisma.SortOrder;
    usuario_reportado_id?: Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrder;
    comentario_id?: Prisma.SortOrder;
    grupo_id?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    revisado_por?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    resuelto_en?: Prisma.SortOrder;
};
export type REPORTESMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reportante_id?: Prisma.SortOrder;
    usuario_reportado_id?: Prisma.SortOrder;
    publicacion_id?: Prisma.SortOrder;
    comentario_id?: Prisma.SortOrder;
    grupo_id?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    revisado_por?: Prisma.SortOrder;
    creado_en?: Prisma.SortOrder;
    resuelto_en?: Prisma.SortOrder;
};
export type REPORTESNullableScalarRelationFilter = {
    is?: Prisma.REPORTESWhereInput | null;
    isNot?: Prisma.REPORTESWhereInput | null;
};
export type REPORTESCreateNestedManyWithoutCOMENTARIOSInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutCOMENTARIOSInput, Prisma.REPORTESUncheckedCreateWithoutCOMENTARIOSInput> | Prisma.REPORTESCreateWithoutCOMENTARIOSInput[] | Prisma.REPORTESUncheckedCreateWithoutCOMENTARIOSInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutCOMENTARIOSInput | Prisma.REPORTESCreateOrConnectWithoutCOMENTARIOSInput[];
    createMany?: Prisma.REPORTESCreateManyCOMENTARIOSInputEnvelope;
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
};
export type REPORTESUncheckedCreateNestedManyWithoutCOMENTARIOSInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutCOMENTARIOSInput, Prisma.REPORTESUncheckedCreateWithoutCOMENTARIOSInput> | Prisma.REPORTESCreateWithoutCOMENTARIOSInput[] | Prisma.REPORTESUncheckedCreateWithoutCOMENTARIOSInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutCOMENTARIOSInput | Prisma.REPORTESCreateOrConnectWithoutCOMENTARIOSInput[];
    createMany?: Prisma.REPORTESCreateManyCOMENTARIOSInputEnvelope;
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
};
export type REPORTESUpdateManyWithoutCOMENTARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutCOMENTARIOSInput, Prisma.REPORTESUncheckedCreateWithoutCOMENTARIOSInput> | Prisma.REPORTESCreateWithoutCOMENTARIOSInput[] | Prisma.REPORTESUncheckedCreateWithoutCOMENTARIOSInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutCOMENTARIOSInput | Prisma.REPORTESCreateOrConnectWithoutCOMENTARIOSInput[];
    upsert?: Prisma.REPORTESUpsertWithWhereUniqueWithoutCOMENTARIOSInput | Prisma.REPORTESUpsertWithWhereUniqueWithoutCOMENTARIOSInput[];
    createMany?: Prisma.REPORTESCreateManyCOMENTARIOSInputEnvelope;
    set?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    disconnect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    delete?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    update?: Prisma.REPORTESUpdateWithWhereUniqueWithoutCOMENTARIOSInput | Prisma.REPORTESUpdateWithWhereUniqueWithoutCOMENTARIOSInput[];
    updateMany?: Prisma.REPORTESUpdateManyWithWhereWithoutCOMENTARIOSInput | Prisma.REPORTESUpdateManyWithWhereWithoutCOMENTARIOSInput[];
    deleteMany?: Prisma.REPORTESScalarWhereInput | Prisma.REPORTESScalarWhereInput[];
};
export type REPORTESUncheckedUpdateManyWithoutCOMENTARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutCOMENTARIOSInput, Prisma.REPORTESUncheckedCreateWithoutCOMENTARIOSInput> | Prisma.REPORTESCreateWithoutCOMENTARIOSInput[] | Prisma.REPORTESUncheckedCreateWithoutCOMENTARIOSInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutCOMENTARIOSInput | Prisma.REPORTESCreateOrConnectWithoutCOMENTARIOSInput[];
    upsert?: Prisma.REPORTESUpsertWithWhereUniqueWithoutCOMENTARIOSInput | Prisma.REPORTESUpsertWithWhereUniqueWithoutCOMENTARIOSInput[];
    createMany?: Prisma.REPORTESCreateManyCOMENTARIOSInputEnvelope;
    set?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    disconnect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    delete?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    update?: Prisma.REPORTESUpdateWithWhereUniqueWithoutCOMENTARIOSInput | Prisma.REPORTESUpdateWithWhereUniqueWithoutCOMENTARIOSInput[];
    updateMany?: Prisma.REPORTESUpdateManyWithWhereWithoutCOMENTARIOSInput | Prisma.REPORTESUpdateManyWithWhereWithoutCOMENTARIOSInput[];
    deleteMany?: Prisma.REPORTESScalarWhereInput | Prisma.REPORTESScalarWhereInput[];
};
export type REPORTESCreateNestedManyWithoutGRUPOSInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutGRUPOSInput, Prisma.REPORTESUncheckedCreateWithoutGRUPOSInput> | Prisma.REPORTESCreateWithoutGRUPOSInput[] | Prisma.REPORTESUncheckedCreateWithoutGRUPOSInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutGRUPOSInput | Prisma.REPORTESCreateOrConnectWithoutGRUPOSInput[];
    createMany?: Prisma.REPORTESCreateManyGRUPOSInputEnvelope;
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
};
export type REPORTESUncheckedCreateNestedManyWithoutGRUPOSInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutGRUPOSInput, Prisma.REPORTESUncheckedCreateWithoutGRUPOSInput> | Prisma.REPORTESCreateWithoutGRUPOSInput[] | Prisma.REPORTESUncheckedCreateWithoutGRUPOSInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutGRUPOSInput | Prisma.REPORTESCreateOrConnectWithoutGRUPOSInput[];
    createMany?: Prisma.REPORTESCreateManyGRUPOSInputEnvelope;
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
};
export type REPORTESUpdateManyWithoutGRUPOSNestedInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutGRUPOSInput, Prisma.REPORTESUncheckedCreateWithoutGRUPOSInput> | Prisma.REPORTESCreateWithoutGRUPOSInput[] | Prisma.REPORTESUncheckedCreateWithoutGRUPOSInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutGRUPOSInput | Prisma.REPORTESCreateOrConnectWithoutGRUPOSInput[];
    upsert?: Prisma.REPORTESUpsertWithWhereUniqueWithoutGRUPOSInput | Prisma.REPORTESUpsertWithWhereUniqueWithoutGRUPOSInput[];
    createMany?: Prisma.REPORTESCreateManyGRUPOSInputEnvelope;
    set?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    disconnect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    delete?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    update?: Prisma.REPORTESUpdateWithWhereUniqueWithoutGRUPOSInput | Prisma.REPORTESUpdateWithWhereUniqueWithoutGRUPOSInput[];
    updateMany?: Prisma.REPORTESUpdateManyWithWhereWithoutGRUPOSInput | Prisma.REPORTESUpdateManyWithWhereWithoutGRUPOSInput[];
    deleteMany?: Prisma.REPORTESScalarWhereInput | Prisma.REPORTESScalarWhereInput[];
};
export type REPORTESUncheckedUpdateManyWithoutGRUPOSNestedInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutGRUPOSInput, Prisma.REPORTESUncheckedCreateWithoutGRUPOSInput> | Prisma.REPORTESCreateWithoutGRUPOSInput[] | Prisma.REPORTESUncheckedCreateWithoutGRUPOSInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutGRUPOSInput | Prisma.REPORTESCreateOrConnectWithoutGRUPOSInput[];
    upsert?: Prisma.REPORTESUpsertWithWhereUniqueWithoutGRUPOSInput | Prisma.REPORTESUpsertWithWhereUniqueWithoutGRUPOSInput[];
    createMany?: Prisma.REPORTESCreateManyGRUPOSInputEnvelope;
    set?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    disconnect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    delete?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    update?: Prisma.REPORTESUpdateWithWhereUniqueWithoutGRUPOSInput | Prisma.REPORTESUpdateWithWhereUniqueWithoutGRUPOSInput[];
    updateMany?: Prisma.REPORTESUpdateManyWithWhereWithoutGRUPOSInput | Prisma.REPORTESUpdateManyWithWhereWithoutGRUPOSInput[];
    deleteMany?: Prisma.REPORTESScalarWhereInput | Prisma.REPORTESScalarWhereInput[];
};
export type REPORTESCreateNestedManyWithoutPUBLICACIONESInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutPUBLICACIONESInput, Prisma.REPORTESUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.REPORTESCreateWithoutPUBLICACIONESInput[] | Prisma.REPORTESUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutPUBLICACIONESInput | Prisma.REPORTESCreateOrConnectWithoutPUBLICACIONESInput[];
    createMany?: Prisma.REPORTESCreateManyPUBLICACIONESInputEnvelope;
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
};
export type REPORTESUncheckedCreateNestedManyWithoutPUBLICACIONESInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutPUBLICACIONESInput, Prisma.REPORTESUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.REPORTESCreateWithoutPUBLICACIONESInput[] | Prisma.REPORTESUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutPUBLICACIONESInput | Prisma.REPORTESCreateOrConnectWithoutPUBLICACIONESInput[];
    createMany?: Prisma.REPORTESCreateManyPUBLICACIONESInputEnvelope;
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
};
export type REPORTESUpdateManyWithoutPUBLICACIONESNestedInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutPUBLICACIONESInput, Prisma.REPORTESUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.REPORTESCreateWithoutPUBLICACIONESInput[] | Prisma.REPORTESUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutPUBLICACIONESInput | Prisma.REPORTESCreateOrConnectWithoutPUBLICACIONESInput[];
    upsert?: Prisma.REPORTESUpsertWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.REPORTESUpsertWithWhereUniqueWithoutPUBLICACIONESInput[];
    createMany?: Prisma.REPORTESCreateManyPUBLICACIONESInputEnvelope;
    set?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    disconnect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    delete?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    update?: Prisma.REPORTESUpdateWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.REPORTESUpdateWithWhereUniqueWithoutPUBLICACIONESInput[];
    updateMany?: Prisma.REPORTESUpdateManyWithWhereWithoutPUBLICACIONESInput | Prisma.REPORTESUpdateManyWithWhereWithoutPUBLICACIONESInput[];
    deleteMany?: Prisma.REPORTESScalarWhereInput | Prisma.REPORTESScalarWhereInput[];
};
export type REPORTESUncheckedUpdateManyWithoutPUBLICACIONESNestedInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutPUBLICACIONESInput, Prisma.REPORTESUncheckedCreateWithoutPUBLICACIONESInput> | Prisma.REPORTESCreateWithoutPUBLICACIONESInput[] | Prisma.REPORTESUncheckedCreateWithoutPUBLICACIONESInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutPUBLICACIONESInput | Prisma.REPORTESCreateOrConnectWithoutPUBLICACIONESInput[];
    upsert?: Prisma.REPORTESUpsertWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.REPORTESUpsertWithWhereUniqueWithoutPUBLICACIONESInput[];
    createMany?: Prisma.REPORTESCreateManyPUBLICACIONESInputEnvelope;
    set?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    disconnect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    delete?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    update?: Prisma.REPORTESUpdateWithWhereUniqueWithoutPUBLICACIONESInput | Prisma.REPORTESUpdateWithWhereUniqueWithoutPUBLICACIONESInput[];
    updateMany?: Prisma.REPORTESUpdateManyWithWhereWithoutPUBLICACIONESInput | Prisma.REPORTESUpdateManyWithWhereWithoutPUBLICACIONESInput[];
    deleteMany?: Prisma.REPORTESScalarWhereInput | Prisma.REPORTESScalarWhereInput[];
};
export type REPORTESCreateNestedOneWithoutSANCIONESInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutSANCIONESInput, Prisma.REPORTESUncheckedCreateWithoutSANCIONESInput>;
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutSANCIONESInput;
    connect?: Prisma.REPORTESWhereUniqueInput;
};
export type REPORTESUpdateOneWithoutSANCIONESNestedInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutSANCIONESInput, Prisma.REPORTESUncheckedCreateWithoutSANCIONESInput>;
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutSANCIONESInput;
    upsert?: Prisma.REPORTESUpsertWithoutSANCIONESInput;
    disconnect?: Prisma.REPORTESWhereInput | boolean;
    delete?: Prisma.REPORTESWhereInput | boolean;
    connect?: Prisma.REPORTESWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.REPORTESUpdateToOneWithWhereWithoutSANCIONESInput, Prisma.REPORTESUpdateWithoutSANCIONESInput>, Prisma.REPORTESUncheckedUpdateWithoutSANCIONESInput>;
};
export type REPORTESCreateNestedManyWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput, Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput> | Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput[] | Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput | Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput[];
    createMany?: Prisma.REPORTESCreateManyUSUARIOS_REPORTES_reportante_idToUSUARIOSInputEnvelope;
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
};
export type REPORTESCreateNestedManyWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput, Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput> | Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput[] | Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput | Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput[];
    createMany?: Prisma.REPORTESCreateManyUSUARIOS_REPORTES_revisado_porToUSUARIOSInputEnvelope;
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
};
export type REPORTESCreateNestedManyWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput, Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput> | Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput[] | Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput | Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput[];
    createMany?: Prisma.REPORTESCreateManyUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInputEnvelope;
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
};
export type REPORTESUncheckedCreateNestedManyWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput, Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput> | Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput[] | Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput | Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput[];
    createMany?: Prisma.REPORTESCreateManyUSUARIOS_REPORTES_reportante_idToUSUARIOSInputEnvelope;
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
};
export type REPORTESUncheckedCreateNestedManyWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput, Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput> | Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput[] | Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput | Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput[];
    createMany?: Prisma.REPORTESCreateManyUSUARIOS_REPORTES_revisado_porToUSUARIOSInputEnvelope;
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
};
export type REPORTESUncheckedCreateNestedManyWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput, Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput> | Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput[] | Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput | Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput[];
    createMany?: Prisma.REPORTESCreateManyUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInputEnvelope;
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
};
export type REPORTESUpdateManyWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput, Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput> | Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput[] | Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput | Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput[];
    upsert?: Prisma.REPORTESUpsertWithWhereUniqueWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput | Prisma.REPORTESUpsertWithWhereUniqueWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput[];
    createMany?: Prisma.REPORTESCreateManyUSUARIOS_REPORTES_reportante_idToUSUARIOSInputEnvelope;
    set?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    disconnect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    delete?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    update?: Prisma.REPORTESUpdateWithWhereUniqueWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput | Prisma.REPORTESUpdateWithWhereUniqueWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput[];
    updateMany?: Prisma.REPORTESUpdateManyWithWhereWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput | Prisma.REPORTESUpdateManyWithWhereWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput[];
    deleteMany?: Prisma.REPORTESScalarWhereInput | Prisma.REPORTESScalarWhereInput[];
};
export type REPORTESUpdateManyWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput, Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput> | Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput[] | Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput | Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput[];
    upsert?: Prisma.REPORTESUpsertWithWhereUniqueWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput | Prisma.REPORTESUpsertWithWhereUniqueWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput[];
    createMany?: Prisma.REPORTESCreateManyUSUARIOS_REPORTES_revisado_porToUSUARIOSInputEnvelope;
    set?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    disconnect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    delete?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    update?: Prisma.REPORTESUpdateWithWhereUniqueWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput | Prisma.REPORTESUpdateWithWhereUniqueWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput[];
    updateMany?: Prisma.REPORTESUpdateManyWithWhereWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput | Prisma.REPORTESUpdateManyWithWhereWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput[];
    deleteMany?: Prisma.REPORTESScalarWhereInput | Prisma.REPORTESScalarWhereInput[];
};
export type REPORTESUpdateManyWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput, Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput> | Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput[] | Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput | Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput[];
    upsert?: Prisma.REPORTESUpsertWithWhereUniqueWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput | Prisma.REPORTESUpsertWithWhereUniqueWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput[];
    createMany?: Prisma.REPORTESCreateManyUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInputEnvelope;
    set?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    disconnect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    delete?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    update?: Prisma.REPORTESUpdateWithWhereUniqueWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput | Prisma.REPORTESUpdateWithWhereUniqueWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput[];
    updateMany?: Prisma.REPORTESUpdateManyWithWhereWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput | Prisma.REPORTESUpdateManyWithWhereWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput[];
    deleteMany?: Prisma.REPORTESScalarWhereInput | Prisma.REPORTESScalarWhereInput[];
};
export type REPORTESUncheckedUpdateManyWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput, Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput> | Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput[] | Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput | Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput[];
    upsert?: Prisma.REPORTESUpsertWithWhereUniqueWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput | Prisma.REPORTESUpsertWithWhereUniqueWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput[];
    createMany?: Prisma.REPORTESCreateManyUSUARIOS_REPORTES_reportante_idToUSUARIOSInputEnvelope;
    set?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    disconnect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    delete?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    update?: Prisma.REPORTESUpdateWithWhereUniqueWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput | Prisma.REPORTESUpdateWithWhereUniqueWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput[];
    updateMany?: Prisma.REPORTESUpdateManyWithWhereWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput | Prisma.REPORTESUpdateManyWithWhereWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput[];
    deleteMany?: Prisma.REPORTESScalarWhereInput | Prisma.REPORTESScalarWhereInput[];
};
export type REPORTESUncheckedUpdateManyWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput, Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput> | Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput[] | Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput | Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput[];
    upsert?: Prisma.REPORTESUpsertWithWhereUniqueWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput | Prisma.REPORTESUpsertWithWhereUniqueWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput[];
    createMany?: Prisma.REPORTESCreateManyUSUARIOS_REPORTES_revisado_porToUSUARIOSInputEnvelope;
    set?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    disconnect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    delete?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    update?: Prisma.REPORTESUpdateWithWhereUniqueWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput | Prisma.REPORTESUpdateWithWhereUniqueWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput[];
    updateMany?: Prisma.REPORTESUpdateManyWithWhereWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput | Prisma.REPORTESUpdateManyWithWhereWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput[];
    deleteMany?: Prisma.REPORTESScalarWhereInput | Prisma.REPORTESScalarWhereInput[];
};
export type REPORTESUncheckedUpdateManyWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput, Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput> | Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput[] | Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput[];
    connectOrCreate?: Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput | Prisma.REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput[];
    upsert?: Prisma.REPORTESUpsertWithWhereUniqueWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput | Prisma.REPORTESUpsertWithWhereUniqueWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput[];
    createMany?: Prisma.REPORTESCreateManyUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInputEnvelope;
    set?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    disconnect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    delete?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    connect?: Prisma.REPORTESWhereUniqueInput | Prisma.REPORTESWhereUniqueInput[];
    update?: Prisma.REPORTESUpdateWithWhereUniqueWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput | Prisma.REPORTESUpdateWithWhereUniqueWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput[];
    updateMany?: Prisma.REPORTESUpdateManyWithWhereWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput | Prisma.REPORTESUpdateManyWithWhereWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput[];
    deleteMany?: Prisma.REPORTESScalarWhereInput | Prisma.REPORTESScalarWhereInput[];
};
export type REPORTESCreateWithoutCOMENTARIOSInput = {
    id?: string;
    motivo: string;
    descripcion?: string | null;
    estado: string;
    creado_en?: Date | string;
    resuelto_en?: Date | string | null;
    GRUPOS?: Prisma.GRUPOSCreateNestedOneWithoutREPORTESInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedOneWithoutREPORTESInput;
    USUARIOS_REPORTES_reportante_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutREPORTES_REPORTES_reportante_idToUSUARIOSInput;
    USUARIOS_REPORTES_revisado_porToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutREPORTES_REPORTES_revisado_porToUSUARIOSInput;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutREPORTES_REPORTES_usuario_reportado_idToUSUARIOSInput;
    SANCIONES?: Prisma.SANCIONESCreateNestedManyWithoutREPORTESInput;
};
export type REPORTESUncheckedCreateWithoutCOMENTARIOSInput = {
    id?: string;
    reportante_id: string;
    usuario_reportado_id?: string | null;
    publicacion_id?: string | null;
    grupo_id?: string | null;
    motivo: string;
    descripcion?: string | null;
    estado: string;
    revisado_por?: string | null;
    creado_en?: Date | string;
    resuelto_en?: Date | string | null;
    SANCIONES?: Prisma.SANCIONESUncheckedCreateNestedManyWithoutREPORTESInput;
};
export type REPORTESCreateOrConnectWithoutCOMENTARIOSInput = {
    where: Prisma.REPORTESWhereUniqueInput;
    create: Prisma.XOR<Prisma.REPORTESCreateWithoutCOMENTARIOSInput, Prisma.REPORTESUncheckedCreateWithoutCOMENTARIOSInput>;
};
export type REPORTESCreateManyCOMENTARIOSInputEnvelope = {
    data: Prisma.REPORTESCreateManyCOMENTARIOSInput | Prisma.REPORTESCreateManyCOMENTARIOSInput[];
    skipDuplicates?: boolean;
};
export type REPORTESUpsertWithWhereUniqueWithoutCOMENTARIOSInput = {
    where: Prisma.REPORTESWhereUniqueInput;
    update: Prisma.XOR<Prisma.REPORTESUpdateWithoutCOMENTARIOSInput, Prisma.REPORTESUncheckedUpdateWithoutCOMENTARIOSInput>;
    create: Prisma.XOR<Prisma.REPORTESCreateWithoutCOMENTARIOSInput, Prisma.REPORTESUncheckedCreateWithoutCOMENTARIOSInput>;
};
export type REPORTESUpdateWithWhereUniqueWithoutCOMENTARIOSInput = {
    where: Prisma.REPORTESWhereUniqueInput;
    data: Prisma.XOR<Prisma.REPORTESUpdateWithoutCOMENTARIOSInput, Prisma.REPORTESUncheckedUpdateWithoutCOMENTARIOSInput>;
};
export type REPORTESUpdateManyWithWhereWithoutCOMENTARIOSInput = {
    where: Prisma.REPORTESScalarWhereInput;
    data: Prisma.XOR<Prisma.REPORTESUpdateManyMutationInput, Prisma.REPORTESUncheckedUpdateManyWithoutCOMENTARIOSInput>;
};
export type REPORTESScalarWhereInput = {
    AND?: Prisma.REPORTESScalarWhereInput | Prisma.REPORTESScalarWhereInput[];
    OR?: Prisma.REPORTESScalarWhereInput[];
    NOT?: Prisma.REPORTESScalarWhereInput | Prisma.REPORTESScalarWhereInput[];
    id?: Prisma.UuidFilter<"REPORTES"> | string;
    reportante_id?: Prisma.UuidFilter<"REPORTES"> | string;
    usuario_reportado_id?: Prisma.UuidNullableFilter<"REPORTES"> | string | null;
    publicacion_id?: Prisma.UuidNullableFilter<"REPORTES"> | string | null;
    comentario_id?: Prisma.UuidNullableFilter<"REPORTES"> | string | null;
    grupo_id?: Prisma.UuidNullableFilter<"REPORTES"> | string | null;
    motivo?: Prisma.StringFilter<"REPORTES"> | string;
    descripcion?: Prisma.StringNullableFilter<"REPORTES"> | string | null;
    estado?: Prisma.StringFilter<"REPORTES"> | string;
    revisado_por?: Prisma.UuidNullableFilter<"REPORTES"> | string | null;
    creado_en?: Prisma.DateTimeFilter<"REPORTES"> | Date | string;
    resuelto_en?: Prisma.DateTimeNullableFilter<"REPORTES"> | Date | string | null;
};
export type REPORTESCreateWithoutGRUPOSInput = {
    id?: string;
    motivo: string;
    descripcion?: string | null;
    estado: string;
    creado_en?: Date | string;
    resuelto_en?: Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSCreateNestedOneWithoutREPORTESInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedOneWithoutREPORTESInput;
    USUARIOS_REPORTES_reportante_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutREPORTES_REPORTES_reportante_idToUSUARIOSInput;
    USUARIOS_REPORTES_revisado_porToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutREPORTES_REPORTES_revisado_porToUSUARIOSInput;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutREPORTES_REPORTES_usuario_reportado_idToUSUARIOSInput;
    SANCIONES?: Prisma.SANCIONESCreateNestedManyWithoutREPORTESInput;
};
export type REPORTESUncheckedCreateWithoutGRUPOSInput = {
    id?: string;
    reportante_id: string;
    usuario_reportado_id?: string | null;
    publicacion_id?: string | null;
    comentario_id?: string | null;
    motivo: string;
    descripcion?: string | null;
    estado: string;
    revisado_por?: string | null;
    creado_en?: Date | string;
    resuelto_en?: Date | string | null;
    SANCIONES?: Prisma.SANCIONESUncheckedCreateNestedManyWithoutREPORTESInput;
};
export type REPORTESCreateOrConnectWithoutGRUPOSInput = {
    where: Prisma.REPORTESWhereUniqueInput;
    create: Prisma.XOR<Prisma.REPORTESCreateWithoutGRUPOSInput, Prisma.REPORTESUncheckedCreateWithoutGRUPOSInput>;
};
export type REPORTESCreateManyGRUPOSInputEnvelope = {
    data: Prisma.REPORTESCreateManyGRUPOSInput | Prisma.REPORTESCreateManyGRUPOSInput[];
    skipDuplicates?: boolean;
};
export type REPORTESUpsertWithWhereUniqueWithoutGRUPOSInput = {
    where: Prisma.REPORTESWhereUniqueInput;
    update: Prisma.XOR<Prisma.REPORTESUpdateWithoutGRUPOSInput, Prisma.REPORTESUncheckedUpdateWithoutGRUPOSInput>;
    create: Prisma.XOR<Prisma.REPORTESCreateWithoutGRUPOSInput, Prisma.REPORTESUncheckedCreateWithoutGRUPOSInput>;
};
export type REPORTESUpdateWithWhereUniqueWithoutGRUPOSInput = {
    where: Prisma.REPORTESWhereUniqueInput;
    data: Prisma.XOR<Prisma.REPORTESUpdateWithoutGRUPOSInput, Prisma.REPORTESUncheckedUpdateWithoutGRUPOSInput>;
};
export type REPORTESUpdateManyWithWhereWithoutGRUPOSInput = {
    where: Prisma.REPORTESScalarWhereInput;
    data: Prisma.XOR<Prisma.REPORTESUpdateManyMutationInput, Prisma.REPORTESUncheckedUpdateManyWithoutGRUPOSInput>;
};
export type REPORTESCreateWithoutPUBLICACIONESInput = {
    id?: string;
    motivo: string;
    descripcion?: string | null;
    estado: string;
    creado_en?: Date | string;
    resuelto_en?: Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSCreateNestedOneWithoutREPORTESInput;
    GRUPOS?: Prisma.GRUPOSCreateNestedOneWithoutREPORTESInput;
    USUARIOS_REPORTES_reportante_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutREPORTES_REPORTES_reportante_idToUSUARIOSInput;
    USUARIOS_REPORTES_revisado_porToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutREPORTES_REPORTES_revisado_porToUSUARIOSInput;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutREPORTES_REPORTES_usuario_reportado_idToUSUARIOSInput;
    SANCIONES?: Prisma.SANCIONESCreateNestedManyWithoutREPORTESInput;
};
export type REPORTESUncheckedCreateWithoutPUBLICACIONESInput = {
    id?: string;
    reportante_id: string;
    usuario_reportado_id?: string | null;
    comentario_id?: string | null;
    grupo_id?: string | null;
    motivo: string;
    descripcion?: string | null;
    estado: string;
    revisado_por?: string | null;
    creado_en?: Date | string;
    resuelto_en?: Date | string | null;
    SANCIONES?: Prisma.SANCIONESUncheckedCreateNestedManyWithoutREPORTESInput;
};
export type REPORTESCreateOrConnectWithoutPUBLICACIONESInput = {
    where: Prisma.REPORTESWhereUniqueInput;
    create: Prisma.XOR<Prisma.REPORTESCreateWithoutPUBLICACIONESInput, Prisma.REPORTESUncheckedCreateWithoutPUBLICACIONESInput>;
};
export type REPORTESCreateManyPUBLICACIONESInputEnvelope = {
    data: Prisma.REPORTESCreateManyPUBLICACIONESInput | Prisma.REPORTESCreateManyPUBLICACIONESInput[];
    skipDuplicates?: boolean;
};
export type REPORTESUpsertWithWhereUniqueWithoutPUBLICACIONESInput = {
    where: Prisma.REPORTESWhereUniqueInput;
    update: Prisma.XOR<Prisma.REPORTESUpdateWithoutPUBLICACIONESInput, Prisma.REPORTESUncheckedUpdateWithoutPUBLICACIONESInput>;
    create: Prisma.XOR<Prisma.REPORTESCreateWithoutPUBLICACIONESInput, Prisma.REPORTESUncheckedCreateWithoutPUBLICACIONESInput>;
};
export type REPORTESUpdateWithWhereUniqueWithoutPUBLICACIONESInput = {
    where: Prisma.REPORTESWhereUniqueInput;
    data: Prisma.XOR<Prisma.REPORTESUpdateWithoutPUBLICACIONESInput, Prisma.REPORTESUncheckedUpdateWithoutPUBLICACIONESInput>;
};
export type REPORTESUpdateManyWithWhereWithoutPUBLICACIONESInput = {
    where: Prisma.REPORTESScalarWhereInput;
    data: Prisma.XOR<Prisma.REPORTESUpdateManyMutationInput, Prisma.REPORTESUncheckedUpdateManyWithoutPUBLICACIONESInput>;
};
export type REPORTESCreateWithoutSANCIONESInput = {
    id?: string;
    motivo: string;
    descripcion?: string | null;
    estado: string;
    creado_en?: Date | string;
    resuelto_en?: Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSCreateNestedOneWithoutREPORTESInput;
    GRUPOS?: Prisma.GRUPOSCreateNestedOneWithoutREPORTESInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedOneWithoutREPORTESInput;
    USUARIOS_REPORTES_reportante_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutREPORTES_REPORTES_reportante_idToUSUARIOSInput;
    USUARIOS_REPORTES_revisado_porToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutREPORTES_REPORTES_revisado_porToUSUARIOSInput;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutREPORTES_REPORTES_usuario_reportado_idToUSUARIOSInput;
};
export type REPORTESUncheckedCreateWithoutSANCIONESInput = {
    id?: string;
    reportante_id: string;
    usuario_reportado_id?: string | null;
    publicacion_id?: string | null;
    comentario_id?: string | null;
    grupo_id?: string | null;
    motivo: string;
    descripcion?: string | null;
    estado: string;
    revisado_por?: string | null;
    creado_en?: Date | string;
    resuelto_en?: Date | string | null;
};
export type REPORTESCreateOrConnectWithoutSANCIONESInput = {
    where: Prisma.REPORTESWhereUniqueInput;
    create: Prisma.XOR<Prisma.REPORTESCreateWithoutSANCIONESInput, Prisma.REPORTESUncheckedCreateWithoutSANCIONESInput>;
};
export type REPORTESUpsertWithoutSANCIONESInput = {
    update: Prisma.XOR<Prisma.REPORTESUpdateWithoutSANCIONESInput, Prisma.REPORTESUncheckedUpdateWithoutSANCIONESInput>;
    create: Prisma.XOR<Prisma.REPORTESCreateWithoutSANCIONESInput, Prisma.REPORTESUncheckedCreateWithoutSANCIONESInput>;
    where?: Prisma.REPORTESWhereInput;
};
export type REPORTESUpdateToOneWithWhereWithoutSANCIONESInput = {
    where?: Prisma.REPORTESWhereInput;
    data: Prisma.XOR<Prisma.REPORTESUpdateWithoutSANCIONESInput, Prisma.REPORTESUncheckedUpdateWithoutSANCIONESInput>;
};
export type REPORTESUpdateWithoutSANCIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUpdateOneWithoutREPORTESNestedInput;
    GRUPOS?: Prisma.GRUPOSUpdateOneWithoutREPORTESNestedInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneWithoutREPORTESNestedInput;
    USUARIOS_REPORTES_reportante_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutREPORTES_REPORTES_reportante_idToUSUARIOSNestedInput;
    USUARIOS_REPORTES_revisado_porToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutREPORTES_REPORTES_revisado_porToUSUARIOSNestedInput;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutREPORTES_REPORTES_usuario_reportado_idToUSUARIOSNestedInput;
};
export type REPORTESUncheckedUpdateWithoutSANCIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportante_id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_reportado_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comentario_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupo_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    revisado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type REPORTESCreateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput = {
    id?: string;
    motivo: string;
    descripcion?: string | null;
    estado: string;
    creado_en?: Date | string;
    resuelto_en?: Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSCreateNestedOneWithoutREPORTESInput;
    GRUPOS?: Prisma.GRUPOSCreateNestedOneWithoutREPORTESInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedOneWithoutREPORTESInput;
    USUARIOS_REPORTES_revisado_porToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutREPORTES_REPORTES_revisado_porToUSUARIOSInput;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutREPORTES_REPORTES_usuario_reportado_idToUSUARIOSInput;
    SANCIONES?: Prisma.SANCIONESCreateNestedManyWithoutREPORTESInput;
};
export type REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput = {
    id?: string;
    usuario_reportado_id?: string | null;
    publicacion_id?: string | null;
    comentario_id?: string | null;
    grupo_id?: string | null;
    motivo: string;
    descripcion?: string | null;
    estado: string;
    revisado_por?: string | null;
    creado_en?: Date | string;
    resuelto_en?: Date | string | null;
    SANCIONES?: Prisma.SANCIONESUncheckedCreateNestedManyWithoutREPORTESInput;
};
export type REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput = {
    where: Prisma.REPORTESWhereUniqueInput;
    create: Prisma.XOR<Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput, Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput>;
};
export type REPORTESCreateManyUSUARIOS_REPORTES_reportante_idToUSUARIOSInputEnvelope = {
    data: Prisma.REPORTESCreateManyUSUARIOS_REPORTES_reportante_idToUSUARIOSInput | Prisma.REPORTESCreateManyUSUARIOS_REPORTES_reportante_idToUSUARIOSInput[];
    skipDuplicates?: boolean;
};
export type REPORTESCreateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput = {
    id?: string;
    motivo: string;
    descripcion?: string | null;
    estado: string;
    creado_en?: Date | string;
    resuelto_en?: Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSCreateNestedOneWithoutREPORTESInput;
    GRUPOS?: Prisma.GRUPOSCreateNestedOneWithoutREPORTESInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedOneWithoutREPORTESInput;
    USUARIOS_REPORTES_reportante_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutREPORTES_REPORTES_reportante_idToUSUARIOSInput;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutREPORTES_REPORTES_usuario_reportado_idToUSUARIOSInput;
    SANCIONES?: Prisma.SANCIONESCreateNestedManyWithoutREPORTESInput;
};
export type REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput = {
    id?: string;
    reportante_id: string;
    usuario_reportado_id?: string | null;
    publicacion_id?: string | null;
    comentario_id?: string | null;
    grupo_id?: string | null;
    motivo: string;
    descripcion?: string | null;
    estado: string;
    creado_en?: Date | string;
    resuelto_en?: Date | string | null;
    SANCIONES?: Prisma.SANCIONESUncheckedCreateNestedManyWithoutREPORTESInput;
};
export type REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput = {
    where: Prisma.REPORTESWhereUniqueInput;
    create: Prisma.XOR<Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput, Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput>;
};
export type REPORTESCreateManyUSUARIOS_REPORTES_revisado_porToUSUARIOSInputEnvelope = {
    data: Prisma.REPORTESCreateManyUSUARIOS_REPORTES_revisado_porToUSUARIOSInput | Prisma.REPORTESCreateManyUSUARIOS_REPORTES_revisado_porToUSUARIOSInput[];
    skipDuplicates?: boolean;
};
export type REPORTESCreateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput = {
    id?: string;
    motivo: string;
    descripcion?: string | null;
    estado: string;
    creado_en?: Date | string;
    resuelto_en?: Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSCreateNestedOneWithoutREPORTESInput;
    GRUPOS?: Prisma.GRUPOSCreateNestedOneWithoutREPORTESInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESCreateNestedOneWithoutREPORTESInput;
    USUARIOS_REPORTES_reportante_idToUSUARIOS: Prisma.USUARIOSCreateNestedOneWithoutREPORTES_REPORTES_reportante_idToUSUARIOSInput;
    USUARIOS_REPORTES_revisado_porToUSUARIOS?: Prisma.USUARIOSCreateNestedOneWithoutREPORTES_REPORTES_revisado_porToUSUARIOSInput;
    SANCIONES?: Prisma.SANCIONESCreateNestedManyWithoutREPORTESInput;
};
export type REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput = {
    id?: string;
    reportante_id: string;
    publicacion_id?: string | null;
    comentario_id?: string | null;
    grupo_id?: string | null;
    motivo: string;
    descripcion?: string | null;
    estado: string;
    revisado_por?: string | null;
    creado_en?: Date | string;
    resuelto_en?: Date | string | null;
    SANCIONES?: Prisma.SANCIONESUncheckedCreateNestedManyWithoutREPORTESInput;
};
export type REPORTESCreateOrConnectWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput = {
    where: Prisma.REPORTESWhereUniqueInput;
    create: Prisma.XOR<Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput, Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput>;
};
export type REPORTESCreateManyUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInputEnvelope = {
    data: Prisma.REPORTESCreateManyUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput | Prisma.REPORTESCreateManyUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput[];
    skipDuplicates?: boolean;
};
export type REPORTESUpsertWithWhereUniqueWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput = {
    where: Prisma.REPORTESWhereUniqueInput;
    update: Prisma.XOR<Prisma.REPORTESUpdateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput, Prisma.REPORTESUncheckedUpdateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput>;
    create: Prisma.XOR<Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput, Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput>;
};
export type REPORTESUpdateWithWhereUniqueWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput = {
    where: Prisma.REPORTESWhereUniqueInput;
    data: Prisma.XOR<Prisma.REPORTESUpdateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput, Prisma.REPORTESUncheckedUpdateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput>;
};
export type REPORTESUpdateManyWithWhereWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput = {
    where: Prisma.REPORTESScalarWhereInput;
    data: Prisma.XOR<Prisma.REPORTESUpdateManyMutationInput, Prisma.REPORTESUncheckedUpdateManyWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput>;
};
export type REPORTESUpsertWithWhereUniqueWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput = {
    where: Prisma.REPORTESWhereUniqueInput;
    update: Prisma.XOR<Prisma.REPORTESUpdateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput, Prisma.REPORTESUncheckedUpdateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput>;
    create: Prisma.XOR<Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput, Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput>;
};
export type REPORTESUpdateWithWhereUniqueWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput = {
    where: Prisma.REPORTESWhereUniqueInput;
    data: Prisma.XOR<Prisma.REPORTESUpdateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput, Prisma.REPORTESUncheckedUpdateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput>;
};
export type REPORTESUpdateManyWithWhereWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput = {
    where: Prisma.REPORTESScalarWhereInput;
    data: Prisma.XOR<Prisma.REPORTESUpdateManyMutationInput, Prisma.REPORTESUncheckedUpdateManyWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput>;
};
export type REPORTESUpsertWithWhereUniqueWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput = {
    where: Prisma.REPORTESWhereUniqueInput;
    update: Prisma.XOR<Prisma.REPORTESUpdateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput, Prisma.REPORTESUncheckedUpdateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput>;
    create: Prisma.XOR<Prisma.REPORTESCreateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput, Prisma.REPORTESUncheckedCreateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput>;
};
export type REPORTESUpdateWithWhereUniqueWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput = {
    where: Prisma.REPORTESWhereUniqueInput;
    data: Prisma.XOR<Prisma.REPORTESUpdateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput, Prisma.REPORTESUncheckedUpdateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput>;
};
export type REPORTESUpdateManyWithWhereWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput = {
    where: Prisma.REPORTESScalarWhereInput;
    data: Prisma.XOR<Prisma.REPORTESUpdateManyMutationInput, Prisma.REPORTESUncheckedUpdateManyWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput>;
};
export type REPORTESCreateManyCOMENTARIOSInput = {
    id?: string;
    reportante_id: string;
    usuario_reportado_id?: string | null;
    publicacion_id?: string | null;
    grupo_id?: string | null;
    motivo: string;
    descripcion?: string | null;
    estado: string;
    revisado_por?: string | null;
    creado_en?: Date | string;
    resuelto_en?: Date | string | null;
};
export type REPORTESUpdateWithoutCOMENTARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    GRUPOS?: Prisma.GRUPOSUpdateOneWithoutREPORTESNestedInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneWithoutREPORTESNestedInput;
    USUARIOS_REPORTES_reportante_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutREPORTES_REPORTES_reportante_idToUSUARIOSNestedInput;
    USUARIOS_REPORTES_revisado_porToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutREPORTES_REPORTES_revisado_porToUSUARIOSNestedInput;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutREPORTES_REPORTES_usuario_reportado_idToUSUARIOSNestedInput;
    SANCIONES?: Prisma.SANCIONESUpdateManyWithoutREPORTESNestedInput;
};
export type REPORTESUncheckedUpdateWithoutCOMENTARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportante_id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_reportado_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupo_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    revisado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    SANCIONES?: Prisma.SANCIONESUncheckedUpdateManyWithoutREPORTESNestedInput;
};
export type REPORTESUncheckedUpdateManyWithoutCOMENTARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportante_id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_reportado_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupo_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    revisado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type REPORTESCreateManyGRUPOSInput = {
    id?: string;
    reportante_id: string;
    usuario_reportado_id?: string | null;
    publicacion_id?: string | null;
    comentario_id?: string | null;
    motivo: string;
    descripcion?: string | null;
    estado: string;
    revisado_por?: string | null;
    creado_en?: Date | string;
    resuelto_en?: Date | string | null;
};
export type REPORTESUpdateWithoutGRUPOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUpdateOneWithoutREPORTESNestedInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneWithoutREPORTESNestedInput;
    USUARIOS_REPORTES_reportante_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutREPORTES_REPORTES_reportante_idToUSUARIOSNestedInput;
    USUARIOS_REPORTES_revisado_porToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutREPORTES_REPORTES_revisado_porToUSUARIOSNestedInput;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutREPORTES_REPORTES_usuario_reportado_idToUSUARIOSNestedInput;
    SANCIONES?: Prisma.SANCIONESUpdateManyWithoutREPORTESNestedInput;
};
export type REPORTESUncheckedUpdateWithoutGRUPOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportante_id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_reportado_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comentario_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    revisado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    SANCIONES?: Prisma.SANCIONESUncheckedUpdateManyWithoutREPORTESNestedInput;
};
export type REPORTESUncheckedUpdateManyWithoutGRUPOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportante_id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_reportado_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comentario_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    revisado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type REPORTESCreateManyPUBLICACIONESInput = {
    id?: string;
    reportante_id: string;
    usuario_reportado_id?: string | null;
    comentario_id?: string | null;
    grupo_id?: string | null;
    motivo: string;
    descripcion?: string | null;
    estado: string;
    revisado_por?: string | null;
    creado_en?: Date | string;
    resuelto_en?: Date | string | null;
};
export type REPORTESUpdateWithoutPUBLICACIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUpdateOneWithoutREPORTESNestedInput;
    GRUPOS?: Prisma.GRUPOSUpdateOneWithoutREPORTESNestedInput;
    USUARIOS_REPORTES_reportante_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutREPORTES_REPORTES_reportante_idToUSUARIOSNestedInput;
    USUARIOS_REPORTES_revisado_porToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutREPORTES_REPORTES_revisado_porToUSUARIOSNestedInput;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutREPORTES_REPORTES_usuario_reportado_idToUSUARIOSNestedInput;
    SANCIONES?: Prisma.SANCIONESUpdateManyWithoutREPORTESNestedInput;
};
export type REPORTESUncheckedUpdateWithoutPUBLICACIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportante_id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_reportado_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comentario_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupo_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    revisado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    SANCIONES?: Prisma.SANCIONESUncheckedUpdateManyWithoutREPORTESNestedInput;
};
export type REPORTESUncheckedUpdateManyWithoutPUBLICACIONESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportante_id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_reportado_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comentario_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupo_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    revisado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type REPORTESCreateManyUSUARIOS_REPORTES_reportante_idToUSUARIOSInput = {
    id?: string;
    usuario_reportado_id?: string | null;
    publicacion_id?: string | null;
    comentario_id?: string | null;
    grupo_id?: string | null;
    motivo: string;
    descripcion?: string | null;
    estado: string;
    revisado_por?: string | null;
    creado_en?: Date | string;
    resuelto_en?: Date | string | null;
};
export type REPORTESCreateManyUSUARIOS_REPORTES_revisado_porToUSUARIOSInput = {
    id?: string;
    reportante_id: string;
    usuario_reportado_id?: string | null;
    publicacion_id?: string | null;
    comentario_id?: string | null;
    grupo_id?: string | null;
    motivo: string;
    descripcion?: string | null;
    estado: string;
    creado_en?: Date | string;
    resuelto_en?: Date | string | null;
};
export type REPORTESCreateManyUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput = {
    id?: string;
    reportante_id: string;
    publicacion_id?: string | null;
    comentario_id?: string | null;
    grupo_id?: string | null;
    motivo: string;
    descripcion?: string | null;
    estado: string;
    revisado_por?: string | null;
    creado_en?: Date | string;
    resuelto_en?: Date | string | null;
};
export type REPORTESUpdateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUpdateOneWithoutREPORTESNestedInput;
    GRUPOS?: Prisma.GRUPOSUpdateOneWithoutREPORTESNestedInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneWithoutREPORTESNestedInput;
    USUARIOS_REPORTES_revisado_porToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutREPORTES_REPORTES_revisado_porToUSUARIOSNestedInput;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutREPORTES_REPORTES_usuario_reportado_idToUSUARIOSNestedInput;
    SANCIONES?: Prisma.SANCIONESUpdateManyWithoutREPORTESNestedInput;
};
export type REPORTESUncheckedUpdateWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_reportado_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comentario_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupo_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    revisado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    SANCIONES?: Prisma.SANCIONESUncheckedUpdateManyWithoutREPORTESNestedInput;
};
export type REPORTESUncheckedUpdateManyWithoutUSUARIOS_REPORTES_reportante_idToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_reportado_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comentario_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupo_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    revisado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type REPORTESUpdateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUpdateOneWithoutREPORTESNestedInput;
    GRUPOS?: Prisma.GRUPOSUpdateOneWithoutREPORTESNestedInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneWithoutREPORTESNestedInput;
    USUARIOS_REPORTES_reportante_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutREPORTES_REPORTES_reportante_idToUSUARIOSNestedInput;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutREPORTES_REPORTES_usuario_reportado_idToUSUARIOSNestedInput;
    SANCIONES?: Prisma.SANCIONESUpdateManyWithoutREPORTESNestedInput;
};
export type REPORTESUncheckedUpdateWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportante_id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_reportado_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comentario_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupo_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    SANCIONES?: Prisma.SANCIONESUncheckedUpdateManyWithoutREPORTESNestedInput;
};
export type REPORTESUncheckedUpdateManyWithoutUSUARIOS_REPORTES_revisado_porToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportante_id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_reportado_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comentario_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupo_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type REPORTESUpdateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    COMENTARIOS?: Prisma.COMENTARIOSUpdateOneWithoutREPORTESNestedInput;
    GRUPOS?: Prisma.GRUPOSUpdateOneWithoutREPORTESNestedInput;
    PUBLICACIONES?: Prisma.PUBLICACIONESUpdateOneWithoutREPORTESNestedInput;
    USUARIOS_REPORTES_reportante_idToUSUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutREPORTES_REPORTES_reportante_idToUSUARIOSNestedInput;
    USUARIOS_REPORTES_revisado_porToUSUARIOS?: Prisma.USUARIOSUpdateOneWithoutREPORTES_REPORTES_revisado_porToUSUARIOSNestedInput;
    SANCIONES?: Prisma.SANCIONESUpdateManyWithoutREPORTESNestedInput;
};
export type REPORTESUncheckedUpdateWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportante_id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comentario_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupo_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    revisado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    SANCIONES?: Prisma.SANCIONESUncheckedUpdateManyWithoutREPORTESNestedInput;
};
export type REPORTESUncheckedUpdateManyWithoutUSUARIOS_REPORTES_usuario_reportado_idToUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reportante_id?: Prisma.StringFieldUpdateOperationsInput | string;
    publicacion_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comentario_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupo_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    revisado_por?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    creado_en?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resuelto_en?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type REPORTESCountOutputType = {
    SANCIONES: number;
};
export type REPORTESCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    SANCIONES?: boolean | REPORTESCountOutputTypeCountSANCIONESArgs;
};
export type REPORTESCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REPORTESCountOutputTypeSelect<ExtArgs> | null;
};
export type REPORTESCountOutputTypeCountSANCIONESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SANCIONESWhereInput;
};
export type REPORTESSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reportante_id?: boolean;
    usuario_reportado_id?: boolean;
    publicacion_id?: boolean;
    comentario_id?: boolean;
    grupo_id?: boolean;
    motivo?: boolean;
    descripcion?: boolean;
    estado?: boolean;
    revisado_por?: boolean;
    creado_en?: boolean;
    resuelto_en?: boolean;
    COMENTARIOS?: boolean | Prisma.REPORTES$COMENTARIOSArgs<ExtArgs>;
    GRUPOS?: boolean | Prisma.REPORTES$GRUPOSArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.REPORTES$PUBLICACIONESArgs<ExtArgs>;
    USUARIOS_REPORTES_reportante_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    USUARIOS_REPORTES_revisado_porToUSUARIOS?: boolean | Prisma.REPORTES$USUARIOS_REPORTES_revisado_porToUSUARIOSArgs<ExtArgs>;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS?: boolean | Prisma.REPORTES$USUARIOS_REPORTES_usuario_reportado_idToUSUARIOSArgs<ExtArgs>;
    SANCIONES?: boolean | Prisma.REPORTES$SANCIONESArgs<ExtArgs>;
    _count?: boolean | Prisma.REPORTESCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rEPORTES"]>;
export type REPORTESSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reportante_id?: boolean;
    usuario_reportado_id?: boolean;
    publicacion_id?: boolean;
    comentario_id?: boolean;
    grupo_id?: boolean;
    motivo?: boolean;
    descripcion?: boolean;
    estado?: boolean;
    revisado_por?: boolean;
    creado_en?: boolean;
    resuelto_en?: boolean;
    COMENTARIOS?: boolean | Prisma.REPORTES$COMENTARIOSArgs<ExtArgs>;
    GRUPOS?: boolean | Prisma.REPORTES$GRUPOSArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.REPORTES$PUBLICACIONESArgs<ExtArgs>;
    USUARIOS_REPORTES_reportante_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    USUARIOS_REPORTES_revisado_porToUSUARIOS?: boolean | Prisma.REPORTES$USUARIOS_REPORTES_revisado_porToUSUARIOSArgs<ExtArgs>;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS?: boolean | Prisma.REPORTES$USUARIOS_REPORTES_usuario_reportado_idToUSUARIOSArgs<ExtArgs>;
}, ExtArgs["result"]["rEPORTES"]>;
export type REPORTESSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reportante_id?: boolean;
    usuario_reportado_id?: boolean;
    publicacion_id?: boolean;
    comentario_id?: boolean;
    grupo_id?: boolean;
    motivo?: boolean;
    descripcion?: boolean;
    estado?: boolean;
    revisado_por?: boolean;
    creado_en?: boolean;
    resuelto_en?: boolean;
    COMENTARIOS?: boolean | Prisma.REPORTES$COMENTARIOSArgs<ExtArgs>;
    GRUPOS?: boolean | Prisma.REPORTES$GRUPOSArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.REPORTES$PUBLICACIONESArgs<ExtArgs>;
    USUARIOS_REPORTES_reportante_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    USUARIOS_REPORTES_revisado_porToUSUARIOS?: boolean | Prisma.REPORTES$USUARIOS_REPORTES_revisado_porToUSUARIOSArgs<ExtArgs>;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS?: boolean | Prisma.REPORTES$USUARIOS_REPORTES_usuario_reportado_idToUSUARIOSArgs<ExtArgs>;
}, ExtArgs["result"]["rEPORTES"]>;
export type REPORTESSelectScalar = {
    id?: boolean;
    reportante_id?: boolean;
    usuario_reportado_id?: boolean;
    publicacion_id?: boolean;
    comentario_id?: boolean;
    grupo_id?: boolean;
    motivo?: boolean;
    descripcion?: boolean;
    estado?: boolean;
    revisado_por?: boolean;
    creado_en?: boolean;
    resuelto_en?: boolean;
};
export type REPORTESOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "reportante_id" | "usuario_reportado_id" | "publicacion_id" | "comentario_id" | "grupo_id" | "motivo" | "descripcion" | "estado" | "revisado_por" | "creado_en" | "resuelto_en", ExtArgs["result"]["rEPORTES"]>;
export type REPORTESInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    COMENTARIOS?: boolean | Prisma.REPORTES$COMENTARIOSArgs<ExtArgs>;
    GRUPOS?: boolean | Prisma.REPORTES$GRUPOSArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.REPORTES$PUBLICACIONESArgs<ExtArgs>;
    USUARIOS_REPORTES_reportante_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    USUARIOS_REPORTES_revisado_porToUSUARIOS?: boolean | Prisma.REPORTES$USUARIOS_REPORTES_revisado_porToUSUARIOSArgs<ExtArgs>;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS?: boolean | Prisma.REPORTES$USUARIOS_REPORTES_usuario_reportado_idToUSUARIOSArgs<ExtArgs>;
    SANCIONES?: boolean | Prisma.REPORTES$SANCIONESArgs<ExtArgs>;
    _count?: boolean | Prisma.REPORTESCountOutputTypeDefaultArgs<ExtArgs>;
};
export type REPORTESIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    COMENTARIOS?: boolean | Prisma.REPORTES$COMENTARIOSArgs<ExtArgs>;
    GRUPOS?: boolean | Prisma.REPORTES$GRUPOSArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.REPORTES$PUBLICACIONESArgs<ExtArgs>;
    USUARIOS_REPORTES_reportante_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    USUARIOS_REPORTES_revisado_porToUSUARIOS?: boolean | Prisma.REPORTES$USUARIOS_REPORTES_revisado_porToUSUARIOSArgs<ExtArgs>;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS?: boolean | Prisma.REPORTES$USUARIOS_REPORTES_usuario_reportado_idToUSUARIOSArgs<ExtArgs>;
};
export type REPORTESIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    COMENTARIOS?: boolean | Prisma.REPORTES$COMENTARIOSArgs<ExtArgs>;
    GRUPOS?: boolean | Prisma.REPORTES$GRUPOSArgs<ExtArgs>;
    PUBLICACIONES?: boolean | Prisma.REPORTES$PUBLICACIONESArgs<ExtArgs>;
    USUARIOS_REPORTES_reportante_idToUSUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    USUARIOS_REPORTES_revisado_porToUSUARIOS?: boolean | Prisma.REPORTES$USUARIOS_REPORTES_revisado_porToUSUARIOSArgs<ExtArgs>;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS?: boolean | Prisma.REPORTES$USUARIOS_REPORTES_usuario_reportado_idToUSUARIOSArgs<ExtArgs>;
};
export type $REPORTESPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "REPORTES";
    objects: {
        COMENTARIOS: Prisma.$COMENTARIOSPayload<ExtArgs> | null;
        GRUPOS: Prisma.$GRUPOSPayload<ExtArgs> | null;
        PUBLICACIONES: Prisma.$PUBLICACIONESPayload<ExtArgs> | null;
        USUARIOS_REPORTES_reportante_idToUSUARIOS: Prisma.$USUARIOSPayload<ExtArgs>;
        USUARIOS_REPORTES_revisado_porToUSUARIOS: Prisma.$USUARIOSPayload<ExtArgs> | null;
        USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS: Prisma.$USUARIOSPayload<ExtArgs> | null;
        SANCIONES: Prisma.$SANCIONESPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        reportante_id: string;
        usuario_reportado_id: string | null;
        publicacion_id: string | null;
        comentario_id: string | null;
        grupo_id: string | null;
        motivo: string;
        descripcion: string | null;
        estado: string;
        revisado_por: string | null;
        creado_en: Date;
        resuelto_en: Date | null;
    }, ExtArgs["result"]["rEPORTES"]>;
    composites: {};
};
export type REPORTESGetPayload<S extends boolean | null | undefined | REPORTESDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$REPORTESPayload, S>;
export type REPORTESCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<REPORTESFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: REPORTESCountAggregateInputType | true;
};
export interface REPORTESDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['REPORTES'];
        meta: {
            name: 'REPORTES';
        };
    };
    findUnique<T extends REPORTESFindUniqueArgs>(args: Prisma.SelectSubset<T, REPORTESFindUniqueArgs<ExtArgs>>): Prisma.Prisma__REPORTESClient<runtime.Types.Result.GetResult<Prisma.$REPORTESPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends REPORTESFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, REPORTESFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__REPORTESClient<runtime.Types.Result.GetResult<Prisma.$REPORTESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends REPORTESFindFirstArgs>(args?: Prisma.SelectSubset<T, REPORTESFindFirstArgs<ExtArgs>>): Prisma.Prisma__REPORTESClient<runtime.Types.Result.GetResult<Prisma.$REPORTESPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends REPORTESFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, REPORTESFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__REPORTESClient<runtime.Types.Result.GetResult<Prisma.$REPORTESPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends REPORTESFindManyArgs>(args?: Prisma.SelectSubset<T, REPORTESFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$REPORTESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends REPORTESCreateArgs>(args: Prisma.SelectSubset<T, REPORTESCreateArgs<ExtArgs>>): Prisma.Prisma__REPORTESClient<runtime.Types.Result.GetResult<Prisma.$REPORTESPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends REPORTESCreateManyArgs>(args?: Prisma.SelectSubset<T, REPORTESCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends REPORTESCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, REPORTESCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$REPORTESPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends REPORTESDeleteArgs>(args: Prisma.SelectSubset<T, REPORTESDeleteArgs<ExtArgs>>): Prisma.Prisma__REPORTESClient<runtime.Types.Result.GetResult<Prisma.$REPORTESPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends REPORTESUpdateArgs>(args: Prisma.SelectSubset<T, REPORTESUpdateArgs<ExtArgs>>): Prisma.Prisma__REPORTESClient<runtime.Types.Result.GetResult<Prisma.$REPORTESPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends REPORTESDeleteManyArgs>(args?: Prisma.SelectSubset<T, REPORTESDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends REPORTESUpdateManyArgs>(args: Prisma.SelectSubset<T, REPORTESUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends REPORTESUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, REPORTESUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$REPORTESPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends REPORTESUpsertArgs>(args: Prisma.SelectSubset<T, REPORTESUpsertArgs<ExtArgs>>): Prisma.Prisma__REPORTESClient<runtime.Types.Result.GetResult<Prisma.$REPORTESPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends REPORTESCountArgs>(args?: Prisma.Subset<T, REPORTESCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], REPORTESCountAggregateOutputType> : number>;
    aggregate<T extends REPORTESAggregateArgs>(args: Prisma.Subset<T, REPORTESAggregateArgs>): Prisma.PrismaPromise<GetREPORTESAggregateType<T>>;
    groupBy<T extends REPORTESGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: REPORTESGroupByArgs['orderBy'];
    } : {
        orderBy?: REPORTESGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, REPORTESGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetREPORTESGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: REPORTESFieldRefs;
}
export interface Prisma__REPORTESClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    COMENTARIOS<T extends Prisma.REPORTES$COMENTARIOSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.REPORTES$COMENTARIOSArgs<ExtArgs>>): Prisma.Prisma__COMENTARIOSClient<runtime.Types.Result.GetResult<Prisma.$COMENTARIOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    GRUPOS<T extends Prisma.REPORTES$GRUPOSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.REPORTES$GRUPOSArgs<ExtArgs>>): Prisma.Prisma__GRUPOSClient<runtime.Types.Result.GetResult<Prisma.$GRUPOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    PUBLICACIONES<T extends Prisma.REPORTES$PUBLICACIONESArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.REPORTES$PUBLICACIONESArgs<ExtArgs>>): Prisma.Prisma__PUBLICACIONESClient<runtime.Types.Result.GetResult<Prisma.$PUBLICACIONESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    USUARIOS_REPORTES_reportante_idToUSUARIOS<T extends Prisma.USUARIOSDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.USUARIOSDefaultArgs<ExtArgs>>): Prisma.Prisma__USUARIOSClient<runtime.Types.Result.GetResult<Prisma.$USUARIOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    USUARIOS_REPORTES_revisado_porToUSUARIOS<T extends Prisma.REPORTES$USUARIOS_REPORTES_revisado_porToUSUARIOSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.REPORTES$USUARIOS_REPORTES_revisado_porToUSUARIOSArgs<ExtArgs>>): Prisma.Prisma__USUARIOSClient<runtime.Types.Result.GetResult<Prisma.$USUARIOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    USUARIOS_REPORTES_usuario_reportado_idToUSUARIOS<T extends Prisma.REPORTES$USUARIOS_REPORTES_usuario_reportado_idToUSUARIOSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.REPORTES$USUARIOS_REPORTES_usuario_reportado_idToUSUARIOSArgs<ExtArgs>>): Prisma.Prisma__USUARIOSClient<runtime.Types.Result.GetResult<Prisma.$USUARIOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    SANCIONES<T extends Prisma.REPORTES$SANCIONESArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.REPORTES$SANCIONESArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SANCIONESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface REPORTESFieldRefs {
    readonly id: Prisma.FieldRef<"REPORTES", 'String'>;
    readonly reportante_id: Prisma.FieldRef<"REPORTES", 'String'>;
    readonly usuario_reportado_id: Prisma.FieldRef<"REPORTES", 'String'>;
    readonly publicacion_id: Prisma.FieldRef<"REPORTES", 'String'>;
    readonly comentario_id: Prisma.FieldRef<"REPORTES", 'String'>;
    readonly grupo_id: Prisma.FieldRef<"REPORTES", 'String'>;
    readonly motivo: Prisma.FieldRef<"REPORTES", 'String'>;
    readonly descripcion: Prisma.FieldRef<"REPORTES", 'String'>;
    readonly estado: Prisma.FieldRef<"REPORTES", 'String'>;
    readonly revisado_por: Prisma.FieldRef<"REPORTES", 'String'>;
    readonly creado_en: Prisma.FieldRef<"REPORTES", 'DateTime'>;
    readonly resuelto_en: Prisma.FieldRef<"REPORTES", 'DateTime'>;
}
export type REPORTESFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REPORTESSelect<ExtArgs> | null;
    omit?: Prisma.REPORTESOmit<ExtArgs> | null;
    include?: Prisma.REPORTESInclude<ExtArgs> | null;
    where: Prisma.REPORTESWhereUniqueInput;
};
export type REPORTESFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REPORTESSelect<ExtArgs> | null;
    omit?: Prisma.REPORTESOmit<ExtArgs> | null;
    include?: Prisma.REPORTESInclude<ExtArgs> | null;
    where: Prisma.REPORTESWhereUniqueInput;
};
export type REPORTESFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type REPORTESFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type REPORTESFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type REPORTESCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REPORTESSelect<ExtArgs> | null;
    omit?: Prisma.REPORTESOmit<ExtArgs> | null;
    include?: Prisma.REPORTESInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.REPORTESCreateInput, Prisma.REPORTESUncheckedCreateInput>;
};
export type REPORTESCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.REPORTESCreateManyInput | Prisma.REPORTESCreateManyInput[];
    skipDuplicates?: boolean;
};
export type REPORTESCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REPORTESSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.REPORTESOmit<ExtArgs> | null;
    data: Prisma.REPORTESCreateManyInput | Prisma.REPORTESCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.REPORTESIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type REPORTESUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REPORTESSelect<ExtArgs> | null;
    omit?: Prisma.REPORTESOmit<ExtArgs> | null;
    include?: Prisma.REPORTESInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.REPORTESUpdateInput, Prisma.REPORTESUncheckedUpdateInput>;
    where: Prisma.REPORTESWhereUniqueInput;
};
export type REPORTESUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.REPORTESUpdateManyMutationInput, Prisma.REPORTESUncheckedUpdateManyInput>;
    where?: Prisma.REPORTESWhereInput;
    limit?: number;
};
export type REPORTESUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REPORTESSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.REPORTESOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.REPORTESUpdateManyMutationInput, Prisma.REPORTESUncheckedUpdateManyInput>;
    where?: Prisma.REPORTESWhereInput;
    limit?: number;
    include?: Prisma.REPORTESIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type REPORTESUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REPORTESSelect<ExtArgs> | null;
    omit?: Prisma.REPORTESOmit<ExtArgs> | null;
    include?: Prisma.REPORTESInclude<ExtArgs> | null;
    where: Prisma.REPORTESWhereUniqueInput;
    create: Prisma.XOR<Prisma.REPORTESCreateInput, Prisma.REPORTESUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.REPORTESUpdateInput, Prisma.REPORTESUncheckedUpdateInput>;
};
export type REPORTESDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REPORTESSelect<ExtArgs> | null;
    omit?: Prisma.REPORTESOmit<ExtArgs> | null;
    include?: Prisma.REPORTESInclude<ExtArgs> | null;
    where: Prisma.REPORTESWhereUniqueInput;
};
export type REPORTESDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.REPORTESWhereInput;
    limit?: number;
};
export type REPORTES$COMENTARIOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.COMENTARIOSSelect<ExtArgs> | null;
    omit?: Prisma.COMENTARIOSOmit<ExtArgs> | null;
    include?: Prisma.COMENTARIOSInclude<ExtArgs> | null;
    where?: Prisma.COMENTARIOSWhereInput;
};
export type REPORTES$GRUPOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GRUPOSSelect<ExtArgs> | null;
    omit?: Prisma.GRUPOSOmit<ExtArgs> | null;
    include?: Prisma.GRUPOSInclude<ExtArgs> | null;
    where?: Prisma.GRUPOSWhereInput;
};
export type REPORTES$PUBLICACIONESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PUBLICACIONESSelect<ExtArgs> | null;
    omit?: Prisma.PUBLICACIONESOmit<ExtArgs> | null;
    include?: Prisma.PUBLICACIONESInclude<ExtArgs> | null;
    where?: Prisma.PUBLICACIONESWhereInput;
};
export type REPORTES$USUARIOS_REPORTES_revisado_porToUSUARIOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.USUARIOSSelect<ExtArgs> | null;
    omit?: Prisma.USUARIOSOmit<ExtArgs> | null;
    include?: Prisma.USUARIOSInclude<ExtArgs> | null;
    where?: Prisma.USUARIOSWhereInput;
};
export type REPORTES$USUARIOS_REPORTES_usuario_reportado_idToUSUARIOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.USUARIOSSelect<ExtArgs> | null;
    omit?: Prisma.USUARIOSOmit<ExtArgs> | null;
    include?: Prisma.USUARIOSInclude<ExtArgs> | null;
    where?: Prisma.USUARIOSWhereInput;
};
export type REPORTES$SANCIONESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type REPORTESDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.REPORTESSelect<ExtArgs> | null;
    omit?: Prisma.REPORTESOmit<ExtArgs> | null;
    include?: Prisma.REPORTESInclude<ExtArgs> | null;
};
