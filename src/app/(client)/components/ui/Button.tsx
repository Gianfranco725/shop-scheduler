type Props = {
  content: string;
  customStyle?: string;
};
export default function Button({ content, customStyle }: Props) {
  return (
    <button
      className={`py-4 px-6 rounded-full bg-white text-lg ${customStyle}`}
    >
      {content}
    </button>
  );
}
