import { CodeBlock } from '@/components/code-block';
import { Button } from '@/components/ui/button';
import { getData } from './getData';
import { action } from './actions';

const code = `const getData = async (apiUrl: string) => {
  const res = await fetch(apiUrl);
  return res.json();
};
export default async function Home() {
  const seoul = await getData(
    'http://worldtimeapi.org/api/timezone/Asia/Seoul'
  );

  ...
}
`;

export default async function Home() {
  const seoul = await getData(
    'http://worldtimeapi.org/api/timezone/Asia/Seoul'
  );

  return (
    <div className="space-y-10">
      <div className="text-lg">
        <ul className="list-disc list-inside">
          <li>
            <span className="font-bold">Data cache</span>: persistent
          </li>
          <li>
            <span className="font-bold">Full route cache</span>: persistent
          </li>
          <li>
            <span className="font-bold">Behavior</span>: Reloading this page
            will not update the UI unless you manually revalidate with
            revalidatePath
          </li>
        </ul>
      </div>
      <div className="flex justify-between border rounded-lg p-8 items-center bg-secondary">
        <div className="text-xl font-semibold text-orange-300 space-x-4">
          Seoul: {seoul.datetime}
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
