import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardNavbar from "@/modules/dashboard/ui/components/dashboard-navbar";
import DashboardSidebar from "@/modules/dashboard/ui/components/dashboard-sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<SidebarProvider>
				<DashboardSidebar />
				<main className='flex flex-col h-screen w-screen bg-muted'>
					<DashboardNavbar />
					{children}
				</main>
			</SidebarProvider>
		</div>
	);
};

export default DashboardLayout;
