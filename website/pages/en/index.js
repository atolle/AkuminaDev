/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Akumina Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/ak_logo.png`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('Akumina-Framework-4-5-0-0-Overview.html')}>Akumina 4.5</Button>
            <Button href={docUrl('Akumina-Widget-Builder.html')}>Akumina Widget Builder</Button>
            <Button href={docUrl('yo-akumina.html')}>Yo Akumina</Button>
            <Button href={docUrl('Site-Deployer-Continuous-Site-Package-Deployment-via-a-console-app.html')}>Site Deployer</Button>
            <Button href={docUrl('AppManager-Enabling-Load-Balancing.html')}>App Manager</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'Feature One',
          },
          {
            content: 'The content of my second feature',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Feature Two',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    const CommunityBrand = () => (
      <Block>
        {[
          {
            content:
              'Startup life! We currently have a small team on-site working on developer experience. And, this sight will be our primary conduit to provide authoritative support on this aspect of our product. '+
              'Please visit the [**Akumina Community Site**](https://community.akumina.com/) for detailed information and interactive discussion about the product from a truly product perspective.',
            image: `${baseUrl}img/undraw_startup_life_2du2.svg`,
            imageAlign: 'left',
            title: 'Welcome to the Akumina Documentation for developers!',
          },
        ]}
      </Block>
    );

    const Landing = () => (
      <Block background="light">
        {[
          {
            content:
              'We are working on moving content over to this new project... '+
              'Please visit [**AkuminaTraining**](https://github.com/akumina/AkuminaTraining/wiki) for documentation not yet moved here',
            image: `${baseUrl}img/undraw_online_page_cq94.svg`,
            imageAlign: 'right',
            title: 'Check back for regular updates to the blog and docs!',
          },
        ]}
      </Block>
    );

    const Akx = () => (
      <Block id="try">
        {[
          {
            content:
              'We are working on improving our developer experience. ' +
              'Please check back regularly for updates and additional materials',
            image: `${baseUrl}img/undraw_youtube_tutorial_2gn3.svg`,
            imageAlign: 'left',
            title: 'More tutorials and enhancements to come!',
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          {/* TODO: keeping these 
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />*/}
        </div>
        <CommunityBrand />
        <Landing />
        <Akx />
      </div>
    );
  }
}

module.exports = Index;
