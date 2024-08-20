function showInfo(person) {
    let logo = document.getElementById('info-logo').getElementsByTagName('img')[0];
    let title = document.getElementById('info-title');
    let subtitle = document.getElementById('info-subtitle');
    let description = document.getElementById('info-description');

    // Ocultar contenido actual
    logo.style.opacity = '0';
    title.style.opacity = '0';
    subtitle.style.opacity = '0';
    description.style.opacity = '0';

    setTimeout(() => {
        if (person === 'juanjo') {
            logo.src = '/Imagenes/Conocenos2/juanjoConocenos - copia.png';
            title.textContent = 'Juan José Cárdenas';
            subtitle.textContent = '"EL Gerente"';
            description.textContent = 'Juan José, gerente de La Pinta, siempre tuvo una inclinación natural por la gestión, organización y ofrecer un gran ambiente a las personas. Durante sus estudios, conoció a Andrés y Juan Andrés, con quienes desarrolló una profunda amistad compartiendo gran amor por la cultura colombiana. Después de graduarse, Juan José perfeccionó sus habilidades administrativas y gerenciales. Cuando sus amigos propusieron la idea de fundar un restaurante que celebrara la gastronomía colombiana, Juan José vio la oportunidad perfecta para aplicar su conocimiento y experiencia. Aunque los primeros años fueron desafiantes, su dedicación, visión y gran actitud fueron clave para superar los obstáculos iniciales. Hoy en día, Juan José es la columna vertebral de La Pinta, asegurando que el restaurante funcione sin problemas y por supuesto ofreciendo una gran experiencia a sus invitados.';
        } else if (person === 'lacu') {
            logo.src = '/Imagenes/Conocenos2/lacuConocenos - copia.png';
            title.textContent = 'Juan Andrés Lacouture';
            subtitle.textContent = '"El Millonario"';
            description.textContent = 'Juan Andrés es un empresario con una gran visión para los negocios y un profundo amor por la costa caribeña. Después de graduarse, destacó por su habilidad para identificar oportunidades y convertir ideas en proyectos exitosos. Su éxito financiero le trajo una sólida reputación como uno de los empresarios más influyentes del país. A pesar de su éxito, nunca perdió el contacto con sus con sus amigos, Andrés y Juan José. Cuando surgió la idea de crear La Pinta, Juan Andrés no dudó en aportar el capital necesario para hacer realidad el proyecto. Su aporte financiero y su enfoque estratégico fueron esenciales para establecer el restaurante en sus primeros años. Gracias a su apoyo, La Pinta ha crecido de ser un pequeño emprendimiento a convertirse en un referente de la gastronomía colombiana y un gran lugar para disfrutar de grandes fiestas, atrayendo a una clientela diversa que incluye tanto a locales como a turistas internacionales.';
        } else if (person === 'andres') {
            logo.src = '/Imagenes/Conocenos2/andresConocenos - copia.png';
            title.textContent = 'Andrés Felipe Sánchez';
            subtitle.textContent = '"El Chef"';
            description.textContent = 'Andrés siempre supo que su vocación estaba en la cocina. Su pasión por la gastronomía lo llevó a explorar cada rincón de Colombia, aprendiendo de técnicas tradicionales y perfeccionando sus técnicas culinarias. Después de diez años de aprendizaje, se convirtió en un experto en la cocina colombiana, con conocimiento de los sabores e ingredientes que hacen única a la gastronomía del país. Su sueño siempre fue llevar estos sabores auténticos a un público más amplio e internacional, y la oportunidad llegó cuando Juan Andrés y Juan José le propusieron abrir La Pinta. Como chef principal de La Pinta, Andrés es el responsable de crear el menú que ha ganado el reconocimiento tanto de críticos. Su enfoque en la calidad y la autenticidad ha sido fundamental para el éxito de La Pinta. Bajo su dirección, La Pinta ha logrado destacarse como un lugar donde está lo mejor de la cocina colombiana, convirtiéndose en un destino imperdible que ofrece una maravillosa experiencia.';
        }

        // Mostrar nuevo contenido
        logo.style.opacity = '1';
        title.style.opacity = '1';
        subtitle.style.opacity = '1';
        description.style.opacity = '1';
    }, 200); // Pequeño retraso para hacer la transición más natural
}

function resetInfo() {
    let logo = document.getElementById('info-logo').getElementsByTagName('img')[0];
    let title = document.getElementById('info-title');
    let subtitle = document.getElementById('info-subtitle');
    let description = document.getElementById('info-description');

    // Ocultar contenido actual
    logo.style.opacity = '0';
    title.style.opacity = '0';
    subtitle.style.opacity = '0';
    description.style.opacity = '0';

    setTimeout(() => {
        logo.src = '/Imagenes/Conocenos/Logo.png';
        title.textContent = 'Historia de La Pinta';
        subtitle.textContent = 'Desde 2015';
        description.textContent = 'Andrés, Juan Andrés, y Juan José se conocieron en la universidad, y a pesar de sus diferentes trayectorias, mantuvieron una sólida amistad basada en su amor por Colombia. Andrés, apasionado por la cocina, dedicó diez años a estudiar la gastronomía colombiana, mientras que Juan Andrés se convirtió en un exitoso empresario con una gran fortuna, y Juan José desarrolló su carrera en la administración de empresas. En 2015, decidieron fusionar sus talentos y fundaron La Pinta Colombiana, un restaurante que fusiona la autenticidad de la comida tradicional colombiana con una experiencia de alta calidad. Hoy en día, La Pinta no solo es un referente en la gastronomía colombiana, sino también un lugar popular para disfrutar de fiestas y eventos.';

        // Mostrar nuevo contenido
        logo.style.opacity = '1';
        title.style.opacity = '1';
        subtitle.style.opacity = '1';
        description.style.opacity = '1';
    }, 200); // Pequeño retraso para hacer la transición más natural
}