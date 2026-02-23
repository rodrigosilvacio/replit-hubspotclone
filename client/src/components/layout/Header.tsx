import { Search, Bell, Plus, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="h-16 border-b bg-background flex items-center justify-between px-6 sticky top-0 z-10 w-full shadow-sm">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-96 max-w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search contacts, companies, deals..." 
            className="w-full bg-muted/30 border-transparent focus-visible:bg-background focus-visible:border-primary pl-9 h-9"
            data-testid="input-global-search"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" className="hidden md:flex gap-1 border-primary/20 text-primary hover:bg-primary/5" data-testid="button-quick-create">
          <Plus className="w-4 h-4" />
          <span>Create</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-muted">
          <HelpCircle className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground relative hover:bg-muted">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full border-2 border-background"></span>
        </Button>
        
        <div className="w-px h-6 bg-border mx-1"></div>
        
        <Avatar className="w-8 h-8 cursor-pointer border border-border hover:border-primary transition-colors" data-testid="img-user-avatar">
          <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" />
          <AvatarFallback className="bg-primary text-primary-foreground font-medium">US</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
