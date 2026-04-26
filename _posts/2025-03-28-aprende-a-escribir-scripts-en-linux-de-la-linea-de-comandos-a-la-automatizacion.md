---
layout: post
title: "Aprende a escribir scripts en Linux: De la línea de comandos a la automatización"
date: 2025-03-28 11:37:00 -0600
categories: [Notes]
tags: [Linux y bash scripting]
meta_description: Aprende a dominar el scripting en bash y automatiza tus tareas en Linux. Guía práctica para principiantes sobre cómo crear scripts, usar comandos clave y gestionar permisos.
description: El scripting en bash es una habilidad fundamental para cualquier desarrollador o administrador de sistemas....
img: /assets/img/linux-026.webp
---

---

El scripting en bash es una habilidad fundamental para cualquier desarrollador o administrador de sistemas. Este post es una guía práctica que te enseñará a crear tus primeros scripts, optimizar flujos de trabajo y automatizar tareas en Linux, mejorando tu eficiencia sin necesidad de ser un experto.

### ¿Qué es el Scripting en Bash?
En el vasto universo de Linux, el scripting en bash es una herramienta esencial que nos permite automatizar tareas. Un script no es más que un archivo de texto simple que contiene una secuencia de comandos que el sistema operativo ejecuta en un orden predeterminado. Al ser una serie de comandos es natural que hagamos uso de pipes, los cuales nos permitirán enlazar un comando con otros de manera sucesiva para realizar tareas complejas, repetitivas o largas de forma automática, sin la necesidad de escribirlas una por una en la línea de comandos. Es una herramienta poderosa para cualquier rol técnico, ya sea para administrar sistemas o para optimizar flujos de trabajo en entornos de desarrollo.

A diferencia de los programas compilados (como los escritos en C++ o Java), los scripts no necesitan un proceso de compilación antes de ser ejecutados. Son interpretados directamente por la consola, lo que los hace rápidos y flexibles.

**Creando tu Primer Script: "¡Hola, Mundo!" en la Línea de Comandos**{: .strong }

Para adentrarnos en el contexto del scripting y familiarizarnos con él, crearemos un ejemplo básico. En este caso, nos situaremos en el directorio de Escritorio, donde con la ayuda de un editor de texto como nano, crearemos nuestro script llamado script.sh.

``` bash
nano script.sh
```

![alt text](/assets/img/linux-026-1.webp){: width="600" }

**El shebang: El Guía de tus Scripts**

Como se mencionó anteriormente, el primer paso en la creación de un script es indicar el intérprete que debe usarse para su ejecución. Esta línea especial, conocida como shebang (del inglés sharp y bang), es la primera en el archivo. En nuestro caso, indicaremos que el intérprete es bash.

``` bash
#!/bin/bash
```

![alt text](/assets/img/linux-026-2.webp){: width="600" }

**Comandos Clave: echo y sleep**

Al ser nuestro primer script, utilizaremos dos comandos básicos para interactuar con la consola:

- echo: Un comando simple que imprime mensajes en la terminal. Es ideal para mostrar información o notificaciones.

- sleep: Añade una pausa entre la ejecución de dos comandos, lo que te permite controlar el flujo del script.

Ahora, completemos nuestro script con una secuencia de mensajes y una pausa para observar cómo funciona.

``` bash
#!/bin/bash

echo "Scripting básico en bash"

sleep 2s

echo "Segundo mensaje de mi script"
```

![alt text](/assets/img/linux-026-3.webp){: width="600" }

Una vez que tenemos nuestro script completo, podemos guardarlo (Ctrl+O en nano, seguido de Enter) y salir del editor (Ctrl+X).

**Manejo de Permisos: Concediendo al Script el Poder de Ejecución**

Si intentamos ejecutar este script de la manera convencional (./script.sh), nos marcará un error. Esto se debe a que, por defecto, los archivos de texto no tienen permisos de ejecución. Debemos asignárselos explícitamente usando el comando chmod.

![alt text](/assets/img/linux-026-4.webp){: width="600" }

![alt text](/assets/img/linux-026-5.webp){: width="600" }

Para darle los permisos necesarios, ejecutaremos el siguiente comando:

``` bash
sudo chmod +x script.sh
```

Este comando puede parecer complejo, pero es fácil de entender si lo dividimos:

- sudo: Permite la ejecución con permisos de superusuario, lo que garantiza que podemos modificar los permisos del archivo.
- chmod: Es el comando que se usa para cambiar los permisos de los archivos y directorios.
- +x: Agrega el permiso de ejecución (x de eXecutable) para todos los usuarios.
- script.sh: El archivo sobre el cual se aplican estas condiciones.

![alt text](/assets/img/linux-026-6.webp){: width="600" }

Una vez que aplicamos este comando, tendremos los permisos necesarios para ejecutar nuestro script sin restricciones. Ahora podemos ejecutarlo directamente desde la terminal:

``` bash
./script.sh
```

Cuando lo ejecutes, verás los mensajes impresos en la consola, con una pausa de dos segundos entre ellos.

![alt text](/assets/img/linux-026-7.webp){: width="550" }

**Expandiendo el Horizonte: Ejemplos Prácticos**

Si bien el ejemplo anterior es sencillo, la verdadera potencia de los scripts en bash se revela al combinar comandos con estructuras de programación. Aquí hay un par de ideas para llevar tu scripting al siguiente nivel.

**Script de Respaldo Simple**

Un script de respaldo es uno de los usos más comunes del scripting en bash. Este script comprime un directorio importante y lo guarda con una marca de tiempo en el nombre.

``` bash
#!/bin/bash

# Define el directorio a respaldar y el directorio de destino
DIRECTORIO_RESPALDO="/home/usuario/documentos"
DIRECTORIO_DESTINO="/home/usuario/backups"

# Crea un nombre de archivo único con la fecha
FECHA=$(date +%Y-%m-%d_%H-%M-%S)
NOMBRE_ARCHIVO="respaldo_documentos_$FECHA.tar.gz"

echo "Creando respaldo de $DIRECTORIO_RESPALDO..."
tar -czf "$DIRECTORIO_DESTINO/$NOMBRE_ARCHIVO" "$DIRECTORIO_RESPALDO"
echo "Respaldo creado con éxito en $DIRECTORIO_DESTINO/$NOMBRE_ARCHIVO"
```

**Automatización de Limpieza del Sistema**

Otro ejemplo práctico es un script que elimina archivos temporales para liberar espacio en el disco.

``` bash
#!/bin/bash

# Ruta al directorio temporal
DIR_TEMPORAL="/var/log"

echo "Limpiando archivos de registro en $DIR_TEMPORAL..."
# Elimina archivos .log más antiguos de 7 días
find "$DIR_TEMPORAL" -name "*.log" -type f -mtime +7 -exec rm -f {} \;

echo "Limpieza completada."
```

### Buenas Prácticas y Errores Comunes

Para escribir scripts en bash robustos, considera estas buenas prácticas:

- Usa comentarios: Explica qué hace cada parte de tu código.
- Valida los permisos: Asegúrate de que el script tenga los permisos adecuados y que el usuario que lo ejecuta tenga acceso a los directorios y archivos.
- Verifica la existencia de archivos: Usa estructuras condicionales (if/else) para verificar si un archivo o directorio existe antes de intentar manipularlo.
- Cita las variables: Utiliza comillas dobles (") alrededor de las variables para evitar problemas con espacios en los nombres de archivo.

Uno de los errores más comunes es olvidar la línea del shebang o tener permisos incorrectos, lo que causa el error "Permission denied". Con los pasos explicados en este post, podrás evitarlo fácilmente.

El scripting en bash es una habilidad versátil que te permite tomar el control de tu sistema Linux y optimizar tu flujo de trabajo. Desde tareas simples como la impresión de mensajes hasta la automatización de respaldos y la manipulación de datos, las posibilidades son infinitas. Empieza con ejemplos sencillos y, poco a poco, construye scripts más complejos para resolver tus propios problemas.



