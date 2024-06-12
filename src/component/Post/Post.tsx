import { createContext, useContext } from "react";

export interface PostProps {
    children?: React.ReactNode;
}

export const TitleContext = createContext(1);

export default function Post({ children }: PostProps) {
    const nestedTitle = useContext(TitleContext);

    return (<>
        <TitleContext.Provider value={nestedTitle + 1}>
            <section style={{ border: "5px solid blue" }} >
                <h2>{'Titulo anidado context ' + nestedTitle}</h2>
                {children}
            </section >
        </TitleContext.Provider>
    </>)
}