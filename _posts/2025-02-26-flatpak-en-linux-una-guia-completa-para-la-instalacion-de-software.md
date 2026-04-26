---
layout: post
title: "Flatpak en Linux: Una guía completa para la instalación de software"
date: 2025-02-26 11:37:00 -0600
categories: [Notes]
tags: [Linux y bash scripting]
meta_description: Aprende a usar Flatpak para instalar software en Linux de forma sencilla. Esta guía te enseña a añadir el repositorio de Flathub y a gestionar tus aplicaciones con comandos básicos.
description: Flatpak es un sistema de distribución de software para Linux que busca simplificar la instalación de aplicaciones.....
img: /assets/img/linux-013.webp
---

---

### Introducción: ¿Qué es Flatpak y por qué usarlo?
Flatpak es un sistema de distribución de software para Linux que busca simplificar la instalación de aplicaciones. A diferencia de los gestores de paquetes tradicionales como apt o dnf, Flatpak empaqueta una aplicación y todas sus dependencias en un único paquete, que luego se ejecuta en un entorno aislado o "sandboxed". Esto garantiza que la aplicación funcione en cualquier distribución de Linux, independientemente de las librerías del sistema, y mejora la seguridad al limitar el acceso de la aplicación a los recursos del sistema.

Este post es una guía rápida y práctica para que aprendas a utilizar Flatpak, a agregar repositorios y a instalar y desinstalar tus aplicaciones favoritas, como Spotify, en tu sistema operativo Linux.

### Pasos para instalar flatpak

1. Instalación de Flatpak

    Para empezar a usar Flatpak, primero debemos asegurarnos de que esté instalado en nuestro sistema. Aunque no viene por defecto en muchas distribuciones, su instalación es un proceso sencillo.

    Utiliza el siguiente comando en tu terminal para instalar Flatpak:

    ``` bash
    sudo apt install flatpak
    ```

    Este comando nos permitirá instalar el gestor de paquetes Flatpak en el sistema.

    ![alt text](/assets/img/linux-013-1.webp){: width="600" }

2. Agregando el repositorio de Flathub

    Una vez que tenemos Flatpak instalado, necesitamos añadir un repositorio para poder acceder a una amplia biblioteca de aplicaciones. El más popular es Flathub, la principal fuente de aplicaciones Flatpak. Puedes explorar las aplicaciones disponibles en su sitio web oficial: **https://flathub.org/**.

    Cuando intentas instalar una aplicación por primera vez sin tener el repositorio agregado, es común que aparezca un error de instalación.

    ![alt text](/assets/img/linux-013-5.webp){: width="700" }

    Para solucionar este problema, debemos añadir el repositorio de Flathub a nuestro sistema. Para ello, ejecuta este comando:

    ``` bash
    sudo flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
    ```
    
    ![alt text](/assets/img/linux-013-6.webp){: width="700" }

    Este comando añade el repositorio de Flathub de forma permanente.

3. Instalando una aplicación: El caso de Spotify

    Ahora que tenemos el repositorio de Flathub agregado, podemos proceder con la instalación de aplicaciones. Como ejemplo práctico, instalaremos Spotify. En la página de Spotify en Flathub, encontrarás los comandos de instalación y ejecución.

    ![alt text](/assets/img/linux-013-2.webp){: width="600" }

    ![alt text](/assets/img/linux-013-3.webp){: width="600" }

    ![alt text](/assets/img/linux-013-4.webp){: width="550" }

    Copia el primer comando y ejecútalo en la terminal con permisos de administrador:

    ``` bash
    flatpak install flathub com.spotify.Client
    ```

    Este comando se encargará de descargar e instalar Spotify y todas las dependencias necesarias.

    ![alt text](/assets/img/linux-013-7.webp){: width="600" }

    ![alt text](/assets/img/linux-013-8.webp){: width="500" }

4. ¿Cómo desinstalar una aplicación?

    Si en algún momento decides eliminar una aplicación instalada con Flatpak, el proceso es igual de sencillo. Utiliza el siguiente comando para desinstalarla:

    ``` bash
    flatpak uninstall [nombre de la aplicación]
    ```

    Para el caso de Spotify, el comando sería:

    ``` bash
    flatpak uninstall com.spotify.Client
    ```

    ![alt text](/assets/img/linux-013-9.webp){: width="650" }

5. Limpieza de dependencias no utilizadas

    Durante el proceso de desinstalación, a menudo quedan dependencias o paquetes residuales que ya no son necesarios. Para liberar espacio y mantener tu sistema limpio, puedes eliminar estas dependencias huérfanas con el siguiente comando:

    ``` bash
    flatpak uninstall --unused
    ```

    Este comando se encarga de limpiar automáticamente todos los residuos.

    ![alt text](/assets/img/linux-013-10.webp){: width="600" }

6. Ventajas de usar Flatpak

    Más allá de la simple instalación, Flatpak ofrece varias ventajas que lo hacen una opción atractiva:

    - Consistencia: Las aplicaciones Flatpak funcionan en cualquier distribución de Linux que lo soporte. Esto es ideal para los desarrolladores, ya que no necesitan empaquetar su software para cada sistema por separado.

    - Seguridad: Cada aplicación se ejecuta en un "sandbox", un entorno aislado que evita que acceda a archivos o datos del sistema sin tu permiso explícito.

    - Independencia de dependencias: Las aplicaciones Flatpak incluyen sus propias dependencias, lo que evita conflictos con las librerías del sistema y garantiza que la aplicación se mantenga funcional incluso si las librerías del sistema se actualizan o cambian.

    - Actualizaciones sencillas: Flatpak maneja las actualizaciones de forma automática y centralizada, lo que facilita mantener tu software al día.

7. Errores comunes

    - Error: Nothing to do.: Este error puede ocurrir si intentas instalar una aplicación que ya tienes o si el nombre de la aplicación es incorrecto. Verifica el nombre en Flathub o usa el comando flatpak search [nombre] para encontrar el nombre exacto del paquete.

    - Error: No such ref '[aplicacion]' found in remote 'flathub': Este error indica que el repositorio de Flathub no está configurado correctamente. Revisa el paso 2 y asegúrate de que el comando flatpak remote-add se haya ejecutado sin errores.

    - Permisos de usuario: Recuerda que la mayoría de los comandos de instalación y gestión requieren permisos de administrador. Si experimentas problemas, verifica que estás usando sudo.



