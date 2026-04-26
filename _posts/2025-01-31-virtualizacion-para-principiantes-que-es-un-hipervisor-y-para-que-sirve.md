---
layout: post
title: "Virtualización para principiantes: ¿Qué es un hipervisor y para qué sirve?"
date: 2025-01-31 11:37:00 -0600
categories: [Notes]
tags: [Linux y bash scripting]
meta_description: Aprende qué es la virtualización, cómo funciona un hipervisor y los tipos que existen. Descubre las ventajas de las máquinas virtuales para pruebas de software y seguridad informática.
description: La virtualización es la creación de una versión virtual de un recurso tecnológico, ya sea una plataforma de hardware, un.....
img: /assets/img/linux-002.webp
---

---

### ¿Qué es la Virtualización y cómo funciona?
La virtualización es la creación de una versión virtual de un recurso tecnológico: ya sea una plataforma de hardware, un sistema operativo, un dispositivo de almacenamiento o un recurso de red. Cuando trabajas con máquinas virtuales, estás virtualizando el hardware y el software para simular un sistema operativo completo. Para lograr esto, es esencial utilizar un software de virtualización conocido como hipervisor.

![alt text](/assets/img/linux-002-1.webp){: width="300" }

**Entendiendo el Hipervisor**      
Un hipervisor es una capa de software que permite la creación y administración de máquinas virtuales. Es el motor detrás de la virtualización, encargado de asignar los recursos físicos de tu máquina (CPU, memoria, disco) a las máquinas virtuales. Existen dos tipos principales de hipervisores:

- Hipervisor de Tipo 1 (Bare Metal): Este se instala directamente sobre el hardware físico de la máquina. Un ejemplo de uso es en servidores de centros de datos, donde la virtualización es la base del sistema operativo.

![alt text](/assets/img/linux-002-2.webp){: width="550" }

- Hipervisor de Tipo 2 (Hosted): Se instala sobre un sistema operativo anfitrión. Esto significa que el software de virtualización (el hipervisor) se ejecuta como una aplicación más dentro del sistema operativo principal. Los sistemas operativos que se ejecutan dentro de este entorno se denominan sistemas invitados o máquinas virtuales.

![alt text](/assets/img/linux-002-3.webp){: width="600" }

Entre los softwares de virtualización más populares se encuentran:
- VMware
- VirtualBox
- Hyper-V
- Citrix

### Ventajas de la Virtualización
Una vez que comprendemos estos conceptos, podemos explorar las ventajas que ofrece la virtualización de sistemas operativos, tanto para desarrolladores como para profesionales de la seguridad informática.

**Ventajas clave**:      
- Pruebas de aplicaciones (App Testing): Permite evaluar el comportamiento de una aplicación en múltiples sistemas operativos sin necesidad de instalar cada uno de forma nativa.
- Análisis de malware y pruebas de seguridad: Facilita la prueba de aplicaciones desconocidas en un entorno aislado y seguro. La ejecución de malware en una máquina virtual (el sistema invitado) no afecta al sistema operativo principal (el anfitrión).
- Creación de laboratorios de pentesting: Proporciona un espacio controlado para practicar la explotación de vulnerabilidades, gestionar riesgos y resolver problemas. Esto te permite realizar pruebas de seguridad sin comprometer tu sistema principal.
- Entornos de desarrollo aislados: Ofrece entornos de trabajo independientes que evitan conflictos entre dependencias de proyectos, manteniendo tu máquina principal limpia y ordenada.

![alt text](/assets/img/linux-002-4.webp){: width="600" }

### Softwares de virtualización: VirtualBox vs. VMware
![alt text](/assets/img/linux-002-5.webp){: width="700" }

La virtualización es una herramienta fundamental en el mundo de la tecnología. Ya sea que la utilices para crear entornos de prueba, desarrollar aplicaciones o mejorar tus habilidades en ciberseguridad, un hipervisor te permite trabajar de manera más eficiente y segura.



