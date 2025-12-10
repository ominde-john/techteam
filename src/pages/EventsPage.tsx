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

  /* ================= DATA ================= */

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Tech Summit 2026",
      description:
        "A powerful multi-day summit bringing together developers, founders, designers, and IT experts across Africa.",
      date: "July 11–13, 2026",
      location: "Nairobi International Convention Centre",
      image: "/WhatsApp Image 2025-09-30 at 16.48.55.jpeg",
      attendees: 60,
      category: "Conference",
    },
    {
      id: 2,
      title: "Modern Frontend Bootcamp 2026",
      description:
        "A practical bootcamp covering React, Tailwind CSS, and performance-first UI engineering.",
      date: "March 19, 2026",
      location: "Virtual Event",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      attendees: 50,
      category: "Workshop",
    },
    {
      id: 3,
      title: "AI, Robotics & Automation Meetup 2026",
      description:
        "A meetup exploring automation trends, robotics programming, and ethical AI.",
      date: "February 28, 2026",
      location: "Tech Hub Westlands",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      attendees: 60,
      category: "Meetup",
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Web3 & Blockchain Forum 2025",
      description:
        "A beginner-to-pro forum on decentralized tech and smart contracts.",
      date: "October 14, 2025",
      location: "Nairobi Tech Hub",
      image:
        "https://images.unsplash.com/photo-1462899006636-339e08d1844e",
      attendees: 60,
      category: "Workshop",
    },
    {
      id: 5,
      title: "Advanced UI/UX Strategy Conference",
      description:
        "Design psychology, conversions, and product-led UI strategies.",
      date: "August 28, 2025",
      location: "Virtual Event",
      image:
        "https://images.unsplash.com/photo-1587440871875-191322ee64b0",
      attendees: 60,
      category: "Webinar",
    },
  ];

  /* ================= JSX ================= */

  return (
    <div>
      <PageHeader
        title="Events & Meetups"
        description="Workshops, conferences, and tech experiences curated for developers across Africa."
      />

      <section className="section-padding">
        <div className="container-custom">

          <Tabs defaultValue="upcoming">
            <div className="flex justify-center mb-10">
              <TabsList className="grid w-full max-w-md grid-cols-2 rounded-xl bg-gray-100 p-1">
                <TabsTrigger
                  value="upcoming"
                  className="rounded-lg data-[state=active]:bg-techblue data-[state=active]:text-white"
                >
                  Upcoming
                </TabsTrigger>
                <TabsTrigger
                  value="past"
                  className="rounded-lg data-[state=active]:bg-techblue data-[state=active]:text-white"
                >
                  Past
                </TabsTrigger>
              </TabsList>
            </div>

            {/* ================= UPCOMING ================= */}
            <TabsContent value="upcoming">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* LEFT: EVENTS */}
                <div className="lg:col-span-8">
                  <SectionTitle
                    title="Upcoming Events"
                    subtitle="Don’t miss out on opportunities to learn, connect, and grow."
                  />

                  <div className="space-y-8">
                    {upcomingEvents.map((event) => (
                      <Card
                        key={event.id}
                        className="overflow-hidden rounded-2xl border hover:shadow-xl transition"
                      >
                        <div className="grid md:grid-cols-5">

                          {/* IMAGE */}
                          <div className="md:col-span-2">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="h-full w-full object-cover min-h-[220px]"
                            />
                          </div>

                          {/* CONTENT */}
                          <div className="md:col-span-3 p-6 flex flex-col justify-between">
                            <div>
                              <span className="inline-block mb-2 text-xs font-semibold text-techblue bg-techblue/10 px-3 py-1 rounded-full">
                                {event.category}
                              </span>

                              <h3 className="text-xl font-semibold">
                                {event.title}
                              </h3>

                              <p className="mt-2 text-sm text-muted-foreground">
                                {event.description}
                              </p>

                              <div className="mt-4 space-y-2 text-sm text-gray-700">
                                <p className="flex items-center gap-2">
                                  <CalendarDays className="w-4 h-4" />
                                  {event.date}
                                </p>
                                <p className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4" />
                                  {event.location}
                                </p>
                                <p className="flex items-center gap-2">
                                  <Users className="w-4 h-4" />
                                  {event.attendees} Expected
                                </p>
                              </div>
                            </div>

                            <div className="mt-6 flex gap-3">
                              <Button className="rounded-full bg-techblue hover:bg-techblue-dark">
                                RSVP
                              </Button>
                              <Button variant="outline" className="rounded-full">
                                Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* RIGHT: SIDEBAR */}
                <div className="lg:col-span-4 space-y-8">

                  <Card className="rounded-2xl">
                    <CardHeader>
                      <CardTitle>Event Calendar</CardTitle>
                      <CardDescription>Pick a date to view events</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-lg border"
                      />
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full rounded-full bg-techblue hover:bg-techblue-dark">
                        Browse All Events
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="rounded-2xl">
                    <CardHeader>
                      <CardTitle>Get Event Updates</CardTitle>
                      <CardDescription>
                        Monthly emails with upcoming tech events
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-lg border px-3 py-2 text-sm"
                      />
                      <Button className="w-full rounded-full bg-techblue hover:bg-techblue-dark">
                        Subscribe
                      </Button>
                    </CardContent>
                  </Card>

                </div>
              </div>
            </TabsContent>

            {/* ================= PAST ================= */}
            <TabsContent value="past">
              <SectionTitle
                title="Past Events"
                subtitle="Revisit previous workshops, forums, and conferences."
              />

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="rounded-2xl overflow-hidden hover:shadow-xl transition"
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-48 w-full object-cover"
                    />

                    <CardHeader>
                      <span className="text-xs text-techblue bg-techblue/10 px-3 py-1 rounded-full w-fit">
                        {event.category}
                      </span>
                      <CardTitle className="mt-2">
                        {event.title}
                      </CardTitle>
                      <CardDescription>
                        {event.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="text-sm space-y-2">
                      <p className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4" /> {event.date}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> {event.location}
                      </p>
                      <p className="flex items-center gap-2">
                        <Users className="w-4 h-4" /> {event.attendees} Attended
                      </p>
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
