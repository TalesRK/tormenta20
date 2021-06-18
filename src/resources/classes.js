export const getClassByKey = (key) => {
    return characterClass.find((item) => item.key === key)
}

export const classesThatHaveMagic = ['ARCANISTA', 'BARDO', 'CLERIGO', 'DRUIDA']

export const characterClass = [
    {
        key: 'ARCANISTA',
        label: 'Arcanista',
        data: {
            descricao:
                'Um conjurador de magias arcanas, por meio de estudo, um foco ou dom natural.',
            pontos_vida: {
                inicial: 8,
                por_nivel: 2,
            },
            pontos_mana: {
                por_nivel: 6,
            },
            pericias: [
                'MISTICISMO',
                'VONTADE',
                'CONHECIMENTO',
                'INICIATIVA',
                'OFICIO',
            ],
        },
    },
    {
        key: 'BARBARO',
        label: 'Bárbaro',
        data: {
            descricao:
                'Um combatente primitivo, que usa fúria e instintos para destruir seus inimigos.',
            pontos_vida: {
                inicial: 8,
                por_nivel: 2,
            },
            pontos_mana: {
                por_nivel: 6,
            },
            pericias: [
                'MISTICISMO',
                'VONTADE',
                'CONHECIMENTO',
                'INICIATIVA',
                'OFICIO',
            ],
        },
    },
    {
        key: 'BARDO',
        label: 'Bardo',
        data: {
            descricao:
                'Um artista errante e faz-tudo versátil, sempre com a solução certa para cada ocasião.',
            pontos_vida: {
                inicial: 8,
                por_nivel: 2,
            },
            pontos_mana: {
                por_nivel: 6,
            },
            pericias: [
                'MISTICISMO',
                'VONTADE',
                'CONHECIMENTO',
                'INICIATIVA',
                'OFICIO',
            ],
        },
    },
    {
        key: 'BUCANEIRO',
        label: 'Bucaneiro',
        data: {
            descricao:
                'Um navegador inconsequente e galante, sempre em busca de ouro ou emoção.',
            pontos_vida: {
                inicial: 8,
                por_nivel: 2,
            },
            pontos_mana: {
                por_nivel: 6,
            },
            pericias: [
                'MISTICISMO',
                'VONTADE',
                'CONHECIMENTO',
                'INICIATIVA',
                'OFICIO',
            ],
        },
    },
    {
        key: 'CACADOR',
        label: 'Caçador',
        data: {
            descricao:
                'Um exterminador de monstros e mestre da sobrevivência em áreas selvagens.',
            pontos_vida: {
                inicial: 8,
                por_nivel: 2,
            },
            pontos_mana: {
                por_nivel: 6,
            },
            pericias: [
                'MISTICISMO',
                'VONTADE',
                'CONHECIMENTO',
                'INICIATIVA',
                'OFICIO',
            ],
        },
    },
    {
        key: 'CAVALEIRO',
        label: 'Cavaleiro',
        data: {
            descricao:
                'Um combatente honrado, especializado em suportar dano e proteger os outros.',
            pontos_vida: {
                inicial: 8,
                por_nivel: 2,
            },
            pontos_mana: {
                por_nivel: 6,
            },
            pericias: [
                'MISTICISMO',
                'VONTADE',
                'CONHECIMENTO',
                'INICIATIVA',
                'OFICIO',
            ],
        },
    },
    {
        key: 'CLERIGO',
        label: 'Clérigo',
        data: {
            descricao:
                'Servo de um dos deuses de Arton, usa poderes divinos para defender seus ideais.',
            pontos_vida: {
                inicial: 8,
                por_nivel: 2,
            },
            pontos_mana: {
                por_nivel: 6,
            },
            pericias: [
                'MISTICISMO',
                'VONTADE',
                'CONHECIMENTO',
                'INICIATIVA',
                'OFICIO',
            ],
        },
    },
    {
        key: 'DRUIDA',
        label: 'Druida',
        data: {
            descricao:
                'Guardião do mundo natural e devoto das forças selvagens, naturais ou monstruosas.',
            pontos_vida: {
                inicial: 8,
                por_nivel: 2,
            },
            pontos_mana: {
                por_nivel: 6,
            },
            pericias: [
                'MISTICISMO',
                'VONTADE',
                'CONHECIMENTO',
                'INICIATIVA',
                'OFICIO',
            ],
            magia: {
                tipo: 'escolha_escolas',
                escolas_escolher: 3,
                quantidade_inicial: 2,
                quantidade_por_progresso: 1,
                tipo_progresso: 'nivel_par',
                atributo_chave: 'SAB',
            },
            powersText: `No 2° nível, e a cada nível seguinte, você escolhe um dos poderes a seguir:

Aspecto do Inverno:
Você recebe resistência a frio 5 e suas magias que causam dano de frio causam +1 ponto de dano por dado. Durante o inverno, suas magias de druida custam −1 PM.


Aspecto do Outono:
Você aprende uma magia de necromancia, arcana ou divina, de qualquer círculo que possa lançar. Você pode gastar 1 PM para impor uma penalidade de –2 nos testes de resistência de todos os inimigos em alcance médio até o início do seu próximo turno. Durante o outono, suas magias de druida custam −1 PM.


Aspecto da Primavera:
Você recebe +1 em Carisma e suas magias de cura curam +1 PV por dado. Durante a primavera, suas magias de druida custam −1 PM.


Aspecto do Verão:
Você recebe +2 em Iniciativa e pode gastar 1 PM para cobrir suas armas ou armas naturais com chamas, causando +1d6 pontos de dano de fogo até o fim da cena. Durante o verão, suas magias de druida custam −1 PM.


Aumento de Atributo:
Você recebe +2 em um atributo a sua escolha. Você pode escolher este poder várias vezes. A partir da segunda vez que escolhê-lo para o mesmo atributo, o aumento diminui para +1.


Companheiro Animal:
Você recebe um companheiro animal. Pré-requisito: Treinado em Adestramento.


Companheiro Animal Adicional:
Você recebe um companheiro animal adicional, de um tipo diferente dos que já tenha. Você pode escolher este poder quantas vezes quiser, mas ainda está sujeito ao limite de aliados. Pré-requisitos: Carisma 15, Companheiro Animal, 7° nível de druida.


Companheiro Animal Aprimorado:
Escolha um companheiro animal. Esse animal recebe um segundo tipo diferente, ganhando os bônus equivalentes. Por exemplo, se você tiver um companheiro Guardião, pode adicionar o tipo Fortão à ele, tornando-o um Guardião Feroz que concede +2 na Defesa e +1d8 de dano corpo a corpo. Pré-requisitos: Companheiro Animal, 8° nível de druida.


Companheiro Animal Lendário:
Escolha um de seus companheiros animais. Ele se torna uma criatura lendária, e passa a dobrar seus bônus concedidos. No caso de companheiros que concedem dados de bônus, o número de dados aumenta em 1. Pré-requisitos: Companheiro Animal, 18° nível de druida.


Companheiro Animal Mágico:
Escolha um de seus companheiros animais. Esse animal recebe um segundo tipo diferente, entre destruidor ou médico, ganhando os bônus equivalentes. Pré-requisitos: Companheiro Animal, 8° nível de druida.


Coração da Selva:
Você recebe +2 em Fortitude e se torna imune a venenos.


Espírito dos Equinócios:
Sua alma e corpo estão em equilíbrio. Você pode gastar 1 PM para escolher 10 em um teste de resistência. Pré-requisitos: Aspecto da Primavera, Aspecto do Outono, 10° nível de druida.


Espírito dos Solstícios:
Você transita entre os extremos do mundo natural. Quando lança uma magia, pode gastar +4 PM para maximizar os efeitos numéricos variáveis dela. Por exemplo, uma magia Curar Ferimentos aprimorada para curar 5d8+5 PV irá curar automaticamente 45 PV, sem a necessidade de rolar dados. Uma magia sem efeitos variáveis não pode ser afetada por este poder. Pré-requisitos: Aspecto do Inverno, Aspecto do Verão, 10° nível de druida.


Força dos Penhascos:
Você recebe +2 em Fortitude. Se estiver pisando em rocha sólida, pode gastar 1 PM e uma reação para receber RD 10 contra um ataque.


Forma Primal:
Quando você usa Forma Selvagem, pode se transformar em uma fera primal, combinando as habilidades de diferentes animais. Você recebe os benefícios de dois tipos de animais (bônus iguais não se acumulam; use o melhor de cada tipo). Pré-requisitos: Forma Selvagem duas vezes, 18° nível de druida.


Forma Selvagem:
Você pode se transformar em um tipo de animal. Você pode escolher este benefício diversas vezes. A cada vez, aprende uma forma selvagem diferente.


Liberdade da Pradaria:
Você recebe +2 em Reflexos. Se estiver ao ar livre, você pode gastar 1 PM sempre que lançar uma magia para aumentar o alcance dela em um passo (de toque para curto, de curto para médio etc.).


Magia Natural:
Você pode lançar magias em forma selvagem. Pré-requisitos: Forma Selvagem, 8° nível de druida.


Presas Afiadas:
A margem de ameaça de suas armas naturais em forma selvagem aumenta em +2. Pré-requisito: Forma Selvagem.


Segredos da Natureza:
Você aprende duas magias de qualquer círculo que possa lançar. Elas devem pertencer às escolas que você saber usar, mas podem ser arcanas ou divinas. Você pode escolher este poder quantas vezes quiser.


Tranquilidade dos Lagos:
Você recebe +2 em Vontade. Se estiver em alcance médio de um lago, rio ou equivalente, pode gastar 1 PM uma vez por rodada para repetir um teste de resistência recém realizado.`,
        },
    },
    {
        key: 'GUERREIRO',
        label: 'Guerreiro',
        data: {
            descricao:
                'O especialista supremo em técnicas de combate com armas.',
            pontos_vida: {
                inicial: 8,
                por_nivel: 2,
            },
            pontos_mana: {
                por_nivel: 6,
            },
            pericias: [
                'MISTICISMO',
                'VONTADE',
                'CONHECIMENTO',
                'INICIATIVA',
                'OFICIO',
            ],
            powersText: `No 2º nível, e a cada nível seguinte, você escolhe um dos poderes a seguir:

Ambidestria:
e estiver usando duas armas (e pelo menos uma delas for leve) e fizer a ação atacar, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno. Pré-requisito:  Des 15.


Aumento de Atributo:
Você recebe +2 em um atributo a sua escolha. Você pode escolher este poder várias vezes. A partir da segunda vez que escolhê-lo para o mesmo atributo, o aumento diminui para +1.


Arqueiro:
Se estiver usando uma arma de ataque à distância, você soma seu bônus de Sabedoria em rolagens de dano (limitado pelo seu nível). Pré-requisito: Sab 13.


Ataque Reflexo:
Se um alvo em alcance de seus ataques corpo a corpo ficar desprevenido ou se mover para fora do seu alcance, você pode gastar 1 PM para fazer um ataque corpo a corpo contra esse alvo como uma reação. Pré-requisito: Des 13.


Bater e Correr:
Quando faz uma investida, você pode continuar se movendo após o ataque, até o limite de seu deslocamento. Se gastar 2 PM, pode fazer uma investida sobre terreno difícil e sem sofrer a penalidade de Defesa.


Destruidor:
Se estiver usando uma arma corpo a corpo de duas mãos, você pode rolar novamente qualquer resultado 1 ou 2 em rolagens de dano. Pré-requisito: For 13.


Esgrimista:
Quando usa uma arma leve ou ágil, você soma seu bônus de Inteligência nas rolagens de dano (limitado pelo seu nível). Pré-requisito: Int 13.


Especialização em Arma:
Escolha uma arma. Você recebe +2 em rolagens de dano com a arma escolhida. Você pode escolher este poder outras vezes para armas diferentes.


Especialização em Armadura:
Você recebe resistência a dano 5 se estiver usando uma armadura pesada. Pré-requisito: 12º nível de guerreiro.


Golpe de Raspão:
Quando erra um ataque, você pode gastar 1 PM. Se fizer isso, causa 1d8 pontos de dano (do tipo da arma) no alvo do ataque.


Golpe Demolidor:
Quando usa a manobra quebrar ou ataca um objeto, você pode gastar 1 PM para ignorar a RD dele.


Golpe Pessoal:
Quando faz um ataque, você pode desferir seu Golpe Pessoal, uma manobra única, com efeitos determinados por você. Você constrói o seu Golpe Pessoal escolhendo efeitos da lista a seguir. Cada efeito possui um custo; a soma deles será o custo do Golpe Pessoal (mínimo 1 PM e máximo igual ao seu nível). O Golpe Pessoal só pode ser usado com um tipo de arma específico (por exemplo, apenas espadas longas). Quando sobe de nível, você pode reconstruir seu Golpe Pessoal e alterar a arma que ele usa. Você pode escolher este poder outras vezes para golpes diferentes. Pré-requisito: 5º nível de guerreiro.


Ímpeto:
Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada.


Mestre em Arma:
Escolha uma arma. Com esta arma, seu dano aumenta em um passo e você pode gastar 2 PM para rolar novamente um teste de ataque recém realizado. Pré-requisito: Especialização em Arma com a arma escolhida, 12º nível de guerreiro.


Planejamento Marcial:
Uma vez por dia, você pode gastar uma hora e 3 PM para escolher um poder de guerreiro ou de combate cujos pré-requisitos cumpra. Você recebe os benefícios desse poder até o próximo dia. Pré-requisitos: treinado em Guerra, 10º nível de guerreiro.


Romper Resistências:
Quando faz um Ataque Especial, você pode gastar 2 PM adicionais para ignorar qualquer resistência a dano de uma criatura.


Solidez:
Se estiver usando um escudo, você aplica o bônus na Defesa recebido pelo escudo em testes de resistência.


Tornado de Dor:
Você pode gastar uma ação padrão e 2 PM para fazer uma série de golpes giratórios. Faça um ataque e compare-o contra a Defesa de cada inimigo adjacente. Então, faça uma rolagem de dano com um bônus cumulativo de +2 para cada acerto e aplique-a em cada inimigo atingido. Pré-requisito: 6º nível de guerreiro.


Valentão:
Você recebe +2 em testes de ataque e rolagens de dano contra oponentes caídos, desprevenidos, flanqueados ou indefesos.`,
        },
    },
    {
        key: 'INVENTOR',
        label: 'Inventor',
        data: {
            descricao:
                'Um ferreiro, alquimista ou engenhoqueiro, especializado em fabricar e usar itens.',
            pontos_vida: {
                inicial: 8,
                por_nivel: 2,
            },
            pontos_mana: {
                por_nivel: 6,
            },
            pericias: [
                'MISTICISMO',
                'VONTADE',
                'CONHECIMENTO',
                'INICIATIVA',
                'OFICIO',
            ],
        },
    },
    {
        key: 'LADINO',
        label: 'Ladino',
        data: {
            descricao:
                'Aventureiro cheio de truques, confiando mais em agilidade e esperteza que em força bruta.',
            pontos_vida: {
                inicial: 8,
                por_nivel: 2,
            },
            pontos_mana: {
                por_nivel: 6,
            },
            pericias: [
                'MISTICISMO',
                'VONTADE',
                'CONHECIMENTO',
                'INICIATIVA',
                'OFICIO',
            ],
        },
    },
    {
        key: 'LUTADOR',
        label: 'Lutador',
        data: {
            descricao: 'Um especialista em combate desarmado rústico e durão.',
            pontos_vida: {
                inicial: 8,
                por_nivel: 2,
            },
            pontos_mana: {
                por_nivel: 6,
            },
            pericias: [
                'MISTICISMO',
                'VONTADE',
                'CONHECIMENTO',
                'INICIATIVA',
                'OFICIO',
            ],
        },
    },
    {
        key: 'NOBRE',
        label: 'Nobre',
        data: {
            descricao:
                'Um membro da alta sociedade cujas principais armas são as palavras e o orgulho.',
            pontos_vida: {
                inicial: 8,
                por_nivel: 2,
            },
            pontos_mana: {
                por_nivel: 6,
            },
            pericias: [
                'MISTICISMO',
                'VONTADE',
                'CONHECIMENTO',
                'INICIATIVA',
                'OFICIO',
            ],
        },
    },
    {
        key: 'PALADINO',
        label: 'Paladino',
        data: {
            descricao:
                'Um campeão do bem e da ordem, o perfeito soldado dos deuses.',
            pontos_vida: {
                inicial: 8,
                por_nivel: 2,
            },
            pontos_mana: {
                por_nivel: 6,
            },
            pericias: [
                'MISTICISMO',
                'VONTADE',
                'CONHECIMENTO',
                'INICIATIVA',
                'OFICIO',
            ],
        },
    },
]
