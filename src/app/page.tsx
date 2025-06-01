"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";

const HomePage = () => {
	const { data: session } = authClient.useSession();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = () => {
		authClient.signUp.email(
			{ email, name, password },
			{
				onError: () => {
					window.alert("Something went wrong during sign up");
				},
				onSuccess: () => {
					window.alert("User signed up successfully");
				},
			}
		);
	};

	const onSignIn = () => {
		authClient.signIn.email(
			{ email, password },
			{
				onError: () => {
					window.alert("Sign in failed");
				},
				onSuccess: () => {
					window.alert("Signed in successfully");
				},
			}
		);
	};

	if (session) {
		return (
			<div className='flex flex-col p-4 gap-y-4'>
				<p>Logged in as {session.user.name}</p>
				<Button onClick={() => authClient.signOut()}>Sign Out</Button>
			</div>
		);
	}

	return (
		<div className='flex flex-col gap-y-10'>
			{/* Sign Up Section */}
			<div className='p-4 flex flex-col gap-y-4'>
				<Input
					placeholder='name'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<Input
					placeholder='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					placeholder='password'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button onClick={onSubmit}>Create User</Button>
			</div>

			{/* Sign In Section */}
			<div className='p-4 flex flex-col gap-y-4'>
				<Input
					placeholder='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					placeholder='password'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button onClick={onSignIn}>Sign In</Button>
			</div>
		</div>
	);
};

export default HomePage;
