import Container from '@/components/Container';
import Header from '@/components/Header';
import { MainNav } from '@/components/main-nav';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
  description: 'Information k3strel sec',
};

export default async function AboutPage() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
        <Container>
          <MainNav />
          <Header>
            <h1 className="title font-semibold text-2xl tracking-tighter mt-4 capitalize">
              About Me
            </h1>
          </Header>
        </Container>
      </div>
      <div className="container max-w-6xl py-6 lg:py-10">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="min-w-48 max-w-48 flex flex-col gap-2">
            <p className="text-muted-foreground text-center break-words">
              K3strel Sec
            </p>
            <Image
              src="/images/k3strelsec-og.png"
              alt="An Introduction to Penetration Testing"
              width={400}
              height={400}
              className="w-auto h-auto mb-4 rounded-lg"
            />
          </div>
          <p className="text-muted-foreground text-lg py-4">
            K3strel Sec is a dedicated platform for delivering in-depth
            cybersecurity knowledge and resources. Our blog encompasses a broad
            spectrum of topics, including penetration testing, bug bounty
            programs, OSINT, ethical hacking, and current cybersecurity
            developments. <br className="mb-2"></br> We are committed to
            providing rigorous and insightful content designed to assist both
            novices and seasoned professionals in advancing their expertise and
            staying abreast of emerging threats. Our objective is to contribute
            to the fortification of digital security through informed practice
            and continual learning.<br className="mb-2"></br> We invite you to
            engage with our material and leverage it to enhance your
            cybersecurity capabilities. For inquiries or further discussion,
            please do not hesitate to contact us.
          </p>
        </div>
      </div>
    </>
  );
}
