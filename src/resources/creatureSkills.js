export const findCreatureSkillByKey = (key) => {
    return creatureSkills.find((item) => item.key === key)
}

export const creatureSkills = [
    {
        key: 'AGARRAR_APRIMORADO',
        label: 'Agarrar Aprimorado',
        description:
            'Se a criatura acertar um ataque com uma de suas armas naturais (especificada na descrição da habilidade), poderá fazer a manobra agarrar como uma ação livre.',
    },
    {
        key: 'CURA_ACELERADA',
        label: 'Cura Acelerada',
        description:
            'No início de seu turno, a criatura recupera pontos de vida iguais ao seu valor de Cura Acelerada (por exemplo, 5 PV com Cura Acelerada 5). Caso haja um ou mais tipos de dano listados após uma barra, a Cura Acelerada não recupera dano daqueles tipos. Por exemplo, uma criatura com Cura Acelerada 10/ácido ou fogo recupera 10 PV no início de seu turno, a menos que o dano tenha sido causado por ácido ou fogo. Cura Acelerada não recupera PV perdidos por fome, sede ou sufocamento.',
    },
    {
        key: 'FARO',
        label: 'Faro',
        description:
            'A criatura tem olfato apurado. Ela não fica desprevenida e sofre apenas camuflagem (em vez de camuflagem total) contra inimigos em alcance curto que não possa ver.',
    },
    {
        key: 'IMUNIDADE',
        label: 'Imunidade',
        description:
            'A criatura é imune a um tipo de dano ou condição. Uma criatura imune a paralisia, por exemplo, não pode ser paralisada por nenhum efeito, seja normal ou mágico. Uma criatura imune a fogo ignora todo o dano causado por fogo, seja normal ou mágico. Uma criatura imune a magia ignora todos os efeitos mágicos que a afetem diretamente. Ela não sofre dano por magias que causem dano, não é enganada por ilusões etc. Ela ainda pode ser afetada indiretamente — por exemplo, ainda é afetada por terreno difícil criado por magias.',
    },
    {
        key: 'INCORPOREO',
        label: 'Incorpóreo',
        description:
            'A criatura não tem corpo físico. Só pode ser afetada por armas mágicas, magias ou outras criaturas incorpóreas. Criaturas incorpóreas podem atravessar objetos sólidos, mas não manipulá-los. Elas não têm valor de Força, usando seu modificador de Destreza para calcular seu bônus de ataque.',
    },
    {
        key: 'MAGIA_INERENTE',
        label: 'Magia Inerente',
        description:
            'Certas criaturas podem lançar uma ou mais magias como uma habilidade inerente (atributo-chave Carisma). Esta habilidade funciona como magias, mas não exige palavras mágicas, gestos ou concentração (desde que esteja consciente, a criatura sempre poderá usar uma magia inerente).',
    },
    {
        key: 'MAGIAS',
        label: 'Magias',
        description:
            'Certas criaturas podem lançar magias como conjuradores (atributo-chave Carisma, a menos que seja especificado o contrário).',
    },
    {
        key: 'PERCEPCAO_AS_CEGAS',
        label: 'Percepção às Cegas',
        description:
            'A criatura usa sentidos diferentes da visão (como radar, sonar, sensibilidade a vibrações etc.). Escuridão e invisibilidade não a afetam. Esta habilidade tem alcance curto (a menos que especificado o contrário). Resistência a Dano (RD). A criatura ignora parte do dano que sofre. Por exemplo, se uma criatura com RD 5 sofre um ataque que causa 8 pontos de dano, perde apenas 3 PV. A resistência pode ser contra um ou mais tipos de dano específicos. Assim, uma criatura com resistência a fogo 10 ignora 10 pontos de dano de fogo, mas sofre dano de outros tipos normalmente. Caso haja um ou mais tipos de dano listados após uma barra, a RD não se aplica àqueles tipos. Por exemplo, uma criatura com RD 10/mágico ignora 10 pontos de dano de todos os ataques que sofrer — exceto dano causado por habilidades e armas mágicas.',
    },
    {
        key: 'RESISTENCIA_A_MAGIA',
        label: 'Resistência a Magia',
        description:
            'A criatura recebe um bônus em testes de resistência contra magia. Por exemplo, uma criatura com resistência a magia +2 recebe um bônus de +2 em testes de Fortitude, Reflexos ou Vontade contra magias.',
    },
    {
        key: 'VENENO',
        label: 'Veneno',
        description:
            'Uma das armas naturais da criatura inocula veneno. Um personagem que sofra dano dessa arma natural deve passar num teste de Fortitude (CD Con) ou sofre o efeito do veneno. Veja mais sobre venenos na página 305.',
    },
    {
        key: 'VISAO_NA_PENUMBRA',
        label: 'Visão na Penumbra',
        description:
            'A criatura enxerga no escuro (exceto escuridão mágica) em alcance curto. Ela ignora camuflagem (mas não camuflagem total) por escuridão.',
    },
    {
        key: 'VISAO_NO_ESCURO',
        label: 'Visão no Escuro',
        description:
            'A criatura enxerga no escuro (exceto escuridão mágica) em alcance médio. Ela ignora camuflagem (incluindo camuflagem total) por escuridão.',
    },
    {
        key: 'VULNERABILIDADE_A_DANO',
        label: 'Vulnerabilidade a Dano',
        description:
            'A criatura sofre 1,5 vezes (+50%) o dano do tipo determinado. Por exemplo, se uma criatura com vulnerabilidade a frio sofre um ataque que causa 15 pontos de dano de frio, perde 22 PV (15 x 1,5 = 22).',
    },
]
