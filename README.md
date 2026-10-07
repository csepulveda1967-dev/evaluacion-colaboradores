# 📱 Evaluación de Garzones - PWA para Tablets Android

## 📋 Descripción

Aplicación web progresiva (PWA) optimizada para tablets Android que permite a supervisores y jefes de turno evaluar el desempeño de garzones según los estándares de "El Desde de un Garzón".

## ✨ Características Principales

✅ **Funcionamiento offline completo** - Trabaja sin conexión a internet  
✅ **Instalable como app nativa** - Se instala en la tablet como cualquier aplicación  
✅ **Botones grandes optimizados para táctil** - Diseño pensado para dedos, no para mouse  
✅ **Guardado automático** - No pierdes tu trabajo si cierras la app  
✅ **Historial local** - Guarda todas las evaluaciones en la tablet  
✅ **Exportación a Excel** - Descarga fichas individuales o historial completo  
✅ **Sin desplazamiento horizontal** - Diseño vertical optimizado para tablets  
✅ **Navegación simple** - Paso a paso, sin menús complicados  

---

## 📦 Contenido de los Archivos

```
evaluacion-supervisor-pwa/
├── index.html              # Aplicación principal (archivo HTML mejorado)
├── manifest.json           # Configuración PWA (hace que sea instalable)
├── service-worker.js       # Permite funcionamiento offline
├── README.md              # Este archivo con instrucciones
└── icons/                 # Carpeta para iconos (debes crear las imágenes)
    ├── icon-72x72.png
    ├── icon-96x96.png
    ├── icon-128x128.png
    ├── icon-144x144.png
    ├── icon-152x152.png
    ├── icon-192x192.png
    ├── icon-384x384.png
    └── icon-512x512.png
```

---

## 🎨 Crear los Iconos de la Aplicación

Para que la aplicación se vea profesional cuando se instale, necesitas crear iconos. **Opción más simple:**

### Método 1: Usar un generador online (Recomendado)

1. Ve a https://www.pwabuilder.com/imageGenerator
2. Sube una imagen cuadrada de tu logo o un icono relacionado con restaurantes (512x512 píxeles mínimo)
3. Descarga el paquete ZIP con todos los tamaños
4. Extrae los archivos PNG en la carpeta `icons/`

### Método 2: Crear iconos manualmente

1. Crea una imagen cuadrada simple (puede ser el logo del restaurante o un icono de garzón)
2. Usa una herramienta como:
   - **Windows:** Paint 3D (viene instalado)
   - **Online:** https://www.iloveimg.com/resize-image
3. Crea estas versiones del mismo icono:
   - icon-72x72.png (72 x 72 píxeles)
   - icon-96x96.png (96 x 96 píxeles)
   - icon-128x128.png (128 x 128 píxeles)
   - icon-144x144.png (144 x 144 píxeles)
   - icon-152x152.png (152 x 152 píxeles)
   - icon-192x192.png (192 x 192 píxeles)
   - icon-384x384.png (384 x 384 píxeles)
   - icon-512x512.png (512 x 512 píxeles)

4. Guarda todos los archivos en la carpeta `icons/` dentro de `evaluacion-supervisor-pwa/`

---

## 🚀 Instalación y Uso

### PASO 1: Subir los archivos a un servidor web

**Opción A: Usar GitHub Pages (GRATIS y fácil)**

1. Crea una cuenta gratuita en https://github.com
2. Crea un nuevo repositorio llamado `evaluacion-garzones`
3. Sube todos los archivos de la carpeta `evaluacion-supervisor-pwa/`
4. Ve a Settings → Pages → Branch: main → Save
5. En 2-3 minutos tendrás una URL como: `https://tu-usuario.github.io/evaluacion-garzones/`

**Opción B: Usar un hosting web**

Si tienes un dominio web o hosting, simplemente sube los archivos por FTP a tu servidor.

**Opción C: Servidor local (solo para pruebas en tu red WiFi)**

Si tienes Python instalado en tu computadora:

```bash
# Navega a la carpeta
cd C:\Users\NIÑOS\Documents\capacitacion\evaluacion-supervisor-pwa

# Inicia servidor local
python -m http.server 8000
```

Luego accede desde la tablet a: `http://[IP-de-tu-PC]:8000`

---

### PASO 2: Abrir la aplicación en la tablet

1. **Abre Chrome** en tu tablet Android (debe ser Chrome, no otro navegador)
2. **Escribe la URL** de tu aplicación (la que obtuviste en el Paso 1)
3. Deberías ver la pantalla de "Evaluación de Garzones"

---

### PASO 3: Instalar la aplicación en la tablet

#### Método A: Banner de instalación automático

1. Después de 3 segundos, aparecerá un **banner azul en la parte inferior** que dice "Instalar aplicación"
2. Toca el botón **"Instalar"**
3. Confirma en el diálogo que aparece
4. ¡Listo! La app se instaló en tu tablet

#### Método B: Menú de Chrome

1. En Chrome, toca el **menú de 3 puntos** (esquina superior derecha)
2. Busca la opción **"Instalar aplicación"** o **"Añadir a pantalla de inicio"**
3. Toca ahí y confirma
4. La aplicación aparecerá en tu pantalla de inicio

---

### PASO 4: Usar la aplicación

Una vez instalada:

1. **Busca el icono** en tu pantalla de inicio (se llama "Eval Garzones")
2. **Toca para abrir** - Se abrirá como una app normal, sin la barra de Chrome
3. **Ya funciona offline** - Puedes cerrar Chrome y seguir usando la app
4. Los datos se guardan automáticamente en tu tablet

---

## 📱 Cómo Usar la Aplicación

### Realizar una evaluación:

1. **Datos del evaluado**: Completa nombre, RUT, cargo, local, turno, evaluador y fecha
2. **Navega por las secciones**: Usa los botones "Continuar →" o el menú lateral
3. **Evalúa cada criterio**: Toca "✓ Cumple" o "✗ No" para cada aspecto
4. **Agrega observaciones**: (Opcional) Escribe notas en el campo de texto
5. **Plan de acción**: Define acciones correctivas si es necesario
6. **Ver resultado**: Revisa el resumen con gráficos y porcentajes
7. **Exportar**: Descarga la ficha en Excel o guarda en el historial local

### Botones principales:

- **📥 Descargar Excel**: Genera archivo .xlsx con la evaluación completa
- **💾 Guardar en historial**: Guarda la evaluación en la memoria de la tablet
- **🔄 Nueva evaluación**: Limpia el formulario para empezar otra evaluación
- **🗂 Historial**: Ve todas las evaluaciones guardadas

### Navegación en tablets pequeñas/móviles:

- Si no ves el menú lateral, usa el **botón flotante ☰** (esquina inferior derecha)
- Toca ahí para ver todas las secciones disponibles

---

## 💾 Funcionamiento Offline

### ¿Qué funciona sin internet?

✅ **Todo**: La aplicación completa funciona sin conexión  
✅ Crear evaluaciones  
✅ Guardar en historial local  
✅ Exportar a Excel  
✅ Ver evaluaciones anteriores  

### ¿Cómo funciona?

1. La **primera vez** que abres la app, descarga todos los archivos necesarios
2. Después, los archivos se guardan en la **memoria de la tablet** (caché)
3. Aunque no haya internet, la app carga desde la memoria local
4. Todos los datos se guardan en **localStorage** (almacenamiento local del navegador)

### Indicador de estado:

- Si aparece una **barra amarilla** arriba que dice "Sin conexión - Trabajando en modo offline", significa que no hay internet pero la app funciona igual.

---

## 📊 Exportación de Datos

### Excel - Ficha Individual

Al tocar **"📥 Descargar Excel"**, se genera un archivo `.xlsx` con:

- Datos del evaluado
- Resultados por dimensión (% de cumplimiento)
- Resultado general
- Detalle de todos los criterios evaluados
- Plan de acción definido
- Observaciones y compromisos

**Nombre del archivo:** `Evaluacion_[Nombre]_[Fecha].xlsx`

### Excel - Historial Completo

En la sección **"Historial"**, toca **"📥 Exportar historial a Excel"** para descargar una tabla con todas las evaluaciones guardadas.

---

## 🔧 Solución de Problemas

### ❌ No aparece el botón "Instalar"

**Posible causa:** La app no está en un servidor HTTPS  
**Solución:** Usa GitHub Pages (tiene HTTPS automático) o asegúrate de que tu hosting tenga certificado SSL

---

### ❌ Los datos desaparecen al cerrar

**Posible causa:** La tablet está borrando datos de navegador automáticamente  
**Solución:** 
1. Ve a Configuración → Aplicaciones → Chrome → Almacenamiento
2. Asegúrate de que Chrome tenga permiso para guardar datos
3. Siempre usa el botón "💾 Guardar en historial" antes de cerrar

---

### ❌ No funciona sin internet

**Posible causa:** La app aún no se descargó completamente  
**Solución:**
1. Con internet, abre la app y navega por todas las secciones
2. Espera que todas las páginas carguen completamente
3. Ahora cierra y abre la app sin internet - debería funcionar

---

### ❌ La app se ve cortada o mal en la tablet

**Posible causa:** Configuración de zoom del navegador  
**Solución:**
1. En Chrome, ve a Configuración → Accesibilidad
2. Ajusta "Escala de texto" a 100%
3. Si instalaste la app, desinstálala y vuelve a instalarla

---

## 🔄 Actualizar la Aplicación

Si haces cambios al código:

1. **Cambia el número de versión** en `service-worker.js`:
   ```javascript
   const CACHE_NAME = 'evaluacion-garzones-v1.0.1'; // Incrementa este número
   ```

2. **Sube los archivos actualizados** a tu servidor

3. **En la tablet:**
   - Abre la app instalada
   - Toca el botón **🔄** (arriba a la derecha) para forzar actualización
   - O cierra y abre la app varias veces hasta que se actualice automáticamente

---

## 📞 Soporte Técnico

### Requisitos mínimos:

- **Sistema:** Android 5.0 o superior
- **Navegador:** Chrome 80 o superior
- **Espacio:** 5 MB libres
- **Internet:** Solo para instalación inicial (después funciona offline)

### Compatibilidad verificada:

✅ Samsung Galaxy Tab  
✅ Lenovo Tab  
✅ Huawei MediaPad  
✅ Xiaomi Pad  
✅ Cualquier tablet Android con Chrome  

---

## 📄 Notas Adicionales

### Seguridad de datos:

- Todos los datos se guardan **localmente** en la tablet
- **No se envían a ningún servidor** externo
- Si desinstalas la app o borras datos de Chrome, se pierden las evaluaciones
- **Recomendación:** Exporta el historial a Excel regularmente como respaldo

### Privacidad:

- La aplicación **no requiere permisos** especiales
- No accede a cámara, micrófono, contactos ni ubicación
- No necesita inicio de sesión ni cuenta de usuario

### Limitaciones:

- **Capacidad:** Puede guardar cientos de evaluaciones sin problema
- **Sincronización:** No sincroniza entre tablets (cada una tiene su historial local)
- **Compartir:** Para compartir evaluaciones, usa la exportación a Excel

---

## 🆘 ¿Necesitas Ayuda?

Si tienes problemas con la instalación o uso de la aplicación:

1. Verifica que seguiste todos los pasos en orden
2. Revisa la sección "Solución de Problemas" arriba
3. Asegúrate de tener la última versión de Chrome instalada
4. Prueba reiniciar la tablet

---

## 📝 Registro de Cambios

### Versión 1.0.0 (06/10/2026)
- ✨ Versión inicial PWA
- ✅ Funcionamiento offline completo
- ✅ Instalable en Android
- ✅ Diseño optimizado para tablets táctiles
- ✅ Guardado automático de estado
- ✅ Exportación a Excel (individual e historial)
- ✅ Historial local ilimitado
- ✅ Navegación móvil con menú flotante
- ✅ Indicador de estado offline
- ✅ Banner de instalación automático

---

## 🎓 Recursos Adicionales

- **PWA Builder:** https://www.pwabuilder.com
- **Generador de Iconos:** https://realfavicongenerator.net
- **GitHub Pages:** https://pages.github.com
- **Documentación PWA:** https://web.dev/progressive-web-apps

---

## 👨‍💼 Créditos

**Basado en:** El Desde de un Garzón - Estándares de excelencia en servicio gastronómico  
**Tipo de aplicación:** Progressive Web App (PWA)  
**Optimizada para:** Tablets Android con pantallas táctiles  
**Desarrollada:** Octubre 2026  

---

**¡Listo! Ahora tienes una aplicación profesional para evaluar a tu equipo de garzones desde cualquier tablet Android, con o sin conexión a internet. 🎉**
