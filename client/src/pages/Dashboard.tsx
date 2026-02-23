import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Filter, Download, MoreHorizontal, Phone, Mail, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock Data
const MOCK_CONTACTS = [
  { id: 1, name: "Alice Freeman", email: "alice@acmecorp.com", phone: "(555) 123-4567", company: "Acme Corp", status: "New", lastActivity: "2 days ago" },
  { id: 2, name: "Bob Smith", email: "bob.smith@techflow.io", phone: "(555) 987-6543", company: "TechFlow", status: "In Progress", lastActivity: "Today" },
  { id: 3, name: "Carol Davis", email: "carol@designstudio.net", phone: "(555) 456-7890", company: "Design Studio", status: "Customer", lastActivity: "1 week ago" },
  { id: 4, name: "David Wilson", email: "david.w@global.com", phone: "(555) 222-3333", company: "Global Industries", status: "Unqualified", lastActivity: "1 month ago" },
  { id: 5, name: "Eva Martinez", email: "eva@startup.io", phone: "(555) 444-5555", company: "Startup.io", status: "New", lastActivity: "Yesterday" },
  { id: 6, name: "Frank Johnson", email: "frank@innovate.co", phone: "(555) 666-7777", company: "Innovate Co", status: "In Progress", lastActivity: "2 hours ago" },
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "New": return <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">New</Badge>;
      case "In Progress": return <Badge variant="secondary" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-100 border-yellow-200">In Progress</Badge>;
      case "Customer": return <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100 border-green-200">Customer</Badge>;
      case "Unqualified": return <Badge variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200">Unqualified</Badge>;
      default: return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-lg border shadow-sm">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Contacts</h1>
          <p className="text-sm text-slate-500 mt-1">Manage and track your customer relationships.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="bg-white border-slate-200 text-slate-700 hover:bg-slate-50">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button data-testid="button-create-contact" className="bg-[#ff7a59] hover:bg-[#ff7a59]/90 text-white shadow-sm border-0">
            Create contact
          </Button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between gap-4 bg-slate-50/50">
          <div className="flex items-center gap-2 flex-1">
            <div className="relative max-w-sm w-full">
              <Input 
                placeholder="Search contacts by name, email..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-3 bg-white border-slate-200 focus-visible:ring-[#ff7a59]/20 focus-visible:border-[#ff7a59]"
                data-testid="input-contact-search"
              />
            </div>
            <Button variant="outline" className="shrink-0 bg-white border-slate-200 text-slate-700 hover:bg-slate-50 gap-2" data-testid="button-filter">
              <Filter className="w-4 h-4 text-slate-500" />
              Advanced Filters
              <Badge variant="secondary" className="ml-1 px-1.5 py-0 text-xs bg-slate-100">0</Badge>
            </Button>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium text-slate-700">
                Actions <ChevronDown className="w-4 h-4 ml-1 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit columns</DropdownMenuItem>
              <DropdownMenuItem>Import records</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">Delete selected</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50 hover:bg-slate-50 border-b-slate-200">
                <TableHead className="w-12 text-center border-r border-slate-100">
                  <Checkbox data-testid="checkbox-select-all" className="border-slate-300 data-[state=checked]:bg-[#ff7a59] data-[state=checked]:border-[#ff7a59]" />
                </TableHead>
                <TableHead className="font-semibold text-slate-600 border-r border-slate-100 min-w-[250px]">NAME</TableHead>
                <TableHead className="font-semibold text-slate-600 border-r border-slate-100">COMPANY</TableHead>
                <TableHead className="font-semibold text-slate-600 border-r border-slate-100">STATUS</TableHead>
                <TableHead className="font-semibold text-slate-600 border-r border-slate-100">PHONE NUMBER</TableHead>
                <TableHead className="font-semibold text-slate-600">LAST ACTIVITY</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_CONTACTS.filter(c => 
                c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                c.company.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((contact) => (
                <TableRow key={contact.id} className="hover:bg-slate-50/80 transition-colors group border-b-slate-100" data-testid={`row-contact-${contact.id}`}>
                  <TableCell className="text-center border-r border-slate-100">
                    <Checkbox data-testid={`checkbox-select-${contact.id}`} className="border-slate-300 data-[state=checked]:bg-[#ff7a59] data-[state=checked]:border-[#ff7a59]" />
                  </TableCell>
                  <TableCell className="border-r border-slate-100">
                    <div className="flex flex-col">
                      <span className="font-medium text-[#ff7a59] hover:text-[#ff7a59]/80 hover:underline cursor-pointer transition-colors" data-testid={`link-contact-${contact.id}`}>
                        {contact.name}
                      </span>
                      <span className="text-xs text-slate-500 mt-0.5">{contact.email}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-700 font-medium border-r border-slate-100">{contact.company}</TableCell>
                  <TableCell className="border-r border-slate-100">
                    <div className="flex items-center">
                      {getStatusBadge(contact.status)}
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-600 border-r border-slate-100 font-mono text-sm">{contact.phone}</TableCell>
                  <TableCell className="text-slate-500 text-sm">{contact.lastActivity}</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full">
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-sm text-slate-500">
          <div>Showing 1 to {MOCK_CONTACTS.length} of {MOCK_CONTACTS.length} entries</div>
          <div className="flex gap-1">
            <Button variant="outline" size="sm" disabled className="h-8">Previous</Button>
            <Button variant="outline" size="sm" disabled className="h-8">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
