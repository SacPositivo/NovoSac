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


function voltar(window){
    if(window === 'info'){
        let infoArea = document.getElementById('info-area');
        let teamArea = document.getElementById('team-area');
        //
        infoArea.style.display = '';
        teamArea.style.display = '';
    }else if (window === 'setores'){
        let infoArea = document.getElementById('setor-area');
        let teamArea = document.getElementById('cards-set');
        let infoTitle = document.getElementById('info-titleset');
        //
        infoTitle.innerHTML = 'SETORES';
        infoArea.style.display = '';
        teamArea.style.display = '';
    }
}

function mudarSet(setor){
    let setores = [
        {
            nome: 'CONTATOS GERAIS',
            info: '',
            contato: 'Vicente Machado Tel.: 41 3232-4011 | WhatsApp: 41 99601-6787 R. Vicente Machado, 317 - Centro, Curitiba<br>Hauer Tel.: 41 3068-7974 | WhatsApp: 41 99917-9532 R. Anne Frank, 1919 - Hauer, Curitiba<br>Ponta Grossa Tel.: 42 4009-2182 R. Santos Dumont, 400 - Centro, Ponta Grossa<br>Joinville Tel.: 47 3025-7313 R. Henrique Meyer, 171 - Centro, Joinville<br>Central Tel.: 41 3336-3838<br>Marcos Tel.: 41 99634-4587<br>Aurea ramal : 2114503<br>Solidário WhatsApp: 41 99887-2098 contato@formacaosolidaria.org.br<br>Gabrielly: gsprada@positivo.com.b<br>Luis: lfgoncalves@positivo.com.br<br>Guilherme: guilherme.marcondes@positivo.com.br<br>Marcos: mfsouza@positivo.com.br<br>Prof. Renato (redação): renatoluizgouveia@gmail.com<br>RH: rhcurso@positivo.com.br<br>SAC: sac@cursopositivo.com.br',
        },
        {
            nome: 'SECRETARIA',
            info: 'Quando o aluno/responsável entregar histórico do 1° ao 9° ano, e 1° a 2° série, se forem assinaturas manuais entregar a via original e física, caso for por QR-Code, pode ser via e-mail<br>Histórico escolar/Declaração de conclusão do ensino médio<br>Solicitação de transferência para fora, para que seja emitida a declaração de transferência o aluno deve estra com toda a documentação entregue<br>declaração de educação física bimestral, o aluno pode optar por fazer a educação física presencial na unidade do Ângelo Sampaio, conforme horários e datas as quais cabe ao professor definir, caso contrário o aluno deve realizar um trabalho escrito, ou trazer uma declaração que comprove a atividade física feita pelo mesmo, caso o aluno seja incapaz de realizar atividades físicas, ele deve trazer um atestado médico junto com o trabalho escrito, o qual o tema é definido bimestralmente<br>A frequência é computada com o passar da carteirinha na catraca, atrasos e saídas adiantadas geram faltas nas aulas respectivas do horário em questão da ação, duvidas e questionamentos com questões acadêmicas de faltas e notas, são direcionadas ao setor da secretaria<br>As notas são constituídas da seguinte maneira, no bimestre temos a prova bimestral a qual equivale a 75% na nota, participação ativa, a qual representa 1.5% da nota, e simulados os quais a mera participação do aluno, o comtempla com 0.5% de nota, e o acerto de no mínimo 30% das questões acarreta no recebimento de mais 0.5% da nota bimestral<br>Provas: somente as provas bimestrais tem a possibilidade de segunda chamada. A prova semestral, o aluno só pode realizar caso o aluno não atinja media 6 no semestre<br>Prova anual NÃO tem recuperação<br>As recuperações são as provas semestrais, caso o aluno NÃO tenha atingido 6 no boletim semestral, a qual também não tem segunda chamada',
            contato: 'Para transferencia os ramais são: 2114528 (Elis) e 2114524 (David)<br>E-mail: secretaria@cursopositivo.com.br<br>WhatsApp: 41 2107-4528 (Elis e David)<br>De segunda a sexta-feira, das 08:00 às 17:00',
        },
        {
            nome: 'MATRICULA',
            info: 'Atendimento presencial: Passar informação sobre os cursos, fazer matrícula, receber pagamento de mensalidade, incluir curso extra, excluir curso extra, fazer cancelamento, fazer troca de turno e turma, fazer solicitação de segunda via de carteirinha (lembrando que os serviços que tem custo, precisamos dar andamento para gerar cobrança) e imprimir boleto para quem não consegue pegar na Central do Aluno<br>Atendimento via WhatsApp: ensalamento, passar informação sobre os cursos, fazer matrícula (quando o curso não está no site e a pessoa é de outra cidade), incluir curso extra, excluir curso extra, fazer cancelamento, fazer troca de turno e turma e enviar boleto<br>Atendimento via teams (Colaboradores de outros setores)<br>Atendimento via e-mail<br>Lembrando que toda e qualquer alteração que envolva alteração de valor precisa da autorização do responsável (formulário, e-mail ou pessoalmente) e em casos de mudança de turma e modalidade, por mais que seja no mesmo turno, pois, não importa se o aluno é de maior e sim quem está responsável pelo contrato<br><br><br>Casos mais específicos devem ser encaminhados diretamente para a matricula, orientando o responsável sempre a informar no contato: nome completo do aluno, número de matrícula, nome completo do responsável e motivo do contato O contato pode ser realizado por e-mail ou pelo WhatsApp do setor.',
            contato: 'Não é realizado transferencia para o setor<br>E-mail: matricula@cursopositivo.com.br<br>WhatsApp: 41 2107-4513 (Andre)<br>WhatsApp: 41 2107-4514 (Allan)<br>WhatsApp: 41 2107-4515 (Adri)<br>De segunda a sexta-feira, das 07:30 às 17:00',
        },
        {
            nome: 'RECEPÇÃO',
            info: 'Agendamentos com professor Carraro; para agendamentos sempre solicitar: Nome completo do aluno e do responsável, dois contatos para o contato número de matricula e o motivo EX: Conversa psicológica ou pedagógica ou orientação<br>Agendamento de orientação de estudos com o professor Mateos (Nome do aluno telefone e número de matricula)<br>Lançamentos de faltas e advertências/suspensões, comunicação com os responsáveis quando o aluno é suspenso<br>Achados e perdidos, primeiros socorros, entregas das propostas de textos/redação, revistas do curso, horários, localização de alunos<br>Para funcionários: localização de professores',
            contato: 'Para transferencia o ramal é: 2114502 (Ana e Pricila)<br>Não há email<br>telefone: 41 2107-4502 (Ana e Pricila)<br>De segunda a sexta-feira, das 07:30 às 17:00',
        },
        {
            nome: 'APOSTILARIA',
            info: 'Entrega de materiais (mediante a programação das aulas)<br>Recebe materiais usados<br>Entrega do pó para comemorar quando passa no vestibular, mas não pode ser usado na frente do curso',
            contato: 'Para transferencia os ramais são: 2114511<br>Não há email<br>Não há numero<br>De segunda a sexta-feira, das 07:30 às 19:00<br>',
        },
        {
            nome: 'FINANCEIRO',
            info: 'Orientação de acesso aos boletos<br>informar se há pendência financeira<br>orientação sobre plano de pagamento<br>orientação sobre estrutura do boleto<br>orientação sobre descontos<br>contato do financeiro, jurídico ou assessoria',
            contato: 'Para transferencia os ramais são: 2114511 (Joice) e 2114506 (Mariana)<br>E-mail: financeiro@cursopositivo.com.br<br>WhatsApp: 41 2107-4511 (Mariana e Joice)<br>De segunda a sexta-feira, das 07:30 às 17:00<br>Jurídico WhatsApp: 41 3250-3921 ou 41 99828-2277 | cobranca.juridico@positivo.com.br<br>J.A. Rezende Tel.: 0800 602 1457 ou 41 4003-0670 | WhatsApp: 11 93490-2490<br>C&C Tel.: 41 3077-8182<br>De segunda a sexta-feira, das 07:30 às 17:00',
        },
        {
            nome: 'VESTIBULAR',
            info: 'Ver/imprimir provas antigas<br>Informações sobre vestibulares como: datas, horas e locais, como funcionam e etc, exceto problemas com o vestibular em si, como notas e inscrições',
            contato: 'Não há numero<br>E-mail: vestibular@positivo.com.br<br>De segunda a sexta-feira, das 07:30 às 17:00',
        }
    ]


    let infoArea = document.getElementById('setor-area');
    let teamArea = document.getElementById('cards-set');

    //texts
    let infoTitle = document.getElementById('info-titleset');

    let infoOne = document.getElementById('info-oneset');
    let infoTwo = document.getElementById('info-twoset');

    for (let i = 0; i < setores.length; i++) {
        if (setores[i].nome === setor) {
            infoArea.style.display = 'block';
            teamArea.style.display = 'none';
            infoTitle.innerHTML = setor;
            infoOne.innerHTML = setores[i].info;
            infoTwo.innerHTML = setores[i].contato;
        }
    }
}