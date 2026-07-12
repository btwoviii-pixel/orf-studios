interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  className = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-32 md:py-40 ${className}`}
    >
      <div className="container mx-auto max-w-7xl px-6">
        {children}
      </div>
    </section>
  );
}