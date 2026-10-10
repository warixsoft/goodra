# Goodra WMS — Next.js Frontend

Frontend recreation of the [Goodra SaaS WMS Dashboard UI Kit](https://www.figma.com/design/IHL6QzI5fbYvwGOXjOwvTk/Lite---Goodra---Saas-WMS-Dashboard-UI-Kit) with Next.js App Router, TypeScript, Tailwind CSS v4, Lucide, and Recharts. Mock data only.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown). Sign-in accepts any credentials.

## Routes

### Auth
| Route | Screen |
|-------|--------|
| `/sign-in` | Sign In |
| `/reset-password` | Reset password |
| `/reset-password/check-email` | Check email |
| `/reset-password/create` | Create new password |
| `/reset-password/success` | Reset success |

### Dashboard & AI
| Route | Screen |
|-------|--------|
| `/` | Dashboard / Default |
| `/ai` | AI Assistant |
| `/ai/expand` | Dashboard Expand AI |
| `/notifications` | Notifications |

### Item management
| Route | Screen |
|-------|--------|
| `/products` | Product table (+ filter/bulk/delete) |
| `/products/cards` | Card view |
| `/products/add` | Add product |
| `/products/import` | Import data |
| `/products/import/success` | Import success |
| `/products/print-barcode` | Print barcode |
| `/products/[sku]` | Detail overview |
| `/products/[sku]/stock` | Stock by warehouse |
| `/products/[sku]/activity` | Activity |
| `/products/[sku]/history` | History |
| `/categories` | Categories table |
| `/categories/add` | Add category |
| `/categories/add/success` | Add success |
| `/categories/[name]` | Category detail |

### Alerts & restock
| Route | Screen |
|-------|--------|
| `/low-stock` | Low stock table + filter |
| `/low-stock/empty` | Empty state |
| `/low-stock/restock` | Single restock |
| `/low-stock/bulk` | Bulk restock |
| `/restock` | Restock requests |
| `/restock/empty` | First timer |
| `/restock/[id]` | Restock detail |

### Warehouse structure
| Route | Screen |
|-------|--------|
| `/warehouses` | Overview map |
| `/warehouses/add` | Add warehouse |
| `/warehouses/add/success` | Add success |
| `/warehouses/empty` | First timer |
| `/warehouses/[id]` | Warehouse detail |
| `/zones` | Zone table |
| `/zones/add` | Add zone |
| `/zones/add/success` | Add success |
| `/zones/empty` | First timer |
| `/zones/[code]` | Zone detail |
| `/racks` | Rack table |
| `/racks/add` | Add rack |
| `/racks/empty` | First timer |
| `/racks/layout-map` | Layout map |
| `/racks/[code]` | Rack detail |
| `/bins` | Bin table |
| `/bins/empty` | First timer |
| `/bins/layout-map` | Layout map |
| `/bins/move` | Move item wizard |
| `/bins/move/success` | Move success |
| `/bins/[code]` | Bin detail |

### Transactions
| Route | Screen |
|-------|--------|
| `/transactions/stock-in` | Stock In list |
| `/transactions/stock-in/add` | 3-step create |
| `/transactions/stock-in/add/success` | Success |
| `/transactions/stock-in/[id]` | Detail |
| `/transactions/stock-in/[id]/qc` | Start QC |
| `/transactions/stock-out` | Stock Out list |
| `/transactions/stock-out/add` | 3-step create |
| `/transactions/stock-out/[id]` | Detail |
| `/transactions/stock-out/[id]/picking` | Start picking |
| `/transactions/stock-out/[id]/picking/success` | Picking done |
| `/transactions/stock-out/[id]/packing` | Start packing |
| `/transactions/transfer` | Transfer list |
| `/transactions/transfer/add` | 3-step create |
| `/transactions/transfer/add/success` | Success |
| `/transactions/transfer/[id]` | Detail |
| `/transactions/transfer/[id]/received` | Receive |
| `/transactions/transfer/[id]/putaway` | Putaway |
| `/transactions/adjustment` | Adjustment list |
| `/transactions/adjustment/add` | Add + evidence |
| `/transactions/adjustment/[id]` | Detail |
| `/transactions/opname` | Opname list |
| `/transactions/opname/start` | Start count |
| `/transactions/opname/[id]` | Progress |
| `/transactions/opname/[id]/review` | Variance review |
| `/transactions/opname/[id]/submit` | Submitted |

### Reports & settings
| Route | Screen |
|-------|--------|
| `/reports` | Reports + advanced filter |
| `/settings` | Profile / Users / Notifications / AI |

## Responsive

Aligned to the [Goodra Responsive](https://www.figma.com/design/IHL6QzI5fbYvwGOXjOwvTk/Lite---Goodra---Saas-WMS-Dashboard-UI-Kit?node-id=6120-111354&m=dev) page (~393px):

- Mobile header (menu, AI, search, bell, avatar) + slide-over nav drawer
- Desktop sidebar + breadcrumb header from `lg`
- Tables become card lists below `md`
- Filters/modals as bottom sheets on small screens
- Sign-in: stacked marketing banner on mobile, split layout on desktop
- Dashboard & warehouse grids reflow for phone widths

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 tokens in `src/app/globals.css`
- Shared UI: Modal, Steps, Tabs, FilterPanel, SuccessState, WizardShell, ResponsiveTable
- Lucide icons + Recharts
- Shell: `Sidebar` + `MobileHeader` / `DesktopHeader`
