# Instalación de Reciclacoop en cPanel

## Paquete recomendado

Utiliza el archivo `reciclacoop-cpanel.zip`. Contiene únicamente los archivos públicos del sitio, listos para producción.

## Pasos

1. Entra a **cPanel > Administrador de archivos**.
2. Abre la carpeta raíz del dominio o subdominio. Normalmente es `public_html`.
3. Haz una copia de seguridad del sitio anterior si existe.
4. Sube `reciclacoop-cpanel.zip`.
5. Extrae el ZIP dentro de la carpeta raíz.
6. Comprueba que `index.html`, `_next`, las imágenes y `.htaccess` queden directamente en la raíz, no dentro de otra carpeta adicional.
7. Abre el dominio y prueba el menú, las imágenes y el botón **Solicitar diagnóstico**.

## Formulario

El formulario actual abre el programa de correo del visitante y envía la solicitud a `cooperativareciclacoop@gmail.com`. No necesita base de datos ni configuración PHP.

## Actualizaciones

Para publicar una versión nueva, genera nuevamente el paquete, sube el ZIP y reemplaza los archivos anteriores. Conserva cualquier archivo ajeno al sitio que cPanel requiera.
