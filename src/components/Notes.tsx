export default function Notes({
  children,
  isMarkdown,
}: {
  children: React.ReactNode;
  isMarkdown?: boolean;
}) {
  return (
    <aside data-markdown={isMarkdown ? isMarkdown : null} className="notes">
      {children}
    </aside>
  );
}
