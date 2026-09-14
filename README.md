# Sitio web Reciclacoop

Sitio corporativo de Reciclacoop orientado a educación ambiental, activación territorial y captación de organizaciones.

## Instalación rápida en cPanel

1. Descarga `reciclacoop-cpanel.zip`.
2. Súbelo a la carpeta raíz del dominio, normalmente `public_html`.
3. Extrae el contenido directamente en esa carpeta.
4. Verifica que `index.html` y la carpeta `_next` queden en la raíz.

Las instrucciones completas están en [CPANEL-INSTALACION.md](./CPANEL-INSTALACION.md).

## Desarrollo

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

## Generar una versión estática

```bash
npm run build
```

Los archivos listos para publicar se generan en `out/`.

## Sitio actual

[Ver Reciclacoop](https://reciclacoop.felbusmont.chatgpt.site)
