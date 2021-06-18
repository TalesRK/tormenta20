export default combat = {
    label: 'Poderes de Combate',
    data: [
        {
            label: 'Acuidade com Arma',
            key: 'ACUIDADE_COM_ARMA',
            description:
                'Quando usa uma arma leve de corpo a corpo, você pode usar seu modificador de Destreza em vez de Força nos testes de ataque e rolagens de dano.',
            restriction: 'Des 13',
        },
        {
            label: 'Arma Secundária Grande',
            key: 'ARMA_SECUNDARIA_GRANDE',
            description:
                'Você pode usar duas armas de uma mão com o poder Estilo de Duas Armas.',
            restriction: 'Estilo de Duas Armas',
        },
        {
            label: 'Arremesso Potente',
            key: 'ARREMESSO_POTENTE',
            description:
                'Quando usa uma arma de arremesso, você pode usar seu modificador de Força em vez de Destreza nos testes de ataque. Se você possuir o poder Ataque Poderoso, poderá usá-lo com armas de arremesso.',
            restriction: 'For 13, Estilo de Arremesso',
        },
        {
            label: 'Ataque Pesado',
            key: 'ATAQUE_PESADO',
            description:
                'Quando faz um ataque corpo a corpo com uma arma de duas mãos, você pode pagar 1 PM. Se fizer isso e acertar o ataque, além do dano você faz uma manobra derrubar ou empurrar contra o alvo como uma ação livre (use o resultado do ataque como o teste de manobra).',
            restriction: 'Estilo de Duas Mãos',
        },
        {
            label: 'Ataque Poderoso',
            key: 'ATAQUE_PODEROSO',
            description:
                'Declare que está usando este poder antes de fazer um ataque corpo a corpo. Você sofre –2 no teste de ataque, mas recebe +5 na rolagem de dano.',
            restriction: 'For 13',
        },
        {
            label: 'Ataque Preciso',
            key: 'ATAQUE_PRECISO',
            description:
                'Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na margem de ameaça e +1 no multiplicador de crítico.',
            restriction: 'Estilo de Uma Arma',
        },
        {
            label: 'Bloqueio com Escudo',
            key: 'BLOQUEIO_COM_ESCUDO',
            description:
                'Quando é atingido por um ataque, habilidade ou magia, você pode gastar 1 PM para receber resistência a dano contra este ataque igual ao bônus na Defesa que seu escudo fornece. Você só pode usar este poder se estiver usando um escudo.',
            restriction: 'Estilo de Arma e Escudo',
        },
        {
            label: 'Carga de Cavalaria',
            key: 'CARGA_DE_CAVALARIA',
            description:
                'Quando faz uma investida montada, você causa +2d8 pontos de dano. Além disso, pode continuar se movendo depois do ataque. Você deve se mover em linha reta e seu movimento máximo ainda é o dobro do seu deslocamento.',
            restriction: 'Ginete',
        },
        {
            label: 'Combate Defensivo',
            key: 'COMBATE_DEFENSIVO',
            description:
                'Quando usa a ação atacar, você pode usar este poder. Se fizer isso, até seu próximo turno, sofre –2 em todos os testes de ataque, mas recebe +5 na Defesa.',
            restriction: 'Int 13',
        },
        {
            label: 'Derrubar Aprimorado',
            key: 'DERRUBAR_APRIMORADO',
            description:
                'Você recebe +2 em testes de ataque para derrubar. Quando derruba uma criatura com essa manobra, pode gastar 1 PM para fazer um ataque extra contra ela.',
            restriction: 'Combate Defensivo',
        },
        {
            label: 'Desarmar Aprimorado',
            key: 'DESARMAR_APRIMORADO',
            description:
                'Você recebe +2 em testes de ataque para desarmar. Quando desarma uma criatura, pode gastar 1 PM para arremessar a arma dela para longe. Para definir onde a arma cai, role 1d8 para a direção (sendo “1” diretamente à sua frente, “2” à frente e à direita e assim por diante, em sentido horário) e 1d6 para a distância (medida em quadrados de 1,5m a partir da criatura desarmada).',
            restriction: 'Combate Defensivo',
        },
        {
            label: 'Disparo Preciso',
            key: 'DISPARO_PRECISO',
            description:
                'Você pode fazer ataques à distância contra oponentes envolvidos em combate corpo a corpo sem sofrer a penalidade padrão de –5 no teste de ataque.',
            restriction: 'Estilo de Disparo ou Estilo de Arremesso',
        },
        {
            label: 'Disparo Rápido',
            key: 'DISPARO_RAPIDO',
            description:
                'Se estiver usando uma arma de ataque à distância e gastar uma ação completa para atacar, você pode fazer um ataque adicional com ela (se puder recarregá- -la como ação livre). Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno.',
            restriction: 'Des 13, Estilo de Disparo ou Estilo de Arremesso',
        },
        {
            label: 'Empunhadura Poderosa',
            key: 'EMPUNHADURA_PODEROSA',
            description:
                'Ao usar uma arma feita para uma categoria de tamanho maior que a sua, a penalidade que você sofre nos testes de ataque diminui para –2 (normalmente, uma criatura que use uma arma feita para uma categoria de tamanho maior sofre uma penalidade de –5 nos testes de ataque).',
            restriction: 'For 17',
        },
        {
            label: 'Encouraçado',
            key: 'ENCOURACADO',
            description:
                'Se estiver usando uma armadura pesada, você recebe +2 na Defesa. Esse bônus aumenta em +2 para cada outro poder que você possua que tenha Encouraçado como pré-requisito.',
            restriction: 'Proficiência com armaduras pesadas',
        },
        {
            label: 'Esquiva',
            key: 'ESQUIVA',
            description: 'Você recebe +2 em Defesa e Reflexos.',
            restriction: 'Des 13',
        },
        {
            label: 'Estilo de Arma e Escudo',
            key: 'ESTILO_DE_ARMA_E_ESCUDO',
            description:
                'Se você estiver usando um escudo, o bônus na Defesa que ele fornece aumenta em +2.',
            restriction: 'Treinado em Luta, proficiência com escudos',
        },
        {
            label: 'Estilo de Arremesso',
            key: 'ESTILO_DE_ARREMESSO',
            description:
                'Você pode sacar armas de arremesso como uma ação livre e recebe +2 nas rolagens de dano com elas.',
            restriction: 'Treinado em Pontaria',
        },
        {
            label: 'Estilo de Ataque à Distância',
            key: 'ESTILO_DE_ATAQUE_A_DISTANCIA',
            description:
                'Se estiver usando uma arma de disparo, você soma o bônus de Destreza nas rolagens de dano.',
            restriction: 'Treinado em Pontaria',
        },
        {
            label: 'Estilo de Duas Armas',
            key: 'ESTILO_DE_DUAS_ARMAS',
            description:
                'Se estiver usando duas armas (e pelo menos uma delas for leve) e fizer a ação atacar, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno. Se você possuir Ambidestria, não sofre essa penalidade.',
            restriction: 'Des 15, treinado em Luta',
        },
        {
            label: 'Estilo de Duas Mãos',
            key: 'ESTILO_DE_DUAS_MAOS',
            description:
                'Se estiver usando uma arma corpo a corpo com as duas mãos, você recebe +5 nas rolagens de dano. Este poder não pode ser usado com armas leves.',
            restriction: 'For 15, Treinado em Luta',
        },
        {
            label: 'Estilo de Uma Arma',
            key: 'ESTILO_DE_UMA_ARMA',
            description:
                'Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na Defesa e nos testes de ataque com essa arma (exceto ataques desarmados).',
            restriction: 'Treinado em Luta',
        },
        {
            label: 'Estilo Desarmado',
            key: 'ESTILO_DESARMADO',
            description:
                'Seus ataques desarmados causam 1d6 pontos de dano e podem causar dano letal ou não letal (sem penalidades).',
            restriction: 'Treinado em Luta',
        },
        {
            label: 'Fanático',
            key: 'FANATICO',
            description:
                'Seu deslocamento não é reduzido por usar armaduras pesadas.',
            restriction: '12º nível de personagem, Encouraçado',
        },
        {
            label: 'Finta Aprimorada',
            key: 'FINTA_APRIMORADA',
            description:
                'Você recebe +2 em testes de Enganação para fintar e pode fintar como uma ação de movimento.',
            restriction: 'Treinado em Enganação e Luta',
        },
        {
            label: 'Foco em Arma',
            key: 'FOCO_EM_ARMA',
            description:
                'Escolha uma arma. Você recebe +2 em testes de ataque com essa arma. Você pode escolher este poder outras vezes para armas diferentes.',
            restriction: 'Proficiência com a arma',
        },
        {
            label: 'Ginete',
            key: 'GINETE',
            description:
                'Você passa automaticamente em testes de Cavalgar para não cair da montaria quando sofre dano. Além disso, não sofre penalidades para atacar à distância ou lançar magias quando montado.',
            restriction: 'Treinado em Cavalgar',
        },
        {
            label: 'Inexpugnável',
            key: 'INEXPUGNAVEL',
            description:
                'Se estiver usando uma armadura pesada, você recebe +2 em todos os testes de resistência.',
            restriction: 'Encouraçado, 6º nível de personagem',
        },
        {
            label: 'Mira Apurada',
            key: 'MIRA_APURADA',
            description:
                'Você pode gastar uma ação de movimento para mirar. Se fizer isso, recebe +2 em testes de ataque e na margem de ameaça com ataques à distância até o fim do turno.',
            restriction: 'Sab 13, Disparo Preciso',
        },
        {
            label: 'Presença Aterradora',
            key: 'PRESENCA_ATERRADORA',
            description:
                'Você pode gastar uma ação padrão e 1 PM para assustar todas as criaturas a sua escolha em alcance curto. Veja a perícia Intimidação para as regras de assustar.',
            restriction: 'Treinado em Intimidação',
        },
        {
            label: 'Proficiência',
            key: 'PROFICIENCIA',
            description:
                'Escolha uma proficiência: armas marciais, armas de fogo, armaduras pesadas ou escudos (se for proficiente em armas marciais, você também pode escolher armas exóticas). Você recebe essa proficiência. Você pode escolher este poder outras vezes para proficiências diferentes.',
        },
        {
            label: 'Quebrar Aprimorado',
            key: 'QUEBRAR_APRIMORADO',
            description:
                'Você recebe +2 em testes de ataque para quebrar. Quando reduz os PV de uma arma para 0 ou menos, você pode gastar 1 PM para realizar um ataque extra contra o usuário dela. O ataque adicional usa os mesmos valores de ataque e dano, mas os dados devem ser rolados novamente.',
            restriction: 'Ataque Poderoso',
        },
        {
            label: 'Reflexos de Combate',
            key: 'REFLEXOS_DE_COMBATE',
            description:
                'Você ganha uma ação de movimento extra no seu primeiro turno de cada combate.',
            restriction: 'Des 13',
        },
        {
            label: 'Saque Rápido',
            key: 'SAQUE_RAPIDO',
            description:
                'Você recebe +2 em Iniciativa e pode sacar ou guardar itens como uma ação livre (em vez de ação de movimento). Além disso, a ação que você gasta para recarregar uma arma de disparo diminui em uma categoria (ação completa para padrão, padrão para movimento, movimento para livre).',
            restriction: 'Treinado em Iniciativa',
        },
        {
            label: 'Trespassar',
            key: 'TRESPASSAR',
            description:
                'Quando você faz um ataque corpo a corpo e reduz os pontos de vida do alvo para 0 ou menos, pode gastar 1 PM para fazer um ataque adicional contra outra criatura dentro do seu alcance. O ataque adicional usa os mesmos valores de ataque e dano, mas os dados devem ser rolados novamente.',
            restriction: 'Ataque Poderoso',
        },
        {
            label: 'Vitalidade',
            key: 'VITALIDADE',
            description:
                'Você recebe +1 PV por nível de personagem e +2 em Fortitude.',
            restriction: 'Con 13',
        },
    ],
}

export default destiny = {
    label: 'Poderes de Destino',
    data: [
        {
            label: 'Acrobático',
            key: 'ACROBATICO',
            description:
                'Você pode usar seu modificador de Destreza em vez de Força em testes de Atletismo. Além disso, terreno difícil não reduz seu deslocamento nem o impede de realizar investidas.',
            restriction: 'Des 15',
        },
        {
            label: 'Ao Sabor do Destino',
            key: 'AO_SABOR_DO_DESTINO',
            description:
                'Você recebe diversos benefícios, de acordo com seu nível de personagem e a tabela abaixo.,\n5°: +2 em uma perícia;\n 6°: +1 na Defesa;\n 7°: +1 nas rolagens de dano;\n 8°: +2 em um atributo;\n 10°: +2 em uma perícia;\n 11°: +2 na Defesa;\n 12°: +2 nas rolagens de dano;\n 13°: +2 em um atributo;\n 15°: +2 em uma perícia;\n 16°: +3 na Defesa;\n 17°: +3 nas rolagens de dano;\n 18°: +2 em um atributo;\n 20°: +2 em uma perícia;\n Os bônus não são cumulativos (os bônus em atributos e perícias devem ser aplicados num atributo ou perícia diferente a cada vez). Quando você utiliza voluntariamente qualquer item mágico (exceto poções), perde o benefício deste poder até o fim da aventura. Você ainda pode lançar magias, receber magias benéficas ou beneficiar-se de itens usados por outros — por exemplo, pode “ir de carona” em um tapete voador, mas não pode você mesmo conduzi-lo.',
            restriction: '5º nível de personagem',
        },
        {
            label: 'Aparência Inofensiva',
            key: 'APARENCIA_INOFENSIVA',
            description:
                'A primeira criatura inteligente (Int 3 ou mais) que atacar você em uma cena deve fazer um teste de Vontade (CD Car). Se falhar, perderá sua ação. Este poder só funciona uma vez por cena; independentemente de a criatura falhar ou não no teste, poderá atacá-lo nas rodadas seguintes.',
            restriction: 'Car 13',
        },
        {
            label: 'Atlético',
            key: 'ATLETICO',
            description:
                'Você recebe +2 em Atletismo e seu deslocamento aumenta em +3m.',
            restriction: 'For 15',
        },
        {
            label: 'Atraente',
            key: 'ATRAENTE',
            description:
                'Você recebe +2 em testes de perícias baseadas em Carisma contra criaturas que possam se sentir fisicamente atraídas por você.',
            restriction: 'Car 13',
        },
        {
            label: 'Comandar',
            key: 'COMANDAR',
            description:
                'Você pode gastar uma ação de movimento e 1 PM para gritar ordens para seus aliados em alcance médio. Eles recebem +1 em testes de perícia até o fim da cena.',
            restriction: 'Car 13',
        },
        {
            label: 'Foco em Perícia',
            key: 'FOCO_EM_PERICIA',
            description:
                'Escolha uma perícia. Quando faz um teste dessa perícia, você pode gastar 1 PM para rolar dois dados e usar o melhor resultado. Você pode escolher este poder outras vezes para perícias diferentes. Este poder não pode ser aplicado em Luta e Pontaria (mas veja Foco em Arma).',
            restriction: 'Treinado na perícia escolhida',
        },
        {
            label: 'Investigador',
            key: 'INVESTIGADOR',
            description:
                'Você recebe +2 em Investigação e soma seu bônus de Inteligência em Intuição.',
            restriction: 'Int 13',
        },
        {
            label: 'Lobo Solitário',
            key: 'LOBO_SOLITARIO',
            description:
                'Você recebe +1 em testes de perícia e Defesa se estiver sem nenhum aliado em alcance curto. Você não sofre penalidade por usar a perícia Cura em si mesmo.',
        },
        {
            label: 'Medicina',
            key: 'MEDICINA',
            description:
                'Você pode gastar uma ação completa para fazer um teste de Cura (CD 15) em uma criatura. Se você passar, ela recupera 1d6 PV, mais 1d6 para cada 5 pontos pelos quais o resultado do teste exceder a CD (2d6 com um resultado 20, 3d6 com um resultado 25 e assim por diante). Você só pode usar este poder uma vez por dia numa mesma criatura.',
            restriction: 'Sab 13, treinado em Cura',
        },
        {
            label: 'Parceiro',
            key: 'PARCEIRO',
            description:
                'Você possui um parceiro animal ou humanoide que o acompanha em aventuras. Escolha os detalhes dele, como nome, aparência e personalidade. Em termos de jogo, é um aliado iniciante de um tipo a sua escolha (veja a página [[Aliados T20|Aliados]]). O parceiro obedece às suas ordens e se arrisca para ajudá-lo. Entretanto, se for maltratado, pode parar de segui-lo (de acordo com o mestre). Se perder seu parceiro, você recebe outro no início da próxima aventura.',
            restriction:
                'treinado em Adestramento (parceiro animal) ou Diplomacia (parceiro humanoide), 6º nível de personagem.',
        },
        {
            label: 'Sentidos Aguçados',
            key: 'SENTIDOS_AGUCADOS',
            description:
                'Você recebe +2 em Percepção, não fica desprevenido contra inimigos que não possa ver e, sempre que erra um ataque devido a camuflagem ou camuflagem total, pode rolar mais uma vez o dado da chance de falha. ',
            restriction: 'Sab 13, treinado em Percepção',
        },
        {
            label: "Sortudo'",
            key: 'SORTUDO',
            description:
                'Você pode gastar 3 PM para rolar novamente um teste recém realizado (apenas uma vez por teste).',
        },
        {
            label: 'Surto Heroico',
            key: 'SURTO_HEROICO',
            description:
                'Uma vez por rodada, você pode gastar 5 PM para realizar uma ação padrão ou de movimento adicional.',
        },
        {
            label: 'Torcida',
            key: 'TORCIDA',
            description:
                'Você recebe +2 em testes de perícia e Defesa quando tem a torcida a seu favor. Entenda-se por “torcida” qualquer número de criaturas inteligentes em alcance médio que não esteja realizando nenhuma ação além de torcer por você.',
            restriction: 'Car 13',
        },
        {
            label: 'Treinamento em Perícia',
            key: 'TREINAMENTO_EM_PERICIA',
            description:
                'Você se torna treinado em uma perícia a sua escolha. Você pode escolher este poder outras vezes para perícias diferentes.',
        },
        {
            label: 'Venefício',
            key: 'VENEFICIO',
            description:
                'Quando usa um veneno, você não corre risco de se envenenar acidentalmente. Além disso, a CD para resistir aos seus venenos aumenta em +2.',
            restriction: 'Treinado em Ofício (alquimia)',
        },
        {
            label: 'Vontade de Ferro',
            key: 'VONTADE_DE_FERRO',
            description:
                'Você recebe +1 PM para cada dois níveis de personagem e +2 em Vontade.',
            restriction: 'Sab 13',
        },
    ],
}

export default magic = {
    label: 'Poderes de Magia',
    description:
        'Todos os poderes deste grupo possuem como pré-requisito lançar magias. Estes poderes acrescentam melhorias às magias conhecidas pelo conjurador. Você pode aplicar quantos aprimoramentos quiser, desde que não ultrapasse seu limite de PM.',
    data: [
        {
            label: 'Celebrar Ritual',
            key: 'CELEBRAR_RITUAL',
            description:
                'Você pode lançar magias na forma de rituais. Isso dobra seu limite de PM, mas muda a execução para 1 hora (ou o dobro, o que for maior). Você gasta T$ 10 em incensos, oferendas etc. por PM do custo total. Após esse gasto, paga apenas metade do custo em PM da magia (após aplicar quaisquer outros efeitos de redução). Assim, um arcanista de 8º nível pode lançar uma magia de 16 PM gastando T$ 160 e 8 PM.',
            restriction:
                'treinado em Misticismo ou Religião, 8º nível de personagem.',
        },
        {
            label: 'Escrever Pergaminho',
            key: 'ESCREVER_PERGAMINHO',
            description:
                'Você pode usar a perícia Ofício (escriba) para fabricar pergaminhos com magias que conheça. Veja Ofício em [[Perícias T20|Perícias]] para a regra de fabricar itens e a página [[Recompensas T20|Recompensas]] para a regra de pergaminhos. De acordo com o mestre, você pode usar outros objetos similares, como runas, tabuletas de argila etc.',
            restriction:
                'habilidade de classe Magias, treinado em Ofício (escriba).',
        },
        {
            label: 'Foco em Magia',
            key: 'FOCO_EM_MAGIA',
            description:
                'Escolha uma magia. Seu custo diminui em –1 PM (cumulativo com outras reduções de custo). Você pode escolher este poder outras vezes para magias diferentes.',
        },
        {
            label: 'Magia Acelerada',
            type: 'Aprimoramento',
            key: 'MAGIA_ACELERADA_APRIMORAMENTO',
            description:
                'Muda a execução da magia para ação livre. Você só pode aplicar este aprimoramento em magias com execução de movimento, padrão ou completa e só pode lançar uma magia como ação livre por rodada. Custo: +4 PM.',
            restriction: 'Lançar magias de 2º círculo',
        },
        {
            label: 'Magia Ampliada',
            type: 'Aprimoramento',
            key: 'MAGIA_AMPLIADA_APRIMORAMENTO',
            description:
                'Aumenta o alcance da magia em um passo (de curto para médio, de médio para longo) ou dobra a área de efeito da magia. Por exemplo, uma Bola de Fogo ampliada tem seu alcance aumentado para longo ou sua área aumentada para 12m de raio. Custo: +2 PM.',
        },
        {
            label: 'Magia Discreta',
            type: 'Aprimoramento',
            key: 'MAGIA_DISCRETA_APRIMORAMENTO',
            description:
                'Você lança a magia sem gesticular e falar, usando apenas concentração. Isso permite lançar magias com as mãos presas, amordaçado etc. Também permite lançar magias arcanas usando armadura sem teste de Misticismo. Outros personagens só percebem que você lançou uma magia se passarem num teste de Misticismo (CD 20). Custo: +2 PM.',
        },
        {
            label: 'Magia Ilimitada',
            key: 'MAGIA_ILIMITADA',
            description:
                'Você soma seu modificador do atributo-chave no limite de PM que pode gastar numa magia. Por exemplo, um mago de 5º nível com Int 18 (+4) e este poder pode gastar até 9 PM em cada magia.',
        },
        {
            label: 'Preparar Poção',
            key: 'PREPARAR_POCAO',
            description:
                'Você pode usar a perícia Ofício (alquimia) para fabricar poções com magias que conheça de 1º e 2º círculos. Veja Ofício em [[Perícias T20|Perícias]] para a regra de fabricar itens e a página [[Recompensas T20|Recompensas]] para a regra de poções.',
            restriction:
                'Habilidade de classe Magias, treinado em Ofício (alquimia).',
        },
    ],
}

export default granted = {
    label: 'Poderes Concedidos',
    data: [
        {
            label: 'Afinidade com a Tormenta',
            type: 'Tormenta',
            key: 'AFINIDADE_COM_A_TORMENTA_TORMENTA',
            description:
                'Você recebe +10 em testes de resistência contra efeitos da Tormenta e de suas criaturas.',
        },
        {
            label: 'Anfíbio',
            type: 'Oceano',
            key: 'ANFIBIO_OCEANO',
            description:
                'Você pode respirar embaixo d’água e adquire deslocamento de natação igual a seu deslocamento terrestre.',
        },
        {
            label: 'Armas da ambição',
            type: 'Ambição',
            key: 'ARMAS_DA_AMBICAO_AMBICAO',
            description:
                'Você recebe +1 em testes de ataque com armas nas quais é proficiente.',
        },
        {
            label: 'Arsenal das profundezas',
            type: 'Oceano',
            key: 'ARSENAL_DAS_PROFUNDEZAS_OCEANO',
            description:
                'Você recebe +2 nas rolagens de dano com azagaias, lanças e tridentes.',
        },
        {
            label: 'Astúcia da Serpente',
            type: 'Traição',
            key: 'ASTUCIA_DA_SERPENTE_TRAICAO',
            description: 'Você recebe +2 em Enganação e Intuição.',
        },
        {
            label: 'Ataque Piedoso',
            type: 'Vida, Ressurreição',
            key: 'ATAQUE_PIEDOSO_VIDA_RESSURREICAO',
            description:
                'Você pode usar armas de corpo a corpo para causar dano não letal sem sofrer a penalidade de –5 no teste de ataque.',
        },
        {
            label: 'Aura de Medo',
            type: 'Dragões',
            key: 'AURA_DE_MEDO_DRAGOES',
            description:
                'Você pode gastar 2 PM para gerar uma aura de medo com alcance curto e duração até o fim da cena. Todos os inimigos que entrem na aura devem fazer um teste de Vontade (CD Car) ou ficam abalados até o fim da cena. Uma criatura que passe no teste de Vontade fica imune a esta habilidade por um dia.',
        },
        {
            label: 'Aura de Paz',
            type: 'Paz',
            key: 'AURA_DE_PAZ_PAZ',
            description:
                'Você pode gastar 2 PM para gerar uma aura de paz com alcance curto e duração de uma cena. Qualquer inimigo dentro da aura que tente fazer uma ação hostil contra você deve fazer um teste de Vontade (CD Car). Se falhar, perderá sua ação. Se passar, fica imune a esta habilidade por um dia.',
        },
        {
            label: 'Aura Restauradora',
            type: 'Vida',
            key: 'AURA_RESTAURADORA_VIDA',
            description:
                'Você e seus aliados em alcance curto recuperam duas vezes mais pontos de vida por descanso.',
        },
        {
            label: 'Bênção do Mana',
            type: 'Magia',
            key: 'BENCAO_DO_MANA_MAGIA',
            description: 'Você recebe +3 pontos de mana.',
        },
        {
            label: 'Carícia Sombria',
            type: 'Noite',
            key: 'CARICIA_SOMBRIA_NOITE',
            description:
                'Você pode gastar 1 PM e uma ação padrão para cobrir sua mão com energia negativa e tocar uma criatura em alcance corpo a corpo. A criatura sofre 2d6 pontos de dano de trevas (Fortitude CD Sab reduz à metade) e você recupera PV iguais à metade do dano causado. Você pode aprender Toque Vampírico como uma magia divina. Se fizer isso, o custo dela diminui em –1 PM.',
        },
        {
            label: 'Centelha Mágica',
            type: 'Magia',
            key: 'CENTELHA_MAGICA_MAGIA',
            description:
                'Escolha uma magia arcana ou divina de 1º círculo. Você aprende e pode lançar essa magia.',
            restriction: 'Não possuir a habilidade de classe Magias',
        },
        {
            label: 'Conhecimento Enciclopédico',
            type: 'Conhecimento',
            key: 'CONHECIMENTO_ENCICLOPEDICO_CONHECIMENTO',
            description:
                'Você se torna treinado em duas perícias baseadas em Inteligência a sua escolha.',
        },
        {
            label: 'Conjurar Arma',
            type: 'Guerra',
            key: 'CONJURAR_ARMA_GUERRA',
            description:
                'Você pode gastar 1 PM para invocar uma arma corpo a corpo ou de arremesso com a qual seja proficiente. A arma surge em sua mão, recebe um bônus de +1 em testes de ataque e rolagens de dano e dura pela cena. Você não pode criar armas de disparo, mas pode criar 20 projéteis (flechas, virotes etc.).',
        },
        {
            label: 'Coragem Total',
            type: 'Guerra, Justiça, Honra, Ambição',
            key: 'CORAGEM_TOTAL_GUERRA_JUSTICA_HONRA_AMBICAO',
            description:
                'Você é imune a efeitos de medo, mágicos ou não. Este poder não elimina fobias raciais (como o medo de altura dos minotauros).',
        },
        {
            label: 'Cura Gentil',
            type: 'Vida',
            key: 'CURA_GENTIL_VIDA',
            description:
                'Você adiciona seu bônus de Carisma (mínimo +1) aos PV restaurados por suas magias de cura.',
        },
        {
            label: 'Curandeira Perfeita',
            type: 'Vida',
            key: 'CURANDEIRA_PERFEITA_VIDA',
            description:
                'Você sempre pode escolher 10 em testes de Cura. Além disso, pode usar essa perícia mesmo sem um kit de medicamentos. Se usar o kit, recebe +2 no teste de Cura.',
        },
        {
            label: 'Dedo Verde',
            type: 'Natureza',
            key: 'DEDO_VERDE_NATUREZA',
            description: 'Você aprende e pode lançar Controlar Plantas.',
        },
        {
            label: 'Descanso Natural',
            type: 'Natureza',
            key: 'DESCANSO_NATURAL_NATUREZA',
            description:
                'Para você, dormir ao relento conta como uma estalagem confortável.',
        },
        {
            label: 'Dom da Imortalidade',
            type: 'Ressurreição',
            key: 'DOM_DA_IMORTALIDADE_RESSURREICAO',
            description:
                'Você é imortal. Sempre que morre, não importando o motivo, volta à vida após 3d6 dias. Você não perde níveis de experiência. Apenas paladinos podem escolher este poder. Um personagem pode ter Dom da Imortalidade ou Dom da Ressurreição, mas não ambos.',
        },
        {
            label: 'Dom da Profecia',
            type: 'Ressurreição',
            key: 'DOM_DA_PROFECIA_RESSURREICAO',
            description:
                'Você pode lançar Augúrio. Você também pode gastar 2 PM para receber +2 em um teste.',
        },
        {
            label: 'Dom da Ressurreição',
            type: 'Ressurreição',
            key: 'DOM_DA_RESSURREICAO_RESSURREICAO',
            description:
                'Você pode gastar uma ação completa e todos os PM que possui (mínimo 1 PM) para tocar o corpo de uma criatura morta há menos de um ano e ressuscitá-la. A criatura volta à vida com 1 PV e 0 PM, e perde 2 pontos de Constituição permanentemente. Este poder só pode ser usado uma vez em cada criatura. Apenas clérigos podem escolher este poder. Um personagem pode ter Dom da Imortalidade ou Dom da Ressurreição, mas não ambos.',
        },
        {
            label: 'Dom da Verdade',
            type: 'Justiça',
            key: 'DOM_DA_VERDADE_JUSTICA',
            description:
                'Você pode pagar 1 PM para receber +5 em testes de Intuição até o fim da cena.',
        },
        {
            label: 'Escamas Dracônicas',
            type: 'Dragões',
            key: 'ESCAMAS_DRACONICAS_DRAGOES',
            description: 'Você recebe +1 na Defesa.',
        },
        {
            label: 'Escudo Mágico',
            type: 'Magia',
            key: 'ESCUDO_MAGICO_MAGIA',
            description:
                'Quando lança uma magia, você recebe +2 na Defesa até o início do seu próximo turno.',
        },
        {
            label: 'Espada Justiceira',
            type: 'Justiça',
            key: 'ESPADA_JUSTICEIRA_JUSTICA',
            description:
                'Você pode gastar 1 PM para encantar sua espada (ou outra arma corpo a corpo de corte que esteja empunhando). Ela recebe +1 em testes de ataque e rolagens de dano até o fim da cena.',
        },
        {
            label: 'Espada Solar',
            type: 'Sol',
            key: 'ESPADA_SOLAR_SOL',
            description:
                'Você pode gastar 1 PM para fazer uma arma corpo a corpo de corte que esteja empunhando causar +1d6 de dano por fogo até o fim da cena.',
        },
        {
            label: 'Farsa do Fingidor',
            type: 'Trapaça',
            key: 'FARSA_DO_FINGIDOR_TRAPACA',
            description: 'Você aprende e pode lançar Criar Ilusão.',
        },
        {
            label: 'Forma de Macaco',
            type: 'Trapaça',
            key: 'FORMA_DE_MACACO_TRAPACA',
            description:
                'Você pode gastar uma ação completa e 2 PM para se transformar em um macaco. Você adquire tamanho Minúsculo (o que fornece +5 em Furtividade e –5 em testes de manobra) e recebe deslocamento de escalar 9m. Seu equipamento desaparece (e você perde seus benefícios) até você voltar ao normal, mas suas outras estatísticas não são alteradas. A transformação dura indefinidamente, mas termina caso você faça um ataque, lance uma magia ou sofra dano.',
        },
        {
            label: 'Fúria Divina',
            type: 'Goblinóides',
            key: 'FURIA_DIVINA_GOBLINOIDES',
            description:
                'Você pode gastar 2 PM para invocar uma fúria selvagem, tornando-se temível em combate. Você recebe +2 em testes de ataque e rolagens de dano corpo a corpo, mas não pode executar nenhuma ação que exija paciência ou concentração (como usar a perícia Furtividade ou lançar magias). A Fúria Divina termina se, ao fim da rodada, você não tiver atacado nem sido alvo de um efeito hostil.',
        },
        {
            label: 'Golpista Divino',
            type: 'Trapaça',
            key: 'GOLPISTA_DIVINO_TRAPACA',
            description: 'Você recebe +2 em Enganação e Ladinagem.',
        },
        {
            label: 'Habitante do Deserto',
            type: 'Sol',
            key: 'HABITANTE_DO_DESERTO_SOL',
            description:
                'Você recebe resistência a fogo 5 e pode pagar 1 PM para criar água pura e potável suficiente para um odre (ou outro recipiente pequeno).',
        },
        {
            label: 'Inimigo da Noite',
            type: 'Sol',
            key: 'INIMIGO_DA_NOITE_SOL',
            description:
                'Seus ataques e habilidades causam +1d6 pontos de dano contra mortos-vivos.',
        },
        {
            label: 'Kiai Divino',
            type: 'Honra',
            key: 'KIAI_DIVINO_HONRA',
            description:
                'Quando faz um ataque corpo a corpo, você pode pagar 2 PM. Se acertar o ataque, causa dano máximo.',
        },
        {
            label: 'Liberdade Divina',
            type: 'Ambição',
            key: 'LIBERDADE_DIVINA_AMBICAO',
            description:
                'Você pode gastar 2 PM e uma reação para lançar Libertação com alcance pessoal e duração de 1 rodada.',
        },
        {
            label: 'Manto da Penumbra',
            type: 'Noite',
            key: 'MANTO_DA_PENUMBRA_NOITE',
            description: 'Você aprende e pode lançar Escuridão.',
        },
        {
            label: 'Mente Analítica',
            type: 'Conhecimento',
            key: 'MENTE_ANALITICA_CONHECIMENTO',
            description: 'Você recebe +2 em Intuição e Vontade.',
        },
        {
            label: 'Mente Vazia',
            type: 'Honra',
            key: 'MENTE_VAZIA_HONRA',
            description: 'Você recebe +2 em Iniciativa e Vontade.',
        },
        {
            label: 'Mestre dos Mares',
            type: 'Oceano',
            key: 'MESTRE_DOS_MARES_OCEANO',
            description:
                'Você pode falar com animais aquáticos (como o efeito da magia Voz Divina) e aprende e pode lançar Acalmar Animal, mas só contra criaturas aquáticas.',
        },
        {
            label: 'Olhar Amedrontador',
            type: 'Monstros, Goblinóides',
            key: 'OLHAR_AMEDRONTADOR_MONSTROS_GOBLINOIDES',
            description: 'Você aprende e pode lançar Amedrontar.',
        },
        {
            label: 'Palavras de Bondade',
            type: 'Paz',
            key: 'PALAVRAS_DE_BONDADE_PAZ',
            description: 'Você aprende e pode lançar Enfeitiçar.',
        },
        {
            label: 'Percepção Temporal',
            type: 'Tormenta',
            key: 'PERCEPCAO_TEMPORAL_TORMENTA',
            description:
                'Você pode gastar 3 PM para adicionar seu bônus de Sabedoria (mínimo +1, limitado por seu nível) a seus ataques, Defesa e testes de Reflexos até o fim da cena.',
        },
        {
            label: 'Poder Oculto',
            type: 'Caos',
            key: 'PODER_OCULTO_CAOS',
            description:
                'Você pode gastar uma ação de movimento e 2 PM para invocar a força, a rapidez ou o vigor dos loucos. Role 1d6 para receber +4 em Força (1 ou 2), Destreza (3 ou 4) ou Constituição (5 ou 6) até o fim da cena. Você pode usar este poder várias vezes, cada vez gastando uma ação de movimento e 2 PM.',
        },
        {
            label: 'Presas venenosas',
            type: 'Traição',
            key: 'PRESAS_VENENOSAS_TRAICAO',
            description:
                'Você pode gastar uma ação de movimento e 1 PM para envenenar uma arma corpo a corpo que esteja empunhando. Em caso de acerto, a arma causa 1d12 pontos de dano de veneno. A arma permanece envenenada até atingir uma criatura ou até o fim da cena, o que acontecer primeiro.',
        },
        {
            label: 'Rejeição Divina',
            type: 'Tormenta',
            key: 'REJEICAO_DIVINA_TORMENTA',
            description:
                'Você recebe +5 em testes de resistência contra magias divinas.',
        },
        {
            label: 'Sangue de Ferro',
            type: 'Guerra',
            key: 'SANGUE_DE_FERRO_GUERRA',
            description:
                'Você pode pagar 2 PM para receber +2 em rolagens de dano e resistência a dano 5 até o fim da cena.',
        },
        {
            label: 'Sangue Ofídico',
            type: 'Traição',
            key: 'SANGUE_OFIDICO_TRAICAO',
            description:
                'Você recebe resistência a veneno 5 e a CD para resistir aos seus venenos aumenta em +2.',
        },
        {
            label: 'Servos do Dragão',
            type: 'Dragões',
            key: 'SERVOS_DO_DRAGAO_DRAGOES',
            description:
                'Você pode gastar uma ação completa e 2 PM para invocar 2d4+1 kobolds em espaços desocupados em alcance curto. Você pode usar uma ação de movimento para fazer os kobolds andarem (eles têm deslocamento 9m) ou uma ação padrão para fazê-los causar dano a criaturas adjacentes (1d6–1 pontos de dano de perfuração cada). Os kobolds têm For 8, Des 14, 1 PV, não têm valor de Defesa ou testes de resistência e falham automaticamente em qualquer teste oposto. Eles desaparecem quando morrem ou no fim da cena. Os kobolds não agem sem receber uma ordem. Usos criativos para criaturas invocadas fora de combate ficam a critério do mestre.',
        },
        {
            label: 'Sorte dos loucos',
            type: 'Caos',
            key: 'SORTE_DOS_LOUCOS_CAOS',
            description:
                'Você pode pagar 1 PM para rolar novamente um teste recém realizado. Se ainda assim falhar no teste, você perde 1d6 PM.',
        },
        {
            label: 'Talento Artístico',
            type: 'Paz',
            key: 'TALENTO_ARTISTICO_PAZ',
            description: 'Você recebe +2 em Atuação e Diplomacia.',
        },
        {
            label: 'Teurgista Místico',
            type: 'Magia',
            key: 'TEURGISTA_MISTICO_MAGIA',
            description:
                'Até uma magia de cada círculo que você aprender poderá ser escolhida entre magias divinas (se você for um conjurador arcano) ou entre magias arcanas (se for um conjurador divino).',
            restriction: 'Habilidade de classe Magias',
        },
        {
            label: 'Transmissão da Loucura',
            type: 'Caos',
            key: 'TRANSMISSAO_DA_LOUCURA_CAOS',
            description: 'Você pode lançar Sussurros Insanos (CD Car).',
        },
        {
            label: 'Tropas Duyshidakk',
            type: 'Goblinóides',
            key: 'TROPAS_DUYSHIDAKK_GOBLINOIDES',
            description:
                'Você pode gastar uma ação completa e 2 PM para invocar 1d4+1 goblinoides em espaços desocupados em alcance curto. Você pode usar uma ação de movimento para fazer os goblinoides andarem (eles têm deslocamento 9m) ou uma ação padrão para fazê-los causar dano a criaturas adjacentes (1d6+1 pontos de dano de corte cada). Os goblinoides têm For 14, Des 14, 1 PV, não têm valor de Defesa ou testes de resistência e falham automaticamente em qualquer teste oposto. Eles desaparecem quando morrem ou no fim da cena. Os goblinoides não agem sem receber uma ordem. Usos criativos para criaturas invocadas fora de combate ficam a critério do mestre.',
        },
        {
            label: 'Urro Divino',
            type: 'Monstros',
            key: 'URRO_DIVINO_MONSTROS',
            description:
                'Quando faz um ataque ou lança uma magia, você pode pagar 1 PM para somar seu modificador de Constituição (mínimo +1) à rolagem de dano desse ataque ou magia.',
        },
        {
            label: 'Visão nas Trevas',
            type: 'Noite',
            key: 'VISAO_NAS_TREVAS_NOITE',
            description:
                'Você enxerga perfeitamente no escuro, incluindo em magias de escuridão.',
        },
        {
            label: 'Voz da Civilização',
            type: 'Conhecimento',
            key: 'VOZ_DA_CIVILIZACAO_CONHECIMENTO',
            description: 'Você está sempre sob efeito de Compreensão.',
        },
        {
            label: 'Voz da Natureza',
            type: 'Natureza',
            key: 'VOZ_DA_NATUREZA_NATUREZA',
            description:
                'Você pode falar com animais (como o efeito da magia Voz Divina) e aprende e pode lançar Acalmar Animal, mas só contra animais.',
        },
        {
            label: 'Voz dos Monstros',
            type: 'Monstros',
            key: 'VOZ_DOS_MONSTROS_MONSTROS',
            description:
                'Você conhece os idiomas de todos os monstros inteligentes (criaturas do tipo monstro com Int 3 ou mais) e pode se comunicar livremente com monstros não inteligentes (Int 1 ou 2), como se estivesse sob efeito da magia Voz Divina.',
        },
    ],
}

export default tormenta = {
    label: 'Poderes da Tormenta',
    description:
        'Estes poderes oferecem habilidades ligadas à tempestade rubra. Para cada poder da Tormenta, você perde um ponto de Carisma. Essa perda representa deformidades físicas e o desaparecimento gradual de sua própria identidade. Um personagem reduzido a Car 0 torna-se um NPC sob controle do mestre.',
    data: [
        {
            label: 'Anatomia Insana',
            key: 'ANATOMIA_INSANA',
            description:
                'Você tem 25% de chance (resultado “1” em 1d4) de ignorar o dano adicional de um acerto crítico ou ataque furtivo. A chance aumenta em +25% para cada dois outros poderes da Tormenta que você possui.',
        },
        {
            label: 'Antenas',
            key: 'ANTENAS',
            description:
                'Você recebe +1 em testes de Iniciativa, Percepção e Vontade. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.',
        },
        {
            label: 'Armamento Aberrante',
            key: 'ARMAMENTO_ABERRANTE',
            description:
                'Você pode gastar uma ação de movimento e 1 PM para produzir uma arma orgânica macabra — ela brota do seu braço, ombro ou costas como uma planta grotesca e então se desprende. Você pode produzir qualquer arma corpo a corpo ou de arremesso com a qual seja proficiente. O dano da arma aumenta em um passo para cada dois outros poderes da Tormenta que você possui. A arma dura pela cena, então se desfaz numa poça de gosma.',
            restriction: 'Outro poder da Tormenta',
        },
        {
            label: 'Articulações Flexíveis',
            key: 'ARTICULACOES_FLEXIVEIS',
            description:
                'Você recebe +1 em Acrobacia, Furtividade e Reflexos. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.',
        },
        {
            label: 'Asas Insetoides',
            key: 'ASAS_INSETOIDES',
            description:
                'Você pode gastar 1 PM para receber deslocamento de voo 9m até o fim da rodada. O deslocamento aumenta em 1,5m para cada outro poder da Tormenta que você possui.',
            restriction: 'Quatro outros poderes da Tormenta',
        },
        {
            label: 'Carapaça',
            key: 'CARAPACA',
            description:
                'Sua pele é recoberta por placas quitinosas. Você recebe +1 na Defesa. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.',
        },
        {
            label: 'Corpo Aberrante',
            key: 'CORPO_ABERRANTE',
            description:
                'Crostas vermelhas em várias partes de seu corpo tornam seus ataques mais perigosos. Seu dano desarmado aumenta em um passo, mais um passo para cada quatro outros poderes da Tormenta que você possui.',
            restriction: 'Outro poder da Tormenta',
        },
        {
            label: 'Dentes Afiados',
            key: 'DENTES_AFIADOS',
            description:
                'Você recebe um ataque natural de mordida (dano 1d4, crítico x2, corte). Quando usa a ação ataque, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida.',
        },
        {
            label: 'Empunhadura Rubra',
            key: 'EMPUNHADURA_RUBRA',
            description:
                'Você pode gastar 1 PM para cobrir suas mãos com uma carapaça rubra. Até o final da cena, você recebe +1 em testes de Luta. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.',
        },
        {
            label: 'Mãos Membranosas',
            key: 'MAOS_MEMBRANOSAS',
            description:
                'Você recebe +1 em testes de Atletismo, Fortitude e agarrar. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.',
        },
        {
            label: 'Membros Extras',
            key: 'MEMBROS_EXTRAS',
            description:
                'Você possui um par de patas insetoides que saem de suas costas, ombros ou flancos. Quando usa a ação atacar, pode gastar 2 PM para fazer um ataque corpo a corpo extra com cada um (dano 1d4, crítico x2, corte). Se possuir Ambidestria ou Estilo de Duas Armas, pode empunhar armas leves em suas patas insetoides (mas ainda precisa pagar 2 PM para atacar com elas e sofre a penalidade de –2 em todos os ataques).',
            restriction: 'Quatro outros poderes da Tormenta',
        },
        {
            label: 'Olhos Vermelhos',
            key: 'OLHOS_VERMELHOS',
            description:
                'Você recebe visão no escuro e +1 em testes de Intimidação. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.',
        },
        {
            label: 'Pele Corrompida',
            key: 'PELE_CORROMPIDA',
            description:
                'Sua carne foi mesclada à matéria vermelha. Você recebe resistência a ácido, eletricidade, fogo, frio, trevas e trovão 2. Esta RD aumenta em +2 para cada dois outros poderes da Tormenta que você possui.',
        },
        {
            label: 'Sangue Ácido',
            key: 'SANGUE_ACIDO',
            description:
                'Quando você sofre dano por um ataque corpo a corpo, o atacante sofre 1 ponto de dano de ácido. Este dano aumenta em +1 para cada outro poder da Tormenta que você possui.',
        },
        {
            label: 'Visco Rubro',
            key: 'VISCO_RUBRO',
            description:
                'Você pode gastar 1 PM para cobrir sua mão com um líquido escuro, grosso e corrosivo. Até o final da cena, você recebe +1 nas rolagens de dano corpo a corpo. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.',
        },
    ],
}
