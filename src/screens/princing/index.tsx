import React from "react";
import { PricingCard } from "../../components/pricing/pricing-card";
import ProductsPricing from "../../constants/produts";

export default function Pricing() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
            Preços simples
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Escolha o plano ideal para si
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Planos simples e transparentes para acompanhar o crescimento do seu
            negócio. Comece gratuitamente e faça upgrade quando precisar.
          </p>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {ProductsPricing.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gray-900 px-6 py-12 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ainda não sabe qual escolher?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Entre em contacto connosco e descubra qual plano é mais adequado
            para as suas necessidades.
          </p>

          <a
            href="/contactos"
            className="mt-7 inline-block rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Falar com a nossa equipa
          </a>
        </div>
      </section>
    </main>
  );
}
