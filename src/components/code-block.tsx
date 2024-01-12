'use client';
import { CopyBlock, dracula } from 'react-code-blocks';

export const CodeBlock = ({ code }: { code: string }) => {
  return (
    <>
      <div className="text-lg font-semibold pb-1">Code example</div>
      <CopyBlock
        text={code}
        language="typescript"
        showLineNumbers
        theme={dracula}
      />
    </>
  );
};
