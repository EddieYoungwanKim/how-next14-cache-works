export default async function Items() {
  const data = await fetch('http://localhost:3000/items').then((response) =>
    response.json()
  );
  return (
    <div>
      this is server component
      <div></div>
    </div>
  );
}
