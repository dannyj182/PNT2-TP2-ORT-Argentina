const libros = [
    { id: '1', titulo: 'Sentido y Sensibilidad',    autor: 'Jane Austen', anio: 1811},
    { id: '2', titulo: 'Orgullo y Prejuicio',       autor: 'Jane Austen', anio: 1813},
    { id: '3', titulo: 'Mansfield Park',            autor: 'Jane Austen', anio: 1814},
    { id: '4', titulo: 'Emma',                      autor: 'Jane Austen', anio: 1815},
    { id: '5', titulo: 'Persuasión',                autor: 'Jane Austen', anio: 1818},
    { id: '6', titulo: 'La Abadía de Northanger',   autor: 'Jane Austen', anio: 1818},
]

const findLibro = (id) => {
  return libros.find((libro) => libro.id == id);
};

const findLibros = (_) => {
  return libros;
};

const saveLibro = (libro) => {
  libro.anio = parseInt(libro.anio);
  const id = parseInt(libros[libros.length - 1].id) + 1;
  libro.id = String(id);
  libros.push(libro);
  return libro;
};

const updateLibro = (libro, id) => {
  libro.id = id;
  const index = libros.findIndex((libro) => libro.id == id);
  libros.splice(index, 1, libro);
  return libro;
};

const deleteLibro = (id) => {
  const index = libros.findIndex((libro) => libro.id == id);
  const libro = libros.splice(index, 1)[0];
  return libro;
};

export default {
  findLibro,
  findLibros,
  saveLibro,
  updateLibro,
  deleteLibro,
};
