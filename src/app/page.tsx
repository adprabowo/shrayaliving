import Image from "next/image";
import {
  Bed,
  Bathtub,
  SquaresFour,
  Ruler,
  Car,
  Lightning,
  Drop,
  Toilet,
  TrendUp,
  Medal,
  Sparkle,
  Buildings,
  Tree,
  ShieldCheck,
  Handshake,
  CheckCircle,
  MapPin,
  Phone,
  WhatsappLogo,
  ArrowUpRight,
  Plus,
} from "@phosphor-icons/react/ssr";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import TaglineReveal from "@/components/TaglineReveal";
import Carousel from "@/components/Carousel";
import MortgageCalculator from "@/components/MortgageCalculator";
import Logo from "@/components/Logo";
import { brand, waLink, phoneDisplay, address, mapsEmbed, mapsLink } from "@/lib/site";

const unitSpecs = [
  { icon: Bed, label: "Kamar tidur", value: "2" },
  { icon: Bathtub, label: "Kamar mandi", value: "1" },
  { icon: SquaresFour, label: "Luas tanah", value: "Mulai 130 m²" },
  { icon: Ruler, label: "Luas bangunan", value: "Mulai 60 m²" },
  { icon: Car, label: "Carport", value: "1 mobil + motor" },
  { icon: Lightning, label: "Listrik", value: "2200 watt" },
  { icon: Drop, label: "Air", value: "PDAM" },
  { icon: Toilet, label: "Sanitary", value: "American Standard" },
];

const unitGallery = [
  { src: "/unit/render-1.png", alt: "Fasad depan rumah" },
  { src: "/unit/layout-1.png", alt: "Denah layout unit" },
  { src: "/unit/render-2.png", alt: "Ruang tengah open space" },
  { src: "/unit/render-3.png", alt: "Ruang tengah, sudut lain" },
  { src: "/unit/render-4.png", alt: "Ruang tengah menuju dapur" },
  { src: "/unit/render-5.png", alt: "Kamar tidur utama" },
  { src: "/unit/render-6.png", alt: "Kamar tidur utama, sisi lemari" },
  { src: "/unit/render-7.png", alt: "Kamar tidur anak" },
  { src: "/unit/render-8.png", alt: "Kamar tidur anak, sisi meja belajar" },
  { src: "/unit/render-9.png", alt: "Dapur modern" },
  { src: "/unit/render-10.png", alt: "Ruang makan" },
  { src: "/unit/render-11.png", alt: "Area laundry" },
  { src: "/unit/render-12.png", alt: "Area jemur" },
];

const locationImages = [
  { src: "/unja.jpg", alt: "Universitas Jambi (UNJA)" },
  { src: "/kantorgubernur.jpg", alt: "Kompleks Perkantoran Gubernur Jambi" },
  { src: "/jamtos.jpeg", alt: "Mall Jamtos" },
  { src: "/rsudrm.jpeg", alt: "RSUD Raden Mattaher" },
];

const features = [
  { icon: TrendUp, title: "Harga di bawah pasaran", desc: "Layak ditinggali sendiri sekaligus menjadi investasi yang nilainya terus tumbuh." },
  { icon: Medal, title: "Developer terpercaya", desc: "Dibangun oleh developer ternama dengan rekam jejak proyek di Jambi." },
  { icon: Sparkle, title: "Material berkualitas", desc: "Sanitary American Standard dan Paloma terpasang di setiap unit." },
  { icon: Buildings, title: "Desain Art Deco", desc: "Fasad bergaya Eropa rancangan arsitek ternama, tampil beda di kelasnya." },
  { icon: Tree, title: "Lingkungan asri dan bebas banjir", desc: "Kawasan hijau yang tenang dan aman dari genangan saat musim hujan." },
  { icon: ShieldCheck, title: "Legalitas aman", desc: "SHM, IMB, dan PBB sudah pecah per kavling. Siap dibuktikan langsung ke BPN." },
  { icon: Handshake, title: "Skema syariah", desc: "Cicil langsung ke developer atau lewat KPR Syariah tanpa riba." },
];

const uspPoints = [
  { title: "Urusan harian lebih dekat", desc: "Kampus, kantor, sekolah, dan pusat belanja dalam jangkauan singkat." },
  { title: "Hemat waktu dan biaya", desc: "Ongkos transportasi harian berkurang karena jarak tempuh lebih pendek." },
  { title: "Bebas macet panjang", desc: "Lebih sedikit waktu di jalan, lebih banyak waktu bersama keluarga." },
  { title: "Potensi pemasukan pasif", desc: "Diminati penyewa dari kalangan mahasiswa dan pekerja sekitar." },
  { title: "Nilai properti tumbuh", desc: "Berada di kawasan Kota Baru yang terus berkembang." },
];

const nearby = [
  "Universitas Jambi (UNJA)",
  "Kompleks Perkantoran Gubernur",
  "Mall Jamtos",
  "Trona Express",
  "Terminal Alam Barajo",
  "Sekolah Al Azhar",
  "RSUD Raden Mattaher",
];

const faqs = [
  {
    q: "Berapa harga rumah di Shraya Living?",
    a: "Harga mulai Rp400 jutaan, syarat dan ketentuan berlaku. Harga per kavling bisa berbeda tergantung luas tanah, jadi hubungi kami lewat WhatsApp untuk daftar harga terbaru.",
  },
  {
    q: "Skema pembayaran apa saja yang tersedia?",
    a: "Anda bisa mencicil langsung ke developer atau memakai KPR Syariah dengan akad murabahah, tanpa riba.",
  },
  {
    q: "Bagaimana status legalitasnya?",
    a: "Setiap kavling sudah memiliki SHM, IMB, dan PBB yang dipecah per kavling. Dokumen siap dibuktikan langsung ke BPN.",
  },
  {
    q: "Berapa luas tanah dan bangunan setiap unit?",
    a: "Luas tanah mulai 130 m² dan luas bangunan mulai 60 m², dengan 2 kamar tidur, 1 kamar mandi, dan carport untuk 1 mobil plus motor.",
  },
  {
    q: "Di mana lokasi tepatnya?",
    a: `${address}. Sekitar 10 menit berkendara ke UNJA dan Kompleks Perkantoran Gubernur.`,
  },
  {
    q: "Apakah kawasannya rawan banjir?",
    a: "Tidak. Lingkungan Shraya Living asri dan aman dari banjir.",
  },
  {
    q: "Apakah cocok untuk disewakan?",
    a: "Cocok. Lokasinya dekat kampus dan perkantoran, sehingga diminati penyewa dari kalangan mahasiswa dan pekerja.",
  },
  {
    q: "Bagaimana cara survey lokasi?",
    a: "Kirim pesan lewat WhatsApp, lalu tim kami mengatur jadwal kunjungan sesuai waktu Anda. Konsultasi gratis tanpa kewajiban membeli.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const primaryBtn =
  "button-md inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-3 py-2 text-white transition duration-300 ease-base hover:bg-accent-hover active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function SectionHead({ eyebrow, title, desc, light = false }: { eyebrow: string; title: string; desc?: string; light?: boolean }) {
  return (
    <div className="mb-12 max-w-[680px]">
      <p className={`caption-3 mb-3 uppercase tracking-widest ${light ? "text-orange-300" : "text-accent"}`}>{eyebrow}</p>
      <h2 className={`heading-4 md:heading-3 ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {desc && <p className={`body-3 mt-4 ${light ? "text-white/70" : "text-ink-soft"}`}>{desc}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        {/* Hero */}
        <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy-deep">
          <Image src="/fasad.png" alt="Fasad rumah Shraya Living bergaya Art Deco" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-navy-deep/70" />
          <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-32 md:pb-24">
            <div>
              <p className="caption-3 mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 uppercase tracking-widest text-white/80 backdrop-blur">
                <MapPin size={14} weight="fill" /> Kenali Besar, Jambi
              </p>
              <h1 className="heading-3 md:heading-2 max-w-[680px] bg-gradient-to-r from-white to-[#9B9B9B] bg-clip-text pb-2 text-transparent">
                Cluster mewah
                <br />
                paling dekat <span className="whitespace-nowrap">dari UNJA</span>
              </h1>
              <p className="body-3 md:title-1 mt-6 max-w-[680px] text-white/80 md:font-normal">
                Rumah 2 kamar bergaya Art Deco, 10 menit dari UNJA dan Kompleks Perkantoran Gubernur. Harga mulai Rp400 jutaan dengan skema KPR Syariah.
              </p>
              <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
                <a href={waLink} target="_blank" rel="noopener noreferrer" className={`${primaryBtn} button-lg px-6 py-3`}>
                  <WhatsappLogo size={22} weight="fill" /> Jadwalkan survey lokasi
                </a>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-white/80">
                  {["Legalitas SHM", "KPR Syariah tanpa riba", "Bebas banjir"].map((p) => (
                    <li key={p} className="body-5 flex items-center gap-2">
                      <CheckCircle size={18} weight="fill" className="text-orange-300" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Unit */}
        <section id="unit" className="bg-surface-warm py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <SectionHead
                eyebrow="Tipe unit"
                title="Rumah yang dirancang untuk keluarga kecil yang terus tumbuh"
                desc="Perpaduan fasad Art Deco dengan tata ruang modern yang lapang. Spesifikasi lengkap di kelasnya, dengan harga yang tetap terjangkau."
              />
            </Reveal>
            <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
              <Reveal className="rounded-3xl border border-line bg-white p-2">
                <dl className="grid grid-cols-2 gap-2">
                  {unitSpecs.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex flex-col gap-3 rounded-2xl bg-surface-warm p-4">
                      <Icon size={24} weight="duotone" className="text-navy" />
                      <div>
                        <dt className="caption-5 text-ink-soft">{label}</dt>
                        <dd className="body-1 text-ink">{value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </Reveal>
              <Reveal delay={120}>
                <Carousel slides={unitGallery} label="Galeri unit" className="aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-80" />
              </Reveal>
            </div>
          </div>
        </section>

        <TaglineReveal />

        {/* Keunggulan */}
        <section id="keunggulan" className="bg-surface-warm py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <SectionHead eyebrow="Keunggulan" title={`Kenapa keluarga memilih ${brand}`} />
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, desc }, idx) => (
                <Reveal
                  key={title}
                  delay={(idx % 3) * 80}
                  className="group rounded-3xl border border-line bg-white p-6 transition-transform duration-500 ease-base hover:-translate-y-1"
                >
                  <div className="mb-6 grid size-12 place-items-center rounded-2xl bg-navy/10 text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                    <Icon size={24} weight="duotone" />
                  </div>
                  <h3 className="title-2 text-ink">{title}</h3>
                  <p className="body-6 mt-2 text-ink-soft">{desc}</p>
                </Reveal>
              ))}
              <Reveal className="flex flex-col justify-between gap-6 rounded-3xl bg-navy p-6 text-white sm:col-span-2 lg:col-span-2">
                <p className="heading-6">Konsultasi gratis, tanpa kewajiban membeli.</p>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className={`${primaryBtn} self-start`}>
                  <WhatsappLogo size={20} weight="fill" /> Tanya lewat WhatsApp
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Lokasi */}
        <section id="lokasi" className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <SectionHead
                eyebrow="Lokasi"
                title="Semua kebutuhan harian dalam radius 10 menit"
                desc="Berada di Kenali Besar, Kota Baru, kawasan yang dekat dengan pusat pendidikan, pemerintahan, dan kesehatan di Jambi."
              />
            </Reveal>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
              <Reveal className="lg:col-span-3">
                <Carousel slides={locationImages} label="Tempat penting di sekitar lokasi" className="aspect-video" sizes="(min-width: 1024px) 60vw, 100vw" />
              </Reveal>
              <Reveal delay={120} className="flex flex-col gap-6 lg:col-span-2">
                <ul className="flex flex-col gap-4">
                  {uspPoints.map((p) => (
                    <li key={p.title} className="flex gap-3">
                      <CheckCircle size={22} weight="fill" className="mt-0.5 shrink-0 text-accent" />
                      <div>
                        <p className="title-3 text-ink">{p.title}</p>
                        <p className="body-6 text-ink-soft">{p.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div>
                  <p className="caption-3 mb-3 uppercase tracking-widest text-ink-soft">Di sekitar Anda</p>
                  <ul className="flex flex-wrap gap-2">
                    {nearby.map((n) => (
                      <li key={n} className="caption-1 rounded-full border border-line px-3 py-1 text-ink">
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Harga */}
        <section id="harga" className="bg-navy-deep py-20 text-white md:py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 xl:grid-cols-5">
            <Reveal className="xl:col-span-2">
              <SectionHead
                light
                eyebrow="Harga"
                title="Termewah di kelasnya, dengan harga yang masuk akal"
                desc="Hitung sendiri estimasi cicilan bulanan Anda, lalu konsultasikan angka finalnya dengan tim kami."
              />
              <div className="rounded-3xl border border-white/15 p-6">
                <p className="caption-3 uppercase tracking-widest text-orange-300">Harga mulai</p>
                <p className="heading-3 md:heading-2 mt-2 tabular-nums">Rp400 jutaan</p>
                <p className="caption-5 mt-3 text-white/60">Syarat dan ketentuan berlaku.</p>
              </div>
            </Reveal>
            <Reveal delay={120} className="text-ink xl:col-span-3">
              <MortgageCalculator />
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-surface-warm py-20 md:py-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 lg:grid-cols-5">
            <Reveal className="lg:col-span-2">
              <SectionHead eyebrow="FAQ" title="Pertanyaan yang sering ditanyakan" desc="Belum menemukan jawabannya? Tanyakan langsung lewat WhatsApp." />
            </Reveal>
            <Reveal delay={120} className="flex flex-col gap-2 lg:col-span-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-line bg-white open:shadow-sm">
                  <summary className="title-3 flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-4 text-ink focus-visible:outline-2 focus-visible:outline-navy md:p-6 [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Plus size={20} className="shrink-0 text-ink-soft transition-transform duration-500 ease-base group-open:rotate-45" />
                  </summary>
                  <p className="body-6 px-4 pb-4 text-ink-soft md:px-6 md:pb-6">{f.a}</p>
                </details>
              ))}
            </Reveal>
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        </section>

        {/* Final CTA */}
        <section className="bg-surface-warm pb-20 md:pb-24">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal className="flex flex-col items-start gap-6 rounded-3xl bg-accent p-8 text-white md:flex-row md:items-center md:justify-between md:p-12">
              <div className="max-w-[680px]">
                <p className="caption-3 mb-3 inline-block rounded-full bg-white/15 px-3 py-1 uppercase tracking-widest">Hanya 8 unit tersisa</p>
                <h2 className="heading-4 md:heading-3">Lihat langsung unitnya sebelum kehabisan</h2>
                <p className="body-3 mt-3 text-white/80">Konsultasi gratis dan dapatkan penawaran terbaik untuk unit {brand}.</p>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="button-lg inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 text-accent transition duration-300 ease-base hover:bg-white/90 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <WhatsappLogo size={22} weight="fill" /> Jadwalkan survey lokasi
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="kontak" className="bg-navy-deep pb-8 pt-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Logo light className="size-9" />
                <span className="title-1">{brand}</span>
              </div>
              <p className="body-6 text-white/60">
                Hunian berkualitas dengan harga terjangkau di lokasi strategis Kota Jambi. Investasi untuk masa depan keluarga Anda.
              </p>
            </div>
            <div>
              <h3 className="title-3 mb-4">Hubungi kami</h3>
              <ul className="body-6 flex flex-col gap-4 text-white/70">
                <li className="flex gap-3">
                  <MapPin size={20} className="shrink-0 text-orange-300" />
                  <span>{address}</span>
                </li>
                <li>
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex gap-3 transition-colors duration-300 hover:text-white">
                    <Phone size={20} className="shrink-0 text-orange-300" />
                    {phoneDisplay}
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="title-3 mb-4">Lokasi proyek</h3>
              <div className="h-48 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <iframe
                  title={`Peta lokasi ${brand}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  src={mapsEmbed}
                  className="grayscale transition duration-500 ease-base hover:grayscale-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="caption-1 mt-3 inline-flex items-center gap-1 text-orange-300 transition-colors duration-300 hover:text-white"
              >
                Buka di Google Maps <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
          <div className="caption-5 mt-12 border-t border-white/10 pt-8 text-center text-white/50">
            © 2026 {brand}. Seluruh hak cipta dilindungi.
          </div>
        </div>
      </footer>
    </>
  );
}
