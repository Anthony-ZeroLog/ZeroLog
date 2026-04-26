---
layout: post
title: "Primeros pasos en la terminal: Guía de comandos básicos de Linux"
date: 2025-02-21 11:37:00 -0600
categories: [Notes]
tags: [Linux y bash scripting]
meta_description: Domina los comandos básicos de Linux para la gestión de archivos y la navegación en la terminal. Una guía práctica para principiantes en la línea de comandos.
description: En el mundo de Linux, la terminal se convierte en tu principal herramienta para interactuar con el sistema. Aunque las.....
img: /assets/img/linux-011.webp
---

---

### Guía esencial de comandos básicos de Linux para principiantes
En el mundo de Linux, la terminal se convierte en tu principal herramienta para interactuar con el sistema. Aunque las interfaces gráficas facilitan muchas tareas, dominar la terminal es fundamental para cualquier desarrollador, administrador de sistemas o entusiasta de la tecnología. Esta guía práctica te introduce a los comandos Linux más esenciales para la gestión de archivos y la navegación entre directorios, sentando las bases para que te familiarices con este entorno de trabajo poderoso y eficiente.

### Introducción a la terminal de Linux
La terminal es una interfaz de texto que nos permite ejecutar comandos de forma directa para controlar el sistema operativo. Cada comando tiene una función específica, desde tareas simples como listar archivos hasta operaciones complejas de administración del sistema. Familiarizarse con estos comandos te permitirá realizar tareas de manera más rápida y eficiente, un conocimiento invaluable en cualquier entorno de desarrollo o servidores.

#### Navegación en el sistema de archivos
**Comando ls**

El comando ls es tu primer paso para explorar el sistema de archivos. Permite listar los archivos y subdirectorios dentro del directorio en el que te encuentras actualmente.

``` bash
$ ls
```

Ejemplo práctico:
Si te encuentras en algún directorio y ejecutas ls, verás una lista de todos los archivos y carpetas que contiene.

![alt text](/assets/img/linux-011-1.webp){: width="400" }

Una variante muy útil es ls -l. El flag -l (long listing) proporciona más detalles sobre cada elemento, incluyendo permisos, propietario, grupo, tamaño y fecha de la última modificación.

![alt text](/assets/img/linux-011-3.webp){: width="500" }

**Comando pwd**

El comando pwd (print working directory) te dice exactamente dónde estás. Es crucial para orientarte en la jerarquía de directorios y saber la ruta absoluta de tu ubicación.

``` bash
$ pwd
```

Ejemplo práctico:
Si te has movido entre varias carpetas, pwd te mostrará la ruta completa desde la raíz del sistema (/).

![alt text](/assets/img/linux-011-2.webp){: width="400" }

**Comando cd**

El comando cd (change directory) es el más utilizado para moverte entre directorios. Te permite navegar hacia una carpeta específica o retroceder en la estructura.

``` bash
$ cd [nombre del directorio]
```

Ejemplo práctico:
Dentro de la carpeta de usuario, nos desplazaremos hasta el Escritorio

``` bash
$ cd Escritorio
```

![alt text](/assets/img/linux-011-4.webp){: width="400" }

Una variante clave es cd .. que te permite subir un nivel en la jerarquía de directorios, volviendo a la carpeta superior.

![alt text](/assets/img/linux-011-5.webp){: width="500" }

#### Gestión de archivos y directorios
**Comando mkdir**

Con el comando mkdir (make directory) puedes crear una o varias carpetas nuevas en la ubicación actual.

``` bash
$ mkdir [nombre del directorio]
```

Ejemplo práctico:

``` bash
$ mkdir directorio
```

![alt text](/assets/img/linux-011-6.webp){: width="450" }

**Comando rmdir**

Para eliminar un directorio vacío, usamos el comando rmdir (remove directory). Es importante notar que solo funciona si la carpeta no contiene ningún archivo o subdirectorio.

``` bash
$ rmdir [nombre del directorio]
```

Ejemplo práctico:

``` bash
$ rmdir directorio
```

![alt text](/assets/img/linux-011-7.webp){: width="450" }

**Comando touch**

El comando touch es un modo rápido de crear un archivo vacío. Si el archivo ya existe, touch simplemente actualiza su fecha y hora de modificación.

``` bash
$ touch [nombre del archivo]
```

Ejemplo práctico:

``` bash
$ touch test.txt
```

![alt text](/assets/img/linux-011-8.webp){: width="450" }

**Comando rm**

El comando rm (remove) es la herramienta principal para eliminar archivos. A diferencia de rmdir, rm no solo borra directorios, sino que también elimina archivos.

Sintaxis:

``` bash
$ rm [nombre del archivo]
```

Ejemplo práctico:

``` bash
$ rm test.txt
```

![alt text](/assets/img/linux-011-9.webp){: width="450" }

>Importante: Para eliminar un directorio y su contenido de forma recursiva (borrando todo lo que hay dentro), debes usar el flag -r (recursive). Por ejemplo: rm -r mi_carpeta. Un uso muy común, y peligroso, es rm -rf que fuerza la eliminación de archivos y directorios sin preguntar, úsalo con extrema precaución.

**Comando mv**

El comando mv (move) tiene un doble propósito: mover archivos o directorios y renombrarlos.

``` bash
$ mv [nombre_actual] [nuevo_nombre]
```

Ejemplo práctico (renombrar):

``` bash
$ mv hello.txt nombre_nuevo.txt
```

![alt text](/assets/img/linux-011-10.webp){: width="500" }

Sintaxis para mover:

``` bash
$ mv [nombre_del_archivo] [carpeta_de_destino]
```

Ejemplo práctico (mover):

``` bash
$ mv nombre_nuevo.txt directorio/
```

![alt text](/assets/img/linux-011-11.webp){: width="500" }

También puedes mover un archivo al directorio anterior con la instrucción ..:

``` bash
$ mv nombre_nuevo.txt ..
```

![alt text](/assets/img/linux-011-12.webp){: width="500" }

**Comando cp**

El comando cp (copy) se utiliza para copiar archivos o directorios de una ubicación a otra.

``` bash
$ cp [archivo_origen] [archivo_destino]
```

Ejemplo práctico (copiar archivo):

``` bash
$ cp nombre_nuevo.txt directorio/
```

![alt text](/assets/img/linux-011-13.webp){: width="500" }

![alt text](/assets/img/linux-011-14.webp){: width="550" }

Para copiar un directorio y su contenido, debes usar el flag -r:

``` bash
$ cp -r [directorio_origen] [directorio_destino]
```

Ejemplo práctico (copiar directorio):

``` bash
$ cp -r proyecto_original/ proyecto_copia/
```

#### Manejo de nombres con espacios
Un error común para principiantes es olvidar cómo manejar archivos o directorios cuyos nombres contienen espacios. La línea de comandos interpreta el espacio como un separador entre argumentos. Para evitar esto, debes envolver el nombre del archivo entre comillas dobles ("").

Ejemplo práctico:
Para crear un archivo llamado "archivo con espacios".txt:

``` bash
$ touch "archivo con espacios".txt
```

![alt text](/assets/img/linux-011-15.webp){: width="700" }

Para eliminarlo, usa la misma lógica:

``` bash
$ rm "archivo con espacios".txt
```

![alt text](/assets/img/linux-011-16.webp){: width="700" }

#### Buenas prácticas y consideraciones de seguridad
- Uso de ls con cuidado: Antes de eliminar archivos o directorios con rm o rmdir, es una buena práctica usar ls para verificar que estás en la ubicación correcta y que los archivos que vas a borrar son los que esperas.
- El poder de rm -rf: El comando rm -rf / es extremadamente peligroso. Borra todo el contenido del sistema de archivos desde la raíz. En general, evita el uso del flag -f (force) a menos que sea absolutamente necesario, ya que impide que el sistema te pida confirmación.
- Ayuda integrada: Si no recuerdas la función de un comando, puedes usar man [nombre del comando] (de manual) o [nombre del comando] --help para obtener una descripción completa de su uso y opciones.

Dominar estos comandos básicos de Linux es el primer paso para convertirte en un usuario más eficiente y productivo en entornos de desarrollo y servidores. Con la práctica, la línea de comandos se sentirá como una extensión de tu pensamiento, permitiéndote navegar y manipular el sistema de archivos con mayor velocidad y precisión.






