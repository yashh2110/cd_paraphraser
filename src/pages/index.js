import Head from "next/head";

import { Box, Heading, Skeleton } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Testimonials from "@/components/testimonial/Testimonials";
import Faq from "@/components/faq/Faq";
import SeoTable from "@/components/seo/SeoTable";
import ContentBlock from "@/components/content-block/ContentBlock";
import Footer from "@/components/footer/Footer";
const Playground = dynamic(
  () => import("@/components/paraphraser/playground/Playground"),
  {
    ssr: false,
    loading: () => (
      <Skeleton
        w={["90%", "90%", "70%"]}
        h={"55vh"}
        mt={["20px"]}
        endColor="var(--border-color)"
        startColor="var(--secondary-background-color)"
      ></Skeleton>
    ),
  }
);
export default function Home() {
  return (
    <>
      <Head>
        <title>Paraphrasing Tool - Online Paraphraser</title>
        <meta
          name="description"
          content="Free online paraphrasing tool that helps in Paraphrasing. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box
          mt={["15px", "25px"]}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Box w={["90%", "90%", "81%"]}>
            <Heading
              as="h1"
              fontSize={["32px"]}
              fontWeight={"semibold"}
              lineHeight={"48px"}
              letterSpacing={"0.01em"}
            >
              Paraphraser
            </Heading>
            <Playground />
          </Box>
          <ContentBlock
            theme="secondary"
            titleFormat="h1"
            titleFontSize={["32px"]}
            title={"Free Online Paraphrasing Tool"}
            content={[
              "Paraphrasing Tool addresses and simplifies your message. As writing deman standards continue to evolve in the digital landscape, there is an escalating need for practical solutions. At Paraphrasing Tool, we aim to radically revolutionize your writing experience by helping you transform the text into clear, compelling, and 100% original content",
              "Creating unique and engaging content is vital to carve out a niche in the crowded digital space. Our tool is designed to make this task less overwhelming, allowing you to focus on what truly matters—delivering value through your content.",
            ]}
          />
          <SeoTable />
          <ContentBlock
            theme="secondary"
            titleFormat="h2"
            titleFontSize={["28px"]}
            titleLineHeight={"42px"}
            title={"No Word Limit: Embrace the Freedom of Expression"}
            content={[
              "Unlike other tools that restrict the volume of words you can paraphrase at once, our tool values your freedom of expression. It invites you to paraphrase a sentence, a paragraph, or an entire article without constraints. This liberating feature allows you to work without limitations, enhancing your productivity.",
            ]}
          />
          <ContentBlock
            // theme="secondary"
            titleFormat="h2"
            titleFontSize={["28px"]}
            titleLineHeight={"42px"}
            title={"AI-Powered: Harness the Power of Advanced Technology"}
            content={[
              "Our paraphrasing tool is powered by cutting-edge AI technology. This isn't a basic word replacement tool—it comprehends the context of your text and rewrites it while maintaining the essence and context. This level of sophistication ensures your content is not just unique but also meaningful and coherent.",
            ]}
          />
          <ContentBlock
            theme="secondary"
            titleFormat="h2"
            titleFontSize={["28px"]}
            titleLineHeight={"42px"}
            title={"Plagiarism-Free: Maintain Your Credibility"}
            content={[
              "Our tool assists you in generating unique content that effortlessly passes plagiarism checks. This crucial feature allows you to uphold your credibility, an essential factor in building trust with your audience.",
            ]}
          />
          <ContentBlock
            // theme="secondary"
            titleFormat="h2"
            titleFontSize={["28px"]}
            titleLineHeight={"42px"}
            title={
              "User-Friendly Interface: Simplicity is the Ultimate Sophistication"
            }
            content={[
              "Our tool's design hinges on simplicity. It doesn't require special skills to navigate. It's as easy as pasting your text, clicking 'Paraphrase,' and letting our AI do the rest. This simplicity ensures a seamless user experience, making the process of creating unique content enjoyable.",
            ]}
          />

          <ContentBlock
            theme="secondary"
            titleFormat="h2"
            titleFontSize={["28px"]}
            titleLineHeight={"42px"}
            title={"Free to Use: Quality Doesn't Have to Be Expensive"}
            content={[
              "Yes, it's true! Our tool is absolutely free to use.",
              "We firmly believe in democratizing access to quality paraphrasing tools. We don't want your budget to stand in the way of your ability to produce high-quality, unique content.",
            ]}
          />
          <ContentBlock
            // theme="secondary"
            titleFormat="h2"
            titleFontSize={["28px"]}
            titleLineHeight={"42px"}
            title={"How Paraphrasing Tool Works?"}
            content={[
              "Utilizing our paraphrasing tool is a cakewalk. Here's a detailed breakdown of the three steps involved:",
            ]}
            listItems={[
              <p>
                <b>Enter Your Text:</b> Copy and paste your chosen text into our
                paraphrasing tool. It could be a single sentence or multiple
                paragraphs. Our tool is designed to handle it all.
              </p>,
              <p>
                <b>Choose Your Preferred Paraphrasing Mode:</b> We understand
                that not all texts require the same level of paraphrasing.
                Therefore, we provide different paraphrasing modes (Standard,
                Simplify, Formal, Summarise) that you can pick from, depending
                on your specific needs.
              </p>,
              <p>
                <b>Hit 'Paraphrase':</b> Once you've set your preferences, all
                that's left is to click 'Paraphrase'. Our advanced AI will
                swiftly kick into action, analysing your text and generating a
                unique, high-quality version. The output isn't a random
                replacement of words but a well-composed piece that maintains
                the context and meaning of your original text.
              </p>,
            ]}
          />

          {/* <Testimonials /> */}
          <ContentBlock
            theme="secondary"
            titleFormat="h2"
            titleFontSize={["28px"]}
            titleLineHeight={"42px"}
            title={"A Tool for All: Catering to a Wide User Spectrum"}
            content={[
              "Our Free Online Paraphraser is designed with a diverse user base in mind, accommodating the unique needs of:",
            ]}
            listItems={[
              <p>
                <b>Students:</b> Whether you're crafting an argumentative essay
                or a detailed research paper, our tool can help you paraphrase
                your text to avoid plagiarism and improve your writing. It
                allows you to express your ideas in a new light, adding depth to
                your academic papers.
              </p>,
              <p>
                <b>Researchers:</b> Our tool serves as a valuable companion in
                decoding and paraphrasing complex scientific text, making it
                more understandable and engaging. This helps in effectively
                communicating intricate research findings to a broader audience.
              </p>,
              <p>
                <b>Content Writers and Copywriters:</b> Facing writer's block?
                Need to freshen up your content? Our tool can help you overcome
                these challenges, help you bring fresh perspectives to your
                content, and keep it exciting and engaging for your readers.
              </p>,
              <p>
                <b>Digital Marketers:</b> Our tool aids you in creating unique
                and engaging content for your marketing campaigns. Our tool
                ensures that your brand's message stands out in the crowded
                digital marketplace.
              </p>,
              <p>
                <b>Bloggers:</b> As a blogger, you must constantly churn out
                fresh and unique content to keep your readers hooked. Our
                paraphrasing tool can aid in this process, helping you maintain
                reader interest and engagement.
              </p>,
            ]}
          />
          <Faq />
          <ContentBlock
            theme="secondary"
            titleFormat="h2"
            titleFontSize={["28px"]}
            titleLineHeight={"42px"}
            title={"We're Here to Assist You"}
            content={[
              "Feel free to reach out to us with any queries, comments, or feedback. Your thoughts are valuable to us, and we would love to hear from you. We're committed to helping you revolutionize your writing experience.",
            ]}
          />
        </Box>
      </main>
    </>
  );
}
