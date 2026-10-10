import { Input } from "./input";

export function FormField({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-text">{label}</label>
      {children}
      {hint && <p className="mt-1 text-xs text-text-muted">{hint}</p>}
    </div>
  );
}

export function SelectField({
  label,
  options,
  defaultValue,
  className,
}: {
  label: string;
  options: string[];
  defaultValue?: string;
  className?: string;
}) {
  return (
    <FormField label={label}>
      <select
        defaultValue={defaultValue}
        className={`h-[42px] w-full rounded-[8px] border border-border bg-white px-3 text-sm focus-ring ${className ?? ""}`}
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </FormField>
  );
}

export function TextField({
  label,
  placeholder,
  type = "text",
  defaultValue,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  defaultValue?: string;
}) {
  return (
    <FormField label={label}>
      <Input type={type} placeholder={placeholder} defaultValue={defaultValue} />
    </FormField>
  );
}
