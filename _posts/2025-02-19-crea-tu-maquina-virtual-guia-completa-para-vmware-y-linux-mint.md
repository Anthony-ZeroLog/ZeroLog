---
layout: post
title: "Crea tu máquina virtual: Guía completa para VMWare y Linux Mint"
date: 2025-02-19 11:37:00 -0600
categories: [Labs-Projects]
tags: [Linux y bash scripting]
meta_description: Aprende a instalar VMWare y crear tu primera máquina virtual con Linux Mint. Un tutorial práctico y conciso para comenzar en el mundo de la virtualización.
description: En el mundo de la virtualización, VMWare es una herramienta poderosa para crear máquinas virtuales en entornos controlados.....
img: /assets/img/linux-010.webp
---

---

### Instalación de Máquina Virtual con VMWare y Linux Mint
En el mundo de la virtualización, VMWare es una herramienta poderosa para crear máquinas virtuales en entornos controlados, ofreciendo una experiencia similar a VirtualBox. Este tutorial te guiará paso a paso para instalar VMWare y configurar una máquina virtual con la distribución Linux Mint.

1. Descarga del software VMWare

    El primer paso es descargar el instalador de VMWare. Puedes obtenerlo desde el siguiente enlace:

    https://drive.google.com/file/d/1BCfFDzng39KUvNAIJS67jrV0lGf-Au7a/view?usp=sharing

    Una vez descargado, haz doble clic en el archivo para iniciar el proceso de instalación.

    ![alt text](/assets/img/linux-010-1.webp){: width="300" }

2. Proceso de instalación de VMWare

    Sigue los pasos del asistente de instalación:

    1. En la ventana del administrador, haz clic en Siguiente.

        ![alt text](/assets/img/linux-010-2.webp){: width="450" }

    2. Selecciona la primera opción para instalar el software.

        ![alt text](/assets/img/linux-010-3.webp){: width="450" }

        ![alt text](/assets/img/linux-010-4.webp){: width="450" }

        ![alt text](/assets/img/linux-010-5.webp){: width="450" }

    3. Haz clic en Instalar. En caso de que ya lo hayas instalado, la opción será Change.

        ![alt text](/assets/img/linux-010-6.webp){: width="450" }

3. Creación de una nueva máquina virtual

    Una vez completada la instalación, se abrirá la pantalla principal de VMWare.

    ![alt text](/assets/img/linux-010-7.webp){: width="600" }

    La creación de una máquina virtual es muy similar a VirtualBox. Para empezar, haz clic en Create New Virtual Machine.

    ![alt text](/assets/img/linux-010-8.webp){: width="500" }

    A continuación, configura tu máquina virtual:

    1. Selecciona la opción para instalar el sistema operativo más tarde y usar una imagen ISO.

        ![alt text](/assets/img/linux-010-9.webp){: width="450" }

    2. Elige el tipo de sistema operativo. Como la distribución de Linux Mint está basada en Ubuntu, selecciona Ubuntu.

        ![alt text](/assets/img/linux-010-10.webp){: width="450" }

    3. Asigna un nombre a tu máquina virtual.

        ![alt text](/assets/img/linux-010-11.webp){: width="450" }

    4. Configura el almacenamiento del disco duro virtual. Para una distribución de Linux, 20 GB es un tamaño suficiente.

        ![alt text](/assets/img/linux-010-12.webp){: width="450" }

    5. Personaliza el hardware, ajustando la memoria RAM y la CPU según tus necesidades.

        ![alt text](/assets/img/linux-010-13.webp){: width="450" }

        ![alt text](/assets/img/linux-010-14.webp){: width="600" }

        ![alt text](/assets/img/linux-010-15.webp){: width="450" }

    6. Una vez finalizada la configuración, selecciona el archivo ISO de tu sistema operativo.

        ![alt text](/assets/img/linux-010-16.webp){: width="400" }

        ![alt text](/assets/img/linux-010-17.webp){: width="700" }

        ![alt text](/assets/img/linux-010-18.webp){: width="700" }

4. Instalación de Linux Mint dentro de la máquina virtual

    1. Enciende la máquina virtual haciendo doble clic en ella. Se iniciará automáticamente el proceso de instalación de Linux Mint.

        ![alt text](/assets/img/linux-010-19.webp){: width="600" }

        ![alt text](/assets/img/linux-010-20.webp){: width="700" }

    2. Verás la interfaz de usuario de instalación. Haz clic en el ícono de la Unidad de CD para comenzar.

        ![alt text](/assets/img/linux-010-21.webp){: width="500" }

    3. Sigue las indicaciones para configurar el idioma, la distribución del teclado y los códecs multimedia.

        ![alt text](/assets/img/linux-010-22.webp){: width="700" }

        ![alt text](/assets/img/linux-010-23.webp){: width="700" }

        ![alt text](/assets/img/linux-010-24.webp){: width="700" }

    4. En Tipo de instalación, deja la opción por defecto. No te preocupes por el aviso de borrado; esto solo aplica al disco duro virtual de la máquina que acabas de crear. Haz clic en Instalar ahora.

        ![alt text](/assets/img/linux-010-25.webp){: width="700" }

        ![alt text](/assets/img/linux-010-26.webp){: width="600" }

    5. Configura tu ubicación para ajustar la zona horaria.

        ![alt text](/assets/img/linux-010-27.webp){: width="600" }

    6. Introduce tu nombre, nombre de usuario y contraseña para tu nuevo sistema.

        ![alt text](/assets/img/linux-010-28.webp){: width="700" }

        ![alt text](/assets/img/linux-010-29.webp){: width="700" }

    7. El proceso de instalación comenzará. Solo debes esperar a que termine.

        ![alt text](/assets/img/linux-010-30.webp){: width="600" }

    8. Una vez finalizado, reinicia la máquina y habrás completado la instalación.

        ![alt text](/assets/img/linux-010-31.webp){: width="700" }

    9. Inicia sesión en tu nuevo sistema operativo.

        ![alt text](/assets/img/linux-010-32.webp){: width="600" }

    A diferencia de VirtualBox, VMWare no requiere que instales las "VMware Tools" de forma manual, ya que suelen venir integradas. Con esto, el proceso de instalación ha concluido y ya puedes empezar a usar tu sistema.

    ![alt text](/assets/img/linux-010-33.webp){: width="700" }

Has completado la instalación de tu máquina virtual con Linux Mint. Ahora tienes un entorno de desarrollo o pruebas totalmente funcional, independiente de tu sistema operativo principal. Esto te permite experimentar con diferentes configuraciones, herramientas y comandos sin riesgo de afectar tu sistema principal. La virtualización es una habilidad fundamental en el mundo de la tecnología, y con VMWare, tienes una herramienta robusta y fiable para seguir explorando. 





