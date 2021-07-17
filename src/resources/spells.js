export const findSpellByKey = (spellKey) => {
    return spellsFirstCircle.find((item) => item.key === spellKey)
}

export const spellsFirstCircle = [
    {
        key: 'ABENCOAR_ALIMENTOS',
        label: 'Abençoar Alimentos',
        type: 'Divina 1 (Transmutação)',
        school: 'TRANS',
        schoolAbrev: 'Trans',
        data: {
            castingType: 'padrão',
            range: 'curto',
            target: 'alimento para 1 criatura',
            duration: 'cena',
        },
        description:
            'Você purifica e abençoa uma porção de comida ou dose de bebida. Isso torna um alimento sujo, estragado ou envenenado próprio para consumo. Além disso, se for consumido até o final da duração, o alimento oferece 5 PV temporários ou 1 PM temporário (além de quaisquer bônus que já oferecesse). Bônus de alimentação duram um dia e cada personagem só pode receber um bônus de alimentação por dia\nTruque: o alimento é purificado (não causa nenhum efeito nocivo se estava estragado ou envenenado), mas não oferece bônus ao ser consumido.',
        action: { cost: +1, description: 'aumenta o número de alvos em +1.' },
        action: {
            cost: +1,
            description:
                'muda a duração para permanente, o alvo para 1 frasco com água e adiciona componente material (pó de prata no valor de T$ 5). Em vez do normal, cria um frasco de água benta.',
        },
    },
    {
        key: 'ACALMAR_ANIMAL',
        label: 'Acalmar Animal',
        type: 'Divina 1 (Encantamento)',
        school: 'ENCAN',
        schoolAbrev: 'Encan',
        data: {
            castingType: 'ação padrão',
            range: 'curto',
            target: '1 animal',
            duration: 'cena',
            resistance: 'Vontade anula',
        },
        description:
            'O animal fica prestativo em relação a você. Ele não fica sob seu controle, mas percebe suas palavras e ações da maneira mais favorável possível. Você recebe +10 nos testes de Adestramento e Diplomacia que fizer contra o animal. Um alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resistência. Se você ou seus aliados tomarem qualquer ação hostil contra o alvo, a magia é dissipada e ele retorna à atitude que tinha antes (ou piorada, de acordo com o mestre). Se tratar bem o alvo, a atitude pode permanecer mesmo após o término da magia',
        action: { cost: +1, description: 'muda o alcance para médio.' },
        action: {
            cost: +1,
            description:
                'muda o alvo para 1 monstro ou espírito com Inteligência 1 ou 2.',
        },
        action: { cost: +2, description: 'aumenta o número de alvos em +1.' },
        action: {
            cost: +5,
            description:
                'muda o alvo para 1 monstro ou espírito. Requer 3º círculo.',
        },
    },
    {
        key: 'ADAGA_MENTAL',
        label: 'Adaga Mental',
        type: 'Arcana 1 (Encantamento )',
        data: {
            castingType: 'padrão',
            range: 'curto',
            target: '1 criatura',
            duration: 'instantânea',
            resistance: 'Vontade parcial',
        },
        description:
            'Você manifesta e dispara uma adaga imaterial contra a mente do alvo, que sofre 2d6 pontos de dano mental e fica pasmo por uma rodada. Se passar no teste de resistência, sofre apenas metade do dano e não fica pasmo.',
        action: {
            cost: +1,
            description:
                'você lança a magia sem gesticular ou pronunciar palavras e a adaga se torna invisível. Se o alvo falhar no teste de resistência, não percebe que você lançou uma magia contra ele.',
        },
        action: {
            cost: +2,
            description:
                'muda a duração para 1 dia. Além do normal, você “finca” a adaga na mente do alvo. Enquanto a magia durar, você sabe a direção e localização do alvo, desde que ele esteja no mesmo mundo.',
        },
        action: { cost: +2, description: 'aumenta o dano em +1d6.' },
    },
    {
        key: 'ALARME',
        label: 'Alarme',
        type: 'Arcana 1 (Abjuração)',
        school: 'ABJUR',
        schoolAbrev: 'Abjur',
        data: {
            castingType: 'padrão',
            range: 'curto',
            target: 'esfera de 9m de raio',
            duration: '1 dia',
        },
        description:
            "Você cria uma barreira protetora invisível que detecta qualquer criatura que tocar ou entrar na área protegida. Ao lançar a magia, você pode escolher quais criaturas podem entrar na área sem ativar seus efeitos. 'Alarme' pode emitir um aviso telepático ou sonoro, decidido quando a magia é lançada. Um aviso telepático alerta apenas você, inclusive acordando-o se estiver dormindo, mas apenas se estiver a até 1km da área protegida. Um aviso sonoro alerta todas as criaturas em alcance longo.",
        action: {
            cost: +2,
            description:
                'muda o alcance para pessoal. A área é emanada a partir de você.',
        },
        action: {
            cost: +5,
            description:
                'além do normal, você também percebe qualquer efeito de adivinhação que seja usado dentro da área ou atravesse a área. Você pode fazer um teste oposto de Misticismo contra quem usou o efeito; se passar, tem um vislumbre de seu rosto e uma ideia aproximada de sua localização (“três dias de viagem ao norte”, por exemplo).',
        },
        action: {
            cost: +5,
            description:
                'muda a duração para 1 dia ou até ser descarregada e a resistência para Vontade anula. Quando um intruso entra na área, você pode descarregar a magia como uma reação. Se o intruso falhar na resistência, ficará paralisado por 1d4 rodadas. Além disso, pelas próximas 24 horas você e as criaturas escolhidas ganham +10 em testes de Sobrevivência para rastrear o intruso.',
        },
    },
    {
        key: 'AMEDRONTAR',
        label: 'Amedrontar',
        type: 'Arcana 1 (Necromancia)',
        school: 'NECRO',
        schoolAbrev: 'NECRO',
        data: {
            castingType: 'padrão',
            range: 'curto',
            target: '1 animal ou humanoide de ND 2 ou menor',
            duration: 'cena',
            resistance: 'Vontade parcial',
        },
        description:
            'O alvo é envolvido por energias sombrias assustadoras. Se falhar na resistência, fica apavorado por 1d4 rodadas, depois abalado. Se passar, fica abalado por 1d4 rodadas.',
        action: {
            cost: +2,
            description: 'muda o alvo para criatura de ND 2 ou menor.',
        },
        action: {
            cost: +2,
            description: 'afeta alvos de ND 5 ou menor. Requer 2° círculo.',
        },
        action: {
            cost: +5,
            description:
                'afeta todos os alvos válidos a sua escolha dentro do alcance.',
        },
        action: {
            cost: +5,
            description: 'afeta alvos de ND 10 ou menor. Requer 3° círculo.',
        },
        action: {
            cost: +9,
            description: 'afeta alvos de ND 15 ou menor. Requer 4° círculo. ',
        },
        action: {
            cost: +14,
            description: 'afeta alvos de qualquer ND. Requer 5° círculo.',
        },
    },
    {
        key: 'AREA_ESCORREGADIA',
        label: 'Área Escorregadia',
        type: 'Arcana 1 (Convocação )',
        data: {
            castingType: 'padrão',
            range: 'curto',
            target: 'ou Área quadrado de 3m ou 1 objeto',
            duration: 'cena',
            resistance: 'Reflexos (veja texto)',
        },
        description:
            "Esta magia recobre uma superfície com uma substância gordurosa e escorregadia. Criaturas na área devem passar na resistência para não cair. Nas rodadas seguintes, criaturas que tentem movimentar-se pela área devem fazer testes de Acrobacia para equilíbrio (CD 10). 'Área Escorregadia' pode tornar um item escorregadio. Uma criatura segurando um objeto afetado deve passar na resistência para não deixar o item cair cada vez que usá-lo.",
        action: {
            cost: +1,
            description: 'aumenta a área em +1 quadrado de 1,5m.',
        },
        action: {
            cost: +2,
            description: 'muda a CD dos testes de Acrobacia para 15.',
        },
        action: {
            cost: +5,
            description: 'muda a CD dos testes de Acrobacia para 20.',
        },
    },
    {
        key: 'ARMA_ESPIRITUAL',
        label: 'Arma Espiritual',
        type: 'Divina 1 (Convocação)',
        school: 'CONV',
        schoolAbrev: 'Conv',
        data: {
            castingType: 'padrão',
            range: 'pessoal',
            target: 'você',
            duration: 'cena',
        },
        description:
            'Você invoca a arma preferida de sua divindade, que surge flutuando a seu lado. Uma vez por rodada, quando você sofre um ataque corpo a corpo, pode usar uma reação para que a arma cause automaticamente 2d6 pontos de dano do tipo da arma — por exemplo, uma espada longa causa dano de corte — no oponente que fez o ataque. Esta magia se dissipa se você morrer.',
        action: {
            cost: +1,
            description:
                'além do normal, a arma também protege você, oferecendo +1 na Defesa.',
        },
        action: { cost: +2, description: 'aumenta o bônus na Defesa em +1.' },
        action: {
            cost: +2,
            description:
                ' muda a duração para sustentada. Além do normal, uma vez por rodada, você pode gastar uma ação livre para fazer a arma acertar automaticamente um alvo em alcance curto. Se a arma atacar, não poderá contra-atacar até seu próximo turno. Requer 2º círculo.',
        },
        action: {
            cost: +2,
            description:
                'muda o tipo do dano para essência. Requer 2º círculo.',
        },
        action: {
            cost: +5,
            description:
                'invoca duas armas, permitindo que você contra-ataque (ou ataque, se usar o aprimoramento acima) duas vezes por rodada. Requer 3º círculo.',
        },
    },
    {
        key: 'ARMA_MAGICA',
        label: 'Arma Mágica',
        type: 'Universal 1 (Transmutação)',
        school: 'TRANS',
        schoolAbrev: 'Trans',
        data: {
            castingType: 'padrão',
            range: 'toque',
            target: '1 arma',
            duration: 'cena',
        },
        description:
            'A arma fornece um bônus de +1 nos testes de ataque e rolagens de dano e é considerada mágica. Caso você esteja empunhando a arma, pode usar seu atributo-chave de magias em vez do atributo original nos testes de ataque.',
        action: {
            cost: +2,
            description:
                'aumenta o bônus em +1, limitado pelo círculo máximo de magia que você pode lançar.',
        },
        action: {
            cost: +2,
            description:
                'a arma passa a causar +1d6 de dano de eletricidade, fogo ou frio, escolhido no momento que a magia é lançada.',
        },
    },
    {
        key: 'ARMADURA_ARCANA',
        label: 'Armadura Arcana',
        type: 'Arcana 1 (Abjuração)',
        school: 'ABJUR',
        schoolAbrev: 'Abjur',
        data: {
            castingType: 'padrão',
            range: 'pessoal',
            target: 'você',
            duration: 'cena',
        },
        description:
            'Esta magia cria um campo de força invisível, mas tangível, fornecendo +4 na Defesa. Esse bônus é cumulativo com outras magias, mas não com bônus fornecido por armaduras.',
        action: {
            cost: +1,
            description:
                'muda a execução para reação. Em vez do normal, você cria um escudo mágico que fornece +6 na Defesa contra o próximo ataque que sofrer até o fim do turno atual.',
        },
        action: { cost: +2, description: 'aumenta o bônus na Defesa em +1.' },
        action: {
            cost: +2,
            description: 'muda a duração para 1 dia. Requer 2º círculo.',
        },
    },
    {
        key: 'ARMAMENTO_DA_NATUREZA',
        label: 'Armamento da Natureza',
        type: 'Divina 1 (Transmutação)',
        school: 'TRANS',
        schoolAbrev: 'Trans',
        data: {
            castingType: 'movimento',
            range: 'toque',
            target: '1 arma (veja texto)',
            duration: 'cena',
        },
        description:
            'Você fortalece uma arma mundana primitiva (sem custo em T$, como bordão, clava, funda ou tacape), uma arma natural ou um ataque desarmado. O dano da arma aumenta em um passo e ela é considerada mágica para propósitos de resistência a dano. Ao lançar a magia, você pode mudar o tipo de dano da arma (escolhendo entre corte, impacto ou perfuração).',
        action: {
            cost: +1,
            description: 'fornece +1 nos testes de ataque com a arma.',
        },
        action: {
            cost: +2,
            description: 'muda a execução para ação de movimento.',
        },
        action: {
            cost: +3,
            description: 'aumenta o bônus nos testes de ataque em +1. ',
        },
        action: {
            cost: +5,
            description: 'aumenta o dano da arma em mais um passo.',
        },
    },
    {
        key: 'AVISO',
        label: 'Aviso',
        type: 'Universal 1 (Adivinhação)',
        school: 'ADIV',
        schoolAbrev: 'Adiv',
        data: {
            castingType: 'movimento',
            range: 'longo',
            target: '1 criatura',
            duration: 'instantânea',
        },
        description:
            "Envia um aviso telepático para uma criatura, mesmo que não possa vê-la nem tenha linha de efeito. Escolha um:'Alerta:' o alvo recebe +5 em seu próximo teste de Iniciativa e de Percepção dentro da cena. \n'Mensagem': o alvo recebe uma mensagem sua de até 25 palavras. Vocês devem ter um idioma em comum para o alvo poder entendê-lo. \n'Localização': o alvo sabe onde você está naquele momento. Se você mudar de posição, ele não saberá.",
        action: {
            cost: +1,
            description:
                'aumenta o alcance em um fator de 10 (90m para 900m, 900m para 9km, e assim por diante).',
        },
        action: {
            cost: +1,
            description:
                'se escolher mensagem, o alvo pode enviar uma resposta de até 25 palavras para você até o fim de seu próximo turno.',
        },
        action: {
            cost: +2,
            description:
                'se escolher localização, muda a duração para cena. O alvo sabe onde você está mesmo que você mude de posição.',
        },
        action: { cost: +3, description: ' aumenta o número de alvos em +1.' },
    },
    {
        key: 'BENCAO',
        label: 'Bênção',
        type: 'Divina 1 (Encantamento)',
        school: 'ENCAN',
        schoolAbrev: 'Encan',
        data: {
            castingType: 'padrão',
            range: 'curto',
            target: 'criaturas escolhidas',
            duration: 'cena',
        },
        description:
            "Abençoa os alvos, que recebem +1 em testes de ataque e rolagens de dano. 'Bênção' anula 'Perdição'.",
        action: {
            cost: +1,
            description:
                'muda o alvo para 1 cadáver e a duração para 1 semana. O cadáver não se decompõe nem pode ser transformado em morto-vivo pela duração da magia.',
        },
        action: {
            cost: +2,
            description:
                'aumenta os bônus em +1, limitado pelo círculo máximo de magia que você pode lançar.',
        },
    },
    {
        key: 'CAMINHOS_DA_NATUREZA',
        label: 'Caminhos da Natureza',
        type: 'Divina 1 (Convocação)',
        school: 'CONV',
        schoolAbrev: 'Conv',
        data: {
            castingType: 'padrão',
            range: 'curto',
            target: 'criaturas escolhidas',
            duration: '1 dia',
        },
        description:
            'Você invoca espíritos da natureza, pedindo que eles abram seu caminho. As criaturas afetadas recebem deslocamento +3m e ignoram penalidades por terreno difícil se estiverem em terrenos naturais.\nTruque: muda o alcance para pessoal e o alvo para você. Em vez do normal, você sabe onde fica o norte, e recebe +5 em testes de Sobrevivência para orientar-se.',
        action: {
            cost: +1,
            description:
                'além do normal, a CD para rastrear os alvos em terreno natural aumenta em +10.',
        },
        action: {
            cost: +2,
            description: 'aumenta o bônus de deslocamento em +3m.',
        },
    },
    {
        key: 'COMANDO',
        label: 'Comando',
        type: 'Divina 1 (Encantamento)',
        school: 'ENCAN',
        schoolAbrev: 'Encan',
        data: {
            castingType: 'padrão',
            range: 'curto',
            target: '1 humanoide',
            duration: '1 rodada',
            resistance: 'Vontade anula',
        },
        description:
            "Você dá uma ordem irresistível, que o alvo deve ser capaz de ouvir (mas não precisa entender). Se falhar na resistência, ele deve obedecer ao comando em seu próprio turno da melhor maneira possível. Escolha um dos efeitos.'Fuja': o alvo gasta seu turno se afastando de você (usando todas as suas ações). \n'Largue': o alvo solta quaisquer itens que esteja segurando e não pode pegá-los novamente até o início de seu próximo turno. Como esta é uma ação livre, ele ainda pode executar outras ações (exceto pegar aquilo que largou). \n'Pare': o alvo fica pasmo (não pode fazer ações, exceto reações). \n'Senta': com uma ação livre, o alvo senta no chão (se estava pendurado ou voando, desce até o chão). Ele pode fazer outras ações, mas não se levantar até o início de seu próximo turno. \n'Venha': o alvo gasta seu turno se aproximando de você (usando todas as suas ações).",
        action: { cost: +1, description: 'muda o alvo para 1 criatura.' },
        action: {
            cost: +2,
            description: 'aumenta a quantidade de alvos em +1.',
        },
    },
    {
        key: 'COMPREENSAO',
        label: 'Compreensão',
        type: 'Universal 1 (Adivinhação)',
        school: 'ADIV',
        schoolAbrev: 'Adiv',
        data: {
            castingType: 'padrão',
            range: 'toque',
            target: '1 criatura ou texto',
            duration: 'cena',
            resistance: 'Vontade anula (veja texto)',
        },
        description:
            'Essa magia lhe confere compreensão sobrenatural. Você pode tocar um texto e entender as palavras mesmo que não conheça o idioma. Se tocar numa criatura inteligente, pode se comunicar com ela mesmo que não tenham um idioma em comum. Se tocar uma criatura não inteligente, como um animal, pode perceber seus sentimentos.\nVocê também pode gastar uma ação de movimento para ouvir os pensamentos de uma criatura tocada (você “ouve” o que o alvo está pensando), mas um alvo involuntário tem direito a um teste de Vontade para proteger seus pensamentos e evitar este efeito.',
        action: { cost: +1, description: 'muda o alcance para curto.' },
        action: {
            cost: +2,
            description:
                'muda o alcance para curto e o alvo para criaturas escolhidas. Você pode entender todas as criaturas afetadas, mas só pode ouvir os pensamentos de uma por vez.',
        },
        action: {
            cost: +2,
            description:
                'muda o alvo para 1 criatura. Em vez do normal, pode vasculhar os pensamentos do alvo para extrair informações. O alvo tem direito a um teste de Vontade para anular este efeito. O mestre decide se a criatura sabe ou não a informação que você procura. Requer 2º círculo.',
        },
        action: {
            cost: +5,
            description:
                'muda o alcance para pessoal e o alvo para você. Em vez do normal, você pode falar, entender e escrever qualquer idioma. Requer 3º círculo.',
        },
    },
    {
        key: 'CONCENTRACAO_DE_COMBATE',
        label: 'Concentração de Combate',
        type: 'Arcana 1 (Adivinhação)',
        school: 'ADIV',
        schoolAbrev: 'Adiv',
        data: {
            castingType: 'livre',
            range: 'pessoal',
            target: 'você',
            duration: '1 rodada',
        },
        description:
            'Você amplia sua percepção, antecipando movimentos dos inimigos e achando brechas em sua defesa. Quando faz um ataque, você rola dois dados e usa o melhor resultado.',
        action: {
            cost: +2,
            description: 'muda a execução para padrão e a duração para cena.',
        },
        action: {
            cost: +5,
            description:
                'além do normal, ao atacar você, um inimigo deve rolar dois dados e usar o pior resultado. Requer 3° círculo.',
        },
        action: {
            cost: +9,
            description:
                'muda a execução para padrão, o alcance para curto, o alvo para criaturas escolhidas e a duração para cena. Requer 4° círculo.',
        },
        action: {
            cost: +14,
            description:
                'muda a execução para padrão e a duração para 1 dia. Além do normal, você recebe um sexto sentido que o avisa de qualquer perigo ou ameaça. Você fica imune às condições surpreendido e desprevenido e recebe +10 em Defesa e Reflexos. Requer 5º círculo.',
        },
    },
    {
        key: 'CONJURAR_MONSTRO',
        label: 'Conjurar Monstro',
        type: 'Arcana 1 (Convocação)',
        school: 'CONV',
        schoolAbrev: 'Conv',
        data: {
            castingType: 'completa',
            range: 'curto',
            effect: '1 criatura conjurada',
            duration: 'sustentada',
        },
        description:
            "Esta magia conjura um monstro Pequeno que ataca seus inimigos. Você escolhe a aparência do monstro e o tipo de dano que ele pode causar, entre corte, impacto e perfuração. No entanto, ele não é uma criatura real, e sim um construto feito de energia. Se for destruído, ou quando a magia acaba, desaparece com um brilho, sem deixar nada para trás. Você só pode ter um monstro conjurado por esta magia por vez. \nO monstro surge em um ponto escolhido por você dentro do alcance e pode agir no começo do seu próximo turno, sempre na sua Iniciativa. O monstro tem deslocamento 9m e pode fazer uma ação de movimento por rodada. Você pode usar uma ação padrão para dar uma das seguintes ordens a ele.'Mover': o monstro se movimenta o dobro do deslocamento nessa rodada. \n'Atacar': o monstro ataca um alvo em alcance corpo a corpo. O ataque acerta automaticamente e causa 2d4+2 pontos de dano. \n'Lançar Magia': o monstro pode servir como ponto de origem para uma magia lançada por você com execução de uma ação padrão ou menor. Ele pode descarregar um 'Toque Chocante' em um inimigo distante, ou mesmo “cuspir” uma 'Bola de Fogo'! Você gasta PM normalmente para lançar a magia.\nOutros usos criativos para monstros conjurados ficam a critério do mestre. O monstro não age sem receber uma ordem.\nPara efeitos de jogo, o monstro conjurado tem For 14, Des 17 e todos os outros atributos nulos. Ele tem 20 pontos de vida, não tem um valor de Defesa (ataques feitos contra ele acertam automaticamente) e usa o seu bônus para teste de Reflexos. Ele é imune a efeitos que pedem um teste de Fortitude ou Vontade",
        action: {
            cost: +1,
            description:
                'o monstro ganha deslocamento de escalada ou natação igual ao seu deslocamento terrestre.',
        },
        action: {
            cost: +1,
            description: 'aumenta o deslocamento do monstro em +3m.',
        },
        action: {
            cost: +1,
            description:
                'muda o tipo de dano do ataque do monstro para ácido, fogo, frio ou eletricidade.',
        },
        action: {
            cost: +2,
            description: 'o monstro ganha percepção às cegas.',
        },
        action: {
            cost: +2,
            description:
                'aumenta os PV do monstro em +10 para cada categoria de tamanho a partir de Pequeno (+10 PV para Pequeno, +20 PV para Médio etc.).',
        },
        action: {
            cost: +2,
            description:
                'aumenta o tamanho do monstro para Médio. Ele tem For 18, Des 16, 45 PV, deslocamento 12m, e seu ataque causa 2d6+4 pontos de dano.',
        },
        action: {
            cost: +2,
            description:
                'o monstro ganha resistência 5 contra dois tipos de dano (por exemplo, corte e frio).',
        },
        action: {
            cost: +4,
            description:
                "o monstro ganha uma nova ordem: 'Arma de Sopro.' O monstro causa o dobro de seu dano de ataque em um cone de 6m a partir de si (Reflexos reduz à metade).",
        },
        action: {
            cost: +5,
            description:
                'aumenta o tamanho do monstro para Grande. Ele tem For 24, Des 14, 75 PV, deslocamento 12m, e seu ataque causa 3d6+7 pontos de dano com 3m de alcance. Requer 2º círculo.',
        },
        action: {
            cost: +9,
            description:
                'o monstro ganha deslocamento de voo igual ao dobro do deslocamento.',
        },
        action: {
            cost: +9,
            description: 'o monstro ganha imunidade contra dois tipos de dano.',
        },
        action: {
            cost: +9,
            description:
                'aumenta o tamanho do monstro para Enorme. Ele tem For 32, Des 12, 110 PV, deslocamento 15m, e seu ataque causa 4d6+11 pontos de dano com 4,5m de alcance. Requer 4º círculo.',
        },
        action: {
            cost: +14,
            description:
                'aumenta o tamanho do monstro para Colossal. Ele tem For 41, Des 10, 180 PV, deslocamento 15m, e seu ataque causa 6d6+15 de dano com 9m de alcance. Requer 5º círculo.',
        },
    },
    {
        key: 'CONSAGRAR',
        label: 'Consagrar',
        type: 'Divina 1 (Abjuração)',
        school: 'ABJUR',
        schoolAbrev: 'Abjur',
        data: {
            castingType: 'padrão',
            range: 'longo',
            target: 'esfera com 9m de raio',
            duration: '1 dia',
        },
        description:
            "Esta magia enche a área com energia positiva. Efeitos de luz que curam pontos de vida ou canalizam energia positiva têm seus efeitos maximizados. Por exemplo, 'Curar Ferimentos' cura automaticamente 18 PV em alvos dentro da área. Esta magia não pode ser lançada em uma área contendo um símbolo visível dedicado a uma divindade que não a sua. 'Consagrar' anula 'Profanar'.",
        action: {
            cost: +1,
            description:
                'além do normal, mortos-vivos na área sofrem –2 em testes e Defesa.',
        },
        action: {
            cost: +2,
            description: 'aumenta as penalidades para mortos-vivos em –1.',
        },
        action: {
            cost: +9,
            description:
                'muda a execução para 1 hora, a duração para permanente e adiciona componente material (incenso e óleos no valor de T$ 1.000). Requer 4º círculo.',
        },
    },
    {
        key: 'CONTROLAR_PLANTAS',
        label: 'Controlar Plantas',
        type: 'Divina 1 (Transmutação)',
        school: 'TRANS',
        schoolAbrev: 'Trans',
        data: {
            castingType: 'padrão',
            range: 'curto',
            target: 'quadrado com 9m de lado',
            duration: 'cena',
            resistance: 'Reflexos anula.',
        },
        description:
            'Esta magia só pode ser lançada em uma área com vegetação. As plantas se enroscam nas criaturas da área. Aquelas que falharem na resistência ficam enredadas. Uma vítima pode se libertar com uma ação padrão e um teste de Acrobacia ou Atletismo. Além disso, a área é considerada terreno difícil. No início de seus turnos, a vegetação tenta enredar novamente qualquer criatura na área, exigindo um novo teste de Reflexos.\nTruque: muda a área para alvo de 1 planta e a resistência para nenhuma. Em vez do normal, você pode fazer a planta se mover como se fosse animada. Ela não pode causar dano ou atrapalhar a concentração de um conjurador.',
        action: {
            cost: +1,
            description:
                "muda a duração para instantânea. Em vez do normal, as plantas na área diminuem, como se tivessem sido podadas. Terreno difícil muda para terreno normal e não oferece camuflagem. Esse efeito anula o uso normal de 'Controlar Plantas'.",
        },
        action: {
            cost: +1,
            description:
                'além do normal, criaturas que falhem na resistência também ficam imóveis.',
        },
        action: {
            cost: +2,
            description:
                'muda o alcance para pessoal, a área para alvo (você) e a resistência para nenhuma. Em vez do normal, você consegue se comunicar com plantas, que começam com atitude prestativa em relação a você. Além disso, você pode fazer testes de Diplomacia com plantas. Em geral, plantas têm uma percepção limitada de seus arredores e normalmente fornecem respostas simplórias.',
        },
    },
    {
        key: 'CRIAR_ELEMENTOS',
        label: 'Criar Elementos',
        type: 'Divina 1 (Convocação)',
        school: 'CONV',
        schoolAbrev: 'Conv',
        data: {
            castingType: 'padrão',
            range: 'curto',
            effect: 'elemento escolhido',
            duration: 'instantânea',
        },
        description:
            "Você cria uma pequena porção de um elemento, a sua escolha. Os elementos criados são reais, não mágicos. Elementos físicos devem surgir em uma superfície. Em vez de um cubo, pode-se criar objetos simples (sem partes móveis) feitos de gelo, terra ou pedra. 'Água': enche um recipiente de tamanho Minúsculo (como um odre) com água potável ou cria um cubo de gelo de tamanho Minúsculo. \n'Ar': cria um vento fraco em um quadrado de 1,5m. Isso purifica a área de qualquer gás ou fumaça, ou remove névoa por uma rodada. \n'Fogo': cria uma chama que ilumina como uma tocha. Você pode segurá-la na palma de sua mão sem se queimar, ou fazê-la surgir em um quadrado de 1,5m. Se uma criatura ou objeto estiver no quadrado, sofre 1d6 pontos de dano de fogo; se falhar num teste de Reflexos, pega fogo. \n'Terra': cria um cubo de tamanho Minúsculo feito de terra, argila ou pedra.",
        action: {
            cost: +1,
            description:
                'aumenta a quantidade do elemento em um passo (uma categoria de tamanho para água ou terra, +1 quadrado de 1,5m para ar e fogo).',
        },
        action: {
            cost: +1,
            description:
                'muda o efeito para alvo 1 criatura ou objeto e a resistência para Reflexos reduz à metade. Se escolher água ou terra, você arremessa o cubo ou objeto criado no alvo, causando 2d4 pontos de dano de impacto. Para cada categoria de tamanho acima de Minúsculo, o dano aumenta em um passo. O cubo se desfaz em seguida.',
        },
        action: {
            cost: +2,
            description:
                'se escolheu fogo, aumenta o dano inicial de cada chama em +1d6.',
        },
    },
    {
        key: 'CRIAR_ILUSAO',
        label: 'Criar Ilusão',
        type: 'Arcana 1 (Ilusão)',
        school: 'ILUSAO',
        schoolAbrev: 'Ilusão',
        data: {
            castingType: 'padrão',
            range: 'médio',
            effect: 'ilusão que se estende a até 4 cubos de 1,5m',
            duration: 'cena',
            resistance: 'Vontade desacredita',
        },
        description:
            'Esta magia cria uma ilusão visual (uma criatura, uma parede...) ou sonora (um grito de socorro, um uivo assustador...). A magia cria apenas imagens ou sons simples, com volume equivalente ao tom de voz normal para cada cubo de 1,5m no efeito. Não é possível criar cheiros, texturas ou temperaturas, nem sons complexos, como uma música ou diálogo. Criaturas e objetos atravessam uma ilusão sem sofrer dano, mas a magia pode, por exemplo, esconder uma armadilha ou inimigo. A magia é dissipada se você sair do alcance.',
        action: {
            cost: +1,
            description:
                ' muda a duração para sustentada. A cada rodada você pode usar uma ação livre para mover a imagem ou alterar levemente o som, como aumentar o volume ou fazer com que pareça se afastar ou se aproximar, ainda dentro dos limites do efeito. Você pode, por exemplo, criar a ilusão de um fantasma que anda pela sala, controlando seus movimentos. Quando você para de sustentar a magia, a imagem ou som persistem por mais uma rodada antes de a magia se dissipar.',
        },
        action: {
            cost: +1,
            description: 'aumenta o efeito da ilusão em +1 cubo de 1,5m.',
        },
        action: {
            cost: +1,
            description:
                'também pode criar ilusões de imagem e sons combinados.',
        },
        action: {
            cost: +1,
            description:
                'também pode criar sons complexos com volume máximo equivalente ao que cinco pessoas podem produzir para cada cubo de 1,5m no efeito. Com uma ação livre, você pode alterar o volume do som ou fazê-lo se aproximar ou se afastar dentro do alcance.',
        },
        action: {
            cost: +2,
            description:
                'muda o alcance para longo e o efeito para esfera de 30m de raio. Em vez do normal, você cria um som muito alto, equivalente a uma multidão. Criaturas na área lançam magias como se estivessem em uma condição ruim, e a CD de testes de Percepção para ouvir aumenta em +10.',
        },
        action: {
            cost: +2,
            description:
                'também pode criar odores e sensações térmicas, que são percebidos a uma distância igual ao dobro do tamanho máximo do efeito. Por exemplo, uma miragem de uma fogueira com 4 cubos de 1,5m poderia emanar calor e cheiro de queimado a até 12m.',
        },
        action: {
            cost: +2,
            description:
                'também pode criar sensações táteis, como texturas; objetos ainda atravessam a ilusão, mas criaturas não conseguem atravessá-la sem passar em um teste de Vontade. A ilusão continua sem causar ou sofrer dano. Requer 2º círculo.',
        },
        action: {
            cost: +2,
            description:
                'muda o alcance para longo e o efeito para esfera de 30m de raio. Em vez do normal, você cria um som muito alto, equivalente a uma multidão. Criaturas na área lançam magias como se estivessem em uma condição ruim e a CD de testes de Percepção para ouvir aumenta em +10. Requer 2º círculo ',
        },
        action: {
            cost: +5,
            description:
                'muda a duração para sustentada. Além do normal, você pode gastar uma ação livre para modificar livremente a ilusão (mas não pode acrescentar novos aprimoramentos após lançá-la). Requer 3º círculo.',
        },
    },
    {
        key: 'CURAR_FERIMENTOS',
        label: 'Curar Ferimentos',
        type: 'Divina 1 (Evocação)',
        school: 'EVOC',
        schoolAbrev: 'Evoc',
        data: {
            castingType: 'padrão',
            range: 'toque',
            target: '1 criatura',
            duration: 'instantânea',
        },
        description:
            "Você canaliza energia positiva que recupera 2d8+2 pontos de vida na criatura tocada. Como mortos-vivos usam energia negativa, esta magia causa dano de luz a eles (Vontade reduz à metade). 'Curar Ferimentos' anula 'Infligir Ferimentos.'.\nTruque: em vez do normal, estabiliza uma criatura.\nTruque: muda o alvo para 1 morto-vivo. Em vez do normal, causa 1d8 pontos de dano de luz (Vontade reduz à metade).",
        action: { cost: +1, description: 'aumenta a cura em +1d8+1.' },
        action: {
            cost: +2,
            description: 'também remove uma condição de fadiga do alvo.',
        },
        action: { cost: +2, description: 'muda o alcance para curto.' },
        action: {
            cost: +5,
            description:
                'muda o alcance para curto e o alvo para criaturas escolhidas.',
        },
    },
    {
        key: 'DESPEDACAR',
        label: 'Despedaçar',
        type: 'Divina 1 (Evocação)',
        school: 'EVOC',
        schoolAbrev: 'Evoc',
        data: {
            castingType: 'padrão',
            range: 'curto',
            target: '1 criatura ou objeto mundano Pequeno',
            duration: 'instantânea',
            resistance: 'Fortitude parcial ou Reflexos anula',
        },
        description:
            'Esta magia emite um som alto e agudo. Se o alvo é uma criatura, sofre 1d8+2 pontos de dano de impacto e fica atordoado por uma rodada (Fortitude reduz o dano à metade e evita o atordoamento). Construtos sofrem dano dobrado por essa magia. Se o alvo é um objeto, é destruído (Reflexos anula).',
        action: { cost: +2, description: 'aumenta o dano em +1d8+2.' },
        action: {
            cost: +2,
            description:
                'muda o alvo para objeto mundano Médio. Requer 2º círculo.',
        },
        action: {
            cost: +5,
            description:
                'muda o alvo para objeto mundano Grande. Requer 3º círculo.',
        },
        action: {
            cost: +9,
            description:
                'muda o alvo para objeto mundano Enorme. Requer 4º círculo.',
        },
        action: {
            cost: +14,
            description:
                'muda o alvo para objeto mundano Colossal. Requer 5º círculo.',
        },
        action: {
            cost: +5,
            description:
                'muda o alcance para pessoal e a área para explosão de 6m de raio. Todas as criaturas e objetos na área são afetados.',
        },
    },
    {
        key: 'DETECTAR_AMEACAS',
        label: 'Detectar Ameaças',
        type: 'Divina 1 (Adivinhação)',
        school: 'ADIV',
        schoolAbrev: 'Adiv',
        data: {
            castingType: 'padrão',
            range: 'pessoal',
            target: 'esfera de 9m de raio',
            duration: 'instantânea',
        },
        description:
            'Você percebe a presença e a localização de criaturas inamistosas ou hostis na área, mesmo através de barreiras físicas.',
        action: {
            cost: +0,
            description:
                'em vez de criaturas, você percebe a presença e localização de venenos.',
        },
        action: {
            cost: +1,
            description:
                'muda a execução para ação completa. Você descobre também a raça ou espécie e o poder das criaturas (determinado pela aura delas). Criaturas de 1º a 6º nível geram uma aura tênue, criaturas de 7º a 12º nível geram uma aura moderada e criaturas de 13º ao 20º nível geram uma aura poderosa. Criaturas acima do 20º nível geram uma aura avassaladora.',
        },
        action: {
            cost: +2,
            description:
                'em vez de criaturas, você percebe a presença e localização de armadilhas.',
        },
        action: {
            cost: +5,
            description:
                'muda a área para esfera de 30m de raio. Requer 3º círculo.',
        },
    },
    {
        key: 'DISFARCE_ILUSORIO',
        label: 'Disfarce Ilusório',
        type: 'Arcana 1 (Ilusão)',
        school: 'ILUSAO',
        schoolAbrev: 'Ilusão',
        data: {
            castingType: 'padrão',
            range: 'pessoal',
            target: 'você',
            duration: 'cena',
            resistance: 'Vontade desacredita.',
        },
        description:
            'Você muda a aparência do alvo, incluindo seu equipamento. Isso inclui altura, peso, tom de pele, cor de cabelo, timbre de voz etc. O alvo recebe +10 em testes de Enganação para disfarce. O alvo não recebe novas habilidades (você pode ficar parecido com outra raça, mas não ganhará as habilidades dela), nem modifica o equipamento (uma espada longa disfarçada de bordão continua funcionando e causando dano como uma espada).\nTruque: muda o alcance para toque, o alvo para 1 criatura e a duração para 1 semana. Em vez do normal, você faz uma pequena alteração na aparência do alvo, como deixar o nariz vermelho ou fazer brotar um gerânio no alto da cabeça. A mudança é inofensiva, mas persistente — se a flor for arrancada, por exemplo, outra nascerá no local.',
        action: {
            cost: +1,
            description:
                'muda o alcance para curto e o alvo para 1 criatura. Uma criatura involuntária pode anular o efeito com um teste de Vontade.',
        },
        action: {
            cost: +1,
            description:
                'muda o alcance para curto e o alvo para 1 objeto. Você pode, por exemplo, transformar pedaços de ferro em moedas de ouro. Você recebe +10 em testes de Enganação para falsificação.',
        },
        action: {
            cost: +2,
            description:
                'a ilusão também inclui odores e sensações. Isso muda o bônus em testes de Enganação para disfarce para +20.',
        },
        action: {
            cost: +3,
            description:
                'muda o alcance para curto e o alvo para criaturas escolhidas. Cada criatura pode ter uma aparência diferente. Criaturas involuntárias podem anular o efeito com um teste de Vontade. Requer 2º círculo.',
        },
    },
    {
        key: 'ENFEITICAR',
        label: 'Enfeitiçar',
        type: 'Arcana 1 (Encantamento)',
        school: 'ENCAN',
        schoolAbrev: 'Encan',
        data: {
            castingType: 'ação padrão',
            range: 'curto',
            target: '1 humanoide',
            duration: 'cena',
            resistance: 'Vontade anula',
        },
        description:
            'Esta magia torna o alvo prestativo. Ele não fica sob seu controle, mas percebe suas palavras e ações da maneira mais favorável possível. Você recebe um bônus de +10 em testes de Diplomacia com a vítima. Um alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resistência. Se você ou seus aliados tomarem qualquer ação hostil contra o alvo, a magia é anulada e o alvo retorna à atitude que tinha antes (ou piorada, de acordo com o mestre).',
        action: {
            cost: +2,
            description:
                'em vez do normal, você sugere uma ação para o alvo e ele obedece. A sugestão deve ser feita de modo que pareça aceitável, a critério do mestre. Pedir ao alvo que pule em um precipício, por exemplo, anula a magia. Já sugerir a um guarda que descanse um pouco, de modo que você e seus aliados passem por ele, é aceitável. Quando o alvo executa a ação, a magia termina. Você pode determinar uma condição específica para a sugestão: por exemplo, que um rico mercador doe suas moedas para o primeiro mendigo que encontrar.',
        },
        action: {
            cost: +5,
            description:
                'muda o alvo para 1 espírito ou monstro. Requer 3º círculo.',
        },
        action: {
            cost: +5,
            description: 'afeta todos os alvos dentro do alcance.',
        },
    },
    {
        key: 'ESCUDO_DA_FE',
        label: 'Escudo da Fé',
        type: 'Divina 1 (Abjuração)',
        school: 'ABJUR',
        schoolAbrev: 'Abjur',
        data: {
            castingType: 'reação',
            range: 'curto',
            target: ' 1 criatura',
            duration: '1 turno.',
        },
        description:
            'Um escudo místico se manifesta momentaneamente para bloquear um golpe. O alvo recebe +2 na Defesa.',
        action: {
            cost: +1,
            description:
                'muda a execução para ação padrão, o alcance para toque e a duração para cena.',
        },
        action: {
            cost: +1,
            description:
                'também fornece ao alvo camuflagem contra ataques à distância.',
        },
        action: { cost: +2, description: 'aumenta o bônus na Defesa em +1.' },
        action: {
            cost: +2,
            description:
                'muda a execução para ação padrão, o alcance para toque e a duração para cena. A magia cria uma conexão mística entre você e o alvo. Além do efeito normal, o alvo sofre apenas metade do dano por ataques e efeitos; a outra metade do dano é transferida a você. Se a qualquer momento o alvo sair de alcance curto de você, a magia é dissipada. Requer 2º círculo.',
        },
        action: {
            cost: +3,
            description: 'muda a duração para 1 dia. Requer 2º círculo.',
        },
    },
    {
        key: 'ESCURIDAO',
        label: 'Escuridão',
        type: 'Universal 1 (Necromancia)',
        school: 'NECRO',
        schoolAbrev: 'Necro',
        data: {
            castingType: 'padrão',
            range: 'curto',
            target: '1 objeto',
            duration: 'cena',
        },
        description:
            "O alvo emana sombras em uma área com 6m de raio. Criaturas dentro da área recebem camuflagem por escuridão. As sombras não podem ser iluminadas por nenhuma fonte de luz natural. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a escuridão, que voltará a funcionar caso o objeto seja revelado. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. 'Escuridão' anula 'Luz'.",
        action: {
            cost: +1,
            description: 'aumenta a área da escuridão em +1,5m de raio.',
        },
        action: {
            cost: +2,
            description:
                'muda o efeito para fornecer camuflagem total por escuridão.',
        },
        action: { cost: +2, description: 'muda a duração para 1 dia.' },
        action: {
            cost: +2,
            description:
                'muda o alvo para 1 criatura e a resistência para Fortitude parcial. Você lança a magia nos olhos do alvo, que fica cego pela cena. Se passar na resistência, fica cego por uma rodada. Requer 2º círculo.',
        },
        action: {
            cost: +5,
            description:
                'muda o alcance para pessoal e o alvo para você. Em vez do normal, você é coberto por sombras, recebendo +10 em testes de Furtividade e camuflagem por escuridão. Requer 2º círculo.',
        },
    },
    {
        key: 'EXPLOSAO_DE_CHAMAS',
        label: 'Explosão de Chamas',
        type: 'Arcana 1 (Evocação)',
        school: 'EVOC',
        schoolAbrev: 'Evoc',
        data: {
            castingType: 'padrão',
            range: '6m',
            target: 'cone',
            duration: 'instantânea',
            resistance: 'Reflexos reduz à metade.',
        },
        description:
            'Um leque de chamas irrompe de suas mãos, causando 2d6 pontos de dano de fogo às criaturas na área.\nTruque: muda o alcance para curto, a área para alvo de 1 objeto e a resistência para Reflexos anula. Você gera uma pequena explosão que não causa dano mas pode acender uma vela, tocha ou fogueira. Também pode fazer um objeto inflamável com RD 0 (como uma corda ou pergaminho) ficar em chamas. Uma criatura em posse de um objeto pode evitar esse efeito se passar no teste de resistência.',
        action: { cost: +1, description: 'aumenta o dano em +1d6.' },
        action: {
            cost: +2,
            description:
                'muda a resistência para Reflexos parcial. Se passar, a criatura reduz o dano à metade; se falhar, fica em chamas.',
        },
    },
    {
        key: 'HIPNOTISMO',
        label: 'Hipnotismo',
        type: 'Divina 1 (Encantamento)',
        school: 'ENCAN',
        schoolAbrev: 'Encan',
        data: {
            castingType: 'padrão',
            range: 'curto',
            target: ' criaturas escolhidas de ND 2 ou menor',
            duration: '1d4 rodadas',
            resistance: 'Vontade anula.',
        },
        description:
            'Suas palavras e movimentos ritmados deixam as criaturas fascinadas. Esta magia só afeta criaturas que possam perceber você. Se usar esta magia em combate, os alvos recebem +5 em seus testes de resistência.\nTruque: muda o alvo para 1 criatura e a duração para 1 rodada. Em vez de fascinado, o alvo fica pasmo. Uma criatura só pode ser afetada por este truque uma vez por cena.',
        action: {
            cost: +1,
            description:
                'em vez do normal, se passarem na resistência os alvos não saberão que foram alvos de uma magia.',
        },
        action: { cost: +2, description: 'muda a duração para cena.' },
        action: { cost: +2, description: 'muda o alcance para médio.' },
        action: {
            cost: +2,
            description: 'afeta alvos de ND 5 ou menor. Requer 2º círculo. ',
        },
        action: {
            cost: +5,
            description: 'afeta alvos de ND 10 ou menor. Requer 3º círculo. ',
        },
        action: {
            cost: +9,
            description: 'afeta alvos de ND 15 ou menor. Requer 4º círculo. ',
        },
        action: {
            cost: +14,
            description: 'afeta alvos de qualquer ND. Requer 5º círculo.',
        },
    },
    {
        key: 'IMAGEM_ESPELHADA',
        label: 'Imagem Espelhada',
        type: 'Arcana 1 (Ilusão)',
        school: 'ILUSAO',
        schoolAbrev: 'Ilusão',
        data: {
            castingType: 'padrão',
            range: 'pessoa,',
            target: 'você',
            duration: 'cena',
        },
        description:
            'Três cópias ilusórias suas aparecem. As duplicatas ficam ao seu redor e imitam suas ações, tornando difícil para um inimigo saber quem atacar. Você recebe +6 na Defesa. Cada vez que um ataque contra você erra, uma das imagens desaparece e o bônus na Defesa diminui em 2. Um oponente deve ver as cópias para ser confundido. Se você estiver invisível, ou o atacante fechar os olhos, você não recebe o bônus (mas o atacante ainda sofre penalidades normais por não enxergar).',
        action: {
            cost: +2,
            description:
                'aumenta o número de cópias em +1 (e o bônus na Defesa em +2).',
        },
        action: {
            cost: +5,
            description:
                'além do normal, toda vez que uma cópia é destruída, emite um clarão de luz. A criatura que destruiu a cópia fica ofuscada por uma rodada. Requer 2º círculo.',
        },
    },
    {
        key: 'INFLIGIR_FERIMENTOS',
        label: 'Infligir Ferimentos',
        type: 'Divina 1 (Necromancia)',
        school: 'NECRO',
        schoolAbrev: 'NECRO',
        data: {
            castingType: 'padrão',
            range: 'toque,',
            target: '1 criatura',
            duration: 'instantânea',
            resistance: 'Fortitude reduz à metade',
        },
        description:
            "Você canaliza energia negativa contra um alvo, causando 2d8+2 pontos de dano de trevas (ou curando 2d8+2 PV, se for um morto-vivo). 'Infligir Ferimentos' anula 'Curar Ferimentos'.",
        action: {
            cost: +1,
            description:
                'como parte da execução da magia, você pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e o efeito da magia.',
        },
        action: {
            cost: +2,
            description:
                'além do normal, se falhar na resistência, o alvo fica fraco pela cena.',
        },
        action: { cost: +2, description: 'aumenta o dano em 1d8+1.' },
        action: {
            cost: +5,
            description:
                'muda o alcance para curto e o alvo para criaturas escolhidas.',
        },
    },
    {
        key: 'LEQUE_CROMATICO',
        label: 'Leque Cromático',
        type: 'Arcana 1 (Ilusão)',
        school: 'ILUSAO',
        schoolAbrev: 'Ilusão',
        data: {
            castingType: 'padrão',
            range: '5m',
            target: 'cone',
            duration: 'instantânea',
            resistance: 'Vontade parcial',
        },
        description:
            'Um cone de luzes brilhantes surge a partir das suas mãos, deixando as criaturas na área atordoadas por 1 rodada e ofuscadas pela cena. Caso passem na resistência, não ficam atordoadas. Esta magia afeta apenas criaturas de ND 2 ou menor e não afeta criaturas cegas.',
        action: {
            cost: +2,
            description: 'aumenta a duração do efeito em +1 rodada.',
        },
        action: {
            cost: +2,
            description: 'afeta alvos de ND 5 ou menor. Requer 2º círculo. ',
        },
        action: {
            cost: +5,
            description: 'afeta alvos de ND 10 ou menor. Requer 3º círculo. ',
        },
        action: {
            cost: +9,
            description: 'afeta alvos de ND 15 ou menor. Requer 4º círculo. ',
        },
        action: {
            cost: +14,
            description: 'afeta alvos de qualquer ND. Requer 5º círculo.',
        },
    },
    {
        key: 'LUZ',
        label: 'Luz',
        type: 'Universal 1 (Evocação)',
        school: 'EVOC',
        schoolAbrev: 'Evoc',
        data: {
            castingType: 'padrão',
            range: 'curto',
            target: '1 objeto',
            duration: 'cena',
            resistance: 'Vontade anula (veja texto)',
        },
        description:
            "O alvo emite luz (mas não produz calor) em uma área com 6m de raio. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a luz, que voltará a funcionar caso o objeto seja revelado. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. 'Luz' anula 'Escuridão'. ",
        action: {
            cost: +1,
            description: 'aumenta a área iluminada em +3m de raio. ',
        },
        action: { cost: +2, description: 'muda a duração para 1 dia. ' },
        action: {
            cost: +2,
            description:
                'muda a duração para permanente e adiciona componente material (pó de rubi no valor de T$ 50). Requer 2º círculo. ',
        },
        action: {
            cost: +0,
            description:
                '(Apenas Arcanos): muda o alvo para 1 criatura. Você lança a magia nos olhos do alvo, que fica ofuscado pela cena. Não afeta criaturas cegas. ',
        },
        action: {
            cost: +2,
            description:
                '(Apenas Arcanos): muda o alcance para longo e o efeito para 4 esferas brilhantes. Cria esferas flutuantes de pura luz com 10cm de diâmetro, que você pode posicionar onde quiser dentro do alcance. Você pode enviar uma esfera à frente, outra para trás, outra para cima e manter uma perto de você, por exemplo. Uma vez por rodada, você pode mover as esferas com uma ação livre. Cada esfera ilumina como uma tocha, mas não produz calor. Se uma esfera ocupar o espaço de uma criatura, ela fica ofuscada e sua silhueta pode ser vista claramente (ela não recebe camuflagem por escuridão ou invisibilidade). Requer 2º círculo. ',
        },
        action: {
            cost: +2,
            description:
                '(Apenas Divinos): a luz é cálida como a do sol. Criaturas que sofrem penalidades e dano pela luz solar sofrem seus efeitos como se estivessem expostos à luz solar real. Dentro da área seus aliados estabilizam automaticamente e ficam imunes à condição sangrando, e seus inimigos ficam ofuscados. Requer 2º círculo. ',
        },
        action: {
            cost: +5,
            description:
                '(Apenas Divinos): muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo é envolto por um halo de luz, recebendo +10 em testes de Diplomacia e resistência a trevas 10. Requer 2º círculo.',
        },
    },
    {
        key: 'NEVOA',
        label: 'Névoa',
        type: 'Universal 1 (Convocação)',
        school: 'CONV',
        schoolAbrev: 'Conv',
        data: {
            castingType: 'padrão',
            range: 'curto',
            effect: 'nuvem com 6m de raio e 6m de altura',
            duration: 'cena',
        },
        description:
            'Uma névoa espessa eleva-se de um ponto a sua escolha, obscurecendo toda a visão — criaturas a até 1,5m têm camuflagem e criaturas a partir de 3m têm camuflagem total. Um vento forte dispersa a névoa em 4 rodadas e um vendaval a dispersa em 1 rodada. Esta magia não funciona sob a água. ',
        action: {
            cost: +1,
            description:
                'a magia também funciona sob a água, criando uma nuvem de tinta. ',
        },
        action: {
            cost: +2,
            description:
                'você pode escolher criaturas no alcance ao lançar a magia; elas enxergam através do efeito. Requer 2º círculo. ',
        },
        action: {
            cost: +2,
            description:
                'além do normal, a nuvem tem um cheiro horrível. No início de seus turnos, qualquer criatura dentro dela, ou qualquer criatura com faro em alcance curto da nuvem, deve fazer um teste de Fortitude. Se falhar, fica enjoada por uma rodada. ',
        },
        action: {
            cost: +2,
            description:
                'além do normal, a nuvem tem um tom esverdeado e se torna cáustica. No início de seus turnos, criaturas dentro dela sofrem 2d4 pontos de dano de ácido. ',
        },
        action: { cost: +3, description: 'aumenta o dano de ácido em +2d4. ' },
        action: {
            cost: +5,
            description:
                'além do normal, a nuvem fica espessa, quase sólida. Qualquer criatura dentro dela tem seu deslocamento reduzido para 3m (independentemente de seu deslocamento normal) e sofre –2 em testes de ataque e rolagens de dano.',
        },
    },
    {
        key: 'ORIENTACAO',
        label: 'Orientação',
        type: 'Divina 1 (Adivinhação)',
        school: 'ADIV',
        schoolAbrev: 'Adiv',
        data: {
            castingType: 'movimento',
            range: 'curto',
            target: '1 criatura',
            duration: 'cena',
        },
        description:
            'Você oferece ajuda. Escolha um atributo — até o final da cena, sempre que o alvo fizer um teste de perícia baseada no atributo escolhido, pode rolar dois dados e ficar com o melhor resultado. Esse benefício não se aplica a testes de ataque ou resistência. \nTruque: muda a execução para ação padrão e a duração para 1 rodada. O bônus vale para um único teste. Uma criatura só pode ser afetada por esse truque uma vez por dia. ',
        action: {
            cost: +5,
            description:
                'em vez de um atributo, escolha entre atributos físicos (Força, Destreza e Constituição) ou mentais (Inteligência, Sabedoria e Carisma). Requer 3º círculo. ',
        },
        action: {
            cost: +5,
            description:
                'muda o alvo para criaturas escolhidas. Requer 3º círculo.',
        },
    },
    {
        key: 'PERDICAO',
        label: 'Perdição',
        type: 'Divina 1 (Necromancia)',
        school: 'NECRO',
        schoolAbrev: 'NECRO',
        data: {
            castingType: 'padrão',
            range: 'curto',
            target: 'criaturas escolhidas',
            duration: 'cena',
            resistance: 'nenhuma',
        },
        description:
            "Amaldiçoa os alvos, que recebem –1 em testes de ataque e rolagens de dano. 'Perdição' anula 'Bênção'. ",
        action: {
            cost: +2,
            description:
                'aumenta as penalidades em –1, limitado pelo círculo máximo de magia que você pode lançar',
        },
    },
    {
        key: 'PRIMOR_ATLETICO',
        label: 'Primor Atlético',
        type: 'Arcana 1 (Transmutação)',
        school: 'TRANS',
        schoolAbrev: 'Trans',
        data: {
            castingType: 'padrão',
            range: 'toque',
            target: ' 1 criatura',
            duration: 'cena.',
        },
        description:
            'Você modifica os limites físicos do alvo, que recebe deslocamento +9m e +10 em testes de Atletismo. ',
        action: {
            cost: +1,
            description:
                'além do normal, o alvo recebe um bônus adicional de +20 em testes de Atletismo para saltar (para um bônus total de +30). ',
        },
        action: {
            cost: +1,
            description:
                'além do normal, o alvo pode escalar paredes e tetos sem precisar fazer testes de Atletismo. Para isso, precisa estar com as mãos livres, mas pode usar uma única mão se ficar parado no lugar. O alvo não fica desprevenido enquanto escala. ',
        },
        action: {
            cost: +1,
            description:
                'muda a execução para ação de movimento, o alcance para pessoal, o alvo para você e a duração para instantânea. Você salta muito alto e pousa em alcance corpo a corpo de uma criatura em alcance curto. Se fizer um ataque corpo a corpo contra essa criatura nesta rodada, recebe os benefícios e penalidades de uma investida e sua arma tem o dano aumentado em um dado do mesmo tipo durante este ataque. ',
        },
        action: {
            cost: +3,
            description:
                'além do normal, ao fazer testes de perícias baseadas em Força, Destreza ou Constituição, o alvo pode rolar dois dados e escolher o melhor. Não afeta testes de ataque ou resistência. Requer 2º círculo.',
        },
    },
    {
        key: 'PROFANAR',
        label: 'Profanar',
        type: 'Divina 1 (Necromancia)',
        school: 'NECRO',
        schoolAbrev: 'NECRO',
        data: {
            castingType: 'padrão',
            range: 'longo',
            target: 'esfera com 9m de raio',
            duration: '1 dia',
        },
        description:
            "Esta magia enche a área com energia negativa. Efeitos que causam dano de trevas ou canalizam energia negativa têm o dano dobrado dentro da área. Esta magia não pode ser lançada em uma área contendo um símbolo visível dedicado a uma divindade que não a sua. 'Profanar' anula 'Consagrar'. ",
        action: {
            cost: +1,
            description:
                'além do normal, mortos-vivos na área recebem +2 na Defesa e +2 em todos os testes. ',
        },
        action: {
            cost: +2,
            description: 'aumenta os bônus para mortos-vivos em +1. ',
        },
        action: {
            cost: +9,
            description:
                'muda a execução para 1 hora, a duração para permanente e adiciona componente material (incenso e óleos no valor de T$ 1.000). Requer 4º círculo.',
        },
    },
    {
        key: 'PROTECAO_DIVINA',
        label: 'Proteção Divina',
        type: 'Divina 1 (Abjuração)',
        school: 'ABJUR',
        schoolAbrev: 'Abjur',
        data: {
            castingType: 'padrão',
            range: 'toque',
            target: '1 criatura',
            duration: 'cena',
        },
        description:
            'Esta magia cria uma barreira mística invisível que fornece ao alvo +2 em testes de resistência. ',
        action: { cost: +2, description: 'aumenta o bônus concedido em +1. ' },
        action: {
            cost: +2,
            description:
                'muda a execução para reação, o alcance para curto e a duração para 1 rodada. ',
        },
        action: {
            cost: +2,
            description:
                'muda o alvo para área de círculo com 3m de raio. Todos os aliados dentro do círculo recebem o bônus da magia. Requer 2º círculo. ',
        },
        action: {
            cost: +5,
            description:
                'também torna o alvo imune a efeitos de encantamento. Requer 3º círculo.',
        },
    },
    {
        key: 'QUEDA_SUAVE',
        label: 'Queda Suave',
        type: 'Arcana 1 (Transmutação)',
        school: 'TRANS',
        schoolAbrev: 'Trans',
        data: {
            castingType: 'reação',
            range: 'curto',
            target: '1 criatura ou objeto com até 200kg',
            duration: 'até chegar ao solo ou cena, o que vier primeiro',
        },
        description:
            "O alvo cai lentamente. A velocidade da queda é reduzida para 18m por rodada — o suficiente para não causar dano.\nComo lançar esta magia é uma reação, você pode lançá-la rápido o bastante para salvar a si ou um aliado de quedas inesperadas\nLançada sobre um projétil — como uma flecha ou uma rocha largada do alto de um penhasco —, a magia faz com que ele cause metade do dano normal, devido à lentidão.Queda Suave' só funciona em criaturas e objetos em queda livre ou similar; a magia não vai frear um golpe de espada ou o mergulho rasante de um atacante voador.\nTruque: muda o alvo para objeto com até 5kg. Em vez do normal, você pode gastar uma ação de movimento para levitar o alvo até 4,5m em qualquer direção. ",
        action: {
            cost: +2,
            description: 'muda o alvo para até 10 criaturas ou objetos.',
        },
    },
    {
        key: 'RAIO_DO_ENFRAQUECIMENTO',
        label: 'Raio do Enfraquecimento',
        type: 'Arcana 1 (Necromancia)',
        school: 'NECRO',
        schoolAbrev: 'NECRO',
        data: {
            castingType: 'padrão',
            range: 'curto',
            target: ' 1 criatura',
            duration: 'cena',
            resistance: 'Fortitude parcial.',
        },
        description:
            'Você dispara um raio púrpura que drena as forças do alvo. Se falhar na resistência, o alvo fica fatigado. Se passar, fica vulnerável. \nTruque: muda o alcance para toque e a resistência para Fortitude anula. Em vez do normal, ao tocar o alvo, sua mão emana um brilho púrpura. O alvo fica fatigado. Note que, como efeitos de magia não acumulam, lançar este truque duas vezes contra o mesmo alvo não irá deixá-lo exausto. ',
        action: {
            cost: +2,
            description:
                'em vez do normal, se falhar na resistência o alvo fica exausto. Se passar, fica fatigado. Requer 2º círculo. ',
        },
        action: {
            cost: +5,
            description:
                'em vez do normal, se falhar na resistência o alvo fica inconsciente. Se passar, fica exausto. Requer 3º círculo.',
        },
    },
    {
        key: 'RESISTENCIA_A_ENERGIA',
        label: 'Resistência a Energia',
        type: 'Universal 1 (Abjuração)',
        school: 'ABJUR',
        schoolAbrev: 'Abjur',
        data: {
            castingType: 'padrão',
            range: 'toque',
            target: '1 criatura',
            duration: 'cena',
        },
        description:
            'Ao lançar esta magia, escolha entre ácido, eletricidade, fogo, frio, luz ou trevas. O alvo recebe resistência 10 contra a energia escolhida, passando a ignorar os 10 primeiros pontos de dano de cada ataque feito com essa energia.',
        action: { cost: +2, description: 'aumenta a resistência em +5.' },
        action: {
            cost: +2,
            description: 'muda a duração para 1 dia. Requer 2º círculo.',
        },
        action: {
            cost: +5,
            description:
                'muda o alcance para curto e o alvo para criaturas escolhidas. Requer 3º círculo.',
        },
        action: {
            cost: +5,
            description:
                'muda o efeito para resistência a dano de todos os tipos de energia. Requer 3º círculo.',
        },
        action: {
            cost: +9,
            description:
                'muda o efeito para imunidade a um tipo de dano de energia. Requer 4º círculo.',
        },
    },
    {
        key: 'SANTUARIO',
        label: 'Santuário',
        type: 'Divina 1 (Abjuração)',
        school: 'ABJUR',
        schoolAbrev: 'Abjur',
        data: {
            castingType: 'padrão',
            range: 'toque',
            target: '1 criatura',
            duration: 'cena',
            resistance: 'Vontade anula',
        },
        description:
            "Qualquer criatura que tente fazer uma ação hostil contra o alvo deve fazer um teste de Vontade. Se falhar, não consegue, perde a ação e não pode tentar novamente até o fim da cena. 'Santuário' não protege o alvo de efeitos de área. Além disso, o próprio alvo também não pode fazer ações hostis, ou a magia é dissipada — mas pode usar outras habilidades e magias de cura e suporte (como 'Curar Ferimentos', 'Bênção' e assim por diante). ",
        action: {
            cost: +1,
            description:
                'além do normal, escolha um tipo de criatura entre animal, construto ou morto-vivo. Você não pode ser percebido por criaturas do tipo escolhido, não importando o sentido usado. ',
        },
        action: {
            cost: +9,
            description:
                'também protege o alvo contra efeitos de área. Uma criatura que tente atacar uma área que inclua o alvo deve fazer o teste de Vontade; se falhar, não consegue e perde a ação. Ela só pode tentar novamente se o alvo sair da área.',
        },
    },
    {
        key: 'SETA_INFALIVEL_DE_TALUDE',
        label: 'Seta Infalível de Talude',
        type: 'Arcana 1 (Evocação)',
        school: 'EVOC',
        schoolAbrev: 'Evoc',
        data: {
            castingType: 'padrão',
            range: 'médio',
            target: 'até 2 criaturas',
            duration: 'instantânea',
        },
        description:
            'Favorita entre arcanistas iniciantes, esta magia lança duas setas de energia que causando 1d4+1 pontos de dano de essência cada. Você pode lançar as setas em alvos diferentes ou concentrá-las num mesmo alvo. Caso você possua um bônus no dano de magias, como pelo poder Arcano de Batalha, ele é aplicado em apenas uma seta (o bônus vale para a magia, não cada alvo). ',
        action: {
            cost: +2,
            description:
                'muda as setas para lanças de energia que surgem e caem do céu. Cada lança causa 1d8+1 pontos de dano de essência. Requer 2º círculo. ',
        },
        action: {
            cost: +2,
            description: 'muda o número de setas/lanças para três. ',
        },
        action: {
            cost: +4,
            description:
                'muda o número de setas/lanças para cinco. Requer 2º círculo. ',
        },
        action: {
            cost: +9,
            description:
                'muda o número de setas/lanças para dez. Requer 4º círculo.',
        },
    },
    {
        key: 'SILENCIO',
        label: 'Silêncio',
        type: 'Divina 1 (Ilusão)',
        school: 'ILUSAO',
        schoolAbrev: 'Ilusão',
        data: {
            castingType: 'padrão',
            range: 'médio',
            target: 'esfera com 6m de raio',
            duration: 'sustentada',
        },
        description:
            'Um silêncio sepulcral recai sobre a área e nenhum som é produzido ali. Enquanto estiverem na área, todas as criaturas ficam surdas. Além disso, como lançar magias exige palavras mágicas, normalmente nenhuma magia pode ser lançada dentro da área.',
        action: {
            cost: +1,
            description:
                'muda a área para alvo de 1 objeto. Em vez do normal, o alvo emana uma área de silêncio com 3m de raio. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. ',
        },
        action: {
            cost: +2,
            description:
                'muda a duração para cena. Em vez do normal, nenhum som pode deixar a área, mas criaturas dentro da área podem falar, ouvir e lançar magias com palavras mágicas normalmente.',
        },
    },
    {
        key: 'SONO',
        label: 'Sono',
        type: 'Arcana 1 (Encantamento)',
        school: 'ENCAN',
        schoolAbrev: 'Encan',
        data: {
            castingType: 'padrão',
            range: 'curto',
            target: ' 1 criatura de ND 2 ou menor',
            duration: 'cena',
            resistance: 'Vontade parcial.',
        },
        description:
            'Um sono místico recai sobre o alvo. Se passar na resistência, fica fatigado por uma rodada. Se falhar, fica inconsciente e caído.',
        action: {
            cost: +2,
            description:
                'muda o alvo para área de quadrado com 3m de lado. Todas as criaturas na área dentro do limite de ND são afetadas.',
        },
        action: {
            cost: +2,
            description: 'afeta alvos de ND 5 ou menor. Requer 2º círculo.',
        },
        action: {
            cost: +5,
            description: 'afeta alvos de ND 10 ou menor. Requer 3º círculo.',
        },
        action: {
            cost: +5,
            description:
                'muda o alvo para criaturas escolhidas. Todas as criaturas no alcance dentro do limite de ND são afetadas.',
        },
        action: {
            cost: +9,
            description: 'afeta alvos de ND 15 ou menor. Requer 4º círculo.',
        },
        action: {
            cost: +14,
            description: 'afeta alvos de qualquer ND. Requer 5º círculo.',
        },
    },
    {
        key: 'SUPORTE_AMBIENTAL',
        label: 'Suporte Ambiental',
        type: 'Divina 1 (Abjuração)',
        school: 'ABJUR',
        schoolAbrev: 'Abjur',
        data: {
            castingType: 'padrão',
            range: 'toque',
            target: '1 criatura',
            duration: '1 dia',
        },
        description:
            'Esta magia garante a sobrevivência em ambientes hostis. O alvo fica imune aos efeitos de calor e frio extremos, pode respirar na água, se respirar ar (ou vice versa) e não sufoca em fumaça densa.',
        action: {
            cost: +5,
            description:
                'muda o alcance para curto e o alvo para criaturas escolhidas.',
        },
    },
    {
        key: 'TEIA',
        label: 'Teia',
        type: 'Arcana 1 (Convocação)',
        school: 'CONV',
        schoolAbrev: 'Conv',
        data: {
            castingType: 'padrão',
            range: 'curto',
            target: 'cubo com 6m de lado',
            duration: 'cena',
            resistance: 'Reflexos anula',
        },
        description:
            "'Teia' cria várias camadas de fibras entrelaçadas e pegajosas na área. Qualquer criatura na área que falhar na resistência fica enredada. Uma vítima pode se libertar com uma ação padrão e um teste de Acrobacia ou Atletismo. A área ocupada por 'Teia' é terreno difícil. A 'Teia' é inflamável. Qualquer ataque que cause dano de fogo destrói as teias por onde passar, libertando as criaturas enredadas mas deixando-as em chamas. ",
        action: {
            cost: +1,
            description:
                'além do normal, criaturas que falhem na resistência também ficam imóveis. ',
        },
        action: {
            cost: +2,
            description:
                'além do normal, no início de seus turnos a magia afeta novamente qualquer criatura na área, exigindo um novo teste de Reflexos. Requer 2º círculo. ',
        },
        action: { cost: +2, description: 'aumenta a área em +1 cubo de 1,5m.' },
    },
    {
        key: 'TOQUE_CHOCANTE',
        label: 'Toque Chocante',
        type: 'Arcana 1 (Evocação)',
        school: 'EVOC',
        schoolAbrev: 'Evoc',
        data: {
            castingType: 'padrão',
            range: 'toque',
            target: '1 criatura',
            duration: 'instantânea',
            resistance: 'Fortitude reduz à metade',
        },
        description:
            'Arcos elétricos envolvem sua mão, causando 2d8+2 pontos de dano de eletricidade. Se o alvo usa armadura de metal (ou carrega muito metal, a critério do mestre), sofre uma penalidade de –5 no teste de resistência.',
        action: { cost: +1, description: 'aumenta o dano em 1d8+1.' },
        action: {
            cost: +2,
            description:
                'como parte da execução da magia, você pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e da magia.',
        },
        action: {
            cost: +2,
            description:
                'muda o alcance para pessoal e o alvo para área de explosão com 6m de raio. Você dispara raios pelas pontas dos dedos que afetam todas as criaturas na área.',
        },
    },
    {
        key: 'TRANCA_ARCANA',
        label: 'Tranca Arcana',
        type: 'Arcana 1 (Abjuração)',
        school: 'ABJUR',
        schoolAbrev: 'Abjur',
        data: {
            castingType: 'padrão',
            range: 'toque',
            target: '1 objeto Grande ou menor',
            duration: 'permanente',
        },
        description:
            "Esta magia tranca uma porta ou outro item que possa ser aberto ou fechado (como um baú, caixa etc.), aumentando a CD de testes de Força ou Ladinagem para abri-lo em +10. Você pode abrir livremente sua própria tranca sem problemas.'Componente material': chave de bronze no valor de T$ 25.\nTruque: muda o alcance para curto. Em vez do normal, pode abrir ou fechar um objeto de tamanho Médio ou menor, como uma porta ou baú. Não afeta objetos trancados.",
        action: {
            cost: +1,
            description:
                "muda o alcance para curto e a duração para instantânea. Em vez do normal, a magia abre portas, baús e janelas trancadas, presas, barradas ou protegidas por outra 'Tranca Arcana' (neste caso, o efeito é dissipado). Ela também afrouxa grilhões e solta correntes.",
        },
        action: {
            cost: +5,
            description: 'aumenta a CD para abrir o alvo em +5.',
        },
        action: {
            cost: +5,
            description:
                'muda o alvo para 1 objeto de qualquer tamanho, podendo afetar até mesmo os portões de um castelo. Requer 3º círculo.',
        },
    },
    {
        key: 'TRANQUILIDADE',
        label: 'Tranquilidade',
        type: 'Divina 1 (Encantamento)',
        school: 'ENCAN',
        schoolAbrev: 'Encan',
        data: {
            castingType: 'ação padrão',
            range: 'curto',
            target: '1 animal ou humanoide',
            duration: 'cena',
            resistance: 'Vontade parcial',
        },
        description:
            'Você emana ondas de serenidade. Se falhar na resistência, o alvo tem sua atitude mudada para indiferente e não pode atacar ou realizar qualquer tipo de ação agressiva. Se passar, recebe –2 em testes de ataque. Qualquer ação hostil contra o alvo anula a magia, e ele retorna à atitude que tinha antes (ou piorada, de acordo com o mestre).',
        action: { cost: +1, description: 'muda o alvo para 1 criatura.' },
        action: { cost: +1, description: 'aumenta o número de alvos em +1.' },
        action: { cost: +2, description: 'aumenta a penalidade em –1.' },
        action: {
            cost: +5,
            description:
                'muda o alcance para médio e o alvo para criaturas escolhidas. Requer 3º círculo.',
        },
    },
    {
        key: 'TRANSMUTAR_OBJETOS',
        label: 'Transmutar Objetos',
        type: 'Arcana 1 (Transmutação)',
        school: 'TRANS',
        schoolAbrev: 'Trans',
        data: {
            castingType: 'padrão',
            range: 'toque',
            target: 'matéria-prima, como madeira, rochas, ossos',
            duration: 'cena',
        },
        description:
            "A magia transforma matéria bruta para moldar um novo objeto. Você pode usar matéria-prima mundana para criar um objeto de tamanho Pequeno ou menor e preço máximo de T$ 25, como um balde ou uma espada. O objeto reverte à matéria-prima no final da cena, ou se for tocado por um objeto feito de chumbo. Esta magia não pode ser usada para criar objetos consumíveis, como alimentos, itens alquímicos ou venenos, nem objetos com mecanismos complexos, como bestas ou armas de fogo. 'Transmutar Objetos' anula 'Despedaçar'.\nTruque: muda o alvo para 1 objeto mundano e a duração para instantânea. Em vez do normal, você pode alterar as propriedades físicas do objeto, como colorir, limpar ou sujar itens pequenos (incluindo peças de roupa), aquecer, esfriar e/ou temperar (mas não produzir) até 0,5kg de material inanimado (incluindo comida), ou curar 1 PV do objeto, consertando pequenas falhas como colar um frasco de cerâmica quebrado, unir os elos de uma corrente ou costurar uma roupa rasgada. Um objeto só pode ser afetado por este truque uma vez por dia. ",
        action: {
            cost: +2,
            description:
                'aumenta o limite de tamanho do objeto em uma categoria. ',
        },
        action: {
            cost: +1,
            description: 'aumenta o preço máximo do objeto criado em + T$ 25. ',
        },
        action: {
            cost: +1,
            description:
                'muda o alcance para toque, o alvo para 1 construto e a duração para instantânea. Em vez do normal, cura 2d8 PV do alvo. Você pode gastar 2 PM adicionais para aumentar a cura em +1d8. ',
        },
        action: {
            cost: +5,
            description:
                'muda o alvo para 1 objeto mundano e a duração para instantânea. Em vez do normal, você cura todos os PV do alvo, restaurando o objeto totalmente. Este aprimoramento está sujeito aos limites de tamanho e preço do objeto conforme a magia original e não funciona se o objeto tiver sido completamente destruído (queimado até virar cinzas ou desintegrado, por exemplo). Requer 3º círculo.',
        },
        action: {
            cost: +9,
            description:
                'como o aprimoramento anterior, mas passa a afetar itens mágicos',
        },
    },
    {
        key: 'VISAO_MISTICA',
        label: 'Visão Mística',
        type: 'Universal 1 (Adivinhação)',
        school: 'ADIV',
        schoolAbrev: 'Adiv',
        data: {
            castingType: 'padrão',
            range: 'pessoal',
            target: 'você',
            duration: 'cena',
        },
        description:
            'Seus olhos brilham com uma luz azul e passam a enxergar auras mágicas. Este efeito é similar ao uso de Misticismo para detectar magia, mas você detecta todas as auras mágicas em alcance médio e recebe todas as informações sobre elas sem gastar ações. Além disso, você pode gastar uma ação de movimento para descobrir se uma criatura que possa perceber em alcance médio é capaz de lançar magias e qual a aura gerada pelas magias de círculo mais alto que ela pode lançar. ',
        action: { cost: +1, description: 'recebe visão no escuro. ' },
        action: { cost: +2, description: 'muda a duração para 1 dia. ' },
        action: {
            cost: +2,
            description:
                'também pode enxergar objetos e criaturas invisíveis. Eles aparecem como formas translúcidas.',
        },
    },
    {
        key: 'VITALIDADE_FANTASMA',
        label: 'Vitalidade Fantasma',
        type: 'Arcana 1 (Necromancia)',
        school: 'NECRO',
        schoolAbrev: 'NECRO',
        data: {
            castingType: 'padrão',
            range: 'pessoal',
            target: 'você',
            duration: 'instantânea',
        },
        description:
            'Você suga energia vital da terra, recebendo 2d8 pontos de vida temporários. Os PV temporários desaparecem ao final da cena.',
        action: {
            cost: +2,
            description: 'aumenta os PV temporários recebidos em +1d8. ',
        },
        action: {
            cost: +5,
            description:
                'muda o alvo para área: esfera com 6m de raio centrada em você e a resistência para Fortitude reduz à metade. Em vez do normal, você suga energia das criaturas vivas na área, causando 1d8 pontos de dano de trevas e recebendo PV temporários iguais ao dano total causado. Os PV temporários desaparecem ao final da cena. Requer 2º círculo.',
        },
    },
]
