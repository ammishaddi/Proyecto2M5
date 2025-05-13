// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true },
        { "titulo": "Como agua para chocolate", "autor": "Laura Esquivel", "genero": "Romance", "disponible": true },
        { "titulo": "El túnel", "autor": "Ernesto Sabato", "genero": "Psicologico", "disponible": true },
    ]
};


function leerDatos(callback) {
    setTimeout(() => {
        callback(biblioteca);
    }, 1000);
}



function mostrarLibros() {
    leerDatos((datos) => {
        console.log("Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}



function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    // Aquí falta la simulación de escribir el libro en el "archivo" (es decir, agregarlo al objeto)
    setTimeout(() => {
        biblioteca.libros.push(nuevoLibro);
        console.log(`Libro agregado: ${titulo}`);
    }, 1000);
}


function actualizarDisponibilidad(titulo, nuevoEstado) {
    // Simula un retraso antes de actualizar la disponibilidad
    setTimeout(() => {
        const libro = biblioteca.libros.find(function(l) {
        return l.titulo === titulo;
        });

        if (libro) {
            libro.disponible = nuevoEstado;
            console.log("Disponibilidad actualizada: " + titulo + " -> " + (nuevoEstado ? "Disponible" : "Prestado"));
        } else {
            console.log("Libro no encontrado: " + titulo);
        }
        // Pista: busca el libro por título y cambia la propiedad 'disponible' a nuevoEstado
    }, 1000);
}



mostrarLibros();
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
actualizarDisponibilidad("1984", false);