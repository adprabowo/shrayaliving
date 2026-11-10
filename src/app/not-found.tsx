import Link from "next/link";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-screen place-items-center bg-surface-warm px-4">
      <div className="flex max-w-md flex-col items-center gap-4 text-center">
        <Logo className="size-12" />
        <p className="caption-3 uppercase tracking-widest text-accent">404</p>
        <h1 className="heading-4 text-ink">Halaman ini tidak ditemukan</h1>
        <p className="body-3 text-ink-soft">Tautan yang Anda buka mungkin sudah berubah. Kembali ke beranda untuk melihat unit Shraya Living.</p>
        <Link
          href="/"
          className="button-md rounded-xl bg-navy px-3 py-2 text-white transition duration-300 hover:bg-navy-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
        >
          Kembali ke beranda
        </Link>
      </div>
    </main>
  );
}
