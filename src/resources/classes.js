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
            pontos_vida: { inicial: 8, por_nivel: 2 },
            pontos_mana: { por_nivel: 6 },
            pericias: ['MISTICISMO', 'VONTADE'],
            powersText: `No 2° nível, e a cada nível seguinte, você escolhe um dos poderes a seguir:
Arcano de Batalha:
Você soma o bônus de seu atributo-chave nas rolagens de dano para magias e para seu Raio Arcano (caso possua).

Aumento de Atributo:
Você recebe +2 em um atributo a sua escolha. Você pode escolher este poder várias vezes. A partir da segunda vez que escolhê-lo para o mesmo atributo, o aumento diminui para +1.

Caldeirão do Bruxo:
Você pode criar poções, como se tivesse o poder geral Preparar Poção. Se tiver ambos, você pode criar poções de 3º círculo.

Conhecimento Mágico:
Você aprende duas magias de qualquer círculo que possa lançar. Você pode escolher este poder quantas vezes quiser.

Contramágica Aprimorada:
Uma vez por rodada, você pode fazer uma contramágica como uma reação (veja a página 164).

Envolto em Mistério:
Sua aparência e postura assombrosas o permitem manipular e assustar pessoas ignorantes ou supersticiosas. O mestre define o que exatamente você pode fazer e quem se encaixa nessa descrição. Como regra geral, você recebe +5 em Enganação e Intimidação contra pessoas não treinadas em Conhecimento ou Misticismo.

Escriba Arcano:
Você pode aprender magias copiando os textos de pergaminhos e grimórios de outros magos. Aprender uma magia dessa forma exige um dia de trabalho e T$ 250 em matérias-primas por PM necessário para lançar a magia. Assim, aprender uma magia de 3º círculo (6 PM) exige 6 dias de trabalho e o gasto de T$ 1.500.

Especialista em Escola:
Escolha uma escola de magia. A CD para resistir a suas magias dessa escola aumenta em +2.

Familiar:
Você possui um animal de estimação mágico (ver página 36).

Fluxo de Mana:
Você pode manter dois efeitos sustentados ativos simultaneamente com apenas uma ação livre, pagando o custo de cada efeito separadamente.

Foco Vital:
Se você estiver segurando seu foco e sofrer dano que o levaria a 0 PV ou menos, você fica com 1 PV e o foco perde pontos de vida igual ao valor excedente, até ser destruído.

Fortalecimento Arcano:
A CD para resistir a suas magias aumenta em +1. Se você puder lançar magias de 4º círculo, em vez disso ela aumenta em +2.

Herança Aprimorada:
Você recebe a herança aprimorada de sua linhagem sobrenatural.

Herança Superior:
Você recebe a herança superior de sua linhagem sobrenatural.

Magia Pungente:
Quando lança uma magia, você pode pagar 1 PM para aumentar em +2 a CD para resistir a ela.

Mestre em Escola:
Escolha uma escola de magia. O custo para lançar magias dessa escola diminui em –1 PM.

Poder Mágico:
Você recebe +1 ponto de mana por nível de arcanista. Quando sobe de nível, os PM que recebe por este poder aumentam de acordo. Por exemplo, se escolher este poder no 4º nível, recebe 4 PM. Quando subir para o 5º nível, recebe +1 PM e assim por diante. Você pode escolher este poder uma segunda vez, para um total de +2 PM por nível.

Raio Arcano:
Você pode gastar uma ação padrão para disparar um raio num alvo em alcance curto que causa 1d6 pontos de dano de essência. Esse dano aumenta em +1d6 para cada círculo de magia acima do 1º que você puder lançar. O alvo pode fazer um teste de Reflexos (CD atributo-chave) para reduzir o dano à metade.

Raio Elemental:
Quando usa Raio Arcano, você pode pagar 1 PM para que ele cause dano de um tipo de energia a sua escolha, entre ácido, eletricidade, fogo, frio ou trevas. Se o alvo falhar no teste de Reflexos, sofre uma condição, de acordo com o tipo de energia. Veja a descrição das condições no Apêndice. Ácido: vulnerável por uma rodada. Eletricidade: ofuscado por uma rodada. Fogo: fica em chamas. Frio: lento por uma rodada. Trevas: não pode ser curado por uma rodada.

Raio Poderoso:
Os dados de dano do seu Raio Arcano aumentam para d8 e o alcance dele aumenta para médio.

Tinta do Mago:
Você pode criar pergaminhos, como se tivesse o poder Escrever Pergaminho. Se tiver ambos, seu custo para criar pergaminhos é reduzido à metade.,`,
        },
    },
    {
        key: 'BARBARO',
        label: 'Bárbaro',
        data: {
            descricao:
                'Um combatente primitivo, que usa fúria e instintos para destruir seus inimigos.',
            pontos_vida: { inicial: 24, por_nivel: 6 },
            pontos_mana: { por_nivel: 3 },
            pericias: ['LUTA', 'FORTITUDE'],
            powersText: `No 2° nível, e a cada nível seguinte, você escolhe um dos poderes a seguir:
Alma de Bronze:
Quando entra em fúria, você recebe uma quantidade de pontos de vida temporários igual a metade do seu nível + mod. Força.

Aumento de Atributo:
Você recebe +2 em um atributo a sua escolha. Você pode escolher este poder várias vezes. A partir da segunda vez que escolhê-lo para o mesmo atributo, o aumento diminui para +1.

Brado Assustador:
Você pode gastar uma ação de movimento e 1 PM para soltar um berro feroz. Todos os inimigos em alcance curto devem fazer um teste de Vontade (CD Car). Um inimigo que falhe fica abalado até o fim da cena. Um inimigo que passe se torna imune a esta habilidade até o fim do dia.

Crítico Brutal:
Seu multiplicador de crítico com ataques corpo a corpo aumenta em +1. Por exemplo, se fizer um crítico com um machado de batalha, seu multiplicador será x4, em vez de x3.

Destruidor:
Quando causa dano com uma arma corpo a corpo de duas mãos, você pode rolar novamente qualquer resultado 1 ou 2 das rolagens de dano da arma.

Espírito Inquebrável:
Enquanto está em fúria, você não fica inconsciente por estar com 0 ou menos pontos de vida (você ainda morre se chegar em um valor negativo igual à metade de seus PV máximos).

Esquiva Sobrenatural:
Seus instintos ficam tão apurados que você consegue reagir ao perigo antes que seus sentidos percebam. Você nunca fica surpreendido.

Força Indomável:
Você pode gastar 1 PM para somar seu nível em um teste de Força ou Atletismo. Você pode usar esta habilidade depois de rolar o dado, mas deve usá-la antes de o mestre dizer se você passou ou não.

Frenesi:
Se estiver em fúria e usar a ação atacar para fazer um ataque corpo a corpo, você pode gastar 2 PM para fazer um ataque adicional.

Fúria da Savana:
Seu deslocamento aumenta em +3m. Quando usa Fúria, você aplica o bônus em ataque e dano também a armas de arremesso.

Fúria Raivosa:
Se sua Fúria for terminar por você não ter atacado nem sido alvo de um efeito hostil, você pode pagar 1 PM para continuar em fúria nesta rodada. Se você atacar ou for atacado na rodada seguinte, sua fúria continua normalmente.

Golpe Poderoso:
Ao acertar um ataque corpo a corpo, você pode gastar 1 PM para causar um dado de dano extra do mesmo tipo (por exemplo, com um montante, causa +1d6, para um dano total de 3d6; com um machado de guerra, causa +1d12).

Ímpeto:
Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada.

Investida Imprudente:
Quando faz uma investida, você pode aumentar sua penalidade em Defesa pela investida para –5 para receber um bônus de +1d8 na rolagem de dano deste ataque.

Pele de Aço:
O bônus de Pele de Ferro aumenta para +5.

Pele de Ferro:
Você recebe +2 na Defesa, mas apenas se não estiver usando armadura pesada.

Sangue dos Inimigos:
Enquanto está em fúria, quando faz um acerto crítico ou reduz um inimigo a 0 PV, você recebe um bônus cumulativo de +1 em testes de ataque e rolagens de dano, limitado pelo seu nível, até o fim da cena.

Superstição:
Você odeia magia, o que faz com que seja mais resistente a ela. Você recebe resistência a magia +2.

Totem Espiritual:
Você soma seu bônus de Sabedoria no seu total de pontos de mana. Escolha um animal totêmico (veja o quadro). Você pode lançar uma magia definida pelo animal escolhido (atributo-chave Sabedoria).

Vigor Primal:
Você pode gastar uma ação de movimento e 1 PM para recuperar 1d12 pontos de vida. Para cada 2 PM extras que você gastar, cura +1d12 PV (pode gastar 3 PM para recuperar 2d12 PV, 5 PM para recuperar 3d12 PV e assim por diante).`,
        },
    },
    {
        key: 'BARDO',
        label: 'Bardo',
        data: {
            descricao:
                'Um artista errante e faz-tudo versátil, sempre com a solução certa para cada ocasião.',
            pontos_vida: { inicial: 12, por_nivel: 3 },
            pontos_mana: { por_nivel: 4 },
            pericias: ['ATUACAO', 'REFLEXOS'],
            powersText: `No 2° nível, e a cada nível seguinte, você escolhe um dos poderes a seguir:
Arte Mágica:
Enquanto você estiver sob efeito de sua habilidade Inspiração, a CD para resistir a suas magias de bardo aumenta em +2.

Aumentar Repertório:
Você aprende duas magias de qualquer círculo que possa lançar. Elas devem pertencer às escolas que você sabe usar, mas podem ser arcanas ou divinas. Você pode escolher este poder quantas vezes quiser.

Aumento de Atributo:
Você recebe +2 em um atributo a sua escolha. Você pode escolher este poder várias vezes. A partir da segunda vez que escolhê-lo para o mesmo atributo, o aumento diminui para +1.

Canção Assustadora:
Você pode gastar uma ação padrão e 1 PM para forçar todas as criaturas a sua escolha em alcance curto a fazer um teste de Vontade (CD Car). Uma criatura que falhe fica abalada até o fim da cena. Uma criatura que passe se torna imune a esta habilidade até o fim do dia.

Dança das Lâminas:
Quando você lança uma magia com execução de uma ação padrão, pode gastar 1 PM para fazer um ataque corpo a corpo como uma ação livre.

Esgrima Mágica:
Sua arte mescla esgrima e magia, transformando dança em golpes. Enquanto estiver sob efeito de Inspiração, você pode substituir testes de Luta por testes de Atuação, mas apenas se estiver empunhando armas leves ou de uma mão.

Estrelato:
Suas apresentações o tornaram famoso, fazendo com que você seja reconhecido e bem tratado por aqueles que apreciam a arte. Por outro lado, pode ser difícil passar despercebido, especialmente em grandes cidades. Quando usa Atuação para impressionar uma plateia, o bônus recebido em perícias baseadas em Carisma aumenta para +5.

Fascinar:
Você pode gastar uma ação padrão e 1 PM para fascinar uma criatura a sua escolha em alcance curto. Faça um teste de Atuação oposto pelo teste de Vontade da criatura. Se você passar, ela fica fascinada enquanto você se concentrar (uma ação padrão por rodada). Se a criatura passar, fica imune a este efeito por um dia.

Fascinar em Massa:
Quando usa Fascinar, você pode gastar 2 PM extras. Se fizer isso, afeta todas as criaturas a sua escolha em alcance curto (você faz um único teste de Atuação, oposto pelo teste de Vontade de cada criatura).

Golpe Elemental:
Enquanto estiver sob efeito de Inspiração, sempre que você acertar um ataque corpo a corpo, pode gastar 1 PM para causar 1d6 de dano adicional de ácido, eletricidade, fogo ou frio, a sua escolha. Para cada quatro níveis que possuir, pode gastar +1 PM para aumentar o dano em +1d6.

Golpe Mágico:
Enquanto estiver sob efeito de Inspiração, sempre que você acertar um ataque corpo a corpo em um inimigo, recebe 2 PM temporários. Você pode ganhar um máximo de PM temporários por cena igual ao seu nível. PM temporários desaparecem no final da cena.

Inspiração Marcial:
Quando você usa Inspiração, você e seus aliados aplicam o bônus recebido em rolagens de dano (além de testes de perícia).

Lendas e Histórias:
Você possui um acervo mental de relatos, canções e folclore, sendo um arquivo vivo de assuntos gerais. Além de outros benefícios a critério do mestre, você pode gastar 1 PM para rolar novamente um teste recém realizado de Conhecimento, Misticismo, Nobreza ou Religião para informação, identificar criaturas ou identificar itens mágicos.

Manipular:
Você pode gastar 1 PM para forçar uma criatura que esteja fascinada a fazer um teste de Vontade (CD Car). Se a criatura falhar, sofre o efeito da magia Enfeitiçar até o fim da cena. Se passar, fica imune a esta habilidade por um dia. Usar esta habilidade não conta como uma ameaça à criatura fascinada.

Manipular em Massa:
Quando usa Manipular, você pode gastar 2 PM extras. Se fizer isso, afeta todas as criaturas a sua escolha em alcance curto.

Melodia Curativa:
Você pode gastar uma ação padrão e 1 PM para gerar um efeito curativo. Você e todos os seus aliados em alcance curto recuperam 1d6 PV. Para cada 2 PM extras que você gastar, cura +1d6 PV (ou seja, pode gastar 3 PM para recuperar 2d6 PV, 5 PM para recuperar 3d6 PV e assim por diante).

Melodia Restauradora:
Quando você usa Melodia Curativa, pode gastar 2 PM extras. Se fizer isso, escolha uma das condições a seguir: abalado, apavorado, alquebrado, atordoado, cego, confuso, esmorecido, exausto, fatigado, frustrado ou surdo. Você remove a condição escolhida de quaisquer aliados a sua escolha afetados pela Melodia Curativa.

Mestre dos Sussurros:
Você é dissimulado, atento para rumores e ótimo em espalhar fofocas. Quando faz um teste de Investigação para obter informação ou um teste de Enganação para intriga, você rola dois dados e usa o melhor resultado. Além disso, pode fazer esses testes em ambientes sociais (taverna, festival, corte...) sem custo e em apenas uma hora (em vez de um dia).

Paródia:
Uma vez por rodada, quando vê alguém lançando uma magia em alcance médio, você pode pagar 1 PM e fazer um teste de Atuação (CD 15 + custo em PM da magia). Se passar, até o final de seu próximo turno você pode lançar essa magia.

Prestidigitação:
Quando faz uma ação padrão qualquer, você pode aproveitar seus gestos para lançar uma magia de ilusão. Faça um teste de Atuação (CD 15 + custo em PM da magia). Se passar, você lança a magia como uma ação livre. Outros personagens só percebem que você lançou uma magia se passarem num teste de Misticismo (CD 20). Se falhar, a magia não funciona, mas você gasta os PM mesmo assim.`,
        },
    },
    {
        key: 'BUCANEIRO',
        label: 'Bucaneiro',
        data: {
            descricao:
                'Um navegador inconsequente e galante, sempre em busca de ouro ou emoção.',
            pontos_vida: { inicial: 16, por_nivel: 4 },
            pontos_mana: { por_nivel: 3 },
            pericias: ['LUTA', 'REFLEXOS'],
            powersText: `No 2° nível, e a cada nível seguinte, você escolhe um dos poderes a seguir:
Abusar dos Fracos:
Quando ataca uma criatura sob efeito de uma condição de medo, seu dano aumenta em um passo.

Amigos no Porto:
Quando chega em uma comunidade portuária, você pode gastar 2 PM para fazer um teste de Carisma (CD 10). Se passar, encontra um amigo para o qual pode pedir um favor (veja a perícia Diplomacia) ou que pode ajudá-lo como um aliado por uma cena.

Aparar:
Uma vez por rodada, quando é atingido por um ataque corpo a corpo, você pode gastar 1 PM para apará-lo. Faça um teste de ataque. Se o resultado do seu teste for maior que o do oponente, você evita o ataque. Você só pode usar este poder se estiver usando uma arma leve ou ágil.

Apostador:
Você pode gastar um dia para encontrar e participar de uma mesa de wyrt ou outro jogo de azar. Escolha um valor e faça um teste de Jogatina contra a CD correspondente: T$ 100 (CD 15), T$ 250 (CD 20), T$ 500 (CD 25), T$ 1.000 (CD 30), T$ 2.500 (CD 35) e assim por diante. Se passar, você ganha o valor escolhido (ou um item ou favor equivalente, a critério do mestre). Se falhar, você perde esse mesmo valor. A critério do mestre, o lugar onde você está pode impossibilitar o uso deste poder ou limitá-lo a uma vez por semana ou mês.

Ataque Acrobático:
Quando se aproxima de um inimigo com uma pirueta ou pulo (em termos de jogo, usando Acrobacia ou Atletismo para se mover) e o ataca no mesmo turno, você recebe +2 em seu teste de ataque e na rolagem de dano.

Aumento de Atributo:
Você recebe +2 em um atributo a sua escolha. Você pode escolher este poder várias vezes. A partir da segunda vez que escolhê-lo para o mesmo atributo, o aumento diminui para +1.

Aventureiro Ávido:
Uma vez por rodada, você pode gastar 5 PM para realizar uma ação padrão ou de movimento adicional. Se possuir o poder Surto Heroico, em vez disso seu custo diminui em –2 PM.

Bravata Audaz:
Você jura fazer uma façanha específica, como roubar o tesouro de Sckhar ou ganhar um beijo do príncipe e da princesa até o fim do baile. Se cumprir a bravata, seu limite máximo de PM aumenta em +2d6 até o fim da aventura.

Bravata Imprudente:
Na primeira rodada de um combate, você pode jurar derrotar seus inimigos com uma restrição a sua escolha, como lutar com uma mão nas costas, de guarda aberta (em termos de jogo, desprevenido), de olhos vendados (cego) etc. Uma restrição só é válida se prejudicá-lo (por exemplo, lutar com uma mão nas costas só vale como restrição se você luta com duas armas). O mestre tem a palavra final sobre a validade de uma restrição. Você sofre a penalidade durante todo o combate, mas, se vencer, recebe +2 nos testes de ataque e na margem de ameaça até o fim da aventura.

En Garde:
Você pode gastar uma ação de movimento e 1 PM para assumir postura de luta. Até o fim da cena, se estiver usando uma arma leve ou ágil, você recebe +2 na Defesa e na margem de ameaça.

Esgrimista:
Quando usa uma arma leve ou ágil, você soma seu bônus de Inteligência nas rolagens de dano (limitado pelo seu nível).

Flagelo dos Mares:
Você aprende e pode lançar Amedrontar (atributo-chave Carisma). Esta não é uma habilidade mágica e provém de sua capacidade de incutir medo em seus inimigos.

Folião:
Você tem facilidade em criar amizades durante festas, de noitadas em tavernas a bailes na corte. O mestre define exatamente o que você pode fazer com este poder. Como regra geral, a atitude de todas as pessoas em relação a você durante uma festa melhora em uma categoria.

Grudar o Cano:
Quando faz um ataque à distância com uma arma de fogo contra um oponente adjacente, você não sofre a penalidade de –5 no teste de ataque e aumenta seu dano em um passo. Pré-requisito: treinado em Luta, Pistoleiro.

Pernas do Mar:
Você está acostumado à superfície oscilante do convés. Você recebe +2 em Acrobacia e Atletismo e não fica desprevenido quando está se equilibrando ou escalando.

Pistoleiro:
Você recebe proficiência com armas de fogo e +2 nas rolagens de dano com essas armas.

Presença Paralisante:
Você soma seu bônus de Carisma em Iniciativa.

Ripostar:
Quando usa a habilidade aparar e evita o ataque, você pode gastar 1 PM. Se fizer isso, pode fazer um ataque corpo a corpo imediato contra o inimigo que o atacou (se ele estiver em alcance).

Touché:
Quando se aproxima de um inimigo e o ataca com uma arma leve ou ágil no mesmo turno, você pode gastar 2 PM para aumentar seu dano em um passo e receber +5 na margem de ameaça.`,
        },
    },
    {
        key: 'CACADOR',
        label: 'Caçador',
        data: {
            descricao:
                'Um exterminador de monstros e mestre da sobrevivência em áreas selvagens.',
            pontos_vida: { inicial: 16, por_nivel: 4 },
            pontos_mana: { por_nivel: 4 },
            pericias: ['LUTA', 'SOBREVIVENCIA'],
            powersText: `No 2° nível, e a cada nível seguinte, você escolhe um dos poderes a seguir:
Ambidestria:
Se estiver usando duas armas (e pelo menos uma delas for leve) e fizer a ação atacar, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre –2 em todos os testes de ataque até o seu próximo turno.

Armadilha: Arataca.:
A vítima sofre 2d6 pontos de dano de perfuração e fica agarrada. Uma criatura agarrada pode escapar com uma ação padrão e um teste de Acrobacia ou Atletismo (CD Sab).

Armadilha: Espinhos:
A vítima sofre 6d6 pontos de dano de perfuração. Um teste de Reflexos (CD Sab) reduz o dano à metade.

Armadilha: Laço:
A vítima deve fazer um teste de Reflexos (CD Sab). Se passar, fica caída. Se falhar, fica agarrada. Uma criatura agarrada pode se soltar com uma ação padrão e um teste de Força ou Acrobacia (CD Sab).

Armadilha: Rede:
Todas as criaturas na área devem fazer um teste de Reflexos (CD Sab) para não ficarem enredadas. Uma vítima pode se libertar com uma ação padrão e um teste de Acrobacia ou Atletismo (CD 25). Além disso, a área ocupada pela rede é considerada terreno difícil.

Arqueiro:
Se estiver usando uma arma de ataque à distância, você soma seu bônus de Sabedoria nas rolagens de dano (limitado pelo seu nível).

Aumento de Atributo:
Você recebe +2 em um atributo a sua escolha. Você pode escolher este poder várias vezes. A partir da segunda vez que escolhê-lo para o mesmo atributo, o aumento diminui para +1.

Bote:
Se estiver empunhando duas armas e fizer uma investida, você pode pagar 1 PM para fazer um ataque adicional com sua arma secundária.

Camuflagem:
Você pode gastar 2 PM para usar a perícia Furtividade para se esconder mesmo sem cobertura disponível.

Chuva de Lâminas:
Quando usa Ambidestria, você pode pagar 2 PM para fazer um ataque adicional com sua arma primária.

Companheiro Animal:
Você recebe um companheiro animal. Veja o quadro na página 62. Pré-requisito: treinado em Adestramento.

Elo com a Natureza:
Você soma seu bônus de Sabedoria em seu total de pontos de mana e aprende e pode lançar Caminhos da Natureza (atributo-chave Sabedoria).

Emboscar:
Você pode gastar 2 PM para realizar uma ação padrão adicional em seu turno. Você só pode usar este poder na primeira rodada de um combate.

Empatia Selvagem:
Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento com animais para mudar atitude e pedir favores (veja Diplomacia, na página 117).

Escaramuça:
Quando se move 6m ou mais, você recebe +2 em Defesa e Reflexos e +1d8 nas rolagens de dano de ataques corpo a corpo e à distância em alcance curto até o início de seu próximo turno. Você não pode usar esta habilidade se estiver vestindo armadura pesada.

Escaramuça Superior:
Quando usa Escaramuça, seus bônus aumentam para +5 em Defesa e Reflexos e +1d12 em rolagens de dano.

Espreitar:
Quando usa a habilidade Marca da Presa, você recebe um bônus de +1 em testes de perícia contra a criatura marcada. Esse bônus aumenta em +1 para cada PM adicional gasto na habilidade e também dobra com a habilidade Inimigo.

Ervas Curativas:
Você pode gastar uma ação completa e uma quantidade de PM a sua escolha (limitado pelo seu bônus de Sabedoria) para aplicar ervas que curam ou desintoxicam em você ou num aliado adjacente. Para cada PM que gastar, cura 2d6 PV ou remove uma condição envenenado afetando o alvo.

Ímpeto:
Você pode gastar 1 PM para aumentar seu deslocamento em +6m por uma rodada.

Inimigo de (Criatura):
Escolha um tipo de criatura entre animal, construto, espírito, monstro ou morto-vivo, ou duas raças humanoides (por exemplo, orcs e gnolls, ou elfos e qareen). Quando você usa a habilidade Marca da Presa contra uma criatura do tipo ou da raça escolhida, dobra os dados de bônus no dano. O nome desta habilidade varia de acordo com o tipo de criatura escolhida (Inimigo de Monstros, Inimigo de Mortos-Vivos etc.). Você pode escolher este poder outras vezes para inimigos diferentes.

Olho do Falcão:
Você pode usar a habilidade Marca da Presa em criaturas em alcance longo.

Ponto Fraco:
Quando usa a habilidade Marca da Presa, seus ataques contra a criatura marcada recebem +2 na margem de ameaça. Esse bônus dobra com a habilidade Inimigo.`,
        },
    },
    {
        key: 'CAVALEIRO',
        label: 'Cavaleiro',
        data: {
            descricao:
                'Um combatente honrado, especializado em suportar dano e proteger os outros.',
            pontos_vida: { inicial: 20, por_nivel: 5 },
            pontos_mana: { por_nivel: 3 },
            pericias: ['LUTA', 'FORTITUDE'],
            powersText: `No 2° nível, e a cada nível seguinte, você escolhe um dos poderes a seguir:
Armadura da Honra:
No início de cada cena, você recebe uma quantidade de pontos de vida temporários igual a 5 + seu bônus de Carisma. Os PV temporários duram até o final da cena.

Aumento de Atributo:
Você recebe +2 em um atributo a sua escolha. Você pode escolher este poder várias vezes. A partir da segunda vez que escolhê-lo para o mesmo atributo, o aumento diminui para +1.

Autoridade Feudal:
Você possui autoridade sobre pessoas comuns (qualquer pessoa sem um título de nobreza ou uma posição numa igreja reconhecida pelo Reinado). Você pode gastar 2 PM para conclamar o povo a realizar uma tarefa para você. Em termos de jogo, passa automaticamente em um teste de perícia com CD máxima igual ao seu nível +5. O tempo necessário para conclamar o povo é o tempo do uso da perícia em questão. Esta habilidade só pode ser usada em locais onde sua posição carregue alguma influência (a critério do mestre).

Desprezar os Covardes:
Você recebe resistência a dano 5 se estiver caído, desprevenido ou flanqueado.

Escudeiro:
Você recebe os serviços de um escudeiro, um aliado especial que cuida de seu equipamento. Suas armas recebem um bônus de +1 em rolagens de dano e sua armadura concede +1 em Defesa. Além disso, você pode pagar 1 PM para receber ajuda do escudeiro em combate. Você recebe uma ação de movimento que pode usar para se levantar, sacar um item ou trazer sua montaria. O escudeiro não conta em seu limite de aliados. Caso ele morra, você pode treinar outro com um mês de trabalho.

Especialização em Armadura:
Se estiver usando armadura pesada, você recebe resistência a dano 5 (cumulativa com a RD fornecida por Bastião).

Estandarte:
Sua flâmula torna-se célebre, um símbolo de inspiração para seus aliados. No início de cada cena, você e todos os aliados que possam ver seu estandarte recebem um número de PM temporários igual ao seu bônus de Carisma (mínimo 1). PM temporários desaparecem no final da cena.

Etiqueta:
Você pode gastar 1 PM para rolar novamente um teste recém realizado de Diplomacia ou Nobreza.

Investida Destruidora:
Quando faz a ação investida, você pode gastar 2 PM. Se fizer isso, causa +2d8 pontos de dano. Você deve usar esta habilidade antes de rolar o ataque.

Montaria Corajosa:
Sua montaria concede +1d6 em rolagens de dano corpo a corpo (cumulativo com qualquer bônus que ela já forneça como aliado).

Pajem:
Você recebe os serviços de um pajem, um aliado especial que o auxilia em pequenos afazeres. Você recebe +2 em Diplomacia, por estar sempre aprumado, e sua recuperação de PV e PM aumenta em +1 por nível, por estar sempre confortável. O pajem pode executar pequenas tarefas, como entregar mensagens e comprar itens, e não conta em seu limite de aliados. Caso ele morra, você pode treinar outro com uma semana de trabalho.

Postura de Combate: Aríete Implacável:
Ao assumir esta postura, você aumenta o bônus de ataque em investidas em +2. Para cada 2 PM adicionais que gastar quando assumir a postura, aumenta o bônus de ataque em +1. Além disso, se fizer uma investida contra um objeto, causa +2d8 de dano. Você precisa se deslocar todos os turnos para manter esta postura ativa.

Postura de Combate: Castigo de Ferro:
Sempre que um aliado adjacente sofrer um ataque corpo a corpo, você pode gastar 1 PM para fazer um ataque na criatura que o atacou como uma reação.

Postura de Combate: Foco de Batalha:
Sempre que um inimigo atacá-lo, você recebe 1 PM temporário. Pontos de mana temporários desaparecem no final da cena.

Postura de Combate: Muralha Intransponível.:
Para assumir esta postura você precisa estar empunhando um escudo. Você recebe +1 na Defesa e em Reflexos. Além disso, quando sofre um ataque que permite um teste de Reflexos para reduzir o dano à metade, não sofre nenhum dano se passar. Para cada 2 PM adicionais que gastar quando assumir a postura, aumenta esse bônus em +1. Por fim, enquanto mantiver esta postura, seu deslocamento é reduzido para 3m.

Postura de Combate: Provocação Petulante:
Enquanto esta postura estiver ativa, todos os inimigos que iniciarem seus turnos dentro de seu alcance curto devem fazer um teste de Vontade (CD Car). Se falharem, devem atacar você nessa rodada.

Postura de Combate: Torre Inabalável:
Você assume uma postura defensiva que o torna imune a qualquer tentativa de tirá-lo do lugar, de forma mundana ou mágica. Enquanto mantiver a postura, você não pode se deslocar, mas recebe um bônus na Defesa igual a seu bônus de Constituição e pode substituir testes de Reflexos e Vontade por testes de Fortitude.

Solidez:
Se estiver usando um escudo, você aplica o bônus na Defesa recebido pelo escudo em testes de resistência.

Título:
Você adquire um título de nobreza. Converse com o mestre para definir os benefícios exatos de seu título. Como regra geral, você recebe 10 TO por nível de cavaleiro no início de cada aventura (rendimentos dos impostos) ou a ajuda de um aliado veterano (um membro de sua corte).

Torre Armada:
Quando um inimigo erra um ataque contra você, você pode gastar 1 PM. Se fizer isso, recebe +5 em rolagens de dano contra esse inimigo até o fim de seu próximo turno.`,
        },
    },
    {
        key: 'CLERIGO',
        label: 'Clérigo',
        data: {
            descricao:
                'Servo de um dos deuses de Arton, usa poderes divinos para defender seus ideais.',
            pontos_vida: { inicial: 16, por_nivel: 4 },
            pontos_mana: { por_nivel: 5 },
            pericias: ['RELIGIAO', 'VONTADE'],
            powersText: `No 2° nível, e a cada nível seguinte, você escolhe um dos poderes a seguir:
Abençoar Arma:
Você se torna proficiente na arma preferida de sua divindade. Se estiver empunhando essa arma, pode gastar uma ação de movimento e 3 PM para infundi-la com poder divino. Até o final da cena, a arma emite luz dourada ou púrpura (como uma tocha) e você pode usar seu modificador de Sabedoria em testes de ataque e rolagens de dano com ela (em vez do modificador padrão). Além disso, o dano da arma aumenta em um passo e ela é considerada mágica para propósitos de resistência a dano.

Aumento de Atributo:
Você recebe +2 em um atributo a sua escolha. Você pode escolher este poder várias vezes. A partir da segunda vez que escolhê-lo para o mesmo atributo, o aumento diminui para +1.

Autoridade Eclesiástica:
Você possui uma posição formal em uma igreja reconhecida pelos outros membros de sua fé. Os efeitos deste poder variam de acordo com a igreja e o deus — clérigos de Khalmyr, por exemplo, possuem autoridade como juízes no Reinado — e ficam a cargo do mestre. Como regra geral, você recebe +5 em testes de Diplomacia ou Intimidação ao lidar com devotos de sua divindade e paga metade do preço de itens alquímicos, poções e serviços em templos de sua divindade.

Canalizar Energia Positiva/Negativa:
Você pode gastar uma ação padrão e 1 PM para liberar uma onda de energia positiva ou negativa (de acordo com sua divindade) que afeta todas as criaturas em alcance curto. Energia positiva cura 1d6 pontos de dano em criaturas vivas a sua escolha e causa 1d6 pontos de dano de luz em mortos-vivos. Energia negativa tem o efeito inverso — causa dano de trevas em criaturas vivas a sua escolha e cura mortos-vivos. Uma criatura que sofra dano tem direito a um teste de Vontade (CD Car) para reduzi-lo à metade. Para cada 2 PM extras que você gastar, a cura ou dano aumenta em +1d6 PV (ou seja, pode gastar 3 PM para curar 2d6 PV, 5 PM para curar 3d6 PV e assim por diante).

Canalizar Amplo:
Quando você usa a habilidade Canalizar Energia, pode gastar +2 PM para aumentar o alcance dela para médio.

Comunhão Vital:
Quando lança uma magia que cure uma criatura, você pode pagar +2 PM para que outra criatura em alcance curto (incluindo você mesmo) recupere uma quantidade de pontos de vida igual à metade dos PV da cura original.

Conhecimento Mágico:
Você aprende duas magias divinas de qualquer círculo que possa lançar. Você pode escolher este poder quantas vezes quiser.

Expulsar/Comandar Mortos-Vivos:
Você pode usar uma ação padrão e 3 PM para expulsar (se sua divindade canaliza energia positiva) ou comandar (se canaliza energia negativa) todos os mortos-vivos em alcance curto. Mortos-vivos expulsos ficam apavorados por 1d6 rodadas. Mortos-vivos comandados ficam sob suas ordens; entretanto, o nível somado de mortos-vivos sob seu comando ao mesmo tempo não pode exceder o seu próprio nível +3. Dar uma ordem a mortos-vivos é uma ação de movimento. Mortos-vivos têm direito a um teste de Vontade (CD Car) para evitar qualquer destes efeitos.

Liturgia Mágica:
Você pode gastar uma ação de movimento para executar uma breve liturgia de sua fé. Se fizer isso, a CD para resistir à sua próxima magia divina (desde que lançada até o final de seu próximo turno) aumenta em +2.

Magia Sagrada/Profana:
Quando lança uma magia divina que causa dano, você pode gastar +1 PM. Se fizer isso, muda o tipo de dano da magia para luz ou trevas (de acordo com a sua divindade).

Mestre Celebrante:
O número de pessoas que você afeta com uma missa aumenta em dez vezes e os benefícios que elas recebem dobram.

Missa: Bênção da Vida:
Você abençoa os presentes com energia positiva. Os participantes recebem pontos de vida temporários em um valor igual ao seu nível + seu bônus de Sabedoria.

Missa: Chamado às Armas:
Sua prece fortalece o espírito de luta. Os participantes recebem +1 em testes de ataque e rolagens de dano.

Missa: Elevação do Espírito:
Você inflama a determinação dos ouvintes. Os participantes recebem pontos de mana temporários em um valor igual ao seu bônus de Sabedoria.

Missa: Escudo Divino:
Sua fé protege os ouvintes. Os participantes recebem +1 em Defesa e testes de resistência.

Missa: Superar as Limitações:
Você encoraja os ouvintes a superar suas próprias habilidades. Cada participante recebe +1d6 num único teste a sua escolha.

Prece de Combate:
Quando lança uma magia divina com tempo de conjuração de uma ação padrão em si mesmo, você pode gastar +2 PM para lançá-la como uma ação de movimento.

Símbolo Sagrado Abençoado:
Você pode gastar uma ação de movimento e 1 PM para fazer uma prece e energizar seu símbolo sagrado até o fim da cena. Um símbolo sagrado energizado emite uma luz dourada ou prateada (se sua divindade canaliza energia positiva) ou púrpura ou avermelhada (se canaliza energia negativa) que ilumina como uma tocha. Enquanto você estiver empunhando um símbolo sagrado energizado, o custo em PM para lançar suas magias divinas diminui em 1.`,
        },
    },
    {
        key: 'DRUIDA',
        label: 'Druida',
        data: {
            descricao:
                'Guardião do mundo natural e devoto das forças selvagens, naturais ou monstruosas.',
            pontos_vida: { inicial: 16, por_nivel: 4 },
            pontos_mana: { por_nivel: 4 },
            pericias: ['SOBREVIVENCIA', 'VONTADE'],
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
            pontos_vida: { inicial: 20, por_nivel: 5 },
            pontos_mana: { por_nivel: 3 },
            pericias: ['LUTA', 'FORTITUDE'],
            powersText: `No 2° nível, e a cada nível seguinte, você escolhe um dos poderes a seguir:

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
            pontos_vida: { inicial: 12, por_nivel: 3 },
            pontos_mana: { por_nivel: 4 },
            pericias: ['OFICIO', 'VONTADE'],
            powersText: `No 2° nível, e a cada nível seguinte, você escolhe um dos poderes a seguir:
Agite Antes de Usar:
Quando usa um item alquímico que cause dano, você pode gastar uma quantidade de PM a sua escolha (limitado pelo seu bônus de Inteligência). Para cada PM que gastar, o item causa um dado extra de dano do mesmo tipo.

Ajuste de Mira.:
Você pode gastar uma ação de movimento e uma quantidade de PM a sua escolha (limitado pelo seu bônus de Inteligência) para aprimorar uma arma de ataque à distância que esteja usando. Para cada PM que gastar, você recebe +1 em rolagens de dano com a arma até o final da cena.

Alquimista de Batalha:
Quando usa um item alquímico ou poção que cause dano, você soma seu modificador de Inteligência na rolagem de dano.

Alquimista Iniciado:
Você recebe um livro de fórmulas e pode fabricar poções com fórmulas que conheça de 1º e 2º círculos. Veja a página 327 para as regras de poções.

Armeiro:
Você recebe proficiência com armas marciais corpo a corpo. Quando usa uma arma corpo a corpo, pode usar seu modificador de Inteligência em vez de Força nos testes de ataque e rolagens de dano.

Ativação Rápida:
Ao ativar uma engenhoca com ação padrão, você pode pagar 2 PM para ativá-la com uma ação de movimento, ao invés disto.

Aumento de Atributo:
Você recebe +2 em um atributo a sua escolha. Você pode escolher este poder várias vezes. A partir da segunda vez que escolhê-lo para o mesmo atributo, o aumento diminui para +1.

Autômato:
Você fabrica um autômato, uma criatura mecânica que obedece a seus comandos. Ele é um aliado Iniciante de um tipo a sua escolha entre ajudante, assassino, atirador, combatente, guardião, montaria ou vigilante. No 7º nível, ele muda para Veterano e, no 15º nível, para Mestre. Se o autômato for destruído, você pode fabricar um novo com uma semana de trabalho e T$ 100.

Autômato Prototipado:
Você pode gastar uma ação padrão e 2 PM para ativar uma modificação experimental em seu autômato. Role 1d6. Em um resultado 2 a 6, você aumenta o nível de aliado do autômato em um passo (até Mestre), ou concede a ele a habilidade Iniciante de outro tipo de aliado, até o fim da cena. Em um resultado 1, o autômato enguiça como uma engenhoca.

Balística:
Você recebe proficiência com armas marciais de ataque à distância ou com armas de fogo. Quando usa uma arma de ataque à distância, pode usar seu modificador de Inteligência em vez de Destreza nos testes de ataque (e, caso possua o poder Estilo de Disparo, nas rolagens de dano).

Blindagem:
Você pode somar o modificador de Inteligência na Defesa quando usa armadura pesada. Se fizer isso, não pode somar o modificador de Destreza, mesmo que outras habilidades ou efeitos permitam isso (como a modificação Delicada, por exemplo).

Cano Raiado:
Quando usa uma arma de disparo feita por você mesmo, ela recebe +1 na margem de ameaça.

Catalisador Instável:
Você pode gastar uma ação completa e 3 PM para fabricar um item alquímico ou poção cuja fórmula conheça instantaneamente. O custo do item é reduzido à metade e você não precisa fazer o teste de Ofício (alquimia). Contudo, ele só dura até o fim da cena.

Chutes e Palavrões:
Uma vez por rodada, você pode pagar 1 PM para repetir um teste falho de Ofício (engenhoqueiro) recém realizado para ativar uma engenhoca.

Conhecimento de Fórmulas:
Você aprende três fórmulas de quaisquer círculos que possa aprender. Você pode escolher este poder quantas vezes quiser.

Couraceiro:
Você recebe proficiência com armaduras pesadas e escudos. Quando usa armadura, pode somar seu bônus de Inteligência em vez de Destreza na Defesa (mas continua não podendo somar um bônus de atributo na Defesa quando usa armadura pesada).

Engenhoqueiro:
Você pode fabricar engenhocas. Veja as regras para isso na página 70.

Farmacêutico:
Quando usa um item alquímico que cure pontos de vida, você pode gastar uma quantidade de PM a sua escolha (limitado pelo seu bônus de Inteligência). Para cada PM que gastar, o item cura um dado extra do mesmo tipo.

Ferreiro:
Quando usa uma arma corpo a corpo feita por você mesmo, o dano dela aumenta em um passo.

Granadeiro:
Você pode arremessar itens alquímicos e poções em alcance médio. Você pode usar seu modificador de Inteligência em vez de Destreza para calcular a CD do teste de resistência desses itens.

Homúnculo:
Você possui um homúnculo, uma criatura Minúscula feita de alquimia. Vocês podem se comunicar telepaticamente em alcance médio e ele obedece a suas ordens, mas ainda está limitado ao que uma criatura de seu tamanho e forma pode fazer. Um homúnculo funciona como um aliado que fornece +2 em testes de uma perícia a sua escolha. Você pode sofrer 1d6 pontos de dano para seu homúnculo assumir uma forma capaz de protegê-lo. Se fizer isso, ele fornece +2 de Defesa até o fim da cena.

Invenção Potente:
Quando usa um item fabricado por você mesmo, você pode pagar 1 PM para aumentar em +2 a CD para resistir a ele.

Maestria em Perícia:
Escolha um número de perícias treinadas igual ao seu bônus de Inteligência. Com essas perícias, você pode gastar 1 PM para escolher 10 em qualquer situação, exceto testes de ataque.

Manutenção Eficiente:
A quantidade de engenhocas que você pode manter aumenta em +3.

Mestre Alquimista:
Você pode fabricar poções com fórmulas que conheça de qualquer círculo.

Mestre Cuca:
Todas as comidas que você cozinha têm seu bônus numérico aumentado em +1.

Mistura Fervilhante:
Quando usa um item alquímico ou poção, você pode gastar 2 PM para dobrar a área de efeito dele.

Oficina de Campo:
Você pode gastar uma hora e 2 PM para fazer a manutenção do equipamento de seu grupo. Cada membro do grupo escolhe uma arma, armadura ou escudo para manutenção. Armas recebem +1 em testes de ataque, armaduras e escudos têm sua penalidade de armadura reduzida em 1. Os benefícios duram um dia.

Pedra de Amolar:
Você pode gastar uma ação de movimento e uma quantidade de PM a sua escolha (limitado pelo seu bônus de Inteligência) para aprimorar uma arma corpo a corpo que esteja usando. Para cada PM que gastar, você recebe +1 em rolagens de dano com a arma até o final da cena.

Síntese Rápida:
Você fabrica itens alquímicos e poções em uma categoria de tempo menor. Três meses viram um mês, um mês vira uma semana, uma semana vira um dia e um dia vira uma hora (o tempo mínimo).`,
        },
    },
    {
        key: 'LADINO',
        label: 'Ladino',
        data: {
            descricao:
                'Aventureiro cheio de truques, confiando mais em agilidade e esperteza que em força bruta.',
            pontos_vida: { inicial: 12, por_nivel: 3 },
            pontos_mana: { por_nivel: 4 },
            pericias: ['LADINAGEM', 'REFLEXOS'],
            powersText: `No 2° nível, e a cada nível seguinte, você escolhe um dos poderes a seguir:
Assassinar:
Você pode gastar uma ação de movimento e 3 PM para analisar uma criatura em alcance curto. Até o fim de seu próximo turno, seu primeiro Ataque Furtivo que causar dano a ela tem seus dados de dano extras dessa habilidade dobrados.

Aumento de Atributo:
Você recebe +2 em um atributo a sua escolha. Você pode escolher este poder várias vezes. A partir da segunda vez que escolhê-lo para o mesmo atributo, o aumento diminui para +1.

Emboscar:
Você pode gastar 2 PM para realizar uma ação padrão adicional em seu turno. Você só pode usar este poder na primeira rodada de um combate.

Escapista:
Você recebe +5 em testes de Acrobacia para escapar e em testes para resistir a efeitos que restrinjam seu movimento, como a manobra agarrar e a magia Amarras Etéreas.

Fuga Formidável:
Você pode gastar uma ação completa e 1 PM para analisar o lugar no qual está (um castelo, um porto, a praça de uma cidade...). Até o fim da cena, você recebe +3m em seu deslocamento, +5 em testes de Acrobacia e Atletismo e ignora penalidades em movimento por terreno difícil. Porém, para receber esses bônus, todas as suas ações na rodada devem estar diretamente ligadas a fugir. Por exemplo, você só pode atacar um inimigo se ele estiver bloqueando seu caminho, agarrando-o etc. Você pode fazer ações para ajudar seus aliados, mas apenas se eles estiverem tentando escapar.

Gatuno:
Você recebe +2 em Atletismo. Quando escala, avança seu deslocamento normal, em vez de metade dele.

Integrante de Guilda:
Você é membro de uma organização criminosa, desde uma pequena guilda de ladrões a uma irmandade de Valkaria. Os efeitos deste poder variam de acordo com a organização e ficam a cargo do mestre. Como regra geral, você recebe +5 em testes de Diplomacia com pessoas ligadas ao submundo e +5 em testes de Intimidação com pessoas comuns que temeriam sua organização. Além disso, tem acesso a itens e serviços roubados ou proibidos (como armas de pólvora e venenos).

Ladrão Arcano:
Quando causa dano com um ataque furtivo em uma criatura capaz de lançar magias, você pode “roubar” uma magia que já a tenha visto lançar. Você precisa pagar 1 PM por círculo da magia e pode roubar magias de até 4º círculo. Até o final da cena, você pode lançar a magia roubada (atributo-chave Inteligência).

Mão na Boca:
Você recebe +2 em testes de agarrar. Quando faz um ataque furtivo contra uma criatura desprevenida, você pode fazer um teste de agarrar como uma ação livre. Se agarrar a criatura, ela não poderá falar enquanto estiver agarrada.

Mãos Rápidas:
Ao fazer um teste de Ladinagem para abrir fechaduras, ocultar item, punga ou sabotar, você pode pagar 1 PM para fazê-lo como uma ação livre.

Mente Criminosa:
Você soma seu bônus de Inteligência em Ladinagem e Furtividade.

Oportunismo:
Você recebe +2 em testes de ataque contra inimigos que já sofreram dano desde seu último turno.

Rolamento Defensivo:
Sempre que sofre dano, você pode gastar 2 PM para reduzir esse dano à metade. Após usar este poder, você fica caído.

Roubo de Mana:
Quando você causa dano com um ataque furtivo em uma criatura, a criatura perde 1 ponto de mana para cada 1d6 de dano de seu ataque furtivo. Você recebe PM temporários iguais aos PM que a criatura perder. Você só pode usar este poder uma vez por cena contra cada criatura específica.

Saqueador de Tumbas:
Você recebe +5 em testes de Investigação para encontrar armadilhas e em testes de Reflexos para evitá-las. Além disso, gasta uma ação padrão para desabilitar mecanismos, em vez de 1d4 rodadas (veja a perícia Ladinagem).

Sombra:
Você recebe +2 em Furtividade. Além disso, pode se mover com seu deslocamento normal enquanto usa Furtividade sem sofrer penalidades no teste de perícia.

Truque Mágico:
Você aprende e pode lançar uma magia arcana de 1º círculo a sua escolha, pagando seu custo normal em PM. Seu atributo-chave para esta magia é Inteligência. Você pode escolher este poder quantas vezes quiser.

Velocidade Ladina:
Uma vez por rodada, você pode gastar 2 PM para realizar uma ação de movimento adicional em seu turno.

Veneno Persistente:
Quando aplica uma dose de veneno a uma arma, este veneno dura por três ataques (em vez de apenas um).

Veneno Potente:
A CD para resistir aos venenos que você usa aumenta em +2 e esses venenos causam +1 ponto de dano por dado de dano.`,
        },
    },
    {
        key: 'LUTADOR',
        label: 'Lutador',
        data: {
            descricao: 'Um especialista em combate desarmado rústico e durão.',
            pontos_vida: { inicial: 20, por_nivel: 5 },
            pontos_mana: { por_nivel: 3 },
            pericias: ['LUTA', 'FORTITUDE'],
            powersText: `No 2° nível, e a cada nível seguinte, você escolhe um dos poderes a seguir:
Arma Improvisada:
Ao usar armas improvisadas, você usa as estatísticas de seu ataque desarmado — bônus de ataque, margem de ameaça etc. — mas seu dano aumenta em um passo. Você pode gastar uma ação de movimento para procurar uma pedra, cadeira, garrafa ou qualquer coisa que possa usar como arma. Faça um teste de Percepção (CD 20). Se você passar, encontra uma arma improvisada. Armas improvisadas são frágeis; se você errar um ataque e o resultado do d20 for um número ímpar, a arma quebra.

Até Acertar:
Se você errar um ataque desarmado, recebe um bônus cumulativo de +2 em testes de ataque e rolagens de dano desarmado contra o mesmo oponente. Os bônus terminam quando você acertar um ataque ou no fim da cena, o que acontecer primeiro.

Aumento de Atributo:
Você recebe +2 em um atributo a sua escolha. Você pode escolher este poder várias vezes. A partir da segunda vez que escolhê-lo para o mesmo atributo, o aumento diminui para +1.

Braços Calejados:
Se você não estiver usando armadura, soma seu bônus de Força na Defesa, limitado pelo seu nível.

Cabeçada:
Quando faz um ataque desarmado, você pode gastar 2 PM. Se fizer isso, o oponente fica desprevenido contra este ataque. Você só pode usar este poder uma vez por cena contra uma mesma criatura.

Chave:
Se estiver agarrando uma criatura e fizer um teste de manobra contra ela para causar dano, o dano desarmado aumenta em um passo.

Confiança dos Ringues:
Quando um oponente erra um ataque corpo a corpo contra você, você recebe 1 PM temporário. PM temporários desaparecem no final da cena.

Convencido:
Acostumado a contar apenas com seus músculos, você adquiriu certo desdém por artes mais sofisticadas. Você recebe +5 em testes de resistência contra efeitos de Encantamento.

Golpe Baixo:
Quando faz um ataque desarmado, você pode gastar 2 PM. Se fizer isso e acertar o ataque, o oponente deve fazer um teste de Fortitude (CD For). Se ele falhar, fica atordoado por uma rodada. Você só pode usar este poder uma vez por cena contra uma mesma criatura.

Golpe Imprudente:
Quando usa Golpe Relâmpago, você pode atacar de forma impulsiva. Se fizer isso, você aumenta seu dano desarmado em mais um dado do mesmo tipo (por exemplo, se o seu dano é 2d6, você causa 3d6), mas sofre –5 em sua Defesa, até o início de seu próximo turno.

Imobilização:
Se estiver agarrando uma criatura, você pode gastar uma ação completa para imobilizá-la. Faça um teste de manobra contra ela. Se você passar, imobiliza a criatura — ela fica indefesa e não pode realizar nenhuma ação, exceto tentar se soltar (o que exige um teste de manobra). Se a criatura se soltar da imobilização, ainda fica agarrada. Enquanto estiver imobilizando uma criatura, você sofre as penalidades de agarrar.

Língua dos Becos:
Você pode pagar 1 PM para usar seu bônus de Força no lugar de Carisma em um teste de perícia baseada em Carisma.

Lutador de Chão:
Você recebe +2 em testes de ataque para agarrar e derrubar. Quando agarra uma criatura, pode gastar 1 PM para fazer uma manobra derrubar contra ela como uma ação livre.

Nome na Arena:
Você construiu uma reputação no circuito de lutas de Arton. Escolha uma perícia que represente a característica pela qual você é conhecido, como Atletismo para uma fama de musculoso ou Intimidação para uma fama de “malvado”. Uma vez por cena, você pode gastar uma ação de movimento para fazer um teste dessa perícia (CD 10) e impressionar os presentes. Se passar, você recebe +1 em todos os seus testes de perícias baseadas em Carisma até o fim da cena. Esse bônus aumenta em +1 para cada 5 pontos pelos quais o resultado do teste exceder a CD (+2 para um resultado 15, +3 para 20 e assim por diante). Como alternativa, você pode aplicar esse bônus em seu próximo teste de ataque.

Punhos de Adamante:
Seus ataques desarmados ignoram 10 pontos de resistência a dano do alvo, se houver.

Rasteira:
Quando faz um ataque desarmado, você pode gastar 2 PM. Se fizer isso e acertar o ataque, o oponente fica caído.

Sarado:
ocê soma seu bônus de Força no seu total de pontos de vida e em testes de Fortitude. A critério do mestre, você pode chamar a atenção de pessoas que se atraiam por físicos bem definidos.

Sequência Destruidora:
No início do seu turno, você pode gastar 2 PM para dizer um número (no mínimo 2). Se fizer e acertar uma quantidade de ataques igual ao número dito, o último tem seu dano aumentado um número de passos igual à quantidade de ataques feitos. Por exemplo, se você falar “três” e fizer e acertar três ataques, o último ataque (o terceiro) terá seu dano aumentado em três passos.

Trincado:
Esculpido à exaustão, seu corpo se tornou uma máquina. Você soma seu modificador de Constituição nas suas rolagens de dano desarmado.

Trocação:
Quando você começa a bater, não para mais. Ao acertar um ataque desarmado, pode fazer outro ataque desarmado contra o mesmo alvo, pagando uma quantidade de PM igual à quantidade de ataques já realizados no turno. Ou seja, pode fazer o primeiro ataque extra gastando 1 PM, um segundo ataque extra gastando mais 2 PM e assim por diante, até errar um ataque ou não ter mais pontos de mana.

Trocação Tumultuosa:
Quando usa a ação atacar para fazer um ataque desarmado, você pode gastar 2 PM para atingir todas as criaturas adjacentes — incluindo aliados! Você deve usar este poder antes de rolar o ataque e compara o resultado de seu teste contra a Defesa de cada criatura.

Valentão:
Você recebe +2 em testes de ataque e rolagens de dano contra oponentes caídos, desprevenidos, flanqueados ou indefesos.

Voadora:
Quando faz uma investida desarmada, você pode gastar 2 PM. Se fizer isso, recebe +1d6 no dano para cada 3m que se deslocar até chegar ao oponente, limitado pelo seu nível.`,
        },
    },
    {
        key: 'NOBRE',
        label: 'Nobre',
        data: {
            descricao:
                'Um membro da alta sociedade cujas principais armas são as palavras e o orgulho.',
            pontos_vida: { inicial: 16, por_nivel: 4 },
            pontos_mana: { por_nivel: 4 },
            pericias: ['DIPLOMACIA', 'VONTADE'],
            powersText: `No 2° nível, e a cada nível seguinte, você escolhe um dos poderes a seguir:
Armadura Brilhante:
Você pode somar o modificador de Carisma na Defesa quando usa armadura pesada. Se fizer isso, não pode somar o modificador de Destreza, mesmo que outras habilidades ou efeitos permitam isso.

Aumento de Atributo:
Você recebe +2 em um atributo a sua escolha. Você pode escolher este poder várias vezes. A partir da segunda vez que escolhê-lo para o mesmo atributo, o aumento diminui para +1.

Autoridade Feudal:
Você pode gastar 2 PM para conclamar o povo a realizar uma tarefa para você. Em termos de jogo, passa automaticamente em um teste de perícia com CD máxima igual ao seu nível +5. O tempo necessário para conclamar o povo é o tempo do uso da perícia em questão. Esta habilidade só pode ser usada em locais onde sua posição carregue alguma influência (a critério do mestre).

Educação Privilegiada:
Você se torna treinado em duas perícias de nobre a sua escolha.

Estrategista:
Você pode direcionar aliados em alcance curto. Gaste uma ação padrão e 1 PM por aliado que quiser direcionar (limitado pelo seu modificador de Carisma). No próximo turno do aliado, ele ganha uma ação de movimento.

Favor:
Você pode usar sua influência para pedir favores a pessoas poderosas. Pedir favores gasta 5 PM e exige pelo menos uma hora de conversa e bajulação — ou mais, de acordo com o mestre. Faça um teste de Diplomacia. A CD do teste depende do que você está pedindo: 10 para algo simples (como um convite para uma festa particular), 20 para algo caro ou complicado (como uma carona de barco até Galrasia) e 30 para algo perigoso ou ilegal (como acesso aos planos militares do reino).

General:
Quando você usa o poder Estrategista, os aliados direcionados recebem 1d4 pontos de mana temporários. Esses PM duram até o fim do turno do aliado e não podem ser usados em efeitos que concedam PM.

Grito Tirânico:
Quando usa a habilidade Palavras Afiadas, você pode gastar +2 PM. Se fizer isso, seus dados de dano aumentam para d8 e você atinge todos os inimigos em alcance curto.

Inspirar Confiança:
Sua presença faz as pessoas darem o melhor de si. Você pode gastar 2 PM para fazer um aliado em alcance curto rolar novamente um teste recém realizado.

Inspirar Glória:
A presença de um nobre motiva as pessoas a realizarem façanhas impressionantes. Você pode gastar 5 PM para fazer um aliado em alcance curto ganhar uma ação padrão adicional no próximo turno dele. Você só pode usar esta habilidade uma vez por cena em cada aliado.

Jogo da Corte:
Você pode gastar 1 PM para rolar novamente um teste recém realizado de Diplomacia, Intuição ou Nobreza.

Liderar pelo Exemplo:
Você pode pagar 2 PM para servir de inspiração. Até o início de seu próximo turno, sempre que você passar em um teste de perícia, aliados em alcance curto que fizerem um teste da mesma perícia podem usar o resultado total do seu teste em vez de rolar o dado.

Língua de Ouro:
ocê pode gastar uma ação padrão e 6 PM para gerar o efeito da magia Enfeitiçar com os aprimoramentos de sugerir ação e afetar todas as criaturas dentro do alcance (CD Car). Esta não é uma habilidade mágica e provém de sua capacidade de influenciar outras pessoas.

Língua de Prata:
Quando faz um teste de perícia baseada em Carisma, você pode gastar 2 PM para receber um bônus no teste igual a metade do seu nível.

Língua Rápida:
Quando faz um teste de Diplomacia para mudar atitude como uma ação completa, você sofre uma penalidade de –5, em vez de –10.

Palavras Afiadas:
Você pode gastar uma ação padrão e 1 PM para submeter a sua vontade uma criatura inteligente (Int 3 ou mais) em alcance curto. Faça um teste de Diplomacia ou Intimidação (a sua escolha) oposto ao teste de Vontade da criatura. Se vencer, você causa 2d6 pontos de dano mental não letal à criatura. Se perder, causa metade deste dano. Para cada PM extra que você gastar quando ativar o poder, o dano aumenta em +1d6. Caso a criatura seja reduzida a 0 ou menos PV, rende-se (caso você tenha usado Diplomacia) ou fica apavorada (caso tenha usado Intimidação), em vez de cair inconsciente.

Presença Aristocrática:
Sempre que uma criatura inteligente (Int 3 ou mais) tentar machucá-lo (causar dano com um ataque, magia ou habilidade) você pode gastar 2 PM. Se fizer isso, a criatura deve fazer um teste de Vontade (CD Car). Se falhar, não conseguirá machucá-lo e perderá a ação. Você só pode usar esta habilidade uma vez por cena contra cada criatura.

Presença Majestosa:
Você impõe respeito a todos. A habilidade Presença Aristocrática passa a funcionar contra criaturas com Int 1 ou mais (passa a afetar até mesmo animais, embora continue não funcionando contra criaturas sem valor de Inteligência). Além disso, você pode usá-la mais de uma vez contra uma mesma criatura na mesma cena.

Título:
Você adquire um título de nobreza. Converse com o mestre para definir os benefícios exatos de seu título. Como regra geral, você recebe 10 TO por nível de nobre no início de cada aventura (rendimentos dos impostos) ou a ajuda de um aliado veterano (um membro de sua corte).

Voz Poderosa:
Você recebe +2 em Diplomacia e Intimidação. Suas habilidades de nobre com alcance curto passam para alcance médio.`,
        },
    },
    {
        key: 'PALADINO',
        label: 'Paladino',
        data: {
            descricao:
                'Um campeão do bem e da ordem, o perfeito soldado dos deuses.',
            pontos_vida: { inicial: 20, por_nivel: 5 },
            pontos_mana: { por_nivel: 3 },
            pericias: ['LUTA', 'VONTADE'],
            powersText: `No 2° nível, e a cada nível seguinte, você escolhe um dos poderes a seguir:
Arma Sagrada:
Se estiver empunhando a arma preferida de seu deus, o dado de dano que você rola por Golpe Divino aumenta para d12.

Aumento de Atributo:
Você recebe +2 em um atributo a sua escolha. Você pode escolher este poder várias vezes. A partir da segunda vez que escolhê-lo para o mesmo atributo, o aumento diminui para +1.

Aura Antimagia:
Enquanto sua aura estiver ativa, você e os aliados dentro da aura podem rolar novamente qualquer teste de resistência contra magia recém realizado.

Aura Ardente:
Enquanto sua aura estiver ativa, no início de cada um de seus turnos, espíritos e mortos-vivos a sua escolha dentro dela sofrem dano de luz igual a 5 + seu bônus de Carisma.

Aura de Cura:
Enquanto sua aura estiver ativa, no início de seus turnos, você e os aliados a sua escolha dentro dela curam um número de PV igual a 5 + seu bônus de Carisma.

Aura de Invencibilidade:
Enquanto sua aura estiver ativa, você ignora o primeiro dano que sofrer na cena. O mesmo se aplica a seus aliados dentro da aura.

Aura Poderosa:
O alcance da sua aura aumenta para médio.

Fulgor Divino:
Quando usa Golpe Divino, todos os inimigos em alcance curto ficam ofuscados até o início do seu próximo turno.

Julgamento Divino: Arrependimento:
Você pode gastar 2 PM para marcar um inimigo em alcance curto. Na próxima vez que esse inimigo acertar um ataque em você ou em um de seus aliados, deve fazer um teste de Vontade (CD Car). Se falhar, fica atordoado no próximo turno dele. Você só pode proferir este julgamento uma vez por cena contra cada criatura.

Julgamento Divino: Autoridade:
Você pode gastar 1 PM para comandar uma criatura em alcance curto. Faça um teste de Diplomacia oposto pelo teste de Vontade da criatura. Se você passar, ela obedece a um comando simples como “pare” ou “largue a arma”. Se a criatura passar, fica imune a esse efeito por um dia.

Julgamento Divino: Coragem:
Você pode gastar 2 PM para inspirar coragem em uma criatura em alcance curto, incluindo você mesmo. A criatura fica imune a efeitos de medo e recebe +2 em testes de ataque contra alvos de ND maior que o nível dela.

Julgamento Divino: Iluminação:
Você pode marcar um inimigo em alcance curto. Quando acerta um ataque corpo a corpo nesse inimigo, você recebe 2 PM temporários. Você só pode proferir este julgamento uma vez por cena.

Julgamento Divino: Justiça:
Você pode gastar 2 PM para marcar um inimigo em alcance curto. A próxima vez que esse inimigo causar dano em você ou em um de seus aliados, deve fazer um teste de Vontade (CD Car). Se falhar, sofre dano de luz igual à metade do dano que causou.

Julgamento Divino: Libertação:
Você pode gastar 5 PM para cancelar uma condição negativa qualquer (como abalado, paralisado etc.) que esteja afetando uma criatura em alcance curto.

Julgamento Divino: Salvação:
Você pode gastar 2 PM para marcar um inimigo em alcance curto. Até o fim da cena, quando você acerta um ataque corpo a corpo nesse inimigo, recupera 5 pontos de vida.

Julgamento Divino: Vindicação:
Você pode gastar 2 PM para marcar um inimigo que tenha causado dano a você ou a seus aliados na cena. Você recebe +1 em testes de ataque e +1d8 em rolagens de dano contra o inimigo escolhido, mas sofre –5 em testes de ataque contra quaisquer outros alvos. No 5º nível, e a cada cinco níveis seguintes, você pode pagar +1 PM para aumentar o bônus de ataque em +1 e o bônus de dano em +1d8. O efeito termina caso o alvo fique inconsciente.

Julgamento Divino: Zelo:
Você pode gastar 1 PM para marcar um alvo em alcance longo. Pelo restante da cena, sempre que se mover na direção desse alvo, você se move com o dobro de seu deslocamento.

Orar:
Você aprende e pode lançar uma magia divina de 1º círculo a sua escolha. Seu atributo-chave para esta magia é Sabedoria. Você pode escolher este poder quantas vezes quiser.

Virtude Paladinesca: Caridade:
O custo de suas habilidades de paladino que tenham um aliado como alvo é reduzido em 1 PM.

Virtude Paladinesca: Castidade:
Você se torna imune a efeitos de encantamento e recebe +5 em testes de Intuição para perceber blefes.

Virtude Paladinesca: Compaixão:
Você pode usar Cura pelas Mãos em alcance curto e, para cada PM que gastar, cura 2d6+1 (em vez de 1d8+1).

Virtude Paladinesca: Humildade:
Na primeira rodada de um combate, você pode gastar uma ação completa para rezar e pedir orientação. Você recebe uma quantidade de PM temporários igual ao seu bônus de Carisma.

Virtude Paladinesca: Temperança:
Quando ingere um alimento, item alquímico ou poção, você consome apenas metade do item. Na prática, cada item desses rende duas “doses” para você.`,
        },
    },
]
