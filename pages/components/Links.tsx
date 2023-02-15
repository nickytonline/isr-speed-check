import Link from "next/link";

export default function Links() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Fast Data</Link>
        </li>
        <li>
          <Link href="/slow-data">Slow Data</Link>
        </li>
      </ul>
    </nav>
  );
}
