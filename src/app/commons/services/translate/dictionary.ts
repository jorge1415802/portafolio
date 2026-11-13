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