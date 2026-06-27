const fs = require('fs');
const path = require('path');

const txt = fs.readFileSync(path.join(__dirname, '..', '大数据预处理-复习V2025C.txt'), 'utf-8');
const lines = txt.split('\n').map(l => l.trim()).filter(l => l);

const questions = { choice: [], judge: [] };
let currentMode = null;
let currentQ = null;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line === '选择题') { currentMode = 'choice'; continue; }
    if (line === '判断题') { currentMode = 'judge'; continue; }
    if (line === '填空题' || line === '综合应用题') { currentMode = 'other'; continue; }
    
    if (currentMode === 'choice' || currentMode === 'judge') {
        // match "1. xxx" or "1)、xxx"
        const qMatch = line.match(/^\d+[\.、]\s*(.*)$/) || line.match(/^\d+\)、\s*(.*)$/);
        if (qMatch) {
            if (currentQ && currentQ.question) questions[currentMode].push(currentQ);
            
            let text = qMatch[1];
            currentQ = { type: currentMode, question: text, answer: '', options: [] };
        } else if (line.match(/^[A-D][、\.]/)) {
            if (currentQ) {
                // Split options if multiple on same line
                let temp = line;
                ['D', 'C', 'B', 'A'].forEach(letter => {
                    const regex = new RegExp(`${letter}[、\.]\\s*`);
                    if (temp.match(regex)) {
                        const parts = temp.split(regex);
                        if (parts[1]) {
                            currentQ.options.unshift(parts[1].trim());
                        }
                        temp = parts[0];
                    }
                });
            }
        } else if (line.match(/^正确答案[：:]/)) {
            if (currentQ) {
                let ans = line.replace(/^正确答案[：:]/, '').trim();
                if (currentMode === 'judge') {
                    // A is True, B is False
                    currentQ.answer = (ans === 'A' || ans === '对');
                } else {
                    currentQ.answer = ans;
                }
            }
        } else if (currentQ && !line.match(/^第[一二三四五六七八九十]+章/)) {
            // Continuation of question text
            if (currentQ.options.length === 0 && !currentQ.answer) {
                currentQ.question += ' ' + line;
            }
        }
    }
}
if (currentQ && currentQ.question && (currentMode === 'choice' || currentMode === 'judge')) {
    questions[currentMode].push(currentQ);
}

const output = `const QUESTIONS = ${JSON.stringify(questions, null, 2)};`;
fs.writeFileSync(path.join(__dirname, 'questions.js'), output, 'utf-8');
console.log('Parsed big data questions');
