"use client";
import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { authClient } from "@/lib/auth-client";
import GeneratedAvatar from "@/components/generated-avatar";
import { ChevronDown, CreditCardIcon, LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const DashboardUserButton = () => {
	const router = useRouter();
	const isMobile = useIsMobile();
	const { data, isPending } = authClient.useSession();

	if (isPending || !data?.user) {
		return null;
	}
	const onLogout = () => {
		authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					router.push("/sign-in");
				},
			},
		});
	};
	if (isMobile) {
		return (
			<Drawer>
				<DrawerTrigger asChild>
					<div className='rounded-lg border border-border/10 p-3 w-full flex items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden'>
						{data.user.image ? (
							<Avatar>
								<AvatarImage src={data.user.image} alt='User avatar' />
							</Avatar>
						) : (
							<GeneratedAvatar
								seed={data.user.name}
								variant='initials'
								className='size-9 mr-3'
							/>
						)}
						<div className='flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0'>
							<p className='text-sm truncate w-full cursor-pointer'>
								{data.user.name}
							</p>
							<p className='text-xs truncate w-full'>{data.user.email}</p>
						</div>
						<ChevronDown className='size-4 shrink-0' />
					</div>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>{data.user.name}</DrawerTitle>
						<DrawerDescription>{data.user.email}</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						<Button variant='outline' onClick={() => {}}>
							<CreditCardIcon className='size-4 text-black' />
						</Button>
						<Button variant='outline' onClick={onLogout}>
							<LogOutIcon className='size-4 text-black' />
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		);
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='rounded-lg border border-border/10 p-3 w-full flex items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden'>
				{data.user.image ? (
					<Avatar>
						<AvatarImage src={data.user.image} alt='User avatar' />
					</Avatar>
				) : (
					<GeneratedAvatar
						seed={data.user.name}
						variant='initials'
						className='size-9 mr-3'
					/>
				)}
				<div className='flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0'>
					<p className='text-sm truncate w-full cursor-pointer'>
						{data.user.name}
					</p>
					<p className='text-xs truncate w-full'>{data.user.email}</p>
				</div>
				<ChevronDown className='size-4 shrink-0' />
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end' side='right' className='w-72'>
				<DropdownMenuLabel>
					<div className='flex flex-col gap-1'>
						<span className='font-medium truncate'>{data.user.name}</span>
						<span className='text-sm font-normal text-muted-foreground'>
							{data.user.email}
						</span>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem className='cursor-pointer flex items-center justify-between'>
					{/* Todo */}
					Billing
					<CreditCardIcon />
				</DropdownMenuItem>
				<DropdownMenuItem
					className='cursor-pointer flex items-center justify-between'
					onClick={onLogout}
				>
					Logout
					<LogOutIcon className='size-4' />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default DashboardUserButton;
