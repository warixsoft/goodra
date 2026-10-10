"use client";

import Link from "next/link";
import { useState } from "react";
import { Upload } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";

export default function ImportProductsPage() {
  const [uploading, setUploading] = useState(false);

  return (
    <AppShell
      breadcrumbs={[
        { label: "Item Management", href: "/products" },
        { label: "Product Item", href: "/products" },
        { label: "Import Data" },
      ]}
    >
      <PageHeader title="Import Data" subtitle="Upload an Excel or CSV file to bulk create product items." />
      <Card className="mx-auto max-w-xl p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-600">
          <Upload className="h-7 w-7" />
        </div>
        <h3 className="text-lg font-semibold">Upload spreadsheet</h3>
        <p className="mt-2 text-sm text-text-secondary">
          Supported formats: .xlsx, .csv. Download the template to match required columns.
        </p>
        {uploading ? (
          <div className="mt-6">
            <div className="mx-auto h-2 w-full max-w-xs overflow-hidden rounded-full bg-border">
              <div className="h-full w-2/3 animate-pulse rounded-full bg-primary-600" />
            </div>
            <p className="mt-3 text-sm text-text-secondary">Uploading product_items.xlsx…</p>
          </div>
        ) : (
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Button variant="outline">Download template</Button>
            <Button
              onClick={() => {
                setUploading(true);
                setTimeout(() => {
                  window.location.href = "/products/import/success";
                }, 1200);
              }}
            >
              Choose file
            </Button>
          </div>
        )}
        <Link href="/products" className="mt-6 inline-block text-sm text-primary-600">
          Back to products
        </Link>
      </Card>
    </AppShell>
  );
}
