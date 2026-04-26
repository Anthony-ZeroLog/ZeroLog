---
layout: post
title: "Guía para la gestión de permisos en Linux con chmod"
date: 2025-04-04 11:37:00 -0600
categories: [Notes]
tags: [Linux y bash scripting, XSS, SQL Injection, Fuerza Bruta, Hydra]
meta_description: Domina la gestión de permisos en Linux con el comando chmod. Aprende a controlar los permisos de usuario, grupo y otros de tus archivos con ejemplos prácticos y la notación octal.
description: En el universo de Linux, la gestión de permisos es una de las tareas más críticas para mantener la seguridad y la.....
img: /assets/img/linux-029.webp
---

---

### Un paso más en el dominio del comando chmod
En el universo de Linux, la gestión de permisos es una de las tareas más críticas para mantener la seguridad y la integridad de los archivos y directorios. Dominar el comando chmod es fundamental para cualquier administrador de sistemas o usuario avanzado. Este post profundiza en la gestión de permisos para grupos y otros usuarios, un conocimiento clave para controlar quién puede leer, escribir o ejecutar tus archivos.

### Qué son los permisos de archivos en Linux?
Antes de adentrarnos en los comandos, es vital entender el sistema de permisos de archivos en Linux. Cada archivo y directorio tiene tres tipos de permisos principales:

- **Lectura (r)**: Permite ver el contenido de un archivo o listar los archivos dentro de un directorio.
- **Escritura (w)**: Permite modificar el contenido de un archivo o crear/eliminar archivos en un directorio.
- **Ejecución (x)**: Permite ejecutar un archivo (si es un script o programa) o acceder a un directorio.

Estos permisos se asignan a tres tipos de entidades:

- **Usuario (u)**: El propietario del archivo.
- **Grupo (g)**: Un grupo de usuarios que comparten los mismos permisos.
- **Otros (o)**: Cualquier usuario del sistema que no sea el propietario ni pertenezca al grupo.

### Sintaxis básica del comando chmod
El comando chmod (abreviatura de change mode) es la herramienta principal para cambiar los permisos de archivos. Su sintaxis básica, en notación simbólica, es la siguiente:

``` bash
chmod [entidad][operador][permiso] [archivo/directorio]
```

Donde:

- **Entidad**: u (usuario), g (grupo), o (otros). También se puede usar a para todos.
- **Operador**: + (añadir permiso), - (quitar permiso), = (asignar permiso exacto).
- **Permiso**: r (lectura), w (escritura), x (ejecución).
- **Archivo/Directorio**: El nombre del archivo o directorio sobre el que queremos actuar.

### Gestión de permisos de grupos (g)
Para modificar los permisos de un grupo sobre un archivo, usamos el parámetro g. A modo de ejemplo, vamos a crear un nuevo directorio llamado nuevo_directorio para practicar con los comandos.

![alt text](/assets/img/linux-029-1.webp){: width="700" .post__img}

El siguiente comando quita el permiso de lectura al grupo sobre nuevo_directorio:

``` bash
sudo chmod g-r nuevo_directorio
```

![alt text](/assets/img/linux-029-2.webp){: width="700" .post__img}

Podemos devolver el permiso de lectura cambiando el operador a +r:

``` bash
sudo chmod g+r nuevo_directorio
```

![alt text](/assets/img/linux-029-3.webp){: width="700" .post__img}

El proceso es idéntico para los permisos de escritura y ejecución. Solo necesitamos modificar el parámetro del comando:

- **Quitar permiso de escritura**: sudo chmod g-w nuevo_directorio
- **Quitar permiso de ejecución**: sudo chmod g-x nuevo_directorio

![alt text](/assets/img/linux-029-4.webp){: width="700" .post__img}

### Gestión de permisos de usuario (u)
Para gestionar los permisos del propietario del archivo, se usa el parámetro u.

Por ejemplo, si queremos quitarle el permiso de ejecución a nuestro usuario sobre nuevo_directorio, ejecutamos el siguiente comando:

``` bash
sudo chmod u-x nuevo_directorio
```

Para el siguiente ejemplo, quitaremos todos los permisos del usuario para demostrar cómo se pueden combinar:

![alt text](/assets/img/linux-029-5.webp){: width="700" .post__img}

Aunque se pueden gestionar los permisos uno a uno, existe una forma más eficiente de asignar o eliminar varios a la vez. Como hemos quitado todos los permisos al usuario, se los otorgaremos de nuevo usando la combinación de rwx:

``` bash
sudo chmod u+rwx nuevo_directorio
```

De esta forma, puedes otorgar o eliminar varios permisos de archivos sin tener que escribir el comando repetidamente.

![alt text](/assets/img/linux-029-6.webp){: width="700" .post__img}

### Gestión de permisos de otros (o)
Para gestionar los permisos para otros usuarios del sistema, es decir, aquellos que no son el propietario ni pertenecen al grupo, el proceso es similar. Haremos una nueva modificación en el parámetro, reemplazando la u por una o.

Para el ejemplo, eliminaremos y volveremos a otorgar todos los permisos:

``` bash
sudo chmod o-rwx nuevo_directorio
```

![alt text](/assets/img/linux-029-7.webp){: width="700" .post__img}

### Combinando permisos y la notación simbólica
Una gran ventaja de la notación simbólica es que se pueden combinar las entidades y los permisos en un solo comando. Si queremos quitar el permiso de escritura al grupo (g) y a otros (o) al mismo tiempo, podemos hacerlo de la siguiente manera:

``` bash
sudo chmod go-w nuevo_directorio
```

Si además queremos otorgar permiso de ejecución al usuario (u), el comando sería:

``` bash
sudo chmod u+x,go-w nuevo_directorio
```

### Sugerencias y buenas prácticas
- **Principio del mínimo privilegio**: Siempre asigna solo los permisos necesarios para la tarea. Otorgar más permisos de los requeridos puede crear vulnerabilidades de seguridad.
- **Documenta tus cambios**: Si estás en un equipo, documenta siempre por qué cambiaste los permisos y qué impacto tienen.
- **Comandos útiles**: Usa ls -l para ver los permisos de un archivo o directorio. Conocer su estado actual es el primer paso antes de realizar cualquier cambio.

Entender y gestionar los permisos de archivos en Linux es una habilidad esencial que garantiza la seguridad y el control de tu entorno de trabajo. Ya sea que prefieras la notación simbólica por su claridad o la notación octal por su concisión, dominar el comando chmod te empoderará para administrar tus sistemas de manera más eficiente.



