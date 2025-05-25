const fs = require('fs');
const path = require('path');

const inputFile = 'repomix-output.xml'; // Altere para o nome do seu arquivo
const content = fs.readFileSync(inputFile, 'utf-8');

// Regex robusta que pega o file path e conteúdo até o próximo <file ou fim
const fileRegex = /<file path="([^"]+)">\s*([\s\S]*?)(?=<file path=|<\/files>)/g;

let match;
let count = 0;

while ((match = fileRegex.exec(content)) !== null) {
    const filePath = match[1].trim();
    const fileContent = match[2].trim();

    // Garante que as pastas existem
    const dir = path.dirname(filePath);
    fs.mkdirSync(dir, { recursive: true });

    // Escreve o conteúdo no arquivo
    fs.writeFileSync(filePath, fileContent, 'utf8');
    console.log(`✅ Arquivo criado: ${filePath}`);
    count++;
}

console.log(`\n🎉 Processo finalizado! ${count} arquivo(s) extraído(s).`);