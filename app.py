from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Rutas para cada pestaña
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/evidencia')
def evidencia():
    return render_template('evidencia.html')

@app.route('/tipos')
def tipos():
    return render_template('tipos.html')

@app.route('/principios')
def principios():
    return render_template('principios.html')

@app.route('/caso')
def caso():
    return render_template('caso.html')

@app.route('/actividades')
def actividades():
    return render_template('actividades.html')

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

@app.route('/submit_quiz', methods=['POST'])
def submit_quiz():
    try:
        data = request.get_json()
        answers = data.get('answers', [])
        
        # Respuestas correctas (índices)
        correct_answers = [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        
        score = 0
        results = []
        
        for i, answer in enumerate(answers):
            is_correct = answer == correct_answers[i]
            if is_correct:
                score += 1
            results.append({
                'question': i + 1,
                'user_answer': answer,
                'correct_answer': correct_answers[i],
                'is_correct': is_correct
            })
        
        percentage = (score / len(correct_answers)) * 100
        
        # Determinar nivel
        if percentage >= 90:
            level = "Excelente"
            message = "¡Eres un experto en análisis de evidencia digital!"
        elif percentage >= 70:
            level = "Muy bien"
            message = "Tienes buenos conocimientos en el área."
        elif percentage >= 50:
            level = "Aprobado"
            message = "Buen intento. Sigue estudiando para mejorar."
        else:
            level = "Necesitas mejorar"
            message = "Necesitas repasar más los conceptos de evidencia digital."
        
        return jsonify({
            'success': True,
            'score': score,
            'total': len(correct_answers),
            'percentage': percentage,
            'level': level,
            'message': message,
            'results': results
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

if __name__ == '__main__':
    app.run(debug=False)