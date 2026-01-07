# Blog - Guía para Agregar Nuevos Posts

Este directorio contiene los posts del blog en formato MDX (Markdown + JSX).

## Estructura de un Post

Cada post debe tener un frontmatter YAML al inicio con la siguiente información:

\`\`\`mdx
---
title: "Título del Post"
date: "YYYY-MM-DD"
readTime: "X min"
tags: ["Tag1", "Tag2", "Tag3"]
category: "Technical" | "Projects" | "Reflections"
description: "Descripción breve del post que aparece en el listado"
---

# Título del Post

Tu contenido aquí...
\`\`\`

## Agregar un Nuevo Post

1. **Crear el archivo MDX**: Crea un nuevo archivo en `content/blog/` con formato `slug-del-post.mdx`
   
2. **Agregar metadata**: Incluye el frontmatter completo al inicio

3. **Registrar el post**: Agrega la metadata en dos lugares:
   - `app/blog/page.tsx`: Array `blogPosts`
   - `app/blog/[slug]/page.tsx`: Objetos `blogPostsData` y `blogPostsContent`

## Sintaxis Markdown Soportada

### Encabezados
\`\`\`markdown
# H1
## H2
### H3
\`\`\`

### Énfasis
\`\`\`markdown
**negrita**
*cursiva*
\`\`\`

### Listas
\`\`\`markdown
- Item 1
- Item 2

1. Primero
2. Segundo
\`\`\`

### Código
\`\`\`markdown
\`código inline\`

\`\`\`python
# Bloque de código
def hello():
    print("Hello World")
\`\`\`
\`\`\`

### Enlaces
\`\`\`markdown
[Texto del enlace](https://url.com)
\`\`\`

### Imágenes
\`\`\`markdown
![Alt text](/ruta/imagen.jpg)
\`\`\`

### Tablas
\`\`\`markdown
| Columna 1 | Columna 2 |
|-----------|-----------|
| Valor 1   | Valor 2   |
\`\`\`

## Ejemplo de Post Completo

Ver archivos existentes:
- `introduccion-machine-learning.mdx`
- `analisis-bayesiano-espacial.mdx`
- `transformers-nlp.mdx`

## Próximos Pasos (Opcional)

Para una integración más avanzada con MDX verdadero:

1. **Instalar MDX Remote** (ya incluido):
   \`\`\`bash
   npm install @next/mdx @mdx-js/loader @mdx-js/react
   \`\`\`

2. **Usar componentes personalizados**: Puedes crear componentes React personalizados y usarlos directamente en tus posts MDX.

3. **Sistema de lectura automática**: Implementar un sistema que lea automáticamente los archivos `.mdx` en lugar de registrarlos manualmente.

## Categorías Disponibles

- **Technical**: Tutoriales técnicos, explicaciones de conceptos
- **Projects**: Análisis profundos de proyectos
- **Reflections**: Reflexiones personales, experiencias

## Tips

- Usa bloques de código con el lenguaje especificado para mejor sintaxis highlighting
- Mantén los posts entre 10-20 minutos de lectura
- Incluye ejemplos prácticos de código cuando sea posible
- Usa imágenes para complementar explicaciones (colócalas en `public/blog/`)
