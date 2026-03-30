import { useEffect, useState } from "react";

export default function App() {
  const [events, setEvents] = useState<null | { id: number; title: string }[]>(
    null,
  );

  useEffect(() => {
    async function getEvents() {
      const response = await fetch(
        "https://api-serverless-deployment.vercel.app/api/events",
      );
      const data = await response.json();
      setEvents(data.data);
    }

    getEvents();
  }, []);

  return (
    <main>
      <h1>Welcome to Eventiyf!</h1>
      {events && events.map(({ title }) => <li>{title}</li>)}
    </main>
  );
}
