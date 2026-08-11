type PricingCardProps = {
  name: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
};

export function PricingCard({
  name,
  description,
  price,
  features,
  popular,
  buttonText,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        popular
          ? "border-blue-500 bg-blue-500 text-white shadow-lg shadow-blue-200"
          : "border-gray-200 bg-white"
      }`}
    >
      {popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white shadow-md">
          Mais popular
        </span>
      )}

      <div>
        <h2
          className={`text-xl font-bold ${
            popular ? "text-white" : "text-gray-900"
          }`}
        >
          {name}
        </h2>

        <p
          className={`mt-2 min-h-[48px] text-sm leading-6 ${
            popular ? "text-blue-100" : "text-gray-500"
          }`}
        >
          {description}
        </p>
      </div>

      <div className="mt-6">
        <div className="flex items-end gap-1">
          <span
            className={`text-4xl font-bold ${
              popular ? "text-white" : "text-gray-900"
            }`}
          >
            {price}
          </span>
        </div>
      </div>

      <a
        href="/contactos"
        className={`mt-8 rounded-xl px-5 py-3 text-center text-sm font-semibold transition ${
          popular
            ? "bg-white text-blue-600 hover:bg-blue-50"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        {buttonText}
      </a>

      <div className="mt-8 border-t pt-6">
        <p
          className={`mb-4 text-sm font-semibold ${
            popular ? "text-white" : "text-gray-900"
          }`}
        >
          O que está incluído:
        </p>

        <ul className="space-y-4">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  popular
                    ? "bg-white text-blue-500"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                ✓
              </span>

              <span
                className={`text-sm ${
                  popular ? "text-blue-50" : "text-gray-600"
                }`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
