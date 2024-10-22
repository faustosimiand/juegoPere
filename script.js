const questions = [
    "Si pudieras viajar a cualquier planeta, ¿cuál sería y por qué?",
    "¿Cuál es la aplicación más rara que tienes en tu teléfono?",
    "Si pudieras eliminar una tarea diaria de tu vida para siempre, ¿cuál sería?",
    "¿Qué personaje de ficción te gustaría que fuera real y por qué?",
    "¿Qué sería lo primero que harías si ganaras la lotería mañana?",
    "¿Si tuvieras que elegir entre ser invisible o poder volar, cuál elegirías y por qué?",
    "¿Cuál es el peor consejo que has recibido en tu vida?",
    "¿Cuál es tu idea de un día perfecto?",
    "¿Si fueras un fantasma, en qué lugar del mundo elegirías vivir y asustar a la gente?",
    "¿Cuál fue la moda más ridícula en la que te metiste de niño?",
    "¿Si pudieras vivir en cualquier lugar del mundo, pero solo por un año, dónde sería?",
    "¿Qué harías si de repente pudieras entender lo que dicen los animales?",
    "¿Qué cosa realmente extraña te da miedo?",
    "¿Si pudieras tener un trabajo completamente diferente al que tienes ahora, cuál elegirías?",
    "¿Qué serie o película te gustaría que nunca hubiera terminado?",
    "¿Si los humanos pudieran fusionarse con animales, con cuál te fusionarías y por qué?",
    "¿Cuál es el sueño más extraño o divertido que recuerdas haber tenido?",
    "¿Qué palabra rara o arcaica te gustaría que volviera a ponerse de moda?",
    "¿Si fueras un supervillano, cuál sería tu poder y tu plan malvado?",
    "¿Cuál es la cosa más inútil que has comprado pero que secretamente amas?",
    "Si pudieras tener cualquier animal como mascota, sin importar lo exótico, ¿cuál sería?",
    "¿Qué superpoder elegirías si tuviera un lado absurdo o inútil?",
    "Si fueras un personaje de dibujos animados, ¿cómo sería tu vida diaria?",
    "Si pudieras cambiar el sonido que hacen los animales, ¿qué sonidos les darías?",
    "¿Cuál es el invento más inútil pero divertido que se te ocurre?",
    "¿Si tuvieras que vivir dentro de una película o serie de televisión, cuál elegirías y por qué?",
    "¿Qué comida extraña o combinación de alimentos te encanta, pero a los demás les parece rara?",
    "Si te conviertes en el líder supremo del mundo por un día, ¿qué regla divertida impondrías?",
    "¿Cuál fue el juguete o juego más ridículo con el que jugabas cuando eras niño?",
    "Si pudieras hablar con cualquier objeto inanimado, ¿qué sería y qué crees que te diría?",
    "Si tu vida tuviera una banda sonora, ¿cuál sería la canción que suena cuando entras a una habitación?",
    "Si pudieras reemplazar cualquier parte de tu cuerpo con una parte robótica con habilidades especiales, ¿cuál sería y qué haría?",
    "¿Qué palabra inventada te gustaría que todos comenzaran a usar?",
    "Si pudieras intercambiar vidas con un animal por un día, ¿cuál elegirías y qué harías?",
    "Si tuvieras que elegir un apocalipsis absurdo para vivir, ¿qué escenario sería (por ejemplo, invasión de patos gigantes)?",
    "¿Qué talento completamente inútil te gustaría dominar?",
    "Si pudieras ser invisible, pero solo por cinco minutos al día, ¿cómo aprovecharías ese tiempo?",
    "¿Qué aspecto completamente trivial de la vida diaria te gustaría que fuera más épico (por ejemplo, lavar los platos como si fuera una batalla épica)?",
    "Si pudieras inventar un deporte nuevo, ¿cómo sería y cuáles serían las reglas?",
    "Si las cosas que piensas se materializaran por un minuto, ¿qué cosa loca o divertida aparecería más seguido?",
    "¿Qué es lo que realmente nos hace humanos?",
    "¿Crees que el destino está predeterminado o que somos dueños de nuestras elecciones?",
    "¿Qué es más importante, ser feliz o tener un propósito en la vida?",
    "¿Crees que la moralidad es algo objetivo o subjetivo?",
    "¿Qué significa realmente ser libre?",
    "¿El ser humano es inherentemente bueno o malo por naturaleza?",
    "Si supieras que el mundo se va a acabar en 10 años, ¿cómo cambiarías tu vida?",
    "¿Es posible alcanzar la verdad absoluta o siempre estamos limitados por nuestras percepciones?",
    "¿Qué piensas sobre la idea de que la realidad es una simulación?",
    "¿El sufrimiento es una parte necesaria de la vida para apreciar la felicidad?",
    "¿Qué valor tiene el arte en la sociedad y cómo impacta nuestras vidas?",
    "¿El tiempo es real o simplemente una construcción humana?",
    "¿Qué significa llevar una 'vida buena' o plena?",
    "¿Crees que existe una vida después de la muerte? ¿Por qué o por qué no?",
    "¿La inteligencia artificial podría algún día tener conciencia y derechos?",
    "¿Es más importante buscar la verdad o la felicidad?",
    "¿El amor es una emoción puramente química o algo más trascendental?",
    "¿La justicia siempre significa castigar el mal, o puede existir sin castigo?",
    "¿Qué papel juega la memoria en nuestra identidad personal?",
    "Si la inmortalidad fuera posible, ¿deberíamos buscarla? ¿Qué consecuencias tendría?",
    "¿Cuál es el lugar más interesante que has visitado?",
    "Si pudieras dominar instantáneamente una habilidad o talento, ¿cuál sería?",
    "¿Tienes alguna teoría sobre por qué soñamos lo que soñamos?",
    "¿Prefieres los gatos o los perros? ¿Por qué?",
    "Si fueras el protagonista de una película, ¿cuál sería el género?",
    "¿Cuál es el invento más útil de la historia según tú?",
    "¿Crees en las coincidencias o que todo tiene un propósito?",
    "Si pudieras tener cualquier superpoder, pero solo por un día, ¿cuál elegirías?",
    "¿Cuál es el libro o película que más te ha influido?",
    "¿Qué crees que nos espera en el futuro en términos de tecnología?",
    "Si pudieras cenar con cualquier personaje histórico, ¿quién sería y qué le preguntarías?",
    "¿Cómo crees que sería la vida en otros planetas si descubriéramos vida extraterrestre?",
    "¿Qué es lo más raro que has comido y qué te pareció?",
    "¿Cómo crees que cambiaría el mundo si las personas no necesitaran dormir?",
    "¿Qué lugar del mundo te gustaría visitar que nunca has visitado?",
    "Si tuvieras que elegir un solo alimento para comer el resto de tu vida, ¿cuál sería?",
    "¿Cuál es el hobby más inusual que has escuchado?",
    "¿Te gustaría ser inmortal si pudieras? ¿Por qué o por qué no?",
    "Si pudieras diseñar tu espacio ideal para relajarte, ¿cómo sería?",
    "¿Qué lugar de la naturaleza te inspira más? ¿Cómo lo describirías con palabras?",
    "Si pudieras convertir cualquier actividad en una forma de arte, ¿cuál sería y cómo la transformarías?",
    "Imagina que te despiertas en un mundo donde todo está hecho de papel, ¿cómo interactuarías con tu entorno?",
    "Si fueras capaz de cambiar el color del cielo y las nubes a cualquier paleta de colores, ¿cuál elegirías?",
    "¿Qué harías si tuvieras una tarde libre para crear algo completamente nuevo sin limitaciones?",
    "Imagina que puedes comunicarte con los animales. ¿Qué crees que te dirían sobre el mundo?",
    "Si pudieras escribir una carta al pasado o al futuro, ¿qué mensaje te gustaría transmitir?",
    "Piensa en un objeto cotidiano. ¿Cómo lo transformarías para darle una nueva función o propósito?",
    "Si pudieras ilustrar tus sueños de anoche, ¿cómo sería la obra final?",
    "Si pudieras diseñar un parque temático basado en tu imaginación, ¿qué atracciones tendría?",
    "Imagina que puedes darle vida a un personaje de tus ilustraciones o escritos. ¿Cómo sería su personalidad?",
    "Si pudieras crear un nuevo sentido (como la vista o el oído) para los seres humanos, ¿cuál sería y cómo funcionaría?",
    "Si te pidieran diseñar la portada de un libro que aún no existe, ¿qué historia inspiraría tu arte?",
    "Si pudieras mezclar dos animales para crear una criatura fantástica, ¿cómo se vería y qué habilidades tendría?",
    "Imagina un mundo donde todos los objetos puedan hablar. ¿Cuál crees que sería el objeto más divertido de escuchar?",
    "Si pudieras cambiar una regla social para que todos tuvieran más libertad creativa, ¿qué cambiarías?",
    "¿Qué música escucharías si estuvieras en un lugar completamente desconocido? ¿Cómo te ayudaría a explorar ese entorno?",
    "Si pudieras darle un nuevo diseño a las estaciones del año, ¿cómo cambiarías la primavera o el invierno?",
    "Si pudieras crear tu propio idioma, ¿qué palabras serían esenciales y por qué?",
    "Si pudieras diseñar una ciudad flotante en el cielo, ¿cómo sería su arquitectura y estilo de vida?",
    "Imagina que tienes la habilidad de convertir cualquier emoción en una obra de arte. ¿Qué colores y formas utilizarías para expresar la felicidad?",
    "Si pudieras pintar el mundo con una técnica artística (acuarela, óleo, etc.), ¿cuál usarías y por qué?",
    "Si pudieras inventar un nuevo sentido del humor, ¿cómo lo describirías?",
    "Si tuvieras que diseñar un nuevo planeta, ¿qué elementos naturales únicos tendría?",
    "Imagina que puedes escuchar los pensamientos de las plantas. ¿Qué crees que dirían sobre el ser humano?",
    "Si pudieras hacer que todos en el mundo adoptaran un hobby creativo, ¿cuál elegirías para ellos?",
    "Si cada día pudiera tener un color distinto que definiera tu estado de ánimo, ¿cómo cambiarían tus días?",
    "Imagina que puedes escribir con luces en el cielo. ¿Qué mensaje dejarías cada noche para el mundo?",
    "Si pudieras tocar un instrumento que aún no existe, ¿cómo crees que sonaría?",
    "¿Crees que las personas pueden cambiar radicalmente a lo largo de su vida, o siempre mantienen una esencia fundamental?",
    "¿Qué es más importante en la vida: la estabilidad financiera o la satisfacción personal?",
    "¿Crees que el éxito se define por los logros externos (dinero, carrera, estatus) o por la satisfacción interna (felicidad, paz, relaciones)?",
    "¿Es posible encontrar un propósito en la vida, o lo creamos a través de nuestras acciones?",
    "¿Qué papel juegan la suerte y las decisiones en el destino de una persona?",
    "¿Crees que el sufrimiento es necesario para crecer como persona?",
    "¿Es mejor vivir el momento o planificar para el futuro? ¿Cómo equilibrias ambas perspectivas?",
    "¿Qué significa para ti la libertad? ¿Crees que existe una libertad absoluta o siempre está condicionada?",
    "¿Qué papel juegan las emociones en la toma de decisiones importantes? ¿Son una guía o un obstáculo?",
    "¿Crees que las personas son inherentemente buenas o malas? ¿O dependen completamente de sus circunstancias?",
    "¿Es más importante seguir nuestras pasiones o buscar un equilibrio entre lo que nos apasiona y lo que es práctico?",
    "¿Piensas que la felicidad es un estado temporal o algo que se puede mantener a largo plazo?",
    "¿Es más importante perdonar a los demás o aprender a perdonarse a uno mismo?",
    "¿Hasta qué punto crees que las expectativas sociales nos definen? ¿Es posible vivir completamente libre de ellas?",
    "¿Crees que la moralidad es algo objetivo, o cada persona tiene su propio código moral según sus circunstancias?",
    "¿Qué papel crees que juega el miedo en nuestras vidas? ¿Es más un motor o una barrera?",
    "¿Es más importante dejar un legado tangible (como logros, dinero) o uno intangible (como recuerdos, valores)?",
    "¿Crees que es posible vivir sin juzgar a los demás, o el juicio es una parte natural de las relaciones humanas?",
    "¿Qué es más valioso, la verdad o la empatía? ¿Hasta qué punto crees que deberían equilibrarse?",
    "¿Crees que el ser humano tiene la capacidad de cambiar el mundo de manera positiva, o las fuerzas negativas son demasiado fuertes para vencerlas?",
];


let usedQuestions = [];

function getRandomQuestion() {
    if (questions.length === 0) {
        return "¡Se acabaron las preguntas!";
    }
    
    const randomIndex = Math.floor(Math.random() * questions.length);
    const selectedQuestion = questions[randomIndex];

    // Eliminar la pregunta de la lista de preguntas disponibles
    questions.splice(randomIndex, 1);
    usedQuestions.push(selectedQuestion);

    return selectedQuestion;
}

document.getElementById('nextBtn').addEventListener('click', function() {
    const card = document.getElementById('questionCard');
    
    // Primero, deslizamos la tarjeta actual hacia la derecha (animación de salida)
    card.classList.add('slide-out');
    
    setTimeout(() => {
        const newQuestion = getRandomQuestion();
        card.innerText = newQuestion;

        // Remover la animación de salida y agregar la de entrada
        card.classList.remove('slide-out');
        card.classList.add('slide-in');
        
        // Después de que la nueva tarjeta esté en su lugar, removemos la clase de entrada
        setTimeout(() => {
            card.classList.remove('slide-in');
        }, 500); // Duración de la animación de entrada
    }, 500); // Duración de la animación de salida
});
