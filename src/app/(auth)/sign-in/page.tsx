"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/brand/logo";
import { FigmaIcon } from "@/components/icons/figma-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { assets } from "@/lib/assets";

const aiCards = [
  {
    icon: "boxMinusWhite" as const,
    title: "Reorder Suggested",
    description: "12 SKUs below reorder point.",
    action: "Restock",
  },
  {
    icon: "arrowsRepeatWhite" as const,
    title: "Stock Redistribution",
    description: "Move 48 pcs of SKN-014.",
    action: "Transfer",
  },
  {
    icon: "hourglass" as const,
    title: "Expiring Soon",
    description: "24 lots expire within 30 days.",
    action: "Review",
  },
  {
    icon: "chartPieWhite" as const,
    title: "Slow Moving Items",
    description: "12 SKUs have no movement in 60 days.",
    action: "Review",
  },
  {
    icon: "warehouseWhite" as const,
    title: "Putaway Optimization",
    description: "12 incoming items can be stored closer.",
    action: "Review",
  },
];

export default function SignInPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid min-h-screen bg-white lg:grid-cols-2">
      {/* Left AI marketing panel — Figma 6018:128948 */}
      <section className="relative hidden overflow-hidden p-6 lg:flex lg:items-center lg:justify-center">
        <div className="relative flex h-full min-h-[860px] w-full max-w-[672px] flex-col items-center justify-center overflow-hidden rounded-[20px] bg-[#f4f4f6] px-8 py-10">
          <div className="relative z-[1] flex w-full max-w-[560px] flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 overflow-hidden rounded-2xl border border-white bg-white px-3.5 py-2">
              <FigmaIcon name="sparkle" size={20} />
              <span
                className="text-sm font-medium"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.05) 38%, rgba(255,255,255,0) 100%), linear-gradient(165deg, #034956 0%, #056f7a 38%, #0e968b 74%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                AI Powered Warehouse
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-display text-[32px] font-medium leading-[45px] text-[#42424d]">
                Let AI run your warehouse smarter.
              </h1>
              <p className="text-base leading-6 text-[#717184]">
                Goodra predicts demand, suggests optimal storage, and flags low stock before it
                happens, so your team moves faster with fewer mistakes.
              </p>
            </div>

            <div className="relative mt-2 h-[420px] w-full overflow-hidden">
              <div className="absolute -right-8 top-0 h-[540px] w-[720px]">
                <Image
                  src={assets.signinDashboard}
                  alt="Goodra dashboard preview"
                  fill
                  className="object-cover object-left-top"
                  sizes="560px"
                  priority
                />
              </div>

              <div
                className="absolute -right-8 bottom-6 z-[2] flex w-[254px] flex-col gap-3.5 overflow-hidden rounded-[10px] p-3.5 shadow-[0px_4.7px_10.6px_0px_rgba(28,78,79,0.1),0px_18.8px_18.8px_0px_rgba(28,78,79,0.09)]"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.05) 38%, rgba(255,255,255,0) 100%), linear-gradient(121deg, #034956 0%, #056f7a 38%, #0e968b 74%)",
                }}
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex flex-1 items-center gap-1.5">
                    <FigmaIcon name="sparkleAi" size={20} className="brightness-0 invert" />
                    <p className="text-[13px] font-medium text-white">AI Suggestions</p>
                  </div>
                  <span className="text-[11.5px] font-medium text-white">View All</span>
                  <FigmaIcon name="angleRight" size={13} className="brightness-0 invert" />
                </div>
                <div className="flex flex-col gap-3.5">
                  {aiCards.slice(0, 4).map((card) => (
                    <div key={card.title} className="flex items-center gap-1.5">
                      <div className="flex size-[26px] shrink-0 items-center justify-center rounded-lg bg-white/13">
                        <FigmaIcon name={card.icon} size={13} />
                      </div>
                      <div className="min-w-0 flex-1 text-white">
                        <p className="truncate text-[10px] font-medium leading-4">{card.title}</p>
                        <p className="truncate text-[8px] leading-3 opacity-60">{card.description}</p>
                      </div>
                      <span className="shrink-0 rounded-md bg-[#f4f4f6] px-1.5 py-0.5 text-[10px] font-medium text-[#42424d]">
                        {card.action}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-start justify-center px-4 py-8 sm:px-6 sm:py-12 lg:items-center">
        <div className="w-full max-w-[450px]">
          <div className="mb-8 overflow-hidden rounded-[20px] bg-[#f4f4f6] p-5 lg:hidden">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-2xl border border-white bg-white px-2.5 py-1.5">
              <FigmaIcon name="sparkle" size={16} />
              <span className="text-xs font-medium text-primary-600">AI Powered Warehouse</span>
            </div>
            <h1 className="font-display text-2xl font-medium leading-snug text-[#42424d]">
              Let AI run your warehouse smarter.
            </h1>
            <p className="mt-2 text-sm text-[#717184]">
              Goodra predicts demand, suggests optimal storage, and flags low stock before it
              happens, so your team moves faster with fewer mistakes.
            </p>
          </div>

          <Logo href="/sign-in" className="mb-8" />
          <h2 className="font-display text-[40px] font-medium leading-[48px] text-[#42424d]">
            Welcome Back
          </h2>
          <p className="mt-3 text-base leading-6 text-[#717184]">
            Sign in to your Goodra workspace to continue.
          </p>

          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              router.push("/");
            }}
          >
            <div>
              <label className="mb-2 block text-sm font-medium text-[#42424d]">Email</label>
              <Input type="email" placeholder="Enter your email" required className="shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-[#42424d]">Password</label>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                className="shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]"
                leftIcon={<FigmaIcon name="lock" size={20} />}
                rightIcon={
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="text-[#717184] hover:text-[#42424d]"
                    aria-label="Toggle password"
                  >
                    <FigmaIcon name="eye" size={16} />
                  </button>
                }
              />
            </div>
            <div className="flex h-6 items-center justify-between text-sm">
              <label className="inline-flex items-center gap-3 text-base font-medium text-[#42424d]">
                <span className="inline-block size-5 rounded-[4px] border border-primary-600 bg-white" />
                Remember me
              </label>
              <Link href="/reset-password" className="font-medium text-primary-600 hover:text-primary-700">
                Forgot Password?
              </Link>
            </div>
            <Button
              type="submit"
              className="relative w-full overflow-hidden rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
              size="lg"
              style={{
                backgroundImage: "linear-gradient(90deg, rgba(4, 91, 101, 0.6) 0%, #045b65 50%)",
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-[-1px] rounded-lg"
                style={{
                  backgroundImage:
                    "linear-gradient(-8.4deg, rgba(255,255,255,0.55) 12.376%, rgba(255,255,255,0.08) 38.713%, rgba(255,255,255,0) 87.624%)",
                }}
              />
              <span className="relative z-[1]">Sign in</span>
            </Button>
            <div className="flex h-5 items-center gap-3">
              <span className="h-px flex-1 bg-[#e3e3e8]" />
              <span className="text-sm text-[#717184]">or</span>
              <span className="h-px flex-1 bg-[#e3e3e8]" />
            </div>
            <Button
              type="button"
              variant="outline"
              className="w-full rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
              size="lg"
              onClick={() => router.push("/")}
            >
              Sign in with SSO
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
