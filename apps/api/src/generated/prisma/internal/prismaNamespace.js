import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.10.1",
    engine: "d1b3f377ca835d73fd50954a5e22128b9ebdd6b8"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    AMISTADES: 'AMISTADES',
    AVISOS: 'AVISOS',
    BLOQUEOS: 'BLOQUEOS',
    CARRERAS: 'CARRERAS',
    CHATS: 'CHATS',
    COMENTARIOS: 'COMENTARIOS',
    GRUPOS: 'GRUPOS',
    MENSAJES: 'MENSAJES',
    MIEMBROS_CHAT: 'MIEMBROS_CHAT',
    MIEMBROS_GRUPO: 'MIEMBROS_GRUPO',
    MULTIMEDIA: 'MULTIMEDIA',
    NOTIFICACIONES: 'NOTIFICACIONES',
    PERFILES: 'PERFILES',
    PUBLICACIONES: 'PUBLICACIONES',
    REACCIONES: 'REACCIONES',
    REPORTES: 'REPORTES',
    ROLES: 'ROLES',
    SANCIONES: 'SANCIONES',
    USUARIOS: 'USUARIOS'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const AMISTADESScalarFieldEnum = {
    id: 'id',
    solicitante_id: 'solicitante_id',
    receptor_id: 'receptor_id',
    estado: 'estado',
    creado_en: 'creado_en',
    respondido_en: 'respondido_en'
};
export const AVISOSScalarFieldEnum = {
    id: 'id',
    autor_id: 'autor_id',
    titulo: 'titulo',
    contenido: 'contenido',
    categoria: 'categoria',
    urgente: 'urgente',
    alcance: 'alcance',
    carrera_id: 'carrera_id',
    cuatrimestre: 'cuatrimestre',
    publicado_en: 'publicado_en'
};
export const BLOQUEOSScalarFieldEnum = {
    bloqueador_id: 'bloqueador_id',
    bloqueado_id: 'bloqueado_id',
    creado_en: 'creado_en'
};
export const CARRERASScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    edificio: 'edificio'
};
export const CHATSScalarFieldEnum = {
    id: 'id',
    tipo: 'tipo',
    nombre: 'nombre',
    creador_id: 'creador_id',
    creado_en: 'creado_en'
};
export const COMENTARIOSScalarFieldEnum = {
    id: 'id',
    publicacion_id: 'publicacion_id',
    autor_id: 'autor_id',
    contenido: 'contenido',
    creado_en: 'creado_en',
    eliminado_en: 'eliminado_en'
};
export const GRUPOSScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    imagen_url: 'imagen_url',
    tipo: 'tipo',
    privacidad: 'privacidad',
    carrera_id: 'carrera_id',
    creador_id: 'creador_id',
    creado_en: 'creado_en'
};
export const MENSAJESScalarFieldEnum = {
    id: 'id',
    chat_id: 'chat_id',
    remitente_id: 'remitente_id',
    contenido: 'contenido',
    enviado_en: 'enviado_en'
};
export const MIEMBROS_CHATScalarFieldEnum = {
    chat_id: 'chat_id',
    usuario_id: 'usuario_id',
    rol: 'rol',
    fijado: 'fijado',
    archivado: 'archivado',
    eliminado: 'eliminado',
    unido_en: 'unido_en'
};
export const MIEMBROS_GRUPOScalarFieldEnum = {
    grupo_id: 'grupo_id',
    usuario_id: 'usuario_id',
    rol: 'rol',
    unido_en: 'unido_en'
};
export const MULTIMEDIAScalarFieldEnum = {
    id: 'id',
    publicacion_id: 'publicacion_id',
    mensaje_id: 'mensaje_id',
    tipo: 'tipo',
    url: 'url',
    mime_type: 'mime_type',
    tamano_bytes: 'tamano_bytes',
    creado_en: 'creado_en'
};
export const NOTIFICACIONESScalarFieldEnum = {
    id: 'id',
    usuario_id: 'usuario_id',
    actor_id: 'actor_id',
    tipo: 'tipo',
    aviso_id: 'aviso_id',
    publicacion_id: 'publicacion_id',
    leida: 'leida',
    creado_en: 'creado_en'
};
export const PERFILESScalarFieldEnum = {
    id: 'id',
    usuario_id: 'usuario_id',
    nombre: 'nombre',
    apellidos: 'apellidos',
    matricula: 'matricula',
    carrera_id: 'carrera_id',
    cuatrimestre: 'cuatrimestre',
    biografia: 'biografia',
    avatar_url: 'avatar_url',
    color_fondo_perfil: 'color_fondo_perfil',
    perfil_privado: 'perfil_privado'
};
export const PUBLICACIONESScalarFieldEnum = {
    id: 'id',
    autor_id: 'autor_id',
    publicacion_origen_id: 'publicacion_origen_id',
    contenido: 'contenido',
    tipo: 'tipo',
    creado_en: 'creado_en',
    eliminada_en: 'eliminada_en',
    eliminada_por: 'eliminada_por'
};
export const REACCIONESScalarFieldEnum = {
    usuario_id: 'usuario_id',
    publicacion_id: 'publicacion_id',
    tipo: 'tipo',
    creado_en: 'creado_en'
};
export const REPORTESScalarFieldEnum = {
    id: 'id',
    reportante_id: 'reportante_id',
    usuario_reportado_id: 'usuario_reportado_id',
    publicacion_id: 'publicacion_id',
    comentario_id: 'comentario_id',
    grupo_id: 'grupo_id',
    motivo: 'motivo',
    descripcion: 'descripcion',
    estado: 'estado',
    revisado_por: 'revisado_por',
    creado_en: 'creado_en',
    resuelto_en: 'resuelto_en'
};
export const ROLESScalarFieldEnum = {
    nombre: 'nombre',
    id: 'id'
};
export const SANCIONESScalarFieldEnum = {
    id: 'id',
    usuario_id: 'usuario_id',
    admin_id: 'admin_id',
    reporte_id: 'reporte_id',
    tipo: 'tipo',
    motivo: 'motivo',
    inicia_en: 'inicia_en',
    termina_en: 'termina_en',
    activa: 'activa'
};
export const USUARIOSScalarFieldEnum = {
    id: 'id',
    password_hash: 'password_hash',
    estado: 'estado',
    creado_en: 'creado_en',
    ultimo_acceso: 'ultimo_acceso',
    correo_institucional: 'correo_institucional',
    rol_id: 'rol_id'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map