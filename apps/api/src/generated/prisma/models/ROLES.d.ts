import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ROLESModel = runtime.Types.Result.DefaultSelection<Prisma.$ROLESPayload>;
export type AggregateROLES = {
    _count: ROLESCountAggregateOutputType | null;
    _avg: ROLESAvgAggregateOutputType | null;
    _sum: ROLESSumAggregateOutputType | null;
    _min: ROLESMinAggregateOutputType | null;
    _max: ROLESMaxAggregateOutputType | null;
};
export type ROLESAvgAggregateOutputType = {
    id: number | null;
};
export type ROLESSumAggregateOutputType = {
    id: number | null;
};
export type ROLESMinAggregateOutputType = {
    nombre: string | null;
    id: number | null;
};
export type ROLESMaxAggregateOutputType = {
    nombre: string | null;
    id: number | null;
};
export type ROLESCountAggregateOutputType = {
    nombre: number;
    id: number;
    _all: number;
};
export type ROLESAvgAggregateInputType = {
    id?: true;
};
export type ROLESSumAggregateInputType = {
    id?: true;
};
export type ROLESMinAggregateInputType = {
    nombre?: true;
    id?: true;
};
export type ROLESMaxAggregateInputType = {
    nombre?: true;
    id?: true;
};
export type ROLESCountAggregateInputType = {
    nombre?: true;
    id?: true;
    _all?: true;
};
export type ROLESAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ROLESWhereInput;
    orderBy?: Prisma.ROLESOrderByWithRelationInput | Prisma.ROLESOrderByWithRelationInput[];
    cursor?: Prisma.ROLESWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ROLESCountAggregateInputType;
    _avg?: ROLESAvgAggregateInputType;
    _sum?: ROLESSumAggregateInputType;
    _min?: ROLESMinAggregateInputType;
    _max?: ROLESMaxAggregateInputType;
};
export type GetROLESAggregateType<T extends ROLESAggregateArgs> = {
    [P in keyof T & keyof AggregateROLES]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateROLES[P]> : Prisma.GetScalarType<T[P], AggregateROLES[P]>;
};
export type ROLESGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ROLESWhereInput;
    orderBy?: Prisma.ROLESOrderByWithAggregationInput | Prisma.ROLESOrderByWithAggregationInput[];
    by: Prisma.ROLESScalarFieldEnum[] | Prisma.ROLESScalarFieldEnum;
    having?: Prisma.ROLESScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ROLESCountAggregateInputType | true;
    _avg?: ROLESAvgAggregateInputType;
    _sum?: ROLESSumAggregateInputType;
    _min?: ROLESMinAggregateInputType;
    _max?: ROLESMaxAggregateInputType;
};
export type ROLESGroupByOutputType = {
    nombre: string;
    id: number;
    _count: ROLESCountAggregateOutputType | null;
    _avg: ROLESAvgAggregateOutputType | null;
    _sum: ROLESSumAggregateOutputType | null;
    _min: ROLESMinAggregateOutputType | null;
    _max: ROLESMaxAggregateOutputType | null;
};
export type GetROLESGroupByPayload<T extends ROLESGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ROLESGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ROLESGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ROLESGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ROLESGroupByOutputType[P]>;
}>>;
export type ROLESWhereInput = {
    AND?: Prisma.ROLESWhereInput | Prisma.ROLESWhereInput[];
    OR?: Prisma.ROLESWhereInput[];
    NOT?: Prisma.ROLESWhereInput | Prisma.ROLESWhereInput[];
    nombre?: Prisma.StringFilter<"ROLES"> | string;
    id?: Prisma.IntFilter<"ROLES"> | number;
    USUARIOS?: Prisma.USUARIOSListRelationFilter;
};
export type ROLESOrderByWithRelationInput = {
    nombre?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
    USUARIOS?: Prisma.USUARIOSOrderByRelationAggregateInput;
};
export type ROLESWhereUniqueInput = Prisma.AtLeast<{
    nombre?: string;
    id?: number;
    AND?: Prisma.ROLESWhereInput | Prisma.ROLESWhereInput[];
    OR?: Prisma.ROLESWhereInput[];
    NOT?: Prisma.ROLESWhereInput | Prisma.ROLESWhereInput[];
    USUARIOS?: Prisma.USUARIOSListRelationFilter;
}, "id" | "nombre">;
export type ROLESOrderByWithAggregationInput = {
    nombre?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
    _count?: Prisma.ROLESCountOrderByAggregateInput;
    _avg?: Prisma.ROLESAvgOrderByAggregateInput;
    _max?: Prisma.ROLESMaxOrderByAggregateInput;
    _min?: Prisma.ROLESMinOrderByAggregateInput;
    _sum?: Prisma.ROLESSumOrderByAggregateInput;
};
export type ROLESScalarWhereWithAggregatesInput = {
    AND?: Prisma.ROLESScalarWhereWithAggregatesInput | Prisma.ROLESScalarWhereWithAggregatesInput[];
    OR?: Prisma.ROLESScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ROLESScalarWhereWithAggregatesInput | Prisma.ROLESScalarWhereWithAggregatesInput[];
    nombre?: Prisma.StringWithAggregatesFilter<"ROLES"> | string;
    id?: Prisma.IntWithAggregatesFilter<"ROLES"> | number;
};
export type ROLESCreateInput = {
    nombre: string;
    USUARIOS?: Prisma.USUARIOSCreateNestedManyWithoutROLESInput;
};
export type ROLESUncheckedCreateInput = {
    nombre: string;
    id?: number;
    USUARIOS?: Prisma.USUARIOSUncheckedCreateNestedManyWithoutROLESInput;
};
export type ROLESUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    USUARIOS?: Prisma.USUARIOSUpdateManyWithoutROLESNestedInput;
};
export type ROLESUncheckedUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    USUARIOS?: Prisma.USUARIOSUncheckedUpdateManyWithoutROLESNestedInput;
};
export type ROLESCreateManyInput = {
    nombre: string;
    id?: number;
};
export type ROLESUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ROLESUncheckedUpdateManyInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ROLESCountOrderByAggregateInput = {
    nombre?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type ROLESAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ROLESMaxOrderByAggregateInput = {
    nombre?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type ROLESMinOrderByAggregateInput = {
    nombre?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type ROLESSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ROLESScalarRelationFilter = {
    is?: Prisma.ROLESWhereInput;
    isNot?: Prisma.ROLESWhereInput;
};
export type ROLESCreateNestedOneWithoutUSUARIOSInput = {
    create?: Prisma.XOR<Prisma.ROLESCreateWithoutUSUARIOSInput, Prisma.ROLESUncheckedCreateWithoutUSUARIOSInput>;
    connectOrCreate?: Prisma.ROLESCreateOrConnectWithoutUSUARIOSInput;
    connect?: Prisma.ROLESWhereUniqueInput;
};
export type ROLESUpdateOneRequiredWithoutUSUARIOSNestedInput = {
    create?: Prisma.XOR<Prisma.ROLESCreateWithoutUSUARIOSInput, Prisma.ROLESUncheckedCreateWithoutUSUARIOSInput>;
    connectOrCreate?: Prisma.ROLESCreateOrConnectWithoutUSUARIOSInput;
    upsert?: Prisma.ROLESUpsertWithoutUSUARIOSInput;
    connect?: Prisma.ROLESWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ROLESUpdateToOneWithWhereWithoutUSUARIOSInput, Prisma.ROLESUpdateWithoutUSUARIOSInput>, Prisma.ROLESUncheckedUpdateWithoutUSUARIOSInput>;
};
export type ROLESCreateWithoutUSUARIOSInput = {
    nombre: string;
};
export type ROLESUncheckedCreateWithoutUSUARIOSInput = {
    nombre: string;
    id?: number;
};
export type ROLESCreateOrConnectWithoutUSUARIOSInput = {
    where: Prisma.ROLESWhereUniqueInput;
    create: Prisma.XOR<Prisma.ROLESCreateWithoutUSUARIOSInput, Prisma.ROLESUncheckedCreateWithoutUSUARIOSInput>;
};
export type ROLESUpsertWithoutUSUARIOSInput = {
    update: Prisma.XOR<Prisma.ROLESUpdateWithoutUSUARIOSInput, Prisma.ROLESUncheckedUpdateWithoutUSUARIOSInput>;
    create: Prisma.XOR<Prisma.ROLESCreateWithoutUSUARIOSInput, Prisma.ROLESUncheckedCreateWithoutUSUARIOSInput>;
    where?: Prisma.ROLESWhereInput;
};
export type ROLESUpdateToOneWithWhereWithoutUSUARIOSInput = {
    where?: Prisma.ROLESWhereInput;
    data: Prisma.XOR<Prisma.ROLESUpdateWithoutUSUARIOSInput, Prisma.ROLESUncheckedUpdateWithoutUSUARIOSInput>;
};
export type ROLESUpdateWithoutUSUARIOSInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ROLESUncheckedUpdateWithoutUSUARIOSInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ROLESCountOutputType = {
    USUARIOS: number;
};
export type ROLESCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USUARIOS?: boolean | ROLESCountOutputTypeCountUSUARIOSArgs;
};
export type ROLESCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ROLESCountOutputTypeSelect<ExtArgs> | null;
};
export type ROLESCountOutputTypeCountUSUARIOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.USUARIOSWhereInput;
};
export type ROLESSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    nombre?: boolean;
    id?: boolean;
    USUARIOS?: boolean | Prisma.ROLES$USUARIOSArgs<ExtArgs>;
    _count?: boolean | Prisma.ROLESCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rOLES"]>;
export type ROLESSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    nombre?: boolean;
    id?: boolean;
}, ExtArgs["result"]["rOLES"]>;
export type ROLESSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    nombre?: boolean;
    id?: boolean;
}, ExtArgs["result"]["rOLES"]>;
export type ROLESSelectScalar = {
    nombre?: boolean;
    id?: boolean;
};
export type ROLESOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"nombre" | "id", ExtArgs["result"]["rOLES"]>;
export type ROLESInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    USUARIOS?: boolean | Prisma.ROLES$USUARIOSArgs<ExtArgs>;
    _count?: boolean | Prisma.ROLESCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ROLESIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ROLESIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ROLESPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ROLES";
    objects: {
        USUARIOS: Prisma.$USUARIOSPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        nombre: string;
        id: number;
    }, ExtArgs["result"]["rOLES"]>;
    composites: {};
};
export type ROLESGetPayload<S extends boolean | null | undefined | ROLESDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ROLESPayload, S>;
export type ROLESCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ROLESFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ROLESCountAggregateInputType | true;
};
export interface ROLESDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ROLES'];
        meta: {
            name: 'ROLES';
        };
    };
    findUnique<T extends ROLESFindUniqueArgs>(args: Prisma.SelectSubset<T, ROLESFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ROLESClient<runtime.Types.Result.GetResult<Prisma.$ROLESPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ROLESFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ROLESFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ROLESClient<runtime.Types.Result.GetResult<Prisma.$ROLESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ROLESFindFirstArgs>(args?: Prisma.SelectSubset<T, ROLESFindFirstArgs<ExtArgs>>): Prisma.Prisma__ROLESClient<runtime.Types.Result.GetResult<Prisma.$ROLESPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ROLESFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ROLESFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ROLESClient<runtime.Types.Result.GetResult<Prisma.$ROLESPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ROLESFindManyArgs>(args?: Prisma.SelectSubset<T, ROLESFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ROLESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ROLESCreateArgs>(args: Prisma.SelectSubset<T, ROLESCreateArgs<ExtArgs>>): Prisma.Prisma__ROLESClient<runtime.Types.Result.GetResult<Prisma.$ROLESPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ROLESCreateManyArgs>(args?: Prisma.SelectSubset<T, ROLESCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ROLESCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ROLESCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ROLESPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ROLESDeleteArgs>(args: Prisma.SelectSubset<T, ROLESDeleteArgs<ExtArgs>>): Prisma.Prisma__ROLESClient<runtime.Types.Result.GetResult<Prisma.$ROLESPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ROLESUpdateArgs>(args: Prisma.SelectSubset<T, ROLESUpdateArgs<ExtArgs>>): Prisma.Prisma__ROLESClient<runtime.Types.Result.GetResult<Prisma.$ROLESPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ROLESDeleteManyArgs>(args?: Prisma.SelectSubset<T, ROLESDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ROLESUpdateManyArgs>(args: Prisma.SelectSubset<T, ROLESUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ROLESUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ROLESUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ROLESPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ROLESUpsertArgs>(args: Prisma.SelectSubset<T, ROLESUpsertArgs<ExtArgs>>): Prisma.Prisma__ROLESClient<runtime.Types.Result.GetResult<Prisma.$ROLESPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ROLESCountArgs>(args?: Prisma.Subset<T, ROLESCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ROLESCountAggregateOutputType> : number>;
    aggregate<T extends ROLESAggregateArgs>(args: Prisma.Subset<T, ROLESAggregateArgs>): Prisma.PrismaPromise<GetROLESAggregateType<T>>;
    groupBy<T extends ROLESGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ROLESGroupByArgs['orderBy'];
    } : {
        orderBy?: ROLESGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ROLESGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetROLESGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ROLESFieldRefs;
}
export interface Prisma__ROLESClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    USUARIOS<T extends Prisma.ROLES$USUARIOSArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ROLES$USUARIOSArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$USUARIOSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ROLESFieldRefs {
    readonly nombre: Prisma.FieldRef<"ROLES", 'String'>;
    readonly id: Prisma.FieldRef<"ROLES", 'Int'>;
}
export type ROLESFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ROLESSelect<ExtArgs> | null;
    omit?: Prisma.ROLESOmit<ExtArgs> | null;
    include?: Prisma.ROLESInclude<ExtArgs> | null;
    where: Prisma.ROLESWhereUniqueInput;
};
export type ROLESFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ROLESSelect<ExtArgs> | null;
    omit?: Prisma.ROLESOmit<ExtArgs> | null;
    include?: Prisma.ROLESInclude<ExtArgs> | null;
    where: Prisma.ROLESWhereUniqueInput;
};
export type ROLESFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ROLESSelect<ExtArgs> | null;
    omit?: Prisma.ROLESOmit<ExtArgs> | null;
    include?: Prisma.ROLESInclude<ExtArgs> | null;
    where?: Prisma.ROLESWhereInput;
    orderBy?: Prisma.ROLESOrderByWithRelationInput | Prisma.ROLESOrderByWithRelationInput[];
    cursor?: Prisma.ROLESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ROLESScalarFieldEnum | Prisma.ROLESScalarFieldEnum[];
};
export type ROLESFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ROLESSelect<ExtArgs> | null;
    omit?: Prisma.ROLESOmit<ExtArgs> | null;
    include?: Prisma.ROLESInclude<ExtArgs> | null;
    where?: Prisma.ROLESWhereInput;
    orderBy?: Prisma.ROLESOrderByWithRelationInput | Prisma.ROLESOrderByWithRelationInput[];
    cursor?: Prisma.ROLESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ROLESScalarFieldEnum | Prisma.ROLESScalarFieldEnum[];
};
export type ROLESFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ROLESSelect<ExtArgs> | null;
    omit?: Prisma.ROLESOmit<ExtArgs> | null;
    include?: Prisma.ROLESInclude<ExtArgs> | null;
    where?: Prisma.ROLESWhereInput;
    orderBy?: Prisma.ROLESOrderByWithRelationInput | Prisma.ROLESOrderByWithRelationInput[];
    cursor?: Prisma.ROLESWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ROLESScalarFieldEnum | Prisma.ROLESScalarFieldEnum[];
};
export type ROLESCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ROLESSelect<ExtArgs> | null;
    omit?: Prisma.ROLESOmit<ExtArgs> | null;
    include?: Prisma.ROLESInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ROLESCreateInput, Prisma.ROLESUncheckedCreateInput>;
};
export type ROLESCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ROLESCreateManyInput | Prisma.ROLESCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ROLESCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ROLESSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ROLESOmit<ExtArgs> | null;
    data: Prisma.ROLESCreateManyInput | Prisma.ROLESCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ROLESUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ROLESSelect<ExtArgs> | null;
    omit?: Prisma.ROLESOmit<ExtArgs> | null;
    include?: Prisma.ROLESInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ROLESUpdateInput, Prisma.ROLESUncheckedUpdateInput>;
    where: Prisma.ROLESWhereUniqueInput;
};
export type ROLESUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ROLESUpdateManyMutationInput, Prisma.ROLESUncheckedUpdateManyInput>;
    where?: Prisma.ROLESWhereInput;
    limit?: number;
};
export type ROLESUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ROLESSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ROLESOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ROLESUpdateManyMutationInput, Prisma.ROLESUncheckedUpdateManyInput>;
    where?: Prisma.ROLESWhereInput;
    limit?: number;
};
export type ROLESUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ROLESSelect<ExtArgs> | null;
    omit?: Prisma.ROLESOmit<ExtArgs> | null;
    include?: Prisma.ROLESInclude<ExtArgs> | null;
    where: Prisma.ROLESWhereUniqueInput;
    create: Prisma.XOR<Prisma.ROLESCreateInput, Prisma.ROLESUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ROLESUpdateInput, Prisma.ROLESUncheckedUpdateInput>;
};
export type ROLESDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ROLESSelect<ExtArgs> | null;
    omit?: Prisma.ROLESOmit<ExtArgs> | null;
    include?: Prisma.ROLESInclude<ExtArgs> | null;
    where: Prisma.ROLESWhereUniqueInput;
};
export type ROLESDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ROLESWhereInput;
    limit?: number;
};
export type ROLES$USUARIOSArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.USUARIOSSelect<ExtArgs> | null;
    omit?: Prisma.USUARIOSOmit<ExtArgs> | null;
    include?: Prisma.USUARIOSInclude<ExtArgs> | null;
    where?: Prisma.USUARIOSWhereInput;
    orderBy?: Prisma.USUARIOSOrderByWithRelationInput | Prisma.USUARIOSOrderByWithRelationInput[];
    cursor?: Prisma.USUARIOSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.USUARIOSScalarFieldEnum | Prisma.USUARIOSScalarFieldEnum[];
};
export type ROLESDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ROLESSelect<ExtArgs> | null;
    omit?: Prisma.ROLESOmit<ExtArgs> | null;
    include?: Prisma.ROLESInclude<ExtArgs> | null;
};
