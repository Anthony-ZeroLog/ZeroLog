---
layout: post
title: "Configuración de redes en VirtualBox: Guía práctica de tipos y opciones"
date: 2025-02-12 11:37:00 -0600
categories: [Labs-Projects]
tags: [Linux y bash scripting]
meta_description: Aprende a configurar redes en VirtualBox. Descubre los tipos de red (NAT, Bridged, Internal) y sigue una guía paso a paso para crear una Red NAT segura para tus máquinas virtuales.
description: VirtualBox es una herramienta esencial para la virtualización, y su capacidad para gestionar redes es clave.....
img: /assets/img/linux-007.webp
---

---

VirtualBox es una herramienta esencial para la virtualización, y su capacidad para gestionar redes es clave. Este post te guiará por los tipos de red más comunes (NAT, NAT Network, Bridged y Internal Network) y te mostrará paso a paso cómo configurar una red NAT, ideal para entornos de prueba seguros y aislados.

### Configuración de Redes en VirtualBox: Guía Práctica de Tipos y Opciones
VirtualBox es un software de virtualización gratuito y de código abierto que permite ejecutar múltiples sistemas operativos (invitados) en una única computadora (anfitrión). Una de sus características más importantes es la capacidad de configurar diferentes tipos de redes, lo que permite la comunicación entre la máquina virtual y la máquina física, o incluso entre varias máquinas virtuales. Comprender estas configuraciones es crucial para crear entornos de prueba, desarrollar aplicaciones cliente-servidor o simplemente para acceder a Internet desde una máquina virtual.

La elección del tipo de red adecuado dependerá de tus necesidades. Además, una buena configuración puede ayudarte a prevenir el acceso de atacantes desde la máquina invitada a la máquina anfitriona, lo que resalta su importancia en temas de seguridad.

### Tipos de Redes en VirtualBox

Al crear una máquina virtual en VirtualBox, es esencial elegir el tipo de red que utilizará. A continuación, se describen los tipos más comunes y sus características.

- NAT (Network Address Translation)
    Esta configuración comparte la conexión de red del sistema anfitrión. Permite a la máquina virtual acceder a Internet y a la red local, pero al usar una IP privada, la máquina virtual no es accesible desde el exterior. Esto proporciona una capa de seguridad al ocultar la máquina invitada de la red externa.

- Red NAT (NAT Network)
    Similar a NAT, pero con una diferencia clave: permite que varias máquinas virtuales se comuniquen entre sí, además de acceder a la red externa. Todas las máquinas virtuales conectadas a la misma Red NAT pueden verse y comunicarse entre sí, creando un entorno de red interno. La máquina anfitriona no puede acceder directamente a ellas, ya que estas están detrás de una capa de NAT.

- Adaptador Puente (Bridged Adapter)
    Con este modo, la máquina virtual se comporta como un dispositivo independiente en la misma red física del anfitrión. La máquina virtual obtiene su propia dirección IP en la misma subred que la máquina anfitriona, lo que la hace visible para otros dispositivos en la red local y, potencialmente, desde Internet. Esta opción es ideal para servidores o servicios que deben ser accesibles desde la red física.

- Red Interna (Internal Network)
    Este tipo de red crea un entorno privado y completamente aislado para varias máquinas virtuales. Las máquinas conectadas a la misma Red Interna pueden comunicarse entre sí, pero no pueden acceder a la máquina anfitriona ni a Internet. Es la configuración perfecta para probar la comunicación entre un servidor y sus clientes en un entorno seguro y aislado, sin riesgos de exposición a la red externa.

Para muchos entornos de prueba y desarrollo, la mejor opción es la Red NAT, ya que ofrece un balance entre conectividad (acceso a internet) y seguridad (aislamiento de la red del anfitrión). A continuación, te mostramos cómo configurarla.

### Cómo Configurar una Red NAT en VirtualBox

Configurar una Red NAT es un proceso sencillo que consta de dos pasos principales.

1. Paso 1: 

    - Si entramos en la configuración de nuestra máquina virtual tendremos acceso a los ajustes de red, desplegaremos el botón "Conectado a:" y seleccionamos Red NAT.
    ![alt text](/assets/img/linux-007-1.webp){: width="700" }

    - Una vez que hayamos seleccionado Red NAT es posible observar que es necesario seleccionar el nombre de alguna red para su configuración, por lo tanto debemos crearla.
    ![alt text](/assets/img/linux-007-2.webp){: width="700" }

2. Paso 2: Asignar una red NAT a nuestra máquina

    - Abre VirtualBox. En el menú de herramientas dar clic en el icono de ajustes.
    ![alt text](/assets/img/linux-007-3.webp){: width="700" }

    - En el menú desplegable de preferencias, busca y selecciona la opción Red.
    ![alt text](/assets/img/linux-007-4.webp){: width="700" }

    - Selecciona la pestaña Redes NAT. Aquí podrás ver todas las redes NAT configuradas. Para crear una nueva, haz clic derecho en el espacio en blanco y selecciona Crear.
    ![alt text](/assets/img/linux-007-5.webp){: width="700" }

    ![alt text](/assets/img/linux-007-6.webp){: width="700" }

    - VirtualBox creará una Red NAT por defecto con un nombre genérico (por ejemplo, NatNetwork). Puedes hacer clic en el ícono de engranaje para editar su configuración, como el rango de IPs o el nombre.
    ![alt text](/assets/img/linux-007-7.webp){: width="700" }

    Una vez creada, la nueva Red NAT estará disponible para ser usada por tus máquinas virtuales.

2. Paso 2: Seleccionar la Red NAT en la Máquina Virtual

    Ahora que la Red NAT está creada, es momento de asignársela a tu máquina virtual.

    - Accede nuevamente al menú de configuración de tu máquina virtual y dirígete a la sección Red. En el desplegable Modo de conexión, selecciona Red NAT. Justo debajo, en el desplegable Nombre de red, elige la Red NAT que creaste en el paso anterior.
    ![alt text](/assets/img/linux-007-8.webp){: width="700" }

¡Y listo! Con estos pasos, tu máquina virtual ahora estará conectada a la Red NAT, permitiéndote la comunicación interna con otras máquinas virtuales y el acceso seguro a Internet.

Entender los tipos de redes en VirtualBox es fundamental para optimizar tus entornos de desarrollo y prueba. La Red NAT es una excelente opción que combina la conveniencia de la conectividad externa con la seguridad del aislamiento, pero la elección final siempre dependerá de los requerimientos de tu proyecto.





