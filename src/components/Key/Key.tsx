import "./Key.css";

interface KeyProps {
  keyText: string;
  className: string;
}

const Key = ({ keyText, className }: KeyProps): JSX.Element => {
  return <button className={`key ${className}`}>{keyText}</button>;
};

export default Key;
