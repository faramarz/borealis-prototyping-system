import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <h1 className="text-4xl font-bold text-center">
        Welcome to the Borealis Prototyping System
      </h1>
      <p className="text-xl text-center max-w-2xl">
        A modern environment for building and testing UI prototypes with Next.js, 
        Tailwind CSS, and Storybook.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
        <div className="p-6 border rounded-lg bg-borealis-50 hover:bg-borealis-100 transition-colors">
          <h2 className="text-xl font-semibold text-borealis-700">UI Components</h2>
          <p className="mt-2 text-borealis-800">Build beautiful, reusable UI components with Tailwind CSS and shadcn/ui.</p>
        </div>
        <div className="p-6 border rounded-lg bg-borealis-50 hover:bg-borealis-100 transition-colors">
          <h2 className="text-xl font-semibold text-borealis-700">Component Stories</h2>
          <p className="mt-2 text-borealis-800">Document and test your components in isolation with Storybook.</p>
        </div>
      </div>
    </div>
  );
}
