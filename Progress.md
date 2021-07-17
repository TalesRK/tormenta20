# Funcionalidades já desenvolvidas:

-   Controle de rotas e menu
-   Tela de visualização da ficha
-   Seleção de Raça
-   Seleção de Classe
-   Controle de estado da aplicação
-   Atualização dinâmica da tela de ficha
-   Tela de geração de pontos de atributo
-   Tela de seleção de proficiências
-   Tela de seleção de magias
-   Tela de conclusão de personagem (salvar nome e imagem)
-   Cálculo de vida e mana
-   Tela de seleção de personagem
-   Permitir alterar a vida do personagem, exibir vida e mana atual e máxima
-   Tela de seleção de Origens
-   Aba de Notas
-   Aba de Perícias
-   Aba poderes (modo editável)
-   Aba de Itens (modo editável)
-   Aba de Magias
-   Aba de Habilidades raciais
-   Aba de Combate (defesa, iniciativa, percepção, etc)

# Funcionalidades pendentes:

## Funcionalidade em desenvolvimento

## Pendências para protótipo

-   Logo do App
-   Remover estado das telas após goBack()
-   Corrigir bug de teclado das Notas (quase lá)
-   Criar menu de ajuda && Iniciar App com modal aberto. (como mudar vida)
-   Remover raças e classes não suportadas (ou avisar q é protótipo e as demais não tão completas)
-   Corrigir armazenamento da imagem
-   [done] Remover Aba geral
-   [done] Unificar raça com demais textos da ficha
-   [done] Apresentar modificador na tela principal da ficha
-   [done] Remover menus não usados
-   [done] Melhorar aparência da seleção de personagens

## Implementar após haver api:

## Versão 1

-   Permitir salvar lore do personagem
-   Adicionar material do lvl 1 das demais raças e classes
-   Adicionar condições de classe e raça (humano + atributo)
-   Corrigir botão do drawer de ir para a lista de personagens
-   Tela de seleção de equipamentos
-   Aba de equipamentos com lista e registros mapeados
-   Aba de poderes com registros mapeados
-   Implementar API
    -   Tela de Login [4h]
    -   Tela de Cadastro [4h]
    -   Tela de recuperação de senha [4h]
    -   Botão de logout [1h]
-   Na edição de personagem, salvar XP
-   Permitir editar o personagem (com nível, porém sem suporte completo/somente para exibição)

## Versão 2

-   Adicionar deuses
-   Adicionar informação de origem na tabela (tipo orcpub) (selecionar perícias por causa da classe/selecionar perícias por causa da origem)
-   Converter fluxo de criação de ficha para TabNavigation, com notification batch em cada aba indicando quantidade de pendências
-   Melhorar descrição de raça
-   Melhorar descrição de classe
-   Melhorar descrição de magias
-   Na edição do personagem, permitir subir de nível

```
    Codigo para buildar: https://github.com/facebook/react-native/issues/26245#issuecomment-541490177
    react.gradle

            doLast {
                def moveFunc = { resSuffix ->
                    File originalDir = file("$buildDir/generated/res/react/release/${resSuffix}");
                    if (originalDir.exists()) {
                        File destDir = file("$buildDir/../src/main/res/${resSuffix}");
                        ant.move(file: originalDir, tofile: destDir);
                    }
                }
                moveFunc.curry("drawable-ldpi").call()
                moveFunc.curry("drawable-mdpi").call()
                moveFunc.curry("drawable-hdpi").call()
                moveFunc.curry("drawable-xhdpi").call()
                moveFunc.curry("drawable-xxhdpi").call()
                moveFunc.curry("drawable-xxxhdpi").call()
                moveFunc.curry("raw").call()
            }
```
