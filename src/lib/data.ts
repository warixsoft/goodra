export const operations = [
  { label: "Receiving", count: 8, status: "Pending", color: "bg-blue-50 text-blue-600", icon: "inbox" },
  { label: "Putaway", count: 5, status: "Pending", color: "bg-cyan-50 text-cyan-600", icon: "package-check" },
  { label: "Picking", count: 12, status: "Pending", color: "bg-violet-50 text-violet-600", icon: "hand" },
  { label: "Packing", count: 9, status: "Pending", color: "bg-fuchsia-50 text-fuchsia-600", icon: "package" },
  { label: "Transfers", count: 6, status: "Pending", color: "bg-amber-50 text-amber-600", icon: "arrow-left-right" },
  { label: "Opname", count: 4, status: "Pending", color: "bg-emerald-50 text-emerald-600", icon: "clipboard-list" },
  { label: "Quarantine", count: 7, status: "Pending", color: "bg-rose-50 text-rose-600", icon: "shield-alert" },
  { label: "Adjustment", count: 6, status: "Pending", color: "bg-orange-50 text-orange-600", icon: "sliders-horizontal" },
] as const;

export const aiSuggestions = [
  {
    title: "Reorder Suggested",
    description: "12 SKUs below reorder point across WH-001 and WH-003.",
    action: "Restock",
  },
  {
    title: "Stock Redistribution",
    description: "Move 48 pcs of SKN-014 from WH-002 to WH-001.",
    action: "Transfer",
  },
  {
    title: "Expiring Soon",
    description: "24 lots expire within 30 days. Review disposition.",
    action: "Review",
  },
  {
    title: "Optimize Putaway",
    description: "AI found 3 faster bin paths for inbound SO-8821.",
    action: "Apply",
  },
];

export const inventoryExceptions = [
  { label: "Low Stock Items", count: 28, color: "bg-orange-50 text-orange-600", icon: "triangle-alert" },
  { label: "Out of Stock Items", count: 7, color: "bg-rose-50 text-rose-600", icon: "circle-x" },
  { label: "Expiring Soon", count: 24, color: "bg-purple-50 text-purple-600", icon: "clock" },
  { label: "Quarantined Lots", count: 5, color: "bg-blue-50 text-blue-600", icon: "shield" },
  { label: "Damaged Goods", count: 3, color: "bg-fuchsia-50 text-fuchsia-600", icon: "package-x" },
];

export const fulfillmentPipeline = [
  { stage: "To Pick", value: 42 },
  { stage: "Picking", value: 28 },
  { stage: "Packing", value: 19 },
  { stage: "Staging", value: 11 },
  { stage: "Shipped", value: 64 },
];

export const recentTransactions = [
  {
    date: "02 Jul 2026",
    sku: "SKN-001",
    product: "Hydrating Face Wash",
    brand: "ClearGlow",
    warehouse: "WH-001 Jakarta",
    type: "Stock Out",
    qty: "-24",
    status: "Complete",
    user: "Ayla Putri",
  },
  {
    date: "02 Jul 2026",
    sku: "SKN-014",
    product: "Vitamin C Serum",
    brand: "Lumina",
    warehouse: "WH-002 Bandung",
    type: "Stock In",
    qty: "+120",
    status: "Pending",
    user: "Rafi Nugraha",
  },
  {
    date: "01 Jul 2026",
    sku: "SKN-008",
    product: "Gentle Toner",
    brand: "ClearGlow",
    warehouse: "WH-001 Jakarta",
    type: "Transfer",
    qty: "48",
    status: "Complete",
    user: "Dewi Lestari",
  },
  {
    date: "01 Jul 2026",
    sku: "SKN-022",
    product: "Night Repair Cream",
    brand: "AuraLab",
    warehouse: "WH-003 Surabaya",
    type: "Adjustment",
    qty: "-3",
    status: "Complete",
    user: "Bima Santoso",
  },
  {
    date: "30 Jun 2026",
    sku: "SKN-031",
    product: "SPF 50 Sunscreen",
    brand: "SunNest",
    warehouse: "WH-001 Jakarta",
    type: "Stock Out",
    qty: "-60",
    status: "Pending",
    user: "Ayla Putri",
  },
];

export const products = [
  {
    sku: "SKN-001",
    name: "Hydrating Face Wash",
    brand: "ClearGlow",
    category: "Cleanser",
    warehouses: 3,
    stock: 320,
    capacity: 400,
    status: "In Stock" as const,
    image: "/assets/products/thumbs/p1.png",
  },
  {
    sku: "SKN-014",
    name: "Vitamin C Serum",
    brand: "Lumina",
    category: "Serum",
    warehouses: 2,
    stock: 48,
    capacity: 200,
    status: "Low of Stock" as const,
    image: "/assets/products/thumbs/p2.png",
  },
  {
    sku: "SKN-008",
    name: "Gentle Toner",
    brand: "ClearGlow",
    category: "Toner",
    warehouses: 3,
    stock: 180,
    capacity: 250,
    status: "In Stock" as const,
    image: "/assets/products/thumbs/p3.png",
  },
  {
    sku: "SKN-022",
    name: "Night Repair Cream",
    brand: "AuraLab",
    category: "Moisturizer",
    warehouses: 1,
    stock: 0,
    capacity: 150,
    status: "Out of Stock" as const,
    image: "/assets/products/thumbs/p4.png",
  },
  {
    sku: "SKN-031",
    name: "SPF 50 Sunscreen",
    brand: "SunNest",
    category: "Sunscreen",
    warehouses: 4,
    stock: 96,
    capacity: 300,
    status: "Low of Stock" as const,
    image: "/assets/products/thumbs/p5.png",
  },
  {
    sku: "SKN-045",
    name: "Clay Mask Duo",
    brand: "EarthBloom",
    category: "Mask",
    warehouses: 2,
    stock: 210,
    capacity: 220,
    status: "In Stock" as const,
    image: "/assets/products/thumbs/p6.png",
  },
  {
    sku: "SKN-052",
    name: "Retinol Night Oil",
    brand: "Lumina",
    category: "Serum",
    warehouses: 2,
    stock: 12,
    capacity: 180,
    status: "Low of Stock" as const,
    image: "/assets/products/thumbs/p7.png",
  },
  {
    sku: "SKN-061",
    name: "Micellar Water",
    brand: "ClearGlow",
    category: "Cleanser",
    warehouses: 3,
    stock: 0,
    capacity: 400,
    status: "Out of Stock" as const,
    image: "/assets/products/thumbs/p8.png",
  },
  {
    sku: "SKN-070",
    name: "Barrier Balm",
    brand: "AuraLab",
    category: "Moisturizer",
    warehouses: 1,
    stock: 155,
    capacity: 200,
    status: "In Stock" as const,
    image: "/assets/products/thumbs/p9.png",
  },
];

export const warehouses = [
  {
    id: "WH-001",
    name: "Jakarta Central DC",
    address: "Jl. Gatot Subroto No. 12, Jakarta",
    status: "Healthy" as const,
    occupied: 19200,
    capacity: 24000,
    occupancy: 80,
  },
  {
    id: "WH-002",
    name: "Bandung Regional Hub",
    address: "Jl. Asia Afrika No. 88, Bandung",
    status: "Warning" as const,
    occupied: 16800,
    capacity: 18000,
    occupancy: 93,
  },
  {
    id: "WH-003",
    name: "Surabaya East Hub",
    address: "Jl. Ahmad Yani No. 45, Surabaya",
    status: "Critical" as const,
    occupied: 11900,
    capacity: 12000,
    occupancy: 99,
  },
  {
    id: "WH-004",
    name: "Medan North Depot",
    address: "Jl. Gagak Hitam No. 7, Medan",
    status: "Healthy" as const,
    occupied: 6400,
    capacity: 10000,
    occupancy: 64,
  },
  {
    id: "WH-005",
    name: "Makassar Island Hub",
    address: "Jl. Pengayoman No. 21, Makassar",
    status: "Inactive" as const,
    occupied: 0,
    capacity: 8000,
    occupancy: 0,
  },
];

export const categories = [
  { name: "Cleanser", items: 42, active: true, updated: "01 Jul 2026" },
  { name: "Serum", items: 28, active: true, updated: "30 Jun 2026" },
  { name: "Toner", items: 16, active: true, updated: "28 Jun 2026" },
  { name: "Moisturizer", items: 33, active: true, updated: "02 Jul 2026" },
  { name: "Sunscreen", items: 12, active: true, updated: "25 Jun 2026" },
  { name: "Mask", items: 9, active: false, updated: "12 Jun 2026" },
];

export const lowStockItems = [
  { sku: "SKN-014", name: "Vitamin C Serum", warehouse: "WH-001", stock: 48, min: 80, status: "Low" },
  { sku: "SKN-031", name: "SPF 50 Sunscreen", warehouse: "WH-002", stock: 96, min: 120, status: "Low" },
  { sku: "SKN-052", name: "Retinol Night Oil", warehouse: "WH-001", stock: 12, min: 40, status: "Critical" },
  { sku: "SKN-022", name: "Night Repair Cream", warehouse: "WH-003", stock: 0, min: 50, status: "Out" },
  { sku: "SKN-061", name: "Micellar Water", warehouse: "WH-002", stock: 0, min: 100, status: "Out" },
];

export const restockRequests = [
  { id: "RR-1024", requester: "Ayla Putri", items: 4, warehouse: "WH-001", status: "Pending", date: "02 Jul 2026" },
  { id: "RR-1023", requester: "Rafi Nugraha", items: 2, warehouse: "WH-002", status: "Approved", date: "01 Jul 2026" },
  { id: "RR-1022", requester: "Dewi Lestari", items: 6, warehouse: "WH-001", status: "In Progress", date: "30 Jun 2026" },
  { id: "RR-1021", requester: "Bima Santoso", items: 1, warehouse: "WH-003", status: "Completed", date: "28 Jun 2026" },
];

export const stockInRows = [
  { id: "SI-8821", supplier: "Lumina Labs", items: 24, warehouse: "WH-001", status: "QC Pending", date: "02 Jul 2026" },
  { id: "SI-8820", supplier: "ClearGlow Co", items: 18, warehouse: "WH-002", status: "Putaway", date: "01 Jul 2026" },
  { id: "SI-8819", supplier: "AuraLab", items: 40, warehouse: "WH-001", status: "Completed", date: "30 Jun 2026" },
];

export const stockOutRows = [
  { id: "SO-4410", order: "ORD-9901", items: 12, warehouse: "WH-001", status: "Picking", date: "02 Jul 2026" },
  { id: "SO-4409", order: "ORD-9898", items: 8, warehouse: "WH-002", status: "Packing", date: "02 Jul 2026" },
  { id: "SO-4408", order: "ORD-9890", items: 20, warehouse: "WH-001", status: "Shipped", date: "01 Jul 2026" },
];

export const transferRows = [
  { id: "TR-3301", from: "WH-002", to: "WH-001", items: 6, status: "In Transit", date: "02 Jul 2026" },
  { id: "TR-3300", from: "WH-001", to: "WH-003", items: 3, status: "Received", date: "01 Jul 2026" },
];

export const adjustmentRows = [
  { id: "AD-2201", reason: "Damaged", sku: "SKN-022", qty: -3, warehouse: "WH-003", status: "Approved" },
  { id: "AD-2200", reason: "Found stock", sku: "SKN-008", qty: 5, warehouse: "WH-001", status: "Pending" },
];

export const opnameRows = [
  { id: "OP-1104", warehouse: "WH-001", zone: "A-01", progress: 72, status: "In Progress", date: "02 Jul 2026" },
  { id: "OP-1103", warehouse: "WH-002", zone: "B-03", progress: 100, status: "Completed", date: "28 Jun 2026" },
];

export const zones = [
  { code: "A-01", name: "Receiving", warehouse: "WH-001", racks: 12, bins: 240, status: "Healthy" },
  { code: "A-02", name: "Bulk Storage", warehouse: "WH-001", racks: 28, bins: 980, status: "Healthy" },
  { code: "B-01", name: "Picking", warehouse: "WH-002", racks: 16, bins: 420, status: "Warning" },
  { code: "C-01", name: "Quarantine", warehouse: "WH-003", racks: 4, bins: 80, status: "Critical" },
];

export const racks = [
  { code: "R-A01-01", zone: "A-01", levels: 5, bins: 40, occupancy: 78, status: "Healthy" },
  { code: "R-A01-02", zone: "A-01", levels: 5, bins: 40, occupancy: 64, status: "Healthy" },
  { code: "R-B01-01", zone: "B-01", levels: 4, bins: 32, occupancy: 91, status: "Warning" },
  { code: "R-C01-01", zone: "C-01", levels: 3, bins: 18, occupancy: 98, status: "Critical" },
];

export const bins = [
  { code: "BIN-A01-01-01", rack: "R-A01-01", sku: "SKN-001", qty: 48, capacity: 60, status: "Occupied" },
  { code: "BIN-A01-01-02", rack: "R-A01-01", sku: "SKN-014", qty: 12, capacity: 40, status: "Low" },
  { code: "BIN-A01-02-01", rack: "R-A01-02", sku: "—", qty: 0, capacity: 60, status: "Empty" },
  { code: "BIN-B01-01-03", rack: "R-B01-01", sku: "SKN-031", qty: 36, capacity: 40, status: "Occupied" },
];

export const reportRows = [
  { name: "Stock Movement Summary", type: "Inventory", period: "Jun 2026", generated: "01 Jul 2026", format: "XLSX" },
  { name: "Warehouse Occupancy", type: "Warehouse", period: "Q2 2026", generated: "30 Jun 2026", format: "PDF" },
  { name: "Low Stock Trends", type: "Alerts", period: "Last 30 days", generated: "02 Jul 2026", format: "CSV" },
];
