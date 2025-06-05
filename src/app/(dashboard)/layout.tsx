import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/modules/dashboard/ui/components/dashboard-sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<SidebarProvider>
				<DashboardSidebar />
				<main className='flex flex-col h-screen w-screen bg-muted'>
					{children}
				</main>
			</SidebarProvider>
		</div>
	);
};

export default DashboardLayout;
