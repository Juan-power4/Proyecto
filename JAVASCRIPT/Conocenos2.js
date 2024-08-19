function showInfo(person) {
    let logo = document.getElementById('info-logo').getElementsByTagName('img')[0];
    let title = document.getElementById('info-title');
    let subtitle = document.getElementById('info-subtitle');
    let description = document.getElementById('info-description');

    if (person === 'juanjo') {
        logo.src = '/Imagenes/Conocenos2/juanjoConocenos.jpg';
        title.textContent = 'Juan José Cárdenas';
        subtitle.textContent = 'Gerente';
        description.textContent = 'Juan José Cárdenas, gerente de La Pinta , siempre tuvo una inclinación natural por la gestión, organización y ofrecer un gran ambiente a las personas. Durante sus estudios, conoció a Andrés y Juan Andrés, con quienes desarrolló una profunda amistad compartiendo gran amor por la cultura colombiana. Después de graduarse, Juan José perfeccionó sus habilidades gerenciales. Cuando sus amigos propusieron la idea de fundar un restaurante que celebrara la gastronomía colombiana, Juan José vio la oportunidad perfecta para aplicar su conocimiento y experiencia. Aunque los primeros años fueron desafiantes, su dedicación, visión y gran actitud fueron clave para superar los obstáculos iniciales. Hoy en día, Juan José es la columna vertebral de La Pinta, asegurando que el restaurante funcione sin problemas y por supuesto ofreciendo una gran experiencia a sus invitados.';
    } else if (person === 'lacu') {
        logo.src = '/Imagenes/Conocenos2/lacuConocenos.jpg';
        title.textContent = 'Juan Andrés Lacouture';
        subtitle.textContent = 'Accionista Principal';
        description.textContent = 'Juan Andrés Lacouture es un empresario con una gran visión para los negocios y un profundo amor por la costa caribeña. Después de graduarse, destacó por su habilidad para identificar oportunidades y convertir ideas en proyectos exitosos. Su éxito financiero le trajo una sólida reputación como uno de los empresarios más influyentes del país. A pesar de su éxito, nunca perdió el contacto con sus con sus amigos de la universidad, Andrés y Juan José. Cuando surgió la idea de crear La Pinta, Juan Andrés no dudó en aportar el capital necesario para hacer realidad el proyecto. Su aporte financiero y su enfoque estratégico fueron esenciales para establecer el restaurante en sus primeros años. Gracias a su apoyo, La Pinta ha crecido de ser un pequeño emprendimiento a convertirse en un referente de la gastronomía colombiana y un gran lugar para disfrutar de grandes fiestas, atrayendo a una clientela diversa que incluye tanto a locales como a turistas internacionales.';
    } else if (person === 'andres') {
        logo.src = '/Imagenes/Conocenos2/andresConocenos.jpg';
        title.textContent = 'Andrés Felipe Sánchez';
        subtitle.textContent = 'Chef Ejecutivo';
        description.textContent = 'Andrés Felipe Sánchez siempre supo que su vocación estaba en la cocina. Su pasión por la gastronomía lo llevó a explorar cada rincón de Colombia, aprendiendo de cocineros tradicionales y perfeccionando sus técnicas culinarias. Después de diez años de dedicación y aprendizaje, se convirtió en un experto en la cocina colombiana, con un profundo conocimiento de los sabores, ingredientes y técnicas que hacen única a la gastronomía del país. Su sueño siempre fue llevar estos sabores auténticos a un público más amplio e internacional, y la oportunidad llegó cuando sus amigos de la universidad, Juan Andrés y Juan José, le propusieron abrir un restaurante juntos. Como chef principal de La Pinta, Andrés es el responsable de crear y mantener el menú que ha ganado el reconocimiento tanto de críticos como de comensales. Su enfoque en la calidad y la autenticidad ha sido fundamental para el éxito del restaurante. Bajo su dirección, La Pinta ha logrado destacarse como un lugar donde se celebra lo mejor de la cocina colombiana, convirtiéndose en un destino gastronómico imperdible que ofrece una maravillosa experiencia.';
    }
}

function resetInfo() {
    let logo = document.getElementById('info-logo').getElementsByTagName('img')[0];
    let title = document.getElementById('info-title');
    let subtitle = document.getElementById('info-subtitle');
    let description = document.getElementById('info-description');

    logo.src = '/Imagenes/Home/LaPintaLogo.png';
    title.textContent = 'Historia de La Pinta';
    subtitle.textContent = 'Desde 2015';
    description.textContent = 'Andrés, Juan Andrés, y Juan José se conocieron en la universidad, y a pesar de sus diferentes trayectorias, mantuvieron una sólida amistad basada en su amor por Colombia. Andrés, apasionado por la cocina, dedicó diez años a estudiar la gastronomía colombiana, mientras que Juan Andrés se convirtió en un exitoso empresario con una gran fortuna, y Juan José desarrolló su carrera en la administración de empresas. En 2015, decidieron fusionar sus talentos y fundaron La Pinta Colombiana, un restaurante que fusiona la autenticidad de la comida tradicional colombiana con una experiencia de alta calidad. Hoy en día, La Pinta no solo es un referente en la gastronomía colombiana, sino también un lugar popular para disfrutar de fiestas y eventos.';
}
