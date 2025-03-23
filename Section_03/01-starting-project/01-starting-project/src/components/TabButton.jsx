export default function TabButton({ children, isSelected, ...proxyProps }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...proxyProps}>
        {children}
      </button>
    </li>
  );
}
