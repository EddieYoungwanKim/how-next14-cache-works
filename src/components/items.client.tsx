'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

async function getItems() {
  const seoul = await fetch(
    'http://worldtimeapi.org/api/timezone/Asia/Seoul',
    {}
  ).then((response) => response.json());
  return seoul;
}
export default function Items() {
  const router = useRouter();
  const [date, setDate] = useState();
  useEffect(() => {
    getItems().then((data) => {
      setDate(data.date);
      console.log('items', data);
    });
  }, []);
  return (
    <div>
      <div>
        <div>{date}</div>
        <button onClick={router.refresh}>refresh the page</button>
      </div>
    </div>
  );
}
