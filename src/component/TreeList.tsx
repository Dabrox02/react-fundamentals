import { useState } from 'react';
import { initialTravelPlan } from '../assets/places';
import ItemTreeList from './ItemTreeList';

export default function TreeList() {
    const [plan, _setPlan] = useState(initialTravelPlan);
    const root = plan[0];
    const planetsIds = root.childIds;

    return (
        <>
            <h2>Lugares a visitar</h2>
            <ol>
                {planetsIds.map(id => (
                    <ItemTreeList
                        key={id}
                        id={id}
                        placesById={plan}
                    />
                ))}
            </ol>
        </>
    );
}
