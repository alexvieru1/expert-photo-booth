import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { longEvents } from "../../../constants/longEvents";
import Image from "next/image";

const EventsAbout = () => {
  return (
    <div className="flex flex-col justify-center items-center px-14">
      {longEvents.map((event, eventIndex) => (
        <div key={eventIndex} className="w-full max-w-4xl mb-12">
          {/* Event Title and Date */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-[#333]">
              {event.title}
            </h2>
            <p className="text-gray-500">{event.date}</p>
          </div>

          {/* Carousel */}
          <div className="flex justify-center items-center">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-full"
            >
              <CarouselContent>
                {event.photos.map((photo, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                          <Image
                            src={photo}
                            alt={`Poza ${index + 1} de la ${event.title}`}
                            width={3024}
                            height={4032}
                            className="object-cover w-full h-full rounded-lg"
                            quality={80}
                            priority={index === 0} // Load the first image with priority
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsAbout;
