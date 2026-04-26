---
layout: post
title: "Introducción al manejo de procesos en Linux (foreground, background, kill y más)"
date: 2025-03-24 11:37:00 -0600
categories: [Labs-Projects]
tags: [Linux y bash scripting]
meta_description: Aprende a gestionar procesos en Linux con esta guía práctica. Conoce comandos como jobs, fg, bg, ps aux, pgrep y kill para tomar el control de tus aplicaciones.
description: En Linux, cada proceso es una instancia de un programa en ejecución, con su propio identificador único (PID) y una porción.....
img: /assets/img/linux-024.webp
---

---

### Gestión de Procesos en Linux: Comandos Esenciales para el Día a Día
En el mundo de los sistemas operativos, cada tarea que realizamos desde escribir un documento hasta navegar por internet se maneja a través de procesos. En Linux, cada proceso es una instancia de un programa en ejecución, con su propio identificador único (PID) y una porción de memoria asignada.

Este post es una guía práctica para entender y gestionar los procesos en Linux, una habilidad fundamental para cualquier usuario o administrador de sistemas. Exploraremos los comandos clave para iniciar, detener, y supervisar tus aplicaciones, permitiéndote tomar el control total de tu entorno de trabajo.

### ¿Qué es un proceso en Linux?
Cuando abres una aplicación, como tu navegador web o un editor de texto, el sistema operativo crea un proceso para que esta pueda funcionar. Este proceso se convierte en la representación de la aplicación en ejecución. Cada proceso en Linux tiene asociado un número de identificación único, conocido como PID (Process ID), y se le asigna una porción de memoria RAM para su ejecución.

**Tipos de procesos**

En Linux, los procesos se clasifican principalmente en tres tipos:

- Procesos en primer plano (foreground): Requieren la interacción directa del usuario y bloquean la terminal de comandos mientras se ejecutan.

- Procesos en segundo plano (background): Se ejecutan sin interacción directa del usuario, liberando la terminal para que puedas seguir trabajando.

- Procesos del sistema (daemons): Son procesos especiales que se ejecutan de forma continua en segundo plano y se encargan de tareas de bajo nivel, como la gestión de servicios de red o el control de hardware.

### Manejo de procesos en Linux: Comandos prácticos
Para comprender mejor cómo funciona la gestión de procesos, vamos a ver algunos comandos esenciales.

1. Iniciar un proceso en primer plano

    La forma más común de ejecutar un programa es simplemente escribiendo su nombre en la terminal. Por ejemplo, para iniciar el navegador Mozilla Firefox:

    ``` bash
    firefox
    ```

    Al ejecutar este comando, el navegador se abrirá y la terminal quedará bloqueada hasta que cierres el programa. Este es un ejemplo claro de un proceso en primer plano.

    ![alt text](/assets/img/linux-024-1.webp){: width="700" }

2. Iniciar un proceso en segundo plano

    Si quieres ejecutar una aplicación sin que bloquee tu terminal, puedes enviarla a segundo plano. Esto es útil para programas que no requieren que interactúes con ellos constantemente. Para ello, solo necesitas añadir un & al final del comando.

    ``` bash
    firefox &
    ```

    Al ejecutarlo, la terminal te devolverá el PID del proceso y un número de trabajo, y podrás seguir usando la terminal de inmediato.

    ![alt text](/assets/img/linux-024-2.webp){: width="700" }

3. Listar procesos en segundo plano

    Si tienes varios procesos en segundo plano y quieres ver cuáles están activos, usa el comando jobs.

    ``` bash
    jobs
    ```

    Este comando te mostrará una lista de los procesos que has iniciado y que se están ejecutando en segundo plano, incluyendo su estado y el número de trabajo.

    ![alt text](/assets/img/linux-024-3.webp){: width="700" }

4. Pasar un proceso a primer plano

    Si un proceso se está ejecutando en segundo plano y necesitas interactuar con él, puedes traerlo de nuevo al primer plano con el comando fg (de foreground).

    ``` bash
    fg %1
    ```

    En este caso, %1 se refiere al número de trabajo que jobs le asignó al proceso. Si solo hay un proceso en segundo plano, puedes usar simplemente fg.

    También puedes hacer uso del nombre del proceso.

    ``` bash
    fg soffice
    ```

    ![alt text](/assets/img/linux-024-4.webp){: width="700" }

5. Suspender un proceso

    A veces, no quieres cerrar un programa, sino simplemente pausarlo temporalmente. Si una aplicación se está ejecutando en primer plano, puedes suspender su ejecución con la combinación de teclas Ctrl + Z.

    ![alt text](/assets/img/linux-024-5.webp){: width="700" }

    Por ejemplo, si tienes libre office en ejecución, al presionar Ctrl + Z verás que su proceso se detiene y la terminal vuelve a estar disponible.

    ![alt text](/assets/img/linux-024-6.webp){: width="500" }

6. Reanudar un proceso suspendido en segundo plano

    Para reanudar un proceso que has suspendido con Ctrl + Z y enviarlo a segundo plano, usa el comando bg (de background).

    ``` bash
    bg [nombre del proceso]
    ```

    ![alt text](/assets/img/linux-024-7.webp){: width="700" }

7. Identificar y eliminar procesos

    Gestionar procesos también implica poder cerrarlos si ya no son necesarios o si se han bloqueado. Para esto, necesitas conocer su PID.

    - Encontrar el PID de un proceso: Usa el comando pgrep seguido del nombre del programa.

    ``` bash
    pgrep [nombre del proceso]
    ```

    Este comando te devolverá el PID (o PIDs, si hay varias instancias) del proceso que buscas.

    ![alt text](/assets/img/linux-024-8.webp){: width="500" }

    - Eliminar un proceso: Una vez que tienes el PID, puedes usar el comando kill.

    ``` bash
    kill 7977
    ```

    Donde 7977 es el PID que obtuviste con pgrep.

    ![alt text](/assets/img/linux-024-9.webp){: width="500" }

8. Visualizar todos los procesos del sistema

    Para tener una vista completa de todos los procesos que se están ejecutando en tu sistema, usa el comando ps aux.

    ``` bash
    ps aux
    ```

    Este comando muestra una lista detallada de cada proceso, incluyendo el usuario que lo inició, el PID, el uso de CPU y memoria, y el tiempo de ejecución.

    ![alt text](/assets/img/linux-024-10.webp){: width="700" }

9. Filtrar la salida de ps aux con grep

    La salida de ps aux puede ser muy larga. Para encontrar información específica de un proceso, puedes combinarlo con el comando grep (que se usa para buscar texto en la salida de otros comandos) a través de una "pipe" (`|`). Por ejemplo, para ver solo los procesos relacionados con Firefox:

    ``` bash
    ps aux | grep firefox
    ```

    Esto te mostrará únicamente las líneas que contienen la palabra "firefox", lo que facilita encontrar su PID.

    ![alt text](/assets/img/linux-024-11.webp){: width="700" }

10. Ejemplo práctico: Eliminar un proceso de Firefox

    Ahora, combinemos lo aprendido. Si quieres cerrar Firefox desde la terminal sin que bloquee la interfaz gráfica:

    1. Encuentra su PID con ps aux | grep firefox.

    2. Ejecuta kill con el PID que encontraste.

    3. Vuelve a ejecutar el comando de filtrado para verificar que el proceso ha sido eliminado.

    ![alt text](/assets/img/linux-024-12.webp){: width="700" }

Con estos comandos, tienes las herramientas necesarias para gestionar los procesos en Linux de manera eficiente, lo que te permitirá controlar mejor tu sistema y resolver problemas rápidamente.




