import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CARRERASModel = runtime.Types.Result.DefaultSelection<Prisma.$CARRERASPayload>;
export type AggregateCARRERAS = {
    _count: CARRERASCountAggregateOutputType | null;
    _avg: CARRERASAvgAggregateOutputType | null;
    _sum: CARRERASSumAggregateOutputType | null;
    _min: CARRERASMinAggregateOutputType | null;
    _max: CARRERASMaxAggregateOutputType | null;
};
export type CARRERASAvgAggregateOutputType = {
    id: number | null;
};
export type CARRERASSumAggregateOutputType = {
    id: number | null;
};
export type CARRERASMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    edificio: string | null;
};
export type CARRERASMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    edificio: string | null;
};
export type CARRERASCountAggregateOutputType = {
    id: number;
    nombre: number;
    edificio: number;
    _all: number;
};
export type CARRERASAvgAggregateInputType = {
    id?: true;
};
export type CARRERASSumAggregateInputType = {
    id?: true;
};
export type CARRERASMinAggregateInputType = {
    id?: true;
    nombre?: true;
    edificio?: true;
};
export type CARRERASMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    edificio?: true;
};
export type CARRERASCountAggregateInputType = {
    id?: true;
    nombre?: true;
    edificio?: true;
    _all?: true;
};
export type CARRERASAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CARRERASWhereInput;
    orderBy?: Prisma.CARRERASOrderByWithRelationInput | Prisma.CARRERASOrderByWithRelationInput[];
    cursor?: Prisma.CARRERASWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CARRERASCountAggregateInputType;
    _avg?: CARRERASAvgAggregateInputType;
    _sum?: CARRERASSumAggregateInputType;
    _min?: CARRERASMinAggregateInputType;
    _max?: CARRERASMaxAggregateInputType;
};
export type GetCARRERASAggregateType<T extends CARRERASAggregateArgs> = {
    [P in keyof T & keyof AggregateCARRERAS]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCARRERAS[P]> : Prisma.GetScalarType<T[P], AggregateCARRERAS[P]>;
};
export type CARRERASGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CARRERASWhereInput;
    orderBy?: Prisma.CARRERASOrderByWithAggregationInput | Prisma.CARRERASOrderByWithAggregationInput[];
    by: Prisma.CARRERASScalarFieldEnum[] | Prisma.CARRERASScalarFieldEnum;
    having?: Prisma.CARRERASScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CARRERASCountAggregateInputType | true;
    _avg?: CARRERASAvgAggregateInputType;
    _sum?: CARRERASSumAggregateInputType;
    _min?: CARRERASMinAggregateInputType;
    _max?: CARRERASMaxAggregateInputType;
};
export type CARRERASGroupByOutputType = {
    id: number;
    nombre: string;
    edificio: string;
    _count: CARRERASCountAggregateOutputType | null;
    _avg: CARRERASAvgAggregateOutputType | null;
    _sum: CARRERASSumAggregateOutputType | null;
    _min: CARRERASMinAggregateOutputType | null;
    _max: CARRERASMaxAggregateOutputType | null;
};
export type GetCARRERASGroupByPayload<T extends CARRERASGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CARRERASGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CARRERASGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CARRERASGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CARRERASGroupByOutputType[P]>;
}>>;
export type CARRERASWhereInput = {
    AND?: Prisma.CARRERASWhereInput | Prisma.CARRERASWhereInput[];
    OR?: Prisma.CARRERASWhereInput[];
    NOT?: Prisma.CARRERASWhereInput | Prisma.CARRERASWhereInput[];
    id?: Prisma.IntFilter<"CARRERAS"> | number;
    nombre?: Prisma.StringFilter<"CARRERAS"> | string;
    edificio?: Prisma.StringFilter<"CARRERAS"> | string;
    AVISOS?: Prisma.AVISOSListRelationFilter;
    GRUPOS?: Prisma.GRUPOSListRelationFilter;
    PERFILES?: Prisma.PERFILESListRelationFilter;
};
export type CARRERASOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    edificio?: Prisma.SortOrder;
    AVISOS?: Prisma.AVISOSOrderByRelationAggregateInput;
    GRUPOS?: Prisma.GRUPOSOrderByRelationAggregateInput;
    PERFILES?: Prisma.PERFILESOrderByRelationAggregateInput;
};
export type CARRERASWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    nombre?: string;
    AND?: Prisma.CARRERASWhereInput | Prisma.CARRERASWhereInput[];
    OR?: Prisma.CARRERASWhereInput[];
    NOT?: Prisma.CARRERASWhereInput | Prisma.CARRERASWhereInput[];
    edificio?: Prisma.StringFilter<"CARRERAS"> | string;
    AVISOS?: Prisma.AVISOSListRelationFilter;
    GRUPOS?: Prisma.GRUPOSListRelationFilter;
    PERFILES?: Prisma.PERFILESListRelationFilter;
}, "id" | "nombre">;
export type CARRERASOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    edificio?: Prisma.SortOrder;
    _count?: Prisma.CARRERASCountOrderByAggregateInput;
    _avg?: Prisma.CARRERASAvgOrderByAggregateInput;
    _max?: Prisma.CARRERASMaxOrderByAggregateInput;
    _min?: Prisma.CARRERASMinOrderByAggregateInput;
    _sum?: Prisma.CARRERASSumOrderByAggregateInput;
};
export type CARRERASScalarWhereWithAggregatesInput = {
    AND?: Prisma.CARRERASScalarWhereWithAggregatesInput | Prisma.CARRERASScalarWhereWithAggregatesInput[];
    OR?: Prisma.CARRERASScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CARRERASScalarWhereWithAggregatesInput | Prisma.CARRERASScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"CARRERAS"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"CARRERAS"> | string;
    edificio?: Prisma.StringWithAggregatesFilter<"CARRERAS"> | string;
};
export type CARRERASCreateInput = {
    nombre: string;
    edificio: string;
    AVISOS?: Prisma.AVISOSCreateNestedManyWithoutCARRERASInput;
    GRUPOS?: Prisma.GRUPOSCreateNestedManyWithoutCARRERASInput;
    PERFILES?: Prisma.PERFILESCreateNestedManyWithoutCARRERASInput;
};
export type CARRERASUncheckedCreateInput = {
    id?: number;
    nombre: string;
    edificio: string;
    AVISOS?: Prisma.AVISOSUncheckedCreateNestedManyWithoutCARRERASInput;
    GRUPOS?: Prisma.GRUPOSUncheckedCreateNestedManyWithoutCARRERASInput;
    PERFILES?: Prisma.PERFILESUncheckedCreateNestedManyWithoutCARRERASInput;
};
export type CARRERASUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    edificio?: Prisma.StringFieldUpdateOperationsInput | string;
    AVISOS?: Prisma.AVISOSUpdateManyWithoutCARRERASNestedInput;
    GRUPOS?: Prisma.GRUPOSUpdateManyWithoutCARRERASNestedInput;
    PERFILES?: Prisma.PERFILESUpdateManyWithoutCARRERASNestedInput;
};
export type CARRERASUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    edificio?: Prisma.StringFieldUpdateOperationsInput | string;
    AVISOS?: Prisma.AVISOSUncheckedUpdateManyWithoutCARRERASNestedInput;
    GRUPOS?: Prisma.GRUPOSUncheckedUpdateManyWithoutCARRERASNestedInput;
    PERFILES?: Prisma.PERFILESUncheckedUpdateManyWithoutCARRERASNestedInput;
};
export type CARRERASCreateManyInput = {
    id?: number;
    nombre: string;
    edificio: string;
};
export type CARRERASUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    edificio?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CARRERASUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    edificio?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CARRERASNullableScalarRelationFilter = {
    is?: Prisma.CARRERASWhereInput | null;
    isNot?: Prisma.CARRERASWhereInput | null;
};
export type CARRERASCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    edificio?: Prisma.SortOrder;
};
export type CARRERASAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type CARRERASMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    edificio?: Prisma.SortOrder;
};
export type CARRERASMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    edificio?: Prisma.SortOrder;
};
export type CARRERASSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type CARRERASCreateNestedOneWithoutAVISOSInput = {
    create?: Prisma.XOR<Prisma.CARRERASCreateWithoutAVISOSInput, Prisma.CARRERASUncheckedCreateWithoutAVISOSInput>;
    connectOrCreate?: Prisma.CARRERASCreateOrConnectWithoutAVISOSInput;
    connect?: Prisma.CARRERASWhereUniqueInput;
};
export type CARRERASUpdateOneWithoutAVISOSNestedInput = {
    create?: Prisma.XOR<Prisma.CARRERASCreateWithoutAVISOSInput, Prisma.CARRERASUncheckedCreateWithoutAVISOSInput>;
    connectOrCreate?: Prisma.CARRERASCreateOrConnectWithoutAVISOSInput;
    upsert?: Prisma.CARRERASUpsertWithoutAVISOSInput;
    disconnect?: Prisma.CARRERASWhereInput | boolean;
    delete?: Prisma.CARRERASWhereInput | boolean;
    connect?: Prisma.CARRERASWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CARRERASUpdateToOneWithWhereWithoutAVISOSInput, Prisma.CARRERASUpdateWithoutAVISOSInput>, Prisma.CARRERASUncheckedUpdateWithoutAVISOSInput>;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type CARRERASCreateNestedOneWithoutGRUPOSInput = {
    create?: Prisma.XOR<Prisma.CARRERASCreateWithoutGRUPOSInput, Prisma.CARRERASUncheckedCreateWithoutGRUPOSInput>;
    connectOrCreate?: Prisma.CARRERASCreateOrConnectWithoutGRUPOSInput;
    connect?: Prisma.CARRERASWhereUniqueInput;
};
export type CARRERASUpdateOneWithoutGRUPOSNestedInput = {
    create?: Prisma.XOR<Prisma.CARRERASCreateWithoutGRUPOSInput, Prisma.CARRERASUncheckedCreateWithoutGRUPOSInput>;
    connectOrCreate?: Prisma.CARRERASCreateOrConnectWithoutGRUPOSInput;
    upsert?: Prisma.CARRERASUpsertWithoutGRUPOSInput;
    disconnect?: Prisma.CARRERASWhereInput | boolean;
    delete?: Prisma.CARRERASWhereInput | boolean;
    connect?: Prisma.CARRERASWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CARRERASUpdateToOneWithWhereWithoutGRUPOSInput, Prisma.CARRERASUpdateWithoutGRUPOSInput>, Prisma.CARRERASUncheckedUpdateWithoutGRUPOSInput>;
};
export type CARRERASCreateNestedOneWithoutPERFILESInput = {
    create?: Prisma.XOR<Prisma.CARRERASCreateWithoutPERFILESInput, Prisma.CARRERASUncheckedCreateWithoutPERFILESInput>;
    connectOrCreate?: Prisma.CARRERASCreateOrConnectWithoutPERFILESInput;
    connect?: Prisma.CARRERASWhereUniqueInput;
};
export type CARRERASUpdateOneWithoutPERFILESNestedInput = {
    create?: Prisma.XOR<Prisma.CARRERASCreateWithoutPERFILESInput, Prisma.CARRERASUncheckedCreateWithoutPERFILESInput>;
    connectOrCreate?: Prisma.CARRERASCreateOrConnectWithoutPERFILESInput;
    upsert?: Prisma.CARRERASUpsertWithoutPERFILESInput;
    disconnect?: Prisma.CARRERASWhereInput | boolean;
    delete?: Prisma.CARRERASWhereInput | boolean;
    connect?: Prisma.CARRERASWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CARRERASUpdateToOneWithWhereWithoutPERFILESInput, Prisma.CARRERASUpdateWithoutPERFILESInput>, Prisma.CARRERASUncheckedUpdateWithoutPERFILESInput>;
};
export type CARRERASCreateWithoutAVISOSInput = {
    nombre: string;
    edificio: string;
    GRUPOS?: Prisma.GRUPOSCreateNestedManyWithoutCARRERASInput;
    PERFILES?: Prisma.PERFILESCreateNestedManyWithoutCARRERASInput;
};
export type CARRERASUncheckedCreateWithoutAVISOSInput = {
    id?: number;
    nombre: string;
    edificio: string;
    GRUPOS?: Prisma.GRUPOSUncheckedCreateNestedManyWithoutCARRERASInput;
    PERFILES?: Prisma.PERFILESUncheckedCreateNestedManyWithoutCARRERASInput;
};
export type CARRERASCreateOrConnectWithoutAVISOSInput = {
    where: Prisma.CARRERASWhereUniqueInput;
    create: Prisma.XOR<Prisma.CARRERASCreateWithoutAVISOSInput, Prisma.CARRERASUncheckedCreateWithoutAVISOSInput>;
};
export type CARRERASUpsertWithoutAVISOSInput = {
    update: Prisma.XOR<Prisma.CARRERASUpdateWithoutAVISOSInput, Prisma.CARRERASUncheckedUpdateWithoutAVISOSInput>;
    create: Prisma.XOR<Prisma.CARRERASCreateWithoutAVISOSInput, Prisma.CARRERASUncheckedCreateWithoutAVISOSInput>;
    where?: Prisma.CARRERASWhereInput;
};
export type CARRERASUpdateToOneWithWhereWithoutAVISOSInput = {
    where?: Prisma.CARRERASWhereInput;
    data: Prisma.XOR<Prisma.CARRERASUpdateWithoutAVISOSInput, Prisma.CARRERASUncheckedUpdateWithoutAVISOSInput>;
};
export type CARRERASUpdateWithoutAVISOSInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    edificio?: Prisma.StringFieldUpdateOperationsInput | string;
    GRUPOS?: Prisma.GRUPOSUpdateManyWithoutCARRERASNestedInput;
    PERFILES?: Prisma.PERFILESUpdateManyWithoutCARRERASNestedInput;
};
export type CARRERASUncheckedUpdateWithoutAVISOSInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    edificio?: Prisma.StringFieldUpdateOperationsInput | string;
    GRUPOS?: Prisma.GRUPOSUncheckedUpdateManyWithoutCARRERASNestedInput;
    PERFILES?: Prisma.PERFILESUncheckedUpdateManyWithoutCARRERASNestedInput;
};
export type CARRERASCreateWithoutGRUPOSInput = {
    nombre: string;
    edificio: string;
    AVISOS?: Prisma.AVISOSCreateNestedManyWithoutCARRERASInput;
    PERFILES?: Prisma.PERFILESCreateNestedManyWithoutCARRERASInput;
};
export type CARRERASUncheckedCreateWithoutGRUPOSInput = {
    id?: number;
    nombre: string;
    edificio: string;
    AVISOS?: Prisma.AVISOSUncheckedCreateNestedManyWithoutCARRERASInput;
    PERFILES?: Prisma.PERFILESUncheckedCreateNestedManyWithoutCARRERASInput;
};
export type CARRERASCreateOrConnectWithoutGRUPOSInput = {
    where: Prisma.CARRERASWhereUniqueInput;
    create: Prisma.XOR<Prisma.CARRERASCreateWithoutGRUPOSInput, Prisma.CARRERASUncheckedCreateWithoutGRUPOSInput>;
};
export type CARRERASUpsertWithoutGRUPOSInput = {
    update: Prisma.XOR<Prisma.CARRERASUpdateWithoutGRUPOSInput, Prisma.CARRERASUncheckedUpdateWithoutGRUPOSInput>;
    create: Prisma.XOR<Prisma.CARRERASCreateWithoutGRUPOSInput, Prisma.CARRERASUncheckedCreateWithoutGRUPOSInput>;
    where?: Prisma.CARRERASWhereInput;
};
export type CARRERASUpdateToOneWithWhereWithoutGRUPOSInput = {
    where?: Prisma.CARRERASWhereInput;
    data: Prisma.XOR<Prisma.CARRERASUpdateWithoutGRUPOSInput, Prisma.CARRERASUncheckedUpdateWithoutGRUPOSInput>;
};
export type CARRERASUpdateWithoutGRUPOSInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    edificio?: Prisma.StringFieldUpdateOperationsInput | string;
    AVISOS?: Prisma.AVISOSUpdateManyWithoutCARRERASNestedInput;
    PERFILES?: Prisma.PERFILESUpdateManyWithoutCARRERASNestedInput;
};
export type CARRERASUncheckedUpdateWithoutGRUPOSInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    edificio?: Prisma.StringFieldUpdateOperationsInput | string;
    AVISOS?: Prisma.AVISOSUncheckedUpdateManyWithoutCARRERASNestedInput;
    PERFILES?: Prisma.PERFILESUncheckedUpdateManyWithoutCARRERASNestedInput;
};
export type CARRERASCreateWithoutPERFILESInput = {
    nombre: string;
    edificio: string;
    AVISOS?: Prisma.AVISOSCreateNestedManyWithoutCARRERASInput;
    GRUPOS?: Prisma.GRUPOSCreateNestedManyWithoutCARRERASInput;
};
export type CARRERASUncheckedCreateWithoutPERFILESInput = {
    id?: number;
    nombre: string;
    edificio: string;
    AVISOS?: Prisma.AVISOSUncheckedCreateNestedManyWithoutCARRERASInput;
    GRUPOS?: Prisma.GRUPOSUncheckedCreateNestedManyWithoutCARRERASInput;
};
export type CARRERASCreateOrConnectWithoutPERFILESInput = {
    where: Prisma.CARRERASWhereUniqueInput;
    create: Prisma.XOR<Prisma.CARRERASCreateWithoutPERFILESInput, Prisma.CARRERASUncheckedCreateWithoutPERFILESInput>;
};
export type CARRERASUpsertWithoutPERFILESInput = {
    update: Prisma.XOR<Prisma.CARRERASUpdateWithoutPERFILESInput, Prisma.CARRERASUncheckedUpdateWithoutPERFILESInput>;
    create: Prisma.XOR<Prisma.CARRERASCreateWithoutPERFILESInput, Prisma.CARRERASUncheckedCreateWithoutPERFILESInput>;
    where?: Prisma.CARRERASWhereInput;
};
export type CARRERASUpdateToOneWithWhereWithoutPERFILESInput = {
    where?: Prisma.CARRERASWhereInput;
    data: Prisma.XOR<Prisma.CARRERASUpdateWithoutPERFILESInput, Prisma.CARRERASUncheckedUpdateWithoutPERFILESInput>;
};
export type CARRERASUpdateWithoutPERFILESInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    edificio?: Prisma.StringFieldUpdateOperationsInput | string;
    AVISOS?: Prisma.AVISOSUpdateManyWithoutCARRERASNestedInput;
    GRUPOS?: Prisma.GRUPOSUpdateManyWithoutCARRERASNestedInput;
};
export type CARRERASUncheckedUpdateWithoutPERFILESInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    edificio?: Prisma.StringFieldUpdateOperationsInput | string;
    AVISOS?: Prisma.AVISOSUncheckedUpdateManyWithoutCARRERASNestedInput;
    GRUPOS?: Prisma.GRUPOSUncheckedUpdateManyWithoutCARRERASNestedInput;
};
export type CARRERASCountOutputType = {
    AVISOS: number;
    GRUPOS: number;
    PERFILES: number;
};
export type CARRERASCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    AVISOS?: boolean | CARRERASCountOutputTypeCountAVISOSArgs;
    GRUPOS?: boolean | CARRERASCountOutputTypeCountGRUPOSArgs;
    PERFILES?: boolean | CARRERASCountOutputTypeCountPERFILESArgs;
};
export type CARRERASCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CARRERASCountOutputTypeSelect<ExtArgs> | null;
};
export type CARRERASCountOutputTypeCountAVISOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AVISOSWhereInput;
};
export type CARRERASCountOutputTypeCountGRUPOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GRUPOSWhereInput;
};
export type CARRERASCountOutputTypeCountPERFILESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PERFILESWhereInput;
};
export type CARRERASSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    edificio?: boolean;
    AVISOS?: boolean | Prisma.CARRERAS$AVISOSArgs<ExtArgs>;
    GRUPOS?: boolean | Prisma.CARRERAS$GRUPOSArgs<ExtArgs>;
    PERFILES?: boolean | Prisma.CARRERAS$PERFILESArgs<ExtArgs>;
    _count?: boolean | Prisma.CARRERASCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cARRERAS"]>;
export type CARRERASSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    edificio?: boolean;
}, ExtArgs["result"]["cARRERAS"]>;
export type CARRERASSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    edificio?: boolean;
}, ExtArgs["result"]["cARRERAS"]>;
export type CARRERASSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    edificio?: boolean;
};
export type CARRERASOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "edificio", ExtArgs["result"]["cARRERAS"]>;
export type CARRERASInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    AVISOS?: boolean | Prisma.CARRERAS$AVISOSArgs<ExtArgs>;
    GRUPOS?: boolean | Prisma.CARRERAS$GRUPOSArgs<ExtArgs>;
    PERFILES?: boolean | Prisma.CARRERAS$PERFILESArgs<ExtArgs>;
    _count?: boolean | Prisma.CARRERASCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CARRERASIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CARRERASIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CARRERASPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CARRERAS";
    objects: {
        AVISOS: Prisma.$AVISOSPayload<ExtArgs>[];
        GRUPOS: Prisma.$GRUPOSPayload<ExtArgs>[];
        PERFILES: Prisma.$PERFILESPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        edificio: string;
    }, ExtArgs["result"]["cARRERAS"]>;
    composites: {};
};
export type CARRERASGetPayload<S extends boolean | null | undefined | CARRERASDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CARRERASPayload, S>;
export type CARRERASCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CARRERASFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CARRERASCountAggregateInputType | true;
};
export interface CARRERASDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CARRERAS'];
        meta: {
            name: 'CARRERAS';
        };
    };
    findUnique<T extends CARRERASFindUniqueArgs>(args: Prisma.SelectSubset<T, CARRERASFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CARRERASClient<runtime.Types.Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CARRERASFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CARRERASFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CARRERASClient<runtime.Types.Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CARRERASFindFirstArgs>(args?: Prisma.SelectSubset<T, CARRERASFindFirstArgs<ExtArgs>>): Prisma.Prisma__CARRERASClient<runtime.Types.Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CARRERASFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CARRERASFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CARRERASClient<runtime.Types.Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CARRERASFindManyArgs>(args?: Prisma.SelectSubset<T, CARRERASFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CARRERASCreateArgs>(args: Prisma.SelectSubset<T, CARRERASCreateArgs<ExtArgs>>): Prisma.Prisma__CARRERASClient<runtime.Types.Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CARRERASCreateManyArgs>(args?: Prisma.SelectSubset<T, CARRERASCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CARRERASCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CARRERASCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CARRERASDeleteArgs>(args: Prisma.SelectSubset<T, CARRERASDeleteArgs<ExtArgs>>): Prisma.Prisma__CARRERASClient<runtime.Types.Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CARRERASUpdateArgs>(args: Prisma.SelectSubset<T, CARRERASUpdateArgs<ExtArgs>>): Prisma.Prisma__CARRERASClient<runtime.Types.Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CARRERASDeleteManyArgs>(args?: Prisma.SelectSubset<T, CARRERASDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CARRERASUpdateManyArgs>(args: Prisma.SelectSubset<T, CARRERASUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CARRERASUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CARRERASUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CARRERASUpsertArgs>(args: Prisma.SelectSubset<T, CARRERASUpsertArgs<ExtArgs>>): Prisma.Prisma__CARRERASClient<runtime.Types.Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CARRERASCountArgs>(args?: Prisma.Subset<T, CARRERASCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CARRERASCountAggregateOutputType> : number>;
    aggregate<T extends CARRERASAggregateArgs>(args: Prisma.Subset<T, CARRERASAggregateArgs>): Prisma.PrismaPromise<GetCARRERASAggregateType<T>>;
    groupBy<T extends CARRERASGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CARRERASGroupByArgs['orderBy'];
    } : {
        orderBy?: CARRERASGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CARRERASGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCARRERASGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CARRERASFieldRefs;
}
export interface Prisma__CARRERASClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    AVISOS<T extends Prisma.CARRERAS$AVISOSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CARRERAS$AVISOSArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AVISOSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    GRUPOS<T extends Prisma.CARRERAS$GRUPOSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CARRERAS$GRUPOSArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GRUPOSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    PERFILES<T extends Prisma.CARRERAS$PERFILESArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CARRERAS$PERFILESArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PERFILESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CARRERASFieldRefs {
    readonly id: Prisma.FieldRef<"CARRERAS", 'Int'>;
    readonly nombre: Prisma.FieldRef<"CARRERAS", 'String'>;
    readonly edificio: Prisma.FieldRef<"CARRERAS", 'String'>;
}
export type CARRERASFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CARRERASSelect<ExtArgs> | null;
    omit?: Prisma.CARRERASOmit<ExtArgs> | null;
    include?: Prisma.CARRERASInclude<ExtArgs> | null;
    where: Prisma.CARRERASWhereUniqueInput;
};
export type CARRERASFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CARRERASSelect<ExtArgs> | null;
    omit?: Prisma.CARRERASOmit<ExtArgs> | null;
    include?: Prisma.CARRERASInclude<ExtArgs> | null;
    where: Prisma.CARRERASWhereUniqueInput;
};
export type CARRERASFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CARRERASSelect<ExtArgs> | null;
    omit?: Prisma.CARRERASOmit<ExtArgs> | null;
    include?: Prisma.CARRERASInclude<ExtArgs> | null;
    where?: Prisma.CARRERASWhereInput;
    orderBy?: Prisma.CARRERASOrderByWithRelationInput | Prisma.CARRERASOrderByWithRelationInput[];
    cursor?: Prisma.CARRERASWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CARRERASScalarFieldEnum | Prisma.CARRERASScalarFieldEnum[];
};
export type CARRERASFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CARRERASSelect<ExtArgs> | null;
    omit?: Prisma.CARRERASOmit<ExtArgs> | null;
    include?: Prisma.CARRERASInclude<ExtArgs> | null;
    where?: Prisma.CARRERASWhereInput;
    orderBy?: Prisma.CARRERASOrderByWithRelationInput | Prisma.CARRERASOrderByWithRelationInput[];
    cursor?: Prisma.CARRERASWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CARRERASScalarFieldEnum | Prisma.CARRERASScalarFieldEnum[];
};
export type CARRERASFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CARRERASSelect<ExtArgs> | null;
    omit?: Prisma.CARRERASOmit<ExtArgs> | null;
    include?: Prisma.CARRERASInclude<ExtArgs> | null;
    where?: Prisma.CARRERASWhereInput;
    orderBy?: Prisma.CARRERASOrderByWithRelationInput | Prisma.CARRERASOrderByWithRelationInput[];
    cursor?: Prisma.CARRERASWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CARRERASScalarFieldEnum | Prisma.CARRERASScalarFieldEnum[];
};
export type CARRERASCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CARRERASSelect<ExtArgs> | null;
    omit?: Prisma.CARRERASOmit<ExtArgs> | null;
    include?: Prisma.CARRERASInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CARRERASCreateInput, Prisma.CARRERASUncheckedCreateInput>;
};
export type CARRERASCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CARRERASCreateManyInput | Prisma.CARRERASCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CARRERASCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CARRERASSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CARRERASOmit<ExtArgs> | null;
    data: Prisma.CARRERASCreateManyInput | Prisma.CARRERASCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CARRERASUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CARRERASSelect<ExtArgs> | null;
    omit?: Prisma.CARRERASOmit<ExtArgs> | null;
    include?: Prisma.CARRERASInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CARRERASUpdateInput, Prisma.CARRERASUncheckedUpdateInput>;
    where: Prisma.CARRERASWhereUniqueInput;
};
export type CARRERASUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CARRERASUpdateManyMutationInput, Prisma.CARRERASUncheckedUpdateManyInput>;
    where?: Prisma.CARRERASWhereInput;
    limit?: number;
};
export type CARRERASUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CARRERASSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CARRERASOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CARRERASUpdateManyMutationInput, Prisma.CARRERASUncheckedUpdateManyInput>;
    where?: Prisma.CARRERASWhereInput;
    limit?: number;
};
export type CARRERASUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CARRERASSelect<ExtArgs> | null;
    omit?: Prisma.CARRERASOmit<ExtArgs> | null;
    include?: Prisma.CARRERASInclude<ExtArgs> | null;
    where: Prisma.CARRERASWhereUniqueInput;
    create: Prisma.XOR<Prisma.CARRERASCreateInput, Prisma.CARRERASUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CARRERASUpdateInput, Prisma.CARRERASUncheckedUpdateInput>;
};
export type CARRERASDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CARRERASSelect<ExtArgs> | null;
    omit?: Prisma.CARRERASOmit<ExtArgs> | null;
    include?: Prisma.CARRERASInclude<ExtArgs> | null;
    where: Prisma.CARRERASWhereUniqueInput;
};
export type CARRERASDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CARRERASWhereInput;
    limit?: number;
};
export type CARRERAS$AVISOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CARRERAS$GRUPOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CARRERAS$PERFILESArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CARRERASDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CARRERASSelect<ExtArgs> | null;
    omit?: Prisma.CARRERASOmit<ExtArgs> | null;
    include?: Prisma.CARRERASInclude<ExtArgs> | null;
};
