---
layout: post
title: "Comandos APT y DPKG: Cómo instalar y desinstalar programas en Linux"
date: 2025-02-24 11:37:00 -0600
categories: [Labs-Projects]
tags: [Linux y bash scripting]
meta_description: Domina los gestores de paquetes APT y DPKG en Linux. Aprende a instalar, actualizar y eliminar software de forma eficiente con esta guía completa y práctica para principiantes.
description: La instalación y gestión de programas en Linux puede parecer un desafío si vienes de otros sistemas operativos.....
img: /assets/img/linux-012.webp
---

---

### Cómo Manejar los Gestores de Paquetes APT y DPKG en Linux
La instalación y gestión de programas en Linux puede parecer un desafío si vienes de otros sistemas operativos. Sin embargo, gracias a los gestores de paquetes como APT (Advanced Package Tool), esta tarea se vuelve sorprendentemente sencilla. APT simplifica la instalación, actualización y eliminación de software al automatizar la gestión de las dependencias, asegurando que todos los componentes necesarios funcionen correctamente.

### ¿Qué es un gestor de paquetes?
Un gestor de paquetes es una herramienta que automatiza el proceso de instalación de software, incluyendo la gestión de librerías y dependencias. En lugar de buscar, descargar y compilar programas manualmente, un gestor como APT se conecta a los repositorios oficiales de Linux para obtener los paquetes de software de forma segura y fiable.

Para el uso de APT y otros comandos de administración, es necesario tener permisos de superusuario, también conocido como root. Puedes obtener acceso a estos privilegios utilizando el comando sudo su en la terminal, lo que te permitirá ejecutar comandos con la máxima autoridad en tu sistema.

![alt text](/assets/img/linux-012-1.webp){: width="500" }

### Uso del comando apt
El comando apt tiene múltiples usos y variaciones, cada una con un propósito específico para mantener tu sistema al día y funcional.

**apt update**

Este comando te permite actualizar la lista de paquetes disponibles en los repositorios de tu sistema. Es el primer paso que debes realizar antes de instalar cualquier software nuevo, ya que garantiza que tu sistema tenga acceso a las versiones más recientes y seguras. Al ejecutarlo, no actualizas el software instalado, sino la "lista de compras" de paquetes disponibles.

``` bash
apt update
```

![alt text](/assets/img/linux-012-2.webp){: width="600" }

**apt upgrade**

A diferencia de apt update, el comando apt upgrade se encarga de actualizar todo el software que ya tienes instalado en tu sistema a su versión más reciente, basándose en la lista de paquetes que acabas de actualizar. Este es un paso crucial para mantener tu sistema seguro y optimizado, corrigiendo errores y vulnerabilidades conocidas.

``` bash
apt upgrade
```

![alt text](/assets/img/linux-012-3.webp){: width="700" }

**apt install**

Este comando es el más utilizado y te permite instalar nuevas aplicaciones en tu sistema Linux. Simplemente debes escribir el comando seguido del nombre del paquete que deseas instalar.

Ejemplo: Para instalar el editor de audio Audacity, usarías:

``` bash
apt install audacity
```

``` bash
sudo apt install audacity
```

Es importante tener en cuenta que no todas las aplicaciones se encuentran en los repositorios predeterminados. Si un paquete no está disponible, el sistema te lo notificará y deberás buscar un método de instalación alternativo, como el uso de DPKG.

![alt text](/assets/img/linux-012-4.webp){: width="700" }

![alt text](/assets/img/linux-012-5.webp){: width="700" }

![alt text](/assets/img/linux-012-6.webp){: width="700" }

Una vez que la aplicación ha sido instalada, podrás encontrarla y ejecutarla desde el menú de aplicaciones de tu sistema operativo.

![alt text](/assets/img/linux-012-7.webp){: width="500" }

**apt remove y apt autoremove**

Si en algún momento deseas eliminar una aplicación, puedes usar apt remove. Este comando desinstala el programa principal, pero a menudo deja atrás "residuos" o dependencias que ya no son necesarias.

![alt text](/assets/img/linux-012-8.webp){: width="700" }

Para limpiar completamente el sistema, el comando apt autoremove es tu mejor aliado. Se encarga de eliminar automáticamente todas las dependencias que ya no son utilizadas por ninguna otra aplicación.

![alt text](/assets/img/linux-012-9.webp){: width="700" }

### Uso del comando dpkg
A diferencia de APT, que es un gestor de paquetes de alto nivel que se comunica con repositorios remotos, DPKG (Debian Package) es una herramienta de bajo nivel que se usa para instalar paquetes individuales con la extensión .deb. Es la base sobre la que se construye APT. Lo usarás principalmente cuando necesites instalar un software que no está en los repositorios, como es el caso de Google Chrome.

![alt text](/assets/img/linux-012-10.webp){: width="600" }

Para este escenario, el proceso es el siguiente:

- Descargar el archivo .deb: Accede al sitio web oficial del software (ej. Google Chrome) y descarga el archivo con la extensión .deb.

![alt text](/assets/img/linux-012-11.webp){: width="700" }

![alt text](/assets/img/linux-012-12.webp){: width="700" }

![alt text](/assets/img/linux-012-13.webp){: width="450" }

![alt text](/assets/img/linux-012-14.webp){: width="600" }

- Acceder a la terminal: Abre una terminal y navega hasta la carpeta donde descargaste el archivo.

![alt text](/assets/img/linux-012-15.webp){: width="450" }

![alt text](/assets/img/linux-012-16.webp){: width="450" }

**dpkg -i**

El comando dpkg -i se utiliza para instalar el archivo .deb que has descargado. La -i significa "install".

Ejemplo: Para instalar Google Chrome, usarías:

``` bash
sudo dpkg -i google-chrome-stable_current_amd64.deb
```

![alt text](/assets/img/linux-012-17.webp){: width="450" }

![alt text](/assets/img/linux-012-18.webp){: width="450" }

Al ejecutar este comando, el gestor de paquetes DPKG instalará el software en tu sistema. En la mayoría de los casos, los paquetes modernos de grandes empresas como Google también configurarán automáticamente su propio repositorio, permitiendo futuras actualizaciones a través de apt.

### Errores comunes y soluciones
A veces, la instalación con dpkg puede fallar debido a dependencias no satisfechas. Si esto sucede, verás un mensaje de error que indica que faltan paquetes. Para resolver este problema, simplemente ejecuta el siguiente comando:

``` bash
sudo apt-get install -f
```

La opción -f significa "fix-broken" y le indica a APT que busque y descargue automáticamente todas las dependencias que faltan para completar la instalación que intentó hacer DPKG.

Dominar los comandos APT y DPKG es un paso fundamental para cualquier usuario de Linux. Con estas herramientas, tienes el control total sobre el software de tu sistema, lo que te permite mantenerlo actualizado y seguro. Recuerda siempre usar apt update antes de instalar o actualizar, y no dudes en explorar la comunidad de Linux para resolver cualquier duda que pueda surgir.





