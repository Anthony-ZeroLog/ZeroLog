---
layout: post
title: "Debian en VirtualBox desde cero: ISO, particiones, escritorio GNOME y Guest Additions"
date: 2025-02-07 11:37:00 -0600
categories: [Labs-Projects]
tags: [Linux y bash scripting]
meta_description: Instala Debian en VirtualBox paso a paso, descarga la ISO, configura particiones, instala GRUB, entorno de escritorio y Guest Additions fácilmente.
description: Generalmente los sistemas operativos se distribuyen en imágenes ISO, por lo que debemos descargar el archivo ISO de Debian.....
img: /assets/img/linux-005.webp
---

---

### Instalar Debian en VirtualBox: guía paso a paso
Cuando ya tenemos creada la máquina virtual en VirtualBox, el siguiente paso es instalar un sistema operativo. Generalmente los sistemas operativos se distribuyen en imágenes ISO, por lo que debemos descargar el archivo ISO de Debian para poder utilizarlo en nuestra máquina virtual.

#### Descargar la ISO de Debian
La búsqueda del archivo ISO se realiza desde el navegador web.

![alt text](/assets/img/linux-005-1.webp){: width="700" .post__img}

Localizamos el botón de descarga y hacemos clic.

![alt text](/assets/img/linux-005-2.webp){: width="700" .post__img}

Esperamos a que finalice la descarga para poder usar la ISO dentro de VirtualBox.

#### Configurar la ISO en VirtualBox
Una vez descargado el archivo ISO de Debian, debemos localizar su ruta. En este ejemplo, se ha movido a una carpeta llamada VBox.

Abrimos el menú de configuración de nuestra máquina virtual para asignar la ISO descargada:

![alt text](/assets/img/linux-005-3.webp){: width="700" .post__img}

En el apartado Almacenamiento → Dispositivos → Controlador, seleccionamos el ícono de CD y la opción “Seleccionar un archivo de disco”.

![alt text](/assets/img/linux-005-4.webp){: width="700" }

Buscamos la ubicación del archivo ISO y lo seleccionamos:

![alt text](/assets/img/linux-005-5.webp){: width="400" }

Hacemos clic en Aceptar y ya podemos encender la máquina virtual para iniciar la instalación.

#### Iniciar la instalación de Debian
Para encender la máquina podemos usar el botón Iniciar o hacer doble clic sobre la máquina en VirtualBox.

![alt text](/assets/img/linux-005-6.webp){: width="600" }

Al iniciar, debemos seleccionar el tipo de instalación. En este caso, elegimos Instalación gráfica.

![alt text](/assets/img/linux-005-7.webp){: width="500" }

#### Configuración inicial del sistema
**Seleccionar idioma**

Elegimos el idioma que tendrá nuestro sistema:
![alt text](/assets/img/linux-005-8.webp){: width="550" }

**Definir ubicación**

Seleccionamos la ubicación. Este paso es importante ya que determina la zona horaria por defecto.
![alt text](/assets/img/linux-005-9.webp){: width="550" }

![alt text](/assets/img/linux-005-10.webp){: width="550" }

**Configurar teclado**

Debemos elegir la distribución del teclado, lo que garantiza que las teclas y combinaciones funcionen correctamente.
![alt text](/assets/img/linux-005-11.webp){: width="550" }

![alt text](/assets/img/linux-005-12.webp){: width="550" }

**Nombre del dispositivo**

Asignamos un nombre a nuestra máquina Debian:
![alt text](/assets/img/linux-005-13.webp){: width="550" }

**Nombre de dominio**

El instalador también pedirá un nombre de dominio, pero este campo puede dejarse en blanco por ahora.
![alt text](/assets/img/linux-005-14.webp){: width="550" }

**Contraseña de superusuario**

Finalmente, configuramos la contraseña del superusuario (root), que es el equivalente al administrador en Windows.
![alt text](/assets/img/linux-005-15.webp){: width="550" }

**Crear usuario**

Asignamos un nombre al usuario que será creado junto con el sistema, asociado a un identificador. Este usuario funciona como la ficha de datos personal; más adelante se configurará el usuario principal del sistema.
![alt text](/assets/img/linux-005-16.webp){: width="550" }

![alt text](/assets/img/linux-005-17.webp){: width="550" }

**Contraseña del superusuario**

Debemos asignar nuevamente la contraseña del superusuario (root).
![alt text](/assets/img/linux-005-18.webp){: width="550" }

**Tipo de almacenamiento**

Seleccionamos el tipo de almacenamiento. Usaremos el modo Guiado, que corresponde a un almacenamiento dinámico.
![alt text](/assets/img/linux-005-19.webp){: width="550" }

![alt text](/assets/img/linux-005-20.webp){: width="550" }

**Esquema de particionado**

Elegimos cómo se guardarán los archivos en el disco. Para simplificar, seleccionamos una sola partición.
![alt text](/assets/img/linux-005-21.webp){: width="600" }

**Resumen de configuraciones**

El instalador muestra un resumen con las particiones:

- La primera corresponde al sistema operativo.
- La segunda, de 1.2 GB tipo swap, es una extensión de la memoria RAM que almacena datos inactivos temporalmente.

![alt text](/assets/img/linux-005-22.webp){: width="600" }

Confirmamos la configuración:

![alt text](/assets/img/linux-005-23.webp){: width="550" }

![alt text](/assets/img/linux-005-24.webp){: width="550" }

**Gestor de paquetes**

Debemos configurar el gestor de paquetes, que nos permitirá acceder al software disponible en Debian.
![alt text](/assets/img/linux-005-25.webp){: width="600" }

![alt text](/assets/img/linux-005-26.webp){: width="600" }

![alt text](/assets/img/linux-005-27.webp){: width="550" }

**Entorno de escritorio**

Debian permite elegir diferentes entornos gráficos. El instalador selecciona por defecto GNOME, aunque podemos optar por otros escritorios según tus preferencias.
![alt text](/assets/img/linux-005-28.webp){: width="550" }

**Instalación del gestor de arranque (GRUB)**

GRUB es el gestor de arranque más usado en sistemas Linux. Su función es inicializar el sistema operativo durante el encendido, y permite seleccionar qué sistema iniciar en caso de tener un Dual Boot.
En este caso, instalaremos GRUB para evitar problemas futuros.
![alt text](/assets/img/linux-005-29.webp){: width="550" }

![alt text](/assets/img/linux-005-30.webp){: width="550" }

**Finalización de la instalación**

Una vez terminada la configuración, el instalador concluye y la máquina se reinicia automáticamente.
![alt text](/assets/img/linux-005-31.webp){: width="550" }

En el primer arranque aparecerá la ventana de inicio de sesión, donde debemos ingresar la contraseña configurada.

![alt text](/assets/img/linux-005-32.webp){: width="600" }

![alt text](/assets/img/linux-005-33.webp){: width="600" }

#### Guest Additions en VirtualBox
**¿Qué son?**

Las Guest Additions son paquetes de controladores y utilidades que se instalan en la máquina virtual para mejorar su rendimiento y usabilidad.
Ofrecen funciones como:

- Integración del puntero del mouse.
- Carpetas compartidas entre anfitrión e invitado.
- Soporte de pantalla y resolución dinámica.
- Portapapeles compartido.
- Arrastrar y soltar entre ambos sistemas.

**¿Por qué son importantes?**

Estas utilidades mejoran la experiencia de usuario al trabajar en la máquina virtual, ofreciendo un entorno más fluido y cercano a un sistema instalado directamente en el hardware.

**Instalación de Guest Additions**

Para instalar los complementos:

- En la barra superior de VirtualBox, seleccionamos Dispositivos → Insertar imagen de CD de los complementos de invitado.
- La unidad de CD se insertará automáticamente dentro de la máquina Debian.

![alt text](/assets/img/linux-005-34.webp){: width="700" }

Acceder a los archivos de instalación

1. Abrimos el menú de actividades y buscamos el icono de Archivos.

![alt text](/assets/img/linux-005-35.webp){: width="700" }

2. En la ventana de gestión de archivos, veremos la unidad de CD en la barra lateral izquierda.

![alt text](/assets/img/linux-005-36.webp){: width="700" }

3. Damos clic en la unidad de CD. En el contenido, hacemos clic derecho → Abrir en una terminal.

![alt text](/assets/img/linux-005-37.webp){: width="700" }

Obtener privilegios de superusuario      
Para el proceso de instalación es necesario tener privilegios de super usuario, es similar a ejecutar una instalación como administrador en Windows.

Abrimos la terminal y ejecutamos:

``` bash
su -
```
Este comando otorga permisos de superusuario al ingresar la contraseña.

![alt text](/assets/img/linux-005-38.webp){: width="500" }

Asignar privilegios sudo a un usuario      
Agregamos nuestro usuario al grupo sudo:

``` bash
usermod -aG sudo [nombre_de_usuario]
```

>Los cambios no se aplican de inmediato. Es necesario reiniciar el sistema:

``` bash 
reboot
```

![alt text](/assets/img/linux-005-39.webp){: width="600" }

![alt text](/assets/img/linux-005-40.webp){: width="600" }


Verificar usuario en grupo sudo      
Al reiniciar, repetimos el acceso al terminal dentro de la unidad de CD y verificamos con:

``` bash 
id
```
Si el resultado incluye 27(sudo), la configuración fue exitosa.

![alt text](/assets/img/linux-005-41.webp){: width="700" }

Ejecutar instalador de Guest Additions

1. Listamos archivos en la unidad de CD:

    ``` bash 
    ls
    ```

2. Ejecutamos el instalador:

    ``` bash 
    sudo bash VBoxLinuxAdditions.run
    ```

    ![alt text](/assets/img/linux-005-42.webp){: width="700" }

3. Confirmamos con yes y esperamos a que finalice la instalación.

    ![alt text](/assets/img/linux-005-43.webp){: width="550" }

4. Reiniciamos nuevamente la máquina:

    ``` bash 
    reboot
    ```

    ![alt text](/assets/img/linux-005-44.webp){: width="550" }

    ![alt text](/assets/img/linux-005-45.webp){: width="700" }


Comprobar instalación      
Para verificar que las Guest Additions funcionan, probamos con los botones de minimizar y maximizar la ventana. La interfaz debe adaptarse automáticamente al tamaño completo.

![alt text](/assets/img/linux-005-46.webp){: width="700" }

Expulsar el disco de Guest Additions      
Por último, abrimos el gestor de archivos y hacemos clic derecho → Expulsar sobre la unidad de CD.

![alt text](/assets/img/linux-005-47.webp){: width="700" }

Con esto finaliza la instalación de Debian en VirtualBox con Guest Additions.

### Nota final
Aunque VirtualBox es una herramienta muy práctica, en mi experiencia personal he tenido problemas con las Guest Additions en algunas distribuciones como Linux Mint y Ubuntu.
En un próximo post exploraremos la instalación de Linux Mint en VMWare, donde la integración con Guest Additions ha sido más estable.









