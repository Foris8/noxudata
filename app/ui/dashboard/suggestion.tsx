
type SuggestionButtonProps = {
  text: string;
  onClick?: () => void; // Optional click handler
};

// Define a SuggestionButton component
const SuggestionButton: React.FC<SuggestionButtonProps> = ({ text}) => (
  <button
    className=" text-black py-2 px-4 rounded-lg focus:outline-none hover:bg-gray-200 border-2 "

  >
    {text}
  </button>
);

export default SuggestionButton;