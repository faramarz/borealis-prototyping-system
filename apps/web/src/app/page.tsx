import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Borealis Design System Prototyper</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Welcome to Borealis</h2>
          <p className="text-lg mb-4">
            Borealis is a modern prototyping system designed to accelerate your design system development.
            It provides a comprehensive set of tools and components to help you build, test, and iterate
            on your design system with ease.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Component Library with Storybook Integration</li>
            <li>Design Token Management</li>
            <li>Interactive Prototyping</li>
            <li>Accessibility Testing</li>
            <li>Responsive Design Support</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p className="mb-6">
            Explore our component library and start prototyping with Borealis. Our Storybook environment
            provides a comprehensive view of all available components, their variations, and usage examples.
          </p>
          <Link
            href="/storybook"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Component Library
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
          <p className="mb-4">
            Our documentation provides detailed information about:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Component Usage Guidelines</li>
            <li>Design System Principles</li>
            <li>Accessibility Standards</li>
            <li>Development Workflow</li>
          </ul>
        </section>
      </div>
    </main>
  );
} 