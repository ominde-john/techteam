// Updated EventsPage with 2026 events + improved UI/UX
// Paste this directly into your EventsPage.tsx or EventsPage.jsx file

import { useState } from "react";
import PageHeader from "../components/PageHeader";
import SectionTitle from "../components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, MapPin, Users } from "lucide-react";

const EventsPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Tech Summit 2026",
      description:
        "A powerful multi-day summit bringing together developers, founders, designers, and IT experts across Africa.",
      date: "July 11-13, 2026",
      location: "Nairobi International Convention Centre",
      image:
        "/WhatsApp Image 2025-09-30 at 16.48.55.jpeg",
      attendees: 2400,
      category: "Conference",
    },
    {
      id: 2,
      title: "Modern Frontend Bootcamp 2026",
      description:
        "A practical bootcamp focusing on React, Tailwind CSS, and performance-first UI engineering.",
      date: "March 19, 2026",
      location: "Virtual Event",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      attendees: 430,
      category: "Workshop",
    },
    {
      id: 3,
      title: "AI, Robotics & Automation Meetup 2026",
      description:
        "A meetup dedicated to exploring automation trends, robotics programming, and ethical AI.",
      date: "February 28, 2026",
      location: "Tech Hub Westlands",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      attendees: 260,
      category: "Meetup",
    },
    {
      id: 4,
      title: "Cybersecurity Masterclass 2026",
      description:
        "A deep-dive masterclass covering modern cyber threats, ethical hacking and enterprise security.",
      date: "April 6, 2026",
      location: "Virtual Event",
      image:
        "https://images.unsplash.com/photo-1581091226033-c7e8cee4f327?auto=format&fit=crop&w=800&q=80",
      attendees: 510,
      category: "Webinar",
    },
  ];

  const pastEvents = [
    {
      id: 5,
      title: "Web3 & Blockchain Forum 2025",
      description:
        "A complete beginner-to-pro forum exploring decentralized technology and smart contracts.",
      date: "October 14, 2025",
      location: "Nairobi Tech Hub",
      image:
        "https://images.unsplash.com/photo-1462899006636-339e08d1844e?auto=format&fit=crop&w=800&q=80",
      attendees: 300,
      category: "Workshop",
    },
    {
      id: 6,
      title: "Advanced UI/UX Strategy Conference",
      description:
        "A design-focused conference covering the psychology behind high-converting designs.",
      date: "August 28, 2025",
      location: "Virtual Event",
      image:
        "https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=800&q=80",
      attendees: 540,
      category: "Webinar",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Events Calendar"
        description="Tech events, workshops, and conferences curated for developers across Africa."
      />

      <section className="section-padding">
        <div className="container-custom">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full md:w-[400px] grid-cols-2 mb-8 rounded-xl bg-gray-100 p-1">
              <TabsTrigger
                value="upcoming"
                className="data-[state=active]:bg-techblue data-[state=active]:text-white rounded-lg"
              >
                Upcoming Events
              </TabsTrigger>
              <TabsTrigger
                value="past"
                className="data-[state=active]:bg-techblue data-[state=active]:text-white rounded-lg"
              >
                Past Events
              </TabsTrigger>
            </TabsList>

            {/* UPCOMING EVENTS */}
            <TabsContent value="upcoming">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                  <SectionTitle
                    title="Upcoming Events"
                    subtitle="Stay updated with the newest opportunities to learn and network."
                  />

                  <div className="space-y-6">
                    {upcomingEvents.map((event) => (
                      <Card
                        key={event.id}
                        className="overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-3">
                          <div className="md:col-span-1">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-full object-cover"
                              style={{ minHeight: "210px" }}
                            />
                          </div>

                          <div className="md:col-span-2 p-6">
                            <CardHeader className="px-0 pt-0">
                              <span className="text-sm font-medium text-techblue bg-techblue/10 px-3 py-1 rounded-full">
                                {event.category}
                              </span>
                              <CardTitle className="text-xl md:text-2xl mt-2">
                                {event.title}
                              </CardTitle>
                              <CardDescription className="text-base">
                                {event.description}
                              </CardDescription>
                            </CardHeader>

                            <CardContent className="px-0 py-2">
                              <div className="flex flex-col space-y-2 text-gray-700 text-sm">
                                <p className="flex items-center">
                                  <CalendarDays className="h-4 w-4 mr-2" />
                                  {event.date}
                                </p>
                                <p className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-2" />
                                  {event.location}
                                </p>
                                <p className="flex items-center">
                                  <Users className="h-4 w-4 mr-2" />
                                  {event.attendees} Expected
                                </p>
                              </div>
                            </CardContent>

                            <CardFooter className="px-0 pb-0 pt-4 flex gap-3">
                              <Button className="bg-techblue hover:bg-techblue-dark px-6 rounded-full">
                                RSVP
                              </Button>
                              <Button
                                variant="outline"
                                className="rounded-full px-6 border-techblue text-techblue"
                              >
                                Learn More
                              </Button>
                            </CardFooter>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* SIDE CALENDAR */}
                <div className="lg:col-span-1 space-y-8">
                  <Card className="rounded-2xl border shadow-sm">
                    <CardHeader>
                      <CardTitle>Event Calendar</CardTitle>
                      <CardDescription>Select a date to explore events</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border shadow-sm"
                      />
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-techblue hover:bg-techblue-dark rounded-full">
                        View All Events
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="rounded-2xl border shadow-sm">
                    <CardHeader>
                      <CardTitle>Subscribe for Updates</CardTitle>
                      <CardDescription>
                        Get monthly updates on upcoming tech events
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-700"
                          >
                            Email Address
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            className="w-full rounded-lg border px-3 py-2 text-sm"
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-techblue hover:bg-techblue-dark rounded-full"
                        >
                          Subscribe
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* PAST EVENTS */}
            <TabsContent value="past">
              <SectionTitle
                title="Past Events"
                subtitle="Explore our past workshops, forums, and conferences."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="aspect-video">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <CardHeader>
                      <span className="text-sm font-medium text-techblue bg-techblue/10 px-3 py-1 rounded-full">
                        {event.category}
                      </span>
                      <CardTitle className="text-xl mt-2">{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-col space-y-2 text-gray-700 text-sm">
                        <p className="flex items-center">
                          <CalendarDays className="h-4 w-4 mr-2" /> {event.date}
                        </p>
                        <p className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" /> {event.location}
                        </p>
                        <p className="flex items-center">
                          <Users className="h-4 w-4 mr-2" /> {event.attendees} Attended
                        </p>
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Button variant="outline" className="w-full rounded-full">
                        View Recording
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
