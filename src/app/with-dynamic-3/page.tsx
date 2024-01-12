export const dynamic = 'force-dynamic';
export const revalidate = 4;

import { CodeBlock } from '@/components/code-block';
import { Button } from '@/components/ui/button';
import { getData } from '../getData';
import { action } from '../actions';

const code = `export const dynamic = 'force-dynamic';
export const revalidate = 4;

export default async function Home() {
  const seoul = await fetch(
    'http://worldtimeapi.org/api/timezone/Asia/Seoul',
    { next: { revalidate: 2 }
  );
  const newyork = await fetch(
    'http://worldtimeapi.org/api/timezone/America/New_York',
    { next: { revalidate: 3 }
  );
  const tokyo = await fetch(
    'http://worldtimeapi.org/api/timezone/Asia/tokyo',
  );
  
  ...
}
`;

export default async function Page() {
  const seoul = await getData(
    'http://worldtimeapi.org/api/timezone/Asia/Seoul',
    2
  );
  const newyork = await getData(
    'http://worldtimeapi.org/api/timezone/America/New_York',
    3
  );
  const tokyo = await getData(
    'http://worldtimeapi.org/api/timezone/Asia/tokyo'
  );
  return (
    <div className="space-y-10">
      <div className="text-lg">
        <ul className="list-disc list-inside">
          <li>
            <span className="font-bold">Data cache</span>: revalidate
            individually.
          </li>
          <li>
            <span className="font-bold">Full route cache</span>: Individually
            revalidate based on the revalidate time with fetch method
          </li>
          <li>
            <span className="font-bold">Behavior</span>: fetch without
            specifying revalidate time will opt out its data cache and gets
            updated everytime. <br />
            Otherwise, fetch will revalidate each data cache individually.
          </li>
        </ul>
      </div>
      <div className="flex justify-between border rounded-lg p-8 items-center bg-secondary">
        <div className="text-xl font-semibold text-orange-300  grid grid-cols-10 grid-rows-3 gap-4">
          <div className="col-span-2">Seoul: </div>
          <div className="col-span-8">{seoul.datetime}</div>
          <div className="col-span-2">New York: </div>
          <div className="col-span-8">{newyork.datetime}</div>
          <div className="col-span-2">Tokyo: </div>
          <div className="col-span-8">{tokyo.datetime}</div>
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
