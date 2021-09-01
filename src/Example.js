import React from "react";
import beach from "./beach.jpg";
import workcation from "./workcation.png";
import DestinationCard from "./DestinationCard";

export default function Example() {
  const popularDestinations = [
    {
      city: "Toronto",
      averagePrice: 120,
      propertyCount: 76,
      imageUrl:
        "https://images.unsplash.com/photo-1565717989187-2c914e866ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
      imageAlt: "Toronto skyline",
    },
    {
      city: "Malibu",
      averagePrice: 215,
      propertyCount: 43,
      imageUrl:
        "https://images.unsplash.com/photo-1499958294884-ad8146fea89d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
      imageAlt: "Cliff in malibu",
    },
    {
      city: "Chicago",
      averagePrice: 130,
      propertyCount: 115,
      imageUrl:
        "https://images.unsplash.com/photo-1550676224-f5a1e8b6e15f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
      imageAlt: "Chicago skyline",
    },
    {
      city: "Seattle",
      averagePrice: 135,
      propertyCount: 63,
      imageUrl:
        "https://images.unsplash.com/photo-1560448076-213180fe7d44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
      imageAlt: "Seattle skyline",
    },
    {
      city: "Miami",
      averagePrice: 115,
      propertyCount: 86,
      imageUrl:
        "https://images.unsplash.com/photo-1571042804889-1438b1d607a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
      imageAlt: "Miami beach",
    },
    {
      city: "Colorado",
      averagePrice: 85,
      propertyCount: 47,
      imageUrl:
        "https://images.unsplash.com/photo-1611965569186-2505e4dbecb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
      imageAlt: "Colorado mountain",
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 2xl:grid-cols-5">
      <div
        className="
          px-8
          py-12
          max-w-md
          mx-auto
          sm:max-w-xl
          lg:px-4 lg:py-24 lg:max-w-full
          xl:mr-0
          2xl:col-span-2
        "
      >
        <div className="xl:max-w-xl">
          <img className="h-10" src={workcation} alt="workcation" />
          <img
            className="
              mt-6
              rounded-lg
              shadow-xl
              sm:mt-8 sm:h-64 sm:w-full sm:object-cover
              object-center
              lg:hidden
            "
            src={beach}
            alt="beach"
          />
          <h1
            className="
              mt-6
              text-2xl
              font-bold
              text-gray-900
              sm:mt-8 sm:text-4xl
              lg:text-3xl
              xl:text-4xl
            "
          >
            You can work from anywhere.
            <br className="" />
            <span className="text-indigo-500">Take advantage of it.</span>
          </h1>
          <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
            Workcation helps you find work-friendly rentals in beautiful
            locations so you can enjoy some nice weather even when you’re not on
            vacation.
          </p>
          <div className="mt-4">
            <a
              className="
                inline-block
                transform
                transition
                bg-indigo-500
                hover:bg-indigo-400 hover:-translate-y-0.5
                focus:outline-none
                focus:ring
                focus:ring-offset-2
                focus:ring-indigo-500
                focus:ring-opacity-50
                active:bg-indigo-600
                text-white
                px-5
                py-3
                rounded-lg
                shadow-lg
                uppercase
                tracking-wider
                font-semibold
                text-sm
                sm:mt-6 sm:text-base
              "
              href="/"
            >
              Book your escape
            </a>
          </div>
        </div>
      </div>
      <div className="hidden relative lg:block 2xl:col-span-3">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={beach}
          alt="beach"
        />
      </div>
      <div>
        {popularDestinations.map((destination) => (
          <DestinationCard key={destination.city} {...destination} />
        ))}
      </div>
    </div>
  );
}
