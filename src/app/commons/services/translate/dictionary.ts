export const dictionary = {
  es: {
    home: 'Inicio',
    about: 'Acerca de mí',
    projects: 'Proyectos',
    contact: 'Contacto',
    prefix: 'Mi',
    porfolio: 'Portafolio',
    profiency: 'Ing en Computacion | Desarrollador web y movil | Sistemas distribuidos en la nube',
    greetings: 'Hola soy',
    see_projects: 'Ver Proyectos',
    contact_me: 'Contáctame',
    stack_heading: 'Stack',
    stack_intro: 'Tecnologías con las que diseño sistemas fullstack, serverless y distribuidos.',
    stack_groups: [
      {
        title: 'Lenguajes y backend',
        items: ['Go', 'Node.js', 'NestJS', 'Laravel'],
      },
      {
        title: 'Protocolos',
        items: ['HTTP', 'gRPC'],
      },
      {
        title: 'Frontend',
        items: ['Angular', 'RxJS', 'Signals', 'React', 'Redux', 'Zustand', 'Ionic', 'PWA', 'React Native'],
      },
      {
        title: 'Cloud y DevOps',
        items: ['Kubernetes', 'AWS Lambda', 'SQS', 'SNS', 'S3', 'EKS', 'Kong', 'Docker', 'HPA', 'GitHub Actions', 'Jenkins', 'Serverless', 'esbuild'],
      },
      {
        title: 'Datos, mensajería y observabilidad',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'RabbitMQ', 'Kysely', 'Firebase', 'Coralogix', 'New Relic'],
      },
      {
        title: 'Metodologías y herramientas',
        items: ['Scrum', 'Kanban', 'Agile', 'Clean Code', 'Git', 'Jest', 'Cypress'],
      },
    ],
    about_eyebrow: 'Acerca de mí',
    about_title: 'Construyo software fullstack que escala.',
    about_summary: 'Soy ingeniero en computación con más de seis años desarrollando productos de punta a punta. Diseño la interfaz, las APIs y la infraestructura que las sostiene.',
    about_paragraphs: [
      'Mi trabajo combina Angular y React en el frontend con Go y NestJS en el backend. Integro esos servicios con AWS serverless, Kubernetes y colas para que el sistema siga respondiendo cuando el tráfico crece.',
      'También me ocupo del rendimiento y de la operación: observabilidad, pipelines de CI/CD, contenedores y código que otro equipo pueda mantener. En proyectos recientes bajé tiempos de carga cerca de un 35% y la latencia de procesos pesados hasta un 98%.',
    ],
    about_focus_title: 'En qué me enfoco',
    about_focus: [
      {
        title: 'Producto completo',
        text: 'De la pantalla al despliegue: web, móvil, APIs y datos.',
      },
      {
        title: 'Sistemas distribuidos',
        text: 'Microservicios, mensajería y arquitecturas de alta disponibilidad.',
      },
      {
        title: 'Calidad de entrega',
        text: 'Pruebas, revisiones y entrega continua para salir a producción con menos riesgo.',
      },
    ],
    projects_list: [
      {
        title: 'Sistema de Alta Disponibilidad con NestJS & RabbitMQ',
        description: 'Se utiliza el patron consumer-producer para la comunicación entre microservicios, con el objetivo de garantizar la alta disponibilidad del sistema y la tolerancia a fallos. Se utilizo Postgre Neon y kysely para la persistencia de datos, y se implemento un sistema de colas con RabbitMQ para la comunicación entre microservicios de la siguiente forma API Gateway -> Lambda -> S3 -> SQS -> Lambda.',
        stack: 'NestJS, RabbitMQ, Postgre Neon, Kysely, AWS Lambda, S3, SQS',
        link: 'https://github.com/jorge1415802/aws-server',
        go: 'Ir a ver'
      },
      {
        title: 'Nestjs Ecommerce',
        description: 'Sistema de ecommerce refactorizado de un monolito a una Arquitectura modular de alta eficiencia.',
        stack: 'NestJS, Postgre, TypeORM, AWS, serverless, Lambda, Docker',
        link: 'https://github.com/jorge1415802/nestjs-ecommerce',
        go: 'Ir a ver'
      },
      {
        title: 'App frontend en React de Heroes',
        description: 'Aplicación frontend desarrollada en React, utilizando vitest para pruebas unitarias y de integración. Tambien utiliza tanstack query para manejar un cache de datos eficiente y react-router para la navegación entre diferentes vistas de la aplicación.',
        stack: 'React, vitest, tanstack query, react-router, tailwindcss, typescript',
        link: 'https://github.com/jorge1415802/react_heroes',
        go: 'Ir a ver'
      },
      {
        title: 'Api for Heroes',
        description: 'Aplicación backend desarrollada en NestJs',
        stack: 'NestJS, REST',
        link: 'https://github.com/jorge1415802/nestjs_heroes_back',
        go: 'Ir a ver'
      },
      {
        title: 'Procesador de alto volumen de datos en Go',
        description: 'Cronjob desarrollado en go capas de procesar miles de datos desde una api externa y hacer bulk inserts en bases de datos. El patron utilizado fue arquitectura hexagonal y en su funcionamiento posee un sistema de cache para evitar queries a la db.',
        stack: 'GO, MySQL, Docker, Kubernetes',
        link: 'https://github.com/jorge1415802/go_real_problem',
        go: 'Ir a ver'
      }
    ]
  },
  en: {
    home: 'Home',
    about: 'About me',
    projects: 'Projects',
    contact: 'Contact',
    prefix: 'My',
    porfolio: 'Portfolio',
    profiency: 'Computer Engineer | Web and Mobile Developer | Distributed Systems in the Cloud',
    greetings: 'Hello I am',
    see_projects: 'See Projects',
    contact_me: 'Contact Me',
    stack_heading: 'Stack',
    stack_intro: 'Technologies I use to design fullstack, serverless, and distributed systems.',
    stack_groups: [
      {
        title: 'Languages and backend',
        items: ['Go', 'Node.js', 'NestJS', 'Laravel'],
      },
      {
        title: 'Protocols',
        items: ['HTTP', 'gRPC'],
      },
      {
        title: 'Frontend',
        items: ['Angular', 'RxJS', 'Signals', 'React', 'Redux', 'Zustand', 'Ionic', 'PWA', 'React Native'],
      },
      {
        title: 'Cloud and DevOps',
        items: ['Kubernetes', 'AWS Lambda', 'SQS', 'SNS', 'S3', 'EKS', 'Kong', 'Docker', 'HPA', 'GitHub Actions', 'Jenkins', 'Serverless', 'esbuild'],
      },
      {
        title: 'Data, messaging and observability',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'RabbitMQ', 'Kysely', 'Firebase', 'Coralogix', 'New Relic'],
      },
      {
        title: 'Methodologies and tools',
        items: ['Scrum', 'Kanban', 'Agile', 'Clean Code', 'Git', 'Jest', 'Cypress'],
      },
    ],
    about_eyebrow: 'About me',
    about_title: 'I build fullstack software that scales.',
    about_summary: 'I am a computer engineer with more than six years building products end to end. I design the interface, the APIs, and the infrastructure that keeps them running.',
    about_paragraphs: [
      'My day-to-day work pairs Angular and React on the frontend with Go and NestJS on the backend. I connect those services with AWS serverless, Kubernetes, and queues so the system stays responsive as traffic grows.',
      'I also own performance and operations: observability, CI/CD pipelines, containers, and code another team can maintain. On recent projects I cut load times by about 35% and latency on heavy jobs by up to 98%.',
    ],
    about_focus_title: 'What I focus on',
    about_focus: [
      {
        title: 'Whole product',
        text: 'From the screen to deployment: web, mobile, APIs, and data.',
      },
      {
        title: 'Distributed systems',
        text: 'Microservices, messaging, and high-availability architectures.',
      },
      {
        title: 'Delivery quality',
        text: 'Tests, reviews, and continuous delivery so production releases carry less risk.',
      },
    ],
    projects_list: [
      {
        title: 'High Availability System with NestJS & RabbitMQ',
        description: "The consumer-producer pattern is used for communication between microservices, aiming to ensure the system's high availability and fault tolerance. Postgre Neon and Kysely were used for data persistence, and a queue system was implemented with RabbitMQ for communication between microservices in the following way: API Gateway -> Lambda -> S3 -> SQS -> Lambda.",
        stack: 'NestJS, RabbitMQ, Postgre Neon, Kysely, AWS Lambda, S3, SQS',
        link: 'https://github.com/jorge1415802/aws-server',
        go: 'Go to View'
      },
      {
        title: 'Nestjs Ecommerce',
        description: 'Refactored e-commerce system from a monolith to a high-efficiency modular architecture.',
        stack: 'NestJS, Postgre, TypeORM, AWS, serverless, Lambda, Docker',
        link: 'https://github.com/jorge1415802/nestjs-ecommerce',
        go: 'Go to View'
      },
      {
        title:'React app Heroes',
        description: 'Frontend app developed in React, using vitest for unit and integration tests. It also uses tanstack query for efficient data caching and react-router for app navigation.',
        stack: 'React, vitest, tanstack query, react-router, tailwindcss, typescript',
        link: 'https://github.com/jorge1415802/react_heroes',
        go: 'Go to View'
      },
      {
        title: 'Heroes Api',
        description: 'Backend app developed in NestJs',
        stack: 'NestJS, REST',
        link: 'https://github.com/jorge1415802/nestjs_heroes_back',
        go: 'Go to View'
      },
      {
        title: 'High Volume Data Processor in Go',
        description: 'Cronjob developed in Go, with a pattern of hexagonal architecture and in its operation there is a cache system to avoid queries to the db.',
        stack: 'GO, MySQL, Docker, Kubernetes',
        link: 'https://github.com/jorge1415802/go_real_problem',
        go: 'Go to View'
      }
    ],
  },
};