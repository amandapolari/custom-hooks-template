# Template da aula de Custom Hooks

## Índice

-   [1. Prática 1](#1-prática-1)
-   [3. Prática 2](#2-prática-2)
-   [3. Prática 3](#3-prática-3)

## 1 Prática 1

### Enunciado

-   Extraia a lógica das requisições já existentes no template e construa dois custom hooks:
    -   `useCapturarNome` (Custom Hook para Capturar nome das pessoas usuárias)
    -   `useCapturarPostagens` (Custom Hook para Capturar postagens das pessoas usuárias)

### Resolução


## 2 Prática 2

### Enunciado

-   Utilize o exemplo do `useRequestData` do material assíncrono e reorganize o código da prática 1, de modo a permitir a reutilização da lógica para ambas as requisições ao longo do projeto.

### Resolução

-   Código do `useRequestData` do material assíncrono:
    ```
        import React, {useState, useEffect} from 'react'
        import axios from 'axios'

        export function useRequestData(url, initialState) {
            const [data, setData] = useState(initialState)

            useEffect(() => {
                axios.get(url)
                    .then(response => {
                        setData(response.data)
                })
                    .catch(error => console.log(error.response.data)
            )}, [url])

        return data
        }
    ```
-

## 3 Prática 3

### Enunciado

-   Atualize o `useRequestData` do exercício anterior:
    -   Faça o tratamento de erros: ele deve mostrar uma mesnagem de erro caso a requisição caia no catch.
    -   Adicione um indicador de carregamento: o suário deve saber que os dados estão sendo carregados.
    -   Utilize o nome `isLoading` como variável de estado.

### Resolução
