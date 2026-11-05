import Link from 'next/link';
export default function BreadCrumb({ currentLabel }: { currentLabel: string }) {
  return (
    <nav aria-label="مسیر راهنما">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        <li>
          <Link
            className="text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
            href={'/'}
          >
            خانه
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <span aria-hidden="true">|</span>
          <span className="text-text" aria-current="page">
            {currentLabel}
          </span>
        </li>
      </ol>
    </nav>
  );
}
