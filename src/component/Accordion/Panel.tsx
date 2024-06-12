export interface PanelProps {
    title: string;
    children?: React.ReactNode;
    isActive: boolean;
    onShow: () => void;
}

export default function Panel({ title, children, isActive, onShow }: PanelProps) {
    return (
        <section className="panel">
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={onShow}>
                    Mostrar
                </button>
            )}
        </section>
    );
}