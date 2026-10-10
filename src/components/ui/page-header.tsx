export function PageHeader({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
}) {
  return (
    <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-start sm:justify-between">
      <div className="min-w-0">
        <h1 className="text-[24px] font-semibold leading-tight text-text sm:text-[28px] md:text-[32px]">
          {title}
        </h1>
        {subtitle && <div className="mt-1 text-sm text-text-secondary">{subtitle}</div>}
      </div>
      {actions && (
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center [&_>_*]:w-full sm:[&_>_*]:w-auto">
          {actions}
        </div>
      )}
    </div>
  );
}
