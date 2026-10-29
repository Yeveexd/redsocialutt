# RedSocialUTT

Repositorio del proyecto **RedSocialUTT**, una aplicación web organizada como monorepo que integra un frontend desarrollado con Next.js y una API backend desarrollada con NestJS. La administración de paquetes y la ejecución de tareas se gestionan mediante pnpm y Turborepo.

**Repositorio remoto:** https://github.com/Yeveexd/redsocialutt

---

## Índice

- [1. Descripción del proyecto](#1-descripción-del-proyecto)
- [2. Unidad 1: Control de versiones](#2-unidad-1-control-de-versiones)
- [3. Unidad 2: Configuración del entorno de versionamiento](#3-unidad-2-configuración-del-entorno-de-versionamiento)
- [4. Estructura del repositorio](#4-estructura-del-repositorio)
- [5. Instalación](#5-instalación)
- [6. Ejecución en desarrollo](#6-ejecución-en-desarrollo)
- [7. Flujo de trabajo con Git](#7-flujo-de-trabajo-con-git)
- [8. Seguridad y buenas prácticas](#8-seguridad-y-buenas-prácticas)
- [9. Diccionario de datos](#9-diccionario-de-datos)
- [10. DER](#10-der-diagrama-entidad-relación)
- [11. Arquitectura](#11-arquitectura)
- [12. Maquetacion y prototipado](#12-maquetaciòn-y-prototipado)
---

## 1. Descripción del proyecto

RedSocialUTT es un proyecto de aplicación web con arquitectura cliente-servidor, dividido en dos aplicaciones principales:

- **Frontend:** Next.js, encargado de la interfaz de usuario.
- **Backend:** NestJS, encargado de la lógica del servidor y de exponer los endpoints de la API.

El repositorio utiliza una estructura monorepo para centralizar el código fuente, las dependencias y la configuración de las aplicaciones.

### Tecnologías principales

| Tecnología  | Función                                            |
| ----------- | -------------------------------------------------- |
| Git         | Control de versiones distribuido                   |
| GitHub      | Alojamiento remoto y colaboración                  |
| Node.js 22+ | Entorno de ejecución de JavaScript                 |
| pnpm 10+    | Administración de paquetes                         |
| Next.js     | Desarrollo del frontend                            |
| NestJS      | Desarrollo de la API                               |
| Turborepo   | Orquestación y optimización de tareas del monorepo |
| TypeScript  | Tipado estático del código                         |

---

## 2. Unidad 1: Control de versiones

### 2.1. Sistema de control de versiones seleccionado: Git

Se seleccionó **Git** como sistema de control de versiones porque permite registrar la evolución del código fuente mediante commits, mantener un historial de modificaciones y recuperar versiones anteriores del proyecto.

Git es un sistema distribuido, por lo que cada clon del repositorio contiene el historial de versiones disponible. Esto permite trabajar localmente sin depender de una conexión permanente con el servidor remoto.

Sus principales ventajas para RedSocialUTT son:

- **Historial de cambios:** permite identificar qué archivos cambiaron, cuándo y en qué commit.
- **Ramas de desarrollo:** facilita implementar funcionalidades y corregir errores sin modificar directamente la rama principal.
- **Integración de cambios:** permite combinar el trabajo realizado por diferentes colaboradores.
- **Trazabilidad:** relaciona las modificaciones con sus autores y mensajes de commit.
- **Recuperación:** facilita regresar a estados anteriores cuando una modificación introduce errores.
- **Integración continua:** permite conectar el repositorio con herramientas de pruebas, análisis estático y despliegue automatizado.

Estas características son adecuadas para un proyecto que contiene frontend y backend, ya que permiten mantener ambos componentes bajo un mismo historial de cambios y coordinar sus modificaciones.

### 2.2. Plataforma de alojamiento seleccionada: GitHub

Se seleccionó **GitHub** como plataforma de alojamiento remoto para almacenar el repositorio y facilitar la colaboración.

Repositorio del proyecto: https://github.com/Yeveexd/redsocialutt

La elección se justifica por los siguientes aspectos:

- **Integración con Git:** permite sincronizar el repositorio local y el remoto mediante `push`, `pull` y `fetch`.
- **Colaboración:** permite trabajar con ramas, solicitudes de incorporación de cambios (_pull requests_) y revisiones de código.
- **Trazabilidad:** ofrece historial de commits, comparación de cambios y seguimiento de incidencias.
- **Automatización:** permite incorporar flujos de integración continua mediante GitHub Actions.
- **Gestión de permisos:** permite controlar quién puede consultar o modificar el repositorio.
- **Documentación:** el archivo `README.md` presenta la información principal directamente en la página del repositorio.

Git y GitHub cumplen funciones diferentes: Git administra el historial de versiones, mientras que GitHub aloja el repositorio remoto y proporciona herramientas de colaboración.

### 2.3. Modelo de trabajo

Se propone utilizar una rama principal `main` y ramas de trabajo para nuevas funcionalidades o correcciones.

Ejemplo de nombres de ramas:

- `feature/nombre-funcionalidad`
- `fix/nombre-error`
- `docs/actualizacion-readme`

Los cambios deben registrarse en commits pequeños y descriptivos. Antes de integrar una rama de trabajo en `main`, se recomienda revisar las modificaciones y ejecutar las pruebas correspondientes.

---

## 3. Unidad 2: Configuración del entorno de versionamiento

### 3.1. Configuración inicial de Git

Para comprobar que Git está instalado y conocer su versión:

```bash
git --version
```

La identidad utilizada para registrar los commits se configura mediante:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-correo@example.com"
```

Para consultar la configuración:

```bash
git config --global --list
```

La identidad del commit no sustituye la autenticación con GitHub. El acceso al repositorio remoto debe configurarse por separado mediante HTTPS o SSH.

### 3.2. Clonación del repositorio remoto

```bash
git clone https://github.com/Yeveexd/redsocialutt.git
cd redsocialutt
```

El comando `git clone` descarga el repositorio y establece la configuración necesaria para comunicarse con el remoto original, normalmente identificado como `origin`.

Para verificar los remotos configurados:

```bash
git remote -v
```

Para consultar el estado del repositorio:

```bash
git status
```

### 3.3. Estructura y archivos de configuración

Los archivos principales relacionados con el versionamiento son:

| Archivo o directorio  | Propósito                                                                                                                   |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `.git/`               | Almacena el historial, las referencias y la configuración local de Git. Es generado por Git y no debe editarse manualmente. |
| `.gitignore`          | Define archivos y directorios que Git debe ignorar cuando todavía no están siendo rastreados.                               |
| `.env` y `.env.local` | Contienen configuración local y variables de entorno; no deben publicarse si incluyen información sensible.                 |
| `package.json`        | Define scripts, metadatos y dependencias del proyecto.                                                                      |
| `pnpm-lock.yaml`      | Registra las versiones resueltas de las dependencias para facilitar instalaciones reproducibles.                            |
| `pnpm-workspace.yaml` | Define los paquetes que forman parte del workspace.                                                                         |
| `turbo.json`          | Configura la ejecución de tareas del monorepo mediante Turborepo.                                                           |
| `README.md`           | Centraliza la documentación del proyecto, instalación y configuración.                                                      |

### 3.4. Configuración de `.gitignore`

El archivo `.gitignore` de la raíz debe excluir dependencias instaladas, resultados de compilación, cachés, archivos locales y secretos.

Ejemplo de configuración:

```gitignore
# Dependencias
node_modules/

# Variables de entorno y secretos
.env
.env.*
!.env.example
!.env.*.example

# Resultados de compilación
dist/
build/
.next/
out/
coverage/

# Cachés
.turbo/
.cache/

# Archivos locales de TypeScript
*.tsbuildinfo

# Registros
*.log
npm-debug.log*
pnpm-debug.log*

# Archivos del sistema operativo y editores
.DS_Store
Thumbs.db
.vscode/
.idea/
```

**Consideraciones:**

- Las reglas del `.gitignore` raíz se aplican a todo el repositorio, salvo que otros archivos o reglas modifiquen su alcance.
- Los archivos `.env.example` deben contener únicamente nombres de variables y valores de ejemplo no sensibles.
- Si algún archivo ya está siendo rastreado por Git, agregarlo a `.gitignore` no lo elimina del historial ni deja de rastrearlo automáticamente.
- Antes de publicar cambios, se debe verificar que no se hayan incluido credenciales, tokens, contraseñas o claves privadas.

Para comprobar qué archivos están siendo ignorados:

```bash
git status --short
git check-ignore -v ruta/al/archivo
```

La estructura actual contiene archivos `.gitignore` tanto en la raíz como en las aplicaciones `apps/api` y `apps/web`. Se deben revisar para evitar reglas contradictorias o exclusiones incompletas.

### 3.5. Autenticación y control de accesos

Para trabajar con el repositorio remoto, GitHub admite autenticación mediante HTTPS o SSH.

**Opción A: HTTPS**

Se utiliza la URL HTTPS del repositorio. Cuando se requiere autenticación, GitHub admite mecanismos como tokens de acceso personal o Git Credential Manager. No se debe utilizar la contraseña de la cuenta como sustituto de un token.

**Opción B: SSH**

Se puede generar una llave SSH para autenticar el equipo:

```bash
ssh-keygen -t ed25519 -C "tu-correo@example.com"
```

Después, se agrega la clave pública generada, normalmente `~/.ssh/id_ed25519.pub`, a la configuración de claves SSH de GitHub.

La clave privada `~/.ssh/id_ed25519` nunca debe compartirse ni subirse al repositorio.

Para comprobar la conexión:

```bash
ssh -T git@github.com
```

Para cambiar el remoto a SSH:

```bash
git remote set-url origin git@github.com:Yeveexd/redsocialutt.git
```

La elección entre HTTPS y SSH depende del entorno de trabajo y de las políticas de seguridad. Ninguno de los métodos debe exponer credenciales dentro del código fuente.

### 3.6. Control de accesos

El acceso al repositorio debe seguir el principio de mínimo privilegio:

- Mantener el repositorio público o privado según los requisitos del proyecto.
- Conceder permisos de escritura únicamente a quienes deban modificar el código.
- Utilizar solicitudes de incorporación de cambios para revisar modificaciones cuando exista colaboración.
- Activar las protecciones de la rama `main` si están disponibles y son adecuadas para el proyecto.
- Evitar compartir cuentas, tokens o llaves privadas.

La existencia de un repositorio remoto no garantiza por sí misma que estas medidas estén activadas. Su configuración debe verificarse directamente en GitHub.

---

## 4. Estructura del repositorio

La estructura principal del proyecto es la siguiente:

```text
redsocialutt/
├── apps/
│   ├── api/
│   │   ├── src/
│   │   │   ├── hello/
│   │   │   ├── app.module.ts
│   │   │   └── main.ts
│   │   ├── test/
│   │   ├── .gitignore
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── README.md
│   └── web/
│       ├── public/
│       ├── src/
│       │   └── app/
│       ├── .gitignore
│       ├── package.json
│       ├── next.config.ts
│       ├── tsconfig.json
│       └── README.md
├── .gitignore
├── .prettierrc
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

La estructura representa los componentes principales del repositorio. Los archivos generados localmente, como `.turbo/cache`, `node_modules` y los resultados de compilación, no deben formar parte del control de versiones.

---

## 5. Instalación

### 5.1. Requisitos

- Node.js 22 o superior.
- pnpm 10 o superior.
- Git.
- Acceso al repositorio remoto.

Se recomienda verificar las versiones instaladas:

```bash
node --version
pnpm --version
git --version
```

### 5.2. Clonar el repositorio

```bash
git clone https://github.com/Yeveexd/redsocialutt.git
cd redsocialutt
```

### 5.3. Instalar dependencias

Desde la raíz del proyecto:

```bash
pnpm install
```

Este comando instala las dependencias declaradas por los paquetes del monorepo y utiliza `pnpm-lock.yaml` para resolver versiones reproducibles.

### 5.4. Variables de entorno

Si existen los archivos de ejemplo correspondientes, crear las configuraciones locales:

```bash
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env.local
```

Los comandos anteriores están orientados a entornos Unix. En PowerShell se puede utilizar:

```powershell
Copy-Item apps/api/.env.example apps/api/.env
Copy-Item apps/web/.env.example apps/web/.env.local
```

Estos comandos requieren que los archivos `.env.example` existan realmente en el repositorio. Si no están presentes, deben crearse y documentarse las variables necesarias antes de ejecutar las aplicaciones.

No se deben publicar los archivos `.env` con credenciales reales.

---

## 6. Ejecución en desarrollo

Desde la raíz del proyecto:

```bash
pnpm dev
```

El comando ejecuta el script `dev` definido en la configuración del monorepo. Debe comprobarse que los scripts de `package.json` y `turbo.json` estén configurados para iniciar ambas aplicaciones.

Direcciones locales previstas:

- Frontend Next.js: http://localhost:3000
- API NestJS: http://localhost:8080

Los puertos indicados dependen de la configuración efectiva de cada aplicación.

---

## 7. Flujo de trabajo con Git

### 7.1. Consultar el estado

```bash
git status
```

### 7.2. Crear una rama de trabajo

```bash
git switch -c feature/nueva-funcionalidad
```

### 7.3. Preparar los cambios

```bash
git add .
git diff --cached
```

La revisión de `git diff --cached` permite inspeccionar los cambios preparados antes de registrarlos.

### 7.4. Crear un commit

```bash
git commit -m "feat: agregar nueva funcionalidad"
```

Los mensajes deben describir el propósito del cambio. Se recomienda una convención consistente, por ejemplo:

- `feat:` nueva funcionalidad.
- `fix:` corrección de errores.
- `docs:` cambios de documentación.
- `refactor:` reorganización interna sin cambiar el comportamiento esperado.
- `test:` incorporación o modificación de pruebas.

### 7.5. Publicar la rama

```bash
git push -u origin feature/nueva-funcionalidad
```

### 7.6. Actualizar el repositorio local

```bash
git fetch origin
git pull
```

Antes de integrar cambios de otras ramas, deben resolverse los conflictos y ejecutarse las verificaciones correspondientes.

---

## 8. Seguridad y buenas prácticas

Para mantener un historial de versiones seguro y confiable:

1. No incluir contraseñas, tokens, llaves privadas ni credenciales en los commits.
2. Mantener actualizado el archivo `.gitignore`.
3. Conservar `pnpm-lock.yaml` en el repositorio para facilitar instalaciones reproducibles.
4. Revisar los cambios mediante `git diff` antes de crear commits.
5. Utilizar ramas separadas para funcionalidades y correcciones.
6. Evitar subir cachés, archivos temporales y resultados de compilación.
7. Documentar las variables de entorno sin publicar sus valores sensibles.
8. Revisar los permisos del repositorio remoto periódicamente.
9. Ejecutar pruebas y comprobaciones de calidad antes de integrar cambios en `main`.
10. Si se expone una credencial, revocarla o rotarla inmediatamente. Eliminarla del último commit no basta para borrarla del historial.

--

## 9. Diccionario de datos

| Marca | Significado |
|---|---|
| PK | Llave primaria |
| FK | Llave foránea (referencia a otra tabla) |
| UK | Valor único |
| NOT NULL | Campo obligatorio |
| NULL | Campo opcional |

### 1. Roles

| Tipo de dato | Restricciones | Nombre del campo | Descripción |
|---|---|---|---|
| SERIAL | PK | `id` | Identificador del rol. |
| VARCHAR(20) | UK, NOT NULL | `nombre` | Nombre del rol: usuario común o administrador. |

### 2. Usuarios

| Tipo de dato | Restricciones | Nombre del campo | Descripción |
|---|---|---|---|
| UUID | PK | `id` | Identificador único de la cuenta. |
| VARCHAR(120) | UK, NOT NULL | `correo_institucional` | Correo del dominio @utt.edu.mx usado para autenticarse. |
| VARCHAR(255) | NOT NULL | `password_hash` | Contraseña cifrada. |
| INTEGER | FK, NOT NULL | `rol_id` | Rol de la cuenta. Referencia a roles(id). |
| VARCHAR(12) | NOT NULL | `estado` | Estado de la cuenta: activo, suspendido o vetado. |
| TIMESTAMPTZ | NOT NULL | `creado_en` | Fecha y hora de registro. |
| TIMESTAMPTZ | NULL | `ultimo_acceso` | Fecha y hora del último inicio de sesión. |

### 3. Grupos

| Tipo de dato | Restricciones | Nombre del campo | Descripción |
|---|---|---|---|
| UUID | PK | `id` | Identificador del grupo. |
| VARCHAR(100) | NOT NULL | `nombre` | Nombre del grupo. |
| VARCHAR(300) | NULL | `descripcion` | Propósito del grupo. |
| TEXT | NULL | `imagen_url` | URL de la imagen del grupo. |
| VARCHAR(15) | NOT NULL | `tipo` | asignatura, carrera o proyecto. |
| VARCHAR(10) | NOT NULL | `privacidad` | publico o privado. |
| INTEGER | FK, NULL | `carrera_id` | Carrera asociada. Referencia a carreras(id). |
| UUID | FK, NOT NULL | `creador_id` | Usuario que creó el grupo. Referencia a usuarios(id). |
| TIMESTAMPTZ | NOT NULL | `creado_en` | Fecha de creación. |

### 4. Avisos

| Tipo de dato | Restricciones | Nombre del campo | Descripción |
|---|---|---|---|
| UUID | PK | `id` | Identificador del aviso. |
| UUID | FK, NOT NULL | `autor_id` | Docente o administrador que lo publica. Referencia a usuarios(id). |
| VARCHAR(150) | NOT NULL | `titulo` | Título del aviso. |
| TEXT | NOT NULL | `contenido` | Cuerpo del aviso. |
| VARCHAR(15) | NOT NULL | `categoria` | academico, administrativo o evento. |
| BOOLEAN | NOT NULL | `urgente` | TRUE = se difunde en tiempo real por WebSocket. |
| VARCHAR(10) | NOT NULL | `alcance` | general, carrera o grado. |
| INTEGER | FK, NULL | `carrera_id` | Carrera destino si alcance = carrera o grado. Referencia a carreras(id). |
| SMALLINT | NULL | `cuatrimestre` | Grado destino si alcance = grado. |
| TIMESTAMPTZ | NOT NULL | `publicado_en` | Fecha y hora de publicación. |

### 5. Publicaciones

| Tipo de dato | Restricciones | Nombre del campo | Descripción |
|---|---|---|---|
| UUID | PK | `id` | Identificador de la publicación. |
| UUID | FK, NOT NULL | `autor_id` | Autor. Referencia a usuarios(id). |
| UUID | FK, NULL | `publicacion_origen_id` | Si es una publicación compartida, apunta a la original. Referencia a publicaciones(id). |
| TEXT | NULL | `contenido` | Texto de la publicación. |
| VARCHAR(10) | NOT NULL | `tipo` | texto, imagen o video. |
| TIMESTAMPTZ | NOT NULL | `creado_en` | Fecha de publicación. |
| TIMESTAMPTZ | NULL | `eliminada_en` | Borrado lógico; nulo si sigue visible. |
| UUID | FK, NULL | `eliminada_por` | Usuario o administrador que la eliminó. Referencia a usuarios(id). |

### 6. Comentarios

| Tipo de dato | Restricciones | Nombre del campo | Descripción |
|---|---|---|---|
| UUID | PK | `id` | Identificador del comentario. |
| UUID | FK, NOT NULL | `publicacion_id` | Publicación comentada. Referencia a publicaciones(id). |
| UUID | FK, NOT NULL | `autor_id` | Autor. Referencia a usuarios(id). |
| VARCHAR(500) | NOT NULL | `contenido` | Texto del comentario. |
| TIMESTAMPTZ | NOT NULL | `creado_en` | Fecha del comentario. |
| TIMESTAMPTZ | NULL | `eliminado_en` | Borrado lógico. |

### 7. Reacciones

| Tipo de dato | Restricciones | Nombre del campo | Descripción |
|---|---|---|---|
| UUID | PK, FK | `usuario_id` | Usuario que reacciona. Referencia a usuarios(id). |
| UUID | PK, FK | `publicacion_id` | Publicación. Referencia a publicaciones(id). |
| VARCHAR(12) | NOT NULL | `tipo` | me_gusta o no_me_gusta. |
| TIMESTAMPTZ | NOT NULL | `creado_en` | Fecha de la reacción. |

### 8. Notificaciones

| Tipo de dato | Restricciones | Nombre del campo | Descripción |
|---|---|---|---|
| UUID | PK | `id` | Identificador de la notificación. |
| UUID | FK, NOT NULL | `usuario_id` | Destinatario. Referencia a usuarios(id). |
| UUID | FK, NULL | `actor_id` | Usuario que originó la interacción. Referencia a usuarios(id). |
| VARCHAR(20) | NOT NULL | `tipo` | aviso, comentario, me_gusta, no_me_gusta, compartido o solicitud_amistad. |
| UUID | FK, NULL | `aviso_id` | Aviso relacionado. Referencia a avisos(id). |
| UUID | FK, NULL | `publicacion_id` | Publicación relacionada. Referencia a publicaciones(id). |
| BOOLEAN | NOT NULL | `leida` | Indica si el usuario ya la vio. Por defecto FALSE. |
| TIMESTAMPTZ | NOT NULL | `creado_en` | Fecha de generación. |

### 9. Miembros grupo

| Tipo de dato | Restricciones | Nombre del campo | Descripción |
|---|---|---|---|
| UUID | PK, FK | `grupo_id` | Grupo. Referencia a grupos(id). |
| UUID | PK, FK | `usuario_id` | Miembro. Referencia a usuarios(id). |
| VARCHAR(13) | NOT NULL | `rol` | administrador o miembro. |
| TIMESTAMPTZ | NOT NULL | `unido_en` | Fecha de ingreso al grupo. |

### 10. Carreras

| Tipo de dato | Restricciones | Nombre del campo | Descripción |
|---|---|---|---|
| SERIAL | PK | `id` | Identificador de la carrera. |
| VARCHAR(100) | UK, NOT NULL | `nombre` | Nombre de la carrera (ej. Tecnologías de la Información). |
| VARCHAR(100) | NOT NULL | `edificio` | Edificio al que pertenece la carrera. |

### 11. Perfiles

| Tipo de dato | Restricciones | Nombre del campo | Descripción |
|---|---|---|---|
| UUID | PK | `id` | Identificador del perfil. |
| UUID | FK, UK, NOT NULL | `usuario_id` | Cuenta a la que pertenece. Relación 1 a 1 con usuarios(id). |
| VARCHAR(80) | NOT NULL | `nombre` | Nombre(s) visible(s) en el perfil. |
| VARCHAR(100) | NOT NULL | `apellidos` | Apellidos. |
| VARCHAR(20) | UK, NULL | `matricula` | Matrícula del alumno. |
| INTEGER | FK, NULL | `carrera_id` | Carrera del perfil. Referencia a carreras(id). |
| SMALLINT | NULL | `cuatrimestre` | Grado o cuatrimestre actual. |
| VARCHAR(500) | NULL | `biografia` | Descripción personal. |
| TEXT | NULL | `avatar_url` | URL de la foto de perfil. |
| VARCHAR(20) | NULL | `color_fondo_perfil` | Color de fondo en formato #RRGGBB. |
| BOOLEAN | NOT NULL | `perfil_privado` | TRUE = privado, FALSE = público. Por defecto FALSE. |

### 12. Amistades

| Tipo de dato | Restricciones | Nombre del campo | Descripción |
|---|---|---|---|
| UUID | PK | `id` | Identificador de la solicitud. |
| UUID | FK, NOT NULL | `solicitante_id` | Perfil que envía la solicitud. Referencia a perfiles(id). |
| UUID | FK, NOT NULL | `receptor_id` | Perfil que recibe la solicitud. Referencia a perfiles(id). |
| VARCHAR(10) | NOT NULL | `estado` | pendiente, aceptada o rechazada. |
| TIMESTAMPTZ | NOT NULL | `creado_en` | Fecha de envío de la solicitud. |
| TIMESTAMPTZ | NULL | `respondido_en` | Fecha en que se aceptó o rechazó. |

### 13. Bloqueos

| Tipo de dato | Restricciones | Nombre del campo | Descripción |
|---|---|---|---|
| UUID | PK, FK | `bloqueador_id` | Usuario que bloquea. Referencia a usuarios(id). |
| UUID | PK, FK | `bloqueado_id` | Usuario bloqueado. Referencia a usuarios(id). |
| TIMESTAMPTZ | NOT NULL | `creado_en` | Fecha del bloqueo. |

### 14. Reportes

| Tipo de dato | Restricciones | Nombre del campo | Descripción |
|---|---|---|---|
| UUID | PK | `id` | Identificador del reporte. |
| UUID | FK, NOT NULL | `reportante_id` | Usuario que reporta. Referencia a usuarios(id). |
| UUID | FK, NULL | `usuario_reportado_id` | Usuario reportado. Referencia a usuarios(id). |
| UUID | FK, NULL | `publicacion_id` | Publicación reportada. Referencia a publicaciones(id). |
| UUID | FK, NULL | `comentario_id` | Comentario reportado. Referencia a comentarios(id). |
| UUID | FK, NULL | `grupo_id` | Grupo o canal reportado. Referencia a grupos(id). Al menos un objetivo debe ser no nulo (CHECK). |
| VARCHAR(250) | NOT NULL | `motivo` | Razón del reporte (ofensivo, spam, información falsa, etc.). |
| VARCHAR(500) | NULL | `descripcion` | Detalle adicional del reportante. |
| VARCHAR(12) | NOT NULL | `estado` | pendiente, en_revision, resuelto o rechazado. |
| UUID | FK, NULL | `revisado_por` | Administrador que lo atiende. Referencia a usuarios(id). |
| TIMESTAMPTZ | NOT NULL | `creado_en` | Fecha del reporte. |
| TIMESTAMPTZ | NULL | `resuelto_en` | Fecha de resolución. |

### 16. Sanciones

| Tipo de dato | Restricciones | Nombre del campo | Descripción |
|---|---|---|---|
| UUID | PK | `id` | Identificador de la sanción. |
| UUID | FK, NOT NULL | `usuario_id` | Usuario sancionado. Referencia a usuarios(id). |
| UUID | FK, NOT NULL | `admin_id` | Administrador que sanciona. Referencia a usuarios(id). |
| UUID | FK, NULL | `reporte_id` | Reporte que originó la sanción (nulo si fue proactiva). Referencia a reportes(id). |
| VARCHAR(20) | NOT NULL | `tipo` | advertencia, suspension_temporal o veto_permanente. |
| VARCHAR(300) | NOT NULL | `motivo` | Justificación de la sanción. |
| TIMESTAMPTZ | NOT NULL | `inicia_en` | Inicio de vigencia. |
| TIMESTAMPTZ | NULL | `termina_en` | Fin de vigencia; nulo en veto permanente. |
| BOOLEAN | NOT NULL | `activa` | Indica si la sanción sigue vigente. |

### 17. Multimedia

| Tipo de dato | Restricciones | Nombre del campo | Descripción |
|---|---|---|---|
| UUID | PK | `id` | Identificador del archivo. |
| UUID | FK, NULL | `publicacion_id` | Publicación a la que pertenece. Referencia a publicaciones(id). |
| UUID | FK, NULL | `mensaje_id` | Mensaje al que pertenece. Referencia a mensajes(id). Debe existir exactamente uno de publicacion_id o mensaje_id (CHECK). |
| VARCHAR(10) | NOT NULL | `tipo` | imagen, video o documento. |
| TEXT | NOT NULL | `url` | URL pública del archivo en Supabase Storage (S3). |
| VARCHAR(50) | NOT NULL | `mime_type` | Tipo MIME (ej. image/png, video/mp4). |
| BIGINT | NOT NULL | `tamano_bytes` | Tamaño del archivo en bytes. |
| TIMESTAMPTZ | NOT NULL | `creado_en` | Fecha de carga. |

### 18. Mensajes

| Tipo de dato | Restricciones | Nombre del campo | Descripción |
|---|---|---|---|
| UUID | PK | `id` | Identificador del mensaje. |
| UUID | FK, NOT NULL | `chat_id` | Chat al que pertenece. Referencia a chats(id). |
| UUID | FK, NOT NULL | `remitente_id` | Usuario que lo envía. Referencia a usuarios(id). |
| TEXT | NULL | `contenido` | Texto del mensaje (nulo si solo contiene archivo). |
| TIMESTAMPTZ | NOT NULL | `enviado_en` | Fecha y hora de envío. |

### 19. Chats

| Tipo de dato | Restricciones | Nombre del campo | Descripción |
|---|---|---|---|
| UUID | PK | `id` | Identificador del chat. |
| VARCHAR(10) | NOT NULL | `tipo` | privado o grupal. |
| VARCHAR(100) | NULL | `nombre` | Nombre del chat grupal; nulo en chats privados. |
| UUID | FK, NOT NULL | `creador_id` | Usuario que creó el chat. Referencia a usuarios(id). |
| TIMESTAMPTZ | NOT NULL | `creado_en` | Fecha de creación. |

### 20. Miembros chat

| Tipo de dato | Restricciones | Nombre del campo | Descripción |
|---|---|---|---|
| UUID | PK, FK | `chat_id` | Chat. Referencia a chats(id). |
| UUID | PK, FK | `usuario_id` | Participante. Referencia a usuarios(id). |
| VARCHAR(13) | NOT NULL | `rol` | administrador o miembro. |
| BOOLEAN | NOT NULL | `fijado` | Chat fijado por el usuario. Por defecto FALSE. |
| BOOLEAN | NOT NULL | `archivado` | Chat archivado por el usuario. Por defecto FALSE. |
| BOOLEAN | NOT NULL | `eliminado` | Chat eliminado de la lista del usuario. Por defecto FALSE. |
| TIMESTAMPTZ | NOT NULL | `unido_en` | Fecha de ingreso al chat. |

---

## 10. DER (Diagrama entidad-relación)
### 1. https://mermaid.ai/d/3c79588c-2066-4ed8-b8e6-436ac899caa3

---

## 11. Arquitectura
### 1. https://drive.google.com/file/d/1WyBpDqBOrwo5jUto6Dvm6itaRETDTzDI/view?usp=sharing


## 12. Maquetaciòn y prototipado
### 1. https://www.figma.com/design/khlEFJWdvB9x46AE7IpBAc/Coyotegram?node-id=0-1&t=AiZ0C4V8pRnoHti7-1

## 13. Casos De Uso
![imagen_caso_de_uso_01.jpg]
![imagen_caso_de_uso_02.jpg]
---
### Conclusión

La combinación de Git y GitHub proporciona a RedSocialUTT un mecanismo de control de versiones distribuido, trazabilidad de cambios y colaboración. La organización monorepo permite administrar el frontend y el backend desde un único repositorio, mientras que la configuración de exclusiones, la gestión de credenciales y el control de accesos reducen los riesgos operativos y de seguridad.

La documentación debe mantenerse actualizada conforme evolucionen la arquitectura, los scripts de ejecución y los requisitos del proyecto.
