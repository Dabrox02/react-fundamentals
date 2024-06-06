// Forma #1
interface ButtonProps {
    children?: React.ReactNode;
    onPush: () => void;
}

export default function Button({ onPush, children }: ButtonProps) {
    return <>
        <button onClick={onPush}>
            {children}
        </button>
    </>
}

// Forma #2
// interface ButtonProps {
//     children: React.ReactNode;
//     onPush: () => void;
//   }

//   const Button: React.FC<ButtonProps> = ({ onPush, children }) => {
//     return (
//       <button onClick={onPush}>
//         {children}
//       </button>
//     );
//   };