---
layout: post
title: "Instalar Snap en Linux Mint: Guía paso a paso y solución de errores"
date: 2025-02-28 11:37:00 -0600
categories: [Labs-Projects]
tags: [Linux y bash scripting, XSS, SQL Injection, Fuerza Bruta, Hydra]
meta_description: Guía completa para instalar el gestor de paquetes Snap en Linux Mint. Aprende a solucionar el bloqueo de instalación y a usar los comandos esenciales para gestionar aplicaciones.
description: Snap es un gestor de paquetes de Linux que facilita la instalación de aplicaciones.....
img: /assets/img/linux-014.webp
---

---

Snap es un gestor de paquetes de Linux que facilita la instalación de aplicaciones. Aunque en distribuciones como Ubuntu su instalación es sencilla, Linux Mint requiere un paso adicional debido a un bloqueo de seguridad. Este post te guiará a través de los comandos necesarios para instalar Snap en Linux Mint y te mostrará cómo gestionar tus aplicaciones con él.

### Instalación y uso de Snap en Linux Mint: Una guía práctica
Los sistemas de gestión de paquetes como Apt, Flatpak y Snap son herramientas esenciales para cualquier usuario de Linux, ya que simplifican enormemente la tarea de instalar, actualizar y gestionar software. Snap, en particular, ha ganado popularidad al empaquetar una aplicación con todas sus dependencias en un solo archivo, garantizando que funcione en cualquier distribución. En este post, exploraremos cómo instalar y utilizar Snap en Linux Mint, una distribución conocida por su estabilidad y su enfoque en la privacidad del usuario.

Aunque la instalación de snapd es sencilla en la mayoría de los sistemas, Linux Mint (a partir de la versión 20) presenta un pequeño obstáculo. Afortunadamente, se puede resolver con un simple comando.

#### Instalando Snap en Linux Mint: Pasos clave

La forma más común de instalar el gestor de paquetes Snap es a través de apt. Sin embargo, en Linux Mint, debemos sortear una restricción.

1. Verificando la restricción de Snap en Linux Mint

    En distribuciones como Ubuntu, la instalación de snapd se hace con un simple comando.

    ``` bash
    sudo apt install snapd
    ```

    En Linux Mint, este comando no funcionará directamente si tienes la versión 20 o superior. Esto se debe a un archivo de preferencia llamado nosnap.pref que se encuentra en el directorio /etc/apt/preferences.d/. Este archivo bloquea específicamente la instalación de paquetes de Snap.

    ![alt text](/assets/img/linux-014-1.webp){: width="600" }

2. Desactivando el archivo de bloqueo

    Para poder instalar Snap, necesitamos mover o renombrar el archivo nosnap.pref. Una buena práctica es cambiarle la extensión para que no sea reconocida por el sistema, pero mantener el archivo como una copia de seguridad. Puedes hacerlo con el siguiente comando:

    ``` bash
    sudo mv /etc/apt/preferences.d/nosnap.pref /etc/apt/preferences.d/nosnap.backup
    ```

    Este comando mueve el archivo y le cambia el nombre a nosnap.backup, desactivando el bloqueo.

    ![alt text](/assets/img/linux-014-2.webp){: width="600" }

3. Actualizando la lista de paquetes

    Una vez que has desactivado el bloqueo, es crucial actualizar la lista de paquetes de tu sistema para que apt reconozca los cambios y te permita la instalación de Snap.

    ``` bash
    sudo apt update
    ```

    ![alt text](/assets/img/linux-014-3.webp){: width="600" }

4. Instalando Snapd

    Ahora sí, ya puedes proceder con la instalación de Snap sin restricciones. Vuelve a ejecutar el comando de instalación inicial:

    ``` bash
    sudo apt install snapd
    ```

    Una vez que el proceso se complete, el gestor de paquetes Snap estará disponible en tu sistema.

    ![alt text](/assets/img/linux-014-4.webp){: width="600" }

    ![alt text](/assets/img/linux-014-5.webp){: width="600" }

5. Creando el enlace simbólico y reiniciando el servicio

    Para que las aplicaciones de Snap se muestren correctamente en el buscador de aplicaciones de tu escritorio, es necesario crear un enlace simbólico y reiniciar el servicio de snapd. Esto asegura que el sistema reconozca la ruta de las aplicaciones instaladas.

    Crear enlace simbólico:

    ``` bash
    sudo ln -s /var/lib/snapd/snap /snap
    ```

    ![alt text](/assets/img/linux-014-6.webp){: width="600" }

    Reiniciar el servicio:

    ``` bash
    sudo systemctl restart snapd
    ```

    Este comando reinicia el demonio de Snap, asegurando que todos los cambios se apliquen y evitando posibles errores.

    ![alt text](/assets/img/linux-014-7.webp){: width="550" }

**Comandos esenciales para gestionar Snap**

Una vez instalado, el gestor de paquetes Snap ofrece una serie de comandos para gestionar tus aplicaciones.

- Ver el estado de Snapd:

    ``` bash
    sudo systemctl status snapd
    ```

    Este comando es útil para verificar si el servicio de snapd está en ejecución e identificar posibles errores.

    ![alt text](/assets/img/linux-014-8.webp){: width="700" }

- Iniciar el servicio de Snapd:

    ``` bash
    sudo systemctl start snapd
    ```

    Si por alguna razón el servicio no está activo, puedes iniciarlo manualmente con este comando.

    ![alt text](/assets/img/linux-014-9.webp){: width="450" }

### Instalando aplicaciones con Snap
El proceso de instalación de aplicaciones con Snap es muy intuitivo. Puedes encontrar miles de aplicaciones en el sitio web oficial de Snapcraft (snapcraft.io).

![alt text](/assets/img/linux-014-10.webp){: width="700" }

![alt text](/assets/img/linux-014-11.webp){: width="700" }

Al seleccionar una aplicación, por ejemplo, Visual Studio Code, verás un botón de "Install" que te proporcionará el comando exacto para su instalación.

![alt text](/assets/img/linux-014-12.webp){: width="600" }

El comando para instalar una aplicación es similar a este:

``` bash
sudo snap install code --classic
```

El flag --classic se usa para aplicaciones que necesitan acceso completo al sistema de archivos, lo cual es común en herramientas de desarrollo como Visual Studio Code.

![alt text](/assets/img/linux-014-13.webp){: width="600" }

![alt text](/assets/img/linux-014-14.webp){: width="500" }

![alt text](/assets/img/linux-014-15.webp){: width="600" }

### Comandos adicionales

- Listar aplicaciones instaladas:

    ``` bash
    sudo snap list
    ```

    Este comando muestra una tabla con todas las aplicaciones que has instalado a través de Snap.

    ![alt text](/assets/img/linux-014-16.webp){: width="550" }

- Eliminar una aplicación:

    ``` bash
    sudo snap remove [nombre de la aplicación]
    ```

    Para desinstalar una aplicación, simplemente usa snap remove seguido del nombre del paquete.

La gestión de paquetes con Snap ofrece una forma segura y sencilla de instalar software en Linux, incluso en distribuciones como Linux Mint que requieren pasos adicionales. La capacidad de empaquetar todas las dependencias en un solo archivo minimiza los conflictos y garantiza que las aplicaciones funcionen de manera consistente. Si buscas una manera fácil de mantener tu software actualizado y organizado, Snap es sin duda una excelente opción.




