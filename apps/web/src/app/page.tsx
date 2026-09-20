"use client";

import { useEffect, useState } from "react";

interface Color {
  color: string;
}

export default function Home() {
  const [color, setColor] = useState<Color>();

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("http://localhost:8080/hello");
        const data = await res.json();

        setColor(data);
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    };

    load();
  }, []);

  return (
    <div>
      Hello world from Axolotl :)
      <br />
      Color del ajolote: {color?.color}
    </div>
  );
}
