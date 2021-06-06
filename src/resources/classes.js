export const getClassByKey = (key) => {
    return characterClass.find((item) => item.key === key)
}

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
