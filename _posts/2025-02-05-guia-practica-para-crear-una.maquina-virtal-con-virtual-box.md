---
layout: post
title: "Guía práctica para crear una máquina virtual con VirtualBox"
date: 2025-02-05 11:37:00 -0600
categories: [Notes]
tags: [Linux y bash scripting]
meta_description: Guía paso a paso para crear y configurar una máquina virtual con VirtualBox. Aprende a asignar recursos de hardware como RAM y procesadores, y a crear un disco duro virtual.
description: Este post te guiará paso a paso en la creación de una máquina virtual (VM) utilizando VirtualBox, una herramienta gratuita.....
img: /assets/img/linux-004.webp
---

---

### Cómo crear una máquina virtual con VirtualBox
Este post te guiará paso a paso en la creación de una máquina virtual (VM) utilizando VirtualBox, una herramienta gratuita y de código abierto. Aprenderás a configurar los recursos esenciales de hardware y almacenamiento, como la RAM y el disco duro virtual, para preparar tu entorno de desarrollo o pruebas.

#### Creación de la máquina virtual
El primer paso es crear una nueva máquina virtual. Dentro de la interfaz principal de VirtualBox, localiza y haz clic en el botón "Nueva". Esto abrirá una ventana con las configuraciones iniciales.

![alt text](/assets/img/linux-004-1.webp){: width="700" }

En esta ventana, comenzarás a definir los parámetros básicos de tu VM. Para este ejemplo, configuraremos una máquina con la distribución de Linux Debian. Por ahora, solo crearemos la estructura de la máquina para cargar la imagen del sistema operativo más adelante.

![alt text](/assets/img/linux-004-2.webp){: width="700" }

Las opciones que debes configurar son:

- Nombre: Asigna un nombre claro que te ayude a identificar la máquina, como Debian-Testing o Servidor-Web.
- Carpeta de la máquina: Indica la ruta donde se guardarán los archivos de la VM en tu máquina anfitriona.
- Imagen ISO: Permite seleccionar la imagen del sistema operativo que se instalará. En este paso, puedes dejarla sin seleccionar si prefieres configurarla después.
- Tipo: Selecciona el tipo de sistema operativo, como Microsoft Windows o Linux.
- Versión: Elige la versión específica del sistema operativo que planeas instalar (ej., Debian 64-bit).

#### Configuración de hardware
Una de las etapas más importantes es la configuración del hardware. Recuerda que la máquina anfitriona debe compartir sus recursos con la máquina invitada.

![alt text](/assets/img/linux-004-3.webp){: width="700" }

Aquí, debes prestar atención a dos elementos clave:

- Memoria base (RAM): Al asignar RAM a la VM, esa cantidad de memoria no estará disponible para el sistema anfitrión mientras la VM esté en funcionamiento. Por ejemplo, si tu máquina anfitriona tiene 16 GB y asignas 2 GB a la VM, solo te quedarán 14 GB disponibles para el resto de tus aplicaciones.
- Procesadores: A diferencia de la RAM, la asignación de procesadores es más flexible. Si configuras 2 o más núcleos para la VM, el sistema anfitrión aún podrá utilizarlos si la máquina invitada no los está usando al 100%.

#### Creación del disco duro virtual
El disco duro virtual es el espacio de almacenamiento donde se guardarán todos los archivos de tu máquina virtual, incluyendo el sistema operativo y cualquier software que instales.

Una característica útil de VirtualBox es que puedes crear discos con asignación dinámica. Esto significa que el tamaño del disco crecerá a medida que vayas añadiendo archivos, en lugar de ocupar todo el espacio asignado desde el inicio.

![alt text](/assets/img/linux-004-4.webp){: width="700" }

Sin embargo, también puedes optar por un disco de tamaño fijo o "reservar completamente" el espacio. Si eliges esta opción, el espacio asignado se ocupará inmediatamente en el disco de tu máquina anfitriona, independientemente de cuánto almacenes en la VM.

#### Resumen final
Una vez que hayas configurado todos los parámetros y hagas clic en "Terminar", VirtualBox te mostrará un resumen de la configuración. Revisa que todo esté correcto antes de finalizar.

![alt text](/assets/img/linux-004-5.webp){: width="700" }

¡Y listo! Con estos pasos, has creado la estructura de tu máquina virtual. En el próximo post, exploraremos cómo instalar el sistema operativo en ella y empezar a trabajar con tu nuevo entorno virtual.


