# QuiL Recipe

QuiL Recipe é uma aplicação web que permite localizar e gerenciar receitas de forma fácil e rápida. Desenvolvido para testar o consumo de uma API com React, este projeto utiliza tecnologias como Axios e React Query para otimizar a busca e o armazenamento de receitas favoritas.

![Print versão desktop](/public/banner-desktop.png)
![Print versão tablet](/public/banner-tablet.png)
![Print versão mobile](/public/banner-mobile.png)

## Funcionalidades

- **Busca de Receitas:** Permite buscar receitas por meio de uma palavra-chave.
- **Visualização de Receitas:** Exibe detalhes completos das receitas, incluindo ingredientes e tempo de preparo.
- **Favoritos:** Adiciona e remove receitas dos favoritos, armazenando-as localmente.

## Stack utilizada

**Front-end:** Vite, React, TypeScript, TailwindCSS, React Router, Axios, React Query, DaisyUI,

## Aprendizados

Neste projeto, adquiri habilidades significativas ao explorar novas tecnologias. Tive meu primeiro contato com o DaisyUI para estilização, e com React Query para gerenciamento avançado de estados e requisições à API. Além disso, utilizei o Axios para realizar requisições HTTP de maneira eficaz e segura. Essas ferramentas enriqueceram minha experiência no desenvolvimento com React e Vite, especialmente no contexto de integração com APIs externas.

## Uso/Exemplos

```javascript

const fetchRecipes = async (): Promise<RecipeHit[]> => {
    try {
      const response = await axios.get(
        `url`
      );

      return response?.data.hits;
    } catch (error) {
      console.error("Erro ao buscar receitas:", error);
      throw error;
    }
  };

  const { isPending, error, data } = useQuery<RecipeHit[]>({
    queryKey: ["recipes", search],
    queryFn: fetchRecipes,
    refetchOnWindowFocus: false,
    enabled: !!search,
  });
```

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

- Faça um `fork` do projeto.
- Crie uma `nova branch`.
- Faça `commit` das suas alterações.
- Faça `push` para a branch.
- Abra um `pull request`.

Veja `contribuindo.md` para saber como começar.

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`VITE_SOME_API_ID`

`VITE_SOME_API_KEY`

## Autores

- [@QuiLion7](https://www.github.com/QuiLion7)

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
