type Props = {
  imgSource: string;
  title: string;
  description: string;
  price: string;
  reverse?: boolean;
};

export function SectionProducts({
  imgSource,
  title,
  description,
  price,
  reverse = false,
}: Props) {
  return (
    <section
      className={`
        flex min-h-dvh w-full flex-col items-center justify-center
        gap-10 px-6 py-16
        md:px-10
        lg:flex-row lg:gap-20
        ${reverse ? "lg:flex-row-reverse bg-white" : ""}
      `}
    >
      <div className={`w-full max-w-md shrink-0`}>
        <img
          src={imgSource}
          alt={title}
          loading="lazy"
          className="h-auto max-h-[500px] w-full object-contain"
        />
      </div>

      <div className="flex w-full max-w-2xl flex-col items-start gap-5">
        <h2 className="font-bold text-4xl leading-tight text-gray-800 md:text-5xl lg:text-7xl">
          {title}
        </h2>

        <p className="text-lg font-medium leading-relaxed text-gray-600 md:text-xl lg:text-2xl">
          {description}
        </p>

        <p className="text-2xl font-semibold text-yellow-500 md:text-3xl">
          {price}
        </p>
      </div>
    </section>
  );
}
