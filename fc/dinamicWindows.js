function mudar(cursoe) {
    let cursos = [
        {
            curso: "Extensivo",
            info: "O curso <b>extensivo</b> deve começar em 19/02 e acompanhar os alunos até o vestibular da UFPR no fim do ano.<br> Nossas aulas são de segunda a sexta, 6 aulas diárias de 45 minutos cada. O curso conta com orientação vocacional, planejamento de estudos, que ajudam o aluno a organizar a rotina de acordo com os seus horários disponíveis, professores assistentes no contraturno, para sanar dúvidas e auxiliar nas suas necessidades específicas e uma plataforma de redações, sem limites nos números de redações postadas com devolutiva. Além disso, o material didático, que já está incluso no valor da mensalidade, é de autoria dos nossos próprios professores.",
            info2: "bah e bah e quando bah né",
            unidades: "<b>Disponível nas seguintes unidades:</b><br><br> <b>Vicente Machado:</b><br> Manhã (7:10 á 12:20)<br>Tarde (13:30 á 18:30)<br>Noite (18:45 á 23:00)<br><br><b>Hauer:</b><br>Manhã (7:35 á 12:35)<br><br><b>Boa Vista:</b><br>Manhã (7:15 á 12:25)"
        },
        {
            curso: "Terceirão",
            info: "O <b>terceirão</b> deve começar em 19/02 e acompanhar os alunos até o vestibular da UFPR no fim do ano.<br> Nossas aulas são de segunda a sexta, 6 aulas diárias de 45 minutos cada. O curso conta com orientação vocacional, planejamento de estudos, que ajudam o aluno a organizar a rotina de acordo com os seus horários disponíveis, professores assistentes no contraturno, para sanar dúvidas e auxiliar nas suas necessidades específicas e uma plataforma de redações, sem limites nos números de redações postadas com devolutiva. Além disso, o material didático, que já está incluso no valor da mensalidade, é de autoria dos nossos próprios professores.",
            unidades: "<b>Disponível nas seguintes unidades:</b><br><br> <b>Vicente Machado:</b><br> Manhã (7:10 á 12:20)<br>Tarde (13:30 á 18:30)<br>Noite (18:45 á 23:00)<br><br><b>Hauer:</b><br>Manhã (7:35 á 12:35)<br><br><b>Boa Vista:</b><br>Manhã (7:15 á 12:25)"
        },
        {
            curso: "Integral",
            info: "No integral o aluno terá as aulas regulares no turno principal, manhã das 7:10 às 12:20 ou noite das 18:45 às 23:00, sendo o contraturno dos dois no período da tarde, de terça a sexta, das <b>13:30 às 15:00.</b><br>  O contraturno oferece:<br>→ *+100 aulas* de aprofundamento no *conteúdo comum* a todos os vestibulares,  <br>→ *+100 aulas* de aprofundamento nas *matérias com mais peso no seu vestibular* <br>→ Acesso ao *MEMOFLIX* (mais de 200 aulas de revisão on-line)→ *15 aulas de história da arte* on-line <br>→ Salas de Estudos *exclusiva* com cabines individuais <br>→ Assistência presencial de Redação, Física, Matemática, Química, Biologia, <br>→ História, Geografia e Filosofia <br>→ Assistência on-line de Matemática, Física, Química, Biologia, História, Geografia e Filosofia <br>→ Simulados periódicos com questões objetivas <br>→ Curso de Redação on-line com correção de redação <br>→ *Orientação de estudos individual e atendimento exclusivo para aumentar seu rendimento*  <br>→ *Assistência Psicológica, apoio emocional e orientação profissional* <br>Ele pode ser dividido em 3 áreas:<br><b>*Posi Medicina:*</b> Foco em vestibulares da área da saúde; 100 aulas específicas de Química e Biologia; Avaliações discursivas em todas as aulas específicas.<br><b>*Posi Exatas:*</b> Foco em vestibulares de Engenharia e Exatas; 100 aulas específica de Matemática e Física; Avaliações discursivas em todas as aulas específicas.<br><b>*Posi Humanas:*</b> Foco em vestibulares de Humanas; 100 aulas específicas de História e Filosofia; Avaliações discursivas em todas as aulas específicas.",
            unidades: 0
        },
        {
            curso: "SemiExtensivo",
            info: "O semiextensivo terá aproximadamente 05 meses de aula.<br>Que serão:<br><br><b>14</b> semanas de conteúdo<br><b>01</b> semana de revisão para a UFPR (1ª fase)<br><b>03</b> semanas de revisão para o ENEM<br><b>03</b> semanas de preparação para as discursivas UFPR (2ª fase)<br>Também teremos 04 simulados, sendo 02 para a 1ª fase da UFPR, 01 para a 2ª fase e 01 para o ENEM.",
            unidades: "<b>Disponível nas seguintes unidades:</b><br><br> <b>Vicente Machado:</b><br> Manhã (7:10 á 12:20)<br>Tarde (13:30 á 18:30)<br>Noite (18:45 á 23:00)<br><br><b>Hauer:</b><br>Manhã (7:35 á 12:35)<br><br><b>Boa Vista:</b><br>Manhã (7:15 á 12:25)"
        },
        {
            curso: "SuperIntensivo",
            info: "O semiextensivo terá aproximadamente 05 meses de aula.<br>Que serão:<br><br><b>14</b> semanas de conteúdo<br><b>01</b> semana de revisão para a UFPR (1ª fase)<br><b>03</b> semanas de revisão para o ENEM<br><b>03</b> semanas de preparação para as discursivas UFPR (2ª fase)<br>Também teremos 04 simulados, sendo 02 para a 1ª fase da UFPR, 01 para a 2ª fase e 01 para o ENEM.",
            unidades: "<b>Disponível nas seguintes unidades:</b><br><br> <b>Vicente Machado:</b><br> Manhã (7:10 á 12:20)<br>Tarde (13:30 á 18:30)<br>Noite (18:45 á 23:00)<br><br><b>Hauer:</b><br>Manhã (7:35 á 12:35)<br><br><b>Boa Vista:</b><br>Manhã (7:15 á 12:25)"
        },
        {
            curso: "Integral",
            info: "",
            unidades: ""
        },
        {
            curso: "Contra-turno",
            info: "",
            unidades: ""
        }
    ];

    let infoArea = document.getElementById('info-area');
    let teamArea = document.getElementById('team-area');

    //texts
    let infoTitle = document.getElementById('info-title');
    let infoOne = document.getElementById('info-one');
    let infoTwo = document.getElementById('info-two');
    let cards = document.getElementsByClassName('custom-card');

    for (let i = 0; i < cursos.length; i++) {
        if (cursos[i].curso === cursoe) {
            for (let card of cards) {
                card.style.display = '';
            }
            if (cursoe !== 'Extensivo' && cursoe !== 'Terceirão') {
                for (let card of cards) {
                    card.style.display = 'none';
                }
            }
            infoArea.style.display = 'block';
            teamArea.style.display = 'none';
            infoTitle.innerHTML = cursoe;
            infoOne.innerHTML = cursos[i].info;
            infoTwo.innerHTML = cursos[i].unidades;
        }
    }
}


function voltar(){
    let infoArea = document.getElementById('info-area');
    let teamArea = document.getElementById('team-area');
    //
    infoArea.style.display = '';
    teamArea.style.display = '';
}