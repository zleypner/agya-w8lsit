# AgendaYaa Waitlist - Lista de Espera

Aplicación de lista de espera de alta conversión para AgendaYaa, con 5 rutas especializadas por nicho profesional.

## 🎯 Características

- **5 rutas especializadas**: Nutricionistas, Tatuadores, Fisioterapia, Estilistas, Psicólogos
- **Principios de Cialdini integrados**: Autoridad, Prueba Social, Escasez, Compromiso
- **Diseño minimalista y enfocado en conversión**
- **Formulario de lista de espera** con validación
- **Contenido personalizado por nicho** basado en análisis de mercado

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Producción

```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
agendayaa/
├── app/
│   ├── nutricionistas/    # Ruta para nutricionistas
│   ├── tatuadores/        # Ruta para tatuadores
│   ├── fisioterapia/      # Ruta para fisioterapeutas
│   ├── estilistas/        # Ruta para estilistas
│   ├── psicologos/        # Ruta para psicólogos
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio (redirige a /nutricionistas)
│   └── globals.css        # Estilos globales
├── components/
│   ├── WaitlistForm.tsx   # Formulario de lista de espera
│   ├── PainPoint.tsx      # Componente para puntos de dolor
│   ├── SocialProof.tsx    # Prueba social (Cialdini)
│   ├── ScarcityBadge.tsx  # Escasez (Cialdini)
│   └── AuthorityBadge.tsx # Autoridad (Cialdini)
└── package.json
```

## 🧠 Principios de Persuasión (Cialdini)

Cada página incluye:

1. **Autoridad**: "Basado en análisis real de herramientas líderes del mercado"
2. **Prueba Social**: "Profesionales de este sector ya están en lista de acceso"
3. **Escasez**: "Cupos limitados para el lanzamiento inicial"
4. **Compromiso**: Acción simple de unirse a la lista → acceso anticipado

## 🔧 Próximos Pasos

1. **Conectar API**: Reemplazar la simulación en `WaitlistForm.tsx` con un endpoint real
2. **Analytics**: Agregar tracking de conversiones (Google Analytics, etc.)
3. **Email Marketing**: Integrar con servicio de email (SendGrid, Mailchimp, etc.)
4. **A/B Testing**: Probar variantes de headlines y CTAs
5. **Base de Datos**: Guardar leads en base de datos para seguimiento

## 📝 Notas

- El formulario actualmente simula el envío. Necesitas implementar un endpoint API para guardar los datos.
- Cada ruta tiene contenido 100% personalizado para su nicho específico.
- El diseño es responsive y optimizado para móviles.

## 🌍 Idioma

- **Idioma**: Español (Costa Rica neutral)
- **Tono**: Profesional, moderno, confiable
