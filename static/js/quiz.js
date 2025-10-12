// Base de datos de preguntas del quiz
const quizQuestions = [
    {
        question: "¿Qué es la cadena de custodia en evidencia digital?",
        options: [
            "Un protocolo para documentar el manejo de evidencia",
            "Un método de encriptación de datos",
            "Una técnica de recuperación de archivos",
            "Un tipo de firewall de seguridad"
        ],
        correct: 0,
        explanation: "La cadena de custodia es el procedimiento documentado que rastrea el manejo de la evidencia desde su recolección hasta su presentación en corte."
    },
    {
        question: "¿Cuál de estos NO es un principio fundamental del análisis forense digital?",
        options: [
            "No modificar la evidencia original",
            "Documentar todo el proceso",
            "Usar herramientas no certificadas",
            "Mantener la integridad de los datos"
        ],
        correct: 2,
        explanation: "Siempre se deben usar herramientas certificadas y validadas para garantizar la admisibilidad de la evidencia."
    },
    {
        question: "¿Qué representa un hash MD5 en evidencia digital?",
        options: [
            "Un identificador único de un archivo",
            "Un método de compresión",
            "Un protocolo de red",
            "Un tipo de virus informático"
        ],
        correct: 0,
        explanation: "El hash MD5 genera un valor único que identifica la integridad de un archivo. Cualquier cambio en el archivo resultará en un hash diferente."
    },
    {
        question: "¿Qué es la 'regla de oro' en informática forense?",
        options: [
            "Nunca trabajar sobre la evidencia original",
            "Siempre usar la computadora más rápida",
            "Documentar solo los hallazgos importantes",
            "Compartir la evidencia con todo el equipo"
        ],
        correct: 0,
        explanation: "La regla de oro establece que siempre se debe trabajar con copias forenses, nunca con la evidencia original."
    },
    {
        question: "¿Cuál de estas herramientas es utilizada para crear imágenes forenses?",
        options: [
            "FTK Imager",
            "Microsoft Word",
            "Adobe Photoshop",
            "Google Chrome"
        ],
        correct: 0,
        explanation: "FTK Imager es una herramienta especializada para crear imágenes forenses bit-a-bit de dispositivos de almacenamiento."
    },
    {
        question: "¿Qué información puede obtenerse del análisis de metadatos?",
        options: [
            "Fecha de creación y modificación de archivos",
            "Contenido encriptado de los archivos",
            "Contraseñas de usuario",
            "Historial de navegación completo"
        ],
        correct: 0,
        explanation: "Los metadatos contienen información sobre los datos, como fechas, autor, y propiedades del archivo, pero no el contenido encriptado."
    },
    {
        question: "¿Qué es la 'volatilidad' de la evidencia digital?",
        options: [
            "Datos que se pierden al apagar el equipo",
            "La velocidad del procesador",
            "La capacidad de la memoria RAM",
            "El tipo de sistema de archivos"
        ],
        correct: 0,
        explanation: "La evidencia volátil, como la memoria RAM, se pierde cuando se apaga el dispositivo y debe capturarse inmediatamente."
    },
    {
        question: "¿Cuál es el primer paso en un proceso de investigación forense digital?",
        options: [
            "Asegurar la escena y la evidencia",
            "Analizar los datos del disco duro",
            "Crear un reporte final",
            "Interrogar a los sospechosos"
        ],
        correct: 0,
        explanation: "El primer paso crítico es asegurar la escena para prevenir la contaminación o pérdida de evidencia."
    },
    {
        question: "¿Qué tipo de evidencia se encuentra en la memoria RAM?",
        options: [
            "Procesos ejecutándose y conexiones de red",
            "Archivos eliminados permanentemente",
            "Configuración del BIOS",
            "Contraseñas de WiFi guardadas"
        ],
        correct: 0,
        explanation: "La memoria RAM contiene datos temporales de procesos en ejecución, conexiones de red y otra información volátil."
    },
    {
        question: "¿Qué es el 'slack space' en un disco duro?",
        options: [
            "Espacio no utilizado entre el fin de archivo y fin de cluster",
            "Espacio para archivos temporales",
            "Memoria RAM no utilizada",
            "Espacio de intercambio del sistema"
        ],
        correct: 0,
        explanation: "El slack space es el área entre el final del archivo y el final del cluster asignado, que puede contener datos residuales."
    },
    {
        question: "¿Cuál de estos es un estándar internacional para informática forense?",
        options: [
            "ISO/IEC 27037",
            "HTTP/1.1",
            "TCP/IP",
            "HTML5"
        ],
        correct: 0,
        explanation: "ISO/IEC 27037 proporciona directrices para la identificación, recolección y preservación de evidencia digital."
    },
    {
        question: "¿Qué permite el análisis de registros de eventos (logs)?",
        options: [
            "Reconstruir actividades del sistema",
            "Acelerar el rendimiento del equipo",
            "Recuperar archivos corruptos",
            "Mejorar la señal de WiFi"
        ],
        correct: 0,
        explanation: "Los logs registran actividades del sistema y permiten reconstruir eventos cronológicamente."
    },
    {
        question: "¿Qué es un 'write blocker'?",
        options: [
            "Dispositivo que previene modificaciones en la evidencia",
            "Herramienta para bloquear escritura en Word",
            "Software antivirus",
            "Firewall de red"
        ],
        correct: 0,
        explanation: "Un write blocker es un dispositivo hardware o software que previene escrituras en el dispositivo de almacenamiento bajo análisis."
    },
    {
        question: "¿En qué consiste el análisis de artefactos digitales?",
        options: [
            "Examinar huellas dejadas por actividades del usuario",
            "Estudiar objetos arqueológicos digitalizados",
            "Analizar obras de arte digital",
            "Revisar documentos históricos escaneados"
        ],
        correct: 0,
        explanation: "Los artefactos digitales son huellas dejadas por actividades del usuario, como historiales, archivos temporales y caché."
    },
    {
        question: "¿Qué importancia tiene la hora y fecha en evidencia digital?",
        options: [
            "Permite establecer línea de tiempo de eventos",
            "Ayuda a predecir futuros ataques",
            "Determina la velocidad de procesamiento",
            "Indica la ubicación geográfica"
        ],
        correct: 0,
        explanation: "La correlación temporal es crucial para establecer líneas de tiempo precisas en investigaciones forenses."
    }
];

// Variables del quiz
let currentQuestionIndex = 0;
let userAnswers = new Array(quizQuestions.length).fill(null);
let quizStarted = false;
let quizCompleted = false;
let startTime;
let timerInterval;
let totalTime = 0;
let score = 0;

// Elementos DOM
const quizStartScreen = document.getElementById('quiz-start');
const quizQuestionsScreen = document.getElementById('quiz-questions');
const quizResultsScreen = document.getElementById('quiz-results');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionFeedback = document.getElementById('question-feedback');
const quizNavigation = document.getElementById('quiz-navigation');
const prevQuestionBtn = document.getElementById('prev-question');
const nextQuestionBtn = document.getElementById('next-question');
const submitQuizBtn = document.getElementById('submit-quiz');
const beginQuizBtn = document.getElementById('begin-quiz');
const startQuizBtn = document.getElementById('start-quiz');
const resetQuizBtn = document.getElementById('reset-quiz');
const restartQuizBtn = document.getElementById('restart-quiz');
const reviewAnswersBtn = document.getElementById('review-answers');

// Inicializar el quiz
document.addEventListener('DOMContentLoaded', function() {
    initializeQuiz();
    setupQuizEvents();
});

function initializeQuiz() {
    resetQuizStats();
    showScreen('quiz-start');
    updateProgress();
}

function setupQuizEvents() {
    beginQuizBtn.addEventListener('click', startQuiz);
    startQuizBtn.addEventListener('click', startQuiz);
    resetQuizBtn.addEventListener('click', resetQuiz);
    restartQuizBtn.addEventListener('click', resetQuiz);
    prevQuestionBtn.addEventListener('click', showPreviousQuestion);
    nextQuestionBtn.addEventListener('click', showNextQuestion);
    submitQuizBtn.addEventListener('click', finishQuiz);
    reviewAnswersBtn.addEventListener('click', reviewAnswers);
}

function startQuiz() {
    quizStarted = true;
    currentQuestionIndex = 0;
    startTime = new Date();
    timerInterval = setInterval(updateTimer, 1000);
    
    startQuizBtn.disabled = true;
    submitQuizBtn.disabled = false;
    quizNavigation.classList.remove('d-none');
    
    showScreen('quiz-questions');
    showQuestion();
    updateProgress();
}

function showQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    
    // Actualizar texto de la pregunta
    questionText.textContent = question.question;
    document.getElementById('question-counter').textContent = 
        `Pregunta ${currentQuestionIndex + 1} de ${quizQuestions.length}`;
    
    // Limpiar opciones anteriores
    optionsContainer.innerHTML = '';
    
    // Crear nuevas opciones
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'quiz-option';
        if (userAnswers[currentQuestionIndex] === index) {
            optionElement.classList.add('selected');
        }
        
        optionElement.innerHTML = `
            <div class="option-content">
                <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
            </div>
        `;
        
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
    
    // Actualizar navegación
    updateNavigation();
    updateProgress();
    
    // Limpiar feedback
    questionFeedback.innerHTML = '';
    questionFeedback.className = 'question-feedback mt-4';
}

function selectOption(optionIndex) {
    if (!quizStarted || quizCompleted) return;
    
    userAnswers[currentQuestionIndex] = optionIndex;
    showQuestion();
    
    // Mostrar feedback inmediato
    showQuestionFeedback();
}

function showQuestionFeedback() {
    const question = quizQuestions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];
    
    if (userAnswer === null) return;
    
    const isCorrect = userAnswer === question.correct;
    
    questionFeedback.innerHTML = `
        <div class="feedback-content ${isCorrect ? 'correct' : 'incorrect'}">
            <i class="fas fa-${isCorrect ? 'check' : 'times'}"></i>
            <span>${isCorrect ? '¡Correcto!' : 'Incorrecto'}</span>
            <p>${question.explanation}</p>
        </div>
    `;
    questionFeedback.className = `question-feedback mt-4 ${isCorrect ? 'correct' : 'incorrect'}`;
}

function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function showNextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        finishQuiz();
    }
}

function updateNavigation() {
    prevQuestionBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === quizQuestions.length - 1) {
        nextQuestionBtn.innerHTML = 'Última Pregunta <i class="fas fa-flag-checkered ms-2"></i>';
    } else {
        nextQuestionBtn.innerHTML = 'Siguiente <i class="fas fa-arrow-right ms-2"></i>';
    }
}

function updateTimer() {
    const currentTime = new Date();
    totalTime = Math.floor((currentTime - startTime) / 1000);
    document.getElementById('quiz-timer').textContent = totalTime;
    
    // Actualizar puntuación en tiempo real
    updateScore();
}

function updateScore() {
    // Calcular puntuación basada en respuestas correctas y tiempo
    let correctCount = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizQuestions[index].correct) {
            correctCount++;
        }
    });
    
    // Puntuación base + bonus por rapidez
    const baseScore = correctCount * 50;
    const timeBonus = Math.max(0, 300 - totalTime); // Bonus por rapidez
    score = baseScore + timeBonus;
    
    document.getElementById('quiz-score').textContent = score;
    document.getElementById('correct-answers').textContent = correctCount;
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    const progressBar = document.getElementById('quiz-progress');
    progressBar.style.width = progress + '%';
    progressBar.querySelector('.progress-text').textContent = Math.round(progress) + '% Completado';
    
    // Cambiar color según progreso
    if (progress < 25) {
        progressBar.className = 'progress-bar progress-danger';
    } else if (progress < 50) {
        progressBar.className = 'progress-bar progress-warning';
    } else if (progress < 75) {
        progressBar.className = 'progress-bar progress-info';
    } else {
        progressBar.className = 'progress-bar progress-success';
    }
}

function finishQuiz() {
    quizCompleted = true;
    clearInterval(timerInterval);
    
    // Calcular resultados finales
    let correctCount = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizQuestions[index].correct) {
            correctCount++;
        }
    });
    
    const percentage = (correctCount / quizQuestions.length) * 100;
    
    // Mostrar resultados
    document.getElementById('final-score').textContent = correctCount;
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('time-taken').textContent = totalTime + 's';
    document.getElementById('final-percentage').textContent = Math.round(percentage) + '%';
    
    // Determinar nivel y mensaje
    let resultsTitle, resultsMessage;
    if (percentage >= 90) {
        resultsTitle = '¡Excelente! Eres un Experto Forense';
        resultsMessage = 'Dominas completamente los conceptos de análisis de evidencia digital. ¡Impresionante!';
    } else if (percentage >= 70) {
        resultsTitle = '¡Muy Bien! Nivel Avanzado';
        resultsMessage = 'Tienes un conocimiento sólido en análisis forense digital. ¡Sigue así!';
    } else if (percentage >= 50) {
        resultsTitle = 'Buen Trabajo - Nivel Intermedio';
        resultsMessage = 'Tienes una buena base de conocimiento. Sigue practicando para mejorar.';
    } else {
        resultsTitle = 'Área de Oportunidad - Nivel Básico';
        resultsMessage = 'Necesitas repasar los conceptos fundamentales. ¡No te rindas!';
    }
    
    document.getElementById('results-title').textContent = resultsTitle;
    document.getElementById('results-message').textContent = resultsMessage;
    
    showScreen('quiz-results');
    celebrateCompletion();
}

function reviewAnswers() {
    // Implementar revisión de respuestas
    alert('Función de revisión de respuestas en desarrollo...');
}

function resetQuiz() {
    quizStarted = false;
    quizCompleted = false;
    currentQuestionIndex = 0;
    userAnswers.fill(null);
    
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    resetQuizStats();
    showScreen('quiz-start');
}

function resetQuizStats() {
    totalTime = 0;
    score = 0;
    
    document.getElementById('quiz-timer').textContent = '0';
    document.getElementById('quiz-score').textContent = '0';
    document.getElementById('correct-answers').textContent = '0';
    document.getElementById('current-question').textContent = '1';
    document.getElementById('quiz-progress').style.width = '0%';
    document.getElementById('quiz-progress').querySelector('.progress-text').textContent = '0% Completado';
    
    startQuizBtn.disabled = false;
    submitQuizBtn.disabled = true;
    quizNavigation.classList.add('d-none');
}

function showScreen(screenName) {
    // Ocultar todas las pantallas
    quizStartScreen.classList.remove('active');
    quizQuestionsScreen.classList.remove('active');
    quizResultsScreen.classList.remove('active');
    
    // Mostrar la pantalla solicitada
    document.getElementById(screenName).classList.add('active');
}

function celebrateCompletion() {
    // Efectos de celebración al completar el quiz
    const resultsScreen = document.getElementById('quiz-results');
    resultsScreen.classList.add('celebrating');
    
    setTimeout(() => {
        resultsScreen.classList.remove('celebrating');
    }, 2000);
}