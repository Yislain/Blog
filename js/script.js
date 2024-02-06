// Datos de ejemplo de posts
const posts = [
    { title: 'Conceptos clave para la creación de soluciones tecnológicas', content: 'Contenido sobre los principales conceptos utilizados en el desarrollo de soluciones tecnológicas.' },
    { title: 'Definición de soluciones a partir de la innovación incremental', content: 'Explicación sobre cómo la innovación incremental puede conducir a la creación de soluciones efectivas.' },
    { title: 'Diseño de interacciones', content: 'Aspectos fundamentales del diseño de interacciones en aplicaciones y sitios web.' },
    // Puedes agregar más posts aquí
];
  
// Función para mostrar los posts en el blog
function mostrarPosts() {
    const blogPosts = document.getElementById('blogPosts');
    blogPosts.innerHTML = ''; // Limpiamos el contenido actual
  
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
  
        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;
  
        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;
  
        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);
  
        blogPosts.appendChild(postElement);
    });
}
  
// Mostrar los posts al cargar la página
mostrarPosts();
