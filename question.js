import readline from 'readline';

export function askQuestion(question){
    // Cria uma interface de leitura para o terminal
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Retorna uma promessa que será resolvida com a resposta do usuário
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}