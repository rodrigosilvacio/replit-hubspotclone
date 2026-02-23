import { Link, useLocation } from "wouter";
import { 
  Users, Building2, Briefcase, Ticket, 
  CheckSquare, Megaphone, BadgeDollarSign, 
  Headset, Settings, BarChart3
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { icon: Users, label: "Contacts", href: "/" },
  { icon: Building2, label: "Companies", href: "/companies" },
  { icon: Briefcase, label: "Deals", href: "/deals" },
  { icon: Ticket, label: "Tickets", href: "/tickets" },
  { icon: CheckSquare, label: "Tasks", href: "/tasks" },
  { icon: Megaphone, label: "Marketing", href: "/marketing" },
  { icon: BadgeDollarSign, label: "Sales", href: "/sales" },
  { icon: Headset, label: "Service", href: "/service" },
  { icon: BarChart3, label: "Reports", href: "/reports" },
];

export function Sidebar() {
  const [location] = useLocation();

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border h-screen flex flex-col fixed left-0 top-0 text-sidebar-foreground z-20 shadow-md">
      <div className="p-4 md:p-6 flex items-center gap-2 border-b border-sidebar-border">
        <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-sm">
          H
        </div>
        <span className="font-semibold text-lg tracking-tight">HubCRM</span>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-3">
          {NAV_ITEMS.map((item) => {
            const isActive = location === item.href;
            return (
              <Link key={item.label} href={item.href}>
                <a 
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm font-medium",
                    isActive 
                      ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                  )}
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  <item.icon className={cn("w-4 h-4", isActive ? "text-primary" : "")} />
                  {item.label}
                </a>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <Link href="/settings">
          <a className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm font-medium text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground">
            <Settings className="w-4 h-4" />
            Settings
          </a>
        </Link>
      </div>
    </aside>
  );
}
