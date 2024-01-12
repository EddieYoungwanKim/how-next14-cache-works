export const dynamic = 'force-dynamic';
export const revalidate = 3;

import { CodeBlock } from '@/components/code-block';
import { Button } from '@/components/ui/button';
import { getData } from '../getData';
import { action } from '../actions';

const code = `export const dynamic = 'force-dynamic';
export const revalidate = 3;

export default async function Home() {
  const seoul = await fetch(
    'http://worldtimeapi.org/api/timezone/Asia/Seoul'
  );

  ...
}
`;

export default async function Page() {
  const seoul = await getData(
    'http://worldtimeapi.org/api/timezone/Asia/Seoul'
  );

  return (
    <div className="space-y-10">
      <div className="text-lg">
        <ul className="list-disc list-inside">
          <li>
            <span className="font-bold">Data cache</span>: Opt out
          </li>
          <li>
            <span className="font-bold">Full route cache</span>: Opt out
          </li>
          <li>
            <span className="font-bold">Behavior</span>: Revalidate option with
            route segment is simply ignored with dynamically rendered page
          </li>
        </ul>
      </div>
      <div className="flex justify-between border rounded-lg p-8 items-center bg-secondary">
        <div className="text-xl font-semibold text-orange-300 space-x-4">
          <div>Seoul: {seoul.datetime}</div>
        </div>

        <form action={action}>
          <Button type="submit">revalidate</Button>
        </form>
      </div>

      <div>
        <CodeBlock code={code} />
      </div>
    </div>
  );
}
