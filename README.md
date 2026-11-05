# RedSocialUTT

Repositorio del proyecto **RedSocialUTT**, una aplicación web organizada como monorepo que integra un frontend desarrollado con Next.js y una API backend desarrollada con NestJS. La administración de paquetes y la ejecución de tareas se gestionan mediante pnpm y Turborepo.

**Repositorio remoto:** https://github.com/Yeveexd/redsocialutt

---

## Índice

- [1. Descripción del proyecto](#1-descripción-del-proyecto)
- [1.1 Unidad 1](#11-unidad-1)
- [2. Control de versiones](#2-control-de-versiones)
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
- [13. Casos de uso](#13-casos-de-uso)
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

## 1.1 Unidad 1

## Problemática
En el entorno universitario actual, existe una notable fragmentación en la comunicación entre estudiantes de diferentes carreras y facultades. Esta falta de interacción interdisciplinaria limita significativamente el desarrollo de habilidades sociales en los alumnos, las cuales son igual o más importantes que el conocimiento técnico para su futuro crecimiento profesional.

Aunado a esto, cuando surge la necesidad de colaborar, tanto alumnos como profesores suelen sentirse inseguros al tener que compartir información de contacto personal con personas ajenas a su círculo cercano. Esta falta de privacidad frena la creación de redes de apoyo puramente académicas.

Finalmente, los canales de comunicación vigentes resultan ineficientes para la difusión de información inmediata. Los avisos críticos como la inasistencia imprevista de un docente, cambios logísticos de último minuto, anuncios administrativos o eventos del campus sufren retrasos considerables, lo que genera desinformación, pérdida de tiempo y contratiempos para toda la comunidad escolar.

En nuestra institución existe una realidad innegable: ocurren cambios muy repentinos en la agenda académica. Aunado a esto, es evidente el aislamiento social por parte de los estudiantes; un fenómeno que en la carrera de TI se acentúa aún más. Los alumnos de otras disciplinas lo notan, lo cual en ocasiones resulta en motivos de burla. Esta situación se hace todavía más evidente durante los eventos universitarios, a los cuales asiste la mayoría de las carreras, con excepción de TI.

## Objetivo general
Desarrollar e implementar una plataforma digital integral de comunicación para la comunidad universitaria, diseñada para centralizar la difusión de avisos oficiales en tiempo real y proveer espacios virtuales seguros de colaboración. Este sistema tiene como propósito principal mitigar el aislamiento y la fragmentación social entre facultades con especial énfasis en contrarrestar el rezago de interacción en carreras tecnológicas, fomentando así el trabajo interdisciplinario, el desarrollo de habilidades blandas y la creación de redes de apoyo académico, garantizando en todo momento la privacidad de los datos personales de alumnos y docentes.

## Objetivos específicos
1. Desarrollar una plataforma digital que permita la comunicación entre estudiantes de diferentes carreras y facultades de la universidad, facilitando la interacción interdisciplinaria.
2. Implementar un sistema de notificaciones en tiempo real para difundir avisos críticos, cambios de última hora, anuncios administrativos y eventos del campus, reduciendo la desinformación en la comunidad estudiantil.
3. Diseñar un mecanismo de privacidad que permita a los usuarios compartir información de contacto de manera segura y controlada, fomentando la creación de redes de apoyo académico sin comprometer la seguridad personal.
4. Crear espacios virtuales de colaboración por carrera, materia y proyectos interdisciplinarios que promuevan el intercambio de conocimientos y el trabajo en equipo entre estudiantes.
5. Realizar pruebas de usabilidad con al menos 50 estudiantes de diferentes carreras para validar la funcionalidad de la plataforma antes de implementarla.

## Justificación
El presente proyecto surge de la necesidad imperante de fortalecer el tejido social y la comunicación interna en la Universidad Tecnológica de Torreón (UTT). En la actualidad, el aislamiento interdisciplinario particularmente notable en las carreras del área de TI representa un obstáculo para el desarrollo integral de los alumnos. En el ámbito profesional moderno, las habilidades blandas (soft skills), como la comunicación asertiva, el trabajo en equipo y la creación de redes de contacto (networking), son tan determinantes como el conocimiento técnico. Por lo tanto, proveer una herramienta que rompa las barreras entre facultades es fundamental para formar egresados más competitivos y socialmente integrados.

Además de la integración social, el proyecto se justifica por la necesidad de salvaguardar la privacidad de la comunidad universitaria. Los medios de comunicación actuales, como aplicaciones de mensajería instantánea, obligan a estudiantes y profesores a exponer sus números telefónicos o perfiles personales para asuntos netamente académicos. Esta plataforma elimina dicha vulnerabilidad al ofrecer un canal institucional, seguro y delimitado, donde la colaboración no exige el sacrificio de la privacidad personal.

Por otro lado, a nivel logístico e institucional, la falta de un canal directo y centralizado genera constantes ineficiencias. La implementación de este sistema de notificaciones en tiempo real beneficiará directamente el aprovechamiento del tiempo en el campus. Permitirá que tanto el cuerpo docente como el estudiantado gestionen mejor sus horarios ante eventualidades, ausencias, cambios de aula o emergencias institucionales, mitigando la desinformación y el rezago de avisos críticos.

## Alcances y limitaciones
**Cómo alcances de la aplicación, se han fijado lo siguiente:**
1. **Módulo de Autenticación y Control de Acceso:** Sistema de inicio de sesión seguro restringido exclusivamente a la comunidad universitaria mediante validación de correo institucional y contraseña.
2. **Módulo de Roles y Permisos de Usuario:** Sistema de gestión de roles (usuario estándar y administrador) que define los niveles de acceso dentro de la plataforma, permitiendo a los administradores moderar publicaciones, gestionar reportes de contenido inapropiado y supervisar la actividad en los espacios de colaboración.
3. **Módulo de Avisos y Difusión Institucional:** Sistema de publicación para avisos críticos, eventos y cambios de agenda con notificaciones inmediatas a los usuarios.
4. **Módulo de Colaboración e Interacción Académica:** Espacios virtuales y foros para la creación de publicaciones con soporte para contenido multimedia (imágenes, documentos y videos).
5. **Módulo de Mensajería y Privacidad:** Salas de chat privadas y canales que permiten la interacción directa entre alumnos y docentes sin exponer números telefónicos ni datos de contacto personal con roles de usuario (administrador y miembro) para la organización de grupos de chat privados.
6. **Módulo de Perfil e Interacción de Usuarios:** Entorno personalizable destinado a gestionar la identidad digital del alumno mediante la edición de biografía, avatar y datos visibles, incluyendo también opciones para mostrar un perfil como privado o público mediante el clic de un botón. Incluye un sistema de solicitudes de amistad para la interacción fluida entre estudiantes de distintas facultades.
7. **Módulo de Búsqueda:** Herramienta para encontrar contenido rápidamente dentro de la plataforma. Permite buscar perfiles de estudiantes, publicaciones y grupos o comunidades que tengan visibilidad pública.
8. **Módulo “home” para el usuario:** Pantalla que el usuario verá primero al acceder a la red social en la que podrá observar publicaciones recientes de otros usuarios y notificaciones.
9. **Base de datos:** Uso de una base de datos relacional SQL mediante PostgreSQL para gestionar las distintas entidades del proyecto, sus relaciones y el almacenamiento de la información asociada a cada una de ellas. Asimismo, permitirá gestionar las referencias a los archivos multimedia utilizados en la plataforma, como imágenes y vídeos.

**Para las limitaciones:**
1. **Recursos técnicos:** El desarrollo dependerá de la infraestructura tecnológica disponible en la institución y de las limitaciones presupuestales del proyecto académico, lo que podría restringir funcionalidades avanzadas como inteligencia artificial o analítica de datos compleja.
2. **Cobertura inicial:** La implementación piloto se limitará a un grupo controlado de usuarios, por lo que no estará disponible para toda la población estudiantil de la UTT durante la fase de validación.
3. **Integración con sistemas existentes:** La plataforma no se integrará inicialmente con otros sistemas institucionales (como plataformas de gestión académica o bibliotecas digitales), funcionando como un sistema independiente.
4. **Soporte técnico post-implementación:** Al ser un proyecto académico, el equipo no se compromete a mantener y/o dar soporte post despliegue.
5. **Moderación de contenido:** Debido a las limitaciones de tiempo, personal y recursos del proyecto, no se implementará un sistema automatizado de moderación de contenido (basado en IA o filtros avanzados). El control de publicaciones dependerá de un sistema básico de reportes por parte de los usuarios y revisión manual por administradores, así como del reglamento de uso aceptado al registrarse, sin garantizar cobertura total contra contenido inapropiado.

## Requisitos funcionales y no funcionales
**Requisitos funcionales:**
1. **Autenticación:** El sistema debe permitir el registro e inicio de sesión de usuarios utilizando su correo institucional asignando roles específicos (estudiante, docente, administrador).
2. **Privacidad:** El sistema debe permitir a los usuarios configurar qué información académica es pública en su perfil, ocultando por defecto datos de contacto (teléfono y correo personal).
3. **Gestión de avisos:** Los docentes y administradores deben poder publicar avisos institucionales (cambios de horario, ausencias, eventos) clasificándolos por grado, carrera o alcance general.
4. **Notificaciones:** El sistema debe enviar notificaciones en tiempo real a los usuarios correspondientes cuando se publique un aviso crítico clasificado como urgente.
5. **Interacción social:** El sistema debe contar con un muro general y muros específicos donde los estudiantes puedan publicar contenido multimedios.
6. **Grupos de trabajo:** Los usuarios deben poder crear espacios virtuales (grupos) cerrados para proyectos específicos permitiendo la integración de alumnos de distintas carreras en la universidad.
7. **Directorio academico:** El sistema debe incluir un buscador interno que permita localizar estudiantes o profesores por nombre, carrera o habilidades sin revelar información de contacto privado.
8. **Chats privados:** El sistema permitirá la creación de salas privadas entre usuarios en la que puedan intercambiar mensajes, fotos y videos así como información de la plataforma.
9. **Solicitud de amistad:** El sistema deberá permitir a los usuarios gestionar su interacción con otros usuarios mediante relaciones catalogadas como amistades, teniendo completa libertad de rechazar o aceptar las solicitudes de otros usuarios.
10. **Reportes:** El sistema deberá permitir reportar contenido como posts, videos o comentarios indebidos para mantener un control de los mismos.
11. **Bloquear:** El sistema permitirá bloquear a otros usuarios, lo que automáticamente evitará mostrar el contenido del usuario bloqueado al que lo bloqueo.

**Requisitos no funcionales:**
1. **Usabilidad:** La interfaz debe de ser intuitiva para que el usuario nuevo pueda publicar o leer un aviso en un máximo de 3 clicks tras iniciar sesión.
2. **Desempeño:** Las notificaciones de avisos urgentes deben distribuirse mediante tecnologías de websockets, reflejándose en las pantallas de los usuarios activos en menos de 3 segundos.
3. **Arquitectura de datos:** La persistencia de datos debe gestionarse mediante una base de datos relacional (postgresql) para garantizar la integridad referencial entre usuarios, carreras y publicaciones.
4. **Tecnología frontend:** La interfaz de usuario debe estar desarrollada con react y nextjs, utilizando tailwind css, para asegurar un diseño responsivo, adaptable a dispositivos móviles y de escritorio.
5. **Seguridad:** Las contraseñas deben de almacenarse encriptadas en la base de datos y la comunicación cliente-servidor debe estar protegida mediante tokens JWT.
6. **Despliegue (infraestructura):** El sistema debe estar diseñado para ser alojado temporalmente en plataformas de capa gratuita como vercel para el frontend y supabase para postgresql durante la fase de prueba.
7. **Disponibilidad:** La plataforma debe estar disponible un 90% del tiempo.
8. **Escalabilidad:** La plataforma deberá albergar 60 usuarios activos simultáneamente sin ralentizar el rendimiento de la plataforma.

## Tabla de riesgos
| ID | RIESGO | CONSECUENCIA | VALOR | SOLUCIÓN | R |
|---|---|---|---|---|---|
| R1 | Tiempo de entrega fijo | Entregar un proyecto incompleto o que no cumpla con lo establecido | Crítico | Es un riesgo a aceptar | Aceptar |
| R2 | Difusion de informacion sensible | Usuarios tienen acceso a información de otros usuarios sin su consentimiento | Medio | Cada usuario tendrá la capacidad de elegir qué información mostrar | Evitar |
| R3 | Falta de organización | No cumplir con objetivos específicos o tiempos de entrega | Crítico | Reuniones para revisión de progreso | Evitar |
| R4 | Falta de respaldo durante el desarrollo | Pérdida del progreso | Alto | Buena práctica y uso de git | Evitar |
| R5 | Falta de familiaridad con el stack tecnológico | Pérdida de tiempo excesiva en aprender las herramientas | Medio | Organizar la información aprendida en vez de leer sin rumbo | Mitigar |
| R6 | Contenido indebido | Difusión de material multimedia inapropiado | Medio | Gestión por parte de usuarios administrativos en la plataforma | Mitigar |
| R7 | Alcance desmedido | No planificar bien y desviarse del desarrollo planeado | Alto | Definir un mvp estricto, priorizando módulos | Evitar |
| R8 | Inconsistencia relacional en la base de datos | Errores severos al cruzar información de usuarios, avisos y facultades, obligando a reescribir el backend a mitad del cuatrimestre. | Bajo | Diseñar y validar minuciosamente el diagrama entidad-relación de postgresql antes de programar los modelos o controladores. | Mitigar |
| R9 | Costos de alojamiento e infraestructura | Imposibilidad de presentar el proyecto en vivo por falta de presupuesto para pagar servidores o la base de datos. | Medio | Aprovechar exclusivamente capas gratuitas: desplegar el frontend de next.js en vercel, usar servicios como supabase para alojar postgresql sin costo. | Transferir |
| R10 | Baja participación en la validación | No alcanzar la meta de 50 estudiantes utilizando la plataforma, debilitando la fase de pruebas del proyecto. | Bajo | Realizar pruebas por fases controladas, comenzando directamente con los compañeros de semestre, y utilizar conexiones personales en otras carreras para asegurar el número mínimo. | Mitigar |

## Justificación de la metodología de trabajo, Roles de equipo, tecnologías y herramientas

**Metodología:** SCRUM  
Permite desarrollar el proyecto en iteraciones cortas (Sprints), facilitando la adaptación a cambios, la entrega continua de funcionalidades y la mejora constante del producto. Es una metodología ideal para proyectos ágiles como una red social.

**Roles y tareas de equipo:**
1. **Santiago Torres Yeverino:** Desarrollo Frontend. Responsable de los módulos de Foros de Interacción Académica, Sistema de Publicación de Avisos y Búsqueda y Home.
2. **Ángel Domínguez López:** Desarrollo Frontend. Responsable de los módulos de Chats Privados y Perfil, así como de la experiencia de usuario en la navegación principal de la plataforma.
3. **Joel Javier Cabrales González:** Desarrollo Backend. Responsable de la autenticación de usuarios, validación de credenciales y asignación de roles, así como del diseño de middlewares para la seguridad y control de acceso de la plataforma. Encargado también de los módulos de Notificaciones, Avisos e Interacciones y Home, garantizando que la información crítica llegue en tiempo real a los usuarios correspondientes.
4. **Carlo Dávila Prado:** Desarrollo Backend y Base de Datos. Responsable del diseño e implementación de la base de datos relacional, definiendo las entidades, relaciones y estructuras necesarias para el almacenamiento de información y contenido multimedia. Encargado también de los módulos de Chats Privados, Interacción de Usuarios, Motor de Búsqueda.

**Plan de contingencia**
1. Si un integrante no puede avanzar en su módulo por carga académica o imprevistos, el equipo reasignará temporalmente sus tareas más críticas entre los demás miembros, priorizando siempre los módulos del MVP.
2. Todo el código se mantendrá en ramas independientes por integrante dentro del repositorio de GitHub, con documentación mínima por función, de modo que cualquier miembro pueda retomar el trabajo de otro sin depender de una sola persona (mitiga R4).
3. Se realizarán reuniones de seguimiento semanales (vía Discord) para detectar retrasos de forma temprana y ajustar el alcance del sprint en curso antes de que el atraso se vuelva crítico (mitiga R3).
4. En caso de que un módulo no pueda completarse dentro del tiempo fijo del proyecto (R1), se dará prioridad a los módulos definidos como MVP (Autenticación, Avisos, Perfil y Home), dejando como opcionales las funciones secundarias como Búsqueda avanzada o personalización de perfil.

**Tecnologías:**

**Frontend: React-NextJS-TailwindCSS**
1. **React:** Es una biblioteca para el diseño moderno de plataformas web con componentes reutilizables.
2. **NextJS:** Framework que ofrece SSR para mejorar el posicionamiento del SEO, routing fácil y optimización automática, todo esto para que el servidor procese lo más pesado y sea más rápido.
3. **TailwindCSS:** CSS utilitario que acelera el desarrollo y mantiene consistencia en el diseño, entre páginas, para tener una paleta de colores amigable al usuario.

**Backend: NestJS-PrismaORM**
1. **NestJS:** Es un framework estructurado con TypeScript, escalable y con arquitectura modular, ya que al ser una plataforma medianamente grande, necesitamos una buena base en donde empezar y terminar.
2. **PrismaORM:** ORM moderno con tipado automático, migraciones fáciles y query builder intuitivo, nos sirve para hacer menos código SQL, una mayor rapidez y un mantenimiento sencillo, perfecto para el contexto de una red social, donde todo está relacionado y sobre todo hay varios módulos con bastante código.

**DB: PostgreSQL-S3 storage**
1. **PostgreSQL:** Es una base de datos relacional (SQL) robusta, gratuita y con mucha facilidad para hacer hacer las relaciones.
2. **S3 storage:** Almacenamiento escalable y económico para archivos multimedia, en la red social se podrán subir imágenes, video cortos y publicaciones de texto, el S3 storage nos dará una facilidad para a la hora de guardar dichos archivos.

**Administrador de tareas: Notion**
1. Es un software gratuito, flexible que permite organizar roles e incluso tareas de una manera fácil e intuitiva.

**Reuniones: Discord**
1. Es un software gratuito de igual manera, permite llamadas para las reuniones que hagamos y crear servidores con canales organizados por temas variados.

**Control de versiones:**
1. **Git:** Es un software de versionamiento local, un estándar en la industria del desarrollo de software y que facilita el trabajo que tiene varias versiones.
2. **Github:** Plataforma web que facilita el desarrollo de software en equipo, tiene herramientas para hacer branching y que cada miembro pueda trabajar en ciertos módulos diferente al mismo tiempo, evitando errores en una rama principal y testeando componentes antes de usarlos en la principal.

**Maquetación:**
1. **Figma:** Software de diseño y prototipado que permite crear y maquetar interfaces de manera sencilla y flexible. Ofrece diversos recursos y herramientas nativas, además de una amplia variedad de componentes y recursos creados y compartidos por su comunidad.

**Herramientas de Trabajo:**
1. **Visual Studio Code y Antigravity:** Entornos de desarrollo versátiles que proporcionan las herramientas necesarias para la programación y gestión del código del proyecto. Permiten ampliar sus funcionalidades mediante extensiones y herramientas adicionales, facilitando el desarrollo con tecnologías como React y TypeScript. Antigravity también incorpora herramientas de desarrollo asistidas por inteligencia artificial.
2. **Supabase:** Plataforma que se utilizará para la implementación y gestión de la base de datos mediante PostgreSQL. Además, proporciona herramientas complementarias para la gestión del proyecto, como almacenamiento de archivos y APIs. Su plan gratuito ofrece recursos suficientes para las etapas iniciales de desarrollo y pruebas, incluyendo actualmente 500 MB de base de datos y 1 GB de almacenamiento de archivos.
3. **Vercel:** Plataforma de cloud hosting diseñada para que los desarrolladores puedan alojar, gestionar y publicar aplicaciones web.
4. **Draw.io:** Herramienta que se usará para crear los diagramas del proyecto, por ejemplo, los diagramas de casos de uso, de clase, de secuencia, etc, gratuito, fácil de usar y donde se puede colaborar en equipo, lo que facilitará el trabajo.

**Arquitectura:** Monorepo o arquitectura hexagonal, con modelo MVC.

## Separación del proyecto en tareas
| ID | TAREA TÉCNICA | ESFUERZO | DEPENDENCIAS | CRITERIO DE TERMINADO (DoD) |
|---|---|---|---|---|
| BD-01 | Modelado y aplicación de las migraciones DDL enfocadas en las entidades principales | 5 SP | Ninguna | Tablas creadas en PostgreSQL con claves primarias UUID/Serial, llaves foráneas, índices de búsqueda y restricciones de integridad ejecutadas sin errores. |
| BD-02 | Configuración de Prisma ORM y cliente de conexión a la base de datos | 3 SP | BD-01 | Esquema de Prisma sincronizado con la base de datos y cliente exportado como Singleton para el backend. |
| BD-03 | Integración del servicio de almacenamiento S3/Supabase Storage para archivos multimedia | 5 SP | BD-01 | Bucket configurado para carga de imágenes y videos cortos con retorno de URLs públicas accesibles. |
| AUTH-01 | Configuración del flujo OpenID Connect / OAuth 2.0 con Microsoft Entra ID para permitir únicamente accesos corporativos. | 8 SP | BD-02 | El cliente redirige al login de Microsoft, y el backend valida correctamente el token JWT asegurando que pertenezca estrictamente al dominio @utt.edu.mx . |
| AUTH-02 | Implementación de filtros y middlewares en NestJS para denegar el registro de correos externos o ajenos a la universidad. | 5 SP | AUTH-01 | Cualquier intento de autenticación con un correo externo es rechazado automáticamente por el servidor con código de acceso no autorizado. |
| ROL-01 | Desarrollo de middlewares para control de acceso basado en roles (RBAC) | 5 SP | AUTH-01 | Middlewares protegiendo rutas según roles de estudiante, docente y administrador. |
| ROL-02 | Panel de administración para gestión de usuarios y moderación de permisos | 8 SP | ROL-01 | Interfaz administrativa funcional para asignar roles, deshabilitar cuentas o promover usuarios. |
| ROL-03 | Sistema de reporte de contenidos indebidos y revisión manual | 5 SP | ROL-02 | Flujo completo de reporte por usuarios y panel para aprobación o eliminación por administradores. |
| HOME-01 | Diseño y maqueta responsiva de la pantalla principal (Home) | 5 SP | Ninguna | Vista principal implementada en Next.js/Tailwind con paleta verde institucional y componentes base. |
| HOME-02 | Integración del feed de publicaciones recientes y notificaciones rápidas en la Home | 5 SP | HOME-01, POST-01 | Carga dinámica de publicaciones e historial de avisos integrada correctamente con el backend. |
| AVIS-01 | Módulo de publicación de avisos institucionales urgentes con WebSockets | 8 SP | ROL-01, BD-02 | Difusión de avisos críticos reflejada en tiempo real (<3 seg) en pantallas de usuarios activos. |
| POST-01 | Endpoints y lógica de negocio para creación, lectura y eliminación de publicaciones | 8 SP | BD-02, BD-03 | CRUD de posts funcional aceptando texto, imágenes y video con persistencia en PostgreSQL. |
| POST-02 | Componentes frontend para creación de publicaciones con soporte multimedia | 5 SP | POST-01 | Formulario e interfaz gráfica con vista previa de archivos multimedia antes de publicar. |
| POST-03 | Módulo de comentarios e interacciones (reacciones) en publicaciones | 5 SP | POST-01 | Sección de comentarios en hilo y contador de reacciones actualizado dinámicamente. |
| POST-04 | Creación y gestión de espacios de trabajo y foros de interacción académica | 8 SP | POST-01 | Foros cerrados por asignatura o carrera donde los miembros pueden interactuar colaborativamente. |
| PERF-01 | Diseño y configuración del perfil del estudiante con gestión de privacidad | 5 SP | AUTH-01 | Vista de perfil editable con toggle para cambiar visibilidad entre público y privado. |
| PERF-02 | Sistema de solicitudes de amistad y gestión de contactos | 5 SP | PERF-01 | Envío, aceptación y rechazo de solicitudes de amistad funcional con actualización de lista. |
| PERF-03 | Lógica de bloqueo de usuarios e invisibilidad de contenidos | 3 SP | PERF-01 | Acción de bloqueo que oculta mutuamente perfiles, mensajes y publicaciones entre usuarios. |
| CHAT-01 | Implementación del servidor de WebSockets para salas de chat privadas | 8 SP | AUTH-01, BD-02 | Servidor Socket.io gestionando conexiones seguras y persistencia de mensajes. |
| CHAT-02 | Interfaz frontend para salas de chat individual y envío de adjuntos | 5 SP | CHAT-01, BD-03 | UI de chat en tiempo real con soporte para intercambio de mensajes y multimedia. |
| CHAT-03 | Creación y administración de canales de chat grupales | 5 SP | CHAT-01 | Creación de chats grupales con asignación de roles de administrador y miembros. |
| BUSQ-01 | Motor de búsqueda de directorio académico y perfiles públicos | 5 SP | BD-01, PERF-01 | Consultas optimizadas para buscar usuarios por nombre, carrera o habilidades sin revelar datos privados. |
| BUSQ-02 | Buscador global de publicaciones, grupos y comunidades públicas | 5 SP | BUSQ-01, POST-01 | Filtros de búsqueda funcionales para localizar grupos públicos y contenidos en la plataforma. |

## Cronograma del Proyecto "coyotegram"

**Fase 1: Infraestructura, Base de Datos y Autenticación (Semana 1 y 2: 5 al 16 de octubre)**
1. **Backend (Javier y Carlo):** Modelado DDL (BD-01), configuración de Prisma (BD-02) y configuración de Supabase/S3 (BD-03). Integración del flujo OpenID Connect con Microsoft Entra ID (AUTH-01 actualizada) y middlewares de validación @utt.edu.mx (AUTH-02 actualizada).
2. **Frontend (Santiago y Ángel):** Inicialización del proyecto en Next.js, configuración de Tailwind con la paleta verde institucional y maquetación de la pantalla Home (HOME-01).

**Fase 2: Roles de Usuario y Core de Publicaciones (Semana 3 y 4: 17 al 30 de octubre)**
1. **Backend:** Desarrollo de middlewares para Control de Acceso Basado en Roles (ROL-01) y creación de endpoints/lógica para publicaciones (POST-01).
2. **Frontend:** Interfaz administrativa de roles (ROL-02) e integración del feed de publicaciones recientes en el Home (HOME-02). Componentes para la creación de publicaciones multimedia (POST-02).

**Fase 3: Interacciones, Perfiles y Buscador (Semana 5 y 6: 31 de octubre al 13 de noviembre)**
1. **Backend / Frontend:** Módulo de comentarios e interacciones (POST-03) y creación de foros cerrados por asignatura (POST-04). Diseño y configuración del perfil del estudiante con gestión de privacidad (PERF-01).
2. **Backend / Frontend:** Sistema de solicitudes de amistad (PERF-02), lógica de bloqueo (PERF-03) e implementación del motor de búsqueda académico (BUSQ-01) y global (BUSQ-02).

**Fase 4: Tiempo Real y Chats Privados (Semana 7 y 8: 14 al 27 de noviembre)**
1. **Backend:** Implementación del servidor de WebSockets para salas de chat privadas (CHAT-01) y difusión de avisos críticos institucionales (AVIS-01). Creación de canales grupales (CHAT-03).
2. **Frontend:** UI del chat en tiempo real con soporte multimedia (CHAT-02) y reflejo de alertas en la pantalla en menos de 3 segundos (AVIS-01). Sistema de reporte de contenidos indebidos (ROL-03).

**Fase 5: Pruebas, Despliegue y Cierre (Semana 9 y 10: 28 de noviembre al 5 de diciembre)**
1. **Todo el equipo:** Pruebas integrales de flujo completo (Login > Publicar > Chat). Corrección de bugs encontrados.
2. **Todo el equipo:** Despliegue del Frontend (ej. Vercel) y Backend/BD. Preparación de la presentación final y entrega formal del proyecto para la materia.

## Patrones de diseño

1. **Singleton (Creacional)**
   - **Área de aplicación:** En el conector hacia la base de datos mediante PostgreSQL o Prisma, así como en los clientes de protocolos HTTP y WebSocket.
   - **Solución a la problemática:** Generar un enlace nuevo hacia la base de datos o instanciar un cliente en cada solicitud provocaría el agotamiento del grupo de conexiones del servidor de forma acelerada.
   - **Implementación:** Se establece un objeto único y compartido a lo largo de toda la ejecución del entorno backend.

2. **Repository Pattern (Estructural / Arquitectónico)**
   - **Área de aplicación:** En la capa lógica de persistencia del backend encargada del manejo directo de entidades (usuarios, publicaciones y reacciones).
   - **Solución a la problemática:** Acoplar sentencias de SQL o controladores de Prisma dentro de los endpoints dificulta las pruebas unitarias, el mantenimiento y la reutilización del software.
   - **Implementación:** Se construye un componente abstracto intermedio que centraliza el acceso a las fuentes de información.

3. **Observer / Pub-Sub (De Comportamiento)**
   - **Área de aplicación:** En el módulo de alertas instantáneas, reacciones y actualización dinámica del feed mediante WebSockets o Socket.io.
   - **Solución a la problemática:** Evita que el cliente que ejecuta una interacción tenga que gestionar directamente la actualización del panel de avisos o la interfaz de terceros de manera vinculada.
   - **Implementación:** Separa la causa del resultado, transmitiendo la novedad para que los suscriptores respondan automáticamente.

4. **Custom Hooks (Patrón Específico de React)**
   - **Área de aplicación:** En la interfaz web y la aplicación móvil cliente desarrolladas con React Native.
   - **Solución a la problemática:** La integración directa de peticiones HTTP, el control de errores y la gestión de estados de carga en los componentes de la interfaz obstaculiza la mantenibilidad y ensucia el código visual.
   - **Implementación:** Se abstrae la lógica de comunicación y estado dentro de funciones modulares reutilizables.

## Definición de contenido

**Flujo de usuario estándar:**
Al ingresar a la aplicación, el usuario será recibido por una interfaz con tonalidades verdes. En esta pantalla inicial visualizará un panel de bienvenida que ofrecerá el acceso mediante el botón de Iniciar sesión con cuenta institucional.

Al seleccionar esta opción, el sistema activará el protocolo de autenticación federada, requiriendo que el usuario introduzca sus credenciales oficiales de la universidad (bajo el dominio @utt.edu.mx). El servidor validará de forma estricta que el correo pertenezca a la comunidad activa; si la cuenta es externa o no cumple con el dominio requerido, el acceso será denegado automáticamente, garantizando la seguridad y exclusividad del entorno.

En su primer ingreso exitoso, el sistema redirigirá al usuario a una pantalla breve de configuración inicial de perfil, donde podrá indicar su carrera correspondiente, ajustar la privacidad de su perfil como público o privado, y opcionalmente cargar una imagen o avatar desde su dispositivo.

Una vez configurado, el usuario accederá al módulo principal (Home). En esta pantalla se mostrará el flujo de publicaciones de la comunidad y un menú de navegación rápido que le permitirá acceder a otras secciones de la plataforma a un solo clic, tales como mensajería, notificaciones, búsqueda, perfil y videos.

Dentro de este módulo principal, el usuario tendrá la posibilidad de crear sus propias publicaciones o explorar las del resto de la comunidad. Cada publicación incluirá el nombre y la foto de perfil del autor, el contenido (que puede constar de texto, imágenes o videos) y un menú de interacción con opciones para dar "me gusta", dislike, compartir, comentar o reportar.

En caso de que la plataforma aún no cuente con contenido al momento del ingreso, la pantalla se mostrará vacía y exhibirá el mensaje: “¡Sé el primero!”.

Al seleccionar el ícono de mensajería, el usuario será redirigido a una pantalla donde se listarán sus conversaciones, ordenadas cronológicamente desde la más reciente hasta la más antigua. Esta sección llevará el encabezado "Chats privados". Cada conversación se presentará en formato de tarjeta (card), la cual incluirá: la fotografía del contacto, su nombre y el último mensaje enviado o recibido. En la esquina superior se ubicará un menú desplegable (ícono de tres puntos) para la gestión de los chats, ofreciendo las opciones de: fijar, archivar o eliminar. Cabe destacar que la interfaz de mensajería está enfocada estrictamente en la comunicación. Además del envío de mensajes de texto, las únicas opciones disponibles serán compartir imágenes o videos desde el dispositivo del usuario, por lo que el apartado carecerá de opciones de personalización visual.

Asimismo, el usuario tendrá la posibilidad de crear chats grupales exclusivamente con sus amigos (es decir, usuarios a los que siga). Estos grupos no tendrán un límite de participantes y serán completamente inaccesibles para cualquier persona que no forme parte de la red de amigos de alguno de los administradores del grupo.

El acceso a las notificaciones estará disponible en la pantalla principal (Home) o dentro del apartado de chats, representado por un ícono de campana en la esquina superior. Las notificaciones se dividen en dos categorías principales:
1. **Avisos oficiales:** Provendrán de un canal institucional de la universidad, al cual todos los estudiantes tendrán acceso. Este canal estará dedicado en su totalidad a la difusión de avisos y será unidireccional, permitiendo el envío de mensajes únicamente al personal autorizado.
2. **Interacciones sociales:** Se presentarán como tarjetas (cards) ordenadas de manera descendente (de la más reciente a la más antigua). Estas notificarán al usuario sobre interacciones con su contenido, tales como nuevos comentarios, publicaciones compartidas, "Me gusta" o "No me gusta".

Se accederá a través del ícono de lupa. Esta herramienta permitirá al usuario localizar a otras personas mediante su nombre, así como buscar publicaciones o videos específicos utilizando palabras clave presentes en sus descripciones.

Esta pantalla mostrará el perfil detallado del usuario, abarcando su información básica: nombre, matrícula, carrera, biografía y fotografía de perfil. En la sección inferior, se desplegarán las publicaciones y videos que el usuario haya subido; en caso de no contar con contenido, se mostrará el mensaje "No hay publicaciones aún". Asimismo, se incluirá un apartado para visualizar todo el contenido al que el usuario le ha dado "Me gusta".

Dentro de la gestión del perfil, el usuario tendrá a su disposición opciones para:
1. Editar su información general.
2. Modificar la privacidad de su cuenta (perfil público o privado).
3. Personalizar la interfaz, incluyendo el cambio de fotografía y el color de fondo del perfil.

La navegación de esta sección funcionará mediante desplazamiento continuo (scroll) y exhibirá material audiovisual subido por diversos usuarios. Las opciones de interacción permitirán reaccionar con un "Me gusta" o "No me gusta", así como dejar comentarios. Adicionalmente, se incluirá una herramienta de reporte en la esquina de cada video para denunciar contenido inapropiado.

El usuario podrá visitar los perfiles de otros miembros de la plataforma (los cuales operarán bajo sus propios ajustes de privacidad, ya sean públicos o privados). Dentro de estos perfiles, el usuario tendrá habilitadas las opciones para enviar una solicitud de amistad, bloquear al contacto y reportarlo por diferentes razones y que sean razonables a dicho reporte.

**Flujo de usuario administrador:**
Los perfiles de administrador estarán configurados de manera predeterminada en la base de datos (mediante seeders), por lo que el flujo de registro e inicio de sesión de la plataforma se mantendrá inalterado. No obstante, estas cuentas contarán con permisos exclusivos de moderación que los usuarios regulares no poseen. Sus facultades principales incluyen:
1. **Veto de cuentas:** Capacidad para suspender o expulsar definitivamente a usuarios de la plataforma.
2. **Gestión de contenido:** Eliminación de publicaciones o material inapropiado, con la facultad de actuar de manera proactiva (sin necesidad de un reporte previo) o en respuesta a las alertas de la comunidad.
3. **Moderación de conversaciones:** Atención y seguimiento a los reportes emitidos por los usuarios sobre canales públicos. Tras evaluar la situación, el administrador tendrá la autoridad para determinar la sanción correspondiente, la cual puede ir desde el cierre definitivo del grupo hasta el veto del usuario infractor.

--

## 2. Control de versiones

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
https://drive.google.com/drive/folders/1BQsHtlwezJ7D1yu8D8nsIoetZkyFvpwI?usp=share_link
---
### Conclusión

La combinación de Git y GitHub proporciona a RedSocialUTT un mecanismo de control de versiones distribuido, trazabilidad de cambios y colaboración. La organización monorepo permite administrar el frontend y el backend desde un único repositorio, mientras que la configuración de exclusiones, la gestión de credenciales y el control de accesos reducen los riesgos operativos y de seguridad.

La documentación debe mantenerse actualizada conforme evolucionen la arquitectura, los scripts de ejecución y los requisitos del proyecto.
