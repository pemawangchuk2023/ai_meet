import React from "react";
import { createAvatar } from "@dicebear/core";
import { botttsNeutral, initials } from "@dicebear/collection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface GeneratedInterfaceProps {
	seed: string;
	className?: string;
	variant: "botttsNeutral" | "initials";
}
const GeneratedAvatar = ({
	seed,
	className,
	variant,
}: GeneratedInterfaceProps) => {
	let avatar;
	if (variant === "botttsNeutral") {
		avatar = createAvatar(botttsNeutral, {
			seed,
		});
	} else {
		avatar = createAvatar(initials, {
			seed,
			fontWeight: 500,
			fontSize: 42,
		});
	}
	return (
		<Avatar className={cn(className)}>
			<AvatarImage
				src={avatar.toDataUri()}
				alt='avatar'
				className='cursor-pointer'
			/>
			<AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
		</Avatar>
	);
};

export default GeneratedAvatar;
