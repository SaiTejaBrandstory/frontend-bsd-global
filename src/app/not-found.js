import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="notFoundContainer">
      <div className="notFoundContent">
        <h1 className="notFoundTitle">404</h1>
        <h2 className="notFoundSubtitle">Page Not Found</h2>
        <p className="notFoundText">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="notFoundButton">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
