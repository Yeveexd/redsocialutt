import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PERFILESModel = runtime.Types.Result.DefaultSelection<Prisma.$PERFILESPayload>;
export type AggregatePERFILES = {
    _count: PERFILESCountAggregateOutputType | null;
    _avg: PERFILESAvgAggregateOutputType | null;
    _sum: PERFILESSumAggregateOutputType | null;
    _min: PERFILESMinAggregateOutputType | null;
    _max: PERFILESMaxAggregateOutputType | null;
};
export type PERFILESAvgAggregateOutputType = {
    carrera_id: number | null;
    cuatrimestre: number | null;
};
export type PERFILESSumAggregateOutputType = {
    carrera_id: number | null;
    cuatrimestre: number | null;
};
export type PERFILESMinAggregateOutputType = {
    id: string | null;
    usuario_id: string | null;
    nombre: string | null;
    apellidos: string | null;
    matricula: string | null;
    carrera_id: number | null;
    cuatrimestre: number | null;
    biografia: string | null;
    avatar_url: string | null;
    color_fondo_perfil: string | null;
    perfil_privado: boolean | null;
};
export type PERFILESMaxAggregateOutputType = {
    id: string | null;
    usuario_id: string | null;
    nombre: string | null;
    apellidos: string | null;
    matricula: string | null;
    carrera_id: number | null;
    cuatrimestre: number | null;
    biografia: string | null;
    avatar_url: string | null;
    color_fondo_perfil: string | null;
    perfil_privado: boolean | null;
};
export type PERFILESCountAggregateOutputType = {
    id: number;
    usuario_id: number;
    nombre: number;
    apellidos: number;
    matricula: number;
    carrera_id: number;
    cuatrimestre: number;
    biografia: number;
    avatar_url: number;
    color_fondo_perfil: number;
    perfil_privado: number;
    _all: number;
};
export type PERFILESAvgAggregateInputType = {
    carrera_id?: true;
    cuatrimestre?: true;
};
export type PERFILESSumAggregateInputType = {
    carrera_id?: true;
    cuatrimestre?: true;
};
export type PERFILESMinAggregateInputType = {
    id?: true;
    usuario_id?: true;
    nombre?: true;
    apellidos?: true;
    matricula?: true;
    carrera_id?: true;
    cuatrimestre?: true;
    biografia?: true;
    avatar_url?: true;
    color_fondo_perfil?: true;
    perfil_privado?: true;
};
export type PERFILESMaxAggregateInputType = {
    id?: true;
    usuario_id?: true;
    nombre?: true;
    apellidos?: true;
    matricula?: true;
    carrera_id?: true;
    cuatrimestre?: true;
    biografia?: true;
    avatar_url?: true;
    color_fondo_perfil?: true;
    perfil_privado?: true;
};
export type PERFILESCountAggregateInputType = {
    id?: true;
    usuario_id?: true;
    nombre?: true;
    apellidos?: true;
    matricula?: true;
    carrera_id?: true;
    cuatrimestre?: true;
    biografia?: true;
    avatar_url?: true;
    color_fondo_perfil?: true;
    perfil_privado?: true;
    _all?: true;
};
export type PERFILESAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PERFILESWhereInput;
    orderBy?: Prisma.PERFILESOrderByWithRelationInput | Prisma.PERFILESOrderByWithRelationInput[];
    cursor?: Prisma.PERFILESWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PERFILESCountAggregateInputType;
    _avg?: PERFILESAvgAggregateInputType;
    _sum?: PERFILESSumAggregateInputType;
    _min?: PERFILESMinAggregateInputType;
    _max?: PERFILESMaxAggregateInputType;
};
export type GetPERFILESAggregateType<T extends PERFILESAggregateArgs> = {
    [P in keyof T & keyof AggregatePERFILES]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePERFILES[P]> : Prisma.GetScalarType<T[P], AggregatePERFILES[P]>;
};
export type PERFILESGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PERFILESWhereInput;
    orderBy?: Prisma.PERFILESOrderByWithAggregationInput | Prisma.PERFILESOrderByWithAggregationInput[];
    by: Prisma.PERFILESScalarFieldEnum[] | Prisma.PERFILESScalarFieldEnum;
    having?: Prisma.PERFILESScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PERFILESCountAggregateInputType | true;
    _avg?: PERFILESAvgAggregateInputType;
    _sum?: PERFILESSumAggregateInputType;
    _min?: PERFILESMinAggregateInputType;
    _max?: PERFILESMaxAggregateInputType;
};
export type PERFILESGroupByOutputType = {
    id: string;
    usuario_id: string;
    nombre: string;
    apellidos: string;
    matricula: string | null;
    carrera_id: number | null;
    cuatrimestre: number | null;
    biografia: string | null;
    avatar_url: string | null;
    color_fondo_perfil: string | null;
    perfil_privado: boolean;
    _count: PERFILESCountAggregateOutputType | null;
    _avg: PERFILESAvgAggregateOutputType | null;
    _sum: PERFILESSumAggregateOutputType | null;
    _min: PERFILESMinAggregateOutputType | null;
    _max: PERFILESMaxAggregateOutputType | null;
};
export type GetPERFILESGroupByPayload<T extends PERFILESGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PERFILESGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PERFILESGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PERFILESGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PERFILESGroupByOutputType[P]>;
}>>;
export type PERFILESWhereInput = {
    AND?: Prisma.PERFILESWhereInput | Prisma.PERFILESWhereInput[];
    OR?: Prisma.PERFILESWhereInput[];
    NOT?: Prisma.PERFILESWhereInput | Prisma.PERFILESWhereInput[];
    id?: Prisma.UuidFilter<"PERFILES"> | string;
    usuario_id?: Prisma.UuidFilter<"PERFILES"> | string;
    nombre?: Prisma.StringFilter<"PERFILES"> | string;
    apellidos?: Prisma.StringFilter<"PERFILES"> | string;
    matricula?: Prisma.StringNullableFilter<"PERFILES"> | string | null;
    carrera_id?: Prisma.IntNullableFilter<"PERFILES"> | number | null;
    cuatrimestre?: Prisma.IntNullableFilter<"PERFILES"> | number | null;
    biografia?: Prisma.StringNullableFilter<"PERFILES"> | string | null;
    avatar_url?: Prisma.StringNullableFilter<"PERFILES"> | string | null;
    color_fondo_perfil?: Prisma.StringNullableFilter<"PERFILES"> | string | null;
    perfil_privado?: Prisma.BoolFilter<"PERFILES"> | boolean;
    AMISTADES_AMISTADES_receptor_idToPERFILES?: Prisma.AMISTADESListRelationFilter;
    AMISTADES_AMISTADES_solicitante_idToPERFILES?: Prisma.AMISTADESListRelationFilter;
    CARRERAS?: Prisma.XOR<Prisma.CARRERASNullableScalarRelationFilter, Prisma.CARRERASWhereInput> | null;
    USUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
};
export type PERFILESOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellidos?: Prisma.SortOrder;
    matricula?: Prisma.SortOrderInput | Prisma.SortOrder;
    carrera_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    cuatrimestre?: Prisma.SortOrderInput | Prisma.SortOrder;
    biografia?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatar_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    color_fondo_perfil?: Prisma.SortOrderInput | Prisma.SortOrder;
    perfil_privado?: Prisma.SortOrder;
    AMISTADES_AMISTADES_receptor_idToPERFILES?: Prisma.AMISTADESOrderByRelationAggregateInput;
    AMISTADES_AMISTADES_solicitante_idToPERFILES?: Prisma.AMISTADESOrderByRelationAggregateInput;
    CARRERAS?: Prisma.CARRERASOrderByWithRelationInput;
    USUARIOS?: Prisma.USUARIOSOrderByWithRelationInput;
};
export type PERFILESWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    usuario_id?: string;
    matricula?: string;
    AND?: Prisma.PERFILESWhereInput | Prisma.PERFILESWhereInput[];
    OR?: Prisma.PERFILESWhereInput[];
    NOT?: Prisma.PERFILESWhereInput | Prisma.PERFILESWhereInput[];
    nombre?: Prisma.StringFilter<"PERFILES"> | string;
    apellidos?: Prisma.StringFilter<"PERFILES"> | string;
    carrera_id?: Prisma.IntNullableFilter<"PERFILES"> | number | null;
    cuatrimestre?: Prisma.IntNullableFilter<"PERFILES"> | number | null;
    biografia?: Prisma.StringNullableFilter<"PERFILES"> | string | null;
    avatar_url?: Prisma.StringNullableFilter<"PERFILES"> | string | null;
    color_fondo_perfil?: Prisma.StringNullableFilter<"PERFILES"> | string | null;
    perfil_privado?: Prisma.BoolFilter<"PERFILES"> | boolean;
    AMISTADES_AMISTADES_receptor_idToPERFILES?: Prisma.AMISTADESListRelationFilter;
    AMISTADES_AMISTADES_solicitante_idToPERFILES?: Prisma.AMISTADESListRelationFilter;
    CARRERAS?: Prisma.XOR<Prisma.CARRERASNullableScalarRelationFilter, Prisma.CARRERASWhereInput> | null;
    USUARIOS?: Prisma.XOR<Prisma.USUARIOSScalarRelationFilter, Prisma.USUARIOSWhereInput>;
}, "id" | "usuario_id" | "matricula">;
export type PERFILESOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellidos?: Prisma.SortOrder;
    matricula?: Prisma.SortOrderInput | Prisma.SortOrder;
    carrera_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    cuatrimestre?: Prisma.SortOrderInput | Prisma.SortOrder;
    biografia?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatar_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    color_fondo_perfil?: Prisma.SortOrderInput | Prisma.SortOrder;
    perfil_privado?: Prisma.SortOrder;
    _count?: Prisma.PERFILESCountOrderByAggregateInput;
    _avg?: Prisma.PERFILESAvgOrderByAggregateInput;
    _max?: Prisma.PERFILESMaxOrderByAggregateInput;
    _min?: Prisma.PERFILESMinOrderByAggregateInput;
    _sum?: Prisma.PERFILESSumOrderByAggregateInput;
};
export type PERFILESScalarWhereWithAggregatesInput = {
    AND?: Prisma.PERFILESScalarWhereWithAggregatesInput | Prisma.PERFILESScalarWhereWithAggregatesInput[];
    OR?: Prisma.PERFILESScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PERFILESScalarWhereWithAggregatesInput | Prisma.PERFILESScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PERFILES"> | string;
    usuario_id?: Prisma.UuidWithAggregatesFilter<"PERFILES"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"PERFILES"> | string;
    apellidos?: Prisma.StringWithAggregatesFilter<"PERFILES"> | string;
    matricula?: Prisma.StringNullableWithAggregatesFilter<"PERFILES"> | string | null;
    carrera_id?: Prisma.IntNullableWithAggregatesFilter<"PERFILES"> | number | null;
    cuatrimestre?: Prisma.IntNullableWithAggregatesFilter<"PERFILES"> | number | null;
    biografia?: Prisma.StringNullableWithAggregatesFilter<"PERFILES"> | string | null;
    avatar_url?: Prisma.StringNullableWithAggregatesFilter<"PERFILES"> | string | null;
    color_fondo_perfil?: Prisma.StringNullableWithAggregatesFilter<"PERFILES"> | string | null;
    perfil_privado?: Prisma.BoolWithAggregatesFilter<"PERFILES"> | boolean;
};
export type PERFILESCreateInput = {
    id?: string;
    nombre: string;
    apellidos: string;
    matricula?: string | null;
    cuatrimestre?: number | null;
    biografia?: string | null;
    avatar_url?: string | null;
    color_fondo_perfil?: string | null;
    perfil_privado?: boolean;
    AMISTADES_AMISTADES_receptor_idToPERFILES?: Prisma.AMISTADESCreateNestedManyWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput;
    AMISTADES_AMISTADES_solicitante_idToPERFILES?: Prisma.AMISTADESCreateNestedManyWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput;
    CARRERAS?: Prisma.CARRERASCreateNestedOneWithoutPERFILESInput;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutPERFILESInput;
};
export type PERFILESUncheckedCreateInput = {
    id?: string;
    usuario_id: string;
    nombre: string;
    apellidos: string;
    matricula?: string | null;
    carrera_id?: number | null;
    cuatrimestre?: number | null;
    biografia?: string | null;
    avatar_url?: string | null;
    color_fondo_perfil?: string | null;
    perfil_privado?: boolean;
    AMISTADES_AMISTADES_receptor_idToPERFILES?: Prisma.AMISTADESUncheckedCreateNestedManyWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput;
    AMISTADES_AMISTADES_solicitante_idToPERFILES?: Prisma.AMISTADESUncheckedCreateNestedManyWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput;
};
export type PERFILESUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    biografia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color_fondo_perfil?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    perfil_privado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    AMISTADES_AMISTADES_receptor_idToPERFILES?: Prisma.AMISTADESUpdateManyWithoutPERFILES_AMISTADES_receptor_idToPERFILESNestedInput;
    AMISTADES_AMISTADES_solicitante_idToPERFILES?: Prisma.AMISTADESUpdateManyWithoutPERFILES_AMISTADES_solicitante_idToPERFILESNestedInput;
    CARRERAS?: Prisma.CARRERASUpdateOneWithoutPERFILESNestedInput;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutPERFILESNestedInput;
};
export type PERFILESUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    carrera_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    biografia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color_fondo_perfil?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    perfil_privado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    AMISTADES_AMISTADES_receptor_idToPERFILES?: Prisma.AMISTADESUncheckedUpdateManyWithoutPERFILES_AMISTADES_receptor_idToPERFILESNestedInput;
    AMISTADES_AMISTADES_solicitante_idToPERFILES?: Prisma.AMISTADESUncheckedUpdateManyWithoutPERFILES_AMISTADES_solicitante_idToPERFILESNestedInput;
};
export type PERFILESCreateManyInput = {
    id?: string;
    usuario_id: string;
    nombre: string;
    apellidos: string;
    matricula?: string | null;
    carrera_id?: number | null;
    cuatrimestre?: number | null;
    biografia?: string | null;
    avatar_url?: string | null;
    color_fondo_perfil?: string | null;
    perfil_privado?: boolean;
};
export type PERFILESUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    biografia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color_fondo_perfil?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    perfil_privado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PERFILESUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    carrera_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    biografia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color_fondo_perfil?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    perfil_privado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PERFILESScalarRelationFilter = {
    is?: Prisma.PERFILESWhereInput;
    isNot?: Prisma.PERFILESWhereInput;
};
export type PERFILESListRelationFilter = {
    every?: Prisma.PERFILESWhereInput;
    some?: Prisma.PERFILESWhereInput;
    none?: Prisma.PERFILESWhereInput;
};
export type PERFILESOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PERFILESCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellidos?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    carrera_id?: Prisma.SortOrder;
    cuatrimestre?: Prisma.SortOrder;
    biografia?: Prisma.SortOrder;
    avatar_url?: Prisma.SortOrder;
    color_fondo_perfil?: Prisma.SortOrder;
    perfil_privado?: Prisma.SortOrder;
};
export type PERFILESAvgOrderByAggregateInput = {
    carrera_id?: Prisma.SortOrder;
    cuatrimestre?: Prisma.SortOrder;
};
export type PERFILESMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellidos?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    carrera_id?: Prisma.SortOrder;
    cuatrimestre?: Prisma.SortOrder;
    biografia?: Prisma.SortOrder;
    avatar_url?: Prisma.SortOrder;
    color_fondo_perfil?: Prisma.SortOrder;
    perfil_privado?: Prisma.SortOrder;
};
export type PERFILESMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellidos?: Prisma.SortOrder;
    matricula?: Prisma.SortOrder;
    carrera_id?: Prisma.SortOrder;
    cuatrimestre?: Prisma.SortOrder;
    biografia?: Prisma.SortOrder;
    avatar_url?: Prisma.SortOrder;
    color_fondo_perfil?: Prisma.SortOrder;
    perfil_privado?: Prisma.SortOrder;
};
export type PERFILESSumOrderByAggregateInput = {
    carrera_id?: Prisma.SortOrder;
    cuatrimestre?: Prisma.SortOrder;
};
export type PERFILESNullableScalarRelationFilter = {
    is?: Prisma.PERFILESWhereInput | null;
    isNot?: Prisma.PERFILESWhereInput | null;
};
export type PERFILESCreateNestedOneWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput = {
    create?: Prisma.XOR<Prisma.PERFILESCreateWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput, Prisma.PERFILESUncheckedCreateWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput>;
    connectOrCreate?: Prisma.PERFILESCreateOrConnectWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput;
    connect?: Prisma.PERFILESWhereUniqueInput;
};
export type PERFILESCreateNestedOneWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput = {
    create?: Prisma.XOR<Prisma.PERFILESCreateWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput, Prisma.PERFILESUncheckedCreateWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput>;
    connectOrCreate?: Prisma.PERFILESCreateOrConnectWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput;
    connect?: Prisma.PERFILESWhereUniqueInput;
};
export type PERFILESUpdateOneRequiredWithoutAMISTADES_AMISTADES_receptor_idToPERFILESNestedInput = {
    create?: Prisma.XOR<Prisma.PERFILESCreateWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput, Prisma.PERFILESUncheckedCreateWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput>;
    connectOrCreate?: Prisma.PERFILESCreateOrConnectWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput;
    upsert?: Prisma.PERFILESUpsertWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput;
    connect?: Prisma.PERFILESWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PERFILESUpdateToOneWithWhereWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput, Prisma.PERFILESUpdateWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput>, Prisma.PERFILESUncheckedUpdateWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput>;
};
export type PERFILESUpdateOneRequiredWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESNestedInput = {
    create?: Prisma.XOR<Prisma.PERFILESCreateWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput, Prisma.PERFILESUncheckedCreateWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput>;
    connectOrCreate?: Prisma.PERFILESCreateOrConnectWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput;
    upsert?: Prisma.PERFILESUpsertWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput;
    connect?: Prisma.PERFILESWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PERFILESUpdateToOneWithWhereWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput, Prisma.PERFILESUpdateWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput>, Prisma.PERFILESUncheckedUpdateWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput>;
};
export type PERFILESCreateNestedManyWithoutCARRERASInput = {
    create?: Prisma.XOR<Prisma.PERFILESCreateWithoutCARRERASInput, Prisma.PERFILESUncheckedCreateWithoutCARRERASInput> | Prisma.PERFILESCreateWithoutCARRERASInput[] | Prisma.PERFILESUncheckedCreateWithoutCARRERASInput[];
    connectOrCreate?: Prisma.PERFILESCreateOrConnectWithoutCARRERASInput | Prisma.PERFILESCreateOrConnectWithoutCARRERASInput[];
    createMany?: Prisma.PERFILESCreateManyCARRERASInputEnvelope;
    connect?: Prisma.PERFILESWhereUniqueInput | Prisma.PERFILESWhereUniqueInput[];
};
export type PERFILESUncheckedCreateNestedManyWithoutCARRERASInput = {
    create?: Prisma.XOR<Prisma.PERFILESCreateWithoutCARRERASInput, Prisma.PERFILESUncheckedCreateWithoutCARRERASInput> | Prisma.PERFILESCreateWithoutCARRERASInput[] | Prisma.PERFILESUncheckedCreateWithoutCARRERASInput[];
    connectOrCreate?: Prisma.PERFILESCreateOrConnectWithoutCARRERASInput | Prisma.PERFILESCreateOrConnectWithoutCARRERASInput[];
    createMany?: Prisma.PERFILESCreateManyCARRERASInputEnvelope;
    connect?: Prisma.PERFILESWhereUniqueInput | Prisma.PERFILESWhereUniqueInput[];
};
export type PERFILESUpdateManyWithoutCARRERASNestedInput = {
    create?: Prisma.XOR<Prisma.PERFILESCreateWithoutCARRERASInput, Prisma.PERFILESUncheckedCreateWithoutCARRERASInput> | Prisma.PERFILESCreateWithoutCARRERASInput[] | Prisma.PERFILESUncheckedCreateWithoutCARRERASInput[];
    connectOrCreate?: Prisma.PERFILESCreateOrConnectWithoutCARRERASInput | Prisma.PERFILESCreateOrConnectWithoutCARRERASInput[];
    upsert?: Prisma.PERFILESUpsertWithWhereUniqueWithoutCARRERASInput | Prisma.PERFILESUpsertWithWhereUniqueWithoutCARRERASInput[];
    createMany?: Prisma.PERFILESCreateManyCARRERASInputEnvelope;
    set?: Prisma.PERFILESWhereUniqueInput | Prisma.PERFILESWhereUniqueInput[];
    disconnect?: Prisma.PERFILESWhereUniqueInput | Prisma.PERFILESWhereUniqueInput[];
    delete?: Prisma.PERFILESWhereUniqueInput | Prisma.PERFILESWhereUniqueInput[];
    connect?: Prisma.PERFILESWhereUniqueInput | Prisma.PERFILESWhereUniqueInput[];
    update?: Prisma.PERFILESUpdateWithWhereUniqueWithoutCARRERASInput | Prisma.PERFILESUpdateWithWhereUniqueWithoutCARRERASInput[];
    updateMany?: Prisma.PERFILESUpdateManyWithWhereWithoutCARRERASInput | Prisma.PERFILESUpdateManyWithWhereWithoutCARRERASInput[];
    deleteMany?: Prisma.PERFILESScalarWhereInput | Prisma.PERFILESScalarWhereInput[];
};
export type PERFILESUncheckedUpdateManyWithoutCARRERASNestedInput = {
    create?: Prisma.XOR<Prisma.PERFILESCreateWithoutCARRERASInput, Prisma.PERFILESUncheckedCreateWithoutCARRERASInput> | Prisma.PERFILESCreateWithoutCARRERASInput[] | Prisma.PERFILESUncheckedCreateWithoutCARRERASInput[];
    connectOrCreate?: Prisma.PERFILESCreateOrConnectWithoutCARRERASInput | Prisma.PERFILESCreateOrConnectWithoutCARRERASInput[];
    upsert?: Prisma.PERFILESUpsertWithWhereUniqueWithoutCARRERASInput | Prisma.PERFILESUpsertWithWhereUniqueWithoutCARRERASInput[];
    createMany?: Prisma.PERFILESCreateManyCARRERASInputEnvelope;
    set?: Prisma.PERFILESWhereUniqueInput | Prisma.PERFILESWhereUniqueInput[];
    disconnect?: Prisma.PERFILESWhereUniqueInput | Prisma.PERFILESWhereUniqueInput[];
    delete?: Prisma.PERFILESWhereUniqueInput | Prisma.PERFILESWhereUniqueInput[];
    connect?: Prisma.PERFILESWhereUniqueInput | Prisma.PERFILESWhereUniqueInput[];
    update?: Prisma.PERFILESUpdateWithWhereUniqueWithoutCARRERASInput | Prisma.PERFILESUpdateWithWhereUniqueWithoutCARRERASInput[];
    updateMany?: Prisma.PERFILESUpdateManyWithWhereWithoutCARRERASInput | Prisma.PERFILESUpdateManyWithWhereWithoutCARRERASInput[];
    deleteMany?: Prisma.PERFILESScalarWhereInput | Prisma.PERFILESScalarWhereInput[];
};
export type PERFILESCreateNestedOneWithoutUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.PERFILESCreateWithoutUSUARIOSInput, Prisma.PERFILESUncheckedCreateWithoutUSUARIOSInput>;
    connectOrCreate?: Prisma.PERFILESCreateOrConnectWithoutUSUARIOSInput;
    connect?: Prisma.PERFILESWhereUniqueInput;
};
export type PERFILESUncheckedCreateNestedOneWithoutUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.PERFILESCreateWithoutUSUARIOSInput, Prisma.PERFILESUncheckedCreateWithoutUSUARIOSInput>;
    connectOrCreate?: Prisma.PERFILESCreateOrConnectWithoutUSUARIOSInput;
    connect?: Prisma.PERFILESWhereUniqueInput;
};
export type PERFILESUpdateOneWithoutUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.PERFILESCreateWithoutUSUARIOSInput, Prisma.PERFILESUncheckedCreateWithoutUSUARIOSInput>;
    connectOrCreate?: Prisma.PERFILESCreateOrConnectWithoutUSUARIOSInput;
    upsert?: Prisma.PERFILESUpsertWithoutUSUARIOSInput;
    disconnect?: Prisma.PERFILESWhereInput | boolean;
    delete?: Prisma.PERFILESWhereInput | boolean;
    connect?: Prisma.PERFILESWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PERFILESUpdateToOneWithWhereWithoutUSUARIOSInput, Prisma.PERFILESUpdateWithoutUSUARIOSInput>, Prisma.PERFILESUncheckedUpdateWithoutUSUARIOSInput>;
};
export type PERFILESUncheckedUpdateOneWithoutUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.PERFILESCreateWithoutUSUARIOSInput, Prisma.PERFILESUncheckedCreateWithoutUSUARIOSInput>;
    connectOrCreate?: Prisma.PERFILESCreateOrConnectWithoutUSUARIOSInput;
    upsert?: Prisma.PERFILESUpsertWithoutUSUARIOSInput;
    disconnect?: Prisma.PERFILESWhereInput | boolean;
    delete?: Prisma.PERFILESWhereInput | boolean;
    connect?: Prisma.PERFILESWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PERFILESUpdateToOneWithWhereWithoutUSUARIOSInput, Prisma.PERFILESUpdateWithoutUSUARIOSInput>, Prisma.PERFILESUncheckedUpdateWithoutUSUARIOSInput>;
};
export type PERFILESCreateWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput = {
    id?: string;
    nombre: string;
    apellidos: string;
    matricula?: string | null;
    cuatrimestre?: number | null;
    biografia?: string | null;
    avatar_url?: string | null;
    color_fondo_perfil?: string | null;
    perfil_privado?: boolean;
    AMISTADES_AMISTADES_solicitante_idToPERFILES?: Prisma.AMISTADESCreateNestedManyWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput;
    CARRERAS?: Prisma.CARRERASCreateNestedOneWithoutPERFILESInput;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutPERFILESInput;
};
export type PERFILESUncheckedCreateWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput = {
    id?: string;
    usuario_id: string;
    nombre: string;
    apellidos: string;
    matricula?: string | null;
    carrera_id?: number | null;
    cuatrimestre?: number | null;
    biografia?: string | null;
    avatar_url?: string | null;
    color_fondo_perfil?: string | null;
    perfil_privado?: boolean;
    AMISTADES_AMISTADES_solicitante_idToPERFILES?: Prisma.AMISTADESUncheckedCreateNestedManyWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput;
};
export type PERFILESCreateOrConnectWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput = {
    where: Prisma.PERFILESWhereUniqueInput;
    create: Prisma.XOR<Prisma.PERFILESCreateWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput, Prisma.PERFILESUncheckedCreateWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput>;
};
export type PERFILESCreateWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput = {
    id?: string;
    nombre: string;
    apellidos: string;
    matricula?: string | null;
    cuatrimestre?: number | null;
    biografia?: string | null;
    avatar_url?: string | null;
    color_fondo_perfil?: string | null;
    perfil_privado?: boolean;
    AMISTADES_AMISTADES_receptor_idToPERFILES?: Prisma.AMISTADESCreateNestedManyWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput;
    CARRERAS?: Prisma.CARRERASCreateNestedOneWithoutPERFILESInput;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutPERFILESInput;
};
export type PERFILESUncheckedCreateWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput = {
    id?: string;
    usuario_id: string;
    nombre: string;
    apellidos: string;
    matricula?: string | null;
    carrera_id?: number | null;
    cuatrimestre?: number | null;
    biografia?: string | null;
    avatar_url?: string | null;
    color_fondo_perfil?: string | null;
    perfil_privado?: boolean;
    AMISTADES_AMISTADES_receptor_idToPERFILES?: Prisma.AMISTADESUncheckedCreateNestedManyWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput;
};
export type PERFILESCreateOrConnectWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput = {
    where: Prisma.PERFILESWhereUniqueInput;
    create: Prisma.XOR<Prisma.PERFILESCreateWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput, Prisma.PERFILESUncheckedCreateWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput>;
};
export type PERFILESUpsertWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput = {
    update: Prisma.XOR<Prisma.PERFILESUpdateWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput, Prisma.PERFILESUncheckedUpdateWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput>;
    create: Prisma.XOR<Prisma.PERFILESCreateWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput, Prisma.PERFILESUncheckedCreateWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput>;
    where?: Prisma.PERFILESWhereInput;
};
export type PERFILESUpdateToOneWithWhereWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput = {
    where?: Prisma.PERFILESWhereInput;
    data: Prisma.XOR<Prisma.PERFILESUpdateWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput, Prisma.PERFILESUncheckedUpdateWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput>;
};
export type PERFILESUpdateWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    biografia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color_fondo_perfil?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    perfil_privado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    AMISTADES_AMISTADES_solicitante_idToPERFILES?: Prisma.AMISTADESUpdateManyWithoutPERFILES_AMISTADES_solicitante_idToPERFILESNestedInput;
    CARRERAS?: Prisma.CARRERASUpdateOneWithoutPERFILESNestedInput;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutPERFILESNestedInput;
};
export type PERFILESUncheckedUpdateWithoutAMISTADES_AMISTADES_receptor_idToPERFILESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    carrera_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    biografia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color_fondo_perfil?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    perfil_privado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    AMISTADES_AMISTADES_solicitante_idToPERFILES?: Prisma.AMISTADESUncheckedUpdateManyWithoutPERFILES_AMISTADES_solicitante_idToPERFILESNestedInput;
};
export type PERFILESUpsertWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput = {
    update: Prisma.XOR<Prisma.PERFILESUpdateWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput, Prisma.PERFILESUncheckedUpdateWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput>;
    create: Prisma.XOR<Prisma.PERFILESCreateWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput, Prisma.PERFILESUncheckedCreateWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput>;
    where?: Prisma.PERFILESWhereInput;
};
export type PERFILESUpdateToOneWithWhereWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput = {
    where?: Prisma.PERFILESWhereInput;
    data: Prisma.XOR<Prisma.PERFILESUpdateWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput, Prisma.PERFILESUncheckedUpdateWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput>;
};
export type PERFILESUpdateWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    biografia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color_fondo_perfil?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    perfil_privado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    AMISTADES_AMISTADES_receptor_idToPERFILES?: Prisma.AMISTADESUpdateManyWithoutPERFILES_AMISTADES_receptor_idToPERFILESNestedInput;
    CARRERAS?: Prisma.CARRERASUpdateOneWithoutPERFILESNestedInput;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutPERFILESNestedInput;
};
export type PERFILESUncheckedUpdateWithoutAMISTADES_AMISTADES_solicitante_idToPERFILESInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    carrera_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    biografia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color_fondo_perfil?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    perfil_privado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    AMISTADES_AMISTADES_receptor_idToPERFILES?: Prisma.AMISTADESUncheckedUpdateManyWithoutPERFILES_AMISTADES_receptor_idToPERFILESNestedInput;
};
export type PERFILESCreateWithoutCARRERASInput = {
    id?: string;
    nombre: string;
    apellidos: string;
    matricula?: string | null;
    cuatrimestre?: number | null;
    biografia?: string | null;
    avatar_url?: string | null;
    color_fondo_perfil?: string | null;
    perfil_privado?: boolean;
    AMISTADES_AMISTADES_receptor_idToPERFILES?: Prisma.AMISTADESCreateNestedManyWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput;
    AMISTADES_AMISTADES_solicitante_idToPERFILES?: Prisma.AMISTADESCreateNestedManyWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput;
    USUARIOS: Prisma.USUARIOSCreateNestedOneWithoutPERFILESInput;
};
export type PERFILESUncheckedCreateWithoutCARRERASInput = {
    id?: string;
    usuario_id: string;
    nombre: string;
    apellidos: string;
    matricula?: string | null;
    cuatrimestre?: number | null;
    biografia?: string | null;
    avatar_url?: string | null;
    color_fondo_perfil?: string | null;
    perfil_privado?: boolean;
    AMISTADES_AMISTADES_receptor_idToPERFILES?: Prisma.AMISTADESUncheckedCreateNestedManyWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput;
    AMISTADES_AMISTADES_solicitante_idToPERFILES?: Prisma.AMISTADESUncheckedCreateNestedManyWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput;
};
export type PERFILESCreateOrConnectWithoutCARRERASInput = {
    where: Prisma.PERFILESWhereUniqueInput;
    create: Prisma.XOR<Prisma.PERFILESCreateWithoutCARRERASInput, Prisma.PERFILESUncheckedCreateWithoutCARRERASInput>;
};
export type PERFILESCreateManyCARRERASInputEnvelope = {
    data: Prisma.PERFILESCreateManyCARRERASInput | Prisma.PERFILESCreateManyCARRERASInput[];
    skipDuplicates?: boolean;
};
export type PERFILESUpsertWithWhereUniqueWithoutCARRERASInput = {
    where: Prisma.PERFILESWhereUniqueInput;
    update: Prisma.XOR<Prisma.PERFILESUpdateWithoutCARRERASInput, Prisma.PERFILESUncheckedUpdateWithoutCARRERASInput>;
    create: Prisma.XOR<Prisma.PERFILESCreateWithoutCARRERASInput, Prisma.PERFILESUncheckedCreateWithoutCARRERASInput>;
};
export type PERFILESUpdateWithWhereUniqueWithoutCARRERASInput = {
    where: Prisma.PERFILESWhereUniqueInput;
    data: Prisma.XOR<Prisma.PERFILESUpdateWithoutCARRERASInput, Prisma.PERFILESUncheckedUpdateWithoutCARRERASInput>;
};
export type PERFILESUpdateManyWithWhereWithoutCARRERASInput = {
    where: Prisma.PERFILESScalarWhereInput;
    data: Prisma.XOR<Prisma.PERFILESUpdateManyMutationInput, Prisma.PERFILESUncheckedUpdateManyWithoutCARRERASInput>;
};
export type PERFILESScalarWhereInput = {
    AND?: Prisma.PERFILESScalarWhereInput | Prisma.PERFILESScalarWhereInput[];
    OR?: Prisma.PERFILESScalarWhereInput[];
    NOT?: Prisma.PERFILESScalarWhereInput | Prisma.PERFILESScalarWhereInput[];
    id?: Prisma.UuidFilter<"PERFILES"> | string;
    usuario_id?: Prisma.UuidFilter<"PERFILES"> | string;
    nombre?: Prisma.StringFilter<"PERFILES"> | string;
    apellidos?: Prisma.StringFilter<"PERFILES"> | string;
    matricula?: Prisma.StringNullableFilter<"PERFILES"> | string | null;
    carrera_id?: Prisma.IntNullableFilter<"PERFILES"> | number | null;
    cuatrimestre?: Prisma.IntNullableFilter<"PERFILES"> | number | null;
    biografia?: Prisma.StringNullableFilter<"PERFILES"> | string | null;
    avatar_url?: Prisma.StringNullableFilter<"PERFILES"> | string | null;
    color_fondo_perfil?: Prisma.StringNullableFilter<"PERFILES"> | string | null;
    perfil_privado?: Prisma.BoolFilter<"PERFILES"> | boolean;
};
export type PERFILESCreateWithoutUSUARIOSInput = {
    id?: string;
    nombre: string;
    apellidos: string;
    matricula?: string | null;
    cuatrimestre?: number | null;
    biografia?: string | null;
    avatar_url?: string | null;
    color_fondo_perfil?: string | null;
    perfil_privado?: boolean;
    AMISTADES_AMISTADES_receptor_idToPERFILES?: Prisma.AMISTADESCreateNestedManyWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput;
    AMISTADES_AMISTADES_solicitante_idToPERFILES?: Prisma.AMISTADESCreateNestedManyWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput;
    CARRERAS?: Prisma.CARRERASCreateNestedOneWithoutPERFILESInput;
};
export type PERFILESUncheckedCreateWithoutUSUARIOSInput = {
    id?: string;
    nombre: string;
    apellidos: string;
    matricula?: string | null;
    carrera_id?: number | null;
    cuatrimestre?: number | null;
    biografia?: string | null;
    avatar_url?: string | null;
    color_fondo_perfil?: string | null;
    perfil_privado?: boolean;
    AMISTADES_AMISTADES_receptor_idToPERFILES?: Prisma.AMISTADESUncheckedCreateNestedManyWithoutPERFILES_AMISTADES_receptor_idToPERFILESInput;
    AMISTADES_AMISTADES_solicitante_idToPERFILES?: Prisma.AMISTADESUncheckedCreateNestedManyWithoutPERFILES_AMISTADES_solicitante_idToPERFILESInput;
};
export type PERFILESCreateOrConnectWithoutUSUARIOSInput = {
    where: Prisma.PERFILESWhereUniqueInput;
    create: Prisma.XOR<Prisma.PERFILESCreateWithoutUSUARIOSInput, Prisma.PERFILESUncheckedCreateWithoutUSUARIOSInput>;
};
export type PERFILESUpsertWithoutUSUARIOSInput = {
    update: Prisma.XOR<Prisma.PERFILESUpdateWithoutUSUARIOSInput, Prisma.PERFILESUncheckedUpdateWithoutUSUARIOSInput>;
    create: Prisma.XOR<Prisma.PERFILESCreateWithoutUSUARIOSInput, Prisma.PERFILESUncheckedCreateWithoutUSUARIOSInput>;
    where?: Prisma.PERFILESWhereInput;
};
export type PERFILESUpdateToOneWithWhereWithoutUSUARIOSInput = {
    where?: Prisma.PERFILESWhereInput;
    data: Prisma.XOR<Prisma.PERFILESUpdateWithoutUSUARIOSInput, Prisma.PERFILESUncheckedUpdateWithoutUSUARIOSInput>;
};
export type PERFILESUpdateWithoutUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    biografia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color_fondo_perfil?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    perfil_privado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    AMISTADES_AMISTADES_receptor_idToPERFILES?: Prisma.AMISTADESUpdateManyWithoutPERFILES_AMISTADES_receptor_idToPERFILESNestedInput;
    AMISTADES_AMISTADES_solicitante_idToPERFILES?: Prisma.AMISTADESUpdateManyWithoutPERFILES_AMISTADES_solicitante_idToPERFILESNestedInput;
    CARRERAS?: Prisma.CARRERASUpdateOneWithoutPERFILESNestedInput;
};
export type PERFILESUncheckedUpdateWithoutUSUARIOSInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    carrera_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    biografia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color_fondo_perfil?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    perfil_privado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    AMISTADES_AMISTADES_receptor_idToPERFILES?: Prisma.AMISTADESUncheckedUpdateManyWithoutPERFILES_AMISTADES_receptor_idToPERFILESNestedInput;
    AMISTADES_AMISTADES_solicitante_idToPERFILES?: Prisma.AMISTADESUncheckedUpdateManyWithoutPERFILES_AMISTADES_solicitante_idToPERFILESNestedInput;
};
export type PERFILESCreateManyCARRERASInput = {
    id?: string;
    usuario_id: string;
    nombre: string;
    apellidos: string;
    matricula?: string | null;
    cuatrimestre?: number | null;
    biografia?: string | null;
    avatar_url?: string | null;
    color_fondo_perfil?: string | null;
    perfil_privado?: boolean;
};
export type PERFILESUpdateWithoutCARRERASInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    biografia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color_fondo_perfil?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    perfil_privado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    AMISTADES_AMISTADES_receptor_idToPERFILES?: Prisma.AMISTADESUpdateManyWithoutPERFILES_AMISTADES_receptor_idToPERFILESNestedInput;
    AMISTADES_AMISTADES_solicitante_idToPERFILES?: Prisma.AMISTADESUpdateManyWithoutPERFILES_AMISTADES_solicitante_idToPERFILESNestedInput;
    USUARIOS?: Prisma.USUARIOSUpdateOneRequiredWithoutPERFILESNestedInput;
};
export type PERFILESUncheckedUpdateWithoutCARRERASInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    biografia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color_fondo_perfil?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    perfil_privado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    AMISTADES_AMISTADES_receptor_idToPERFILES?: Prisma.AMISTADESUncheckedUpdateManyWithoutPERFILES_AMISTADES_receptor_idToPERFILESNestedInput;
    AMISTADES_AMISTADES_solicitante_idToPERFILES?: Prisma.AMISTADESUncheckedUpdateManyWithoutPERFILES_AMISTADES_solicitante_idToPERFILESNestedInput;
};
export type PERFILESUncheckedUpdateManyWithoutCARRERASInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario_id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    matricula?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuatrimestre?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    biografia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color_fondo_perfil?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    perfil_privado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PERFILESCountOutputType = {
    AMISTADES_AMISTADES_receptor_idToPERFILES: number;
    AMISTADES_AMISTADES_solicitante_idToPERFILES: number;
};
export type PERFILESCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    AMISTADES_AMISTADES_receptor_idToPERFILES?: boolean | PERFILESCountOutputTypeCountAMISTADES_AMISTADES_receptor_idToPERFILESArgs;
    AMISTADES_AMISTADES_solicitante_idToPERFILES?: boolean | PERFILESCountOutputTypeCountAMISTADES_AMISTADES_solicitante_idToPERFILESArgs;
};
export type PERFILESCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PERFILESCountOutputTypeSelect<ExtArgs> | null;
};
export type PERFILESCountOutputTypeCountAMISTADES_AMISTADES_receptor_idToPERFILESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AMISTADESWhereInput;
};
export type PERFILESCountOutputTypeCountAMISTADES_AMISTADES_solicitante_idToPERFILESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AMISTADESWhereInput;
};
export type PERFILESSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario_id?: boolean;
    nombre?: boolean;
    apellidos?: boolean;
    matricula?: boolean;
    carrera_id?: boolean;
    cuatrimestre?: boolean;
    biografia?: boolean;
    avatar_url?: boolean;
    color_fondo_perfil?: boolean;
    perfil_privado?: boolean;
    AMISTADES_AMISTADES_receptor_idToPERFILES?: boolean | Prisma.PERFILES$AMISTADES_AMISTADES_receptor_idToPERFILESArgs<ExtArgs>;
    AMISTADES_AMISTADES_solicitante_idToPERFILES?: boolean | Prisma.PERFILES$AMISTADES_AMISTADES_solicitante_idToPERFILESArgs<ExtArgs>;
    CARRERAS?: boolean | Prisma.PERFILES$CARRERASArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.PERFILESCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pERFILES"]>;
export type PERFILESSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario_id?: boolean;
    nombre?: boolean;
    apellidos?: boolean;
    matricula?: boolean;
    carrera_id?: boolean;
    cuatrimestre?: boolean;
    biografia?: boolean;
    avatar_url?: boolean;
    color_fondo_perfil?: boolean;
    perfil_privado?: boolean;
    CARRERAS?: boolean | Prisma.PERFILES$CARRERASArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pERFILES"]>;
export type PERFILESSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario_id?: boolean;
    nombre?: boolean;
    apellidos?: boolean;
    matricula?: boolean;
    carrera_id?: boolean;
    cuatrimestre?: boolean;
    biografia?: boolean;
    avatar_url?: boolean;
    color_fondo_perfil?: boolean;
    perfil_privado?: boolean;
    CARRERAS?: boolean | Prisma.PERFILES$CARRERASArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pERFILES"]>;
export type PERFILESSelectScalar = {
    id?: boolean;
    usuario_id?: boolean;
    nombre?: boolean;
    apellidos?: boolean;
    matricula?: boolean;
    carrera_id?: boolean;
    cuatrimestre?: boolean;
    biografia?: boolean;
    avatar_url?: boolean;
    color_fondo_perfil?: boolean;
    perfil_privado?: boolean;
};
export type PERFILESOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "usuario_id" | "nombre" | "apellidos" | "matricula" | "carrera_id" | "cuatrimestre" | "biografia" | "avatar_url" | "color_fondo_perfil" | "perfil_privado", ExtArgs["result"]["pERFILES"]>;
export type PERFILESInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    AMISTADES_AMISTADES_receptor_idToPERFILES?: boolean | Prisma.PERFILES$AMISTADES_AMISTADES_receptor_idToPERFILESArgs<ExtArgs>;
    AMISTADES_AMISTADES_solicitante_idToPERFILES?: boolean | Prisma.PERFILES$AMISTADES_AMISTADES_solicitante_idToPERFILESArgs<ExtArgs>;
    CARRERAS?: boolean | Prisma.PERFILES$CARRERASArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.PERFILESCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PERFILESIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CARRERAS?: boolean | Prisma.PERFILES$CARRERASArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type PERFILESIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    CARRERAS?: boolean | Prisma.PERFILES$CARRERASArgs<ExtArgs>;
    USUARIOS?: boolean | Prisma.USUARIOSDefaultArgs<ExtArgs>;
};
export type $PERFILESPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PERFILES";
    objects: {
        AMISTADES_AMISTADES_receptor_idToPERFILES: Prisma.$AMISTADESPayload<ExtArgs>[];
        AMISTADES_AMISTADES_solicitante_idToPERFILES: Prisma.$AMISTADESPayload<ExtArgs>[];
        CARRERAS: Prisma.$CARRERASPayload<ExtArgs> | null;
        USUARIOS: Prisma.$USUARIOSPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        usuario_id: string;
        nombre: string;
        apellidos: string;
        matricula: string | null;
        carrera_id: number | null;
        cuatrimestre: number | null;
        biografia: string | null;
        avatar_url: string | null;
        color_fondo_perfil: string | null;
        perfil_privado: boolean;
    }, ExtArgs["result"]["pERFILES"]>;
    composites: {};
};
export type PERFILESGetPayload<S extends boolean | null | undefined | PERFILESDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PERFILESPayload, S>;
export type PERFILESCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PERFILESFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PERFILESCountAggregateInputType | true;
};
export interface PERFILESDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PERFILES'];
        meta: {
            name: 'PERFILES';
        };
    };
    findUnique<T extends PERFILESFindUniqueArgs>(args: Prisma.SelectSubset<T, PERFILESFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PERFILESClient<runtime.Types.Result.GetResult<Prisma.$PERFILESPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PERFILESFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PERFILESFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PERFILESClient<runtime.Types.Result.GetResult<Prisma.$PERFILESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PERFILESFindFirstArgs>(args?: Prisma.SelectSubset<T, PERFILESFindFirstArgs<ExtArgs>>): Prisma.Prisma__PERFILESClient<runtime.Types.Result.GetResult<Prisma.$PERFILESPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PERFILESFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PERFILESFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PERFILESClient<runtime.Types.Result.GetResult<Prisma.$PERFILESPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PERFILESFindManyArgs>(args?: Prisma.SelectSubset<T, PERFILESFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PERFILESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PERFILESCreateArgs>(args: Prisma.SelectSubset<T, PERFILESCreateArgs<ExtArgs>>): Prisma.Prisma__PERFILESClient<runtime.Types.Result.GetResult<Prisma.$PERFILESPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PERFILESCreateManyArgs>(args?: Prisma.SelectSubset<T, PERFILESCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PERFILESCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PERFILESCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PERFILESPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PERFILESDeleteArgs>(args: Prisma.SelectSubset<T, PERFILESDeleteArgs<ExtArgs>>): Prisma.Prisma__PERFILESClient<runtime.Types.Result.GetResult<Prisma.$PERFILESPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PERFILESUpdateArgs>(args: Prisma.SelectSubset<T, PERFILESUpdateArgs<ExtArgs>>): Prisma.Prisma__PERFILESClient<runtime.Types.Result.GetResult<Prisma.$PERFILESPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PERFILESDeleteManyArgs>(args?: Prisma.SelectSubset<T, PERFILESDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PERFILESUpdateManyArgs>(args: Prisma.SelectSubset<T, PERFILESUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PERFILESUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PERFILESUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PERFILESPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PERFILESUpsertArgs>(args: Prisma.SelectSubset<T, PERFILESUpsertArgs<ExtArgs>>): Prisma.Prisma__PERFILESClient<runtime.Types.Result.GetResult<Prisma.$PERFILESPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PERFILESCountArgs>(args?: Prisma.Subset<T, PERFILESCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PERFILESCountAggregateOutputType> : number>;
    aggregate<T extends PERFILESAggregateArgs>(args: Prisma.Subset<T, PERFILESAggregateArgs>): Prisma.PrismaPromise<GetPERFILESAggregateType<T>>;
    groupBy<T extends PERFILESGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PERFILESGroupByArgs['orderBy'];
    } : {
        orderBy?: PERFILESGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PERFILESGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPERFILESGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PERFILESFieldRefs;
}
export interface Prisma__PERFILESClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    AMISTADES_AMISTADES_receptor_idToPERFILES<T extends Prisma.PERFILES$AMISTADES_AMISTADES_receptor_idToPERFILESArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PERFILES$AMISTADES_AMISTADES_receptor_idToPERFILESArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AMISTADESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    AMISTADES_AMISTADES_solicitante_idToPERFILES<T extends Prisma.PERFILES$AMISTADES_AMISTADES_solicitante_idToPERFILESArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PERFILES$AMISTADES_AMISTADES_solicitante_idToPERFILESArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AMISTADESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    CARRERAS<T extends Prisma.PERFILES$CARRERASArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PERFILES$CARRERASArgs<ExtArgs>>): Prisma.Prisma__CARRERASClient<runtime.Types.Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    USUARIOS<T extends Prisma.USUARIOSDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.USUARIOSDefaultArgs<ExtArgs>>): Prisma.Prisma__USUARIOSClient<runtime.Types.Result.GetResult<Prisma.$USUARIOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PERFILESFieldRefs {
    readonly id: Prisma.FieldRef<"PERFILES", 'String'>;
    readonly usuario_id: Prisma.FieldRef<"PERFILES", 'String'>;
    readonly nombre: Prisma.FieldRef<"PERFILES", 'String'>;
    readonly apellidos: Prisma.FieldRef<"PERFILES", 'String'>;
    readonly matricula: Prisma.FieldRef<"PERFILES", 'String'>;
    readonly carrera_id: Prisma.FieldRef<"PERFILES", 'Int'>;
    readonly cuatrimestre: Prisma.FieldRef<"PERFILES", 'Int'>;
    readonly biografia: Prisma.FieldRef<"PERFILES", 'String'>;
    readonly avatar_url: Prisma.FieldRef<"PERFILES", 'String'>;
    readonly color_fondo_perfil: Prisma.FieldRef<"PERFILES", 'String'>;
    readonly perfil_privado: Prisma.FieldRef<"PERFILES", 'Boolean'>;
}
export type PERFILESFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PERFILESSelect<ExtArgs> | null;
    omit?: Prisma.PERFILESOmit<ExtArgs> | null;
    include?: Prisma.PERFILESInclude<ExtArgs> | null;
    where: Prisma.PERFILESWhereUniqueInput;
};
export type PERFILESFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PERFILESSelect<ExtArgs> | null;
    omit?: Prisma.PERFILESOmit<ExtArgs> | null;
    include?: Prisma.PERFILESInclude<ExtArgs> | null;
    where: Prisma.PERFILESWhereUniqueInput;
};
export type PERFILESFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PERFILESSelect<ExtArgs> | null;
    omit?: Prisma.PERFILESOmit<ExtArgs> | null;
    include?: Prisma.PERFILESInclude<ExtArgs> | null;
    where?: Prisma.PERFILESWhereInput;
    orderBy?: Prisma.PERFILESOrderByWithRelationInput | Prisma.PERFILESOrderByWithRelationInput[];
    cursor?: Prisma.PERFILESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PERFILESScalarFieldEnum | Prisma.PERFILESScalarFieldEnum[];
};
export type PERFILESFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PERFILESSelect<ExtArgs> | null;
    omit?: Prisma.PERFILESOmit<ExtArgs> | null;
    include?: Prisma.PERFILESInclude<ExtArgs> | null;
    where?: Prisma.PERFILESWhereInput;
    orderBy?: Prisma.PERFILESOrderByWithRelationInput | Prisma.PERFILESOrderByWithRelationInput[];
    cursor?: Prisma.PERFILESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PERFILESScalarFieldEnum | Prisma.PERFILESScalarFieldEnum[];
};
export type PERFILESFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PERFILESSelect<ExtArgs> | null;
    omit?: Prisma.PERFILESOmit<ExtArgs> | null;
    include?: Prisma.PERFILESInclude<ExtArgs> | null;
    where?: Prisma.PERFILESWhereInput;
    orderBy?: Prisma.PERFILESOrderByWithRelationInput | Prisma.PERFILESOrderByWithRelationInput[];
    cursor?: Prisma.PERFILESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PERFILESScalarFieldEnum | Prisma.PERFILESScalarFieldEnum[];
};
export type PERFILESCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PERFILESSelect<ExtArgs> | null;
    omit?: Prisma.PERFILESOmit<ExtArgs> | null;
    include?: Prisma.PERFILESInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PERFILESCreateInput, Prisma.PERFILESUncheckedCreateInput>;
};
export type PERFILESCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PERFILESCreateManyInput | Prisma.PERFILESCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PERFILESCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PERFILESSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PERFILESOmit<ExtArgs> | null;
    data: Prisma.PERFILESCreateManyInput | Prisma.PERFILESCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PERFILESIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PERFILESUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PERFILESSelect<ExtArgs> | null;
    omit?: Prisma.PERFILESOmit<ExtArgs> | null;
    include?: Prisma.PERFILESInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PERFILESUpdateInput, Prisma.PERFILESUncheckedUpdateInput>;
    where: Prisma.PERFILESWhereUniqueInput;
};
export type PERFILESUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PERFILESUpdateManyMutationInput, Prisma.PERFILESUncheckedUpdateManyInput>;
    where?: Prisma.PERFILESWhereInput;
    limit?: number;
};
export type PERFILESUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PERFILESSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PERFILESOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PERFILESUpdateManyMutationInput, Prisma.PERFILESUncheckedUpdateManyInput>;
    where?: Prisma.PERFILESWhereInput;
    limit?: number;
    include?: Prisma.PERFILESIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PERFILESUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PERFILESSelect<ExtArgs> | null;
    omit?: Prisma.PERFILESOmit<ExtArgs> | null;
    include?: Prisma.PERFILESInclude<ExtArgs> | null;
    where: Prisma.PERFILESWhereUniqueInput;
    create: Prisma.XOR<Prisma.PERFILESCreateInput, Prisma.PERFILESUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PERFILESUpdateInput, Prisma.PERFILESUncheckedUpdateInput>;
};
export type PERFILESDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PERFILESSelect<ExtArgs> | null;
    omit?: Prisma.PERFILESOmit<ExtArgs> | null;
    include?: Prisma.PERFILESInclude<ExtArgs> | null;
    where: Prisma.PERFILESWhereUniqueInput;
};
export type PERFILESDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PERFILESWhereInput;
    limit?: number;
};
export type PERFILES$AMISTADES_AMISTADES_receptor_idToPERFILESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PERFILES$AMISTADES_AMISTADES_solicitante_idToPERFILESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PERFILES$CARRERASArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CARRERASSelect<ExtArgs> | null;
    omit?: Prisma.CARRERASOmit<ExtArgs> | null;
    include?: Prisma.CARRERASInclude<ExtArgs> | null;
    where?: Prisma.CARRERASWhereInput;
};
export type PERFILESDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PERFILESSelect<ExtArgs> | null;
    omit?: Prisma.PERFILESOmit<ExtArgs> | null;
    include?: Prisma.PERFILESInclude<ExtArgs> | null;
};
