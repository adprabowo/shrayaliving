"use client";

import { useState } from "react";
import { Calculator } from "@phosphor-icons/react";
import { waLink } from "@/lib/site";

const rupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

const MARGIN = 8; // flat per year, murabahah estimate

export default function MortgageCalculator() {
  const [price, setPrice] = useState(400_000_000);
  const [dp, setDp] = useState(20);
  const [years, setYears] = useState(15);

  const priceValid = price >= 100_000_000;
  const principal = price - price * (dp / 100);
  const monthly = priceValid ? (principal + principal * (MARGIN / 100) * years) / (years * 12) : 0;

  const field =
    "body-3 w-full rounded-xl border border-line bg-white px-3 py-2 text-ink transition-colors duration-300 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20";

  return (
    <div className="rounded-3xl border border-line bg-white p-2 shadow-xl shadow-navy/5">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <div className="flex flex-col gap-6 p-4 md:p-6">
          <div className="flex items-center gap-2 text-navy">
            <Calculator size={24} weight="duotone" />
            <h3 className="heading-6">Simulasi KPR Syariah</h3>
          </div>

          <div>
            <label htmlFor="price" className="title-4 mb-2 block text-ink">
              Harga properti
            </label>
            <input
              id="price"
              type="number"
              inputMode="numeric"
              min={100_000_000}
              step={1_000_000}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              aria-invalid={!priceValid}
              aria-describedby="price-help"
              className={`${field} ${priceValid ? "" : "border-accent focus:border-accent focus:ring-accent/20"}`}
            />
            <p id="price-help" className={`caption-5 mt-2 ${priceValid ? "text-ink-soft" : "text-accent"}`}>
              {priceValid ? rupiah(price) : "Masukkan harga minimal Rp100.000.000."}
            </p>
          </div>

          <div>
            <div className="mb-2 flex items-baseline justify-between">
              <label htmlFor="dp" className="title-4 text-ink">
                Uang muka
              </label>
              <span className="body-4 font-semibold text-navy">{dp}%</span>
            </div>
            <input
              id="dp"
              type="range"
              min={0}
              max={50}
              value={dp}
              onChange={(e) => setDp(Number(e.target.value))}
              className="w-full accent-navy"
            />
            <p className="caption-5 mt-2 text-ink-soft">Estimasi DP {rupiah(price * (dp / 100))}</p>
          </div>

          <div>
            <label htmlFor="years" className="title-4 mb-2 block text-ink">
              Jangka waktu
            </label>
            <select id="years" value={years} onChange={(e) => setYears(Number(e.target.value))} className={field}>
              {[5, 10, 15, 20].map((y) => (
                <option key={y} value={y}>
                  {y} tahun
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 rounded-2xl bg-navy p-6 text-white md:p-8">
          <p className="caption-1 text-white/70">Estimasi angsuran per bulan</p>
          <p className="heading-4 md:heading-3 tabular-nums">{rupiah(monthly)}</p>
          <p className="caption-5 text-white/60">
            Estimasi dengan margin {MARGIN}% flat per tahun (akad murabahah). Angka final mengikuti hasil konsultasi.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button-md mt-2 rounded-xl bg-white px-3 py-2 text-center text-navy transition duration-300 ease-base hover:bg-white/90 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Konsultasi KPR via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
