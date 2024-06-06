export interface Plan {
    id: number;
    title: string;
    childIds: number[];
}

export interface TravelPlan {
    [key: number]: Plan;
}

export interface ItemTreeListProps {
    id: number;
    placesById: TravelPlan;
}


export default function ItemTreeList({ id, placesById }: ItemTreeListProps) {
    const place: Plan = placesById[id];
    const childIds = place.childIds;

    return (
        <li>
            {place.title}
            {childIds.length > 0 && (
                <ol>
                    {childIds.map(childId => (
                        <ItemTreeList
                            key={childId}
                            id={childId}
                            placesById={placesById}
                        />
                    ))}
                </ol>
            )}
        </li>
    )

}