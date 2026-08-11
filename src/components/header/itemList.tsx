type Props = {
  label: string;
  href: string;
};

export function ItemList({ label, href }: Props) {
  return (
    <li>
      <a
        href={href}
        className="
          block rounded-xl px-4 py-2
          text-sm font-medium text-gray-700
          transition-all duration-200
          hover:bg-blue-100 hover:text-blue-600
          focus:outline-none focus:ring-2
          focus:ring-blue-400 focus:ring-offset-2
        "
      >
        {label}
      </a>
    </li>
  );
}
