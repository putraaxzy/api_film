'use client';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <input
      type="search"
      placeholder="Search movies..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full max-w-md px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
