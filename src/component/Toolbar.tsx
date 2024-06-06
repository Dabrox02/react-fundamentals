import Button from './Button';
export default function Toolbar() {
    return (
        <>
            <div className="Toolbar" onClick={(e) => {
                console.log("Se propaga el evento")
                console.log(e)
            }}>
                <Button onPush={() => alert('¡Reproduciendo!')}>
                    hola
                </Button>
            </div>
        </>
    );
}
