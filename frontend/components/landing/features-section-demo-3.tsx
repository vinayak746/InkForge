"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { MessageSquare } from "lucide-react"; 
import { motion } from "motion/react";

export default function Discover() {
  const features = [
    {
      title: "Infinite Canvas integrated with Excalidraw",
      description: "Sketch, brainstorm, and map out architectures without ever running out of space.",
      skeleton: <SkeletonOne />,
      id: "workspace",
      className: "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Customised Real-time Multi-cursor",
      description: "See your team's ideas come to life with sub-50ms latency.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Global Sync & Sharing",
      description: "Synced across the globe with our cutting edge cloud infrastructure and CDN.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-6 border-b lg:border-none",
    },
  ];

  return (
    <div id="discover" className="relative z-20 py-10 lg:py-20 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
         Discover & Collaborate at the speed of thought
        </h4>
        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          Everything you need to visualize ideas with your team in one infinite space.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              {/* Added a fixed height wrapper here to control the card growth */}
              <div className="w-full h-full mt-4">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden h-[500px] md:h-[500px]`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-sm md:text-base max-w-sm text-left mx-0 text-neutral-500 font-normal dark:text-neutral-300 my-2">
      {children}
    </p>
  );
};

// Fixed height: Added h-48 and overflow control to prevent the large image from pushing height
export const SkeletonOne = () => {
  return (
    <div id="workspace" className="relative flex py-2 px-2 h-full overflow-hidden">
     
        <img
          src="/image.png"
          alt="Excalidraw Interface"
          className="h-full w-full object-cover object-left-top rounded-sm opacity-100"
        />
      
     
    </div>
  );
};

export const SkeletonTwo = () => {
  return (
    <div className="relative flex flex-col items-start p-4 h-72 overflow-hidden bg-neutral-50/50 dark:bg-neutral-900/50 rounded-xl border border-dashed border-neutral-200 dark:border-neutral-800">
      <div className="w-full h-full relative"> 
<div className="absolute top-2 right-2 z-50 flex flex-col gap-2 items-end">
  {/* First Message */}
  <motion.div
    initial={{ x: 20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.5 }}
    className="flex items-center gap-2 bg-white dark:bg-neutral-800 p-2 px-3 rounded-2xl shadow-md border border-neutral-200 dark:border-neutral-700"
  >
    <MessageSquare className="w-3 h-3 text-blue-500" />
    <span className="text-[10px] font-medium text-neutral-600 dark:text-neutral-300">
      Should we use this logo?
    </span>
  </motion.div>

  {/* Second Message (Reply) */}
  <motion.div
    initial={{ x: 20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 1.5 }}
    className="flex items-center gap-2 bg-white dark:bg-neutral-800 p-2 px-3 rounded-2xl shadow-md border border-neutral-200 dark:border-neutral-700"
  >
    <MessageSquare className="w-3 h-3 text-green-500" />
    <span className="text-[10px] font-medium text-neutral-600 dark:text-neutral-300">
      Looks great, scaling it!
    </span>
  </motion.div>
</div>

        {/* Animated Cursor 1 (Alex) */}
        <motion.div
          animate={{ x: [20, 100, 60], y: [80, 140, 100] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute z-40 flex flex-col items-start gap-1"
        >
          <CursorIcon color="#3b82f6" />
          <span className="bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow-sm">Alex</span>
        </motion.div>

        {/* Animated Cursor 2 (Sarah) */}
        <motion.div
          animate={{ x: [220, 160, 200], y: [40, 90, 50] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute z-40 flex flex-col items-start gap-1"
        >
          <CursorIcon color="#ef4444" />
          <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow-sm">Sarah</span>
        </motion.div>

        {/* Board Simulation */}
        <div className="w-full h-full mt-4 border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-lg bg-white dark:bg-black p-4">
           <img 
            src="/image.png" 
            className="w-full h-full object-cover opacity-90 dark:opacity-10 grayscale" 
            alt="canvas" 
           />
        </div>
      </div>
    </div>
  );
};

// Consistent styling for the sharing/sync preview
export const SkeletonThree = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center relative bg-transparent overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-4 p-8">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <circle cx="18" cy="5" r="3"/>
            <circle cx="6" cy="12" r="3"/>
            <circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center max-w-xs">
          Share your board with a single link. Anyone, anywhere, any device.
        </p>
        <div className="flex gap-2 mt-2">
          {["US", "EU", "APAC"].map((region) => (
            <span key={region} className="text-xs px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
              {region}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const CursorIcon = ({ color }: { color: string }) => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
    <path d="M5.6691 12.3174L2.8851 3.7928C2.51501 2.65715 3.65715 1.51501 4.7928 1.8851L13.3174 4.6691C14.4551 5.04017 14.4714 6.64336 13.3424 7.03741L8.9631 8.5641L7.43641 12.9434C7.04236 14.0724 5.43917 14.0561 5.6691 12.3174Z" fill={color} />
  </svg>
);