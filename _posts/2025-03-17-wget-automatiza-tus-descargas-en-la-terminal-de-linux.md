---
layout: post
title: "Wget: Automatiza tus descargas en la terminal de Linux"
date: 2025-03-17 11:37:00 -0600
categories: [Labs-Projects]
tags: [Linux y bash scripting]
meta_description: Aprende a usar el comando wget en Linux para descargar archivos, sitios web completos y reanudar transferencias. Guía práctica y concisa para la terminal.
description: Un comando fundamental para cualquier administrador de sistemas o desarrollador es la herramienta de descarga de archivos.....
img: /assets/img/linux-021.webp
---

---

### Wget: Guía Definitiva para la Descarga de Archivos desde la Terminal
Un comando fundamental para cualquier administrador de sistemas o desarrollador es la herramienta de descarga de archivos wget. Al igual que curl, wget permite obtener archivos de forma no interactiva desde la terminal en Linux y otros sistemas operativos. Su uso es intuitivo, y a través de sus opciones podemos automatizar y controlar el proceso de descarga de manera eficiente.

### ¿Qué es Wget?
Wget es una herramienta de línea de comandos libre para la recuperación de contenido de servidores web. Soporta los protocolos más populares como HTTP, HTTPS y FTP. Su principal ventaja es su capacidad para trabajar en segundo plano y su robustez ante conexiones inestables, ya que puede reanudar una descarga en caso de interrupción.

**Uso Básico**

El uso más simple del comando wget consiste en escribir wget seguido de la URL del archivo que deseamos descargar. El archivo se guardará en el directorio actual con su nombre original.

``` bash
wget [url del archivo]
```

Para mostrar el ejemplo de su uso, utilizaremos el mismo archivo del post anterior.

``` bash
wget https://raw.githubusercontent.com/Wh1teDrvg0n/safeVPN-THM/refs/heads/main/safevpn-thm.sh
```

![alt text](/assets/img/linux-021-1.webp){: width="600" }

A grandes rasgos, su uso es muy fácil; sin embargo, como con otros comandos, podemos modificar parámetros y obtener resultados distintos.

### Opciones Comunes de Wget

**Cambio del Nombre del Archivo Descargado**

Para guardar el archivo con un nombre diferente al original, utilizamos la opción -O (o --output-document).

``` bash
wget -O [nombre del archivo] [url del archivo]
```

``` bash
wget -O script.sh https://raw.githubusercontent.com/Wh1teDrvg0n/safeVPN-THM/refs/heads/main/safevpn-thm.sh
```

![alt text](/assets/img/linux-021-2.webp){: width="700" }

**Descarga de Múltiples Archivos**

Si necesitas descargar varios archivos a la vez, puedes listarlos uno tras otro en el mismo comando.

``` bash
wget [url del primer archivo] [url del segundo archivo]
```

![alt text](/assets/img/linux-021-3.webp){: width="700" }

Para descargar una lista de URLs de forma más organizada, puedes usar la opción -i (o --input-file) para leer las URLs desde un archivo de texto. Cada URL debe estar en una línea separada.

``` bash
wget -i [ruta_al_archivo.txt]
```

**Descarga Recursiva**

Si quisiéramos realizar una descarga recursiva de una serie de archivos o incluso de un sitio web completo, es posible hacerlo mediante la opción -r (o --recursive). Este comando hará una descarga de todos los archivos que se encuentren en las subcarpetas del servidor o sitio web, guardándolos dentro de nuestro directorio local.

``` bash
wget -r [url de la descarga]
```

![alt text](/assets/img/linux-021-4.webp){: width="600" }

![alt text](/assets/img/linux-021-5.webp){: width="600" }

Por defecto, la descarga recursiva tiene una profundidad máxima de 5 niveles. Puedes cambiar este valor con la opción -l [nivel]. Para una profundidad infinita, usa -l inf o -l 0.

**Reanudar Descargas Interrumpidas**

Una de las opciones más útiles de wget es la capacidad de reanudar una descarga que se interrumpió, por ejemplo, debido a un problema de conexión. Para ello, utiliza la opción -c (o --continue). Wget revisará el archivo local y continuará la descarga desde el punto donde se detuvo.

``` bash
wget -c [url del archivo]
```

**Limitar la Velocidad de Descarga**

Para evitar saturar tu ancho de banda, puedes limitar la velocidad de descarga con la opción --limit-rate.

``` bash
wget --limit-rate=100k [url del archivo]
```

En este ejemplo, la velocidad se limita a 100 kilobytes por segundo (k). También puedes usar m para megabytes o g para gigabytes.

### Disponibilidad en Windows
Algo muy interesante del comando wget es que se encuentra disponible tanto para Linux como para Windows. Aunque no viene preinstalado en la mayoría de las versiones de Windows, se puede descargar y usar fácilmente, lo que lo convierte en una herramienta versátil para cualquier entorno.

El comando wget es una herramienta esencial en la terminal para gestionar descargas. Desde descargas simples hasta la creación de espejos de sitios web, sus opciones permiten un control total. Dominar su uso te permitirá ser mucho más eficiente en tus tareas diarias.



