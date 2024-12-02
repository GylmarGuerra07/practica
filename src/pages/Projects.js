import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects() {
    const Proyectos = [
        {
            nombre: 'E-commerce Web',
            descripcion: 'Aplicacion de compras en línea con React.',
            link: 'https://github.com/usuario/ecomerce',
        },
        {
            nombre: 'Blog Personal',
            descripcion: 'Blog creado con React',
            link: 'https://github.com/usuario/blog-personal',
        },
        {
            nombre: 'Gestor de Tareas',
            descripcion: 'Aplicacion para gestionar tareas diarias.',
            link: 'https://github.com/usuario/todo-app',
        },
    ];

    return (
        <section className="projects">
            <h2>Mis proyectos</h2>
            <div className="projects-grid">
                {Proyectos.map((proyecto, index) => (
                    <div key={index} className="project-card">
                        <h3>{proyecto.nombre}</h3>
                        <p>{proyecto.descripcion}</p>
                        <a href="{proyecto.link}" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="3x" />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;