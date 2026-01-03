import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button, Input, Label, Fieldset } from "@radix-ui/react";
import { toast } from "sonner";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerMutation = useMutation(async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email, username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (response.ok) {
      toast.success("Registration successful! Please check your email for verification.");
    } else {
      toast.error(result.error || "Something went wrong.");
    }

    return result;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerMutation.mutate();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <Fieldset className="mb-4">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </Fieldset>

          <Fieldset className="mb-4">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </Fieldset>

          <Fieldset className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </Fieldset>

          <Fieldset className="mb-4">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a username"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </Fieldset>

          <Fieldset className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </Fieldset>

          <Fieldset className="mb-4">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </Fieldset>

          <Button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
