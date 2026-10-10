import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

export function SuccessState({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <Card className="mx-auto flex max-w-lg flex-col items-center px-6 py-14 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success-bg text-success">
        <CheckCircle2 className="h-7 w-7" />
      </div>
      <h2 className="text-xl font-semibold text-text">{title}</h2>
      <p className="mt-2 text-sm text-text-secondary">{description}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <Link href={primaryHref}>
          <Button>{primaryLabel}</Button>
        </Link>
        {secondaryHref && secondaryLabel && (
          <Link href={secondaryHref}>
            <Button variant="outline">{secondaryLabel}</Button>
          </Link>
        )}
      </div>
    </Card>
  );
}
