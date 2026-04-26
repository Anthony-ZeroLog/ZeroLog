---
layout: post
title: "Comprendiendo los permisos de archivos y directorios en Linux"
date: 2025-04-02 11:37:00 -0600
categories: [Notes]
tags: [Linux y bash scripting]
meta_description: Aprende a gestionar permisos en Linux con nuestra guía práctica. Descubre cómo ls -l muestra los permisos y cómo chmod te permite modificarlos de forma segura.
description: En Linux, los permisos de archivos sirven como un mecanismo de seguridad fundamental. Controlan quién tiene permitido....
img: /assets/img/linux-028.webp
---

---

En el mundo del desarrollo de software y la administración de sistemas, la seguridad es fundamental. Una de las primeras barreras de protección que encontramos en sistemas operativos basados en Linux es la gestión de permisos de archivos. Este post te guiará de forma práctica a través de los conceptos clave, desde cómo visualizar y entender los permisos con ls -l, hasta cómo modificarlos de manera efectiva con el comando chmod.

### Gestión de Permisos en Linux: Una Guía Práctica con chmod y ls -l
En Linux, los permisos de archivos sirven como un mecanismo de seguridad fundamental. Controlan quién tiene permitido realizar acciones como leer, escribir o ejecutar archivos y directorios. Estos permisos se definen para tres categorías de usuarios: el propietario (owner), el grupo (group) y otros (others), cada una con tres tipos de permisos: lectura (r), escritura (w) y ejecución (x).

Estos permisos pueden ser representados de dos maneras:

- Simbólica: Utilizando letras (ej. rwx).
- Numérica: Utilizando números (ej. 7).

**Comprendiendo ls -l**

El comando ls -l es la herramienta esencial para visualizar una lista detallada de los archivos y directorios en tu sistema. La salida de este comando muestra un desglose completo de los permisos de acceso.

``` bash
ls -l
```

![alt text](/assets/img/linux-028-1.webp){: width="550" }

En la primera parte de esta descripción, el primer carácter indica el tipo de archivo:

- -: un archivo regular.
- d: un directorio.

A partir de este punto, los siguientes nueve caracteres se agrupan en tres conjuntos de tres, representando los permisos para cada categoría de usuario.

- Grupo 1: Permisos del propietario del archivo o directorio.
- Grupo 2: Permisos del grupo al que pertenece el archivo o directorio.
- Grupo 3: Permisos para otros usuarios en el sistema.

**Análisis de un ejemplo práctico**

Para entender mejor cómo se aplican los permisos, analicemos algunos de los ejemplos de archivos y directorios que hemos creado.

El directorio files tiene los siguientes permisos (rwxrwxr-x):

- Primer grupo (rwx): El propietario tiene permisos de lectura, escritura y ejecución.
- Segundo grupo (rwx): Los miembros del grupo tienen permisos de lectura, escritura y ejecución.
- Tercer grupo (r-x): Otros usuarios tienen permisos de lectura y ejecución, pero no de escritura.

En el caso del archivo infinite_process.sh, los permisos son (rw-rw-r--):

- Primer grupo (rw-): El propietario tiene permisos de lectura y escritura, pero no de ejecución.
- Segundo grupo (rw-): Los miembros del grupo tienen permisos de lectura y escritura, pero no de ejecución.
- Tercer grupo (r--): Otros usuarios solo tienen permiso de lectura.

Para poner a prueba estos permisos, puedes usar comandos como nano script.sh para escribir y cat script.sh para leer.

![alt text](/assets/img/linux-028-2.webp){: width="600" }

![alt text](/assets/img/linux-028-3.webp){: width="550" }

![alt text](/assets/img/linux-028-4.webp){: width="600" }

### Modificación de permisos con chmod
Ahora que comprendes cómo funcionan los permisos, es crucial saber cómo modificarlos para un control de acceso más preciso. El comando chmod (change mode) es la herramienta que te permite hacer esto.

El comando chmod se puede usar de forma simbólica o numérica. Para modificar un permiso de forma simbólica, se usa la siguiente estructura: chmod [usuario][+/-][permiso] [archivo/directorio].

- u: usuario (owner)
- g: grupo (group)
- o: otros (others)
- a: todos (all)

Para eliminar el permiso de lectura (r) al archivo infinite_process.sh para todos, el comando sería:

``` bash
sudo chmod -r infinite_process.sh
```

![alt text](/assets/img/linux-028-5.webp){: width="650" }

Si quieres devolver el permiso de lectura, simplemente cambia el - por un +:

``` bash
sudo chmod +r infinite_process.sh
```

![alt text](/assets/img/linux-028-6.webp){: width="650" }

De la misma forma, para eliminar el permiso de escritura (w) para otros, el comando es:

``` bash
sudo chmod -w infinite_process.sh
```

![alt text](/assets/img/linux-028-7.webp){: width="650" }

Puedes hacer una nueva prueba con cat para intentar leer y con nano para escribir en infinite_process.sh para ver el resultado de los cambios.

![alt text](/assets/img/linux-028-8.webp){: width="600" }

![alt text](/assets/img/linux-028-9.webp){: width="650" }

### La representación numérica de los permisos

Además de la notación simbólica, chmod también puede utilizar un formato numérico que a menudo es más rápido y preciso. A cada tipo de permiso se le asigna un valor numérico:

- r (lectura) = 4
- w (escritura) = 2
- x (ejecución) = 1
- - (sin permiso) = 0

Para determinar el número de permisos de cada categoría (propietario, grupo, otros), simplemente sumas los valores correspondientes. Por ejemplo:

- rwx = 4+2+1=7
- rw- = 4+2+0=6
- r-x = 4+0+1=5
- r-- = 4+0+0=4

El comando chmod con la notación numérica se usa de la siguiente manera: 

``` bash
chmod [propietario][grupo][otros] [archivo/directorio].
```

Para dar permisos de lectura, escritura y ejecución a todos los usuarios (propietario, grupo y otros), el comando sería:

``` bash
chmod 777 archivo.txt
```

Para aplicar los permisos del archivo infinite_process.sh (rw-rw-r--), el comando numérico sería:

``` bash
chmod 664 infinite_process.sh
```

Comprender y gestionar los permisos de archivos en Linux es una habilidad esencial para cualquier desarrollador, administrador de sistemas o entusiasta de la tecnología. Con los comandos ls -l y chmod, tienes el control total sobre la seguridad y el acceso a tus archivos.

La próxima vez que trabajes en un entorno Linux, tómate un momento para examinar los permisos de tus archivos. Juega con el comando chmod y experimenta con diferentes combinaciones de permisos para ganar confianza.




