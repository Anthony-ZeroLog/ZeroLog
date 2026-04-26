---
layout: post
title: "Domina curl: cómo transferir y descargar archivos en Linux"
date: 2025-03-14 11:37:00 -0600
categories: [Labs-Projects]
tags: [Linux y bash scripting]
meta_description: Aprende a usar el comando curl, la herramienta esencial de Linux para la transferencia de datos. Descubre cómo descargar archivos, ver cabeceras y más.
description: El comando curl es una de las herramientas más versátiles y esenciales en el arsenal de cualquier profesional técnico.....
img: /assets/img/linux-020.webp
---

---

### El Poder de la Terminal: Guía Práctica del Comando curl
El comando curl es una de las herramientas más versátiles y esenciales en el arsenal de cualquier profesional técnico o entusiasta de Linux. Su propósito principal es la transferencia de datos desde o hacia un servidor, utilizando una gran variedad de protocolos. En esencia, curl nos permite interactuar directamente con servidores y recursos web a través de la línea de comandos, enviando y recibiendo solicitudes de manera flexible.

Este post es una guía práctica para entender sus funcionalidades básicas y explorar algunos de los parámetros más útiles que te ayudarán en tu trabajo diario.

### ¿Qué es el comando curl?
Curl (Client URL) es una herramienta de línea de comandos que permite la transferencia de datos de forma programática. Fue diseñado para ser utilizado en scripts y automatizaciones, por lo que su sintaxis simple y su robusto conjunto de opciones lo han convertido en un estándar en el mundo del desarrollo y la administración de sistemas. Soporta protocolos como HTTP, HTTPS, FTP, FTPS, SCP y SFTP, lo que lo hace ideal para una amplia gama de tareas, desde el diagnóstico de redes hasta la descarga de archivos.

### Instalación de curl en Linux
Aunque muchas distribuciones de Linux (como Linux Mint) ya incluyen curl por defecto, es posible que en otras necesites instalarlo. Para verificar si curl está instalado, simplemente ejecuta curl --version en la terminal. Si no lo está, puedes instalarlo fácilmente con el siguiente comando:

``` bash
sudo apt install curl
```

Este comando, que utiliza el gestor de paquetes apt, instalará la versión más reciente de la herramienta en tu sistema.

### Ejemplos Prácticos de uso de curl
A continuación, exploraremos algunos de los casos de uso más comunes para el comando curl.

**Accediendo al código fuente de una página web**

Uno de los usos más básicos es realizar una petición HTTP GET a un sitio web para obtener su código fuente. Al ejecutar curl sobre una URL, este recupera el contenido HTML de la página y lo muestra directamente en la terminal.

``` bash
curl google.com
```

![alt text](/assets/img/linux-020-1.webp){: width="700" }

De esta manera, puedes acceder al código fuente de cualquier sitio web, lo que es muy útil para diagnóstico o para inspeccionar el contenido de una página sin usar un navegador.

**Descargando archivos**

Curl es una excelente herramienta para descargar archivos desde la terminal. Para esto, se utiliza el parámetro -o (minúscula) que te permite especificar un nombre de salida para el archivo. También puedes usar -O (mayúscula) para que curl guarde el archivo con su nombre original.

Para este ejemplo, descargaremos un script llamado safevpn-thm.sh de un repositorio de GitHub. Para obtener el enlace directo, debemos acceder al archivo en el modo "raw".

![alt text](/assets/img/linux-020-2.webp){: width="700" }

![alt text](/assets/img/linux-020-3.webp){: width="700" }

![alt text](/assets/img/linux-020-4.webp){: width="700" }

El enlace raw es la URL que utilizaremos con el comando curl. La sintaxis para la descarga es:

``` bash
curl [url] -o [nombre_para_el_archivo_descargado]
```

Un ejemplo completo sería:

``` bash
curl https://raw.githubusercontent.com/Wh1teDrvg0n/safeVPN-THM/refs/heads/main/safevpn-thm.sh -o safevpn.sh
```

![alt text](/assets/img/linux-020-5.webp){: width="700" }

Después de la descarga, puedes usar el comando cat para ver el contenido del archivo y verificar que se descargó correctamente.

``` bash
cat safevpn.sh
```

![alt text](/assets/img/linux-020-6.webp){: width="700" }

**Visualizando las cabeceras HTTP**

Para ver solo las cabeceras HTTP de una respuesta, sin el contenido del cuerpo, usa el parámetro -I. Esto es muy útil para verificar la información del servidor, el tipo de contenido, los cookies, y si una URL ha sido redirigida.

``` bash
curl -I google.com
```

**Usando curl para seguir redirecciones**

A menudo, las URLs pueden tener redirecciones (códigos de estado 3xx). Por defecto, curl no las sigue. Para que lo haga automáticamente, debes utilizar el parámetro -L.

``` bash
curl -L http://example.com
```

Este comando seguirá la redirección y mostrará el contenido de la URL de destino.

### Errores Comunes y Soluciones

- Error: curl: (6) Could not resolve host: Este error suele indicar que la terminal no puede convertir el nombre del dominio en una dirección IP. Verifica que la URL esté escrita correctamente y que tengas conexión a internet.
- Problema: curl no muestra el progreso de descarga: Por defecto, curl es silencioso. Si quieres ver una barra de progreso, puedes usar el parámetro -# o -s para una versión más resumida.
- Problema: Las redirecciones no funcionan: Recuerda siempre usar el parámetro -L para que curl siga las redirecciones.

Los ejemplos que hemos visto solo rascan la superficie de lo que el comando curl puede hacer. Su amplia gama de opciones lo convierte en una herramienta invaluable para la automatización, el diagnóstico de redes y la transferencia de datos.

Para explorar todas las funcionalidades de curl, la mejor fuente es la documentación oficial a la que puedes acceder con el comando man curl.

![alt text](/assets/img/linux-020-7.webp){: width="600" }





