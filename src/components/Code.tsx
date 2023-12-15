/**
 * @param {boolean | string} lineNumbersDisplay - Use '|' for step-by-step highlight
 */
export default function Code({
  children,
  lineNumbersDisplay,
  lineNumbersOffset,
}: {
  children: React.ReactNode;
  lineNumbersDisplay?: boolean | string;
  lineNumbersOffset?: string;
}): React.ReactElement {
  return (
    <pre>
      <code
        data-trim
        data-noescape
        data-line-numbers={lineNumbersDisplay ? lineNumbersDisplay : null}
        data-ln-start-from={lineNumbersOffset ? lineNumbersOffset : null}
      >
        {children}
      </code>
    </pre>
  );
}
