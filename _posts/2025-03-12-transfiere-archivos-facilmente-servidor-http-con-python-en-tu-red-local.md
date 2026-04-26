---
layout: post
title: "Transfiere archivos fácilmente: Servidor HTTP con Python en tu red local"
date: 2025-03-12 11:37:00 -0600
categories: [Labs-Projects]
tags: [Linux y bash scripting]
meta_description: Aprende a crear un servidor web básico con Python para transferir archivos en tu red local de manera rápida y segura. Una guía práctica para principiantes.
description: Cuando trabajamos en entornos de virtualización o en nuestra red local, surge a menudo la necesidad de transferir archivos.....
img: /assets/img/linux-019.webp
---

---

### El poder de la simplicidad en la red
Cuando trabajamos en entornos de virtualización o en nuestra red local, surge a menudo la necesidad de transferir archivos de forma rápida y sin complicaciones. En lugar de depender de servicios externos o configuraciones complejas, podemos aprovechar herramientas integradas en nuestros sistemas.

En este post, exploraremos cómo crear un servidor web básico en Python. Esta técnica nos servirá tanto para transferir archivos fácilmente como para levantar una página web de forma local, utilizando comandos sencillos.

### ¿Por qué usar un servidor web para transferir archivos?
La transferencia de archivos a través de un servidor web es una solución sorprendentemente útil para la red local por su sencillez. La mayoría de los sistemas operativos modernos ya tienen Python preinstalado, lo que elimina la necesidad de instalar software adicional. Además, el protocolo HTTP es universalmente compatible con los navegadores, lo que facilita el acceso a los archivos desde cualquier dispositivo conectado a la misma red, como una laptop, una tablet o un smartphone.

Esta utilidad es especialmente valiosa en escenarios de laboratorio o entornos de prueba, donde se necesita compartir rápidamente un documento, un script o un conjunto de datos entre diferentes máquinas virtuales o físicas.

### Puesta en marcha: Levantar el servidor HTTP
El primer paso es levantar el servidor HTTP con Python. Este comando es la clave para compartir archivos. Para ello, navegamos en la terminal hasta la carpeta que contiene los archivos que queremos compartir.

El comando a utilizar es:

``` bash
sudo python3 -m http.server 80
```

Este comando nos permite crear un servidor web básico dentro de nuestra red local. La opción -m http.server le indica a Python que ejecute el módulo de servidor HTTP. El número 80 es el puerto que el servidor escuchará para las conexiones entrantes. Aunque puedes elegir otro puerto, el 80 es el puerto estándar para el tráfico HTTP. El uso de sudo es importante para obtener privilegios de administrador, ya que los puertos por debajo de 1024 requieren permisos especiales para ser utilizados.

![alt text](/assets/img/linux-019-2.webp){: width="700" }

### Identifica la dirección IP de tu servidor
Una vez que el servidor está en funcionamiento, necesitas conocer la dirección IP de la máquina que lo aloja para que otros dispositivos puedan acceder a ella. Para esto, usamos el siguiente comando en otra terminal (sin cerrar la que tiene el servidor):

``` bash
hostname -I
```

Este comando devuelve la dirección IP de tu máquina. Si tu sistema tiene múltiples interfaces de red, es posible que muestre varias direcciones IP. Deberás identificar la que corresponde a la red local (generalmente, las que empiezan con 192.168.x.x o 10.x.x.x).

![alt text](/assets/img/linux-019-3.webp){: width="400" }

**Accede a los archivos desde otro dispositivo**

Con la dirección IP obtenida, cualquier dispositivo en la misma red local puede acceder a los archivos. Simplemente abre un navegador web en el otro equipo e ingresa la dirección IP seguida del puerto, de la siguiente manera:

``` bash
http://[dirección_IP_del_servidor]:80
```

Por ejemplo, si la IP de tu servidor es 192.168.1.10, la dirección que debes ingresar en el navegador es http://192.168.1.10. El navegador mostrará una lista de los archivos y carpetas que se encuentran en el directorio donde levantaste el servidor web, permitiendo que cualquiera de ellos sea descargado con un simple clic.

![alt text](/assets/img/linux-019-4.webp){: width="700" }

### Casos de uso y consideraciones
Esta técnica es increíblemente útil para la comunicación y distribución de archivos en una red local. Aunque la funcionalidad básica es solo para compartir, se puede mejorar con módulos adicionales de Python para habilitar la subida de archivos, o incluso para añadir un sistema de autenticación.

Sin embargo, es crucial tener en cuenta que esta solución no está diseñada para entornos de producción. No es segura para uso en redes públicas debido a la falta de cifrado y autenticación robusta. Por lo tanto, su uso se debe limitar a entornos controlados.

Una buena práctica es siempre levantar el servidor en el directorio más específico posible para evitar exponer archivos sensibles de forma accidental. Por ejemplo, en lugar de levantarlo en tu directorio Home, hazlo en una subcarpeta dedicada como ~/compartir_archivos.





