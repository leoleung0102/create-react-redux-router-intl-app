import React from 'react'
import {push} from 'react-router-redux'
import {connect} from 'react-redux'
import {FormattedMessage} from 'react-intl';
import ImageHeroHeader from '../components/HeroHeader/ImageHeroHeader';
import Section from '../components/Section/Section';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import ResponsiveImage from '../components/ResponsiveImage/ResponsiveImage';
import ResponsiveEmbeddedYoutube from '../components/ResponsiveEmbeddedYoutube/ResponsiveEmbeddedYoutube';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Card from 'antd/lib/card';
import Button from 'antd/lib/button';

const Home = props => (
    <div>
        <ImageHeroHeader
            minHeight={85}
            backgroundImageUrl={
                'https://res.cloudinary.com/dxlb0hdxg/image/upload/v1508857581/Web_Header_2_-min_xpf4gz.jpg'
            }
        >
            <Row
                type="flex"
                justify="center"
                align="middle"
            >
                <Col xs={20} md={20}>
                    <h1>
                        <FormattedMessage
                            id="home-header-title-1"
                            defaultMessage="Project Title"
                        />
                    </h1>
                </Col>
            </Row>
            <Row
                type="flex"
                justify="center"
                align="middle"
            >
                <Col xs={20} md={20}>
                    <Button size="large" onClick={() => props.changePage()} type="primary">Go to about page via
                        redux</Button>
                </Col>
            </Row>
        </ImageHeroHeader>
        <Section>
            <SectionHeader>
                <h2>
                    <FormattedMessage
                        id="home-section-title-1"
                        defaultMessage="Section Title"
                    />
                </h2>
                <p>
                    <FormattedMessage
                        id="home-section-desc-1"
                        defaultMessage="Description"
                    />
                </p>
            </SectionHeader>
            <Row type="flex" justify="space-around" align="middle">
                <Col span={4}>
                    <ResponsiveImage alt="image" src="http://res.cloudinary.com/dxlb0hdxg/image/upload/v1508594031/Design_dyphpw.svg"/>
                </Col>
                <Col span={4}>
                    <ResponsiveImage alt="image" src="http://res.cloudinary.com/dxlb0hdxg/image/upload/v1508594031/Design_dyphpw.svg"/>
                </Col>
                <Col span={4}>
                    <ResponsiveImage alt="image" src="http://res.cloudinary.com/dxlb0hdxg/image/upload/v1508594031/Design_dyphpw.svg"/>
                </Col>
                <Col span={4}>
                    <ResponsiveImage alt="image" src="http://res.cloudinary.com/dxlb0hdxg/image/upload/v1508594031/Design_dyphpw.svg"/>
                </Col>
            </Row>
        </Section>
        <Section backgroundColor="#CECECE">
            <SectionHeader>
                <h2>
                    <FormattedMessage
                        id="home-section-title-2"
                        defaultMessage="Section Title"
                    />
                </h2>
            </SectionHeader>
            <Row gutter={16} type="flex" justify="space-around" align="middle">
                <Col span={6}>
                    <Card title="Card title">Card content</Card>
                </Col>
                <Col span={6}>
                    <Card title="Card title">Card content</Card>
                </Col>
                <Col span={6}>
                    <Card title="Card title">Card content</Card>
                </Col>
                <Col span={6}>
                    <Card title="Card title">Card content</Card>
                </Col>
            </Row>
            <Row gutter={16} type="flex" justify="space-around" align="middle" >
                <Col span={3}>
                </Col>
                <Col span={6}>
                    <Card title="Card title">Card content</Card>
                </Col>
                <Col span={6}>
                    <Card title="Card title">Card content</Card>
                </Col>
                <Col span={6}>
                    <Card title="Card title">Card content</Card>
                </Col>
                <Col span={3}>
                </Col>
            </Row>
        </Section>
        <Section>
            <SectionHeader>
                <h2>
                    <FormattedMessage
                        id="home-section-title-3"
                        defaultMessage="Section Title"
                    />
                </h2>
            </SectionHeader>
            <Row type="flex" justify="space-around" align="middle">
                <Col span={16}>
                    <ResponsiveEmbeddedYoutube src="https://www.youtube.com/embed/a1lVf3jZdi8"></ResponsiveEmbeddedYoutube>
                </Col>
            </Row>
        </Section>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    changePage: () => dispatch(push('/about-us'))
});

export default connect(
    null,
    mapDispatchToProps
)(Home)