import { Pickaxe, Gem } from 'lucide-react';

export function ShovelIcon({ className }) {
  return <Pickaxe className={className} size={24} />;
}

export function TreasureIcon({ className }) {
  return <Gem className={className} size={24} />;
}

export function TreasureButton() {
  return (
    <button 
      onClick={() => alert('Hint: Check the shores of Lake Superior for agates!')}
      className="bg-accent text-white px-5 py-3 rounded-xl flex items-center gap-2 shadow-md hover:shadow-2xl hover:scale-105 transition-all"
    >
      <Pickaxe size={20} />
      Dig Deeper
    </button>
  );
}