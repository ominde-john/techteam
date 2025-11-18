// PublicClientView.jsx
// This page is for NON-REGISTERED clients to view basic information about your Tech Team platform.
// It encourages them to register or subscribe.

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, Smartphone, ShieldCheck } from "lucide-react";

export default function PublicClientView() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-3xl w-full bg-white rounded-2xl p-10 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-blue-600">Tech Talk Community Hub</span>
        </h1>

        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          A growing community where developers, tech students, trainers, creators, and innovators connect.
          Since you are not yet registered, this is a preview of what our members enjoy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 bg-gray-100 rounded-xl shadow-sm text-left">
            <Users className="h-8 w-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-xl mb-2">Meet Developers</h3>
            <p className="text-gray-600 text-sm">Connect with tech talents from Kenya and beyond.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow-sm text-left">
            <Globe className="h-8 w-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-xl mb-2">Access Tech Resources</h3>
            <p className="text-gray-600 text-sm">Tutorials, projects, mentorship, and open-source tools.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow-sm text-left">
            <Smartphone className="h-8 w-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-xl mb-2">Community Projects</h3>
            <p className="text-gray-600 text-sm">See what our team is building — apps, APIs, and platforms.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl shadow-sm text-left">
            <ShieldCheck className="h-8 w-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-xl mb-2">Safe & Verified</h3>
            <p className="text-gray-600 text-sm">We protect user data and ensure a trusted environment.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button className="px-6 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white">
            Register Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="px-6 py-4 text-lg text-blue-600 border-blue-600">
            Explore More
          </Button>
        </div>
      </div>
    </div>
  );
}
