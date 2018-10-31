// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

import preloader from "spectacle/lib/utils/preloader";

import "prismjs/components/prism-typescript";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import beemanJpg from "../assets/beeman.jpg";
import beemanWorldPng from "../assets/beemanWorld.png";
import nomadDream from "../assets/nomadDream.jpg";
import nomadReality from "../assets/nomadReality.jpg";
import cyfco from "../assets/cyfco.png";
import observableQuote from "../assets/observable-quote.png";

preloader({
  beemanJpg,
  beemanWorldPng,
  nomadDream,
  nomadReality,
  observableQuote,
});


// Require CSS
require("normalize.css");
require("../assets/code-style.css");

const theme = createTheme({
  primary: "#1D2934",
  secondary: "#6F767D",
  tertiary: "#1F9AC5",
  quaternary: "#FEFEFE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const blitzParams = "&hideExplorer=1&hideNavigation=1&view=preview";
const blitzStyles = { width: "100%", height: 600, border: 0 };
const blitz = {
  simple: `https://stackblitz.com/edit/tyrfooyt-simple?embed=1&file=src/app/app.component.ts${blitzParams}`
};

{/*<Slide>*/
}
{/*<iframe src={blitz.simple} style={blitzStyles}></iframe>*/
}
{/*</Slide>*/
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Text size={1} fit caps lineHeight={1} textColor="tertiary">
            RxJS
          </Text>
          <Text size={4} fit caps lineHeight={2} textColor="secondary">
            From zero to hero!
          </Text>
        </Slide>


        <Slide transition={["fade"]} bgColor="primary">
          <Text size={1} fit lineHeight={1} textColor="tertiary">
            beeman 🐝
          </Text>
          <Text size={1} fit lineHeight={1} textColor="tertiary">
            Bram Borggreve
          </Text>

          <Layout>
            <Fit style={{ flex: 15 }}>
              <Image src={beemanJpg} style={{ width: 280, marginTop: 40 }}/>
            </Fit>
            <Fill style={{ flex: 20 }}>
              <List bgColor="primary" textColor="secondary" style={{ listStyleType: "none" }}>
                <ListItem style={{ marginBottom: 20 }}>
                  👨‍💻 Software Developer
                </ListItem>
                <ListItem style={{ marginBottom: 20 }}>
                  👨‍🏫 Instructor
                </ListItem>
                <ListItem style={{ marginBottom: 20 }}>
                  📖 Author
                </ListItem>
                <ListItem style={{ marginBottom: 20 }}>
                  🇳🇱 The Netherlands
                </ListItem>
                <ListItem style={{ marginBottom: 20 }}>
                  🛫 Digital Nomad
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>


        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={beemanWorldPng} style={{ width: "100%" }}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={nomadDream} style={{ width: "100%" }}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={nomadReality} style={{ width: "100%" }}/>
        </Slide>


        <Slide transition={["fade"]} bgColor="primary">
          <Text size={1} fit caps lineHeight={1} textColor="tertiary">
            Follow me!
          </Text>
          <Text size={4} lineHeight={1} textColor="secondary">
            <br/>
            <br/>

            <i className="fa fa-fw fa-twitter"/> beeman_nl
            &nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fa fa-fw fa-github"/> beeman

            <br/>
            <br/>

            nomadlist.com/@beeman

          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} caps fit textColor="secondary">
            Why RxJS?
          </Heading>

          <Text size={4} lineHeight={2} fit caps textColor="tertiary">
            What problem does it solve?
          </Text>

          <Appear>
            <Text size={4} lineHeight={2} fit caps textColor="tertiary">
              Asynchronicity!
            </Text>
          </Appear>
        </Slide>

        <CodeSlide
          bgColor="primary"
          textColor="secondary"
          transition={["fade"]}
          lang="ts"
          code={require("raw-loader!../assets/code/callbacks.ts")}
          ranges={[
            { loc: [0, 100], title: "Callbacks" },
            { loc: [0, 9] },
            { loc: [10, 19] },
          ]}
        />

        <CodeSlide
          bgColor="primary"
          textColor="secondary"
          transition={["fade"]}
          lang="ts"
          code={require("raw-loader!../assets/code/promises.ts")}
          ranges={[
            { loc: [0, 100], title: "Promises" },
            { loc: [0, 15] },
            { loc: [16, 22] },
          ]}
        />

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={observableQuote} style={{ width: "100%" }}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps fit textColor="secondary">
            Observables
          </Heading>

          <List bgColor="primary" textColor="tertiary">
            <ListItem style={{ marginBottom: 20 }}>
              Return a stream of one or more values
            </ListItem>
            <ListItem style={{ marginBottom: 20 }}>
              Can be transformed through operators
            </ListItem>
            <ListItem style={{ marginBottom: 20 }}>
              Are lazy:
            </ListItem>
            <ListItem style={{ marginBottom: 20 }}>
              You need to subscribe()
            </ListItem>
            <ListItem style={{ marginBottom: 20 }}>
              You need to unsubscribe()
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} caps fit textColor="secondary">
            Let's get started!
          </Heading>

          <Text size={4} lineHeight={2} fit caps textColor="tertiary">
            Clone the repo from GitHub
          </Text>

          <Text size={4} lineHeight={2} fit caps textColor="tertiary">
            Or run it in StackBlitz
          </Text>

          <Text size={4} lineHeight={2} fit caps textColor="tertiary">
            <a href="https://github.com/beeman" target="_blank" style={{color: 'white'}}>
              https://github.com/beeman
            </a>
          </Text>

        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Image src={cyfco} style={{ width: '100%', marginTop: 50, marginBottom: 50 }} />
          <Text size={2} lineHeight={1} textColor="primary">
            <i className="fa fa-fw fa-twitter"/> CYF_CO
          </Text>
        </Slide>


        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={1} caps fit textColor="tertiary">
            THANK YOU!
          </Heading>
          <Text size={4} lineHeight={1} textColor="tertiary">
            <br/>
            <br/>

            <i className="fa fa-fw fa-twitter"/> beeman_nl
            &nbsp;&nbsp;&nbsp;&nbsp;
            <i className="fa fa-fw fa-github"/> beeman
          </Text>
        </Slide>

      </Deck>
    );
  }
}
