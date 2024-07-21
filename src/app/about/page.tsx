import Container from '@/components/Container';
import Header from '@/components/Header';
import { MainNav } from '@/components/main-nav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Information about me',
};

export default async function AboutPage() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
        <Container>
          <MainNav />
          <Header>
            <h1 className="title font-semibold text-2xl tracking-tighter mt-4 capitalize">
              About
            </h1>
          </Header>
        </Container>
      </div>
      <div className="container max-w-6xl py-6 lg:py-10">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <section
            id="about"
            className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-10"
          >
            <h1 className="text-4xl font-bold mb-6 text-teal-600 dark:text-teal-400">
              About K3strel Sec
            </h1>
            <p className="text-lg mb-4">
              Welcome to K3strel Sec, your go-to source for all things
              cybersecurity! Our mission is to empower individuals and
              organizations with the knowledge and tools they need to stay ahead
              of cyber threats.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-teal-500 dark:text-teal-300">
              What We Cover
            </h2>
            <p className="text-lg mb-4">
              At K3strel Sec, we delve into a wide range of topics to provide
              comprehensive insights and practical advice:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>
                <strong>Penetration Testing:</strong> Techniques and
                methodologies to identify and address security vulnerabilities.
              </li>
              <li>
                <strong>Bug Bounty:</strong> Strategies and tips for successful
                participation in bug bounty programs.
              </li>
              <li>
                <strong>OSINT (Open Source Intelligence):</strong> Tools and
                techniques for gathering and analyzing publicly available
                information.
              </li>
              <li>
                <strong>Ethical Hacking:</strong> Best practices and real-world
                scenarios to enhance your ethical hacking skills.
              </li>
              <li>
                <strong>Cybersecurity News and Updates:</strong> The latest
                trends, threats, and industry news to keep you informed.
              </li>
              <li>
                <strong>Infosec (Information Security):</strong> Key practices
                and strategies for effective risk management and data
                protection.
              </li>
              <li>
                <strong>Tools and Resources:</strong> Essential cybersecurity
                tools and educational materials to enhance your skills.
              </li>
              <li>
                <strong>CTF (Capture The Flag):</strong> Guides and tips for
                participating in CTF competitions to sharpen your cybersecurity
                abilities.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-teal-500 dark:text-teal-300">
              Our Mission
            </h2>
            <p className="text-lg mb-4">
              Cybersecurity is constantly evolving, and staying informed is
              crucial. K3strel Sec aims to provide valuable content that helps
              you navigate the complex world of cybersecurity, from learning the
              basics to mastering advanced techniques. Whether you're a beginner
              or an experienced professional, our articles are designed to
              support your growth and success in the field.
            </p>

            <p className="text-lg">
              Thank you for visiting K3strel Sec. Together, let's build a safer
              digital world.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
