---
layout: post
title: "Comandos esenciales para la administración de usuarios en Linux"
date: 2025-03-19 11:37:00 -0600
categories: [Notes]
tags: [Linux y bash scripting]
meta_description: Aprende a gestionar usuarios en Linux con nuestra guía práctica. Conoce comandos como adduser, deluser, su y passwd para una administración segura.
description: El sistema operativo Linux es conocido por su robustez y seguridad, y gran parte de esto se debe a su riguroso sistema.....
img: /assets/img/linux-022.webp
---

---

El sistema operativo Linux es conocido por su robustez y seguridad, y gran parte de esto se debe a su riguroso sistema de gestión de usuarios. Comprender cómo funcionan los usuarios y grupos es fundamental para cualquier administrador de sistemas o desarrollador. En este post, exploraremos los conceptos clave y los comandos esenciales para la creación, modificación y eliminación de usuarios en un entorno Linux.

### ¿Qué son los usuarios en Linux?
En Linux, al igual que en otros sistemas operativos, un usuario es una entidad que puede interactuar con el sistema y acceder a recursos específicos. Cada usuario se identifica con un nombre único y un número de identificación (UID). Existen dos tipos principales de usuarios:

- Usuarios normales: Son las cuentas de usuario habituales que interactúan con el sistema, como "milo" o "leo". Tienen acceso limitado y sus archivos se almacenan en su directorio personal, generalmente ubicado en /home/nombredeusuario.

- Usuarios de sistema: Son cuentas especiales creadas para que los servicios y aplicaciones se ejecuten en segundo plano. No tienen un directorio personal ni una contraseña y su función es ejecutar procesos de forma segura y aislada.

Dentro del sistema, cada usuario tiene su propio directorio personal, que suele estar alojado en /home. En esta carpeta se guardan los archivos de configuración y los datos personales del usuario. Esto crea una capa de aislamiento y seguridad, ya que, por defecto, un usuario no puede acceder a los archivos de otro. Por ejemplo, el usuario milo no puede entrar a la carpeta de leo sin los permisos adecuados.

![alt text](/assets/img/linux-022-1.webp){: width="400" }

### Comandos esenciales para la gestión de usuarios

**Crear un nuevo usuario: adduser vs. useradd**

El comando adduser es la herramienta preferida para la creación de un nuevo usuario en la mayoría de los sistemas Linux basados en Debian, ya que es un script interactivo más amigable.

``` bash
sudo adduser [nombre de usuario]
```

Al ejecutar este comando, el sistema te guiará a través de la configuración, solicitando una contraseña y otra información personal del nuevo usuario.

![alt text](/assets/img/linux-022-2.webp){: width="700" }

No toda la información personal es obligatoria, así que puedes dejarla en blanco si lo deseas.

![alt text](/assets/img/linux-022-3.webp){: width="700" }

Por otro lado, useradd es un comando de nivel inferior que solo crea la cuenta de usuario sin un directorio personal ni una contraseña por defecto. Es más adecuado para scripts o para administradores avanzados que quieren mayor control sobre la configuración.

**Cambiar de usuario: su**

El comando su (del inglés "switch user") te permite cambiar entre usuarios en una misma sesión de terminal.

``` bash
su [nombre de usuario]
```

Por ejemplo, para cambiar del usuario milo al usuario leo, simplemente ejecutas:

``` bash
su leo
```

El sistema te pedirá la contraseña del usuario al que deseas cambiar.

![alt text](/assets/img/linux-022-4.webp){: width="400" }

Si quieres cambiar al usuario root, puedes usar su sin un nombre de usuario o directamente su -.

**Eliminar un usuario: deluser**

Para eliminar un usuario del sistema, se utiliza el comando deluser. Sin embargo, este comando por sí solo no borra el directorio personal del usuario, lo que puede dejar archivos residuales en el sistema.

``` bash
sudo deluser [nombre de usuario]
```

Para realizar una eliminación completa y segura del usuario y su directorio personal, es crucial utilizar el parámetro --remove-home.

``` bash
sudo deluser --remove-home [nombre de usuario]
```

Este comando asegura que todos los archivos y configuraciones del usuario sean eliminados, liberando espacio y manteniendo la limpieza del sistema.

![alt text](/assets/img/linux-022-5.webp){: width="600" }

![alt text](/assets/img/linux-022-6.webp){: width="300" }

> Nota: Para eliminar a un usuario (ej. leo), es necesario hacerlo desde una cuenta diferente a la que quieres eliminar, en este caso, desde el usuario milo.

### Añadiendo una capa extra de seguridad: Los grupos
En Linux, los usuarios se organizan en grupos. Un grupo es una colección de usuarios que comparten los mismos permisos y privilegios sobre archivos y directorios. Esto simplifica la gestión de permisos, ya que en lugar de asignar permisos a cada usuario individualmente, se los asignas a un grupo y luego agregas o eliminas usuarios de ese grupo.

- Verificar los grupos de un usuario: groups [nombre de usuario]

- Crear un nuevo grupo: addgroup [nombre del grupo]

- Añadir un usuario a un grupo: sudo adduser [nombre de usuario] [nombre del grupo]

Por defecto, cuando creas un usuario con adduser, se crea un grupo con el mismo nombre y el usuario es añadido a él.

**Gestionar contraseñas: passwd**

El comando passwd permite cambiar la contraseña de un usuario. Si quieres cambiar la tuya, simplemente ejecuta el comando sin argumentos. Si eres un administrador con permisos sudo, puedes cambiar la contraseña de cualquier otro usuario:

``` bash
sudo passwd [nombre de usuario]
```

### Conclusión
El manejo de usuarios y permisos en Linux es una habilidad esencial para la seguridad y organización de cualquier sistema. Con estos comandos básicos, tienes la capacidad de crear, administrar y eliminar usuarios de forma eficiente. Recuerda siempre usar el comando sudo para ejecutar estas tareas administrativas y mantener un control riguroso sobre los accesos a tu sistema.



