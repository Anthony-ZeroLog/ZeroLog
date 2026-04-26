---
layout: post
title: "Instalación desatendida de Debian en VirtualBox: Guía completa"
date: 2025-02-14 11:37:00 -0600
categories: [Notes]
tags: [Linux y bash scripting]
meta_description: Aprende a realizar una instalación desatendida de Debian en VirtualBox y automatiza la configuración de máquinas virtuales para ahorrar tiempo y esfuerzo.
description: La instalación manual de un sistema operativo, como hemos visto con Debian en VirtualBox, es un proceso didáctico que nos.....
img: /assets/img/linux-008.webp
---

---

### Instalación de Debian en VirtualBox: Guía práctica para una instalación desatendida
La instalación manual de un sistema operativo, como hemos visto con Debian en VirtualBox, es un proceso didáctico que nos enseña cada paso y la información crítica para configurar una máquina virtual. Sin embargo, este proceso puede ser repetitivo y consumir mucho tiempo. Afortunadamente, VirtualBox ofrece una solución eficiente: la instalación desatendida. Esta función te permite automatizar la instalación de un sistema operativo sin necesidad de intervención manual, ideal para configurar máquinas de manera rápida y eficiente.

En esta guía, te mostraremos cómo realizar una instalación desatendida de Debian paso a paso.

#### Creación de la máquina virtual

El primer paso es crear una nueva máquina virtual en VirtualBox.

![alt text](/assets/img/linux-008-1.webp){: width="600" }

Al asignar las configuraciones básicas, es crucial seleccionar la imagen ISO del sistema operativo desde las opciones iniciales para habilitar la función de instalación desatendida.

![alt text](/assets/img/linux-008-2.webp){: width="700" }

#### Configuración de la instalación desatendida
Una vez seleccionada la imagen ISO, se desbloqueará la opción de instalación desatendida. Haz clic en ella para desplegar el menú de configuraciones y establecer los parámetros necesarios.

![alt text](/assets/img/linux-008-3.webp){: width="700" }

![alt text](/assets/img/linux-008-4.webp){: width="700" }

Marca la opción para que la instalación se ejecute en segundo plano y no tengas que intervenir.

![alt text](/assets/img/linux-008-5.webp){: width="600" }

VirtualBox también te ofrece la opción de instalar las Guest Additions, una gran ventaja que mejora la integración entre el sistema anfitrión y la máquina virtual. Marca esta opción y asegúrate de seleccionar la imagen de las Guest Additions.

![alt text](/assets/img/linux-008-6.webp){: width="600" }

#### Asignación de recursos y almacenamiento
A continuación, configura los recursos de hardware para tu máquina virtual. Asigna la cantidad de memoria RAM y núcleos de procesador que consideres necesarios para el sistema.

![alt text](/assets/img/linux-008-7.webp){: width="600" }

En la configuración de almacenamiento, con 20 GB de espacio en disco suele ser suficiente para una instalación de Debian básica.

![alt text](/assets/img/linux-008-8.webp){: width="600" }

#### Inicio y monitoreo del proceso
Una vez completadas todas las configuraciones, haz clic en Terminar para iniciar la instalación desatendida. En este punto, la máquina arrancará en segundo plano.

![alt text](/assets/img/linux-008-9.webp){: width="600" }

Para ver el estado del proceso, puedes hacer clic en Mostrar en la ventana de VirtualBox.

![alt text](/assets/img/linux-008-10.webp){: width="650" }

![alt text](/assets/img/linux-008-11.webp){: width="600" }

Cuando la instalación haya finalizado, la ventana de la máquina virtual mostrará el sistema Debian listo para usar.

![alt text](/assets/img/linux-008-12.webp){: width="500" }

![alt text](/assets/img/linux-008-13.webp){: width="500" }

La instalación desatendida es una función muy útil de VirtualBox que simplifica enormemente el despliegue de sistemas operativos. Esta técnica te permite ahorrar tiempo y esfuerzo, especialmente si trabajas con múltiples máquinas virtuales en proyectos de desarrollo, pruebas o entornos de laboratorio.




