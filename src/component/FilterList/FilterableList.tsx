import { ChangeEvent, FormEvent, useState } from 'react';

export interface Items {
    id: number;
    name: string;
    description: string;
}

export function filterItems(items: Items[], query: string) {
    query = query.toLowerCase();
    return items.filter(item =>
        item.name.split(' ').some(word =>
            word.toLowerCase().startsWith(query)
        )
    );
}

export const foods = [{
    id: 0,
    name: 'Sushi',
    description: 'El sushi es un plato tradicional japonés de arroz preparado en vinagre.'
}, {
    id: 1,
    name: 'Dal',
    description: 'La forma más común de preparar el dal es en forma de sopa a la que se pueden añadir cebollas, tomates y diversas especias.'
}, {
    id: 2,
    name: 'Pierogi',
    description: 'Los Pierogi son bolas de masa rellenas que se hacen envolviendo una masa sin levadura con un relleno salado o dulce y cociéndolas en agua hirviendo.'
}, {
    id: 3,
    name: 'Shish kebab',
    description: 'El shish kebab es una comida popular de cubos de carne ensartados y asados.'
}, {
    id: 4,
    name: 'Dim sum',
    description: 'Dim sum es una gran variedad de pequeños platos que los cantoneses disfrutan tradicionalmente en los restaurantes para el desayuno y el almuerzo.'
}];


export default function FilterableList() {
    const [query, setQuery] = useState<string>('');
    const filterFood = filterItems(foods, query);


    return (
        <>
            <SearchBar handleChangeQuery={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)} query={query} />
            <hr />
            <List items={filterFood} />
        </>
    );
}

function SearchBar({ query, handleChangeQuery }: { query: string, handleChangeQuery: (e: ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <label>
            Buscar:{' '}
            <input
                value={query}
                onChange={handleChangeQuery}
            />
        </label>
    );
}

function List({ items }: { items: Items[] }) {
    return (
        <table>
            <tbody>
                {items.map(food => (
                    <tr key={food.id}>
                        <td>{food.name}</td>
                        <td>{food.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
