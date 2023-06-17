import React from "react";
import styles from "@/styles/Home.module.css";
import {
  CodeBlock,
  CopyBlock,
  dracula,
  googlecode,
  solarizedLight,
} from "react-code-blocks";
import Head from "next/head";
import Link from "next/link";
import ContentBlock from "@/components/content-block/ContentBlock";
function Cookie() {
  return (
    <>
      <Head>
        <title>Cookie Policy | ParaphrasingTool.APP</title>
        <meta
          name="description"
          content="Cookie Policy of ParaphrasingTool.APP"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <ContentBlock
          theme="primary"
          titleFormat="h1"
          titleFontSize={["32px"]}
          title={"Cookie Policy"}
          pb={1}
          content={[
            <>
              This is the Cookie Policy for ContentDetector, accessible from{" "}
              <Link
                className={styles.link_style}
                href="https://paraphrasingtool.app"
                rel="noreferrer"
              >
                https://paraphrasingtool.app
              </Link>
            </>,
          ]}
        />
        <ContentBlock
          theme="primary"
          titleFormat="h2"
          titleFontSize={["22px"]}
          py={1}
          titleLineHeight={"42px"}
          title={"What Are Cookies"}
          content={[
            "As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or ‘break’ certain elements of the sites functionality.",
          ]}
        />
        <ContentBlock
          theme="primary"
          titleFormat="h2"
          titleFontSize={["22px"]}
          py={1}
          titleLineHeight={"42px"}
          title={"How We Use Cookies"}
          content={[
            "We use cookies for a variety of reasons detailed below. Unfortunately, in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.",
          ]}
        />
        <ContentBlock
          theme="primary"
          titleFormat="h2"
          titleFontSize={["22px"]}
          titleLineHeight={"42px"}
          py={1}
          title={"Disabling Cookies"}
          content={[
            "You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.",
          ]}
        />
        <ContentBlock
          theme="primary"
          titleFormat="h2"
          titleFontSize={["22px"]}
          titleLineHeight={"42px"}
          py={1}
          title={"The Cookies We Set"}
          listItems={[
            "Email newsletters related cookiesThis site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.",
            "Forms related cookiesWhen you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.",
          ]}
        />
        <ContentBlock
          theme="primary"
          titleFormat="h2"
          titleFontSize={["22px"]}
          titleLineHeight={"42px"}
          py={1}
          title={"Third Party Cookies"}
          content={[
            "In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.",
          ]}
          listItems={[
            "This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.For more information on Google Analytics cookies, see the official Google Analytics page.",
            "From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most.",
            "As we sell products it’s important for us to understand statistics about how many of the visitors to our site actually make a purchase and as such this is the kind of data that these cookies will track. This is important to you as it means that we can accurately make business predictions that allow us to monitor our advertising and product costs to ensure the best possible price.",
            "The Google AdSense service we use to serve advertising uses a DoubleClick cookie to serve more relevant ads across the web and limit the number of times that a given ad is shown to you.For more information on Google AdSense see the official Google AdSense privacy FAQ.",
            "We use adverts to offset the costs of running this site and provide funding for further development. The behavioural advertising cookies used by this site are designed to ensure that we provide you with the most relevant adverts where possible by anonymously tracking your interests and presenting similar things that may be of interest.",
            "Several partners advertise on our behalf and affiliate tracking cookies simply allow us to see if our customers have come to the site through one of our partner sites so that we can credit them appropriately and where applicable allow our affiliate partners to provide any bonus that they may provide you for making a purchase.",
            "We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work the following social media sites including; List the social networks whose features you have integrated with your site, will set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.",
          ]}
        />
        <ContentBlock
          theme="primary"
          titleFormat="h2"
          titleFontSize={["22px"]}
          titleLineHeight={"42px"}
          py={1}
          title={"More Information"}
          content={[
            "Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren’t sure whether you need or not it’s usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.",
            "However if you are still looking for more information then you can contact us through one of our preferred contact methods:",
          ]}
          listItems={["Email: hello@paraphrasingtool.app"]}
        />
      </>
    </>
  );
}

export default Cookie;
