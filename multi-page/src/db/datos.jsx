// JSON de Productos (Comp: ListaProductos, Producto)
// Buscar una imagen real web para cada producto
export const productos = [
    {
        "id": 1,
        "name": "Smartphone XYZ",
        "price": 599.99,
        "description": "Último modelo con cámara de alta resolución y batería de larga duración.",
        "image": "https://m.media-amazon.com/images/I/61L1ItFgFHL.jpg"
    },
    {
        "id": 2,
        "name": "Laptop UltraBook",
        "price": 1299.99,
        "description": "Potente y ligera, perfecta para profesionales en movimiento.",
        "image": "https://m.media-amazon.com/images/I/71t3PXu3lNL.jpg"
    },
    {
        "id": 3,
        "name": "Auriculares NoiseCancel",
        "price": 249.99,
        "description": "Experimenta un sonido inmersivo con cancelación de ruido activa.",
        "image": "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202302/20/00138545856924____1__1200x1200.jpg"
    }
];

// json de Testimonios
// Comp: ListaTestimonios, Testimonio, StarRating
export const testimonios = [
    {
        "id": 1,
        "name": "Laura Sánchez",
        "position": "Directora de Marketing",
        "company": "TechCorp",
        "testimonial": "El servicio al cliente es excepcional. Siempre están dispuestos a ayudar y resolver cualquier problema.",
        "image": "https://example.com/laura-sanchez.jpg",
        "rating": 3
    },
    {
        "id": 2,
        "name": "Pedro Gómez",
        "position": "Desarrollador Senior",
        "company": "WebSolutions",
        "testimonial": "La plataforma es intuitiva y fácil de usar. Ha mejorado significativamente nuestra productividad.",
        "image": "https://example.com/pedro-gomez.jpg",
        "rating": 5
    },
    {
        "id": 3,
        "name": "Isabel Torres",
        "position": "CEO",
        "company": "InnovateNow",
        "testimonial": "Gracias a este producto, hemos podido escalar nuestro negocio de manera eficiente y sostenible.",
        "image": "https://example.com/isabel-torres.jpg",
        "rating": 4.5
    }
]

// Componentes: ListaEventos, Evento, Fecha (Date+time)
export const eventosCalendario = [
    {
        "id": 1,
        "title": "Reunión de equipo",
        "date": "2024-07-05",
        "time": "10:00",
        "location": "Sala de conferencias A"
    },
    {
        "id": 2,
        "title": "Lanzamiento de producto",
        "date": "2024-07-10",
        "time": "14:00",
        "location": "Auditorio principal"
    },
    {
        "id": 3,
        "title": "Taller de desarrollo web",
        "date": "2024-07-15",
        "time": "09:00",
        "location": "Sala de formación B"
    },
    {
        "id": 4,
        "title": "Cena de empresa",
        "date": "2024-07-20",
        "time": "20:00",
        "location": "Restaurante El Mirador"
    }
];

// Json de Comentarios
// Comp: ListaComentarios, Comentario, ListaRespuestas, Respuesta, FechaParaHumanos
export const comentarios = [
    {
        "id": 1,
        "author": "María García",
        "image": "https://example.com/maria-garcia.jpg",
        "date": "2024-07-01T10:30:00Z",
        "content": "¡Excelente artículo! Me ha ayudado mucho a entender el tema.",
        "replies": [
            {
                "id": 2,
                "author": "Juan Pérez",
                "image": "https://example.com/juan-perez.jpg",
                "date": "2024-07-01T11:15:00Z",
                "content": "Totalmente de acuerdo, María. El autor ha explicado todo de manera muy clara."
            },
            {
                "id": 6,
                "author": "Juan Pérez",
                "image": "https://example.com/juan-perez.jpg",
                "date": "2024-07-01T11:15:00Z",
                "content": "Totalmente de vuelta de acuerdo, María. El autor ha explicado todo de manera muy clara."
            }
        ]
    },
    {
        "id": 3,
        "author": "Carlos Rodríguez",
        "image": "https://example.com/carlos-rodriguez.jpg",
        "date": "2024-07-02T09:45:00Z",
        "content": "Me gustaría ver más ejemplos prácticos en futuros artículos.",
        "replies": [
            {
                "id": 4,
                "author": "Ana Martínez",
                "image": "https://example.com/ana-martinez.jpg",
                "date": "2024-07-02T10:30:00Z",
                "content": "Buena sugerencia, Carlos. Yo también creo que más ejemplos serían útiles."
            }
        ]
    }
];

// JSON de Restaurante
// Comp: MenuCategorias, ListaPlatos, Plato
export const restaurant = {
    "menu": {
        "entrantes": [
            {
                "id": 1,
                "nombre": "Ensalada César",
                "precio": 8.99,
                "descripcion": "Lechuga romana, crutones, queso parmesano y aderezo César."
            },
            {
                "id": 2,
                "nombre": "Sopa de tomate",
                "precio": 6.99,
                "descripcion": "Sopa casera de tomate con albahaca fresca."
            }
        ],
        "principales": [
            {
                "id": 3,
                "nombre": "Filete de salmón",
                "precio": 18.99,
                "descripcion": "Salmón a la parrilla con salsa de limón y eneldo, acompañado de verduras al vapor."
            },
            {
                "id": 4,
                "nombre": "Pasta Alfredo",
                "precio": 14.99,
                "descripcion": "Fettuccine en salsa cremosa de queso parmesano."
            }
        ],
        "postres": [
            {
                "id": 5,
                "nombre": "Tiramisú",
                "precio": 7.99,
                "descripcion": "Clásico postre italiano con capas de bizcocho, café y crema de mascarpone."
            },
            {
                "id": 6,
                "nombre": "Tarta de manzana",
                "precio": 6.99,
                "descripcion": "Tarta casera de manzana servida con helado de vainilla."
            }
        ]
    }
};

// JSON de Instrucciones de Recetas (Componentes genéricos)
// Comp: ListaItems, Item, ItemHeader, ListaTextos
export const tarjetasRecetas = [
    {
        "id": 1,
        "name": "Paella Valenciana",
        "image": "https://example.com/paella.jpg",
        "ingredients": [
            "400g de arroz bomba",
            "1 kg de pollo troceado",
            "200g de judías verdes",
            "200g de garrofó (judía blanca)",
            "1 tomate rallado",
            "Azafrán",
            "Aceite de oliva",
            "Sal",
            "Agua"
        ],
        "instructions": [
            "Sofríe el pollo en una paella con aceite de oliva.",
            "Añade las judías verdes y el garrofó, y sofríe unos minutos más.",
            "Incorpora el tomate rallado y cocina hasta que se evapore el agua.",
            "Agrega el arroz y remueve para que se impregne bien.",
            "Vierte el agua caliente (el doble que de arroz) y el azafrán.",
            "Cocina a fuego fuerte durante 10 minutos y luego a fuego lento otros 8 minutos.",
            "Deja reposar unos minutos antes de servir."
        ]
    },
    {
        "id": 2,
        "name": "Guacamole",
        "image": "https://example.com/guacamole.jpg",
        "ingredients": [
            "3 aguacates maduros",
            "1 tomate",
            "1/2 cebolla",
            "1 chile jalapeño (opcional)",
            "Jugo de 1 limón",
            "Cilantro fresco",
            "Sal"
        ],
        "instructions": [
            "Corta los aguacates por la mitad, retira el hueso y vacía la pulpa en un bol.",
            "Machaca los aguacates con un tenedor hasta obtener una consistencia cremosa.",
            "Pica finamente el tomate, la cebolla y el jalapeño (si lo usas) y añádelos al bol.",
            "Agrega el jugo de limón, cilantro picado y sal al gusto.",
            "Mezcla todos los ingredientes hasta que estén bien integrados.",
            "Sirve inmediatamente con totopos o chips de maíz."
        ]
    }
];